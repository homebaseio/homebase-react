(ns example.array
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_gen/array-example" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defcard-rg array-example
  [react-example/App])

(def code-snippet
  (clojure.string/replace-first
   (inline-resource "js/array-example.jsx")
   "const { HomebaseProvider, useTransact, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useTransact, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/js/array-example.jsx)"
  (str "```javascript\n" code-snippet "\n```"))

