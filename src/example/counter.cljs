(ns example.counter
  (:require 
   [reagent.core :as r]
   [localmost.reagent :as lmr]
   [localmost.react]
   ["../js_gen/counter-example" :as react-example])
  (:require-macros 
   [devcards.core :refer [defcard defcard-rg]]))

(defn reagent-atom-counter []
  (let [state (r/atom {:count 0})]
    (fn []
      [:div "reagent.core/atom count: " (:count @state)
       [:div
        [:button {:on-click #(swap! state update-in [:count] inc)}
         "Increment"]]])))

(defcard-rg reagent-atom-counter
  [reagent-atom-counter])

(defn reagent-localmost-counter []
  (let [conn (lmr/new-db-conn [{:db/id 1, :count 0}])]
    (fn []
      [:div "localmost.reagent count: " (:count (lmr/q 1 conn))
       [:div
        [:button {:on-click #(lmr/transact! conn [[:db/add 1 :count (inc (:count (lmr/q 1 conn)))]])}
         "Increment"]]])))

(defcard-rg reagent-localmost-counter
  [reagent-localmost-counter])

(defcard-rg react-js-localmost-counter
  [react-example/Counter])

