"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireDefault(require("react"));

var _homebase = require("../dist/js/homebase.react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import hbr from '../dist/js/homebase.react';
// const { HomebaseProvider, useTransact, useEntity, useQuery, useClient } = window.homebase.react
// const { HomebaseProvider, useClient, useEntity, useQuery, useTransact } = hbr
const config = {
  initialData: [{
    counter: {
      id: 99,
      identity: 'counter',
      count: 0
    }
  }, {
    block: {
      id: 1,
      children: 2
    }
  }, {
    block: {
      id: 2,
      name: "b2",
      children: 3
    }
  }, {
    block: {
      id: 3,
      name: "b3"
    }
  }]
};

const App = () => /*#__PURE__*/_react.default.createElement(_homebase.HomebaseProvider, {
  config: config
}, /*#__PURE__*/_react.default.createElement(Counter, null));

exports.App = App;

const Counter = () => {
  const [counter] = (0, _homebase.useEntity)({
    identity: 'counter'
  });
  const [transact] = (0, _homebase.useTransact)();
  const [children] = (0, _homebase.useQuery)(`
    [:find ?e
     :where [_ :block/children ?e]]
  `);
  console.log(children);
  const [client] = (0, _homebase.useClient)();
  window.client = client;
  return /*#__PURE__*/_react.default.createElement("div", null, "Count: ", counter.get('count'), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => transact([{
      counter: {
        id: counter.get('id'),
        count: counter.get('count') + 1
      }
    }])
  }, "Increment")));
};