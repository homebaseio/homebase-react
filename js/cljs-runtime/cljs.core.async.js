goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11031 = arguments.length;
switch (G__11031) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11032 = (function (f,blockable,meta11033){
this.f = f;
this.blockable = blockable;
this.meta11033 = meta11033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11034,meta11033__$1){
var self__ = this;
var _11034__$1 = this;
return (new cljs.core.async.t_cljs$core$async11032(self__.f,self__.blockable,meta11033__$1));
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11034){
var self__ = this;
var _11034__$1 = this;
return self__.meta11033;
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11033","meta11033",-18419321,null)], null);
}));

(cljs.core.async.t_cljs$core$async11032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11032");

(cljs.core.async.t_cljs$core$async11032.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11032.
 */
cljs.core.async.__GT_t_cljs$core$async11032 = (function cljs$core$async$__GT_t_cljs$core$async11032(f__$1,blockable__$1,meta11033){
return (new cljs.core.async.t_cljs$core$async11032(f__$1,blockable__$1,meta11033));
});

}

return (new cljs.core.async.t_cljs$core$async11032(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11038 = arguments.length;
switch (G__11038) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11040 = arguments.length;
switch (G__11040) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11042 = arguments.length;
switch (G__11042) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13010 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13010) : fn1.call(null,val_13010));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13010) : fn1.call(null,val_13010));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11046 = arguments.length;
switch (G__11046) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___13012 = n;
var x_13013 = (0);
while(true){
if((x_13013 < n__4613__auto___13012)){
(a[x_13013] = x_13013);

var G__13014 = (x_13013 + (1));
x_13013 = G__13014;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11049 = (function (flag,meta11050){
this.flag = flag;
this.meta11050 = meta11050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11051,meta11050__$1){
var self__ = this;
var _11051__$1 = this;
return (new cljs.core.async.t_cljs$core$async11049(self__.flag,meta11050__$1));
}));

(cljs.core.async.t_cljs$core$async11049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11051){
var self__ = this;
var _11051__$1 = this;
return self__.meta11050;
}));

(cljs.core.async.t_cljs$core$async11049.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11050","meta11050",945608713,null)], null);
}));

(cljs.core.async.t_cljs$core$async11049.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11049");

(cljs.core.async.t_cljs$core$async11049.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11049");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11049.
 */
cljs.core.async.__GT_t_cljs$core$async11049 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11049(flag__$1,meta11050){
return (new cljs.core.async.t_cljs$core$async11049(flag__$1,meta11050));
});

}

return (new cljs.core.async.t_cljs$core$async11049(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11052 = (function (flag,cb,meta11053){
this.flag = flag;
this.cb = cb;
this.meta11053 = meta11053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11054,meta11053__$1){
var self__ = this;
var _11054__$1 = this;
return (new cljs.core.async.t_cljs$core$async11052(self__.flag,self__.cb,meta11053__$1));
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11054){
var self__ = this;
var _11054__$1 = this;
return self__.meta11053;
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11053","meta11053",-2113248324,null)], null);
}));

(cljs.core.async.t_cljs$core$async11052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11052");

(cljs.core.async.t_cljs$core$async11052.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11052.
 */
cljs.core.async.__GT_t_cljs$core$async11052 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11052(flag__$1,cb__$1,meta11053){
return (new cljs.core.async.t_cljs$core$async11052(flag__$1,cb__$1,meta11053));
});

}

return (new cljs.core.async.t_cljs$core$async11052(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11055_SHARP_){
var G__11057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11055_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11057) : fret.call(null,G__11057));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11056_SHARP_){
var G__11058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11056_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11058) : fret.call(null,G__11058));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13031 = (i + (1));
i = G__13031;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13032 = arguments.length;
var i__4737__auto___13033 = (0);
while(true){
if((i__4737__auto___13033 < len__4736__auto___13032)){
args__4742__auto__.push((arguments[i__4737__auto___13033]));

var G__13034 = (i__4737__auto___13033 + (1));
i__4737__auto___13033 = G__13034;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11061){
var map__11062 = p__11061;
var map__11062__$1 = (((((!((map__11062 == null))))?(((((map__11062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11062):map__11062);
var opts = map__11062__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11059){
var G__11060 = cljs.core.first(seq11059);
var seq11059__$1 = cljs.core.next(seq11059);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11060,seq11059__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11065 = arguments.length;
switch (G__11065) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10973__auto___13040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11095){
var state_val_11096 = (state_11095[(1)]);
if((state_val_11096 === (7))){
var inst_11091 = (state_11095[(2)]);
var state_11095__$1 = state_11095;
var statearr_11097_13041 = state_11095__$1;
(statearr_11097_13041[(2)] = inst_11091);

(statearr_11097_13041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (1))){
var state_11095__$1 = state_11095;
var statearr_11098_13042 = state_11095__$1;
(statearr_11098_13042[(2)] = null);

(statearr_11098_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (4))){
var inst_11074 = (state_11095[(7)]);
var inst_11074__$1 = (state_11095[(2)]);
var inst_11075 = (inst_11074__$1 == null);
var state_11095__$1 = (function (){var statearr_11101 = state_11095;
(statearr_11101[(7)] = inst_11074__$1);

return statearr_11101;
})();
if(cljs.core.truth_(inst_11075)){
var statearr_11102_13043 = state_11095__$1;
(statearr_11102_13043[(1)] = (5));

} else {
var statearr_11103_13044 = state_11095__$1;
(statearr_11103_13044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (13))){
var state_11095__$1 = state_11095;
var statearr_11104_13045 = state_11095__$1;
(statearr_11104_13045[(2)] = null);

(statearr_11104_13045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (6))){
var inst_11074 = (state_11095[(7)]);
var state_11095__$1 = state_11095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11095__$1,(11),to,inst_11074);
} else {
if((state_val_11096 === (3))){
var inst_11093 = (state_11095[(2)]);
var state_11095__$1 = state_11095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11095__$1,inst_11093);
} else {
if((state_val_11096 === (12))){
var state_11095__$1 = state_11095;
var statearr_11105_13046 = state_11095__$1;
(statearr_11105_13046[(2)] = null);

(statearr_11105_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (2))){
var state_11095__$1 = state_11095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11095__$1,(4),from);
} else {
if((state_val_11096 === (11))){
var inst_11084 = (state_11095[(2)]);
var state_11095__$1 = state_11095;
if(cljs.core.truth_(inst_11084)){
var statearr_11106_13047 = state_11095__$1;
(statearr_11106_13047[(1)] = (12));

} else {
var statearr_11107_13048 = state_11095__$1;
(statearr_11107_13048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (9))){
var state_11095__$1 = state_11095;
var statearr_11108_13049 = state_11095__$1;
(statearr_11108_13049[(2)] = null);

(statearr_11108_13049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (5))){
var state_11095__$1 = state_11095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11110_13050 = state_11095__$1;
(statearr_11110_13050[(1)] = (8));

} else {
var statearr_11111_13051 = state_11095__$1;
(statearr_11111_13051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (14))){
var inst_11089 = (state_11095[(2)]);
var state_11095__$1 = state_11095;
var statearr_11112_13052 = state_11095__$1;
(statearr_11112_13052[(2)] = inst_11089);

(statearr_11112_13052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (10))){
var inst_11081 = (state_11095[(2)]);
var state_11095__$1 = state_11095;
var statearr_11113_13053 = state_11095__$1;
(statearr_11113_13053[(2)] = inst_11081);

(statearr_11113_13053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11096 === (8))){
var inst_11078 = cljs.core.async.close_BANG_(to);
var state_11095__$1 = state_11095;
var statearr_11114_13054 = state_11095__$1;
(statearr_11114_13054[(2)] = inst_11078);

(statearr_11114_13054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_11115 = [null,null,null,null,null,null,null,null];
(statearr_11115[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11115[(1)] = (1));

return statearr_11115;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11095){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11095);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11116){var ex__10883__auto__ = e11116;
var statearr_11117_13055 = state_11095;
(statearr_11117_13055[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11095[(4)]))){
var statearr_11118_13056 = state_11095;
(statearr_11118_13056[(1)] = cljs.core.first((state_11095[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_11095;
state_11095 = G__13057;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11119 = f__10974__auto__();
(statearr_11119[(6)] = c__10973__auto___13040);

return statearr_11119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__11120){
var vec__11121 = p__11120;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(1),null);
var job = vec__11121;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10973__auto___13058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11128){
var state_val_11129 = (state_11128[(1)]);
if((state_val_11129 === (1))){
var state_11128__$1 = state_11128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11128__$1,(2),res,v);
} else {
if((state_val_11129 === (2))){
var inst_11125 = (state_11128[(2)]);
var inst_11126 = cljs.core.async.close_BANG_(res);
var state_11128__$1 = (function (){var statearr_11130 = state_11128;
(statearr_11130[(7)] = inst_11125);

return statearr_11130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11128__$1,inst_11126);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11131 = [null,null,null,null,null,null,null,null];
(statearr_11131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11131[(1)] = (1));

return statearr_11131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11128){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11128);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11132){var ex__10883__auto__ = e11132;
var statearr_11133_13059 = state_11128;
(statearr_11133_13059[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11128[(4)]))){
var statearr_11134_13060 = state_11128;
(statearr_11134_13060[(1)] = cljs.core.first((state_11128[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13061 = state_11128;
state_11128 = G__13061;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11135 = f__10974__auto__();
(statearr_11135[(6)] = c__10973__auto___13058);

return statearr_11135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11136){
var vec__11137 = p__11136;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11137,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11137,(1),null);
var job = vec__11137;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___13062 = n;
var __13063 = (0);
while(true){
if((__13063 < n__4613__auto___13062)){
var G__11140_13064 = type;
var G__11140_13065__$1 = (((G__11140_13064 instanceof cljs.core.Keyword))?G__11140_13064.fqn:null);
switch (G__11140_13065__$1) {
case "compute":
var c__10973__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10973__auto___13067,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = ((function (__13063,c__10973__auto___13067,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11153){
var state_val_11154 = (state_11153[(1)]);
if((state_val_11154 === (1))){
var state_11153__$1 = state_11153;
var statearr_11155_13068 = state_11153__$1;
(statearr_11155_13068[(2)] = null);

(statearr_11155_13068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (2))){
var state_11153__$1 = state_11153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11153__$1,(4),jobs);
} else {
if((state_val_11154 === (3))){
var inst_11151 = (state_11153[(2)]);
var state_11153__$1 = state_11153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11153__$1,inst_11151);
} else {
if((state_val_11154 === (4))){
var inst_11143 = (state_11153[(2)]);
var inst_11144 = process(inst_11143);
var state_11153__$1 = state_11153;
if(cljs.core.truth_(inst_11144)){
var statearr_11156_13069 = state_11153__$1;
(statearr_11156_13069[(1)] = (5));

} else {
var statearr_11157_13070 = state_11153__$1;
(statearr_11157_13070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (5))){
var state_11153__$1 = state_11153;
var statearr_11158_13071 = state_11153__$1;
(statearr_11158_13071[(2)] = null);

(statearr_11158_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (6))){
var state_11153__$1 = state_11153;
var statearr_11159_13072 = state_11153__$1;
(statearr_11159_13072[(2)] = null);

(statearr_11159_13072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (7))){
var inst_11149 = (state_11153[(2)]);
var state_11153__$1 = state_11153;
var statearr_11160_13073 = state_11153__$1;
(statearr_11160_13073[(2)] = inst_11149);

(statearr_11160_13073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13063,c__10973__auto___13067,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10879__auto__,c__10973__auto___13067,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11161 = [null,null,null,null,null,null,null];
(statearr_11161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11161[(1)] = (1));

return statearr_11161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11153){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11153);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11162){var ex__10883__auto__ = e11162;
var statearr_11163_13074 = state_11153;
(statearr_11163_13074[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11153[(4)]))){
var statearr_11164_13075 = state_11153;
(statearr_11164_13075[(1)] = cljs.core.first((state_11153[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13076 = state_11153;
state_11153 = G__13076;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(__13063,switch__10879__auto__,c__10973__auto___13067,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10975__auto__ = (function (){var statearr_11165 = f__10974__auto__();
(statearr_11165[(6)] = c__10973__auto___13067);

return statearr_11165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
});})(__13063,c__10973__auto___13067,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
case "async":
var c__10973__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__10973__auto___13077,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = ((function (__13063,c__10973__auto___13077,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11178){
var state_val_11179 = (state_11178[(1)]);
if((state_val_11179 === (1))){
var state_11178__$1 = state_11178;
var statearr_11180_13078 = state_11178__$1;
(statearr_11180_13078[(2)] = null);

(statearr_11180_13078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (2))){
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11178__$1,(4),jobs);
} else {
if((state_val_11179 === (3))){
var inst_11176 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11178__$1,inst_11176);
} else {
if((state_val_11179 === (4))){
var inst_11168 = (state_11178[(2)]);
var inst_11169 = async(inst_11168);
var state_11178__$1 = state_11178;
if(cljs.core.truth_(inst_11169)){
var statearr_11182_13079 = state_11178__$1;
(statearr_11182_13079[(1)] = (5));

} else {
var statearr_11183_13080 = state_11178__$1;
(statearr_11183_13080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (5))){
var state_11178__$1 = state_11178;
var statearr_11185_13081 = state_11178__$1;
(statearr_11185_13081[(2)] = null);

(statearr_11185_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (6))){
var state_11178__$1 = state_11178;
var statearr_11187_13082 = state_11178__$1;
(statearr_11187_13082[(2)] = null);

(statearr_11187_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (7))){
var inst_11174 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11188_13083 = state_11178__$1;
(statearr_11188_13083[(2)] = inst_11174);

(statearr_11188_13083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13063,c__10973__auto___13077,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10879__auto__,c__10973__auto___13077,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11191 = [null,null,null,null,null,null,null];
(statearr_11191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11191[(1)] = (1));

return statearr_11191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11178){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11178);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11192){var ex__10883__auto__ = e11192;
var statearr_11193_13084 = state_11178;
(statearr_11193_13084[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11178[(4)]))){
var statearr_11194_13085 = state_11178;
(statearr_11194_13085[(1)] = cljs.core.first((state_11178[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11178;
state_11178 = G__13086;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(__13063,switch__10879__auto__,c__10973__auto___13077,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__10975__auto__ = (function (){var statearr_11198 = f__10974__auto__();
(statearr_11198[(6)] = c__10973__auto___13077);

return statearr_11198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
});})(__13063,c__10973__auto___13077,G__11140_13064,G__11140_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11140_13065__$1)].join('')));

}

var G__13087 = (__13063 + (1));
__13063 = G__13087;
continue;
} else {
}
break;
}

var c__10973__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11222){
var state_val_11223 = (state_11222[(1)]);
if((state_val_11223 === (7))){
var inst_11218 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
var statearr_11224_13089 = state_11222__$1;
(statearr_11224_13089[(2)] = inst_11218);

(statearr_11224_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (1))){
var state_11222__$1 = state_11222;
var statearr_11225_13090 = state_11222__$1;
(statearr_11225_13090[(2)] = null);

(statearr_11225_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (4))){
var inst_11203 = (state_11222[(7)]);
var inst_11203__$1 = (state_11222[(2)]);
var inst_11204 = (inst_11203__$1 == null);
var state_11222__$1 = (function (){var statearr_11226 = state_11222;
(statearr_11226[(7)] = inst_11203__$1);

return statearr_11226;
})();
if(cljs.core.truth_(inst_11204)){
var statearr_11227_13091 = state_11222__$1;
(statearr_11227_13091[(1)] = (5));

} else {
var statearr_11228_13092 = state_11222__$1;
(statearr_11228_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (6))){
var inst_11208 = (state_11222[(8)]);
var inst_11203 = (state_11222[(7)]);
var inst_11208__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11210 = [inst_11203,inst_11208__$1];
var inst_11211 = (new cljs.core.PersistentVector(null,2,(5),inst_11209,inst_11210,null));
var state_11222__$1 = (function (){var statearr_11229 = state_11222;
(statearr_11229[(8)] = inst_11208__$1);

return statearr_11229;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11222__$1,(8),jobs,inst_11211);
} else {
if((state_val_11223 === (3))){
var inst_11220 = (state_11222[(2)]);
var state_11222__$1 = state_11222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11222__$1,inst_11220);
} else {
if((state_val_11223 === (2))){
var state_11222__$1 = state_11222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11222__$1,(4),from);
} else {
if((state_val_11223 === (9))){
var inst_11215 = (state_11222[(2)]);
var state_11222__$1 = (function (){var statearr_11230 = state_11222;
(statearr_11230[(9)] = inst_11215);

return statearr_11230;
})();
var statearr_11231_13093 = state_11222__$1;
(statearr_11231_13093[(2)] = null);

(statearr_11231_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (5))){
var inst_11206 = cljs.core.async.close_BANG_(jobs);
var state_11222__$1 = state_11222;
var statearr_11232_13094 = state_11222__$1;
(statearr_11232_13094[(2)] = inst_11206);

(statearr_11232_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11223 === (8))){
var inst_11208 = (state_11222[(8)]);
var inst_11213 = (state_11222[(2)]);
var state_11222__$1 = (function (){var statearr_11233 = state_11222;
(statearr_11233[(10)] = inst_11213);

return statearr_11233;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11222__$1,(9),results,inst_11208);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11234[(1)] = (1));

return statearr_11234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11222){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11222);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11235){var ex__10883__auto__ = e11235;
var statearr_11236_13095 = state_11222;
(statearr_11236_13095[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11222[(4)]))){
var statearr_11237_13096 = state_11222;
(statearr_11237_13096[(1)] = cljs.core.first((state_11222[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11222;
state_11222 = G__13097;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11238 = f__10974__auto__();
(statearr_11238[(6)] = c__10973__auto___13088);

return statearr_11238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11277){
var state_val_11278 = (state_11277[(1)]);
if((state_val_11278 === (7))){
var inst_11273 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11279_13098 = state_11277__$1;
(statearr_11279_13098[(2)] = inst_11273);

(statearr_11279_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (20))){
var state_11277__$1 = state_11277;
var statearr_11280_13099 = state_11277__$1;
(statearr_11280_13099[(2)] = null);

(statearr_11280_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (1))){
var state_11277__$1 = state_11277;
var statearr_11281_13100 = state_11277__$1;
(statearr_11281_13100[(2)] = null);

(statearr_11281_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (4))){
var inst_11242 = (state_11277[(7)]);
var inst_11242__$1 = (state_11277[(2)]);
var inst_11243 = (inst_11242__$1 == null);
var state_11277__$1 = (function (){var statearr_11282 = state_11277;
(statearr_11282[(7)] = inst_11242__$1);

return statearr_11282;
})();
if(cljs.core.truth_(inst_11243)){
var statearr_11283_13101 = state_11277__$1;
(statearr_11283_13101[(1)] = (5));

} else {
var statearr_11284_13102 = state_11277__$1;
(statearr_11284_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (15))){
var inst_11255 = (state_11277[(8)]);
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11277__$1,(18),to,inst_11255);
} else {
if((state_val_11278 === (21))){
var inst_11268 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11285_13103 = state_11277__$1;
(statearr_11285_13103[(2)] = inst_11268);

(statearr_11285_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (13))){
var inst_11270 = (state_11277[(2)]);
var state_11277__$1 = (function (){var statearr_11286 = state_11277;
(statearr_11286[(9)] = inst_11270);

return statearr_11286;
})();
var statearr_11287_13104 = state_11277__$1;
(statearr_11287_13104[(2)] = null);

(statearr_11287_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (6))){
var inst_11242 = (state_11277[(7)]);
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11277__$1,(11),inst_11242);
} else {
if((state_val_11278 === (17))){
var inst_11263 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
if(cljs.core.truth_(inst_11263)){
var statearr_11288_13105 = state_11277__$1;
(statearr_11288_13105[(1)] = (19));

} else {
var statearr_11289_13106 = state_11277__$1;
(statearr_11289_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (3))){
var inst_11275 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11277__$1,inst_11275);
} else {
if((state_val_11278 === (12))){
var inst_11252 = (state_11277[(10)]);
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11277__$1,(14),inst_11252);
} else {
if((state_val_11278 === (2))){
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11277__$1,(4),results);
} else {
if((state_val_11278 === (19))){
var state_11277__$1 = state_11277;
var statearr_11290_13107 = state_11277__$1;
(statearr_11290_13107[(2)] = null);

(statearr_11290_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (11))){
var inst_11252 = (state_11277[(2)]);
var state_11277__$1 = (function (){var statearr_11291 = state_11277;
(statearr_11291[(10)] = inst_11252);

return statearr_11291;
})();
var statearr_11292_13108 = state_11277__$1;
(statearr_11292_13108[(2)] = null);

(statearr_11292_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (9))){
var state_11277__$1 = state_11277;
var statearr_11294_13109 = state_11277__$1;
(statearr_11294_13109[(2)] = null);

(statearr_11294_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (5))){
var state_11277__$1 = state_11277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11296_13110 = state_11277__$1;
(statearr_11296_13110[(1)] = (8));

} else {
var statearr_11297_13111 = state_11277__$1;
(statearr_11297_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (14))){
var inst_11255 = (state_11277[(8)]);
var inst_11255__$1 = (state_11277[(2)]);
var inst_11256 = (inst_11255__$1 == null);
var inst_11257 = cljs.core.not(inst_11256);
var state_11277__$1 = (function (){var statearr_11298 = state_11277;
(statearr_11298[(8)] = inst_11255__$1);

return statearr_11298;
})();
if(inst_11257){
var statearr_11299_13112 = state_11277__$1;
(statearr_11299_13112[(1)] = (15));

} else {
var statearr_11300_13113 = state_11277__$1;
(statearr_11300_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (16))){
var state_11277__$1 = state_11277;
var statearr_11301_13114 = state_11277__$1;
(statearr_11301_13114[(2)] = false);

(statearr_11301_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (10))){
var inst_11249 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11302_13115 = state_11277__$1;
(statearr_11302_13115[(2)] = inst_11249);

(statearr_11302_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (18))){
var inst_11260 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11303_13116 = state_11277__$1;
(statearr_11303_13116[(2)] = inst_11260);

(statearr_11303_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (8))){
var inst_11246 = cljs.core.async.close_BANG_(to);
var state_11277__$1 = state_11277;
var statearr_11304_13117 = state_11277__$1;
(statearr_11304_13117[(2)] = inst_11246);

(statearr_11304_13117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11305[(1)] = (1));

return statearr_11305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11277){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11277);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11306){var ex__10883__auto__ = e11306;
var statearr_11307_13118 = state_11277;
(statearr_11307_13118[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11277[(4)]))){
var statearr_11308_13119 = state_11277;
(statearr_11308_13119[(1)] = cljs.core.first((state_11277[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11277;
state_11277 = G__13120;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11309 = f__10974__auto__();
(statearr_11309[(6)] = c__10973__auto__);

return statearr_11309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11311 = arguments.length;
switch (G__11311) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__11313 = arguments.length;
switch (G__11313) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__11315 = arguments.length;
switch (G__11315) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10973__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11341){
var state_val_11342 = (state_11341[(1)]);
if((state_val_11342 === (7))){
var inst_11337 = (state_11341[(2)]);
var state_11341__$1 = state_11341;
var statearr_11351_13125 = state_11341__$1;
(statearr_11351_13125[(2)] = inst_11337);

(statearr_11351_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (1))){
var state_11341__$1 = state_11341;
var statearr_11356_13126 = state_11341__$1;
(statearr_11356_13126[(2)] = null);

(statearr_11356_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (4))){
var inst_11318 = (state_11341[(7)]);
var inst_11318__$1 = (state_11341[(2)]);
var inst_11319 = (inst_11318__$1 == null);
var state_11341__$1 = (function (){var statearr_11357 = state_11341;
(statearr_11357[(7)] = inst_11318__$1);

return statearr_11357;
})();
if(cljs.core.truth_(inst_11319)){
var statearr_11358_13127 = state_11341__$1;
(statearr_11358_13127[(1)] = (5));

} else {
var statearr_11359_13128 = state_11341__$1;
(statearr_11359_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (13))){
var state_11341__$1 = state_11341;
var statearr_11360_13129 = state_11341__$1;
(statearr_11360_13129[(2)] = null);

(statearr_11360_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (6))){
var inst_11318 = (state_11341[(7)]);
var inst_11324 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11318) : p.call(null,inst_11318));
var state_11341__$1 = state_11341;
if(cljs.core.truth_(inst_11324)){
var statearr_11363_13130 = state_11341__$1;
(statearr_11363_13130[(1)] = (9));

} else {
var statearr_11364_13131 = state_11341__$1;
(statearr_11364_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (3))){
var inst_11339 = (state_11341[(2)]);
var state_11341__$1 = state_11341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11341__$1,inst_11339);
} else {
if((state_val_11342 === (12))){
var state_11341__$1 = state_11341;
var statearr_11365_13132 = state_11341__$1;
(statearr_11365_13132[(2)] = null);

(statearr_11365_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (2))){
var state_11341__$1 = state_11341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11341__$1,(4),ch);
} else {
if((state_val_11342 === (11))){
var inst_11318 = (state_11341[(7)]);
var inst_11328 = (state_11341[(2)]);
var state_11341__$1 = state_11341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11341__$1,(8),inst_11328,inst_11318);
} else {
if((state_val_11342 === (9))){
var state_11341__$1 = state_11341;
var statearr_11366_13133 = state_11341__$1;
(statearr_11366_13133[(2)] = tc);

(statearr_11366_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (5))){
var inst_11321 = cljs.core.async.close_BANG_(tc);
var inst_11322 = cljs.core.async.close_BANG_(fc);
var state_11341__$1 = (function (){var statearr_11368 = state_11341;
(statearr_11368[(8)] = inst_11321);

return statearr_11368;
})();
var statearr_11369_13134 = state_11341__$1;
(statearr_11369_13134[(2)] = inst_11322);

(statearr_11369_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (14))){
var inst_11335 = (state_11341[(2)]);
var state_11341__$1 = state_11341;
var statearr_11381_13135 = state_11341__$1;
(statearr_11381_13135[(2)] = inst_11335);

(statearr_11381_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (10))){
var state_11341__$1 = state_11341;
var statearr_11383_13136 = state_11341__$1;
(statearr_11383_13136[(2)] = fc);

(statearr_11383_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (8))){
var inst_11330 = (state_11341[(2)]);
var state_11341__$1 = state_11341;
if(cljs.core.truth_(inst_11330)){
var statearr_11388_13137 = state_11341__$1;
(statearr_11388_13137[(1)] = (12));

} else {
var statearr_11390_13138 = state_11341__$1;
(statearr_11390_13138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_11393 = [null,null,null,null,null,null,null,null,null];
(statearr_11393[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11393[(1)] = (1));

return statearr_11393;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11341){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11341);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11398){var ex__10883__auto__ = e11398;
var statearr_11400_13139 = state_11341;
(statearr_11400_13139[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11341[(4)]))){
var statearr_11401_13140 = state_11341;
(statearr_11401_13140[(1)] = cljs.core.first((state_11341[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11341;
state_11341 = G__13141;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11402 = f__10974__auto__();
(statearr_11402[(6)] = c__10973__auto___13124);

return statearr_11402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11426){
var state_val_11427 = (state_11426[(1)]);
if((state_val_11427 === (7))){
var inst_11422 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
var statearr_11432_13142 = state_11426__$1;
(statearr_11432_13142[(2)] = inst_11422);

(statearr_11432_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (1))){
var inst_11405 = init;
var inst_11406 = inst_11405;
var state_11426__$1 = (function (){var statearr_11434 = state_11426;
(statearr_11434[(7)] = inst_11406);

return statearr_11434;
})();
var statearr_11435_13143 = state_11426__$1;
(statearr_11435_13143[(2)] = null);

(statearr_11435_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (4))){
var inst_11409 = (state_11426[(8)]);
var inst_11409__$1 = (state_11426[(2)]);
var inst_11410 = (inst_11409__$1 == null);
var state_11426__$1 = (function (){var statearr_11436 = state_11426;
(statearr_11436[(8)] = inst_11409__$1);

return statearr_11436;
})();
if(cljs.core.truth_(inst_11410)){
var statearr_11437_13144 = state_11426__$1;
(statearr_11437_13144[(1)] = (5));

} else {
var statearr_11438_13145 = state_11426__$1;
(statearr_11438_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (6))){
var inst_11406 = (state_11426[(7)]);
var inst_11413 = (state_11426[(9)]);
var inst_11409 = (state_11426[(8)]);
var inst_11413__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11406,inst_11409) : f.call(null,inst_11406,inst_11409));
var inst_11414 = cljs.core.reduced_QMARK_(inst_11413__$1);
var state_11426__$1 = (function (){var statearr_11442 = state_11426;
(statearr_11442[(9)] = inst_11413__$1);

return statearr_11442;
})();
if(inst_11414){
var statearr_11443_13146 = state_11426__$1;
(statearr_11443_13146[(1)] = (8));

} else {
var statearr_11444_13147 = state_11426__$1;
(statearr_11444_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (3))){
var inst_11424 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11426__$1,inst_11424);
} else {
if((state_val_11427 === (2))){
var state_11426__$1 = state_11426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11426__$1,(4),ch);
} else {
if((state_val_11427 === (9))){
var inst_11413 = (state_11426[(9)]);
var inst_11406 = inst_11413;
var state_11426__$1 = (function (){var statearr_11445 = state_11426;
(statearr_11445[(7)] = inst_11406);

return statearr_11445;
})();
var statearr_11446_13148 = state_11426__$1;
(statearr_11446_13148[(2)] = null);

(statearr_11446_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (5))){
var inst_11406 = (state_11426[(7)]);
var state_11426__$1 = state_11426;
var statearr_11453_13149 = state_11426__$1;
(statearr_11453_13149[(2)] = inst_11406);

(statearr_11453_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (10))){
var inst_11420 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
var statearr_11454_13150 = state_11426__$1;
(statearr_11454_13150[(2)] = inst_11420);

(statearr_11454_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (8))){
var inst_11413 = (state_11426[(9)]);
var inst_11416 = cljs.core.deref(inst_11413);
var state_11426__$1 = state_11426;
var statearr_11455_13151 = state_11426__$1;
(statearr_11455_13151[(2)] = inst_11416);

(statearr_11455_13151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__10880__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10880__auto____0 = (function (){
var statearr_11456 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11456[(0)] = cljs$core$async$reduce_$_state_machine__10880__auto__);

(statearr_11456[(1)] = (1));

return statearr_11456;
});
var cljs$core$async$reduce_$_state_machine__10880__auto____1 = (function (state_11426){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11426);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11457){var ex__10883__auto__ = e11457;
var statearr_11458_13152 = state_11426;
(statearr_11458_13152[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11426[(4)]))){
var statearr_11459_13153 = state_11426;
(statearr_11459_13153[(1)] = cljs.core.first((state_11426[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11426;
state_11426 = G__13154;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10880__auto__ = function(state_11426){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10880__auto____1.call(this,state_11426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10880__auto____0;
cljs$core$async$reduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10880__auto____1;
return cljs$core$async$reduce_$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11466 = f__10974__auto__();
(statearr_11466[(6)] = c__10973__auto__);

return statearr_11466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11472){
var state_val_11473 = (state_11472[(1)]);
if((state_val_11473 === (1))){
var inst_11467 = cljs.core.async.reduce(f__$1,init,ch);
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11472__$1,(2),inst_11467);
} else {
if((state_val_11473 === (2))){
var inst_11469 = (state_11472[(2)]);
var inst_11470 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11469) : f__$1.call(null,inst_11469));
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11472__$1,inst_11470);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10880__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10880__auto____0 = (function (){
var statearr_11474 = [null,null,null,null,null,null,null];
(statearr_11474[(0)] = cljs$core$async$transduce_$_state_machine__10880__auto__);

(statearr_11474[(1)] = (1));

return statearr_11474;
});
var cljs$core$async$transduce_$_state_machine__10880__auto____1 = (function (state_11472){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11472);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11475){var ex__10883__auto__ = e11475;
var statearr_11476_13155 = state_11472;
(statearr_11476_13155[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11472[(4)]))){
var statearr_11477_13156 = state_11472;
(statearr_11477_13156[(1)] = cljs.core.first((state_11472[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11472;
state_11472 = G__13157;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10880__auto__ = function(state_11472){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10880__auto____1.call(this,state_11472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10880__auto____0;
cljs$core$async$transduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10880__auto____1;
return cljs$core$async$transduce_$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11488 = f__10974__auto__();
(statearr_11488[(6)] = c__10973__auto__);

return statearr_11488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__11490 = arguments.length;
switch (G__11490) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11516){
var state_val_11517 = (state_11516[(1)]);
if((state_val_11517 === (7))){
var inst_11498 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11518_13159 = state_11516__$1;
(statearr_11518_13159[(2)] = inst_11498);

(statearr_11518_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (1))){
var inst_11491 = cljs.core.seq(coll);
var inst_11492 = inst_11491;
var state_11516__$1 = (function (){var statearr_11520 = state_11516;
(statearr_11520[(7)] = inst_11492);

return statearr_11520;
})();
var statearr_11521_13160 = state_11516__$1;
(statearr_11521_13160[(2)] = null);

(statearr_11521_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (4))){
var inst_11492 = (state_11516[(7)]);
var inst_11496 = cljs.core.first(inst_11492);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11516__$1,(7),ch,inst_11496);
} else {
if((state_val_11517 === (13))){
var inst_11510 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11522_13161 = state_11516__$1;
(statearr_11522_13161[(2)] = inst_11510);

(statearr_11522_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (6))){
var inst_11501 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
if(cljs.core.truth_(inst_11501)){
var statearr_11523_13162 = state_11516__$1;
(statearr_11523_13162[(1)] = (8));

} else {
var statearr_11524_13163 = state_11516__$1;
(statearr_11524_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (3))){
var inst_11514 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11516__$1,inst_11514);
} else {
if((state_val_11517 === (12))){
var state_11516__$1 = state_11516;
var statearr_11525_13164 = state_11516__$1;
(statearr_11525_13164[(2)] = null);

(statearr_11525_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (2))){
var inst_11492 = (state_11516[(7)]);
var state_11516__$1 = state_11516;
if(cljs.core.truth_(inst_11492)){
var statearr_11527_13165 = state_11516__$1;
(statearr_11527_13165[(1)] = (4));

} else {
var statearr_11528_13166 = state_11516__$1;
(statearr_11528_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (11))){
var inst_11507 = cljs.core.async.close_BANG_(ch);
var state_11516__$1 = state_11516;
var statearr_11530_13167 = state_11516__$1;
(statearr_11530_13167[(2)] = inst_11507);

(statearr_11530_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (9))){
var state_11516__$1 = state_11516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11531_13168 = state_11516__$1;
(statearr_11531_13168[(1)] = (11));

} else {
var statearr_11532_13169 = state_11516__$1;
(statearr_11532_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (5))){
var inst_11492 = (state_11516[(7)]);
var state_11516__$1 = state_11516;
var statearr_11533_13170 = state_11516__$1;
(statearr_11533_13170[(2)] = inst_11492);

(statearr_11533_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (10))){
var inst_11512 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11534_13171 = state_11516__$1;
(statearr_11534_13171[(2)] = inst_11512);

(statearr_11534_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (8))){
var inst_11492 = (state_11516[(7)]);
var inst_11503 = cljs.core.next(inst_11492);
var inst_11492__$1 = inst_11503;
var state_11516__$1 = (function (){var statearr_11535 = state_11516;
(statearr_11535[(7)] = inst_11492__$1);

return statearr_11535;
})();
var statearr_11536_13172 = state_11516__$1;
(statearr_11536_13172[(2)] = null);

(statearr_11536_13172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_11537 = [null,null,null,null,null,null,null,null];
(statearr_11537[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11537[(1)] = (1));

return statearr_11537;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11516){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11516);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11538){var ex__10883__auto__ = e11538;
var statearr_11539_13173 = state_11516;
(statearr_11539_13173[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11516[(4)]))){
var statearr_11540_13174 = state_11516;
(statearr_11540_13174[(1)] = cljs.core.first((state_11516[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11516;
state_11516 = G__13175;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11542 = f__10974__auto__();
(statearr_11542[(6)] = c__10973__auto__);

return statearr_11542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11549 = arguments.length;
switch (G__11549) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_13177 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_13177(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13178 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_13178(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13179 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_13179(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13180 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_13180(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11576 = (function (ch,cs,meta11577){
this.ch = ch;
this.cs = cs;
this.meta11577 = meta11577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11578,meta11577__$1){
var self__ = this;
var _11578__$1 = this;
return (new cljs.core.async.t_cljs$core$async11576(self__.ch,self__.cs,meta11577__$1));
}));

(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11578){
var self__ = this;
var _11578__$1 = this;
return self__.meta11577;
}));

(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11576.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11577","meta11577",1094771276,null)], null);
}));

(cljs.core.async.t_cljs$core$async11576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11576");

(cljs.core.async.t_cljs$core$async11576.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11576.
 */
cljs.core.async.__GT_t_cljs$core$async11576 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11576(ch__$1,cs__$1,meta11577){
return (new cljs.core.async.t_cljs$core$async11576(ch__$1,cs__$1,meta11577));
});

}

return (new cljs.core.async.t_cljs$core$async11576(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__10973__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_11723){
var state_val_11724 = (state_11723[(1)]);
if((state_val_11724 === (7))){
var inst_11719 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11725_13182 = state_11723__$1;
(statearr_11725_13182[(2)] = inst_11719);

(statearr_11725_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (20))){
var inst_11619 = (state_11723[(7)]);
var inst_11632 = cljs.core.first(inst_11619);
var inst_11633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11632,(0),null);
var inst_11634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11632,(1),null);
var state_11723__$1 = (function (){var statearr_11726 = state_11723;
(statearr_11726[(8)] = inst_11633);

return statearr_11726;
})();
if(cljs.core.truth_(inst_11634)){
var statearr_11727_13183 = state_11723__$1;
(statearr_11727_13183[(1)] = (22));

} else {
var statearr_11728_13184 = state_11723__$1;
(statearr_11728_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (27))){
var inst_11585 = (state_11723[(9)]);
var inst_11671 = (state_11723[(10)]);
var inst_11665 = (state_11723[(11)]);
var inst_11663 = (state_11723[(12)]);
var inst_11671__$1 = cljs.core._nth(inst_11663,inst_11665);
var inst_11672 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11671__$1,inst_11585,done);
var state_11723__$1 = (function (){var statearr_11729 = state_11723;
(statearr_11729[(10)] = inst_11671__$1);

return statearr_11729;
})();
if(cljs.core.truth_(inst_11672)){
var statearr_11730_13185 = state_11723__$1;
(statearr_11730_13185[(1)] = (30));

} else {
var statearr_11731_13186 = state_11723__$1;
(statearr_11731_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (1))){
var state_11723__$1 = state_11723;
var statearr_11732_13187 = state_11723__$1;
(statearr_11732_13187[(2)] = null);

(statearr_11732_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (24))){
var inst_11619 = (state_11723[(7)]);
var inst_11639 = (state_11723[(2)]);
var inst_11640 = cljs.core.next(inst_11619);
var inst_11594 = inst_11640;
var inst_11595 = null;
var inst_11596 = (0);
var inst_11597 = (0);
var state_11723__$1 = (function (){var statearr_11733 = state_11723;
(statearr_11733[(13)] = inst_11595);

(statearr_11733[(14)] = inst_11597);

(statearr_11733[(15)] = inst_11594);

(statearr_11733[(16)] = inst_11639);

(statearr_11733[(17)] = inst_11596);

return statearr_11733;
})();
var statearr_11734_13188 = state_11723__$1;
(statearr_11734_13188[(2)] = null);

(statearr_11734_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (39))){
var state_11723__$1 = state_11723;
var statearr_11738_13189 = state_11723__$1;
(statearr_11738_13189[(2)] = null);

(statearr_11738_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (4))){
var inst_11585 = (state_11723[(9)]);
var inst_11585__$1 = (state_11723[(2)]);
var inst_11586 = (inst_11585__$1 == null);
var state_11723__$1 = (function (){var statearr_11739 = state_11723;
(statearr_11739[(9)] = inst_11585__$1);

return statearr_11739;
})();
if(cljs.core.truth_(inst_11586)){
var statearr_11740_13190 = state_11723__$1;
(statearr_11740_13190[(1)] = (5));

} else {
var statearr_11741_13191 = state_11723__$1;
(statearr_11741_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (15))){
var inst_11595 = (state_11723[(13)]);
var inst_11597 = (state_11723[(14)]);
var inst_11594 = (state_11723[(15)]);
var inst_11596 = (state_11723[(17)]);
var inst_11615 = (state_11723[(2)]);
var inst_11616 = (inst_11597 + (1));
var tmp11735 = inst_11595;
var tmp11736 = inst_11594;
var tmp11737 = inst_11596;
var inst_11594__$1 = tmp11736;
var inst_11595__$1 = tmp11735;
var inst_11596__$1 = tmp11737;
var inst_11597__$1 = inst_11616;
var state_11723__$1 = (function (){var statearr_11746 = state_11723;
(statearr_11746[(18)] = inst_11615);

(statearr_11746[(13)] = inst_11595__$1);

(statearr_11746[(14)] = inst_11597__$1);

(statearr_11746[(15)] = inst_11594__$1);

(statearr_11746[(17)] = inst_11596__$1);

return statearr_11746;
})();
var statearr_11747_13192 = state_11723__$1;
(statearr_11747_13192[(2)] = null);

(statearr_11747_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (21))){
var inst_11643 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11761_13193 = state_11723__$1;
(statearr_11761_13193[(2)] = inst_11643);

(statearr_11761_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (31))){
var inst_11671 = (state_11723[(10)]);
var inst_11677 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11671);
var state_11723__$1 = state_11723;
var statearr_11762_13194 = state_11723__$1;
(statearr_11762_13194[(2)] = inst_11677);

(statearr_11762_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (32))){
var inst_11662 = (state_11723[(19)]);
var inst_11664 = (state_11723[(20)]);
var inst_11665 = (state_11723[(11)]);
var inst_11663 = (state_11723[(12)]);
var inst_11679 = (state_11723[(2)]);
var inst_11680 = (inst_11665 + (1));
var tmp11758 = inst_11662;
var tmp11759 = inst_11664;
var tmp11760 = inst_11663;
var inst_11662__$1 = tmp11758;
var inst_11663__$1 = tmp11760;
var inst_11664__$1 = tmp11759;
var inst_11665__$1 = inst_11680;
var state_11723__$1 = (function (){var statearr_11763 = state_11723;
(statearr_11763[(19)] = inst_11662__$1);

(statearr_11763[(20)] = inst_11664__$1);

(statearr_11763[(11)] = inst_11665__$1);

(statearr_11763[(21)] = inst_11679);

(statearr_11763[(12)] = inst_11663__$1);

return statearr_11763;
})();
var statearr_11783_13195 = state_11723__$1;
(statearr_11783_13195[(2)] = null);

(statearr_11783_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (40))){
var inst_11692 = (state_11723[(22)]);
var inst_11696 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11692);
var state_11723__$1 = state_11723;
var statearr_11784_13196 = state_11723__$1;
(statearr_11784_13196[(2)] = inst_11696);

(statearr_11784_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (33))){
var inst_11683 = (state_11723[(23)]);
var inst_11685 = cljs.core.chunked_seq_QMARK_(inst_11683);
var state_11723__$1 = state_11723;
if(inst_11685){
var statearr_11788_13197 = state_11723__$1;
(statearr_11788_13197[(1)] = (36));

} else {
var statearr_11789_13198 = state_11723__$1;
(statearr_11789_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (13))){
var inst_11609 = (state_11723[(24)]);
var inst_11612 = cljs.core.async.close_BANG_(inst_11609);
var state_11723__$1 = state_11723;
var statearr_11796_13199 = state_11723__$1;
(statearr_11796_13199[(2)] = inst_11612);

(statearr_11796_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (22))){
var inst_11633 = (state_11723[(8)]);
var inst_11636 = cljs.core.async.close_BANG_(inst_11633);
var state_11723__$1 = state_11723;
var statearr_11799_13200 = state_11723__$1;
(statearr_11799_13200[(2)] = inst_11636);

(statearr_11799_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (36))){
var inst_11683 = (state_11723[(23)]);
var inst_11687 = cljs.core.chunk_first(inst_11683);
var inst_11688 = cljs.core.chunk_rest(inst_11683);
var inst_11689 = cljs.core.count(inst_11687);
var inst_11662 = inst_11688;
var inst_11663 = inst_11687;
var inst_11664 = inst_11689;
var inst_11665 = (0);
var state_11723__$1 = (function (){var statearr_11801 = state_11723;
(statearr_11801[(19)] = inst_11662);

(statearr_11801[(20)] = inst_11664);

(statearr_11801[(11)] = inst_11665);

(statearr_11801[(12)] = inst_11663);

return statearr_11801;
})();
var statearr_11804_13201 = state_11723__$1;
(statearr_11804_13201[(2)] = null);

(statearr_11804_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (41))){
var inst_11683 = (state_11723[(23)]);
var inst_11698 = (state_11723[(2)]);
var inst_11699 = cljs.core.next(inst_11683);
var inst_11662 = inst_11699;
var inst_11663 = null;
var inst_11664 = (0);
var inst_11665 = (0);
var state_11723__$1 = (function (){var statearr_11805 = state_11723;
(statearr_11805[(25)] = inst_11698);

(statearr_11805[(19)] = inst_11662);

(statearr_11805[(20)] = inst_11664);

(statearr_11805[(11)] = inst_11665);

(statearr_11805[(12)] = inst_11663);

return statearr_11805;
})();
var statearr_11807_13202 = state_11723__$1;
(statearr_11807_13202[(2)] = null);

(statearr_11807_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (43))){
var state_11723__$1 = state_11723;
var statearr_11808_13203 = state_11723__$1;
(statearr_11808_13203[(2)] = null);

(statearr_11808_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (29))){
var inst_11707 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11810_13204 = state_11723__$1;
(statearr_11810_13204[(2)] = inst_11707);

(statearr_11810_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (44))){
var inst_11716 = (state_11723[(2)]);
var state_11723__$1 = (function (){var statearr_11811 = state_11723;
(statearr_11811[(26)] = inst_11716);

return statearr_11811;
})();
var statearr_11812_13205 = state_11723__$1;
(statearr_11812_13205[(2)] = null);

(statearr_11812_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (6))){
var inst_11653 = (state_11723[(27)]);
var inst_11652 = cljs.core.deref(cs);
var inst_11653__$1 = cljs.core.keys(inst_11652);
var inst_11654 = cljs.core.count(inst_11653__$1);
var inst_11655 = cljs.core.reset_BANG_(dctr,inst_11654);
var inst_11661 = cljs.core.seq(inst_11653__$1);
var inst_11662 = inst_11661;
var inst_11663 = null;
var inst_11664 = (0);
var inst_11665 = (0);
var state_11723__$1 = (function (){var statearr_11813 = state_11723;
(statearr_11813[(19)] = inst_11662);

(statearr_11813[(28)] = inst_11655);

(statearr_11813[(20)] = inst_11664);

(statearr_11813[(11)] = inst_11665);

(statearr_11813[(12)] = inst_11663);

(statearr_11813[(27)] = inst_11653__$1);

return statearr_11813;
})();
var statearr_11814_13206 = state_11723__$1;
(statearr_11814_13206[(2)] = null);

(statearr_11814_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (28))){
var inst_11662 = (state_11723[(19)]);
var inst_11683 = (state_11723[(23)]);
var inst_11683__$1 = cljs.core.seq(inst_11662);
var state_11723__$1 = (function (){var statearr_11815 = state_11723;
(statearr_11815[(23)] = inst_11683__$1);

return statearr_11815;
})();
if(inst_11683__$1){
var statearr_11816_13207 = state_11723__$1;
(statearr_11816_13207[(1)] = (33));

} else {
var statearr_11817_13208 = state_11723__$1;
(statearr_11817_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (25))){
var inst_11664 = (state_11723[(20)]);
var inst_11665 = (state_11723[(11)]);
var inst_11667 = (inst_11665 < inst_11664);
var inst_11669 = inst_11667;
var state_11723__$1 = state_11723;
if(cljs.core.truth_(inst_11669)){
var statearr_11818_13209 = state_11723__$1;
(statearr_11818_13209[(1)] = (27));

} else {
var statearr_11819_13210 = state_11723__$1;
(statearr_11819_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (34))){
var state_11723__$1 = state_11723;
var statearr_11822_13211 = state_11723__$1;
(statearr_11822_13211[(2)] = null);

(statearr_11822_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (17))){
var state_11723__$1 = state_11723;
var statearr_11826_13212 = state_11723__$1;
(statearr_11826_13212[(2)] = null);

(statearr_11826_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (3))){
var inst_11721 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11723__$1,inst_11721);
} else {
if((state_val_11724 === (12))){
var inst_11648 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11828_13213 = state_11723__$1;
(statearr_11828_13213[(2)] = inst_11648);

(statearr_11828_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (2))){
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11723__$1,(4),ch);
} else {
if((state_val_11724 === (23))){
var state_11723__$1 = state_11723;
var statearr_11831_13214 = state_11723__$1;
(statearr_11831_13214[(2)] = null);

(statearr_11831_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (35))){
var inst_11705 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11832_13215 = state_11723__$1;
(statearr_11832_13215[(2)] = inst_11705);

(statearr_11832_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (19))){
var inst_11619 = (state_11723[(7)]);
var inst_11624 = cljs.core.chunk_first(inst_11619);
var inst_11625 = cljs.core.chunk_rest(inst_11619);
var inst_11626 = cljs.core.count(inst_11624);
var inst_11594 = inst_11625;
var inst_11595 = inst_11624;
var inst_11596 = inst_11626;
var inst_11597 = (0);
var state_11723__$1 = (function (){var statearr_11833 = state_11723;
(statearr_11833[(13)] = inst_11595);

(statearr_11833[(14)] = inst_11597);

(statearr_11833[(15)] = inst_11594);

(statearr_11833[(17)] = inst_11596);

return statearr_11833;
})();
var statearr_11834_13216 = state_11723__$1;
(statearr_11834_13216[(2)] = null);

(statearr_11834_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (11))){
var inst_11619 = (state_11723[(7)]);
var inst_11594 = (state_11723[(15)]);
var inst_11619__$1 = cljs.core.seq(inst_11594);
var state_11723__$1 = (function (){var statearr_11837 = state_11723;
(statearr_11837[(7)] = inst_11619__$1);

return statearr_11837;
})();
if(inst_11619__$1){
var statearr_11838_13217 = state_11723__$1;
(statearr_11838_13217[(1)] = (16));

} else {
var statearr_11839_13218 = state_11723__$1;
(statearr_11839_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (9))){
var inst_11650 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11840_13219 = state_11723__$1;
(statearr_11840_13219[(2)] = inst_11650);

(statearr_11840_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (5))){
var inst_11592 = cljs.core.deref(cs);
var inst_11593 = cljs.core.seq(inst_11592);
var inst_11594 = inst_11593;
var inst_11595 = null;
var inst_11596 = (0);
var inst_11597 = (0);
var state_11723__$1 = (function (){var statearr_11841 = state_11723;
(statearr_11841[(13)] = inst_11595);

(statearr_11841[(14)] = inst_11597);

(statearr_11841[(15)] = inst_11594);

(statearr_11841[(17)] = inst_11596);

return statearr_11841;
})();
var statearr_11842_13220 = state_11723__$1;
(statearr_11842_13220[(2)] = null);

(statearr_11842_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (14))){
var state_11723__$1 = state_11723;
var statearr_11843_13221 = state_11723__$1;
(statearr_11843_13221[(2)] = null);

(statearr_11843_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (45))){
var inst_11713 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11844_13222 = state_11723__$1;
(statearr_11844_13222[(2)] = inst_11713);

(statearr_11844_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (26))){
var inst_11653 = (state_11723[(27)]);
var inst_11709 = (state_11723[(2)]);
var inst_11710 = cljs.core.seq(inst_11653);
var state_11723__$1 = (function (){var statearr_11845 = state_11723;
(statearr_11845[(29)] = inst_11709);

return statearr_11845;
})();
if(inst_11710){
var statearr_11846_13223 = state_11723__$1;
(statearr_11846_13223[(1)] = (42));

} else {
var statearr_11847_13224 = state_11723__$1;
(statearr_11847_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (16))){
var inst_11619 = (state_11723[(7)]);
var inst_11622 = cljs.core.chunked_seq_QMARK_(inst_11619);
var state_11723__$1 = state_11723;
if(inst_11622){
var statearr_11852_13225 = state_11723__$1;
(statearr_11852_13225[(1)] = (19));

} else {
var statearr_11853_13226 = state_11723__$1;
(statearr_11853_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (38))){
var inst_11702 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11858_13227 = state_11723__$1;
(statearr_11858_13227[(2)] = inst_11702);

(statearr_11858_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (30))){
var state_11723__$1 = state_11723;
var statearr_11864_13228 = state_11723__$1;
(statearr_11864_13228[(2)] = null);

(statearr_11864_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (10))){
var inst_11595 = (state_11723[(13)]);
var inst_11597 = (state_11723[(14)]);
var inst_11605 = cljs.core._nth(inst_11595,inst_11597);
var inst_11609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11605,(0),null);
var inst_11610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11605,(1),null);
var state_11723__$1 = (function (){var statearr_11865 = state_11723;
(statearr_11865[(24)] = inst_11609);

return statearr_11865;
})();
if(cljs.core.truth_(inst_11610)){
var statearr_11866_13229 = state_11723__$1;
(statearr_11866_13229[(1)] = (13));

} else {
var statearr_11867_13230 = state_11723__$1;
(statearr_11867_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (18))){
var inst_11646 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11868_13231 = state_11723__$1;
(statearr_11868_13231[(2)] = inst_11646);

(statearr_11868_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (42))){
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11723__$1,(45),dchan);
} else {
if((state_val_11724 === (37))){
var inst_11692 = (state_11723[(22)]);
var inst_11585 = (state_11723[(9)]);
var inst_11683 = (state_11723[(23)]);
var inst_11692__$1 = cljs.core.first(inst_11683);
var inst_11693 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11692__$1,inst_11585,done);
var state_11723__$1 = (function (){var statearr_11869 = state_11723;
(statearr_11869[(22)] = inst_11692__$1);

return statearr_11869;
})();
if(cljs.core.truth_(inst_11693)){
var statearr_11870_13232 = state_11723__$1;
(statearr_11870_13232[(1)] = (39));

} else {
var statearr_11871_13233 = state_11723__$1;
(statearr_11871_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (8))){
var inst_11597 = (state_11723[(14)]);
var inst_11596 = (state_11723[(17)]);
var inst_11599 = (inst_11597 < inst_11596);
var inst_11600 = inst_11599;
var state_11723__$1 = state_11723;
if(cljs.core.truth_(inst_11600)){
var statearr_11872_13234 = state_11723__$1;
(statearr_11872_13234[(1)] = (10));

} else {
var statearr_11873_13235 = state_11723__$1;
(statearr_11873_13235[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__10880__auto__ = null;
var cljs$core$async$mult_$_state_machine__10880__auto____0 = (function (){
var statearr_11878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11878[(0)] = cljs$core$async$mult_$_state_machine__10880__auto__);

(statearr_11878[(1)] = (1));

return statearr_11878;
});
var cljs$core$async$mult_$_state_machine__10880__auto____1 = (function (state_11723){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11723);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11881){var ex__10883__auto__ = e11881;
var statearr_11882_13236 = state_11723;
(statearr_11882_13236[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11723[(4)]))){
var statearr_11884_13237 = state_11723;
(statearr_11884_13237[(1)] = cljs.core.first((state_11723[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11723;
state_11723 = G__13238;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10880__auto__ = function(state_11723){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10880__auto____1.call(this,state_11723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10880__auto____0;
cljs$core$async$mult_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10880__auto____1;
return cljs$core$async$mult_$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_11888 = f__10974__auto__();
(statearr_11888[(6)] = c__10973__auto___13181);

return statearr_11888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11890 = arguments.length;
switch (G__11890) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_13240 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_13240(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13241 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_13241(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13242 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13242(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13243 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_13243(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13244 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13244(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13245 = arguments.length;
var i__4737__auto___13246 = (0);
while(true){
if((i__4737__auto___13246 < len__4736__auto___13245)){
args__4742__auto__.push((arguments[i__4737__auto___13246]));

var G__13247 = (i__4737__auto___13246 + (1));
i__4737__auto___13246 = G__13247;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11908){
var map__11909 = p__11908;
var map__11909__$1 = (((((!((map__11909 == null))))?(((((map__11909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11909):map__11909);
var opts = map__11909__$1;
var statearr_11911_13248 = state;
(statearr_11911_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11912_13249 = state;
(statearr_11912_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11913_13250 = state;
(statearr_11913_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11892){
var G__11893 = cljs.core.first(seq11892);
var seq11892__$1 = cljs.core.next(seq11892);
var G__11894 = cljs.core.first(seq11892__$1);
var seq11892__$2 = cljs.core.next(seq11892__$1);
var G__11895 = cljs.core.first(seq11892__$2);
var seq11892__$3 = cljs.core.next(seq11892__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11893,G__11894,G__11895,seq11892__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11914 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11915){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11915 = meta11915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11916,meta11915__$1){
var self__ = this;
var _11916__$1 = this;
return (new cljs.core.async.t_cljs$core$async11914(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11915__$1));
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11916){
var self__ = this;
var _11916__$1 = this;
return self__.meta11915;
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11915","meta11915",1238232622,null)], null);
}));

(cljs.core.async.t_cljs$core$async11914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11914");

(cljs.core.async.t_cljs$core$async11914.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11914.
 */
cljs.core.async.__GT_t_cljs$core$async11914 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11914(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11915){
return (new cljs.core.async.t_cljs$core$async11914(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11915));
});

}

return (new cljs.core.async.t_cljs$core$async11914(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10973__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12036){
var state_val_12037 = (state_12036[(1)]);
if((state_val_12037 === (7))){
var inst_11945 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12038_13252 = state_12036__$1;
(statearr_12038_13252[(2)] = inst_11945);

(statearr_12038_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (20))){
var inst_11957 = (state_12036[(7)]);
var state_12036__$1 = state_12036;
var statearr_12039_13253 = state_12036__$1;
(statearr_12039_13253[(2)] = inst_11957);

(statearr_12039_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (27))){
var state_12036__$1 = state_12036;
var statearr_12040_13254 = state_12036__$1;
(statearr_12040_13254[(2)] = null);

(statearr_12040_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (1))){
var inst_11923 = (state_12036[(8)]);
var inst_11923__$1 = calc_state();
var inst_11931 = (inst_11923__$1 == null);
var inst_11932 = cljs.core.not(inst_11931);
var state_12036__$1 = (function (){var statearr_12041 = state_12036;
(statearr_12041[(8)] = inst_11923__$1);

return statearr_12041;
})();
if(inst_11932){
var statearr_12042_13255 = state_12036__$1;
(statearr_12042_13255[(1)] = (2));

} else {
var statearr_12043_13256 = state_12036__$1;
(statearr_12043_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (24))){
var inst_12010 = (state_12036[(9)]);
var inst_11984 = (state_12036[(10)]);
var inst_11993 = (state_12036[(11)]);
var inst_12010__$1 = (inst_11984.cljs$core$IFn$_invoke$arity$1 ? inst_11984.cljs$core$IFn$_invoke$arity$1(inst_11993) : inst_11984.call(null,inst_11993));
var state_12036__$1 = (function (){var statearr_12044 = state_12036;
(statearr_12044[(9)] = inst_12010__$1);

return statearr_12044;
})();
if(cljs.core.truth_(inst_12010__$1)){
var statearr_12045_13257 = state_12036__$1;
(statearr_12045_13257[(1)] = (29));

} else {
var statearr_12046_13258 = state_12036__$1;
(statearr_12046_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (4))){
var inst_11948 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11948)){
var statearr_12047_13259 = state_12036__$1;
(statearr_12047_13259[(1)] = (8));

} else {
var statearr_12048_13260 = state_12036__$1;
(statearr_12048_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (15))){
var inst_11977 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11977)){
var statearr_12049_13261 = state_12036__$1;
(statearr_12049_13261[(1)] = (19));

} else {
var statearr_12050_13262 = state_12036__$1;
(statearr_12050_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (21))){
var inst_11983 = (state_12036[(12)]);
var inst_11983__$1 = (state_12036[(2)]);
var inst_11984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11983__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11983__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11983__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12036__$1 = (function (){var statearr_12051 = state_12036;
(statearr_12051[(13)] = inst_11985);

(statearr_12051[(10)] = inst_11984);

(statearr_12051[(12)] = inst_11983__$1);

return statearr_12051;
})();
return cljs.core.async.ioc_alts_BANG_(state_12036__$1,(22),inst_11986);
} else {
if((state_val_12037 === (31))){
var inst_12018 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12018)){
var statearr_12052_13263 = state_12036__$1;
(statearr_12052_13263[(1)] = (32));

} else {
var statearr_12053_13264 = state_12036__$1;
(statearr_12053_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (32))){
var inst_11992 = (state_12036[(14)]);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12036__$1,(35),out,inst_11992);
} else {
if((state_val_12037 === (33))){
var inst_11983 = (state_12036[(12)]);
var inst_11957 = inst_11983;
var state_12036__$1 = (function (){var statearr_12054 = state_12036;
(statearr_12054[(7)] = inst_11957);

return statearr_12054;
})();
var statearr_12055_13265 = state_12036__$1;
(statearr_12055_13265[(2)] = null);

(statearr_12055_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (13))){
var inst_11957 = (state_12036[(7)]);
var inst_11965 = inst_11957.cljs$lang$protocol_mask$partition0$;
var inst_11966 = (inst_11965 & (64));
var inst_11968 = inst_11957.cljs$core$ISeq$;
var inst_11969 = (cljs.core.PROTOCOL_SENTINEL === inst_11968);
var inst_11970 = ((inst_11966) || (inst_11969));
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11970)){
var statearr_12056_13266 = state_12036__$1;
(statearr_12056_13266[(1)] = (16));

} else {
var statearr_12057_13267 = state_12036__$1;
(statearr_12057_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (22))){
var inst_11992 = (state_12036[(14)]);
var inst_11993 = (state_12036[(11)]);
var inst_11991 = (state_12036[(2)]);
var inst_11992__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11991,(0),null);
var inst_11993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11991,(1),null);
var inst_11994 = (inst_11992__$1 == null);
var inst_11995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11993__$1,change);
var inst_11996 = ((inst_11994) || (inst_11995));
var state_12036__$1 = (function (){var statearr_12060 = state_12036;
(statearr_12060[(14)] = inst_11992__$1);

(statearr_12060[(11)] = inst_11993__$1);

return statearr_12060;
})();
if(cljs.core.truth_(inst_11996)){
var statearr_12062_13268 = state_12036__$1;
(statearr_12062_13268[(1)] = (23));

} else {
var statearr_12064_13269 = state_12036__$1;
(statearr_12064_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (36))){
var inst_11983 = (state_12036[(12)]);
var inst_11957 = inst_11983;
var state_12036__$1 = (function (){var statearr_12065 = state_12036;
(statearr_12065[(7)] = inst_11957);

return statearr_12065;
})();
var statearr_12066_13270 = state_12036__$1;
(statearr_12066_13270[(2)] = null);

(statearr_12066_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (29))){
var inst_12010 = (state_12036[(9)]);
var state_12036__$1 = state_12036;
var statearr_12070_13271 = state_12036__$1;
(statearr_12070_13271[(2)] = inst_12010);

(statearr_12070_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (6))){
var state_12036__$1 = state_12036;
var statearr_12074_13272 = state_12036__$1;
(statearr_12074_13272[(2)] = false);

(statearr_12074_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (28))){
var inst_12003 = (state_12036[(2)]);
var inst_12007 = calc_state();
var inst_11957 = inst_12007;
var state_12036__$1 = (function (){var statearr_12076 = state_12036;
(statearr_12076[(7)] = inst_11957);

(statearr_12076[(15)] = inst_12003);

return statearr_12076;
})();
var statearr_12077_13273 = state_12036__$1;
(statearr_12077_13273[(2)] = null);

(statearr_12077_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (25))){
var inst_12032 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12078_13274 = state_12036__$1;
(statearr_12078_13274[(2)] = inst_12032);

(statearr_12078_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (34))){
var inst_12030 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12080_13275 = state_12036__$1;
(statearr_12080_13275[(2)] = inst_12030);

(statearr_12080_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (17))){
var state_12036__$1 = state_12036;
var statearr_12083_13276 = state_12036__$1;
(statearr_12083_13276[(2)] = false);

(statearr_12083_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (3))){
var state_12036__$1 = state_12036;
var statearr_12085_13277 = state_12036__$1;
(statearr_12085_13277[(2)] = false);

(statearr_12085_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (12))){
var inst_12034 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12036__$1,inst_12034);
} else {
if((state_val_12037 === (2))){
var inst_11923 = (state_12036[(8)]);
var inst_11936 = inst_11923.cljs$lang$protocol_mask$partition0$;
var inst_11937 = (inst_11936 & (64));
var inst_11938 = inst_11923.cljs$core$ISeq$;
var inst_11939 = (cljs.core.PROTOCOL_SENTINEL === inst_11938);
var inst_11940 = ((inst_11937) || (inst_11939));
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11940)){
var statearr_12086_13278 = state_12036__$1;
(statearr_12086_13278[(1)] = (5));

} else {
var statearr_12087_13279 = state_12036__$1;
(statearr_12087_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (23))){
var inst_11992 = (state_12036[(14)]);
var inst_11998 = (inst_11992 == null);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11998)){
var statearr_12088_13280 = state_12036__$1;
(statearr_12088_13280[(1)] = (26));

} else {
var statearr_12089_13281 = state_12036__$1;
(statearr_12089_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (35))){
var inst_12021 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12021)){
var statearr_12090_13282 = state_12036__$1;
(statearr_12090_13282[(1)] = (36));

} else {
var statearr_12091_13283 = state_12036__$1;
(statearr_12091_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (19))){
var inst_11957 = (state_12036[(7)]);
var inst_11979 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11957);
var state_12036__$1 = state_12036;
var statearr_12092_13284 = state_12036__$1;
(statearr_12092_13284[(2)] = inst_11979);

(statearr_12092_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (11))){
var inst_11957 = (state_12036[(7)]);
var inst_11961 = (inst_11957 == null);
var inst_11962 = cljs.core.not(inst_11961);
var state_12036__$1 = state_12036;
if(inst_11962){
var statearr_12093_13285 = state_12036__$1;
(statearr_12093_13285[(1)] = (13));

} else {
var statearr_12094_13286 = state_12036__$1;
(statearr_12094_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (9))){
var inst_11923 = (state_12036[(8)]);
var state_12036__$1 = state_12036;
var statearr_12095_13287 = state_12036__$1;
(statearr_12095_13287[(2)] = inst_11923);

(statearr_12095_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (5))){
var state_12036__$1 = state_12036;
var statearr_12096_13288 = state_12036__$1;
(statearr_12096_13288[(2)] = true);

(statearr_12096_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (14))){
var state_12036__$1 = state_12036;
var statearr_12097_13289 = state_12036__$1;
(statearr_12097_13289[(2)] = false);

(statearr_12097_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (26))){
var inst_11993 = (state_12036[(11)]);
var inst_12000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11993);
var state_12036__$1 = state_12036;
var statearr_12098_13290 = state_12036__$1;
(statearr_12098_13290[(2)] = inst_12000);

(statearr_12098_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (16))){
var state_12036__$1 = state_12036;
var statearr_12099_13291 = state_12036__$1;
(statearr_12099_13291[(2)] = true);

(statearr_12099_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (38))){
var inst_12026 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12100_13292 = state_12036__$1;
(statearr_12100_13292[(2)] = inst_12026);

(statearr_12100_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (30))){
var inst_11985 = (state_12036[(13)]);
var inst_11984 = (state_12036[(10)]);
var inst_11993 = (state_12036[(11)]);
var inst_12013 = cljs.core.empty_QMARK_(inst_11984);
var inst_12014 = (inst_11985.cljs$core$IFn$_invoke$arity$1 ? inst_11985.cljs$core$IFn$_invoke$arity$1(inst_11993) : inst_11985.call(null,inst_11993));
var inst_12015 = cljs.core.not(inst_12014);
var inst_12016 = ((inst_12013) && (inst_12015));
var state_12036__$1 = state_12036;
var statearr_12101_13293 = state_12036__$1;
(statearr_12101_13293[(2)] = inst_12016);

(statearr_12101_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (10))){
var inst_11923 = (state_12036[(8)]);
var inst_11953 = (state_12036[(2)]);
var inst_11954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11953,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11953,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11953,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11957 = inst_11923;
var state_12036__$1 = (function (){var statearr_12102 = state_12036;
(statearr_12102[(7)] = inst_11957);

(statearr_12102[(16)] = inst_11955);

(statearr_12102[(17)] = inst_11956);

(statearr_12102[(18)] = inst_11954);

return statearr_12102;
})();
var statearr_12103_13294 = state_12036__$1;
(statearr_12103_13294[(2)] = null);

(statearr_12103_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (18))){
var inst_11974 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12104_13295 = state_12036__$1;
(statearr_12104_13295[(2)] = inst_11974);

(statearr_12104_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (37))){
var state_12036__$1 = state_12036;
var statearr_12105_13296 = state_12036__$1;
(statearr_12105_13296[(2)] = null);

(statearr_12105_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (8))){
var inst_11923 = (state_12036[(8)]);
var inst_11950 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11923);
var state_12036__$1 = state_12036;
var statearr_12106_13297 = state_12036__$1;
(statearr_12106_13297[(2)] = inst_11950);

(statearr_12106_13297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__10880__auto__ = null;
var cljs$core$async$mix_$_state_machine__10880__auto____0 = (function (){
var statearr_12107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12107[(0)] = cljs$core$async$mix_$_state_machine__10880__auto__);

(statearr_12107[(1)] = (1));

return statearr_12107;
});
var cljs$core$async$mix_$_state_machine__10880__auto____1 = (function (state_12036){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12036);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12109){var ex__10883__auto__ = e12109;
var statearr_12110_13298 = state_12036;
(statearr_12110_13298[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12036[(4)]))){
var statearr_12111_13299 = state_12036;
(statearr_12111_13299[(1)] = cljs.core.first((state_12036[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12036;
state_12036 = G__13300;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10880__auto__ = function(state_12036){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10880__auto____1.call(this,state_12036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10880__auto____0;
cljs$core$async$mix_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10880__auto____1;
return cljs$core$async$mix_$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12113 = f__10974__auto__();
(statearr_12113[(6)] = c__10973__auto___13251);

return statearr_12113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_13301 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_13301(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13302 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_13302(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13303 = (function() {
var G__13304 = null;
var G__13304__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__13304__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__13304 = function(p,v){
switch(arguments.length){
case 1:
return G__13304__1.call(this,p);
case 2:
return G__13304__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13304.cljs$core$IFn$_invoke$arity$1 = G__13304__1;
G__13304.cljs$core$IFn$_invoke$arity$2 = G__13304__2;
return G__13304;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12117 = arguments.length;
switch (G__12117) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13303(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13303(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12122 = arguments.length;
switch (G__12122) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12119_SHARP_){
if(cljs.core.truth_((p1__12119_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12119_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12119_SHARP_.call(null,topic)))){
return p1__12119_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12119_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12123 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12124){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12124 = meta12124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12125,meta12124__$1){
var self__ = this;
var _12125__$1 = this;
return (new cljs.core.async.t_cljs$core$async12123(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12124__$1));
}));

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12125){
var self__ = this;
var _12125__$1 = this;
return self__.meta12124;
}));

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12124","meta12124",336616419,null)], null);
}));

(cljs.core.async.t_cljs$core$async12123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12123");

(cljs.core.async.t_cljs$core$async12123.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12123.
 */
cljs.core.async.__GT_t_cljs$core$async12123 = (function cljs$core$async$__GT_t_cljs$core$async12123(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12124){
return (new cljs.core.async.t_cljs$core$async12123(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12124));
});

}

return (new cljs.core.async.t_cljs$core$async12123(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10973__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12199){
var state_val_12200 = (state_12199[(1)]);
if((state_val_12200 === (7))){
var inst_12194 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12201_13308 = state_12199__$1;
(statearr_12201_13308[(2)] = inst_12194);

(statearr_12201_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (20))){
var state_12199__$1 = state_12199;
var statearr_12202_13309 = state_12199__$1;
(statearr_12202_13309[(2)] = null);

(statearr_12202_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (1))){
var state_12199__$1 = state_12199;
var statearr_12203_13310 = state_12199__$1;
(statearr_12203_13310[(2)] = null);

(statearr_12203_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (24))){
var inst_12177 = (state_12199[(7)]);
var inst_12186 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12177);
var state_12199__$1 = state_12199;
var statearr_12204_13311 = state_12199__$1;
(statearr_12204_13311[(2)] = inst_12186);

(statearr_12204_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (4))){
var inst_12128 = (state_12199[(8)]);
var inst_12128__$1 = (state_12199[(2)]);
var inst_12129 = (inst_12128__$1 == null);
var state_12199__$1 = (function (){var statearr_12205 = state_12199;
(statearr_12205[(8)] = inst_12128__$1);

return statearr_12205;
})();
if(cljs.core.truth_(inst_12129)){
var statearr_12206_13312 = state_12199__$1;
(statearr_12206_13312[(1)] = (5));

} else {
var statearr_12207_13313 = state_12199__$1;
(statearr_12207_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (15))){
var inst_12171 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12208_13314 = state_12199__$1;
(statearr_12208_13314[(2)] = inst_12171);

(statearr_12208_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (21))){
var inst_12191 = (state_12199[(2)]);
var state_12199__$1 = (function (){var statearr_12209 = state_12199;
(statearr_12209[(9)] = inst_12191);

return statearr_12209;
})();
var statearr_12210_13315 = state_12199__$1;
(statearr_12210_13315[(2)] = null);

(statearr_12210_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (13))){
var inst_12152 = (state_12199[(10)]);
var inst_12154 = cljs.core.chunked_seq_QMARK_(inst_12152);
var state_12199__$1 = state_12199;
if(inst_12154){
var statearr_12211_13316 = state_12199__$1;
(statearr_12211_13316[(1)] = (16));

} else {
var statearr_12212_13317 = state_12199__$1;
(statearr_12212_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (22))){
var inst_12183 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
if(cljs.core.truth_(inst_12183)){
var statearr_12213_13318 = state_12199__$1;
(statearr_12213_13318[(1)] = (23));

} else {
var statearr_12214_13319 = state_12199__$1;
(statearr_12214_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (6))){
var inst_12128 = (state_12199[(8)]);
var inst_12179 = (state_12199[(11)]);
var inst_12177 = (state_12199[(7)]);
var inst_12177__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12128) : topic_fn.call(null,inst_12128));
var inst_12178 = cljs.core.deref(mults);
var inst_12179__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12178,inst_12177__$1);
var state_12199__$1 = (function (){var statearr_12215 = state_12199;
(statearr_12215[(11)] = inst_12179__$1);

(statearr_12215[(7)] = inst_12177__$1);

return statearr_12215;
})();
if(cljs.core.truth_(inst_12179__$1)){
var statearr_12216_13320 = state_12199__$1;
(statearr_12216_13320[(1)] = (19));

} else {
var statearr_12217_13321 = state_12199__$1;
(statearr_12217_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (25))){
var inst_12188 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12218_13322 = state_12199__$1;
(statearr_12218_13322[(2)] = inst_12188);

(statearr_12218_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (17))){
var inst_12152 = (state_12199[(10)]);
var inst_12161 = cljs.core.first(inst_12152);
var inst_12162 = cljs.core.async.muxch_STAR_(inst_12161);
var inst_12163 = cljs.core.async.close_BANG_(inst_12162);
var inst_12165 = cljs.core.next(inst_12152);
var inst_12138 = inst_12165;
var inst_12139 = null;
var inst_12140 = (0);
var inst_12141 = (0);
var state_12199__$1 = (function (){var statearr_12219 = state_12199;
(statearr_12219[(12)] = inst_12138);

(statearr_12219[(13)] = inst_12139);

(statearr_12219[(14)] = inst_12141);

(statearr_12219[(15)] = inst_12163);

(statearr_12219[(16)] = inst_12140);

return statearr_12219;
})();
var statearr_12220_13323 = state_12199__$1;
(statearr_12220_13323[(2)] = null);

(statearr_12220_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (3))){
var inst_12196 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12199__$1,inst_12196);
} else {
if((state_val_12200 === (12))){
var inst_12173 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12221_13324 = state_12199__$1;
(statearr_12221_13324[(2)] = inst_12173);

(statearr_12221_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (2))){
var state_12199__$1 = state_12199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12199__$1,(4),ch);
} else {
if((state_val_12200 === (23))){
var state_12199__$1 = state_12199;
var statearr_12222_13325 = state_12199__$1;
(statearr_12222_13325[(2)] = null);

(statearr_12222_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (19))){
var inst_12128 = (state_12199[(8)]);
var inst_12179 = (state_12199[(11)]);
var inst_12181 = cljs.core.async.muxch_STAR_(inst_12179);
var state_12199__$1 = state_12199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12199__$1,(22),inst_12181,inst_12128);
} else {
if((state_val_12200 === (11))){
var inst_12138 = (state_12199[(12)]);
var inst_12152 = (state_12199[(10)]);
var inst_12152__$1 = cljs.core.seq(inst_12138);
var state_12199__$1 = (function (){var statearr_12223 = state_12199;
(statearr_12223[(10)] = inst_12152__$1);

return statearr_12223;
})();
if(inst_12152__$1){
var statearr_12224_13326 = state_12199__$1;
(statearr_12224_13326[(1)] = (13));

} else {
var statearr_12225_13327 = state_12199__$1;
(statearr_12225_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (9))){
var inst_12175 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12226_13328 = state_12199__$1;
(statearr_12226_13328[(2)] = inst_12175);

(statearr_12226_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (5))){
var inst_12135 = cljs.core.deref(mults);
var inst_12136 = cljs.core.vals(inst_12135);
var inst_12137 = cljs.core.seq(inst_12136);
var inst_12138 = inst_12137;
var inst_12139 = null;
var inst_12140 = (0);
var inst_12141 = (0);
var state_12199__$1 = (function (){var statearr_12229 = state_12199;
(statearr_12229[(12)] = inst_12138);

(statearr_12229[(13)] = inst_12139);

(statearr_12229[(14)] = inst_12141);

(statearr_12229[(16)] = inst_12140);

return statearr_12229;
})();
var statearr_12230_13329 = state_12199__$1;
(statearr_12230_13329[(2)] = null);

(statearr_12230_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (14))){
var state_12199__$1 = state_12199;
var statearr_12234_13330 = state_12199__$1;
(statearr_12234_13330[(2)] = null);

(statearr_12234_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (16))){
var inst_12152 = (state_12199[(10)]);
var inst_12156 = cljs.core.chunk_first(inst_12152);
var inst_12157 = cljs.core.chunk_rest(inst_12152);
var inst_12158 = cljs.core.count(inst_12156);
var inst_12138 = inst_12157;
var inst_12139 = inst_12156;
var inst_12140 = inst_12158;
var inst_12141 = (0);
var state_12199__$1 = (function (){var statearr_12235 = state_12199;
(statearr_12235[(12)] = inst_12138);

(statearr_12235[(13)] = inst_12139);

(statearr_12235[(14)] = inst_12141);

(statearr_12235[(16)] = inst_12140);

return statearr_12235;
})();
var statearr_12236_13331 = state_12199__$1;
(statearr_12236_13331[(2)] = null);

(statearr_12236_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (10))){
var inst_12138 = (state_12199[(12)]);
var inst_12139 = (state_12199[(13)]);
var inst_12141 = (state_12199[(14)]);
var inst_12140 = (state_12199[(16)]);
var inst_12146 = cljs.core._nth(inst_12139,inst_12141);
var inst_12147 = cljs.core.async.muxch_STAR_(inst_12146);
var inst_12148 = cljs.core.async.close_BANG_(inst_12147);
var inst_12149 = (inst_12141 + (1));
var tmp12231 = inst_12138;
var tmp12232 = inst_12139;
var tmp12233 = inst_12140;
var inst_12138__$1 = tmp12231;
var inst_12139__$1 = tmp12232;
var inst_12140__$1 = tmp12233;
var inst_12141__$1 = inst_12149;
var state_12199__$1 = (function (){var statearr_12237 = state_12199;
(statearr_12237[(12)] = inst_12138__$1);

(statearr_12237[(17)] = inst_12148);

(statearr_12237[(13)] = inst_12139__$1);

(statearr_12237[(14)] = inst_12141__$1);

(statearr_12237[(16)] = inst_12140__$1);

return statearr_12237;
})();
var statearr_12238_13332 = state_12199__$1;
(statearr_12238_13332[(2)] = null);

(statearr_12238_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (18))){
var inst_12168 = (state_12199[(2)]);
var state_12199__$1 = state_12199;
var statearr_12239_13333 = state_12199__$1;
(statearr_12239_13333[(2)] = inst_12168);

(statearr_12239_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12200 === (8))){
var inst_12141 = (state_12199[(14)]);
var inst_12140 = (state_12199[(16)]);
var inst_12143 = (inst_12141 < inst_12140);
var inst_12144 = inst_12143;
var state_12199__$1 = state_12199;
if(cljs.core.truth_(inst_12144)){
var statearr_12240_13334 = state_12199__$1;
(statearr_12240_13334[(1)] = (10));

} else {
var statearr_12241_13335 = state_12199__$1;
(statearr_12241_13335[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12242[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12242[(1)] = (1));

return statearr_12242;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12199){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12199);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12243){var ex__10883__auto__ = e12243;
var statearr_12244_13336 = state_12199;
(statearr_12244_13336[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12199[(4)]))){
var statearr_12245_13337 = state_12199;
(statearr_12245_13337[(1)] = cljs.core.first((state_12199[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12199;
state_12199 = G__13338;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12246 = f__10974__auto__();
(statearr_12246[(6)] = c__10973__auto___13307);

return statearr_12246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__12248 = arguments.length;
switch (G__12248) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__12251 = arguments.length;
switch (G__12251) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__12255 = arguments.length;
switch (G__12255) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10973__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12305){
var state_val_12306 = (state_12305[(1)]);
if((state_val_12306 === (7))){
var state_12305__$1 = state_12305;
var statearr_12307_13343 = state_12305__$1;
(statearr_12307_13343[(2)] = null);

(statearr_12307_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (1))){
var state_12305__$1 = state_12305;
var statearr_12308_13344 = state_12305__$1;
(statearr_12308_13344[(2)] = null);

(statearr_12308_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (4))){
var inst_12261 = (state_12305[(7)]);
var inst_12260 = (state_12305[(8)]);
var inst_12263 = (inst_12261 < inst_12260);
var state_12305__$1 = state_12305;
if(cljs.core.truth_(inst_12263)){
var statearr_12309_13345 = state_12305__$1;
(statearr_12309_13345[(1)] = (6));

} else {
var statearr_12310_13346 = state_12305__$1;
(statearr_12310_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (15))){
var inst_12286 = (state_12305[(9)]);
var inst_12291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12286);
var state_12305__$1 = state_12305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12305__$1,(17),out,inst_12291);
} else {
if((state_val_12306 === (13))){
var inst_12286 = (state_12305[(9)]);
var inst_12286__$1 = (state_12305[(2)]);
var inst_12287 = cljs.core.some(cljs.core.nil_QMARK_,inst_12286__$1);
var state_12305__$1 = (function (){var statearr_12311 = state_12305;
(statearr_12311[(9)] = inst_12286__$1);

return statearr_12311;
})();
if(cljs.core.truth_(inst_12287)){
var statearr_12312_13347 = state_12305__$1;
(statearr_12312_13347[(1)] = (14));

} else {
var statearr_12313_13348 = state_12305__$1;
(statearr_12313_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (6))){
var state_12305__$1 = state_12305;
var statearr_12314_13349 = state_12305__$1;
(statearr_12314_13349[(2)] = null);

(statearr_12314_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (17))){
var inst_12293 = (state_12305[(2)]);
var state_12305__$1 = (function (){var statearr_12317 = state_12305;
(statearr_12317[(10)] = inst_12293);

return statearr_12317;
})();
var statearr_12318_13350 = state_12305__$1;
(statearr_12318_13350[(2)] = null);

(statearr_12318_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (3))){
var inst_12298 = (state_12305[(2)]);
var state_12305__$1 = state_12305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12305__$1,inst_12298);
} else {
if((state_val_12306 === (12))){
var _ = (function (){var statearr_12319 = state_12305;
(statearr_12319[(4)] = cljs.core.rest((state_12305[(4)])));

return statearr_12319;
})();
var state_12305__$1 = state_12305;
var ex12316 = (state_12305__$1[(2)]);
var statearr_12320_13351 = state_12305__$1;
(statearr_12320_13351[(5)] = ex12316);


if((ex12316 instanceof Object)){
var statearr_12336_13352 = state_12305__$1;
(statearr_12336_13352[(1)] = (11));

(statearr_12336_13352[(5)] = null);

} else {
throw ex12316;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (2))){
var inst_12259 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12260 = cnt;
var inst_12261 = (0);
var state_12305__$1 = (function (){var statearr_12337 = state_12305;
(statearr_12337[(11)] = inst_12259);

(statearr_12337[(7)] = inst_12261);

(statearr_12337[(8)] = inst_12260);

return statearr_12337;
})();
var statearr_12338_13353 = state_12305__$1;
(statearr_12338_13353[(2)] = null);

(statearr_12338_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (11))){
var inst_12265 = (state_12305[(2)]);
var inst_12266 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12305__$1 = (function (){var statearr_12339 = state_12305;
(statearr_12339[(12)] = inst_12265);

return statearr_12339;
})();
var statearr_12340_13354 = state_12305__$1;
(statearr_12340_13354[(2)] = inst_12266);

(statearr_12340_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (9))){
var inst_12261 = (state_12305[(7)]);
var _ = (function (){var statearr_12341 = state_12305;
(statearr_12341[(4)] = cljs.core.cons((12),(state_12305[(4)])));

return statearr_12341;
})();
var inst_12272 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12261) : chs__$1.call(null,inst_12261));
var inst_12273 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12261) : done.call(null,inst_12261));
var inst_12274 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12272,inst_12273);
var ___$1 = (function (){var statearr_12342 = state_12305;
(statearr_12342[(4)] = cljs.core.rest((state_12305[(4)])));

return statearr_12342;
})();
var state_12305__$1 = state_12305;
var statearr_12343_13355 = state_12305__$1;
(statearr_12343_13355[(2)] = inst_12274);

(statearr_12343_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (5))){
var inst_12284 = (state_12305[(2)]);
var state_12305__$1 = (function (){var statearr_12344 = state_12305;
(statearr_12344[(13)] = inst_12284);

return statearr_12344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12305__$1,(13),dchan);
} else {
if((state_val_12306 === (14))){
var inst_12289 = cljs.core.async.close_BANG_(out);
var state_12305__$1 = state_12305;
var statearr_12345_13356 = state_12305__$1;
(statearr_12345_13356[(2)] = inst_12289);

(statearr_12345_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (16))){
var inst_12296 = (state_12305[(2)]);
var state_12305__$1 = state_12305;
var statearr_12346_13357 = state_12305__$1;
(statearr_12346_13357[(2)] = inst_12296);

(statearr_12346_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (10))){
var inst_12261 = (state_12305[(7)]);
var inst_12277 = (state_12305[(2)]);
var inst_12278 = (inst_12261 + (1));
var inst_12261__$1 = inst_12278;
var state_12305__$1 = (function (){var statearr_12347 = state_12305;
(statearr_12347[(7)] = inst_12261__$1);

(statearr_12347[(14)] = inst_12277);

return statearr_12347;
})();
var statearr_12348_13358 = state_12305__$1;
(statearr_12348_13358[(2)] = null);

(statearr_12348_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12306 === (8))){
var inst_12282 = (state_12305[(2)]);
var state_12305__$1 = state_12305;
var statearr_12349_13359 = state_12305__$1;
(statearr_12349_13359[(2)] = inst_12282);

(statearr_12349_13359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12363[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12363[(1)] = (1));

return statearr_12363;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12305){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12305);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12364){var ex__10883__auto__ = e12364;
var statearr_12365_13360 = state_12305;
(statearr_12365_13360[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12305[(4)]))){
var statearr_12366_13361 = state_12305;
(statearr_12366_13361[(1)] = cljs.core.first((state_12305[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12305;
state_12305 = G__13362;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12367 = f__10974__auto__();
(statearr_12367[(6)] = c__10973__auto___13342);

return statearr_12367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12370 = arguments.length;
switch (G__12370) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10973__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12402){
var state_val_12403 = (state_12402[(1)]);
if((state_val_12403 === (7))){
var inst_12382 = (state_12402[(7)]);
var inst_12381 = (state_12402[(8)]);
var inst_12381__$1 = (state_12402[(2)]);
var inst_12382__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12381__$1,(0),null);
var inst_12383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12381__$1,(1),null);
var inst_12384 = (inst_12382__$1 == null);
var state_12402__$1 = (function (){var statearr_12404 = state_12402;
(statearr_12404[(9)] = inst_12383);

(statearr_12404[(7)] = inst_12382__$1);

(statearr_12404[(8)] = inst_12381__$1);

return statearr_12404;
})();
if(cljs.core.truth_(inst_12384)){
var statearr_12405_13365 = state_12402__$1;
(statearr_12405_13365[(1)] = (8));

} else {
var statearr_12406_13366 = state_12402__$1;
(statearr_12406_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12403 === (1))){
var inst_12371 = cljs.core.vec(chs);
var inst_12372 = inst_12371;
var state_12402__$1 = (function (){var statearr_12407 = state_12402;
(statearr_12407[(10)] = inst_12372);

return statearr_12407;
})();
var statearr_12408_13367 = state_12402__$1;
(statearr_12408_13367[(2)] = null);

(statearr_12408_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12403 === (4))){
var inst_12372 = (state_12402[(10)]);
var state_12402__$1 = state_12402;
return cljs.core.async.ioc_alts_BANG_(state_12402__$1,(7),inst_12372);
} else {
if((state_val_12403 === (6))){
var inst_12398 = (state_12402[(2)]);
var state_12402__$1 = state_12402;
var statearr_12409_13368 = state_12402__$1;
(statearr_12409_13368[(2)] = inst_12398);

(statearr_12409_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12403 === (3))){
var inst_12400 = (state_12402[(2)]);
var state_12402__$1 = state_12402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12402__$1,inst_12400);
} else {
if((state_val_12403 === (2))){
var inst_12372 = (state_12402[(10)]);
var inst_12374 = cljs.core.count(inst_12372);
var inst_12375 = (inst_12374 > (0));
var state_12402__$1 = state_12402;
if(cljs.core.truth_(inst_12375)){
var statearr_12411_13369 = state_12402__$1;
(statearr_12411_13369[(1)] = (4));

} else {
var statearr_12412_13370 = state_12402__$1;
(statearr_12412_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12403 === (11))){
var inst_12372 = (state_12402[(10)]);
var inst_12391 = (state_12402[(2)]);
var tmp12410 = inst_12372;
var inst_12372__$1 = tmp12410;
var state_12402__$1 = (function (){var statearr_12441 = state_12402;
(statearr_12441[(10)] = inst_12372__$1);

(statearr_12441[(11)] = inst_12391);

return statearr_12441;
})();
var statearr_12442_13371 = state_12402__$1;
(statearr_12442_13371[(2)] = null);

(statearr_12442_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12403 === (9))){
var inst_12382 = (state_12402[(7)]);
var state_12402__$1 = state_12402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12402__$1,(11),out,inst_12382);
} else {
if((state_val_12403 === (5))){
var inst_12396 = cljs.core.async.close_BANG_(out);
var state_12402__$1 = state_12402;
var statearr_12443_13372 = state_12402__$1;
(statearr_12443_13372[(2)] = inst_12396);

(statearr_12443_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12403 === (10))){
var inst_12394 = (state_12402[(2)]);
var state_12402__$1 = state_12402;
var statearr_12444_13373 = state_12402__$1;
(statearr_12444_13373[(2)] = inst_12394);

(statearr_12444_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12403 === (8))){
var inst_12383 = (state_12402[(9)]);
var inst_12372 = (state_12402[(10)]);
var inst_12382 = (state_12402[(7)]);
var inst_12381 = (state_12402[(8)]);
var inst_12386 = (function (){var cs = inst_12372;
var vec__12377 = inst_12381;
var v = inst_12382;
var c = inst_12383;
return (function (p1__12368_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12368_SHARP_);
});
})();
var inst_12387 = cljs.core.filterv(inst_12386,inst_12372);
var inst_12372__$1 = inst_12387;
var state_12402__$1 = (function (){var statearr_12445 = state_12402;
(statearr_12445[(10)] = inst_12372__$1);

return statearr_12445;
})();
var statearr_12446_13374 = state_12402__$1;
(statearr_12446_13374[(2)] = null);

(statearr_12446_13374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12447[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12447[(1)] = (1));

return statearr_12447;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12402){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12402);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12448){var ex__10883__auto__ = e12448;
var statearr_12449_13375 = state_12402;
(statearr_12449_13375[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12402[(4)]))){
var statearr_12450_13376 = state_12402;
(statearr_12450_13376[(1)] = cljs.core.first((state_12402[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12402;
state_12402 = G__13377;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12451 = f__10974__auto__();
(statearr_12451[(6)] = c__10973__auto___13364);

return statearr_12451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12454 = arguments.length;
switch (G__12454) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10973__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12478){
var state_val_12479 = (state_12478[(1)]);
if((state_val_12479 === (7))){
var inst_12460 = (state_12478[(7)]);
var inst_12460__$1 = (state_12478[(2)]);
var inst_12461 = (inst_12460__$1 == null);
var inst_12462 = cljs.core.not(inst_12461);
var state_12478__$1 = (function (){var statearr_12480 = state_12478;
(statearr_12480[(7)] = inst_12460__$1);

return statearr_12480;
})();
if(inst_12462){
var statearr_12481_13380 = state_12478__$1;
(statearr_12481_13380[(1)] = (8));

} else {
var statearr_12482_13381 = state_12478__$1;
(statearr_12482_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (1))){
var inst_12455 = (0);
var state_12478__$1 = (function (){var statearr_12483 = state_12478;
(statearr_12483[(8)] = inst_12455);

return statearr_12483;
})();
var statearr_12484_13382 = state_12478__$1;
(statearr_12484_13382[(2)] = null);

(statearr_12484_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (4))){
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12478__$1,(7),ch);
} else {
if((state_val_12479 === (6))){
var inst_12473 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12485_13383 = state_12478__$1;
(statearr_12485_13383[(2)] = inst_12473);

(statearr_12485_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (3))){
var inst_12475 = (state_12478[(2)]);
var inst_12476 = cljs.core.async.close_BANG_(out);
var state_12478__$1 = (function (){var statearr_12499 = state_12478;
(statearr_12499[(9)] = inst_12475);

return statearr_12499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12478__$1,inst_12476);
} else {
if((state_val_12479 === (2))){
var inst_12455 = (state_12478[(8)]);
var inst_12457 = (inst_12455 < n);
var state_12478__$1 = state_12478;
if(cljs.core.truth_(inst_12457)){
var statearr_12500_13384 = state_12478__$1;
(statearr_12500_13384[(1)] = (4));

} else {
var statearr_12501_13385 = state_12478__$1;
(statearr_12501_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (11))){
var inst_12455 = (state_12478[(8)]);
var inst_12465 = (state_12478[(2)]);
var inst_12466 = (inst_12455 + (1));
var inst_12455__$1 = inst_12466;
var state_12478__$1 = (function (){var statearr_12502 = state_12478;
(statearr_12502[(8)] = inst_12455__$1);

(statearr_12502[(10)] = inst_12465);

return statearr_12502;
})();
var statearr_12503_13386 = state_12478__$1;
(statearr_12503_13386[(2)] = null);

(statearr_12503_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (9))){
var state_12478__$1 = state_12478;
var statearr_12507_13387 = state_12478__$1;
(statearr_12507_13387[(2)] = null);

(statearr_12507_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (5))){
var state_12478__$1 = state_12478;
var statearr_12508_13388 = state_12478__$1;
(statearr_12508_13388[(2)] = null);

(statearr_12508_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (10))){
var inst_12470 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12509_13389 = state_12478__$1;
(statearr_12509_13389[(2)] = inst_12470);

(statearr_12509_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (8))){
var inst_12460 = (state_12478[(7)]);
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12478__$1,(11),out,inst_12460);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12513[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12513[(1)] = (1));

return statearr_12513;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12478){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12478);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12516){var ex__10883__auto__ = e12516;
var statearr_12518_13390 = state_12478;
(statearr_12518_13390[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12478[(4)]))){
var statearr_12519_13391 = state_12478;
(statearr_12519_13391[(1)] = cljs.core.first((state_12478[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12478;
state_12478 = G__13392;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12520 = f__10974__auto__();
(statearr_12520[(6)] = c__10973__auto___13379);

return statearr_12520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12527 = (function (f,ch,meta12528){
this.f = f;
this.ch = ch;
this.meta12528 = meta12528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12529,meta12528__$1){
var self__ = this;
var _12529__$1 = this;
return (new cljs.core.async.t_cljs$core$async12527(self__.f,self__.ch,meta12528__$1));
}));

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12529){
var self__ = this;
var _12529__$1 = this;
return self__.meta12528;
}));

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12548 = (function (f,ch,meta12528,_,fn1,meta12549){
this.f = f;
this.ch = ch;
this.meta12528 = meta12528;
this._ = _;
this.fn1 = fn1;
this.meta12549 = meta12549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12550,meta12549__$1){
var self__ = this;
var _12550__$1 = this;
return (new cljs.core.async.t_cljs$core$async12548(self__.f,self__.ch,self__.meta12528,self__._,self__.fn1,meta12549__$1));
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12550){
var self__ = this;
var _12550__$1 = this;
return self__.meta12549;
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12526_SHARP_){
var G__12551 = (((p1__12526_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12526_SHARP_) : self__.f.call(null,p1__12526_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12551) : f1.call(null,G__12551));
});
}));

(cljs.core.async.t_cljs$core$async12548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12528","meta12528",-1104786278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12527","cljs.core.async/t_cljs$core$async12527",-1064128418,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12549","meta12549",1996276862,null)], null);
}));

(cljs.core.async.t_cljs$core$async12548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12548");

(cljs.core.async.t_cljs$core$async12548.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12548.
 */
cljs.core.async.__GT_t_cljs$core$async12548 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12548(f__$1,ch__$1,meta12528__$1,___$2,fn1__$1,meta12549){
return (new cljs.core.async.t_cljs$core$async12548(f__$1,ch__$1,meta12528__$1,___$2,fn1__$1,meta12549));
});

}

return (new cljs.core.async.t_cljs$core$async12548(self__.f,self__.ch,self__.meta12528,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12552 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12552) : self__.f.call(null,G__12552));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12528","meta12528",-1104786278,null)], null);
}));

(cljs.core.async.t_cljs$core$async12527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12527");

(cljs.core.async.t_cljs$core$async12527.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12527.
 */
cljs.core.async.__GT_t_cljs$core$async12527 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12527(f__$1,ch__$1,meta12528){
return (new cljs.core.async.t_cljs$core$async12527(f__$1,ch__$1,meta12528));
});

}

return (new cljs.core.async.t_cljs$core$async12527(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12553 = (function (f,ch,meta12554){
this.f = f;
this.ch = ch;
this.meta12554 = meta12554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12555,meta12554__$1){
var self__ = this;
var _12555__$1 = this;
return (new cljs.core.async.t_cljs$core$async12553(self__.f,self__.ch,meta12554__$1));
}));

(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12555){
var self__ = this;
var _12555__$1 = this;
return self__.meta12554;
}));

(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12554","meta12554",88410704,null)], null);
}));

(cljs.core.async.t_cljs$core$async12553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12553");

(cljs.core.async.t_cljs$core$async12553.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12553.
 */
cljs.core.async.__GT_t_cljs$core$async12553 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12553(f__$1,ch__$1,meta12554){
return (new cljs.core.async.t_cljs$core$async12553(f__$1,ch__$1,meta12554));
});

}

return (new cljs.core.async.t_cljs$core$async12553(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12556 = (function (p,ch,meta12557){
this.p = p;
this.ch = ch;
this.meta12557 = meta12557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12558,meta12557__$1){
var self__ = this;
var _12558__$1 = this;
return (new cljs.core.async.t_cljs$core$async12556(self__.p,self__.ch,meta12557__$1));
}));

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12558){
var self__ = this;
var _12558__$1 = this;
return self__.meta12557;
}));

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12557","meta12557",1228411040,null)], null);
}));

(cljs.core.async.t_cljs$core$async12556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12556");

(cljs.core.async.t_cljs$core$async12556.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12556.
 */
cljs.core.async.__GT_t_cljs$core$async12556 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12556(p__$1,ch__$1,meta12557){
return (new cljs.core.async.t_cljs$core$async12556(p__$1,ch__$1,meta12557));
});

}

return (new cljs.core.async.t_cljs$core$async12556(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12560 = arguments.length;
switch (G__12560) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10973__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12585){
var state_val_12586 = (state_12585[(1)]);
if((state_val_12586 === (7))){
var inst_12581 = (state_12585[(2)]);
var state_12585__$1 = state_12585;
var statearr_12587_13395 = state_12585__$1;
(statearr_12587_13395[(2)] = inst_12581);

(statearr_12587_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (1))){
var state_12585__$1 = state_12585;
var statearr_12588_13396 = state_12585__$1;
(statearr_12588_13396[(2)] = null);

(statearr_12588_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (4))){
var inst_12567 = (state_12585[(7)]);
var inst_12567__$1 = (state_12585[(2)]);
var inst_12568 = (inst_12567__$1 == null);
var state_12585__$1 = (function (){var statearr_12589 = state_12585;
(statearr_12589[(7)] = inst_12567__$1);

return statearr_12589;
})();
if(cljs.core.truth_(inst_12568)){
var statearr_12591_13397 = state_12585__$1;
(statearr_12591_13397[(1)] = (5));

} else {
var statearr_12592_13398 = state_12585__$1;
(statearr_12592_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (6))){
var inst_12567 = (state_12585[(7)]);
var inst_12572 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12567) : p.call(null,inst_12567));
var state_12585__$1 = state_12585;
if(cljs.core.truth_(inst_12572)){
var statearr_12593_13399 = state_12585__$1;
(statearr_12593_13399[(1)] = (8));

} else {
var statearr_12594_13400 = state_12585__$1;
(statearr_12594_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (3))){
var inst_12583 = (state_12585[(2)]);
var state_12585__$1 = state_12585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12585__$1,inst_12583);
} else {
if((state_val_12586 === (2))){
var state_12585__$1 = state_12585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12585__$1,(4),ch);
} else {
if((state_val_12586 === (11))){
var inst_12575 = (state_12585[(2)]);
var state_12585__$1 = state_12585;
var statearr_12597_13401 = state_12585__$1;
(statearr_12597_13401[(2)] = inst_12575);

(statearr_12597_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (9))){
var state_12585__$1 = state_12585;
var statearr_12598_13402 = state_12585__$1;
(statearr_12598_13402[(2)] = null);

(statearr_12598_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (5))){
var inst_12570 = cljs.core.async.close_BANG_(out);
var state_12585__$1 = state_12585;
var statearr_12599_13403 = state_12585__$1;
(statearr_12599_13403[(2)] = inst_12570);

(statearr_12599_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (10))){
var inst_12578 = (state_12585[(2)]);
var state_12585__$1 = (function (){var statearr_12600 = state_12585;
(statearr_12600[(8)] = inst_12578);

return statearr_12600;
})();
var statearr_12601_13404 = state_12585__$1;
(statearr_12601_13404[(2)] = null);

(statearr_12601_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12586 === (8))){
var inst_12567 = (state_12585[(7)]);
var state_12585__$1 = state_12585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12585__$1,(11),out,inst_12567);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12607 = [null,null,null,null,null,null,null,null,null];
(statearr_12607[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12607[(1)] = (1));

return statearr_12607;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12585){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12585);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12608){var ex__10883__auto__ = e12608;
var statearr_12609_13405 = state_12585;
(statearr_12609_13405[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12585[(4)]))){
var statearr_12612_13406 = state_12585;
(statearr_12612_13406[(1)] = cljs.core.first((state_12585[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12585;
state_12585 = G__13407;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12614 = f__10974__auto__();
(statearr_12614[(6)] = c__10973__auto___13394);

return statearr_12614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12617 = arguments.length;
switch (G__12617) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10973__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12732){
var state_val_12734 = (state_12732[(1)]);
if((state_val_12734 === (7))){
var inst_12727 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12744_13409 = state_12732__$1;
(statearr_12744_13409[(2)] = inst_12727);

(statearr_12744_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (20))){
var inst_12697 = (state_12732[(7)]);
var inst_12708 = (state_12732[(2)]);
var inst_12709 = cljs.core.next(inst_12697);
var inst_12635 = inst_12709;
var inst_12636 = null;
var inst_12637 = (0);
var inst_12638 = (0);
var state_12732__$1 = (function (){var statearr_12746 = state_12732;
(statearr_12746[(8)] = inst_12636);

(statearr_12746[(9)] = inst_12637);

(statearr_12746[(10)] = inst_12635);

(statearr_12746[(11)] = inst_12708);

(statearr_12746[(12)] = inst_12638);

return statearr_12746;
})();
var statearr_12747_13410 = state_12732__$1;
(statearr_12747_13410[(2)] = null);

(statearr_12747_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (1))){
var state_12732__$1 = state_12732;
var statearr_12749_13411 = state_12732__$1;
(statearr_12749_13411[(2)] = null);

(statearr_12749_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (4))){
var inst_12622 = (state_12732[(13)]);
var inst_12622__$1 = (state_12732[(2)]);
var inst_12623 = (inst_12622__$1 == null);
var state_12732__$1 = (function (){var statearr_12750 = state_12732;
(statearr_12750[(13)] = inst_12622__$1);

return statearr_12750;
})();
if(cljs.core.truth_(inst_12623)){
var statearr_12751_13412 = state_12732__$1;
(statearr_12751_13412[(1)] = (5));

} else {
var statearr_12752_13413 = state_12732__$1;
(statearr_12752_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (15))){
var state_12732__$1 = state_12732;
var statearr_12756_13414 = state_12732__$1;
(statearr_12756_13414[(2)] = null);

(statearr_12756_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (21))){
var state_12732__$1 = state_12732;
var statearr_12757_13415 = state_12732__$1;
(statearr_12757_13415[(2)] = null);

(statearr_12757_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (13))){
var inst_12636 = (state_12732[(8)]);
var inst_12637 = (state_12732[(9)]);
var inst_12635 = (state_12732[(10)]);
var inst_12638 = (state_12732[(12)]);
var inst_12646 = (state_12732[(2)]);
var inst_12694 = (inst_12638 + (1));
var tmp12753 = inst_12636;
var tmp12754 = inst_12637;
var tmp12755 = inst_12635;
var inst_12635__$1 = tmp12755;
var inst_12636__$1 = tmp12753;
var inst_12637__$1 = tmp12754;
var inst_12638__$1 = inst_12694;
var state_12732__$1 = (function (){var statearr_12758 = state_12732;
(statearr_12758[(14)] = inst_12646);

(statearr_12758[(8)] = inst_12636__$1);

(statearr_12758[(9)] = inst_12637__$1);

(statearr_12758[(10)] = inst_12635__$1);

(statearr_12758[(12)] = inst_12638__$1);

return statearr_12758;
})();
var statearr_12762_13416 = state_12732__$1;
(statearr_12762_13416[(2)] = null);

(statearr_12762_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (22))){
var state_12732__$1 = state_12732;
var statearr_12763_13417 = state_12732__$1;
(statearr_12763_13417[(2)] = null);

(statearr_12763_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (6))){
var inst_12622 = (state_12732[(13)]);
var inst_12633 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12622) : f.call(null,inst_12622));
var inst_12634 = cljs.core.seq(inst_12633);
var inst_12635 = inst_12634;
var inst_12636 = null;
var inst_12637 = (0);
var inst_12638 = (0);
var state_12732__$1 = (function (){var statearr_12764 = state_12732;
(statearr_12764[(8)] = inst_12636);

(statearr_12764[(9)] = inst_12637);

(statearr_12764[(10)] = inst_12635);

(statearr_12764[(12)] = inst_12638);

return statearr_12764;
})();
var statearr_12772_13418 = state_12732__$1;
(statearr_12772_13418[(2)] = null);

(statearr_12772_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (17))){
var inst_12697 = (state_12732[(7)]);
var inst_12701 = cljs.core.chunk_first(inst_12697);
var inst_12702 = cljs.core.chunk_rest(inst_12697);
var inst_12703 = cljs.core.count(inst_12701);
var inst_12635 = inst_12702;
var inst_12636 = inst_12701;
var inst_12637 = inst_12703;
var inst_12638 = (0);
var state_12732__$1 = (function (){var statearr_12773 = state_12732;
(statearr_12773[(8)] = inst_12636);

(statearr_12773[(9)] = inst_12637);

(statearr_12773[(10)] = inst_12635);

(statearr_12773[(12)] = inst_12638);

return statearr_12773;
})();
var statearr_12774_13419 = state_12732__$1;
(statearr_12774_13419[(2)] = null);

(statearr_12774_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (3))){
var inst_12729 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12732__$1,inst_12729);
} else {
if((state_val_12734 === (12))){
var inst_12717 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12775_13420 = state_12732__$1;
(statearr_12775_13420[(2)] = inst_12717);

(statearr_12775_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (2))){
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12732__$1,(4),in$);
} else {
if((state_val_12734 === (23))){
var inst_12725 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12776_13421 = state_12732__$1;
(statearr_12776_13421[(2)] = inst_12725);

(statearr_12776_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (19))){
var inst_12712 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12778_13422 = state_12732__$1;
(statearr_12778_13422[(2)] = inst_12712);

(statearr_12778_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (11))){
var inst_12635 = (state_12732[(10)]);
var inst_12697 = (state_12732[(7)]);
var inst_12697__$1 = cljs.core.seq(inst_12635);
var state_12732__$1 = (function (){var statearr_12779 = state_12732;
(statearr_12779[(7)] = inst_12697__$1);

return statearr_12779;
})();
if(inst_12697__$1){
var statearr_12780_13423 = state_12732__$1;
(statearr_12780_13423[(1)] = (14));

} else {
var statearr_12781_13424 = state_12732__$1;
(statearr_12781_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (9))){
var inst_12719 = (state_12732[(2)]);
var inst_12720 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12732__$1 = (function (){var statearr_12782 = state_12732;
(statearr_12782[(15)] = inst_12719);

return statearr_12782;
})();
if(cljs.core.truth_(inst_12720)){
var statearr_12783_13425 = state_12732__$1;
(statearr_12783_13425[(1)] = (21));

} else {
var statearr_12784_13426 = state_12732__$1;
(statearr_12784_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (5))){
var inst_12625 = cljs.core.async.close_BANG_(out);
var state_12732__$1 = state_12732;
var statearr_12785_13427 = state_12732__$1;
(statearr_12785_13427[(2)] = inst_12625);

(statearr_12785_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (14))){
var inst_12697 = (state_12732[(7)]);
var inst_12699 = cljs.core.chunked_seq_QMARK_(inst_12697);
var state_12732__$1 = state_12732;
if(inst_12699){
var statearr_12786_13428 = state_12732__$1;
(statearr_12786_13428[(1)] = (17));

} else {
var statearr_12787_13429 = state_12732__$1;
(statearr_12787_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (16))){
var inst_12715 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12788_13430 = state_12732__$1;
(statearr_12788_13430[(2)] = inst_12715);

(statearr_12788_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (10))){
var inst_12636 = (state_12732[(8)]);
var inst_12638 = (state_12732[(12)]);
var inst_12644 = cljs.core._nth(inst_12636,inst_12638);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12732__$1,(13),out,inst_12644);
} else {
if((state_val_12734 === (18))){
var inst_12697 = (state_12732[(7)]);
var inst_12706 = cljs.core.first(inst_12697);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12732__$1,(20),out,inst_12706);
} else {
if((state_val_12734 === (8))){
var inst_12637 = (state_12732[(9)]);
var inst_12638 = (state_12732[(12)]);
var inst_12641 = (inst_12638 < inst_12637);
var inst_12642 = inst_12641;
var state_12732__$1 = state_12732;
if(cljs.core.truth_(inst_12642)){
var statearr_12796_13431 = state_12732__$1;
(statearr_12796_13431[(1)] = (10));

} else {
var statearr_12797_13432 = state_12732__$1;
(statearr_12797_13432[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_12798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12798[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__);

(statearr_12798[(1)] = (1));

return statearr_12798;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1 = (function (state_12732){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12732);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12800){var ex__10883__auto__ = e12800;
var statearr_12801_13433 = state_12732;
(statearr_12801_13433[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12732[(4)]))){
var statearr_12802_13434 = state_12732;
(statearr_12802_13434[(1)] = cljs.core.first((state_12732[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12732;
state_12732 = G__13435;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__ = function(state_12732){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1.call(this,state_12732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12804 = f__10974__auto__();
(statearr_12804[(6)] = c__10973__auto__);

return statearr_12804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));

return c__10973__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12807 = arguments.length;
switch (G__12807) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12811 = arguments.length;
switch (G__12811) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12813 = arguments.length;
switch (G__12813) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10973__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12837){
var state_val_12838 = (state_12837[(1)]);
if((state_val_12838 === (7))){
var inst_12832 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12839_13440 = state_12837__$1;
(statearr_12839_13440[(2)] = inst_12832);

(statearr_12839_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (1))){
var inst_12814 = null;
var state_12837__$1 = (function (){var statearr_12840 = state_12837;
(statearr_12840[(7)] = inst_12814);

return statearr_12840;
})();
var statearr_12841_13441 = state_12837__$1;
(statearr_12841_13441[(2)] = null);

(statearr_12841_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (4))){
var inst_12817 = (state_12837[(8)]);
var inst_12817__$1 = (state_12837[(2)]);
var inst_12818 = (inst_12817__$1 == null);
var inst_12819 = cljs.core.not(inst_12818);
var state_12837__$1 = (function (){var statearr_12842 = state_12837;
(statearr_12842[(8)] = inst_12817__$1);

return statearr_12842;
})();
if(inst_12819){
var statearr_12843_13442 = state_12837__$1;
(statearr_12843_13442[(1)] = (5));

} else {
var statearr_12844_13443 = state_12837__$1;
(statearr_12844_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (6))){
var state_12837__$1 = state_12837;
var statearr_12845_13444 = state_12837__$1;
(statearr_12845_13444[(2)] = null);

(statearr_12845_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (3))){
var inst_12834 = (state_12837[(2)]);
var inst_12835 = cljs.core.async.close_BANG_(out);
var state_12837__$1 = (function (){var statearr_12846 = state_12837;
(statearr_12846[(9)] = inst_12834);

return statearr_12846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12837__$1,inst_12835);
} else {
if((state_val_12838 === (2))){
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12837__$1,(4),ch);
} else {
if((state_val_12838 === (11))){
var inst_12817 = (state_12837[(8)]);
var inst_12826 = (state_12837[(2)]);
var inst_12814 = inst_12817;
var state_12837__$1 = (function (){var statearr_12847 = state_12837;
(statearr_12847[(10)] = inst_12826);

(statearr_12847[(7)] = inst_12814);

return statearr_12847;
})();
var statearr_12848_13445 = state_12837__$1;
(statearr_12848_13445[(2)] = null);

(statearr_12848_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (9))){
var inst_12817 = (state_12837[(8)]);
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12837__$1,(11),out,inst_12817);
} else {
if((state_val_12838 === (5))){
var inst_12817 = (state_12837[(8)]);
var inst_12814 = (state_12837[(7)]);
var inst_12821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12817,inst_12814);
var state_12837__$1 = state_12837;
if(inst_12821){
var statearr_12850_13446 = state_12837__$1;
(statearr_12850_13446[(1)] = (8));

} else {
var statearr_12851_13447 = state_12837__$1;
(statearr_12851_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (10))){
var inst_12829 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12852_13448 = state_12837__$1;
(statearr_12852_13448[(2)] = inst_12829);

(statearr_12852_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (8))){
var inst_12814 = (state_12837[(7)]);
var tmp12849 = inst_12814;
var inst_12814__$1 = tmp12849;
var state_12837__$1 = (function (){var statearr_12853 = state_12837;
(statearr_12853[(7)] = inst_12814__$1);

return statearr_12853;
})();
var statearr_12854_13449 = state_12837__$1;
(statearr_12854_13449[(2)] = null);

(statearr_12854_13449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12855[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12855[(1)] = (1));

return statearr_12855;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12837){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12837);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12856){var ex__10883__auto__ = e12856;
var statearr_12857_13450 = state_12837;
(statearr_12857_13450[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12837[(4)]))){
var statearr_12858_13451 = state_12837;
(statearr_12858_13451[(1)] = cljs.core.first((state_12837[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12837;
state_12837 = G__13452;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12859 = f__10974__auto__();
(statearr_12859[(6)] = c__10973__auto___13439);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12861 = arguments.length;
switch (G__12861) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10973__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12899){
var state_val_12900 = (state_12899[(1)]);
if((state_val_12900 === (7))){
var inst_12895 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12901_13455 = state_12899__$1;
(statearr_12901_13455[(2)] = inst_12895);

(statearr_12901_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (1))){
var inst_12862 = (new Array(n));
var inst_12863 = inst_12862;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12902 = state_12899;
(statearr_12902[(7)] = inst_12864);

(statearr_12902[(8)] = inst_12863);

return statearr_12902;
})();
var statearr_12903_13456 = state_12899__$1;
(statearr_12903_13456[(2)] = null);

(statearr_12903_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (4))){
var inst_12867 = (state_12899[(9)]);
var inst_12867__$1 = (state_12899[(2)]);
var inst_12868 = (inst_12867__$1 == null);
var inst_12869 = cljs.core.not(inst_12868);
var state_12899__$1 = (function (){var statearr_12904 = state_12899;
(statearr_12904[(9)] = inst_12867__$1);

return statearr_12904;
})();
if(inst_12869){
var statearr_12905_13457 = state_12899__$1;
(statearr_12905_13457[(1)] = (5));

} else {
var statearr_12906_13458 = state_12899__$1;
(statearr_12906_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (15))){
var inst_12889 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12907_13459 = state_12899__$1;
(statearr_12907_13459[(2)] = inst_12889);

(statearr_12907_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (13))){
var state_12899__$1 = state_12899;
var statearr_12908_13460 = state_12899__$1;
(statearr_12908_13460[(2)] = null);

(statearr_12908_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (6))){
var inst_12864 = (state_12899[(7)]);
var inst_12885 = (inst_12864 > (0));
var state_12899__$1 = state_12899;
if(cljs.core.truth_(inst_12885)){
var statearr_12909_13461 = state_12899__$1;
(statearr_12909_13461[(1)] = (12));

} else {
var statearr_12910_13462 = state_12899__$1;
(statearr_12910_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (3))){
var inst_12897 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12899__$1,inst_12897);
} else {
if((state_val_12900 === (12))){
var inst_12863 = (state_12899[(8)]);
var inst_12887 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(15),out,inst_12887);
} else {
if((state_val_12900 === (2))){
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12899__$1,(4),ch);
} else {
if((state_val_12900 === (11))){
var inst_12879 = (state_12899[(2)]);
var inst_12880 = (new Array(n));
var inst_12863 = inst_12880;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12911 = state_12899;
(statearr_12911[(10)] = inst_12879);

(statearr_12911[(7)] = inst_12864);

(statearr_12911[(8)] = inst_12863);

return statearr_12911;
})();
var statearr_12912_13463 = state_12899__$1;
(statearr_12912_13463[(2)] = null);

(statearr_12912_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (9))){
var inst_12863 = (state_12899[(8)]);
var inst_12877 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(11),out,inst_12877);
} else {
if((state_val_12900 === (5))){
var inst_12864 = (state_12899[(7)]);
var inst_12867 = (state_12899[(9)]);
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var inst_12871 = (inst_12863[inst_12864] = inst_12867);
var inst_12872__$1 = (inst_12864 + (1));
var inst_12873 = (inst_12872__$1 < n);
var state_12899__$1 = (function (){var statearr_12913 = state_12899;
(statearr_12913[(12)] = inst_12871);

(statearr_12913[(11)] = inst_12872__$1);

return statearr_12913;
})();
if(cljs.core.truth_(inst_12873)){
var statearr_12914_13464 = state_12899__$1;
(statearr_12914_13464[(1)] = (8));

} else {
var statearr_12915_13465 = state_12899__$1;
(statearr_12915_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (14))){
var inst_12892 = (state_12899[(2)]);
var inst_12893 = cljs.core.async.close_BANG_(out);
var state_12899__$1 = (function (){var statearr_12917 = state_12899;
(statearr_12917[(13)] = inst_12892);

return statearr_12917;
})();
var statearr_12918_13466 = state_12899__$1;
(statearr_12918_13466[(2)] = inst_12893);

(statearr_12918_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (10))){
var inst_12883 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12919_13467 = state_12899__$1;
(statearr_12919_13467[(2)] = inst_12883);

(statearr_12919_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (8))){
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var tmp12916 = inst_12863;
var inst_12863__$1 = tmp12916;
var inst_12864 = inst_12872;
var state_12899__$1 = (function (){var statearr_12920 = state_12899;
(statearr_12920[(7)] = inst_12864);

(statearr_12920[(8)] = inst_12863__$1);

return statearr_12920;
})();
var statearr_12921_13468 = state_12899__$1;
(statearr_12921_13468[(2)] = null);

(statearr_12921_13468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12922[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12922[(1)] = (1));

return statearr_12922;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12899){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12899);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12923){var ex__10883__auto__ = e12923;
var statearr_12924_13469 = state_12899;
(statearr_12924_13469[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12899[(4)]))){
var statearr_12925_13470 = state_12899;
(statearr_12925_13470[(1)] = cljs.core.first((state_12899[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12899;
state_12899 = G__13471;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12926 = f__10974__auto__();
(statearr_12926[(6)] = c__10973__auto___13454);

return statearr_12926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12928 = arguments.length;
switch (G__12928) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10973__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10974__auto__ = (function (){var switch__10879__auto__ = (function (state_12970){
var state_val_12971 = (state_12970[(1)]);
if((state_val_12971 === (7))){
var inst_12966 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
var statearr_12972_13474 = state_12970__$1;
(statearr_12972_13474[(2)] = inst_12966);

(statearr_12972_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (1))){
var inst_12929 = [];
var inst_12930 = inst_12929;
var inst_12931 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12970__$1 = (function (){var statearr_12973 = state_12970;
(statearr_12973[(7)] = inst_12931);

(statearr_12973[(8)] = inst_12930);

return statearr_12973;
})();
var statearr_12974_13475 = state_12970__$1;
(statearr_12974_13475[(2)] = null);

(statearr_12974_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (4))){
var inst_12934 = (state_12970[(9)]);
var inst_12934__$1 = (state_12970[(2)]);
var inst_12935 = (inst_12934__$1 == null);
var inst_12936 = cljs.core.not(inst_12935);
var state_12970__$1 = (function (){var statearr_12975 = state_12970;
(statearr_12975[(9)] = inst_12934__$1);

return statearr_12975;
})();
if(inst_12936){
var statearr_12976_13476 = state_12970__$1;
(statearr_12976_13476[(1)] = (5));

} else {
var statearr_12977_13477 = state_12970__$1;
(statearr_12977_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (15))){
var inst_12960 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
var statearr_12978_13478 = state_12970__$1;
(statearr_12978_13478[(2)] = inst_12960);

(statearr_12978_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (13))){
var state_12970__$1 = state_12970;
var statearr_12979_13479 = state_12970__$1;
(statearr_12979_13479[(2)] = null);

(statearr_12979_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (6))){
var inst_12930 = (state_12970[(8)]);
var inst_12955 = inst_12930.length;
var inst_12956 = (inst_12955 > (0));
var state_12970__$1 = state_12970;
if(cljs.core.truth_(inst_12956)){
var statearr_12980_13480 = state_12970__$1;
(statearr_12980_13480[(1)] = (12));

} else {
var statearr_12981_13481 = state_12970__$1;
(statearr_12981_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (3))){
var inst_12968 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12970__$1,inst_12968);
} else {
if((state_val_12971 === (12))){
var inst_12930 = (state_12970[(8)]);
var inst_12958 = cljs.core.vec(inst_12930);
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12970__$1,(15),out,inst_12958);
} else {
if((state_val_12971 === (2))){
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12970__$1,(4),ch);
} else {
if((state_val_12971 === (11))){
var inst_12938 = (state_12970[(10)]);
var inst_12934 = (state_12970[(9)]);
var inst_12948 = (state_12970[(2)]);
var inst_12949 = [];
var inst_12950 = inst_12949.push(inst_12934);
var inst_12930 = inst_12949;
var inst_12931 = inst_12938;
var state_12970__$1 = (function (){var statearr_12982 = state_12970;
(statearr_12982[(11)] = inst_12950);

(statearr_12982[(12)] = inst_12948);

(statearr_12982[(7)] = inst_12931);

(statearr_12982[(8)] = inst_12930);

return statearr_12982;
})();
var statearr_12983_13482 = state_12970__$1;
(statearr_12983_13482[(2)] = null);

(statearr_12983_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (9))){
var inst_12930 = (state_12970[(8)]);
var inst_12946 = cljs.core.vec(inst_12930);
var state_12970__$1 = state_12970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12970__$1,(11),out,inst_12946);
} else {
if((state_val_12971 === (5))){
var inst_12938 = (state_12970[(10)]);
var inst_12931 = (state_12970[(7)]);
var inst_12934 = (state_12970[(9)]);
var inst_12938__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12934) : f.call(null,inst_12934));
var inst_12939 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12938__$1,inst_12931);
var inst_12940 = cljs.core.keyword_identical_QMARK_(inst_12931,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12941 = ((inst_12939) || (inst_12940));
var state_12970__$1 = (function (){var statearr_12984 = state_12970;
(statearr_12984[(10)] = inst_12938__$1);

return statearr_12984;
})();
if(cljs.core.truth_(inst_12941)){
var statearr_12985_13483 = state_12970__$1;
(statearr_12985_13483[(1)] = (8));

} else {
var statearr_12986_13484 = state_12970__$1;
(statearr_12986_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (14))){
var inst_12963 = (state_12970[(2)]);
var inst_12964 = cljs.core.async.close_BANG_(out);
var state_12970__$1 = (function (){var statearr_12988 = state_12970;
(statearr_12988[(13)] = inst_12963);

return statearr_12988;
})();
var statearr_12989_13485 = state_12970__$1;
(statearr_12989_13485[(2)] = inst_12964);

(statearr_12989_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (10))){
var inst_12953 = (state_12970[(2)]);
var state_12970__$1 = state_12970;
var statearr_12990_13486 = state_12970__$1;
(statearr_12990_13486[(2)] = inst_12953);

(statearr_12990_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12971 === (8))){
var inst_12938 = (state_12970[(10)]);
var inst_12934 = (state_12970[(9)]);
var inst_12930 = (state_12970[(8)]);
var inst_12943 = inst_12930.push(inst_12934);
var tmp12987 = inst_12930;
var inst_12930__$1 = tmp12987;
var inst_12931 = inst_12938;
var state_12970__$1 = (function (){var statearr_12991 = state_12970;
(statearr_12991[(7)] = inst_12931);

(statearr_12991[(14)] = inst_12943);

(statearr_12991[(8)] = inst_12930__$1);

return statearr_12991;
})();
var statearr_12992_13487 = state_12970__$1;
(statearr_12992_13487[(2)] = null);

(statearr_12992_13487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12993[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12993[(1)] = (1));

return statearr_12993;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12970){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12970);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12994){var ex__10883__auto__ = e12994;
var statearr_12995_13488 = state_12970;
(statearr_12995_13488[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12970[(4)]))){
var statearr_12996_13489 = state_12970;
(statearr_12996_13489[(1)] = cljs.core.first((state_12970[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12970;
state_12970 = G__13490;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10975__auto__ = (function (){var statearr_12997 = f__10974__auto__();
(statearr_12997[(6)] = c__10973__auto___13473);

return statearr_12997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10975__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
