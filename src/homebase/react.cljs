(ns homebase.react
  (:require
   ["react" :as react]
   [clojure.string]
   [cljs.reader]
   [goog.object]
   [clojure.set]
   [homebase.js :as hbjs]
   [homebase.cache :as hbc]
   [nano-id.core :refer [nano-id]]
   [datascript.core :as d]
   [datascript.impl.entity :as de]
   [homebase.datalog-console :as datalog-console]))

(defn try-hook [hook-name f]
  (if hbjs/*debug*
    (f)
    (try (f)
         (catch js/Error e
           (throw
            (js/Error.
             (condp re-find (goog.object/get e "message")
               #"No protocol method IDeref.-deref defined for type undefined"
               "HomebaseProvider context unavailable. <HomebaseProvider> must be declared by a parent component before homebase-react hooks can be used."
               (str (goog.object/get e "message") "\n"
                    (some->> (goog.object/get e "stack")
                             (re-find (re-pattern (str hook-name ".*\\n(.*)\\n?")))
                             (second)
                             (clojure.string/trim))))))))))

(defn datom-select-keys [d]
  #js [(:e d) (str (:a d)) (:v d) (:tx d) (:added d)])

(defn datoms->js [datoms]
  (-> datoms
      into-array
      (.map datom-select-keys)))

;; (defn datoms->json [datoms]
;;   (reduce
;;    (fn [acc {:keys [e a v]}]
;;      (assoc-in acc [e (namespace a) (name a)] v))
;;    {} datoms))

(defonce ^:export homebase-context (react/createContext))

(def base-schema
  {:db/ident {:db/unique :db.unique/identity}
   :homebase.array/ref {:db/type :db.type/ref
                        :db/cardinality :db.cardinality/one}})

(defn ^:export HomebaseProvider [props]
  (let [schema (or (goog.object/getValueByKeys props #js ["config" "schema"])
                   (goog.object/getValueByKeys props #js ["config" "lookupHelpers"]))
        initial-tx (goog.object/getValueByKeys props #js ["config" "initialData"])
        debug (goog.object/getValueByKeys props #js ["config" "debug"])
        _ (when debug (set! hbjs/*debug* debug))
        [initializing? setInitializing?] (react/useState true)
        db-conn (react/useMemo
                 #(d/create-conn (if schema
                                   (merge (hbjs/js->schema schema) base-schema)
                                   base-schema))
                 #js [])
        cache-conn (react/useMemo
                    #(hbc/create-conn)
                    #js [])]
    (react/useEffect
     (fn []
       (hbc/connect! cache-conn db-conn)
       (datalog-console/init! {:conn db-conn})
       (when initial-tx (hbjs/transact! db-conn initial-tx))
       (setInitializing? false)
       #(hbc/disconnect! db-conn))
     #js [])
    (if initializing?
      ""
      (react/createElement
       (goog.object/get homebase-context "Provider")
       #js {:value #js {:db-conn db-conn :cache-conn cache-conn}}
       (goog.object/get props "children")))))

(defn ^:export useClient []
  (let [{:strs [db-conn]} (js->clj (react/useContext homebase-context))
        key (react/useMemo rand #js [])
        client (react/useMemo
                (fn []
                  #js {"dbToString" #(pr-str @db-conn)
                       "dbFromString" #(do (reset! db-conn (cljs.reader/read-string %))
                                           (d/transact! db-conn [] ::silent))
                       "dbToDatoms" #(datoms->js (d/datoms @db-conn :eavt))
                      ;;  "dbToJSON" #(clj->js (datoms->json (d/datoms @db-conn :eavt)))
                       "entity" (fn [lookup] (js/Promise.resolve (hbjs/entity db-conn lookup)))
                       "query" (fn [query & args] (js/Promise.resolve (apply hbjs/q query db-conn args)))
                       "transactSilently" (fn [tx] (try-hook "useClient" #(hbjs/transact! db-conn tx ::silent)))
                       "addTransactListener" (fn [listener-fn] (d/listen! db-conn key #(when (not= ::silent (:tx-meta %))
                                                                                      (listener-fn (datoms->js (:tx-data %))))))
                       "removeTransactListener" #(d/unlisten! db-conn key)})
                #js [])]
    #js [client]))

(defn ^:export useEntity [lookup]
  (let [{:strs [db-conn cache-conn]} (js->clj (react/useContext homebase-context))
        hbjs-entity (try-hook "useEntity" #(hbjs/entity db-conn lookup))
        reactive-lookup-uid (react/useMemo #(nano-id) #js [])
        tracked-ea-pairs (react/useMemo #(atom #{}) #js [])
        [result setResult] (react/useState hbjs-entity)
        after-lookup (react/useCallback
                      (fn after-lookup [{:keys [^de/Entity entity attr]}]
                        (swap! tracked-ea-pairs conj [(:db/id entity) attr])
                        (swap! cache-conn hbc/assoc-ea [(:db/id entity) attr] reactive-lookup-uid
                               (fn change-handler []
                                 (let [entity (try-hook "useEntity" #(hbjs/entity db-conn lookup))
                                       _ (set! ^hbjs/Entity (.-_meta entity)
                                               {:homebase.js/after-lookup (:homebase.js/after-lookup (meta result))})]
                                   (setResult entity))))
                        #_(js/console.log "after lookup" lookup (:db/id entity) attr @cache-conn))
                      #js [result setResult lookup])
        _ (set! ^hbjs/Entity (.-_meta hbjs-entity)
                {:homebase.js/after-lookup after-lookup})]
    (react/useEffect
     (fn []
       #(doseq [ea @tracked-ea-pairs]
          (swap! cache-conn hbc/dissoc-ea ea reactive-lookup-uid)
          #_(js/console.log "dissoc-ea" ea @cache-conn)))
     #js [])
    #js [result]))

(defn ^:export useQuery [query & args]
  (let [{:strs [db-conn cache-conn]} (js->clj (react/useContext homebase-context))
        reactive-lookup-uid (react/useMemo #(nano-id) #js [query args])
        q-result (atom (try-hook "useQuery" #(apply hbjs/q query db-conn args)))
        tracked-ea-pairs (react/useMemo #(atom #{}) #js [])
        [result setResult] (react/useState (hbjs/ids->entities @db-conn @q-result))
        after-lookup (react/useCallback
                      (fn after-lookup [{:keys [^de/Entity entity attr]}]
                        (swap! tracked-ea-pairs conj [(:db/id entity) attr])
                        (swap! cache-conn hbc/assoc-ea [(:db/id entity) attr] reactive-lookup-uid
                               (fn change-handler []
                                 (let [entity (try-hook "useEntity" #(hbjs/entity db-conn lookup))
                                       _ (set! ^hbjs/Entity (.-_meta entity)
                                               {:homebase.js/after-lookup (:homebase.js/after-lookup (meta result))})]
                                   (setResult entity))))
                        #_(js/console.log "after lookup" lookup (:db/id entity) attr @cache-conn))
                      #js [result setResult lookup])]
    (react/useEffect
     (fn []
       (swap! cache-conn hbc/assoc-q query reactive-lookup-uid
              (fn change-handler []
                (let [q-r (try-hook "useQuery" #(apply hbjs/q query db-conn args))]
                  (when (not= q-r @q-result)
                    (reset! q-result q-r)
                    (setResult (hbjs/ids->entities @db-conn @q-result))))))
       #(swap! cache-conn hbc/dissoc-q query reactive-lookup-uid))
     #js [])
    #js [result]))

;; (defn ^:export useEntity [lookup]
;;   (let [{:strs [db-conn]} (js->clj (react/useContext homebase-context))
;;         cached-entities (react/useMemo #(atom {}) #js [])
;;         run-lookup (react/useCallback
;;                     (fn run-lookup []
;;                       (touch-entity-cache
;;                        (try-hook "useEntity" #(hbjs/entity db-conn lookup))
;;                        cached-entities))
;;                     #js [lookup])
;;         [result setResult] (react/useState (run-lookup))
;;         listener (react/useCallback
;;                   (fn entity-listener []
;;                     (let [result (run-lookup)]
;;                       (when (changed? #js [result] @cached-entities false)
;;                         (setResult result))))
;;                   #js [run-lookup])]
;;     (react/useEffect
;;      (fn use-entity-effect []
;;        (let [key (rand)]
;;          (d/listen! db-conn key listener)
;;          #(d/unlisten! db-conn key)))
;;      #js [lookup])
;;     #js [result]))

;; (defn ^:export useQuery [query & args]
;;   (let [{:strs [db-conn]} (js->clj (react/useContext homebase-context))
;;         cached-entities (react/useMemo #(atom {}) #js [])
;;         run-query (react/useCallback
;;                    (fn run-query []
;;                      (let [result (try-hook "useQuery" #(apply hbjs/q query db-conn args))]
;;                        (when (and (not= (count result) (count @cached-entities))
;;                                   (not= 0 (count result)))
;;                          (reset! cached-entities {}))
;;                        (.map result (fn [e] (touch-entity-cache e cached-entities)))))
;;                    #js [query args])
;;         [result setResult] (react/useState (run-query))
;;         listener (react/useCallback
;;                   (fn query-listener []
;;                     (let [result (run-query)]
;;                       (when (changed? result @cached-entities true)
;;                         (setResult result))))
;;                   #js [run-query])]
;;     (react/useEffect
;;      (fn use-query-effect []
;;        (let [key (rand)]
;;          (d/listen! db-conn key listener)
;;          #(d/unlisten! db-conn key)))
;;      #js [query args])
;;     #js [result]))

(defn ^:export useTransact []
  (let [{:strs [db-conn]} (js->clj (react/useContext homebase-context))
        transact (react/useCallback
                  (fn transact [tx] (try-hook "useTransact" #(hbjs/transact! db-conn tx)))
                  #js [])]
    #js [transact]))
