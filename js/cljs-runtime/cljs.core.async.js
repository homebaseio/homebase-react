goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11001 = arguments.length;
switch (G__11001) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11006 = (function (f,blockable,meta11007){
this.f = f;
this.blockable = blockable;
this.meta11007 = meta11007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11008,meta11007__$1){
var self__ = this;
var _11008__$1 = this;
return (new cljs.core.async.t_cljs$core$async11006(self__.f,self__.blockable,meta11007__$1));
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11008){
var self__ = this;
var _11008__$1 = this;
return self__.meta11007;
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11007","meta11007",-1043788860,null)], null);
}));

(cljs.core.async.t_cljs$core$async11006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11006");

(cljs.core.async.t_cljs$core$async11006.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11006.
 */
cljs.core.async.__GT_t_cljs$core$async11006 = (function cljs$core$async$__GT_t_cljs$core$async11006(f__$1,blockable__$1,meta11007){
return (new cljs.core.async.t_cljs$core$async11006(f__$1,blockable__$1,meta11007));
});

}

return (new cljs.core.async.t_cljs$core$async11006(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11015 = arguments.length;
switch (G__11015) {
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
var G__11019 = arguments.length;
switch (G__11019) {
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
var G__11021 = arguments.length;
switch (G__11021) {
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
var val_12994 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12994) : fn1.call(null,val_12994));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12994) : fn1.call(null,val_12994));
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
var G__11026 = arguments.length;
switch (G__11026) {
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
var n__4613__auto___13004 = n;
var x_13005 = (0);
while(true){
if((x_13005 < n__4613__auto___13004)){
(a[x_13005] = x_13005);

var G__13006 = (x_13005 + (1));
x_13005 = G__13006;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11029 = (function (flag,meta11030){
this.flag = flag;
this.meta11030 = meta11030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11031,meta11030__$1){
var self__ = this;
var _11031__$1 = this;
return (new cljs.core.async.t_cljs$core$async11029(self__.flag,meta11030__$1));
}));

(cljs.core.async.t_cljs$core$async11029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11031){
var self__ = this;
var _11031__$1 = this;
return self__.meta11030;
}));

(cljs.core.async.t_cljs$core$async11029.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11030","meta11030",-100741064,null)], null);
}));

(cljs.core.async.t_cljs$core$async11029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11029");

(cljs.core.async.t_cljs$core$async11029.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11029.
 */
cljs.core.async.__GT_t_cljs$core$async11029 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11029(flag__$1,meta11030){
return (new cljs.core.async.t_cljs$core$async11029(flag__$1,meta11030));
});

}

return (new cljs.core.async.t_cljs$core$async11029(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11032 = (function (flag,cb,meta11033){
this.flag = flag;
this.cb = cb;
this.meta11033 = meta11033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11034,meta11033__$1){
var self__ = this;
var _11034__$1 = this;
return (new cljs.core.async.t_cljs$core$async11032(self__.flag,self__.cb,meta11033__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11033","meta11033",-18419321,null)], null);
}));

(cljs.core.async.t_cljs$core$async11032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11032");

(cljs.core.async.t_cljs$core$async11032.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11032.
 */
cljs.core.async.__GT_t_cljs$core$async11032 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11032(flag__$1,cb__$1,meta11033){
return (new cljs.core.async.t_cljs$core$async11032(flag__$1,cb__$1,meta11033));
});

}

return (new cljs.core.async.t_cljs$core$async11032(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11041_SHARP_){
var G__11043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11041_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11043) : fret.call(null,G__11043));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11042_SHARP_){
var G__11045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11042_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11045) : fret.call(null,G__11045));
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
var G__13007 = (i + (1));
i = G__13007;
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
var len__4736__auto___13008 = arguments.length;
var i__4737__auto___13009 = (0);
while(true){
if((i__4737__auto___13009 < len__4736__auto___13008)){
args__4742__auto__.push((arguments[i__4737__auto___13009]));

var G__13010 = (i__4737__auto___13009 + (1));
i__4737__auto___13009 = G__13010;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11048){
var map__11049 = p__11048;
var map__11049__$1 = (((((!((map__11049 == null))))?(((((map__11049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11049):map__11049);
var opts = map__11049__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11046){
var G__11047 = cljs.core.first(seq11046);
var seq11046__$1 = cljs.core.next(seq11046);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11047,seq11046__$1);
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
var G__11052 = arguments.length;
switch (G__11052) {
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
var c__10939__auto___13012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11084){
var state_val_11085 = (state_11084[(1)]);
if((state_val_11085 === (7))){
var inst_11080 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11086_13013 = state_11084__$1;
(statearr_11086_13013[(2)] = inst_11080);

(statearr_11086_13013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (1))){
var state_11084__$1 = state_11084;
var statearr_11087_13014 = state_11084__$1;
(statearr_11087_13014[(2)] = null);

(statearr_11087_13014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (4))){
var inst_11063 = (state_11084[(7)]);
var inst_11063__$1 = (state_11084[(2)]);
var inst_11064 = (inst_11063__$1 == null);
var state_11084__$1 = (function (){var statearr_11088 = state_11084;
(statearr_11088[(7)] = inst_11063__$1);

return statearr_11088;
})();
if(cljs.core.truth_(inst_11064)){
var statearr_11089_13015 = state_11084__$1;
(statearr_11089_13015[(1)] = (5));

} else {
var statearr_11090_13016 = state_11084__$1;
(statearr_11090_13016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (13))){
var state_11084__$1 = state_11084;
var statearr_11091_13017 = state_11084__$1;
(statearr_11091_13017[(2)] = null);

(statearr_11091_13017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (6))){
var inst_11063 = (state_11084[(7)]);
var state_11084__$1 = state_11084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11084__$1,(11),to,inst_11063);
} else {
if((state_val_11085 === (3))){
var inst_11082 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11084__$1,inst_11082);
} else {
if((state_val_11085 === (12))){
var state_11084__$1 = state_11084;
var statearr_11092_13018 = state_11084__$1;
(statearr_11092_13018[(2)] = null);

(statearr_11092_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (2))){
var state_11084__$1 = state_11084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11084__$1,(4),from);
} else {
if((state_val_11085 === (11))){
var inst_11073 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
if(cljs.core.truth_(inst_11073)){
var statearr_11093_13019 = state_11084__$1;
(statearr_11093_13019[(1)] = (12));

} else {
var statearr_11094_13020 = state_11084__$1;
(statearr_11094_13020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (9))){
var state_11084__$1 = state_11084;
var statearr_11095_13021 = state_11084__$1;
(statearr_11095_13021[(2)] = null);

(statearr_11095_13021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (5))){
var state_11084__$1 = state_11084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11096_13022 = state_11084__$1;
(statearr_11096_13022[(1)] = (8));

} else {
var statearr_11097_13023 = state_11084__$1;
(statearr_11097_13023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (14))){
var inst_11078 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11098_13024 = state_11084__$1;
(statearr_11098_13024[(2)] = inst_11078);

(statearr_11098_13024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (10))){
var inst_11070 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11100_13025 = state_11084__$1;
(statearr_11100_13025[(2)] = inst_11070);

(statearr_11100_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (8))){
var inst_11067 = cljs.core.async.close_BANG_(to);
var state_11084__$1 = state_11084;
var statearr_11101_13026 = state_11084__$1;
(statearr_11101_13026[(2)] = inst_11067);

(statearr_11101_13026[(1)] = (10));


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
var statearr_11102 = [null,null,null,null,null,null,null,null];
(statearr_11102[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11102[(1)] = (1));

return statearr_11102;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11084){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11084);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11103){var ex__10883__auto__ = e11103;
var statearr_11104_13027 = state_11084;
(statearr_11104_13027[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11084[(4)]))){
var statearr_11107_13028 = state_11084;
(statearr_11107_13028[(1)] = cljs.core.first((state_11084[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_11084;
state_11084 = G__13029;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11108 = f__10940__auto__();
(statearr_11108[(6)] = c__10939__auto___13012);

return statearr_11108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
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
var process = (function (p__11109){
var vec__11110 = p__11109;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(1),null);
var job = vec__11110;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10939__auto___13030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11117){
var state_val_11118 = (state_11117[(1)]);
if((state_val_11118 === (1))){
var state_11117__$1 = state_11117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11117__$1,(2),res,v);
} else {
if((state_val_11118 === (2))){
var inst_11114 = (state_11117[(2)]);
var inst_11115 = cljs.core.async.close_BANG_(res);
var state_11117__$1 = (function (){var statearr_11119 = state_11117;
(statearr_11119[(7)] = inst_11114);

return statearr_11119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11117__$1,inst_11115);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11122 = [null,null,null,null,null,null,null,null];
(statearr_11122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11122[(1)] = (1));

return statearr_11122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11117){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11117);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11123){var ex__10883__auto__ = e11123;
var statearr_11124_13031 = state_11117;
(statearr_11124_13031[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11117[(4)]))){
var statearr_11125_13032 = state_11117;
(statearr_11125_13032[(1)] = cljs.core.first((state_11117[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11117;
state_11117 = G__13033;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11117){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11126 = f__10940__auto__();
(statearr_11126[(6)] = c__10939__auto___13030);

return statearr_11126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11127){
var vec__11128 = p__11127;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11128,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11128,(1),null);
var job = vec__11128;
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
var n__4613__auto___13034 = n;
var __13035 = (0);
while(true){
if((__13035 < n__4613__auto___13034)){
var G__11131_13036 = type;
var G__11131_13037__$1 = (((G__11131_13036 instanceof cljs.core.Keyword))?G__11131_13036.fqn:null);
switch (G__11131_13037__$1) {
case "compute":
var c__10939__auto___13039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10939__auto___13039,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = ((function (__13035,c__10939__auto___13039,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11144){
var state_val_11145 = (state_11144[(1)]);
if((state_val_11145 === (1))){
var state_11144__$1 = state_11144;
var statearr_11146_13040 = state_11144__$1;
(statearr_11146_13040[(2)] = null);

(statearr_11146_13040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (2))){
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11144__$1,(4),jobs);
} else {
if((state_val_11145 === (3))){
var inst_11142 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11144__$1,inst_11142);
} else {
if((state_val_11145 === (4))){
var inst_11134 = (state_11144[(2)]);
var inst_11135 = process(inst_11134);
var state_11144__$1 = state_11144;
if(cljs.core.truth_(inst_11135)){
var statearr_11147_13041 = state_11144__$1;
(statearr_11147_13041[(1)] = (5));

} else {
var statearr_11148_13042 = state_11144__$1;
(statearr_11148_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (5))){
var state_11144__$1 = state_11144;
var statearr_11149_13043 = state_11144__$1;
(statearr_11149_13043[(2)] = null);

(statearr_11149_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (6))){
var state_11144__$1 = state_11144;
var statearr_11156_13044 = state_11144__$1;
(statearr_11156_13044[(2)] = null);

(statearr_11156_13044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (7))){
var inst_11140 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11157_13045 = state_11144__$1;
(statearr_11157_13045[(2)] = inst_11140);

(statearr_11157_13045[(1)] = (3));


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
});})(__13035,c__10939__auto___13039,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10879__auto__,c__10939__auto___13039,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11158 = [null,null,null,null,null,null,null];
(statearr_11158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11158[(1)] = (1));

return statearr_11158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11144){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11144);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11159){var ex__10883__auto__ = e11159;
var statearr_11160_13046 = state_11144;
(statearr_11160_13046[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11144[(4)]))){
var statearr_11161_13047 = state_11144;
(statearr_11161_13047[(1)] = cljs.core.first((state_11144[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13048 = state_11144;
state_11144 = G__13048;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(__13035,switch__10879__auto__,c__10939__auto___13039,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10941__auto__ = (function (){var statearr_11162 = f__10940__auto__();
(statearr_11162[(6)] = c__10939__auto___13039);

return statearr_11162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
});})(__13035,c__10939__auto___13039,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
case "async":
var c__10939__auto___13049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10939__auto___13049,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = ((function (__13035,c__10939__auto___13049,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11175){
var state_val_11176 = (state_11175[(1)]);
if((state_val_11176 === (1))){
var state_11175__$1 = state_11175;
var statearr_11177_13050 = state_11175__$1;
(statearr_11177_13050[(2)] = null);

(statearr_11177_13050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11176 === (2))){
var state_11175__$1 = state_11175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11175__$1,(4),jobs);
} else {
if((state_val_11176 === (3))){
var inst_11173 = (state_11175[(2)]);
var state_11175__$1 = state_11175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11175__$1,inst_11173);
} else {
if((state_val_11176 === (4))){
var inst_11165 = (state_11175[(2)]);
var inst_11166 = async(inst_11165);
var state_11175__$1 = state_11175;
if(cljs.core.truth_(inst_11166)){
var statearr_11178_13051 = state_11175__$1;
(statearr_11178_13051[(1)] = (5));

} else {
var statearr_11179_13052 = state_11175__$1;
(statearr_11179_13052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11176 === (5))){
var state_11175__$1 = state_11175;
var statearr_11180_13053 = state_11175__$1;
(statearr_11180_13053[(2)] = null);

(statearr_11180_13053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11176 === (6))){
var state_11175__$1 = state_11175;
var statearr_11181_13054 = state_11175__$1;
(statearr_11181_13054[(2)] = null);

(statearr_11181_13054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11176 === (7))){
var inst_11171 = (state_11175[(2)]);
var state_11175__$1 = state_11175;
var statearr_11182_13055 = state_11175__$1;
(statearr_11182_13055[(2)] = inst_11171);

(statearr_11182_13055[(1)] = (3));


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
});})(__13035,c__10939__auto___13049,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10879__auto__,c__10939__auto___13049,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11185 = [null,null,null,null,null,null,null];
(statearr_11185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11185[(1)] = (1));

return statearr_11185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11175){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11175);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11186){var ex__10883__auto__ = e11186;
var statearr_11187_13056 = state_11175;
(statearr_11187_13056[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11175[(4)]))){
var statearr_11188_13057 = state_11175;
(statearr_11188_13057[(1)] = cljs.core.first((state_11175[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13058 = state_11175;
state_11175 = G__13058;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(__13035,switch__10879__auto__,c__10939__auto___13049,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10941__auto__ = (function (){var statearr_11189 = f__10940__auto__();
(statearr_11189[(6)] = c__10939__auto___13049);

return statearr_11189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
});})(__13035,c__10939__auto___13049,G__11131_13036,G__11131_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11131_13037__$1)].join('')));

}

var G__13059 = (__13035 + (1));
__13035 = G__13059;
continue;
} else {
}
break;
}

var c__10939__auto___13060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11211){
var state_val_11212 = (state_11211[(1)]);
if((state_val_11212 === (7))){
var inst_11207 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
var statearr_11213_13061 = state_11211__$1;
(statearr_11213_13061[(2)] = inst_11207);

(statearr_11213_13061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (1))){
var state_11211__$1 = state_11211;
var statearr_11214_13062 = state_11211__$1;
(statearr_11214_13062[(2)] = null);

(statearr_11214_13062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (4))){
var inst_11192 = (state_11211[(7)]);
var inst_11192__$1 = (state_11211[(2)]);
var inst_11193 = (inst_11192__$1 == null);
var state_11211__$1 = (function (){var statearr_11216 = state_11211;
(statearr_11216[(7)] = inst_11192__$1);

return statearr_11216;
})();
if(cljs.core.truth_(inst_11193)){
var statearr_11217_13063 = state_11211__$1;
(statearr_11217_13063[(1)] = (5));

} else {
var statearr_11218_13064 = state_11211__$1;
(statearr_11218_13064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (6))){
var inst_11192 = (state_11211[(7)]);
var inst_11197 = (state_11211[(8)]);
var inst_11197__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11199 = [inst_11192,inst_11197__$1];
var inst_11200 = (new cljs.core.PersistentVector(null,2,(5),inst_11198,inst_11199,null));
var state_11211__$1 = (function (){var statearr_11219 = state_11211;
(statearr_11219[(8)] = inst_11197__$1);

return statearr_11219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11211__$1,(8),jobs,inst_11200);
} else {
if((state_val_11212 === (3))){
var inst_11209 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11211__$1,inst_11209);
} else {
if((state_val_11212 === (2))){
var state_11211__$1 = state_11211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11211__$1,(4),from);
} else {
if((state_val_11212 === (9))){
var inst_11204 = (state_11211[(2)]);
var state_11211__$1 = (function (){var statearr_11220 = state_11211;
(statearr_11220[(9)] = inst_11204);

return statearr_11220;
})();
var statearr_11221_13065 = state_11211__$1;
(statearr_11221_13065[(2)] = null);

(statearr_11221_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (5))){
var inst_11195 = cljs.core.async.close_BANG_(jobs);
var state_11211__$1 = state_11211;
var statearr_11222_13066 = state_11211__$1;
(statearr_11222_13066[(2)] = inst_11195);

(statearr_11222_13066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (8))){
var inst_11197 = (state_11211[(8)]);
var inst_11202 = (state_11211[(2)]);
var state_11211__$1 = (function (){var statearr_11223 = state_11211;
(statearr_11223[(10)] = inst_11202);

return statearr_11223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11211__$1,(9),results,inst_11197);
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
var statearr_11224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11224[(1)] = (1));

return statearr_11224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11211){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11211);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11225){var ex__10883__auto__ = e11225;
var statearr_11226_13067 = state_11211;
(statearr_11226_13067[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11211[(4)]))){
var statearr_11227_13068 = state_11211;
(statearr_11227_13068[(1)] = cljs.core.first((state_11211[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11211;
state_11211 = G__13069;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11228 = f__10940__auto__();
(statearr_11228[(6)] = c__10939__auto___13060);

return statearr_11228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));


var c__10939__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11276){
var state_val_11277 = (state_11276[(1)]);
if((state_val_11277 === (7))){
var inst_11272 = (state_11276[(2)]);
var state_11276__$1 = state_11276;
var statearr_11278_13070 = state_11276__$1;
(statearr_11278_13070[(2)] = inst_11272);

(statearr_11278_13070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (20))){
var state_11276__$1 = state_11276;
var statearr_11279_13071 = state_11276__$1;
(statearr_11279_13071[(2)] = null);

(statearr_11279_13071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (1))){
var state_11276__$1 = state_11276;
var statearr_11280_13072 = state_11276__$1;
(statearr_11280_13072[(2)] = null);

(statearr_11280_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (4))){
var inst_11231 = (state_11276[(7)]);
var inst_11231__$1 = (state_11276[(2)]);
var inst_11232 = (inst_11231__$1 == null);
var state_11276__$1 = (function (){var statearr_11281 = state_11276;
(statearr_11281[(7)] = inst_11231__$1);

return statearr_11281;
})();
if(cljs.core.truth_(inst_11232)){
var statearr_11282_13073 = state_11276__$1;
(statearr_11282_13073[(1)] = (5));

} else {
var statearr_11283_13074 = state_11276__$1;
(statearr_11283_13074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (15))){
var inst_11254 = (state_11276[(8)]);
var state_11276__$1 = state_11276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11276__$1,(18),to,inst_11254);
} else {
if((state_val_11277 === (21))){
var inst_11267 = (state_11276[(2)]);
var state_11276__$1 = state_11276;
var statearr_11284_13075 = state_11276__$1;
(statearr_11284_13075[(2)] = inst_11267);

(statearr_11284_13075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (13))){
var inst_11269 = (state_11276[(2)]);
var state_11276__$1 = (function (){var statearr_11285 = state_11276;
(statearr_11285[(9)] = inst_11269);

return statearr_11285;
})();
var statearr_11286_13076 = state_11276__$1;
(statearr_11286_13076[(2)] = null);

(statearr_11286_13076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (6))){
var inst_11231 = (state_11276[(7)]);
var state_11276__$1 = state_11276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11276__$1,(11),inst_11231);
} else {
if((state_val_11277 === (17))){
var inst_11262 = (state_11276[(2)]);
var state_11276__$1 = state_11276;
if(cljs.core.truth_(inst_11262)){
var statearr_11287_13077 = state_11276__$1;
(statearr_11287_13077[(1)] = (19));

} else {
var statearr_11288_13078 = state_11276__$1;
(statearr_11288_13078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (3))){
var inst_11274 = (state_11276[(2)]);
var state_11276__$1 = state_11276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11276__$1,inst_11274);
} else {
if((state_val_11277 === (12))){
var inst_11251 = (state_11276[(10)]);
var state_11276__$1 = state_11276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11276__$1,(14),inst_11251);
} else {
if((state_val_11277 === (2))){
var state_11276__$1 = state_11276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11276__$1,(4),results);
} else {
if((state_val_11277 === (19))){
var state_11276__$1 = state_11276;
var statearr_11290_13079 = state_11276__$1;
(statearr_11290_13079[(2)] = null);

(statearr_11290_13079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (11))){
var inst_11251 = (state_11276[(2)]);
var state_11276__$1 = (function (){var statearr_11291 = state_11276;
(statearr_11291[(10)] = inst_11251);

return statearr_11291;
})();
var statearr_11292_13080 = state_11276__$1;
(statearr_11292_13080[(2)] = null);

(statearr_11292_13080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (9))){
var state_11276__$1 = state_11276;
var statearr_11293_13082 = state_11276__$1;
(statearr_11293_13082[(2)] = null);

(statearr_11293_13082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (5))){
var state_11276__$1 = state_11276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11294_13083 = state_11276__$1;
(statearr_11294_13083[(1)] = (8));

} else {
var statearr_11295_13084 = state_11276__$1;
(statearr_11295_13084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (14))){
var inst_11254 = (state_11276[(8)]);
var inst_11254__$1 = (state_11276[(2)]);
var inst_11255 = (inst_11254__$1 == null);
var inst_11256 = cljs.core.not(inst_11255);
var state_11276__$1 = (function (){var statearr_11296 = state_11276;
(statearr_11296[(8)] = inst_11254__$1);

return statearr_11296;
})();
if(inst_11256){
var statearr_11297_13085 = state_11276__$1;
(statearr_11297_13085[(1)] = (15));

} else {
var statearr_11298_13086 = state_11276__$1;
(statearr_11298_13086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (16))){
var state_11276__$1 = state_11276;
var statearr_11299_13087 = state_11276__$1;
(statearr_11299_13087[(2)] = false);

(statearr_11299_13087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (10))){
var inst_11238 = (state_11276[(2)]);
var state_11276__$1 = state_11276;
var statearr_11300_13088 = state_11276__$1;
(statearr_11300_13088[(2)] = inst_11238);

(statearr_11300_13088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (18))){
var inst_11259 = (state_11276[(2)]);
var state_11276__$1 = state_11276;
var statearr_11301_13089 = state_11276__$1;
(statearr_11301_13089[(2)] = inst_11259);

(statearr_11301_13089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11277 === (8))){
var inst_11235 = cljs.core.async.close_BANG_(to);
var state_11276__$1 = state_11276;
var statearr_11302_13090 = state_11276__$1;
(statearr_11302_13090[(2)] = inst_11235);

(statearr_11302_13090[(1)] = (10));


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
var statearr_11303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11303[(1)] = (1));

return statearr_11303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11276){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11276);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11304){var ex__10883__auto__ = e11304;
var statearr_11305_13091 = state_11276;
(statearr_11305_13091[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11276[(4)]))){
var statearr_11306_13092 = state_11276;
(statearr_11306_13092[(1)] = cljs.core.first((state_11276[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13093 = state_11276;
state_11276 = G__13093;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11307 = f__10940__auto__();
(statearr_11307[(6)] = c__10939__auto__);

return statearr_11307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));

return c__10939__auto__;
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
var G__11309 = arguments.length;
switch (G__11309) {
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
var c__10939__auto___13101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11341){
var state_val_11342 = (state_11341[(1)]);
if((state_val_11342 === (7))){
var inst_11337 = (state_11341[(2)]);
var state_11341__$1 = state_11341;
var statearr_11343_13105 = state_11341__$1;
(statearr_11343_13105[(2)] = inst_11337);

(statearr_11343_13105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (1))){
var state_11341__$1 = state_11341;
var statearr_11344_13106 = state_11341__$1;
(statearr_11344_13106[(2)] = null);

(statearr_11344_13106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (4))){
var inst_11318 = (state_11341[(7)]);
var inst_11318__$1 = (state_11341[(2)]);
var inst_11319 = (inst_11318__$1 == null);
var state_11341__$1 = (function (){var statearr_11345 = state_11341;
(statearr_11345[(7)] = inst_11318__$1);

return statearr_11345;
})();
if(cljs.core.truth_(inst_11319)){
var statearr_11346_13123 = state_11341__$1;
(statearr_11346_13123[(1)] = (5));

} else {
var statearr_11347_13124 = state_11341__$1;
(statearr_11347_13124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (13))){
var state_11341__$1 = state_11341;
var statearr_11348_13125 = state_11341__$1;
(statearr_11348_13125[(2)] = null);

(statearr_11348_13125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (6))){
var inst_11318 = (state_11341[(7)]);
var inst_11324 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11318) : p.call(null,inst_11318));
var state_11341__$1 = state_11341;
if(cljs.core.truth_(inst_11324)){
var statearr_11349_13126 = state_11341__$1;
(statearr_11349_13126[(1)] = (9));

} else {
var statearr_11350_13127 = state_11341__$1;
(statearr_11350_13127[(1)] = (10));

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
var statearr_11366_13132 = state_11341__$1;
(statearr_11366_13132[(2)] = null);

(statearr_11366_13132[(1)] = (2));


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
var statearr_11367_13133 = state_11341__$1;
(statearr_11367_13133[(2)] = tc);

(statearr_11367_13133[(1)] = (11));


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
var statearr_11370_13135 = state_11341__$1;
(statearr_11370_13135[(2)] = inst_11335);

(statearr_11370_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (10))){
var state_11341__$1 = state_11341;
var statearr_11371_13136 = state_11341__$1;
(statearr_11371_13136[(2)] = fc);

(statearr_11371_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11342 === (8))){
var inst_11330 = (state_11341[(2)]);
var state_11341__$1 = state_11341;
if(cljs.core.truth_(inst_11330)){
var statearr_11372_13137 = state_11341__$1;
(statearr_11372_13137[(1)] = (12));

} else {
var statearr_11380_13138 = state_11341__$1;
(statearr_11380_13138[(1)] = (13));

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
var statearr_11381 = [null,null,null,null,null,null,null,null,null];
(statearr_11381[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11381[(1)] = (1));

return statearr_11381;
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
}catch (e11382){var ex__10883__auto__ = e11382;
var statearr_11383_13139 = state_11341;
(statearr_11383_13139[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11341[(4)]))){
var statearr_11384_13140 = state_11341;
(statearr_11384_13140[(1)] = cljs.core.first((state_11341[(4)])));

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
var state__10941__auto__ = (function (){var statearr_11385 = f__10940__auto__();
(statearr_11385[(6)] = c__10939__auto___13101);

return statearr_11385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
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
var c__10939__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11424){
var state_val_11425 = (state_11424[(1)]);
if((state_val_11425 === (7))){
var inst_11420 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11426_13142 = state_11424__$1;
(statearr_11426_13142[(2)] = inst_11420);

(statearr_11426_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (1))){
var inst_11386 = init;
var inst_11387 = inst_11386;
var state_11424__$1 = (function (){var statearr_11427 = state_11424;
(statearr_11427[(7)] = inst_11387);

return statearr_11427;
})();
var statearr_11428_13143 = state_11424__$1;
(statearr_11428_13143[(2)] = null);

(statearr_11428_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (4))){
var inst_11390 = (state_11424[(8)]);
var inst_11390__$1 = (state_11424[(2)]);
var inst_11391 = (inst_11390__$1 == null);
var state_11424__$1 = (function (){var statearr_11429 = state_11424;
(statearr_11429[(8)] = inst_11390__$1);

return statearr_11429;
})();
if(cljs.core.truth_(inst_11391)){
var statearr_11430_13144 = state_11424__$1;
(statearr_11430_13144[(1)] = (5));

} else {
var statearr_11431_13145 = state_11424__$1;
(statearr_11431_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (6))){
var inst_11390 = (state_11424[(8)]);
var inst_11394 = (state_11424[(9)]);
var inst_11387 = (state_11424[(7)]);
var inst_11394__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11387,inst_11390) : f.call(null,inst_11387,inst_11390));
var inst_11395 = cljs.core.reduced_QMARK_(inst_11394__$1);
var state_11424__$1 = (function (){var statearr_11432 = state_11424;
(statearr_11432[(9)] = inst_11394__$1);

return statearr_11432;
})();
if(inst_11395){
var statearr_11433_13146 = state_11424__$1;
(statearr_11433_13146[(1)] = (8));

} else {
var statearr_11434_13147 = state_11424__$1;
(statearr_11434_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (3))){
var inst_11422 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11424__$1,inst_11422);
} else {
if((state_val_11425 === (2))){
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11424__$1,(4),ch);
} else {
if((state_val_11425 === (9))){
var inst_11394 = (state_11424[(9)]);
var inst_11387 = inst_11394;
var state_11424__$1 = (function (){var statearr_11435 = state_11424;
(statearr_11435[(7)] = inst_11387);

return statearr_11435;
})();
var statearr_11436_13148 = state_11424__$1;
(statearr_11436_13148[(2)] = null);

(statearr_11436_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (5))){
var inst_11387 = (state_11424[(7)]);
var state_11424__$1 = state_11424;
var statearr_11437_13149 = state_11424__$1;
(statearr_11437_13149[(2)] = inst_11387);

(statearr_11437_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (10))){
var inst_11418 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11438_13150 = state_11424__$1;
(statearr_11438_13150[(2)] = inst_11418);

(statearr_11438_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (8))){
var inst_11394 = (state_11424[(9)]);
var inst_11414 = cljs.core.deref(inst_11394);
var state_11424__$1 = state_11424;
var statearr_11439_13151 = state_11424__$1;
(statearr_11439_13151[(2)] = inst_11414);

(statearr_11439_13151[(1)] = (10));


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
var statearr_11440 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11440[(0)] = cljs$core$async$reduce_$_state_machine__10880__auto__);

(statearr_11440[(1)] = (1));

return statearr_11440;
});
var cljs$core$async$reduce_$_state_machine__10880__auto____1 = (function (state_11424){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11424);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11441){var ex__10883__auto__ = e11441;
var statearr_11442_13152 = state_11424;
(statearr_11442_13152[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11424[(4)]))){
var statearr_11443_13153 = state_11424;
(statearr_11443_13153[(1)] = cljs.core.first((state_11424[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11424;
state_11424 = G__13154;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10880__auto__ = function(state_11424){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10880__auto____1.call(this,state_11424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10880__auto____0;
cljs$core$async$reduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10880__auto____1;
return cljs$core$async$reduce_$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11444 = f__10940__auto__();
(statearr_11444[(6)] = c__10939__auto__);

return statearr_11444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));

return c__10939__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10939__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11450){
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
var cljs$core$async$transduce_$_state_machine__10880__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10880__auto____0 = (function (){
var statearr_11452 = [null,null,null,null,null,null,null];
(statearr_11452[(0)] = cljs$core$async$transduce_$_state_machine__10880__auto__);

(statearr_11452[(1)] = (1));

return statearr_11452;
});
var cljs$core$async$transduce_$_state_machine__10880__auto____1 = (function (state_11450){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11450);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11453){var ex__10883__auto__ = e11453;
var statearr_11454_13155 = state_11450;
(statearr_11454_13155[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11450[(4)]))){
var statearr_11455_13156 = state_11450;
(statearr_11455_13156[(1)] = cljs.core.first((state_11450[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11450;
state_11450 = G__13157;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10880__auto__ = function(state_11450){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10880__auto____1.call(this,state_11450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10880__auto____0;
cljs$core$async$transduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10880__auto____1;
return cljs$core$async$transduce_$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11456 = f__10940__auto__();
(statearr_11456[(6)] = c__10939__auto__);

return statearr_11456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));

return c__10939__auto__;
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
var G__11460 = arguments.length;
switch (G__11460) {
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
var c__10939__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11485){
var state_val_11486 = (state_11485[(1)]);
if((state_val_11486 === (7))){
var inst_11467 = (state_11485[(2)]);
var state_11485__$1 = state_11485;
var statearr_11489_13159 = state_11485__$1;
(statearr_11489_13159[(2)] = inst_11467);

(statearr_11489_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (1))){
var inst_11461 = cljs.core.seq(coll);
var inst_11462 = inst_11461;
var state_11485__$1 = (function (){var statearr_11490 = state_11485;
(statearr_11490[(7)] = inst_11462);

return statearr_11490;
})();
var statearr_11491_13160 = state_11485__$1;
(statearr_11491_13160[(2)] = null);

(statearr_11491_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (4))){
var inst_11462 = (state_11485[(7)]);
var inst_11465 = cljs.core.first(inst_11462);
var state_11485__$1 = state_11485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11485__$1,(7),ch,inst_11465);
} else {
if((state_val_11486 === (13))){
var inst_11479 = (state_11485[(2)]);
var state_11485__$1 = state_11485;
var statearr_11492_13161 = state_11485__$1;
(statearr_11492_13161[(2)] = inst_11479);

(statearr_11492_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (6))){
var inst_11470 = (state_11485[(2)]);
var state_11485__$1 = state_11485;
if(cljs.core.truth_(inst_11470)){
var statearr_11493_13162 = state_11485__$1;
(statearr_11493_13162[(1)] = (8));

} else {
var statearr_11494_13163 = state_11485__$1;
(statearr_11494_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (3))){
var inst_11483 = (state_11485[(2)]);
var state_11485__$1 = state_11485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11485__$1,inst_11483);
} else {
if((state_val_11486 === (12))){
var state_11485__$1 = state_11485;
var statearr_11497_13164 = state_11485__$1;
(statearr_11497_13164[(2)] = null);

(statearr_11497_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (2))){
var inst_11462 = (state_11485[(7)]);
var state_11485__$1 = state_11485;
if(cljs.core.truth_(inst_11462)){
var statearr_11498_13165 = state_11485__$1;
(statearr_11498_13165[(1)] = (4));

} else {
var statearr_11499_13166 = state_11485__$1;
(statearr_11499_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (11))){
var inst_11476 = cljs.core.async.close_BANG_(ch);
var state_11485__$1 = state_11485;
var statearr_11500_13167 = state_11485__$1;
(statearr_11500_13167[(2)] = inst_11476);

(statearr_11500_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (9))){
var state_11485__$1 = state_11485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11501_13168 = state_11485__$1;
(statearr_11501_13168[(1)] = (11));

} else {
var statearr_11502_13169 = state_11485__$1;
(statearr_11502_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (5))){
var inst_11462 = (state_11485[(7)]);
var state_11485__$1 = state_11485;
var statearr_11504_13170 = state_11485__$1;
(statearr_11504_13170[(2)] = inst_11462);

(statearr_11504_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (10))){
var inst_11481 = (state_11485[(2)]);
var state_11485__$1 = state_11485;
var statearr_11505_13171 = state_11485__$1;
(statearr_11505_13171[(2)] = inst_11481);

(statearr_11505_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11486 === (8))){
var inst_11462 = (state_11485[(7)]);
var inst_11472 = cljs.core.next(inst_11462);
var inst_11462__$1 = inst_11472;
var state_11485__$1 = (function (){var statearr_11506 = state_11485;
(statearr_11506[(7)] = inst_11462__$1);

return statearr_11506;
})();
var statearr_11507_13172 = state_11485__$1;
(statearr_11507_13172[(2)] = null);

(statearr_11507_13172[(1)] = (2));


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
var statearr_11508 = [null,null,null,null,null,null,null,null];
(statearr_11508[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11508[(1)] = (1));

return statearr_11508;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11485){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11485);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11509){var ex__10883__auto__ = e11509;
var statearr_11510_13173 = state_11485;
(statearr_11510_13173[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11485[(4)]))){
var statearr_11511_13174 = state_11485;
(statearr_11511_13174[(1)] = cljs.core.first((state_11485[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11485;
state_11485 = G__13175;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11512 = f__10940__auto__();
(statearr_11512[(6)] = c__10939__auto__);

return statearr_11512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));

return c__10939__auto__;
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
var G__11514 = arguments.length;
switch (G__11514) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11518 = (function (ch,cs,meta11519){
this.ch = ch;
this.cs = cs;
this.meta11519 = meta11519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11520,meta11519__$1){
var self__ = this;
var _11520__$1 = this;
return (new cljs.core.async.t_cljs$core$async11518(self__.ch,self__.cs,meta11519__$1));
}));

(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11520){
var self__ = this;
var _11520__$1 = this;
return self__.meta11519;
}));

(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11518.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11519","meta11519",1321797670,null)], null);
}));

(cljs.core.async.t_cljs$core$async11518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11518");

(cljs.core.async.t_cljs$core$async11518.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11518.
 */
cljs.core.async.__GT_t_cljs$core$async11518 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11518(ch__$1,cs__$1,meta11519){
return (new cljs.core.async.t_cljs$core$async11518(ch__$1,cs__$1,meta11519));
});

}

return (new cljs.core.async.t_cljs$core$async11518(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10939__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11659){
var state_val_11660 = (state_11659[(1)]);
if((state_val_11660 === (7))){
var inst_11655 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11661_13182 = state_11659__$1;
(statearr_11661_13182[(2)] = inst_11655);

(statearr_11661_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (20))){
var inst_11554 = (state_11659[(7)]);
var inst_11572 = cljs.core.first(inst_11554);
var inst_11573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11572,(0),null);
var inst_11574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11572,(1),null);
var state_11659__$1 = (function (){var statearr_11662 = state_11659;
(statearr_11662[(8)] = inst_11573);

return statearr_11662;
})();
if(cljs.core.truth_(inst_11574)){
var statearr_11663_13183 = state_11659__$1;
(statearr_11663_13183[(1)] = (22));

} else {
var statearr_11664_13184 = state_11659__$1;
(statearr_11664_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (27))){
var inst_11604 = (state_11659[(9)]);
var inst_11609 = (state_11659[(10)]);
var inst_11602 = (state_11659[(11)]);
var inst_11523 = (state_11659[(12)]);
var inst_11609__$1 = cljs.core._nth(inst_11602,inst_11604);
var inst_11610 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11609__$1,inst_11523,done);
var state_11659__$1 = (function (){var statearr_11665 = state_11659;
(statearr_11665[(10)] = inst_11609__$1);

return statearr_11665;
})();
if(cljs.core.truth_(inst_11610)){
var statearr_11666_13185 = state_11659__$1;
(statearr_11666_13185[(1)] = (30));

} else {
var statearr_11667_13186 = state_11659__$1;
(statearr_11667_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (1))){
var state_11659__$1 = state_11659;
var statearr_11668_13187 = state_11659__$1;
(statearr_11668_13187[(2)] = null);

(statearr_11668_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (24))){
var inst_11554 = (state_11659[(7)]);
var inst_11579 = (state_11659[(2)]);
var inst_11580 = cljs.core.next(inst_11554);
var inst_11532 = inst_11580;
var inst_11533 = null;
var inst_11534 = (0);
var inst_11535 = (0);
var state_11659__$1 = (function (){var statearr_11669 = state_11659;
(statearr_11669[(13)] = inst_11579);

(statearr_11669[(14)] = inst_11535);

(statearr_11669[(15)] = inst_11532);

(statearr_11669[(16)] = inst_11533);

(statearr_11669[(17)] = inst_11534);

return statearr_11669;
})();
var statearr_11670_13188 = state_11659__$1;
(statearr_11670_13188[(2)] = null);

(statearr_11670_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (39))){
var state_11659__$1 = state_11659;
var statearr_11674_13189 = state_11659__$1;
(statearr_11674_13189[(2)] = null);

(statearr_11674_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (4))){
var inst_11523 = (state_11659[(12)]);
var inst_11523__$1 = (state_11659[(2)]);
var inst_11524 = (inst_11523__$1 == null);
var state_11659__$1 = (function (){var statearr_11675 = state_11659;
(statearr_11675[(12)] = inst_11523__$1);

return statearr_11675;
})();
if(cljs.core.truth_(inst_11524)){
var statearr_11676_13190 = state_11659__$1;
(statearr_11676_13190[(1)] = (5));

} else {
var statearr_11677_13191 = state_11659__$1;
(statearr_11677_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (15))){
var inst_11535 = (state_11659[(14)]);
var inst_11532 = (state_11659[(15)]);
var inst_11533 = (state_11659[(16)]);
var inst_11534 = (state_11659[(17)]);
var inst_11550 = (state_11659[(2)]);
var inst_11551 = (inst_11535 + (1));
var tmp11671 = inst_11532;
var tmp11672 = inst_11533;
var tmp11673 = inst_11534;
var inst_11532__$1 = tmp11671;
var inst_11533__$1 = tmp11672;
var inst_11534__$1 = tmp11673;
var inst_11535__$1 = inst_11551;
var state_11659__$1 = (function (){var statearr_11678 = state_11659;
(statearr_11678[(14)] = inst_11535__$1);

(statearr_11678[(15)] = inst_11532__$1);

(statearr_11678[(16)] = inst_11533__$1);

(statearr_11678[(18)] = inst_11550);

(statearr_11678[(17)] = inst_11534__$1);

return statearr_11678;
})();
var statearr_11679_13192 = state_11659__$1;
(statearr_11679_13192[(2)] = null);

(statearr_11679_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (21))){
var inst_11583 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11683_13193 = state_11659__$1;
(statearr_11683_13193[(2)] = inst_11583);

(statearr_11683_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (31))){
var inst_11609 = (state_11659[(10)]);
var inst_11613 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11609);
var state_11659__$1 = state_11659;
var statearr_11684_13194 = state_11659__$1;
(statearr_11684_13194[(2)] = inst_11613);

(statearr_11684_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (32))){
var inst_11601 = (state_11659[(19)]);
var inst_11604 = (state_11659[(9)]);
var inst_11602 = (state_11659[(11)]);
var inst_11603 = (state_11659[(20)]);
var inst_11615 = (state_11659[(2)]);
var inst_11616 = (inst_11604 + (1));
var tmp11680 = inst_11601;
var tmp11681 = inst_11602;
var tmp11682 = inst_11603;
var inst_11601__$1 = tmp11680;
var inst_11602__$1 = tmp11681;
var inst_11603__$1 = tmp11682;
var inst_11604__$1 = inst_11616;
var state_11659__$1 = (function (){var statearr_11685 = state_11659;
(statearr_11685[(19)] = inst_11601__$1);

(statearr_11685[(9)] = inst_11604__$1);

(statearr_11685[(21)] = inst_11615);

(statearr_11685[(11)] = inst_11602__$1);

(statearr_11685[(20)] = inst_11603__$1);

return statearr_11685;
})();
var statearr_11686_13195 = state_11659__$1;
(statearr_11686_13195[(2)] = null);

(statearr_11686_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (40))){
var inst_11628 = (state_11659[(22)]);
var inst_11632 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11628);
var state_11659__$1 = state_11659;
var statearr_11687_13196 = state_11659__$1;
(statearr_11687_13196[(2)] = inst_11632);

(statearr_11687_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (33))){
var inst_11619 = (state_11659[(23)]);
var inst_11621 = cljs.core.chunked_seq_QMARK_(inst_11619);
var state_11659__$1 = state_11659;
if(inst_11621){
var statearr_11688_13197 = state_11659__$1;
(statearr_11688_13197[(1)] = (36));

} else {
var statearr_11689_13198 = state_11659__$1;
(statearr_11689_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (13))){
var inst_11544 = (state_11659[(24)]);
var inst_11547 = cljs.core.async.close_BANG_(inst_11544);
var state_11659__$1 = state_11659;
var statearr_11690_13199 = state_11659__$1;
(statearr_11690_13199[(2)] = inst_11547);

(statearr_11690_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (22))){
var inst_11573 = (state_11659[(8)]);
var inst_11576 = cljs.core.async.close_BANG_(inst_11573);
var state_11659__$1 = state_11659;
var statearr_11691_13200 = state_11659__$1;
(statearr_11691_13200[(2)] = inst_11576);

(statearr_11691_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (36))){
var inst_11619 = (state_11659[(23)]);
var inst_11623 = cljs.core.chunk_first(inst_11619);
var inst_11624 = cljs.core.chunk_rest(inst_11619);
var inst_11625 = cljs.core.count(inst_11623);
var inst_11601 = inst_11624;
var inst_11602 = inst_11623;
var inst_11603 = inst_11625;
var inst_11604 = (0);
var state_11659__$1 = (function (){var statearr_11696 = state_11659;
(statearr_11696[(19)] = inst_11601);

(statearr_11696[(9)] = inst_11604);

(statearr_11696[(11)] = inst_11602);

(statearr_11696[(20)] = inst_11603);

return statearr_11696;
})();
var statearr_11697_13201 = state_11659__$1;
(statearr_11697_13201[(2)] = null);

(statearr_11697_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (41))){
var inst_11619 = (state_11659[(23)]);
var inst_11634 = (state_11659[(2)]);
var inst_11635 = cljs.core.next(inst_11619);
var inst_11601 = inst_11635;
var inst_11602 = null;
var inst_11603 = (0);
var inst_11604 = (0);
var state_11659__$1 = (function (){var statearr_11700 = state_11659;
(statearr_11700[(19)] = inst_11601);

(statearr_11700[(9)] = inst_11604);

(statearr_11700[(11)] = inst_11602);

(statearr_11700[(25)] = inst_11634);

(statearr_11700[(20)] = inst_11603);

return statearr_11700;
})();
var statearr_11701_13202 = state_11659__$1;
(statearr_11701_13202[(2)] = null);

(statearr_11701_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (43))){
var state_11659__$1 = state_11659;
var statearr_11702_13203 = state_11659__$1;
(statearr_11702_13203[(2)] = null);

(statearr_11702_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (29))){
var inst_11643 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11703_13204 = state_11659__$1;
(statearr_11703_13204[(2)] = inst_11643);

(statearr_11703_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (44))){
var inst_11652 = (state_11659[(2)]);
var state_11659__$1 = (function (){var statearr_11704 = state_11659;
(statearr_11704[(26)] = inst_11652);

return statearr_11704;
})();
var statearr_11705_13205 = state_11659__$1;
(statearr_11705_13205[(2)] = null);

(statearr_11705_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (6))){
var inst_11593 = (state_11659[(27)]);
var inst_11592 = cljs.core.deref(cs);
var inst_11593__$1 = cljs.core.keys(inst_11592);
var inst_11594 = cljs.core.count(inst_11593__$1);
var inst_11595 = cljs.core.reset_BANG_(dctr,inst_11594);
var inst_11600 = cljs.core.seq(inst_11593__$1);
var inst_11601 = inst_11600;
var inst_11602 = null;
var inst_11603 = (0);
var inst_11604 = (0);
var state_11659__$1 = (function (){var statearr_11706 = state_11659;
(statearr_11706[(19)] = inst_11601);

(statearr_11706[(27)] = inst_11593__$1);

(statearr_11706[(9)] = inst_11604);

(statearr_11706[(11)] = inst_11602);

(statearr_11706[(28)] = inst_11595);

(statearr_11706[(20)] = inst_11603);

return statearr_11706;
})();
var statearr_11707_13206 = state_11659__$1;
(statearr_11707_13206[(2)] = null);

(statearr_11707_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (28))){
var inst_11601 = (state_11659[(19)]);
var inst_11619 = (state_11659[(23)]);
var inst_11619__$1 = cljs.core.seq(inst_11601);
var state_11659__$1 = (function (){var statearr_11708 = state_11659;
(statearr_11708[(23)] = inst_11619__$1);

return statearr_11708;
})();
if(inst_11619__$1){
var statearr_11709_13207 = state_11659__$1;
(statearr_11709_13207[(1)] = (33));

} else {
var statearr_11710_13208 = state_11659__$1;
(statearr_11710_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (25))){
var inst_11604 = (state_11659[(9)]);
var inst_11603 = (state_11659[(20)]);
var inst_11606 = (inst_11604 < inst_11603);
var inst_11607 = inst_11606;
var state_11659__$1 = state_11659;
if(cljs.core.truth_(inst_11607)){
var statearr_11711_13209 = state_11659__$1;
(statearr_11711_13209[(1)] = (27));

} else {
var statearr_11712_13210 = state_11659__$1;
(statearr_11712_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (34))){
var state_11659__$1 = state_11659;
var statearr_11713_13211 = state_11659__$1;
(statearr_11713_13211[(2)] = null);

(statearr_11713_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (17))){
var state_11659__$1 = state_11659;
var statearr_11714_13212 = state_11659__$1;
(statearr_11714_13212[(2)] = null);

(statearr_11714_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (3))){
var inst_11657 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11659__$1,inst_11657);
} else {
if((state_val_11660 === (12))){
var inst_11588 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11715_13213 = state_11659__$1;
(statearr_11715_13213[(2)] = inst_11588);

(statearr_11715_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (2))){
var state_11659__$1 = state_11659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11659__$1,(4),ch);
} else {
if((state_val_11660 === (23))){
var state_11659__$1 = state_11659;
var statearr_11716_13214 = state_11659__$1;
(statearr_11716_13214[(2)] = null);

(statearr_11716_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (35))){
var inst_11641 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11717_13215 = state_11659__$1;
(statearr_11717_13215[(2)] = inst_11641);

(statearr_11717_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (19))){
var inst_11554 = (state_11659[(7)]);
var inst_11564 = cljs.core.chunk_first(inst_11554);
var inst_11565 = cljs.core.chunk_rest(inst_11554);
var inst_11566 = cljs.core.count(inst_11564);
var inst_11532 = inst_11565;
var inst_11533 = inst_11564;
var inst_11534 = inst_11566;
var inst_11535 = (0);
var state_11659__$1 = (function (){var statearr_11718 = state_11659;
(statearr_11718[(14)] = inst_11535);

(statearr_11718[(15)] = inst_11532);

(statearr_11718[(16)] = inst_11533);

(statearr_11718[(17)] = inst_11534);

return statearr_11718;
})();
var statearr_11719_13216 = state_11659__$1;
(statearr_11719_13216[(2)] = null);

(statearr_11719_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (11))){
var inst_11532 = (state_11659[(15)]);
var inst_11554 = (state_11659[(7)]);
var inst_11554__$1 = cljs.core.seq(inst_11532);
var state_11659__$1 = (function (){var statearr_11720 = state_11659;
(statearr_11720[(7)] = inst_11554__$1);

return statearr_11720;
})();
if(inst_11554__$1){
var statearr_11721_13217 = state_11659__$1;
(statearr_11721_13217[(1)] = (16));

} else {
var statearr_11722_13218 = state_11659__$1;
(statearr_11722_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (9))){
var inst_11590 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11723_13219 = state_11659__$1;
(statearr_11723_13219[(2)] = inst_11590);

(statearr_11723_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (5))){
var inst_11530 = cljs.core.deref(cs);
var inst_11531 = cljs.core.seq(inst_11530);
var inst_11532 = inst_11531;
var inst_11533 = null;
var inst_11534 = (0);
var inst_11535 = (0);
var state_11659__$1 = (function (){var statearr_11724 = state_11659;
(statearr_11724[(14)] = inst_11535);

(statearr_11724[(15)] = inst_11532);

(statearr_11724[(16)] = inst_11533);

(statearr_11724[(17)] = inst_11534);

return statearr_11724;
})();
var statearr_11725_13220 = state_11659__$1;
(statearr_11725_13220[(2)] = null);

(statearr_11725_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (14))){
var state_11659__$1 = state_11659;
var statearr_11726_13221 = state_11659__$1;
(statearr_11726_13221[(2)] = null);

(statearr_11726_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (45))){
var inst_11649 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11727_13222 = state_11659__$1;
(statearr_11727_13222[(2)] = inst_11649);

(statearr_11727_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (26))){
var inst_11593 = (state_11659[(27)]);
var inst_11645 = (state_11659[(2)]);
var inst_11646 = cljs.core.seq(inst_11593);
var state_11659__$1 = (function (){var statearr_11728 = state_11659;
(statearr_11728[(29)] = inst_11645);

return statearr_11728;
})();
if(inst_11646){
var statearr_11729_13223 = state_11659__$1;
(statearr_11729_13223[(1)] = (42));

} else {
var statearr_11730_13224 = state_11659__$1;
(statearr_11730_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (16))){
var inst_11554 = (state_11659[(7)]);
var inst_11562 = cljs.core.chunked_seq_QMARK_(inst_11554);
var state_11659__$1 = state_11659;
if(inst_11562){
var statearr_11731_13225 = state_11659__$1;
(statearr_11731_13225[(1)] = (19));

} else {
var statearr_11732_13226 = state_11659__$1;
(statearr_11732_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (38))){
var inst_11638 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11733_13227 = state_11659__$1;
(statearr_11733_13227[(2)] = inst_11638);

(statearr_11733_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (30))){
var state_11659__$1 = state_11659;
var statearr_11734_13228 = state_11659__$1;
(statearr_11734_13228[(2)] = null);

(statearr_11734_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (10))){
var inst_11535 = (state_11659[(14)]);
var inst_11533 = (state_11659[(16)]);
var inst_11543 = cljs.core._nth(inst_11533,inst_11535);
var inst_11544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11543,(0),null);
var inst_11545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11543,(1),null);
var state_11659__$1 = (function (){var statearr_11735 = state_11659;
(statearr_11735[(24)] = inst_11544);

return statearr_11735;
})();
if(cljs.core.truth_(inst_11545)){
var statearr_11736_13229 = state_11659__$1;
(statearr_11736_13229[(1)] = (13));

} else {
var statearr_11737_13230 = state_11659__$1;
(statearr_11737_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (18))){
var inst_11586 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11738_13231 = state_11659__$1;
(statearr_11738_13231[(2)] = inst_11586);

(statearr_11738_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (42))){
var state_11659__$1 = state_11659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11659__$1,(45),dchan);
} else {
if((state_val_11660 === (37))){
var inst_11628 = (state_11659[(22)]);
var inst_11619 = (state_11659[(23)]);
var inst_11523 = (state_11659[(12)]);
var inst_11628__$1 = cljs.core.first(inst_11619);
var inst_11629 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11628__$1,inst_11523,done);
var state_11659__$1 = (function (){var statearr_11739 = state_11659;
(statearr_11739[(22)] = inst_11628__$1);

return statearr_11739;
})();
if(cljs.core.truth_(inst_11629)){
var statearr_11740_13232 = state_11659__$1;
(statearr_11740_13232[(1)] = (39));

} else {
var statearr_11741_13233 = state_11659__$1;
(statearr_11741_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (8))){
var inst_11535 = (state_11659[(14)]);
var inst_11534 = (state_11659[(17)]);
var inst_11537 = (inst_11535 < inst_11534);
var inst_11538 = inst_11537;
var state_11659__$1 = state_11659;
if(cljs.core.truth_(inst_11538)){
var statearr_11742_13234 = state_11659__$1;
(statearr_11742_13234[(1)] = (10));

} else {
var statearr_11743_13235 = state_11659__$1;
(statearr_11743_13235[(1)] = (11));

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
var statearr_11744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11744[(0)] = cljs$core$async$mult_$_state_machine__10880__auto__);

(statearr_11744[(1)] = (1));

return statearr_11744;
});
var cljs$core$async$mult_$_state_machine__10880__auto____1 = (function (state_11659){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11659);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11745){var ex__10883__auto__ = e11745;
var statearr_11746_13236 = state_11659;
(statearr_11746_13236[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11659[(4)]))){
var statearr_11747_13237 = state_11659;
(statearr_11747_13237[(1)] = cljs.core.first((state_11659[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11659;
state_11659 = G__13238;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10880__auto__ = function(state_11659){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10880__auto____1.call(this,state_11659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10880__auto____0;
cljs$core$async$mult_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10880__auto____1;
return cljs$core$async$mult_$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11748 = f__10940__auto__();
(statearr_11748[(6)] = c__10939__auto___13181);

return statearr_11748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
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
var G__11756 = arguments.length;
switch (G__11756) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11765){
var map__11766 = p__11765;
var map__11766__$1 = (((((!((map__11766 == null))))?(((((map__11766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11766):map__11766);
var opts = map__11766__$1;
var statearr_11768_13248 = state;
(statearr_11768_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11769_13249 = state;
(statearr_11769_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11770_13250 = state;
(statearr_11770_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11761){
var G__11762 = cljs.core.first(seq11761);
var seq11761__$1 = cljs.core.next(seq11761);
var G__11763 = cljs.core.first(seq11761__$1);
var seq11761__$2 = cljs.core.next(seq11761__$1);
var G__11764 = cljs.core.first(seq11761__$2);
var seq11761__$3 = cljs.core.next(seq11761__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11762,G__11763,G__11764,seq11761__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11771 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11772){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11772 = meta11772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11773,meta11772__$1){
var self__ = this;
var _11773__$1 = this;
return (new cljs.core.async.t_cljs$core$async11771(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11772__$1));
}));

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11773){
var self__ = this;
var _11773__$1 = this;
return self__.meta11772;
}));

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11771.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11772","meta11772",-232037613,null)], null);
}));

(cljs.core.async.t_cljs$core$async11771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11771");

(cljs.core.async.t_cljs$core$async11771.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11771.
 */
cljs.core.async.__GT_t_cljs$core$async11771 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11771(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11772){
return (new cljs.core.async.t_cljs$core$async11771(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11772));
});

}

return (new cljs.core.async.t_cljs$core$async11771(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10939__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_11876){
var state_val_11877 = (state_11876[(1)]);
if((state_val_11877 === (7))){
var inst_11791 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
var statearr_11884_13252 = state_11876__$1;
(statearr_11884_13252[(2)] = inst_11791);

(statearr_11884_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (20))){
var inst_11803 = (state_11876[(7)]);
var state_11876__$1 = state_11876;
var statearr_11885_13253 = state_11876__$1;
(statearr_11885_13253[(2)] = inst_11803);

(statearr_11885_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (27))){
var state_11876__$1 = state_11876;
var statearr_11886_13254 = state_11876__$1;
(statearr_11886_13254[(2)] = null);

(statearr_11886_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (1))){
var inst_11778 = (state_11876[(8)]);
var inst_11778__$1 = calc_state();
var inst_11780 = (inst_11778__$1 == null);
var inst_11781 = cljs.core.not(inst_11780);
var state_11876__$1 = (function (){var statearr_11888 = state_11876;
(statearr_11888[(8)] = inst_11778__$1);

return statearr_11888;
})();
if(inst_11781){
var statearr_11889_13255 = state_11876__$1;
(statearr_11889_13255[(1)] = (2));

} else {
var statearr_11891_13256 = state_11876__$1;
(statearr_11891_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (24))){
var inst_11850 = (state_11876[(9)]);
var inst_11827 = (state_11876[(10)]);
var inst_11836 = (state_11876[(11)]);
var inst_11850__$1 = (inst_11827.cljs$core$IFn$_invoke$arity$1 ? inst_11827.cljs$core$IFn$_invoke$arity$1(inst_11836) : inst_11827.call(null,inst_11836));
var state_11876__$1 = (function (){var statearr_11892 = state_11876;
(statearr_11892[(9)] = inst_11850__$1);

return statearr_11892;
})();
if(cljs.core.truth_(inst_11850__$1)){
var statearr_11893_13257 = state_11876__$1;
(statearr_11893_13257[(1)] = (29));

} else {
var statearr_11894_13258 = state_11876__$1;
(statearr_11894_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (4))){
var inst_11794 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
if(cljs.core.truth_(inst_11794)){
var statearr_11895_13259 = state_11876__$1;
(statearr_11895_13259[(1)] = (8));

} else {
var statearr_11896_13260 = state_11876__$1;
(statearr_11896_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (15))){
var inst_11821 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
if(cljs.core.truth_(inst_11821)){
var statearr_11897_13261 = state_11876__$1;
(statearr_11897_13261[(1)] = (19));

} else {
var statearr_11898_13262 = state_11876__$1;
(statearr_11898_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (21))){
var inst_11826 = (state_11876[(12)]);
var inst_11826__$1 = (state_11876[(2)]);
var inst_11827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11826__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11826__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11826__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11876__$1 = (function (){var statearr_11914 = state_11876;
(statearr_11914[(12)] = inst_11826__$1);

(statearr_11914[(13)] = inst_11828);

(statearr_11914[(10)] = inst_11827);

return statearr_11914;
})();
return cljs.core.async.ioc_alts_BANG_(state_11876__$1,(22),inst_11829);
} else {
if((state_val_11877 === (31))){
var inst_11858 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
if(cljs.core.truth_(inst_11858)){
var statearr_11915_13263 = state_11876__$1;
(statearr_11915_13263[(1)] = (32));

} else {
var statearr_11916_13264 = state_11876__$1;
(statearr_11916_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (32))){
var inst_11835 = (state_11876[(14)]);
var state_11876__$1 = state_11876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11876__$1,(35),out,inst_11835);
} else {
if((state_val_11877 === (33))){
var inst_11826 = (state_11876[(12)]);
var inst_11803 = inst_11826;
var state_11876__$1 = (function (){var statearr_11917 = state_11876;
(statearr_11917[(7)] = inst_11803);

return statearr_11917;
})();
var statearr_11918_13265 = state_11876__$1;
(statearr_11918_13265[(2)] = null);

(statearr_11918_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (13))){
var inst_11803 = (state_11876[(7)]);
var inst_11810 = inst_11803.cljs$lang$protocol_mask$partition0$;
var inst_11811 = (inst_11810 & (64));
var inst_11812 = inst_11803.cljs$core$ISeq$;
var inst_11813 = (cljs.core.PROTOCOL_SENTINEL === inst_11812);
var inst_11814 = ((inst_11811) || (inst_11813));
var state_11876__$1 = state_11876;
if(cljs.core.truth_(inst_11814)){
var statearr_11919_13266 = state_11876__$1;
(statearr_11919_13266[(1)] = (16));

} else {
var statearr_11920_13267 = state_11876__$1;
(statearr_11920_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (22))){
var inst_11835 = (state_11876[(14)]);
var inst_11836 = (state_11876[(11)]);
var inst_11834 = (state_11876[(2)]);
var inst_11835__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11834,(0),null);
var inst_11836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11834,(1),null);
var inst_11837 = (inst_11835__$1 == null);
var inst_11838 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11836__$1,change);
var inst_11839 = ((inst_11837) || (inst_11838));
var state_11876__$1 = (function (){var statearr_11921 = state_11876;
(statearr_11921[(14)] = inst_11835__$1);

(statearr_11921[(11)] = inst_11836__$1);

return statearr_11921;
})();
if(cljs.core.truth_(inst_11839)){
var statearr_11922_13268 = state_11876__$1;
(statearr_11922_13268[(1)] = (23));

} else {
var statearr_11923_13269 = state_11876__$1;
(statearr_11923_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (36))){
var inst_11826 = (state_11876[(12)]);
var inst_11803 = inst_11826;
var state_11876__$1 = (function (){var statearr_11924 = state_11876;
(statearr_11924[(7)] = inst_11803);

return statearr_11924;
})();
var statearr_11925_13270 = state_11876__$1;
(statearr_11925_13270[(2)] = null);

(statearr_11925_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (29))){
var inst_11850 = (state_11876[(9)]);
var state_11876__$1 = state_11876;
var statearr_11929_13271 = state_11876__$1;
(statearr_11929_13271[(2)] = inst_11850);

(statearr_11929_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (6))){
var state_11876__$1 = state_11876;
var statearr_11932_13272 = state_11876__$1;
(statearr_11932_13272[(2)] = false);

(statearr_11932_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (28))){
var inst_11846 = (state_11876[(2)]);
var inst_11847 = calc_state();
var inst_11803 = inst_11847;
var state_11876__$1 = (function (){var statearr_11935 = state_11876;
(statearr_11935[(7)] = inst_11803);

(statearr_11935[(15)] = inst_11846);

return statearr_11935;
})();
var statearr_11936_13273 = state_11876__$1;
(statearr_11936_13273[(2)] = null);

(statearr_11936_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (25))){
var inst_11872 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
var statearr_11938_13274 = state_11876__$1;
(statearr_11938_13274[(2)] = inst_11872);

(statearr_11938_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (34))){
var inst_11870 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
var statearr_11939_13275 = state_11876__$1;
(statearr_11939_13275[(2)] = inst_11870);

(statearr_11939_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (17))){
var state_11876__$1 = state_11876;
var statearr_11941_13276 = state_11876__$1;
(statearr_11941_13276[(2)] = false);

(statearr_11941_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (3))){
var state_11876__$1 = state_11876;
var statearr_11942_13277 = state_11876__$1;
(statearr_11942_13277[(2)] = false);

(statearr_11942_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (12))){
var inst_11874 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11876__$1,inst_11874);
} else {
if((state_val_11877 === (2))){
var inst_11778 = (state_11876[(8)]);
var inst_11783 = inst_11778.cljs$lang$protocol_mask$partition0$;
var inst_11784 = (inst_11783 & (64));
var inst_11785 = inst_11778.cljs$core$ISeq$;
var inst_11786 = (cljs.core.PROTOCOL_SENTINEL === inst_11785);
var inst_11787 = ((inst_11784) || (inst_11786));
var state_11876__$1 = state_11876;
if(cljs.core.truth_(inst_11787)){
var statearr_11943_13278 = state_11876__$1;
(statearr_11943_13278[(1)] = (5));

} else {
var statearr_11946_13279 = state_11876__$1;
(statearr_11946_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (23))){
var inst_11835 = (state_11876[(14)]);
var inst_11841 = (inst_11835 == null);
var state_11876__$1 = state_11876;
if(cljs.core.truth_(inst_11841)){
var statearr_11948_13280 = state_11876__$1;
(statearr_11948_13280[(1)] = (26));

} else {
var statearr_11949_13281 = state_11876__$1;
(statearr_11949_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (35))){
var inst_11861 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
if(cljs.core.truth_(inst_11861)){
var statearr_11950_13282 = state_11876__$1;
(statearr_11950_13282[(1)] = (36));

} else {
var statearr_11951_13283 = state_11876__$1;
(statearr_11951_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (19))){
var inst_11803 = (state_11876[(7)]);
var inst_11823 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11803);
var state_11876__$1 = state_11876;
var statearr_11952_13284 = state_11876__$1;
(statearr_11952_13284[(2)] = inst_11823);

(statearr_11952_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (11))){
var inst_11803 = (state_11876[(7)]);
var inst_11807 = (inst_11803 == null);
var inst_11808 = cljs.core.not(inst_11807);
var state_11876__$1 = state_11876;
if(inst_11808){
var statearr_11953_13285 = state_11876__$1;
(statearr_11953_13285[(1)] = (13));

} else {
var statearr_11954_13286 = state_11876__$1;
(statearr_11954_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (9))){
var inst_11778 = (state_11876[(8)]);
var state_11876__$1 = state_11876;
var statearr_11955_13287 = state_11876__$1;
(statearr_11955_13287[(2)] = inst_11778);

(statearr_11955_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (5))){
var state_11876__$1 = state_11876;
var statearr_11956_13288 = state_11876__$1;
(statearr_11956_13288[(2)] = true);

(statearr_11956_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (14))){
var state_11876__$1 = state_11876;
var statearr_11959_13289 = state_11876__$1;
(statearr_11959_13289[(2)] = false);

(statearr_11959_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (26))){
var inst_11836 = (state_11876[(11)]);
var inst_11843 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11836);
var state_11876__$1 = state_11876;
var statearr_11960_13290 = state_11876__$1;
(statearr_11960_13290[(2)] = inst_11843);

(statearr_11960_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (16))){
var state_11876__$1 = state_11876;
var statearr_11962_13291 = state_11876__$1;
(statearr_11962_13291[(2)] = true);

(statearr_11962_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (38))){
var inst_11866 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
var statearr_11964_13292 = state_11876__$1;
(statearr_11964_13292[(2)] = inst_11866);

(statearr_11964_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (30))){
var inst_11828 = (state_11876[(13)]);
var inst_11827 = (state_11876[(10)]);
var inst_11836 = (state_11876[(11)]);
var inst_11853 = cljs.core.empty_QMARK_(inst_11827);
var inst_11854 = (inst_11828.cljs$core$IFn$_invoke$arity$1 ? inst_11828.cljs$core$IFn$_invoke$arity$1(inst_11836) : inst_11828.call(null,inst_11836));
var inst_11855 = cljs.core.not(inst_11854);
var inst_11856 = ((inst_11853) && (inst_11855));
var state_11876__$1 = state_11876;
var statearr_11965_13293 = state_11876__$1;
(statearr_11965_13293[(2)] = inst_11856);

(statearr_11965_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (10))){
var inst_11778 = (state_11876[(8)]);
var inst_11799 = (state_11876[(2)]);
var inst_11800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11799,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11799,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11799,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11803 = inst_11778;
var state_11876__$1 = (function (){var statearr_11966 = state_11876;
(statearr_11966[(7)] = inst_11803);

(statearr_11966[(16)] = inst_11801);

(statearr_11966[(17)] = inst_11802);

(statearr_11966[(18)] = inst_11800);

return statearr_11966;
})();
var statearr_11967_13294 = state_11876__$1;
(statearr_11967_13294[(2)] = null);

(statearr_11967_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (18))){
var inst_11818 = (state_11876[(2)]);
var state_11876__$1 = state_11876;
var statearr_11968_13295 = state_11876__$1;
(statearr_11968_13295[(2)] = inst_11818);

(statearr_11968_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (37))){
var state_11876__$1 = state_11876;
var statearr_11969_13296 = state_11876__$1;
(statearr_11969_13296[(2)] = null);

(statearr_11969_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11877 === (8))){
var inst_11778 = (state_11876[(8)]);
var inst_11796 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11778);
var state_11876__$1 = state_11876;
var statearr_11970_13297 = state_11876__$1;
(statearr_11970_13297[(2)] = inst_11796);

(statearr_11970_13297[(1)] = (10));


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
var statearr_11971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11971[(0)] = cljs$core$async$mix_$_state_machine__10880__auto__);

(statearr_11971[(1)] = (1));

return statearr_11971;
});
var cljs$core$async$mix_$_state_machine__10880__auto____1 = (function (state_11876){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_11876);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11972){var ex__10883__auto__ = e11972;
var statearr_11973_13298 = state_11876;
(statearr_11973_13298[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_11876[(4)]))){
var statearr_11974_13299 = state_11876;
(statearr_11974_13299[(1)] = cljs.core.first((state_11876[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_11876;
state_11876 = G__13300;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10880__auto__ = function(state_11876){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10880__auto____1.call(this,state_11876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10880__auto____0;
cljs$core$async$mix_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10880__auto____1;
return cljs$core$async$mix_$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_11975 = f__10940__auto__();
(statearr_11975[(6)] = c__10939__auto___13251);

return statearr_11975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
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
var c__10939__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12058){
var state_val_12059 = (state_12058[(1)]);
if((state_val_12059 === (7))){
var inst_12054 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12060_13308 = state_12058__$1;
(statearr_12060_13308[(2)] = inst_12054);

(statearr_12060_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (20))){
var state_12058__$1 = state_12058;
var statearr_12061_13309 = state_12058__$1;
(statearr_12061_13309[(2)] = null);

(statearr_12061_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (1))){
var state_12058__$1 = state_12058;
var statearr_12062_13310 = state_12058__$1;
(statearr_12062_13310[(2)] = null);

(statearr_12062_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (24))){
var inst_12037 = (state_12058[(7)]);
var inst_12046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12037);
var state_12058__$1 = state_12058;
var statearr_12063_13311 = state_12058__$1;
(statearr_12063_13311[(2)] = inst_12046);

(statearr_12063_13311[(1)] = (25));


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
var statearr_12065_13312 = state_12058__$1;
(statearr_12065_13312[(1)] = (5));

} else {
var statearr_12066_13313 = state_12058__$1;
(statearr_12066_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (15))){
var inst_12031 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12067_13314 = state_12058__$1;
(statearr_12067_13314[(2)] = inst_12031);

(statearr_12067_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (21))){
var inst_12051 = (state_12058[(2)]);
var state_12058__$1 = (function (){var statearr_12068 = state_12058;
(statearr_12068[(9)] = inst_12051);

return statearr_12068;
})();
var statearr_12069_13315 = state_12058__$1;
(statearr_12069_13315[(2)] = null);

(statearr_12069_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (13))){
var inst_12013 = (state_12058[(10)]);
var inst_12015 = cljs.core.chunked_seq_QMARK_(inst_12013);
var state_12058__$1 = state_12058;
if(inst_12015){
var statearr_12070_13316 = state_12058__$1;
(statearr_12070_13316[(1)] = (16));

} else {
var statearr_12071_13317 = state_12058__$1;
(statearr_12071_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (22))){
var inst_12043 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
if(cljs.core.truth_(inst_12043)){
var statearr_12072_13318 = state_12058__$1;
(statearr_12072_13318[(1)] = (23));

} else {
var statearr_12073_13319 = state_12058__$1;
(statearr_12073_13319[(1)] = (24));

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
var state_12058__$1 = (function (){var statearr_12075 = state_12058;
(statearr_12075[(11)] = inst_12039__$1);

(statearr_12075[(7)] = inst_12037__$1);

return statearr_12075;
})();
if(cljs.core.truth_(inst_12039__$1)){
var statearr_12076_13320 = state_12058__$1;
(statearr_12076_13320[(1)] = (19));

} else {
var statearr_12077_13321 = state_12058__$1;
(statearr_12077_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (25))){
var inst_12048 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12078_13322 = state_12058__$1;
(statearr_12078_13322[(2)] = inst_12048);

(statearr_12078_13322[(1)] = (21));


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
var state_12058__$1 = (function (){var statearr_12080 = state_12058;
(statearr_12080[(12)] = inst_12001);

(statearr_12080[(13)] = inst_11999);

(statearr_12080[(14)] = inst_12002);

(statearr_12080[(15)] = inst_12024);

(statearr_12080[(16)] = inst_12000);

return statearr_12080;
})();
var statearr_12082_13323 = state_12058__$1;
(statearr_12082_13323[(2)] = null);

(statearr_12082_13323[(1)] = (8));


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
var statearr_12084_13324 = state_12058__$1;
(statearr_12084_13324[(2)] = inst_12033);

(statearr_12084_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (2))){
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12058__$1,(4),ch);
} else {
if((state_val_12059 === (23))){
var state_12058__$1 = state_12058;
var statearr_12085_13325 = state_12058__$1;
(statearr_12085_13325[(2)] = null);

(statearr_12085_13325[(1)] = (25));


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
var state_12058__$1 = (function (){var statearr_12086 = state_12058;
(statearr_12086[(10)] = inst_12013__$1);

return statearr_12086;
})();
if(inst_12013__$1){
var statearr_12087_13326 = state_12058__$1;
(statearr_12087_13326[(1)] = (13));

} else {
var statearr_12088_13327 = state_12058__$1;
(statearr_12088_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (9))){
var inst_12035 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12089_13328 = state_12058__$1;
(statearr_12089_13328[(2)] = inst_12035);

(statearr_12089_13328[(1)] = (7));


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
var state_12058__$1 = (function (){var statearr_12090 = state_12058;
(statearr_12090[(12)] = inst_12001);

(statearr_12090[(13)] = inst_11999);

(statearr_12090[(14)] = inst_12002);

(statearr_12090[(16)] = inst_12000);

return statearr_12090;
})();
var statearr_12091_13329 = state_12058__$1;
(statearr_12091_13329[(2)] = null);

(statearr_12091_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (14))){
var state_12058__$1 = state_12058;
var statearr_12096_13330 = state_12058__$1;
(statearr_12096_13330[(2)] = null);

(statearr_12096_13330[(1)] = (15));


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
var state_12058__$1 = (function (){var statearr_12097 = state_12058;
(statearr_12097[(12)] = inst_12001);

(statearr_12097[(13)] = inst_11999);

(statearr_12097[(14)] = inst_12002);

(statearr_12097[(16)] = inst_12000);

return statearr_12097;
})();
var statearr_12098_13331 = state_12058__$1;
(statearr_12098_13331[(2)] = null);

(statearr_12098_13331[(1)] = (8));


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
var tmp12093 = inst_12001;
var tmp12094 = inst_11999;
var tmp12095 = inst_12000;
var inst_11999__$1 = tmp12094;
var inst_12000__$1 = tmp12095;
var inst_12001__$1 = tmp12093;
var inst_12002__$1 = inst_12010;
var state_12058__$1 = (function (){var statearr_12099 = state_12058;
(statearr_12099[(12)] = inst_12001__$1);

(statearr_12099[(13)] = inst_11999__$1);

(statearr_12099[(14)] = inst_12002__$1);

(statearr_12099[(17)] = inst_12009);

(statearr_12099[(16)] = inst_12000__$1);

return statearr_12099;
})();
var statearr_12100_13332 = state_12058__$1;
(statearr_12100_13332[(2)] = null);

(statearr_12100_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (18))){
var inst_12028 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12101_13333 = state_12058__$1;
(statearr_12101_13333[(2)] = inst_12028);

(statearr_12101_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (8))){
var inst_12001 = (state_12058[(12)]);
var inst_12002 = (state_12058[(14)]);
var inst_12004 = (inst_12002 < inst_12001);
var inst_12005 = inst_12004;
var state_12058__$1 = state_12058;
if(cljs.core.truth_(inst_12005)){
var statearr_12102_13334 = state_12058__$1;
(statearr_12102_13334[(1)] = (10));

} else {
var statearr_12103_13335 = state_12058__$1;
(statearr_12103_13335[(1)] = (11));

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
var statearr_12104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12104[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12104[(1)] = (1));

return statearr_12104;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12058){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12058);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12105){var ex__10883__auto__ = e12105;
var statearr_12106_13336 = state_12058;
(statearr_12106_13336[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12058[(4)]))){
var statearr_12107_13337 = state_12058;
(statearr_12107_13337[(1)] = cljs.core.first((state_12058[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12058;
state_12058 = G__13338;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12108 = f__10940__auto__();
(statearr_12108[(6)] = c__10939__auto___13307);

return statearr_12108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
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
var G__12118 = arguments.length;
switch (G__12118) {
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
var G__12126 = arguments.length;
switch (G__12126) {
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
var G__12128 = arguments.length;
switch (G__12128) {
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
var c__10939__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12178){
var state_val_12179 = (state_12178[(1)]);
if((state_val_12179 === (7))){
var state_12178__$1 = state_12178;
var statearr_12192_13343 = state_12178__$1;
(statearr_12192_13343[(2)] = null);

(statearr_12192_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (1))){
var state_12178__$1 = state_12178;
var statearr_12193_13344 = state_12178__$1;
(statearr_12193_13344[(2)] = null);

(statearr_12193_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (4))){
var inst_12138 = (state_12178[(7)]);
var inst_12139 = (state_12178[(8)]);
var inst_12141 = (inst_12139 < inst_12138);
var state_12178__$1 = state_12178;
if(cljs.core.truth_(inst_12141)){
var statearr_12194_13345 = state_12178__$1;
(statearr_12194_13345[(1)] = (6));

} else {
var statearr_12195_13346 = state_12178__$1;
(statearr_12195_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (15))){
var inst_12164 = (state_12178[(9)]);
var inst_12169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12164);
var state_12178__$1 = state_12178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12178__$1,(17),out,inst_12169);
} else {
if((state_val_12179 === (13))){
var inst_12164 = (state_12178[(9)]);
var inst_12164__$1 = (state_12178[(2)]);
var inst_12165 = cljs.core.some(cljs.core.nil_QMARK_,inst_12164__$1);
var state_12178__$1 = (function (){var statearr_12196 = state_12178;
(statearr_12196[(9)] = inst_12164__$1);

return statearr_12196;
})();
if(cljs.core.truth_(inst_12165)){
var statearr_12197_13347 = state_12178__$1;
(statearr_12197_13347[(1)] = (14));

} else {
var statearr_12198_13348 = state_12178__$1;
(statearr_12198_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (6))){
var state_12178__$1 = state_12178;
var statearr_12199_13349 = state_12178__$1;
(statearr_12199_13349[(2)] = null);

(statearr_12199_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (17))){
var inst_12171 = (state_12178[(2)]);
var state_12178__$1 = (function (){var statearr_12201 = state_12178;
(statearr_12201[(10)] = inst_12171);

return statearr_12201;
})();
var statearr_12202_13350 = state_12178__$1;
(statearr_12202_13350[(2)] = null);

(statearr_12202_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (3))){
var inst_12176 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12178__$1,inst_12176);
} else {
if((state_val_12179 === (12))){
var _ = (function (){var statearr_12203 = state_12178;
(statearr_12203[(4)] = cljs.core.rest((state_12178[(4)])));

return statearr_12203;
})();
var state_12178__$1 = state_12178;
var ex12200 = (state_12178__$1[(2)]);
var statearr_12204_13351 = state_12178__$1;
(statearr_12204_13351[(5)] = ex12200);


if((ex12200 instanceof Object)){
var statearr_12205_13352 = state_12178__$1;
(statearr_12205_13352[(1)] = (11));

(statearr_12205_13352[(5)] = null);

} else {
throw ex12200;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (2))){
var inst_12137 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12138 = cnt;
var inst_12139 = (0);
var state_12178__$1 = (function (){var statearr_12221 = state_12178;
(statearr_12221[(7)] = inst_12138);

(statearr_12221[(8)] = inst_12139);

(statearr_12221[(11)] = inst_12137);

return statearr_12221;
})();
var statearr_12222_13353 = state_12178__$1;
(statearr_12222_13353[(2)] = null);

(statearr_12222_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (11))){
var inst_12143 = (state_12178[(2)]);
var inst_12144 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12178__$1 = (function (){var statearr_12223 = state_12178;
(statearr_12223[(12)] = inst_12143);

return statearr_12223;
})();
var statearr_12224_13354 = state_12178__$1;
(statearr_12224_13354[(2)] = inst_12144);

(statearr_12224_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (9))){
var inst_12139 = (state_12178[(8)]);
var _ = (function (){var statearr_12225 = state_12178;
(statearr_12225[(4)] = cljs.core.cons((12),(state_12178[(4)])));

return statearr_12225;
})();
var inst_12150 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12139) : chs__$1.call(null,inst_12139));
var inst_12151 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12139) : done.call(null,inst_12139));
var inst_12152 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12150,inst_12151);
var ___$1 = (function (){var statearr_12226 = state_12178;
(statearr_12226[(4)] = cljs.core.rest((state_12178[(4)])));

return statearr_12226;
})();
var state_12178__$1 = state_12178;
var statearr_12227_13355 = state_12178__$1;
(statearr_12227_13355[(2)] = inst_12152);

(statearr_12227_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (5))){
var inst_12162 = (state_12178[(2)]);
var state_12178__$1 = (function (){var statearr_12228 = state_12178;
(statearr_12228[(13)] = inst_12162);

return statearr_12228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12178__$1,(13),dchan);
} else {
if((state_val_12179 === (14))){
var inst_12167 = cljs.core.async.close_BANG_(out);
var state_12178__$1 = state_12178;
var statearr_12229_13356 = state_12178__$1;
(statearr_12229_13356[(2)] = inst_12167);

(statearr_12229_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (16))){
var inst_12174 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12230_13357 = state_12178__$1;
(statearr_12230_13357[(2)] = inst_12174);

(statearr_12230_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (10))){
var inst_12139 = (state_12178[(8)]);
var inst_12155 = (state_12178[(2)]);
var inst_12156 = (inst_12139 + (1));
var inst_12139__$1 = inst_12156;
var state_12178__$1 = (function (){var statearr_12231 = state_12178;
(statearr_12231[(8)] = inst_12139__$1);

(statearr_12231[(14)] = inst_12155);

return statearr_12231;
})();
var statearr_12232_13358 = state_12178__$1;
(statearr_12232_13358[(2)] = null);

(statearr_12232_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12179 === (8))){
var inst_12160 = (state_12178[(2)]);
var state_12178__$1 = state_12178;
var statearr_12233_13359 = state_12178__$1;
(statearr_12233_13359[(2)] = inst_12160);

(statearr_12233_13359[(1)] = (5));


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
var statearr_12234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12234[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12234[(1)] = (1));

return statearr_12234;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12178){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12178);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12235){var ex__10883__auto__ = e12235;
var statearr_12236_13360 = state_12178;
(statearr_12236_13360[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12178[(4)]))){
var statearr_12237_13361 = state_12178;
(statearr_12237_13361[(1)] = cljs.core.first((state_12178[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12178;
state_12178 = G__13362;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12238 = f__10940__auto__();
(statearr_12238[(6)] = c__10939__auto___13342);

return statearr_12238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
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
var G__12242 = arguments.length;
switch (G__12242) {
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
var c__10939__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12274){
var state_val_12275 = (state_12274[(1)]);
if((state_val_12275 === (7))){
var inst_12253 = (state_12274[(7)]);
var inst_12254 = (state_12274[(8)]);
var inst_12253__$1 = (state_12274[(2)]);
var inst_12254__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12253__$1,(0),null);
var inst_12255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12253__$1,(1),null);
var inst_12256 = (inst_12254__$1 == null);
var state_12274__$1 = (function (){var statearr_12276 = state_12274;
(statearr_12276[(7)] = inst_12253__$1);

(statearr_12276[(9)] = inst_12255);

(statearr_12276[(8)] = inst_12254__$1);

return statearr_12276;
})();
if(cljs.core.truth_(inst_12256)){
var statearr_12277_13365 = state_12274__$1;
(statearr_12277_13365[(1)] = (8));

} else {
var statearr_12278_13366 = state_12274__$1;
(statearr_12278_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (1))){
var inst_12243 = cljs.core.vec(chs);
var inst_12244 = inst_12243;
var state_12274__$1 = (function (){var statearr_12279 = state_12274;
(statearr_12279[(10)] = inst_12244);

return statearr_12279;
})();
var statearr_12280_13367 = state_12274__$1;
(statearr_12280_13367[(2)] = null);

(statearr_12280_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (4))){
var inst_12244 = (state_12274[(10)]);
var state_12274__$1 = state_12274;
return cljs.core.async.ioc_alts_BANG_(state_12274__$1,(7),inst_12244);
} else {
if((state_val_12275 === (6))){
var inst_12270 = (state_12274[(2)]);
var state_12274__$1 = state_12274;
var statearr_12281_13368 = state_12274__$1;
(statearr_12281_13368[(2)] = inst_12270);

(statearr_12281_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (3))){
var inst_12272 = (state_12274[(2)]);
var state_12274__$1 = state_12274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12274__$1,inst_12272);
} else {
if((state_val_12275 === (2))){
var inst_12244 = (state_12274[(10)]);
var inst_12246 = cljs.core.count(inst_12244);
var inst_12247 = (inst_12246 > (0));
var state_12274__$1 = state_12274;
if(cljs.core.truth_(inst_12247)){
var statearr_12283_13369 = state_12274__$1;
(statearr_12283_13369[(1)] = (4));

} else {
var statearr_12284_13370 = state_12274__$1;
(statearr_12284_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (11))){
var inst_12244 = (state_12274[(10)]);
var inst_12263 = (state_12274[(2)]);
var tmp12282 = inst_12244;
var inst_12244__$1 = tmp12282;
var state_12274__$1 = (function (){var statearr_12285 = state_12274;
(statearr_12285[(11)] = inst_12263);

(statearr_12285[(10)] = inst_12244__$1);

return statearr_12285;
})();
var statearr_12286_13371 = state_12274__$1;
(statearr_12286_13371[(2)] = null);

(statearr_12286_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (9))){
var inst_12254 = (state_12274[(8)]);
var state_12274__$1 = state_12274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12274__$1,(11),out,inst_12254);
} else {
if((state_val_12275 === (5))){
var inst_12268 = cljs.core.async.close_BANG_(out);
var state_12274__$1 = state_12274;
var statearr_12289_13372 = state_12274__$1;
(statearr_12289_13372[(2)] = inst_12268);

(statearr_12289_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (10))){
var inst_12266 = (state_12274[(2)]);
var state_12274__$1 = state_12274;
var statearr_12290_13373 = state_12274__$1;
(statearr_12290_13373[(2)] = inst_12266);

(statearr_12290_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (8))){
var inst_12253 = (state_12274[(7)]);
var inst_12255 = (state_12274[(9)]);
var inst_12254 = (state_12274[(8)]);
var inst_12244 = (state_12274[(10)]);
var inst_12258 = (function (){var cs = inst_12244;
var vec__12249 = inst_12253;
var v = inst_12254;
var c = inst_12255;
return (function (p1__12240_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12240_SHARP_);
});
})();
var inst_12259 = cljs.core.filterv(inst_12258,inst_12244);
var inst_12244__$1 = inst_12259;
var state_12274__$1 = (function (){var statearr_12291 = state_12274;
(statearr_12291[(10)] = inst_12244__$1);

return statearr_12291;
})();
var statearr_12292_13374 = state_12274__$1;
(statearr_12292_13374[(2)] = null);

(statearr_12292_13374[(1)] = (2));


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
var statearr_12293 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12293[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12293[(1)] = (1));

return statearr_12293;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12274){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12274);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12294){var ex__10883__auto__ = e12294;
var statearr_12295_13375 = state_12274;
(statearr_12295_13375[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12274[(4)]))){
var statearr_12296_13376 = state_12274;
(statearr_12296_13376[(1)] = cljs.core.first((state_12274[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12274;
state_12274 = G__13377;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12297 = f__10940__auto__();
(statearr_12297[(6)] = c__10939__auto___13364);

return statearr_12297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
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
var G__12299 = arguments.length;
switch (G__12299) {
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
var c__10939__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12343){
var state_val_12344 = (state_12343[(1)]);
if((state_val_12344 === (7))){
var inst_12325 = (state_12343[(7)]);
var inst_12325__$1 = (state_12343[(2)]);
var inst_12326 = (inst_12325__$1 == null);
var inst_12327 = cljs.core.not(inst_12326);
var state_12343__$1 = (function (){var statearr_12345 = state_12343;
(statearr_12345[(7)] = inst_12325__$1);

return statearr_12345;
})();
if(inst_12327){
var statearr_12346_13380 = state_12343__$1;
(statearr_12346_13380[(1)] = (8));

} else {
var statearr_12347_13381 = state_12343__$1;
(statearr_12347_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (1))){
var inst_12320 = (0);
var state_12343__$1 = (function (){var statearr_12348 = state_12343;
(statearr_12348[(8)] = inst_12320);

return statearr_12348;
})();
var statearr_12349_13382 = state_12343__$1;
(statearr_12349_13382[(2)] = null);

(statearr_12349_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (4))){
var state_12343__$1 = state_12343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12343__$1,(7),ch);
} else {
if((state_val_12344 === (6))){
var inst_12338 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
var statearr_12350_13383 = state_12343__$1;
(statearr_12350_13383[(2)] = inst_12338);

(statearr_12350_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (3))){
var inst_12340 = (state_12343[(2)]);
var inst_12341 = cljs.core.async.close_BANG_(out);
var state_12343__$1 = (function (){var statearr_12351 = state_12343;
(statearr_12351[(9)] = inst_12340);

return statearr_12351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12343__$1,inst_12341);
} else {
if((state_val_12344 === (2))){
var inst_12320 = (state_12343[(8)]);
var inst_12322 = (inst_12320 < n);
var state_12343__$1 = state_12343;
if(cljs.core.truth_(inst_12322)){
var statearr_12352_13384 = state_12343__$1;
(statearr_12352_13384[(1)] = (4));

} else {
var statearr_12353_13385 = state_12343__$1;
(statearr_12353_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (11))){
var inst_12320 = (state_12343[(8)]);
var inst_12330 = (state_12343[(2)]);
var inst_12331 = (inst_12320 + (1));
var inst_12320__$1 = inst_12331;
var state_12343__$1 = (function (){var statearr_12354 = state_12343;
(statearr_12354[(8)] = inst_12320__$1);

(statearr_12354[(10)] = inst_12330);

return statearr_12354;
})();
var statearr_12355_13386 = state_12343__$1;
(statearr_12355_13386[(2)] = null);

(statearr_12355_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (9))){
var state_12343__$1 = state_12343;
var statearr_12356_13387 = state_12343__$1;
(statearr_12356_13387[(2)] = null);

(statearr_12356_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (5))){
var state_12343__$1 = state_12343;
var statearr_12357_13388 = state_12343__$1;
(statearr_12357_13388[(2)] = null);

(statearr_12357_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (10))){
var inst_12335 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
var statearr_12358_13389 = state_12343__$1;
(statearr_12358_13389[(2)] = inst_12335);

(statearr_12358_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (8))){
var inst_12325 = (state_12343[(7)]);
var state_12343__$1 = state_12343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12343__$1,(11),out,inst_12325);
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
var statearr_12359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12359[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12359[(1)] = (1));

return statearr_12359;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12343){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12343);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12360){var ex__10883__auto__ = e12360;
var statearr_12361_13390 = state_12343;
(statearr_12361_13390[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12343[(4)]))){
var statearr_12362_13391 = state_12343;
(statearr_12362_13391[(1)] = cljs.core.first((state_12343[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12343;
state_12343 = G__13392;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12363 = f__10940__auto__();
(statearr_12363[(6)] = c__10939__auto___13379);

return statearr_12363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12365 = (function (f,ch,meta12366){
this.f = f;
this.ch = ch;
this.meta12366 = meta12366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12367,meta12366__$1){
var self__ = this;
var _12367__$1 = this;
return (new cljs.core.async.t_cljs$core$async12365(self__.f,self__.ch,meta12366__$1));
}));

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12367){
var self__ = this;
var _12367__$1 = this;
return self__.meta12366;
}));

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12371 = (function (f,ch,meta12366,_,fn1,meta12372){
this.f = f;
this.ch = ch;
this.meta12366 = meta12366;
this._ = _;
this.fn1 = fn1;
this.meta12372 = meta12372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12373,meta12372__$1){
var self__ = this;
var _12373__$1 = this;
return (new cljs.core.async.t_cljs$core$async12371(self__.f,self__.ch,self__.meta12366,self__._,self__.fn1,meta12372__$1));
}));

(cljs.core.async.t_cljs$core$async12371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12373){
var self__ = this;
var _12373__$1 = this;
return self__.meta12372;
}));

(cljs.core.async.t_cljs$core$async12371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12364_SHARP_){
var G__12383 = (((p1__12364_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12364_SHARP_) : self__.f.call(null,p1__12364_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12383) : f1.call(null,G__12383));
});
}));

(cljs.core.async.t_cljs$core$async12371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12366","meta12366",-2144229141,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12365","cljs.core.async/t_cljs$core$async12365",-176952506,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12372","meta12372",-1301201247,null)], null);
}));

(cljs.core.async.t_cljs$core$async12371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12371");

(cljs.core.async.t_cljs$core$async12371.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12371.
 */
cljs.core.async.__GT_t_cljs$core$async12371 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12371(f__$1,ch__$1,meta12366__$1,___$2,fn1__$1,meta12372){
return (new cljs.core.async.t_cljs$core$async12371(f__$1,ch__$1,meta12366__$1,___$2,fn1__$1,meta12372));
});

}

return (new cljs.core.async.t_cljs$core$async12371(self__.f,self__.ch,self__.meta12366,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12384 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12384) : self__.f.call(null,G__12384));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12366","meta12366",-2144229141,null)], null);
}));

(cljs.core.async.t_cljs$core$async12365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12365");

(cljs.core.async.t_cljs$core$async12365.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12365.
 */
cljs.core.async.__GT_t_cljs$core$async12365 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12365(f__$1,ch__$1,meta12366){
return (new cljs.core.async.t_cljs$core$async12365(f__$1,ch__$1,meta12366));
});

}

return (new cljs.core.async.t_cljs$core$async12365(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12385 = (function (f,ch,meta12386){
this.f = f;
this.ch = ch;
this.meta12386 = meta12386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12387,meta12386__$1){
var self__ = this;
var _12387__$1 = this;
return (new cljs.core.async.t_cljs$core$async12385(self__.f,self__.ch,meta12386__$1));
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12387){
var self__ = this;
var _12387__$1 = this;
return self__.meta12386;
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12386","meta12386",-2031952366,null)], null);
}));

(cljs.core.async.t_cljs$core$async12385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12385");

(cljs.core.async.t_cljs$core$async12385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12385.
 */
cljs.core.async.__GT_t_cljs$core$async12385 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12385(f__$1,ch__$1,meta12386){
return (new cljs.core.async.t_cljs$core$async12385(f__$1,ch__$1,meta12386));
});

}

return (new cljs.core.async.t_cljs$core$async12385(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12401 = (function (p,ch,meta12402){
this.p = p;
this.ch = ch;
this.meta12402 = meta12402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12403,meta12402__$1){
var self__ = this;
var _12403__$1 = this;
return (new cljs.core.async.t_cljs$core$async12401(self__.p,self__.ch,meta12402__$1));
}));

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12403){
var self__ = this;
var _12403__$1 = this;
return self__.meta12402;
}));

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12402","meta12402",-950984863,null)], null);
}));

(cljs.core.async.t_cljs$core$async12401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12401");

(cljs.core.async.t_cljs$core$async12401.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12401.
 */
cljs.core.async.__GT_t_cljs$core$async12401 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12401(p__$1,ch__$1,meta12402){
return (new cljs.core.async.t_cljs$core$async12401(p__$1,ch__$1,meta12402));
});

}

return (new cljs.core.async.t_cljs$core$async12401(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12407 = arguments.length;
switch (G__12407) {
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
var c__10939__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12445){
var state_val_12446 = (state_12445[(1)]);
if((state_val_12446 === (7))){
var inst_12441 = (state_12445[(2)]);
var state_12445__$1 = state_12445;
var statearr_12447_13395 = state_12445__$1;
(statearr_12447_13395[(2)] = inst_12441);

(statearr_12447_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (1))){
var state_12445__$1 = state_12445;
var statearr_12448_13396 = state_12445__$1;
(statearr_12448_13396[(2)] = null);

(statearr_12448_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (4))){
var inst_12410 = (state_12445[(7)]);
var inst_12410__$1 = (state_12445[(2)]);
var inst_12411 = (inst_12410__$1 == null);
var state_12445__$1 = (function (){var statearr_12449 = state_12445;
(statearr_12449[(7)] = inst_12410__$1);

return statearr_12449;
})();
if(cljs.core.truth_(inst_12411)){
var statearr_12450_13397 = state_12445__$1;
(statearr_12450_13397[(1)] = (5));

} else {
var statearr_12451_13398 = state_12445__$1;
(statearr_12451_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (6))){
var inst_12410 = (state_12445[(7)]);
var inst_12415 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12410) : p.call(null,inst_12410));
var state_12445__$1 = state_12445;
if(cljs.core.truth_(inst_12415)){
var statearr_12452_13399 = state_12445__$1;
(statearr_12452_13399[(1)] = (8));

} else {
var statearr_12453_13400 = state_12445__$1;
(statearr_12453_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (3))){
var inst_12443 = (state_12445[(2)]);
var state_12445__$1 = state_12445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12445__$1,inst_12443);
} else {
if((state_val_12446 === (2))){
var state_12445__$1 = state_12445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12445__$1,(4),ch);
} else {
if((state_val_12446 === (11))){
var inst_12435 = (state_12445[(2)]);
var state_12445__$1 = state_12445;
var statearr_12454_13401 = state_12445__$1;
(statearr_12454_13401[(2)] = inst_12435);

(statearr_12454_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (9))){
var state_12445__$1 = state_12445;
var statearr_12455_13402 = state_12445__$1;
(statearr_12455_13402[(2)] = null);

(statearr_12455_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (5))){
var inst_12413 = cljs.core.async.close_BANG_(out);
var state_12445__$1 = state_12445;
var statearr_12456_13403 = state_12445__$1;
(statearr_12456_13403[(2)] = inst_12413);

(statearr_12456_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (10))){
var inst_12438 = (state_12445[(2)]);
var state_12445__$1 = (function (){var statearr_12457 = state_12445;
(statearr_12457[(8)] = inst_12438);

return statearr_12457;
})();
var statearr_12458_13404 = state_12445__$1;
(statearr_12458_13404[(2)] = null);

(statearr_12458_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12446 === (8))){
var inst_12410 = (state_12445[(7)]);
var state_12445__$1 = state_12445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12445__$1,(11),out,inst_12410);
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
var statearr_12459 = [null,null,null,null,null,null,null,null,null];
(statearr_12459[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12459[(1)] = (1));

return statearr_12459;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12445){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12445);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12460){var ex__10883__auto__ = e12460;
var statearr_12461_13405 = state_12445;
(statearr_12461_13405[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12445[(4)]))){
var statearr_12475_13406 = state_12445;
(statearr_12475_13406[(1)] = cljs.core.first((state_12445[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12445;
state_12445 = G__13407;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12476 = f__10940__auto__();
(statearr_12476[(6)] = c__10939__auto___13394);

return statearr_12476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12478 = arguments.length;
switch (G__12478) {
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
var c__10939__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12545){
var state_val_12546 = (state_12545[(1)]);
if((state_val_12546 === (7))){
var inst_12541 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
var statearr_12547_13409 = state_12545__$1;
(statearr_12547_13409[(2)] = inst_12541);

(statearr_12547_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (20))){
var inst_12506 = (state_12545[(7)]);
var inst_12517 = (state_12545[(2)]);
var inst_12518 = cljs.core.next(inst_12506);
var inst_12492 = inst_12518;
var inst_12493 = null;
var inst_12494 = (0);
var inst_12495 = (0);
var state_12545__$1 = (function (){var statearr_12549 = state_12545;
(statearr_12549[(8)] = inst_12495);

(statearr_12549[(9)] = inst_12494);

(statearr_12549[(10)] = inst_12517);

(statearr_12549[(11)] = inst_12493);

(statearr_12549[(12)] = inst_12492);

return statearr_12549;
})();
var statearr_12550_13410 = state_12545__$1;
(statearr_12550_13410[(2)] = null);

(statearr_12550_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (1))){
var state_12545__$1 = state_12545;
var statearr_12551_13411 = state_12545__$1;
(statearr_12551_13411[(2)] = null);

(statearr_12551_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (4))){
var inst_12481 = (state_12545[(13)]);
var inst_12481__$1 = (state_12545[(2)]);
var inst_12482 = (inst_12481__$1 == null);
var state_12545__$1 = (function (){var statearr_12552 = state_12545;
(statearr_12552[(13)] = inst_12481__$1);

return statearr_12552;
})();
if(cljs.core.truth_(inst_12482)){
var statearr_12553_13412 = state_12545__$1;
(statearr_12553_13412[(1)] = (5));

} else {
var statearr_12554_13413 = state_12545__$1;
(statearr_12554_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (15))){
var state_12545__$1 = state_12545;
var statearr_12558_13414 = state_12545__$1;
(statearr_12558_13414[(2)] = null);

(statearr_12558_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (21))){
var state_12545__$1 = state_12545;
var statearr_12559_13415 = state_12545__$1;
(statearr_12559_13415[(2)] = null);

(statearr_12559_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (13))){
var inst_12495 = (state_12545[(8)]);
var inst_12494 = (state_12545[(9)]);
var inst_12493 = (state_12545[(11)]);
var inst_12492 = (state_12545[(12)]);
var inst_12502 = (state_12545[(2)]);
var inst_12503 = (inst_12495 + (1));
var tmp12555 = inst_12494;
var tmp12556 = inst_12493;
var tmp12557 = inst_12492;
var inst_12492__$1 = tmp12557;
var inst_12493__$1 = tmp12556;
var inst_12494__$1 = tmp12555;
var inst_12495__$1 = inst_12503;
var state_12545__$1 = (function (){var statearr_12560 = state_12545;
(statearr_12560[(8)] = inst_12495__$1);

(statearr_12560[(14)] = inst_12502);

(statearr_12560[(9)] = inst_12494__$1);

(statearr_12560[(11)] = inst_12493__$1);

(statearr_12560[(12)] = inst_12492__$1);

return statearr_12560;
})();
var statearr_12561_13416 = state_12545__$1;
(statearr_12561_13416[(2)] = null);

(statearr_12561_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (22))){
var state_12545__$1 = state_12545;
var statearr_12562_13417 = state_12545__$1;
(statearr_12562_13417[(2)] = null);

(statearr_12562_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (6))){
var inst_12481 = (state_12545[(13)]);
var inst_12490 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12481) : f.call(null,inst_12481));
var inst_12491 = cljs.core.seq(inst_12490);
var inst_12492 = inst_12491;
var inst_12493 = null;
var inst_12494 = (0);
var inst_12495 = (0);
var state_12545__$1 = (function (){var statearr_12563 = state_12545;
(statearr_12563[(8)] = inst_12495);

(statearr_12563[(9)] = inst_12494);

(statearr_12563[(11)] = inst_12493);

(statearr_12563[(12)] = inst_12492);

return statearr_12563;
})();
var statearr_12564_13418 = state_12545__$1;
(statearr_12564_13418[(2)] = null);

(statearr_12564_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (17))){
var inst_12506 = (state_12545[(7)]);
var inst_12510 = cljs.core.chunk_first(inst_12506);
var inst_12511 = cljs.core.chunk_rest(inst_12506);
var inst_12512 = cljs.core.count(inst_12510);
var inst_12492 = inst_12511;
var inst_12493 = inst_12510;
var inst_12494 = inst_12512;
var inst_12495 = (0);
var state_12545__$1 = (function (){var statearr_12565 = state_12545;
(statearr_12565[(8)] = inst_12495);

(statearr_12565[(9)] = inst_12494);

(statearr_12565[(11)] = inst_12493);

(statearr_12565[(12)] = inst_12492);

return statearr_12565;
})();
var statearr_12566_13419 = state_12545__$1;
(statearr_12566_13419[(2)] = null);

(statearr_12566_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (3))){
var inst_12543 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12545__$1,inst_12543);
} else {
if((state_val_12546 === (12))){
var inst_12526 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
var statearr_12567_13420 = state_12545__$1;
(statearr_12567_13420[(2)] = inst_12526);

(statearr_12567_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (2))){
var state_12545__$1 = state_12545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12545__$1,(4),in$);
} else {
if((state_val_12546 === (23))){
var inst_12539 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
var statearr_12569_13421 = state_12545__$1;
(statearr_12569_13421[(2)] = inst_12539);

(statearr_12569_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (19))){
var inst_12521 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
var statearr_12570_13422 = state_12545__$1;
(statearr_12570_13422[(2)] = inst_12521);

(statearr_12570_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (11))){
var inst_12506 = (state_12545[(7)]);
var inst_12492 = (state_12545[(12)]);
var inst_12506__$1 = cljs.core.seq(inst_12492);
var state_12545__$1 = (function (){var statearr_12572 = state_12545;
(statearr_12572[(7)] = inst_12506__$1);

return statearr_12572;
})();
if(inst_12506__$1){
var statearr_12573_13423 = state_12545__$1;
(statearr_12573_13423[(1)] = (14));

} else {
var statearr_12574_13424 = state_12545__$1;
(statearr_12574_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (9))){
var inst_12528 = (state_12545[(2)]);
var inst_12534 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12545__$1 = (function (){var statearr_12575 = state_12545;
(statearr_12575[(15)] = inst_12528);

return statearr_12575;
})();
if(cljs.core.truth_(inst_12534)){
var statearr_12576_13425 = state_12545__$1;
(statearr_12576_13425[(1)] = (21));

} else {
var statearr_12580_13426 = state_12545__$1;
(statearr_12580_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (5))){
var inst_12484 = cljs.core.async.close_BANG_(out);
var state_12545__$1 = state_12545;
var statearr_12582_13427 = state_12545__$1;
(statearr_12582_13427[(2)] = inst_12484);

(statearr_12582_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (14))){
var inst_12506 = (state_12545[(7)]);
var inst_12508 = cljs.core.chunked_seq_QMARK_(inst_12506);
var state_12545__$1 = state_12545;
if(inst_12508){
var statearr_12584_13428 = state_12545__$1;
(statearr_12584_13428[(1)] = (17));

} else {
var statearr_12585_13429 = state_12545__$1;
(statearr_12585_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (16))){
var inst_12524 = (state_12545[(2)]);
var state_12545__$1 = state_12545;
var statearr_12586_13430 = state_12545__$1;
(statearr_12586_13430[(2)] = inst_12524);

(statearr_12586_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12546 === (10))){
var inst_12495 = (state_12545[(8)]);
var inst_12493 = (state_12545[(11)]);
var inst_12500 = cljs.core._nth(inst_12493,inst_12495);
var state_12545__$1 = state_12545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12545__$1,(13),out,inst_12500);
} else {
if((state_val_12546 === (18))){
var inst_12506 = (state_12545[(7)]);
var inst_12515 = cljs.core.first(inst_12506);
var state_12545__$1 = state_12545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12545__$1,(20),out,inst_12515);
} else {
if((state_val_12546 === (8))){
var inst_12495 = (state_12545[(8)]);
var inst_12494 = (state_12545[(9)]);
var inst_12497 = (inst_12495 < inst_12494);
var inst_12498 = inst_12497;
var state_12545__$1 = state_12545;
if(cljs.core.truth_(inst_12498)){
var statearr_12588_13431 = state_12545__$1;
(statearr_12588_13431[(1)] = (10));

} else {
var statearr_12589_13432 = state_12545__$1;
(statearr_12589_13432[(1)] = (11));

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
var statearr_12591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12591[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__);

(statearr_12591[(1)] = (1));

return statearr_12591;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1 = (function (state_12545){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12545);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12592){var ex__10883__auto__ = e12592;
var statearr_12593_13433 = state_12545;
(statearr_12593_13433[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12545[(4)]))){
var statearr_12594_13434 = state_12545;
(statearr_12594_13434[(1)] = cljs.core.first((state_12545[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12545;
state_12545 = G__13435;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__ = function(state_12545){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1.call(this,state_12545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12595 = f__10940__auto__();
(statearr_12595[(6)] = c__10939__auto__);

return statearr_12595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));

return c__10939__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12597 = arguments.length;
switch (G__12597) {
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
var G__12623 = arguments.length;
switch (G__12623) {
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
var G__12631 = arguments.length;
switch (G__12631) {
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
var c__10939__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12659){
var state_val_12660 = (state_12659[(1)]);
if((state_val_12660 === (7))){
var inst_12654 = (state_12659[(2)]);
var state_12659__$1 = state_12659;
var statearr_12682_13440 = state_12659__$1;
(statearr_12682_13440[(2)] = inst_12654);

(statearr_12682_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12660 === (1))){
var inst_12636 = null;
var state_12659__$1 = (function (){var statearr_12687 = state_12659;
(statearr_12687[(7)] = inst_12636);

return statearr_12687;
})();
var statearr_12688_13441 = state_12659__$1;
(statearr_12688_13441[(2)] = null);

(statearr_12688_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12660 === (4))){
var inst_12639 = (state_12659[(8)]);
var inst_12639__$1 = (state_12659[(2)]);
var inst_12640 = (inst_12639__$1 == null);
var inst_12641 = cljs.core.not(inst_12640);
var state_12659__$1 = (function (){var statearr_12689 = state_12659;
(statearr_12689[(8)] = inst_12639__$1);

return statearr_12689;
})();
if(inst_12641){
var statearr_12690_13442 = state_12659__$1;
(statearr_12690_13442[(1)] = (5));

} else {
var statearr_12691_13443 = state_12659__$1;
(statearr_12691_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12660 === (6))){
var state_12659__$1 = state_12659;
var statearr_12692_13444 = state_12659__$1;
(statearr_12692_13444[(2)] = null);

(statearr_12692_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12660 === (3))){
var inst_12656 = (state_12659[(2)]);
var inst_12657 = cljs.core.async.close_BANG_(out);
var state_12659__$1 = (function (){var statearr_12696 = state_12659;
(statearr_12696[(9)] = inst_12656);

return statearr_12696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12659__$1,inst_12657);
} else {
if((state_val_12660 === (2))){
var state_12659__$1 = state_12659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12659__$1,(4),ch);
} else {
if((state_val_12660 === (11))){
var inst_12639 = (state_12659[(8)]);
var inst_12648 = (state_12659[(2)]);
var inst_12636 = inst_12639;
var state_12659__$1 = (function (){var statearr_12698 = state_12659;
(statearr_12698[(10)] = inst_12648);

(statearr_12698[(7)] = inst_12636);

return statearr_12698;
})();
var statearr_12699_13445 = state_12659__$1;
(statearr_12699_13445[(2)] = null);

(statearr_12699_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12660 === (9))){
var inst_12639 = (state_12659[(8)]);
var state_12659__$1 = state_12659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12659__$1,(11),out,inst_12639);
} else {
if((state_val_12660 === (5))){
var inst_12636 = (state_12659[(7)]);
var inst_12639 = (state_12659[(8)]);
var inst_12643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12639,inst_12636);
var state_12659__$1 = state_12659;
if(inst_12643){
var statearr_12701_13446 = state_12659__$1;
(statearr_12701_13446[(1)] = (8));

} else {
var statearr_12702_13447 = state_12659__$1;
(statearr_12702_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12660 === (10))){
var inst_12651 = (state_12659[(2)]);
var state_12659__$1 = state_12659;
var statearr_12703_13448 = state_12659__$1;
(statearr_12703_13448[(2)] = inst_12651);

(statearr_12703_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12660 === (8))){
var inst_12636 = (state_12659[(7)]);
var tmp12700 = inst_12636;
var inst_12636__$1 = tmp12700;
var state_12659__$1 = (function (){var statearr_12704 = state_12659;
(statearr_12704[(7)] = inst_12636__$1);

return statearr_12704;
})();
var statearr_12705_13449 = state_12659__$1;
(statearr_12705_13449[(2)] = null);

(statearr_12705_13449[(1)] = (2));


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
var statearr_12714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12714[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12714[(1)] = (1));

return statearr_12714;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12659){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12659);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12719){var ex__10883__auto__ = e12719;
var statearr_12720_13450 = state_12659;
(statearr_12720_13450[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12659[(4)]))){
var statearr_12721_13451 = state_12659;
(statearr_12721_13451[(1)] = cljs.core.first((state_12659[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12659;
state_12659 = G__13452;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12722 = f__10940__auto__();
(statearr_12722[(6)] = c__10939__auto___13439);

return statearr_12722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12746 = arguments.length;
switch (G__12746) {
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
var c__10939__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12786){
var state_val_12787 = (state_12786[(1)]);
if((state_val_12787 === (7))){
var inst_12782 = (state_12786[(2)]);
var state_12786__$1 = state_12786;
var statearr_12794_13455 = state_12786__$1;
(statearr_12794_13455[(2)] = inst_12782);

(statearr_12794_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (1))){
var inst_12749 = (new Array(n));
var inst_12750 = inst_12749;
var inst_12751 = (0);
var state_12786__$1 = (function (){var statearr_12798 = state_12786;
(statearr_12798[(7)] = inst_12750);

(statearr_12798[(8)] = inst_12751);

return statearr_12798;
})();
var statearr_12799_13456 = state_12786__$1;
(statearr_12799_13456[(2)] = null);

(statearr_12799_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (4))){
var inst_12754 = (state_12786[(9)]);
var inst_12754__$1 = (state_12786[(2)]);
var inst_12755 = (inst_12754__$1 == null);
var inst_12756 = cljs.core.not(inst_12755);
var state_12786__$1 = (function (){var statearr_12800 = state_12786;
(statearr_12800[(9)] = inst_12754__$1);

return statearr_12800;
})();
if(inst_12756){
var statearr_12801_13457 = state_12786__$1;
(statearr_12801_13457[(1)] = (5));

} else {
var statearr_12802_13458 = state_12786__$1;
(statearr_12802_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (15))){
var inst_12776 = (state_12786[(2)]);
var state_12786__$1 = state_12786;
var statearr_12803_13459 = state_12786__$1;
(statearr_12803_13459[(2)] = inst_12776);

(statearr_12803_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (13))){
var state_12786__$1 = state_12786;
var statearr_12804_13460 = state_12786__$1;
(statearr_12804_13460[(2)] = null);

(statearr_12804_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (6))){
var inst_12751 = (state_12786[(8)]);
var inst_12772 = (inst_12751 > (0));
var state_12786__$1 = state_12786;
if(cljs.core.truth_(inst_12772)){
var statearr_12805_13461 = state_12786__$1;
(statearr_12805_13461[(1)] = (12));

} else {
var statearr_12806_13462 = state_12786__$1;
(statearr_12806_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (3))){
var inst_12784 = (state_12786[(2)]);
var state_12786__$1 = state_12786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12786__$1,inst_12784);
} else {
if((state_val_12787 === (12))){
var inst_12750 = (state_12786[(7)]);
var inst_12774 = cljs.core.vec(inst_12750);
var state_12786__$1 = state_12786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12786__$1,(15),out,inst_12774);
} else {
if((state_val_12787 === (2))){
var state_12786__$1 = state_12786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12786__$1,(4),ch);
} else {
if((state_val_12787 === (11))){
var inst_12766 = (state_12786[(2)]);
var inst_12767 = (new Array(n));
var inst_12750 = inst_12767;
var inst_12751 = (0);
var state_12786__$1 = (function (){var statearr_12807 = state_12786;
(statearr_12807[(7)] = inst_12750);

(statearr_12807[(10)] = inst_12766);

(statearr_12807[(8)] = inst_12751);

return statearr_12807;
})();
var statearr_12808_13463 = state_12786__$1;
(statearr_12808_13463[(2)] = null);

(statearr_12808_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (9))){
var inst_12750 = (state_12786[(7)]);
var inst_12764 = cljs.core.vec(inst_12750);
var state_12786__$1 = state_12786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12786__$1,(11),out,inst_12764);
} else {
if((state_val_12787 === (5))){
var inst_12750 = (state_12786[(7)]);
var inst_12754 = (state_12786[(9)]);
var inst_12751 = (state_12786[(8)]);
var inst_12759 = (state_12786[(11)]);
var inst_12758 = (inst_12750[inst_12751] = inst_12754);
var inst_12759__$1 = (inst_12751 + (1));
var inst_12760 = (inst_12759__$1 < n);
var state_12786__$1 = (function (){var statearr_12809 = state_12786;
(statearr_12809[(12)] = inst_12758);

(statearr_12809[(11)] = inst_12759__$1);

return statearr_12809;
})();
if(cljs.core.truth_(inst_12760)){
var statearr_12810_13464 = state_12786__$1;
(statearr_12810_13464[(1)] = (8));

} else {
var statearr_12811_13465 = state_12786__$1;
(statearr_12811_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (14))){
var inst_12779 = (state_12786[(2)]);
var inst_12780 = cljs.core.async.close_BANG_(out);
var state_12786__$1 = (function (){var statearr_12813 = state_12786;
(statearr_12813[(13)] = inst_12779);

return statearr_12813;
})();
var statearr_12814_13466 = state_12786__$1;
(statearr_12814_13466[(2)] = inst_12780);

(statearr_12814_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (10))){
var inst_12770 = (state_12786[(2)]);
var state_12786__$1 = state_12786;
var statearr_12815_13467 = state_12786__$1;
(statearr_12815_13467[(2)] = inst_12770);

(statearr_12815_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12787 === (8))){
var inst_12750 = (state_12786[(7)]);
var inst_12759 = (state_12786[(11)]);
var tmp12812 = inst_12750;
var inst_12750__$1 = tmp12812;
var inst_12751 = inst_12759;
var state_12786__$1 = (function (){var statearr_12816 = state_12786;
(statearr_12816[(7)] = inst_12750__$1);

(statearr_12816[(8)] = inst_12751);

return statearr_12816;
})();
var statearr_12817_13468 = state_12786__$1;
(statearr_12817_13468[(2)] = null);

(statearr_12817_13468[(1)] = (2));


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
var statearr_12818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12818[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12818[(1)] = (1));

return statearr_12818;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12786){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12786);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12819){var ex__10883__auto__ = e12819;
var statearr_12820_13469 = state_12786;
(statearr_12820_13469[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12786[(4)]))){
var statearr_12821_13470 = state_12786;
(statearr_12821_13470[(1)] = cljs.core.first((state_12786[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12786;
state_12786 = G__13471;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12822 = f__10940__auto__();
(statearr_12822[(6)] = c__10939__auto___13454);

return statearr_12822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12827 = arguments.length;
switch (G__12827) {
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
var c__10939__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10940__auto__ = (function (){var switch__10879__auto__ = (function (state_12870){
var state_val_12871 = (state_12870[(1)]);
if((state_val_12871 === (7))){
var inst_12866 = (state_12870[(2)]);
var state_12870__$1 = state_12870;
var statearr_12872_13474 = state_12870__$1;
(statearr_12872_13474[(2)] = inst_12866);

(statearr_12872_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (1))){
var inst_12829 = [];
var inst_12830 = inst_12829;
var inst_12831 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12870__$1 = (function (){var statearr_12874 = state_12870;
(statearr_12874[(7)] = inst_12831);

(statearr_12874[(8)] = inst_12830);

return statearr_12874;
})();
var statearr_12875_13475 = state_12870__$1;
(statearr_12875_13475[(2)] = null);

(statearr_12875_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (4))){
var inst_12834 = (state_12870[(9)]);
var inst_12834__$1 = (state_12870[(2)]);
var inst_12835 = (inst_12834__$1 == null);
var inst_12836 = cljs.core.not(inst_12835);
var state_12870__$1 = (function (){var statearr_12877 = state_12870;
(statearr_12877[(9)] = inst_12834__$1);

return statearr_12877;
})();
if(inst_12836){
var statearr_12883_13476 = state_12870__$1;
(statearr_12883_13476[(1)] = (5));

} else {
var statearr_12884_13477 = state_12870__$1;
(statearr_12884_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (15))){
var inst_12860 = (state_12870[(2)]);
var state_12870__$1 = state_12870;
var statearr_12886_13478 = state_12870__$1;
(statearr_12886_13478[(2)] = inst_12860);

(statearr_12886_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (13))){
var state_12870__$1 = state_12870;
var statearr_12887_13479 = state_12870__$1;
(statearr_12887_13479[(2)] = null);

(statearr_12887_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (6))){
var inst_12830 = (state_12870[(8)]);
var inst_12855 = inst_12830.length;
var inst_12856 = (inst_12855 > (0));
var state_12870__$1 = state_12870;
if(cljs.core.truth_(inst_12856)){
var statearr_12888_13480 = state_12870__$1;
(statearr_12888_13480[(1)] = (12));

} else {
var statearr_12889_13481 = state_12870__$1;
(statearr_12889_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (3))){
var inst_12868 = (state_12870[(2)]);
var state_12870__$1 = state_12870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12870__$1,inst_12868);
} else {
if((state_val_12871 === (12))){
var inst_12830 = (state_12870[(8)]);
var inst_12858 = cljs.core.vec(inst_12830);
var state_12870__$1 = state_12870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12870__$1,(15),out,inst_12858);
} else {
if((state_val_12871 === (2))){
var state_12870__$1 = state_12870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12870__$1,(4),ch);
} else {
if((state_val_12871 === (11))){
var inst_12834 = (state_12870[(9)]);
var inst_12838 = (state_12870[(10)]);
var inst_12848 = (state_12870[(2)]);
var inst_12849 = [];
var inst_12850 = inst_12849.push(inst_12834);
var inst_12830 = inst_12849;
var inst_12831 = inst_12838;
var state_12870__$1 = (function (){var statearr_12890 = state_12870;
(statearr_12890[(11)] = inst_12848);

(statearr_12890[(7)] = inst_12831);

(statearr_12890[(12)] = inst_12850);

(statearr_12890[(8)] = inst_12830);

return statearr_12890;
})();
var statearr_12893_13482 = state_12870__$1;
(statearr_12893_13482[(2)] = null);

(statearr_12893_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (9))){
var inst_12830 = (state_12870[(8)]);
var inst_12846 = cljs.core.vec(inst_12830);
var state_12870__$1 = state_12870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12870__$1,(11),out,inst_12846);
} else {
if((state_val_12871 === (5))){
var inst_12834 = (state_12870[(9)]);
var inst_12838 = (state_12870[(10)]);
var inst_12831 = (state_12870[(7)]);
var inst_12838__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12834) : f.call(null,inst_12834));
var inst_12839 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12838__$1,inst_12831);
var inst_12840 = cljs.core.keyword_identical_QMARK_(inst_12831,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12841 = ((inst_12839) || (inst_12840));
var state_12870__$1 = (function (){var statearr_12895 = state_12870;
(statearr_12895[(10)] = inst_12838__$1);

return statearr_12895;
})();
if(cljs.core.truth_(inst_12841)){
var statearr_12896_13483 = state_12870__$1;
(statearr_12896_13483[(1)] = (8));

} else {
var statearr_12898_13484 = state_12870__$1;
(statearr_12898_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (14))){
var inst_12863 = (state_12870[(2)]);
var inst_12864 = cljs.core.async.close_BANG_(out);
var state_12870__$1 = (function (){var statearr_12916 = state_12870;
(statearr_12916[(13)] = inst_12863);

return statearr_12916;
})();
var statearr_12919_13485 = state_12870__$1;
(statearr_12919_13485[(2)] = inst_12864);

(statearr_12919_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (10))){
var inst_12853 = (state_12870[(2)]);
var state_12870__$1 = state_12870;
var statearr_12928_13486 = state_12870__$1;
(statearr_12928_13486[(2)] = inst_12853);

(statearr_12928_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12871 === (8))){
var inst_12834 = (state_12870[(9)]);
var inst_12838 = (state_12870[(10)]);
var inst_12830 = (state_12870[(8)]);
var inst_12843 = inst_12830.push(inst_12834);
var tmp12911 = inst_12830;
var inst_12830__$1 = tmp12911;
var inst_12831 = inst_12838;
var state_12870__$1 = (function (){var statearr_12937 = state_12870;
(statearr_12937[(7)] = inst_12831);

(statearr_12937[(14)] = inst_12843);

(statearr_12937[(8)] = inst_12830__$1);

return statearr_12937;
})();
var statearr_12939_13487 = state_12870__$1;
(statearr_12939_13487[(2)] = null);

(statearr_12939_13487[(1)] = (2));


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
var statearr_12951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12951[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12951[(1)] = (1));

return statearr_12951;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12870){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__(state_12870);
if(cljs.core.keyword_identical_QMARK_(result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12957){var ex__10883__auto__ = e12957;
var statearr_12958_13488 = state_12870;
(statearr_12958_13488[(2)] = ex__10883__auto__);


if(cljs.core.seq((state_12870[(4)]))){
var statearr_12959_13489 = state_12870;
(statearr_12959_13489[(1)] = cljs.core.first((state_12870[(4)])));

} else {
throw ex__10883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12870;
state_12870 = G__13490;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
})();
var state__10941__auto__ = (function (){var statearr_12961 = f__10940__auto__();
(statearr_12961[(6)] = c__10939__auto___13473);

return statearr_12961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10941__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
