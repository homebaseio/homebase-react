import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import { HomebaseProvider, useClient, useTransact, useQuery, useEntity, Transaction, Entity} from 'homebase-react'
import Todos from './Todos'
export default function App() {

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

    ]
  }

  let [session, setSession] = useState(null)

  const AuthChanged = (session) => {
    const [transact] = useTransact()
    const [currentUser] = useEntity({ identity: 'currentUser' })
    const [client] = useClient()
    setSession(session)
    if (session){
      const user = supabase.auth.user();
      console.log(user)
      transact([{ user: { uid: user.id, name: user.email} }])
      client.transactSilently([{ currentUser: { identity: 'currentUser', uid: user.id }}])
    }
  }

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => AuthChanged)
  }, [])

  return (
    <HomebaseProvider config={config}>
    <div className="w-full h-full bg-gray-900">
      {!session ? (
        <div className="w-full h-full flex justify-center items-center p-4">
          <Auth />
        </div>
      ) : (
        <div
          className="w-full h-full flex flex-col justify-center items-center p-4"
          style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
        >
          <Todos user={supabase.auth.user()} />
          <button
            className="btn-black w-full mt-12"
            onClick={async () => {
              const { error } = await supabase.auth.signOut()
              if (error) console.log('Error logging out:', error.message)
            }}
          >
            Logout
          </button>
        </div>
      )}

    </div>
    </HomebaseProvider>
  )
}
