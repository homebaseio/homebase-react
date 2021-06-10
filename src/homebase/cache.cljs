(ns homebase.cache
  (:require
   [datascript.core :as datascript]
   [datascript.db]))

(defn create-conn []
  (atom
   {:ea {}
    :q {}}))

(defn assoc-ea
  [cache eid-attr-tuple reactive-lookup-uid change-handler]
  (assoc-in cache [:ea eid-attr-tuple reactive-lookup-uid] change-handler))

(defn dissoc-ea
  [cache eid-attr-tuple reactive-lookup-uid]
  (let [cache (update-in cache [:ea eid-attr-tuple] dissoc reactive-lookup-uid)]
    (if (empty? (get-in cache [:ea eid-attr-tuple]))
      (update cache :ea dissoc eid-attr-tuple)
      cache)))

(defn assoc-q
  [cache query reactive-lookup-uid change-handler]
  (assoc-in cache [:q query reactive-lookup-uid] change-handler))

(defn dissoc-q
  [cache query reactive-lookup-uid]
  (let [cache (update-in cache [:q query] dissoc reactive-lookup-uid)]
    (if (empty? (get-in cache [:q query]))
      (update cache :q dissoc query)
      cache)))

(defn create-listener
  "Returns a listener function that invokes all subscribed change-handlers in the cache when a datom is transacted."
  [cache-conn]
  (fn [{:keys [tx-data]}]
    (let [cache @cache-conn
          ;; The EA change-handler only needs to be triggered once for each reactive-lookup-uid.
          triggered-ea-handlers (atom #{})]
      ;; EA handlers
      (doseq [[e a :as datom] tx-data]
        (let [subscriptions (get-in cache [:ea [e a]])]
          (doseq [[reactive-lookup-uid change-handler] subscriptions]
            (when (not (get @triggered-ea-handlers reactive-lookup-uid))
              (swap! triggered-ea-handlers conj reactive-lookup-uid)
              (change-handler {:datom datom
                               :reactive-lookup-uid reactive-lookup-uid})))))
      ;; Query handlers
      ;; TODO: dispatch on change-handlers more judiciously instead of on every transaction. 
      ;;       See work on incremental view manintinence e.g. https://github.com/sixthnormal/clj-3df
      (let [subscriptions (mapcat seq (vals (:q cache)))]
        (doseq [[reactive-lookup-uid change-handler] subscriptions]
          (change-handler {:reactive-lookup-uid reactive-lookup-uid}))))))

(defn db-conn-type [db-conn]
  (if (instance? cljs.core/Atom db-conn)
    (type @db-conn)
    (type db-conn)))

(defmulti connect!
  "Connect the cache to a database connection and listen to changes in the transaction log."
  (fn [cache-conn db-conn] (db-conn-type db-conn)))
(defmethod connect! datascript.db/DB [cache-conn db-conn]
  (swap! db-conn with-meta (merge (meta @db-conn) {::conn cache-conn}))
  (datascript/listen! db-conn ::connection (create-listener cache-conn)))

(defmulti disconnect!
  "Disconnect the transaction log listener."
  (fn [db-conn] (db-conn-type db-conn)))
(defmethod disconnect! datascript.db/DB [db-conn]
  (swap! db-conn with-meta (dissoc (meta @db-conn) ::conn))
  (datascript/unlisten! db-conn ::connection))

(comment
  (do
    (def cache-conn (create-conn))
    (def db-conn (datascript/create-conn {}))
    (connect! cache-conn db-conn)
    (swap! cache-conn assoc-ea [1 :a] "abc123" #(print "yolo" %)))
  (datascript/transact! db-conn [{:a "a" :b "b" :c "c"}])
  (datascript/transact! db-conn [[:db/retract 1 :a]])
  (datascript/transact! db-conn [[:db/retractEntity 1]])
  (swap! cache-conn dissoc-ea [1 :a] "abc123")
  (disconnect! db-conn))