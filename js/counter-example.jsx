import React from 'react'
const { HomebaseProvider, useTransact, useEntity } = window.homebase.react

const config = { 
  initialData: [{
    counter: {
      identity: 'counter', 
      count: 0
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