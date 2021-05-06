/* eslint-disable react/button-has-type */
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import 'jest-performance-testing'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { perf, wait } from 'react-performance-testing'
import {
  HomebaseProvider,
  useClient,
  useEntity,
  useQuery,
  useTransact
} from '../../dist/js/homebase.react'

const config = {
  lookupHelpers: {
    item: {
      name: { unique: 'identity' },
      parent: { type: 'ref', cardinality: 'one' },
    },
    order: {
      items: { type: 'ref', cardinality: 'many' },
    },
  },
  initialData: [
    {
      order: {
        id: 1,
        items: [
          {
            item: {
              id: 2,
              name: 'id lookup',
              number: 1,
            },
          },
          {
            item: {
              id: 3,
              identity: 'a user given uid',
              name: 'identity lookup',
              number: 1,
              parent: 2,
            },
          },
          {
            item: {
              id: -4,
              name: 'name lookup',
              number: 2,
              parent: 3,
            },
          },
        ],
      },
    },
  ],
}

describe('entity', () => {
  const EntityComp = () => {
    const [idEntity] = useEntity(2)
    const [identityEntity] = useEntity({ identity: 'a user given uid' })
    const [uniqueAttrEntity] = useEntity({ item: { name: 'name lookup' } })
    return (
      <>
        <div data-testid="idEntity">{idEntity.get('name')}</div>
        <div data-testid="identityEntity">{identityEntity.get('name')}</div>
        <div data-testid="uniqueAttrEntity">{uniqueAttrEntity.get('name')}</div>
      </>
    )
  }

  const EntityApp = () => (
    <HomebaseProvider config={config}>
      <EntityComp />
    </HomebaseProvider>
  )

  it('useEntity', async () => {
    expect.assertions(3)
    render(<EntityApp />)
    expect(screen.getByTestId('idEntity')).toHaveTextContent('id lookup')
    expect(screen.getByTestId('identityEntity')).toHaveTextContent('identity lookup')
    expect(screen.getByTestId('uniqueAttrEntity')).toHaveTextContent('name lookup')
  })
})

describe('query', () => {
  const QueryComp = () => {
    const [jsonAnyQuery] = useQuery({
      $find: 'item',
      $where: { item: { name: '$any' } },
    })
    const [jsonAttrQuery] = useQuery({
      $find: 'item',
      $where: { item: { number: 1 } },
    })
    const [jsonAttrAndQuery] = useQuery({
      $find: 'item',
      $where: { item: { number: 1, name: 'id lookup' } },
    })
    const [datalogQuery] = useQuery(`
    [:find ?e
     :where [?e :item/number 1]
            [?e :item/name "id lookup"]]
  `)
    return (
      <>
        <div data-testid="jsonAnyQueryWrap">
          {jsonAnyQuery.map((item) => (
            <div key={item.get('id')} data-testid="jsonAnyQuery">
              {item.get('name')}
            </div>
          ))}
        </div>
        <div data-testid="jsonAttrQueryWrap">
          {jsonAttrQuery.map((item) => (
            <div key={item.get('id')} data-testid="jsonAttrQuery">
              {item.get('name')}
            </div>
          ))}
        </div>
        <div data-testid="jsonAttrAndQueryWrap">
          {jsonAttrAndQuery.map((item) => (
            <div key={item.get('id')} data-testid="jsonAttrAndQuery">
              {item.get('name')}
            </div>
          ))}
        </div>
        <div data-testid="datalogQueryWrap">
          {datalogQuery.map((item) => (
            <div key={item.get('id')} data-testid="datalogQuery">
              {item.get('name')}
            </div>
          ))}
        </div>
      </>
    )
  }

  const QueryApp = () => (
    <HomebaseProvider config={config}>
      <QueryComp />
    </HomebaseProvider>
  )

  it('useQuery', async () => {
    expect.assertions(11)
    render(<QueryApp />)
    expect(screen.getAllByTestId('jsonAnyQuery')).toHaveLength(3)
    expect(screen.getByTestId('jsonAnyQueryWrap')).toHaveTextContent('id lookup')
    expect(screen.getByTestId('jsonAnyQueryWrap')).toHaveTextContent('identity lookup')
    expect(screen.getByTestId('jsonAnyQueryWrap')).toHaveTextContent('name lookup')

    expect(screen.getAllByTestId('jsonAttrQuery')).toHaveLength(2)
    expect(screen.getByTestId('jsonAttrQueryWrap')).toHaveTextContent('id lookup')
    expect(screen.getByTestId('jsonAttrQueryWrap')).toHaveTextContent('identity lookup')

    expect(screen.getByTestId('jsonAttrAndQuery')).toBeInTheDocument()
    expect(screen.getByTestId('jsonAttrAndQueryWrap')).toHaveTextContent('id lookup')

    expect(screen.getByTestId('datalogQuery')).toBeInTheDocument()
    expect(screen.getByTestId('datalogQueryWrap')).toHaveTextContent('id lookup')
  })
})

describe('get', () => {
  const GetComp = () => {
    const [order] = useEntity(1)
    const [firstItem] = useEntity(2)
    return (
      <>
        <div data-testid="order.id">{order.get('id')}</div>
        <div data-testid="order.items.0.ref.name">{order.get('items', 0, 'ref', 'name')}</div>
        <div data-testid="order.items.1.ref.name">{order.get('items', 1, 'ref', 'name')}</div>
        <div data-testid="order.items.2.ref.name">{order.get('items', 2, 'ref', 'name')}</div>
        <div data-testid="order.items.1.ref.parent.name">
          {order.get('items', 1, 'ref', 'parent', 'name')}
        </div>
        <div data-testid="order.items.1.ref.parent._parent.name">
          {order.get('items', 1, 'ref', 'parent', '_parent', 'name')}
        </div>

        <div data-testid="firstItem.id">{firstItem.get('id')}</div>
        <div data-testid="firstItem._parent.name">{firstItem.get('_parent', 'name')}</div>
        {/* <div data-testid="firstItem._parent._parent.name">{firstItem.get('_parent', '_parent', 'name')}</div> */}

        <div>
          {order.get('items', 'ref').map((item) => (
            <div key={item.get('id')} data-testid="order.items">
              {item.get('name')}
            </div>
          ))}
        </div>
        <div>
          {order.get('items', 'ref', 'name').map((name) => (
            <div key={name} data-testid="order.items.ref.name">
              {name}
            </div>
          ))}
        </div>
      </>
    )
  }

  const GetApp = () => (
    <HomebaseProvider config={config}>
      <GetComp />
    </HomebaseProvider>
  )

  it('entity.get()', async () => {
    expect.assertions(12)
    render(<GetApp />)
    expect(screen.getByTestId('order.id')).toHaveTextContent('1')
    expect(screen.getByTestId('order.items.0.ref.name')).toHaveTextContent('id lookup')
    expect(screen.getByTestId('order.items.1.ref.name')).toHaveTextContent('identity lookup')
    expect(screen.getByTestId('order.items.2.ref.name')).toHaveTextContent('name lookup')
    expect(screen.getByTestId('order.items.1.ref.parent.name')).toHaveTextContent('id lookup')
    expect(screen.getByTestId('order.items.1.ref.parent._parent.name')).toHaveTextContent(
      'identity lookup',
    )

    expect(screen.getByTestId('firstItem.id')).toHaveTextContent('2')
    expect(screen.getByTestId('firstItem._parent.name')).toHaveTextContent('identity lookup')
    // TODO: FIX
    // expect(screen.getByTestId('firstItem._parent._parent.name')).toHaveTextContent('name lookup')

    expect(screen.getAllByTestId('order.items')).toHaveLength(3)
    expect(screen.getAllByTestId('order.items')[0]).toHaveTextContent('lookup')
    expect(screen.getAllByTestId('order.items.ref.name')).toHaveLength(3)
    expect(screen.getAllByTestId('order.items.ref.name')[0]).toHaveTextContent('lookup')
  })
})

describe('transact', () => {
  const TransactComp = () => {
    const [transact] = useTransact()
    const [order] = useEntity(1)
    const [newItem] = useEntity({ item: { name: 'new item' } })
    return (
      <>
        <button onClick={() => transact([{ order: { id: order.get('id'), name: 'order1' } }])}>
          update|order.name
        </button>
        <button onClick={() => transact([{ order: { id: order.get('id'), name: null } }])}>
          deleteAttr|order.name
        </button>
        <div data-testid="order.name">{order.get('name')}</div>

        <button onClick={() => transact([{ item: { name: 'new item' } }])}>create|newItem</button>
        <button onClick={() => transact([['retractEntity', newItem.get('id')]])}>
          deleteEntity|newItem
        </button>
        <div data-testid="newItem.name">{newItem.get('name')}</div>
      </>
    )
  }

  const TransactApp = () => (
    <HomebaseProvider config={config}>
      <TransactComp />
    </HomebaseProvider>
  )

  it('useTransact', async () => {
    expect.assertions(4)
    render(<TransactApp />)
    fireEvent.click(screen.getByText('update|order.name'))
    expect(screen.getByTestId('order.name')).toHaveTextContent('order1')
    fireEvent.click(screen.getByText('deleteAttr|order.name'))
    expect(screen.getByTestId('order.name')).toBeEmptyDOMElement()
    fireEvent.click(screen.getByText('create|newItem'))
    expect(screen.getByTestId('newItem.name')).toHaveTextContent('new item')
    fireEvent.click(screen.getByText('deleteEntity|newItem'))
    expect(screen.getByTestId('newItem.name')).toBeEmptyDOMElement()
  })
})

describe('client', () => {
  const initialDBString =
    '#datascript/DB {:schema {:item/name {:db/unique :db.unique/identity}, :item/parent {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/one}, :order/items {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many}, :db/ident {:db/unique :db.unique/identity}, :homebase.array/ref {:db/type :db.type/ref, :db/cardinality :db.cardinality/one}}, :datoms [[1 :order/items 4 536870913] [1 :order/items 5 536870913] [1 :order/items 6 536870913] [2 :item/name "id lookup" 536870913] [2 :item/number 1 536870913] [3 :db/ident "a user given uid" 536870913] [3 :item/name "identity lookup" 536870913] [3 :item/number 1 536870913] [3 :item/parent 2 536870913] [4 :homebase.array/order 1 536870913] [4 :homebase.array/ref 2 536870913] [5 :homebase.array/order 2 536870913] [5 :homebase.array/ref 3 536870913] [6 :homebase.array/order 3 536870913] [6 :homebase.array/ref 7 536870913] [7 :item/name "name lookup" 536870913] [7 :item/number 2 536870913] [7 :item/parent 3 536870913]]}'
  const initialDBDatoms = [
    [1, ':order/items', 4, 536870913, true],
    [1, ':order/items', 5, 536870913, true],
    [1, ':order/items', 6, 536870913, true],
    [2, ':item/name', 'id lookup', 536870913, true],
    [2, ':item/number', 1, 536870913, true],
    [3, ':db/ident', 'a user given uid', 536870913, true],
    [3, ':item/name', 'identity lookup', 536870913, true],
    [3, ':item/number', 1, 536870913, true],
    [3, ':item/parent', 2, 536870913, true],
    [4, ':homebase.array/order', 1, 536870913, true],
    [4, ':homebase.array/ref', 2, 536870913, true],
    [5, ':homebase.array/order', 2, 536870913, true],
    [5, ':homebase.array/ref', 3, 536870913, true],
    [6, ':homebase.array/order', 3, 536870913, true],
    [6, ':homebase.array/ref', 7, 536870913, true],
    [7, ':item/name', 'name lookup', 536870913, true],
    [7, ':item/number', 2, 536870913, true],
    [7, ':item/parent', 3, 536870913, true],
  ]

  const ClientComp = () => {
    const [client] = useClient()
    const [order] = useEntity(1)
    // TODO: test client.addTransactListener()
    // TODO: test client.removeTransactListener()

    const [entityResultState, setEntityResultState] = React.useState()
    async function runEntity() {
      const entityResult = await client.entity(7)
      act(() => {
        setEntityResultState(entityResult.get('name'))
      })
    }
    const [queryResultState, setQueryResultState] = React.useState()
    async function runQuery() {
      const queryResult = await client.query({
        $find: 'item',
        $where: { item: { name: '$any' } },
      })
      act(() => {
        setQueryResultState(queryResult[0].get('name'))
      })
    }
    React.useEffect(() => {
      runQuery()
      runEntity()
    }, [client])

    return (
      <>
        <div data-testid="client.dbToString()">{client.dbToString()}</div>
        <div data-testid="client.dbToDatoms()">{JSON.stringify(client.dbToDatoms())}</div>
        <button
          onClick={() =>
            client.transactSilently([{ order: { id: order.get('id'), name: 'order1' } }])
          }
        >
          update|order.name
        </button>
        <div data-testid="order.name">{order.get('name')}</div>
        <button onClick={() => client.dbFromString(initialDBString)}>client.dbFromString()</button>
        <div data-testid="client.entity">{entityResultState}</div>
        <div data-testid="client.query">{queryResultState}</div>
      </>
    )
  }

  const ClientApp = () => (
    <HomebaseProvider config={config}>
      <ClientComp />
    </HomebaseProvider>
  )

  it('useClient', async () => {
    expect.assertions(7)
    render(<ClientApp />)
    expect(screen.getByTestId('client.dbToString()')).toHaveTextContent(initialDBString)
    expect(screen.getByTestId('client.dbToDatoms()')).toHaveTextContent(
      JSON.stringify(initialDBDatoms),
    )
    fireEvent.click(screen.getByText('update|order.name'))
    expect(screen.getByTestId('order.name')).toHaveTextContent('order1')
    fireEvent.click(screen.getByText('client.dbFromString()'))
    expect(screen.getByTestId('order.name')).toBeEmptyDOMElement()
    await waitFor(() => {
      expect(screen.getByTestId('client.entity')).toHaveTextContent('name lookup')
      expect(screen.getByTestId('client.query')).toHaveTextContent('id lookup')
    })
  })
})

describe('performance', () => {
  const PerfItemComp = ({ id }) => {
    const [item] = useEntity(id)
    return <div>{item.get('name')}</div>
  }
  const PerfItemCompMemo = React.memo(PerfItemComp)

  const PerfListComp = () => {
    const [items] = useQuery({
      $find: 'item',
      $where: { item: { name: '$any' } },
    })
    const [transact] = useTransact()
    return (
      <>
        <div>
          {items.map((item) => (
            <PerfItemCompMemo id={item.get('id')} key={item.get('id')} />
          ))}
        </div>
        <button
          onClick={() => transact([{ item: { id: items[0].get('id'), name: 'updateItem' } }])}
        >
          update|item[0].name
        </button>
        <button onClick={() => transact([{ item: { name: 'addItem' } }])}>add|item</button>
        <button onClick={() => transact([['retractEntity', items[0].get('id')]])}>
          remove|item
        </button>
      </>
    )
  }

  const PerfApp = () => (
    <HomebaseProvider config={config}>
      <PerfListComp />
    </HomebaseProvider>
  )

  describe('cache minimizes re-renders of', () => {
    it('list item update', async () => {
      expect.assertions(7)
      const { renderCount } = perf(React)
      render(<PerfApp />)
      await wait(() => {
        expect(renderCount.current.PerfItemComp[0]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[1]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[2]).toBeRenderedTimes(1)
      })
      fireEvent.click(screen.getByText('update|item[0].name'))
      expect(screen.getByText('updateItem')).toBeMounted()
      await wait(() => {
        expect(renderCount.current.PerfItemComp[0]).toBeRenderedTimes(2)
        expect(renderCount.current.PerfItemComp[1]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[2]).toBeRenderedTimes(1)
      })
    })

    it('list item insertion', async () => {
      expect.assertions(9)
      const { renderCount } = perf(React)
      render(<PerfApp />)
      await wait(() => {
        expect(renderCount.current.PerfItemComp[0]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[1]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[2]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[3]).toBeUndefined()
      })
      fireEvent.click(screen.getByText('add|item'))
      expect(screen.getByText('addItem')).toBeMounted()
      await wait(() => {
        expect(renderCount.current.PerfItemComp[0]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[1]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[2]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[3]).toBeRenderedTimes(1)
      })
    })

    it('list item deletion', async () => {
      expect.assertions(8)
      const { renderCount } = perf(React)
      render(<PerfApp />)
      await wait(() => {
        expect(renderCount.current.PerfItemComp[0]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[1]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[2]).toBeRenderedTimes(1)
      })
      expect(screen.getByText('id lookup')).toBeMounted()
      fireEvent.click(screen.getByText('remove|item'))
      expect(screen.queryByText('id lookup')).not.toBeInTheDocument()
      await wait(() => {
        expect(renderCount.current.PerfItemComp[0]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[1]).toBeRenderedTimes(1)
        expect(renderCount.current.PerfItemComp[2]).toBeRenderedTimes(1)
      })
    })
  })
})
