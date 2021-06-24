import { HomebaseProvider, useClient, useTransact, useQuery, useEntity, Transaction, Entity} from 'homebase-react'
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { supabase } from './supabaseClient'
import Auth from './Auth';

// this is a hack around firebaseui breaking ts support recently
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
export default function Todos(user) {
  return(
  <div>
    <DataSaver user={user}/>
    <NewTodo />
    <hr/>
    <TodoFilters />
    <TodoList />
  </div>)
}

declare const window: any;
let subscription1 = null
let subscription2 = null


const DataSaver = (user) => {

  const [client] = useClient()
  window.client = client;
  const [currentUser] = useEntity({ identity: 'currentUser' })
  const userId = currentUser.get('uid')

  const transactListener = React.useCallback((changedDatoms) => {
    const numDatomChanges = changedDatoms.reduce((acc : any, [id, attr] : [number, string]) => (
      {...acc, [id + attr]: (acc[id + attr] || 0) + 1}
    ), {})
    console.log(changedDatoms)
    const datomsForFirebase = changedDatoms.filter(([id, attr, _, __, isAdded]: [number, any, any, any, boolean]) => !(!isAdded && numDatomChanges[id + attr] > 1))

    datomsForFirebase.forEach(([id, attr, v, tx, isAdded]: [number, string, any, Transaction, boolean]) => {
      console.log(isAdded);
    if (isAdded){
      supabase
        .from('entities')
        .insert({ "0": id, "1": attr, "2": v, "3":tx, "4": isAdded, "user_id": user.user.user.id })
        .single()
        .then(_ => console.log('works'))
        .then( null, err => console.log('err: ', err));
    } else {
      supabase
        .from('entities')
        .delete()
        .eq("E",id)
        .then(_ => console.log('deleted'))
        .then( null, err => console.log('err deleting: ', err));

    }
    })
  }, [userId])
  React.useEffect(() => {
     //load in initial data
    supabase.from('entities')
    .select('0,1,2,3,4')
    .order('id')
    .then(function(res){
      console.log(res);
      if (!res.error){
        console.log(res.data)
        res.data.forEach(function(d){
          let entity_name =  d[1].split('/')[0].slice(1)
          let attr = d[1].split('/')[1]
          let transaction = [{[entity_name]: {id: d[0], [attr]: d[2]}} ]
          client.transactSilently(transaction)
        });
      }
    });
    client.addTransactListener(transactListener)
    const on = (action: any) => (ds: any) => client.transactSilently([[action, ...ds.val()]])
    subscription1 = supabase
      .from('entities')
      .on('UPDATE', (v) =>  on('add'))
      .on('INSERT', (v) => on('add'))
      .on('DELETE', (v) => on('retract') )
      .subscribe((change) => console.log('todos changed', change))

    return () => {
      client.removeTransactListener()
      supabase.removeSubscription(subscription1)
    }
  }, [userId])
  return null
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
        {new Date(parseInt(todo.get('createdAt'))).toLocaleString()}
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
