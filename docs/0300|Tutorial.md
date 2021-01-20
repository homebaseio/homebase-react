This tutorial takes you through our [Todo Example](https://homebaseio.github.io/homebase-react/#!/example.todo).

## Entry Point

Let's get started.

```jsx
import React from 'react'
import { HomebaseProvider, useTransact, useQuery, useEntity } from 'homebase-react'

export const App = () => {
  return (
    <HomebaseProvider config={{ schema, initialData }}>
      <Todos/>
    </HomebaseProvider>
  )
}
```

## Schema

Unlike other state managers, Homebase does not try to create yet another design pattern for state. Instead, we store state in a way we already know and love: as a relational graph database.

Like any good database we support schema on read.

At the moment schema is only for relationships and uniqueness constraints. It does not support typing of attributes, e.g. strings, integers, dates. We're working on adding the option to opt into schema on write support. This will provide basic type checking like you see in SQL.

```jsx
schema: {
  project: {
    name: {
      unique: 'identity'
    }
  },
  todo: {
    // refs are relationships
    project: {
      type: 'ref'
    },
    owner: {
      type: 'ref'
    }
  }
}
```

## Initial Data

Hydrate your application with initial data. Here we add an initial user, project, and todo as well as the todoFilter that will filter the initial state to show todos that have been completed.

This data is a transaction that runs on database creation to seed your DB.

```jsx
const initialData: [
   {
      user: {
        // negative numbers can be used as temporary ids in a transaction
        id: -1, 
        name: 'Stella' 
      }
    }, {
      project: {
        id: -3,
        name: 'To the stars'
      }
   
    }, {
      todo: {
        name: 'Fix ship',
        owner: -1,
        project: -3,
        isCompleted: true,
        createdAt: new Date('2003/11/10')
     }
    }, {
      todoFilter: {
        // identity is a special attribute for user generated ids
        // E.g. this is a setting that should be easy to lookup by name
        identity: 'todoFilters',
        showCompleted: true,
        project: 0
      }
    }
  ]
}
```

## Config

And now we're ready to go. 🚀

```jsx
const config = {
	schema,
	initialData
}
```

## Reading and Writing Data

Use the todoFilters we added earlier to filter the view. With Homebase everything is just data. It's similar to a reducer in React Hooks or Redux, but without the need to write bespoke mutation functions. We also introduce our `useEntity` and `useTransact` React Hooks here.

`useEntity` enables you to grab the todoFilters Entity directly from Homebase by its `identity`(a unique developer given name, like a custom id). Entities are the building blocks of the Homebase data model. They are like JSON objects with bonus features: you can traverse arbitrarily deep relationship without actually denormalizing and nesting your data.

`useTransact` lets you `transact` state from any component. Transactions let you create, update and delete multiple entities simultaneously and atomically. All changes will reactively update any components that depend on the changed data.

```jsx
const TodoFilters = () => {
  const [filters] = useEntity({ identity: 'todoFilters' })
  const [transact] = useTransact()
  return (
    <div>
      <label htmlFor="show-completed">Show Completed?</label>
      <input 
        type="checkbox" 
        id="show-completed"
        checked={filters.get('showCompleted')}
        onChange={e => transact([{ todoFilter: { id: filters.get('id'), showCompleted: e.target.checked }}])}
      />
      &nbsp;·&nbsp;
      <ProjectSelect
        value={filters.get('project')}
        onChange={project => transact([{ todoFilter: { id: filters.get('id'), project }}])}
      />
    </div>
  )
}
```

## Entity and Transact Examples

In the following example `todo` is a Homebase database entity being passed in as a prop.

As you probably noticed entities have a convenient function `entity.get('attribute')`. It's like `jsObj['attribute']` but with a lot of bonus benefits:

1. You can chain attributes to traverse your relational graph
    - `todo.get('project', 'owners', 0, 'name') => 'Stella'`
1. Chaining attributes that return undefined will return null instead of an error
    - `jsObj.nullAttr.childAttr => Error`
    - `entity.get('nullAttr', 'childAttr') => null`
1. Caching is built in. Homebase tracks the attributes used by every component and only triggers re-renders when that specific data changes. This caching is scoped to our hooks, so while we're passing a `todo` entity in the following example it can be better to pass the `id` as a prop and then `const [todo] = useEntity(id)` in the component to create a new caching scope.

```jsx
const Todo = ({ todo }) => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingTop: 20}}>
      <TodoCheck todo={todo} />
      <TodoName todo={todo} />
    </div>
    <div>
      <TodoProject todo={todo} />
      &nbsp;·&nbsp;
      <TodoOwner todo={todo} />
      &nbsp;·&nbsp;
      <TodoDelete todo={todo} />
    </div>
    <small style={{ color: 'grey' }}>
      {todo.get('createdAt').toLocaleString()}
    </small>
  </div>
)
```

Notice how `id: todo.get('id')` is used in the following example to update an existing todo entity.

```jsx
const TodoCheck = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <input 
      type="checkbox"
      style={{ width: 20, height: 20, cursor: 'pointer' }}
      checked={!!todo.get('isCompleted')}
      onChange={e => transact([{ 
        todo: {
          id: todo.get('id'), 
          isCompleted: e.target.checked
        }
      }])}
    />
  )
}

```

`useTransact` is incredibly convenient. It lets you create, update, and delete any state from any component. 

```jsx
const TodoName = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <input 
      style={{  
        border: 'none',  fontSize: 20, marginTop: -2, cursor: 'pointer',
        ...todo.get('isCompleted') && { textDecoration: 'line-through '}
      }}
      value={todo.get('name')}
      onChange={e => transact([{ todo: { id: todo.get('id'), name: e.target.value }}])}
    />
  )
}

const TodoProject = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <ProjectSelect
      value={todo.get('project', 'id') || ''}
      onChange={projectId => transact([{ todo: { id: todo.get('id'), 'project': projectId || null }}])}
    />    
  )
}
```

## Queries

`TodoOwner` introduces our first instance of the `useQuery` React Hook. Query the relational database directly in your component using Javascript friendly syntax. Queries return an array of unique entities instead of an individual entity like `useEntity`. 

```jsx
const TodoOwner = ({ todo }) => {
  const [transact] = useTransact()
  const [users] = useQuery({
    $find: 'user',
    $where: { user: { name: '$any' } }
  })
...
```

Here's the full `TodoOwner` component:

```jsx
const TodoOwner = ({ todo }) => {
  const [transact] = useTransact()
  const [users] = useQuery({
    $find: 'user',
    $where: { user: { name: '$any' } }
  })
  return (
    <>
      <label>
        Owner:
      </label>
      &nbsp;
      <select 
        name="users" 
        value={todo.get('owner', 'id') || ''}
        onChange={e => transact([{ todo: { id: todo.get('id'), owner: Number(e.target.value) || null }}])}
      >
        <option value=""></option>
        {users.map(user => (
          <option 
            key={user.get('id')} 
            value={user.get('id')}
          >
            {user.get('name')}
          </option>
        ))}
      </select>
    </>
  ).
```

Our query API is powered by Datalog, and exposed as JSON similar to a JS SQL driver or MongoDB. Datalog is a subset of Prolog, a logic programming language, but with a few features restricted so it is guaranteed to terminate. This is not a perfect metaphor, but you can think of it as a more powerful version of SQL.

We don't go into Datalog queries here, instead easing you into our JSON query API for simplicity, but you can directly query `Homebase` with Datalog as well. If you're interested in writing more sophisticated queries you can pass a datalog string instead of a JSON query as the first argument to useQuery.

**E.g.**
```jsx
const [users] = useQuery(`
  [:find ?todo
   :where [?todo :todo/owner ?user]
          [?user :user/name "Stella"]]
`)
```

This will return all todos owned by users named Stella. As you can see joins are implicit by using the `?user` variable in multiple `:where` clauses.

We won't get into more detail about Datalog here since it's essentially a programming language. The syntax we use has it's roots in [Clojure](https://clojure.org/) and [Datomic](https://www.datomic.com/on-prem.html). If you'd like us to priortize documention for these advanced queries please [let us know](https://github.com/homebaseio/homebase-react/issues?q=is%3Aissue+datalog). In the meantime we recommend [Learn Datalog Today](http://www.learndatalogtoday.org/) as a good place to start.

### Create Data

It's all just transactions. Yes it's repetitive, but the goal of Homebase it to make data declarative and composable on the client and the server. This means providing a powerful core library and letting you combine the pieces to declare what you want, without needing to say how to do achieve it.

```jsx
const NewTodo = () => {
  const [transact] = useTransact()
  return (
    <form onSubmit={e => {
      e.preventDefault()
      transact([{
        todo: {
          name: e.target.elements['todo-name'].value,
          createdAt: new Date
        }
      }])
      e.target.reset()
    }}>
      <input 
        autoFocus
        type="text" 
        name="todo-name" 
        placeholder="What needs to be done?" 
        autoComplete="off"
        required
      />
      &nbsp;
      <button type="submit">Create Todo</button>
    </form>
  )
}
```

### Delete Data

The object style transactions support deletion of individual attributes by setting them to null.
```jsx
transact({ todo: { id: 123, name: null } })
```

To delete entire entities we provide a database function `retractEntity`. Database functions are atomic functions that run inside of transactions, basically they're reducers. Database functions are invoked by passing an array with the function name first followed by arguments `['retractEntity', 123]`.

```jsx
const TodoDelete = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <button onClick={() => transact([['retractEntity', todo.get('id')]])}>
      Delete
    </button>
  )
}
```

## The Full Example

Here's everything we covered. You can try the app for yourself [here](https://homebaseio.github.io/homebase-react/#!/example.todo).

If you're interested in integrating a backend you can check out our Firebase example [here](https://homebaseio.github.io/homebase-react/#!/example.todo_firebase) for inspiration or ping us at hi@homebase.io or in our [message board](https://github.com/homebaseio/homebase-react/discussions) to pair on integrating a custom backend.

```jsx
import React from 'react'
import { HomebaseProvider, useTransact, useQuery, useEntity } from 'homebase-react'

export const App = () => {
  return (
    <HomebaseProvider config={config}>
      <Todos />
    </HomebaseProvider>
  )
}

const config = {
  // Schema is only used to enforce 
  // unique constraints and relationships.
  // It is not a type system, yet.
  schema: {
    project: { name: { unique: 'identity' } },
    todo: {
      // refs are relationships
      project: { type: 'ref' },
      owner: { type: 'ref' }
    }
  },
  // Initial data let's you conveniently transact some 
  // starting data on DB creation to hydrate your components.
  initialData: [
    {
      todoFilter: {
        // identity is a special unique attribute for user generated ids
        // E.g. todoFilters are settings that should be easy to lookup by their identity
        identity: 'todoFilters',
        showCompleted: true
      }
    }, {
      user: {
        // Negative numbers can be used as temporary ids in a transaction.
        // Use them to relate multiple entities together at once.
        id: -1, 
        name: 'Stella' 
      }
    }, {
      user: {
        id: -2,
        name: 'Arpegius'
      }
    }, {
      project: {
        id: -3,
        name: 'Make it'
      }
    }, {
      project: {
        id: -4,
        name: 'Do it'
      }
    }, {
      todo: {
        name: 'Fix ship',
        owner: -1,
        project: -3,
        isCompleted: true,
        createdAt: new Date('2003/11/10')
      }
    }, {
      todo: {
        name: 'Go home',
        owner: -2,
        project: -4,
        createdAt: new Date('2003/11/10')
      }
    }
  ]
}

const Todos = () => {
  return (
    <div>
      <NewTodo />
      <TodoFilters />
      <TodoList />
    </div>
  )
}

const NewTodo = () => {
  const [transact] = useTransact()
  return (
    <form onSubmit={e => {
      e.preventDefault()
      transact([{
        todo: {
          name: e.target.elements['todo-name'].value,
          createdAt: new Date()
        }
      }])
      e.target.reset()
    }}>
      <input 
        autoFocus
        type="text" 
        name="todo-name" 
        placeholder="What needs to be done?" 
        autoComplete="off"
        required
      />
      &nbsp;
      <button type="submit">Create Todo</button>
    </form>
  )
}

const TodoList = () => {
  const [filters] = useEntity({ identity: 'todoFilters' })
  const [todos] = useQuery({
    $find: 'todo',
    $where: { todo: { name: '$any' } }
  })
  return (
    <div>
      {todos.filter(todo => {
        if (!filters.get('showCompleted') && todo.get('isCompleted')) return false
        if (filters.get('project') && todo.get('project', 'id') !== filters.get('project')) return false
        if (filters.get('owner') && todo.get('owner', 'id') !== filters.get('owner')) return false
        return true
      }).sort((a, b) => a.get('createdAt') > b.get('createdAt') ? -1 : 1)
      .map(todo => <Todo key={todo.get('id')} id={todo.get('id')}/>)}
    </div>
  )
}

// PERFORMANCE: By accepting an `id` prop instead of a whole `todo` entity
// this component stays disconnected from the useQuery in the parent TodoList. 
// useEntity creates a separate scope for every Todo so changes to TodoList
// or sibling Todos don't trigger unnecessary re-renders.
const Todo = React.memo(({ id }) => {
  const [todo] = useEntity(id)
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingTop: 20}}>
        <TodoCheck todo={todo} />
        <TodoName todo={todo} />
      </div>
      <div>
        <TodoProject todo={todo} />
        &nbsp;·&nbsp;
        <TodoOwner todo={todo} />
        &nbsp;·&nbsp;
        <TodoDelete todo={todo} />
      </div>
      <small style={{ color: 'grey' }}>
        {todo.get('createdAt').toLocaleString()}
      </small>
    </div>
  )
})

const TodoCheck = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <input 
      type="checkbox"
      style={{ width: 20, height: 20, cursor: 'pointer' }}
      checked={!!todo.get('isCompleted')}
      onChange={e => transact([{ todo: { id: todo.get('id'), isCompleted: e.target.checked } }])}
    />
  )
}

const TodoName = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <input 
      style={{  
        border: 'none', fontSize: 20, marginTop: -2, cursor: 'pointer',
        ...todo.get('isCompleted') && { textDecoration: 'line-through '}
      }}
      defaultValue={todo.get('name')}
      onChange={e => transact([{ todo: { id: todo.get('id'), name: e.target.value }}])}
    />
  )
}

const TodoProject = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <EntitySelect
      label="Project"
      entityType="project"
      value={todo.get('project', 'id')}
      onChange={project => transact([{ todo: { id: todo.get('id'), project }}])}
    />    
  )
}

const TodoOwner = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <EntitySelect 
      label="Owner"
      entityType="user" 
      value={todo.get('owner', 'id')}
      onChange={owner => transact([{ todo: { id: todo.get('id'), owner }}])}
    />
  )
}

const TodoDelete = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <button onClick={() => transact([['retractEntity', todo.get('id')]])}>
      Delete
    </button>
  )
}

const TodoFilters = () => {
  const [filters] = useEntity({ identity: 'todoFilters' })
  const [transact] = useTransact()
  return (
    <div>
      <label>Show Completed?
        <input 
          type="checkbox" 
          checked={filters.get('showCompleted')}
          onChange={e => transact([{ todoFilter: { id: filters.get('id'), showCompleted: e.target.checked }}])}
        />
      </label>
      &nbsp;·&nbsp;
      <EntitySelect
        label="Project"
        entityType="project"
        value={filters.get('project')}
        onChange={project => transact([{ todoFilter: { id: filters.get('id'), project }}])}
      />
      &nbsp;·&nbsp;
      <EntitySelect
        label="Owner"
        entityType="user"
        value={filters.get('owner')}
        onChange={owner => transact([{ todoFilter: { id: filters.get('id'), owner }}])}
      />
    </div>
  )
}

const EntitySelect = React.memo(({ label, entityType, value, onChange }) => {
  const [entities] = useQuery({
    $find: entityType,
    $where: { [entityType]: { name: '$any' } }
  })
  return (
    <label>{label}:&nbsp;
      <select 
        name={entityType} 
        value={value || ''}
        onChange={e => onChange && onChange(Number(e.target.value) || null)}
      >
        <option key="-" value=""></option>
        {entities.map(entity => (
          <option key={entity.get('id')} value={entity.get('id')}>
            {entity.get('name')}
          </option>
        ))}
      </select>
    </label>
  )
})
```

## Thanks!

Thanks for trying us out! We're excited to see what you build and would love to hear any feedback.