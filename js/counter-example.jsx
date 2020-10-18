import React from 'react'
// import { HomebaseProvider, useTransact, useQuery } from 'homebase-react'
const { HomebaseProvider, useTransact, useQuery } = window.homebase.react

const counterId = 1
const config = { initialData: [{
  ':db/id': counterId, 
  ':count': 0 
}]}

export const App = () => (
  <HomebaseProvider config={config}>
    <Counter/>
  </HomebaseProvider>
)

const Counter = () => {
  const [counter] = useQuery(counterId)
  const [transact] = useTransact()
  return (
    <div>
      Count: {counter.get(':count')}
      <div>
        <button onClick={() => transact([{
          ':db/id': counterId, 
          ':count': counter.get(':count') + 1
        }])}>
          Increment
        </button>
      </div>
    </div>
  )
}