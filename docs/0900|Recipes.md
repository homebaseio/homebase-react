## Syncing to Firebase 

The example below shows a recipe for keeping Homebase React in sync with Firebase. `client.addTransactListener(callback)` lets you listen to every local transaction and send those updates to Firebase. We also need a way to sync Firebase with Homebase React. In this example we create a namespace on Firebase for each user based on their firebase uid and listen to all changes in that namespace. client.` transactSilently(tx)` allows us save changes received from Firebase without triggering our transactListener function and sending those changes back to Firebase endlessly.

```js
import { useClient, useEntity } from 'homebase-react';
import firebase from 'firebase/app';
import debounce from 'lodash/debounce';
import React from 'react';

const SyncToFirebase = () => {
    const [client] = useClient()
    const [currentUser] = useEntity({ identity: 'currentUser' })
    const userId = currentUser.get('uid')
    const transactListener = React.useCallback(
      (changedDatoms) => {
        const cardinalityManyAttrs = new Set([]) // E.g. ':project/todos' or ':user/friends'
        const localOnlyAttrs = new Set([]) // E.g. ':current-user/uid' these are attributes you don't 
        // want to save to Firebase, but also don't want to have to call `client.transactSilently()` everytime you change them.
        
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
        try{
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

export default SyncToFirebase;
```

