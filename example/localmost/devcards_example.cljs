(ns localmost.devcards-example
  (:require 
   [reagent.core :as r]
   [localmost.reagent :as lmr])
  (:require-macros 
   [devcards.core :refer [defcard defcard-rg]]))

(defcard test-card
  "wat
   # wat")

;; examples from http://rigsomelight.com/devcards/#!/devdemos.reagent


(defcard reagent-example-1
  (r/as-element [:h1 "Reagent Example"]))


(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defonce counter1-state (r/atom {:count 0}))

(defn counter1 []
  [:div "Current count: " (@counter1-state :count)
   [:div
    [:button {:on-click #(on-click counter1-state)}
     "Increment"]]])

(defcard-rg counter1
  [counter1])