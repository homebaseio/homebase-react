import React from 'react'; // TODO: for dev purposes this packages is being mounted on the window by example.counter in CLJS, but see if it's easy to build and import from node_modules instead so this example can look more like it would in production.
// import { HomebaseProvider, useTransact, useQuery } from 'shadow-cljs/localmost.react';

const {
  HomebaseProvider,
  useTransact,
  useQuery
} = window.localmost.react;
const config = {
  initialData: [{
    'db/id': 1,
    'count': 0
  }]
};
export const App = () => {
  return /*#__PURE__*/React.createElement(HomebaseProvider, {
    config: config
  }, /*#__PURE__*/React.createElement(Counter, null));
};
export const Counter = () => {
  const [result] = useQuery(1);
  const count = result.get(cljs.core.keyword('count'));
  const [transact] = useTransact(); // const [a, b] = React.useState(1);

  return /*#__PURE__*/React.createElement("div", null, "localmost React JS count: ", count, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      transact([['db/add', 1, 'count', count + 1]]); // TODO: FIX: everything is working except for the r/atom deref. It's not triggering a rerender. But adding this useState shows that all the wiring is working as expected and the db is updating
      //b(a+1)
    }
  }, "Increment")));
};