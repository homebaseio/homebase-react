import React from 'react'
const { HomebaseProvider, useTransact, useQuery, useEntity } = window.homebase.react

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
        showCompleted: true,
        project: 0
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