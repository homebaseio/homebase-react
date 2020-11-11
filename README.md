# Homebase React

[![CI](https://github.com/homebaseio/homebase-react/workflows/CI/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACI)
[![CD](https://github.com/homebaseio/homebase-react/workflows/CD/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACD)
[![NPM Version](https://img.shields.io/npm/v/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![License](https://img.shields.io/github/license/homebaseio/homebase-react.svg)](LICENSE)

*The graph database for delightful React state management*

## Installation

```bash
# NPM
npm install homebase-react --save

# Yarn
yarn add homebase-react
```

## Purpose

Data should be a first class citizen on the client. We deserve the ergonomics and power of relational databases not just on the server, but in our React applications.

Homebase React lets you plug a relational database into your React application with just 3 lines of code. In fact, it's the same database that powers Roam Research and many other ClojureScript applications, but with an API that's familiar to React and JS developers.

- Replace Redux with something simpler and more declarative
- Stop spending time wiring up custom datatypes, reducers, caches and other bespoke state mumbo jumbo
- Gain all the benefits of relational data like a single source of truth
- Traverse your data graph like it's one big JSON object
- Query your database with a convenient JSON query syntax
- Query your database with Clojure style [Datalog](https://docs.datomic.com/on-prem/query.html) if you need more power
- It's just data

The goal of Homebase React is to be immediately more intuitive than any denormalized JSON store and over time we will eliminate all the tedious aspects of manipulating data on clients. Homebase React makes it easier to work with complex data on client by making our applications [local-first](https://news.ycombinator.com/item?id=21581444).

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
  // Schema is not a type system like in most DBs. 
  // That is something we're considering, but for now it is 
  // mainly applied at query time to simplify relational queries.
  // The only schema currently supported is:
  // `type: 'ref'` which is a relationship and
  // `unique: 'identity` which enforces a uniqueness constraint 
  // and let's you lookup entities by their unique attributes.
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

Use queries to return an array of entities that meet a given criteria. Our query API is powered by datalog, but exposed as JSON similar to a JS SQL driver or Mongo DB. Datalog is similar to SQL and is incredibly powerful. However only a subset of features are currently available in JSON. 

We are very interested in what features the community wants, and will prioritize based on feedback. In the meantime you can further filter results with JS `filter()` and `sort()`.

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


## Docs
https://www.notion.so/Homebase-Alpha-Docs-0f0e22f3adcd4e9d87a13440ab0c7a0b

## Roadmap

1. Improve performance
1. Document integration with backends
1. Swap [Datascript](https://github.com/tonsky/datascript) out for [Datahike](https://github.com/replikativ/datahike)
    1. Immutability
    1. History / Change Tracking
1. Persist to IndexDB
1. Local-first conflict resolution for offline caching and sync between multiple devices

## Development

```bash
yarn install
yarn dev
```

Open http://localhost:3000

## Test

```bash
yarn install
yarn test
```


## Authors

- Chris Smothers ([@csmothers](https://twitter.com/csmothers)) – [Homebase](https://www.homebase.io/)
- JB Rubinovitz ([@rubinovitz](https://twitter.com/rubinovitz)) – [Homebase](https://www.homebase.io/)
