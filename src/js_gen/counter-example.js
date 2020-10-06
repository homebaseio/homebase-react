import React from 'react';
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
export const App = () => /*#__PURE__*/React.createElement(HomebaseProvider, {
  config: config
}, /*#__PURE__*/React.createElement(Counter, null));

const Counter = () => {
  const [counter] = useEntity({
    identity: 'counter'
  });
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement("div", null, "Count: ", counter.get('count'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => transact([{
      counter: {
        id: counter.get('id'),
        count: counter.get('count') + 1
      }
    }])
  }, "Increment")));
};