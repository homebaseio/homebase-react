import React from 'react'
// import { HomebaseProvider, useTransact, useQuery } from 'homebase-react'
const { HomebaseProvider, useTransact, useQuery } = window.homebase.react

const config = {
  schema: {
    ':db/ident': {
      ':db/unique': ':db.unique/identity'
    },
    ':todo/project': {
      ':db/valueType': ':db.type/ref',
      ':db/cardinality': ':db.cardinality/one'
    },
    ':todo/owner': {
      ':db/valueType': ':db.type/ref',
      ':db/cardinality': ':db.cardinality/one'
    },
  },
  initialData: [{
    ':db/ident': ':settings/filters',
    ':filter/show-completed?': true,
    ':filter/project': 0,
  }, {
    ':db/id': -1,
    ':user/name': 'Stella'
  }, {
    ':db/id': -2,
    ':user/name': 'Arpegius'
  }, {
    ':db/id': -3,
    ':project/name': 'Make it',
  }, {
    ':db/id': -4,
    ':project/name': 'Do it'
  }, {
    ':todo/name': 'Fix ship',
    ':todo/owner': -1,
    ':todo/project': -3,
    ':todo/completed?': true,
    ':todo/created-at': new Date('2003/11/10')
  }, {
    ':todo/name': 'Go home',
    ':todo/owner': -2,
    ':todo/project': -4,
    ':todo/created-at': new Date('2003/11/9')
  }]
}

export const App = () => {
  return (
    <HomebaseProvider config={config}>
      <Todos />
    </HomebaseProvider>
  )
}

const Todos = () => {
  return (
    <div>
      <TodoInput />
      <Filters />
      <TodoList />
    </div>
  )
}

const TodoInput = () => {
  const [transact] = useTransact()
  return (
    <form onSubmit={e => {
      e.preventDefault()
      transact([{
        ':todo/name': e.target.elements[':todo/name'].value,
        ':todo/created-at': new Date
      }])
      e.target.reset()
    }}>
      <input 
        autoFocus
        type="text" 
        name=":todo/name" 
        placeholder="What needs to be done?" 
        autoComplete="off"
        required
      />
      &nbsp;
      <button type="submit">Create Todo</button>
    </form>
  )
}

const Filters = () => {
  const [filters] = useQuery([':db/ident', ':settings/filters'])
  const [transact] = useTransact()
  return (
    <div>
      <label htmlFor=":filter/show-completed?">Show Completed?</label>
      <input 
        type="checkbox" 
        id=":filter/show-completed?"
        checked={filters.get(':filter/show-completed?')}
        onChange={e => transact([{ ':db/id': filters.get(':db/id'), ':filter/show-completed?': e.target.checked }])}
      />
      &nbsp;·&nbsp;
      <ProjectSelect
        value={filters.get(':filter/project')}
        onChange={projectId => transact([{
          ':db/id': filters.get(':db/id'),
          ':filter/project': projectId,
        }])}
      />
    </div>
  )
}

const ProjectSelect = ({ value, onChange }) => {
  const [projects] = useQuery(
    `[:find ?project
      :where [?project :project/name]]`
  )
  const id = 'project-' + Math.random()
  return (
    <>
      <label htmlFor={id}>
        Project:
      </label>
      &nbsp;
      <select 
        name="projects" 
        id={id}
        value={value}
        onChange={e => onChange && onChange(Number(e.target.value))}
      >
        <option value="0"></option>
        {projects.map(project => (
          <option 
            key={project.get(':db/id')} 
            value={project.get(':db/id')}
          >
            {project.get(':project/name')}
          </option>
        ))}
      </select>
    </>
  )
}

const TodoList = () => {
  const [todos] = useQuery(
    `[:find ?todo
      :where 
      [?todo :todo/name]
      [?filter :db/ident :settings/filters]
      (or [?filter :filter/show-completed? true]
        (not [?todo :todo/completed? true]))
      [?filter :filter/project ?project]
      (or [(>= 0 ?project)]
          [?todo :todo/project ?project])]`
  )
  return (
    <div>
      {todos
      .sort((a, b) => a.get(':todo/created-at') > b.get(':todo/created-at') ? -1 : 1)
      .map(todo => <Todo key={todo.get(':db/id')} todo={todo}/>)}
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
      {todo.get(':todo/created-at').toLocaleString()}
    </small>
  </div>
)

const TodoCheck = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <input 
      type="checkbox"
      style={{ width: 20, height: 20, cursor: 'pointer' }}
      checked={!!todo.get(':todo/completed?')}
      onChange={e => transact([{ 
        ':db/id': todo.get(':db/id'), 
        ':todo/completed?': e.target.checked
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
        ...todo.get(':todo/completed?') && { textDecoration: 'line-through '}
      }}
      value={todo.get(':todo/name')}
      onChange={e => transact([[':db/add', todo.get(':db/id'), ':todo/name', e.target.value]])}
    />
  )
}

const TodoProject = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <ProjectSelect
      value={todo.get(':todo/project', ':db/id') || ''}
      onChange={projectId => transact([[projectId ? ':db/add' : ':db/retract', todo.get(':db/id'), ':todo/project', projectId || null]])}
    />    
  )
}

const TodoOwner = ({ todo }) => {
  const [transact] = useTransact()
  const [users] = useQuery(
    `[:find ?user
      :where [?user :user/name]]`
  )
  return (
    <>
      <label htmlFor={'todo-owner-' + todo.get(':db/id')}>
        Owner:
      </label>
      &nbsp;
      <select 
        name="users" 
        id={'todo-owner-' + todo.get(':db/id')}
        value={todo.get(':todo/owner', ':db/id') || ''}
        onChange={e => transact([[Number(e.target.value) ? ':db/add' : ':db/retract', todo.get(':db/id'), ':todo/owner', Number(e.target.value) || null]])}
      >
        <option value=""></option>
        {users.map(user => (
          <option 
            key={user.get(':db/id')} 
            value={user.get(':db/id')}
          >
            {user.get(':user/name')}
          </option>
        ))}
      </select>
    </>
  )
}

const TodoDelete = ({ todo }) => {
  const [transact] = useTransact()
  return (
    <button onClick={() => transact([[':db.fn/retractEntity', todo.get(':db/id')]])}>
      Delete
    </button>
  )
}