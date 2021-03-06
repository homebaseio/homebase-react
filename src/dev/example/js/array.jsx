import React from 'react'

const { HomebaseProvider, useTransact, useEntity } = window.homebase.react

const config = {
  lookupHelpers: {
    store: {
      items: { type: 'ref', cardinality: 'many' },
    },
    item: {
      date: { type: 'ref', cardinality: 'one' },
    },
  },
  initialData: [
    {
      store: {
        identity: 'store 1',
        items: [
          { item: { name: 'item 1' } },
          { item: { name: 'item 2' } },
          { item: { name: 'item 3' } },
          { item: { name: 'item 4' } },
          { item: { name: 'item 5', date: { year: 2021, month: 1, day: 3 } } },
        ],
      },
    },
  ],
}

export const App = () => (
  <HomebaseProvider config={config}>
    <Items />
  </HomebaseProvider>
)

const Items = () => {
  const [store] = useEntity({ identity: 'store 1' })
  const [transact] = useTransact()

  let newI = null
  const onDragOver = React.useCallback((e) => {
    e.preventDefault()
    newI = parseInt(e.target.dataset.index)
  })

  const reorder = React.useCallback(
    (id, orderMin, orderMax) => {
      const order = (orderMin + orderMax) / 2.0
      transact([{ 'homebase.array': { id, order } }])
    },
    [transact],
  )

  return (
    <div>
      {store.get('items').map((item, i) => (
        <div
          key={item.get('ref', 'id')}
          style={{ cursor: 'move' }}
          data-index={i}
          draggable
          onDragOver={onDragOver}
          onDragEnd={(e) =>
            reorder(
              item.get('id'),
              (newI > 0 && store.get('items', newI - 1, 'order')) || 0,
              store.get('items', newI, 'order'),
            )
          }
        >
          ↕ {item.get('ref', 'name')} &nbsp;
          <small>{item.get('ref', 'date', 'year')}</small>
        </div>
      ))}
    </div>
  )
}
