(ns example.todo
  (:require 
   [devcards.core :as dc]
   [reagent.core :as r]
   [homebase.reagent :as lmr]
   [homebase.react]
   ["../js_gen/todo-example" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defcard-rg react-js-homebase-todo
  [react-example/App])

(def code-snippet (inline-resource "js/todo-example.jsx"))
(defcard-doc
  (str "```javascript\n" code-snippet "\n```"))

