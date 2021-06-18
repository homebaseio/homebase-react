(ns dev.example.reagent
  (:require
   [devcards.core :as dc]
   [dev.example.reagent.counter :as counter]
   [dev.example.reagent.todo :as todo])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defcard-doc
  "# [Homebase React](https://github.com/homebaseio/homebase-react) | Reagent Examples
   
   Examples

   - counter
   - todo")

(defcard-doc "---")

(defcard-doc "## Counter Example")
(defcard-rg counter
  counter/counter)
(defcard-doc
  (str "```clojure\n" (inline-resource "src/dev/example/reagent/counter.cljs") "\n```"))
(defcard-doc "---")

(defcard-doc "## Todo Example")
(defcard-rg todo
  todo/todo-app)
(defcard-doc
  (str "```clojure\n" (inline-resource "src/dev/example/reagent/todo.cljs") "\n```"))