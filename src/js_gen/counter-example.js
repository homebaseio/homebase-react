import React from 'react'; // TODO: for dev purposes this packages is being mounted on the window by example.counter in CLJS, but see if it's easy to build and import from node_modules instead so this example can look more like it would in production.
// import { useTransact, useEntity } from 'shadow-cljs/localmost.react';

const {
  useQuery,
  useTransact
} = window.localmost.react;
const conn = localmost.react.new_db_conn([{
  'db/id': 1,
  'count': 0
}]);
window.conn = conn;
export const Counter = () => {
  const count = localmost.react.q(1, conn).get(cljs.core.keyword('count'));
  return /*#__PURE__*/React.createElement("div", null, "localmost React JS count: ", count, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => localmost.react.transact_BANG_(conn, [['db/add', 1, 'count', count + 1]])
  }, "Increment")));
};