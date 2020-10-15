(ns test.localmost.performance-test
  (:require [reagent.core :as r]
            [reagent.impl.template :as tmpl]
            [reagent.impl.protocols :as p]
            [cljs.test :as t :refer [deftest testing is]]))

(defn reagent-hello-world-component []
  [:h1 "Hello world"])

(def functional-compiler (r/create-compiler {:function-components true}))

(def reagent-test-functional []
  (js/performance.mark "functional-start")
  ; (simple-benchmark [x [hello-world-component]] (p/as-element functional-compiler x) 100000)
  (dotimes [i 100000]
    (p/as-element functional-compiler [reagent-hello-world-component]))
  (js/performance.mark "functional-end")
  (js/console.log (js/performance.measure "functional" "functional-start" "functional-end")))

(defn test-class [component]
  (js/performance.mark "class-start")
  ; (simple-benchmark [x [hello-world-component]] (p/as-element tmpl/default-compiler* x) 100000)
  (dotimes [i 100000]
    (p/as-element tmpl/default-compiler* [component]))
  (js/performance.mark "class-end")
  (js/console.log (js/performance.measure "class" "class-start" "class-end")))

(deftest reagent-create-element-test []
  (reagent-test-functional)
  (test-class reagent-hello-world-component))

(comment
  (reagent-create-element-test))
