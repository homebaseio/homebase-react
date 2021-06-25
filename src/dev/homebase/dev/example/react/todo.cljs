(ns homebase.dev.example.react.todo
  {:no-doc true}
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_compiled/todo" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [homebase.dev.macros :refer [inline-resource]]))

(defcard-rg todo-example
  [react-example/App])

(def code-snippet 
  (clojure.string/replace-first
   (inline-resource "src/dev/homebase/dev/example/js/todo.jsx")
   "const { HomebaseProvider, useTransact, useQuery, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useTransact, useQuery, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/src/dev/homebase/dev/example/js/todo.jsx)"
  "For an annotated walkthrough of this code [check out the tutorial 📖](https://www.notion.so/Homebase-Alpha-Docs-0f0e22f3adcd4e9d87a13440ab0c7a0b)."
  (str "```javascript\n" code-snippet "\n```"))

