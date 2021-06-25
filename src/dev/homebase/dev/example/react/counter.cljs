(ns homebase.dev.example.react.counter
  {:no-doc true}
  (:require 
   [devcards.core :as dc]
   [homebase.react]
   ["../js_compiled/counter" :as react-example])
  (:require-macros
   [devcards.core :refer [defcard-rg defcard-doc]]
   [homebase.dev.macros :refer [inline-resource]]))

(defcard-rg counter-example
  [react-example/App])

(def code-snippet
  (clojure.string/replace-first
   (inline-resource "src/dev/homebase/dev/example/js/counter.jsx")
   "const { HomebaseProvider, useTransact, useEntity } = window.homebase.react"
   "import { HomebaseProvider, useTransact, useEntity } from 'homebase-react'"))
(defcard-doc
  "[🔗GitHub](https://github.com/homebaseio/homebase-react/blob/master/src/dev/homebase/dev/example/js/counter.jsx)"
  (str "```javascript\n" code-snippet "\n```"))

