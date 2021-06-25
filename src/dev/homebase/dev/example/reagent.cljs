(ns homebase.dev.example.reagent
  (:require
   [devcards.core :as dc]
   [homebase.dev.example.reagent.counter :as counter]
   [homebase.dev.example.reagent.todo :as todo])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [homebase.dev.macros :refer [inline-resource]]))

(defcard-doc
  "# [Homebase React](https://github.com/homebaseio/homebase-react) | Reagent Examples
   
  [![cljdoc badge](https://cljdoc.org/badge/io.homebase/homebase-react)](https://cljdoc.org/d/io.homebase/homebase-react/CURRENT)

   Examples

   - counter
   - todo")

(defcard-doc "---")

(defcard-doc "## Counter Example")
(defcard-rg counter
  counter/counter)
(defcard-doc
  (str "```clojure\n" (inline-resource "src/dev/homebase/dev/example/reagent/counter.cljs") "\n```"))
(defcard-doc "---")

(defcard-doc "## Todo Example")
(defcard-rg todo
  todo/todo-app)
(defcard-doc
  (str "```clojure\n" (inline-resource "src/dev/homebase/dev/example/reagent/todo.cljs") "\n```"))