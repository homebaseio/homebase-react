import React from 'react'
import { HomebaseProvider, useEntity, useTransact } from 'homebase-react'
import './App.css'

const config = {
  initialData: [{
    counter: {
      identity: 'counter',
      count: 0
    }
  }]
}

export default function App() {
  return (
    <HomebaseProvider config={config}>
      <Counter/>
    </HomebaseProvider>
  )
}

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
