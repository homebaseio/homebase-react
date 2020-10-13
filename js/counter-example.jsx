import React from 'react';
// TODO: for dev purposes this packages is being mounted on the window by example.counter in CLJS, but see if it's easy to build and import from node_modules instead so this example can look more like it would in production.
// import { HomebaseProvider, useTransact, useQuery } from 'shadow-cljs/localmost.react';
const { HomebaseProvider, useTransact, useQuery } = window.localmost.react

const config = {
  initialData: [{
    'db/id': 1, 
    'count': 0
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
  const [result] = useQuery(1);
  const count = result.get(cljs.core.keyword('count'))
  const [transact] = useTransact();
  return (
    <div>
      localmost React JS count: {count}
      <div>
        <button onClick={() => transact([['db/add', 1, 'count', count + 1]])}>
          Increment
        </button>
      </div>
    </div>
  )
}