(ns localmost.examples
  (:require
   ["highlight.js" :as highlight]
   ["marked" :as marked]
   [cljsjs.react]
   [cljsjs.react.dom]
   [devcards.core :as dc]
   [localmost.devcards-example]
   [localmost.counter-example]))

(js/goog.exportSymbol "marked" marked)
(js/goog.exportSymbol "DevcardsMarked" marked)
(js/goog.exportSymbol "highlight" highlight)

(defn init []
  (dc/start-devcard-ui!))