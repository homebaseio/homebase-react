goog.provide('example.todo');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.todo","example.todo",569501655),new cljs.core.Keyword(null,"react-js-homebase-todo","react-js-homebase-todo",1496002643)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"react-js-homebase-todo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof example !== 'undefined') && (typeof example.todo !== 'undefined') && (typeof example.todo.t_example$todo23668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.todo.t_example$todo23668 = (function (meta23669){
this.meta23669 = meta23669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.todo.t_example$todo23668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23670,meta23669__$1){
var self__ = this;
var _23670__$1 = this;
return (new example.todo.t_example$todo23668(meta23669__$1));
}));

(example.todo.t_example$todo23668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23670){
var self__ = this;
var _23670__$1 = this;
return self__.meta23669;
}));

(example.todo.t_example$todo23668.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.todo.t_example$todo23668.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__17465__auto__,devcard_opts__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__17466__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__17484__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$js_gen$todo_example.App], null);
if(cljs.core.fn_QMARK_(v__17484__auto__)){
return (function (data_atom__17485__auto__,owner__17486__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__17484__auto__,data_atom__17485__auto__,owner__17486__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__17484__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__17466__auto__))], 0))], 0));
}));

(example.todo.t_example$todo23668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23669","meta23669",1397858749,null)], null);
}));

(example.todo.t_example$todo23668.cljs$lang$type = true);

(example.todo.t_example$todo23668.cljs$lang$ctorStr = "example.todo/t_example$todo23668");

(example.todo.t_example$todo23668.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"example.todo/t_example$todo23668");
}));

/**
 * Positional factory function for example.todo/t_example$todo23668.
 */
example.todo.__GT_t_example$todo23668 = (function example$todo$__GT_t_example$todo23668(meta23669){
return (new example.todo.t_example$todo23668(meta23669));
});

}

return (new example.todo.t_example$todo23668(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
example.todo.code_snippet = "import React from 'react'\n// import { HomebaseProvider, useTransact, useQuery } from 'homebase-react'\nconst { HomebaseProvider, useTransact, useQuery } = window.homebase.react\n\nconst config = {\n  schema: {\n    ':db/ident': {\n      ':db/unique': ':db.unique/identity'\n    },\n    ':todo/project': {\n      ':db/valueType': ':db.type/ref',\n      ':db/cardinality': ':db.cardinality/one'\n    },\n    ':todo/owner': {\n      ':db/valueType': ':db.type/ref',\n      ':db/cardinality': ':db.cardinality/one'\n    },\n  },\n  initialData: [{\n    ':db/ident': ':settings/filters',\n    ':filter/show-completed?': true,\n    ':filter/project': 0,\n  }, {\n    ':db/id': -1,\n    ':user/name': 'Stella'\n  }, {\n    ':db/id': -2,\n    ':user/name': 'Arpegius'\n  }, {\n    ':db/id': -3,\n    ':project/name': 'Make it',\n  }, {\n    ':db/id': -4,\n    ':project/name': 'Do it'\n  }, {\n    ':todo/name': 'Fix ship',\n    ':todo/owner': -1,\n    ':todo/project': -3,\n    ':todo/completed?': true,\n    ':todo/created-at': new Date('2003/11/10')\n  }, {\n    ':todo/name': 'Go home',\n    ':todo/owner': -2,\n    ':todo/project': -4,\n    ':todo/created-at': new Date('2003/11/9')\n  }]\n}\n\nexport const App = () => {\n  return (\n    <HomebaseProvider config={config}>\n      <Todos />\n    </HomebaseProvider>\n  )\n}\n\nconst Todos = () => {\n  return (\n    <div>\n      <TodoInput />\n      <Filters />\n      <TodoList />\n    </div>\n  )\n}\n\nconst TodoInput = () => {\n  const [transact] = useTransact()\n  return (\n    <form onSubmit={e => {\n      e.preventDefault()\n      transact([{\n        ':todo/name': e.target.elements[':todo/name'].value,\n        ':todo/created-at': new Date\n      }])\n      e.target.reset()\n    }}>\n      <input \n        autoFocus\n        type=\"text\" \n        name=\":todo/name\" \n        placeholder=\"What needs to be done?\" \n        autoComplete=\"off\"\n        required\n      />\n      &nbsp;\n      <button type=\"submit\">Create Todo</button>\n    </form>\n  )\n}\n\nconst Filters = () => {\n  const [filters] = useQuery([':db/ident', ':settings/filters'])\n  const [transact] = useTransact()\n  return (\n    <div>\n      <label htmlFor=\":filter/show-completed?\">Show Completed?</label>\n      <input \n        type=\"checkbox\" \n        id=\":filter/show-completed?\"\n        checked={filters.get(':filter/show-completed?')}\n        onChange={e => transact([{ ':db/id': filters.get(':db/id'), ':filter/show-completed?': e.target.checked }])}\n      />\n      &nbsp;\u00B7&nbsp;\n      <ProjectSelect\n        value={filters.get(':filter/project')}\n        onChange={projectId => transact([{\n          ':db/id': filters.get(':db/id'),\n          ':filter/project': projectId,\n        }])}\n      />\n    </div>\n  )\n}\n\nconst ProjectSelect = ({ value, onChange }) => {\n  const [projects] = useQuery(\n    `[:find ?project\n      :where [?project :project/name]]`\n  )\n  const id = 'project-' + Math.random()\n  return (\n    <>\n      <label htmlFor={id}>\n        Project:\n      </label>\n      &nbsp;\n      <select \n        name=\"projects\" \n        id={id}\n        value={value}\n        onChange={e => onChange && onChange(Number(e.target.value))}\n      >\n        <option value=\"0\"></option>\n        {projects.map(project => (\n          <option \n            key={project.get(':db/id')} \n            value={project.get(':db/id')}\n          >\n            {project.get(':project/name')}\n          </option>\n        ))}\n      </select>\n    </>\n  )\n}\n\nconst TodoList = () => {\n  const [todos] = useQuery(\n    `[:find ?todo\n      :where \n      [?todo :todo/name]\n      [?filter :db/ident :settings/filters]\n      (or [?filter :filter/show-completed? true]\n        (not [?todo :todo/completed? true]))\n      [?filter :filter/project ?project]\n      (or [(= 0 ?project)]\n          [?todo :todo/project ?project])]`\n  )\n  return (\n    <div>\n      {todos\n      .sort((a, b) => a.get(':todo/created-at') > b.get(':todo/created-at') ? -1 : 1)\n      .map(todo => <Todo key={todo.get(':db/id')} todo={todo}/>)}\n    </div>\n  )\n}\n\nconst Todo = ({ todo }) => (\n  <div>\n    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingTop: 20}}>\n      <TodoCheck todo={todo} />\n      <TodoName todo={todo} />\n    </div>\n    <div>\n      <TodoProject todo={todo} />\n      &nbsp;\u00B7&nbsp;\n      <TodoOwner todo={todo} />\n      &nbsp;\u00B7&nbsp;\n      <TodoDelete todo={todo} />\n    </div>\n    <small style={{ color: 'grey' }}>\n      {todo.get(':todo/created-at').toLocaleString()}\n    </small>\n  </div>\n)\n\nconst TodoCheck = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <input \n      type=\"checkbox\"\n      style={{ width: 20, height: 20, cursor: 'pointer' }}\n      checked={!!todo.get(':todo/completed?')}\n      onChange={e => transact([{ \n        ':db/id': todo.get(':db/id'), \n        ':todo/completed?': e.target.checked\n      }])}\n    />\n  )\n}\n\nconst TodoName = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <input \n      style={{  \n        border: 'none',  fontSize: 20, marginTop: -2, cursor: 'pointer',\n        ...todo.get(':todo/completed?') && { textDecoration: 'line-through '}\n      }}\n      value={todo.get(':todo/name')}\n      onChange={e => transact([[':db/add', todo.get(':db/id'), ':todo/name', e.target.value]])}\n    />\n  )\n}\n\nconst TodoProject = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <ProjectSelect\n      value={todo.get(':todo/project', ':db/id') || ''}\n      onChange={projectId => transact([[projectId ? ':db/add' : ':db/retract', todo.get(':db/id'), ':todo/project', projectId || null]])}\n    />    \n  )\n}\n\nconst TodoOwner = ({ todo }) => {\n  const [transact] = useTransact()\n  const [users] = useQuery(\n    `[:find ?user\n      :where [?user :user/name]]`\n  )\n  return (\n    <>\n      <label htmlFor={'todo-owner-' + todo.get(':db/id')}>\n        Owner:\n      </label>\n      &nbsp;\n      <select \n        name=\"users\" \n        id={'todo-owner-' + todo.get(':db/id')}\n        value={todo.get(':todo/owner', ':db/id') || ''}\n        onChange={e => transact([[Number(e.target.value) ? ':db/add' : ':db/retract', todo.get(':db/id'), ':todo/owner', Number(e.target.value) || null]])}\n      >\n        <option value=\"\"></option>\n        {users.map(user => (\n          <option \n            key={user.get(':db/id')} \n            value={user.get(':db/id')}\n          >\n            {user.get(':user/name')}\n          </option>\n        ))}\n      </select>\n    </>\n  )\n}\n\nconst TodoDelete = ({ todo }) => {\n  const [transact] = useTransact()\n  return (\n    <button onClick={() => transact([[':db.fn/retractEntity', todo.get(':db/id')]])}>\n      Delete\n    </button>\n  )\n}";
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.todo","example.todo",569501655),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["```javascript\n",example.todo.code_snippet,"\n```"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));

//# sourceMappingURL=example.todo.js.map
