(ns dev.example.core
  (:require
   ["highlight.js" :as highlight]
   ["marked" :as marked]
   [cljsjs.react]
   [cljsjs.react.dom]
   [reagent.core]
   [devcards.core :as dc]
   [dev.example.react.array]
   [dev.example.react.counter]
   [dev.example.react.todo]
   [dev.example.react.todo-firebase]
   [dev.example.reagent.counter]
   [dev.example.reagent.todo]))

(js/goog.exportSymbol "marked" marked)
(js/goog.exportSymbol "DevcardsMarked" marked)
(js/goog.exportSymbol "highlight" highlight)
(js/goog.exportSymbol "DevcardsSyntaxHighlighter" highlight)

(defn init []
  (dc/start-devcard-ui!))
