(ns homebase.cache
  (:require
   [datascript.core :as datascript]
   [datascript.db]))

(defn create-conn []
  (atom
   {:ea {}
    :q {}}))

(defn assoc-ea
  [cache eid-attr-tuple component-uid change-handler]
  (assoc-in cache [:ea eid-attr-tuple component-uid] change-handler))

(defn dissoc-ea
  [cache eid-attr-tuple component-uid]
  (let [cache (update-in cache [:ea eid-attr-tuple] dissoc component-uid)]
    (if (empty? (get-in cache [:ea eid-attr-tuple]))
      (update cache :ea dissoc eid-attr-tuple)
      cache)))

(defn assoc-q
  [cache query component-uid change-handler]
  (assoc-in cache [:q query component-uid] change-handler))

(defn dissoc-q
  [cache query component-uid]
  (let [cache (update-in cache [:q query] dissoc component-uid)]
    (if (empty? (get-in cache [:q query]))
      (update cache :q dissoc query)
      cache)))

(defn create-listener 
  "Returns a listener function that invokes all subscribed change-handlers in the cache when a datom is transacted."
  [cache-conn]
  (fn [{:keys [tx-data]}]
    (let [cache @cache-conn]
      ;; EA handlers
      (doseq [[e a :as datom] tx-data]
        (let [subscriptions (get-in cache [:ea [e a]])]
          (doseq [[component-uid change-handler] subscriptions]
            (change-handler {:datom datom
                             :component-uid component-uid}))))
      ;; Query handlers
      ;; TODO: dispatch on change-handlers more judiciously instead of on every transaction. 
      ;;       See work on incremental view manintinence e.g. https://github.com/sixthnormal/clj-3df
      (let [subscriptions (map (comp flatten seq) (vals (:q cache)))]
        (doseq [[component-uid change-handler] subscriptions]
          (change-handler {:component-uid component-uid}))))))

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