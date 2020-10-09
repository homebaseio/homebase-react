(ns localmost.reagent
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


(defn new-db-conn [txs & {:keys [schema]}]
  (let [conn (create-conn schema)]
    (d/transact! conn txs)
    conn))

(defn q [query conn & vars]
  (cond
    (number? query) (d/entity (deref conn) query)
    :else (apply d/q query (deref conn) vars)))

(defn transact! [conn txs]
  (d/transact! conn txs))
