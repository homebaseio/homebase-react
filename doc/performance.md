# Performance

Homebase React tracks the attributes consumed in each component via `homebase.reagent/Entity` and scopes those attributes to their respective `hbr/entity` reagent atom. Re-renders are only triggered when an attribute changes.

The default caching reduces unnecessary re-renders and virtual DOM thrashing a lot. That said, it is still possible to trigger more re-renders than you might want.

## Smart Prop Drilling

One top level `hbr/entity` + prop drilling the entity it returns will cause all children to re-render on any change to the parent or their siblings.

To fix this we recommend passing ids to children, not whole entities. Instead get the entity in the child with `(hbr/entity db-conn id)`. This creates a new scope for each child so they are not affected by changes in the state of the parent or sibling components.

### Good Prop Drilling

```clojure
(defn friend [id]
  (let [[user] (hbr/entity db-conn id)]
    (fn []
      [:div (:user/name @user)])))

(defn friends [user-id]
  (let [[user] (hbr/entity db-conn user-id)]
    (fn [user-id]
      [:div
       (for [u (:user/friends @user)]
         [friend (:db/id u)])])))
```

### Bad Prop Drilling

```clojure
(defn friend [user]
  [:div (:user/name @user)])

(defn friends [user-id]
  (let [[user] (hbr/entity db-conn user-id)]
    (fn [user-id]
      [:div
       (for [u (:user/friends @user)]
         [friend u])])))
```

## Query performance

`hbr/q` queries rerun on every transaction. If the result is different we re-render. We're looking into differential datalog and incremental view maintenance, but for typical datasets of tens of thousands of datoms the current performance is great. DOM updates tend to be much more costly, so rerunning the queries still performs well as long as we don't repaint the DOM.

If you are seeing UI slowdowns consider virtualizing large lists and only rendering DOM nodes that fit on the screen.