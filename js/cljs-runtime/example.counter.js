goog.provide('example.counter');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"counter-example","counter-example",-478658770)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"counter-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof example !== 'undefined') && (typeof example.counter !== 'undefined') && (typeof example.counter.t_example$counter24059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.counter.t_example$counter24059 = (function (meta24060){
this.meta24060 = meta24060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.counter.t_example$counter24059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24061,meta24060__$1){
var self__ = this;
var _24061__$1 = this;
return (new example.counter.t_example$counter24059(meta24060__$1));
}));

(example.counter.t_example$counter24059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24061){
var self__ = this;
var _24061__$1 = this;
return self__.meta24060;
}));

(example.counter.t_example$counter24059.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.counter.t_example$counter24059.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__17465__auto__,devcard_opts__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__17466__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__17484__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$js_gen$counter_example.App], null);
if(cljs.core.fn_QMARK_(v__17484__auto__)){
return (function (data_atom__17485__auto__,owner__17486__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__17484__auto__,data_atom__17485__auto__,owner__17486__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__17484__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__17466__auto__))], 0))], 0));
}));

(example.counter.t_example$counter24059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24060","meta24060",230784059,null)], null);
}));

(example.counter.t_example$counter24059.cljs$lang$type = true);

(example.counter.t_example$counter24059.cljs$lang$ctorStr = "example.counter/t_example$counter24059");

(example.counter.t_example$counter24059.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"example.counter/t_example$counter24059");
}));

/**
 * Positional factory function for example.counter/t_example$counter24059.
 */
example.counter.__GT_t_example$counter24059 = (function example$counter$__GT_t_example$counter24059(meta24060){
return (new example.counter.t_example$counter24059(meta24060));
});

}

return (new example.counter.t_example$counter24059(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
example.counter.code_snippet = clojure.string.replace_first("import React from 'react'\nconst { HomebaseProvider, useTransact, useEntity } = window.homebase.react\n\nconst config = { \n  initialData: [{\n    counter: {\n      identity: 'counter', \n      count: 0\n    }\n  }]\n}\n\nexport const App = () => (\n  <HomebaseProvider config={config}>\n    <Counter/>\n  </HomebaseProvider>\n)\n\nconst Counter = () => {\n  const [counter] = useEntity({ identity: 'counter' })\n  const [transact] = useTransact()\n  return (\n    <div>\n      Count: {counter.get('count')}\n      <div>\n        <button onClick={() => transact([{\n          counter: {\n            id: counter.get('id'), \n            count: counter.get('count') + 1\n          }\n        }])}>\n          Increment\n        </button>\n      </div>\n    </div>\n  )\n}","const { HomebaseProvider, useTransact, useEntity } = window.homebase.react","import { HomebaseProvider, useTransact, useEntity } from 'homebase-react'");
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["```javascript\n",example.counter.code_snippet,"\n```"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));

//# sourceMappingURL=example.counter.js.map
