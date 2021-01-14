(ns example.core
  (:require
   ["highlight.js" :as highlight]
   ["marked" :as marked]
   [cljsjs.react]
   [cljsjs.react.dom]
   [reagent.core]
   [devcards.core :as dc]
   [example.array]
   [example.counter]
   [example.todo]
   [example.todo-firebase]))

(js/goog.exportSymbol "marked" marked)
(js/goog.exportSymbol "DevcardsMarked" marked)
(js/goog.exportSymbol "highlight" highlight)
(js/goog.exportSymbol "DevcardsSyntaxHighlighter" highlight)

(defn init []
  (dc/start-devcard-ui!))
