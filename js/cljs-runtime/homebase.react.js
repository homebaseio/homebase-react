goog.provide('homebase.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
homebase.react.keywordize_str = (function homebase$react$keywordize_str(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),":")))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return s;
}
});
homebase.react.keywordize = (function homebase$react$keywordize(coll){
return clojure.walk.postwalk(homebase.react.keywordize_str,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coll));
});
homebase.react.transact_BANG_ = (function homebase$react$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,homebase.react.keywordize(txs));
});
homebase.react.json_query = (function homebase$react$json_query(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23638 = arguments.length;
var i__4737__auto___23639 = (0);
while(true){
if((i__4737__auto___23639 < len__4736__auto___23638)){
args__4742__auto__.push((arguments[i__4737__auto___23639]));

var G__23640 = (i__4737__auto___23639 + (1));
i__4737__auto___23639 = G__23640;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.json_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.json_query.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23613){
var vec__23614 = p__23613;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23614,(0),null);
var G__23617 = cljs.core.deref(conn);
var G__23618 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23617,G__23618) : datascript.core.entity.call(null,G__23617,G__23618));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),cljs.core.deref(conn),args)));
}));

(homebase.react.json_query.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.json_query.cljs$lang$applyTo = (function (seq23610){
var G__23611 = cljs.core.first(seq23610);
var seq23610__$1 = cljs.core.next(seq23610);
var G__23612 = cljs.core.first(seq23610__$1);
var seq23610__$2 = cljs.core.next(seq23610__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23611,G__23612,seq23610__$2);
}));

homebase.react.q = (function homebase$react$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23641 = arguments.length;
var i__4737__auto___23642 = (0);
while(true){
if((i__4737__auto___23642 < len__4736__auto___23641)){
args__4742__auto__.push((arguments[i__4737__auto___23642]));

var G__23643 = (i__4737__auto___23642 + (1));
i__4737__auto___23642 = G__23643;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
if(typeof query === 'number'){
var G__23622 = cljs.core.deref(conn);
var G__23623 = query;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23622,G__23623) : datascript.core.entity.call(null,G__23622,G__23623));
} else {
if(typeof query === 'string'){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23624){
var vec__23625 = p__23624;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23625,(0),null);
var G__23628 = cljs.core.deref(conn);
var G__23629 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23628,G__23629) : datascript.core.entity.call(null,G__23628,G__23629));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),cljs.core.deref(conn),homebase.react.keywordize(args))));
} else {
if(cljs.core.array_QMARK_(query)){
var G__23630 = cljs.core.deref(conn);
var G__23631 = homebase.react.keywordize(query);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23630,G__23631) : datascript.core.entity.call(null,G__23630,G__23631));
} else {
if(cljs.core.object_QMARK_(query)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.json_query,query,conn,homebase.react.keywordize(args));
} else {
return null;

}
}
}
}
}));

(homebase.react.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q.cljs$lang$applyTo = (function (seq23619){
var G__23620 = cljs.core.first(seq23619);
var seq23619__$1 = cljs.core.next(seq23619);
var G__23621 = cljs.core.first(seq23619__$1);
var seq23619__$2 = cljs.core.next(seq23619__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23620,G__23621,seq23619__$2);
}));

(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__23644__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
if(cljs.core.set_QMARK_(acc)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(acc),homebase.react.keywordize(key));
} else {
if(cljs.core.truth_(acc)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,homebase.react.keywordize(key));
} else {
return null;

}
}
}),this$,keys);
};
var G__23644 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__23645__i = 0, G__23645__a = new Array(arguments.length -  0);
while (G__23645__i < G__23645__a.length) {G__23645__a[G__23645__i] = arguments[G__23645__i + 0]; ++G__23645__i;}
  keys = new cljs.core.IndexedSeq(G__23645__a,0,null);
} 
return G__23644__delegate.call(this,keys);};
G__23644.cljs$lang$maxFixedArity = 0;
G__23644.cljs$lang$applyTo = (function (arglist__23646){
var keys = cljs.core.seq(arglist__23646);
return G__23644__delegate(keys);
});
G__23644.cljs$core$IFn$_invoke$arity$variadic = G__23644__delegate;
return G__23644;
})()
);
if((typeof homebase !== 'undefined') && (typeof homebase.react !== 'undefined') && (typeof homebase.react.homebase_context !== 'undefined')){
} else {
homebase.react.homebase_context = module$node_modules$react$index.createContext();
}
homebase.react.HomebaseProvider = (function homebase$react$HomebaseProvider(props){
var config = props.config;
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(homebase.react.keywordize(config.schema));
if(cljs.core.truth_(config.initialData)){
homebase.react.transact_BANG_(conn,config.initialData);
} else {
}

return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3(homebase.react.homebase_context.Provider,({"value": conn}),props.children);
});
goog.exportSymbol('homebase.react.HomebaseProvider', homebase.react.HomebaseProvider);
homebase.react.useQuery = (function homebase$react$useQuery(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23647 = arguments.length;
var i__4737__auto___23648 = (0);
while(true){
if((i__4737__auto___23648 < len__4736__auto___23647)){
args__4742__auto__.push((arguments[i__4737__auto___23648]));

var G__23649 = (i__4737__auto___23648 + (1));
i__4737__auto___23648 = G__23649;
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
var vec__23634 = module$node_modules$react$index.useState(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q,query,conn,args));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23634,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23634,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__23637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q,query,conn,args);
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__23637) : setResult.call(null,G__23637));
}));

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,query,args], null);
}));

(homebase.react.useQuery.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.react.useQuery.cljs$lang$applyTo = (function (seq23632){
var G__23633 = cljs.core.first(seq23632);
var seq23632__$1 = cljs.core.next(seq23632);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23633,seq23632__$1);
}));

homebase.react.useTransact = (function homebase$react$useTransact(){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var transact = (function (txs){
return homebase.react.transact_BANG_(conn,txs);
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transact], null);
});
goog.exportSymbol('homebase.react.useTransact', homebase.react.useTransact);

//# sourceMappingURL=homebase.react.js.map
