goog.provide('homebase.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
homebase.react.try_hook = (function homebase$react$try_hook(hook_name,f){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e24064){if((e24064 instanceof Error)){
var e = e24064;
throw Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e,"message")),"\n",(function (){var G__24066 = goog.object.get(e,"stack");
var G__24066__$1 = (((G__24066 == null))?null:cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(hook_name),".*\\n(.*)\\n?"].join('')),G__24066));
var G__24066__$2 = (((G__24066__$1 == null))?null:cljs.core.second(G__24066__$1));
if((G__24066__$2 == null)){
return null;
} else {
return clojure.string.trim(G__24066__$2);
}
})()].join(''));
} else {
throw e24064;

}
}});
if((typeof homebase !== 'undefined') && (typeof homebase.react !== 'undefined') && (typeof homebase.react.homebase_context !== 'undefined')){
} else {
homebase.react.homebase_context = module$node_modules$react$index.createContext();
goog.exportSymbol('homebase.react.homebase_context', homebase.react.homebase_context);
}
homebase.react.base_schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
homebase.react.HomebaseProvider = (function homebase$react$HomebaseProvider(props){
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((function (){var temp__5733__auto__ = goog.object.getValueByKeys(props,["config","schema"]);
if(cljs.core.truth_(temp__5733__auto__)){
var schema = temp__5733__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([homebase.js.js__GT_schema(schema),homebase.react.base_schema], 0));
} else {
return homebase.react.base_schema;
}
})());
var temp__5735__auto___24085 = goog.object.getValueByKeys(props,["config","initialData"]);
if(cljs.core.truth_(temp__5735__auto___24085)){
var tx_24086 = temp__5735__auto___24085;
homebase.js.transact_BANG_(conn,tx_24086);
} else {
}

return module$node_modules$react$index.createElement(goog.object.get(homebase.react.homebase_context,"Provider"),({"value": conn}),goog.object.get(props,"children"));
});
goog.exportSymbol('homebase.react.HomebaseProvider', homebase.react.HomebaseProvider);
homebase.react.useEntity = (function homebase$react$useEntity(lookup){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var run_lookup = (function (){
return homebase.react.try_hook("useEntity",(function (){
return homebase.js.entity(conn,lookup);
}));
});
var vec__24067 = module$node_modules$react$index.useState(run_lookup());
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24067,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24067,(1),null);
module$node_modules$react$index.useEffect((function homebase$react$useEntity_$_use_entity_effect(){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__24074 = run_lookup();
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__24074) : setResult.call(null,G__24074));
}));

return (function homebase$react$useEntity_$_use_entity_effect_$_unmount_use_entity_effect(){
return datascript.core.unlisten_BANG_(conn,key);
});
}),[lookup]);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
});
goog.exportSymbol('homebase.react.useEntity', homebase.react.useEntity);
homebase.react.useQuery = (function homebase$react$useQuery(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24087 = arguments.length;
var i__4737__auto___24088 = (0);
while(true){
if((i__4737__auto___24088 < len__4736__auto___24087)){
args__4742__auto__.push((arguments[i__4737__auto___24088]));

var G__24089 = (i__4737__auto___24088 + (1));
i__4737__auto___24088 = G__24089;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return homebase.react.useQuery.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});
goog.exportSymbol('homebase.react.useQuery', homebase.react.useQuery);

(homebase.react.useQuery.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var run_query = (function (){
return homebase.react.try_hook("useQuery",(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.js.q,query,conn,args);
}));
});
var vec__24077 = module$node_modules$react$index.useState(run_query());
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24077,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24077,(1),null);
module$node_modules$react$index.useEffect((function homebase$react$use_query_effect(){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__24080 = run_query();
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__24080) : setResult.call(null,G__24080));
}));

return (function homebase$react$use_query_effect_$_unmount_use_query_effect(){
return datascript.core.unlisten_BANG_(conn,key);
});
}),[query,args]);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
}));

(homebase.react.useQuery.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.react.useQuery.cljs$lang$applyTo = (function (seq24075){
var G__24076 = cljs.core.first(seq24075);
var seq24075__$1 = cljs.core.next(seq24075);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24076,seq24075__$1);
}));

homebase.react.useTransact = (function homebase$react$useTransact(){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var transact = (function homebase$react$useTransact_$_transact(txs){
return homebase.react.try_hook("useTransact",(function (){
return homebase.js.transact_BANG_(conn,txs);
}));
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transact], null);
});
goog.exportSymbol('homebase.react.useTransact', homebase.react.useTransact);

//# sourceMappingURL=homebase.react.js.map
