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
var len__4736__auto___23653 = arguments.length;
var i__4737__auto___23654 = (0);
while(true){
if((i__4737__auto___23654 < len__4736__auto___23653)){
args__4742__auto__.push((arguments[i__4737__auto___23654]));

var G__23655 = (i__4737__auto___23654 + (1));
i__4737__auto___23654 = G__23655;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.json_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.json_query.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23595){
var vec__23596 = p__23595;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(0),null);
var G__23601 = cljs.core.deref(conn);
var G__23602 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23601,G__23602) : datascript.core.entity.call(null,G__23601,G__23602));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),cljs.core.deref(conn),args)));
}));

(homebase.react.json_query.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.json_query.cljs$lang$applyTo = (function (seq23590){
var G__23591 = cljs.core.first(seq23590);
var seq23590__$1 = cljs.core.next(seq23590);
var G__23592 = cljs.core.first(seq23590__$1);
var seq23590__$2 = cljs.core.next(seq23590__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23591,G__23592,seq23590__$2);
}));

homebase.react.js__GT_datalog = (function homebase$react$js__GT_datalog(data){
var map__23606 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__23606__$1 = (((((!((map__23606 == null))))?(((((map__23606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23606):map__23606);
var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23606__$1,"$find");
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23606__$1,"$where");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(find)].join(''))], null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__23608){
var vec__23609 = p__23608;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(0),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(1),null);
var vec__23612 = cljs.core.seq(av);
var vec__23615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23615,(1),null);
var pred = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(e,a)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"$any")){
return pred;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}
}),where)], null);
});
homebase.react.q_entity_array = (function homebase$react$q_entity_array(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23656 = arguments.length;
var i__4737__auto___23657 = (0);
while(true){
if((i__4737__auto___23657 < len__4736__auto___23656)){
args__4742__auto__.push((arguments[i__4737__auto___23657]));

var G__23658 = (i__4737__auto___23657 + (1));
i__4737__auto___23657 = G__23658;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23621){
var vec__23622 = p__23621;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23622,(0),null);
var G__23625 = cljs.core.deref(conn);
var G__23626 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23625,G__23626) : datascript.core.entity.call(null,G__23625,G__23626));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),args)));
}));

(homebase.react.q_entity_array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q_entity_array.cljs$lang$applyTo = (function (seq23618){
var G__23619 = cljs.core.first(seq23618);
var seq23618__$1 = cljs.core.next(seq23618);
var G__23620 = cljs.core.first(seq23618__$1);
var seq23618__$2 = cljs.core.next(seq23618__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23619,G__23620,seq23618__$2);
}));

homebase.react.q = (function homebase$react$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23659 = arguments.length;
var i__4737__auto___23660 = (0);
while(true){
if((i__4737__auto___23660 < len__4736__auto___23659)){
args__4742__auto__.push((arguments[i__4737__auto___23660]));

var G__23661 = (i__4737__auto___23660 + (1));
i__4737__auto___23660 = G__23661;
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
var G__23633 = cljs.core.deref(conn);
var G__23634 = query;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23633,G__23634) : datascript.core.entity.call(null,G__23633,G__23634));
} else {
if(typeof query === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),conn,homebase.react.keywordize(args));
} else {
if(cljs.core.array_QMARK_(query)){
var G__23635 = cljs.core.deref(conn);
var G__23636 = homebase.react.keywordize(query);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23635,G__23636) : datascript.core.entity.call(null,G__23635,G__23636));
} else {
if(cljs.core.object_QMARK_(query)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,homebase.react.js__GT_datalog(query),conn,homebase.react.keywordize(args));
} else {
return null;

}
}
}
}
}));

(homebase.react.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q.cljs$lang$applyTo = (function (seq23627){
var G__23628 = cljs.core.first(seq23627);
var seq23627__$1 = cljs.core.next(seq23627);
var G__23629 = cljs.core.first(seq23627__$1);
var seq23627__$2 = cljs.core.next(seq23627__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23628,G__23629,seq23627__$2);
}));

(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__23662__delegate = function (keys){
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
var G__23662 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__23663__i = 0, G__23663__a = new Array(arguments.length -  0);
while (G__23663__i < G__23663__a.length) {G__23663__a[G__23663__i] = arguments[G__23663__i + 0]; ++G__23663__i;}
  keys = new cljs.core.IndexedSeq(G__23663__a,0,null);
} 
return G__23662__delegate.call(this,keys);};
G__23662.cljs$lang$maxFixedArity = 0;
G__23662.cljs$lang$applyTo = (function (arglist__23664){
var keys = cljs.core.seq(arglist__23664);
return G__23662__delegate(keys);
});
G__23662.cljs$core$IFn$_invoke$arity$variadic = G__23662__delegate;
return G__23662;
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
var len__4736__auto___23667 = arguments.length;
var i__4737__auto___23668 = (0);
while(true){
if((i__4737__auto___23668 < len__4736__auto___23667)){
args__4742__auto__.push((arguments[i__4737__auto___23668]));

var G__23669 = (i__4737__auto___23668 + (1));
i__4737__auto___23668 = G__23669;
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
var vec__23649 = module$node_modules$react$index.useState(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q,query,conn,args));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23649,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23649,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__23652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q,query,conn,args);
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__23652) : setResult.call(null,G__23652));
}));

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,query,args], null);
}));

(homebase.react.useQuery.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.react.useQuery.cljs$lang$applyTo = (function (seq23644){
var G__23645 = cljs.core.first(seq23644);
var seq23644__$1 = cljs.core.next(seq23644);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23645,seq23644__$1);
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
