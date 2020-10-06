(ns homebase.util)

(defn paths [m]
  (if (or (not (map? m)) (empty? m))
    '(())
    (for [[k v] m
          subkey (paths v)]
      (cons k subkey))))