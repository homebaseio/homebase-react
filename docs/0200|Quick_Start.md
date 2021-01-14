Homebase React creates a local relational database for your React app.

```js
import { HomebaseProvider } from 'homebase-react'

const RootComponent = () => (
  <HomebaseProvider>
    <App/>
  </HomebaseProvider>
)
```

Read from and write to that database via hooks.

```js
import { useCallback } from 'react'
import { useTransact } from 'homebase-react'

const App = () => {
  const [counter] = useEntity(1)
  const [transact] = useTransact()
  const handleClick = useCallback(() => {
    transact([{ counter: { 
      id: 1, count: counter.get('count') + 1 
    } }])
  }, [counter, transact])
  return (
    <button onClick={handleClick}>
      Increment 
      {counter.get('count')}
    </button>
  )
}
```