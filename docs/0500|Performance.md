Homebase React tracks the attributes consumed in each component via the `entity.get` function and scopes those attributes to their respective `useEntity` or `useQuery` hook. Re-renders are only triggered when an attribute changes.

The default caching reduces unnecessary re-renders and virtual DOM thrashing a lot. That said, it is still possible to trigger more re-renders than you might want.

One top level `useQuery` + prop drilling the entities it returns will cause all children to re-render on any change to the parent or their siblings.

To fix this we recommend passing ids to children, not whole entities. Instead get the entity in the child with `useEntity(id)`. This creates a new scope for each child so they are not affected by changes in the state of the parent or sibling components.

```js
const TodoList = () => {
  const [todos] = useQuery({
    $find: 'todo',
    $where: { todo: { name: '$any' } }
  })
  return (todos.map(t => <Todo key={t.get('id')} id={t.get('id')} />))
}

// Good
const Todo = React.memo(({ id }) => {
  const [todo] = useEntity(id)
  // ...
})

// Bad
const Todo = React.memo(({ todo }) => {
  // ...
})
```