(ns homebase.dev.example.reagent.todo 
  (:require
   [datascript.core :as d]
   [reagent.core :as r]   
   [homebase.reagent :as hbr]
   [datalog-console.integrations.datascript :as datalog-console]))

(def schema {:db/ident {:db/unique :db.unique/identity}
             :todo/project {:db/type :db.type/ref
                            :db/cardinality :db.cardinality/one}
             :todo/owner {:db/type :db.type/ref
                          :db/cardinality :db.cardinality/one}})

(def db-conn (d/create-conn schema))

(def initial-tx [{:db/ident :todo.filters
                  :todo.filter/show-completed? true
                  :todo.filter/owner 0
                  :todo.filter/project 0}
                 {:todo/name "Go home"
                  :todo/created-at (js/Date.now)
                  :todo/owner -2
                  :todo/project -3}
                 {:todo/name "Fix ship"
                  :todo/completed? true
                  :todo/created-at (js/Date.now)
                  :todo/owner -1
                  :todo/project -4}
                 {:db/id -1
                  :user/name "Stella"}
                 {:db/id -2
                  :user/name "Arpegius"}
                 {:db/id -3
                  :project/name "Do it"}
                 {:db/id -4
                  :project/name "Make it"}])

(d/transact! db-conn initial-tx)

(hbr/connect! db-conn)

(datalog-console/enable! {:conn db-conn})

(defn select [{:keys [attr]}]
  (let [[options] (hbr/q '[:find ?e ?v
                           :in $ ?attr
                           :where [?e ?attr ?v]]
                         db-conn attr)]
    (fn [{:keys [label attr value on-change]}]
      [:label label " "
       [:select
        {:name (str attr)
         :value (or value "")
         :on-change (fn [e] (when on-change (on-change (js/Number (goog.object/getValueByKeys e #js ["target" "value"])))))}
        [:option {:value ""} ""]
        (for [[id value] @options]
          ^{:key id} [:option
                      {:value id}
                      value])]])))

(defn todo [id]
  (let [[todo] (hbr/entity db-conn id)]
    (fn [id]
      [:div {:style {:padding-bottom 20}}
       [:div 
        [:input
         {:type "checkbox"
          :style {:width "18px" :height "18px" :margin-left "0"}
          :checked (true? (:todo/completed? @todo))
          :on-change #(d/transact! db-conn [[:db/add (:db/id @todo) :todo/completed? (goog.object/getValueByKeys % #js ["target" "checked"])]])}]
        [:input
         {:type "text"
          :style {:text-decoration (when (:todo/completed? @todo) "line-through") :border "none" :width "auto" :font-weight "bold" :font-size "20px"}
          :value (:todo/name @todo)
          :on-change #(d/transact! db-conn [[:db/add (:db/id @todo) :todo/name (goog.object/getValueByKeys % #js ["target" "value"])]])}]]
       [:div
        [select
         {:label "Owner:"
          :attr :user/name
          :value (get-in @todo [:todo/owner :db/id])
          :on-change (fn [owner-id] (d/transact! db-conn [[(if (= 0 owner-id) :db/retract :db/add) (:db/id @todo) :todo/owner (when (not= 0 owner-id) owner-id)]]))}]
        " · "
        [select
         {:label "Project:"
          :attr :project/name
          :value (get-in @todo [:todo/project :db/id])
          :on-change (fn [project-id] (d/transact! db-conn [[(if (= 0 project-id) :db/retract :db/add) (:db/id @todo) :todo/project (when (not= 0 project-id) project-id)]]))}]
        " · "
        [:button
         {:on-click #(d/transact! db-conn [[:db/retractEntity (:db/id @todo)]])}
         "Delete"]]
        [:div
         [:small {:style {:color "grey"}}
          (.toLocaleString (js/Date. (:todo/created-at @todo)))]]])))

(defn todo-filters []
  (let [[filters] (hbr/entity db-conn [:db/ident :todo.filters])]
    (fn []
      [:div {:style {:padding "20px 0"}}
       [:strong "Filters · "]
       [:label
        "Show completed "
        [:input
         {:type "checkbox"
          :checked (:todo.filter/show-completed? @filters)
          :on-change #(d/transact! db-conn [[:db/add (:db/id @filters) :todo.filter/show-completed? (goog.object/getValueByKeys % #js ["target" "checked"])]])}]]
       " · "
       [select
        {:label "Owner"
         :attr :user/name
         :value (:todo.filter/owner @filters)
         :on-change (fn [owner-id] (d/transact! db-conn [[:db/add (:db/id @filters) :todo.filter/owner (or owner-id 0)]]))}]
       " · "
       [select
        {:label "Project"
         :attr :project/name
         :value (:todo.filter/project @filters)
         :on-change (fn [project-id] (d/transact! db-conn [[:db/add (:db/id @filters) :todo.filter/project (or project-id 0)]]))}]])))

(defn todos []
  (let [[todos] (hbr/q '[:find [(pull ?todo [:db/id :todo/created-at]) ...]
                         :where
                         ; Get all todos with names
                         [?todo :todo/name]

                         ; Get the id for :todo.filters
                         [?filters :db/ident :todo.filters]

                         ; Filter completed todos if not :todo.filter/show-completed?
                         (or [?filters :todo.filter/show-completed? true]
                             (not [?todo :todo/completed? true]))
                         
                         ; Filter by owner if :todo.filter/owner is not 0
                         [?filter :todo.filter/owner ?owner]
                         (or [(= 0 ?owner)]
                             [?todo :todo/owner ?owner])
                         
                         ; Filter by project if :todo.filter/project is not 0
                         [?filter :todo.filter/project ?project]
                         (or [(= 0 ?project)]
                             [?todo :todo/project ?project])]
                       db-conn)]
    (fn []
      [:div
       [todo-filters]
       [:div
        (for [{:keys [db/id]}
              (->> @todos
                   (sort-by :todo/created-at)
                   (reverse))]
          ^{:key id} [todo id])]])))

(defn new-todo []
  (let [name (r/atom "")
        [filters] (hbr/entity db-conn [:db/ident :todo.filters])]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (d/transact! db-conn [{:todo/name @name
                                                  :todo/created-at (js/Date.now)}
                                                 ; Also reset the filters to make sure the new todo shows up in the UI immediately
                                                 {:db/id (:db/id @filters)
                                                  :todo.filter/show-completed? true
                                                  :todo.filter/owner 0
                                                  :todo.filter/project 0}])
                           (reset! name ""))}
       [:input {:type "text"
                :on-change #(reset! name (goog.object/getValueByKeys % #js ["target" "value"]))
                :value @name
                :placeholder "Write a todo..."}]
       [:button {:type "submit"} "Create todo"]])))

(defn todo-app []
  [:div
   [new-todo]
   [todos]])