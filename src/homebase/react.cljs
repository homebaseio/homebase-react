(ns homebase.react
  (:require
   ["react" :as react]
   [clojure.string]
   [cljs.reader]
   [homebase.js :as hbjs]
   [datascript.core :as d]
   [datascript.impl.entity :as de]))

(defn try-hook [hook-name f]
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
                        (clojure.string/trim)))))))))

(defn changed? [entities cached-entities]
  (if (not= (count entities) (count cached-entities))
    true
    (reduce (fn [_ e]
              (let [e ^de/Entity (.-_entity e)]
                (when (let [cached-e (get cached-entities (get e "id"))]
                        (if (nil? cached-e)
                          (reduced true)
                          (reduce (fn [_ [ks v]]
                                    (when (not= v (get-in e ks))
                                      (reduced true)))
                                  nil cached-e)))
                  (reduced true))))
            nil entities)))

(defn cache->js [entity cached-entities]
  (clj->js
   (reduce
    (fn [acc [ks v]] (assoc-in acc ks v))
    {} (get @cached-entities (get entity "id")))))

(defn touch-entity-cache [entity cached-entities]
  (set! ^js/Object (.-_recentlyTouchedAttributes entity) #js {})
  (set! ^de/Entity (.-_entity entity)
        (vary-meta
         ^de/Entity (.-_entity entity) merge
         {:HBEntity/get-cb
          (fn [[e ks v]]
            (if (get e "id")
              (do
                (swap! cached-entities assoc-in [(get e "id") ks] v)
                (set! ^js/Object (.-_recentlyTouchedAttributes entity) 
                      (cache->js e cached-entities)))
              (do
                (reset! cached-entities {})
                (set! ^js/Object (.-_recentlyTouchedAttributes entity) #js {}))))}))
  entity)

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
  {:db/ident {:db/unique :db.unique/identity}})

(defn ^:export HomebaseProvider [props]
  (let [conn (d/create-conn (if-let [schema (goog.object/getValueByKeys props #js ["config" "schema"])]
                              (merge (hbjs/js->schema schema) base-schema)
                              base-schema))]
    (when-let [tx (goog.object/getValueByKeys props #js ["config" "initialData"])] 
      (hbjs/transact! conn tx))
    (react/createElement
     (goog.object/get homebase-context "Provider") 
     #js {:value conn}
     (goog.object/get props "children"))))

(defn ^:export useClient []
  (let [conn (react/useContext homebase-context)
        key (react/useMemo rand #js [])
        client #js {"dbToString" (react/useCallback
                                  #(pr-str @conn)
                                  #js [])
                    "dbFromString" (react/useCallback
                                    #(do (reset! conn (cljs.reader/read-string %))
                                         (d/transact! conn [] ::silent))
                                    #js [])
                    "dbToDatoms" (react/useCallback
                                  #(datoms->js (d/datoms @conn :eavt))
                                  #js [])
                    ;; "dbToJSON" (react/useCallback
                    ;;             #(clj->js (datoms->json (d/datoms @conn :eavt)))
                    ;;             #js [])
                    "transactSilently" (react/useCallback
                                        (fn [tx] (try-hook "useClient" #(hbjs/transact! conn tx ::silent)))
                                        #js [])
                    "addTransactListener" (react/useCallback
                                           (fn [listener-fn] (d/listen! conn key #(when (not= ::silent (:tx-meta %))
                                                                                   (listener-fn (datoms->js (:tx-data %))))))
                                           #js [])
                    "removeTransactListener" (react/useCallback
                                              #(d/unlisten! conn key)
                                              #js [])}]
    [client]))
  
(defn ^:export useEntity [lookup]
  (let [conn (react/useContext homebase-context)
        cached-entities (react/useMemo #(atom {}) #js [])
        run-lookup (react/useCallback
                    (fn run-lookup []
                      (touch-entity-cache
                       (try-hook "useEntity" #(hbjs/entity conn lookup))
                       cached-entities))
                    #js [lookup])
        [result setResult] (react/useState (run-lookup))
        listener (react/useCallback
                  (fn entity-listener []
                    (let [result (run-lookup)]
                      (when (changed? #js [result] @cached-entities)
                        (setResult result))))
                  #js [run-lookup])]
    (react/useEffect
     (fn use-entity-effect []
       (let [key (rand)]
         (d/listen! conn key listener)
         #(d/unlisten! conn key)))
     #js [lookup])
    [result]))

(defn ^:export useQuery [query & args]
  (let [conn (react/useContext homebase-context)
        cached-entities (react/useMemo #(atom {}) #js [])
        run-query (react/useCallback 
                   (fn run-query []
                     (.map (try-hook "useQuery" #(apply hbjs/q query conn args))
                           (fn [e] (touch-entity-cache e cached-entities))))
                   #js [query args])
        [result setResult] (react/useState (run-query))
        listener (react/useCallback
                  (fn query-listener []
                    (let [result (run-query)]
                      (when (changed? result @cached-entities)
                        (setResult result))))
                  #js [run-query])]
    (react/useEffect
     (fn use-query-effect []
       (let [key (rand)]
         (d/listen! conn key listener)
         #(d/unlisten! conn key)))
     #js [query args])
    [result]))

(defn ^:export useTransact []
  (let [conn (react/useContext homebase-context)
        transact (react/useCallback 
                  (fn transact [tx] (try-hook "useTransact" #(hbjs/transact! conn tx)))
                  #js [])]
    [transact]))