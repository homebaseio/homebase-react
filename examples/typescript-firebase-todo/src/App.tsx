/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// this is a hack around firebaseui breaking ts support recently
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css' 

import { HomebaseProvider, useClient, useTransact, useQuery, useEntity, Transaction, Entity} from 'homebase-react'

export default function App() {
  return (
    <HomebaseProvider config={config}>
      <AuthPrompt>
        <Todos />
      </AuthPrompt>
    </HomebaseProvider>
  )
}
declare const window: any;

const config = {
  // Lookup helpers are used to enforce 
  // unique constraints and relationships.
  lookupHelpers: {
    user: { uid: { unique: 'identity' } },
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
    }
  ]
}

const firebaseConfig = {
  apiKey: "AIzaSyC31X8R5-doWtVmbBRD0xCue09HfydfjzI",
  authDomain: "homebase-react.firebaseapp.com",
  databaseURL: "https://homebase-react.firebaseio.com",
  projectId: "homebase-react",
  storageBucket: "homebase-react.appspot.com",
  messagingSenderId: "1056367825432",
  appId: "1:1056367825432:web:a6aaba7bee5e8a43e6296d",
  measurementId: "G-FJ9BNZDFCE"
}

firebase.initializeApp(firebaseConfig)
const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth())

const AuthPrompt = ({ children } : {children: any}) => { 
  const [transact] = useTransact()
  const [currentUser] = useEntity({ identity: 'currentUser' })
  const [client] = useClient()
  React.useEffect(() => {
    window.emptyDB = client.dbToString()
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        transact([{ user: { uid: user.uid, name: user.displayName } }])
        client.transactSilently([{ currentUser: { identity: 'currentUser', uid: user.uid }}])
      }
    })
  }, [])
  if (currentUser.get('uid')) return children
  return <SignIn />
}

const SignIn = () => {
  React.useEffect(() => {
    firebaseUI.start('#firebaseui-auth-container', {
      signInFlow: 'popup',
      signInSuccessUrl: window.location.href,
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      },
    })
  }, [])
  return <div id="firebaseui-auth-container" />
}

const Todos = () => (
  <div>
    <DataSaver />
    <SignOut />
    <NewTodo />
    <hr/>
    <TodoFilters />
    <TodoList />
  </div>
)

const DataSaver = () => {
  const [client] = useClient()
  const [currentUser] = useEntity({ identity: 'currentUser' })
  const userId = currentUser.get('uid')
  const transactListener = React.useCallback((changedDatoms) => {
    const numDatomChanges = changedDatoms.reduce((acc : any, [id, attr] : [number, string]) => (
      {...acc, [id + attr]: (acc[id + attr] || 0) + 1}
    ), {})
    const datomsForFirebase = changedDatoms.filter(([id, attr, _, __, isAdded]: [number, any, any, any, boolean]) => !(!isAdded && numDatomChanges[id + attr] > 1))
    datomsForFirebase.forEach(([id, attr, v, tx, isAdded]: [number, string, any, Transaction, boolean]) => {
      const ref = firebase.database().ref(`users/${userId}/entities/${id}|${attr.replace('/', '|')}`)
      isAdded ? ref.set([id, attr, v, tx, isAdded]) : ref.remove()
    })
  }, [userId])
  React.useEffect(() => {
    client.addTransactListener(transactListener)
    const ref = firebase.database().ref(`users/${userId}/entities`)
    const on = (action: any) => (ds: any) => client.transactSilently([[action, ...ds.val()]])
    ref.on('child_added', on('add'))
    ref.on('child_removed', on('retract'))
    ref.on('child_changed', on('add'))
    return () => {
      client.removeTransactListener()
      ref.off('child_added', on('add'))
      ref.off('child_removed', on('retract'))
      ref.off('child_changed', on('add'))
    }
  }, [userId])
  return null
}

const SignOut = () => {
  const [client] = useClient()
  return (
    <button 
      style={{float: 'right'}} 
      onClick={() => {
        
        client.dbFromString(window.emptyDB)
        firebase.auth().signOut()
      }}
    >Sign Out</button>
  )
}

const NewTodo = () => {
  const [transact] = useTransact()
  return (
    <form onSubmit={(e:any) => {
      e.preventDefault()
      transact([{
        todo: {
          name: e.target.elements['todo-name'].value,
          createdAt: Date.now()
        }
      }])
      e.target.reset()
    }}>
      <input 
        autoFocus
        style={{fontSize: 20}}
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
const Todo = React.memo(({ id } : {id : number}) => {
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
        {new Date(todo.get('createdAt')).toLocaleString()}
      </small>
    </div>
  )
})

const TodoCheck = ({ todo } : {todo: Entity}) => {
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

const TodoName = ({ todo } : {todo: Entity}) => {
  const [transact] = useTransact()
  return (
    <input 
      style={{  
        border: 'none', fontSize: 20, marginTop: -2, cursor: 'pointer',
        ...todo.get('isCompleted') && { textDecoration: 'line-through '}
      }}
      value={todo.get('name') || ''}
      onChange={e => transact([{ todo: { id: todo.get('id'), name: e.target.value }}])}
    />
  )
}

const TodoProject = ({ todo } : {todo: Entity}) => {
  const [transact] = useTransact()
  return (
    <EntitySelect
      label="Project"
      entityType="project"
      value={todo.get('project', 'id')}
      onChange={(project: string) => transact([{ todo: { id: todo.get('id'), project }}])}
    />    
  )
}

const TodoOwner = ({ todo }: { todo: Entity}) => {
  const [transact] = useTransact()
  return (
    <EntitySelect 
      label="Owner"
      entityType="user" 
      value={todo.get('owner', 'id')}
      onChange={(owner: string) => transact([{ todo: { id: todo.get('id'), owner }}])}
    />
  )
}

const TodoDelete = ({ todo }: {todo: Entity}) => {
  const [transact] = useTransact()
  return (
    <button onClick={() => transact([['retractEntity', todo.get('id')]])}>
      Delete
    </button>
  )
}

const TodoFilters = () => {
  const [filters] = useEntity({ identity: 'todoFilters' })
  const [client] = useClient()
  return (
    <div>
      Filter by:&nbsp;&nbsp;
      <label>Show Completed?
        <input 
          type="checkbox" 
          checked={filters.get('showCompleted')}
          onChange={e => client.transactSilently([{ todoFilter: { id: filters.get('id'), showCompleted: e.target.checked }}])}
        />
      </label>
      &nbsp;·&nbsp;
      <EntitySelect
        label="Project"
        entityType="project"
        value={filters.get('project')}
        onChange={(project:string) => client.transactSilently([{ todoFilter: { id: filters.get('id'), project }}])}
      />
      &nbsp;·&nbsp;
      <EntitySelect
        label="Owner"
        entityType="user"
        value={filters.get('owner')}
        onChange={(owner:string) => client.transactSilently([{ todoFilter: { id: filters.get('id'), owner }}])}
      />
    </div>
  )
}

const EntitySelect = React.memo(({ label, entityType, value, onChange }: 
  {label: string, entityType: any, value: any, onChange:any}) => {
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