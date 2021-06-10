(ns dev.example.reagent.counter
  (:require
   [devcards.core :as dc]
   [datascript.core :as d]
   [homebase.reagent :as hbr])
  (:require-macros
   [devcards.core :refer [defcard-rg]]))

(def db-conn (d/create-conn {}))
(hbr/connect! db-conn)
(d/transact! db-conn [[:db/add 1 :count 0]])

(defn counter []
  (let [[e] (hbr/entity db-conn 1)]
    (fn []
      [:div
       "Count: " (:count @e)
       [:div
        [:button {:on-click #(d/transact! db-conn [[:db/add 1 :count (inc (:count @e))]])}
         "Increment"]]])))

(defcard-rg counter-example
  counter)