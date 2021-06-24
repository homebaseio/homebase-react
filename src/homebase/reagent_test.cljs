(ns homebase.reagent-test
  (:require
   [homebase.test-polyfills]
   [reagent.core :as r]
   [datascript.core :as d]
   [homebase.reagent :as hbr]
   [clojure.test :refer [deftest testing is use-fixtures]]
   [dev.example.reagent.counter :as counter]
   [dev.example.reagent.todo :as todo]
   ["@testing-library/react" :as rt]))

(set! *warn-on-infer* false)

(use-fixtures :each
  {:after rt/cleanup})

;; Idea from https://github.com/reagent-project/reagent/blob/master/test/reagenttest/utils.cljs
(defn with-mounted-component [comp f]
  (let [mounted-component (rt/render (r/as-element comp))]
    (try
      (f mounted-component)
      (finally
        (.unmount mounted-component)
        (r/flush)))))

(defn click-element [el]
  (.click rt/fireEvent el)
  (r/flush))

(deftest test-counter
  (do
    (reset! counter/db-conn @(d/create-conn))
    (d/transact! counter/db-conn [[:db/add 1 :count 0]])
    (hbr/connect! counter/db-conn)
    (with-mounted-component
      [counter/counter]
      (fn [^js/React component]
        (testing "The count should start at 0"
          (is (not (nil? (.getByText component "Count: 0")))))
        (testing "The count should inc by 1"
          (click-element (.getByText component "Increment"))
          (is (not (nil? (.getByText component "Count: 1")))))
        (testing "The count should inc by 2 more"
          (click-element (.getByText component "Increment"))
          (click-element (.getByText component "Increment"))
          (is (not (nil? (.getByText component "Count: 3")))))))))

(deftest test-todo
  (do
    (reset! todo/db-conn @(d/create-conn todo/schema))
    (d/transact! todo/db-conn todo/initial-tx)
    (hbr/connect! todo/db-conn)
    (with-mounted-component
      [todo/todo-app]
      (fn [component]
        (testing "render list"
          (is (not (nil? (.getByDisplayValue component "Go home"))))
          (is (not (nil? (.getByDisplayValue component "Fix ship")))))
        (testing "query updates list on filter change"
          (d/transact! todo/db-conn [{:db/id (:db/id (d/entity @todo/db-conn [:db/ident :todo.filters]))
                                      :todo.filter/show-completed? false}])
          (r/flush)
          (is (not (nil? (.getByDisplayValue component "Go home"))))
          (is (thrown-with-msg?
               js/Error
               #"Unable to find an element with the display value: Fix ship"
               (.getByDisplayValue component "Fix ship")))
          (d/transact! todo/db-conn [{:db/id (:db/id (d/entity @todo/db-conn [:db/ident :todo.filters]))
                                      :todo.filter/show-completed? true}])
          (r/flush))
        (testing "deletion"
          (click-element (nth (.getAllByText component "Delete") 0))
          (is (thrown-with-msg?
               js/Error
               #"Unable to find an element with the display value: Fix ship."
               (.getByDisplayValue component "Fix ship")))
          (is (not (nil? (.getByDisplayValue component "Go home")))))
        (testing "insertion"
          (d/transact! todo/db-conn [{:todo/name "A new test todo" :todo/created-at (js/Date.now)}])
          (r/flush)
          (is (not (nil? (.getByDisplayValue component "A new test todo")))))))))