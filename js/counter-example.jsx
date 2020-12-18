import React from 'react';
// import hbr from '../dist/js/homebase.react';
import { HomebaseProvider, useClient, useEntity, useQuery, useTransact } from '../dist/js/homebase.react';
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
      children: 2,
    }
  }, {
    block: {
      id: 2,
      name: "b2",
      children: 3,
    }
  }, {
    block: {
      id: 3,
      name: "b3",
    }
  }]
}

export const App = () => (
  <HomebaseProvider config={config}>
    <Counter/>
  </HomebaseProvider>
)

const Counter = () => {
  const [counter] = useEntity({ identity: 'counter' })
  const [transact] = useTransact()
  const [children] = useQuery(`
    [:find ?e
     :where [_ :block/children ?e]]
  `)
  console.log(children)
  const [client] = useClient()
  window.client = client
  return (
    <div>
      Count: {counter.get('count')}
      <div>
        <button onClick={() => transact([{
          counter: {
            id: counter.get('id'),
            count: counter.get('count') + 1
          }
        }])}>
          Increment
        </button>
      </div>
    </div>
  )
}
