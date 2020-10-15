(ns example.counter
  (:require 
   [devcards.core :as dc]
   [reagent.core :as r]
   [homebase.reagent :as lmr]
   [homebase.react]
   ["../js_gen/counter-example" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defn reagent-atom-counter []
  (let [state (r/atom {:count 0})]
    (fn []
      [:div "reagent.core/atom count: " (:count @state)
       [:div
        [:button {:on-click #(swap! state update-in [:count] inc)}
         "Increment"]]])))

(defcard-rg reagent-atom-counter
  [reagent-atom-counter])

(defcard-doc
  (dc/mkdn-pprint-source reagent-atom-counter))


(defn lmr-count [conn]
  [:<> "homebase.reagent count: " (:count (lmr/q 1 conn))])

(defn lmr-inc-button [conn]
  [:button {:on-click #(lmr/transact! conn [[:db/add 1 :count (inc (:count (lmr/q 1 conn)))]])}
   "Increment"])

(defn lmr-counter []
  (let [conn (lmr/new-db-conn [{:db/id 1, :count 0}])]
    (fn []
      [:div [lmr-count conn]
       [:div [lmr-inc-button conn]]])))

(defcard-rg reagent-homebase-counter
  [lmr-counter])

(defcard-doc
  (dc/mkdn-pprint-source lmr-count)
  (dc/mkdn-pprint-source lmr-inc-button)
  (dc/mkdn-pprint-source lmr-counter))


(defcard-rg react-js-homebase-counter
  [react-example/App])

(def code-snippet (inline-resource "js/counter-example.jsx"))
(defcard-doc
  (str "```javascript\n" code-snippet "\n```"))

