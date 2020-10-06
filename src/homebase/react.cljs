(ns homebase.react
  (:require
   ["react" :as react]
   [reagent.core :as r]
   [homebase.js :as hbjs]
   [datascript.core :as d]))

(defonce homebase-context (react/createContext))

(def base-schema
  {:db/ident {:db/unique :db.unique/identity}})

(defn ^:export HomebaseProvider [props]
  (let [config (.-config props)
        conn (d/create-conn (if (.-schema config)
                              (merge (hbjs/js->schema (.-schema config)) base-schema)
                              base-schema))]
    (when (.-initialData config) (hbjs/transact! conn (.-initialData config)))
    (r/create-element
     (.-Provider homebase-context) #js {:value conn}
     (.-children props))))

(defn ^:export useEntity [lookup]
  (let [conn (react/useContext homebase-context)
        [result setResult] (react/useState (hbjs/entity conn lookup))]
    (react/useEffect
     (fn use-entity-effect [] (let [key (rand)]
              (d/listen! conn key #(setResult (hbjs/entity conn lookup)))
              (fn unmount-use-entity-effect [] (d/unlisten! conn key))))
     #js [lookup])
    [result]))

(defn ^:export useQuery [query & args]
  (let [conn (react/useContext homebase-context)
        [result setResult] (react/useState (apply hbjs/q query conn args))]
    (react/useEffect
     (fn use-query-effect [] (let [key (rand)]
              (d/listen! conn key #(setResult (apply hbjs/q query conn args)))
              (fn unmount-use-query-effect [] (d/unlisten! conn key))))
     #js [query args])
    [result]))

(defn ^:export useTransact []
  (let [conn (react/useContext homebase-context)
        transact (fn transact [txs] (hbjs/transact! conn txs))]
    [transact]))