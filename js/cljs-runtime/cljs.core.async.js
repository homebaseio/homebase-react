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
var G__11045 = arguments.length;
switch (G__11045) {
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
var val_12751 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12751) : fn1.call(null,val_12751));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12751) : fn1.call(null,val_12751));
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
var G__11048 = arguments.length;
switch (G__11048) {
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
var n__4613__auto___12756 = n;
var x_12757 = (0);
while(true){
if((x_12757 < n__4613__auto___12756)){
(a[x_12757] = x_12757);

var G__12760 = (x_12757 + (1));
x_12757 = G__12760;
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
var G__11063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11055_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11063) : fret.call(null,G__11063));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11057_SHARP_){
var G__11064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11057_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11064) : fret.call(null,G__11064));
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
var G__12765 = (i + (1));
i = G__12765;
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
var len__4736__auto___12766 = arguments.length;
var i__4737__auto___12767 = (0);
while(true){
if((i__4737__auto___12767 < len__4736__auto___12766)){
args__4742__auto__.push((arguments[i__4737__auto___12767]));

var G__12768 = (i__4737__auto___12767 + (1));
i__4737__auto___12767 = G__12768;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11067){
var map__11068 = p__11067;
var map__11068__$1 = (((((!((map__11068 == null))))?(((((map__11068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11068):map__11068);
var opts = map__11068__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11065){
var G__11066 = cljs.core.first(seq11065);
var seq11065__$1 = cljs.core.next(seq11065);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11066,seq11065__$1);
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
var G__11071 = arguments.length;
switch (G__11071) {
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
var c__10971__auto___12770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11097){
var state_val_11098 = (state_11097[(1)]);
if((state_val_11098 === (7))){
var inst_11093 = (state_11097[(2)]);
var state_11097__$1 = state_11097;
var statearr_11099_12771 = state_11097__$1;
(statearr_11099_12771[(2)] = inst_11093);

(statearr_11099_12771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (1))){
var state_11097__$1 = state_11097;
var statearr_11100_12772 = state_11097__$1;
(statearr_11100_12772[(2)] = null);

(statearr_11100_12772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (4))){
var inst_11076 = (state_11097[(7)]);
var inst_11076__$1 = (state_11097[(2)]);
var inst_11077 = (inst_11076__$1 == null);
var state_11097__$1 = (function (){var statearr_11101 = state_11097;
(statearr_11101[(7)] = inst_11076__$1);

return statearr_11101;
})();
if(cljs.core.truth_(inst_11077)){
var statearr_11102_12773 = state_11097__$1;
(statearr_11102_12773[(1)] = (5));

} else {
var statearr_11103_12774 = state_11097__$1;
(statearr_11103_12774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (13))){
var state_11097__$1 = state_11097;
var statearr_11105_12775 = state_11097__$1;
(statearr_11105_12775[(2)] = null);

(statearr_11105_12775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (6))){
var inst_11076 = (state_11097[(7)]);
var state_11097__$1 = state_11097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11097__$1,(11),to,inst_11076);
} else {
if((state_val_11098 === (3))){
var inst_11095 = (state_11097[(2)]);
var state_11097__$1 = state_11097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11097__$1,inst_11095);
} else {
if((state_val_11098 === (12))){
var state_11097__$1 = state_11097;
var statearr_11106_12791 = state_11097__$1;
(statearr_11106_12791[(2)] = null);

(statearr_11106_12791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (2))){
var state_11097__$1 = state_11097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11097__$1,(4),from);
} else {
if((state_val_11098 === (11))){
var inst_11086 = (state_11097[(2)]);
var state_11097__$1 = state_11097;
if(cljs.core.truth_(inst_11086)){
var statearr_11107_12792 = state_11097__$1;
(statearr_11107_12792[(1)] = (12));

} else {
var statearr_11108_12793 = state_11097__$1;
(statearr_11108_12793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (9))){
var state_11097__$1 = state_11097;
var statearr_11109_12794 = state_11097__$1;
(statearr_11109_12794[(2)] = null);

(statearr_11109_12794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (5))){
var state_11097__$1 = state_11097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11110_12795 = state_11097__$1;
(statearr_11110_12795[(1)] = (8));

} else {
var statearr_11111_12796 = state_11097__$1;
(statearr_11111_12796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (14))){
var inst_11091 = (state_11097[(2)]);
var state_11097__$1 = state_11097;
var statearr_11112_12797 = state_11097__$1;
(statearr_11112_12797[(2)] = inst_11091);

(statearr_11112_12797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (10))){
var inst_11083 = (state_11097[(2)]);
var state_11097__$1 = state_11097;
var statearr_11113_12798 = state_11097__$1;
(statearr_11113_12798[(2)] = inst_11083);

(statearr_11113_12798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (8))){
var inst_11080 = cljs.core.async.close_BANG_(to);
var state_11097__$1 = state_11097;
var statearr_11114_12799 = state_11097__$1;
(statearr_11114_12799[(2)] = inst_11080);

(statearr_11114_12799[(1)] = (10));


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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_11115 = [null,null,null,null,null,null,null,null];
(statearr_11115[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_11115[(1)] = (1));

return statearr_11115;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_11097){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11097);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11116){var ex__10882__auto__ = e11116;
var statearr_11117_12800 = state_11097;
(statearr_11117_12800[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11097[(4)]))){
var statearr_11118_12801 = state_11097;
(statearr_11118_12801[(1)] = cljs.core.first((state_11097[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12802 = state_11097;
state_11097 = G__12802;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_11097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_11097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11119 = f__10972__auto__();
(statearr_11119[(6)] = c__10971__auto___12770);

return statearr_11119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
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
var c__10971__auto___12803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11128){
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
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0 = (function (){
var statearr_11131 = [null,null,null,null,null,null,null,null];
(statearr_11131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__);

(statearr_11131[(1)] = (1));

return statearr_11131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1 = (function (state_11128){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11128);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11132){var ex__10882__auto__ = e11132;
var statearr_11133_12805 = state_11128;
(statearr_11133_12805[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11128[(4)]))){
var statearr_11134_12806 = state_11128;
(statearr_11134_12806[(1)] = cljs.core.first((state_11128[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12808 = state_11128;
state_11128 = G__12808;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = function(state_11128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1.call(this,state_11128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11136 = f__10972__auto__();
(statearr_11136[(6)] = c__10971__auto___12803);

return statearr_11136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11138){
var vec__11139 = p__11138;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(1),null);
var job = vec__11139;
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
var n__4613__auto___12809 = n;
var __12810 = (0);
while(true){
if((__12810 < n__4613__auto___12809)){
var G__11145_12811 = type;
var G__11145_12812__$1 = (((G__11145_12811 instanceof cljs.core.Keyword))?G__11145_12811.fqn:null);
switch (G__11145_12812__$1) {
case "compute":
var c__10971__auto___12814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12810,c__10971__auto___12814,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async){
return (function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = ((function (__12810,c__10971__auto___12814,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async){
return (function (state_11158){
var state_val_11159 = (state_11158[(1)]);
if((state_val_11159 === (1))){
var state_11158__$1 = state_11158;
var statearr_11162_12816 = state_11158__$1;
(statearr_11162_12816[(2)] = null);

(statearr_11162_12816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (2))){
var state_11158__$1 = state_11158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11158__$1,(4),jobs);
} else {
if((state_val_11159 === (3))){
var inst_11156 = (state_11158[(2)]);
var state_11158__$1 = state_11158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11158__$1,inst_11156);
} else {
if((state_val_11159 === (4))){
var inst_11148 = (state_11158[(2)]);
var inst_11149 = process(inst_11148);
var state_11158__$1 = state_11158;
if(cljs.core.truth_(inst_11149)){
var statearr_11166_12818 = state_11158__$1;
(statearr_11166_12818[(1)] = (5));

} else {
var statearr_11167_12819 = state_11158__$1;
(statearr_11167_12819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (5))){
var state_11158__$1 = state_11158;
var statearr_11168_12820 = state_11158__$1;
(statearr_11168_12820[(2)] = null);

(statearr_11168_12820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (6))){
var state_11158__$1 = state_11158;
var statearr_11169_12821 = state_11158__$1;
(statearr_11169_12821[(2)] = null);

(statearr_11169_12821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11159 === (7))){
var inst_11154 = (state_11158[(2)]);
var state_11158__$1 = state_11158;
var statearr_11170_12822 = state_11158__$1;
(statearr_11170_12822[(2)] = inst_11154);

(statearr_11170_12822[(1)] = (3));


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
});})(__12810,c__10971__auto___12814,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async))
;
return ((function (__12810,switch__10878__auto__,c__10971__auto___12814,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0 = (function (){
var statearr_11171 = [null,null,null,null,null,null,null];
(statearr_11171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__);

(statearr_11171[(1)] = (1));

return statearr_11171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1 = (function (state_11158){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11158);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11172){var ex__10882__auto__ = e11172;
var statearr_11173_12823 = state_11158;
(statearr_11173_12823[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11158[(4)]))){
var statearr_11174_12824 = state_11158;
(statearr_11174_12824[(1)] = cljs.core.first((state_11158[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12825 = state_11158;
state_11158 = G__12825;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = function(state_11158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1.call(this,state_11158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__;
})()
;})(__12810,switch__10878__auto__,c__10971__auto___12814,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async))
})();
var state__10973__auto__ = (function (){var statearr_11175 = f__10972__auto__();
(statearr_11175[(6)] = c__10971__auto___12814);

return statearr_11175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
});})(__12810,c__10971__auto___12814,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async))
);


break;
case "async":
var c__10971__auto___12826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12810,c__10971__auto___12826,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async){
return (function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = ((function (__12810,c__10971__auto___12826,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async){
return (function (state_11188){
var state_val_11189 = (state_11188[(1)]);
if((state_val_11189 === (1))){
var state_11188__$1 = state_11188;
var statearr_11190_12827 = state_11188__$1;
(statearr_11190_12827[(2)] = null);

(statearr_11190_12827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (2))){
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11188__$1,(4),jobs);
} else {
if((state_val_11189 === (3))){
var inst_11186 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11188__$1,inst_11186);
} else {
if((state_val_11189 === (4))){
var inst_11178 = (state_11188[(2)]);
var inst_11179 = async(inst_11178);
var state_11188__$1 = state_11188;
if(cljs.core.truth_(inst_11179)){
var statearr_11191_12828 = state_11188__$1;
(statearr_11191_12828[(1)] = (5));

} else {
var statearr_11192_12829 = state_11188__$1;
(statearr_11192_12829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (5))){
var state_11188__$1 = state_11188;
var statearr_11193_12830 = state_11188__$1;
(statearr_11193_12830[(2)] = null);

(statearr_11193_12830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (6))){
var state_11188__$1 = state_11188;
var statearr_11194_12831 = state_11188__$1;
(statearr_11194_12831[(2)] = null);

(statearr_11194_12831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (7))){
var inst_11184 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11195_12832 = state_11188__$1;
(statearr_11195_12832[(2)] = inst_11184);

(statearr_11195_12832[(1)] = (3));


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
});})(__12810,c__10971__auto___12826,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async))
;
return ((function (__12810,switch__10878__auto__,c__10971__auto___12826,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0 = (function (){
var statearr_11196 = [null,null,null,null,null,null,null];
(statearr_11196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__);

(statearr_11196[(1)] = (1));

return statearr_11196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1 = (function (state_11188){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11188);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11197){var ex__10882__auto__ = e11197;
var statearr_11198_12833 = state_11188;
(statearr_11198_12833[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11188[(4)]))){
var statearr_11199_12834 = state_11188;
(statearr_11199_12834[(1)] = cljs.core.first((state_11188[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12835 = state_11188;
state_11188 = G__12835;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = function(state_11188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1.call(this,state_11188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__;
})()
;})(__12810,switch__10878__auto__,c__10971__auto___12826,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async))
})();
var state__10973__auto__ = (function (){var statearr_11200 = f__10972__auto__();
(statearr_11200[(6)] = c__10971__auto___12826);

return statearr_11200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
});})(__12810,c__10971__auto___12826,G__11145_12811,G__11145_12812__$1,n__4613__auto___12809,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11145_12812__$1)].join('')));

}

var G__12836 = (__12810 + (1));
__12810 = G__12836;
continue;
} else {
}
break;
}

var c__10971__auto___12837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11223){
var state_val_11224 = (state_11223[(1)]);
if((state_val_11224 === (7))){
var inst_11219 = (state_11223[(2)]);
var state_11223__$1 = state_11223;
var statearr_11225_12838 = state_11223__$1;
(statearr_11225_12838[(2)] = inst_11219);

(statearr_11225_12838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (1))){
var state_11223__$1 = state_11223;
var statearr_11226_12839 = state_11223__$1;
(statearr_11226_12839[(2)] = null);

(statearr_11226_12839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (4))){
var inst_11203 = (state_11223[(7)]);
var inst_11203__$1 = (state_11223[(2)]);
var inst_11204 = (inst_11203__$1 == null);
var state_11223__$1 = (function (){var statearr_11227 = state_11223;
(statearr_11227[(7)] = inst_11203__$1);

return statearr_11227;
})();
if(cljs.core.truth_(inst_11204)){
var statearr_11228_12840 = state_11223__$1;
(statearr_11228_12840[(1)] = (5));

} else {
var statearr_11229_12841 = state_11223__$1;
(statearr_11229_12841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (6))){
var inst_11208 = (state_11223[(8)]);
var inst_11203 = (state_11223[(7)]);
var inst_11208__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11211 = [inst_11203,inst_11208__$1];
var inst_11212 = (new cljs.core.PersistentVector(null,2,(5),inst_11210,inst_11211,null));
var state_11223__$1 = (function (){var statearr_11230 = state_11223;
(statearr_11230[(8)] = inst_11208__$1);

return statearr_11230;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11223__$1,(8),jobs,inst_11212);
} else {
if((state_val_11224 === (3))){
var inst_11221 = (state_11223[(2)]);
var state_11223__$1 = state_11223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11223__$1,inst_11221);
} else {
if((state_val_11224 === (2))){
var state_11223__$1 = state_11223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11223__$1,(4),from);
} else {
if((state_val_11224 === (9))){
var inst_11216 = (state_11223[(2)]);
var state_11223__$1 = (function (){var statearr_11231 = state_11223;
(statearr_11231[(9)] = inst_11216);

return statearr_11231;
})();
var statearr_11232_12843 = state_11223__$1;
(statearr_11232_12843[(2)] = null);

(statearr_11232_12843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (5))){
var inst_11206 = cljs.core.async.close_BANG_(jobs);
var state_11223__$1 = state_11223;
var statearr_11233_12844 = state_11223__$1;
(statearr_11233_12844[(2)] = inst_11206);

(statearr_11233_12844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (8))){
var inst_11208 = (state_11223[(8)]);
var inst_11214 = (state_11223[(2)]);
var state_11223__$1 = (function (){var statearr_11234 = state_11223;
(statearr_11234[(10)] = inst_11214);

return statearr_11234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11223__$1,(9),results,inst_11208);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0 = (function (){
var statearr_11235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__);

(statearr_11235[(1)] = (1));

return statearr_11235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1 = (function (state_11223){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11223);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11236){var ex__10882__auto__ = e11236;
var statearr_11237_12845 = state_11223;
(statearr_11237_12845[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11223[(4)]))){
var statearr_11238_12846 = state_11223;
(statearr_11238_12846[(1)] = cljs.core.first((state_11223[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12847 = state_11223;
state_11223 = G__12847;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = function(state_11223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1.call(this,state_11223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11239 = f__10972__auto__();
(statearr_11239[(6)] = c__10971__auto___12837);

return statearr_11239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


var c__10971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11277){
var state_val_11278 = (state_11277[(1)]);
if((state_val_11278 === (7))){
var inst_11273 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11281_12848 = state_11277__$1;
(statearr_11281_12848[(2)] = inst_11273);

(statearr_11281_12848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (20))){
var state_11277__$1 = state_11277;
var statearr_11282_12849 = state_11277__$1;
(statearr_11282_12849[(2)] = null);

(statearr_11282_12849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (1))){
var state_11277__$1 = state_11277;
var statearr_11283_12850 = state_11277__$1;
(statearr_11283_12850[(2)] = null);

(statearr_11283_12850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (4))){
var inst_11242 = (state_11277[(7)]);
var inst_11242__$1 = (state_11277[(2)]);
var inst_11243 = (inst_11242__$1 == null);
var state_11277__$1 = (function (){var statearr_11284 = state_11277;
(statearr_11284[(7)] = inst_11242__$1);

return statearr_11284;
})();
if(cljs.core.truth_(inst_11243)){
var statearr_11285_12851 = state_11277__$1;
(statearr_11285_12851[(1)] = (5));

} else {
var statearr_11286_12852 = state_11277__$1;
(statearr_11286_12852[(1)] = (6));

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
var statearr_11287_12853 = state_11277__$1;
(statearr_11287_12853[(2)] = inst_11268);

(statearr_11287_12853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (13))){
var inst_11270 = (state_11277[(2)]);
var state_11277__$1 = (function (){var statearr_11288 = state_11277;
(statearr_11288[(9)] = inst_11270);

return statearr_11288;
})();
var statearr_11289_12854 = state_11277__$1;
(statearr_11289_12854[(2)] = null);

(statearr_11289_12854[(1)] = (2));


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
var statearr_11290_12856 = state_11277__$1;
(statearr_11290_12856[(1)] = (19));

} else {
var statearr_11291_12857 = state_11277__$1;
(statearr_11291_12857[(1)] = (20));

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
var statearr_11292_12858 = state_11277__$1;
(statearr_11292_12858[(2)] = null);

(statearr_11292_12858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (11))){
var inst_11252 = (state_11277[(2)]);
var state_11277__$1 = (function (){var statearr_11293 = state_11277;
(statearr_11293[(10)] = inst_11252);

return statearr_11293;
})();
var statearr_11294_12859 = state_11277__$1;
(statearr_11294_12859[(2)] = null);

(statearr_11294_12859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (9))){
var state_11277__$1 = state_11277;
var statearr_11295_12860 = state_11277__$1;
(statearr_11295_12860[(2)] = null);

(statearr_11295_12860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (5))){
var state_11277__$1 = state_11277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11296_12861 = state_11277__$1;
(statearr_11296_12861[(1)] = (8));

} else {
var statearr_11297_12862 = state_11277__$1;
(statearr_11297_12862[(1)] = (9));

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
var statearr_11299_12863 = state_11277__$1;
(statearr_11299_12863[(1)] = (15));

} else {
var statearr_11300_12864 = state_11277__$1;
(statearr_11300_12864[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (16))){
var state_11277__$1 = state_11277;
var statearr_11301_12865 = state_11277__$1;
(statearr_11301_12865[(2)] = false);

(statearr_11301_12865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (10))){
var inst_11249 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11302_12866 = state_11277__$1;
(statearr_11302_12866[(2)] = inst_11249);

(statearr_11302_12866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (18))){
var inst_11260 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11303_12867 = state_11277__$1;
(statearr_11303_12867[(2)] = inst_11260);

(statearr_11303_12867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11278 === (8))){
var inst_11246 = cljs.core.async.close_BANG_(to);
var state_11277__$1 = state_11277;
var statearr_11304_12868 = state_11277__$1;
(statearr_11304_12868[(2)] = inst_11246);

(statearr_11304_12868[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0 = (function (){
var statearr_11305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__);

(statearr_11305[(1)] = (1));

return statearr_11305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1 = (function (state_11277){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11277);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11306){var ex__10882__auto__ = e11306;
var statearr_11307_12869 = state_11277;
(statearr_11307_12869[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11277[(4)]))){
var statearr_11308_12870 = state_11277;
(statearr_11308_12870[(1)] = cljs.core.first((state_11277[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12871 = state_11277;
state_11277 = G__12871;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__ = function(state_11277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1.call(this,state_11277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11309 = f__10972__auto__();
(statearr_11309[(6)] = c__10971__auto__);

return statearr_11309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));

return c__10971__auto__;
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
var G__11323 = arguments.length;
switch (G__11323) {
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
var G__11327 = arguments.length;
switch (G__11327) {
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
var G__11329 = arguments.length;
switch (G__11329) {
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
var c__10971__auto___12876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11355){
var state_val_11356 = (state_11355[(1)]);
if((state_val_11356 === (7))){
var inst_11351 = (state_11355[(2)]);
var state_11355__$1 = state_11355;
var statearr_11358_12877 = state_11355__$1;
(statearr_11358_12877[(2)] = inst_11351);

(statearr_11358_12877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (1))){
var state_11355__$1 = state_11355;
var statearr_11359_12878 = state_11355__$1;
(statearr_11359_12878[(2)] = null);

(statearr_11359_12878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (4))){
var inst_11332 = (state_11355[(7)]);
var inst_11332__$1 = (state_11355[(2)]);
var inst_11333 = (inst_11332__$1 == null);
var state_11355__$1 = (function (){var statearr_11360 = state_11355;
(statearr_11360[(7)] = inst_11332__$1);

return statearr_11360;
})();
if(cljs.core.truth_(inst_11333)){
var statearr_11361_12879 = state_11355__$1;
(statearr_11361_12879[(1)] = (5));

} else {
var statearr_11362_12880 = state_11355__$1;
(statearr_11362_12880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (13))){
var state_11355__$1 = state_11355;
var statearr_11365_12881 = state_11355__$1;
(statearr_11365_12881[(2)] = null);

(statearr_11365_12881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (6))){
var inst_11332 = (state_11355[(7)]);
var inst_11338 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11332) : p.call(null,inst_11332));
var state_11355__$1 = state_11355;
if(cljs.core.truth_(inst_11338)){
var statearr_11368_12882 = state_11355__$1;
(statearr_11368_12882[(1)] = (9));

} else {
var statearr_11369_12883 = state_11355__$1;
(statearr_11369_12883[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (3))){
var inst_11353 = (state_11355[(2)]);
var state_11355__$1 = state_11355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11355__$1,inst_11353);
} else {
if((state_val_11356 === (12))){
var state_11355__$1 = state_11355;
var statearr_11370_12884 = state_11355__$1;
(statearr_11370_12884[(2)] = null);

(statearr_11370_12884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (2))){
var state_11355__$1 = state_11355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11355__$1,(4),ch);
} else {
if((state_val_11356 === (11))){
var inst_11332 = (state_11355[(7)]);
var inst_11342 = (state_11355[(2)]);
var state_11355__$1 = state_11355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11355__$1,(8),inst_11342,inst_11332);
} else {
if((state_val_11356 === (9))){
var state_11355__$1 = state_11355;
var statearr_11371_12885 = state_11355__$1;
(statearr_11371_12885[(2)] = tc);

(statearr_11371_12885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (5))){
var inst_11335 = cljs.core.async.close_BANG_(tc);
var inst_11336 = cljs.core.async.close_BANG_(fc);
var state_11355__$1 = (function (){var statearr_11372 = state_11355;
(statearr_11372[(8)] = inst_11335);

return statearr_11372;
})();
var statearr_11375_12886 = state_11355__$1;
(statearr_11375_12886[(2)] = inst_11336);

(statearr_11375_12886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (14))){
var inst_11349 = (state_11355[(2)]);
var state_11355__$1 = state_11355;
var statearr_11377_12887 = state_11355__$1;
(statearr_11377_12887[(2)] = inst_11349);

(statearr_11377_12887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (10))){
var state_11355__$1 = state_11355;
var statearr_11378_12888 = state_11355__$1;
(statearr_11378_12888[(2)] = fc);

(statearr_11378_12888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11356 === (8))){
var inst_11344 = (state_11355[(2)]);
var state_11355__$1 = state_11355;
if(cljs.core.truth_(inst_11344)){
var statearr_11379_12889 = state_11355__$1;
(statearr_11379_12889[(1)] = (12));

} else {
var statearr_11380_12890 = state_11355__$1;
(statearr_11380_12890[(1)] = (13));

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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_11381 = [null,null,null,null,null,null,null,null,null];
(statearr_11381[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_11381[(1)] = (1));

return statearr_11381;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_11355){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11355);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11382){var ex__10882__auto__ = e11382;
var statearr_11383_12892 = state_11355;
(statearr_11383_12892[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11355[(4)]))){
var statearr_11384_12893 = state_11355;
(statearr_11384_12893[(1)] = cljs.core.first((state_11355[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12894 = state_11355;
state_11355 = G__12894;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_11355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_11355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11385 = f__10972__auto__();
(statearr_11385[(6)] = c__10971__auto___12876);

return statearr_11385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
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
var c__10971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11407){
var state_val_11408 = (state_11407[(1)]);
if((state_val_11408 === (7))){
var inst_11403 = (state_11407[(2)]);
var state_11407__$1 = state_11407;
var statearr_11409_12895 = state_11407__$1;
(statearr_11409_12895[(2)] = inst_11403);

(statearr_11409_12895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (1))){
var inst_11386 = init;
var inst_11387 = inst_11386;
var state_11407__$1 = (function (){var statearr_11410 = state_11407;
(statearr_11410[(7)] = inst_11387);

return statearr_11410;
})();
var statearr_11411_12896 = state_11407__$1;
(statearr_11411_12896[(2)] = null);

(statearr_11411_12896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (4))){
var inst_11390 = (state_11407[(8)]);
var inst_11390__$1 = (state_11407[(2)]);
var inst_11391 = (inst_11390__$1 == null);
var state_11407__$1 = (function (){var statearr_11429 = state_11407;
(statearr_11429[(8)] = inst_11390__$1);

return statearr_11429;
})();
if(cljs.core.truth_(inst_11391)){
var statearr_11430_12897 = state_11407__$1;
(statearr_11430_12897[(1)] = (5));

} else {
var statearr_11431_12898 = state_11407__$1;
(statearr_11431_12898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (6))){
var inst_11390 = (state_11407[(8)]);
var inst_11394 = (state_11407[(9)]);
var inst_11387 = (state_11407[(7)]);
var inst_11394__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11387,inst_11390) : f.call(null,inst_11387,inst_11390));
var inst_11395 = cljs.core.reduced_QMARK_(inst_11394__$1);
var state_11407__$1 = (function (){var statearr_11432 = state_11407;
(statearr_11432[(9)] = inst_11394__$1);

return statearr_11432;
})();
if(inst_11395){
var statearr_11433_12899 = state_11407__$1;
(statearr_11433_12899[(1)] = (8));

} else {
var statearr_11434_12900 = state_11407__$1;
(statearr_11434_12900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (3))){
var inst_11405 = (state_11407[(2)]);
var state_11407__$1 = state_11407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11407__$1,inst_11405);
} else {
if((state_val_11408 === (2))){
var state_11407__$1 = state_11407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11407__$1,(4),ch);
} else {
if((state_val_11408 === (9))){
var inst_11394 = (state_11407[(9)]);
var inst_11387 = inst_11394;
var state_11407__$1 = (function (){var statearr_11435 = state_11407;
(statearr_11435[(7)] = inst_11387);

return statearr_11435;
})();
var statearr_11436_12903 = state_11407__$1;
(statearr_11436_12903[(2)] = null);

(statearr_11436_12903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (5))){
var inst_11387 = (state_11407[(7)]);
var state_11407__$1 = state_11407;
var statearr_11437_12904 = state_11407__$1;
(statearr_11437_12904[(2)] = inst_11387);

(statearr_11437_12904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (10))){
var inst_11401 = (state_11407[(2)]);
var state_11407__$1 = state_11407;
var statearr_11438_12905 = state_11407__$1;
(statearr_11438_12905[(2)] = inst_11401);

(statearr_11438_12905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (8))){
var inst_11394 = (state_11407[(9)]);
var inst_11397 = cljs.core.deref(inst_11394);
var state_11407__$1 = state_11407;
var statearr_11439_12906 = state_11407__$1;
(statearr_11439_12906[(2)] = inst_11397);

(statearr_11439_12906[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10879__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10879__auto____0 = (function (){
var statearr_11440 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11440[(0)] = cljs$core$async$reduce_$_state_machine__10879__auto__);

(statearr_11440[(1)] = (1));

return statearr_11440;
});
var cljs$core$async$reduce_$_state_machine__10879__auto____1 = (function (state_11407){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11407);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11441){var ex__10882__auto__ = e11441;
var statearr_11442_12907 = state_11407;
(statearr_11442_12907[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11407[(4)]))){
var statearr_11443_12908 = state_11407;
(statearr_11443_12908[(1)] = cljs.core.first((state_11407[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12909 = state_11407;
state_11407 = G__12909;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10879__auto__ = function(state_11407){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10879__auto____1.call(this,state_11407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10879__auto____0;
cljs$core$async$reduce_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10879__auto____1;
return cljs$core$async$reduce_$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11444 = f__10972__auto__();
(statearr_11444[(6)] = c__10971__auto__);

return statearr_11444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));

return c__10971__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11450){
var state_val_11451 = (state_11450[(1)]);
if((state_val_11451 === (1))){
var inst_11445 = cljs.core.async.reduce(f__$1,init,ch);
var state_11450__$1 = state_11450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11450__$1,(2),inst_11445);
} else {
if((state_val_11451 === (2))){
var inst_11447 = (state_11450[(2)]);
var inst_11448 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11447) : f__$1.call(null,inst_11447));
var state_11450__$1 = state_11450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11450__$1,inst_11448);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10879__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10879__auto____0 = (function (){
var statearr_11452 = [null,null,null,null,null,null,null];
(statearr_11452[(0)] = cljs$core$async$transduce_$_state_machine__10879__auto__);

(statearr_11452[(1)] = (1));

return statearr_11452;
});
var cljs$core$async$transduce_$_state_machine__10879__auto____1 = (function (state_11450){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11450);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11453){var ex__10882__auto__ = e11453;
var statearr_11454_12910 = state_11450;
(statearr_11454_12910[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11450[(4)]))){
var statearr_11455_12911 = state_11450;
(statearr_11455_12911[(1)] = cljs.core.first((state_11450[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12912 = state_11450;
state_11450 = G__12912;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10879__auto__ = function(state_11450){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10879__auto____1.call(this,state_11450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10879__auto____0;
cljs$core$async$transduce_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10879__auto____1;
return cljs$core$async$transduce_$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11464 = f__10972__auto__();
(statearr_11464[(6)] = c__10971__auto__);

return statearr_11464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));

return c__10971__auto__;
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
var G__11466 = arguments.length;
switch (G__11466) {
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
var c__10971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11491){
var state_val_11492 = (state_11491[(1)]);
if((state_val_11492 === (7))){
var inst_11473 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
var statearr_11493_12914 = state_11491__$1;
(statearr_11493_12914[(2)] = inst_11473);

(statearr_11493_12914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (1))){
var inst_11467 = cljs.core.seq(coll);
var inst_11468 = inst_11467;
var state_11491__$1 = (function (){var statearr_11494 = state_11491;
(statearr_11494[(7)] = inst_11468);

return statearr_11494;
})();
var statearr_11495_12915 = state_11491__$1;
(statearr_11495_12915[(2)] = null);

(statearr_11495_12915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (4))){
var inst_11468 = (state_11491[(7)]);
var inst_11471 = cljs.core.first(inst_11468);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11491__$1,(7),ch,inst_11471);
} else {
if((state_val_11492 === (13))){
var inst_11485 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
var statearr_11496_12916 = state_11491__$1;
(statearr_11496_12916[(2)] = inst_11485);

(statearr_11496_12916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (6))){
var inst_11476 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
if(cljs.core.truth_(inst_11476)){
var statearr_11497_12917 = state_11491__$1;
(statearr_11497_12917[(1)] = (8));

} else {
var statearr_11498_12918 = state_11491__$1;
(statearr_11498_12918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (3))){
var inst_11489 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11491__$1,inst_11489);
} else {
if((state_val_11492 === (12))){
var state_11491__$1 = state_11491;
var statearr_11499_12919 = state_11491__$1;
(statearr_11499_12919[(2)] = null);

(statearr_11499_12919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (2))){
var inst_11468 = (state_11491[(7)]);
var state_11491__$1 = state_11491;
if(cljs.core.truth_(inst_11468)){
var statearr_11500_12920 = state_11491__$1;
(statearr_11500_12920[(1)] = (4));

} else {
var statearr_11501_12922 = state_11491__$1;
(statearr_11501_12922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (11))){
var inst_11482 = cljs.core.async.close_BANG_(ch);
var state_11491__$1 = state_11491;
var statearr_11502_12923 = state_11491__$1;
(statearr_11502_12923[(2)] = inst_11482);

(statearr_11502_12923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (9))){
var state_11491__$1 = state_11491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11503_12924 = state_11491__$1;
(statearr_11503_12924[(1)] = (11));

} else {
var statearr_11504_12925 = state_11491__$1;
(statearr_11504_12925[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (5))){
var inst_11468 = (state_11491[(7)]);
var state_11491__$1 = state_11491;
var statearr_11507_12926 = state_11491__$1;
(statearr_11507_12926[(2)] = inst_11468);

(statearr_11507_12926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (10))){
var inst_11487 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
var statearr_11508_12927 = state_11491__$1;
(statearr_11508_12927[(2)] = inst_11487);

(statearr_11508_12927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (8))){
var inst_11468 = (state_11491[(7)]);
var inst_11478 = cljs.core.next(inst_11468);
var inst_11468__$1 = inst_11478;
var state_11491__$1 = (function (){var statearr_11509 = state_11491;
(statearr_11509[(7)] = inst_11468__$1);

return statearr_11509;
})();
var statearr_11510_12928 = state_11491__$1;
(statearr_11510_12928[(2)] = null);

(statearr_11510_12928[(1)] = (2));


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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_11511 = [null,null,null,null,null,null,null,null];
(statearr_11511[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_11511[(1)] = (1));

return statearr_11511;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_11491){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11491);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11512){var ex__10882__auto__ = e11512;
var statearr_11513_12931 = state_11491;
(statearr_11513_12931[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11491[(4)]))){
var statearr_11514_12932 = state_11491;
(statearr_11514_12932[(1)] = cljs.core.first((state_11491[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12933 = state_11491;
state_11491 = G__12933;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_11491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_11491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11515 = f__10972__auto__();
(statearr_11515[(6)] = c__10971__auto__);

return statearr_11515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));

return c__10971__auto__;
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
var G__11517 = arguments.length;
switch (G__11517) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12935 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12935(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12936 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12936(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12937 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12937(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12938 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12938(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11536 = (function (ch,cs,meta11537){
this.ch = ch;
this.cs = cs;
this.meta11537 = meta11537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11538,meta11537__$1){
var self__ = this;
var _11538__$1 = this;
return (new cljs.core.async.t_cljs$core$async11536(self__.ch,self__.cs,meta11537__$1));
}));

(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11538){
var self__ = this;
var _11538__$1 = this;
return self__.meta11537;
}));

(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11537","meta11537",-217105377,null)], null);
}));

(cljs.core.async.t_cljs$core$async11536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11536");

(cljs.core.async.t_cljs$core$async11536.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11536.
 */
cljs.core.async.__GT_t_cljs$core$async11536 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11536(ch__$1,cs__$1,meta11537){
return (new cljs.core.async.t_cljs$core$async11536(ch__$1,cs__$1,meta11537));
});

}

return (new cljs.core.async.t_cljs$core$async11536(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10971__auto___12941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11676){
var state_val_11677 = (state_11676[(1)]);
if((state_val_11677 === (7))){
var inst_11672 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11678_12942 = state_11676__$1;
(statearr_11678_12942[(2)] = inst_11672);

(statearr_11678_12942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (20))){
var inst_11576 = (state_11676[(7)]);
var inst_11588 = cljs.core.first(inst_11576);
var inst_11589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11588,(0),null);
var inst_11590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11588,(1),null);
var state_11676__$1 = (function (){var statearr_11679 = state_11676;
(statearr_11679[(8)] = inst_11589);

return statearr_11679;
})();
if(cljs.core.truth_(inst_11590)){
var statearr_11680_12943 = state_11676__$1;
(statearr_11680_12943[(1)] = (22));

} else {
var statearr_11681_12944 = state_11676__$1;
(statearr_11681_12944[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (27))){
var inst_11620 = (state_11676[(9)]);
var inst_11545 = (state_11676[(10)]);
var inst_11618 = (state_11676[(11)]);
var inst_11626 = (state_11676[(12)]);
var inst_11626__$1 = cljs.core._nth(inst_11618,inst_11620);
var inst_11627 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11626__$1,inst_11545,done);
var state_11676__$1 = (function (){var statearr_11682 = state_11676;
(statearr_11682[(12)] = inst_11626__$1);

return statearr_11682;
})();
if(cljs.core.truth_(inst_11627)){
var statearr_11683_12945 = state_11676__$1;
(statearr_11683_12945[(1)] = (30));

} else {
var statearr_11684_12946 = state_11676__$1;
(statearr_11684_12946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (1))){
var state_11676__$1 = state_11676;
var statearr_11685_12947 = state_11676__$1;
(statearr_11685_12947[(2)] = null);

(statearr_11685_12947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (24))){
var inst_11576 = (state_11676[(7)]);
var inst_11595 = (state_11676[(2)]);
var inst_11596 = cljs.core.next(inst_11576);
var inst_11554 = inst_11596;
var inst_11555 = null;
var inst_11556 = (0);
var inst_11557 = (0);
var state_11676__$1 = (function (){var statearr_11686 = state_11676;
(statearr_11686[(13)] = inst_11556);

(statearr_11686[(14)] = inst_11557);

(statearr_11686[(15)] = inst_11595);

(statearr_11686[(16)] = inst_11554);

(statearr_11686[(17)] = inst_11555);

return statearr_11686;
})();
var statearr_11687_12948 = state_11676__$1;
(statearr_11687_12948[(2)] = null);

(statearr_11687_12948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (39))){
var state_11676__$1 = state_11676;
var statearr_11691_12949 = state_11676__$1;
(statearr_11691_12949[(2)] = null);

(statearr_11691_12949[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (4))){
var inst_11545 = (state_11676[(10)]);
var inst_11545__$1 = (state_11676[(2)]);
var inst_11546 = (inst_11545__$1 == null);
var state_11676__$1 = (function (){var statearr_11692 = state_11676;
(statearr_11692[(10)] = inst_11545__$1);

return statearr_11692;
})();
if(cljs.core.truth_(inst_11546)){
var statearr_11693_12951 = state_11676__$1;
(statearr_11693_12951[(1)] = (5));

} else {
var statearr_11694_12952 = state_11676__$1;
(statearr_11694_12952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (15))){
var inst_11556 = (state_11676[(13)]);
var inst_11557 = (state_11676[(14)]);
var inst_11554 = (state_11676[(16)]);
var inst_11555 = (state_11676[(17)]);
var inst_11572 = (state_11676[(2)]);
var inst_11573 = (inst_11557 + (1));
var tmp11688 = inst_11556;
var tmp11689 = inst_11554;
var tmp11690 = inst_11555;
var inst_11554__$1 = tmp11689;
var inst_11555__$1 = tmp11690;
var inst_11556__$1 = tmp11688;
var inst_11557__$1 = inst_11573;
var state_11676__$1 = (function (){var statearr_11695 = state_11676;
(statearr_11695[(13)] = inst_11556__$1);

(statearr_11695[(14)] = inst_11557__$1);

(statearr_11695[(18)] = inst_11572);

(statearr_11695[(16)] = inst_11554__$1);

(statearr_11695[(17)] = inst_11555__$1);

return statearr_11695;
})();
var statearr_11696_12953 = state_11676__$1;
(statearr_11696_12953[(2)] = null);

(statearr_11696_12953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (21))){
var inst_11599 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11700_12954 = state_11676__$1;
(statearr_11700_12954[(2)] = inst_11599);

(statearr_11700_12954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (31))){
var inst_11626 = (state_11676[(12)]);
var inst_11630 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11626);
var state_11676__$1 = state_11676;
var statearr_11701_12955 = state_11676__$1;
(statearr_11701_12955[(2)] = inst_11630);

(statearr_11701_12955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (32))){
var inst_11617 = (state_11676[(19)]);
var inst_11619 = (state_11676[(20)]);
var inst_11620 = (state_11676[(9)]);
var inst_11618 = (state_11676[(11)]);
var inst_11632 = (state_11676[(2)]);
var inst_11633 = (inst_11620 + (1));
var tmp11697 = inst_11617;
var tmp11698 = inst_11619;
var tmp11699 = inst_11618;
var inst_11617__$1 = tmp11697;
var inst_11618__$1 = tmp11699;
var inst_11619__$1 = tmp11698;
var inst_11620__$1 = inst_11633;
var state_11676__$1 = (function (){var statearr_11702 = state_11676;
(statearr_11702[(19)] = inst_11617__$1);

(statearr_11702[(20)] = inst_11619__$1);

(statearr_11702[(9)] = inst_11620__$1);

(statearr_11702[(11)] = inst_11618__$1);

(statearr_11702[(21)] = inst_11632);

return statearr_11702;
})();
var statearr_11703_12956 = state_11676__$1;
(statearr_11703_12956[(2)] = null);

(statearr_11703_12956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (40))){
var inst_11645 = (state_11676[(22)]);
var inst_11649 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11645);
var state_11676__$1 = state_11676;
var statearr_11704_12957 = state_11676__$1;
(statearr_11704_12957[(2)] = inst_11649);

(statearr_11704_12957[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (33))){
var inst_11636 = (state_11676[(23)]);
var inst_11638 = cljs.core.chunked_seq_QMARK_(inst_11636);
var state_11676__$1 = state_11676;
if(inst_11638){
var statearr_11705_12958 = state_11676__$1;
(statearr_11705_12958[(1)] = (36));

} else {
var statearr_11706_12959 = state_11676__$1;
(statearr_11706_12959[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (13))){
var inst_11566 = (state_11676[(24)]);
var inst_11569 = cljs.core.async.close_BANG_(inst_11566);
var state_11676__$1 = state_11676;
var statearr_11707_12960 = state_11676__$1;
(statearr_11707_12960[(2)] = inst_11569);

(statearr_11707_12960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (22))){
var inst_11589 = (state_11676[(8)]);
var inst_11592 = cljs.core.async.close_BANG_(inst_11589);
var state_11676__$1 = state_11676;
var statearr_11708_12961 = state_11676__$1;
(statearr_11708_12961[(2)] = inst_11592);

(statearr_11708_12961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (36))){
var inst_11636 = (state_11676[(23)]);
var inst_11640 = cljs.core.chunk_first(inst_11636);
var inst_11641 = cljs.core.chunk_rest(inst_11636);
var inst_11642 = cljs.core.count(inst_11640);
var inst_11617 = inst_11641;
var inst_11618 = inst_11640;
var inst_11619 = inst_11642;
var inst_11620 = (0);
var state_11676__$1 = (function (){var statearr_11709 = state_11676;
(statearr_11709[(19)] = inst_11617);

(statearr_11709[(20)] = inst_11619);

(statearr_11709[(9)] = inst_11620);

(statearr_11709[(11)] = inst_11618);

return statearr_11709;
})();
var statearr_11710_12962 = state_11676__$1;
(statearr_11710_12962[(2)] = null);

(statearr_11710_12962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (41))){
var inst_11636 = (state_11676[(23)]);
var inst_11651 = (state_11676[(2)]);
var inst_11652 = cljs.core.next(inst_11636);
var inst_11617 = inst_11652;
var inst_11618 = null;
var inst_11619 = (0);
var inst_11620 = (0);
var state_11676__$1 = (function (){var statearr_11711 = state_11676;
(statearr_11711[(19)] = inst_11617);

(statearr_11711[(20)] = inst_11619);

(statearr_11711[(9)] = inst_11620);

(statearr_11711[(11)] = inst_11618);

(statearr_11711[(25)] = inst_11651);

return statearr_11711;
})();
var statearr_11712_12963 = state_11676__$1;
(statearr_11712_12963[(2)] = null);

(statearr_11712_12963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (43))){
var state_11676__$1 = state_11676;
var statearr_11713_12964 = state_11676__$1;
(statearr_11713_12964[(2)] = null);

(statearr_11713_12964[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (29))){
var inst_11660 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11715_12965 = state_11676__$1;
(statearr_11715_12965[(2)] = inst_11660);

(statearr_11715_12965[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (44))){
var inst_11669 = (state_11676[(2)]);
var state_11676__$1 = (function (){var statearr_11716 = state_11676;
(statearr_11716[(26)] = inst_11669);

return statearr_11716;
})();
var statearr_11717_12966 = state_11676__$1;
(statearr_11717_12966[(2)] = null);

(statearr_11717_12966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (6))){
var inst_11609 = (state_11676[(27)]);
var inst_11608 = cljs.core.deref(cs);
var inst_11609__$1 = cljs.core.keys(inst_11608);
var inst_11610 = cljs.core.count(inst_11609__$1);
var inst_11611 = cljs.core.reset_BANG_(dctr,inst_11610);
var inst_11616 = cljs.core.seq(inst_11609__$1);
var inst_11617 = inst_11616;
var inst_11618 = null;
var inst_11619 = (0);
var inst_11620 = (0);
var state_11676__$1 = (function (){var statearr_11718 = state_11676;
(statearr_11718[(19)] = inst_11617);

(statearr_11718[(28)] = inst_11611);

(statearr_11718[(20)] = inst_11619);

(statearr_11718[(9)] = inst_11620);

(statearr_11718[(27)] = inst_11609__$1);

(statearr_11718[(11)] = inst_11618);

return statearr_11718;
})();
var statearr_11719_12970 = state_11676__$1;
(statearr_11719_12970[(2)] = null);

(statearr_11719_12970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (28))){
var inst_11617 = (state_11676[(19)]);
var inst_11636 = (state_11676[(23)]);
var inst_11636__$1 = cljs.core.seq(inst_11617);
var state_11676__$1 = (function (){var statearr_11720 = state_11676;
(statearr_11720[(23)] = inst_11636__$1);

return statearr_11720;
})();
if(inst_11636__$1){
var statearr_11721_12972 = state_11676__$1;
(statearr_11721_12972[(1)] = (33));

} else {
var statearr_11722_12974 = state_11676__$1;
(statearr_11722_12974[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (25))){
var inst_11619 = (state_11676[(20)]);
var inst_11620 = (state_11676[(9)]);
var inst_11623 = (inst_11620 < inst_11619);
var inst_11624 = inst_11623;
var state_11676__$1 = state_11676;
if(cljs.core.truth_(inst_11624)){
var statearr_11724_12975 = state_11676__$1;
(statearr_11724_12975[(1)] = (27));

} else {
var statearr_11726_12976 = state_11676__$1;
(statearr_11726_12976[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (34))){
var state_11676__$1 = state_11676;
var statearr_11727_12977 = state_11676__$1;
(statearr_11727_12977[(2)] = null);

(statearr_11727_12977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (17))){
var state_11676__$1 = state_11676;
var statearr_11728_12979 = state_11676__$1;
(statearr_11728_12979[(2)] = null);

(statearr_11728_12979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (3))){
var inst_11674 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11676__$1,inst_11674);
} else {
if((state_val_11677 === (12))){
var inst_11604 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11729_12982 = state_11676__$1;
(statearr_11729_12982[(2)] = inst_11604);

(statearr_11729_12982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (2))){
var state_11676__$1 = state_11676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11676__$1,(4),ch);
} else {
if((state_val_11677 === (23))){
var state_11676__$1 = state_11676;
var statearr_11730_12985 = state_11676__$1;
(statearr_11730_12985[(2)] = null);

(statearr_11730_12985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (35))){
var inst_11658 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11731_12987 = state_11676__$1;
(statearr_11731_12987[(2)] = inst_11658);

(statearr_11731_12987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (19))){
var inst_11576 = (state_11676[(7)]);
var inst_11580 = cljs.core.chunk_first(inst_11576);
var inst_11581 = cljs.core.chunk_rest(inst_11576);
var inst_11582 = cljs.core.count(inst_11580);
var inst_11554 = inst_11581;
var inst_11555 = inst_11580;
var inst_11556 = inst_11582;
var inst_11557 = (0);
var state_11676__$1 = (function (){var statearr_11732 = state_11676;
(statearr_11732[(13)] = inst_11556);

(statearr_11732[(14)] = inst_11557);

(statearr_11732[(16)] = inst_11554);

(statearr_11732[(17)] = inst_11555);

return statearr_11732;
})();
var statearr_11733_12988 = state_11676__$1;
(statearr_11733_12988[(2)] = null);

(statearr_11733_12988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (11))){
var inst_11554 = (state_11676[(16)]);
var inst_11576 = (state_11676[(7)]);
var inst_11576__$1 = cljs.core.seq(inst_11554);
var state_11676__$1 = (function (){var statearr_11734 = state_11676;
(statearr_11734[(7)] = inst_11576__$1);

return statearr_11734;
})();
if(inst_11576__$1){
var statearr_11735_12989 = state_11676__$1;
(statearr_11735_12989[(1)] = (16));

} else {
var statearr_11736_12991 = state_11676__$1;
(statearr_11736_12991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (9))){
var inst_11606 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11737_12992 = state_11676__$1;
(statearr_11737_12992[(2)] = inst_11606);

(statearr_11737_12992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (5))){
var inst_11552 = cljs.core.deref(cs);
var inst_11553 = cljs.core.seq(inst_11552);
var inst_11554 = inst_11553;
var inst_11555 = null;
var inst_11556 = (0);
var inst_11557 = (0);
var state_11676__$1 = (function (){var statearr_11738 = state_11676;
(statearr_11738[(13)] = inst_11556);

(statearr_11738[(14)] = inst_11557);

(statearr_11738[(16)] = inst_11554);

(statearr_11738[(17)] = inst_11555);

return statearr_11738;
})();
var statearr_11739_12995 = state_11676__$1;
(statearr_11739_12995[(2)] = null);

(statearr_11739_12995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (14))){
var state_11676__$1 = state_11676;
var statearr_11740_12996 = state_11676__$1;
(statearr_11740_12996[(2)] = null);

(statearr_11740_12996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (45))){
var inst_11666 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11741_12997 = state_11676__$1;
(statearr_11741_12997[(2)] = inst_11666);

(statearr_11741_12997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (26))){
var inst_11609 = (state_11676[(27)]);
var inst_11662 = (state_11676[(2)]);
var inst_11663 = cljs.core.seq(inst_11609);
var state_11676__$1 = (function (){var statearr_11742 = state_11676;
(statearr_11742[(29)] = inst_11662);

return statearr_11742;
})();
if(inst_11663){
var statearr_11743_12998 = state_11676__$1;
(statearr_11743_12998[(1)] = (42));

} else {
var statearr_11744_12999 = state_11676__$1;
(statearr_11744_12999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (16))){
var inst_11576 = (state_11676[(7)]);
var inst_11578 = cljs.core.chunked_seq_QMARK_(inst_11576);
var state_11676__$1 = state_11676;
if(inst_11578){
var statearr_11745_13000 = state_11676__$1;
(statearr_11745_13000[(1)] = (19));

} else {
var statearr_11746_13001 = state_11676__$1;
(statearr_11746_13001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (38))){
var inst_11655 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11747_13002 = state_11676__$1;
(statearr_11747_13002[(2)] = inst_11655);

(statearr_11747_13002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (30))){
var state_11676__$1 = state_11676;
var statearr_11748_13003 = state_11676__$1;
(statearr_11748_13003[(2)] = null);

(statearr_11748_13003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (10))){
var inst_11557 = (state_11676[(14)]);
var inst_11555 = (state_11676[(17)]);
var inst_11565 = cljs.core._nth(inst_11555,inst_11557);
var inst_11566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11565,(0),null);
var inst_11567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11565,(1),null);
var state_11676__$1 = (function (){var statearr_11749 = state_11676;
(statearr_11749[(24)] = inst_11566);

return statearr_11749;
})();
if(cljs.core.truth_(inst_11567)){
var statearr_11750_13004 = state_11676__$1;
(statearr_11750_13004[(1)] = (13));

} else {
var statearr_11751_13005 = state_11676__$1;
(statearr_11751_13005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (18))){
var inst_11602 = (state_11676[(2)]);
var state_11676__$1 = state_11676;
var statearr_11752_13006 = state_11676__$1;
(statearr_11752_13006[(2)] = inst_11602);

(statearr_11752_13006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (42))){
var state_11676__$1 = state_11676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11676__$1,(45),dchan);
} else {
if((state_val_11677 === (37))){
var inst_11545 = (state_11676[(10)]);
var inst_11645 = (state_11676[(22)]);
var inst_11636 = (state_11676[(23)]);
var inst_11645__$1 = cljs.core.first(inst_11636);
var inst_11646 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11645__$1,inst_11545,done);
var state_11676__$1 = (function (){var statearr_11754 = state_11676;
(statearr_11754[(22)] = inst_11645__$1);

return statearr_11754;
})();
if(cljs.core.truth_(inst_11646)){
var statearr_11755_13007 = state_11676__$1;
(statearr_11755_13007[(1)] = (39));

} else {
var statearr_11756_13008 = state_11676__$1;
(statearr_11756_13008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11677 === (8))){
var inst_11556 = (state_11676[(13)]);
var inst_11557 = (state_11676[(14)]);
var inst_11559 = (inst_11557 < inst_11556);
var inst_11560 = inst_11559;
var state_11676__$1 = state_11676;
if(cljs.core.truth_(inst_11560)){
var statearr_11757_13009 = state_11676__$1;
(statearr_11757_13009[(1)] = (10));

} else {
var statearr_11759_13010 = state_11676__$1;
(statearr_11759_13010[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10879__auto__ = null;
var cljs$core$async$mult_$_state_machine__10879__auto____0 = (function (){
var statearr_11761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11761[(0)] = cljs$core$async$mult_$_state_machine__10879__auto__);

(statearr_11761[(1)] = (1));

return statearr_11761;
});
var cljs$core$async$mult_$_state_machine__10879__auto____1 = (function (state_11676){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11676);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11762){var ex__10882__auto__ = e11762;
var statearr_11763_13011 = state_11676;
(statearr_11763_13011[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11676[(4)]))){
var statearr_11764_13012 = state_11676;
(statearr_11764_13012[(1)] = cljs.core.first((state_11676[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13013 = state_11676;
state_11676 = G__13013;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10879__auto__ = function(state_11676){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10879__auto____1.call(this,state_11676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10879__auto____0;
cljs$core$async$mult_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10879__auto____1;
return cljs$core$async$mult_$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11765 = f__10972__auto__();
(statearr_11765[(6)] = c__10971__auto___12941);

return statearr_11765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
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
var G__11767 = arguments.length;
switch (G__11767) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13018 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13018(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13020 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13020(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13025 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13025(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13027 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13027(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13029 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13029(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
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

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11777){
var map__11778 = p__11777;
var map__11778__$1 = (((((!((map__11778 == null))))?(((((map__11778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11778):map__11778);
var opts = map__11778__$1;
var statearr_11780_13035 = state;
(statearr_11780_13035[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11781_13036 = state;
(statearr_11781_13036[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11782_13037 = state;
(statearr_11782_13037[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11771){
var G__11772 = cljs.core.first(seq11771);
var seq11771__$1 = cljs.core.next(seq11771);
var G__11773 = cljs.core.first(seq11771__$1);
var seq11771__$2 = cljs.core.next(seq11771__$1);
var G__11774 = cljs.core.first(seq11771__$2);
var seq11771__$3 = cljs.core.next(seq11771__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11772,G__11773,G__11774,seq11771__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11783 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11784){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11784 = meta11784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11785,meta11784__$1){
var self__ = this;
var _11785__$1 = this;
return (new cljs.core.async.t_cljs$core$async11783(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11784__$1));
}));

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11785){
var self__ = this;
var _11785__$1 = this;
return self__.meta11784;
}));

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11783.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11784","meta11784",-1146673606,null)], null);
}));

(cljs.core.async.t_cljs$core$async11783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11783");

(cljs.core.async.t_cljs$core$async11783.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11783.
 */
cljs.core.async.__GT_t_cljs$core$async11783 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11783(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11784){
return (new cljs.core.async.t_cljs$core$async11783(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11784));
});

}

return (new cljs.core.async.t_cljs$core$async11783(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10971__auto___13045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_11899){
var state_val_11900 = (state_11899[(1)]);
if((state_val_11900 === (7))){
var inst_11814 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
var statearr_11904_13046 = state_11899__$1;
(statearr_11904_13046[(2)] = inst_11814);

(statearr_11904_13046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (20))){
var inst_11826 = (state_11899[(7)]);
var state_11899__$1 = state_11899;
var statearr_11905_13047 = state_11899__$1;
(statearr_11905_13047[(2)] = inst_11826);

(statearr_11905_13047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (27))){
var state_11899__$1 = state_11899;
var statearr_11906_13048 = state_11899__$1;
(statearr_11906_13048[(2)] = null);

(statearr_11906_13048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (1))){
var inst_11801 = (state_11899[(8)]);
var inst_11801__$1 = calc_state();
var inst_11803 = (inst_11801__$1 == null);
var inst_11804 = cljs.core.not(inst_11803);
var state_11899__$1 = (function (){var statearr_11907 = state_11899;
(statearr_11907[(8)] = inst_11801__$1);

return statearr_11907;
})();
if(inst_11804){
var statearr_11910_13049 = state_11899__$1;
(statearr_11910_13049[(1)] = (2));

} else {
var statearr_11911_13050 = state_11899__$1;
(statearr_11911_13050[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (24))){
var inst_11850 = (state_11899[(9)]);
var inst_11873 = (state_11899[(10)]);
var inst_11859 = (state_11899[(11)]);
var inst_11873__$1 = (inst_11850.cljs$core$IFn$_invoke$arity$1 ? inst_11850.cljs$core$IFn$_invoke$arity$1(inst_11859) : inst_11850.call(null,inst_11859));
var state_11899__$1 = (function (){var statearr_11914 = state_11899;
(statearr_11914[(10)] = inst_11873__$1);

return statearr_11914;
})();
if(cljs.core.truth_(inst_11873__$1)){
var statearr_11915_13051 = state_11899__$1;
(statearr_11915_13051[(1)] = (29));

} else {
var statearr_11917_13052 = state_11899__$1;
(statearr_11917_13052[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (4))){
var inst_11817 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
if(cljs.core.truth_(inst_11817)){
var statearr_11918_13053 = state_11899__$1;
(statearr_11918_13053[(1)] = (8));

} else {
var statearr_11920_13054 = state_11899__$1;
(statearr_11920_13054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (15))){
var inst_11844 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
if(cljs.core.truth_(inst_11844)){
var statearr_11921_13055 = state_11899__$1;
(statearr_11921_13055[(1)] = (19));

} else {
var statearr_11922_13056 = state_11899__$1;
(statearr_11922_13056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (21))){
var inst_11849 = (state_11899[(12)]);
var inst_11849__$1 = (state_11899[(2)]);
var inst_11850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11849__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11849__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11849__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11899__$1 = (function (){var statearr_11923 = state_11899;
(statearr_11923[(9)] = inst_11850);

(statearr_11923[(12)] = inst_11849__$1);

(statearr_11923[(13)] = inst_11851);

return statearr_11923;
})();
return cljs.core.async.ioc_alts_BANG_(state_11899__$1,(22),inst_11852);
} else {
if((state_val_11900 === (31))){
var inst_11881 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
if(cljs.core.truth_(inst_11881)){
var statearr_11926_13057 = state_11899__$1;
(statearr_11926_13057[(1)] = (32));

} else {
var statearr_11927_13058 = state_11899__$1;
(statearr_11927_13058[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (32))){
var inst_11858 = (state_11899[(14)]);
var state_11899__$1 = state_11899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11899__$1,(35),out,inst_11858);
} else {
if((state_val_11900 === (33))){
var inst_11849 = (state_11899[(12)]);
var inst_11826 = inst_11849;
var state_11899__$1 = (function (){var statearr_11928 = state_11899;
(statearr_11928[(7)] = inst_11826);

return statearr_11928;
})();
var statearr_11929_13064 = state_11899__$1;
(statearr_11929_13064[(2)] = null);

(statearr_11929_13064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (13))){
var inst_11826 = (state_11899[(7)]);
var inst_11833 = inst_11826.cljs$lang$protocol_mask$partition0$;
var inst_11834 = (inst_11833 & (64));
var inst_11835 = inst_11826.cljs$core$ISeq$;
var inst_11836 = (cljs.core.PROTOCOL_SENTINEL === inst_11835);
var inst_11837 = ((inst_11834) || (inst_11836));
var state_11899__$1 = state_11899;
if(cljs.core.truth_(inst_11837)){
var statearr_11930_13070 = state_11899__$1;
(statearr_11930_13070[(1)] = (16));

} else {
var statearr_11931_13071 = state_11899__$1;
(statearr_11931_13071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (22))){
var inst_11858 = (state_11899[(14)]);
var inst_11859 = (state_11899[(11)]);
var inst_11857 = (state_11899[(2)]);
var inst_11858__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11857,(0),null);
var inst_11859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11857,(1),null);
var inst_11860 = (inst_11858__$1 == null);
var inst_11861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11859__$1,change);
var inst_11862 = ((inst_11860) || (inst_11861));
var state_11899__$1 = (function (){var statearr_11932 = state_11899;
(statearr_11932[(14)] = inst_11858__$1);

(statearr_11932[(11)] = inst_11859__$1);

return statearr_11932;
})();
if(cljs.core.truth_(inst_11862)){
var statearr_11933_13072 = state_11899__$1;
(statearr_11933_13072[(1)] = (23));

} else {
var statearr_11934_13073 = state_11899__$1;
(statearr_11934_13073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (36))){
var inst_11849 = (state_11899[(12)]);
var inst_11826 = inst_11849;
var state_11899__$1 = (function (){var statearr_11935 = state_11899;
(statearr_11935[(7)] = inst_11826);

return statearr_11935;
})();
var statearr_11936_13074 = state_11899__$1;
(statearr_11936_13074[(2)] = null);

(statearr_11936_13074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (29))){
var inst_11873 = (state_11899[(10)]);
var state_11899__$1 = state_11899;
var statearr_11937_13075 = state_11899__$1;
(statearr_11937_13075[(2)] = inst_11873);

(statearr_11937_13075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (6))){
var state_11899__$1 = state_11899;
var statearr_11938_13076 = state_11899__$1;
(statearr_11938_13076[(2)] = false);

(statearr_11938_13076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (28))){
var inst_11869 = (state_11899[(2)]);
var inst_11870 = calc_state();
var inst_11826 = inst_11870;
var state_11899__$1 = (function (){var statearr_11939 = state_11899;
(statearr_11939[(7)] = inst_11826);

(statearr_11939[(15)] = inst_11869);

return statearr_11939;
})();
var statearr_11940_13077 = state_11899__$1;
(statearr_11940_13077[(2)] = null);

(statearr_11940_13077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (25))){
var inst_11895 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
var statearr_11941_13078 = state_11899__$1;
(statearr_11941_13078[(2)] = inst_11895);

(statearr_11941_13078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (34))){
var inst_11893 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
var statearr_11942_13079 = state_11899__$1;
(statearr_11942_13079[(2)] = inst_11893);

(statearr_11942_13079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (17))){
var state_11899__$1 = state_11899;
var statearr_11943_13080 = state_11899__$1;
(statearr_11943_13080[(2)] = false);

(statearr_11943_13080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (3))){
var state_11899__$1 = state_11899;
var statearr_11944_13081 = state_11899__$1;
(statearr_11944_13081[(2)] = false);

(statearr_11944_13081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (12))){
var inst_11897 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11899__$1,inst_11897);
} else {
if((state_val_11900 === (2))){
var inst_11801 = (state_11899[(8)]);
var inst_11806 = inst_11801.cljs$lang$protocol_mask$partition0$;
var inst_11807 = (inst_11806 & (64));
var inst_11808 = inst_11801.cljs$core$ISeq$;
var inst_11809 = (cljs.core.PROTOCOL_SENTINEL === inst_11808);
var inst_11810 = ((inst_11807) || (inst_11809));
var state_11899__$1 = state_11899;
if(cljs.core.truth_(inst_11810)){
var statearr_11945_13082 = state_11899__$1;
(statearr_11945_13082[(1)] = (5));

} else {
var statearr_11946_13083 = state_11899__$1;
(statearr_11946_13083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (23))){
var inst_11858 = (state_11899[(14)]);
var inst_11864 = (inst_11858 == null);
var state_11899__$1 = state_11899;
if(cljs.core.truth_(inst_11864)){
var statearr_11947_13084 = state_11899__$1;
(statearr_11947_13084[(1)] = (26));

} else {
var statearr_11948_13085 = state_11899__$1;
(statearr_11948_13085[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (35))){
var inst_11884 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
if(cljs.core.truth_(inst_11884)){
var statearr_11949_13086 = state_11899__$1;
(statearr_11949_13086[(1)] = (36));

} else {
var statearr_11950_13087 = state_11899__$1;
(statearr_11950_13087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (19))){
var inst_11826 = (state_11899[(7)]);
var inst_11846 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11826);
var state_11899__$1 = state_11899;
var statearr_11951_13088 = state_11899__$1;
(statearr_11951_13088[(2)] = inst_11846);

(statearr_11951_13088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (11))){
var inst_11826 = (state_11899[(7)]);
var inst_11830 = (inst_11826 == null);
var inst_11831 = cljs.core.not(inst_11830);
var state_11899__$1 = state_11899;
if(inst_11831){
var statearr_11953_13089 = state_11899__$1;
(statearr_11953_13089[(1)] = (13));

} else {
var statearr_11954_13090 = state_11899__$1;
(statearr_11954_13090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (9))){
var inst_11801 = (state_11899[(8)]);
var state_11899__$1 = state_11899;
var statearr_11955_13091 = state_11899__$1;
(statearr_11955_13091[(2)] = inst_11801);

(statearr_11955_13091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (5))){
var state_11899__$1 = state_11899;
var statearr_11956_13092 = state_11899__$1;
(statearr_11956_13092[(2)] = true);

(statearr_11956_13092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (14))){
var state_11899__$1 = state_11899;
var statearr_11957_13093 = state_11899__$1;
(statearr_11957_13093[(2)] = false);

(statearr_11957_13093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (26))){
var inst_11859 = (state_11899[(11)]);
var inst_11866 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11859);
var state_11899__$1 = state_11899;
var statearr_11958_13094 = state_11899__$1;
(statearr_11958_13094[(2)] = inst_11866);

(statearr_11958_13094[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (16))){
var state_11899__$1 = state_11899;
var statearr_11959_13095 = state_11899__$1;
(statearr_11959_13095[(2)] = true);

(statearr_11959_13095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (38))){
var inst_11889 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
var statearr_11962_13099 = state_11899__$1;
(statearr_11962_13099[(2)] = inst_11889);

(statearr_11962_13099[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (30))){
var inst_11850 = (state_11899[(9)]);
var inst_11851 = (state_11899[(13)]);
var inst_11859 = (state_11899[(11)]);
var inst_11876 = cljs.core.empty_QMARK_(inst_11850);
var inst_11877 = (inst_11851.cljs$core$IFn$_invoke$arity$1 ? inst_11851.cljs$core$IFn$_invoke$arity$1(inst_11859) : inst_11851.call(null,inst_11859));
var inst_11878 = cljs.core.not(inst_11877);
var inst_11879 = ((inst_11876) && (inst_11878));
var state_11899__$1 = state_11899;
var statearr_11963_13100 = state_11899__$1;
(statearr_11963_13100[(2)] = inst_11879);

(statearr_11963_13100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (10))){
var inst_11801 = (state_11899[(8)]);
var inst_11822 = (state_11899[(2)]);
var inst_11823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11822,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11822,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11822,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11826 = inst_11801;
var state_11899__$1 = (function (){var statearr_11964 = state_11899;
(statearr_11964[(16)] = inst_11823);

(statearr_11964[(7)] = inst_11826);

(statearr_11964[(17)] = inst_11825);

(statearr_11964[(18)] = inst_11824);

return statearr_11964;
})();
var statearr_11965_13113 = state_11899__$1;
(statearr_11965_13113[(2)] = null);

(statearr_11965_13113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (18))){
var inst_11841 = (state_11899[(2)]);
var state_11899__$1 = state_11899;
var statearr_11966_13114 = state_11899__$1;
(statearr_11966_13114[(2)] = inst_11841);

(statearr_11966_13114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (37))){
var state_11899__$1 = state_11899;
var statearr_11967_13115 = state_11899__$1;
(statearr_11967_13115[(2)] = null);

(statearr_11967_13115[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11900 === (8))){
var inst_11801 = (state_11899[(8)]);
var inst_11819 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11801);
var state_11899__$1 = state_11899;
var statearr_11968_13116 = state_11899__$1;
(statearr_11968_13116[(2)] = inst_11819);

(statearr_11968_13116[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10879__auto__ = null;
var cljs$core$async$mix_$_state_machine__10879__auto____0 = (function (){
var statearr_11969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11969[(0)] = cljs$core$async$mix_$_state_machine__10879__auto__);

(statearr_11969[(1)] = (1));

return statearr_11969;
});
var cljs$core$async$mix_$_state_machine__10879__auto____1 = (function (state_11899){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_11899);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e11970){var ex__10882__auto__ = e11970;
var statearr_11971_13117 = state_11899;
(statearr_11971_13117[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_11899[(4)]))){
var statearr_11972_13118 = state_11899;
(statearr_11972_13118[(1)] = cljs.core.first((state_11899[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13122 = state_11899;
state_11899 = G__13122;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10879__auto__ = function(state_11899){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10879__auto____1.call(this,state_11899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10879__auto____0;
cljs$core$async$mix_$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10879__auto____1;
return cljs$core$async$mix_$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11973 = f__10972__auto__();
(statearr_11973[(6)] = c__10971__auto___13045);

return statearr_11973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13123 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13123(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13124 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13124(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13125 = (function() {
var G__13126 = null;
var G__13126__1 = (function (p){
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
var G__13126__2 = (function (p,v){
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
G__13126 = function(p,v){
switch(arguments.length){
case 1:
return G__13126__1.call(this,p);
case 2:
return G__13126__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13126.cljs$core$IFn$_invoke$arity$1 = G__13126__1;
G__13126.cljs$core$IFn$_invoke$arity$2 = G__13126__2;
return G__13126;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11977 = arguments.length;
switch (G__11977) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13125(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13125(p,v);
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
var G__11980 = arguments.length;
switch (G__11980) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11978_SHARP_){
if(cljs.core.truth_((p1__11978_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11978_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11978_SHARP_.call(null,topic)))){
return p1__11978_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11978_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11981 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11982){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11982 = meta11982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11983,meta11982__$1){
var self__ = this;
var _11983__$1 = this;
return (new cljs.core.async.t_cljs$core$async11981(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11982__$1));
}));

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11983){
var self__ = this;
var _11983__$1 = this;
return self__.meta11982;
}));

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11982","meta11982",-1701515148,null)], null);
}));

(cljs.core.async.t_cljs$core$async11981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11981");

(cljs.core.async.t_cljs$core$async11981.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11981.
 */
cljs.core.async.__GT_t_cljs$core$async11981 = (function cljs$core$async$__GT_t_cljs$core$async11981(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11982){
return (new cljs.core.async.t_cljs$core$async11981(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11982));
});

}

return (new cljs.core.async.t_cljs$core$async11981(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10971__auto___13130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12058){
var state_val_12059 = (state_12058[(1)]);
if((state_val_12059 === (7))){
var inst_12054 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12060_13131 = state_12058__$1;
(statearr_12060_13131[(2)] = inst_12054);

(statearr_12060_13131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (20))){
var state_12058__$1 = state_12058;
var statearr_12061_13132 = state_12058__$1;
(statearr_12061_13132[(2)] = null);

(statearr_12061_13132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (1))){
var state_12058__$1 = state_12058;
var statearr_12062_13133 = state_12058__$1;
(statearr_12062_13133[(2)] = null);

(statearr_12062_13133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (24))){
var inst_12037 = (state_12058[(7)]);
var inst_12046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12037);
var state_12058__$1 = state_12058;
var statearr_12063_13134 = state_12058__$1;
(statearr_12063_13134[(2)] = inst_12046);

(statearr_12063_13134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (4))){
var inst_11989 = (state_12058[(8)]);
var inst_11989__$1 = (state_12058[(2)]);
var inst_11990 = (inst_11989__$1 == null);
var state_12058__$1 = (function (){var statearr_12064 = state_12058;
(statearr_12064[(8)] = inst_11989__$1);

return statearr_12064;
})();
if(cljs.core.truth_(inst_11990)){
var statearr_12065_13135 = state_12058__$1;
(statearr_12065_13135[(1)] = (5));

} else {
var statearr_12066_13136 = state_12058__$1;
(statearr_12066_13136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (15))){
var inst_12031 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12067_13137 = state_12058__$1;
(statearr_12067_13137[(2)] = inst_12031);

(statearr_12067_13137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (21))){
var inst_12051 = (state_12058[(2)]);
var state_12058__$1 = (function (){var statearr_12068 = state_12058;
(statearr_12068[(9)] = inst_12051);

return statearr_12068;
})();
var statearr_12069_13142 = state_12058__$1;
(statearr_12069_13142[(2)] = null);

(statearr_12069_13142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (13))){
var inst_12013 = (state_12058[(10)]);
var inst_12015 = cljs.core.chunked_seq_QMARK_(inst_12013);
var state_12058__$1 = state_12058;
if(inst_12015){
var statearr_12070_13147 = state_12058__$1;
(statearr_12070_13147[(1)] = (16));

} else {
var statearr_12071_13148 = state_12058__$1;
(statearr_12071_13148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (22))){
var inst_12043 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
if(cljs.core.truth_(inst_12043)){
var statearr_12072_13153 = state_12058__$1;
(statearr_12072_13153[(1)] = (23));

} else {
var statearr_12073_13154 = state_12058__$1;
(statearr_12073_13154[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (6))){
var inst_11989 = (state_12058[(8)]);
var inst_12039 = (state_12058[(11)]);
var inst_12037 = (state_12058[(7)]);
var inst_12037__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11989) : topic_fn.call(null,inst_11989));
var inst_12038 = cljs.core.deref(mults);
var inst_12039__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12038,inst_12037__$1);
var state_12058__$1 = (function (){var statearr_12074 = state_12058;
(statearr_12074[(11)] = inst_12039__$1);

(statearr_12074[(7)] = inst_12037__$1);

return statearr_12074;
})();
if(cljs.core.truth_(inst_12039__$1)){
var statearr_12075_13155 = state_12058__$1;
(statearr_12075_13155[(1)] = (19));

} else {
var statearr_12076_13156 = state_12058__$1;
(statearr_12076_13156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (25))){
var inst_12048 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12077_13157 = state_12058__$1;
(statearr_12077_13157[(2)] = inst_12048);

(statearr_12077_13157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (17))){
var inst_12013 = (state_12058[(10)]);
var inst_12022 = cljs.core.first(inst_12013);
var inst_12023 = cljs.core.async.muxch_STAR_(inst_12022);
var inst_12024 = cljs.core.async.close_BANG_(inst_12023);
var inst_12025 = cljs.core.next(inst_12013);
var inst_11999 = inst_12025;
var inst_12000 = null;
var inst_12001 = (0);
var inst_12002 = (0);
var state_12058__$1 = (function (){var statearr_12078 = state_12058;
(statearr_12078[(12)] = inst_12001);

(statearr_12078[(13)] = inst_11999);

(statearr_12078[(14)] = inst_12002);

(statearr_12078[(15)] = inst_12024);

(statearr_12078[(16)] = inst_12000);

return statearr_12078;
})();
var statearr_12079_13158 = state_12058__$1;
(statearr_12079_13158[(2)] = null);

(statearr_12079_13158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (3))){
var inst_12056 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12058__$1,inst_12056);
} else {
if((state_val_12059 === (12))){
var inst_12033 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12080_13159 = state_12058__$1;
(statearr_12080_13159[(2)] = inst_12033);

(statearr_12080_13159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (2))){
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12058__$1,(4),ch);
} else {
if((state_val_12059 === (23))){
var state_12058__$1 = state_12058;
var statearr_12081_13160 = state_12058__$1;
(statearr_12081_13160[(2)] = null);

(statearr_12081_13160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (19))){
var inst_11989 = (state_12058[(8)]);
var inst_12039 = (state_12058[(11)]);
var inst_12041 = cljs.core.async.muxch_STAR_(inst_12039);
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12058__$1,(22),inst_12041,inst_11989);
} else {
if((state_val_12059 === (11))){
var inst_12013 = (state_12058[(10)]);
var inst_11999 = (state_12058[(13)]);
var inst_12013__$1 = cljs.core.seq(inst_11999);
var state_12058__$1 = (function (){var statearr_12082 = state_12058;
(statearr_12082[(10)] = inst_12013__$1);

return statearr_12082;
})();
if(inst_12013__$1){
var statearr_12083_13161 = state_12058__$1;
(statearr_12083_13161[(1)] = (13));

} else {
var statearr_12084_13162 = state_12058__$1;
(statearr_12084_13162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (9))){
var inst_12035 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12085_13163 = state_12058__$1;
(statearr_12085_13163[(2)] = inst_12035);

(statearr_12085_13163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (5))){
var inst_11996 = cljs.core.deref(mults);
var inst_11997 = cljs.core.vals(inst_11996);
var inst_11998 = cljs.core.seq(inst_11997);
var inst_11999 = inst_11998;
var inst_12000 = null;
var inst_12001 = (0);
var inst_12002 = (0);
var state_12058__$1 = (function (){var statearr_12086 = state_12058;
(statearr_12086[(12)] = inst_12001);

(statearr_12086[(13)] = inst_11999);

(statearr_12086[(14)] = inst_12002);

(statearr_12086[(16)] = inst_12000);

return statearr_12086;
})();
var statearr_12087_13164 = state_12058__$1;
(statearr_12087_13164[(2)] = null);

(statearr_12087_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (14))){
var state_12058__$1 = state_12058;
var statearr_12091_13165 = state_12058__$1;
(statearr_12091_13165[(2)] = null);

(statearr_12091_13165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (16))){
var inst_12013 = (state_12058[(10)]);
var inst_12017 = cljs.core.chunk_first(inst_12013);
var inst_12018 = cljs.core.chunk_rest(inst_12013);
var inst_12019 = cljs.core.count(inst_12017);
var inst_11999 = inst_12018;
var inst_12000 = inst_12017;
var inst_12001 = inst_12019;
var inst_12002 = (0);
var state_12058__$1 = (function (){var statearr_12092 = state_12058;
(statearr_12092[(12)] = inst_12001);

(statearr_12092[(13)] = inst_11999);

(statearr_12092[(14)] = inst_12002);

(statearr_12092[(16)] = inst_12000);

return statearr_12092;
})();
var statearr_12093_13166 = state_12058__$1;
(statearr_12093_13166[(2)] = null);

(statearr_12093_13166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (10))){
var inst_12001 = (state_12058[(12)]);
var inst_11999 = (state_12058[(13)]);
var inst_12002 = (state_12058[(14)]);
var inst_12000 = (state_12058[(16)]);
var inst_12007 = cljs.core._nth(inst_12000,inst_12002);
var inst_12008 = cljs.core.async.muxch_STAR_(inst_12007);
var inst_12009 = cljs.core.async.close_BANG_(inst_12008);
var inst_12010 = (inst_12002 + (1));
var tmp12088 = inst_12001;
var tmp12089 = inst_11999;
var tmp12090 = inst_12000;
var inst_11999__$1 = tmp12089;
var inst_12000__$1 = tmp12090;
var inst_12001__$1 = tmp12088;
var inst_12002__$1 = inst_12010;
var state_12058__$1 = (function (){var statearr_12094 = state_12058;
(statearr_12094[(12)] = inst_12001__$1);

(statearr_12094[(13)] = inst_11999__$1);

(statearr_12094[(14)] = inst_12002__$1);

(statearr_12094[(17)] = inst_12009);

(statearr_12094[(16)] = inst_12000__$1);

return statearr_12094;
})();
var statearr_12095_13167 = state_12058__$1;
(statearr_12095_13167[(2)] = null);

(statearr_12095_13167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (18))){
var inst_12028 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12096_13168 = state_12058__$1;
(statearr_12096_13168[(2)] = inst_12028);

(statearr_12096_13168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (8))){
var inst_12001 = (state_12058[(12)]);
var inst_12002 = (state_12058[(14)]);
var inst_12004 = (inst_12002 < inst_12001);
var inst_12005 = inst_12004;
var state_12058__$1 = state_12058;
if(cljs.core.truth_(inst_12005)){
var statearr_12097_13170 = state_12058__$1;
(statearr_12097_13170[(1)] = (10));

} else {
var statearr_12098_13171 = state_12058__$1;
(statearr_12098_13171[(1)] = (11));

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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12099[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12099[(1)] = (1));

return statearr_12099;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12058){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12058);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12100){var ex__10882__auto__ = e12100;
var statearr_12101_13175 = state_12058;
(statearr_12101_13175[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12058[(4)]))){
var statearr_12103_13176 = state_12058;
(statearr_12103_13176[(1)] = cljs.core.first((state_12058[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13197 = state_12058;
state_12058 = G__13197;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12104 = f__10972__auto__();
(statearr_12104[(6)] = c__10971__auto___13130);

return statearr_12104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
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
var G__12106 = arguments.length;
switch (G__12106) {
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
var G__12111 = arguments.length;
switch (G__12111) {
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
var G__12113 = arguments.length;
switch (G__12113) {
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
var c__10971__auto___13210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12156){
var state_val_12157 = (state_12156[(1)]);
if((state_val_12157 === (7))){
var state_12156__$1 = state_12156;
var statearr_12158_13211 = state_12156__$1;
(statearr_12158_13211[(2)] = null);

(statearr_12158_13211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (1))){
var state_12156__$1 = state_12156;
var statearr_12159_13212 = state_12156__$1;
(statearr_12159_13212[(2)] = null);

(statearr_12159_13212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (4))){
var inst_12116 = (state_12156[(7)]);
var inst_12117 = (state_12156[(8)]);
var inst_12119 = (inst_12117 < inst_12116);
var state_12156__$1 = state_12156;
if(cljs.core.truth_(inst_12119)){
var statearr_12160_13213 = state_12156__$1;
(statearr_12160_13213[(1)] = (6));

} else {
var statearr_12161_13214 = state_12156__$1;
(statearr_12161_13214[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (15))){
var inst_12142 = (state_12156[(9)]);
var inst_12147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12142);
var state_12156__$1 = state_12156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12156__$1,(17),out,inst_12147);
} else {
if((state_val_12157 === (13))){
var inst_12142 = (state_12156[(9)]);
var inst_12142__$1 = (state_12156[(2)]);
var inst_12143 = cljs.core.some(cljs.core.nil_QMARK_,inst_12142__$1);
var state_12156__$1 = (function (){var statearr_12162 = state_12156;
(statearr_12162[(9)] = inst_12142__$1);

return statearr_12162;
})();
if(cljs.core.truth_(inst_12143)){
var statearr_12163_13215 = state_12156__$1;
(statearr_12163_13215[(1)] = (14));

} else {
var statearr_12164_13216 = state_12156__$1;
(statearr_12164_13216[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (6))){
var state_12156__$1 = state_12156;
var statearr_12165_13217 = state_12156__$1;
(statearr_12165_13217[(2)] = null);

(statearr_12165_13217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (17))){
var inst_12149 = (state_12156[(2)]);
var state_12156__$1 = (function (){var statearr_12167 = state_12156;
(statearr_12167[(10)] = inst_12149);

return statearr_12167;
})();
var statearr_12168_13218 = state_12156__$1;
(statearr_12168_13218[(2)] = null);

(statearr_12168_13218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (3))){
var inst_12154 = (state_12156[(2)]);
var state_12156__$1 = state_12156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12156__$1,inst_12154);
} else {
if((state_val_12157 === (12))){
var _ = (function (){var statearr_12169 = state_12156;
(statearr_12169[(4)] = cljs.core.rest((state_12156[(4)])));

return statearr_12169;
})();
var state_12156__$1 = state_12156;
var ex12166 = (state_12156__$1[(2)]);
var statearr_12170_13219 = state_12156__$1;
(statearr_12170_13219[(5)] = ex12166);


if((ex12166 instanceof Object)){
var statearr_12171_13220 = state_12156__$1;
(statearr_12171_13220[(1)] = (11));

(statearr_12171_13220[(5)] = null);

} else {
throw ex12166;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (2))){
var inst_12115 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12116 = cnt;
var inst_12117 = (0);
var state_12156__$1 = (function (){var statearr_12173 = state_12156;
(statearr_12173[(11)] = inst_12115);

(statearr_12173[(7)] = inst_12116);

(statearr_12173[(8)] = inst_12117);

return statearr_12173;
})();
var statearr_12174_13221 = state_12156__$1;
(statearr_12174_13221[(2)] = null);

(statearr_12174_13221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (11))){
var inst_12121 = (state_12156[(2)]);
var inst_12122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12156__$1 = (function (){var statearr_12175 = state_12156;
(statearr_12175[(12)] = inst_12121);

return statearr_12175;
})();
var statearr_12176_13222 = state_12156__$1;
(statearr_12176_13222[(2)] = inst_12122);

(statearr_12176_13222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (9))){
var inst_12117 = (state_12156[(8)]);
var _ = (function (){var statearr_12177 = state_12156;
(statearr_12177[(4)] = cljs.core.cons((12),(state_12156[(4)])));

return statearr_12177;
})();
var inst_12128 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12117) : chs__$1.call(null,inst_12117));
var inst_12129 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12117) : done.call(null,inst_12117));
var inst_12130 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12128,inst_12129);
var ___$1 = (function (){var statearr_12178 = state_12156;
(statearr_12178[(4)] = cljs.core.rest((state_12156[(4)])));

return statearr_12178;
})();
var state_12156__$1 = state_12156;
var statearr_12179_13223 = state_12156__$1;
(statearr_12179_13223[(2)] = inst_12130);

(statearr_12179_13223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (5))){
var inst_12140 = (state_12156[(2)]);
var state_12156__$1 = (function (){var statearr_12180 = state_12156;
(statearr_12180[(13)] = inst_12140);

return statearr_12180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12156__$1,(13),dchan);
} else {
if((state_val_12157 === (14))){
var inst_12145 = cljs.core.async.close_BANG_(out);
var state_12156__$1 = state_12156;
var statearr_12181_13224 = state_12156__$1;
(statearr_12181_13224[(2)] = inst_12145);

(statearr_12181_13224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (16))){
var inst_12152 = (state_12156[(2)]);
var state_12156__$1 = state_12156;
var statearr_12182_13225 = state_12156__$1;
(statearr_12182_13225[(2)] = inst_12152);

(statearr_12182_13225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (10))){
var inst_12117 = (state_12156[(8)]);
var inst_12133 = (state_12156[(2)]);
var inst_12134 = (inst_12117 + (1));
var inst_12117__$1 = inst_12134;
var state_12156__$1 = (function (){var statearr_12183 = state_12156;
(statearr_12183[(8)] = inst_12117__$1);

(statearr_12183[(14)] = inst_12133);

return statearr_12183;
})();
var statearr_12184_13226 = state_12156__$1;
(statearr_12184_13226[(2)] = null);

(statearr_12184_13226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12157 === (8))){
var inst_12138 = (state_12156[(2)]);
var state_12156__$1 = state_12156;
var statearr_12185_13227 = state_12156__$1;
(statearr_12185_13227[(2)] = inst_12138);

(statearr_12185_13227[(1)] = (5));


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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12186[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12186[(1)] = (1));

return statearr_12186;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12156){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12156);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12187){var ex__10882__auto__ = e12187;
var statearr_12188_13228 = state_12156;
(statearr_12188_13228[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12156[(4)]))){
var statearr_12189_13229 = state_12156;
(statearr_12189_13229[(1)] = cljs.core.first((state_12156[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13230 = state_12156;
state_12156 = G__13230;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12190 = f__10972__auto__();
(statearr_12190[(6)] = c__10971__auto___13210);

return statearr_12190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
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
var G__12193 = arguments.length;
switch (G__12193) {
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
var c__10971__auto___13236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12225){
var state_val_12226 = (state_12225[(1)]);
if((state_val_12226 === (7))){
var inst_12204 = (state_12225[(7)]);
var inst_12205 = (state_12225[(8)]);
var inst_12204__$1 = (state_12225[(2)]);
var inst_12205__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12204__$1,(0),null);
var inst_12206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12204__$1,(1),null);
var inst_12207 = (inst_12205__$1 == null);
var state_12225__$1 = (function (){var statearr_12227 = state_12225;
(statearr_12227[(7)] = inst_12204__$1);

(statearr_12227[(9)] = inst_12206);

(statearr_12227[(8)] = inst_12205__$1);

return statearr_12227;
})();
if(cljs.core.truth_(inst_12207)){
var statearr_12228_13237 = state_12225__$1;
(statearr_12228_13237[(1)] = (8));

} else {
var statearr_12229_13238 = state_12225__$1;
(statearr_12229_13238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (1))){
var inst_12194 = cljs.core.vec(chs);
var inst_12195 = inst_12194;
var state_12225__$1 = (function (){var statearr_12230 = state_12225;
(statearr_12230[(10)] = inst_12195);

return statearr_12230;
})();
var statearr_12231_13239 = state_12225__$1;
(statearr_12231_13239[(2)] = null);

(statearr_12231_13239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (4))){
var inst_12195 = (state_12225[(10)]);
var state_12225__$1 = state_12225;
return cljs.core.async.ioc_alts_BANG_(state_12225__$1,(7),inst_12195);
} else {
if((state_val_12226 === (6))){
var inst_12221 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12232_13240 = state_12225__$1;
(statearr_12232_13240[(2)] = inst_12221);

(statearr_12232_13240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (3))){
var inst_12223 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12225__$1,inst_12223);
} else {
if((state_val_12226 === (2))){
var inst_12195 = (state_12225[(10)]);
var inst_12197 = cljs.core.count(inst_12195);
var inst_12198 = (inst_12197 > (0));
var state_12225__$1 = state_12225;
if(cljs.core.truth_(inst_12198)){
var statearr_12234_13241 = state_12225__$1;
(statearr_12234_13241[(1)] = (4));

} else {
var statearr_12235_13242 = state_12225__$1;
(statearr_12235_13242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (11))){
var inst_12195 = (state_12225[(10)]);
var inst_12214 = (state_12225[(2)]);
var tmp12233 = inst_12195;
var inst_12195__$1 = tmp12233;
var state_12225__$1 = (function (){var statearr_12236 = state_12225;
(statearr_12236[(11)] = inst_12214);

(statearr_12236[(10)] = inst_12195__$1);

return statearr_12236;
})();
var statearr_12237_13243 = state_12225__$1;
(statearr_12237_13243[(2)] = null);

(statearr_12237_13243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (9))){
var inst_12205 = (state_12225[(8)]);
var state_12225__$1 = state_12225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12225__$1,(11),out,inst_12205);
} else {
if((state_val_12226 === (5))){
var inst_12219 = cljs.core.async.close_BANG_(out);
var state_12225__$1 = state_12225;
var statearr_12238_13244 = state_12225__$1;
(statearr_12238_13244[(2)] = inst_12219);

(statearr_12238_13244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (10))){
var inst_12217 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12239_13246 = state_12225__$1;
(statearr_12239_13246[(2)] = inst_12217);

(statearr_12239_13246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (8))){
var inst_12204 = (state_12225[(7)]);
var inst_12206 = (state_12225[(9)]);
var inst_12205 = (state_12225[(8)]);
var inst_12195 = (state_12225[(10)]);
var inst_12209 = (function (){var cs = inst_12195;
var vec__12200 = inst_12204;
var v = inst_12205;
var c = inst_12206;
return (function (p1__12191_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12191_SHARP_);
});
})();
var inst_12210 = cljs.core.filterv(inst_12209,inst_12195);
var inst_12195__$1 = inst_12210;
var state_12225__$1 = (function (){var statearr_12240 = state_12225;
(statearr_12240[(10)] = inst_12195__$1);

return statearr_12240;
})();
var statearr_12241_13248 = state_12225__$1;
(statearr_12241_13248[(2)] = null);

(statearr_12241_13248[(1)] = (2));


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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12242[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12242[(1)] = (1));

return statearr_12242;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12225){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12225);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12243){var ex__10882__auto__ = e12243;
var statearr_12244_13256 = state_12225;
(statearr_12244_13256[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12225[(4)]))){
var statearr_12245_13258 = state_12225;
(statearr_12245_13258[(1)] = cljs.core.first((state_12225[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13260 = state_12225;
state_12225 = G__13260;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12246 = f__10972__auto__();
(statearr_12246[(6)] = c__10971__auto___13236);

return statearr_12246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
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
var G__12248 = arguments.length;
switch (G__12248) {
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
var c__10971__auto___13264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12280){
var state_val_12281 = (state_12280[(1)]);
if((state_val_12281 === (7))){
var inst_12258 = (state_12280[(7)]);
var inst_12258__$1 = (state_12280[(2)]);
var inst_12259 = (inst_12258__$1 == null);
var inst_12260 = cljs.core.not(inst_12259);
var state_12280__$1 = (function (){var statearr_12286 = state_12280;
(statearr_12286[(7)] = inst_12258__$1);

return statearr_12286;
})();
if(inst_12260){
var statearr_12287_13265 = state_12280__$1;
(statearr_12287_13265[(1)] = (8));

} else {
var statearr_12288_13266 = state_12280__$1;
(statearr_12288_13266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (1))){
var inst_12249 = (0);
var state_12280__$1 = (function (){var statearr_12289 = state_12280;
(statearr_12289[(8)] = inst_12249);

return statearr_12289;
})();
var statearr_12290_13268 = state_12280__$1;
(statearr_12290_13268[(2)] = null);

(statearr_12290_13268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (4))){
var state_12280__$1 = state_12280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12280__$1,(7),ch);
} else {
if((state_val_12281 === (6))){
var inst_12275 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12293_13269 = state_12280__$1;
(statearr_12293_13269[(2)] = inst_12275);

(statearr_12293_13269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (3))){
var inst_12277 = (state_12280[(2)]);
var inst_12278 = cljs.core.async.close_BANG_(out);
var state_12280__$1 = (function (){var statearr_12294 = state_12280;
(statearr_12294[(9)] = inst_12277);

return statearr_12294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12280__$1,inst_12278);
} else {
if((state_val_12281 === (2))){
var inst_12249 = (state_12280[(8)]);
var inst_12251 = (inst_12249 < n);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12251)){
var statearr_12295_13270 = state_12280__$1;
(statearr_12295_13270[(1)] = (4));

} else {
var statearr_12296_13272 = state_12280__$1;
(statearr_12296_13272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (11))){
var inst_12249 = (state_12280[(8)]);
var inst_12263 = (state_12280[(2)]);
var inst_12268 = (inst_12249 + (1));
var inst_12249__$1 = inst_12268;
var state_12280__$1 = (function (){var statearr_12297 = state_12280;
(statearr_12297[(8)] = inst_12249__$1);

(statearr_12297[(10)] = inst_12263);

return statearr_12297;
})();
var statearr_12298_13275 = state_12280__$1;
(statearr_12298_13275[(2)] = null);

(statearr_12298_13275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (9))){
var state_12280__$1 = state_12280;
var statearr_12299_13327 = state_12280__$1;
(statearr_12299_13327[(2)] = null);

(statearr_12299_13327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (5))){
var state_12280__$1 = state_12280;
var statearr_12300_13328 = state_12280__$1;
(statearr_12300_13328[(2)] = null);

(statearr_12300_13328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (10))){
var inst_12272 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12301_13329 = state_12280__$1;
(statearr_12301_13329[(2)] = inst_12272);

(statearr_12301_13329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (8))){
var inst_12258 = (state_12280[(7)]);
var state_12280__$1 = state_12280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12280__$1,(11),out,inst_12258);
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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12302[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12302[(1)] = (1));

return statearr_12302;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12280){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12280);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12303){var ex__10882__auto__ = e12303;
var statearr_12304_13330 = state_12280;
(statearr_12304_13330[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12280[(4)]))){
var statearr_12305_13331 = state_12280;
(statearr_12305_13331[(1)] = cljs.core.first((state_12280[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13332 = state_12280;
state_12280 = G__13332;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12306 = f__10972__auto__();
(statearr_12306[(6)] = c__10971__auto___13264);

return statearr_12306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12308 = (function (f,ch,meta12309){
this.f = f;
this.ch = ch;
this.meta12309 = meta12309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12310,meta12309__$1){
var self__ = this;
var _12310__$1 = this;
return (new cljs.core.async.t_cljs$core$async12308(self__.f,self__.ch,meta12309__$1));
}));

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12310){
var self__ = this;
var _12310__$1 = this;
return self__.meta12309;
}));

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12311 = (function (f,ch,meta12309,_,fn1,meta12312){
this.f = f;
this.ch = ch;
this.meta12309 = meta12309;
this._ = _;
this.fn1 = fn1;
this.meta12312 = meta12312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12313,meta12312__$1){
var self__ = this;
var _12313__$1 = this;
return (new cljs.core.async.t_cljs$core$async12311(self__.f,self__.ch,self__.meta12309,self__._,self__.fn1,meta12312__$1));
}));

(cljs.core.async.t_cljs$core$async12311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12313){
var self__ = this;
var _12313__$1 = this;
return self__.meta12312;
}));

(cljs.core.async.t_cljs$core$async12311.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12307_SHARP_){
var G__12317 = (((p1__12307_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12307_SHARP_) : self__.f.call(null,p1__12307_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12317) : f1.call(null,G__12317));
});
}));

(cljs.core.async.t_cljs$core$async12311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12309","meta12309",-212374520,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12308","cljs.core.async/t_cljs$core$async12308",-800666388,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12312","meta12312",555893338,null)], null);
}));

(cljs.core.async.t_cljs$core$async12311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12311");

(cljs.core.async.t_cljs$core$async12311.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12311.
 */
cljs.core.async.__GT_t_cljs$core$async12311 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12311(f__$1,ch__$1,meta12309__$1,___$2,fn1__$1,meta12312){
return (new cljs.core.async.t_cljs$core$async12311(f__$1,ch__$1,meta12309__$1,___$2,fn1__$1,meta12312));
});

}

return (new cljs.core.async.t_cljs$core$async12311(self__.f,self__.ch,self__.meta12309,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12318 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12318) : self__.f.call(null,G__12318));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12309","meta12309",-212374520,null)], null);
}));

(cljs.core.async.t_cljs$core$async12308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12308");

(cljs.core.async.t_cljs$core$async12308.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12308.
 */
cljs.core.async.__GT_t_cljs$core$async12308 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12308(f__$1,ch__$1,meta12309){
return (new cljs.core.async.t_cljs$core$async12308(f__$1,ch__$1,meta12309));
});

}

return (new cljs.core.async.t_cljs$core$async12308(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12319 = (function (f,ch,meta12320){
this.f = f;
this.ch = ch;
this.meta12320 = meta12320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12321,meta12320__$1){
var self__ = this;
var _12321__$1 = this;
return (new cljs.core.async.t_cljs$core$async12319(self__.f,self__.ch,meta12320__$1));
}));

(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12321){
var self__ = this;
var _12321__$1 = this;
return self__.meta12320;
}));

(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12320","meta12320",-37803313,null)], null);
}));

(cljs.core.async.t_cljs$core$async12319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12319");

(cljs.core.async.t_cljs$core$async12319.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12319.
 */
cljs.core.async.__GT_t_cljs$core$async12319 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12319(f__$1,ch__$1,meta12320){
return (new cljs.core.async.t_cljs$core$async12319(f__$1,ch__$1,meta12320));
});

}

return (new cljs.core.async.t_cljs$core$async12319(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12330 = (function (p,ch,meta12331){
this.p = p;
this.ch = ch;
this.meta12331 = meta12331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12332,meta12331__$1){
var self__ = this;
var _12332__$1 = this;
return (new cljs.core.async.t_cljs$core$async12330(self__.p,self__.ch,meta12331__$1));
}));

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12332){
var self__ = this;
var _12332__$1 = this;
return self__.meta12331;
}));

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12331","meta12331",696614045,null)], null);
}));

(cljs.core.async.t_cljs$core$async12330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12330");

(cljs.core.async.t_cljs$core$async12330.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12330.
 */
cljs.core.async.__GT_t_cljs$core$async12330 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12330(p__$1,ch__$1,meta12331){
return (new cljs.core.async.t_cljs$core$async12330(p__$1,ch__$1,meta12331));
});

}

return (new cljs.core.async.t_cljs$core$async12330(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12344 = arguments.length;
switch (G__12344) {
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
var c__10971__auto___13361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12367){
var state_val_12368 = (state_12367[(1)]);
if((state_val_12368 === (7))){
var inst_12363 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12374_13363 = state_12367__$1;
(statearr_12374_13363[(2)] = inst_12363);

(statearr_12374_13363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (1))){
var state_12367__$1 = state_12367;
var statearr_12375_13364 = state_12367__$1;
(statearr_12375_13364[(2)] = null);

(statearr_12375_13364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (4))){
var inst_12347 = (state_12367[(7)]);
var inst_12347__$1 = (state_12367[(2)]);
var inst_12348 = (inst_12347__$1 == null);
var state_12367__$1 = (function (){var statearr_12379 = state_12367;
(statearr_12379[(7)] = inst_12347__$1);

return statearr_12379;
})();
if(cljs.core.truth_(inst_12348)){
var statearr_12380_13366 = state_12367__$1;
(statearr_12380_13366[(1)] = (5));

} else {
var statearr_12381_13367 = state_12367__$1;
(statearr_12381_13367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (6))){
var inst_12347 = (state_12367[(7)]);
var inst_12352 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12347) : p.call(null,inst_12347));
var state_12367__$1 = state_12367;
if(cljs.core.truth_(inst_12352)){
var statearr_12384_13368 = state_12367__$1;
(statearr_12384_13368[(1)] = (8));

} else {
var statearr_12385_13369 = state_12367__$1;
(statearr_12385_13369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (3))){
var inst_12365 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12367__$1,inst_12365);
} else {
if((state_val_12368 === (2))){
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12367__$1,(4),ch);
} else {
if((state_val_12368 === (11))){
var inst_12356 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12387_13371 = state_12367__$1;
(statearr_12387_13371[(2)] = inst_12356);

(statearr_12387_13371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (9))){
var state_12367__$1 = state_12367;
var statearr_12389_13372 = state_12367__$1;
(statearr_12389_13372[(2)] = null);

(statearr_12389_13372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (5))){
var inst_12350 = cljs.core.async.close_BANG_(out);
var state_12367__$1 = state_12367;
var statearr_12390_13375 = state_12367__$1;
(statearr_12390_13375[(2)] = inst_12350);

(statearr_12390_13375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (10))){
var inst_12359 = (state_12367[(2)]);
var state_12367__$1 = (function (){var statearr_12391 = state_12367;
(statearr_12391[(8)] = inst_12359);

return statearr_12391;
})();
var statearr_12392_13376 = state_12367__$1;
(statearr_12392_13376[(2)] = null);

(statearr_12392_13376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (8))){
var inst_12347 = (state_12367[(7)]);
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12367__$1,(11),out,inst_12347);
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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12393 = [null,null,null,null,null,null,null,null,null];
(statearr_12393[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12393[(1)] = (1));

return statearr_12393;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12367){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12367);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12394){var ex__10882__auto__ = e12394;
var statearr_12395_13377 = state_12367;
(statearr_12395_13377[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12367[(4)]))){
var statearr_12396_13378 = state_12367;
(statearr_12396_13378[(1)] = cljs.core.first((state_12367[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13379 = state_12367;
state_12367 = G__13379;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12397 = f__10972__auto__();
(statearr_12397[(6)] = c__10971__auto___13361);

return statearr_12397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12399 = arguments.length;
switch (G__12399) {
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
var c__10971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12463){
var state_val_12464 = (state_12463[(1)]);
if((state_val_12464 === (7))){
var inst_12458 = (state_12463[(2)]);
var state_12463__$1 = state_12463;
var statearr_12465_13381 = state_12463__$1;
(statearr_12465_13381[(2)] = inst_12458);

(statearr_12465_13381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (20))){
var inst_12427 = (state_12463[(7)]);
var inst_12439 = (state_12463[(2)]);
var inst_12440 = cljs.core.next(inst_12427);
var inst_12413 = inst_12440;
var inst_12414 = null;
var inst_12415 = (0);
var inst_12416 = (0);
var state_12463__$1 = (function (){var statearr_12466 = state_12463;
(statearr_12466[(8)] = inst_12415);

(statearr_12466[(9)] = inst_12413);

(statearr_12466[(10)] = inst_12416);

(statearr_12466[(11)] = inst_12439);

(statearr_12466[(12)] = inst_12414);

return statearr_12466;
})();
var statearr_12467_13382 = state_12463__$1;
(statearr_12467_13382[(2)] = null);

(statearr_12467_13382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (1))){
var state_12463__$1 = state_12463;
var statearr_12468_13383 = state_12463__$1;
(statearr_12468_13383[(2)] = null);

(statearr_12468_13383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (4))){
var inst_12402 = (state_12463[(13)]);
var inst_12402__$1 = (state_12463[(2)]);
var inst_12403 = (inst_12402__$1 == null);
var state_12463__$1 = (function (){var statearr_12469 = state_12463;
(statearr_12469[(13)] = inst_12402__$1);

return statearr_12469;
})();
if(cljs.core.truth_(inst_12403)){
var statearr_12470_13384 = state_12463__$1;
(statearr_12470_13384[(1)] = (5));

} else {
var statearr_12471_13385 = state_12463__$1;
(statearr_12471_13385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (15))){
var state_12463__$1 = state_12463;
var statearr_12475_13386 = state_12463__$1;
(statearr_12475_13386[(2)] = null);

(statearr_12475_13386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (21))){
var state_12463__$1 = state_12463;
var statearr_12476_13387 = state_12463__$1;
(statearr_12476_13387[(2)] = null);

(statearr_12476_13387[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (13))){
var inst_12415 = (state_12463[(8)]);
var inst_12413 = (state_12463[(9)]);
var inst_12416 = (state_12463[(10)]);
var inst_12414 = (state_12463[(12)]);
var inst_12423 = (state_12463[(2)]);
var inst_12424 = (inst_12416 + (1));
var tmp12472 = inst_12415;
var tmp12473 = inst_12413;
var tmp12474 = inst_12414;
var inst_12413__$1 = tmp12473;
var inst_12414__$1 = tmp12474;
var inst_12415__$1 = tmp12472;
var inst_12416__$1 = inst_12424;
var state_12463__$1 = (function (){var statearr_12477 = state_12463;
(statearr_12477[(8)] = inst_12415__$1);

(statearr_12477[(9)] = inst_12413__$1);

(statearr_12477[(10)] = inst_12416__$1);

(statearr_12477[(14)] = inst_12423);

(statearr_12477[(12)] = inst_12414__$1);

return statearr_12477;
})();
var statearr_12478_13388 = state_12463__$1;
(statearr_12478_13388[(2)] = null);

(statearr_12478_13388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (22))){
var state_12463__$1 = state_12463;
var statearr_12479_13389 = state_12463__$1;
(statearr_12479_13389[(2)] = null);

(statearr_12479_13389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (6))){
var inst_12402 = (state_12463[(13)]);
var inst_12411 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12402) : f.call(null,inst_12402));
var inst_12412 = cljs.core.seq(inst_12411);
var inst_12413 = inst_12412;
var inst_12414 = null;
var inst_12415 = (0);
var inst_12416 = (0);
var state_12463__$1 = (function (){var statearr_12480 = state_12463;
(statearr_12480[(8)] = inst_12415);

(statearr_12480[(9)] = inst_12413);

(statearr_12480[(10)] = inst_12416);

(statearr_12480[(12)] = inst_12414);

return statearr_12480;
})();
var statearr_12481_13390 = state_12463__$1;
(statearr_12481_13390[(2)] = null);

(statearr_12481_13390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (17))){
var inst_12427 = (state_12463[(7)]);
var inst_12431 = cljs.core.chunk_first(inst_12427);
var inst_12432 = cljs.core.chunk_rest(inst_12427);
var inst_12433 = cljs.core.count(inst_12431);
var inst_12413 = inst_12432;
var inst_12414 = inst_12431;
var inst_12415 = inst_12433;
var inst_12416 = (0);
var state_12463__$1 = (function (){var statearr_12482 = state_12463;
(statearr_12482[(8)] = inst_12415);

(statearr_12482[(9)] = inst_12413);

(statearr_12482[(10)] = inst_12416);

(statearr_12482[(12)] = inst_12414);

return statearr_12482;
})();
var statearr_12483_13391 = state_12463__$1;
(statearr_12483_13391[(2)] = null);

(statearr_12483_13391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (3))){
var inst_12460 = (state_12463[(2)]);
var state_12463__$1 = state_12463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12463__$1,inst_12460);
} else {
if((state_val_12464 === (12))){
var inst_12448 = (state_12463[(2)]);
var state_12463__$1 = state_12463;
var statearr_12484_13392 = state_12463__$1;
(statearr_12484_13392[(2)] = inst_12448);

(statearr_12484_13392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (2))){
var state_12463__$1 = state_12463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12463__$1,(4),in$);
} else {
if((state_val_12464 === (23))){
var inst_12456 = (state_12463[(2)]);
var state_12463__$1 = state_12463;
var statearr_12485_13393 = state_12463__$1;
(statearr_12485_13393[(2)] = inst_12456);

(statearr_12485_13393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (19))){
var inst_12443 = (state_12463[(2)]);
var state_12463__$1 = state_12463;
var statearr_12488_13394 = state_12463__$1;
(statearr_12488_13394[(2)] = inst_12443);

(statearr_12488_13394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (11))){
var inst_12427 = (state_12463[(7)]);
var inst_12413 = (state_12463[(9)]);
var inst_12427__$1 = cljs.core.seq(inst_12413);
var state_12463__$1 = (function (){var statearr_12490 = state_12463;
(statearr_12490[(7)] = inst_12427__$1);

return statearr_12490;
})();
if(inst_12427__$1){
var statearr_12491_13395 = state_12463__$1;
(statearr_12491_13395[(1)] = (14));

} else {
var statearr_12492_13396 = state_12463__$1;
(statearr_12492_13396[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (9))){
var inst_12450 = (state_12463[(2)]);
var inst_12451 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12463__$1 = (function (){var statearr_12495 = state_12463;
(statearr_12495[(15)] = inst_12450);

return statearr_12495;
})();
if(cljs.core.truth_(inst_12451)){
var statearr_12497_13397 = state_12463__$1;
(statearr_12497_13397[(1)] = (21));

} else {
var statearr_12498_13398 = state_12463__$1;
(statearr_12498_13398[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (5))){
var inst_12405 = cljs.core.async.close_BANG_(out);
var state_12463__$1 = state_12463;
var statearr_12499_13399 = state_12463__$1;
(statearr_12499_13399[(2)] = inst_12405);

(statearr_12499_13399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (14))){
var inst_12427 = (state_12463[(7)]);
var inst_12429 = cljs.core.chunked_seq_QMARK_(inst_12427);
var state_12463__$1 = state_12463;
if(inst_12429){
var statearr_12500_13400 = state_12463__$1;
(statearr_12500_13400[(1)] = (17));

} else {
var statearr_12501_13401 = state_12463__$1;
(statearr_12501_13401[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (16))){
var inst_12446 = (state_12463[(2)]);
var state_12463__$1 = state_12463;
var statearr_12502_13402 = state_12463__$1;
(statearr_12502_13402[(2)] = inst_12446);

(statearr_12502_13402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12464 === (10))){
var inst_12416 = (state_12463[(10)]);
var inst_12414 = (state_12463[(12)]);
var inst_12421 = cljs.core._nth(inst_12414,inst_12416);
var state_12463__$1 = state_12463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12463__$1,(13),out,inst_12421);
} else {
if((state_val_12464 === (18))){
var inst_12427 = (state_12463[(7)]);
var inst_12437 = cljs.core.first(inst_12427);
var state_12463__$1 = state_12463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12463__$1,(20),out,inst_12437);
} else {
if((state_val_12464 === (8))){
var inst_12415 = (state_12463[(8)]);
var inst_12416 = (state_12463[(10)]);
var inst_12418 = (inst_12416 < inst_12415);
var inst_12419 = inst_12418;
var state_12463__$1 = state_12463;
if(cljs.core.truth_(inst_12419)){
var statearr_12503_13403 = state_12463__$1;
(statearr_12503_13403[(1)] = (10));

} else {
var statearr_12504_13404 = state_12463__$1;
(statearr_12504_13404[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10879__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10879__auto____0 = (function (){
var statearr_12505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12505[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10879__auto__);

(statearr_12505[(1)] = (1));

return statearr_12505;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10879__auto____1 = (function (state_12463){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12463);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12506){var ex__10882__auto__ = e12506;
var statearr_12507_13405 = state_12463;
(statearr_12507_13405[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12463[(4)]))){
var statearr_12508_13406 = state_12463;
(statearr_12508_13406[(1)] = cljs.core.first((state_12463[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12463;
state_12463 = G__13407;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10879__auto__ = function(state_12463){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10879__auto____1.call(this,state_12463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10879__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10879__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12509 = f__10972__auto__();
(statearr_12509[(6)] = c__10971__auto__);

return statearr_12509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));

return c__10971__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12511 = arguments.length;
switch (G__12511) {
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
var G__12513 = arguments.length;
switch (G__12513) {
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
var G__12517 = arguments.length;
switch (G__12517) {
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
var c__10971__auto___13411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12541){
var state_val_12542 = (state_12541[(1)]);
if((state_val_12542 === (7))){
var inst_12536 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12555_13412 = state_12541__$1;
(statearr_12555_13412[(2)] = inst_12536);

(statearr_12555_13412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (1))){
var inst_12518 = null;
var state_12541__$1 = (function (){var statearr_12556 = state_12541;
(statearr_12556[(7)] = inst_12518);

return statearr_12556;
})();
var statearr_12557_13413 = state_12541__$1;
(statearr_12557_13413[(2)] = null);

(statearr_12557_13413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (4))){
var inst_12521 = (state_12541[(8)]);
var inst_12521__$1 = (state_12541[(2)]);
var inst_12522 = (inst_12521__$1 == null);
var inst_12523 = cljs.core.not(inst_12522);
var state_12541__$1 = (function (){var statearr_12558 = state_12541;
(statearr_12558[(8)] = inst_12521__$1);

return statearr_12558;
})();
if(inst_12523){
var statearr_12559_13414 = state_12541__$1;
(statearr_12559_13414[(1)] = (5));

} else {
var statearr_12560_13415 = state_12541__$1;
(statearr_12560_13415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (6))){
var state_12541__$1 = state_12541;
var statearr_12561_13416 = state_12541__$1;
(statearr_12561_13416[(2)] = null);

(statearr_12561_13416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (3))){
var inst_12538 = (state_12541[(2)]);
var inst_12539 = cljs.core.async.close_BANG_(out);
var state_12541__$1 = (function (){var statearr_12562 = state_12541;
(statearr_12562[(9)] = inst_12538);

return statearr_12562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12541__$1,inst_12539);
} else {
if((state_val_12542 === (2))){
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12541__$1,(4),ch);
} else {
if((state_val_12542 === (11))){
var inst_12521 = (state_12541[(8)]);
var inst_12530 = (state_12541[(2)]);
var inst_12518 = inst_12521;
var state_12541__$1 = (function (){var statearr_12563 = state_12541;
(statearr_12563[(10)] = inst_12530);

(statearr_12563[(7)] = inst_12518);

return statearr_12563;
})();
var statearr_12564_13417 = state_12541__$1;
(statearr_12564_13417[(2)] = null);

(statearr_12564_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (9))){
var inst_12521 = (state_12541[(8)]);
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12541__$1,(11),out,inst_12521);
} else {
if((state_val_12542 === (5))){
var inst_12518 = (state_12541[(7)]);
var inst_12521 = (state_12541[(8)]);
var inst_12525 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12521,inst_12518);
var state_12541__$1 = state_12541;
if(inst_12525){
var statearr_12566_13418 = state_12541__$1;
(statearr_12566_13418[(1)] = (8));

} else {
var statearr_12567_13419 = state_12541__$1;
(statearr_12567_13419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (10))){
var inst_12533 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12568_13420 = state_12541__$1;
(statearr_12568_13420[(2)] = inst_12533);

(statearr_12568_13420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (8))){
var inst_12518 = (state_12541[(7)]);
var tmp12565 = inst_12518;
var inst_12518__$1 = tmp12565;
var state_12541__$1 = (function (){var statearr_12569 = state_12541;
(statearr_12569[(7)] = inst_12518__$1);

return statearr_12569;
})();
var statearr_12570_13421 = state_12541__$1;
(statearr_12570_13421[(2)] = null);

(statearr_12570_13421[(1)] = (2));


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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12571[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12571[(1)] = (1));

return statearr_12571;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12541){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12541);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12572){var ex__10882__auto__ = e12572;
var statearr_12573_13422 = state_12541;
(statearr_12573_13422[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12541[(4)]))){
var statearr_12574_13423 = state_12541;
(statearr_12574_13423[(1)] = cljs.core.first((state_12541[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_12541;
state_12541 = G__13424;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12575 = f__10972__auto__();
(statearr_12575[(6)] = c__10971__auto___13411);

return statearr_12575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12577 = arguments.length;
switch (G__12577) {
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
var c__10971__auto___13426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12616){
var state_val_12617 = (state_12616[(1)]);
if((state_val_12617 === (7))){
var inst_12612 = (state_12616[(2)]);
var state_12616__$1 = state_12616;
var statearr_12618_13427 = state_12616__$1;
(statearr_12618_13427[(2)] = inst_12612);

(statearr_12618_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (1))){
var inst_12578 = (new Array(n));
var inst_12579 = inst_12578;
var inst_12580 = (0);
var state_12616__$1 = (function (){var statearr_12619 = state_12616;
(statearr_12619[(7)] = inst_12579);

(statearr_12619[(8)] = inst_12580);

return statearr_12619;
})();
var statearr_12620_13428 = state_12616__$1;
(statearr_12620_13428[(2)] = null);

(statearr_12620_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (4))){
var inst_12583 = (state_12616[(9)]);
var inst_12583__$1 = (state_12616[(2)]);
var inst_12584 = (inst_12583__$1 == null);
var inst_12585 = cljs.core.not(inst_12584);
var state_12616__$1 = (function (){var statearr_12621 = state_12616;
(statearr_12621[(9)] = inst_12583__$1);

return statearr_12621;
})();
if(inst_12585){
var statearr_12624_13429 = state_12616__$1;
(statearr_12624_13429[(1)] = (5));

} else {
var statearr_12633_13430 = state_12616__$1;
(statearr_12633_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (15))){
var inst_12605 = (state_12616[(2)]);
var state_12616__$1 = state_12616;
var statearr_12634_13431 = state_12616__$1;
(statearr_12634_13431[(2)] = inst_12605);

(statearr_12634_13431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (13))){
var state_12616__$1 = state_12616;
var statearr_12635_13432 = state_12616__$1;
(statearr_12635_13432[(2)] = null);

(statearr_12635_13432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (6))){
var inst_12580 = (state_12616[(8)]);
var inst_12601 = (inst_12580 > (0));
var state_12616__$1 = state_12616;
if(cljs.core.truth_(inst_12601)){
var statearr_12636_13433 = state_12616__$1;
(statearr_12636_13433[(1)] = (12));

} else {
var statearr_12637_13434 = state_12616__$1;
(statearr_12637_13434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (3))){
var inst_12614 = (state_12616[(2)]);
var state_12616__$1 = state_12616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12616__$1,inst_12614);
} else {
if((state_val_12617 === (12))){
var inst_12579 = (state_12616[(7)]);
var inst_12603 = cljs.core.vec(inst_12579);
var state_12616__$1 = state_12616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12616__$1,(15),out,inst_12603);
} else {
if((state_val_12617 === (2))){
var state_12616__$1 = state_12616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12616__$1,(4),ch);
} else {
if((state_val_12617 === (11))){
var inst_12595 = (state_12616[(2)]);
var inst_12596 = (new Array(n));
var inst_12579 = inst_12596;
var inst_12580 = (0);
var state_12616__$1 = (function (){var statearr_12638 = state_12616;
(statearr_12638[(10)] = inst_12595);

(statearr_12638[(7)] = inst_12579);

(statearr_12638[(8)] = inst_12580);

return statearr_12638;
})();
var statearr_12639_13435 = state_12616__$1;
(statearr_12639_13435[(2)] = null);

(statearr_12639_13435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (9))){
var inst_12579 = (state_12616[(7)]);
var inst_12593 = cljs.core.vec(inst_12579);
var state_12616__$1 = state_12616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12616__$1,(11),out,inst_12593);
} else {
if((state_val_12617 === (5))){
var inst_12579 = (state_12616[(7)]);
var inst_12583 = (state_12616[(9)]);
var inst_12588 = (state_12616[(11)]);
var inst_12580 = (state_12616[(8)]);
var inst_12587 = (inst_12579[inst_12580] = inst_12583);
var inst_12588__$1 = (inst_12580 + (1));
var inst_12589 = (inst_12588__$1 < n);
var state_12616__$1 = (function (){var statearr_12640 = state_12616;
(statearr_12640[(12)] = inst_12587);

(statearr_12640[(11)] = inst_12588__$1);

return statearr_12640;
})();
if(cljs.core.truth_(inst_12589)){
var statearr_12641_13436 = state_12616__$1;
(statearr_12641_13436[(1)] = (8));

} else {
var statearr_12642_13437 = state_12616__$1;
(statearr_12642_13437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (14))){
var inst_12609 = (state_12616[(2)]);
var inst_12610 = cljs.core.async.close_BANG_(out);
var state_12616__$1 = (function (){var statearr_12644 = state_12616;
(statearr_12644[(13)] = inst_12609);

return statearr_12644;
})();
var statearr_12645_13438 = state_12616__$1;
(statearr_12645_13438[(2)] = inst_12610);

(statearr_12645_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (10))){
var inst_12599 = (state_12616[(2)]);
var state_12616__$1 = state_12616;
var statearr_12646_13439 = state_12616__$1;
(statearr_12646_13439[(2)] = inst_12599);

(statearr_12646_13439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12617 === (8))){
var inst_12579 = (state_12616[(7)]);
var inst_12588 = (state_12616[(11)]);
var tmp12643 = inst_12579;
var inst_12579__$1 = tmp12643;
var inst_12580 = inst_12588;
var state_12616__$1 = (function (){var statearr_12647 = state_12616;
(statearr_12647[(7)] = inst_12579__$1);

(statearr_12647[(8)] = inst_12580);

return statearr_12647;
})();
var statearr_12648_13440 = state_12616__$1;
(statearr_12648_13440[(2)] = null);

(statearr_12648_13440[(1)] = (2));


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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12649[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12649[(1)] = (1));

return statearr_12649;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12616){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12616);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12650){var ex__10882__auto__ = e12650;
var statearr_12651_13441 = state_12616;
(statearr_12651_13441[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12616[(4)]))){
var statearr_12652_13442 = state_12616;
(statearr_12652_13442[(1)] = cljs.core.first((state_12616[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_12616;
state_12616 = G__13443;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12653 = f__10972__auto__();
(statearr_12653[(6)] = c__10971__auto___13426);

return statearr_12653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12656 = arguments.length;
switch (G__12656) {
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
var c__10971__auto___13445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10878__auto__ = (function (state_12702){
var state_val_12703 = (state_12702[(1)]);
if((state_val_12703 === (7))){
var inst_12698 = (state_12702[(2)]);
var state_12702__$1 = state_12702;
var statearr_12708_13446 = state_12702__$1;
(statearr_12708_13446[(2)] = inst_12698);

(statearr_12708_13446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (1))){
var inst_12657 = [];
var inst_12658 = inst_12657;
var inst_12659 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12702__$1 = (function (){var statearr_12709 = state_12702;
(statearr_12709[(7)] = inst_12658);

(statearr_12709[(8)] = inst_12659);

return statearr_12709;
})();
var statearr_12710_13447 = state_12702__$1;
(statearr_12710_13447[(2)] = null);

(statearr_12710_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (4))){
var inst_12662 = (state_12702[(9)]);
var inst_12662__$1 = (state_12702[(2)]);
var inst_12663 = (inst_12662__$1 == null);
var inst_12664 = cljs.core.not(inst_12663);
var state_12702__$1 = (function (){var statearr_12711 = state_12702;
(statearr_12711[(9)] = inst_12662__$1);

return statearr_12711;
})();
if(inst_12664){
var statearr_12712_13448 = state_12702__$1;
(statearr_12712_13448[(1)] = (5));

} else {
var statearr_12713_13449 = state_12702__$1;
(statearr_12713_13449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (15))){
var inst_12692 = (state_12702[(2)]);
var state_12702__$1 = state_12702;
var statearr_12714_13450 = state_12702__$1;
(statearr_12714_13450[(2)] = inst_12692);

(statearr_12714_13450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (13))){
var state_12702__$1 = state_12702;
var statearr_12715_13451 = state_12702__$1;
(statearr_12715_13451[(2)] = null);

(statearr_12715_13451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (6))){
var inst_12658 = (state_12702[(7)]);
var inst_12683 = inst_12658.length;
var inst_12684 = (inst_12683 > (0));
var state_12702__$1 = state_12702;
if(cljs.core.truth_(inst_12684)){
var statearr_12716_13452 = state_12702__$1;
(statearr_12716_13452[(1)] = (12));

} else {
var statearr_12717_13453 = state_12702__$1;
(statearr_12717_13453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (3))){
var inst_12700 = (state_12702[(2)]);
var state_12702__$1 = state_12702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12702__$1,inst_12700);
} else {
if((state_val_12703 === (12))){
var inst_12658 = (state_12702[(7)]);
var inst_12690 = cljs.core.vec(inst_12658);
var state_12702__$1 = state_12702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12702__$1,(15),out,inst_12690);
} else {
if((state_val_12703 === (2))){
var state_12702__$1 = state_12702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12702__$1,(4),ch);
} else {
if((state_val_12703 === (11))){
var inst_12666 = (state_12702[(10)]);
var inst_12662 = (state_12702[(9)]);
var inst_12676 = (state_12702[(2)]);
var inst_12677 = [];
var inst_12678 = inst_12677.push(inst_12662);
var inst_12658 = inst_12677;
var inst_12659 = inst_12666;
var state_12702__$1 = (function (){var statearr_12718 = state_12702;
(statearr_12718[(11)] = inst_12676);

(statearr_12718[(12)] = inst_12678);

(statearr_12718[(7)] = inst_12658);

(statearr_12718[(8)] = inst_12659);

return statearr_12718;
})();
var statearr_12719_13454 = state_12702__$1;
(statearr_12719_13454[(2)] = null);

(statearr_12719_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (9))){
var inst_12658 = (state_12702[(7)]);
var inst_12674 = cljs.core.vec(inst_12658);
var state_12702__$1 = state_12702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12702__$1,(11),out,inst_12674);
} else {
if((state_val_12703 === (5))){
var inst_12666 = (state_12702[(10)]);
var inst_12659 = (state_12702[(8)]);
var inst_12662 = (state_12702[(9)]);
var inst_12666__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12662) : f.call(null,inst_12662));
var inst_12667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12666__$1,inst_12659);
var inst_12668 = cljs.core.keyword_identical_QMARK_(inst_12659,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12669 = ((inst_12667) || (inst_12668));
var state_12702__$1 = (function (){var statearr_12720 = state_12702;
(statearr_12720[(10)] = inst_12666__$1);

return statearr_12720;
})();
if(cljs.core.truth_(inst_12669)){
var statearr_12725_13455 = state_12702__$1;
(statearr_12725_13455[(1)] = (8));

} else {
var statearr_12726_13456 = state_12702__$1;
(statearr_12726_13456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (14))){
var inst_12695 = (state_12702[(2)]);
var inst_12696 = cljs.core.async.close_BANG_(out);
var state_12702__$1 = (function (){var statearr_12728 = state_12702;
(statearr_12728[(13)] = inst_12695);

return statearr_12728;
})();
var statearr_12729_13457 = state_12702__$1;
(statearr_12729_13457[(2)] = inst_12696);

(statearr_12729_13457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (10))){
var inst_12681 = (state_12702[(2)]);
var state_12702__$1 = state_12702;
var statearr_12730_13458 = state_12702__$1;
(statearr_12730_13458[(2)] = inst_12681);

(statearr_12730_13458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (8))){
var inst_12666 = (state_12702[(10)]);
var inst_12658 = (state_12702[(7)]);
var inst_12662 = (state_12702[(9)]);
var inst_12671 = inst_12658.push(inst_12662);
var tmp12727 = inst_12658;
var inst_12658__$1 = tmp12727;
var inst_12659 = inst_12666;
var state_12702__$1 = (function (){var statearr_12731 = state_12702;
(statearr_12731[(7)] = inst_12658__$1);

(statearr_12731[(14)] = inst_12671);

(statearr_12731[(8)] = inst_12659);

return statearr_12731;
})();
var statearr_12732_13459 = state_12702__$1;
(statearr_12732_13459[(2)] = null);

(statearr_12732_13459[(1)] = (2));


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
var cljs$core$async$state_machine__10879__auto__ = null;
var cljs$core$async$state_machine__10879__auto____0 = (function (){
var statearr_12733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12733[(0)] = cljs$core$async$state_machine__10879__auto__);

(statearr_12733[(1)] = (1));

return statearr_12733;
});
var cljs$core$async$state_machine__10879__auto____1 = (function (state_12702){
while(true){
var ret_value__10880__auto__ = (function (){try{while(true){
var result__10881__auto__ = switch__10878__auto__(state_12702);
if(cljs.core.keyword_identical_QMARK_(result__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10881__auto__;
}
break;
}
}catch (e12734){var ex__10882__auto__ = e12734;
var statearr_12735_13460 = state_12702;
(statearr_12735_13460[(2)] = ex__10882__auto__);


if(cljs.core.seq((state_12702[(4)]))){
var statearr_12736_13461 = state_12702;
(statearr_12736_13461[(1)] = cljs.core.first((state_12702[(4)])));

} else {
throw ex__10882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13462 = state_12702;
state_12702 = G__13462;
continue;
} else {
return ret_value__10880__auto__;
}
break;
}
});
cljs$core$async$state_machine__10879__auto__ = function(state_12702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10879__auto____1.call(this,state_12702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10879__auto____0;
cljs$core$async$state_machine__10879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10879__auto____1;
return cljs$core$async$state_machine__10879__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12738 = f__10972__auto__();
(statearr_12738[(6)] = c__10971__auto___13445);

return statearr_12738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
