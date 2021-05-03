(ns homebase.datalog-console
  (:require [goog.object :as gobj]
            [cljs.reader]))

(js/document.documentElement.setAttribute "__datalog-inspect-remote-installed__" true)

(defn init-datalog-console
  [{:keys [conn]}]
  (.addEventListener js/window "message"
                     (fn [event]
                       (when-let [devtool-message (gobj/getValueByKeys event "data" "datalog-console.client/devtool-message")]
                         (let [msg-type (:type (cljs.reader/read-string devtool-message))]
                           (case msg-type

                             :datalog-console.client/request-whole-database-as-string
                             (.postMessage js/window #js {:datalog-remote-message (pr-str @conn)} "*")

                             nil))))))