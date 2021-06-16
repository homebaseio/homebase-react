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

(defn debug-msg [return-value & msgs]
  (when (and (number? hbjs/*debug*) (>= hbjs/*debug* 2)) 
    (apply js/console.log "%c homebase-react " "background: yellow" msgs))
  return-value)

(defn changed? [entities cached-entities track-count?]
  (cond
    (and track-count? 
         (not= (count entities) (count cached-entities)))
    (debug-msg true "cache:miss" "count of entities != cache"
               #js {:entities (clj->js entities)
                    :cache (clj->js cached-entities)})

    (and track-count?
         (not (clojure.set/superset?
               (set (keys cached-entities))
               (set (map #(get % "id") entities)))))
    (debug-msg true "cache:miss" "cache not superset of entities"
               #js {:entities (clj->js entities)
                    :cache (clj->js cached-entities)})

    :else
    (reduce
     (fn [_ e]
       (when (let [id (get e "id")
                   cached-e (get cached-entities id)]
               (if (nil? cached-e)
                 (if-not id
                   (reduced false) ; This entity has probably been removed, do not force a rerender
                   (reduced (debug-msg true "cache:miss" "not in cache"
                                       #js {:entity-id id
                                            :entities (clj->js entities)
                                            :cache (clj->js cached-entities)})))
                 (reduce (fn [_ [ks old-v]]
                           (let [e-without-cache (hbjs/Entity. ^de/Entity (.-_entity e) nil nil nil nil)
                                 new-v (.apply (.-get e-without-cache) e-without-cache (into-array ks))]
                             (when (and (not= 0 (compare old-v new-v))
                                        ;; Ignore Entities and arrays of Entities
                                        (not (or (instance? hbjs/Entity new-v)
                                                 (and (array? new-v)
                                                      (= (count new-v) (count old-v))
                                                      (instance? hbjs/Entity (nth new-v 0))))))
                               (reduced (debug-msg true "cache:miss" "value changed"
                                                   #js {:entity-id id
                                                        :attr-path (clj->js ks)
                                                        :e e
                                                        :old-v old-v
                                                        :new-v new-v
                                                        :entities (clj->js entities)
                                                        :cache (clj->js cached-entities)})))))
                         nil cached-e)))
         (reduced true)))
     nil entities)))

(defn cache->js [entity cached-entities]
  (reduce
   (fn [acc [ks v]]
     (goog.object/set acc (str (to-array ks)) v)
     acc)
   #js {} (get @cached-entities (get entity "id"))))

(defn touch-entity-cache [entity cached-entities]
  (let [get-cb (fn [[e ks v]]
                 (if (get e "id")
                   (do
                     (swap! cached-entities assoc-in [(get e "id") ks] v)
                     (when hbjs/*debug*
                       (set! ^js/Object (.-_recentlyTouchedAttributes entity)
                             (cache->js e cached-entities))))
                   (do
                     (reset! cached-entities {})
                     (when hbjs/*debug*
                       (set! ^js/Object (.-_recentlyTouchedAttributes entity) #js {})))))
        _ (when hbjs/*debug* (set! ^js/Object (.-_recentlyTouchedAttributes entity) #js {}))
        ; Use (set! ...) instead of (vary-meta) to preserve the reference to the original entity
        ;; entity (vary-meta entity merge {:Entity/get-cb get-cb})
        _ (set! ^hbjs/Entity (.-_meta entity) {:Entity/get-cb get-cb})]
    entity))

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
    [client]))

(defn ^:export useEntity [lookup]
  (let [{:strs [db-conn cache-conn]} (js->clj (react/useContext homebase-context))
        hbjs-entity (try-hook "useEntity" #(hbjs/entity db-conn lookup))
        reactive-lookup-uid (react/useMemo #(nano-id) #js [])
        tracked-ea-pairs (react/useMemo #(atom #{}) #js [])
        ;; hbr-entity (make-reactive-entity {:entity entity :setEntity setResult :tracked-ea-pairs tracked-ea-pairs :db-conn db-conn :cache-conn cache-conn :reactive-lookup-uid reactive-lookup-uid})
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
    [result]))

(defn ^:export useQuery [query & args]
  (let [{:strs [db-conn]} (js->clj (react/useContext homebase-context))
        cached-entities (react/useMemo #(atom {}) #js [])
        run-query (react/useCallback
                   (fn run-query []
                     (let [result (try-hook "useQuery" #(apply hbjs/q query db-conn args))]
                       (when (and (not= (count result) (count @cached-entities))
                                  (not= 0 (count result)))
                         (reset! cached-entities {}))
                       (.map result (fn [e] (touch-entity-cache e cached-entities)))))
                   #js [query args])
        [result setResult] (react/useState (run-query))
        listener (react/useCallback
                  (fn query-listener []
                    (let [result (run-query)]
                      (when (changed? result @cached-entities true)
                        (setResult result))))
                  #js [run-query])]
    (react/useEffect
     (fn use-query-effect []
       (let [key (rand)]
         (d/listen! db-conn key listener)
         #(d/unlisten! db-conn key)))
     #js [query args])
    [result]))
  
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
;;     [result]))

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
;;     [result]))

(defn ^:export useTransact []
  (let [{:strs [db-conn]} (js->clj (react/useContext homebase-context))
        transact (react/useCallback
                  (fn transact [tx] (try-hook "useTransact" #(hbjs/transact! db-conn tx)))
                  #js [])]
    [transact]))