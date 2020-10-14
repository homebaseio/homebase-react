import React from 'react';
// TODO: for dev purposes this packages is being mounted on the window by example.counter in CLJS, but see if it's easy to build and import from node_modules instead so this example can look more like it would in production.
// import { HomebaseProvider, useTransact, useQuery } from 'shadow-cljs/homebase.react';
const { HomebaseProvider, useTransact, useQuery } = window.homebase.react

const config = {
  schema: {
    ':friend': {
      ':db/valueType': ':db.type/ref',
    },
    ':friends': {
      ':db/valueType': ':db.type/ref',
      ':db/cardinality': ':db.cardinality/many',
    },
  },
  initialData: [{
    ':db/id': 1, 
    ':count': 0,
    ':friend': 2,
    ':friends': [2],
  }, {
    ':db/id': 2, 
    ':name': 'test relationship',
  }]
}

export const App = () => {
  return (
    <HomebaseProvider config={config}>
      <Counter/>
    </HomebaseProvider>
  )
}

export const Counter = () => {
  const [entity] = useQuery(1);
  const [transact] = useTransact();
  window.e = entity
  return (
    <div>
      {entity.get(':friend', ':name')}<br/>
      homebase React JS count: {entity.get(':count')}
      <div>
        <button onClick={() => transact([[':db/add', 1, ':count', entity.get(':count') + 1]])}>
          Increment
        </button>
      </div>
    </div>
  )
}