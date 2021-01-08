<img src="public/images/logo-blk.png" height="50" align="right">

# Homebase React

[![CI](https://github.com/homebaseio/homebase-react/workflows/CI/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACI)
[![CD](https://github.com/homebaseio/homebase-react/workflows/CD/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACD)
[![NPM Version](https://img.shields.io/npm/v/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![License](https://img.shields.io/github/license/homebaseio/homebase-react.svg)](LICENSE)

*The graph database for delightful React state management*


Homebase React makes state management painless by enabling you to plug a relational graph database into your React application with just 3 lines of code. This is the same database that powers Roam Research and many other ClojureScript applications, but with an API that's familiar to React and JS developers.

## Install

```bash
# NPM
npm install homebase-react --save

# Yarn
yarn add homebase-react
```
## Features
- The simplest and most declarative state management solution
- The power of a backend relational graph database, but without having to wait on the network
- Convenient JSON query syntax
- Powerful Clojure style [Datalog](https://docs.datomic.com/on-prem/query.html) query syntax if you need it
- Traverse your data graph like it's a big JSON object
- Backup your data to the cloud

## Roadmap

1. Document integration with more backends
1. Swap [Datascript](https://github.com/tonsky/datascript) out for [Datahike](https://github.com/replikativ/datahike)
    1. Immutability
    1. History / Change Tracking
2. Persist to IndexedDB
3. [Local-first](https://www.inkandswitch.com/local-first.html) conflict resolution for offline caching and sync between multiple devices

## Examples
### Live Demos
You can see our hosted live demos [here](https://homebaseio.github.io/homebase-react)

### Code Examples
You can clone and run our React code examples [here](https://github.com/homebaseio/homebase-react-examples).

## API Overview

### `HomebaseProvider`

The HomebaseProvider wraps your React app and makes a relational database accessible to all of your components. Configure it with `schema` and `initialData`.

```js
import { HomebaseProvider, useEntity, useTransact, useQuery } from 'homebase-react'

const config = {
  // Schema is not a type system,
  // it's a way to simplify relational queries at query time.
  // The schema currently supported is:
  // `type: 'ref'` which is a relationship and
  // `unique: 'identity` which enforces a uniqueness constraint 
  // and lets you lookup entities by their unique attributes.
  schema: {
    todo: {
      project: { type: 'ref' },
      name: { unique: 'identity' }
    }
  },
  
  // Initial data is what it sounds like.
  // It's a transaction that runs on component mount.
  // Use it to hydrate your app.
  initialData: [
    { project: { id: -1, name: 'Do it', owner: -2 } },
    { todo: { project: -1, name: 'Make it' } },
    { user: { id: -2, name: 'Arpegius' } }
  ]
}

const RootComponent = () => (
  <HomebaseProvider config={config}>
    <App/>
  </HomebaseProvider>
)
```

### `useEntity` and `entity.get`

Entities are the building blocks of the Homebase data model. They are like JSON objects with bonus features. In particular **you can traverse arbitrarily deep relationship without actually denormalizing and nesting your data**.

```js
// You can get an entity by its id and get attributes off of it.
const [todo] = useEntity(2)
todo.get('id') // => 2
todo.get('name') // => 'Make it'

// Entities with unique attributes can also be retrieved by those attributes.
const [sameTodo] = useEntity({ todo: { name: 'Make it' } })
sameTodo.get('id') // => 2

// And most importantly you can traverse arbitrarily deep relationships.
sameTodo.get('project', 'owner', 'name') // => 'Arpegius'
```

### `useTransact`

Transactions let you create, update and delete multiple entities simultaneously. All changes will reactively update any components that depend on the changed data.

```js
const transact = useTransact()

// A transaction is an array of nested objects and or arrays.
// Leaving the id blank will create a new entity.
transact([{ todo: { name: 'New Todo', project: 1 } }])

// Setting the id to a negative number is a temp id which 
// allows multiple entities to be related to each other on creation.
transact([
  { project: { id: -123, name: 'New Project' } },
  { todo: { project: -123, name: 'New Todo' } },
])

// Update an entity by including its id.
// NOTE: that only the included attributes will be updated.
transact([{ project: { id: 1, name: 'Changed Project Title' } }])

// To remove an attribute you have to explicitly set it to null.
transact([{ project: { id: 1, name: null } }])

// To delete an entire entity use retractEntity and its id
transact([['retractEntity', 1]])
```

### `useQuery`

Use queries to return an array of entities that meet a given criteria. Our query API is powered by Datalog, but exposed as JSON similar to a JS SQL driver or MongoDB. Datalog is similar to SQL and is incredibly powerful. However, only a subset of features are currently available in JSON.

We will prioritize features based on community feedback so please open an issue if there's something you need. In the meantime you can further filter results with JS `filter()` and `sort()`.

```js
// Finds all todos with a name
const [todos] = useQuery({
  $find: 'todo',
  $where: { todo: { name: '$any' } }
})

// Returns an array of todo entities
todos
.sort((todo1, todo2) => todo1.get('name') > todo2.get('name') ? 1 : -1)
.map(todo => todo.get('name'))
```

### `useClient`

This hook returns the current database client with some helpful functions for syncing data with a backend.

- `client.dbToString()` serializes the whole db including the schema to a string
- `client.dbFromString('a serialized db string')` replaces the current db
- `client.dbToDatoms()` returns an array of all the facts aka datoms saved in the db
    - datoms are the smallest unit of data in the database, like a key value pair but better
    - they are arrays of `[entityId, attribute, value, transactionId, isAddedBoolean]`
- `client.addTransactListener((changedDatoms) => ...)` adds a listener function to all transactions
    - use this to save data to your backend
- `client.removeTransactListener()` removes the transaction listener
    - please note that only 1 listener can be added per useClient scope
- `client.transactSilently([{item: {name: ...}}])` like `transact()` only it will not trigger any listeners
    - use this to sync data from your backend into the client

Check out the [Firebase example](https://homebaseio.github.io/homebase-react/#!/example.todo_firebase) for a demonstration of how you might integrate a backend.



## Performance

Homebase React tracks the attributes consumed in each component via the `entity.get` function and scopes those attributes to their respective `useEntity` or `useQuery` hook. Re-renders are only triggered when an attribute changes.

The default caching reduces unnecessary re-renders and virtual DOM thrashing a lot. That said, it is still possible to trigger more re-renders than you might want.

One top level `useQuery` + prop drilling the entities it returns will cause all children to re-render on any change to the parent or their siblings.

To fix this we recommend passing ids to children, not whole entities. Instead get the entity in the child with `useEntity(id)`. This creates a new scope for each child so they are not affected by changes in the state of the parent or sibling components.

```js
const TodoList = () => {
  const [todos] = useQuery({
    $find: 'todo',
    $where: { todo: { name: '$any' } }
  })
  return (todos.map(t => <Todo key={t.get('id')} id={t.get('id')} />))
}

// Good
const Todo = React.memo(({ id }) => {
  const [todo] = useEntity(id)
  // ...
})

// Bad
const Todo = React.memo(({ todo }) => {
  // ...
})
```


## Docs
https://www.notion.so/Homebase-Alpha-Docs-0f0e22f3adcd4e9d87a13440ab0c7a0b
## Development

```bash
yarn install
yarn build dev
yarn dev
```

Open http://localhost:3000

## Test

```bash
yarn install
yarn build dev
yarn test
```

## Contributing

Welcome and thank you! Writing docs, patches and features are all incredibly helpful and appreciated.

We only ask that you provide test coverage for code changes, and conform to our [commit guidelines](CONTRIBUTING.md).

## Authors

- Chris Smothers ([@csmothers](https://twitter.com/csmothers)) – [Homebase](https://www.homebase.io/)
- JB Rubinovitz ([@rubinovitz](https://twitter.com/rubinovitz)) – [Homebase](https://www.homebase.io/)
