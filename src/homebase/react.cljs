(ns homebase.react
  (:require
   ["react" :as react]
   [reagent.core :as r]
   [clojure.walk :as walk]
   [datascript.core :as d]
   [datascript.db :as db]
   [datascript.impl.entity :as de :refer [Entity]]))

(defn keywordize [s]
  (if (and (string? s) (= (subs s 0 1) ":"))
    (keyword (subs s 1))
    s))

(defn keywordize-coll [coll]
  (->> (js->clj coll)
       (walk/postwalk keywordize)))

(defn transact! [conn txs]
  (d/transact! conn (keywordize-coll txs)))

(defn json-query [query conn & args]
  (->> (apply d/q (cljs.reader/read-string query) @conn args)
       (map (fn [[id]] (d/entity @conn id)))
       to-array))

(defn q [query conn & args]
  (let [keywordized-args (map keywordize args)]
    (cond
    ; Assume a :db/id lookup
      (number? query) (d/entity @conn (keywordize-coll query))
    ; Assume datalog
    ; NOTE: this only supports the most basic find clauses
    ;       E.g. `:find ?e`
    ;       Not  `:find ?e ...` or `:find ?e .` or `:find ?e ?a ?b`
    ; TODO: should this support more complex :find queries?
      (string? query) (->> (apply d/q (cljs.reader/read-string query) @conn keywordized-args)
                           (map (fn [[id]] (d/entity @conn id)))
                           to-array) 
    ; Assume entity KV lookup
      (array? query) (d/entity @conn (keywordize-coll query))
    ; Assume JSON style query
      (object? query) (apply json-query query conn keywordized-args)
      :else nil)))


(extend-type Entity
  Object
  (get [this & keys]
    (reduce 
     (fn [acc key] 
       (cond 
         (set? acc) (get (first acc) (keywordize-coll key))
         acc (get acc (keywordize-coll key))
         :else nil))
     this keys)))


(defonce homebase-context (react/createContext))

(defn ^:export HomebaseProvider [props]
  (let [config (.-config props)
        conn (d/create-conn (keywordize-coll (.-schema config)))]
    (when (.-initialData config) (transact! conn (.-initialData config)))
    (r/create-element
     (.-Provider homebase-context) #js {:value conn}
     (.-children props))))

(defn ^:export useQuery [query & args]
  (let [conn (react/useContext homebase-context)
        [result setResult] (react/useState (apply q query conn args))]
    (react/useEffect 
     (fn [] (let [key (rand)]
              (d/listen! conn key #(setResult (apply q query conn args)))
              (fn [] (d/unlisten! conn key)))))
    [result query args]))

(defn ^:export useTransact []
  (let [conn (react/useContext homebase-context)
        transact (fn [txs] (transact! conn txs))]
    [transact]))