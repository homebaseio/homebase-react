> We recommend everyone start by [enabling custom chrome formatters](/docs/homebase-react/main/debugging#custom-chrome-console-log-formatters) for a much better debugging experience.

![image of custom entity chrome console logs](https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_3.png?raw=true)

Ok. Let's get going.

Homebase React creates a local relational database for your React app.

Adding `HomebaseProvider` automatically creates the database.

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
import { useEntity, useTransact } from 'homebase-react'

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

For a step by step guide take a look at the [tutorial](/docs/homebase-react/main/tutorial).

Check out the [API docs](/docs/homebase-react/main/api) to learn about our other hooks like [`useQuery`](/docs/homebase-react/main/api#usequery) and [`useClient`](/docs/homebase-react/main/api#useclient).