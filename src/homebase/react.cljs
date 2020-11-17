(ns homebase.react
  (:require
   ["react" :as react]
   [clojure.string]
   [homebase.js :as hbjs]
   [datascript.core :as d]))

(defn try-hook [hook-name f]
  (try (f)
    (catch js/Error e
      (throw
       (js/Error
        (str (goog.object/get e "message") "\n"
             (some->> (goog.object/get e "stack")
                      (re-find (re-pattern (str hook-name ".*\\n(.*)\\n?")))
                      (second)
                      (clojure.string/trim))))))))

(defn changed? [entities cached-entities]
  (if (not= (count entities) (count cached-entities))
    true
    (reduce (fn [_ e]
              (when (let [cached-e (get cached-entities (get e "id"))]
                      (if (nil? cached-e)
                        (reduced true)
                        (reduce (fn [_ [ks v]]
                                  (when (not= v (get-in e ks))
                                    (reduced true)))
                                nil cached-e)))
                (reduced true)))
            nil entities)))

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

(defn ^:export useEntity [lookup]
  (let [conn (react/useContext homebase-context)
        cached-entities (react/useMemo #(atom {}) #js [])
        run-lookup (react/useCallback
                    (fn run-lookup []
                      (vary-meta (try-hook "useEntity" #(hbjs/entity conn lookup))
                                 merge {:HBEntity/get (fn [[e ks v]] (swap! cached-entities assoc-in [(get e "id") ks] v))}))
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
                           (fn [e] (vary-meta e merge {:HBEntity/get (fn [[e ks v]] (swap! cached-entities assoc-in [(get e "id") ks] v))}))))
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
        transact (fn transact [txs] (try-hook "useTransact" #(hbjs/transact! conn txs)))]
    [transact]))