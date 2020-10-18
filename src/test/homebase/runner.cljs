(ns test.homebase.runner
)

(defn start []
) 

(defn stop [done]
  ; tests can be async. You must call done so that the runner knows you actually finished
  (done)
)

(defn ^:export init []
(start)
)