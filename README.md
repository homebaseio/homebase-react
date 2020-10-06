# Homebase React

> The graph database for simple React state management

## Installation

```bash
# NPM
npm install homebase-react --save

# Yarn
yarn add homebase-react
```

## Docs
https://www.notion.so/Homebase-Alpha-Docs-0f0e22f3adcd4e9d87a13440ab0c7a0b

## Examples
https://homebaseio.github.io/homebase-react

## Purpose

We want software to be [local-first](https://news.ycombinator.com/item?id=21581444). That means we need to make it more convenient to work with complex data on clients.

Homebase React lets you plug a relational database into your React app.

- Replace Redux with something simpler and more declarative
- Gain all the benefits of relational data like a single source of truth
- Query your database with a convenient JSON query syntax
- Query your database with datalog if you need more power
- Traverse your data graph like it's one big JSON object

It is immediately more intuitive than a denormalized JSON store, and over time it will get better as we add more local-first features to it.

## Roadmap

1. Improve performance
1. Document integration with backends
1. Swap [Datascript](https://github.com/tonsky/datascript) out for [Datahike](https://github.com/replikativ/datahike)
    1. Immutability
    1. History / Change Tracking
1. Persist to IndexDB
1. Local-first conflict resolution for offline caching and sync between multiple devices

## API Overview

### `HomebaseProvider`

```js
import { HomebaseProvider, useEntity, useTransact, useQuery } from 'homebase-react'

const config = {
  // Schema is optional
  // ref indicates a relationship
  // unique enforces a uniqueness constraint
  schema: {
    todo: {
      project: { type: 'ref' },
      name: { unique: 'identity' }
    }
  },
  initialData: [
    { project: { id: -1, name: 'Do it' } }
    { todo: { project: -1, name: 'Make it' }}
  ]
}

const RootComponent = () => (
  <HomebaseProvider config={config}>
    <App/>
  </HomebaseProvider>
)
```

### `useEntity` and `entity.get`

```js
// Entities with unique attributes can be retrieved by those attributes
const [todo] = useEntity({ todo: { name: 'Make it' } })

// Get attributes off an entity
todo.get('name') // => 'Make it'
todo.get('id') // => 2

// You can also get an entity by its id
const [sameTodo] = useEntity(2)

// And traverse relationships
todo.get('project', 'name') // => 'Do it'
```

### `useTransact`

```js
const transact = useTransact()

// A transaction is an array of nested objects
transact([{ todo: { name: 'New Todo', project: 1 } }])

// Update an entity by including its id
transact([{ project: { id: 1, name: 'Changed Project Title' } }])

// Delete an entity with retractEntity and its id
transact([['retractEntity', 1]])
```

### `useQuery`

```js
// Finds any todo with a name
const [todos] = useQuery({
  $find: 'todo',
  $where: { todo: { name: '$any' } }
})

// Returns an array of todo entities
todos.map(todo => todo.get('name'))
```

## Development

```bash
npx shadow-cljs watch :dev
```

Open http://localhost:3000


## Authors

- Chris Smothers ([@csmothers](https://twitter.com/csmothers)) – [Homebase](https://www.homebase.io/)
- JB Rubinovitz ([@rubinovitz](https://twitter.com/rubinovitz)) – [Homebase](https://www.homebase.io/)