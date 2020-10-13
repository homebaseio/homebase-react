goog.provide('localmost.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
localmost.react.keywordize = (function localmost$react$keywordize(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),":")))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return s;
}
});
localmost.react.keywordize_coll = (function localmost$react$keywordize_coll(coll){
return clojure.walk.postwalk(localmost.react.keywordize,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coll));
});
localmost.react.transact_BANG_ = (function localmost$react$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,localmost.react.keywordize_coll(txs));
});
localmost.react.q = (function localmost$react$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23623 = arguments.length;
var i__4737__auto___23624 = (0);
while(true){
if((i__4737__auto___23624 < len__4736__auto___23623)){
args__4742__auto__.push((arguments[i__4737__auto___23624]));

var G__23625 = (i__4737__auto___23624 + (1));
i__4737__auto___23624 = G__23625;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return localmost.react.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(localmost.react.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,vars){
var query__$1 = localmost.react.keywordize_coll(query);
if(typeof query__$1 === 'number'){
var G__23617 = cljs.core.deref(conn);
var G__23618 = query__$1;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23617,G__23618) : datascript.core.entity.call(null,G__23617,G__23618));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query__$1,cljs.core.deref(conn),vars);

}
}));

(localmost.react.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(localmost.react.q.cljs$lang$applyTo = (function (seq23614){
var G__23615 = cljs.core.first(seq23614);
var seq23614__$1 = cljs.core.next(seq23614);
var G__23616 = cljs.core.first(seq23614__$1);
var seq23614__$2 = cljs.core.next(seq23614__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23615,G__23616,seq23614__$2);
}));

(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__23626__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
if(cljs.core.truth_(acc)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,localmost.react.keywordize_coll(key));
} else {
return null;
}
}),this$,keys);
};
var G__23626 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__23630__i = 0, G__23630__a = new Array(arguments.length -  0);
while (G__23630__i < G__23630__a.length) {G__23630__a[G__23630__i] = arguments[G__23630__i + 0]; ++G__23630__i;}
  keys = new cljs.core.IndexedSeq(G__23630__a,0,null);
} 
return G__23626__delegate.call(this,keys);};
G__23626.cljs$lang$maxFixedArity = 0;
G__23626.cljs$lang$applyTo = (function (arglist__23631){
var keys = cljs.core.seq(arglist__23631);
return G__23626__delegate(keys);
});
G__23626.cljs$core$IFn$_invoke$arity$variadic = G__23626__delegate;
return G__23626;
})()
);
if((typeof localmost !== 'undefined') && (typeof localmost.react !== 'undefined') && (typeof localmost.react.homebase_context !== 'undefined')){
} else {
localmost.react.homebase_context = module$node_modules$react$index.createContext();
}
localmost.react.HomebaseProvider = (function localmost$react$HomebaseProvider(props){
var config = props.config;
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(localmost.react.keywordize_coll(config.schema));
if(cljs.core.truth_(config.initialData)){
localmost.react.transact_BANG_(conn,config.initialData);
} else {
}

return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3(localmost.react.homebase_context.Provider,({"value": conn}),props.children);
});
goog.exportSymbol('localmost.react.HomebaseProvider', localmost.react.HomebaseProvider);
localmost.react.useQuery = (function localmost$react$useQuery(query){
var conn = module$node_modules$react$index.useContext(localmost.react.homebase_context);
var vec__23619 = module$node_modules$react$index.useState(localmost.react.q(query,conn));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var listener = (function (){
var G__23622 = localmost.react.q(query,conn);
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__23622) : setResult.call(null,G__23622));
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,listener);

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
});
goog.exportSymbol('localmost.react.useQuery', localmost.react.useQuery);
localmost.react.useTransact = (function localmost$react$useTransact(){
var conn = module$node_modules$react$index.useContext(localmost.react.homebase_context);
var transact = (function (txs){
return localmost.react.transact_BANG_(conn,txs);
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transact], null);
});
goog.exportSymbol('localmost.react.useTransact', localmost.react.useTransact);

//# sourceMappingURL=localmost.react.js.map
