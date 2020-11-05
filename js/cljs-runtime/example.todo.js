goog.provide('example.todo');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.todo","example.todo",569501655),new cljs.core.Keyword(null,"todo-example","todo-example",-142942762)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"todo-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof example !== 'undefined') && (typeof example.todo !== 'undefined') && (typeof example.todo.t_example$todo24110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.todo.t_example$todo24110 = (function (meta24111){
this.meta24111 = meta24111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.todo.t_example$todo24110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24112,meta24111__$1){
var self__ = this;
var _24112__$1 = this;
return (new example.todo.t_example$todo24110(meta24111__$1));
}));

(example.todo.t_example$todo24110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24112){
var self__ = this;
var _24112__$1 = this;
return self__.meta24111;
}));

(example.todo.t_example$todo24110.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.todo.t_example$todo24110.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18012__auto__,devcard_opts__18013__auto__){
var self__ = this;
var this__18012__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__18013__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18031__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$js_gen$todo_example.App], null);
if(cljs.core.fn_QMARK_(v__18031__auto__)){
return (function (data_atom__18032__auto__,owner__18033__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__18031__auto__,data_atom__18032__auto__,owner__18033__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__18031__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__18013__auto__))], 0))], 0));
}));

(example.todo.t_example$todo24110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24111","meta24111",-1703773384,null)], null);
}));

(example.todo.t_example$todo24110.cljs$lang$type = true);

(example.todo.t_example$todo24110.cljs$lang$ctorStr = "example.todo/t_example$todo24110");

(example.todo.t_example$todo24110.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"example.todo/t_example$todo24110");
}));

/**
 * Positional factory function for example.todo/t_example$todo24110.
 */
example.todo.__GT_t_example$todo24110 = (function example$todo$__GT_t_example$todo24110(meta24111){
return (new example.todo.t_example$todo24110(meta24111));
});

}

return (new example.todo.t_example$todo24110(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
example.todo.code_snippet = clojure.string.replace_first("import React from 'react'\nconst { HomebaseProvider, useTransact, useQuery, useEntity } = window.homebase.react\n\nexport const App = () => {\n  return (\n    <HomebaseProvider config={config}>\n      <Todos />\n    </HomebaseProvider>\n  )\n}\n\nconst config = {\n  // Schema is optional. Add as much or as little as you want.\n  schema: {\n    user: { name: { type: 'string' } },\n    project: { name: { unique: 'identity' } },\n    todo: {\n      // refs are relationships\n      project: { type: 'ref' },\n      owner: { type: 'ref' }\n    }\n  },\n  initialData: [\n    {\n      todoFilter: {\n        // identity is a special attribute for user generated ids\n        // E.g. this is a setting that should be easy to lookup by name\n        identity: 'todoFilters',\n        showCompleted: true,\n        project: 0\n      }\n    }, {\n      user: {\n        // negative numbers can be used as temporary ids in a transaction\n        id: -1, \n        name: 'Stella' \n      }\n    }, {\n      user: {\n        id: -2,\n        name: 'Arpegius'\n      }\n    }, {\n      project: {\n        id: -3,\n        name: 'Make it'\n      }\n    }, {\n      project: {\n        id: -4,\n        name: 'Do it'\n      }\n    }, {\n      todo: {\n        name: 'Fix ship',\n        owner: -1,\n        project: -3,\n        isCompleted: true,\n        createdAt: new Date('2003/11/10')\n      }\n    }, {\n      todo: {\n        name: 'Go home',\n        owner: -2,\n        project: -4,\n        createdAt: new Date('2003/11/10')\n      }\n    }\n  ]\n}\n\nconst Todos = () => {\n  return (\n    <div>\n      <NewTodo />\n      <TodoFilters />\n      <TodoList />\n    </div>\n  )\n}\n\nconst NewTodo = () => {\n  const [transact] = useTransact()\n  return (\n    <form onSubmit={e => {\n      e.preventDefault()\n      transact([{\n        todo: {\n          name: e.target.elements['todo-name'].value,\n          createdAt: new Date\n        }\n      }])\n      e.target.reset()\n    }}>\n      <input \n        autoFocus\n        type=\"text\" \n        name=\"todo-name\" \n        placeholder=\"What needs to be done?\" \n        autoComplete=\"off\"\n        required\n      />\n      &nbsp;\n      <button type=\"submit\">Create Todo</button>\n    </form>\n  )\n}\n\nconst TodoFilters = () => {\n  const [filters] = useEntity({ identity: 'todoFilters' })\n  const [transact] = useTransact()\n  return (\n    <div>\n      <label htmlFor=\"show-completed\">Show Completed?</label>\n      <input \n        type=\"checkbox\" \n        id=\"show-completed\"\n        checked={filters.get('showCompleted')}\n        onChange={e => transact([{ todoFilter: { id: filters.get('id'), showCompleted: e.target.checked }}])}\n      />\n      &nbsp;\u00B7&nbsp;\n      <ProjectSelect\n        value={filters.get('project')}\n        onChange={project => transact([{ todoFilter: { id: filters.get('id'), project }}])}\n      />\n    </div>\n  )\n}\n\nconst ProjectSelect = ({ value, onChange }) => {\n  const [projects] = useQuery({\n    $find: 'project',\n    $where: { project: { name: '$any' } }\n  })\n  return (\n    <>\n      <label>\n        Project:\n      </label>\n      &nbsp;\n      <select \n        name=\"projects\" \n        value={value}\n        onChange={e => onChange && onChange(Number(e.target.value))}\n      >\n        <option value=\"0\"></option>\n        {projects.map(project => (\n          <option \n            key={project.get('id')} \n            value={project.get('id')}\n          >\n            {project.get('name')}\n          </option>\n        ))}\n      </select>\n    </>\n  )\n}\n\nconst TodoList = () => {\n  const [filters] = useEntity({ identity: 'todoFilters' })\n  const [todos] = useQuery({\n    $find: 'todo',\n    $where: { todo: { name: '$any' } }\n  })\n  return (\n    <div>\n      {todos\n      .filter(todo => {\n        if (!filters.get('showCompleted') && todo.get('isCompleted')) return false\n        if (filters.get('project') && todo.get('project', 'id') !== filters.get('project')) return false\n        return true\n      })\n      .sort((a, b) => a.get('createdAt') > b.get('createdAt') ? -1 : 1)\n      .map(todo => <Todo key={todo.get('id')} todo={todo}/>)}\n    </div>\n  )\n}\n\nconst Todo = ({ todo }) => (\n  <div>\n    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingTop: 20}}>\n      <TodoCheck todo={todo} />\n      <TodoName todo={todo} />\n    </div>\n    <div>\n      <TodoProject todo={todo} />\n      &nbsp;\u00B7&nbsp;\n      <TodoOwner todo={todo} />\n      &nbsp;\u00B7&nbsp;\n      <TodoDelete todo={todo} />\n    </div>\n    <small style={{ color: 'grey' }}>\n      {todo.get('createdAt').toLocaleString()}\n    </small>\n  </div>\n)\n\nconst TodoCheck = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <input \n      type=\"checkbox\"\n      style={{ width: 20, height: 20, cursor: 'pointer' }}\n      checked={!!todo.get('isCompleted')}\n      onChange={e => transact([{ \n        todo: {\n          id: todo.get('id'), \n          isCompleted: e.target.checked\n        }\n      }])}\n    />\n  )\n}\n\nconst TodoName = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <input \n      style={{  \n        border: 'none',  fontSize: 20, marginTop: -2, cursor: 'pointer',\n        ...todo.get('isCompleted') && { textDecoration: 'line-through '}\n      }}\n      value={todo.get('name')}\n      onChange={e => transact([{ todo: { id: todo.get('id'), name: e.target.value }}])}\n    />\n  )\n}\n\nconst TodoProject = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <ProjectSelect\n      value={todo.get('project', 'id') || ''}\n      onChange={projectId => transact([{ todo: { id: todo.get('id'), 'project': projectId || null }}])}\n    />    \n  )\n}\n\nconst TodoOwner = ({ todo }) => {\n  const [transact] = useTransact()\n  const [users] = useQuery({\n    $find: 'user',\n    $where: { user: { name: '$any' } }\n  })\n  return (\n    <>\n      <label>\n        Owner:\n      </label>\n      &nbsp;\n      <select \n        name=\"users\" \n        value={todo.get('owner', 'id') || ''}\n        onChange={e => transact([{ todo: { id: todo.get('id'), owner: Number(e.target.value) || null }}])}\n      >\n        <option value=\"\"></option>\n        {users.map(user => (\n          <option \n            key={user.get('id')} \n            value={user.get('id')}\n          >\n            {user.get('name')}\n          </option>\n        ))}\n      </select>\n    </>\n  )\n}\n\nconst TodoDelete = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <button onClick={() => transact([['retractEntity', todo.get('id')]])}>\n      Delete\n    </button>\n  )\n}","const { HomebaseProvider, useTransact, useQuery, useEntity } = window.homebase.react","import { HomebaseProvider, useTransact, useQuery, useEntity } from 'homebase-react'");
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.todo","example.todo",569501655),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[\uD83D\uDD17GitHub](https://github.com/homebaseio/homebase-react/blob/master/js/todo-example.jsx)","For an annotated walkthrough of this code [check out the tutorial \uD83D\uDCD6](https://www.notion.so/Homebase-Alpha-Docs-0f0e22f3adcd4e9d87a13440ab0c7a0b).",["```javascript\n",example.todo.code_snippet,"\n```"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));

//# sourceMappingURL=example.todo.js.map
