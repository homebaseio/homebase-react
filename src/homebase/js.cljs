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

(defn js->key-not-memo [namespace key]
  (or
   (get js->db-attr-overrides key)
   (keyword (csk/->kebab-case namespace)
            (str (if (= (subs key 0 1) "_") "_" "")
                 (csk/->kebab-case
                  (or (js->bool-key key)
                      key))))))
(def js->key (memoize js->key-not-memo))

(comment
  (js->key "ok" "watThing")
  (js->key "ok" "id")
  (js->key "ok" "is_good"))

(def js-tx-fns
  {"add" :db/add
   "retract" :db/retract
   "retractEntity" :db.fn/retractEntity})

(defn js->tx-part
  ([tx]
   (if (object? tx)
     (js->tx-part tx "db")
     (let [[f e a v] tx]
       [(get js-tx-fns f) e (keywordize a) v])))
  ([data namespace]
   (reduce-kv
    (fn js->tx-part-reducer [acc k v]
      (if (coll? v)
        (js->tx-part v k)
        (assoc acc (js->key namespace k) v)))
    {} (js->clj data))))

(defn js->entity-lookup [lookup]
  (cond
    (number? lookup) lookup
    (object? lookup) (first (js->tx-part lookup))
    :else nil))

(comment
  (js->tx-part #js {"user" {"id" -2
                       "name" "Arpegius"}})
  (map js->tx-part #js [{"todoFilter" {"identity" "todoFilters"
                                  "showCompleted" true
                                  "project" 0}}])
  (first (js->tx-part #js {"identity" "wat"}))
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
              (if-not (and nms nm k)
                acc
                (let [v (get str->schema-key (get-in schema p))
                      k (get str->schema-key k)]
                  (assoc-in acc [(js->key nms nm) k] v))))
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

(defn nil->retract [tx]
  (if-let [id (:db/id tx)]
    (map (fn [[k v]]
           [(if (nil? v) :db/retract :db/add) id k v])
         (dissoc tx :db/id))
    [tx]))

(defn js-get [entity name]
  (case name
    "id" (:db/id entity)
    "ident" (:db/ident entity)
    "identity" (:db/ident entity)
    (let [ks (remove #{:db/id :db/ident} (keys entity))
          ; This assumes that every entity only has keys of the same namespace once the :db keys are removed
          ; E.g. :db/id 1, :todo/name "", :todo/email ""
          ; Not: :db/id 1, :todo/name "", :email/address ""
          k (when (first ks)
              (js->key (namespace (first ks)) name))]
      (when k (get entity k)))))

(defn entity-in-db? [entity]
  (not (nil? (first (d/datoms (goog.object/get entity "db") :eavt (:db/id entity))))))

(declare HBEntity 
         humanize-get-error 
         humanize-transact-error 
         humanize-entity-error 
         humanize-q-error)

(defn Entity->HBEntity [v]
  (if (= Entity (type v))
    (HBEntity. v nil) v))

(defn lookup-entity 
  ([entity attrs] (lookup-entity entity attrs false))
  ([entity attrs nil-attrs-if-not-in-db?]
   (try
     (Entity->HBEntity
      (reduce
       (fn [acc attr]
         (if-not acc nil
                 (let [attr (keywordize attr)
                       f (if (keyword? attr) get js-get)]
                   (cond
                     (and nil-attrs-if-not-in-db?
                          (or (= :db/id attr) (= "id" attr))
                          (not (entity-in-db? acc))) nil
                     (set? acc) (f (first acc) attr)
                     acc (f acc attr)
                     :else nil))))
       entity attrs))
     (catch js/Error e
      ;  (js-debugger)
       (throw (js/Error. (humanize-get-error e entity)))))))

(extend-type Entity
  Object
  (get [entity & attrs] (lookup-entity entity attrs)))

(deftype HBEntity [^datascript.impl.entity/Entity entity _meta]
  IMeta
  (-meta [_] _meta)
  IWithMeta
  (-with-meta [_ new-meta] (HBEntity. entity new-meta))
  ILookup
  (-lookup [_ attr] (lookup-entity entity [attr] true))
  (-lookup [_ attr not-found] (or (lookup-entity entity [attr] true) not-found))
  IAssociative
  (-contains-key? [_ k] (not (nil? (lookup-entity entity [k] true))))
  Object
  (get [this & attrs]
    (when (seq attrs)
      (let [v (lookup-entity entity attrs true)]
        (when-let [f (:HBEntity/get-cb (meta this))]
          (f [this attrs v]))
        v))))

(defn q-entity-array [query conn & args]
  (->> (apply d/q query conn args)
       (map (fn id->entity [[id]] (HBEntity. (d/entity conn id) nil)))
       to-array))

(defn transact! 
  ([conn tx] (transact! conn tx nil))
  ([conn tx tx-meta]
   (try 
     (d/transact! conn (mapcat (comp nil->retract js->tx-part) tx) tx-meta)
     (catch js/Error e 
       (throw (js/Error. (humanize-transact-error e)))))))

(defn entity [conn lookup]
  (try
    (HBEntity. (d/entity @conn (js->entity-lookup lookup)) nil)
    (catch js/Error e
      (throw (js/Error. (humanize-entity-error e))))))

(defn q [query conn & args]
  (try 
    (apply q-entity-array (js->query query) @conn (keywordize args))
    (catch js/Error e 
      (throw (js/Error. (humanize-q-error e))))))

(defn humanize-get-error [error entity]
  (condp re-find (goog.object/get error "message")
    #"(?:(.+) is not ISeqable|Cannot use 'in' operator to search for 'db' in (.+))"
    :>> (fn [[_ v1 v2]]
          (let [key (ffirst (filter (fn [[_ v]] (= (or v1 v2) (str v))) entity))
                nmspc (namespace key)
                attr (name key)]
            (str "The `" nmspc "." attr "` attribute should be marked as ref if you want to treat it as a relationship."
                 "\n\nAdd this to your config:  { schema: { " nmspc ": { " attr ": { type: 'ref' }}}\n")))
    (goog.object/get error "message")))

(defn humanize-transact-error [error]
  (condp re-find (goog.object/get error "message")
    #"\[object Object\] is not ISeqable"
    "Expected an array of transactions. 
\nFor example:  transact([
                {todo: {name: 1}}, 
                {todo: {name: 2}}
              ])
"

    #"Unknown operation at \[nil nil nil nil\], expected"
    "Expected 'retractEntity'. 
\nFor example:  transact([['retractEntity', id]])
"

    #"Can't use tempid in '\[:db\.fn/retractEntity"
    "Expected a numerical id. 
\nFor example:  transact([['retractEntity', 123]])
"

    #"Expected number or lookup ref for entity id, got nil"
    "Expected a numerical id. 
\nFor example:  transact([['retractEntity', 123]])
"
    (goog.object/get error "message")))

(defn humanize-entity-error [error]
  (condp re-find (goog.object/get error "message")
    #"Lookup ref attribute should be marked as :db/unique: \[:([\w-]+)/([\w-]+) ((?!\]).+)\]"
    :>> (fn [[_ nmspc attr v]]
          (str "The `" nmspc "." attr "` attribute should be marked as unique if you want to lookup entities by it."
               "\n\nAdd this to your config:  { schema: { " nmspc ": { " attr ": { unique: 'identity' }}}\n"))
    (goog.object/get error "message")))

(defn example-js-query
  ([] (example-js-query "item"))
  ([nmsp] (str "\n
For example:  query({ 
                $find: '" nmsp "',
                $where: { " nmsp ": { name: '$any' }}
              })
")))

(defn humanize-q-error [error]
  (condp re-find (goog.object/get error "message")
    #"Query should be a vector or a map"
    (str "Expected query to be in the form of an object or datalog string."
         (example-js-query))

    #"Query for unknown vars: \[\?\]"
    (str "Expected query to have a $find and a $where clause."
         (example-js-query))

    ; TODO: revist when datalog strings are better supported since this error is directed at JS object queries only.
    #"Query for unknown vars: \[\?((?!\]).+)\]"
    :>> (fn [[_ var]]
          (str "Expected to see '" var "' in both the $find and $where clauses."
               (example-js-query var)))

    #"((?! is not ISeqable).+) is not ISeqable"
    :>> (fn [[_ v]]
          (str "Expected $where clause to be a nested object, not " v "."
               (example-js-query)))
    (goog.object/get error "message")))