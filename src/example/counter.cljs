(ns example.counter
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_gen/counter-example" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [dev.macros :refer [inline-resource]]))

(defcard-rg counter-example
  [react-example/App])

(def code-snippet
  (clojure.string/replace-first
   (inline-resource "js/counter-example.jsx")
   "const { HomebaseProvider, useTransact, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useTransact, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/js/counter-example.jsx)"
  (str "```javascript\n" code-snippet "\n```"))

