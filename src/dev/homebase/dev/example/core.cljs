(ns homebase.dev.example.core
  {:no-doc true}
  (:require
   ["highlight.js" :as highlight]
   ["marked" :as marked]
   [cljsjs.react]
   [cljsjs.react.dom]
   [reagent.core]
   [devcards.core :as dc]
   [homebase.dev.example.react.array]
   [homebase.dev.example.react.counter]
   [homebase.dev.example.react.todo]
   [homebase.dev.example.react.todo-firebase] 
   [homebase.dev.example.reagent]))

(js/goog.exportSymbol "marked" marked)
(js/goog.exportSymbol "DevcardsMarked" marked)
(js/goog.exportSymbol "highlight" highlight)
(js/goog.exportSymbol "DevcardsSyntaxHighlighter" highlight)

(defn init []
  (dc/start-devcard-ui!))
