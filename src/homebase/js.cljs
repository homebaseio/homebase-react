(ns homebase.js
  (:require
   [homebase.util :as u]
   [clojure.walk :as walk]
   [camel-snake-kebab.core :as csk]
   [datascript.core :as d]
   [inflections.core :refer [singular]]
   [datascript.impl.entity :as de]))

(def ^:dynamic *debug* false)

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
   (keyword (csk/->kebab-case (singular namespace))
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

(def tx-part-colls
  #{js/Array js/Object js/Set PersistentArrayMap PersistentVector})

(defn scalar? [v]
  (nil? (tx-part-colls (type v))))

(defmulti js->tx-part "Returns a vector of datalog tx-parts"
  (fn [schema temp-ids-atom key-path tx-part] 
    (type tx-part)))
(defmethod js->tx-part js/Array [_ _ _ [f e a v]]
  [[(get js-tx-fns f) e (keywordize a) v]])
(defmethod js->tx-part js/Object [schema temp-ids-atom key-path tx-part]
  (js->tx-part schema temp-ids-atom key-path (js->clj tx-part)))
;; NOTE: it would be nice to handle js/Sets, but JSON does not support them.
;; So we could never serialize them to JSON and then import that JSON to get the same DB.
;; I think that makes supporting js/Sets more confusing than useful.
;; If we ever extend the EDN API to provide some of the convenience features in this JS api then we can certainly support EDN sets
;; (defmethod js->tx-part js/Set [temp-ids-atom key-path tx-part]
;;   (print "😢"))
(defmethod js->tx-part PersistentArrayMap [schema temp-ids-atom [[nmspc parent-id skip-map?] :as key-path] tx-part]
  (let [id (or (get tx-part "id") parent-id (swap! temp-ids-atom dec))
        tx-part (dissoc tx-part "id")]
    (reduce-kv
     (fn [acc k v]
       (into acc
             (if (and (map? v) (not skip-map?))
               (let [child-id (or (get v "id") (swap! temp-ids-atom dec))
                     v (assoc v "id" child-id)]
                 (when (or
                        (not= :db.type/ref (get-in schema [(js->key nmspc k) :db/valueType]))
                        (not= :db.cardinality/one (get-in schema [(js->key nmspc k) :db/cardinality])))
                   (throw (js/Error. (str "The '" nmspc "." k "' attribute should be a ref type of one."
                                          "\n\nAdd this to your config:  schema: { " nmspc ": { " k ": { type: 'ref', cardinality: 'one' }}}\n"))))
                 (into [[:db/add id (js->key nmspc k) child-id]]
                       (js->tx-part schema temp-ids-atom (cons [k id] key-path) v)))
               (js->tx-part schema temp-ids-atom (cons [k id] key-path) v))))
     [] tx-part)))
(defmethod js->tx-part PersistentVector [schema temp-ids-atom [[attr parent-id] [nmspc] :as key-path] tx-part]
  (when (or
         (not= :db.type/ref (get-in schema [(js->key nmspc attr) :db/valueType]))
         (not= :db.cardinality/many (get-in schema [(js->key nmspc attr) :db/cardinality])))
    (throw (js/Error. (str "The '" nmspc "." attr "' attribute should be a ref type of many."
                           "\n\nAdd this to your config:  schema: { " nmspc ": { " attr ": { type: 'ref', cardinality: 'many' }}}\n"))))
  (reduce into
   (map-indexed
    (fn [i v]
      (when (vector? v)
        (throw (js/Error. (str "Unsupported JSON in transaction: nested array of arrays `" attr ": [" v "]`. If you need to transact unnamed JSON (tuples, lists) consider serializing it to a string first via `JSON.stringify(yourData)`. If you think homebase-react should have a first class JSON datatype let us know https://github.com/homebaseio/homebase-react/discussions"))))
      (let [id (swap! temp-ids-atom dec)]
        (into 
         [[:db/add parent-id (js->key nmspc attr) id]
          [:db/add id :homebase.array/order (+ 1 i)]]
         (if (scalar? v)
           [[:db/add id :homebase.array/value v]]
           (let [child-id (or (get v "id")
                              (get (second (first v)) "id")
                              (swap! temp-ids-atom dec))]
             (into [[:db/add id :homebase.array/ref child-id]]
                   (js->tx-part schema temp-ids-atom (cons [attr child-id true] key-path) v)))))))
    tx-part)))
(defmethod js->tx-part :default [_ _ [[attr id] [nmspc]] tx-part]
  [[(if (nil? tx-part) :db/retract :db/add)
    id
    (js->key nmspc attr)
    tx-part]])

(defn js->tx [schema tx]
  (let [temp-ids-atom (atom -999999)]
    (->> tx
         (mapcat (partial js->tx-part schema temp-ids-atom [["db" nil true]]))
         (sort (fn [[_ e1] [_ e2]] (compare e2 e1))))))

(defn js->object-lookup 
  ([lookup] (js->object-lookup lookup "db"))
  ([lookup nmspc]
   (reduce-kv
    (fn [acc k v]
      (cond
        (map? v) (js->object-lookup v k)
        :else (assoc acc (js->key nmspc k) v)))
    {} (js->clj lookup))))

(defmulti js->entity-lookup type)
(defmethod js->entity-lookup js/Number [lookup] lookup)
(defmethod js->entity-lookup js/Object [lookup] (first (js->object-lookup lookup)))

(comment
  (js->tx nil (clj->js [{:project {:array [[1] [2 {:k "v"}]]}}]))
  (js->tx nil (clj->js [{:org {:id 9 :projects [{:project {:extra 1}} {:project {:id 5}} {:project {:id 6 :extra "add extras like this"}}]}}]))
  (js->tx-part #js {"user" {"id" -2
                            "name" "Arpegius"}})
  (js->tx-part (clj->js {:project {:id 7 :name nil :array [1 2 3]}}))
  (map js->tx-part #js [{"todoFilter" {"identity" "todoFilters"
                                       "showCompleted" true
                                       "project" 0}}])
  (js->object-lookup #js {"identity" "wat"})
  (js->entity-lookup 1)
  (js->entity-lookup #js {"identity" "todoFilters"})
  (js->entity-lookup #js {"foo" #js {"bar" "todoFilters"}}))

(def str->schema-key
  {"unique" :db/unique
   "identity" :db.unique/identity
   
   "type" :db/valueType
   "ref" :db.type/ref
   
   "cardinality" :db/cardinality
   "one" :db.cardinality/one
   "many" :db.cardinality/many})

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
     :where (reduce-kv
             (fn [acc nmspc attrs+values]
               (into acc
                     (reduce-kv
                      (fn [acc a v]
                        (conj acc
                              (let [pred [(symbol (str "?" nmspc)) (js->key nmspc a)]]
                                (if (= v "$any") pred
                                    (into pred [v])))))
                      [] attrs+values)))
             [] where)}))

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

; This assumes that every entity only has keys of the same namespace once the :db keys are removed
; E.g. :db/id 1, :todo/name "", :todo/email ""
; Not: :db/id 1, :todo/name "", :email/address ""
(defn guess-entity-ns [entity]
  (reduce 
   (fn [_ k] (when (not= "db" (namespace k))
               (reduced (namespace k))))
   nil (keys entity)))

(defn js-get [^de/Entity entity name]
  (case name
    "id" (:db/id entity)
    "ident" (:db/ident entity)
    "identity" (:db/ident entity)
    (let [maybe-ns (guess-entity-ns entity)
          k (when maybe-ns (js->key maybe-ns name))]
      (when k (get entity k)))))

(declare HBEntity
         Entity
         humanize-get-error
         humanize-transact-error
         humanize-entity-error
         humanize-q-error)

(defn any-entity->d-entity [entity]
  (let [hb-entity (if (instance? Entity entity) (.-_entity entity) entity)
        d-entity (if (instance? HBEntity hb-entity) (.-entity hb-entity) hb-entity)]
    d-entity))

(defn entity-in-db? [^de/Entity d-entity]
  (when d-entity
    (not (nil? (first (d/datoms (.-db d-entity) :eavt (:db/id d-entity)))))))

(defn new-entity [^de/Entity d-entity meta]
  (let [e ^Entity (Entity. d-entity)]
    (set! ^HBEntity (.-_entity e)
          (vary-meta ^HBEntity (.-_entity e) merge meta))
    e))

(defmulti entity->js 
  "If the entity is a set (cardinality/many) then put it in a JS array"
  (fn [meta entity] 
    (type entity)))
(defmethod entity->js :default [_ v] v)
; TODO: why is HBEntity matching nil?
(defmethod entity->js HBEntity [meta ^HBEntity hb-entity]
  (when hb-entity (new-entity (.-_entity hb-entity) meta)))
(defmethod entity->js de/Entity [meta ^de/Entity d-entity]
  (when d-entity (new-entity d-entity meta)))
(defmethod entity->js PersistentHashSet [meta entity-set]
  (->> entity-set
       (sort-by :homebase.array/order)
       (map (partial entity->js meta))
       to-array))

(defn humanize-error 
  "Attempts to rewrite any errors to be more JS friendly"
  [error-humanize-f f]
  (if *debug*
    (f)
    (try
      (f)
      (catch js/Error e
        (throw (js/Error. (error-humanize-f e)))))))

(defn lookup-entity
  "Takes a homebase.js/Entity and a seq of attributes. Looks up the attribute path on the entity. Returns a scalar or homebase.js/Entity or js/Array of scalars or Entities."
  ([entity attrs] (lookup-entity entity attrs false))
  ([entity attrs nil-attrs-if-not-in-db?] (lookup-entity entity attrs nil-attrs-if-not-in-db? nil))
  ([entity attrs nil-attrs-if-not-in-db? get-cb]
   (humanize-error
    #(humanize-get-error % entity)
    (fn []
      (reduce
       (fn [acc attr]
         (if-not acc
           nil
           (let [attr (keywordize attr)
                 getter-fn (if (keyword? attr) get js-get)
                 getter-fn (comp (partial entity->js {:HBEntity/get-cb get-cb})
                                 getter-fn)
                 result (cond
                          (array? acc) (if (number? attr)
                                         (nth acc attr)
                                         (.map acc #(getter-fn (any-entity->d-entity %) attr)))
                          (and nil-attrs-if-not-in-db?
                               (or (= :db/id attr) (= "id" attr))
                               (not (entity-in-db? (any-entity->d-entity acc)))) nil
                          acc (getter-fn (any-entity->d-entity acc) attr)
                          :else nil)]
             result)))
       entity attrs))
    )))

; TODO: Deprecate. This should not be needed now that all userland Entities should be homebase.js/Entity
(extend-type de/Entity
  Object
  (get [entity & attrs] (lookup-entity (Entity. entity) attrs)))

(deftype HBEntity [^de/Entity entity _meta]
  IMeta
  (-meta [_] _meta)
  IWithMeta
  (-with-meta [_ new-meta] (HBEntity. entity new-meta))
  ILookup
  (-lookup [_ attr] (lookup-entity (Entity. entity) [attr] true))
  (-lookup [_ attr not-found] (or (lookup-entity (Entity. entity) [attr] true) not-found))
  IAssociative
  (-contains-key? [_ k] (not (nil? (lookup-entity (Entity. entity) [k] true))))
  Object
  (get [this attrs]
    (when (seq attrs)
      (let [get-cb (:HBEntity/get-cb (meta this))
            v (lookup-entity entity attrs true get-cb)]
        (when get-cb (get-cb [this attrs v]))
        v))))

(defn ^{:jsdoc ["@nocollapse"]} Entity [^de/Entity d-entity]
  (this-as ^Entity this
           (set! (.-id this) (:db/id d-entity))
           (set! (.-type this)
                 (when-let [type (guess-entity-ns d-entity)]
                   (csk/->camelCase type)))
           (when-let [ident (:db/ident d-entity)]
             (set! (.-_ident this) ident))
           (set! (.-_entity this) (HBEntity. d-entity nil))
           this))

(set! (.. Entity -prototype -get)
      (fn [& entityAttributeName]
        (this-as ^Entity this
                 (.get (.-_entity this) entityAttributeName))))

(extend-type Entity
  ILookup
  (-lookup
   ([this attr] (lookup-entity this [attr] true))
   ([this attr not-found] (or (lookup-entity this [attr] true) not-found))))

(defn q-entity-array [query conn & args]
  (->> (apply d/q query conn args)
       (map (fn id->entity [[id]] 
              (Entity. (d/entity conn id))))
       to-array))

(defn transact! 
  ([conn tx] (transact! conn tx nil))
  ([conn tx tx-meta]
   (humanize-error
    humanize-transact-error
    #(d/transact! conn (js->tx (:schema @conn) tx) tx-meta))))

(defn entity [conn lookup]
  (humanize-error
   humanize-entity-error
   #(Entity. (d/entity @conn (js->entity-lookup lookup)))))

(defn q [query conn & args]
  (humanize-error
   humanize-q-error
   #(apply q-entity-array (js->query query) @conn (keywordize args))))

(defn humanize-get-error [error entity]
  (condp re-find (goog.object/get error "message")
    #"(?:(.+) is not ISeqable|Cannot use 'in' operator to search for 'db' in (.+))"
    :>> (fn [[_ v1 v2]]
          (let [key (ffirst (filter (fn [[_ v]] (= (or v1 v2) (str v))) entity))
                nmspc (namespace key)
                attr (name key)]
            (str "The `" nmspc "." attr "` attribute should be marked as ref if you want to treat it as a relationship."
                 "\n\nAdd this to your config:  schema: { " nmspc ": { " attr ": { type: 'ref' }}}\n")))
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
               "\n\nAdd this to your config:  schema: { " nmspc ": { " attr ": { unique: 'identity' }}}\n"))
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

    ;; #"((?! is not ISeqable).+) is not ISeqable"
    #"No protocol method IKVReduce.-kv-reduce defined for type .*: (.*)"
    :>> (fn [[_ v]]
          (str "Expected $where clause to be a nested object, not " v "."
               (example-js-query)))
    (goog.object/get error "message")))