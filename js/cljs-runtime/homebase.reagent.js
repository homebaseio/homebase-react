goog.provide('homebase.reagent');
/**
 * Monkeypatch conn-from-db in datascript to use an r/atom https://github.com/tonsky/datascript/blob/master/src/datascript/core.cljc#L411
 */
homebase.reagent.conn_from_db = (function homebase$reagent$conn_from_db(db){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
});
/**
 * Creates an empty DB and a mutable reference to it. See [[create-conn]].
 */
homebase.reagent.conn_from_datoms = (function homebase$reagent$conn_from_datoms(var_args){
var G__23587 = arguments.length;
switch (G__23587) {
case 1:
return homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return homebase.reagent.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.core.init_db.call(null,datoms)));
}));

(homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return homebase.reagent.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$2(datoms,schema) : datascript.core.init_db.call(null,datoms,schema)));
}));

(homebase.reagent.conn_from_datoms.cljs$lang$maxFixedArity = 2);

/**
 * Creates a mutable reference (a “connection”) to an empty immutable database.
 * Connections are lightweight in-memory structures (~atoms) with direct support of transaction listeners ([[listen!]], [[unlisten!]]) and other handy DataScript APIs ([[transact!]], [[reset-conn!]], [[db]]).
 * To access underlying immutable DB value, deref: `@conn`.
 */
homebase.reagent.create_conn = (function homebase$reagent$create_conn(var_args){
var G__23589 = arguments.length;
switch (G__23589) {
case 0:
return homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return homebase.reagent.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0() : datascript.core.empty_db.call(null)));
}));

(homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return homebase.reagent.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema)));
}));

(homebase.reagent.create_conn.cljs$lang$maxFixedArity = 1);

homebase.reagent.new_db_conn = (function homebase$reagent$new_db_conn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23604 = arguments.length;
var i__4737__auto___23605 = (0);
while(true){
if((i__4737__auto___23605 < len__4736__auto___23604)){
args__4742__auto__.push((arguments[i__4737__auto___23605]));

var G__23606 = (i__4737__auto___23605 + (1));
i__4737__auto___23605 = G__23606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return homebase.reagent.new_db_conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(homebase.reagent.new_db_conn.cljs$core$IFn$_invoke$arity$variadic = (function (txs,p__23592){
var map__23593 = p__23592;
var map__23593__$1 = (((((!((map__23593 == null))))?(((((map__23593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23593):map__23593);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var conn = homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$1(schema);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs);

return conn;
}));

(homebase.reagent.new_db_conn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.reagent.new_db_conn.cljs$lang$applyTo = (function (seq23590){
var G__23591 = cljs.core.first(seq23590);
var seq23590__$1 = cljs.core.next(seq23590);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23591,seq23590__$1);
}));

homebase.reagent.q = (function homebase$reagent$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23607 = arguments.length;
var i__4737__auto___23608 = (0);
while(true){
if((i__4737__auto___23608 < len__4736__auto___23607)){
args__4742__auto__.push((arguments[i__4737__auto___23608]));

var G__23609 = (i__4737__auto___23608 + (1));
i__4737__auto___23608 = G__23609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,vars){
if(typeof query === 'number'){
var G__23598 = cljs.core.deref(conn);
var G__23599 = query;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23598,G__23599) : datascript.core.entity.call(null,G__23598,G__23599));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),vars);

}
}));

(homebase.reagent.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.reagent.q.cljs$lang$applyTo = (function (seq23595){
var G__23596 = cljs.core.first(seq23595);
var seq23595__$1 = cljs.core.next(seq23595);
var G__23597 = cljs.core.first(seq23595__$1);
var seq23595__$2 = cljs.core.next(seq23595__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23596,G__23597,seq23595__$2);
}));

homebase.reagent.transact_BANG_ = (function homebase$reagent$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs);
});

//# sourceMappingURL=homebase.reagent.js.map