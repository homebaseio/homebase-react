(ns test.localmost.runner
  (:require [test.localmost.simple-test :as simple-test]
))

(defn start []
) 

(defn stop [done]
  ; tests can be async. You must call done so that the runner knows you actually finished
  (done)
)

(defn ^:export init []
(start)
)