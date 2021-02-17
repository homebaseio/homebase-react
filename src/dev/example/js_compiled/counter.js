"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  HomebaseProvider,
  useTransact,
  useEntity
} = window.homebase.react;
const config = {
  initialData: [{
    counter: {
      identity: 'counter',
      count: 0
    }
  }]
};

const App = () => /*#__PURE__*/_react.default.createElement(HomebaseProvider, {
  config: config
}, /*#__PURE__*/_react.default.createElement(Counter, null));

exports.App = App;

const Counter = () => {
  const [counter] = useEntity({
    identity: 'counter'
  });
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("div", null, "Count: ", counter.get('count'), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => transact([{
      counter: {
        id: counter.get('id'),
        count: counter.get('count') + 1
      }
    }])
  }, "Increment")));
};