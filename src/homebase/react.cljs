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
        run-lookup (fn [] (try-hook "useEntity" #(hbjs/entity conn lookup)))
        [result setResult] (react/useState (run-lookup))]
    (react/useEffect
     (fn use-entity-effect []
       (let [key (rand)]
         (d/listen! conn key #(setResult (run-lookup)))
         (fn unmount-use-entity-effect [] (d/unlisten! conn key))))
     #js [lookup])
    [result]))

(defn ^:export useQuery [query & args]
  (let [conn (react/useContext homebase-context)
        run-query (fn [] (try-hook "useQuery" #(apply hbjs/q query conn args)))
        [result setResult] (react/useState (run-query))]
    (react/useEffect
     (fn use-query-effect []
       (let [key (rand)]
         (d/listen! conn key #(setResult (run-query)))
         (fn unmount-use-query-effect [] (d/unlisten! conn key))))
     #js [query args])
    [result]))

(defn ^:export useTransact []
  (let [conn (react/useContext homebase-context)
        transact (fn transact [txs] (try-hook "useTransact" #(hbjs/transact! conn txs)))]
    [transact]))