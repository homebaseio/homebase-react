goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11005 = arguments.length;
switch (G__11005) {
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
var G__11022 = arguments.length;
switch (G__11022) {
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
var G__11025 = arguments.length;
switch (G__11025) {
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
var val_12908 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12908) : fn1.call(null,val_12908));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12908) : fn1.call(null,val_12908));
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
var G__11027 = arguments.length;
switch (G__11027) {
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
var n__4613__auto___12910 = n;
var x_12911 = (0);
while(true){
if((x_12911 < n__4613__auto___12910)){
(a[x_12911] = x_12911);

var G__12912 = (x_12911 + (1));
x_12911 = G__12912;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11032 = (function (flag,meta11033){
this.flag = flag;
this.meta11033 = meta11033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11034,meta11033__$1){
var self__ = this;
var _11034__$1 = this;
return (new cljs.core.async.t_cljs$core$async11032(self__.flag,meta11033__$1));
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
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11033","meta11033",-18419321,null)], null);
}));

(cljs.core.async.t_cljs$core$async11032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11032");

(cljs.core.async.t_cljs$core$async11032.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11032.
 */
cljs.core.async.__GT_t_cljs$core$async11032 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11032(flag__$1,meta11033){
return (new cljs.core.async.t_cljs$core$async11032(flag__$1,meta11033));
});

}

return (new cljs.core.async.t_cljs$core$async11032(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11035 = (function (flag,cb,meta11036){
this.flag = flag;
this.cb = cb;
this.meta11036 = meta11036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11037,meta11036__$1){
var self__ = this;
var _11037__$1 = this;
return (new cljs.core.async.t_cljs$core$async11035(self__.flag,self__.cb,meta11036__$1));
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11037){
var self__ = this;
var _11037__$1 = this;
return self__.meta11036;
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11036","meta11036",1899986924,null)], null);
}));

(cljs.core.async.t_cljs$core$async11035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11035");

(cljs.core.async.t_cljs$core$async11035.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11035.
 */
cljs.core.async.__GT_t_cljs$core$async11035 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11035(flag__$1,cb__$1,meta11036){
return (new cljs.core.async.t_cljs$core$async11035(flag__$1,cb__$1,meta11036));
});

}

return (new cljs.core.async.t_cljs$core$async11035(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12918 = (i + (1));
i = G__12918;
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
var len__4736__auto___12919 = arguments.length;
var i__4737__auto___12920 = (0);
while(true){
if((i__4737__auto___12920 < len__4736__auto___12919)){
args__4742__auto__.push((arguments[i__4737__auto___12920]));

var G__12921 = (i__4737__auto___12920 + (1));
i__4737__auto___12920 = G__12921;
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
var G__11058 = arguments.length;
switch (G__11058) {
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
var c__10927__auto___12923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11084){
var state_val_11085 = (state_11084[(1)]);
if((state_val_11085 === (7))){
var inst_11080 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11086_12924 = state_11084__$1;
(statearr_11086_12924[(2)] = inst_11080);

(statearr_11086_12924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (1))){
var state_11084__$1 = state_11084;
var statearr_11087_12925 = state_11084__$1;
(statearr_11087_12925[(2)] = null);

(statearr_11087_12925[(1)] = (2));


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
var statearr_11089_12926 = state_11084__$1;
(statearr_11089_12926[(1)] = (5));

} else {
var statearr_11090_12927 = state_11084__$1;
(statearr_11090_12927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (13))){
var state_11084__$1 = state_11084;
var statearr_11091_12928 = state_11084__$1;
(statearr_11091_12928[(2)] = null);

(statearr_11091_12928[(1)] = (14));


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
var statearr_11092_12930 = state_11084__$1;
(statearr_11092_12930[(2)] = null);

(statearr_11092_12930[(1)] = (2));


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
var statearr_11093_12931 = state_11084__$1;
(statearr_11093_12931[(1)] = (12));

} else {
var statearr_11095_12932 = state_11084__$1;
(statearr_11095_12932[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (9))){
var state_11084__$1 = state_11084;
var statearr_11096_12934 = state_11084__$1;
(statearr_11096_12934[(2)] = null);

(statearr_11096_12934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (5))){
var state_11084__$1 = state_11084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11097_12935 = state_11084__$1;
(statearr_11097_12935[(1)] = (8));

} else {
var statearr_11098_12936 = state_11084__$1;
(statearr_11098_12936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (14))){
var inst_11078 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11099_12937 = state_11084__$1;
(statearr_11099_12937[(2)] = inst_11078);

(statearr_11099_12937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (10))){
var inst_11070 = (state_11084[(2)]);
var state_11084__$1 = state_11084;
var statearr_11100_12939 = state_11084__$1;
(statearr_11100_12939[(2)] = inst_11070);

(statearr_11100_12939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11085 === (8))){
var inst_11067 = cljs.core.async.close_BANG_(to);
var state_11084__$1 = state_11084;
var statearr_11101_12940 = state_11084__$1;
(statearr_11101_12940[(2)] = inst_11067);

(statearr_11101_12940[(1)] = (10));


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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_11102 = [null,null,null,null,null,null,null,null];
(statearr_11102[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_11102[(1)] = (1));

return statearr_11102;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_11084){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11084);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11103){var ex__10867__auto__ = e11103;
var statearr_11105_12941 = state_11084;
(statearr_11105_12941[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11084[(4)]))){
var statearr_11106_12943 = state_11084;
(statearr_11106_12943[(1)] = cljs.core.first((state_11084[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12946 = state_11084;
state_11084 = G__12946;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_11084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_11084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11108 = f__10928__auto__();
(statearr_11108[(6)] = c__10927__auto___12923);

return statearr_11108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var process = (function (p__11111){
var vec__11112 = p__11111;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(1),null);
var job = vec__11112;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10927__auto___12947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11119){
var state_val_11120 = (state_11119[(1)]);
if((state_val_11120 === (1))){
var state_11119__$1 = state_11119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11119__$1,(2),res,v);
} else {
if((state_val_11120 === (2))){
var inst_11116 = (state_11119[(2)]);
var inst_11117 = cljs.core.async.close_BANG_(res);
var state_11119__$1 = (function (){var statearr_11121 = state_11119;
(statearr_11121[(7)] = inst_11116);

return statearr_11121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11119__$1,inst_11117);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0 = (function (){
var statearr_11122 = [null,null,null,null,null,null,null,null];
(statearr_11122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__);

(statearr_11122[(1)] = (1));

return statearr_11122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1 = (function (state_11119){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11119);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11123){var ex__10867__auto__ = e11123;
var statearr_11124_12948 = state_11119;
(statearr_11124_12948[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11119[(4)]))){
var statearr_11125_12949 = state_11119;
(statearr_11125_12949[(1)] = cljs.core.first((state_11119[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12950 = state_11119;
state_11119 = G__12950;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = function(state_11119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1.call(this,state_11119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11126 = f__10928__auto__();
(statearr_11126[(6)] = c__10927__auto___12947);

return statearr_11126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var n__4613__auto___12951 = n;
var __12952 = (0);
while(true){
if((__12952 < n__4613__auto___12951)){
var G__11139_12953 = type;
var G__11139_12954__$1 = (((G__11139_12953 instanceof cljs.core.Keyword))?G__11139_12953.fqn:null);
switch (G__11139_12954__$1) {
case "compute":
var c__10927__auto___12956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12952,c__10927__auto___12956,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async){
return (function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = ((function (__12952,c__10927__auto___12956,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async){
return (function (state_11152){
var state_val_11153 = (state_11152[(1)]);
if((state_val_11153 === (1))){
var state_11152__$1 = state_11152;
var statearr_11154_12957 = state_11152__$1;
(statearr_11154_12957[(2)] = null);

(statearr_11154_12957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (2))){
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11152__$1,(4),jobs);
} else {
if((state_val_11153 === (3))){
var inst_11150 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11152__$1,inst_11150);
} else {
if((state_val_11153 === (4))){
var inst_11142 = (state_11152[(2)]);
var inst_11143 = process(inst_11142);
var state_11152__$1 = state_11152;
if(cljs.core.truth_(inst_11143)){
var statearr_11155_12958 = state_11152__$1;
(statearr_11155_12958[(1)] = (5));

} else {
var statearr_11157_12959 = state_11152__$1;
(statearr_11157_12959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (5))){
var state_11152__$1 = state_11152;
var statearr_11158_12960 = state_11152__$1;
(statearr_11158_12960[(2)] = null);

(statearr_11158_12960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (6))){
var state_11152__$1 = state_11152;
var statearr_11159_12961 = state_11152__$1;
(statearr_11159_12961[(2)] = null);

(statearr_11159_12961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (7))){
var inst_11148 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11160_12962 = state_11152__$1;
(statearr_11160_12962[(2)] = inst_11148);

(statearr_11160_12962[(1)] = (3));


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
});})(__12952,c__10927__auto___12956,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async))
;
return ((function (__12952,switch__10863__auto__,c__10927__auto___12956,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0 = (function (){
var statearr_11161 = [null,null,null,null,null,null,null];
(statearr_11161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__);

(statearr_11161[(1)] = (1));

return statearr_11161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1 = (function (state_11152){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11152);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11162){var ex__10867__auto__ = e11162;
var statearr_11163_12970 = state_11152;
(statearr_11163_12970[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11152[(4)]))){
var statearr_11164_12975 = state_11152;
(statearr_11164_12975[(1)] = cljs.core.first((state_11152[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12979 = state_11152;
state_11152 = G__12979;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = function(state_11152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1.call(this,state_11152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__;
})()
;})(__12952,switch__10863__auto__,c__10927__auto___12956,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async))
})();
var state__10929__auto__ = (function (){var statearr_11165 = f__10928__auto__();
(statearr_11165[(6)] = c__10927__auto___12956);

return statearr_11165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
});})(__12952,c__10927__auto___12956,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async))
);


break;
case "async":
var c__10927__auto___12987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12952,c__10927__auto___12987,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async){
return (function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = ((function (__12952,c__10927__auto___12987,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async){
return (function (state_11178){
var state_val_11179 = (state_11178[(1)]);
if((state_val_11179 === (1))){
var state_11178__$1 = state_11178;
var statearr_11180_12996 = state_11178__$1;
(statearr_11180_12996[(2)] = null);

(statearr_11180_12996[(1)] = (2));


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
var statearr_11183_13009 = state_11178__$1;
(statearr_11183_13009[(1)] = (5));

} else {
var statearr_11184_13010 = state_11178__$1;
(statearr_11184_13010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (5))){
var state_11178__$1 = state_11178;
var statearr_11185_13016 = state_11178__$1;
(statearr_11185_13016[(2)] = null);

(statearr_11185_13016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (6))){
var state_11178__$1 = state_11178;
var statearr_11194_13017 = state_11178__$1;
(statearr_11194_13017[(2)] = null);

(statearr_11194_13017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (7))){
var inst_11174 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11195_13018 = state_11178__$1;
(statearr_11195_13018[(2)] = inst_11174);

(statearr_11195_13018[(1)] = (3));


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
});})(__12952,c__10927__auto___12987,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async))
;
return ((function (__12952,switch__10863__auto__,c__10927__auto___12987,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0 = (function (){
var statearr_11196 = [null,null,null,null,null,null,null];
(statearr_11196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__);

(statearr_11196[(1)] = (1));

return statearr_11196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1 = (function (state_11178){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11178);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11197){var ex__10867__auto__ = e11197;
var statearr_11198_13020 = state_11178;
(statearr_11198_13020[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11178[(4)]))){
var statearr_11199_13021 = state_11178;
(statearr_11199_13021[(1)] = cljs.core.first((state_11178[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13022 = state_11178;
state_11178 = G__13022;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = function(state_11178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1.call(this,state_11178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__;
})()
;})(__12952,switch__10863__auto__,c__10927__auto___12987,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async))
})();
var state__10929__auto__ = (function (){var statearr_11200 = f__10928__auto__();
(statearr_11200[(6)] = c__10927__auto___12987);

return statearr_11200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
});})(__12952,c__10927__auto___12987,G__11139_12953,G__11139_12954__$1,n__4613__auto___12951,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11139_12954__$1)].join('')));

}

var G__13023 = (__12952 + (1));
__12952 = G__13023;
continue;
} else {
}
break;
}

var c__10927__auto___13024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11223){
var state_val_11224 = (state_11223[(1)]);
if((state_val_11224 === (7))){
var inst_11219 = (state_11223[(2)]);
var state_11223__$1 = state_11223;
var statearr_11227_13025 = state_11223__$1;
(statearr_11227_13025[(2)] = inst_11219);

(statearr_11227_13025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (1))){
var state_11223__$1 = state_11223;
var statearr_11228_13026 = state_11223__$1;
(statearr_11228_13026[(2)] = null);

(statearr_11228_13026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (4))){
var inst_11204 = (state_11223[(7)]);
var inst_11204__$1 = (state_11223[(2)]);
var inst_11205 = (inst_11204__$1 == null);
var state_11223__$1 = (function (){var statearr_11229 = state_11223;
(statearr_11229[(7)] = inst_11204__$1);

return statearr_11229;
})();
if(cljs.core.truth_(inst_11205)){
var statearr_11230_13027 = state_11223__$1;
(statearr_11230_13027[(1)] = (5));

} else {
var statearr_11231_13028 = state_11223__$1;
(statearr_11231_13028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (6))){
var inst_11209 = (state_11223[(8)]);
var inst_11204 = (state_11223[(7)]);
var inst_11209__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11211 = [inst_11204,inst_11209__$1];
var inst_11212 = (new cljs.core.PersistentVector(null,2,(5),inst_11210,inst_11211,null));
var state_11223__$1 = (function (){var statearr_11232 = state_11223;
(statearr_11232[(8)] = inst_11209__$1);

return statearr_11232;
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
var state_11223__$1 = (function (){var statearr_11233 = state_11223;
(statearr_11233[(9)] = inst_11216);

return statearr_11233;
})();
var statearr_11234_13029 = state_11223__$1;
(statearr_11234_13029[(2)] = null);

(statearr_11234_13029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (5))){
var inst_11207 = cljs.core.async.close_BANG_(jobs);
var state_11223__$1 = state_11223;
var statearr_11235_13030 = state_11223__$1;
(statearr_11235_13030[(2)] = inst_11207);

(statearr_11235_13030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (8))){
var inst_11209 = (state_11223[(8)]);
var inst_11214 = (state_11223[(2)]);
var state_11223__$1 = (function (){var statearr_11236 = state_11223;
(statearr_11236[(10)] = inst_11214);

return statearr_11236;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11223__$1,(9),results,inst_11209);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0 = (function (){
var statearr_11241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__);

(statearr_11241[(1)] = (1));

return statearr_11241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1 = (function (state_11223){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11223);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11246){var ex__10867__auto__ = e11246;
var statearr_11247_13031 = state_11223;
(statearr_11247_13031[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11223[(4)]))){
var statearr_11248_13032 = state_11223;
(statearr_11248_13032[(1)] = cljs.core.first((state_11223[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11223;
state_11223 = G__13033;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = function(state_11223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1.call(this,state_11223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11258 = f__10928__auto__();
(statearr_11258[(6)] = c__10927__auto___13024);

return statearr_11258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));


var c__10927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11296){
var state_val_11297 = (state_11296[(1)]);
if((state_val_11297 === (7))){
var inst_11292 = (state_11296[(2)]);
var state_11296__$1 = state_11296;
var statearr_11298_13038 = state_11296__$1;
(statearr_11298_13038[(2)] = inst_11292);

(statearr_11298_13038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (20))){
var state_11296__$1 = state_11296;
var statearr_11299_13039 = state_11296__$1;
(statearr_11299_13039[(2)] = null);

(statearr_11299_13039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (1))){
var state_11296__$1 = state_11296;
var statearr_11300_13040 = state_11296__$1;
(statearr_11300_13040[(2)] = null);

(statearr_11300_13040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (4))){
var inst_11261 = (state_11296[(7)]);
var inst_11261__$1 = (state_11296[(2)]);
var inst_11262 = (inst_11261__$1 == null);
var state_11296__$1 = (function (){var statearr_11301 = state_11296;
(statearr_11301[(7)] = inst_11261__$1);

return statearr_11301;
})();
if(cljs.core.truth_(inst_11262)){
var statearr_11302_13041 = state_11296__$1;
(statearr_11302_13041[(1)] = (5));

} else {
var statearr_11303_13042 = state_11296__$1;
(statearr_11303_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (15))){
var inst_11274 = (state_11296[(8)]);
var state_11296__$1 = state_11296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11296__$1,(18),to,inst_11274);
} else {
if((state_val_11297 === (21))){
var inst_11287 = (state_11296[(2)]);
var state_11296__$1 = state_11296;
var statearr_11304_13043 = state_11296__$1;
(statearr_11304_13043[(2)] = inst_11287);

(statearr_11304_13043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (13))){
var inst_11289 = (state_11296[(2)]);
var state_11296__$1 = (function (){var statearr_11305 = state_11296;
(statearr_11305[(9)] = inst_11289);

return statearr_11305;
})();
var statearr_11306_13051 = state_11296__$1;
(statearr_11306_13051[(2)] = null);

(statearr_11306_13051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (6))){
var inst_11261 = (state_11296[(7)]);
var state_11296__$1 = state_11296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11296__$1,(11),inst_11261);
} else {
if((state_val_11297 === (17))){
var inst_11282 = (state_11296[(2)]);
var state_11296__$1 = state_11296;
if(cljs.core.truth_(inst_11282)){
var statearr_11307_13053 = state_11296__$1;
(statearr_11307_13053[(1)] = (19));

} else {
var statearr_11308_13054 = state_11296__$1;
(statearr_11308_13054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (3))){
var inst_11294 = (state_11296[(2)]);
var state_11296__$1 = state_11296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11296__$1,inst_11294);
} else {
if((state_val_11297 === (12))){
var inst_11271 = (state_11296[(10)]);
var state_11296__$1 = state_11296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11296__$1,(14),inst_11271);
} else {
if((state_val_11297 === (2))){
var state_11296__$1 = state_11296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11296__$1,(4),results);
} else {
if((state_val_11297 === (19))){
var state_11296__$1 = state_11296;
var statearr_11314_13056 = state_11296__$1;
(statearr_11314_13056[(2)] = null);

(statearr_11314_13056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (11))){
var inst_11271 = (state_11296[(2)]);
var state_11296__$1 = (function (){var statearr_11315 = state_11296;
(statearr_11315[(10)] = inst_11271);

return statearr_11315;
})();
var statearr_11316_13057 = state_11296__$1;
(statearr_11316_13057[(2)] = null);

(statearr_11316_13057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (9))){
var state_11296__$1 = state_11296;
var statearr_11317_13058 = state_11296__$1;
(statearr_11317_13058[(2)] = null);

(statearr_11317_13058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (5))){
var state_11296__$1 = state_11296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11318_13059 = state_11296__$1;
(statearr_11318_13059[(1)] = (8));

} else {
var statearr_11319_13060 = state_11296__$1;
(statearr_11319_13060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (14))){
var inst_11274 = (state_11296[(8)]);
var inst_11274__$1 = (state_11296[(2)]);
var inst_11275 = (inst_11274__$1 == null);
var inst_11276 = cljs.core.not(inst_11275);
var state_11296__$1 = (function (){var statearr_11320 = state_11296;
(statearr_11320[(8)] = inst_11274__$1);

return statearr_11320;
})();
if(inst_11276){
var statearr_11321_13061 = state_11296__$1;
(statearr_11321_13061[(1)] = (15));

} else {
var statearr_11322_13062 = state_11296__$1;
(statearr_11322_13062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (16))){
var state_11296__$1 = state_11296;
var statearr_11323_13063 = state_11296__$1;
(statearr_11323_13063[(2)] = false);

(statearr_11323_13063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (10))){
var inst_11268 = (state_11296[(2)]);
var state_11296__$1 = state_11296;
var statearr_11324_13064 = state_11296__$1;
(statearr_11324_13064[(2)] = inst_11268);

(statearr_11324_13064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (18))){
var inst_11279 = (state_11296[(2)]);
var state_11296__$1 = state_11296;
var statearr_11325_13065 = state_11296__$1;
(statearr_11325_13065[(2)] = inst_11279);

(statearr_11325_13065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (8))){
var inst_11265 = cljs.core.async.close_BANG_(to);
var state_11296__$1 = state_11296;
var statearr_11326_13066 = state_11296__$1;
(statearr_11326_13066[(2)] = inst_11265);

(statearr_11326_13066[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0 = (function (){
var statearr_11327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__);

(statearr_11327[(1)] = (1));

return statearr_11327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1 = (function (state_11296){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11296);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11328){var ex__10867__auto__ = e11328;
var statearr_11329_13067 = state_11296;
(statearr_11329_13067[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11296[(4)]))){
var statearr_11330_13068 = state_11296;
(statearr_11330_13068[(1)] = cljs.core.first((state_11296[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11296;
state_11296 = G__13069;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__ = function(state_11296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1.call(this,state_11296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11348 = f__10928__auto__();
(statearr_11348[(6)] = c__10927__auto__);

return statearr_11348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));

return c__10927__auto__;
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
var G__11354 = arguments.length;
switch (G__11354) {
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
var G__11356 = arguments.length;
switch (G__11356) {
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
var G__11361 = arguments.length;
switch (G__11361) {
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
var c__10927__auto___13076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11387){
var state_val_11388 = (state_11387[(1)]);
if((state_val_11388 === (7))){
var inst_11383 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
var statearr_11389_13077 = state_11387__$1;
(statearr_11389_13077[(2)] = inst_11383);

(statearr_11389_13077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (1))){
var state_11387__$1 = state_11387;
var statearr_11390_13079 = state_11387__$1;
(statearr_11390_13079[(2)] = null);

(statearr_11390_13079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (4))){
var inst_11364 = (state_11387[(7)]);
var inst_11364__$1 = (state_11387[(2)]);
var inst_11365 = (inst_11364__$1 == null);
var state_11387__$1 = (function (){var statearr_11391 = state_11387;
(statearr_11391[(7)] = inst_11364__$1);

return statearr_11391;
})();
if(cljs.core.truth_(inst_11365)){
var statearr_11392_13080 = state_11387__$1;
(statearr_11392_13080[(1)] = (5));

} else {
var statearr_11393_13081 = state_11387__$1;
(statearr_11393_13081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (13))){
var state_11387__$1 = state_11387;
var statearr_11394_13082 = state_11387__$1;
(statearr_11394_13082[(2)] = null);

(statearr_11394_13082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (6))){
var inst_11364 = (state_11387[(7)]);
var inst_11370 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11364) : p.call(null,inst_11364));
var state_11387__$1 = state_11387;
if(cljs.core.truth_(inst_11370)){
var statearr_11395_13085 = state_11387__$1;
(statearr_11395_13085[(1)] = (9));

} else {
var statearr_11396_13086 = state_11387__$1;
(statearr_11396_13086[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (3))){
var inst_11385 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11387__$1,inst_11385);
} else {
if((state_val_11388 === (12))){
var state_11387__$1 = state_11387;
var statearr_11397_13088 = state_11387__$1;
(statearr_11397_13088[(2)] = null);

(statearr_11397_13088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (2))){
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11387__$1,(4),ch);
} else {
if((state_val_11388 === (11))){
var inst_11364 = (state_11387[(7)]);
var inst_11374 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11387__$1,(8),inst_11374,inst_11364);
} else {
if((state_val_11388 === (9))){
var state_11387__$1 = state_11387;
var statearr_11398_13089 = state_11387__$1;
(statearr_11398_13089[(2)] = tc);

(statearr_11398_13089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (5))){
var inst_11367 = cljs.core.async.close_BANG_(tc);
var inst_11368 = cljs.core.async.close_BANG_(fc);
var state_11387__$1 = (function (){var statearr_11399 = state_11387;
(statearr_11399[(8)] = inst_11367);

return statearr_11399;
})();
var statearr_11400_13090 = state_11387__$1;
(statearr_11400_13090[(2)] = inst_11368);

(statearr_11400_13090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (14))){
var inst_11381 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
var statearr_11401_13091 = state_11387__$1;
(statearr_11401_13091[(2)] = inst_11381);

(statearr_11401_13091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (10))){
var state_11387__$1 = state_11387;
var statearr_11402_13092 = state_11387__$1;
(statearr_11402_13092[(2)] = fc);

(statearr_11402_13092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11388 === (8))){
var inst_11376 = (state_11387[(2)]);
var state_11387__$1 = state_11387;
if(cljs.core.truth_(inst_11376)){
var statearr_11404_13093 = state_11387__$1;
(statearr_11404_13093[(1)] = (12));

} else {
var statearr_11405_13094 = state_11387__$1;
(statearr_11405_13094[(1)] = (13));

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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_11406 = [null,null,null,null,null,null,null,null,null];
(statearr_11406[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_11406[(1)] = (1));

return statearr_11406;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_11387){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11387);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11407){var ex__10867__auto__ = e11407;
var statearr_11408_13095 = state_11387;
(statearr_11408_13095[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11387[(4)]))){
var statearr_11409_13096 = state_11387;
(statearr_11409_13096[(1)] = cljs.core.first((state_11387[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11387;
state_11387 = G__13097;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_11387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_11387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11410 = f__10928__auto__();
(statearr_11410[(6)] = c__10927__auto___13076);

return statearr_11410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var c__10927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11434){
var state_val_11435 = (state_11434[(1)]);
if((state_val_11435 === (7))){
var inst_11430 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
var statearr_11436_13098 = state_11434__$1;
(statearr_11436_13098[(2)] = inst_11430);

(statearr_11436_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (1))){
var inst_11413 = init;
var inst_11414 = inst_11413;
var state_11434__$1 = (function (){var statearr_11437 = state_11434;
(statearr_11437[(7)] = inst_11414);

return statearr_11437;
})();
var statearr_11438_13099 = state_11434__$1;
(statearr_11438_13099[(2)] = null);

(statearr_11438_13099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (4))){
var inst_11417 = (state_11434[(8)]);
var inst_11417__$1 = (state_11434[(2)]);
var inst_11418 = (inst_11417__$1 == null);
var state_11434__$1 = (function (){var statearr_11439 = state_11434;
(statearr_11439[(8)] = inst_11417__$1);

return statearr_11439;
})();
if(cljs.core.truth_(inst_11418)){
var statearr_11440_13100 = state_11434__$1;
(statearr_11440_13100[(1)] = (5));

} else {
var statearr_11441_13101 = state_11434__$1;
(statearr_11441_13101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (6))){
var inst_11414 = (state_11434[(7)]);
var inst_11421 = (state_11434[(9)]);
var inst_11417 = (state_11434[(8)]);
var inst_11421__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11414,inst_11417) : f.call(null,inst_11414,inst_11417));
var inst_11422 = cljs.core.reduced_QMARK_(inst_11421__$1);
var state_11434__$1 = (function (){var statearr_11442 = state_11434;
(statearr_11442[(9)] = inst_11421__$1);

return statearr_11442;
})();
if(inst_11422){
var statearr_11443_13103 = state_11434__$1;
(statearr_11443_13103[(1)] = (8));

} else {
var statearr_11444_13105 = state_11434__$1;
(statearr_11444_13105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (3))){
var inst_11432 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11434__$1,inst_11432);
} else {
if((state_val_11435 === (2))){
var state_11434__$1 = state_11434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11434__$1,(4),ch);
} else {
if((state_val_11435 === (9))){
var inst_11421 = (state_11434[(9)]);
var inst_11414 = inst_11421;
var state_11434__$1 = (function (){var statearr_11445 = state_11434;
(statearr_11445[(7)] = inst_11414);

return statearr_11445;
})();
var statearr_11446_13106 = state_11434__$1;
(statearr_11446_13106[(2)] = null);

(statearr_11446_13106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (5))){
var inst_11414 = (state_11434[(7)]);
var state_11434__$1 = state_11434;
var statearr_11447_13108 = state_11434__$1;
(statearr_11447_13108[(2)] = inst_11414);

(statearr_11447_13108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (10))){
var inst_11428 = (state_11434[(2)]);
var state_11434__$1 = state_11434;
var statearr_11448_13109 = state_11434__$1;
(statearr_11448_13109[(2)] = inst_11428);

(statearr_11448_13109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11435 === (8))){
var inst_11421 = (state_11434[(9)]);
var inst_11424 = cljs.core.deref(inst_11421);
var state_11434__$1 = state_11434;
var statearr_11449_13110 = state_11434__$1;
(statearr_11449_13110[(2)] = inst_11424);

(statearr_11449_13110[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10864__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10864__auto____0 = (function (){
var statearr_11450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11450[(0)] = cljs$core$async$reduce_$_state_machine__10864__auto__);

(statearr_11450[(1)] = (1));

return statearr_11450;
});
var cljs$core$async$reduce_$_state_machine__10864__auto____1 = (function (state_11434){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11434);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11451){var ex__10867__auto__ = e11451;
var statearr_11452_13111 = state_11434;
(statearr_11452_13111[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11434[(4)]))){
var statearr_11453_13112 = state_11434;
(statearr_11453_13112[(1)] = cljs.core.first((state_11434[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13113 = state_11434;
state_11434 = G__13113;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10864__auto__ = function(state_11434){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10864__auto____1.call(this,state_11434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10864__auto____0;
cljs$core$async$reduce_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10864__auto____1;
return cljs$core$async$reduce_$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11454 = f__10928__auto__();
(statearr_11454[(6)] = c__10927__auto__);

return statearr_11454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));

return c__10927__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11460){
var state_val_11461 = (state_11460[(1)]);
if((state_val_11461 === (1))){
var inst_11455 = cljs.core.async.reduce(f__$1,init,ch);
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11460__$1,(2),inst_11455);
} else {
if((state_val_11461 === (2))){
var inst_11457 = (state_11460[(2)]);
var inst_11458 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11457) : f__$1.call(null,inst_11457));
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11460__$1,inst_11458);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10864__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10864__auto____0 = (function (){
var statearr_11462 = [null,null,null,null,null,null,null];
(statearr_11462[(0)] = cljs$core$async$transduce_$_state_machine__10864__auto__);

(statearr_11462[(1)] = (1));

return statearr_11462;
});
var cljs$core$async$transduce_$_state_machine__10864__auto____1 = (function (state_11460){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11460);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11463){var ex__10867__auto__ = e11463;
var statearr_11464_13114 = state_11460;
(statearr_11464_13114[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11460[(4)]))){
var statearr_11465_13115 = state_11460;
(statearr_11465_13115[(1)] = cljs.core.first((state_11460[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13116 = state_11460;
state_11460 = G__13116;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10864__auto__ = function(state_11460){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10864__auto____1.call(this,state_11460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10864__auto____0;
cljs$core$async$transduce_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10864__auto____1;
return cljs$core$async$transduce_$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11466 = f__10928__auto__();
(statearr_11466[(6)] = c__10927__auto__);

return statearr_11466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));

return c__10927__auto__;
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
var G__11468 = arguments.length;
switch (G__11468) {
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
var c__10927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11493){
var state_val_11494 = (state_11493[(1)]);
if((state_val_11494 === (7))){
var inst_11475 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
var statearr_11495_13118 = state_11493__$1;
(statearr_11495_13118[(2)] = inst_11475);

(statearr_11495_13118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (1))){
var inst_11469 = cljs.core.seq(coll);
var inst_11470 = inst_11469;
var state_11493__$1 = (function (){var statearr_11496 = state_11493;
(statearr_11496[(7)] = inst_11470);

return statearr_11496;
})();
var statearr_11497_13119 = state_11493__$1;
(statearr_11497_13119[(2)] = null);

(statearr_11497_13119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (4))){
var inst_11470 = (state_11493[(7)]);
var inst_11473 = cljs.core.first(inst_11470);
var state_11493__$1 = state_11493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11493__$1,(7),ch,inst_11473);
} else {
if((state_val_11494 === (13))){
var inst_11487 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
var statearr_11498_13120 = state_11493__$1;
(statearr_11498_13120[(2)] = inst_11487);

(statearr_11498_13120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (6))){
var inst_11478 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
if(cljs.core.truth_(inst_11478)){
var statearr_11499_13121 = state_11493__$1;
(statearr_11499_13121[(1)] = (8));

} else {
var statearr_11500_13122 = state_11493__$1;
(statearr_11500_13122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (3))){
var inst_11491 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11493__$1,inst_11491);
} else {
if((state_val_11494 === (12))){
var state_11493__$1 = state_11493;
var statearr_11501_13123 = state_11493__$1;
(statearr_11501_13123[(2)] = null);

(statearr_11501_13123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (2))){
var inst_11470 = (state_11493[(7)]);
var state_11493__$1 = state_11493;
if(cljs.core.truth_(inst_11470)){
var statearr_11502_13124 = state_11493__$1;
(statearr_11502_13124[(1)] = (4));

} else {
var statearr_11503_13125 = state_11493__$1;
(statearr_11503_13125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (11))){
var inst_11484 = cljs.core.async.close_BANG_(ch);
var state_11493__$1 = state_11493;
var statearr_11504_13126 = state_11493__$1;
(statearr_11504_13126[(2)] = inst_11484);

(statearr_11504_13126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (9))){
var state_11493__$1 = state_11493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11505_13127 = state_11493__$1;
(statearr_11505_13127[(1)] = (11));

} else {
var statearr_11506_13128 = state_11493__$1;
(statearr_11506_13128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (5))){
var inst_11470 = (state_11493[(7)]);
var state_11493__$1 = state_11493;
var statearr_11507_13130 = state_11493__$1;
(statearr_11507_13130[(2)] = inst_11470);

(statearr_11507_13130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (10))){
var inst_11489 = (state_11493[(2)]);
var state_11493__$1 = state_11493;
var statearr_11508_13131 = state_11493__$1;
(statearr_11508_13131[(2)] = inst_11489);

(statearr_11508_13131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11494 === (8))){
var inst_11470 = (state_11493[(7)]);
var inst_11480 = cljs.core.next(inst_11470);
var inst_11470__$1 = inst_11480;
var state_11493__$1 = (function (){var statearr_11509 = state_11493;
(statearr_11509[(7)] = inst_11470__$1);

return statearr_11509;
})();
var statearr_11510_13132 = state_11493__$1;
(statearr_11510_13132[(2)] = null);

(statearr_11510_13132[(1)] = (2));


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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_11511 = [null,null,null,null,null,null,null,null];
(statearr_11511[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_11511[(1)] = (1));

return statearr_11511;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_11493){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11493);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11512){var ex__10867__auto__ = e11512;
var statearr_11513_13133 = state_11493;
(statearr_11513_13133[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11493[(4)]))){
var statearr_11514_13134 = state_11493;
(statearr_11514_13134[(1)] = cljs.core.first((state_11493[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13135 = state_11493;
state_11493 = G__13135;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_11493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_11493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11519 = f__10928__auto__();
(statearr_11519[(6)] = c__10927__auto__);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));

return c__10927__auto__;
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
var G__11523 = arguments.length;
switch (G__11523) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13139 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13139(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13140 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13140(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13141 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13141(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13142 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13142(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11530 = (function (ch,cs,meta11531){
this.ch = ch;
this.cs = cs;
this.meta11531 = meta11531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11532,meta11531__$1){
var self__ = this;
var _11532__$1 = this;
return (new cljs.core.async.t_cljs$core$async11530(self__.ch,self__.cs,meta11531__$1));
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11532){
var self__ = this;
var _11532__$1 = this;
return self__.meta11531;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11531","meta11531",856556692,null)], null);
}));

(cljs.core.async.t_cljs$core$async11530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11530");

(cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11530.
 */
cljs.core.async.__GT_t_cljs$core$async11530 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11530(ch__$1,cs__$1,meta11531){
return (new cljs.core.async.t_cljs$core$async11530(ch__$1,cs__$1,meta11531));
});

}

return (new cljs.core.async.t_cljs$core$async11530(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10927__auto___13143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11665){
var state_val_11666 = (state_11665[(1)]);
if((state_val_11666 === (7))){
var inst_11661 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11667_13144 = state_11665__$1;
(statearr_11667_13144[(2)] = inst_11661);

(statearr_11667_13144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (20))){
var inst_11566 = (state_11665[(7)]);
var inst_11578 = cljs.core.first(inst_11566);
var inst_11579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11578,(0),null);
var inst_11580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11578,(1),null);
var state_11665__$1 = (function (){var statearr_11668 = state_11665;
(statearr_11668[(8)] = inst_11579);

return statearr_11668;
})();
if(cljs.core.truth_(inst_11580)){
var statearr_11669_13145 = state_11665__$1;
(statearr_11669_13145[(1)] = (22));

} else {
var statearr_11670_13146 = state_11665__$1;
(statearr_11670_13146[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (27))){
var inst_11535 = (state_11665[(9)]);
var inst_11615 = (state_11665[(10)]);
var inst_11610 = (state_11665[(11)]);
var inst_11608 = (state_11665[(12)]);
var inst_11615__$1 = cljs.core._nth(inst_11608,inst_11610);
var inst_11616 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11615__$1,inst_11535,done);
var state_11665__$1 = (function (){var statearr_11671 = state_11665;
(statearr_11671[(10)] = inst_11615__$1);

return statearr_11671;
})();
if(cljs.core.truth_(inst_11616)){
var statearr_11672_13147 = state_11665__$1;
(statearr_11672_13147[(1)] = (30));

} else {
var statearr_11673_13148 = state_11665__$1;
(statearr_11673_13148[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (1))){
var state_11665__$1 = state_11665;
var statearr_11674_13149 = state_11665__$1;
(statearr_11674_13149[(2)] = null);

(statearr_11674_13149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (24))){
var inst_11566 = (state_11665[(7)]);
var inst_11585 = (state_11665[(2)]);
var inst_11586 = cljs.core.next(inst_11566);
var inst_11544 = inst_11586;
var inst_11545 = null;
var inst_11546 = (0);
var inst_11547 = (0);
var state_11665__$1 = (function (){var statearr_11675 = state_11665;
(statearr_11675[(13)] = inst_11546);

(statearr_11675[(14)] = inst_11585);

(statearr_11675[(15)] = inst_11545);

(statearr_11675[(16)] = inst_11547);

(statearr_11675[(17)] = inst_11544);

return statearr_11675;
})();
var statearr_11676_13150 = state_11665__$1;
(statearr_11676_13150[(2)] = null);

(statearr_11676_13150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (39))){
var state_11665__$1 = state_11665;
var statearr_11680_13152 = state_11665__$1;
(statearr_11680_13152[(2)] = null);

(statearr_11680_13152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (4))){
var inst_11535 = (state_11665[(9)]);
var inst_11535__$1 = (state_11665[(2)]);
var inst_11536 = (inst_11535__$1 == null);
var state_11665__$1 = (function (){var statearr_11681 = state_11665;
(statearr_11681[(9)] = inst_11535__$1);

return statearr_11681;
})();
if(cljs.core.truth_(inst_11536)){
var statearr_11682_13154 = state_11665__$1;
(statearr_11682_13154[(1)] = (5));

} else {
var statearr_11683_13155 = state_11665__$1;
(statearr_11683_13155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (15))){
var inst_11546 = (state_11665[(13)]);
var inst_11545 = (state_11665[(15)]);
var inst_11547 = (state_11665[(16)]);
var inst_11544 = (state_11665[(17)]);
var inst_11562 = (state_11665[(2)]);
var inst_11563 = (inst_11547 + (1));
var tmp11677 = inst_11546;
var tmp11678 = inst_11545;
var tmp11679 = inst_11544;
var inst_11544__$1 = tmp11679;
var inst_11545__$1 = tmp11678;
var inst_11546__$1 = tmp11677;
var inst_11547__$1 = inst_11563;
var state_11665__$1 = (function (){var statearr_11684 = state_11665;
(statearr_11684[(13)] = inst_11546__$1);

(statearr_11684[(15)] = inst_11545__$1);

(statearr_11684[(16)] = inst_11547__$1);

(statearr_11684[(18)] = inst_11562);

(statearr_11684[(17)] = inst_11544__$1);

return statearr_11684;
})();
var statearr_11685_13157 = state_11665__$1;
(statearr_11685_13157[(2)] = null);

(statearr_11685_13157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (21))){
var inst_11589 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11689_13158 = state_11665__$1;
(statearr_11689_13158[(2)] = inst_11589);

(statearr_11689_13158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (31))){
var inst_11615 = (state_11665[(10)]);
var inst_11619 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11615);
var state_11665__$1 = state_11665;
var statearr_11690_13160 = state_11665__$1;
(statearr_11690_13160[(2)] = inst_11619);

(statearr_11690_13160[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (32))){
var inst_11609 = (state_11665[(19)]);
var inst_11610 = (state_11665[(11)]);
var inst_11608 = (state_11665[(12)]);
var inst_11607 = (state_11665[(20)]);
var inst_11621 = (state_11665[(2)]);
var inst_11622 = (inst_11610 + (1));
var tmp11686 = inst_11609;
var tmp11687 = inst_11608;
var tmp11688 = inst_11607;
var inst_11607__$1 = tmp11688;
var inst_11608__$1 = tmp11687;
var inst_11609__$1 = tmp11686;
var inst_11610__$1 = inst_11622;
var state_11665__$1 = (function (){var statearr_11697 = state_11665;
(statearr_11697[(19)] = inst_11609__$1);

(statearr_11697[(11)] = inst_11610__$1);

(statearr_11697[(12)] = inst_11608__$1);

(statearr_11697[(21)] = inst_11621);

(statearr_11697[(20)] = inst_11607__$1);

return statearr_11697;
})();
var statearr_11698_13161 = state_11665__$1;
(statearr_11698_13161[(2)] = null);

(statearr_11698_13161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (40))){
var inst_11634 = (state_11665[(22)]);
var inst_11638 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11634);
var state_11665__$1 = state_11665;
var statearr_11699_13162 = state_11665__$1;
(statearr_11699_13162[(2)] = inst_11638);

(statearr_11699_13162[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (33))){
var inst_11625 = (state_11665[(23)]);
var inst_11627 = cljs.core.chunked_seq_QMARK_(inst_11625);
var state_11665__$1 = state_11665;
if(inst_11627){
var statearr_11700_13163 = state_11665__$1;
(statearr_11700_13163[(1)] = (36));

} else {
var statearr_11701_13164 = state_11665__$1;
(statearr_11701_13164[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (13))){
var inst_11556 = (state_11665[(24)]);
var inst_11559 = cljs.core.async.close_BANG_(inst_11556);
var state_11665__$1 = state_11665;
var statearr_11702_13165 = state_11665__$1;
(statearr_11702_13165[(2)] = inst_11559);

(statearr_11702_13165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (22))){
var inst_11579 = (state_11665[(8)]);
var inst_11582 = cljs.core.async.close_BANG_(inst_11579);
var state_11665__$1 = state_11665;
var statearr_11703_13166 = state_11665__$1;
(statearr_11703_13166[(2)] = inst_11582);

(statearr_11703_13166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (36))){
var inst_11625 = (state_11665[(23)]);
var inst_11629 = cljs.core.chunk_first(inst_11625);
var inst_11630 = cljs.core.chunk_rest(inst_11625);
var inst_11631 = cljs.core.count(inst_11629);
var inst_11607 = inst_11630;
var inst_11608 = inst_11629;
var inst_11609 = inst_11631;
var inst_11610 = (0);
var state_11665__$1 = (function (){var statearr_11704 = state_11665;
(statearr_11704[(19)] = inst_11609);

(statearr_11704[(11)] = inst_11610);

(statearr_11704[(12)] = inst_11608);

(statearr_11704[(20)] = inst_11607);

return statearr_11704;
})();
var statearr_11705_13167 = state_11665__$1;
(statearr_11705_13167[(2)] = null);

(statearr_11705_13167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (41))){
var inst_11625 = (state_11665[(23)]);
var inst_11640 = (state_11665[(2)]);
var inst_11641 = cljs.core.next(inst_11625);
var inst_11607 = inst_11641;
var inst_11608 = null;
var inst_11609 = (0);
var inst_11610 = (0);
var state_11665__$1 = (function (){var statearr_11706 = state_11665;
(statearr_11706[(19)] = inst_11609);

(statearr_11706[(11)] = inst_11610);

(statearr_11706[(12)] = inst_11608);

(statearr_11706[(20)] = inst_11607);

(statearr_11706[(25)] = inst_11640);

return statearr_11706;
})();
var statearr_11707_13168 = state_11665__$1;
(statearr_11707_13168[(2)] = null);

(statearr_11707_13168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (43))){
var state_11665__$1 = state_11665;
var statearr_11708_13169 = state_11665__$1;
(statearr_11708_13169[(2)] = null);

(statearr_11708_13169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (29))){
var inst_11649 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11709_13170 = state_11665__$1;
(statearr_11709_13170[(2)] = inst_11649);

(statearr_11709_13170[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (44))){
var inst_11658 = (state_11665[(2)]);
var state_11665__$1 = (function (){var statearr_11710 = state_11665;
(statearr_11710[(26)] = inst_11658);

return statearr_11710;
})();
var statearr_11711_13171 = state_11665__$1;
(statearr_11711_13171[(2)] = null);

(statearr_11711_13171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (6))){
var inst_11599 = (state_11665[(27)]);
var inst_11598 = cljs.core.deref(cs);
var inst_11599__$1 = cljs.core.keys(inst_11598);
var inst_11600 = cljs.core.count(inst_11599__$1);
var inst_11601 = cljs.core.reset_BANG_(dctr,inst_11600);
var inst_11606 = cljs.core.seq(inst_11599__$1);
var inst_11607 = inst_11606;
var inst_11608 = null;
var inst_11609 = (0);
var inst_11610 = (0);
var state_11665__$1 = (function (){var statearr_11712 = state_11665;
(statearr_11712[(28)] = inst_11601);

(statearr_11712[(19)] = inst_11609);

(statearr_11712[(11)] = inst_11610);

(statearr_11712[(12)] = inst_11608);

(statearr_11712[(20)] = inst_11607);

(statearr_11712[(27)] = inst_11599__$1);

return statearr_11712;
})();
var statearr_11713_13173 = state_11665__$1;
(statearr_11713_13173[(2)] = null);

(statearr_11713_13173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (28))){
var inst_11625 = (state_11665[(23)]);
var inst_11607 = (state_11665[(20)]);
var inst_11625__$1 = cljs.core.seq(inst_11607);
var state_11665__$1 = (function (){var statearr_11714 = state_11665;
(statearr_11714[(23)] = inst_11625__$1);

return statearr_11714;
})();
if(inst_11625__$1){
var statearr_11715_13175 = state_11665__$1;
(statearr_11715_13175[(1)] = (33));

} else {
var statearr_11716_13176 = state_11665__$1;
(statearr_11716_13176[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (25))){
var inst_11609 = (state_11665[(19)]);
var inst_11610 = (state_11665[(11)]);
var inst_11612 = (inst_11610 < inst_11609);
var inst_11613 = inst_11612;
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11613)){
var statearr_11717_13177 = state_11665__$1;
(statearr_11717_13177[(1)] = (27));

} else {
var statearr_11718_13178 = state_11665__$1;
(statearr_11718_13178[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (34))){
var state_11665__$1 = state_11665;
var statearr_11719_13180 = state_11665__$1;
(statearr_11719_13180[(2)] = null);

(statearr_11719_13180[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (17))){
var state_11665__$1 = state_11665;
var statearr_11720_13181 = state_11665__$1;
(statearr_11720_13181[(2)] = null);

(statearr_11720_13181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (3))){
var inst_11663 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11665__$1,inst_11663);
} else {
if((state_val_11666 === (12))){
var inst_11594 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11721_13183 = state_11665__$1;
(statearr_11721_13183[(2)] = inst_11594);

(statearr_11721_13183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (2))){
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11665__$1,(4),ch);
} else {
if((state_val_11666 === (23))){
var state_11665__$1 = state_11665;
var statearr_11722_13184 = state_11665__$1;
(statearr_11722_13184[(2)] = null);

(statearr_11722_13184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (35))){
var inst_11647 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11723_13186 = state_11665__$1;
(statearr_11723_13186[(2)] = inst_11647);

(statearr_11723_13186[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (19))){
var inst_11566 = (state_11665[(7)]);
var inst_11570 = cljs.core.chunk_first(inst_11566);
var inst_11571 = cljs.core.chunk_rest(inst_11566);
var inst_11572 = cljs.core.count(inst_11570);
var inst_11544 = inst_11571;
var inst_11545 = inst_11570;
var inst_11546 = inst_11572;
var inst_11547 = (0);
var state_11665__$1 = (function (){var statearr_11724 = state_11665;
(statearr_11724[(13)] = inst_11546);

(statearr_11724[(15)] = inst_11545);

(statearr_11724[(16)] = inst_11547);

(statearr_11724[(17)] = inst_11544);

return statearr_11724;
})();
var statearr_11725_13187 = state_11665__$1;
(statearr_11725_13187[(2)] = null);

(statearr_11725_13187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (11))){
var inst_11544 = (state_11665[(17)]);
var inst_11566 = (state_11665[(7)]);
var inst_11566__$1 = cljs.core.seq(inst_11544);
var state_11665__$1 = (function (){var statearr_11726 = state_11665;
(statearr_11726[(7)] = inst_11566__$1);

return statearr_11726;
})();
if(inst_11566__$1){
var statearr_11727_13188 = state_11665__$1;
(statearr_11727_13188[(1)] = (16));

} else {
var statearr_11728_13189 = state_11665__$1;
(statearr_11728_13189[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (9))){
var inst_11596 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11729_13190 = state_11665__$1;
(statearr_11729_13190[(2)] = inst_11596);

(statearr_11729_13190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (5))){
var inst_11542 = cljs.core.deref(cs);
var inst_11543 = cljs.core.seq(inst_11542);
var inst_11544 = inst_11543;
var inst_11545 = null;
var inst_11546 = (0);
var inst_11547 = (0);
var state_11665__$1 = (function (){var statearr_11730 = state_11665;
(statearr_11730[(13)] = inst_11546);

(statearr_11730[(15)] = inst_11545);

(statearr_11730[(16)] = inst_11547);

(statearr_11730[(17)] = inst_11544);

return statearr_11730;
})();
var statearr_11731_13191 = state_11665__$1;
(statearr_11731_13191[(2)] = null);

(statearr_11731_13191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (14))){
var state_11665__$1 = state_11665;
var statearr_11732_13192 = state_11665__$1;
(statearr_11732_13192[(2)] = null);

(statearr_11732_13192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (45))){
var inst_11655 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11733_13193 = state_11665__$1;
(statearr_11733_13193[(2)] = inst_11655);

(statearr_11733_13193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (26))){
var inst_11599 = (state_11665[(27)]);
var inst_11651 = (state_11665[(2)]);
var inst_11652 = cljs.core.seq(inst_11599);
var state_11665__$1 = (function (){var statearr_11738 = state_11665;
(statearr_11738[(29)] = inst_11651);

return statearr_11738;
})();
if(inst_11652){
var statearr_11739_13194 = state_11665__$1;
(statearr_11739_13194[(1)] = (42));

} else {
var statearr_11740_13195 = state_11665__$1;
(statearr_11740_13195[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (16))){
var inst_11566 = (state_11665[(7)]);
var inst_11568 = cljs.core.chunked_seq_QMARK_(inst_11566);
var state_11665__$1 = state_11665;
if(inst_11568){
var statearr_11741_13196 = state_11665__$1;
(statearr_11741_13196[(1)] = (19));

} else {
var statearr_11742_13197 = state_11665__$1;
(statearr_11742_13197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (38))){
var inst_11644 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11743_13198 = state_11665__$1;
(statearr_11743_13198[(2)] = inst_11644);

(statearr_11743_13198[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (30))){
var state_11665__$1 = state_11665;
var statearr_11744_13199 = state_11665__$1;
(statearr_11744_13199[(2)] = null);

(statearr_11744_13199[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (10))){
var inst_11545 = (state_11665[(15)]);
var inst_11547 = (state_11665[(16)]);
var inst_11555 = cljs.core._nth(inst_11545,inst_11547);
var inst_11556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11555,(0),null);
var inst_11557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11555,(1),null);
var state_11665__$1 = (function (){var statearr_11745 = state_11665;
(statearr_11745[(24)] = inst_11556);

return statearr_11745;
})();
if(cljs.core.truth_(inst_11557)){
var statearr_11746_13200 = state_11665__$1;
(statearr_11746_13200[(1)] = (13));

} else {
var statearr_11747_13201 = state_11665__$1;
(statearr_11747_13201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (18))){
var inst_11592 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11748_13202 = state_11665__$1;
(statearr_11748_13202[(2)] = inst_11592);

(statearr_11748_13202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (42))){
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11665__$1,(45),dchan);
} else {
if((state_val_11666 === (37))){
var inst_11535 = (state_11665[(9)]);
var inst_11625 = (state_11665[(23)]);
var inst_11634 = (state_11665[(22)]);
var inst_11634__$1 = cljs.core.first(inst_11625);
var inst_11635 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11634__$1,inst_11535,done);
var state_11665__$1 = (function (){var statearr_11749 = state_11665;
(statearr_11749[(22)] = inst_11634__$1);

return statearr_11749;
})();
if(cljs.core.truth_(inst_11635)){
var statearr_11750_13203 = state_11665__$1;
(statearr_11750_13203[(1)] = (39));

} else {
var statearr_11751_13204 = state_11665__$1;
(statearr_11751_13204[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (8))){
var inst_11546 = (state_11665[(13)]);
var inst_11547 = (state_11665[(16)]);
var inst_11549 = (inst_11547 < inst_11546);
var inst_11550 = inst_11549;
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11550)){
var statearr_11752_13205 = state_11665__$1;
(statearr_11752_13205[(1)] = (10));

} else {
var statearr_11753_13206 = state_11665__$1;
(statearr_11753_13206[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10864__auto__ = null;
var cljs$core$async$mult_$_state_machine__10864__auto____0 = (function (){
var statearr_11754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11754[(0)] = cljs$core$async$mult_$_state_machine__10864__auto__);

(statearr_11754[(1)] = (1));

return statearr_11754;
});
var cljs$core$async$mult_$_state_machine__10864__auto____1 = (function (state_11665){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11665);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11755){var ex__10867__auto__ = e11755;
var statearr_11757_13207 = state_11665;
(statearr_11757_13207[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11665[(4)]))){
var statearr_11758_13208 = state_11665;
(statearr_11758_13208[(1)] = cljs.core.first((state_11665[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13209 = state_11665;
state_11665 = G__13209;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10864__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10864__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10864__auto____0;
cljs$core$async$mult_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10864__auto____1;
return cljs$core$async$mult_$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11759 = f__10928__auto__();
(statearr_11759[(6)] = c__10927__auto___13143);

return statearr_11759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var G__11761 = arguments.length;
switch (G__11761) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13212 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13212(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13213 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13213(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13214 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13214(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13215 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13215(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13216 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13216(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13217 = arguments.length;
var i__4737__auto___13218 = (0);
while(true){
if((i__4737__auto___13218 < len__4736__auto___13217)){
args__4742__auto__.push((arguments[i__4737__auto___13218]));

var G__13219 = (i__4737__auto___13218 + (1));
i__4737__auto___13218 = G__13219;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11769){
var map__11770 = p__11769;
var map__11770__$1 = (((((!((map__11770 == null))))?(((((map__11770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11770):map__11770);
var opts = map__11770__$1;
var statearr_11772_13220 = state;
(statearr_11772_13220[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11773_13221 = state;
(statearr_11773_13221[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11774_13222 = state;
(statearr_11774_13222[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11765){
var G__11766 = cljs.core.first(seq11765);
var seq11765__$1 = cljs.core.next(seq11765);
var G__11767 = cljs.core.first(seq11765__$1);
var seq11765__$2 = cljs.core.next(seq11765__$1);
var G__11768 = cljs.core.first(seq11765__$2);
var seq11765__$3 = cljs.core.next(seq11765__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11766,G__11767,G__11768,seq11765__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11776 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11777){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11777 = meta11777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11778,meta11777__$1){
var self__ = this;
var _11778__$1 = this;
return (new cljs.core.async.t_cljs$core$async11776(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11777__$1));
}));

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11778){
var self__ = this;
var _11778__$1 = this;
return self__.meta11777;
}));

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11777","meta11777",-1403954279,null)], null);
}));

(cljs.core.async.t_cljs$core$async11776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11776");

(cljs.core.async.t_cljs$core$async11776.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11776.
 */
cljs.core.async.__GT_t_cljs$core$async11776 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11776(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11777){
return (new cljs.core.async.t_cljs$core$async11776(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11777));
});

}

return (new cljs.core.async.t_cljs$core$async11776(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10927__auto___13223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_11887){
var state_val_11888 = (state_11887[(1)]);
if((state_val_11888 === (7))){
var inst_11799 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11889_13224 = state_11887__$1;
(statearr_11889_13224[(2)] = inst_11799);

(statearr_11889_13224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (20))){
var inst_11811 = (state_11887[(7)]);
var state_11887__$1 = state_11887;
var statearr_11890_13225 = state_11887__$1;
(statearr_11890_13225[(2)] = inst_11811);

(statearr_11890_13225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (27))){
var state_11887__$1 = state_11887;
var statearr_11891_13226 = state_11887__$1;
(statearr_11891_13226[(2)] = null);

(statearr_11891_13226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (1))){
var inst_11786 = (state_11887[(8)]);
var inst_11786__$1 = calc_state();
var inst_11788 = (inst_11786__$1 == null);
var inst_11789 = cljs.core.not(inst_11788);
var state_11887__$1 = (function (){var statearr_11892 = state_11887;
(statearr_11892[(8)] = inst_11786__$1);

return statearr_11892;
})();
if(inst_11789){
var statearr_11893_13227 = state_11887__$1;
(statearr_11893_13227[(1)] = (2));

} else {
var statearr_11894_13228 = state_11887__$1;
(statearr_11894_13228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (24))){
var inst_11844 = (state_11887[(9)]);
var inst_11861 = (state_11887[(10)]);
var inst_11835 = (state_11887[(11)]);
var inst_11861__$1 = (inst_11835.cljs$core$IFn$_invoke$arity$1 ? inst_11835.cljs$core$IFn$_invoke$arity$1(inst_11844) : inst_11835.call(null,inst_11844));
var state_11887__$1 = (function (){var statearr_11895 = state_11887;
(statearr_11895[(10)] = inst_11861__$1);

return statearr_11895;
})();
if(cljs.core.truth_(inst_11861__$1)){
var statearr_11896_13229 = state_11887__$1;
(statearr_11896_13229[(1)] = (29));

} else {
var statearr_11897_13230 = state_11887__$1;
(statearr_11897_13230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (4))){
var inst_11802 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11802)){
var statearr_11898_13231 = state_11887__$1;
(statearr_11898_13231[(1)] = (8));

} else {
var statearr_11899_13232 = state_11887__$1;
(statearr_11899_13232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (15))){
var inst_11829 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11829)){
var statearr_11900_13233 = state_11887__$1;
(statearr_11900_13233[(1)] = (19));

} else {
var statearr_11901_13234 = state_11887__$1;
(statearr_11901_13234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (21))){
var inst_11834 = (state_11887[(12)]);
var inst_11834__$1 = (state_11887[(2)]);
var inst_11835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11887__$1 = (function (){var statearr_11914 = state_11887;
(statearr_11914[(12)] = inst_11834__$1);

(statearr_11914[(11)] = inst_11835);

(statearr_11914[(13)] = inst_11836);

return statearr_11914;
})();
return cljs.core.async.ioc_alts_BANG_(state_11887__$1,(22),inst_11837);
} else {
if((state_val_11888 === (31))){
var inst_11869 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11869)){
var statearr_11915_13235 = state_11887__$1;
(statearr_11915_13235[(1)] = (32));

} else {
var statearr_11916_13236 = state_11887__$1;
(statearr_11916_13236[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (32))){
var inst_11843 = (state_11887[(14)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11887__$1,(35),out,inst_11843);
} else {
if((state_val_11888 === (33))){
var inst_11834 = (state_11887[(12)]);
var inst_11811 = inst_11834;
var state_11887__$1 = (function (){var statearr_11917 = state_11887;
(statearr_11917[(7)] = inst_11811);

return statearr_11917;
})();
var statearr_11918_13237 = state_11887__$1;
(statearr_11918_13237[(2)] = null);

(statearr_11918_13237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (13))){
var inst_11811 = (state_11887[(7)]);
var inst_11818 = inst_11811.cljs$lang$protocol_mask$partition0$;
var inst_11819 = (inst_11818 & (64));
var inst_11820 = inst_11811.cljs$core$ISeq$;
var inst_11821 = (cljs.core.PROTOCOL_SENTINEL === inst_11820);
var inst_11822 = ((inst_11819) || (inst_11821));
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11822)){
var statearr_11919_13238 = state_11887__$1;
(statearr_11919_13238[(1)] = (16));

} else {
var statearr_11920_13239 = state_11887__$1;
(statearr_11920_13239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (22))){
var inst_11844 = (state_11887[(9)]);
var inst_11843 = (state_11887[(14)]);
var inst_11842 = (state_11887[(2)]);
var inst_11843__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11842,(0),null);
var inst_11844__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11842,(1),null);
var inst_11848 = (inst_11843__$1 == null);
var inst_11849 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11844__$1,change);
var inst_11850 = ((inst_11848) || (inst_11849));
var state_11887__$1 = (function (){var statearr_11921 = state_11887;
(statearr_11921[(9)] = inst_11844__$1);

(statearr_11921[(14)] = inst_11843__$1);

return statearr_11921;
})();
if(cljs.core.truth_(inst_11850)){
var statearr_11922_13240 = state_11887__$1;
(statearr_11922_13240[(1)] = (23));

} else {
var statearr_11923_13241 = state_11887__$1;
(statearr_11923_13241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (36))){
var inst_11834 = (state_11887[(12)]);
var inst_11811 = inst_11834;
var state_11887__$1 = (function (){var statearr_11924 = state_11887;
(statearr_11924[(7)] = inst_11811);

return statearr_11924;
})();
var statearr_11925_13242 = state_11887__$1;
(statearr_11925_13242[(2)] = null);

(statearr_11925_13242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (29))){
var inst_11861 = (state_11887[(10)]);
var state_11887__$1 = state_11887;
var statearr_11926_13243 = state_11887__$1;
(statearr_11926_13243[(2)] = inst_11861);

(statearr_11926_13243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (6))){
var state_11887__$1 = state_11887;
var statearr_11927_13244 = state_11887__$1;
(statearr_11927_13244[(2)] = false);

(statearr_11927_13244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (28))){
var inst_11857 = (state_11887[(2)]);
var inst_11858 = calc_state();
var inst_11811 = inst_11858;
var state_11887__$1 = (function (){var statearr_11928 = state_11887;
(statearr_11928[(15)] = inst_11857);

(statearr_11928[(7)] = inst_11811);

return statearr_11928;
})();
var statearr_11929_13245 = state_11887__$1;
(statearr_11929_13245[(2)] = null);

(statearr_11929_13245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (25))){
var inst_11883 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11930_13246 = state_11887__$1;
(statearr_11930_13246[(2)] = inst_11883);

(statearr_11930_13246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (34))){
var inst_11881 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11931_13247 = state_11887__$1;
(statearr_11931_13247[(2)] = inst_11881);

(statearr_11931_13247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (17))){
var state_11887__$1 = state_11887;
var statearr_11941_13248 = state_11887__$1;
(statearr_11941_13248[(2)] = false);

(statearr_11941_13248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (3))){
var state_11887__$1 = state_11887;
var statearr_11942_13249 = state_11887__$1;
(statearr_11942_13249[(2)] = false);

(statearr_11942_13249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (12))){
var inst_11885 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11887__$1,inst_11885);
} else {
if((state_val_11888 === (2))){
var inst_11786 = (state_11887[(8)]);
var inst_11791 = inst_11786.cljs$lang$protocol_mask$partition0$;
var inst_11792 = (inst_11791 & (64));
var inst_11793 = inst_11786.cljs$core$ISeq$;
var inst_11794 = (cljs.core.PROTOCOL_SENTINEL === inst_11793);
var inst_11795 = ((inst_11792) || (inst_11794));
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11795)){
var statearr_11943_13250 = state_11887__$1;
(statearr_11943_13250[(1)] = (5));

} else {
var statearr_11944_13251 = state_11887__$1;
(statearr_11944_13251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (23))){
var inst_11843 = (state_11887[(14)]);
var inst_11852 = (inst_11843 == null);
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11852)){
var statearr_11945_13252 = state_11887__$1;
(statearr_11945_13252[(1)] = (26));

} else {
var statearr_11946_13253 = state_11887__$1;
(statearr_11946_13253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (35))){
var inst_11872 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11872)){
var statearr_11947_13254 = state_11887__$1;
(statearr_11947_13254[(1)] = (36));

} else {
var statearr_11948_13255 = state_11887__$1;
(statearr_11948_13255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (19))){
var inst_11811 = (state_11887[(7)]);
var inst_11831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11811);
var state_11887__$1 = state_11887;
var statearr_11949_13256 = state_11887__$1;
(statearr_11949_13256[(2)] = inst_11831);

(statearr_11949_13256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (11))){
var inst_11811 = (state_11887[(7)]);
var inst_11815 = (inst_11811 == null);
var inst_11816 = cljs.core.not(inst_11815);
var state_11887__$1 = state_11887;
if(inst_11816){
var statearr_11950_13257 = state_11887__$1;
(statearr_11950_13257[(1)] = (13));

} else {
var statearr_11951_13258 = state_11887__$1;
(statearr_11951_13258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (9))){
var inst_11786 = (state_11887[(8)]);
var state_11887__$1 = state_11887;
var statearr_11952_13259 = state_11887__$1;
(statearr_11952_13259[(2)] = inst_11786);

(statearr_11952_13259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (5))){
var state_11887__$1 = state_11887;
var statearr_11953_13260 = state_11887__$1;
(statearr_11953_13260[(2)] = true);

(statearr_11953_13260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (14))){
var state_11887__$1 = state_11887;
var statearr_11954_13261 = state_11887__$1;
(statearr_11954_13261[(2)] = false);

(statearr_11954_13261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (26))){
var inst_11844 = (state_11887[(9)]);
var inst_11854 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11844);
var state_11887__$1 = state_11887;
var statearr_11955_13262 = state_11887__$1;
(statearr_11955_13262[(2)] = inst_11854);

(statearr_11955_13262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (16))){
var state_11887__$1 = state_11887;
var statearr_11956_13263 = state_11887__$1;
(statearr_11956_13263[(2)] = true);

(statearr_11956_13263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (38))){
var inst_11877 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11957_13264 = state_11887__$1;
(statearr_11957_13264[(2)] = inst_11877);

(statearr_11957_13264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (30))){
var inst_11844 = (state_11887[(9)]);
var inst_11835 = (state_11887[(11)]);
var inst_11836 = (state_11887[(13)]);
var inst_11864 = cljs.core.empty_QMARK_(inst_11835);
var inst_11865 = (inst_11836.cljs$core$IFn$_invoke$arity$1 ? inst_11836.cljs$core$IFn$_invoke$arity$1(inst_11844) : inst_11836.call(null,inst_11844));
var inst_11866 = cljs.core.not(inst_11865);
var inst_11867 = ((inst_11864) && (inst_11866));
var state_11887__$1 = state_11887;
var statearr_11958_13265 = state_11887__$1;
(statearr_11958_13265[(2)] = inst_11867);

(statearr_11958_13265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (10))){
var inst_11786 = (state_11887[(8)]);
var inst_11807 = (state_11887[(2)]);
var inst_11808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11807,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11807,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11807,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11811 = inst_11786;
var state_11887__$1 = (function (){var statearr_11962 = state_11887;
(statearr_11962[(7)] = inst_11811);

(statearr_11962[(16)] = inst_11809);

(statearr_11962[(17)] = inst_11810);

(statearr_11962[(18)] = inst_11808);

return statearr_11962;
})();
var statearr_11963_13266 = state_11887__$1;
(statearr_11963_13266[(2)] = null);

(statearr_11963_13266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (18))){
var inst_11826 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11964_13267 = state_11887__$1;
(statearr_11964_13267[(2)] = inst_11826);

(statearr_11964_13267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (37))){
var state_11887__$1 = state_11887;
var statearr_11965_13268 = state_11887__$1;
(statearr_11965_13268[(2)] = null);

(statearr_11965_13268[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (8))){
var inst_11786 = (state_11887[(8)]);
var inst_11804 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11786);
var state_11887__$1 = state_11887;
var statearr_11966_13269 = state_11887__$1;
(statearr_11966_13269[(2)] = inst_11804);

(statearr_11966_13269[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10864__auto__ = null;
var cljs$core$async$mix_$_state_machine__10864__auto____0 = (function (){
var statearr_11967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11967[(0)] = cljs$core$async$mix_$_state_machine__10864__auto__);

(statearr_11967[(1)] = (1));

return statearr_11967;
});
var cljs$core$async$mix_$_state_machine__10864__auto____1 = (function (state_11887){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_11887);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e11968){var ex__10867__auto__ = e11968;
var statearr_11973_13270 = state_11887;
(statearr_11973_13270[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_11887[(4)]))){
var statearr_11974_13271 = state_11887;
(statearr_11974_13271[(1)] = cljs.core.first((state_11887[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13272 = state_11887;
state_11887 = G__13272;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10864__auto__ = function(state_11887){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10864__auto____1.call(this,state_11887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10864__auto____0;
cljs$core$async$mix_$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10864__auto____1;
return cljs$core$async$mix_$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_11975 = f__10928__auto__();
(statearr_11975[(6)] = c__10927__auto___13223);

return statearr_11975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13273 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13273(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13274 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13274(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13275 = (function() {
var G__13276 = null;
var G__13276__1 = (function (p){
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
var G__13276__2 = (function (p,v){
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
G__13276 = function(p,v){
switch(arguments.length){
case 1:
return G__13276__1.call(this,p);
case 2:
return G__13276__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13276.cljs$core$IFn$_invoke$arity$1 = G__13276__1;
G__13276.cljs$core$IFn$_invoke$arity$2 = G__13276__2;
return G__13276;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13275(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13275(p,v);
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
var G__11983 = arguments.length;
switch (G__11983) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11984 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11985){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11985 = meta11985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11986,meta11985__$1){
var self__ = this;
var _11986__$1 = this;
return (new cljs.core.async.t_cljs$core$async11984(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11985__$1));
}));

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11986){
var self__ = this;
var _11986__$1 = this;
return self__.meta11985;
}));

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11984.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11985","meta11985",-1046689774,null)], null);
}));

(cljs.core.async.t_cljs$core$async11984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11984");

(cljs.core.async.t_cljs$core$async11984.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11984.
 */
cljs.core.async.__GT_t_cljs$core$async11984 = (function cljs$core$async$__GT_t_cljs$core$async11984(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11985){
return (new cljs.core.async.t_cljs$core$async11984(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11985));
});

}

return (new cljs.core.async.t_cljs$core$async11984(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10927__auto___13279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12063){
var state_val_12064 = (state_12063[(1)]);
if((state_val_12064 === (7))){
var inst_12059 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12065_13280 = state_12063__$1;
(statearr_12065_13280[(2)] = inst_12059);

(statearr_12065_13280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (20))){
var state_12063__$1 = state_12063;
var statearr_12066_13281 = state_12063__$1;
(statearr_12066_13281[(2)] = null);

(statearr_12066_13281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (1))){
var state_12063__$1 = state_12063;
var statearr_12067_13282 = state_12063__$1;
(statearr_12067_13282[(2)] = null);

(statearr_12067_13282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (24))){
var inst_12042 = (state_12063[(7)]);
var inst_12051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12042);
var state_12063__$1 = state_12063;
var statearr_12068_13283 = state_12063__$1;
(statearr_12068_13283[(2)] = inst_12051);

(statearr_12068_13283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (4))){
var inst_11993 = (state_12063[(8)]);
var inst_11993__$1 = (state_12063[(2)]);
var inst_11995 = (inst_11993__$1 == null);
var state_12063__$1 = (function (){var statearr_12069 = state_12063;
(statearr_12069[(8)] = inst_11993__$1);

return statearr_12069;
})();
if(cljs.core.truth_(inst_11995)){
var statearr_12070_13284 = state_12063__$1;
(statearr_12070_13284[(1)] = (5));

} else {
var statearr_12071_13285 = state_12063__$1;
(statearr_12071_13285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (15))){
var inst_12036 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12072_13286 = state_12063__$1;
(statearr_12072_13286[(2)] = inst_12036);

(statearr_12072_13286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (21))){
var inst_12056 = (state_12063[(2)]);
var state_12063__$1 = (function (){var statearr_12073 = state_12063;
(statearr_12073[(9)] = inst_12056);

return statearr_12073;
})();
var statearr_12074_13287 = state_12063__$1;
(statearr_12074_13287[(2)] = null);

(statearr_12074_13287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (13))){
var inst_12018 = (state_12063[(10)]);
var inst_12020 = cljs.core.chunked_seq_QMARK_(inst_12018);
var state_12063__$1 = state_12063;
if(inst_12020){
var statearr_12075_13288 = state_12063__$1;
(statearr_12075_13288[(1)] = (16));

} else {
var statearr_12076_13289 = state_12063__$1;
(statearr_12076_13289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (22))){
var inst_12048 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
if(cljs.core.truth_(inst_12048)){
var statearr_12077_13290 = state_12063__$1;
(statearr_12077_13290[(1)] = (23));

} else {
var statearr_12078_13291 = state_12063__$1;
(statearr_12078_13291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (6))){
var inst_12042 = (state_12063[(7)]);
var inst_12044 = (state_12063[(11)]);
var inst_11993 = (state_12063[(8)]);
var inst_12042__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11993) : topic_fn.call(null,inst_11993));
var inst_12043 = cljs.core.deref(mults);
var inst_12044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12043,inst_12042__$1);
var state_12063__$1 = (function (){var statearr_12079 = state_12063;
(statearr_12079[(7)] = inst_12042__$1);

(statearr_12079[(11)] = inst_12044__$1);

return statearr_12079;
})();
if(cljs.core.truth_(inst_12044__$1)){
var statearr_12080_13292 = state_12063__$1;
(statearr_12080_13292[(1)] = (19));

} else {
var statearr_12081_13293 = state_12063__$1;
(statearr_12081_13293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (25))){
var inst_12053 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12082_13294 = state_12063__$1;
(statearr_12082_13294[(2)] = inst_12053);

(statearr_12082_13294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (17))){
var inst_12018 = (state_12063[(10)]);
var inst_12027 = cljs.core.first(inst_12018);
var inst_12028 = cljs.core.async.muxch_STAR_(inst_12027);
var inst_12029 = cljs.core.async.close_BANG_(inst_12028);
var inst_12030 = cljs.core.next(inst_12018);
var inst_12004 = inst_12030;
var inst_12005 = null;
var inst_12006 = (0);
var inst_12007 = (0);
var state_12063__$1 = (function (){var statearr_12083 = state_12063;
(statearr_12083[(12)] = inst_12006);

(statearr_12083[(13)] = inst_12004);

(statearr_12083[(14)] = inst_12005);

(statearr_12083[(15)] = inst_12007);

(statearr_12083[(16)] = inst_12029);

return statearr_12083;
})();
var statearr_12084_13295 = state_12063__$1;
(statearr_12084_13295[(2)] = null);

(statearr_12084_13295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (3))){
var inst_12061 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12063__$1,inst_12061);
} else {
if((state_val_12064 === (12))){
var inst_12038 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12089_13296 = state_12063__$1;
(statearr_12089_13296[(2)] = inst_12038);

(statearr_12089_13296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (2))){
var state_12063__$1 = state_12063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12063__$1,(4),ch);
} else {
if((state_val_12064 === (23))){
var state_12063__$1 = state_12063;
var statearr_12094_13297 = state_12063__$1;
(statearr_12094_13297[(2)] = null);

(statearr_12094_13297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (19))){
var inst_12044 = (state_12063[(11)]);
var inst_11993 = (state_12063[(8)]);
var inst_12046 = cljs.core.async.muxch_STAR_(inst_12044);
var state_12063__$1 = state_12063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12063__$1,(22),inst_12046,inst_11993);
} else {
if((state_val_12064 === (11))){
var inst_12018 = (state_12063[(10)]);
var inst_12004 = (state_12063[(13)]);
var inst_12018__$1 = cljs.core.seq(inst_12004);
var state_12063__$1 = (function (){var statearr_12101 = state_12063;
(statearr_12101[(10)] = inst_12018__$1);

return statearr_12101;
})();
if(inst_12018__$1){
var statearr_12102_13298 = state_12063__$1;
(statearr_12102_13298[(1)] = (13));

} else {
var statearr_12103_13299 = state_12063__$1;
(statearr_12103_13299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (9))){
var inst_12040 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12106_13300 = state_12063__$1;
(statearr_12106_13300[(2)] = inst_12040);

(statearr_12106_13300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (5))){
var inst_12001 = cljs.core.deref(mults);
var inst_12002 = cljs.core.vals(inst_12001);
var inst_12003 = cljs.core.seq(inst_12002);
var inst_12004 = inst_12003;
var inst_12005 = null;
var inst_12006 = (0);
var inst_12007 = (0);
var state_12063__$1 = (function (){var statearr_12116 = state_12063;
(statearr_12116[(12)] = inst_12006);

(statearr_12116[(13)] = inst_12004);

(statearr_12116[(14)] = inst_12005);

(statearr_12116[(15)] = inst_12007);

return statearr_12116;
})();
var statearr_12117_13301 = state_12063__$1;
(statearr_12117_13301[(2)] = null);

(statearr_12117_13301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (14))){
var state_12063__$1 = state_12063;
var statearr_12121_13302 = state_12063__$1;
(statearr_12121_13302[(2)] = null);

(statearr_12121_13302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (16))){
var inst_12018 = (state_12063[(10)]);
var inst_12022 = cljs.core.chunk_first(inst_12018);
var inst_12023 = cljs.core.chunk_rest(inst_12018);
var inst_12024 = cljs.core.count(inst_12022);
var inst_12004 = inst_12023;
var inst_12005 = inst_12022;
var inst_12006 = inst_12024;
var inst_12007 = (0);
var state_12063__$1 = (function (){var statearr_12122 = state_12063;
(statearr_12122[(12)] = inst_12006);

(statearr_12122[(13)] = inst_12004);

(statearr_12122[(14)] = inst_12005);

(statearr_12122[(15)] = inst_12007);

return statearr_12122;
})();
var statearr_12123_13303 = state_12063__$1;
(statearr_12123_13303[(2)] = null);

(statearr_12123_13303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (10))){
var inst_12006 = (state_12063[(12)]);
var inst_12004 = (state_12063[(13)]);
var inst_12005 = (state_12063[(14)]);
var inst_12007 = (state_12063[(15)]);
var inst_12012 = cljs.core._nth(inst_12005,inst_12007);
var inst_12013 = cljs.core.async.muxch_STAR_(inst_12012);
var inst_12014 = cljs.core.async.close_BANG_(inst_12013);
var inst_12015 = (inst_12007 + (1));
var tmp12118 = inst_12006;
var tmp12119 = inst_12004;
var tmp12120 = inst_12005;
var inst_12004__$1 = tmp12119;
var inst_12005__$1 = tmp12120;
var inst_12006__$1 = tmp12118;
var inst_12007__$1 = inst_12015;
var state_12063__$1 = (function (){var statearr_12124 = state_12063;
(statearr_12124[(17)] = inst_12014);

(statearr_12124[(12)] = inst_12006__$1);

(statearr_12124[(13)] = inst_12004__$1);

(statearr_12124[(14)] = inst_12005__$1);

(statearr_12124[(15)] = inst_12007__$1);

return statearr_12124;
})();
var statearr_12125_13304 = state_12063__$1;
(statearr_12125_13304[(2)] = null);

(statearr_12125_13304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (18))){
var inst_12033 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12126_13305 = state_12063__$1;
(statearr_12126_13305[(2)] = inst_12033);

(statearr_12126_13305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (8))){
var inst_12006 = (state_12063[(12)]);
var inst_12007 = (state_12063[(15)]);
var inst_12009 = (inst_12007 < inst_12006);
var inst_12010 = inst_12009;
var state_12063__$1 = state_12063;
if(cljs.core.truth_(inst_12010)){
var statearr_12127_13306 = state_12063__$1;
(statearr_12127_13306[(1)] = (10));

} else {
var statearr_12128_13307 = state_12063__$1;
(statearr_12128_13307[(1)] = (11));

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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12144[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12144[(1)] = (1));

return statearr_12144;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12063){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12063);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12145){var ex__10867__auto__ = e12145;
var statearr_12146_13308 = state_12063;
(statearr_12146_13308[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12063[(4)]))){
var statearr_12147_13309 = state_12063;
(statearr_12147_13309[(1)] = cljs.core.first((state_12063[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13310 = state_12063;
state_12063 = G__13310;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12148 = f__10928__auto__();
(statearr_12148[(6)] = c__10927__auto___13279);

return statearr_12148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var G__12150 = arguments.length;
switch (G__12150) {
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
var G__12152 = arguments.length;
switch (G__12152) {
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
var G__12163 = arguments.length;
switch (G__12163) {
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
var c__10927__auto___13315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12208){
var state_val_12209 = (state_12208[(1)]);
if((state_val_12209 === (7))){
var state_12208__$1 = state_12208;
var statearr_12210_13316 = state_12208__$1;
(statearr_12210_13316[(2)] = null);

(statearr_12210_13316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (1))){
var state_12208__$1 = state_12208;
var statearr_12211_13317 = state_12208__$1;
(statearr_12211_13317[(2)] = null);

(statearr_12211_13317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (4))){
var inst_12167 = (state_12208[(7)]);
var inst_12166 = (state_12208[(8)]);
var inst_12169 = (inst_12167 < inst_12166);
var state_12208__$1 = state_12208;
if(cljs.core.truth_(inst_12169)){
var statearr_12212_13318 = state_12208__$1;
(statearr_12212_13318[(1)] = (6));

} else {
var statearr_12213_13319 = state_12208__$1;
(statearr_12213_13319[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (15))){
var inst_12194 = (state_12208[(9)]);
var inst_12199 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12194);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12208__$1,(17),out,inst_12199);
} else {
if((state_val_12209 === (13))){
var inst_12194 = (state_12208[(9)]);
var inst_12194__$1 = (state_12208[(2)]);
var inst_12195 = cljs.core.some(cljs.core.nil_QMARK_,inst_12194__$1);
var state_12208__$1 = (function (){var statearr_12214 = state_12208;
(statearr_12214[(9)] = inst_12194__$1);

return statearr_12214;
})();
if(cljs.core.truth_(inst_12195)){
var statearr_12215_13320 = state_12208__$1;
(statearr_12215_13320[(1)] = (14));

} else {
var statearr_12216_13321 = state_12208__$1;
(statearr_12216_13321[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (6))){
var state_12208__$1 = state_12208;
var statearr_12217_13322 = state_12208__$1;
(statearr_12217_13322[(2)] = null);

(statearr_12217_13322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (17))){
var inst_12201 = (state_12208[(2)]);
var state_12208__$1 = (function (){var statearr_12219 = state_12208;
(statearr_12219[(10)] = inst_12201);

return statearr_12219;
})();
var statearr_12220_13323 = state_12208__$1;
(statearr_12220_13323[(2)] = null);

(statearr_12220_13323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (3))){
var inst_12206 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12208__$1,inst_12206);
} else {
if((state_val_12209 === (12))){
var _ = (function (){var statearr_12221 = state_12208;
(statearr_12221[(4)] = cljs.core.rest((state_12208[(4)])));

return statearr_12221;
})();
var state_12208__$1 = state_12208;
var ex12218 = (state_12208__$1[(2)]);
var statearr_12222_13324 = state_12208__$1;
(statearr_12222_13324[(5)] = ex12218);


if((ex12218 instanceof Object)){
var statearr_12223_13326 = state_12208__$1;
(statearr_12223_13326[(1)] = (11));

(statearr_12223_13326[(5)] = null);

} else {
throw ex12218;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (2))){
var inst_12165 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12166 = cnt;
var inst_12167 = (0);
var state_12208__$1 = (function (){var statearr_12224 = state_12208;
(statearr_12224[(7)] = inst_12167);

(statearr_12224[(8)] = inst_12166);

(statearr_12224[(11)] = inst_12165);

return statearr_12224;
})();
var statearr_12225_13327 = state_12208__$1;
(statearr_12225_13327[(2)] = null);

(statearr_12225_13327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (11))){
var inst_12171 = (state_12208[(2)]);
var inst_12174 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12208__$1 = (function (){var statearr_12226 = state_12208;
(statearr_12226[(12)] = inst_12171);

return statearr_12226;
})();
var statearr_12227_13328 = state_12208__$1;
(statearr_12227_13328[(2)] = inst_12174);

(statearr_12227_13328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (9))){
var inst_12167 = (state_12208[(7)]);
var _ = (function (){var statearr_12228 = state_12208;
(statearr_12228[(4)] = cljs.core.cons((12),(state_12208[(4)])));

return statearr_12228;
})();
var inst_12180 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12167) : chs__$1.call(null,inst_12167));
var inst_12181 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12167) : done.call(null,inst_12167));
var inst_12182 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12180,inst_12181);
var ___$1 = (function (){var statearr_12229 = state_12208;
(statearr_12229[(4)] = cljs.core.rest((state_12208[(4)])));

return statearr_12229;
})();
var state_12208__$1 = state_12208;
var statearr_12230_13337 = state_12208__$1;
(statearr_12230_13337[(2)] = inst_12182);

(statearr_12230_13337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (5))){
var inst_12192 = (state_12208[(2)]);
var state_12208__$1 = (function (){var statearr_12231 = state_12208;
(statearr_12231[(13)] = inst_12192);

return statearr_12231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12208__$1,(13),dchan);
} else {
if((state_val_12209 === (14))){
var inst_12197 = cljs.core.async.close_BANG_(out);
var state_12208__$1 = state_12208;
var statearr_12232_13338 = state_12208__$1;
(statearr_12232_13338[(2)] = inst_12197);

(statearr_12232_13338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (16))){
var inst_12204 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12233_13340 = state_12208__$1;
(statearr_12233_13340[(2)] = inst_12204);

(statearr_12233_13340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (10))){
var inst_12167 = (state_12208[(7)]);
var inst_12185 = (state_12208[(2)]);
var inst_12186 = (inst_12167 + (1));
var inst_12167__$1 = inst_12186;
var state_12208__$1 = (function (){var statearr_12234 = state_12208;
(statearr_12234[(14)] = inst_12185);

(statearr_12234[(7)] = inst_12167__$1);

return statearr_12234;
})();
var statearr_12241_13349 = state_12208__$1;
(statearr_12241_13349[(2)] = null);

(statearr_12241_13349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (8))){
var inst_12190 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12242_13351 = state_12208__$1;
(statearr_12242_13351[(2)] = inst_12190);

(statearr_12242_13351[(1)] = (5));


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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12245[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12245[(1)] = (1));

return statearr_12245;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12208){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12208);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12246){var ex__10867__auto__ = e12246;
var statearr_12247_13356 = state_12208;
(statearr_12247_13356[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12208[(4)]))){
var statearr_12248_13360 = state_12208;
(statearr_12248_13360[(1)] = cljs.core.first((state_12208[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13361 = state_12208;
state_12208 = G__13361;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12249 = f__10928__auto__();
(statearr_12249[(6)] = c__10927__auto___13315);

return statearr_12249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var G__12252 = arguments.length;
switch (G__12252) {
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
var c__10927__auto___13363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12296){
var state_val_12297 = (state_12296[(1)]);
if((state_val_12297 === (7))){
var inst_12264 = (state_12296[(7)]);
var inst_12263 = (state_12296[(8)]);
var inst_12263__$1 = (state_12296[(2)]);
var inst_12264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12263__$1,(0),null);
var inst_12265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12263__$1,(1),null);
var inst_12266 = (inst_12264__$1 == null);
var state_12296__$1 = (function (){var statearr_12299 = state_12296;
(statearr_12299[(7)] = inst_12264__$1);

(statearr_12299[(9)] = inst_12265);

(statearr_12299[(8)] = inst_12263__$1);

return statearr_12299;
})();
if(cljs.core.truth_(inst_12266)){
var statearr_12300_13365 = state_12296__$1;
(statearr_12300_13365[(1)] = (8));

} else {
var statearr_12301_13366 = state_12296__$1;
(statearr_12301_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (1))){
var inst_12253 = cljs.core.vec(chs);
var inst_12254 = inst_12253;
var state_12296__$1 = (function (){var statearr_12302 = state_12296;
(statearr_12302[(10)] = inst_12254);

return statearr_12302;
})();
var statearr_12303_13367 = state_12296__$1;
(statearr_12303_13367[(2)] = null);

(statearr_12303_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (4))){
var inst_12254 = (state_12296[(10)]);
var state_12296__$1 = state_12296;
return cljs.core.async.ioc_alts_BANG_(state_12296__$1,(7),inst_12254);
} else {
if((state_val_12297 === (6))){
var inst_12292 = (state_12296[(2)]);
var state_12296__$1 = state_12296;
var statearr_12304_13368 = state_12296__$1;
(statearr_12304_13368[(2)] = inst_12292);

(statearr_12304_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (3))){
var inst_12294 = (state_12296[(2)]);
var state_12296__$1 = state_12296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12296__$1,inst_12294);
} else {
if((state_val_12297 === (2))){
var inst_12254 = (state_12296[(10)]);
var inst_12256 = cljs.core.count(inst_12254);
var inst_12257 = (inst_12256 > (0));
var state_12296__$1 = state_12296;
if(cljs.core.truth_(inst_12257)){
var statearr_12308_13369 = state_12296__$1;
(statearr_12308_13369[(1)] = (4));

} else {
var statearr_12309_13370 = state_12296__$1;
(statearr_12309_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (11))){
var inst_12254 = (state_12296[(10)]);
var inst_12285 = (state_12296[(2)]);
var tmp12305 = inst_12254;
var inst_12254__$1 = tmp12305;
var state_12296__$1 = (function (){var statearr_12319 = state_12296;
(statearr_12319[(11)] = inst_12285);

(statearr_12319[(10)] = inst_12254__$1);

return statearr_12319;
})();
var statearr_12320_13371 = state_12296__$1;
(statearr_12320_13371[(2)] = null);

(statearr_12320_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (9))){
var inst_12264 = (state_12296[(7)]);
var state_12296__$1 = state_12296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12296__$1,(11),out,inst_12264);
} else {
if((state_val_12297 === (5))){
var inst_12290 = cljs.core.async.close_BANG_(out);
var state_12296__$1 = state_12296;
var statearr_12321_13372 = state_12296__$1;
(statearr_12321_13372[(2)] = inst_12290);

(statearr_12321_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (10))){
var inst_12288 = (state_12296[(2)]);
var state_12296__$1 = state_12296;
var statearr_12322_13373 = state_12296__$1;
(statearr_12322_13373[(2)] = inst_12288);

(statearr_12322_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (8))){
var inst_12264 = (state_12296[(7)]);
var inst_12254 = (state_12296[(10)]);
var inst_12265 = (state_12296[(9)]);
var inst_12263 = (state_12296[(8)]);
var inst_12268 = (function (){var cs = inst_12254;
var vec__12259 = inst_12263;
var v = inst_12264;
var c = inst_12265;
return (function (p1__12250_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12250_SHARP_);
});
})();
var inst_12281 = cljs.core.filterv(inst_12268,inst_12254);
var inst_12254__$1 = inst_12281;
var state_12296__$1 = (function (){var statearr_12323 = state_12296;
(statearr_12323[(10)] = inst_12254__$1);

return statearr_12323;
})();
var statearr_12324_13374 = state_12296__$1;
(statearr_12324_13374[(2)] = null);

(statearr_12324_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12329 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12329[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12329[(1)] = (1));

return statearr_12329;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12296){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12296);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12334){var ex__10867__auto__ = e12334;
var statearr_12335_13375 = state_12296;
(statearr_12335_13375[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12296[(4)]))){
var statearr_12336_13376 = state_12296;
(statearr_12336_13376[(1)] = cljs.core.first((state_12296[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12296;
state_12296 = G__13377;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12341 = f__10928__auto__();
(statearr_12341[(6)] = c__10927__auto___13363);

return statearr_12341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var G__12346 = arguments.length;
switch (G__12346) {
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
var c__10927__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12378){
var state_val_12379 = (state_12378[(1)]);
if((state_val_12379 === (7))){
var inst_12358 = (state_12378[(7)]);
var inst_12358__$1 = (state_12378[(2)]);
var inst_12359 = (inst_12358__$1 == null);
var inst_12360 = cljs.core.not(inst_12359);
var state_12378__$1 = (function (){var statearr_12381 = state_12378;
(statearr_12381[(7)] = inst_12358__$1);

return statearr_12381;
})();
if(inst_12360){
var statearr_12382_13380 = state_12378__$1;
(statearr_12382_13380[(1)] = (8));

} else {
var statearr_12383_13381 = state_12378__$1;
(statearr_12383_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (1))){
var inst_12353 = (0);
var state_12378__$1 = (function (){var statearr_12384 = state_12378;
(statearr_12384[(8)] = inst_12353);

return statearr_12384;
})();
var statearr_12385_13382 = state_12378__$1;
(statearr_12385_13382[(2)] = null);

(statearr_12385_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (4))){
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12378__$1,(7),ch);
} else {
if((state_val_12379 === (6))){
var inst_12373 = (state_12378[(2)]);
var state_12378__$1 = state_12378;
var statearr_12389_13383 = state_12378__$1;
(statearr_12389_13383[(2)] = inst_12373);

(statearr_12389_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (3))){
var inst_12375 = (state_12378[(2)]);
var inst_12376 = cljs.core.async.close_BANG_(out);
var state_12378__$1 = (function (){var statearr_12390 = state_12378;
(statearr_12390[(9)] = inst_12375);

return statearr_12390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12378__$1,inst_12376);
} else {
if((state_val_12379 === (2))){
var inst_12353 = (state_12378[(8)]);
var inst_12355 = (inst_12353 < n);
var state_12378__$1 = state_12378;
if(cljs.core.truth_(inst_12355)){
var statearr_12401_13384 = state_12378__$1;
(statearr_12401_13384[(1)] = (4));

} else {
var statearr_12402_13385 = state_12378__$1;
(statearr_12402_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (11))){
var inst_12353 = (state_12378[(8)]);
var inst_12364 = (state_12378[(2)]);
var inst_12366 = (inst_12353 + (1));
var inst_12353__$1 = inst_12366;
var state_12378__$1 = (function (){var statearr_12404 = state_12378;
(statearr_12404[(10)] = inst_12364);

(statearr_12404[(8)] = inst_12353__$1);

return statearr_12404;
})();
var statearr_12405_13386 = state_12378__$1;
(statearr_12405_13386[(2)] = null);

(statearr_12405_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (9))){
var state_12378__$1 = state_12378;
var statearr_12409_13387 = state_12378__$1;
(statearr_12409_13387[(2)] = null);

(statearr_12409_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (5))){
var state_12378__$1 = state_12378;
var statearr_12410_13388 = state_12378__$1;
(statearr_12410_13388[(2)] = null);

(statearr_12410_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (10))){
var inst_12370 = (state_12378[(2)]);
var state_12378__$1 = state_12378;
var statearr_12411_13389 = state_12378__$1;
(statearr_12411_13389[(2)] = inst_12370);

(statearr_12411_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (8))){
var inst_12358 = (state_12378[(7)]);
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12378__$1,(11),out,inst_12358);
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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12412[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12412[(1)] = (1));

return statearr_12412;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12378){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12378);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12413){var ex__10867__auto__ = e12413;
var statearr_12414_13390 = state_12378;
(statearr_12414_13390[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12378[(4)]))){
var statearr_12415_13391 = state_12378;
(statearr_12415_13391[(1)] = cljs.core.first((state_12378[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12378;
state_12378 = G__13392;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12419 = f__10928__auto__();
(statearr_12419[(6)] = c__10927__auto___13379);

return statearr_12419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12422 = (function (f,ch,meta12423){
this.f = f;
this.ch = ch;
this.meta12423 = meta12423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12424,meta12423__$1){
var self__ = this;
var _12424__$1 = this;
return (new cljs.core.async.t_cljs$core$async12422(self__.f,self__.ch,meta12423__$1));
}));

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12424){
var self__ = this;
var _12424__$1 = this;
return self__.meta12423;
}));

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12430 = (function (f,ch,meta12423,_,fn1,meta12431){
this.f = f;
this.ch = ch;
this.meta12423 = meta12423;
this._ = _;
this.fn1 = fn1;
this.meta12431 = meta12431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12432,meta12431__$1){
var self__ = this;
var _12432__$1 = this;
return (new cljs.core.async.t_cljs$core$async12430(self__.f,self__.ch,self__.meta12423,self__._,self__.fn1,meta12431__$1));
}));

(cljs.core.async.t_cljs$core$async12430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12432){
var self__ = this;
var _12432__$1 = this;
return self__.meta12431;
}));

(cljs.core.async.t_cljs$core$async12430.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12421_SHARP_){
var G__12434 = (((p1__12421_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12421_SHARP_) : self__.f.call(null,p1__12421_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12434) : f1.call(null,G__12434));
});
}));

(cljs.core.async.t_cljs$core$async12430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12423","meta12423",-495701198,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12422","cljs.core.async/t_cljs$core$async12422",1817191103,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12431","meta12431",-246150972,null)], null);
}));

(cljs.core.async.t_cljs$core$async12430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12430");

(cljs.core.async.t_cljs$core$async12430.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12430.
 */
cljs.core.async.__GT_t_cljs$core$async12430 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12430(f__$1,ch__$1,meta12423__$1,___$2,fn1__$1,meta12431){
return (new cljs.core.async.t_cljs$core$async12430(f__$1,ch__$1,meta12423__$1,___$2,fn1__$1,meta12431));
});

}

return (new cljs.core.async.t_cljs$core$async12430(self__.f,self__.ch,self__.meta12423,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12437 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12437) : self__.f.call(null,G__12437));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12423","meta12423",-495701198,null)], null);
}));

(cljs.core.async.t_cljs$core$async12422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12422");

(cljs.core.async.t_cljs$core$async12422.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12422.
 */
cljs.core.async.__GT_t_cljs$core$async12422 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12422(f__$1,ch__$1,meta12423){
return (new cljs.core.async.t_cljs$core$async12422(f__$1,ch__$1,meta12423));
});

}

return (new cljs.core.async.t_cljs$core$async12422(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12438 = (function (f,ch,meta12439){
this.f = f;
this.ch = ch;
this.meta12439 = meta12439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12440,meta12439__$1){
var self__ = this;
var _12440__$1 = this;
return (new cljs.core.async.t_cljs$core$async12438(self__.f,self__.ch,meta12439__$1));
}));

(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12440){
var self__ = this;
var _12440__$1 = this;
return self__.meta12439;
}));

(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12439","meta12439",-1940528717,null)], null);
}));

(cljs.core.async.t_cljs$core$async12438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12438");

(cljs.core.async.t_cljs$core$async12438.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12438.
 */
cljs.core.async.__GT_t_cljs$core$async12438 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12438(f__$1,ch__$1,meta12439){
return (new cljs.core.async.t_cljs$core$async12438(f__$1,ch__$1,meta12439));
});

}

return (new cljs.core.async.t_cljs$core$async12438(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12446 = (function (p,ch,meta12447){
this.p = p;
this.ch = ch;
this.meta12447 = meta12447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12448,meta12447__$1){
var self__ = this;
var _12448__$1 = this;
return (new cljs.core.async.t_cljs$core$async12446(self__.p,self__.ch,meta12447__$1));
}));

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12448){
var self__ = this;
var _12448__$1 = this;
return self__.meta12447;
}));

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12447","meta12447",-611191646,null)], null);
}));

(cljs.core.async.t_cljs$core$async12446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12446");

(cljs.core.async.t_cljs$core$async12446.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12446.
 */
cljs.core.async.__GT_t_cljs$core$async12446 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12446(p__$1,ch__$1,meta12447){
return (new cljs.core.async.t_cljs$core$async12446(p__$1,ch__$1,meta12447));
});

}

return (new cljs.core.async.t_cljs$core$async12446(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12471 = arguments.length;
switch (G__12471) {
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
var c__10927__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12497){
var state_val_12498 = (state_12497[(1)]);
if((state_val_12498 === (7))){
var inst_12493 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12499_13395 = state_12497__$1;
(statearr_12499_13395[(2)] = inst_12493);

(statearr_12499_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (1))){
var state_12497__$1 = state_12497;
var statearr_12501_13396 = state_12497__$1;
(statearr_12501_13396[(2)] = null);

(statearr_12501_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (4))){
var inst_12479 = (state_12497[(7)]);
var inst_12479__$1 = (state_12497[(2)]);
var inst_12480 = (inst_12479__$1 == null);
var state_12497__$1 = (function (){var statearr_12503 = state_12497;
(statearr_12503[(7)] = inst_12479__$1);

return statearr_12503;
})();
if(cljs.core.truth_(inst_12480)){
var statearr_12505_13397 = state_12497__$1;
(statearr_12505_13397[(1)] = (5));

} else {
var statearr_12506_13398 = state_12497__$1;
(statearr_12506_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (6))){
var inst_12479 = (state_12497[(7)]);
var inst_12484 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12479) : p.call(null,inst_12479));
var state_12497__$1 = state_12497;
if(cljs.core.truth_(inst_12484)){
var statearr_12509_13399 = state_12497__$1;
(statearr_12509_13399[(1)] = (8));

} else {
var statearr_12510_13400 = state_12497__$1;
(statearr_12510_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (3))){
var inst_12495 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12497__$1,inst_12495);
} else {
if((state_val_12498 === (2))){
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12497__$1,(4),ch);
} else {
if((state_val_12498 === (11))){
var inst_12487 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12511_13401 = state_12497__$1;
(statearr_12511_13401[(2)] = inst_12487);

(statearr_12511_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (9))){
var state_12497__$1 = state_12497;
var statearr_12517_13402 = state_12497__$1;
(statearr_12517_13402[(2)] = null);

(statearr_12517_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (5))){
var inst_12482 = cljs.core.async.close_BANG_(out);
var state_12497__$1 = state_12497;
var statearr_12518_13403 = state_12497__$1;
(statearr_12518_13403[(2)] = inst_12482);

(statearr_12518_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (10))){
var inst_12490 = (state_12497[(2)]);
var state_12497__$1 = (function (){var statearr_12519 = state_12497;
(statearr_12519[(8)] = inst_12490);

return statearr_12519;
})();
var statearr_12520_13404 = state_12497__$1;
(statearr_12520_13404[(2)] = null);

(statearr_12520_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (8))){
var inst_12479 = (state_12497[(7)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12497__$1,(11),out,inst_12479);
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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12526 = [null,null,null,null,null,null,null,null,null];
(statearr_12526[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12526[(1)] = (1));

return statearr_12526;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12497){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12497);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12527){var ex__10867__auto__ = e12527;
var statearr_12531_13405 = state_12497;
(statearr_12531_13405[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12497[(4)]))){
var statearr_12532_13406 = state_12497;
(statearr_12532_13406[(1)] = cljs.core.first((state_12497[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12497;
state_12497 = G__13407;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12550 = f__10928__auto__();
(statearr_12550[(6)] = c__10927__auto___13394);

return statearr_12550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12552 = arguments.length;
switch (G__12552) {
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
var c__10927__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12617){
var state_val_12618 = (state_12617[(1)]);
if((state_val_12618 === (7))){
var inst_12613 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12620_13409 = state_12617__$1;
(statearr_12620_13409[(2)] = inst_12613);

(statearr_12620_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (20))){
var inst_12583 = (state_12617[(7)]);
var inst_12594 = (state_12617[(2)]);
var inst_12595 = cljs.core.next(inst_12583);
var inst_12569 = inst_12595;
var inst_12570 = null;
var inst_12571 = (0);
var inst_12572 = (0);
var state_12617__$1 = (function (){var statearr_12621 = state_12617;
(statearr_12621[(8)] = inst_12594);

(statearr_12621[(9)] = inst_12569);

(statearr_12621[(10)] = inst_12572);

(statearr_12621[(11)] = inst_12571);

(statearr_12621[(12)] = inst_12570);

return statearr_12621;
})();
var statearr_12622_13410 = state_12617__$1;
(statearr_12622_13410[(2)] = null);

(statearr_12622_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (1))){
var state_12617__$1 = state_12617;
var statearr_12623_13411 = state_12617__$1;
(statearr_12623_13411[(2)] = null);

(statearr_12623_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (4))){
var inst_12558 = (state_12617[(13)]);
var inst_12558__$1 = (state_12617[(2)]);
var inst_12559 = (inst_12558__$1 == null);
var state_12617__$1 = (function (){var statearr_12624 = state_12617;
(statearr_12624[(13)] = inst_12558__$1);

return statearr_12624;
})();
if(cljs.core.truth_(inst_12559)){
var statearr_12625_13412 = state_12617__$1;
(statearr_12625_13412[(1)] = (5));

} else {
var statearr_12626_13413 = state_12617__$1;
(statearr_12626_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (15))){
var state_12617__$1 = state_12617;
var statearr_12634_13414 = state_12617__$1;
(statearr_12634_13414[(2)] = null);

(statearr_12634_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (21))){
var state_12617__$1 = state_12617;
var statearr_12639_13415 = state_12617__$1;
(statearr_12639_13415[(2)] = null);

(statearr_12639_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (13))){
var inst_12569 = (state_12617[(9)]);
var inst_12572 = (state_12617[(10)]);
var inst_12571 = (state_12617[(11)]);
var inst_12570 = (state_12617[(12)]);
var inst_12579 = (state_12617[(2)]);
var inst_12580 = (inst_12572 + (1));
var tmp12631 = inst_12569;
var tmp12632 = inst_12571;
var tmp12633 = inst_12570;
var inst_12569__$1 = tmp12631;
var inst_12570__$1 = tmp12633;
var inst_12571__$1 = tmp12632;
var inst_12572__$1 = inst_12580;
var state_12617__$1 = (function (){var statearr_12644 = state_12617;
(statearr_12644[(9)] = inst_12569__$1);

(statearr_12644[(10)] = inst_12572__$1);

(statearr_12644[(14)] = inst_12579);

(statearr_12644[(11)] = inst_12571__$1);

(statearr_12644[(12)] = inst_12570__$1);

return statearr_12644;
})();
var statearr_12645_13416 = state_12617__$1;
(statearr_12645_13416[(2)] = null);

(statearr_12645_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (22))){
var state_12617__$1 = state_12617;
var statearr_12646_13417 = state_12617__$1;
(statearr_12646_13417[(2)] = null);

(statearr_12646_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (6))){
var inst_12558 = (state_12617[(13)]);
var inst_12567 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12558) : f.call(null,inst_12558));
var inst_12568 = cljs.core.seq(inst_12567);
var inst_12569 = inst_12568;
var inst_12570 = null;
var inst_12571 = (0);
var inst_12572 = (0);
var state_12617__$1 = (function (){var statearr_12648 = state_12617;
(statearr_12648[(9)] = inst_12569);

(statearr_12648[(10)] = inst_12572);

(statearr_12648[(11)] = inst_12571);

(statearr_12648[(12)] = inst_12570);

return statearr_12648;
})();
var statearr_12649_13418 = state_12617__$1;
(statearr_12649_13418[(2)] = null);

(statearr_12649_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (17))){
var inst_12583 = (state_12617[(7)]);
var inst_12587 = cljs.core.chunk_first(inst_12583);
var inst_12588 = cljs.core.chunk_rest(inst_12583);
var inst_12589 = cljs.core.count(inst_12587);
var inst_12569 = inst_12588;
var inst_12570 = inst_12587;
var inst_12571 = inst_12589;
var inst_12572 = (0);
var state_12617__$1 = (function (){var statearr_12652 = state_12617;
(statearr_12652[(9)] = inst_12569);

(statearr_12652[(10)] = inst_12572);

(statearr_12652[(11)] = inst_12571);

(statearr_12652[(12)] = inst_12570);

return statearr_12652;
})();
var statearr_12668_13419 = state_12617__$1;
(statearr_12668_13419[(2)] = null);

(statearr_12668_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (3))){
var inst_12615 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12617__$1,inst_12615);
} else {
if((state_val_12618 === (12))){
var inst_12603 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12672_13420 = state_12617__$1;
(statearr_12672_13420[(2)] = inst_12603);

(statearr_12672_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (2))){
var state_12617__$1 = state_12617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12617__$1,(4),in$);
} else {
if((state_val_12618 === (23))){
var inst_12611 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12673_13421 = state_12617__$1;
(statearr_12673_13421[(2)] = inst_12611);

(statearr_12673_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (19))){
var inst_12598 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12675_13422 = state_12617__$1;
(statearr_12675_13422[(2)] = inst_12598);

(statearr_12675_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (11))){
var inst_12569 = (state_12617[(9)]);
var inst_12583 = (state_12617[(7)]);
var inst_12583__$1 = cljs.core.seq(inst_12569);
var state_12617__$1 = (function (){var statearr_12678 = state_12617;
(statearr_12678[(7)] = inst_12583__$1);

return statearr_12678;
})();
if(inst_12583__$1){
var statearr_12679_13423 = state_12617__$1;
(statearr_12679_13423[(1)] = (14));

} else {
var statearr_12680_13424 = state_12617__$1;
(statearr_12680_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (9))){
var inst_12605 = (state_12617[(2)]);
var inst_12606 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12617__$1 = (function (){var statearr_12681 = state_12617;
(statearr_12681[(15)] = inst_12605);

return statearr_12681;
})();
if(cljs.core.truth_(inst_12606)){
var statearr_12682_13425 = state_12617__$1;
(statearr_12682_13425[(1)] = (21));

} else {
var statearr_12683_13426 = state_12617__$1;
(statearr_12683_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (5))){
var inst_12561 = cljs.core.async.close_BANG_(out);
var state_12617__$1 = state_12617;
var statearr_12684_13427 = state_12617__$1;
(statearr_12684_13427[(2)] = inst_12561);

(statearr_12684_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (14))){
var inst_12583 = (state_12617[(7)]);
var inst_12585 = cljs.core.chunked_seq_QMARK_(inst_12583);
var state_12617__$1 = state_12617;
if(inst_12585){
var statearr_12685_13428 = state_12617__$1;
(statearr_12685_13428[(1)] = (17));

} else {
var statearr_12686_13429 = state_12617__$1;
(statearr_12686_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (16))){
var inst_12601 = (state_12617[(2)]);
var state_12617__$1 = state_12617;
var statearr_12687_13430 = state_12617__$1;
(statearr_12687_13430[(2)] = inst_12601);

(statearr_12687_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12618 === (10))){
var inst_12572 = (state_12617[(10)]);
var inst_12570 = (state_12617[(12)]);
var inst_12577 = cljs.core._nth(inst_12570,inst_12572);
var state_12617__$1 = state_12617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12617__$1,(13),out,inst_12577);
} else {
if((state_val_12618 === (18))){
var inst_12583 = (state_12617[(7)]);
var inst_12592 = cljs.core.first(inst_12583);
var state_12617__$1 = state_12617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12617__$1,(20),out,inst_12592);
} else {
if((state_val_12618 === (8))){
var inst_12572 = (state_12617[(10)]);
var inst_12571 = (state_12617[(11)]);
var inst_12574 = (inst_12572 < inst_12571);
var inst_12575 = inst_12574;
var state_12617__$1 = state_12617;
if(cljs.core.truth_(inst_12575)){
var statearr_12697_13431 = state_12617__$1;
(statearr_12697_13431[(1)] = (10));

} else {
var statearr_12698_13432 = state_12617__$1;
(statearr_12698_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10864__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10864__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10864__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10864__auto____1 = (function (state_12617){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12617);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12700){var ex__10867__auto__ = e12700;
var statearr_12701_13433 = state_12617;
(statearr_12701_13433[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12617[(4)]))){
var statearr_12702_13434 = state_12617;
(statearr_12702_13434[(1)] = cljs.core.first((state_12617[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12617;
state_12617 = G__13435;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10864__auto__ = function(state_12617){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10864__auto____1.call(this,state_12617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10864__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10864__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12703 = f__10928__auto__();
(statearr_12703[(6)] = c__10927__auto__);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));

return c__10927__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12705 = arguments.length;
switch (G__12705) {
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
var G__12707 = arguments.length;
switch (G__12707) {
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
var G__12709 = arguments.length;
switch (G__12709) {
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
var c__10927__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12733){
var state_val_12734 = (state_12733[(1)]);
if((state_val_12734 === (7))){
var inst_12728 = (state_12733[(2)]);
var state_12733__$1 = state_12733;
var statearr_12735_13440 = state_12733__$1;
(statearr_12735_13440[(2)] = inst_12728);

(statearr_12735_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (1))){
var inst_12710 = null;
var state_12733__$1 = (function (){var statearr_12736 = state_12733;
(statearr_12736[(7)] = inst_12710);

return statearr_12736;
})();
var statearr_12737_13441 = state_12733__$1;
(statearr_12737_13441[(2)] = null);

(statearr_12737_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (4))){
var inst_12713 = (state_12733[(8)]);
var inst_12713__$1 = (state_12733[(2)]);
var inst_12714 = (inst_12713__$1 == null);
var inst_12715 = cljs.core.not(inst_12714);
var state_12733__$1 = (function (){var statearr_12738 = state_12733;
(statearr_12738[(8)] = inst_12713__$1);

return statearr_12738;
})();
if(inst_12715){
var statearr_12739_13442 = state_12733__$1;
(statearr_12739_13442[(1)] = (5));

} else {
var statearr_12740_13443 = state_12733__$1;
(statearr_12740_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (6))){
var state_12733__$1 = state_12733;
var statearr_12741_13444 = state_12733__$1;
(statearr_12741_13444[(2)] = null);

(statearr_12741_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (3))){
var inst_12730 = (state_12733[(2)]);
var inst_12731 = cljs.core.async.close_BANG_(out);
var state_12733__$1 = (function (){var statearr_12742 = state_12733;
(statearr_12742[(9)] = inst_12730);

return statearr_12742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12733__$1,inst_12731);
} else {
if((state_val_12734 === (2))){
var state_12733__$1 = state_12733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12733__$1,(4),ch);
} else {
if((state_val_12734 === (11))){
var inst_12713 = (state_12733[(8)]);
var inst_12722 = (state_12733[(2)]);
var inst_12710 = inst_12713;
var state_12733__$1 = (function (){var statearr_12743 = state_12733;
(statearr_12743[(10)] = inst_12722);

(statearr_12743[(7)] = inst_12710);

return statearr_12743;
})();
var statearr_12744_13445 = state_12733__$1;
(statearr_12744_13445[(2)] = null);

(statearr_12744_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (9))){
var inst_12713 = (state_12733[(8)]);
var state_12733__$1 = state_12733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12733__$1,(11),out,inst_12713);
} else {
if((state_val_12734 === (5))){
var inst_12710 = (state_12733[(7)]);
var inst_12713 = (state_12733[(8)]);
var inst_12717 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12713,inst_12710);
var state_12733__$1 = state_12733;
if(inst_12717){
var statearr_12746_13446 = state_12733__$1;
(statearr_12746_13446[(1)] = (8));

} else {
var statearr_12747_13447 = state_12733__$1;
(statearr_12747_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (10))){
var inst_12725 = (state_12733[(2)]);
var state_12733__$1 = state_12733;
var statearr_12748_13448 = state_12733__$1;
(statearr_12748_13448[(2)] = inst_12725);

(statearr_12748_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12734 === (8))){
var inst_12710 = (state_12733[(7)]);
var tmp12745 = inst_12710;
var inst_12710__$1 = tmp12745;
var state_12733__$1 = (function (){var statearr_12749 = state_12733;
(statearr_12749[(7)] = inst_12710__$1);

return statearr_12749;
})();
var statearr_12750_13449 = state_12733__$1;
(statearr_12750_13449[(2)] = null);

(statearr_12750_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12751[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12751[(1)] = (1));

return statearr_12751;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12733){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12733);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12752){var ex__10867__auto__ = e12752;
var statearr_12753_13450 = state_12733;
(statearr_12753_13450[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12733[(4)]))){
var statearr_12754_13451 = state_12733;
(statearr_12754_13451[(1)] = cljs.core.first((state_12733[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12733;
state_12733 = G__13452;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12755 = f__10928__auto__();
(statearr_12755[(6)] = c__10927__auto___13439);

return statearr_12755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12757 = arguments.length;
switch (G__12757) {
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
var c__10927__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12795){
var state_val_12796 = (state_12795[(1)]);
if((state_val_12796 === (7))){
var inst_12791 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12797_13455 = state_12795__$1;
(statearr_12797_13455[(2)] = inst_12791);

(statearr_12797_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (1))){
var inst_12758 = (new Array(n));
var inst_12759 = inst_12758;
var inst_12760 = (0);
var state_12795__$1 = (function (){var statearr_12798 = state_12795;
(statearr_12798[(7)] = inst_12760);

(statearr_12798[(8)] = inst_12759);

return statearr_12798;
})();
var statearr_12799_13456 = state_12795__$1;
(statearr_12799_13456[(2)] = null);

(statearr_12799_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (4))){
var inst_12763 = (state_12795[(9)]);
var inst_12763__$1 = (state_12795[(2)]);
var inst_12764 = (inst_12763__$1 == null);
var inst_12765 = cljs.core.not(inst_12764);
var state_12795__$1 = (function (){var statearr_12800 = state_12795;
(statearr_12800[(9)] = inst_12763__$1);

return statearr_12800;
})();
if(inst_12765){
var statearr_12801_13457 = state_12795__$1;
(statearr_12801_13457[(1)] = (5));

} else {
var statearr_12802_13458 = state_12795__$1;
(statearr_12802_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (15))){
var inst_12785 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12803_13459 = state_12795__$1;
(statearr_12803_13459[(2)] = inst_12785);

(statearr_12803_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (13))){
var state_12795__$1 = state_12795;
var statearr_12804_13460 = state_12795__$1;
(statearr_12804_13460[(2)] = null);

(statearr_12804_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (6))){
var inst_12760 = (state_12795[(7)]);
var inst_12781 = (inst_12760 > (0));
var state_12795__$1 = state_12795;
if(cljs.core.truth_(inst_12781)){
var statearr_12805_13461 = state_12795__$1;
(statearr_12805_13461[(1)] = (12));

} else {
var statearr_12806_13462 = state_12795__$1;
(statearr_12806_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (3))){
var inst_12793 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12795__$1,inst_12793);
} else {
if((state_val_12796 === (12))){
var inst_12759 = (state_12795[(8)]);
var inst_12783 = cljs.core.vec(inst_12759);
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12795__$1,(15),out,inst_12783);
} else {
if((state_val_12796 === (2))){
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12795__$1,(4),ch);
} else {
if((state_val_12796 === (11))){
var inst_12775 = (state_12795[(2)]);
var inst_12776 = (new Array(n));
var inst_12759 = inst_12776;
var inst_12760 = (0);
var state_12795__$1 = (function (){var statearr_12807 = state_12795;
(statearr_12807[(10)] = inst_12775);

(statearr_12807[(7)] = inst_12760);

(statearr_12807[(8)] = inst_12759);

return statearr_12807;
})();
var statearr_12808_13463 = state_12795__$1;
(statearr_12808_13463[(2)] = null);

(statearr_12808_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (9))){
var inst_12759 = (state_12795[(8)]);
var inst_12773 = cljs.core.vec(inst_12759);
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12795__$1,(11),out,inst_12773);
} else {
if((state_val_12796 === (5))){
var inst_12768 = (state_12795[(11)]);
var inst_12763 = (state_12795[(9)]);
var inst_12760 = (state_12795[(7)]);
var inst_12759 = (state_12795[(8)]);
var inst_12767 = (inst_12759[inst_12760] = inst_12763);
var inst_12768__$1 = (inst_12760 + (1));
var inst_12769 = (inst_12768__$1 < n);
var state_12795__$1 = (function (){var statearr_12809 = state_12795;
(statearr_12809[(11)] = inst_12768__$1);

(statearr_12809[(12)] = inst_12767);

return statearr_12809;
})();
if(cljs.core.truth_(inst_12769)){
var statearr_12810_13464 = state_12795__$1;
(statearr_12810_13464[(1)] = (8));

} else {
var statearr_12811_13465 = state_12795__$1;
(statearr_12811_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (14))){
var inst_12788 = (state_12795[(2)]);
var inst_12789 = cljs.core.async.close_BANG_(out);
var state_12795__$1 = (function (){var statearr_12813 = state_12795;
(statearr_12813[(13)] = inst_12788);

return statearr_12813;
})();
var statearr_12814_13466 = state_12795__$1;
(statearr_12814_13466[(2)] = inst_12789);

(statearr_12814_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (10))){
var inst_12779 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12815_13467 = state_12795__$1;
(statearr_12815_13467[(2)] = inst_12779);

(statearr_12815_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (8))){
var inst_12768 = (state_12795[(11)]);
var inst_12759 = (state_12795[(8)]);
var tmp12812 = inst_12759;
var inst_12759__$1 = tmp12812;
var inst_12760 = inst_12768;
var state_12795__$1 = (function (){var statearr_12816 = state_12795;
(statearr_12816[(7)] = inst_12760);

(statearr_12816[(8)] = inst_12759__$1);

return statearr_12816;
})();
var statearr_12817_13468 = state_12795__$1;
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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12820[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12820[(1)] = (1));

return statearr_12820;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12795){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12795);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12822){var ex__10867__auto__ = e12822;
var statearr_12823_13469 = state_12795;
(statearr_12823_13469[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12795[(4)]))){
var statearr_12824_13470 = state_12795;
(statearr_12824_13470[(1)] = cljs.core.first((state_12795[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12795;
state_12795 = G__13471;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12825 = f__10928__auto__();
(statearr_12825[(6)] = c__10927__auto___13454);

return statearr_12825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
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
var c__10927__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10928__auto__ = (function (){var switch__10863__auto__ = (function (state_12869){
var state_val_12870 = (state_12869[(1)]);
if((state_val_12870 === (7))){
var inst_12865 = (state_12869[(2)]);
var state_12869__$1 = state_12869;
var statearr_12871_13474 = state_12869__$1;
(statearr_12871_13474[(2)] = inst_12865);

(statearr_12871_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (1))){
var inst_12828 = [];
var inst_12829 = inst_12828;
var inst_12830 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12869__$1 = (function (){var statearr_12872 = state_12869;
(statearr_12872[(7)] = inst_12829);

(statearr_12872[(8)] = inst_12830);

return statearr_12872;
})();
var statearr_12873_13475 = state_12869__$1;
(statearr_12873_13475[(2)] = null);

(statearr_12873_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (4))){
var inst_12833 = (state_12869[(9)]);
var inst_12833__$1 = (state_12869[(2)]);
var inst_12834 = (inst_12833__$1 == null);
var inst_12835 = cljs.core.not(inst_12834);
var state_12869__$1 = (function (){var statearr_12874 = state_12869;
(statearr_12874[(9)] = inst_12833__$1);

return statearr_12874;
})();
if(inst_12835){
var statearr_12875_13476 = state_12869__$1;
(statearr_12875_13476[(1)] = (5));

} else {
var statearr_12876_13477 = state_12869__$1;
(statearr_12876_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (15))){
var inst_12859 = (state_12869[(2)]);
var state_12869__$1 = state_12869;
var statearr_12877_13478 = state_12869__$1;
(statearr_12877_13478[(2)] = inst_12859);

(statearr_12877_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (13))){
var state_12869__$1 = state_12869;
var statearr_12878_13479 = state_12869__$1;
(statearr_12878_13479[(2)] = null);

(statearr_12878_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (6))){
var inst_12829 = (state_12869[(7)]);
var inst_12854 = inst_12829.length;
var inst_12855 = (inst_12854 > (0));
var state_12869__$1 = state_12869;
if(cljs.core.truth_(inst_12855)){
var statearr_12880_13480 = state_12869__$1;
(statearr_12880_13480[(1)] = (12));

} else {
var statearr_12881_13481 = state_12869__$1;
(statearr_12881_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (3))){
var inst_12867 = (state_12869[(2)]);
var state_12869__$1 = state_12869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12869__$1,inst_12867);
} else {
if((state_val_12870 === (12))){
var inst_12829 = (state_12869[(7)]);
var inst_12857 = cljs.core.vec(inst_12829);
var state_12869__$1 = state_12869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12869__$1,(15),out,inst_12857);
} else {
if((state_val_12870 === (2))){
var state_12869__$1 = state_12869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12869__$1,(4),ch);
} else {
if((state_val_12870 === (11))){
var inst_12837 = (state_12869[(10)]);
var inst_12833 = (state_12869[(9)]);
var inst_12847 = (state_12869[(2)]);
var inst_12848 = [];
var inst_12849 = inst_12848.push(inst_12833);
var inst_12829 = inst_12848;
var inst_12830 = inst_12837;
var state_12869__$1 = (function (){var statearr_12882 = state_12869;
(statearr_12882[(11)] = inst_12849);

(statearr_12882[(12)] = inst_12847);

(statearr_12882[(7)] = inst_12829);

(statearr_12882[(8)] = inst_12830);

return statearr_12882;
})();
var statearr_12883_13482 = state_12869__$1;
(statearr_12883_13482[(2)] = null);

(statearr_12883_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (9))){
var inst_12829 = (state_12869[(7)]);
var inst_12845 = cljs.core.vec(inst_12829);
var state_12869__$1 = state_12869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12869__$1,(11),out,inst_12845);
} else {
if((state_val_12870 === (5))){
var inst_12837 = (state_12869[(10)]);
var inst_12833 = (state_12869[(9)]);
var inst_12830 = (state_12869[(8)]);
var inst_12837__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12833) : f.call(null,inst_12833));
var inst_12838 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12837__$1,inst_12830);
var inst_12839 = cljs.core.keyword_identical_QMARK_(inst_12830,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12840 = ((inst_12838) || (inst_12839));
var state_12869__$1 = (function (){var statearr_12884 = state_12869;
(statearr_12884[(10)] = inst_12837__$1);

return statearr_12884;
})();
if(cljs.core.truth_(inst_12840)){
var statearr_12885_13483 = state_12869__$1;
(statearr_12885_13483[(1)] = (8));

} else {
var statearr_12886_13484 = state_12869__$1;
(statearr_12886_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (14))){
var inst_12862 = (state_12869[(2)]);
var inst_12863 = cljs.core.async.close_BANG_(out);
var state_12869__$1 = (function (){var statearr_12888 = state_12869;
(statearr_12888[(13)] = inst_12862);

return statearr_12888;
})();
var statearr_12889_13485 = state_12869__$1;
(statearr_12889_13485[(2)] = inst_12863);

(statearr_12889_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (10))){
var inst_12852 = (state_12869[(2)]);
var state_12869__$1 = state_12869;
var statearr_12890_13486 = state_12869__$1;
(statearr_12890_13486[(2)] = inst_12852);

(statearr_12890_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12870 === (8))){
var inst_12837 = (state_12869[(10)]);
var inst_12829 = (state_12869[(7)]);
var inst_12833 = (state_12869[(9)]);
var inst_12842 = inst_12829.push(inst_12833);
var tmp12887 = inst_12829;
var inst_12829__$1 = tmp12887;
var inst_12830 = inst_12837;
var state_12869__$1 = (function (){var statearr_12891 = state_12869;
(statearr_12891[(14)] = inst_12842);

(statearr_12891[(7)] = inst_12829__$1);

(statearr_12891[(8)] = inst_12830);

return statearr_12891;
})();
var statearr_12892_13487 = state_12869__$1;
(statearr_12892_13487[(2)] = null);

(statearr_12892_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10864__auto__ = null;
var cljs$core$async$state_machine__10864__auto____0 = (function (){
var statearr_12893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12893[(0)] = cljs$core$async$state_machine__10864__auto__);

(statearr_12893[(1)] = (1));

return statearr_12893;
});
var cljs$core$async$state_machine__10864__auto____1 = (function (state_12869){
while(true){
var ret_value__10865__auto__ = (function (){try{while(true){
var result__10866__auto__ = switch__10863__auto__(state_12869);
if(cljs.core.keyword_identical_QMARK_(result__10866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10866__auto__;
}
break;
}
}catch (e12894){var ex__10867__auto__ = e12894;
var statearr_12895_13488 = state_12869;
(statearr_12895_13488[(2)] = ex__10867__auto__);


if(cljs.core.seq((state_12869[(4)]))){
var statearr_12896_13489 = state_12869;
(statearr_12896_13489[(1)] = cljs.core.first((state_12869[(4)])));

} else {
throw ex__10867__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12869;
state_12869 = G__13490;
continue;
} else {
return ret_value__10865__auto__;
}
break;
}
});
cljs$core$async$state_machine__10864__auto__ = function(state_12869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10864__auto____1.call(this,state_12869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10864__auto____0;
cljs$core$async$state_machine__10864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10864__auto____1;
return cljs$core$async$state_machine__10864__auto__;
})()
})();
var state__10929__auto__ = (function (){var statearr_12897 = f__10928__auto__();
(statearr_12897[(6)] = c__10927__auto___13473);

return statearr_12897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10929__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
