import React from 'react'; // import { HomebaseProvider, useTransact, useQuery } from 'homebase-react'

const {
  HomebaseProvider,
  useTransact,
  useQuery
} = window.homebase.react;
const counterId = 1;
const config = {
  initialData: [{
    ':db/id': counterId,
    ':count': 0
  }]
};
export const App = () => /*#__PURE__*/React.createElement(HomebaseProvider, {
  config: config
}, /*#__PURE__*/React.createElement(Counter, null));
export const Counter = () => {
  const [counter] = useQuery(counterId);
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement("div", null, "Count: ", counter.get(':count'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => transact([{
      ':db/id': counterId,
      ':count': counter.get(':count') + 1
    }])
  }, "Increment")));
};