(ns homebase.js-test
  (:require
   [clojure.test :refer [deftest testing is]]
   [datascript.core :as d]
   [homebase.js :as hbjs]))

(def test-conn
  (d/conn-from-db
   (d/init-db
    #{(d/datom 3 :todo/project 2)
      (d/datom 2 :project/name "abc")
      (d/datom 4 :project/name "xyz")
      (d/datom 4 :project/number 23)
      (d/datom 4 :project/completed? true)
      (d/datom 5 :project/name "abc")
      (d/datom 6 :project/name "p4")}
    {:todo/project {:db/valueType :db.type/ref
                    :db/cardinality :db.cardinality/one}})))

(deftest test-entity-get
  (testing "datascript entity get"
    (is (thrown-with-msg?
         js/Error
         #"Cannot read property 'get' of null"
         (.get (d/entity @(d/create-conn) nil) :db/id)))
    (is (= 3 (:db/id (d/entity @(d/create-conn) 3))))
    (is (= 3 (.get (d/entity @(d/create-conn) 3) :db/id)))
    (is (nil? (.get (d/entity @(d/create-conn) 3) :todo/name)))
    (is (nil? (get-in (d/entity @(d/create-conn) 3) [:todo/project :db/id])))
    (is (= 2 (get-in (d/entity @test-conn 3) [:todo/project :db/id])))
    (is (some? (get-in (d/entity @test-conn 2) [:todo/_project])))
    (is (= 2 (.get (d/entity @test-conn 3) :todo/project :db/id)))
    (is (= 3 (get (d/entity @test-conn 3) :db/id)))
    (is (= 3 (.get (d/entity @test-conn 3) "id")))
    (is (= 2 (.get (d/entity @test-conn 3) "project" "id")))
    (is (thrown? js/Error (get (d/entity @test-conn 3) "id")))
    (is (thrown? js/Error (get-in (d/entity @test-conn 3) ["project" "id"])))
    (is (= "abc" (.get (d/entity @test-conn 3) "project" "name"))))
  (testing "homebase entity get"
    (is (some? (hbjs/entity (d/create-conn) 3)))
    (is (= 3 (:db/id (hbjs/entity test-conn 3))))
    (is (= 3 (get (hbjs/entity test-conn 3) "id")))
    (is (= 3 (.get (hbjs/entity test-conn 3) "id")))
    (is (nil? (.get (hbjs/entity (d/create-conn) 3) "name")))
    (is (= "abc" (.get (hbjs/entity test-conn 2) "name")))
    (is (nil? (get-in (hbjs/entity (d/create-conn) 3) ["project" "id"])))
    (is (some? (.get (hbjs/entity test-conn 2) ":todo/_project")))
    (is (= "abc" (.get (hbjs/entity test-conn 3) "project" "name")))
    (is (nil? (:db/id (hbjs/entity (d/create-conn) 3))))
    (is (nil? (.get (hbjs/entity (d/create-conn) 3) "id")))
    (is (nil? (get (hbjs/entity (d/create-conn) 3) "id")))
    (is (nil? (get-in (hbjs/entity (d/create-conn) 3) ["id"])))
    (is (nil? (.get (hbjs/entity (d/create-conn) 3) "project" "id")))
    (is (= 2 (get-in (hbjs/entity test-conn 3) ["project" "id"])))
    (is (= "abc" (get-in (hbjs/entity test-conn 3) ["project" "name"])))
    (testing "ref get without schema error"
      (is (thrown-with-msg?
           js/Error
           #"(?s)The `user.friend` attribute should be marked as ref.*Add this to your config:.*\{ schema: \{ user: \{ friend: \{ type: 'ref'"
           (let [conn (d/create-conn)]
             (hbjs/transact! conn #js [#js {:user #js {:id 1 :friend -2}}
                                       #js {:user #js {:id -2 :avatar -3}}
                                       #js {:avatar #js {:id -3 :uri "abc"}}])
             (.get (hbjs/entity conn 1) "friend" "avatar" "uri"))))
      (testing "error works for deeply nested get"
        (is (thrown-with-msg?
             js/Error
             #"(?s)The `user.avatar` attribute should be marked as ref.*Add this to your config:.*\{ schema: \{ user: \{ avatar: \{ type: 'ref'"
             (let [conn (d/create-conn {:user/friend {:db/type :db.type/ref}})]
               (hbjs/transact! conn #js [#js {:user #js {:id 1 :friend -2}}
                                         #js {:user #js {:id -2 :avatar -3}}
                                         #js {:avatar #js {:id -3 :uri "abc"}}])
               (.get (hbjs/entity conn 1) "friend" "avatar" "uri"))))))))


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
    (is (nil? (:db/id (hbjs/entity (d/create-conn) (clj->js 1))))))
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
  (testing "$any"
    (is (= 4 (count (hbjs/q (clj->js {"$find" "project"
                                      "$where" {"project" {"name" "$any"}}})
                            test-conn)))))
  (testing "filter by string"
    (is (= 2 (count (hbjs/q (clj->js {"$find" "project"
                                      "$where" {"project" {"name" "abc"}}})
                            test-conn)))))
  (testing "filter by bool"
    (is (= 1 (count (hbjs/q (clj->js {"$find" "project"
                                      "$where" {"project" {"isCompleted" true}}})
                            test-conn)))))
  (testing "filter by number"
    (is (= 1 (count (hbjs/q (clj->js {"$find" "project"
                                      "$where" {"project" {"number" 23}}})
                            test-conn)))))
  (testing "filter by multiple"
    (is (= 1 (count (hbjs/q (clj->js {"$find" "project"
                                      "$where" {"project" {"number" 23 "isCompleted" true}}})
                            test-conn))))
    (is (= 0 (count (hbjs/q (clj->js {"$find" "project"
                                      "$where" {"project" {"number" 23 "isCompleted" false}}})
                            test-conn)))))
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
         #"(?s)Expected \$where clause to be a nested object, not yolo.*For example:"
         (hbjs/q (clj->js {"$find" "todo"
                           "$where" {"todo" "yolo"}}) (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Cannot parse :find, expected: \(find-rel \| find-coll \| find-tuple \| find-scalar\)"
         (hbjs/q (clj->js "[]") (d/create-conn))))
    (is (thrown-with-msg?
         js/Error
         #"(?s)Cannot parse :find, expected: \(find-rel \| find-coll \| find-tuple \| find-scalar\)"
         (hbjs/q (clj->js "{}") (d/create-conn))))))