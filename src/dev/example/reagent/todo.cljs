(ns dev.example.reagent.todo 
  (:require
   [devcards.core :as dc]
   [datascript.core :as d]
   [reagent.core :as r]   
   [homebase.reagent :as hbr])
  (:require-macros
   [devcards.core :refer [defcard-rg]]))

(def db-conn (d/create-conn {:todo/project {:db/type :db.type/ref
                                            :db/cardinality :db.cardinality/one}
                             :todo/owner {:db/type :db.type/ref
                                          :db/cardinality :db.cardinality/one}}))
(hbr/connect! db-conn)
(d/transact! db-conn [{:todo/name "Go home"
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

#_(dotimes [n 1000]
  (d/transact! db-conn [{:todo/name (str n)
                         :todo/created-at (js/Date.now)}]))

(defn select [{:keys [label attr value on-change]}]
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

(defn test-rev-ref [id]
  (let [[todo] (hbr/entity db-conn id)]
    (fn []
      [:div
       [:button
        {:on-click #(d/transact! db-conn [[:db/add (:db/id (:todo/owner @todo)) :user/name (str (rand-int 99))]])}
        "change rev ref name"]
       (:user/name (:todo/owner (first (:todo/_owner (:todo/owner @todo)))))])))

(defn test-ref [id]
  (let [[todo] (hbr/entity db-conn id)]
    (fn []
      [:div
       [:button
        {:on-click #(d/transact! db-conn [[:db/add (:db/id (:todo/owner @todo)) :user/name (str (rand-int 99))]])}
        "change ref name"]
       (:user/name (:todo/owner @todo))])))

(defn todo [id]
  (let [[todo] (hbr/entity db-conn id)]
    (fn []
      [:div {:style {:padding-bottom 20}}
       [test-ref id]
       [test-rev-ref id]
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

(defn todo-filters [filters]
  [:div {:style {:padding "20px 0"}}
   [:strong "Filters · "]
   [:label
    "Show completed "
    [:input
     {:type "checkbox"
      :checked (:f-all? @filters)
      :on-change #(swap! filters assoc :f-all? (goog.object/getValueByKeys % #js ["target" "checked"]))}]]
   " · "
   [select
    {:label "Owner"
     :attr :user/name
     :value (:f-owner @filters)
     :on-change (fn [owner-id]
                  (swap! filters assoc :f-owner
                         (when (not= 0 owner-id) owner-id)))}]
   " · "
   [select
    {:label "Project"
     :attr :project/name
     :value (:f-project @filters)
     :on-change (fn [project-id]
                  (swap! filters assoc :f-project
                         (when (not= 0 project-id) project-id)))}]
   ])

(defn todos [filters]
  (let [[todos] (hbr/q '[:find [(pull ?todo [:db/id :todo/created-at :todo/project :todo/owner :todo/completed?]) ...]
                         :where
                         [?todo :todo/name]]
                       db-conn)]
    (fn [filters]
      (let [{:keys [f-project f-owner f-all?]} @filters]
        [:div
         [todo-filters filters]
         [:div
          (doall
           (for [{:keys [db/id]}
                 (->> @todos
                      (remove (fn [{:keys [todo/project todo/owner todo/completed?]}]
                                (or (and f-project (not= (:db/id project) f-project))
                                    (and f-owner (not= (:db/id owner) f-owner))
                                    (and (not f-all?) completed?))))
                      (sort-by :todo/created-at)
                      (reverse))]
             ^{:key id} [todo id]))]]))))

(def default-filters {:f-project nil :f-owner nil :f-all? true})

(defn new-todo [filters]
  (let [name (r/atom "")]
    (fn [filters]
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (d/transact! db-conn [{:todo/name @name
                                                  :todo/created-at (js/Date.now)}])
                           (reset! name "")
                           (reset! filters default-filters))}
       [:input {:type "text"
                :on-change #(reset! name (goog.object/getValueByKeys % #js ["target" "value"]))
                :value @name
                :placeholder "Write a todo..."}]
       [:button {:type "submit"} "Create todo"]])))

(defn todo-app []
  (let [filters (r/atom default-filters)]
    (fn []
      [:div
       [new-todo filters]
       [todos filters]])))

(defcard-rg todo-example
  todo-app)