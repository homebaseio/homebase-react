(ns homebase.reagent
  (:require
   [homebase.cache :as hbc]
   [datalog-console.chrome.formatters] ; Load the formatters ns to extend cljs-devtools to better render db entities in the chrome console if cljs-devtools is enabled.
   [devtools.protocols :as dtp :refer [IFormat]]
   [datascript.impl.entity :as de]
   [reagent.core :as r]
   [nano-id.core :refer [nano-id]]
   [datascript.core :as d]))

(declare lookup-entity)

(deftype Entity [^de/Entity entity meta]
  IFormat
  (-header [_] (dtp/-header entity))
  (-has-body [_] (dtp/-has-body entity))
  (-body [_] (dtp/-body entity))
  IMeta
  (-meta [_] meta)
  IWithMeta
  (-with-meta [_ new-meta] (Entity. entity new-meta))
  ILookup
  (-lookup [this attr] (lookup-entity this attr nil))
  (-lookup [this attr not-found] (lookup-entity this attr not-found))
  IAssociative
  (-contains-key? [this k] (not= ::nf (lookup-entity this k ::nf)))
  IFn
  (-invoke [this k] (lookup-entity this k nil))
  (-invoke [this k not-found] (lookup-entity this k not-found)))

(defn ^:no-doc lookup-entity [^Entity entity attr not-found]
  (let [result (de/lookup-entity ^de/Entity (.-entity entity) attr not-found)
        after-lookup (::after-lookup (meta entity))]
    (when after-lookup (after-lookup {:entity (.-entity entity) :attr attr :result result}))
    (cond 
      (instance? de/Entity result) 
      (Entity. result {::after-lookup after-lookup})

      (and (set? result) (instance? de/Entity (first result)))
      (set (map #(Entity. % {::after-lookup after-lookup}) result))

      :else result)))

(defn connect!
  "Connects a db-conn to a homebase.cache. This is a prerequisite for any of the db read functions in this namespace ([[entity]], [[q]]) to be reactive. Returns a homebase.cache connection.
   
   ```clojure
   (def db-conn (datascript/create-conn))
   (hbr/connect! db-conn)
   ```"
  [db-conn]
  (let [cache-conn (hbc/create-conn)]
    (hbc/connect! cache-conn db-conn)
    {:cache-conn cache-conn}))

(defn disconnect! [db-conn]
  (hbc/disconnect! db-conn))

(defn ^:no-doc get-cache-conn-from-db [db]
  (let [cache-conn (:homebase.cache/conn (meta db))
        _ (when (not cache-conn)
            (throw (ex-info "Cache not connected. Connect your db to the cache with (homebase.reagent/connect! db-conn) first."
                            {})))]
    cache-conn))

(defn ^:no-doc make-reactive-entity [{:keys [^de/Entity entity r-entity tracked-ea-pairs db-conn cache-conn site-id] :as args}]
  (let [top-level-entity-id (:db/id entity)
        e (Entity. entity {::after-lookup
                           (fn after-lookup [{:keys [^de/Entity entity attr]}]
                             (swap! tracked-ea-pairs conj [(:db/id entity) attr])
                             (swap! cache-conn hbc/assoc :ea [(:db/id entity) attr] site-id
                                    (fn change-handler [{:keys [db-after]}]
                                      (reset! r-entity
                                              (make-reactive-entity
                                               (merge args {:entity (d/entity db-after top-level-entity-id)})))))
                             #_(js/console.log top-level-entity-id (:db/id entity) attr @cache-conn))})]
   e))

(defn entity 
  "Returns a reactive `homebase.reagent/Entity` wrapped in a vector. 
   
   It offers a normalized subset of other entity APIs with the
   primary addition being that implemented protocols are reactive 
   and trigger re-renders when related datoms change. 
   
   Usage:

   ```clojure
   (defn your-component []
     (let [[entity-1] (hbr/entity db-conn 1)
           [entity-2] (hbr/entity db-conn [:uniq-attr :value])]
       (fn []
         [:div
          (:attr @entity-1)
          (get-in @entity-2 [:ref-attr :attr])])))
   ```
   
   Gotchas:

   - **This takes a conn, not a db.**
   - `homebase.reagent/Entity` only implements the `ILookup` and `IFn` protocols, i.e. only attribute lookups like `(:attr hbr-entity)`.
     - Use non-reactive entities from your DB if you need to use other protocols.
       - E.g. `(datascript/entity @db-conn 1)`"
  [db-conn lookup]
  (let [cache-conn (get-cache-conn-from-db @db-conn)
        entity (d/entity @db-conn lookup)
        site-id (nano-id)
        tracked-ea-pairs (atom #{})
        r-entity (r/atom nil)
        hbr-entity (make-reactive-entity {:entity entity :r-entity r-entity :tracked-ea-pairs tracked-ea-pairs :db-conn db-conn :cache-conn cache-conn :site-id site-id})
        _ (reset! r-entity hbr-entity)
        f (fn []
            (r/with-let []
              @r-entity
              (finally ; handle unmounting this component
                (doseq [ea @tracked-ea-pairs]
                  (swap! cache-conn hbc/dissoc :ea ea site-id)
                  #_(js/console.log ea @cache-conn)))))]
    [(r/track f)]))

(defn q 
  "Returns a reactive query result wrapped in a vector. 
   
   It will trigger a re-render when its result changes. 
   
   Usage:
   
   ```clojure
   (defn your-component []
     (let [[query-result] (hbr/q db-conn [:find [?e ...]
                                          :where [?e :attr]])]
       (fn []
         [:div
          (for [eid @query-result]
            ^{:key eid}[another-component eid])])))
   ```
   
   Gotchas:
   
   - **This takes a conn, not a db.**
   - At the moment it's only possible to [[connect!]] to one DB at a time, so reactive query results are only supported on one DB. If you pass more DBs as args the query will only be rerun if the first DB changes."
  [query db-conn & inputs]
  (let [cache-conn (get-cache-conn-from-db @db-conn)
        result (apply d/q query @db-conn inputs)
        r-result (r/atom result)
        site-id (nano-id)
        _ (swap! cache-conn hbc/assoc :q [query inputs] site-id
                 (fn [{:keys [db-after]}]
                   (reset! r-result (apply d/q query db-after inputs))))        
        f (fn []
            (r/with-let []
              @r-result
              (finally ; handle unmounting this component
                (swap! cache-conn hbc/dissoc :q [query inputs] site-id)
                #_(js/console.log query @cache-conn))))]
    [(r/track f)]))