"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireDefault(require("react"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _reactComponentBenchmark = _interopRequireDefault(require("react-component-benchmark"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _homebase = require("../../dist/homebase.react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const config = {
  initialData: [{
    counter: {
      identity: 'counter',
      count: 0
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
  return /*#__PURE__*/_react.default.createElement("div", null, "Count: ", counter.get('count'), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => transact([{
      counter: {
        id: counter.get('id'),
        count: counter.get('count') + 1
      }
    }])
  }, "Increment")));
};

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

class Test extends _react.default.Component {
  render() {
    const counters = [];

    for (let step = 0; step < 100; step++) {
      counters.push( /*#__PURE__*/_react.default.createElement(Counter, {
        key: step
      }));
    }

    return /*#__PURE__*/_react.default.createElement(_homebase.HomebaseProvider, {
      config: config
    }, counters);
  }

}

describe('Benchmark', () => {
  let props;
  let meanTime;
  beforeEach(() => {
    meanTime = 0;
    props = {
      component: Test,
      onComplete: jest.fn(results => {
        meanTime = results.mean;
      }),
      samples: 20
    };
  });
  it('mounts in a reasonable amount of time', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_reactComponentBenchmark.default, props));
    component.instance().start();
    expect(meanTime).toBeLessThan(200);
  });
  it('updates in a reasonable amount of time', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_reactComponentBenchmark.default, _extends({}, props, {
      type: "update"
    })));
    component.instance().start();
    expect(meanTime).toBeLessThan(200);
  });
  it('unmounts in a reasonable amount of time', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_reactComponentBenchmark.default, _extends({}, props, {
      type: "unmount"
    })));
    component.instance().start();
    expect(meanTime).toBeLessThan(200);
  });
});