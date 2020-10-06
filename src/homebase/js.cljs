(ns homebase.js
  (:require
   [homebase.util :as u]
   [clojure.walk :as walk]
   [camel-snake-kebab.core :as csk]
   [datascript.core :as d]
   [datascript.impl.entity :as de :refer [Entity]]))

(defn keywordize-str [s]
  (if (and (string? s) (= (subs s 0 1) ":"))
    (keyword (subs s 1))
    s))

(defn keywordize [coll]
  (->> (js->clj coll)
       (walk/postwalk keywordize-str)))

(def js->db-attr-overrides
  {"id" :db/id
   "identity" :db/ident
   "ident" :db/ident})

(def bool-re #"^(is|has|show|hide)(-|_)?(.*)")

(defn js->bool-key [string]
  (when-let [[_ verb _ key] (re-find bool-re string)]
    (if (= "is" verb) (str key "?") (str verb "-" key "?"))))

(defn js->key-not-memo [namespace string]
  (or
   (get js->db-attr-overrides string)
   (keyword (csk/->kebab-case namespace)
            (csk/->kebab-case
             (or (js->bool-key string)
                 string)))))
(def js->key (memoize js->key-not-memo))

(comment
  (js->key "ok" "watThing")
  (js->key "ok" "id")
  (js->key "ok" "is_good"))

(def js-tx-fns
  {"add" :db/add
   "retract" :db/retract
   "retractEntity" :db.fn/retractEntity})

(defn js->tx
  ([tx]
   (if (object? tx)
     (js->tx tx "db")
     (let [[f e a v] tx]
       [(get js-tx-fns f) e (keywordize a) v])))
  ([data namespace]
   (reduce-kv
    (fn js->tx-reducer [acc k v]
      (if (coll? v)
        (js->tx v k)
        (assoc acc (js->key namespace k) v)))
    {} (js->clj data))))

(defn js->entity-lookup [lookup]
  (cond
    (number? lookup) lookup
    (object? lookup) (first (js->tx lookup))
    :else nil))

(comment
  (js->tx #js {"user" {"id" -2
                       "name" "Arpegius"}})
  (map js->tx #js [{"todoFilter" {"identity" "todoFilters"
                                  "showCompleted" true
                                  "project" 0}}])
  (first (js->tx #js {"identity" "wat"}))
  (js->entity-lookup 1)
  (js->entity-lookup #js {"identity" "todoFilters"}))

(def str->schema-key
  {"unique" :db/unique
   "identity" :db.unique/identity
   "type" :db/valueType
   "ref" :db.type/ref})

(defn js->schema [schema]
  (let [schema (js->clj schema)]
    (reduce (fn js->schema-reducer [acc [nms nm k :as p]]
              (let [v (get str->schema-key (get-in schema p))
                    k (get str->schema-key k)]
                (assoc-in acc [(js->key nms nm) k] v)))
            {} (u/paths schema))))

(comment
  (=
   {:project/name #:db{:unique :db.unique/identity}
    :todo/project #:db{:valueType :db.type/ref, :unique :db.unique/identity}
    :todo/owner #:db{:valueType :db.type/ref}}
   (js->schema #js {"project" {"name" {"unique" "identity"}}
                    "todo" {"project" {"type" "ref"
                                       "unique" "identity"}
                            "owner" {"type" "ref"}}})))

(defn q-entity-array [query conn & args]
  (->> (apply d/q query conn args)
       (map (fn id->entity [[id]] (d/entity conn id)))
       to-array))

(defn js->datalog [data]
  (let [{find "$find" where "$where"} (js->clj data)]
    {:find [(symbol (str "?" find))]
     :where (mapv
             (fn build-where-clause [[e av]]
               (let [[[a v]] (seq av)
                     pred [(symbol (str "?" e))
                           (keyword e a)]]
                 (if (= v "$any") pred
                     (into pred [v]))))
             where)}))

(comment
  (=
   '[:find ?project
     :where [[?project :project/name]]]
   (js->datalog
    #js {"$find" "project"
         "$where" {"project" {"name" "$any"}}})))

(defn js->query [query]
  (cond
    ; Assume datalog
    ; NOTE: this only supports the most basic find clauses
    ;       E.g. `:find ?e`
    ;       Not  `:find ?e ...` or `:find ?e .` or `:find ?e ?a ?b`
    ; TODO: should this support more complex :find queries?
    (string? query) (cljs.reader/read-string query)
    ; Assume JSON style query
    (object? query) (js->datalog query)
    :else nil))

(defn js-get [entity name]
  (case name
    "id" (:db/id entity)
    "ident" (:db/ident entity)
    "identity" (:db/ident entity)
    (let [ks (remove #{:db/id :db/ident} (keys entity))
          ; This assumes that every entity only has keys of the same namespace once the :db keys are removed
          nms (namespace (first ks))
          k (js->key nms name)]
      (get entity k))))

(extend-type Entity
  Object
  (get [this & keys]
    (reduce
     (fn [acc key]
       (let [key (keywordize key)
             f (if (keyword? key) get js-get)]
         (cond
           (set? acc) (f (first acc) (keywordize key))
           acc (f acc (keywordize key))
           :else nil)))
     this keys)))

(defn nil->retract [tx]
  (if-let [id (:db/id tx)]
    (map (fn [[k v]]
           [(if (nil? v) :db/retract :db/add) id k v])
         (dissoc tx :db/id))
    [tx]))

(defn transact! [conn txs]
  (let [txs (mapcat (comp nil->retract js->tx) txs)]
    (d/transact! conn txs)))

(defn entity [conn lookup]
  (d/entity @conn (js->entity-lookup lookup)))

(defn q [query conn & args]
  (apply q-entity-array (js->query query) @conn (keywordize args)))