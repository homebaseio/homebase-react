/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete'
import '@webscopeio/react-textarea-autocomplete/style.css'
import { useEntity, useQuery, useTransact } from 'homebase-react'
import debounce from 'lodash/debounce'
import { nanoid } from 'nanoid'
import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import { Link } from 'react-router-dom'
import RoamMarkdown from './RoamMarkdown'

const Ref = ({ id }) => {
  const [block] = useEntity(id)
  // Adding '_' to 'children' does a reverse ref lookup, in this case finding the parent.
  // Since children is a cardinality many reference the parent is returned in an array.
  const parentUid = block.get('_children', 0, 'uid')
  return (
    <div className="my-4">
      <Link to={`/page/${parentUid}`} className="text-blue-500">
        {block.get('_children', 0, 'title') || block.get('_children', 0, 'string')}
      </Link>
      <div className="py-2 px-4 bg-gray-100 rounded">
        <BlockMemo id={block.get('id')} />
      </div>
    </div>
  )
}

const LinkedRefs = ({ id }) => {
  const [blocks] = useQuery({
    $find: 'block',
    $where: { block: { refs: id } },
  })

  return (
    <>
      <h2 className="mt-8 text-xl font-bold text-gray-400">Linked References</h2>
      {blocks.map((b) => (
        <Ref key={b.get('id')} id={b.get('id')} />
      ))}
    </>
  )
}

const NewBlockPlaceholder = ({ parentId }) => {
  const [transact] = useTransact()
  return (
    <div className="block-placeholder">
      <div className="relative group">
        <span
          className="text-3xl flex justify-center items-center"
          style={{
            position: 'absolute',
            top: -3,
            left: -27.5,
            width: 24,
            height: 24,
            lineHeight: 0,
            overflow: 'hidden',
          }}
        >
          ·
        </span>
        <input
          onClick={() => {
            transact([
              {
                block: {
                  id: -1,
                  open: true,
                  order: 0,
                  page: parentId,
                  uid: nanoid(9),
                  time: Date.now(),
                  isEditing: true,
                },
              },
              {
                block: {
                  id: parentId,
                  children: -1,
                },
              },
            ])
          }}
          className="outline-none w-full"
          placeholder="Click here to start writing"
        />
      </div>
    </div>
  )
}

const BlockChildren = ({ id, withPlaceholder }) => {
  const [block] = useEntity(id)
  const children = block.get('children') || []
  return (
    <div className="pl-6">
      {children
        .filter((b) => b.get('id'))
        .sort((a, b) => (a.get('order') > b.get('order') ? 1 : -1))
        .map((b) => (
          <BlockMemo key={b.get('id')} id={b.get('id')} />
        ))}
      {withPlaceholder && block.get('title') && !children.length ? (
        <NewBlockPlaceholder parentId={block.get('id')} />
      ) : null}
    </div>
  )
}

const BlockEditString = ({ id: inputId }) => {
  const [block] = useEntity(inputId)
  const [transact] = useTransact()
  const [pageBlocks] = useQuery({
    $find: 'block',
    $where: { block: { title: '$any' } },
  })
  const titles = React.useMemo(() => pageBlocks.map((b) => b.get('title') || []), [pageBlocks])
  const id = block.get('id') || inputId
  // Use react component level state for added performance
  // since this has to be a controlled textarea component
  // for ReactTextareaAutocomplete to work
  const [textareaString, setTextareaString] = React.useState(null)
  // Put this transaction in a callback so it can be debounced
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setBlockString = React.useCallback(
    debounce((str) => {
      transact([{ block: { id, string: str } }])
    }, 300),
    [transact, id],
  )
  const rtaRef = React.useRef()
  React.useEffect(() => {
    const i = block.get('editingStartingCaretIndex') || 99999
    rtaRef.current.setCaretPosition(i === 1 ? 99999 : i)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactTextareaAutocomplete
      autoFocus
      minChar={0}
      renderToBody
      ref={rtaRef}
      className="w-full outline-none bg-transparent"
      containerClassName="text-base flex"
      onChange={(e) => {
        // This instantly updates the UI
        setTextareaString(e.target.value || '')
        // This saves the string to homebase and ultimately
        // the backend API (Firebase) asynchronously to avoid slowing the UI
        setBlockString(e.target.value)
      }}
      onBlur={() => {
        transact([
          {
            block: {
              id,
              isEditing: null,
              editingStartingCaretIndex: null,
            },
          },
        ])
        setTextareaString(null)
      }}
      value={textareaString !== null ? textareaString : block.get('string') || ''}
      textAreaComponent={{ component: TextareaAutosize, ref: 'innerRef' }}
      loadingComponent={() => <span>Loading</span>}
      trigger={{
        '[[': {
          dataProvider: (token) => {
            const re = new RegExp(token.slice(1), 'i')
            // Filter the page titles autocomplete list
            return [...titles.filter((title) => re.test(title)).slice(0, 9), token.slice(1)]
          },
          component: ({ entity }) => <div className="py-1 px-2">{entity}</div>,
          output: (entity) => ({ text: `[[${entity}]]`, caretPosition: 'next' }),
        },
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          const parentId = block.get('_children', 0, 'id')
          const order = block.get('order') || 0
          const siblingOrders = block.get('_children', 0, 'children', 'order')
          const nextSiblingOrder = siblingOrders.filter((v) => v > order).sort()[0] || order + 2
          const orderBetweenCurrentBlockAndNextSibling = (order + nextSiblingOrder) / 2.0
          transact([
            // Create the new sibling block
            {
              block: {
                id: -1,
                open: true,
                // Insert it right after the current block
                order: orderBetweenCurrentBlockAndNextSibling,
                page: block.get('page', 'id') || id,
                uid: nanoid(9),
                time: Date.now(),
                isEditing: true, // TODO: transact silently
              },
            },
            // Add the new block as a child of the parent block
            {
              block: {
                id: parentId,
                children: -1,
              },
            },
            // Stop editing the current block
            {
              block: {
                id,
                isEditing: null,
                editingStartingCaretIndex: null,
              },
            },
          ])
        } else if (
          !textareaString?.length &&
          !block.get('string')?.length &&
          e.key === 'Backspace'
        ) {
          e.preventDefault()
          transact([['retractEntity', id]])
        } else if (e.key === 'Tab' && e.shiftKey) {
          e.preventDefault()
          const parent = block.get('_children', 0)
          const grandparent = block.get('_children', 0, '_children', 0)
          const parentId = parent?.get('id')
          const grandparentId = grandparent?.get('id')
          // Don't dedent a block without ancestors
          if (!parentId || !grandparentId) return false
          const order = parent.get('order') || 0
          const siblingOrders = grandparent.get('children', 'order') || []
          const nextSiblingOrder = siblingOrders.sort().find((v) => v > order) || order + 2
          const updatedOrder = (order + nextSiblingOrder) / 2.0
          try {
            transact([
              // Unparent the current block
              ['retract', parentId, ':block/children', id],
              // Reparent the current block to its grandparent
              ['add', grandparentId, ':block/children', id],
              // Update the order of the block to move it to the end of its new siblings
              {
                block: {
                  id,
                  order: updatedOrder,
                },
              },
            ])
          } catch (err) {
            // This is allowed to fail
            return false
          }
        } else if (e.key === 'Tab') {
          e.preventDefault()
          const parentId = block.get('_children', 0, 'id')
          const order = block.get('order') || 0
          const siblings = block.get('_children', 0, 'children')
          const prevSibling = siblings
            .sort((a, b) => (a.get('order') > b.get('order') ? -1 : 1))
            .find((b) => b.get('order') < order)
          const prevSiblingId = prevSibling?.get('id')
          // Don't indent a block without a sibling above it
          if (!prevSiblingId) return false
          const updatedOrder = Math.max(prevSibling.get('children', 'order') || [0]) + 1
          try {
            transact([
              // Unparent the current block
              ['retract', parentId, ':block/children', id],
              // Reparent the current block to its previous sibling
              ['add', prevSiblingId, ':block/children', id],
              // Update the order of the block to move it to the end of its new siblings
              {
                block: {
                  id,
                  order: updatedOrder,
                },
              },
            ])
          } catch (err) {
            // This is allowed to fail
            return false
          }
        }
        return true
      }}
    />
  )
}

const Block = ({ id, uid, withLinkedRefs, withPlaceholder }) => {
  const [block] = useEntity(id || { block: { uid } })
  const [transact] = useTransact()
  const children = block.get('children') || []

  return (
    <div className="block-wrap">
      <div className="block relative">
        {block.get('title') ? (
          <h1 className="text-3xl font-bold mt-4">
            <Link to={`/page/${block.get('uid')}`}>{block.get('title')}</Link>
          </h1>
        ) : (
          <>
            <div
              className="absolute -left-4 w-px bg-gray-300"
              style={{ top: '1.5em', height: 'calc(100% - 1.5em)' }}
            />
            <div className="relative group">
              {children.length ? (
                <button
                  type="button"
                  onClick={() => {
                    transact([{ block: { id: block.get('id'), open: !block.get('open') } }])
                  }}
                  className={`text-2xl cursor-pointer group-hover:opacity-100 ${
                    block.get('open') ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    position: 'absolute',
                    top: -3,
                    left: -40,
                    width: 20,
                    height: 24,
                    lineHeight: 0,
                    overflow: 'hidden',
                    zIndex: 2,
                    outline: 0,
                  }}
                >
                  {block.get('open') ? '▾' : '▸'}
                </button>
              ) : null}
              <Link
                to={`/page/${block?.get('uid')}`}
                className="text-3xl flex justify-center items-center"
                style={{
                  position: 'absolute',
                  top: -3,
                  left: -27.5,
                  width: 24,
                  height: 24,
                  lineHeight: 0,
                  overflow: 'hidden',
                }}
              >
                ·
              </Link>
              {block.get('isEditing') ? (
                <BlockEditString id={block.get('id')} />
              ) : (
                <div
                  className="w-full cursor-text"
                  onClick={() => {
                    transact([
                      {
                        block: {
                          id: block.get('id'),
                          isEditing: true,
                          editingStartingCaretIndex: window.getSelection().focusOffset,
                        },
                      },
                    ])
                  }}
                >
                  <RoamMarkdown blockId={block.get('id')}>{block.get('string')}</RoamMarkdown>
                  &nbsp;
                </div>
              )}
            </div>
          </>
        )}
        {block.get('title') || block.get('open') ? (
          <BlockChildren
            key={block.get('id')}
            id={block.get('id')}
            withPlaceholder={withPlaceholder}
          />
        ) : null}
      </div>
      {withLinkedRefs ? <LinkedRefs id={block.get('id')} /> : null}
    </div>
  )
}

const BlockMemo = React.memo(Block)

export default BlockMemo
