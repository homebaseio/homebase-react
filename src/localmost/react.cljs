(ns localmost.react
  (:require
   [reagent.core :as r]
   [datascript.core :as d]))

(defn conn-from-db
  "Monkeypatch conn-from-db in datascript to use an r/atom https://github.com/tonsky/datascript/blob/master/src/datascript/core.cljc#L411"
  [db]
  (r/atom db :meta {:listeners (atom {})}))

(defn conn-from-datoms
  "Creates an empty DB and a mutable reference to it. See [[create-conn]]."
  ([datoms]        (conn-from-db (d/init-db datoms)))
  ([datoms schema] (conn-from-db (d/init-db datoms schema))))

(defn create-conn
  "Creates a mutable reference (a “connection”) to an empty immutable database.
   Connections are lightweight in-memory structures (~atoms) with direct support of transaction listeners ([[listen!]], [[unlisten!]]) and other handy DataScript APIs ([[transact!]], [[reset-conn!]], [[db]]).
   To access underlying immutable DB value, deref: `@conn`."
  ([]       (conn-from-db (d/empty-db)))
  ([schema] (conn-from-db (d/empty-db schema))))

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
  (let [conn (create-conn schema)]
    (transact! conn txs)
    conn))

(defn q [query conn & vars]
  (let [query (js->clj query)]
    (cond
      (number? query) (d/entity (deref conn) query)
      :else (apply d/q query (deref conn) vars))))


(defn ^:export HomebaseProvider [{:keys [] :as config}]
  (+ 1 1))

(defn ^:export useQuery [query]
  (+ 1 1))

(defn ^:export useTransact []
  (+ 1 1))