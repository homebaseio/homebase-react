(ns homebase.cache
  "A homebase cache intermediates between a view layer like React or Reagent and a data layer like Datascript or Datahike.
   
   It ensures that as data changes the view is incremently updated to reflect the most recent state while maintaining consistency/transactionality, performing all updates for a transaction simultaneously.
   
   The cache takes the form of a map where components (identified by reactive-lookup-uids) can subscribe to updates of specific data by associng change-handlers into the cache.

   E.g.
   
   ```clojure
   {:ea
   {[\"EntityId\" :attribute]
    {\"uuid-for-a-component-or-'hook'\" ; multiple components may subscribe to changes in the same datom so each gets their own change-handler
     (fn on-entity-attr-change-handler-fn
       [{:db-after ; the db value that corresponds with this update. Should be used by the consuming component to update the view so it stays in sync because all change-handlers use the same DB snapshot for the same TX.
         :datom ; the updated datom
         :reactive-lookup-id \"uuid-for-a-component-or-'hook'\"}]
     ; INSERT code to update the view in this component with the newest state of this datom
       )}}
   :q
   {'[:find ?e ?a ?v
      :where [?e ?a ?v]]
    {\"uuid-for-a-component-or-'hook'\" ; multiple components may subscribe to changes in the same query so each gets their own change-handler
     (fn on-query-change-handler-fn
       [{:db-after ; the db value that corresponds with this update. Should be used by the consuming component to update the view so it stays in sync because all change-handlers use the same DB snapshot for the same TX.
         :reactive-lookup-id \"uuid-for-a-component-or-'hook'\"}]
     ; INSERT code to update the view with the latest results of the query
       )}}}
   ```
   
   The cache takes care of appropriately invoking change-handlers after every transaction.
   "
  (:refer-clojure :exclude [assoc dissoc])
  (:require
   [datascript.core]
   [datascript.db]))

(defn create-conn
  "Returns a homebase.cache in an atom."
  []
  (atom
   {:ea {}
    :q {}}))

(defn assoc
  "Helper to assoc a change-handler into the cache.
   
   Usage:
   ```clojure
   ; assoc to the Entity cache
   (homebase.cache/assoc cache :ea [1 :attr] \"a uid for the call site\" (fn change-handler [...] ...))
   
   ; assoc to the Query cache
   (homebase.cache/assoc cache :q '[:find ... :where ...] \"a uid for the call site\" (fn change-handler [...] ...))
   ```"
  [cache cache-type lookup site-id change-handler]
  (assoc-in cache [cache-type lookup site-id] change-handler))

(defn dissoc
  [cache cache-type lookup site-id]
  (let [cache (update-in cache [cache-type lookup] clojure.core/dissoc site-id)]
    (if (empty? (get-in cache [cache-type lookup]))
      (update cache cache-type clojure.core/dissoc lookup)
      cache)))

(defn create-listener
  "Returns a db listener function that invokes all subscribed change-handlers in the cache when a datom is transacted.
   
   Entity Attribute cache updates are mostly complete and dispatch on the smallest possible set of change-handlers.
   
   Query cache updates are NOT complete and all of them dispatch on every transaction regardless of whether the transaction can be infered to change the results of a query or not. This is tends to be fine for datasets with thousands of datoms, but could be expensive for applications with lots of datoms and lots of complex queries. Improvements via differential datalog need to be investigated."
  [cache-conn]
  (fn [{:keys [tx-data db-after] :as a}]
    (let [cache @cache-conn
          ;; The EA change-handler only needs to be triggered once for each reactive-lookup-uid.
          ;; NOTE: this is complected with knowledge of how homebase.reagent currently handles updates and a clearer seperation of concerns should probably be drawn. But for now it's easier to just do this check here.
          triggered-ea-handlers (atom #{})]
      ;; EA handlers
      (doseq [[e a :as datom] tx-data]
        (let [subscriptions (get-in cache [:ea [e a]])]
          (doseq [[reactive-lookup-uid change-handler] subscriptions]
            (when (not (get @triggered-ea-handlers reactive-lookup-uid))
              (swap! triggered-ea-handlers conj reactive-lookup-uid)
              (change-handler {:db-after db-after
                               :datom datom
                               :reactive-lookup-uid reactive-lookup-uid})))))
      ;; Query handlers
      ;; TODO: dispatch on change-handlers more judiciously instead of on every transaction. 
      ;;       See work on incremental view manintinence e.g. https://github.com/sixthnormal/clj-3df
      (let [subscriptions (mapcat seq (vals (:q cache)))]
        (doseq [[reactive-lookup-uid change-handler] subscriptions]
          (change-handler {:db-after db-after
                           :reactive-lookup-uid reactive-lookup-uid}))))))

(defn db-conn-type [db-conn]
  (if (instance? cljs.core/Atom db-conn)
    (type @db-conn)
    (type db-conn)))

(defmulti connect!
  "Connect the cache to a database connection and listen to changes in the transaction log."
  (fn [cache-conn db-conn] (db-conn-type db-conn)))
(defmethod connect! datascript.db/DB [cache-conn db-conn]
  (swap! db-conn with-meta (merge (meta @db-conn) {::conn cache-conn}))
  (datascript.core/listen! db-conn ::connection (create-listener cache-conn)))

(defmulti disconnect!
  "Disconnect the transaction log listener."
  (fn [db-conn] (db-conn-type db-conn)))
(defmethod disconnect! datascript.db/DB [db-conn]
  (swap! db-conn with-meta (clojure.core/dissoc (meta @db-conn) ::conn))
  (datascript.core/unlisten! db-conn ::connection))

(comment
  (do
    (def cache-conn (create-conn))
    (def db-conn (datascript.core/create-conn {}))
    (connect! cache-conn db-conn)
    (swap! cache-conn assoc-ea [1 :a] "abc123" #(print "yolo" %)))
  (datascript.core/transact! db-conn [{:a "a" :b "b" :c "c"}])
  (datascript.core/transact! db-conn [[:db/retract 1 :a]])
  (datascript.core/transact! db-conn [[:db/retractEntity 1]])
  (swap! cache-conn dissoc-ea [1 :a] "abc123")
  (disconnect! db-conn))