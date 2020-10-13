(ns localmost.react
  (:require
   ["react" :as react]
   [reagent.core :as r]
   [datascript.core :as d]))

(defn js-txs->clj [js-txs]
  (let [txs (js->clj js-txs :keywordize-keys true)]
    (if (map? (first txs))
      txs
      (mapv (fn [[dbfn e a & more]]
              (into [(keyword dbfn) e (keyword a)]
                    more)) 
            txs))))

(defn transact! [conn txs]
  (d/transact! conn (js-txs->clj txs)))

(defn new-db-conn [txs & {:keys [schema]}]
  (let [conn (d/create-conn schema)]
    (transact! conn txs)
    conn))

(defn q [query conn & vars]
  (let [query (js->clj query)]
    (cond
      (number? query) (d/entity @conn query)
      :else (apply d/q query @conn vars))))

(defonce homebase-context (react/createContext))

(defn ^:export HomebaseProvider [props]
  (let [config (.-config props)
        conn (new-db-conn (.-initialData config))]
    (r/create-element
     (.-Provider homebase-context) #js {:value conn}
     (.-children props))))

(defn ^:export useQuery [query]
  (let [conn (react/useContext homebase-context)
        [result setResult] (react/useState (q query conn))]
    (react/useEffect 
     (fn []
       (let [key (rand)
             listener (fn [] (setResult (q query conn)))]
         (d/listen! conn key listener)
         (fn [] (d/unlisten! conn key)))))
    [result]))

(defn ^:export useTransact []
  (let [conn (react/useContext homebase-context)
        transact (fn [txs] (transact! conn txs))]
    [transact]))