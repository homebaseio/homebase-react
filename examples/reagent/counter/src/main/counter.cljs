(ns counter
  (:require
   [reagent.dom :as rdom]
   [datascript.core :as d]
   [homebase.reagent :as hbr]
   [datalog-console.integrations.datascript :as datalog-console]))

(def db-conn (d/create-conn {}))
(d/transact! db-conn [[:db/add 1 :count 0]]) ; Transact some starting data.
(hbr/connect! db-conn) ; Connect homebase.reagent to the database.
(datalog-console/enable! {:conn db-conn}) ; Also connect the datalog-console extension for better debugging.

(defn counter []
  (let [[entity] (hbr/entity db-conn 1)] ; Get a homebase.reagent/Entity. Note the use of db-conn and not @db-conn, this makes it reactive.
    (js/console.log @entity)
    (fn []
      [:div
       "Count: " (:count @entity) ; Deref the entity just like a reagent/atom.
       [:div
        [:button {:on-click #(d/transact! db-conn [[:db/add 1 :count (inc (:count @entity))]])} ; Use d/transact! just like normal.
         "Increment"]]])))

(defn init! []
  (rdom/render [counter] (.-body js/document)))
