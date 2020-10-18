(ns test.homebase.reagent-performance-test
  (:require [reagent.core :as r]
            [reagent.impl.template :as tmpl]
            [reagent.impl.protocols :as p]
            [cljs.test :as t :refer [deftest testing is]]))

(defn hello-world-component []
  [:h1 "Hello world"])

(def functional-compiler (r/create-compiler {:function-components true}))

(def click-count (r/atom 0))

(defn counting-component []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defn test-functional [component]
  (js/performance.mark "functional-start")
  ; (simple-benchmark [x [hello-world-component]] (p/as-element functional-compiler x) 100000)
  (dotimes [i 100000]
    (p/as-element functional-compiler [component]))
  (js/performance.mark "functional-end")
  (js/console.log (.stringify js/JSON  (js/performance.measure "functional" "functional-start" "functional-end"))))

(defn test-class [component]
  (js/performance.mark "class-start")
  ; (simple-benchmark [x [hello-world-component]] (p/as-element tmpl/default-compiler* x) 100000)
  (dotimes [i 100000]
    (p/as-element tmpl/default-compiler* [component]))
  (js/performance.mark "class-end")
  (js/console.log  (.stringify js/JSON  (js/performance.measure "class" "class-start" "class-end"))))


(deftest create-nonstateful-element-test []
  (print "nonstateful test")
  (test-functional hello-world-component)
  (test-class hello-world-component))


(deftest create-stateful-element-test []
  (print "stateful test")
  (test-functional counting-component)
  (test-class counting-component))
