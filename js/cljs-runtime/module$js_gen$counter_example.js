var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
const {HomebaseProvider:HomebaseProvider$$module$js_gen$counter_example, useTransact:useTransact$$module$js_gen$counter_example, useQuery:useQuery$$module$js_gen$counter_example} = window.localmost.react;
const config$$module$js_gen$counter_example = {schema:{":friend":{":db/valueType":":db.type/ref"}}, initialData:[{":db/id":1, ":count":0, ":friend":2}, {":db/id":2, ":name":"test relationship"}]};
const App$$module$js_gen$counter_example = () => module$node_modules$react$index.createElement(HomebaseProvider$$module$js_gen$counter_example, {config:config$$module$js_gen$counter_example}, module$node_modules$react$index.createElement(Counter$$module$js_gen$counter_example, null));
const Counter$$module$js_gen$counter_example = () => {
  const [entity] = useQuery$$module$js_gen$counter_example(1);
  const [transact] = useTransact$$module$js_gen$counter_example();
  window.e = entity;
  return module$node_modules$react$index.createElement("div", null, entity.get(":friend", ":name"), module$node_modules$react$index.createElement("br", null), "localmost React JS count: ", entity.get(":count"), module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement("button", {onClick:() => transact([[":db/add", 1, ":count", entity.get(":count") + 1]])}, "Increment")));
};
/** @const */ var module$js_gen$counter_example = {};
/** @const */ module$js_gen$counter_example.App = App$$module$js_gen$counter_example;
/** @const */ module$js_gen$counter_example.Counter = Counter$$module$js_gen$counter_example;

$CLJS.module$js_gen$counter_example=module$js_gen$counter_example;
//# sourceMappingURL=module$js_gen$counter_example.js.map
