var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
const {HomebaseProvider:HomebaseProvider$$module$js_gen$todo_example, useTransact:useTransact$$module$js_gen$todo_example, useQuery:useQuery$$module$js_gen$todo_example, useEntity:useEntity$$module$js_gen$todo_example} = window.homebase.react;
const App$$module$js_gen$todo_example = () => module$node_modules$react$index.createElement(HomebaseProvider$$module$js_gen$todo_example, {config:config$$module$js_gen$todo_example}, module$node_modules$react$index.createElement(Todos$$module$js_gen$todo_example, null));
const config$$module$js_gen$todo_example = {schema:{user:{name:{type:"string"}}, project:{name:{unique:"identity"}}, todo:{project:{type:"ref"}, owner:{type:"ref"}}}, initialData:[{todoFilter:{identity:"todoFilters", showCompleted:true, project:0}}, {user:{id:-1, name:"Stella"}}, {user:{id:-2, name:"Arpegius"}}, {project:{id:-3, name:"Make it"}}, {project:{id:-4, name:"Do it"}}, {todo:{name:"Fix ship", owner:-1, project:-3, isCompleted:true, createdAt:new Date("2003/11/10")}}, {todo:{name:"Go home", 
owner:-2, project:-4, createdAt:new Date("2003/11/10")}}]};
const Todos$$module$js_gen$todo_example = () => module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement(NewTodo$$module$js_gen$todo_example, null), module$node_modules$react$index.createElement(TodoFilters$$module$js_gen$todo_example, null), module$node_modules$react$index.createElement(TodoList$$module$js_gen$todo_example, null));
const NewTodo$$module$js_gen$todo_example = () => {
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("form", {onSubmit:e => {
    e.preventDefault();
    transact([{todo:{name:e.target.elements["todo/name"].value, createdAt:new Date}}]);
    e.target.reset();
  }}, module$node_modules$react$index.createElement("input", {autoFocus:true, type:"text", name:"todo/name", placeholder:"What needs to be done?", autoComplete:"off", required:true}), " ", module$node_modules$react$index.createElement("button", {type:"submit"}, "Create Todo"));
};
const TodoFilters$$module$js_gen$todo_example = () => {
  const [filters] = useEntity$$module$js_gen$todo_example({identity:"todoFilters"});
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement("label", {htmlFor:"show-completed"}, "Show Completed?"), module$node_modules$react$index.createElement("input", {type:"checkbox", id:"show-completed", checked:filters.get("showCompleted"), onChange:e => transact([{todoFilter:{id:filters.get("id"), showCompleted:e.target.checked}}])}), " · ", module$node_modules$react$index.createElement(ProjectSelect$$module$js_gen$todo_example, {value:filters.get("project"), 
  onChange:project => transact([{todoFilter:{id:filters.get("id"), project}}])}));
};
const ProjectSelect$$module$js_gen$todo_example = $jscomp$destructuring$var0 => {
  var {value, onChange} = $jscomp$destructuring$var0;
  const [projects] = useQuery$$module$js_gen$todo_example({$find:"project", $where:{project:{name:"$any"}}});
  return module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment, null, module$node_modules$react$index.createElement("label", null, "Project:"), " ", module$node_modules$react$index.createElement("select", {name:"projects", value, onChange:e => onChange && onChange(Number(e.target.value))}, module$node_modules$react$index.createElement("option", {value:"0"}), projects.map(project => module$node_modules$react$index.createElement("option", {key:project.get("id"), value:project.get("id")}, 
  project.get("name")))));
};
const TodoList$$module$js_gen$todo_example = () => {
  const [filters] = useEntity$$module$js_gen$todo_example({identity:"todoFilters"});
  const [todos] = useQuery$$module$js_gen$todo_example({$find:"todo", $where:{todo:{name:"$any"}}});
  return module$node_modules$react$index.createElement("div", null, todos.filter(todo => {
    if (!filters.get("showCompleted") && todo.get("isCompleted")) {
      return false;
    }
    if (filters.get("project") && todo.get("project", "id") !== filters.get("project")) {
      return false;
    }
    return true;
  }).sort((a, b) => a.get("createdAt") > b.get("createdAt") ? -1 : 1).map(todo => module$node_modules$react$index.createElement(Todo$$module$js_gen$todo_example, {key:todo.get("id"), todo})));
};
const Todo$$module$js_gen$todo_example = $jscomp$destructuring$var1 => {
  var {todo} = $jscomp$destructuring$var1;
  return module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement("div", {style:{display:"flex", flexDirection:"row", alignItems:"flex-end", paddingTop:20}}, module$node_modules$react$index.createElement(TodoCheck$$module$js_gen$todo_example, {todo}), module$node_modules$react$index.createElement(TodoName$$module$js_gen$todo_example, {todo})), module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement(TodoProject$$module$js_gen$todo_example, 
  {todo}), " · ", module$node_modules$react$index.createElement(TodoOwner$$module$js_gen$todo_example, {todo}), " · ", module$node_modules$react$index.createElement(TodoDelete$$module$js_gen$todo_example, {todo})), module$node_modules$react$index.createElement("small", {style:{color:"grey"}}, todo.get("createdAt").toLocaleString()));
};
const TodoCheck$$module$js_gen$todo_example = $jscomp$destructuring$var2 => {
  var {todo} = $jscomp$destructuring$var2;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("input", {type:"checkbox", style:{width:20, height:20, cursor:"pointer"}, checked:!!todo.get("isCompleted"), onChange:e => transact([{todo:{id:todo.get("id"), isCompleted:e.target.checked}}])});
};
const TodoName$$module$js_gen$todo_example = $jscomp$destructuring$var3 => {
  var {todo} = $jscomp$destructuring$var3;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("input", {style:Object.assign({}, {border:"none", fontSize:20, marginTop:-2, cursor:"pointer"}, todo.get("isCompleted") && {textDecoration:"line-through "}), value:todo.get("name"), onChange:e => transact([{todo:{id:todo.get("id"), name:e.target.value}}])});
};
const TodoProject$$module$js_gen$todo_example = $jscomp$destructuring$var4 => {
  var {todo} = $jscomp$destructuring$var4;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement(ProjectSelect$$module$js_gen$todo_example, {value:todo.get("project", "id") || "", onChange:projectId => transact([{todo:{id:todo.get("id"), "project":projectId || null}}])});
};
const TodoOwner$$module$js_gen$todo_example = $jscomp$destructuring$var5 => {
  var {todo} = $jscomp$destructuring$var5;
  const [transact] = useTransact$$module$js_gen$todo_example();
  const [users] = useQuery$$module$js_gen$todo_example({$find:"user", $where:{user:{name:"$any"}}});
  return module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment, null, module$node_modules$react$index.createElement("label", null, "Owner:"), " ", module$node_modules$react$index.createElement("select", {name:"users", value:todo.get("owner", "id") || "", onChange:e => transact([{todo:{id:todo.get("id"), owner:Number(e.target.value) || null}}])}, module$node_modules$react$index.createElement("option", {value:""}), users.map(user => module$node_modules$react$index.createElement("option", 
  {key:user.get("id"), value:user.get("id")}, user.get("name")))));
};
const TodoDelete$$module$js_gen$todo_example = $jscomp$destructuring$var6 => {
  var {todo} = $jscomp$destructuring$var6;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("button", {onClick:() => transact([["retractEntity", todo.get("id")]])}, "Delete");
};
/** @const */ var module$js_gen$todo_example = {};
/** @const */ module$js_gen$todo_example.App = App$$module$js_gen$todo_example;

$CLJS.module$js_gen$todo_example=module$js_gen$todo_example;
//# sourceMappingURL=module$js_gen$todo_example.js.map
