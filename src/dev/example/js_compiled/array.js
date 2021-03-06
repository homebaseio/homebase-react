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
  lookupHelpers: {
    store: {
      items: {
        type: 'ref',
        cardinality: 'many'
      }
    },
    item: {
      date: {
        type: 'ref',
        cardinality: 'one'
      }
    }
  },
  initialData: [{
    store: {
      identity: 'store 1',
      items: [{
        item: {
          name: 'item 1'
        }
      }, {
        item: {
          name: 'item 2'
        }
      }, {
        item: {
          name: 'item 3'
        }
      }, {
        item: {
          name: 'item 4'
        }
      }, {
        item: {
          name: 'item 5',
          date: {
            year: 2021,
            month: 1,
            day: 3
          }
        }
      }]
    }
  }]
};

const App = () => /*#__PURE__*/_react.default.createElement(HomebaseProvider, {
  config: config
}, /*#__PURE__*/_react.default.createElement(Items, null));

exports.App = App;

const Items = () => {
  const [store] = useEntity({
    identity: 'store 1'
  });
  const [transact] = useTransact();
  let newI = null;

  const onDragOver = _react.default.useCallback(e => {
    e.preventDefault();
    newI = parseInt(e.target.dataset.index);
  });

  const reorder = _react.default.useCallback((id, orderMin, orderMax) => {
    const order = (orderMin + orderMax) / 2.0;
    transact([{
      'homebase.array': {
        id,
        order
      }
    }]);
  }, [transact]);

  return /*#__PURE__*/_react.default.createElement("div", null, store.get('items').map((item, i) => /*#__PURE__*/_react.default.createElement("div", {
    key: item.get('ref', 'id'),
    style: {
      cursor: 'move'
    },
    "data-index": i,
    draggable: true,
    onDragOver: onDragOver,
    onDragEnd: e => reorder(item.get('id'), newI > 0 && store.get('items', newI - 1, 'order') || 0, store.get('items', newI, 'order'))
  }, "\u2195 ", item.get('ref', 'name'), " \xA0", /*#__PURE__*/_react.default.createElement("small", null, item.get('ref', 'date', 'year')))));
};