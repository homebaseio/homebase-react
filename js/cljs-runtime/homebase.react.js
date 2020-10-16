goog.provide('homebase.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
homebase.react.keywordize = (function homebase$react$keywordize(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),":")))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return s;
}
});
homebase.react.keywordize_coll = (function homebase$react$keywordize_coll(coll){
return clojure.walk.postwalk(homebase.react.keywordize,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coll));
});
homebase.react.transact_BANG_ = (function homebase$react$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,homebase.react.keywordize_coll(txs));
});
homebase.react.q = (function homebase$react$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23625 = arguments.length;
var i__4737__auto___23626 = (0);
while(true){
if((i__4737__auto___23626 < len__4736__auto___23625)){
args__4742__auto__.push((arguments[i__4737__auto___23626]));

var G__23627 = (i__4737__auto___23626 + (1));
i__4737__auto___23626 = G__23627;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,vars){
if(typeof query === 'number'){
var G__23610 = cljs.core.deref(conn);
var G__23611 = homebase.react.keywordize_coll(query);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23610,G__23611) : datascript.core.entity.call(null,G__23610,G__23611));
} else {
if(typeof query === 'string'){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23613){
var vec__23614 = p__23613;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23614,(0),null);
var G__23617 = cljs.core.deref(conn);
var G__23618 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23617,G__23618) : datascript.core.entity.call(null,G__23617,G__23618));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),cljs.core.deref(conn),vars)));
} else {
if(cljs.core.array_QMARK_(query)){
var G__23619 = cljs.core.deref(conn);
var G__23620 = homebase.react.keywordize_coll(query);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23619,G__23620) : datascript.core.entity.call(null,G__23619,G__23620));
} else {
return null;

}
}
}
}));

(homebase.react.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q.cljs$lang$applyTo = (function (seq23606){
var G__23607 = cljs.core.first(seq23606);
var seq23606__$1 = cljs.core.next(seq23606);
var G__23608 = cljs.core.first(seq23606__$1);
var seq23606__$2 = cljs.core.next(seq23606__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23607,G__23608,seq23606__$2);
}));

(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__23628__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
if(cljs.core.set_QMARK_(acc)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(acc),homebase.react.keywordize_coll(key));
} else {
if(cljs.core.truth_(acc)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,homebase.react.keywordize_coll(key));
} else {
return null;

}
}
}),this$,keys);
};
var G__23628 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__23629__i = 0, G__23629__a = new Array(arguments.length -  0);
while (G__23629__i < G__23629__a.length) {G__23629__a[G__23629__i] = arguments[G__23629__i + 0]; ++G__23629__i;}
  keys = new cljs.core.IndexedSeq(G__23629__a,0,null);
} 
return G__23628__delegate.call(this,keys);};
G__23628.cljs$lang$maxFixedArity = 0;
G__23628.cljs$lang$applyTo = (function (arglist__23630){
var keys = cljs.core.seq(arglist__23630);
return G__23628__delegate(keys);
});
G__23628.cljs$core$IFn$_invoke$arity$variadic = G__23628__delegate;
return G__23628;
})()
);
if((typeof homebase !== 'undefined') && (typeof homebase.react !== 'undefined') && (typeof homebase.react.homebase_context !== 'undefined')){
} else {
homebase.react.homebase_context = module$node_modules$react$index.createContext();
}
homebase.react.HomebaseProvider = (function homebase$react$HomebaseProvider(props){
var config = props.config;
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(homebase.react.keywordize_coll(config.schema));
if(cljs.core.truth_(config.initialData)){
homebase.react.transact_BANG_(conn,config.initialData);
} else {
}

return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3(homebase.react.homebase_context.Provider,({"value": conn}),props.children);
});
goog.exportSymbol('homebase.react.HomebaseProvider', homebase.react.HomebaseProvider);
homebase.react.useQuery = (function homebase$react$useQuery(query){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var vec__23621 = module$node_modules$react$index.useState(homebase.react.q(query,conn));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var listener = (function (){
var G__23624 = homebase.react.q(query,conn);
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__23624) : setResult.call(null,G__23624));
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,listener);

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
});
goog.exportSymbol('homebase.react.useQuery', homebase.react.useQuery);
homebase.react.useTransact = (function homebase$react$useTransact(){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var transact = (function (txs){
return homebase.react.transact_BANG_(conn,txs);
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transact], null);
});
goog.exportSymbol('homebase.react.useTransact', homebase.react.useTransact);

//# sourceMappingURL=homebase.react.js.map
