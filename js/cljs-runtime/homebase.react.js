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
var vec__23905 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23905,(0),null);
var verb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23905,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23905,(2),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23905,(3),null);
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
homebase.react.js_tx_fns = new cljs.core.PersistentArrayMap(null, 3, ["add",new cljs.core.Keyword("db","add","db/add",235286841),"retract",new cljs.core.Keyword("db","retract","db/retract",-1549825231),"retractEntity",new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)], null);
homebase.react.js__GT_tx = (function homebase$react$js__GT_tx(var_args){
var G__23915 = arguments.length;
switch (G__23915) {
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

(homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$1 = (function (tx){
if(cljs.core.object_QMARK_(tx)){
return homebase.react.js__GT_tx.cljs$core$IFn$_invoke$arity$2(tx,"db");
} else {
var vec__23919 = tx;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23919,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23919,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23919,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23919,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.react.js_tx_fns,f),e,homebase.react.keywordize(a),v], null);
}
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
var iter__4529__auto__ = (function homebase$react$paths_$_iter__23943(s__23944){
return (new cljs.core.LazySeq(null,(function (){
var s__23944__$1 = s__23944;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23944__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__23952 = cljs.core.first(xs__6292__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23952,(1),null);
var iterys__4525__auto__ = ((function (s__23944__$1,vec__23952,k,v,xs__6292__auto__,temp__5735__auto__){
return (function homebase$react$paths_$_iter__23943_$_iter__23945(s__23946){
return (new cljs.core.LazySeq(null,((function (s__23944__$1,vec__23952,k,v,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__23946__$1 = s__23946;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23946__$1);
if(temp__5735__auto____$1){
var s__23946__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23946__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23946__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23948 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23947 = (0);
while(true){
if((i__23947 < size__4528__auto__)){
var subkey = cljs.core._nth(c__4527__auto__,i__23947);
cljs.core.chunk_append(b__23948,cljs.core.cons(k,subkey));

var G__24052 = (i__23947 + (1));
i__23947 = G__24052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23948),homebase$react$paths_$_iter__23943_$_iter__23945(cljs.core.chunk_rest(s__23946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23948),null);
}
} else {
var subkey = cljs.core.first(s__23946__$2);
return cljs.core.cons(cljs.core.cons(k,subkey),homebase$react$paths_$_iter__23943_$_iter__23945(cljs.core.rest(s__23946__$2)));
}
} else {
return null;
}
break;
}
});})(s__23944__$1,vec__23952,k,v,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__23944__$1,vec__23952,k,v,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((homebase.react.paths.cljs$core$IFn$_invoke$arity$1 ? homebase.react.paths.cljs$core$IFn$_invoke$arity$1(v) : homebase.react.paths.call(null,v))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,homebase$react$paths_$_iter__23943(cljs.core.rest(s__23944__$1)));
} else {
var G__24053 = cljs.core.rest(s__23944__$1);
s__23944__$1 = G__24053;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__23964){
var vec__23965 = p__23964;
var nms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965,(2),null);
var p = vec__23965;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.react.str__GT_schema_key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(schema__$1,p));
var k__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.react.str__GT_schema_key,k);
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homebase.react.js__GT_key(nms,nm),k__$1], null),v);
}),cljs.core.PersistentArrayMap.EMPTY,homebase.react.paths(schema__$1));
});
homebase.react.q_entity_array = (function homebase$react$q_entity_array(var_args){
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

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.react.q_entity_array.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23995){
var vec__23996 = p__23995;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23996,(0),null);
var G__23999 = cljs.core.deref(conn);
var G__24000 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23999,G__24000) : datascript.core.entity.call(null,G__23999,G__24000));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),args)));
}));

(homebase.react.q_entity_array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.react.q_entity_array.cljs$lang$applyTo = (function (seq23989){
var G__23990 = cljs.core.first(seq23989);
var seq23989__$1 = cljs.core.next(seq23989);
var G__23991 = cljs.core.first(seq23989__$1);
var seq23989__$2 = cljs.core.next(seq23989__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23990,G__23991,seq23989__$2);
}));

homebase.react.js__GT_datalog = (function homebase$react$js__GT_datalog(data){
var map__24004 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__24004__$1 = (((((!((map__24004 == null))))?(((((map__24004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24004):map__24004);
var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24004__$1,"$find");
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24004__$1,"$where");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(find)].join(''))], null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__24009){
var vec__24010 = p__24009;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24010,(0),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24010,(1),null);
var vec__24015 = cljs.core.seq(av);
var vec__24018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24018,(1),null);
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
var G__24028 = name;
switch (G__24028) {
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
var G__24073__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
var key__$1 = homebase.react.keywordize(key);
var f = (((key__$1 instanceof cljs.core.Keyword))?cljs.core.get:homebase.react.js_get);
if(cljs.core.set_QMARK_(acc)){
var G__24029 = cljs.core.first(acc);
var G__24030 = homebase.react.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24029,G__24030) : f.call(null,G__24029,G__24030));
} else {
if(cljs.core.truth_(acc)){
var G__24031 = acc;
var G__24032 = homebase.react.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24031,G__24032) : f.call(null,G__24031,G__24032));
} else {
return null;

}
}
}),this$,keys);
};
var G__24073 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__24074__i = 0, G__24074__a = new Array(arguments.length -  0);
while (G__24074__i < G__24074__a.length) {G__24074__a[G__24074__i] = arguments[G__24074__i + 0]; ++G__24074__i;}
  keys = new cljs.core.IndexedSeq(G__24074__a,0,null);
} 
return G__24073__delegate.call(this,keys);};
G__24073.cljs$lang$maxFixedArity = 0;
G__24073.cljs$lang$applyTo = (function (arglist__24075){
var keys = cljs.core.seq(arglist__24075);
return G__24073__delegate(keys);
});
G__24073.cljs$core$IFn$_invoke$arity$variadic = G__24073__delegate;
return G__24073;
})()
);
homebase.react.nil__GT_retract = (function homebase$react$nil__GT_retract(tx){
var temp__5733__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24033){
var vec__24034 = p__24033;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24034,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((v == null))?new cljs.core.Keyword("db","retract","db/retract",-1549825231):new cljs.core.Keyword("db","add","db/add",235286841)),id,k,v], null);
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.Keyword("db","id","db/id",-1388397098)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
}
});
homebase.react.transact_BANG_ = (function homebase$react$transact_BANG_(conn,txs){
var txs__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(homebase.react.nil__GT_retract,homebase.react.js__GT_tx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([txs], 0));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs__$1);
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
var vec__24037 = module$node_modules$react$index.useState((function (){var G__24040 = cljs.core.deref(conn);
var G__24041 = homebase.react.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__24040,G__24041) : datascript.core.entity.call(null,G__24040,G__24041));
})());
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24037,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24037,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__24042 = (function (){var G__24043 = cljs.core.deref(conn);
var G__24044 = homebase.react.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__24043,G__24044) : datascript.core.entity.call(null,G__24043,G__24044));
})();
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__24042) : setResult.call(null,G__24042));
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
var len__4736__auto___24079 = arguments.length;
var i__4737__auto___24080 = (0);
while(true){
if((i__4737__auto___24080 < len__4736__auto___24079)){
args__4742__auto__.push((arguments[i__4737__auto___24080]));

var G__24081 = (i__4737__auto___24080 + (1));
i__4737__auto___24080 = G__24081;
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
var vec__24047 = module$node_modules$react$index.useState(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,homebase.react.js__GT_query(query),conn,homebase.react.keywordize(args)));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24047,(0),null);
var setResult = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24047,(1),null);
module$node_modules$react$index.useEffect((function (){
var key = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,key,(function (){
var G__24050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.react.q_entity_array,homebase.react.js__GT_query(query),conn,homebase.react.keywordize(args));
return (setResult.cljs$core$IFn$_invoke$arity$1 ? setResult.cljs$core$IFn$_invoke$arity$1(G__24050) : setResult.call(null,G__24050));
}));

return (function (){
return datascript.core.unlisten_BANG_(conn,key);
});
}),[query,args]);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
}));

(homebase.react.useQuery.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.react.useQuery.cljs$lang$applyTo = (function (seq24045){
var G__24046 = cljs.core.first(seq24045);
var seq24045__$1 = cljs.core.next(seq24045);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24046,seq24045__$1);
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
