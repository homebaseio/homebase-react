(ns dev.macros)

(defmacro inline-resource [resource-path]
  (slurp resource-path))

