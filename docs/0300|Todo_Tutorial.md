This tutorial takes you through our [Todo Example](https://homebaseio.github.io/homebase-react/#!/example.todo).

## Entry Point

Let's get started.

```jsx
import React from 'react'; 
import { HomebaseProvider, useTransact, useQuery, useEntity } from 'homebase-react';

;
export const App = () => {
  return (
    <HomebaseProvider config={config}>
      <Todos/>
    </HomebaseProvider>
  )
}
```

## Config

### Schema

Unlike other frameworks, Homebase does not try to create yet another design pattern for state. Instead, we store state in a way we already know and love: as a relational graph datastore.

In the schema, you can configure your relational schema as much or as little as you want. You can use it to simplify relational queries.

```jsx
// Schema is optional. Add as much or as little as you want.
  schema: {
    user: {
      name: {
        type: 'string'
      }
    },
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
  },
```

### Initial Data

Hydrate your application with initial data. Here we add an initial user, project, and todo as well as the todoFilter that will filter the initial state to show todos that have been completed.

```jsx
const initialData: [
   {
      user: {
        // negative numbers can be used as temporary ids in a transaction
        id: -1, 
        name: 'Stella' 
      }
    }, {
   
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
    },
	  todoFilter: {
      // identity is a special attribute for user generated ids
      // E.g. this is a setting that should be easy to lookup by name
      identity: 'todoFilters',
      showCompleted: true,
      project: 0
    }
  ]
}
```

### Final Config

And now we're ready to go. 🚀

```jsx
const config = {
	schema: schema,
	initialData: initialData
}
```

## Filters

### Todo Filters

Use the todoFilters we defined earlier to filter the view, all without a Redux Reducer. We also introduce our `useEntity` and `useTransact` React Hooks here.

`useEntity` enables you to grab the filter Entity directly from Homebase by its `identity`/given name. Entities are the building blocks of the Homebase data model. They are like JSON objects with bonus features: you can traverse arbitrarily deep relationship without actually denormalizing and nesting your data.

`useTransact` lets you `transact` state directly in the component. `Transactions` let you create, update and delete multiple entities simultaneously. All changes will reactively update any components that depend on the changed data.

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

## Presentational Components

`todo.get` directly in the component to access your state

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

The same follows with `TodoCheck`.

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

Instead of invoking callbacks from props, we keep using our `UseTransact` React Hook to transact our data directly within the component.

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

`TodoOwner` introduces our first instance of the `useQuery` React Hook. Query the relational datastore directly in your component using Javascript friendly syntax.

Queries return an array of entities that meet a given criteria. Our query API is powered by Datalog, but exposed as JSON similar to a JS SQL driver or MongoDB. Datalog is a more powerful version of SQL. 

We don't go into Datalog queries here, instead easing you into our JSON query API for simplificity, but you can directly query `Homebase` with Datalog as well.

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

### Todos Component

Put it all together...Including the `NewTodo` component we define next.

```jsx
const Todos = () => {
  return (
    <div>
      <NewTodo />
      <TodoFilters />
      <TodoList />
    </div>
  )
}
```

## Other Components

### New Todo

Continuing to eliminate Redux complexity, no Redux actions here.

We keep things simple by continuing to transact state simply with the `useTransact` React hook.

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
...
```

Here's the full `NewTodo` component

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

### Delete a Todo

Short and sweet with `useTransact` `retractEntity` to delete a Todo by `id`.

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

If you're interested in integrating a backend you can check out our Firebase example [here](https://homebaseio.github.io/homebase-react/#!/example.todo_firebase) for inspiration or ping us at hi@homebase.io to pair on integrating a custom backend.

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
  // Schema is optional. Add as much or as little as you want.
  schema: {
    user: { name: { type: 'string' } },
    project: { name: { unique: 'identity' } },
    todo: {
      // refs are relationships
      project: { type: 'ref' },
      owner: { type: 'ref' }
    }
  },
 initialData: [
   {
      user: {
        // negative numbers can be used as temporary ids in a transaction
        id: -1, 
        name: 'Stella' 
      }
    }, {
   
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
    },
	  todoFilter: {
      // identity is a special attribute for user generated ids
      // E.g. this is a setting that should be easy to lookup by name
      identity: 'todoFilters',
      showCompleted: true,
      project: 0
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

const ProjectSelect = ({ value, onChange }) => {
  const [projects] = useQuery({
    $find: 'project',
    $where: { project: { name: '$any' } }
  })
  return (
    <>
      <label>
        Project:
      </label>
      &nbsp;
      <select 
        name="projects" 
        value={value}
        onChange={e => onChange && onChange(Number(e.target.value))}
      >
        <option value="0"></option>
        {projects.map(project => (
          <option 
            key={project.get('id')} 
            value={project.get('id')}
          >
            {project.get('name')}
          </option>
        ))}
      </select>
    </>
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
      {todos
      .filter(todo => {
        if (!filters.get('showCompleted') && todo.get('isCompleted')) return false
        if (filters.get('project') && todo.get('project', 'id') !== filters.get('project')) return false
        return true
      })
      .sort((a, b) => a.get('createdAt') > b.get('createdAt') ? -1 : 1)
      .map(todo => <Todo key={todo.get('id')} todo={todo}/>)}
    </div>
  )
}
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
```

## Thanks!

Thanks for trying us out! We're excited to see what you build and would love to hear any feedback.