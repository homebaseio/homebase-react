(ns dev.macros
  {:no-doc true})

(defmacro inline-resource [resource-path]
  (slurp resource-path))

