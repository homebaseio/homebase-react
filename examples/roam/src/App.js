import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { HomebaseProvider, useClient, useEntity } from 'homebase-react'
import debounce from 'lodash/debounce'
import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Blocks from './pages/Blocks'
import PageUid from './pages/PageUid'

const firebaseConfig = {
  apiKey: 'AIzaSyA7HLuuo0GAAOlHZzYaAjhLK-IBrmj-nnA',
  authDomain: 'homebase-react-roam.firebaseapp.com',
  databaseURL: 'https://homebase-react-roam-default-rtdb.firebaseio.com',
  projectId: 'homebase-react-roam',
  storageBucket: 'homebase-react-roam.appspot.com',
  messagingSenderId: '885247589880',
  appId: '1:885247589880:web:28cedd7c615accfe20aa0d',
}

firebase.initializeApp(firebaseConfig)
const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth())

const AuthButton = () => {
  const [currentUser] = useEntity({ identity: 'currentUser' })
  if (currentUser.get('uid')) {
    return (
      <>
        <SignOut />
        <SyncToFirebase />
      </>
    )
  }
  return <SignIn />
}

const SignIn = () => {
  const [show, setShow] = React.useState(false)
  React.useEffect(() => {
    if (show) {
      firebaseUI.start('#firebaseui-auth-container', {
        signInFlow: 'popup',
        signInSuccessUrl: window.location.href,
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => {
            window.location.href = '/'
          },
        },
      })
    }
  }, [show])
  return (
    <>
      <button type="button" onClick={() => setShow(!show)}>
        {show ? 'Cancel Sign In' : 'Sign In'}
      </button>
      {show ? <div id="firebaseui-auth-container" /> : null}
    </>
  )
}

const SignOut = () => {
  const [client] = useClient()
  const history = useHistory()

  return (
    <button
      type="button"
      onClick={() => {
        firebase.auth().signOut()
        history.push('/')
        client.dbFromString(window.defaultDB)
      }}
    >
      Sign Out
    </button>
  )
}

const SyncToFirebase = () => {
  const [client] = useClient()
  const [currentUser] = useEntity({ identity: 'currentUser' })
  const userId = currentUser.get('uid')
  const transactListener = React.useCallback(
    (changedDatoms) => {
      const cardinalityManyAttrs = new Set([':block/children', ':block/refs'])
      const localOnlyAttrs = new Set([':block/editing?', ':block/editing-starting-caret-index'])
      // Find the datoms that were changed more than once
      const numDatomChanges = changedDatoms.reduce(
        (acc, [id, attr]) => ({ ...acc, [id + attr]: (acc[id + attr] || 0) + 1 }),
        {},
      )
      // Only send one change to firebase per datom
      const datomsForFirebase = changedDatoms.filter(
        // eslint-disable-next-line no-unused-vars
        ([id, attr, _, __, isAdded]) => !(!isAdded && numDatomChanges[id + attr] > 1),
      )
      datomsForFirebase.forEach(([id, attr, v, tx, isAdded]) => {
        if (!localOnlyAttrs.has(attr)) {
          const ref = firebase.database().ref(
            // This example uses firebase realtime database with the following rules.
            // {
            //   "rules": {
            //     "users": {
            //       "$uid": {
            //         ".read": "$uid === auth.uid",
            //         ".write": "$uid === auth.uid"
            //       }
            //     }
            //   }
            // }
            // Every user has a unique namespace with full read/write permission.
            // For single page apps like this we can write the raw datoms to this namespace.
            // Here we are generating a unique key for every datom.
            `users/${userId}/entities/${id}|${attr.replace('/', '|')}|${
              // add the value to the key of cardinality many datoms since they are only unique when their value is included
              cardinalityManyAttrs.has(attr) ? v : ''
            }`,
          )
          // eslint-disable-next-line no-unused-expressions
          isAdded ? ref.set([id, attr, v, tx, isAdded]) : ref.remove()
        }
      })
    },
    [userId],
  )
  React.useEffect(() => {
    const softTransact = (tx) => {
      try {
        client.transactSilently(tx)
      } catch (er) {
        tx.forEach((txPart) => {
          try {
            client.transactSilent([txPart])
          } catch (err) {
            // eslint-disable-next-line no-console
            console.warn(err, txPart)
          }
        })
      }
    }
    // Homebase -> Firebase
    client.addTransactListener(transactListener)
    // Firebase -> Homebase
    const ref = firebase.database().ref(`users/${userId}/entities`)
    let txQueue = []
    const debouncedTransactQueue = debounce(() => {
      softTransact(txQueue)
      txQueue = []
    }, 300)
    const onAdd = (ds) => {
      txQueue.push(['add', ...ds.val()])
      debouncedTransactQueue()
    }
    const onRetract = (ds) => {
      txQueue.push(['retract', ...ds.val()])
      debouncedTransactQueue()
    }
    ref.on('child_added', onAdd)
    ref.on('child_removed', onRetract)
    ref.on('child_changed', onAdd)
    return () => {
      client.removeTransactListener()
      ref.off('child_added', onAdd)
      ref.off('child_removed', onRetract)
      ref.off('child_changed', onAdd)
    }
  }, [userId, client, transactListener])
  return null
}

const LoadInitialData = ({ children }) => {
  const [client] = useClient()
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setLoading(true)
    window.emptyDB = client.dbToString()
    let currentUser
    const closeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        currentUser = user
        client.transactSilently([{ currentUser: { identity: 'currentUser', uid: user.uid } }])
      }
    })
    async function init() {
      const res = await fetch('/edn/hn-jb-3.edn')
      window.defaultDB = await res.text()
      setTimeout(() => {
        if (!currentUser) client.dbFromString(window.defaultDB)
        setLoading(false)
      }, 1000)
    }
    init()
    return closeListener
  }, [client])
  if (loading) return 'Loading...'
  return children
}

const Header = () => (
  <header className="container mx-auto px-2 flex justify-between items-center md:flex-row flex-col">
    <h1 className="text-2xl font-bold">
      <Link to="/">Hombase React - Roam Demo</Link>
    </h1>
    <a target="_blank" rel="noreferrer" href="https://homebase.io">
      Homebase↗️
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/homebaseio/homebase-react/tree/master/examples/roam"
    >
      GitHub↗️
    </a>
    <AuthButton />
  </header>
)

const NotLoggedInBanner = () => {
  const [currentUser] = useEntity({ identity: 'currentUser' })
  if (currentUser.get('uid')) return null
  return (
    <div className="w-full py-2 px-4 rounded bg-yellow-100 border border-yellow-300 text-yellow-600">
      Changes will not be saved while signed out.
    </div>
  )
}

const config = {
  schema: {
    block: {
      uid: { unique: 'identity' },
      title: { unique: 'identity' },
      children: { type: 'ref', cardinality: 'many' },
      refs: { type: 'ref', cardinality: 'many' },
      page: { type: 'ref', cardinality: 'one' },
    },
  },
}

export default function App() {
  return (
    <HomebaseProvider config={config}>
      <LoadInitialData>
        <Router>
          <ScrollToTop />
          <Header />
          <main className="max-w-lg mx-auto px-2">
            <NotLoggedInBanner />
            <Switch>
              <Route path="/" exact>
                <Blocks />
              </Route>
              <Route path="/page/:uid">
                <PageUid />
              </Route>
            </Switch>
          </main>
        </Router>
      </LoadInitialData>
    </HomebaseProvider>
  )
}
