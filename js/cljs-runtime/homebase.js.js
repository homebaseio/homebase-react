goog.provide('homebase.js');
homebase.js.keywordize_str = (function homebase$js$keywordize_str(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),":")))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return s;
}
});
homebase.js.keywordize = (function homebase$js$keywordize(coll){
return clojure.walk.postwalk(homebase.js.keywordize_str,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coll));
});
homebase.js.js__GT_db_attr_overrides = new cljs.core.PersistentArrayMap(null, 3, ["id",new cljs.core.Keyword("db","id","db/id",-1388397098),"identity",new cljs.core.Keyword("db","ident","db/ident",-737096),"ident",new cljs.core.Keyword("db","ident","db/ident",-737096)], null);
homebase.js.bool_re = /^(is|has|show|hide)(-|_)?(.*)/;
homebase.js.js__GT_bool_key = (function homebase$js$js__GT_bool_key(string){
var temp__5735__auto__ = cljs.core.re_find(homebase.js.bool_re,string);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__23887 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23887,(0),null);
var verb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23887,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23887,(2),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23887,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("is",verb)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"?"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(verb),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"?"].join('');
}
} else {
return null;
}
});
homebase.js.js__GT_key_not_memo = (function homebase$js$js__GT_key_not_memo(namespace,string){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.js__GT_db_attr_overrides,string);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.core.__GT_kebab_case(namespace),camel_snake_kebab.core.__GT_kebab_case((function (){var or__4126__auto____$1 = homebase.js.js__GT_bool_key(string);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return string;
}
})()));
}
});
homebase.js.js__GT_key = cljs.core.memoize(homebase.js.js__GT_key_not_memo);
homebase.js.js_tx_fns = new cljs.core.PersistentArrayMap(null, 3, ["add",new cljs.core.Keyword("db","add","db/add",235286841),"retract",new cljs.core.Keyword("db","retract","db/retract",-1549825231),"retractEntity",new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)], null);
homebase.js.js__GT_tx = (function homebase$js$js__GT_tx(var_args){
var G__23891 = arguments.length;
switch (G__23891) {
case 1:
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$1 = (function (tx){
if(cljs.core.object_QMARK_(tx)){
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2(tx,"db");
} else {
var vec__23892 = tx;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.js_tx_fns,f),e,homebase.js.keywordize(a),v], null);
}
}));

(homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2 = (function (data,namespace){
return cljs.core.reduce_kv((function homebase$js$js__GT_tx_reducer(acc,k,v){
if(cljs.core.coll_QMARK_(v)){
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2(v,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,homebase.js.js__GT_key(namespace,k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data));
}));

(homebase.js.js__GT_tx.cljs$lang$maxFixedArity = 2);

homebase.js.js__GT_entity_lookup = (function homebase$js$js__GT_entity_lookup(lookup){
if(typeof lookup === 'number'){
return lookup;
} else {
if(cljs.core.object_QMARK_(lookup)){
return cljs.core.first(homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$1(lookup));
} else {
return null;

}
}
});
homebase.js.str__GT_schema_key = new cljs.core.PersistentArrayMap(null, 4, ["unique",new cljs.core.Keyword("db","unique","db/unique",329396388),"identity",new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),"type",new cljs.core.Keyword("db","valueType","db/valueType",1827971944),"ref",new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null);
homebase.js.js__GT_schema = (function homebase$js$js__GT_schema(schema){
var schema__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(schema);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function homebase$js$js__GT_schema_$_js__GT_schema_reducer(acc,p__23897){
var vec__23898 = p__23897;
var nms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23898,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23898,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23898,(2),null);
var p = vec__23898;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.str__GT_schema_key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(schema__$1,p));
var k__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.str__GT_schema_key,k);
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homebase.js.js__GT_key(nms,nm),k__$1], null),v);
}),cljs.core.PersistentArrayMap.EMPTY,homebase.util.paths(schema__$1));
});
homebase.js.q_entity_array = (function homebase$js$q_entity_array(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24065 = arguments.length;
var i__4737__auto___24066 = (0);
while(true){
if((i__4737__auto___24066 < len__4736__auto___24065)){
args__4742__auto__.push((arguments[i__4737__auto___24066]));

var G__24067 = (i__4737__auto___24066 + (1));
i__4737__auto___24066 = G__24067;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.js.q_entity_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.js.q_entity_array.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function homebase$js$id__GT_entity(p__23907){
var vec__23908 = p__23907;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23908,(0),null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(conn,id) : datascript.core.entity.call(null,conn,id));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,conn,args)));
}));

(homebase.js.q_entity_array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.js.q_entity_array.cljs$lang$applyTo = (function (seq23904){
var G__23905 = cljs.core.first(seq23904);
var seq23904__$1 = cljs.core.next(seq23904);
var G__23906 = cljs.core.first(seq23904__$1);
var seq23904__$2 = cljs.core.next(seq23904__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23905,G__23906,seq23904__$2);
}));

homebase.js.js__GT_datalog = (function homebase$js$js__GT_datalog(data){
var map__23911 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__23911__$1 = (((((!((map__23911 == null))))?(((((map__23911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23911):map__23911);
var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23911__$1,"$find");
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23911__$1,"$where");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(find)].join(''))], null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function homebase$js$js__GT_datalog_$_build_where_clause(p__23913){
var vec__23914 = p__23913;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(0),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(1),null);
var vec__23917 = cljs.core.seq(av);
var vec__23920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920,(1),null);
var pred = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(e,a)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"$any")){
return pred;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}
}),where)], null);
});
homebase.js.js__GT_query = (function homebase$js$js__GT_query(query){
if(typeof query === 'string'){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query);
} else {
if(cljs.core.object_QMARK_(query)){
return homebase.js.js__GT_datalog(query);
} else {
return null;

}
}
});
homebase.js.js_get = (function homebase$js$js_get(entity,name){
var G__23962 = name;
switch (G__23962) {
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
var k = homebase.js.js__GT_key(nms,name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);

}
});
(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__24069__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
var key__$1 = homebase.js.keywordize(key);
var f = (((key__$1 instanceof cljs.core.Keyword))?cljs.core.get:homebase.js.js_get);
if(cljs.core.set_QMARK_(acc)){
var G__23963 = cljs.core.first(acc);
var G__23964 = homebase.js.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23963,G__23964) : f.call(null,G__23963,G__23964));
} else {
if(cljs.core.truth_(acc)){
var G__23965 = acc;
var G__23966 = homebase.js.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23965,G__23966) : f.call(null,G__23965,G__23966));
} else {
return null;

}
}
}),this$,keys);
};
var G__24069 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__24070__i = 0, G__24070__a = new Array(arguments.length -  0);
while (G__24070__i < G__24070__a.length) {G__24070__a[G__24070__i] = arguments[G__24070__i + 0]; ++G__24070__i;}
  keys = new cljs.core.IndexedSeq(G__24070__a,0,null);
} 
return G__24069__delegate.call(this,keys);};
G__24069.cljs$lang$maxFixedArity = 0;
G__24069.cljs$lang$applyTo = (function (arglist__24071){
var keys = cljs.core.seq(arglist__24071);
return G__24069__delegate(keys);
});
G__24069.cljs$core$IFn$_invoke$arity$variadic = G__24069__delegate;
return G__24069;
})()
);
homebase.js.nil__GT_retract = (function homebase$js$nil__GT_retract(tx){
var temp__5733__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23967){
var vec__23968 = p__23967;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23968,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((v == null))?new cljs.core.Keyword("db","retract","db/retract",-1549825231):new cljs.core.Keyword("db","add","db/add",235286841)),id,k,v], null);
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.Keyword("db","id","db/id",-1388397098)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
}
});
homebase.js.humanize_transact_error = (function homebase$js$humanize_transact_error(error){
var pred__23971 = cljs.core.re_find;
var expr__23972 = error.message;
if(cljs.core.truth_((function (){var G__23974 = /\[object Object\] is not ISeqable/;
var G__23975 = expr__23972;
return (pred__23971.cljs$core$IFn$_invoke$arity$2 ? pred__23971.cljs$core$IFn$_invoke$arity$2(G__23974,G__23975) : pred__23971.call(null,G__23974,G__23975));
})())){
return "Expected an array of transactions. \n\nFor example:  transact([\n                {todo: {name: 1}}, \n                {todo: {name: 2}}\n              ])\n";
} else {
if(cljs.core.truth_((function (){var G__23976 = /Unknown operation at \[nil nil nil nil\], expected/;
var G__23977 = expr__23972;
return (pred__23971.cljs$core$IFn$_invoke$arity$2 ? pred__23971.cljs$core$IFn$_invoke$arity$2(G__23976,G__23977) : pred__23971.call(null,G__23976,G__23977));
})())){
return "Expected 'retractEntity'. \n\nFor example:  transact([['retractEntity', id]])\n";
} else {
if(cljs.core.truth_((function (){var G__23978 = /Can't use tempid in '\[:db\.fn\/retractEntity/;
var G__23979 = expr__23972;
return (pred__23971.cljs$core$IFn$_invoke$arity$2 ? pred__23971.cljs$core$IFn$_invoke$arity$2(G__23978,G__23979) : pred__23971.call(null,G__23978,G__23979));
})())){
return "Expected a numerical id. \n\nFor example:  transact([['retractEntity', 123]])\n";
} else {
if(cljs.core.truth_((function (){var G__23980 = /Expected number or lookup ref for entity id, got nil/;
var G__23981 = expr__23972;
return (pred__23971.cljs$core$IFn$_invoke$arity$2 ? pred__23971.cljs$core$IFn$_invoke$arity$2(G__23980,G__23981) : pred__23971.call(null,G__23980,G__23981));
})())){
return "Expected a numerical id. \n\nFor example:  transact([['retractEntity', 123]])\n";
} else {
return error.message;
}
}
}
}
});
homebase.js.transact_BANG_ = (function homebase$js$transact_BANG_(conn,txs){
try{return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(homebase.js.nil__GT_retract,homebase.js.js__GT_tx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([txs], 0)));
}catch (e23982){if((e23982 instanceof Error)){
var e = e23982;
throw (new Error(homebase.js.humanize_transact_error(e)));
} else {
throw e23982;

}
}});
homebase.js.humanize_entity_error = (function homebase$js$humanize_entity_error(error){
var pred__24025 = cljs.core.re_find;
var expr__24026 = error.message;
var temp__5733__auto__ = (function (){var G__24028 = /Lookup ref attribute should be marked as :db\/unique: \[:([\w-]+)\/([\w-]+) ((?!\]).+)\]/;
var G__24029 = expr__24026;
return (pred__24025.cljs$core$IFn$_invoke$arity$2 ? pred__24025.cljs$core$IFn$_invoke$arity$2(G__24028,G__24029) : pred__24025.call(null,G__24028,G__24029));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var p__4491__auto__ = temp__5733__auto__;
return (function (p__24030){
var vec__24031 = p__24030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24031,(0),null);
var nmspc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24031,(1),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24031,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24031,(3),null);
return ["The `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nmspc),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"` attribute should be marked as unique if you want to lookup entities by it.","\n\nAdd this to your config:  { schema: { ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nmspc),": { ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),": { unique: 'identity' }}}\n"].join('');
})(p__4491__auto__);
} else {
return error.message;
}
});
homebase.js.entity = (function homebase$js$entity(conn,lookup){
try{var G__24035 = cljs.core.deref(conn);
var G__24036 = homebase.js.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__24035,G__24036) : datascript.core.entity.call(null,G__24035,G__24036));
}catch (e24034){if((e24034 instanceof Error)){
var e = e24034;
throw (new Error(homebase.js.humanize_entity_error(e)));
} else {
throw e24034;

}
}});
homebase.js.example_js_query = (function homebase$js$example_js_query(var_args){
var G__24038 = arguments.length;
switch (G__24038) {
case 0:
return homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$0 = (function (){
return homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$1("item");
}));

(homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$1 = (function (nmsp){
return ["\n\nFor example:  query({ \n                $find: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nmsp),"',\n                $where: { ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nmsp),": { name: '$any' }}\n              })\n"].join('');
}));

(homebase.js.example_js_query.cljs$lang$maxFixedArity = 1);

homebase.js.humanize_q_error = (function homebase$js$humanize_q_error(error){
var pred__24039 = cljs.core.re_find;
var expr__24040 = error.message;
if(cljs.core.truth_((function (){var G__24042 = /Query should be a vector or a map/;
var G__24043 = expr__24040;
return (pred__24039.cljs$core$IFn$_invoke$arity$2 ? pred__24039.cljs$core$IFn$_invoke$arity$2(G__24042,G__24043) : pred__24039.call(null,G__24042,G__24043));
})())){
return ["Expected query to be in the form of an object or datalog string.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$0())].join('');
} else {
if(cljs.core.truth_((function (){var G__24044 = /Query for unknown vars: \[\?\]/;
var G__24045 = expr__24040;
return (pred__24039.cljs$core$IFn$_invoke$arity$2 ? pred__24039.cljs$core$IFn$_invoke$arity$2(G__24044,G__24045) : pred__24039.call(null,G__24044,G__24045));
})())){
return ["Expected query to have a $find and a $where clause.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$0())].join('');
} else {
var temp__5733__auto__ = (function (){var G__24046 = /Query for unknown vars: \[\?((?!\]).+)\]/;
var G__24047 = expr__24040;
return (pred__24039.cljs$core$IFn$_invoke$arity$2 ? pred__24039.cljs$core$IFn$_invoke$arity$2(G__24046,G__24047) : pred__24039.call(null,G__24046,G__24047));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var p__4491__auto__ = temp__5733__auto__;
return (function (p__24048){
var vec__24049 = p__24048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24049,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24049,(1),null);
return ["Expected to see '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$),"' in both the $find and $where clauses.",homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$1(var$)].join('');
})(p__4491__auto__);
} else {
var temp__5733__auto____$1 = (function (){var G__24052 = /((?! is not ISeqable).+) is not ISeqable/;
var G__24053 = expr__24040;
return (pred__24039.cljs$core$IFn$_invoke$arity$2 ? pred__24039.cljs$core$IFn$_invoke$arity$2(G__24052,G__24053) : pred__24039.call(null,G__24052,G__24053));
})();
if(cljs.core.truth_(temp__5733__auto____$1)){
var p__4491__auto__ = temp__5733__auto____$1;
return (function (p__24054){
var vec__24055 = p__24054;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24055,(1),null);
return ["Expected $where clause to be a nested object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(homebase.js.example_js_query.cljs$core$IFn$_invoke$arity$0())].join('');
})(p__4491__auto__);
} else {
return error.message;
}
}
}
}
});
homebase.js.q = (function homebase$js$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24073 = arguments.length;
var i__4737__auto___24074 = (0);
while(true){
if((i__4737__auto___24074 < len__4736__auto___24073)){
args__4742__auto__.push((arguments[i__4737__auto___24074]));

var G__24075 = (i__4737__auto___24074 + (1));
i__4737__auto___24074 = G__24075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.js.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.js.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.js.q_entity_array,homebase.js.js__GT_query(query),cljs.core.deref(conn),homebase.js.keywordize(args));
}catch (e24061){if((e24061 instanceof Error)){
var e = e24061;
throw (new Error(homebase.js.humanize_q_error(e)));
} else {
throw e24061;

}
}}));

(homebase.js.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.js.q.cljs$lang$applyTo = (function (seq24058){
var G__24059 = cljs.core.first(seq24058);
var seq24058__$1 = cljs.core.next(seq24058);
var G__24060 = cljs.core.first(seq24058__$1);
var seq24058__$2 = cljs.core.next(seq24058__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24059,G__24060,seq24058__$2);
}));


//# sourceMappingURL=homebase.js.js.map
