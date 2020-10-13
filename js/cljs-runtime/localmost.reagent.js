goog.provide('localmost.reagent');
/**
 * Monkeypatch conn-from-db in datascript to use an r/atom https://github.com/tonsky/datascript/blob/master/src/datascript/core.cljc#L411
 */
localmost.reagent.conn_from_db = (function localmost$reagent$conn_from_db(db){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
});
/**
 * Creates an empty DB and a mutable reference to it. See [[create-conn]].
 */
localmost.reagent.conn_from_datoms = (function localmost$reagent$conn_from_datoms(var_args){
var G__23593 = arguments.length;
switch (G__23593) {
case 1:
return localmost.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return localmost.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(localmost.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return localmost.reagent.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.core.init_db.call(null,datoms)));
}));

(localmost.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return localmost.reagent.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$2(datoms,schema) : datascript.core.init_db.call(null,datoms,schema)));
}));

(localmost.reagent.conn_from_datoms.cljs$lang$maxFixedArity = 2);

/**
 * Creates a mutable reference (a “connection”) to an empty immutable database.
 * Connections are lightweight in-memory structures (~atoms) with direct support of transaction listeners ([[listen!]], [[unlisten!]]) and other handy DataScript APIs ([[transact!]], [[reset-conn!]], [[db]]).
 * To access underlying immutable DB value, deref: `@conn`.
 */
localmost.reagent.create_conn = (function localmost$reagent$create_conn(var_args){
var G__23595 = arguments.length;
switch (G__23595) {
case 0:
return localmost.reagent.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return localmost.reagent.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(localmost.reagent.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return localmost.reagent.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0() : datascript.core.empty_db.call(null)));
}));

(localmost.reagent.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return localmost.reagent.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema)));
}));

(localmost.reagent.create_conn.cljs$lang$maxFixedArity = 1);

localmost.reagent.new_db_conn = (function localmost$reagent$new_db_conn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23608 = arguments.length;
var i__4737__auto___23609 = (0);
while(true){
if((i__4737__auto___23609 < len__4736__auto___23608)){
args__4742__auto__.push((arguments[i__4737__auto___23609]));

var G__23610 = (i__4737__auto___23609 + (1));
i__4737__auto___23609 = G__23610;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return localmost.reagent.new_db_conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(localmost.reagent.new_db_conn.cljs$core$IFn$_invoke$arity$variadic = (function (txs,p__23598){
var map__23599 = p__23598;
var map__23599__$1 = (((((!((map__23599 == null))))?(((((map__23599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23599):map__23599);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23599__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var conn = localmost.reagent.create_conn.cljs$core$IFn$_invoke$arity$1(schema);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs);

return conn;
}));

(localmost.reagent.new_db_conn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(localmost.reagent.new_db_conn.cljs$lang$applyTo = (function (seq23596){
var G__23597 = cljs.core.first(seq23596);
var seq23596__$1 = cljs.core.next(seq23596);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23597,seq23596__$1);
}));

localmost.reagent.q = (function localmost$reagent$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23611 = arguments.length;
var i__4737__auto___23612 = (0);
while(true){
if((i__4737__auto___23612 < len__4736__auto___23611)){
args__4742__auto__.push((arguments[i__4737__auto___23612]));

var G__23613 = (i__4737__auto___23612 + (1));
i__4737__auto___23612 = G__23613;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return localmost.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(localmost.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,vars){
if(typeof query === 'number'){
var G__23604 = cljs.core.deref(conn);
var G__23605 = query;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23604,G__23605) : datascript.core.entity.call(null,G__23604,G__23605));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),vars);

}
}));

(localmost.reagent.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(localmost.reagent.q.cljs$lang$applyTo = (function (seq23601){
var G__23602 = cljs.core.first(seq23601);
var seq23601__$1 = cljs.core.next(seq23601);
var G__23603 = cljs.core.first(seq23601__$1);
var seq23601__$2 = cljs.core.next(seq23601__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23602,G__23603,seq23601__$2);
}));

localmost.reagent.transact_BANG_ = (function localmost$reagent$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs);
});

//# sourceMappingURL=localmost.reagent.js.map
