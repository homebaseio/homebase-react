import React from 'react'
// import { HomebaseProvider, useTransact, useQuery } from 'homebase-react'
const { HomebaseProvider, useTransact, useQuery } = window.homebase.react

const config = {
  schema: {
    ':user/name': {
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
    ':todo/created-at': new Date('2003/11/10')
  }
  , {
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
      <TodoList />
    </div>
  )
}

const TodoInput = () => {
  const [transact] = useTransact()
  return (
    <form onSubmit={e => {
      e.preventDefault()
      // transact([[].reduce.call(e.target.elements, (data, el) => ({ ...data, [el.name]: el.value}), {})])
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
    </form>
  )
}

const TodoList = () => {
  const [todos] = useQuery(
    `[:find ?todo
      :where [?todo :todo/name]]`
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
    <hr/>
    <TodoCheck todo={todo} />
    <span style={todo.get(':todo/completed?') ? { textDecoration: 'line-through '} : null}>
      {todo.get(':todo/name')}
    </span>
    <br/>
    <TodoProject todo={todo} />
    &nbsp;|&nbsp;
    <TodoOwner todo={todo} />
    <br/>
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
      value={!!todo.get(':todo/completed?')}
      onChange={e => transact([{ 
        ':db/id': todo.get(':db/id'), 
        ':todo/completed?': e.target.checked
      }])}
    />
  )
}

const TodoProject = ({ todo }) => {
  const [transact] = useTransact()
  const [projects] = useQuery(
    `[:find ?project
      :where [?project :project/name]]`
  )
  return (
    <>
      <label htmlFor={'todo-project-' + todo.get(':db/id')}>
        Project:
      </label>
      <select 
        name="projects" 
        id={'todo-project-' + todo.get(':db/id')}
        value={todo.get(':todo/project', ':db/id') || ''}
        onChange={e => transact([{ 
          ':db/id': todo.get(':db/id'), 
          ':todo/project': Number(e.target.value)
        }])}
      >
        <option value=""></option>
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
      <select 
        name="users" 
        id={'todo-owner-' + todo.get(':db/id')}
        value={todo.get(':todo/owner', ':db/id') || ''}
        onChange={e => transact([{ 
          ':db/id': todo.get(':db/id'), 
          ':todo/owner': Number(e.target.value)
        }])}
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