(ns dev.example.react.array
  {:no-doc true}
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_compiled/array" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defcard-rg array-example
  [react-example/App])

(def code-snippet
  (clojure.string/replace-first
   (inline-resource "src/dev/example/js/array.jsx")
   "const { HomebaseProvider, useTransact, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useTransact, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/src/dev/example/js/array.jsx)"
  (str "```javascript\n" code-snippet "\n```"))

