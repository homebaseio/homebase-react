(ns homebase.test-polyfills
  {:no-doc true}
  (:require 
   ["@peculiar/webcrypto" :refer [Crypto]]
   ["jsdom" :refer [JSDOM]]))

; nano-id node.js polyfill
(set! js/crypto (Crypto.))

; jsdom polyfill
(def dom (JSDOM. "<!DOCTYPE html>" #js {:pretendToBeVisual true}))
(set! js/window dom.window)
(set! js/document dom.window.document)
(set! js/navigator #js {:userAgent "node.js"})