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


(defn humanize-transact-error [error]
  (condp re-find (.-message error)
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
    (.-message error)))

(defn transact! [conn txs]
  (try 
    (d/transact! conn (mapcat (comp nil->retract js->tx) txs))
    (catch js/Error e 
      (throw (js/Error. (humanize-transact-error e))))))
(comment
  ; Valid tx
  (transact! (d/create-conn) (clj->js [{"wat" {"thing" 1}} 
                                       ["retractEntity" 1]]))
  ; Invalid txs
  (transact! (d/create-conn) (clj->js {}))
  (transact! (d/create-conn) (clj->js [[]]))
  (transact! (d/create-conn) (clj->js [["notAThing"]]))
  (transact! (d/create-conn) (clj->js [["retractEntity" "wat"]]))
  (transact! (d/create-conn) (clj->js [["retractEntity"]])))


(defn humanize-entity-error [error]
  (condp re-find (.-message error)
    #"Lookup ref attribute should be marked as :db/unique: \[:([\w-]+)/([\w-]+) ((?!\]).+)\]"
    :>> (fn [[_ nmspc attr v]]
          (str "The `" nmspc "." attr "` attribute should be marked as unique if you want to lookup entities by it"
               "\n\nAdd this to your config:  { schema: { " nmspc ": { " attr ": { unique: 'identity' }}}\n"))
    (.-message error)))

(defn entity [conn lookup]
  (try
    (d/entity @conn (js->entity-lookup lookup))
    (catch js/Error e
      (throw (js/Error. (humanize-entity-error e))))))
(comment
  ; Valid entity
  (entity (d/create-conn) (clj->js 1))
  ; Potentially invalid
  (entity (d/create-conn) (clj->js {"item" {"number" 1}})))


(defn example-js-query
  ([] (example-js-query "item"))
  ([nmsp] (str "
For example:  query({ 
                $find: '" nmsp "',
                $where: { " nmsp ": { name: '$any' }}
              })
")))

(defn humanize-q-error [error]
  (condp re-find (.-message error)
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
    (.-message error)))

(defn q [query conn & args]
  (try 
    (apply q-entity-array (js->query query) @conn (keywordize args))
    (catch js/Error e 
      (throw (js/Error. (humanize-q-error e))))))
(comment
  ; Valid queries
  (q (clj->js {"$find" "item"
               "$where" {"item" {"name" "$any"}}})
     (d/create-conn))
  (q (clj->js "[:find ?e :where [?e :item/name]]") (d/create-conn))
  ; Invalid queries
  (q (clj->js 1) (d/create-conn))
  (q (clj->js "") (d/create-conn))
  (q (clj->js []) (d/create-conn))
  (q (clj->js {}) (d/create-conn))
  (q (clj->js {"item" {"number" 1}}) (d/create-conn))
  (q (clj->js {"$find" "todo"}) (d/create-conn))
  (q (clj->js {"$find" "item"
               "$where" {"todo" {"name" "wat"}}}) (d/create-conn))
  (q (clj->js {"$find" "todo"
               "$where" {"todo" 1}}) (d/create-conn))
  (q (clj->js "[]") (d/create-conn))
  (q (clj->js "{}") (d/create-conn))
  )