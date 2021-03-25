import React from 'react'

const { HomebaseProvider, useTransact, useQuery, useEntity } = window.homebase.react

export const App = () => (
  <HomebaseProvider config={config}>
    <Todos />
  </HomebaseProvider>
)

const config = {
  // Lookup helpers are used to enforce
  // unique constraints and relationships.
  lookupHelpers: {
    project: { name: { unique: 'identity' } },
    todo: {
      // refs are relationships
      project: { type: 'ref' },
      owner: { type: 'ref' },
    },
  },
  // Initial data let's you conveniently transact some
  // starting data on DB creation to hydrate your components.
  initialData: [
    {
      todoFilter: {
        // identity is a special unique attribute for user generated ids
        // E.g. todoFilters are settings that should be easy to lookup by their identity
        identity: 'todoFilters',
        showCompleted: true,
      },
    },
    {
      user: {
        // Negative numbers can be used as temporary ids in a transaction.
        // Use them to relate multiple entities together at once.
        id: -1,
        name: 'Stella',
      },
    },
    {
      user: {
        id: -2,
        name: 'Arpegius',
      },
    },
    {
      project: {
        id: -3,
        name: 'Make it',
      },
    },
    {
      project: {
        id: -4,
        name: 'Do it',
      },
    },
    {
      todo: {
        name: 'Fix ship',
        owner: -1,
        project: -3,
        isCompleted: true,
        createdAt: new Date('2003/11/10'),
      },
    },
    {
      todo: {
        name: 'Go home',
        owner: -2,
        project: -4,
        createdAt: new Date('2003/11/10'),
      },
    },
  ],
}

const Todos = () => (
  <div>
    <NewTodo />
    <TodoFilters />
    <TodoList />
  </div>
)

const NewTodo = () => {
  const [transact] = useTransact()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        transact([
          {
            todo: {
              name: e.target.elements['todo-name'].value,
              createdAt: new Date(),
            },
          },
        ])
        e.target.reset()
      }}
    >
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
    $where: { todo: { name: '$any' } },
  })
  console.log(todos)
  return (
    <div>
      {todos
        .filter((todo) => {
          if (!filters.get('showCompleted') && todo.get('isCompleted')) return false
          if (filters.get('project') && todo.get('project', 'id') !== filters.get('project'))
            return false
          if (filters.get('owner') && todo.get('owner', 'id') !== filters.get('owner')) return false
          return true
        })
        .sort((a, b) => (a.get('createdAt') > b.get('createdAt') ? -1 : 1))
        .map((todo) => (
          <Todo key={todo.get('id')} id={todo.get('id')} />
        ))}
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
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingTop: 20 }}
      >
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
      <small style={{ color: 'grey' }}>{todo.get('createdAt').toLocaleString()}</small>
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
      onChange={(e) => transact([{ todo: { id: todo.get('id'), isCompleted: e.target.checked } }])}
    />
  )
}

const TodoName = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <input
      style={{
        border: 'none',
        fontSize: 20,
        marginTop: -2,
        cursor: 'pointer',
        ...(todo.get('isCompleted') && { textDecoration: 'line-through ' }),
      }}
      defaultValue={todo.get('name')}
      onChange={(e) => transact([{ todo: { id: todo.get('id'), name: e.target.value } }])}
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
      onChange={(project) => transact([{ todo: { id: todo.get('id'), project } }])}
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
      onChange={(owner) => transact([{ todo: { id: todo.get('id'), owner } }])}
    />
  )
}

const TodoDelete = ({ todo }) => {
  const [transact] = useTransact()
  return <button onClick={() => transact([['retractEntity', todo.get('id')]])}>Delete</button>
}

const TodoFilters = () => {
  const [filters] = useEntity({ identity: 'todoFilters' })
  const [transact] = useTransact()
  return (
    <div>
      <label>
        Show Completed?
        <input
          type="checkbox"
          checked={filters.get('showCompleted')}
          onChange={(e) =>
            transact([{ todoFilter: { id: filters.get('id'), showCompleted: e.target.checked } }])}
        />
      </label>
      &nbsp;·&nbsp;
      <EntitySelect
        label="Project"
        entityType="project"
        value={filters.get('project')}
        onChange={(project) => transact([{ todoFilter: { id: filters.get('id'), project } }])}
      />
      &nbsp;·&nbsp;
      <EntitySelect
        label="Owner"
        entityType="user"
        value={filters.get('owner')}
        onChange={(owner) => transact([{ todoFilter: { id: filters.get('id'), owner } }])}
      />
    </div>
  )
}

const EntitySelect = React.memo(({ label, entityType, value, onChange }) => {
  const [entities] = useQuery({
    $find: entityType,
    $where: { [entityType]: { name: '$any' } },
  })
  return (
    <label>
      {label}:&nbsp;
      <select
        name={entityType}
        value={value || ''}
        onChange={(e) => onChange && onChange(Number(e.target.value) || null)}
      >
        <option key="-" value="" />
        {entities.map((entity) => (
          <option key={entity.get('id')} value={entity.get('id')}>
            {entity.get('name')}
          </option>
        ))}
      </select>
    </label>
  )
})
