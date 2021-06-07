(ns dev.example.reagent.todo 
  (:require
   [devcards.core :as dc]
   [datascript.core :as d]
   [reagent.core :as r]   
   [homebase.reagent :as hbr])
  (:require-macros
   [devcards.core :refer [defcard-rg]]))

(def db-conn (d/create-conn {}))
(hbr/connect! db-conn)
(d/transact! db-conn [{:todo/name "Do another thing"
                       :todo/created-at (js/Date.now)}
                      {:todo/name "Do a thing"
                       :todo/created-at (js/Date.now)}])

#_(dotimes [n 1000]
  (d/transact! db-conn [{:todo/name (str n)
                         :todo/created-at (js/Date.now)}]))

(defn todo [id]
  (let [todo (hbr/entity db-conn id)]
    (fn []
      [:div {:style {:display "flex" :flex-direction "row" :align-items "center"}}
       [:input
        {:type "checkbox"
         :checked (true? (:todo/completed? @todo))
         :on-change #(d/transact! db-conn [[:db/add (:db/id @todo) :todo/completed? (goog.object/getValueByKeys % #js ["target" "checked"])]])}]
       [:div {:style {:padding-left 6}}
        [:input
         {:type "text"
          :style {:border "none" :width "auto" :font-weight "bold"}
          :value (:todo/name @todo)
          :on-change #(d/transact! db-conn [[:db/add (:db/id @todo) :todo/name (goog.object/getValueByKeys % #js ["target" "value"])]])}]
        [:small {:style {:padding-left 6}}
         (.toString (js/Date. (:todo/created-at @todo)))]
        [:button
         {:on-click #(d/transact! db-conn [[:db/retractEntity (:db/id @todo)]])}
         "Delete"]]])))

(defn todos []
  (let [todos (hbr/q '[:find ?e ?t
                       :where [?e :todo/created-at ?t]]
                     db-conn)]
    (fn []
      [:div
       (doall
        (for [[id] (reverse (sort-by peek @todos))]
          ^{:key id} [todo id]))])))

(defn new-todo []
  (let [name (r/atom "")]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (d/transact! db-conn [{:todo/name @name
                                                  :todo/created-at (js/Date.now)}])
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

(defcard-rg todo-example
  todo-app)