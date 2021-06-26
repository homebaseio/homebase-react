(ns homebase.dev.example.react.todo-firebase
  {:no-doc true}
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_compiled/todo-firebase" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [homebase.dev.macros :refer [inline-resource]]))

(defcard-rg todo-firebase-example
  [react-example/App])

(def code-snippet 
  (clojure.string/replace-first
   (inline-resource "src/dev/homebase/dev/example/js/todo-firebase.jsx")
   "const { HomebaseProvider, useClient, useTransact, useQuery, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useClient, useTransact, useQuery, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/src/dev/homebase/dev/example/js/todo-firebase.jsx)"
  (str "```javascript\n" code-snippet "\n```"))

