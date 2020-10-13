import React from 'react'; // TODO: for dev purposes this packages is being mounted on the window by example.counter in CLJS, but see if it's easy to build and import from node_modules instead so this example can look more like it would in production.
// import { HomebaseProvider, useTransact, useQuery } from 'shadow-cljs/localmost.react';

const {
  HomebaseProvider,
  useTransact,
  useQuery
} = window.localmost.react;
const config = {
  schema: {
    ':friend': {
      ':db/valueType': ':db.type/ref' // 'db/cardinality': 'db.cardinality/one'

    }
  },
  initialData: [{
    ':db/id': 1,
    ':count': 0,
    ':friend': 2
  }, {
    ':db/id': 2,
    ':name': 'test relationship'
  }]
};
export const App = () => {
  return /*#__PURE__*/React.createElement(HomebaseProvider, {
    config: config
  }, /*#__PURE__*/React.createElement(Counter, null));
};
export const Counter = () => {
  const [entity] = useQuery(1);
  const [transact] = useTransact();
  window.e = entity;
  return /*#__PURE__*/React.createElement("div", null, entity.get(':friend', ':name'), /*#__PURE__*/React.createElement("br", null), "localmost React JS count: ", entity.get(':count'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => transact([[':db/add', 1, ':count', entity.get(':count') + 1]])
  }, "Increment")));
};