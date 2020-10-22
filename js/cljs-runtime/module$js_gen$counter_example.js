var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
const {HomebaseProvider:HomebaseProvider$$module$js_gen$counter_example, useTransact:useTransact$$module$js_gen$counter_example, useEntity:useEntity$$module$js_gen$counter_example} = window.homebase.react;
const counterId$$module$js_gen$counter_example = 1;
const config$$module$js_gen$counter_example = {initialData:[{":db/id":counterId$$module$js_gen$counter_example, ":count":0}]};
const App$$module$js_gen$counter_example = () => module$node_modules$react$index.createElement(HomebaseProvider$$module$js_gen$counter_example, {config:config$$module$js_gen$counter_example}, module$node_modules$react$index.createElement(Counter$$module$js_gen$counter_example, null));
const Counter$$module$js_gen$counter_example = () => {
  const [counter] = useEntity$$module$js_gen$counter_example(counterId$$module$js_gen$counter_example);
  const [transact] = useTransact$$module$js_gen$counter_example();
  return module$node_modules$react$index.createElement("div", null, "Count: ", counter.get(":count"), module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement("button", {onClick:() => transact([{":db/id":counterId$$module$js_gen$counter_example, ":count":counter.get(":count") + 1}])}, "Increment")));
};
/** @const */ var module$js_gen$counter_example = {};
/** @const */ module$js_gen$counter_example.App = App$$module$js_gen$counter_example;

$CLJS.module$js_gen$counter_example=module$js_gen$counter_example;
//# sourceMappingURL=module$js_gen$counter_example.js.map
