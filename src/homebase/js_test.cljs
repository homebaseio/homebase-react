(ns homebase.js-test
  (:require
   [clojure.test :refer [deftest testing is]]
   [datascript.core :as d]
   [homebase.js :as hbjs]))

(def test-tx
  (clj->js
   [{:noIdEntity {:a1 1 :a2 2}}
    [:retractEntity 9999]
    {:todo {:id 3 :identity "todo3" :project {:id 2}}}
    {:project {:id 2 :name "abc" :number nil}}
    {:project {:id 4 :name "xyz" :number 23 :isCompleted true}}
    {:project {:id 5 :name "abc"}}
    {:project {:id 6 :name "p4" :user {:name "Stella" :avatar {:url "http://foo.bar"}}}}
    {:project {:id 7 :name "p5" :array [1 2 "c"]}}
    {:org {:id 8 :projects [{:id 4} {:id 5} {:id 6 :extra "don't add extras here, this shorthand is just for ids"}]}}
    {:org {:id 9 :projects [{:project {:id 4}} {:project {:id 5}} {:project {:id 6 :extra "add extras like this"}}]}}]))

(def test-schema
  (merge
   {:db/ident {:db/unique :db.unique/identity}
    :homebase.array/ref {:db/type :db.type/ref
                         :db/cardinality :db.cardinality/one}}
   (hbjs/js->schema
    (clj->js {:todo {:project {:type "ref" :cardinality "one"}}
              :project {:number {:unique "identity"}
                        :array {:type "ref" :cardinality "many"}
                        :user {:type "ref" :cardinality "one"}}
              :user {:avatar {:type "ref" :cardinality "one"}}
              :org {:projects {:type "ref" :cardinality "many"}}}))))

;; TODO: how will this work with the proposed JSON serializer?
;;  - will order be preserved?
;;  - how will we know when an array is ids or just numbers?
;;  - what about nested objects? will they be turned into refs?
;;  proposal - instead of
;;  {:org {:id 7 :projects [4 5 6]}}
;;  we could do
;;  {:org {:id 7 :projects [{:id 4} {:id 5} {:id 6}]}}
;;  or even
;;  {:org {:id 7 :projects [{:project {:id 4}} {:project {:id 5}} {:project {:id 6}}]}}
;;  
;; TODO: array order support
;; - Maybe add a :db/order attr and break ties with :db/id
;; - What will the API look like for reordering?
;;   - Will you have to manually set :db/order to position you want?
;;   
;; TODO: isComponent support
;; - What will the API look like?
;; - Will we prompt people to add this to the scheme when we prompt them to add a type:'ref'?
;; 
;; TODO: array item reordering and deletion
;; - Entity unwraps the :homebase.array off the inner value. This makes it impossible to edit :homebase.array/order

(deftest test-js->tx
  (testing "everything"
    (is (= (hbjs/js->tx test-schema test-tx)
           '([:db.fn/retractEntity 9999 nil nil]
             [:db/add 9 :org/projects -1000017]
             [:db/add 9 :org/projects -1000018]
             [:db/add 9 :org/projects -1000019]
             [:db/add 8 :org/projects -1000013]
             [:db/add 8 :org/projects -1000014]
             [:db/add 8 :org/projects -1000015]
             [:db/add 7 :project/name "p5"]
             [:db/add 7 :project/array -1000009]
             [:db/add 7 :project/array -1000010]
             [:db/add 7 :project/array -1000011]
             [:db/add 6 :project/name "p4"]
             [:db/add 6 :project/user -1000006]
             [:db/add 6 :project/extra "don't add extras here, this shorthand is just for ids"]
             [:db/add 6 :project/extra "add extras like this"]
             [:db/add 5 :project/name "abc"]
             [:db/add 4 :project/name "xyz"]
             [:db/add 4 :project/number 23]
             [:db/add 4 :project/completed? true]
             [:db/add 3 :db/ident "todo3"]
             [:db/add 3 :todo/project 2]
             [:db/add 2 :project/name "abc"]
             [:db/retract 2 :project/number nil]
             [:db/add -1000000 :no-id-entity/a-1 1]
             [:db/add -1000000 :no-id-entity/a-2 2]
             [:db/add -1000006 :user/name "Stella"]
             [:db/add -1000006 :user/avatar -1000007]
             [:db/add -1000007 :avatar/url "http://foo.bar"]
             [:db/add -1000009 :homebase.array/order 1]
             [:db/add -1000009 :homebase.array/value 1]
             [:db/add -1000010 :homebase.array/order 2]
             [:db/add -1000010 :homebase.array/value 2]
             [:db/add -1000011 :homebase.array/order 3]
             [:db/add -1000011 :homebase.array/value "c"]
             [:db/add -1000013 :homebase.array/order 1]
             [:db/add -1000013 :homebase.array/ref 4]
             [:db/add -1000014 :homebase.array/order 2]
             [:db/add -1000014 :homebase.array/ref 5]
             [:db/add -1000015 :homebase.array/order 3]
             [:db/add -1000015 :homebase.array/ref 6]
             [:db/add -1000017 :homebase.array/order 1]
             [:db/add -1000017 :homebase.array/ref 4]
             [:db/add -1000018 :homebase.array/order 2]
             [:db/add -1000018 :homebase.array/ref 5]
             [:db/add -1000019 :homebase.array/order 3]
             [:db/add -1000019 :homebase.array/ref 6])))))

(def test-conn
  (let [conn (d/create-conn test-schema)]
    (hbjs/transact! conn test-tx)
    conn))

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
    (is (= 3 (:db/id ^hbjs/HBEntity (.-_entity (hbjs/entity test-conn 3)))))
    (is (= 3 (get ^hbjs/HBEntity (.-_entity (hbjs/entity test-conn 3)) "id")))
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
    (is (= 2 (get-in ^hbjs/HBEntity (.-_entity (hbjs/entity test-conn 3)) ["project" "id"])))
    (is (= "abc" (get-in ^hbjs/HBEntity (.-_entity (hbjs/entity test-conn 3)) ["project" "name"])))
    (testing "arrays"
      (is (= [1 2 "c"] (js->clj (.map (.get (hbjs/entity test-conn 7) "array") #(.get % "value")))))
      (is (= "c" (.get (hbjs/entity test-conn 7) "array" 2 "value")))
      (is (= "xyz" (.get (hbjs/entity test-conn 8) "projects" 0 "ref" "name")))
      (is (= "xyz" (.get (hbjs/entity test-conn 9) "projects" 0 "ref" "name")))
      (is (= "add extras like this" (.get (hbjs/entity test-conn 9) "projects" 2 "ref" "extra")))
      (testing "shorthand for automatic mapping over array fields via .get"
        (is (= [1 2 "c"] (js->clj (.get (hbjs/entity test-conn 7) "array" "value"))))
        (is (= ["xyz" "abc" "p4"] (js->clj (.get (hbjs/entity test-conn 8) "projects" "ref" "name"))))
        (testing "nil punning"
          (is (= [nil nil nil] (js->clj (.get (hbjs/entity test-conn 8) "projects" "value" "name" "yolo")))))))
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
         (hbjs/transact! (d/create-conn) (clj->js [["retractEntity"]]))))
    (testing "schema recommendations"
      (is (thrown-with-msg?
           js/Error
           #"(?s)The 'item.child' attribute should be a ref type of one.*Add this to your config:"
           (hbjs/transact! (d/create-conn) (clj->js [{:item {:child {:grandChild 1}}}]))))
      (is (thrown-with-msg?
           js/Error
           #"(?s)The 'item.numbers' attribute should be a ref type of many.*Add this to your config:"
           (hbjs/transact! (d/create-conn) (clj->js [{:item {:numbers [1 2 3]}}]))))
      (is (thrown-with-msg?
           js/Error
           #"(?s)The 'item.children' attribute should be a ref type of many.*Add this to your config:"
           (hbjs/transact! (d/create-conn) (clj->js [{:item {:children [{:otherEntity {:number 1}}]}}]))))
      (is (thrown-with-msg?
           js/Error
           #"(?s)Unsupported JSON in transaction: nested array of arrays `projects: \[\[1\]\]`."
           (hbjs/transact! test-conn (clj->js [{:org {:projects [[1]]}}])))))))

(deftest test-entity
  (testing "should succeed"
    (is (nil? (:db/id (hbjs/entity (d/create-conn) 1))))
    (is (nil? (:db/id (hbjs/entity (d/create-conn) (clj->js {"identity" "foo"}))))))
  (testing "id lookup"
    (is (= "abc" (.get (hbjs/entity test-conn 2) "name"))))
  (testing "identity lookup"
    (is (= 3 (.get (hbjs/entity test-conn (clj->js {"identity" "todo3"})) "id"))))
  (testing "unique attribute lookup"
    (is (= "xyz" (.get (hbjs/entity test-conn (clj->js {"project" {"number" 23}})) "name"))))
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
    (is (= 5 (count (hbjs/q (clj->js {"$find" "project"
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