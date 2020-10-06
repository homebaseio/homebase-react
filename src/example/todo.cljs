(ns example.todo
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_gen/todo-example" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defcard-rg todo-example
  [react-example/App])

(def code-snippet 
  (clojure.string/replace-first
   (inline-resource "js/todo-example.jsx")
   "const { HomebaseProvider, useTransact, useQuery, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useTransact, useQuery, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/js/todo-example.jsx)"
  "For an annotated walkthrough of this code [check out the tutorial 📖](https://www.notion.so/Homebase-Alpha-Docs-0f0e22f3adcd4e9d87a13440ab0c7a0b)."
  (str "```javascript\n" code-snippet "\n```"))

