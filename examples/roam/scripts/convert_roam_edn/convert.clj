(ns convert
  "Converts an export from Roam Research into an 
   edn file that can be read into Homebase React.
  
   Homebase React expects a single namespace per entity
   to make Datalog feel more like SQL and tabular data.
   
   This script normalizes all attributes to the 'block' namespace."
  {:no-doc true}
  (:require [clojure.pprint]))

;; (def input (read-string (slurp "scripts/convert_roam_edn/datasets/hn.edn")))
(def input (read-string (slurp (first *command-line-args*))))

(def output
  {:schema
   (reduce-kv
    (fn [acc k v]
      (assoc acc (keyword "block" (name k)) v))
    {} (:schema input))
   :datoms
   (reduce
    (fn [acc [e a v t]]
      (cond-> acc
        (= a :node/title) (conj [e :block/node? true t])
        true (conj [e (keyword "block" (name a)) v t])))
    [] (:datoms input))})

(def filename (str "public/edn/" (last (clojure.string/split (first *command-line-args*) #"\/"))))

(spit filename "#datascript/DB ")
(clojure.pprint/pprint output (clojure.java.io/writer filename :append true))

