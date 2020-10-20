var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
const {HomebaseProvider:HomebaseProvider$$module$js_gen$todo_example, useTransact:useTransact$$module$js_gen$todo_example, useQuery:useQuery$$module$js_gen$todo_example} = window.homebase.react;
const config$$module$js_gen$todo_example = {schema:{":db/ident":{":db/unique":":db.unique/identity"}, ":todo/project":{":db/valueType":":db.type/ref", ":db/cardinality":":db.cardinality/one"}, ":todo/owner":{":db/valueType":":db.type/ref", ":db/cardinality":":db.cardinality/one"}}, initialData:[{":db/ident":":settings/filters", ":filter/show-completed?":true, ":filter/project":0}, {":db/id":-1, ":user/name":"Stella"}, {":db/id":-2, ":user/name":"Arpegius"}, {":db/id":-3, ":project/name":"Make it"}, 
{":db/id":-4, ":project/name":"Do it"}, {":todo/name":"Fix ship", ":todo/owner":-1, ":todo/project":-3, ":todo/completed?":true, ":todo/created-at":new Date("2003/11/10")}, {":todo/name":"Go home", ":todo/owner":-2, ":todo/project":-4, ":todo/created-at":new Date("2003/11/9")}]};
const App$$module$js_gen$todo_example = () => module$node_modules$react$index.createElement(HomebaseProvider$$module$js_gen$todo_example, {config:config$$module$js_gen$todo_example}, module$node_modules$react$index.createElement(Todos$$module$js_gen$todo_example, null));
const Todos$$module$js_gen$todo_example = () => module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement(TodoInput$$module$js_gen$todo_example, null), module$node_modules$react$index.createElement(Filters$$module$js_gen$todo_example, null), module$node_modules$react$index.createElement(TodoList$$module$js_gen$todo_example, null));
const TodoInput$$module$js_gen$todo_example = () => {
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("form", {onSubmit:e => {
    e.preventDefault();
    transact([{":todo/name":e.target.elements[":todo/name"].value, ":todo/created-at":new Date}]);
    e.target.reset();
  }}, module$node_modules$react$index.createElement("input", {autoFocus:true, type:"text", name:":todo/name", placeholder:"What needs to be done?", autoComplete:"off", required:true}), " ", module$node_modules$react$index.createElement("button", {type:"submit"}, "Create Todo"));
};
const Filters$$module$js_gen$todo_example = () => {
  const [filters] = useQuery$$module$js_gen$todo_example([":db/ident", ":settings/filters"]);
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement("label", {htmlFor:":filter/show-completed?"}, "Show Completed?"), module$node_modules$react$index.createElement("input", {type:"checkbox", id:":filter/show-completed?", checked:filters.get(":filter/show-completed?"), onChange:e => transact([{":db/id":filters.get(":db/id"), ":filter/show-completed?":e.target.checked}])}), " · ", module$node_modules$react$index.createElement(ProjectSelect$$module$js_gen$todo_example, 
  {value:filters.get(":filter/project"), onChange:projectId => transact([{":db/id":filters.get(":db/id"), ":filter/project":projectId}])}));
};
const ProjectSelect$$module$js_gen$todo_example = $jscomp$destructuring$var0 => {
  var {value, onChange} = $jscomp$destructuring$var0;
  const [projects] = useQuery$$module$js_gen$todo_example(`[:find ?project
      :where [?project :project/name]]`);
  const id = "project-" + Math.random();
  return module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment, null, module$node_modules$react$index.createElement("label", {htmlFor:id}, "Project:"), " ", module$node_modules$react$index.createElement("select", {name:"projects", id, value, onChange:e => onChange && onChange(Number(e.target.value))}, module$node_modules$react$index.createElement("option", {value:"0"}), projects.map(project => module$node_modules$react$index.createElement("option", {key:project.get(":db/id"), 
  value:project.get(":db/id")}, project.get(":project/name")))));
};
const TodoList$$module$js_gen$todo_example = () => {
  const [todos] = useQuery$$module$js_gen$todo_example(`[:find ?todo
      :where 
      [?todo :todo/name]
      [?filter :db/ident :settings/filters]
      (or [?filter :filter/show-completed? true]
        (not [?todo :todo/completed? true]))
      [?filter :filter/project ?project]
      (or [(>= 0 ?project)]
          [?todo :todo/project ?project])]`);
  return module$node_modules$react$index.createElement("div", null, todos.sort((a, b) => a.get(":todo/created-at") > b.get(":todo/created-at") ? -1 : 1).map(todo => module$node_modules$react$index.createElement(Todo$$module$js_gen$todo_example, {key:todo.get(":db/id"), todo})));
};
const Todo$$module$js_gen$todo_example = $jscomp$destructuring$var1 => {
  var {todo} = $jscomp$destructuring$var1;
  return module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement("div", {style:{display:"flex", flexDirection:"row", alignItems:"flex-end", paddingTop:20}}, module$node_modules$react$index.createElement(TodoCheck$$module$js_gen$todo_example, {todo}), module$node_modules$react$index.createElement(TodoName$$module$js_gen$todo_example, {todo})), module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement(TodoProject$$module$js_gen$todo_example, 
  {todo}), " · ", module$node_modules$react$index.createElement(TodoOwner$$module$js_gen$todo_example, {todo}), " · ", module$node_modules$react$index.createElement(TodoDelete$$module$js_gen$todo_example, {todo})), module$node_modules$react$index.createElement("small", {style:{color:"grey"}}, todo.get(":todo/created-at").toLocaleString()));
};
const TodoCheck$$module$js_gen$todo_example = $jscomp$destructuring$var2 => {
  var {todo} = $jscomp$destructuring$var2;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("input", {type:"checkbox", style:{width:20, height:20, cursor:"pointer"}, checked:!!todo.get(":todo/completed?"), onChange:e => transact([{":db/id":todo.get(":db/id"), ":todo/completed?":e.target.checked}])});
};
const TodoName$$module$js_gen$todo_example = $jscomp$destructuring$var3 => {
  var {todo} = $jscomp$destructuring$var3;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("input", {style:Object.assign({}, {border:"none", fontSize:20, marginTop:-2, cursor:"pointer"}, todo.get(":todo/completed?") && {textDecoration:"line-through "}), value:todo.get(":todo/name"), onChange:e => transact([[":db/add", todo.get(":db/id"), ":todo/name", e.target.value]])});
};
const TodoProject$$module$js_gen$todo_example = $jscomp$destructuring$var4 => {
  var {todo} = $jscomp$destructuring$var4;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement(ProjectSelect$$module$js_gen$todo_example, {value:todo.get(":todo/project", ":db/id") || "", onChange:projectId => transact([[projectId ? ":db/add" : ":db/retract", todo.get(":db/id"), ":todo/project", projectId || null]])});
};
const TodoOwner$$module$js_gen$todo_example = $jscomp$destructuring$var5 => {
  var {todo} = $jscomp$destructuring$var5;
  const [transact] = useTransact$$module$js_gen$todo_example();
  const [users] = useQuery$$module$js_gen$todo_example(`[:find ?user
      :where [?user :user/name]]`);
  return module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment, null, module$node_modules$react$index.createElement("label", {htmlFor:"todo-owner-" + todo.get(":db/id")}, "Owner:"), " ", module$node_modules$react$index.createElement("select", {name:"users", id:"todo-owner-" + todo.get(":db/id"), value:todo.get(":todo/owner", ":db/id") || "", onChange:e => transact([[Number(e.target.value) ? ":db/add" : ":db/retract", todo.get(":db/id"), ":todo/owner", Number(e.target.value) || 
  null]])}, module$node_modules$react$index.createElement("option", {value:""}), users.map(user => module$node_modules$react$index.createElement("option", {key:user.get(":db/id"), value:user.get(":db/id")}, user.get(":user/name")))));
};
const TodoDelete$$module$js_gen$todo_example = $jscomp$destructuring$var6 => {
  var {todo} = $jscomp$destructuring$var6;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("button", {onClick:() => transact([[":db.fn/retractEntity", todo.get(":db/id")]])}, "Delete");
};
/** @const */ var module$js_gen$todo_example = {};
/** @const */ module$js_gen$todo_example.App = App$$module$js_gen$todo_example;

$CLJS.module$js_gen$todo_example=module$js_gen$todo_example;
//# sourceMappingURL=module$js_gen$todo_example.js.map
