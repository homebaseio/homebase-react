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
homebase.react.js__GT_db_attr_overrides = new cljs.core.PersistentArrayMap(null, 3, ["id",new cljs.core.Keyword("db","id","db/id",-1388397098),"identity",new cljs.core.Keyword("db","ident","db/ident",-737096),"ident",new cljs.core.Keyword("db","ident","db/ident",-737096)], null);
homebase.react.object__GT_db_map = (function homebase$react$object__GT_db_map(var_args){
var G__23548 = arguments.length;
switch (G__23548) {
case 1:
return homebase.react.object__GT_db_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return homebase.react.object__GT_db_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.react.object__GT_db_map.cljs$core$IFn$_invoke$arity$1 = (function (data){
return homebase.react.object__GT_db_map.cljs$core$IFn$_invoke$arity$2(data,"db");
}));

(homebase.react.object__GT_db_map.cljs$core$IFn$_invoke$arity$2 = (function (data,namespace){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.coll_QMARK_(v)){
return homebase.react.object__GT_db_map.cljs$core$IFn$_invoke$arity$2(v,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__4126__auto__ = (homebase.react.js__GT_db_attr_overrides.cljs$core$IFn$_invoke$arity$1 ? homebase.react.js__GT_db_attr_overrides.cljs$core$IFn$_invoke$arity$1(k) : homebase.react.js__GT_db_attr_overrides.call(null,k));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(namespace,k);
}
})(),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data));
}));

(homebase.react.object__GT_db_map.cljs$lang$maxFixedArity = 2);

homebase.react.js__GT_entity_lookup = (function homebase$react$js__GT_entity_lookup(lookup){
if(typeof lookup === 'number'){
return lookup;
} else {
if(cljs.core.object_QMARK_(lookup)){
return cljs.core.first(homebase.react.object__GT_db_map.cljs$core$IFn$_invoke$arity$1(lookup));
} else {
return null;

}
}
});
homebase.react.q_entity_array = (function homebase$react$q_entity_array(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23645 = arguments.length;
var i__4737__auto___23646 = (0);
while(true){
if((i__4737__auto___23646 < len__4736__auto___23645)){
args__4742__auto__.push((arguments[i__4737__auto___23646]));

var G__23647 = (i__4737__auto___23646 + (1));
i__4737__auto___23646 = G__23647;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23560){
var vec__23561 = p__23560;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23561,(0),null);
var G__23564 = cljs.core.deref(conn);
var G__23565 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23564,G__23565) : datascript.core.entity.call(null,G__23564,G__23565));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),args)));
}));

(homebase.react.q_entity_array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q_entity_array.cljs$lang$applyTo = (function (seq23557){
var G__23558 = cljs.core.first(seq23557);
var seq23557__$1 = cljs.core.next(seq23557);
var G__23559 = cljs.core.first(seq23557__$1);
var seq23557__$2 = cljs.core.next(seq23557__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23558,G__23559,seq23557__$2);
}));

homebase.react.js__GT_datalog = (function homebase$react$js__GT_datalog(data){
var map__23566 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__23566__$1 = (((((!((map__23566 == null))))?(((((map__23566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23566):map__23566);
var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23566__$1,"$find");
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23566__$1,"$where");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(find)].join(''))], null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__23568){
var vec__23569 = p__23568;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569,(0),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569,(1),null);
var vec__23572 = cljs.core.seq(av);
var vec__23575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23572,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(1),null);
var pred = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(e,a)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"$any")){
return pred;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}
}),where)], null);
});
homebase.react.js__GT_query = (function homebase$react$js__GT_query(query){
if(typeof query === 'string'){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query);
} else {
if(cljs.core.object_QMARK_(query)){
return homebase.react.js__GT_datalog(query);
} else {
return null;

}
}
});
(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__23649__delegate = function (keys){
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
var G__23649 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__23650__i = 0, G__23650__a = new Array(arguments.length -  0);
while (G__23650__i < G__23650__a.length) {G__23650__a[G__23650__i] = arguments[G__23650__i + 0]; ++G__23650__i;}
  keys = new cljs.core.IndexedSeq(G__23650__a,0,null);
} 
return G__23649__delegate.call(this,keys);};
G__23649.cljs$lang$maxFixedArity = 0;
G__23649.cljs$lang$applyTo = (function (arglist__23651){
var keys = cljs.core.seq(arglist__23651);
return G__23649__delegate(keys);
});
G__23649.cljs$core$IFn$_invoke$arity$variadic = G__23649__delegate;
return G__23649;
})()
);
if((typeof homebase !== 'undefined') && (typeof homebase.react !== 'undefined') && (typeof homebase.react.homebase_context !== 'undefined')){
} else {
homebase.react.homebase_context = module$node_modules$react$index.createContext();
}
homebase.react.base_schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
homebase.react.HomebaseProvider = (function homebase$react$HomebaseProvider(props){
var config = props.config;
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([homebase.react.keywordize(config.schema),homebase.react.base_schema], 0)));
if(cljs.core.truth_(config.initialData)){
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,homebase.react.keywordize(config.initialData));
} else {
}

return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3(homebase.react.homebase_context.Provider,({"value": conn}),props.children);
});
goog.exportSymbol('homebase.react.HomebaseProvider', homebase.react.HomebaseProvider);
homebase.react.useEntity = (function homebase$react$useEntity(lookup){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var vec__23617 = module$node_modules$react$index.useState((function (){var G__23625 = cljs.core.deref(conn);
var G__23626 = homebase.react.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23625,G__23626) : datascript.core.entity.call(null,G__23625,G__23626));
})());
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__23635 = (function (){var G__23636 = cljs.core.deref(conn);
var G__23637 = homebase.react.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23636,G__23637) : datascript.core.entity.call(null,G__23636,G__23637));
})();
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__23635) : setResult.call(null,G__23635));
}));

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}),[lookup]);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
});
goog.exportSymbol('homebase.react.useEntity', homebase.react.useEntity);
homebase.react.useQuery = (function homebase$react$useQuery(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23652 = arguments.length;
var i__4737__auto___23653 = (0);
while(true){
if((i__4737__auto___23653 < len__4736__auto___23652)){
args__4742__auto__.push((arguments[i__4737__auto___23653]));

var G__23654 = (i__4737__auto___23653 + (1));
i__4737__auto___23653 = G__23654;
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
var vec__23640 = module$node_modules$react$index.useState(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,homebase.react.js__GT_query(query),conn,homebase.react.keywordize(args)));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__23643 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,homebase.react.js__GT_query(query),conn,homebase.react.keywordize(args));
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__23643) : setResult.call(null,G__23643));
}));

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}),[query,args]);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
}));

(homebase.react.useQuery.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.react.useQuery.cljs$lang$applyTo = (function (seq23638){
var G__23639 = cljs.core.first(seq23638);
var seq23638__$1 = cljs.core.next(seq23638);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23639,seq23638__$1);
}));

homebase.react.useTransact = (function homebase$react$useTransact(){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var transact = (function (txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,homebase.react.keywordize(txs));
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transact], null);
});
goog.exportSymbol('homebase.react.useTransact', homebase.react.useTransact);

//# sourceMappingURL=homebase.react.js.map
