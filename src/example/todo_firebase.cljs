(ns example.todo-firebase
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_gen/todo-firebase-example" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defcard-rg todo-firebase-example
  [react-example/App])

(def code-snippet 
  (clojure.string/replace-first
   (inline-resource "js/todo-firebase-example.jsx")
   "const { HomebaseProvider, useClient, useTransact, useQuery, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useClient, useTransact, useQuery, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/js/todo-firebase-example.jsx)"
  (str "```javascript\n" code-snippet "\n```"))

