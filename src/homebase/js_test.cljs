(ns homebase.js-test
  (:require
   [clojure.test :refer [deftest testing is]]
   [datascript.core :as d]
   [homebase.js :as hbjs]))

(deftest test-transact
  (testing "should succeed"
    (is (map? (hbjs/transact! (d/create-conn)
                              (clj->js [{"wat" {"thing" 1}}
                                        ["retractEntity" 1]])))))
  (testing "should fail with humanized errors"
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected an array of transactions.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js {}))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected 'retractEntity'.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [[]]))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected 'retractEntity'.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [["notAThing"]]))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected a numerical id.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [["retractEntity" "wat"]]))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected a numerical id.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [["retractEntity"]]))))))

(deftest test-transact
  (testing "should succeed"
    (is (map? (hbjs/transact! (d/create-conn)
                              (clj->js [{"wat" {"thing" 1}}
                                        ["retractEntity" 1]])))))
  (testing "should fail with humanized errors"
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected an array of transactions.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js {}))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected 'retractEntity'.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [[]]))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected 'retractEntity'.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [["notAThing"]]))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected a numerical id.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [["retractEntity" "wat"]]))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected a numerical id.*For example:"
         (hbjs/transact! (d/create-conn) (clj->js [["retractEntity"]]))))))

(deftest test-entity
  (testing "should succeed"
    (is (= 1 (:db/id (hbjs/entity (d/create-conn) (clj->js 1))))))
  (testing "should fail with humanized errors"
    (is (thrown-with-msg?
         js/Error
         #"(?s)The `item.number` attribute should be marked as unique if you want to lookup entities by it.*Add this to your config:"
         (hbjs/entity (d/create-conn) (clj->js {"item" {"number" 1}}))))))

(deftest test-query
  (testing "should succeed"
    (is (array? (hbjs/q (clj->js {"$find" "item"
                                  "$where" {"item" {"name" "$any"}}})
                        (d/create-conn))))
    (is (array? (hbjs/q (clj->js "[:find ?e :where [?e :item/name]]") (d/create-conn)))))
  (testing "should fail with humanized errors"
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected query to be in the form of an object or datalog string.*For example:"
         (hbjs/q (clj->js 1) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected query to be in the form of an object or datalog string.*For example:"
         (hbjs/q (clj->js "") (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected query to be in the form of an object or datalog string.*For example:"
         (hbjs/q (clj->js []) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected query to have a \$find and a \$where clause.*For example:"
         (hbjs/q (clj->js {}) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected query to have a \$find and a \$where clause.*For example:"
         (hbjs/q (clj->js {"item" {"number" 1}}) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected to see 'todo' in both the \$find and \$where clauses.*For example:"
         (hbjs/q (clj->js {"$find" "todo"}) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected to see 'item' in both the \$find and \$where clauses.*For example:"
         (hbjs/q (clj->js {"$find" "item"
                           "$where" {"todo" {"name" "wat"}}}) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Expected \$where clause to be a nested object, not 1.*For example:"
         (hbjs/q (clj->js {"$find" "todo"
                           "$where" {"todo" 1}}) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Cannot parse :find, expected: \(find-rel \| find-coll \| find-tuple \| find-scalar\)"
         (hbjs/q (clj->js "[]") (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Cannot parse :find, expected: \(find-rel \| find-coll \| find-tuple \| find-scalar\)"
         (hbjs/q (clj->js "{}") (d/create-conn))))))