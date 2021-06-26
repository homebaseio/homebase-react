(ns homebase.dev.macros
  {:no-doc true})

(defmacro inline-resource [resource-path]
  (try
    (slurp resource-path)
    (catch Error e (print e))))

