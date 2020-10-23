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
homebase.react.bool_re = /^(is|has|show|hide)(-|_)?(.*)/;
homebase.react.js__GT_bool_key = (function homebase$react$js__GT_bool_key(string){
var temp__5735__auto__ = cljs.core.re_find(homebase.react.bool_re,string);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__23910 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23910,(0),null);
var verb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23910,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23910,(2),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23910,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("is",verb)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"?"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(verb),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"?"].join('');
}
} else {
return null;
}
});
homebase.react.js__GT_key_not_memo = (function homebase$react$js__GT_key_not_memo(namespace,string){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.react.js__GT_db_attr_overrides,string);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.core.__GT_kebab_case(namespace),camel_snake_kebab.core.__GT_kebab_case((function (){var or__4126__auto____$1 = homebase.react.js__GT_bool_key(string);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return string;
}
})()));
}
});
homebase.react.js__GT_key = cljs.core.memoize(homebase.react.js__GT_key_not_memo);
homebase.react.js__GT_tx = (function homebase$react$js__GT_tx(var_args){
var G__23929 = arguments.length;
switch (G__23929) {
case 1:
return homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$1 = (function (data){
return homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$2(data,"db");
}));

(homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$2 = (function (data,namespace){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.coll_QMARK_(v)){
return homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$2(v,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,homebase.react.js__GT_key(namespace,k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data));
}));

(homebase.react.js__GT_tx.cljs$lang$maxFixedArity = 2);

homebase.react.js__GT_entity_lookup = (function homebase$react$js__GT_entity_lookup(lookup){
if(typeof lookup === 'number'){
return lookup;
} else {
if(cljs.core.object_QMARK_(lookup)){
return cljs.core.first(homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$1(lookup));
} else {
return null;

}
}
});
homebase.react.paths = (function homebase$react$paths(m){
if((((!(cljs.core.map_QMARK_(m)))) || (cljs.core.empty_QMARK_(m)))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
var iter__4529__auto__ = (function homebase$react$paths_$_iter__23937(s__23938){
return (new cljs.core.LazySeq(null,(function (){
var s__23938__$1 = s__23938;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23938__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__23946 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23946,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23946,(1),null);
var iterys__4525__auto__ = ((function (s__23938__$1,vec__23946,k,v,xs__6292__auto__,temp__5735__auto__){
return (function homebase$react$paths_$_iter__23937_$_iter__23939(s__23940){
return (new cljs.core.LazySeq(null,((function (s__23938__$1,vec__23946,k,v,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23940__$1 = s__23940;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23940__$1);
if(temp__5735__auto____$1){
var s__23940__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23940__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23940__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23942 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23941 = (0);
while(true){
if((i__23941 < size__4528__auto__)){
var subkey = cljs.core._nth(c__4527__auto__,i__23941);
cljs.core.chunk_append(b__23942,cljs.core.cons(k,subkey));

var G__24047 = (i__23941 + (1));
i__23941 = G__24047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23942),homebase$react$paths_$_iter__23937_$_iter__23939(cljs.core.chunk_rest(s__23940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23942),null);
}
} else {
var subkey = cljs.core.first(s__23940__$2);
return cljs.core.cons(cljs.core.cons(k,subkey),homebase$react$paths_$_iter__23937_$_iter__23939(cljs.core.rest(s__23940__$2)));
}
} else {
return null;
}
break;
}
});})(s__23938__$1,vec__23946,k,v,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23938__$1,vec__23946,k,v,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((homebase.react.paths.cljs$core$IFn$_invoke$arity$1 ? homebase.react.paths.cljs$core$IFn$_invoke$arity$1(v) : homebase.react.paths.call(null,v))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,homebase$react$paths_$_iter__23937(cljs.core.rest(s__23938__$1)));
} else {
var G__24050 = cljs.core.rest(s__23938__$1);
s__23938__$1 = G__24050;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
}
});
homebase.react.str__GT_schema_key = new cljs.core.PersistentArrayMap(null, 4, ["unique",new cljs.core.Keyword("db","unique","db/unique",329396388),"identity",new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),"type",new cljs.core.Keyword("db","valueType","db/valueType",1827971944),"ref",new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null);
homebase.react.js__GT_schema = (function homebase$react$js__GT_schema(schema){
var schema__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(schema);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__23976){
var vec__23977 = p__23976;
var nms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23977,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23977,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23977,(2),null);
var p = vec__23977;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.react.str__GT_schema_key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(schema__$1,p));
var k__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.react.str__GT_schema_key,k);
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homebase.react.js__GT_key(nms,nm),k__$1], null),v);
}),cljs.core.PersistentArrayMap.EMPTY,homebase.react.paths(schema__$1));
});
homebase.react.q_entity_array = (function homebase$react$q_entity_array(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24053 = arguments.length;
var i__4737__auto___24054 = (0);
while(true){
if((i__4737__auto___24054 < len__4736__auto___24053)){
args__4742__auto__.push((arguments[i__4737__auto___24054]));

var G__24056 = (i__4737__auto___24054 + (1));
i__4737__auto___24054 = G__24056;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24007){
var vec__24008 = p__24007;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008,(0),null);
var G__24011 = cljs.core.deref(conn);
var G__24012 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__24011,G__24012) : datascript.core.entity.call(null,G__24011,G__24012));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),args)));
}));

(homebase.react.q_entity_array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q_entity_array.cljs$lang$applyTo = (function (seq24001){
var G__24002 = cljs.core.first(seq24001);
var seq24001__$1 = cljs.core.next(seq24001);
var G__24003 = cljs.core.first(seq24001__$1);
var seq24001__$2 = cljs.core.next(seq24001__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24002,G__24003,seq24001__$2);
}));

homebase.react.js__GT_datalog = (function homebase$react$js__GT_datalog(data){
var map__24013 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__24013__$1 = (((((!((map__24013 == null))))?(((((map__24013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24013):map__24013);
var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24013__$1,"$find");
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24013__$1,"$where");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(find)].join(''))], null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__24015){
var vec__24016 = p__24015;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(0),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(1),null);
var vec__24019 = cljs.core.seq(av);
var vec__24022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24019,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24022,(1),null);
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
homebase.react.js_get = (function homebase$react$js_get(entity,name){
var G__24025 = name;
switch (G__24025) {
case "id":
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);

break;
case "ident":
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(entity);

break;
case "identity":
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(entity);

break;
default:
var ks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null),cljs.core.keys(entity));
var nms = cljs.core.namespace(cljs.core.first(ks));
var k = homebase.react.js__GT_key(nms,name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);

}
});
(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__24066__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
var key__$1 = homebase.react.keywordize(key);
var f = (((key__$1 instanceof cljs.core.Keyword))?cljs.core.get:homebase.react.js_get);
if(cljs.core.set_QMARK_(acc)){
var G__24026 = cljs.core.first(acc);
var G__24027 = homebase.react.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24026,G__24027) : f.call(null,G__24026,G__24027));
} else {
if(cljs.core.truth_(acc)){
var G__24028 = acc;
var G__24029 = homebase.react.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24028,G__24029) : f.call(null,G__24028,G__24029));
} else {
return null;

}
}
}),this$,keys);
};
var G__24066 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__24067__i = 0, G__24067__a = new Array(arguments.length -  0);
while (G__24067__i < G__24067__a.length) {G__24067__a[G__24067__i] = arguments[G__24067__i + 0]; ++G__24067__i;}
  keys = new cljs.core.IndexedSeq(G__24067__a,0,null);
} 
return G__24066__delegate.call(this,keys);};
G__24066.cljs$lang$maxFixedArity = 0;
G__24066.cljs$lang$applyTo = (function (arglist__24068){
var keys = cljs.core.seq(arglist__24068);
return G__24066__delegate(keys);
});
G__24066.cljs$core$IFn$_invoke$arity$variadic = G__24066__delegate;
return G__24066;
})()
);
homebase.react.transact_BANG_ = (function homebase$react$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((cljs.core.object_QMARK_((txs[(0)])))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(homebase.react.js__GT_tx,txs):homebase.react.keywordize(txs)
));
});
if((typeof homebase !== 'undefined') && (typeof homebase.react !== 'undefined') && (typeof homebase.react.homebase_context !== 'undefined')){
} else {
homebase.react.homebase_context = module$node_modules$react$index.createContext();
}
homebase.react.base_schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
homebase.react.HomebaseProvider = (function homebase$react$HomebaseProvider(props){
var config = props.config;
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([homebase.react.js__GT_schema(config.schema),homebase.react.base_schema], 0)));
if(cljs.core.truth_(config.initialData)){
homebase.react.transact_BANG_(conn,config.initialData);
} else {
}

return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3(homebase.react.homebase_context.Provider,({"value": conn}),props.children);
});
goog.exportSymbol('homebase.react.HomebaseProvider', homebase.react.HomebaseProvider);
homebase.react.useEntity = (function homebase$react$useEntity(lookup){
var conn = module$node_modules$react$index.useContext(homebase.react.homebase_context);
var vec__24030 = module$node_modules$react$index.useState((function (){var G__24033 = cljs.core.deref(conn);
var G__24034 = homebase.react.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__24033,G__24034) : datascript.core.entity.call(null,G__24033,G__24034));
})());
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24030,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24030,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__24035 = (function (){var G__24036 = cljs.core.deref(conn);
var G__24037 = homebase.react.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__24036,G__24037) : datascript.core.entity.call(null,G__24036,G__24037));
})();
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__24035) : setResult.call(null,G__24035));
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
var len__4736__auto___24069 = arguments.length;
var i__4737__auto___24070 = (0);
while(true){
if((i__4737__auto___24070 < len__4736__auto___24069)){
args__4742__auto__.push((arguments[i__4737__auto___24070]));

var G__24071 = (i__4737__auto___24070 + (1));
i__4737__auto___24070 = G__24071;
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
var vec__24040 = module$node_modules$react$index.useState(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,homebase.react.js__GT_query(query),conn,homebase.react.keywordize(args)));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24040,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24040,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__24043 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,homebase.react.js__GT_query(query),conn,homebase.react.keywordize(args));
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__24043) : setResult.call(null,G__24043));
}));

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}),[query,args]);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
}));

(homebase.react.useQuery.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.react.useQuery.cljs$lang$applyTo = (function (seq24038){
var G__24039 = cljs.core.first(seq24038);
var seq24038__$1 = cljs.core.next(seq24038);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24039,seq24038__$1);
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
