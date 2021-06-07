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

(defn lookup-entity [^Entity entity attr not-found]
  (let [result (de/lookup-entity ^de/Entity (.-entity entity) attr not-found)
        after-lookup (::after-lookup (meta entity))]
    (when after-lookup (after-lookup {:entity entity :attr attr :result result}))
    (if (instance? de/Entity result)
      (Entity. result {::after-lookup after-lookup})
      result)))

(defn connect!
  "Connects a db-conn to a homebase.cache. This is a prerequisite for any of the db read functions in this namespace to be reactive. Returns a homebase.cache connection."
  [db-conn]
  (let [cache-conn (hbc/create-conn)]
    (hbc/connect! cache-conn db-conn)
    cache-conn))

(defn disconnect! [db-conn]
  (hbc/disconnect! db-conn))

(defn get-cache-conn-from-db [db]
  (let [cache-conn (:homebase.cache/conn (meta db))
        _ (when (not cache-conn)
            (throw (ex-info "Cache not connected. Connect your db to the cache with (homebase.reagent/connect! db-conn) first."
                            {})))]
    cache-conn))

(defn make-reactive-entity [{:keys [^de/Entity entity r-entity tracked-ea-pairs db-conn cache-conn component-uid] :as args}]
  (let [entity-id (:db/id entity)
        e (Entity. entity {::after-lookup
                           (fn [{:keys [attr]}]
                             (swap! tracked-ea-pairs conj [entity-id attr])
                             (swap! cache-conn hbc/assoc-ea [entity-id attr] component-uid
                                    (fn []
                                      (reset! r-entity
                                              (make-reactive-entity
                                               (merge args {:entity (d/entity @db-conn entity-id)}))))))})]
   e))

(defn entity 
  "Returns a reactive homebase.reagent/Entity. 
   
   It offers a normalized subset of other entity APIs with the
   primary addition being that implemented protocols are reactive 
   and trigger re-renders when related datoms change. 
      
   NOTE: This takes a conn, not a db."
  [db-conn lookup]
  (let [cache-conn (get-cache-conn-from-db @db-conn)
        entity (d/entity @db-conn lookup)
        component-uid (nano-id)
        tracked-ea-pairs (atom #{})
        r-entity (r/atom entity)
        hbr-entity (make-reactive-entity {:entity entity :r-entity r-entity :tracked-ea-pairs tracked-ea-pairs :db-conn db-conn :cache-conn cache-conn :component-uid component-uid})
        _ (reset! r-entity hbr-entity)
        f (fn []
            (r/with-let []
              @r-entity
              (finally ; handle unmounting this component
                (doseq [ea @tracked-ea-pairs]
                  (swap! cache-conn hbc/dissoc-ea ea component-uid)
                  #_(js/console.log ea @cache-conn)))))]
    (r/track f)))

(defn q 
  "Returns a reactive query result that will trigger a re-render when its result changes. NOTE: This takes a conn, not a db."
  [query db-conn & inputs]
  (let [cache-conn (get-cache-conn-from-db @db-conn)
        result (apply d/q query @db-conn inputs)
        r-result (r/atom result)
        component-uid (nano-id)
        _ (swap! cache-conn hbc/assoc-q query component-uid
                 (fn []
                   (reset! r-result (apply d/q query @db-conn inputs))))        
        f (fn []
            (r/with-let []
              @r-result
              (finally ; handle unmounting this component
                (swap! cache-conn hbc/dissoc-q query component-uid)
                #_(js/console.log query @cache-conn))))]
    (r/track f)))