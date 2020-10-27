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
var G__11037 = arguments.length;
switch (G__11037) {
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
var G__11039 = arguments.length;
switch (G__11039) {
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
var val_13002 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13002) : fn1.call(null,val_13002));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13002) : fn1.call(null,val_13002));
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
var G__11044 = arguments.length;
switch (G__11044) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11045 = (function (flag,meta11046){
this.flag = flag;
this.meta11046 = meta11046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11047,meta11046__$1){
var self__ = this;
var _11047__$1 = this;
return (new cljs.core.async.t_cljs$core$async11045(self__.flag,meta11046__$1));
}));

(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11047){
var self__ = this;
var _11047__$1 = this;
return self__.meta11046;
}));

(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11046","meta11046",-410823665,null)], null);
}));

(cljs.core.async.t_cljs$core$async11045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11045");

(cljs.core.async.t_cljs$core$async11045.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11045.
 */
cljs.core.async.__GT_t_cljs$core$async11045 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11045(flag__$1,meta11046){
return (new cljs.core.async.t_cljs$core$async11045(flag__$1,meta11046));
});

}

return (new cljs.core.async.t_cljs$core$async11045(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11050 = (function (flag,cb,meta11051){
this.flag = flag;
this.cb = cb;
this.meta11051 = meta11051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11052,meta11051__$1){
var self__ = this;
var _11052__$1 = this;
return (new cljs.core.async.t_cljs$core$async11050(self__.flag,self__.cb,meta11051__$1));
}));

(cljs.core.async.t_cljs$core$async11050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11052){
var self__ = this;
var _11052__$1 = this;
return self__.meta11051;
}));

(cljs.core.async.t_cljs$core$async11050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11051","meta11051",-1068500003,null)], null);
}));

(cljs.core.async.t_cljs$core$async11050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11050");

(cljs.core.async.t_cljs$core$async11050.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11050.
 */
cljs.core.async.__GT_t_cljs$core$async11050 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11050(flag__$1,cb__$1,meta11051){
return (new cljs.core.async.t_cljs$core$async11050(flag__$1,cb__$1,meta11051));
});

}

return (new cljs.core.async.t_cljs$core$async11050(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11053_SHARP_){
var G__11055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11053_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11055) : fret.call(null,G__11055));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11054_SHARP_){
var G__11056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11054_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11056) : fret.call(null,G__11056));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11059){
var map__11060 = p__11059;
var map__11060__$1 = (((((!((map__11060 == null))))?(((((map__11060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11060):map__11060);
var opts = map__11060__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11057){
var G__11058 = cljs.core.first(seq11057);
var seq11057__$1 = cljs.core.next(seq11057);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11058,seq11057__$1);
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
var c__10971__auto___13012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11089){
var state_val_11090 = (state_11089[(1)]);
if((state_val_11090 === (7))){
var inst_11085 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
var statearr_11091_13013 = state_11089__$1;
(statearr_11091_13013[(2)] = inst_11085);

(statearr_11091_13013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (1))){
var state_11089__$1 = state_11089;
var statearr_11092_13014 = state_11089__$1;
(statearr_11092_13014[(2)] = null);

(statearr_11092_13014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (4))){
var inst_11068 = (state_11089[(7)]);
var inst_11068__$1 = (state_11089[(2)]);
var inst_11069 = (inst_11068__$1 == null);
var state_11089__$1 = (function (){var statearr_11093 = state_11089;
(statearr_11093[(7)] = inst_11068__$1);

return statearr_11093;
})();
if(cljs.core.truth_(inst_11069)){
var statearr_11094_13015 = state_11089__$1;
(statearr_11094_13015[(1)] = (5));

} else {
var statearr_11095_13016 = state_11089__$1;
(statearr_11095_13016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (13))){
var state_11089__$1 = state_11089;
var statearr_11096_13017 = state_11089__$1;
(statearr_11096_13017[(2)] = null);

(statearr_11096_13017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (6))){
var inst_11068 = (state_11089[(7)]);
var state_11089__$1 = state_11089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11089__$1,(11),to,inst_11068);
} else {
if((state_val_11090 === (3))){
var inst_11087 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11089__$1,inst_11087);
} else {
if((state_val_11090 === (12))){
var state_11089__$1 = state_11089;
var statearr_11100_13018 = state_11089__$1;
(statearr_11100_13018[(2)] = null);

(statearr_11100_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (2))){
var state_11089__$1 = state_11089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11089__$1,(4),from);
} else {
if((state_val_11090 === (11))){
var inst_11078 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
if(cljs.core.truth_(inst_11078)){
var statearr_11102_13019 = state_11089__$1;
(statearr_11102_13019[(1)] = (12));

} else {
var statearr_11104_13020 = state_11089__$1;
(statearr_11104_13020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (9))){
var state_11089__$1 = state_11089;
var statearr_11106_13021 = state_11089__$1;
(statearr_11106_13021[(2)] = null);

(statearr_11106_13021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (5))){
var state_11089__$1 = state_11089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11107_13022 = state_11089__$1;
(statearr_11107_13022[(1)] = (8));

} else {
var statearr_11108_13023 = state_11089__$1;
(statearr_11108_13023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (14))){
var inst_11083 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
var statearr_11109_13024 = state_11089__$1;
(statearr_11109_13024[(2)] = inst_11083);

(statearr_11109_13024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (10))){
var inst_11075 = (state_11089[(2)]);
var state_11089__$1 = state_11089;
var statearr_11110_13025 = state_11089__$1;
(statearr_11110_13025[(2)] = inst_11075);

(statearr_11110_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11090 === (8))){
var inst_11072 = cljs.core.async.close_BANG_(to);
var state_11089__$1 = state_11089;
var statearr_11111_13026 = state_11089__$1;
(statearr_11111_13026[(2)] = inst_11072);

(statearr_11111_13026[(1)] = (10));


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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_11112 = [null,null,null,null,null,null,null,null];
(statearr_11112[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_11112[(1)] = (1));

return statearr_11112;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_11089){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11089);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11113){var ex__10901__auto__ = e11113;
var statearr_11114_13027 = state_11089;
(statearr_11114_13027[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11089[(4)]))){
var statearr_11115_13028 = state_11089;
(statearr_11115_13028[(1)] = cljs.core.first((state_11089[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_11089;
state_11089 = G__13029;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_11089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_11089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11116 = f__10972__auto__();
(statearr_11116[(6)] = c__10971__auto___13012);

return statearr_11116;
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
var process = (function (p__11117){
var vec__11118 = p__11117;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11118,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11118,(1),null);
var job = vec__11118;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10971__auto___13030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11125){
var state_val_11126 = (state_11125[(1)]);
if((state_val_11126 === (1))){
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11125__$1,(2),res,v);
} else {
if((state_val_11126 === (2))){
var inst_11122 = (state_11125[(2)]);
var inst_11123 = cljs.core.async.close_BANG_(res);
var state_11125__$1 = (function (){var statearr_11127 = state_11125;
(statearr_11127[(7)] = inst_11122);

return statearr_11127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11125__$1,inst_11123);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0 = (function (){
var statearr_11128 = [null,null,null,null,null,null,null,null];
(statearr_11128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__);

(statearr_11128[(1)] = (1));

return statearr_11128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1 = (function (state_11125){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11125);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11129){var ex__10901__auto__ = e11129;
var statearr_11130_13031 = state_11125;
(statearr_11130_13031[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11125[(4)]))){
var statearr_11131_13032 = state_11125;
(statearr_11131_13032[(1)] = cljs.core.first((state_11125[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11125;
state_11125 = G__13033;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11132 = f__10972__auto__();
(statearr_11132[(6)] = c__10971__auto___13030);

return statearr_11132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11135){
var vec__11136 = p__11135;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(1),null);
var job = vec__11136;
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
var n__4613__auto___13035 = n;
var __13036 = (0);
while(true){
if((__13036 < n__4613__auto___13035)){
var G__11139_13037 = type;
var G__11139_13038__$1 = (((G__11139_13037 instanceof cljs.core.Keyword))?G__11139_13037.fqn:null);
switch (G__11139_13038__$1) {
case "compute":
var c__10971__auto___13040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13036,c__10971__auto___13040,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async){
return (function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = ((function (__13036,c__10971__auto___13040,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async){
return (function (state_11152){
var state_val_11153 = (state_11152[(1)]);
if((state_val_11153 === (1))){
var state_11152__$1 = state_11152;
var statearr_11154_13041 = state_11152__$1;
(statearr_11154_13041[(2)] = null);

(statearr_11154_13041[(1)] = (2));


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
var statearr_11155_13042 = state_11152__$1;
(statearr_11155_13042[(1)] = (5));

} else {
var statearr_11156_13043 = state_11152__$1;
(statearr_11156_13043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (5))){
var state_11152__$1 = state_11152;
var statearr_11157_13044 = state_11152__$1;
(statearr_11157_13044[(2)] = null);

(statearr_11157_13044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (6))){
var state_11152__$1 = state_11152;
var statearr_11158_13045 = state_11152__$1;
(statearr_11158_13045[(2)] = null);

(statearr_11158_13045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (7))){
var inst_11148 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11159_13046 = state_11152__$1;
(statearr_11159_13046[(2)] = inst_11148);

(statearr_11159_13046[(1)] = (3));


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
});})(__13036,c__10971__auto___13040,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async))
;
return ((function (__13036,switch__10897__auto__,c__10971__auto___13040,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0 = (function (){
var statearr_11160 = [null,null,null,null,null,null,null];
(statearr_11160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__);

(statearr_11160[(1)] = (1));

return statearr_11160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1 = (function (state_11152){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11152);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11161){var ex__10901__auto__ = e11161;
var statearr_11162_13048 = state_11152;
(statearr_11162_13048[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11152[(4)]))){
var statearr_11163_13049 = state_11152;
(statearr_11163_13049[(1)] = cljs.core.first((state_11152[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13050 = state_11152;
state_11152 = G__13050;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = function(state_11152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1.call(this,state_11152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__;
})()
;})(__13036,switch__10897__auto__,c__10971__auto___13040,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async))
})();
var state__10973__auto__ = (function (){var statearr_11164 = f__10972__auto__();
(statearr_11164[(6)] = c__10971__auto___13040);

return statearr_11164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
});})(__13036,c__10971__auto___13040,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async))
);


break;
case "async":
var c__10971__auto___13051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13036,c__10971__auto___13051,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async){
return (function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = ((function (__13036,c__10971__auto___13051,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async){
return (function (state_11177){
var state_val_11178 = (state_11177[(1)]);
if((state_val_11178 === (1))){
var state_11177__$1 = state_11177;
var statearr_11179_13052 = state_11177__$1;
(statearr_11179_13052[(2)] = null);

(statearr_11179_13052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11178 === (2))){
var state_11177__$1 = state_11177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11177__$1,(4),jobs);
} else {
if((state_val_11178 === (3))){
var inst_11175 = (state_11177[(2)]);
var state_11177__$1 = state_11177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11177__$1,inst_11175);
} else {
if((state_val_11178 === (4))){
var inst_11167 = (state_11177[(2)]);
var inst_11168 = async(inst_11167);
var state_11177__$1 = state_11177;
if(cljs.core.truth_(inst_11168)){
var statearr_11180_13055 = state_11177__$1;
(statearr_11180_13055[(1)] = (5));

} else {
var statearr_11181_13056 = state_11177__$1;
(statearr_11181_13056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11178 === (5))){
var state_11177__$1 = state_11177;
var statearr_11182_13058 = state_11177__$1;
(statearr_11182_13058[(2)] = null);

(statearr_11182_13058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11178 === (6))){
var state_11177__$1 = state_11177;
var statearr_11183_13061 = state_11177__$1;
(statearr_11183_13061[(2)] = null);

(statearr_11183_13061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11178 === (7))){
var inst_11173 = (state_11177[(2)]);
var state_11177__$1 = state_11177;
var statearr_11184_13079 = state_11177__$1;
(statearr_11184_13079[(2)] = inst_11173);

(statearr_11184_13079[(1)] = (3));


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
});})(__13036,c__10971__auto___13051,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async))
;
return ((function (__13036,switch__10897__auto__,c__10971__auto___13051,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0 = (function (){
var statearr_11185 = [null,null,null,null,null,null,null];
(statearr_11185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__);

(statearr_11185[(1)] = (1));

return statearr_11185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1 = (function (state_11177){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11177);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11186){var ex__10901__auto__ = e11186;
var statearr_11187_13080 = state_11177;
(statearr_11187_13080[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11177[(4)]))){
var statearr_11188_13081 = state_11177;
(statearr_11188_13081[(1)] = cljs.core.first((state_11177[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13082 = state_11177;
state_11177 = G__13082;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = function(state_11177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1.call(this,state_11177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__;
})()
;})(__13036,switch__10897__auto__,c__10971__auto___13051,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async))
})();
var state__10973__auto__ = (function (){var statearr_11190 = f__10972__auto__();
(statearr_11190[(6)] = c__10971__auto___13051);

return statearr_11190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
});})(__13036,c__10971__auto___13051,G__11139_13037,G__11139_13038__$1,n__4613__auto___13035,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11139_13038__$1)].join('')));

}

var G__13083 = (__13036 + (1));
__13036 = G__13083;
continue;
} else {
}
break;
}

var c__10971__auto___13084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11212){
var state_val_11213 = (state_11212[(1)]);
if((state_val_11213 === (7))){
var inst_11208 = (state_11212[(2)]);
var state_11212__$1 = state_11212;
var statearr_11214_13085 = state_11212__$1;
(statearr_11214_13085[(2)] = inst_11208);

(statearr_11214_13085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (1))){
var state_11212__$1 = state_11212;
var statearr_11215_13088 = state_11212__$1;
(statearr_11215_13088[(2)] = null);

(statearr_11215_13088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (4))){
var inst_11193 = (state_11212[(7)]);
var inst_11193__$1 = (state_11212[(2)]);
var inst_11194 = (inst_11193__$1 == null);
var state_11212__$1 = (function (){var statearr_11216 = state_11212;
(statearr_11216[(7)] = inst_11193__$1);

return statearr_11216;
})();
if(cljs.core.truth_(inst_11194)){
var statearr_11217_13090 = state_11212__$1;
(statearr_11217_13090[(1)] = (5));

} else {
var statearr_11218_13091 = state_11212__$1;
(statearr_11218_13091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (6))){
var inst_11198 = (state_11212[(8)]);
var inst_11193 = (state_11212[(7)]);
var inst_11198__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11200 = [inst_11193,inst_11198__$1];
var inst_11201 = (new cljs.core.PersistentVector(null,2,(5),inst_11199,inst_11200,null));
var state_11212__$1 = (function (){var statearr_11219 = state_11212;
(statearr_11219[(8)] = inst_11198__$1);

return statearr_11219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11212__$1,(8),jobs,inst_11201);
} else {
if((state_val_11213 === (3))){
var inst_11210 = (state_11212[(2)]);
var state_11212__$1 = state_11212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11212__$1,inst_11210);
} else {
if((state_val_11213 === (2))){
var state_11212__$1 = state_11212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11212__$1,(4),from);
} else {
if((state_val_11213 === (9))){
var inst_11205 = (state_11212[(2)]);
var state_11212__$1 = (function (){var statearr_11220 = state_11212;
(statearr_11220[(9)] = inst_11205);

return statearr_11220;
})();
var statearr_11221_13092 = state_11212__$1;
(statearr_11221_13092[(2)] = null);

(statearr_11221_13092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (5))){
var inst_11196 = cljs.core.async.close_BANG_(jobs);
var state_11212__$1 = state_11212;
var statearr_11222_13093 = state_11212__$1;
(statearr_11222_13093[(2)] = inst_11196);

(statearr_11222_13093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (8))){
var inst_11198 = (state_11212[(8)]);
var inst_11203 = (state_11212[(2)]);
var state_11212__$1 = (function (){var statearr_11223 = state_11212;
(statearr_11223[(10)] = inst_11203);

return statearr_11223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11212__$1,(9),results,inst_11198);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0 = (function (){
var statearr_11224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__);

(statearr_11224[(1)] = (1));

return statearr_11224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1 = (function (state_11212){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11212);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11225){var ex__10901__auto__ = e11225;
var statearr_11226_13095 = state_11212;
(statearr_11226_13095[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11212[(4)]))){
var statearr_11227_13096 = state_11212;
(statearr_11227_13096[(1)] = cljs.core.first((state_11212[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11212;
state_11212 = G__13097;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = function(state_11212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1.call(this,state_11212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11228 = f__10972__auto__();
(statearr_11228[(6)] = c__10971__auto___13084);

return statearr_11228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


var c__10971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11266){
var state_val_11267 = (state_11266[(1)]);
if((state_val_11267 === (7))){
var inst_11262 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11269_13098 = state_11266__$1;
(statearr_11269_13098[(2)] = inst_11262);

(statearr_11269_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (20))){
var state_11266__$1 = state_11266;
var statearr_11271_13099 = state_11266__$1;
(statearr_11271_13099[(2)] = null);

(statearr_11271_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (1))){
var state_11266__$1 = state_11266;
var statearr_11272_13100 = state_11266__$1;
(statearr_11272_13100[(2)] = null);

(statearr_11272_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (4))){
var inst_11231 = (state_11266[(7)]);
var inst_11231__$1 = (state_11266[(2)]);
var inst_11232 = (inst_11231__$1 == null);
var state_11266__$1 = (function (){var statearr_11274 = state_11266;
(statearr_11274[(7)] = inst_11231__$1);

return statearr_11274;
})();
if(cljs.core.truth_(inst_11232)){
var statearr_11275_13101 = state_11266__$1;
(statearr_11275_13101[(1)] = (5));

} else {
var statearr_11276_13102 = state_11266__$1;
(statearr_11276_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (15))){
var inst_11244 = (state_11266[(8)]);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11266__$1,(18),to,inst_11244);
} else {
if((state_val_11267 === (21))){
var inst_11257 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11278_13103 = state_11266__$1;
(statearr_11278_13103[(2)] = inst_11257);

(statearr_11278_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (13))){
var inst_11259 = (state_11266[(2)]);
var state_11266__$1 = (function (){var statearr_11279 = state_11266;
(statearr_11279[(9)] = inst_11259);

return statearr_11279;
})();
var statearr_11280_13104 = state_11266__$1;
(statearr_11280_13104[(2)] = null);

(statearr_11280_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (6))){
var inst_11231 = (state_11266[(7)]);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11266__$1,(11),inst_11231);
} else {
if((state_val_11267 === (17))){
var inst_11252 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
if(cljs.core.truth_(inst_11252)){
var statearr_11281_13105 = state_11266__$1;
(statearr_11281_13105[(1)] = (19));

} else {
var statearr_11282_13106 = state_11266__$1;
(statearr_11282_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (3))){
var inst_11264 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11266__$1,inst_11264);
} else {
if((state_val_11267 === (12))){
var inst_11241 = (state_11266[(10)]);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11266__$1,(14),inst_11241);
} else {
if((state_val_11267 === (2))){
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11266__$1,(4),results);
} else {
if((state_val_11267 === (19))){
var state_11266__$1 = state_11266;
var statearr_11283_13107 = state_11266__$1;
(statearr_11283_13107[(2)] = null);

(statearr_11283_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (11))){
var inst_11241 = (state_11266[(2)]);
var state_11266__$1 = (function (){var statearr_11284 = state_11266;
(statearr_11284[(10)] = inst_11241);

return statearr_11284;
})();
var statearr_11285_13108 = state_11266__$1;
(statearr_11285_13108[(2)] = null);

(statearr_11285_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (9))){
var state_11266__$1 = state_11266;
var statearr_11286_13109 = state_11266__$1;
(statearr_11286_13109[(2)] = null);

(statearr_11286_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (5))){
var state_11266__$1 = state_11266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11287_13110 = state_11266__$1;
(statearr_11287_13110[(1)] = (8));

} else {
var statearr_11288_13111 = state_11266__$1;
(statearr_11288_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (14))){
var inst_11244 = (state_11266[(8)]);
var inst_11244__$1 = (state_11266[(2)]);
var inst_11245 = (inst_11244__$1 == null);
var inst_11246 = cljs.core.not(inst_11245);
var state_11266__$1 = (function (){var statearr_11289 = state_11266;
(statearr_11289[(8)] = inst_11244__$1);

return statearr_11289;
})();
if(inst_11246){
var statearr_11290_13112 = state_11266__$1;
(statearr_11290_13112[(1)] = (15));

} else {
var statearr_11291_13113 = state_11266__$1;
(statearr_11291_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (16))){
var state_11266__$1 = state_11266;
var statearr_11292_13114 = state_11266__$1;
(statearr_11292_13114[(2)] = false);

(statearr_11292_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (10))){
var inst_11238 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11294_13115 = state_11266__$1;
(statearr_11294_13115[(2)] = inst_11238);

(statearr_11294_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (18))){
var inst_11249 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11295_13116 = state_11266__$1;
(statearr_11295_13116[(2)] = inst_11249);

(statearr_11295_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (8))){
var inst_11235 = cljs.core.async.close_BANG_(to);
var state_11266__$1 = state_11266;
var statearr_11296_13117 = state_11266__$1;
(statearr_11296_13117[(2)] = inst_11235);

(statearr_11296_13117[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0 = (function (){
var statearr_11298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__);

(statearr_11298[(1)] = (1));

return statearr_11298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1 = (function (state_11266){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11266);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11300){var ex__10901__auto__ = e11300;
var statearr_11301_13118 = state_11266;
(statearr_11301_13118[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11266[(4)]))){
var statearr_11302_13119 = state_11266;
(statearr_11302_13119[(1)] = cljs.core.first((state_11266[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11266;
state_11266 = G__13120;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__ = function(state_11266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1.call(this,state_11266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11304 = f__10972__auto__();
(statearr_11304[(6)] = c__10971__auto__);

return statearr_11304;
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
var G__11308 = arguments.length;
switch (G__11308) {
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
var G__11310 = arguments.length;
switch (G__11310) {
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
var G__11312 = arguments.length;
switch (G__11312) {
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
var c__10971__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11339){
var state_val_11340 = (state_11339[(1)]);
if((state_val_11340 === (7))){
var inst_11334 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
var statearr_11341_13125 = state_11339__$1;
(statearr_11341_13125[(2)] = inst_11334);

(statearr_11341_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (1))){
var state_11339__$1 = state_11339;
var statearr_11342_13126 = state_11339__$1;
(statearr_11342_13126[(2)] = null);

(statearr_11342_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (4))){
var inst_11315 = (state_11339[(7)]);
var inst_11315__$1 = (state_11339[(2)]);
var inst_11316 = (inst_11315__$1 == null);
var state_11339__$1 = (function (){var statearr_11343 = state_11339;
(statearr_11343[(7)] = inst_11315__$1);

return statearr_11343;
})();
if(cljs.core.truth_(inst_11316)){
var statearr_11344_13127 = state_11339__$1;
(statearr_11344_13127[(1)] = (5));

} else {
var statearr_11345_13128 = state_11339__$1;
(statearr_11345_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (13))){
var state_11339__$1 = state_11339;
var statearr_11346_13129 = state_11339__$1;
(statearr_11346_13129[(2)] = null);

(statearr_11346_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (6))){
var inst_11315 = (state_11339[(7)]);
var inst_11321 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11315) : p.call(null,inst_11315));
var state_11339__$1 = state_11339;
if(cljs.core.truth_(inst_11321)){
var statearr_11347_13130 = state_11339__$1;
(statearr_11347_13130[(1)] = (9));

} else {
var statearr_11348_13131 = state_11339__$1;
(statearr_11348_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (3))){
var inst_11336 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11339__$1,inst_11336);
} else {
if((state_val_11340 === (12))){
var state_11339__$1 = state_11339;
var statearr_11349_13132 = state_11339__$1;
(statearr_11349_13132[(2)] = null);

(statearr_11349_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (2))){
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11339__$1,(4),ch);
} else {
if((state_val_11340 === (11))){
var inst_11315 = (state_11339[(7)]);
var inst_11325 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11339__$1,(8),inst_11325,inst_11315);
} else {
if((state_val_11340 === (9))){
var state_11339__$1 = state_11339;
var statearr_11350_13133 = state_11339__$1;
(statearr_11350_13133[(2)] = tc);

(statearr_11350_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (5))){
var inst_11318 = cljs.core.async.close_BANG_(tc);
var inst_11319 = cljs.core.async.close_BANG_(fc);
var state_11339__$1 = (function (){var statearr_11351 = state_11339;
(statearr_11351[(8)] = inst_11318);

return statearr_11351;
})();
var statearr_11352_13134 = state_11339__$1;
(statearr_11352_13134[(2)] = inst_11319);

(statearr_11352_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (14))){
var inst_11332 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
var statearr_11353_13135 = state_11339__$1;
(statearr_11353_13135[(2)] = inst_11332);

(statearr_11353_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (10))){
var state_11339__$1 = state_11339;
var statearr_11354_13136 = state_11339__$1;
(statearr_11354_13136[(2)] = fc);

(statearr_11354_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (8))){
var inst_11327 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
if(cljs.core.truth_(inst_11327)){
var statearr_11355_13137 = state_11339__$1;
(statearr_11355_13137[(1)] = (12));

} else {
var statearr_11356_13138 = state_11339__$1;
(statearr_11356_13138[(1)] = (13));

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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_11357 = [null,null,null,null,null,null,null,null,null];
(statearr_11357[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_11357[(1)] = (1));

return statearr_11357;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_11339){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11339);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11358){var ex__10901__auto__ = e11358;
var statearr_11359_13139 = state_11339;
(statearr_11359_13139[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11339[(4)]))){
var statearr_11360_13140 = state_11339;
(statearr_11360_13140[(1)] = cljs.core.first((state_11339[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11339;
state_11339 = G__13141;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_11339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_11339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11361 = f__10972__auto__();
(statearr_11361[(6)] = c__10971__auto___13124);

return statearr_11361;
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
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11384){
var state_val_11385 = (state_11384[(1)]);
if((state_val_11385 === (7))){
var inst_11379 = (state_11384[(2)]);
var state_11384__$1 = state_11384;
var statearr_11387_13142 = state_11384__$1;
(statearr_11387_13142[(2)] = inst_11379);

(statearr_11387_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11385 === (1))){
var inst_11362 = init;
var inst_11363 = inst_11362;
var state_11384__$1 = (function (){var statearr_11388 = state_11384;
(statearr_11388[(7)] = inst_11363);

return statearr_11388;
})();
var statearr_11389_13143 = state_11384__$1;
(statearr_11389_13143[(2)] = null);

(statearr_11389_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11385 === (4))){
var inst_11366 = (state_11384[(8)]);
var inst_11366__$1 = (state_11384[(2)]);
var inst_11367 = (inst_11366__$1 == null);
var state_11384__$1 = (function (){var statearr_11390 = state_11384;
(statearr_11390[(8)] = inst_11366__$1);

return statearr_11390;
})();
if(cljs.core.truth_(inst_11367)){
var statearr_11391_13144 = state_11384__$1;
(statearr_11391_13144[(1)] = (5));

} else {
var statearr_11392_13145 = state_11384__$1;
(statearr_11392_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11385 === (6))){
var inst_11370 = (state_11384[(9)]);
var inst_11366 = (state_11384[(8)]);
var inst_11363 = (state_11384[(7)]);
var inst_11370__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11363,inst_11366) : f.call(null,inst_11363,inst_11366));
var inst_11371 = cljs.core.reduced_QMARK_(inst_11370__$1);
var state_11384__$1 = (function (){var statearr_11393 = state_11384;
(statearr_11393[(9)] = inst_11370__$1);

return statearr_11393;
})();
if(inst_11371){
var statearr_11394_13146 = state_11384__$1;
(statearr_11394_13146[(1)] = (8));

} else {
var statearr_11395_13147 = state_11384__$1;
(statearr_11395_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11385 === (3))){
var inst_11381 = (state_11384[(2)]);
var state_11384__$1 = state_11384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11384__$1,inst_11381);
} else {
if((state_val_11385 === (2))){
var state_11384__$1 = state_11384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11384__$1,(4),ch);
} else {
if((state_val_11385 === (9))){
var inst_11370 = (state_11384[(9)]);
var inst_11363 = inst_11370;
var state_11384__$1 = (function (){var statearr_11396 = state_11384;
(statearr_11396[(7)] = inst_11363);

return statearr_11396;
})();
var statearr_11397_13148 = state_11384__$1;
(statearr_11397_13148[(2)] = null);

(statearr_11397_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11385 === (5))){
var inst_11363 = (state_11384[(7)]);
var state_11384__$1 = state_11384;
var statearr_11398_13149 = state_11384__$1;
(statearr_11398_13149[(2)] = inst_11363);

(statearr_11398_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11385 === (10))){
var inst_11377 = (state_11384[(2)]);
var state_11384__$1 = state_11384;
var statearr_11399_13150 = state_11384__$1;
(statearr_11399_13150[(2)] = inst_11377);

(statearr_11399_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11385 === (8))){
var inst_11370 = (state_11384[(9)]);
var inst_11373 = cljs.core.deref(inst_11370);
var state_11384__$1 = state_11384;
var statearr_11400_13151 = state_11384__$1;
(statearr_11400_13151[(2)] = inst_11373);

(statearr_11400_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10898__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10898__auto____0 = (function (){
var statearr_11401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11401[(0)] = cljs$core$async$reduce_$_state_machine__10898__auto__);

(statearr_11401[(1)] = (1));

return statearr_11401;
});
var cljs$core$async$reduce_$_state_machine__10898__auto____1 = (function (state_11384){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11384);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11402){var ex__10901__auto__ = e11402;
var statearr_11403_13152 = state_11384;
(statearr_11403_13152[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11384[(4)]))){
var statearr_11404_13153 = state_11384;
(statearr_11404_13153[(1)] = cljs.core.first((state_11384[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11384;
state_11384 = G__13154;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10898__auto__ = function(state_11384){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10898__auto____1.call(this,state_11384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10898__auto____0;
cljs$core$async$reduce_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10898__auto____1;
return cljs$core$async$reduce_$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11405 = f__10972__auto__();
(statearr_11405[(6)] = c__10971__auto__);

return statearr_11405;
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
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11411){
var state_val_11412 = (state_11411[(1)]);
if((state_val_11412 === (1))){
var inst_11406 = cljs.core.async.reduce(f__$1,init,ch);
var state_11411__$1 = state_11411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11411__$1,(2),inst_11406);
} else {
if((state_val_11412 === (2))){
var inst_11408 = (state_11411[(2)]);
var inst_11409 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11408) : f__$1.call(null,inst_11408));
var state_11411__$1 = state_11411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11411__$1,inst_11409);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10898__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10898__auto____0 = (function (){
var statearr_11413 = [null,null,null,null,null,null,null];
(statearr_11413[(0)] = cljs$core$async$transduce_$_state_machine__10898__auto__);

(statearr_11413[(1)] = (1));

return statearr_11413;
});
var cljs$core$async$transduce_$_state_machine__10898__auto____1 = (function (state_11411){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11411);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11414){var ex__10901__auto__ = e11414;
var statearr_11415_13155 = state_11411;
(statearr_11415_13155[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11411[(4)]))){
var statearr_11416_13156 = state_11411;
(statearr_11416_13156[(1)] = cljs.core.first((state_11411[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11411;
state_11411 = G__13157;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10898__auto__ = function(state_11411){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10898__auto____1.call(this,state_11411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10898__auto____0;
cljs$core$async$transduce_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10898__auto____1;
return cljs$core$async$transduce_$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11417 = f__10972__auto__();
(statearr_11417[(6)] = c__10971__auto__);

return statearr_11417;
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
var G__11419 = arguments.length;
switch (G__11419) {
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
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11444){
var state_val_11445 = (state_11444[(1)]);
if((state_val_11445 === (7))){
var inst_11426 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
var statearr_11446_13159 = state_11444__$1;
(statearr_11446_13159[(2)] = inst_11426);

(statearr_11446_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (1))){
var inst_11420 = cljs.core.seq(coll);
var inst_11421 = inst_11420;
var state_11444__$1 = (function (){var statearr_11447 = state_11444;
(statearr_11447[(7)] = inst_11421);

return statearr_11447;
})();
var statearr_11448_13160 = state_11444__$1;
(statearr_11448_13160[(2)] = null);

(statearr_11448_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (4))){
var inst_11421 = (state_11444[(7)]);
var inst_11424 = cljs.core.first(inst_11421);
var state_11444__$1 = state_11444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11444__$1,(7),ch,inst_11424);
} else {
if((state_val_11445 === (13))){
var inst_11438 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
var statearr_11449_13161 = state_11444__$1;
(statearr_11449_13161[(2)] = inst_11438);

(statearr_11449_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (6))){
var inst_11429 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
if(cljs.core.truth_(inst_11429)){
var statearr_11450_13162 = state_11444__$1;
(statearr_11450_13162[(1)] = (8));

} else {
var statearr_11451_13163 = state_11444__$1;
(statearr_11451_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (3))){
var inst_11442 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11444__$1,inst_11442);
} else {
if((state_val_11445 === (12))){
var state_11444__$1 = state_11444;
var statearr_11452_13164 = state_11444__$1;
(statearr_11452_13164[(2)] = null);

(statearr_11452_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (2))){
var inst_11421 = (state_11444[(7)]);
var state_11444__$1 = state_11444;
if(cljs.core.truth_(inst_11421)){
var statearr_11453_13165 = state_11444__$1;
(statearr_11453_13165[(1)] = (4));

} else {
var statearr_11454_13166 = state_11444__$1;
(statearr_11454_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (11))){
var inst_11435 = cljs.core.async.close_BANG_(ch);
var state_11444__$1 = state_11444;
var statearr_11455_13167 = state_11444__$1;
(statearr_11455_13167[(2)] = inst_11435);

(statearr_11455_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (9))){
var state_11444__$1 = state_11444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11456_13168 = state_11444__$1;
(statearr_11456_13168[(1)] = (11));

} else {
var statearr_11457_13169 = state_11444__$1;
(statearr_11457_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (5))){
var inst_11421 = (state_11444[(7)]);
var state_11444__$1 = state_11444;
var statearr_11458_13170 = state_11444__$1;
(statearr_11458_13170[(2)] = inst_11421);

(statearr_11458_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (10))){
var inst_11440 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
var statearr_11459_13171 = state_11444__$1;
(statearr_11459_13171[(2)] = inst_11440);

(statearr_11459_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (8))){
var inst_11421 = (state_11444[(7)]);
var inst_11431 = cljs.core.next(inst_11421);
var inst_11421__$1 = inst_11431;
var state_11444__$1 = (function (){var statearr_11460 = state_11444;
(statearr_11460[(7)] = inst_11421__$1);

return statearr_11460;
})();
var statearr_11465_13172 = state_11444__$1;
(statearr_11465_13172[(2)] = null);

(statearr_11465_13172[(1)] = (2));


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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_11470 = [null,null,null,null,null,null,null,null];
(statearr_11470[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_11470[(1)] = (1));

return statearr_11470;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_11444){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11444);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11471){var ex__10901__auto__ = e11471;
var statearr_11472_13173 = state_11444;
(statearr_11472_13173[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11444[(4)]))){
var statearr_11477_13174 = state_11444;
(statearr_11477_13174[(1)] = cljs.core.first((state_11444[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11444;
state_11444 = G__13175;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_11444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_11444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11478 = f__10972__auto__();
(statearr_11478[(6)] = c__10971__auto__);

return statearr_11478;
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
var G__11482 = arguments.length;
switch (G__11482) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11491 = (function (ch,cs,meta11492){
this.ch = ch;
this.cs = cs;
this.meta11492 = meta11492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11493,meta11492__$1){
var self__ = this;
var _11493__$1 = this;
return (new cljs.core.async.t_cljs$core$async11491(self__.ch,self__.cs,meta11492__$1));
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11493){
var self__ = this;
var _11493__$1 = this;
return self__.meta11492;
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11492","meta11492",1507759533,null)], null);
}));

(cljs.core.async.t_cljs$core$async11491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11491");

(cljs.core.async.t_cljs$core$async11491.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11491.
 */
cljs.core.async.__GT_t_cljs$core$async11491 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11491(ch__$1,cs__$1,meta11492){
return (new cljs.core.async.t_cljs$core$async11491(ch__$1,cs__$1,meta11492));
});

}

return (new cljs.core.async.t_cljs$core$async11491(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10971__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11647){
var state_val_11648 = (state_11647[(1)]);
if((state_val_11648 === (7))){
var inst_11643 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11649_13182 = state_11647__$1;
(statearr_11649_13182[(2)] = inst_11643);

(statearr_11649_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (20))){
var inst_11548 = (state_11647[(7)]);
var inst_11560 = cljs.core.first(inst_11548);
var inst_11561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11560,(0),null);
var inst_11562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11560,(1),null);
var state_11647__$1 = (function (){var statearr_11650 = state_11647;
(statearr_11650[(8)] = inst_11561);

return statearr_11650;
})();
if(cljs.core.truth_(inst_11562)){
var statearr_11651_13183 = state_11647__$1;
(statearr_11651_13183[(1)] = (22));

} else {
var statearr_11652_13184 = state_11647__$1;
(statearr_11652_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (27))){
var inst_11590 = (state_11647[(9)]);
var inst_11512 = (state_11647[(10)]);
var inst_11592 = (state_11647[(11)]);
var inst_11597 = (state_11647[(12)]);
var inst_11597__$1 = cljs.core._nth(inst_11590,inst_11592);
var inst_11598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11597__$1,inst_11512,done);
var state_11647__$1 = (function (){var statearr_11657 = state_11647;
(statearr_11657[(12)] = inst_11597__$1);

return statearr_11657;
})();
if(cljs.core.truth_(inst_11598)){
var statearr_11658_13185 = state_11647__$1;
(statearr_11658_13185[(1)] = (30));

} else {
var statearr_11659_13186 = state_11647__$1;
(statearr_11659_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (1))){
var state_11647__$1 = state_11647;
var statearr_11660_13187 = state_11647__$1;
(statearr_11660_13187[(2)] = null);

(statearr_11660_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (24))){
var inst_11548 = (state_11647[(7)]);
var inst_11567 = (state_11647[(2)]);
var inst_11568 = cljs.core.next(inst_11548);
var inst_11521 = inst_11568;
var inst_11522 = null;
var inst_11523 = (0);
var inst_11524 = (0);
var state_11647__$1 = (function (){var statearr_11661 = state_11647;
(statearr_11661[(13)] = inst_11521);

(statearr_11661[(14)] = inst_11523);

(statearr_11661[(15)] = inst_11522);

(statearr_11661[(16)] = inst_11567);

(statearr_11661[(17)] = inst_11524);

return statearr_11661;
})();
var statearr_11662_13188 = state_11647__$1;
(statearr_11662_13188[(2)] = null);

(statearr_11662_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (39))){
var state_11647__$1 = state_11647;
var statearr_11666_13189 = state_11647__$1;
(statearr_11666_13189[(2)] = null);

(statearr_11666_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (4))){
var inst_11512 = (state_11647[(10)]);
var inst_11512__$1 = (state_11647[(2)]);
var inst_11513 = (inst_11512__$1 == null);
var state_11647__$1 = (function (){var statearr_11667 = state_11647;
(statearr_11667[(10)] = inst_11512__$1);

return statearr_11667;
})();
if(cljs.core.truth_(inst_11513)){
var statearr_11668_13190 = state_11647__$1;
(statearr_11668_13190[(1)] = (5));

} else {
var statearr_11669_13191 = state_11647__$1;
(statearr_11669_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (15))){
var inst_11521 = (state_11647[(13)]);
var inst_11523 = (state_11647[(14)]);
var inst_11522 = (state_11647[(15)]);
var inst_11524 = (state_11647[(17)]);
var inst_11539 = (state_11647[(2)]);
var inst_11545 = (inst_11524 + (1));
var tmp11663 = inst_11521;
var tmp11664 = inst_11523;
var tmp11665 = inst_11522;
var inst_11521__$1 = tmp11663;
var inst_11522__$1 = tmp11665;
var inst_11523__$1 = tmp11664;
var inst_11524__$1 = inst_11545;
var state_11647__$1 = (function (){var statearr_11672 = state_11647;
(statearr_11672[(13)] = inst_11521__$1);

(statearr_11672[(14)] = inst_11523__$1);

(statearr_11672[(18)] = inst_11539);

(statearr_11672[(15)] = inst_11522__$1);

(statearr_11672[(17)] = inst_11524__$1);

return statearr_11672;
})();
var statearr_11673_13192 = state_11647__$1;
(statearr_11673_13192[(2)] = null);

(statearr_11673_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (21))){
var inst_11571 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11677_13193 = state_11647__$1;
(statearr_11677_13193[(2)] = inst_11571);

(statearr_11677_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (31))){
var inst_11597 = (state_11647[(12)]);
var inst_11601 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11597);
var state_11647__$1 = state_11647;
var statearr_11678_13194 = state_11647__$1;
(statearr_11678_13194[(2)] = inst_11601);

(statearr_11678_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (32))){
var inst_11590 = (state_11647[(9)]);
var inst_11589 = (state_11647[(19)]);
var inst_11591 = (state_11647[(20)]);
var inst_11592 = (state_11647[(11)]);
var inst_11603 = (state_11647[(2)]);
var inst_11604 = (inst_11592 + (1));
var tmp11674 = inst_11590;
var tmp11675 = inst_11589;
var tmp11676 = inst_11591;
var inst_11589__$1 = tmp11675;
var inst_11590__$1 = tmp11674;
var inst_11591__$1 = tmp11676;
var inst_11592__$1 = inst_11604;
var state_11647__$1 = (function (){var statearr_11679 = state_11647;
(statearr_11679[(9)] = inst_11590__$1);

(statearr_11679[(19)] = inst_11589__$1);

(statearr_11679[(20)] = inst_11591__$1);

(statearr_11679[(11)] = inst_11592__$1);

(statearr_11679[(21)] = inst_11603);

return statearr_11679;
})();
var statearr_11680_13195 = state_11647__$1;
(statearr_11680_13195[(2)] = null);

(statearr_11680_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (40))){
var inst_11616 = (state_11647[(22)]);
var inst_11620 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11616);
var state_11647__$1 = state_11647;
var statearr_11681_13196 = state_11647__$1;
(statearr_11681_13196[(2)] = inst_11620);

(statearr_11681_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (33))){
var inst_11607 = (state_11647[(23)]);
var inst_11609 = cljs.core.chunked_seq_QMARK_(inst_11607);
var state_11647__$1 = state_11647;
if(inst_11609){
var statearr_11682_13197 = state_11647__$1;
(statearr_11682_13197[(1)] = (36));

} else {
var statearr_11683_13198 = state_11647__$1;
(statearr_11683_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (13))){
var inst_11533 = (state_11647[(24)]);
var inst_11536 = cljs.core.async.close_BANG_(inst_11533);
var state_11647__$1 = state_11647;
var statearr_11684_13199 = state_11647__$1;
(statearr_11684_13199[(2)] = inst_11536);

(statearr_11684_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (22))){
var inst_11561 = (state_11647[(8)]);
var inst_11564 = cljs.core.async.close_BANG_(inst_11561);
var state_11647__$1 = state_11647;
var statearr_11685_13200 = state_11647__$1;
(statearr_11685_13200[(2)] = inst_11564);

(statearr_11685_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (36))){
var inst_11607 = (state_11647[(23)]);
var inst_11611 = cljs.core.chunk_first(inst_11607);
var inst_11612 = cljs.core.chunk_rest(inst_11607);
var inst_11613 = cljs.core.count(inst_11611);
var inst_11589 = inst_11612;
var inst_11590 = inst_11611;
var inst_11591 = inst_11613;
var inst_11592 = (0);
var state_11647__$1 = (function (){var statearr_11686 = state_11647;
(statearr_11686[(9)] = inst_11590);

(statearr_11686[(19)] = inst_11589);

(statearr_11686[(20)] = inst_11591);

(statearr_11686[(11)] = inst_11592);

return statearr_11686;
})();
var statearr_11687_13201 = state_11647__$1;
(statearr_11687_13201[(2)] = null);

(statearr_11687_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (41))){
var inst_11607 = (state_11647[(23)]);
var inst_11622 = (state_11647[(2)]);
var inst_11623 = cljs.core.next(inst_11607);
var inst_11589 = inst_11623;
var inst_11590 = null;
var inst_11591 = (0);
var inst_11592 = (0);
var state_11647__$1 = (function (){var statearr_11688 = state_11647;
(statearr_11688[(9)] = inst_11590);

(statearr_11688[(19)] = inst_11589);

(statearr_11688[(20)] = inst_11591);

(statearr_11688[(11)] = inst_11592);

(statearr_11688[(25)] = inst_11622);

return statearr_11688;
})();
var statearr_11689_13202 = state_11647__$1;
(statearr_11689_13202[(2)] = null);

(statearr_11689_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (43))){
var state_11647__$1 = state_11647;
var statearr_11694_13203 = state_11647__$1;
(statearr_11694_13203[(2)] = null);

(statearr_11694_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (29))){
var inst_11631 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11695_13204 = state_11647__$1;
(statearr_11695_13204[(2)] = inst_11631);

(statearr_11695_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (44))){
var inst_11640 = (state_11647[(2)]);
var state_11647__$1 = (function (){var statearr_11696 = state_11647;
(statearr_11696[(26)] = inst_11640);

return statearr_11696;
})();
var statearr_11697_13205 = state_11647__$1;
(statearr_11697_13205[(2)] = null);

(statearr_11697_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (6))){
var inst_11581 = (state_11647[(27)]);
var inst_11580 = cljs.core.deref(cs);
var inst_11581__$1 = cljs.core.keys(inst_11580);
var inst_11582 = cljs.core.count(inst_11581__$1);
var inst_11583 = cljs.core.reset_BANG_(dctr,inst_11582);
var inst_11588 = cljs.core.seq(inst_11581__$1);
var inst_11589 = inst_11588;
var inst_11590 = null;
var inst_11591 = (0);
var inst_11592 = (0);
var state_11647__$1 = (function (){var statearr_11698 = state_11647;
(statearr_11698[(28)] = inst_11583);

(statearr_11698[(9)] = inst_11590);

(statearr_11698[(19)] = inst_11589);

(statearr_11698[(20)] = inst_11591);

(statearr_11698[(27)] = inst_11581__$1);

(statearr_11698[(11)] = inst_11592);

return statearr_11698;
})();
var statearr_11699_13206 = state_11647__$1;
(statearr_11699_13206[(2)] = null);

(statearr_11699_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (28))){
var inst_11589 = (state_11647[(19)]);
var inst_11607 = (state_11647[(23)]);
var inst_11607__$1 = cljs.core.seq(inst_11589);
var state_11647__$1 = (function (){var statearr_11700 = state_11647;
(statearr_11700[(23)] = inst_11607__$1);

return statearr_11700;
})();
if(inst_11607__$1){
var statearr_11701_13207 = state_11647__$1;
(statearr_11701_13207[(1)] = (33));

} else {
var statearr_11702_13208 = state_11647__$1;
(statearr_11702_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (25))){
var inst_11591 = (state_11647[(20)]);
var inst_11592 = (state_11647[(11)]);
var inst_11594 = (inst_11592 < inst_11591);
var inst_11595 = inst_11594;
var state_11647__$1 = state_11647;
if(cljs.core.truth_(inst_11595)){
var statearr_11703_13209 = state_11647__$1;
(statearr_11703_13209[(1)] = (27));

} else {
var statearr_11704_13210 = state_11647__$1;
(statearr_11704_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (34))){
var state_11647__$1 = state_11647;
var statearr_11705_13211 = state_11647__$1;
(statearr_11705_13211[(2)] = null);

(statearr_11705_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (17))){
var state_11647__$1 = state_11647;
var statearr_11706_13212 = state_11647__$1;
(statearr_11706_13212[(2)] = null);

(statearr_11706_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (3))){
var inst_11645 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11647__$1,inst_11645);
} else {
if((state_val_11648 === (12))){
var inst_11576 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11707_13213 = state_11647__$1;
(statearr_11707_13213[(2)] = inst_11576);

(statearr_11707_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (2))){
var state_11647__$1 = state_11647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11647__$1,(4),ch);
} else {
if((state_val_11648 === (23))){
var state_11647__$1 = state_11647;
var statearr_11708_13214 = state_11647__$1;
(statearr_11708_13214[(2)] = null);

(statearr_11708_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (35))){
var inst_11629 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11709_13215 = state_11647__$1;
(statearr_11709_13215[(2)] = inst_11629);

(statearr_11709_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (19))){
var inst_11548 = (state_11647[(7)]);
var inst_11552 = cljs.core.chunk_first(inst_11548);
var inst_11553 = cljs.core.chunk_rest(inst_11548);
var inst_11554 = cljs.core.count(inst_11552);
var inst_11521 = inst_11553;
var inst_11522 = inst_11552;
var inst_11523 = inst_11554;
var inst_11524 = (0);
var state_11647__$1 = (function (){var statearr_11710 = state_11647;
(statearr_11710[(13)] = inst_11521);

(statearr_11710[(14)] = inst_11523);

(statearr_11710[(15)] = inst_11522);

(statearr_11710[(17)] = inst_11524);

return statearr_11710;
})();
var statearr_11713_13216 = state_11647__$1;
(statearr_11713_13216[(2)] = null);

(statearr_11713_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (11))){
var inst_11521 = (state_11647[(13)]);
var inst_11548 = (state_11647[(7)]);
var inst_11548__$1 = cljs.core.seq(inst_11521);
var state_11647__$1 = (function (){var statearr_11714 = state_11647;
(statearr_11714[(7)] = inst_11548__$1);

return statearr_11714;
})();
if(inst_11548__$1){
var statearr_11715_13217 = state_11647__$1;
(statearr_11715_13217[(1)] = (16));

} else {
var statearr_11716_13218 = state_11647__$1;
(statearr_11716_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (9))){
var inst_11578 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11717_13219 = state_11647__$1;
(statearr_11717_13219[(2)] = inst_11578);

(statearr_11717_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (5))){
var inst_11519 = cljs.core.deref(cs);
var inst_11520 = cljs.core.seq(inst_11519);
var inst_11521 = inst_11520;
var inst_11522 = null;
var inst_11523 = (0);
var inst_11524 = (0);
var state_11647__$1 = (function (){var statearr_11718 = state_11647;
(statearr_11718[(13)] = inst_11521);

(statearr_11718[(14)] = inst_11523);

(statearr_11718[(15)] = inst_11522);

(statearr_11718[(17)] = inst_11524);

return statearr_11718;
})();
var statearr_11719_13220 = state_11647__$1;
(statearr_11719_13220[(2)] = null);

(statearr_11719_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (14))){
var state_11647__$1 = state_11647;
var statearr_11720_13221 = state_11647__$1;
(statearr_11720_13221[(2)] = null);

(statearr_11720_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (45))){
var inst_11637 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11721_13222 = state_11647__$1;
(statearr_11721_13222[(2)] = inst_11637);

(statearr_11721_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (26))){
var inst_11581 = (state_11647[(27)]);
var inst_11633 = (state_11647[(2)]);
var inst_11634 = cljs.core.seq(inst_11581);
var state_11647__$1 = (function (){var statearr_11722 = state_11647;
(statearr_11722[(29)] = inst_11633);

return statearr_11722;
})();
if(inst_11634){
var statearr_11723_13223 = state_11647__$1;
(statearr_11723_13223[(1)] = (42));

} else {
var statearr_11724_13224 = state_11647__$1;
(statearr_11724_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (16))){
var inst_11548 = (state_11647[(7)]);
var inst_11550 = cljs.core.chunked_seq_QMARK_(inst_11548);
var state_11647__$1 = state_11647;
if(inst_11550){
var statearr_11725_13225 = state_11647__$1;
(statearr_11725_13225[(1)] = (19));

} else {
var statearr_11726_13226 = state_11647__$1;
(statearr_11726_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (38))){
var inst_11626 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11727_13227 = state_11647__$1;
(statearr_11727_13227[(2)] = inst_11626);

(statearr_11727_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (30))){
var state_11647__$1 = state_11647;
var statearr_11728_13228 = state_11647__$1;
(statearr_11728_13228[(2)] = null);

(statearr_11728_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (10))){
var inst_11522 = (state_11647[(15)]);
var inst_11524 = (state_11647[(17)]);
var inst_11532 = cljs.core._nth(inst_11522,inst_11524);
var inst_11533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11532,(0),null);
var inst_11534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11532,(1),null);
var state_11647__$1 = (function (){var statearr_11729 = state_11647;
(statearr_11729[(24)] = inst_11533);

return statearr_11729;
})();
if(cljs.core.truth_(inst_11534)){
var statearr_11730_13229 = state_11647__$1;
(statearr_11730_13229[(1)] = (13));

} else {
var statearr_11731_13230 = state_11647__$1;
(statearr_11731_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (18))){
var inst_11574 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11732_13231 = state_11647__$1;
(statearr_11732_13231[(2)] = inst_11574);

(statearr_11732_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (42))){
var state_11647__$1 = state_11647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11647__$1,(45),dchan);
} else {
if((state_val_11648 === (37))){
var inst_11616 = (state_11647[(22)]);
var inst_11512 = (state_11647[(10)]);
var inst_11607 = (state_11647[(23)]);
var inst_11616__$1 = cljs.core.first(inst_11607);
var inst_11617 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11616__$1,inst_11512,done);
var state_11647__$1 = (function (){var statearr_11745 = state_11647;
(statearr_11745[(22)] = inst_11616__$1);

return statearr_11745;
})();
if(cljs.core.truth_(inst_11617)){
var statearr_11746_13232 = state_11647__$1;
(statearr_11746_13232[(1)] = (39));

} else {
var statearr_11747_13233 = state_11647__$1;
(statearr_11747_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (8))){
var inst_11523 = (state_11647[(14)]);
var inst_11524 = (state_11647[(17)]);
var inst_11526 = (inst_11524 < inst_11523);
var inst_11527 = inst_11526;
var state_11647__$1 = state_11647;
if(cljs.core.truth_(inst_11527)){
var statearr_11748_13234 = state_11647__$1;
(statearr_11748_13234[(1)] = (10));

} else {
var statearr_11749_13235 = state_11647__$1;
(statearr_11749_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10898__auto__ = null;
var cljs$core$async$mult_$_state_machine__10898__auto____0 = (function (){
var statearr_11750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11750[(0)] = cljs$core$async$mult_$_state_machine__10898__auto__);

(statearr_11750[(1)] = (1));

return statearr_11750;
});
var cljs$core$async$mult_$_state_machine__10898__auto____1 = (function (state_11647){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11647);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11751){var ex__10901__auto__ = e11751;
var statearr_11752_13236 = state_11647;
(statearr_11752_13236[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11647[(4)]))){
var statearr_11753_13237 = state_11647;
(statearr_11753_13237[(1)] = cljs.core.first((state_11647[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11647;
state_11647 = G__13238;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10898__auto__ = function(state_11647){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10898__auto____1.call(this,state_11647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10898__auto____0;
cljs$core$async$mult_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10898__auto____1;
return cljs$core$async$mult_$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11754 = f__10972__auto__();
(statearr_11754[(6)] = c__10971__auto___13181);

return statearr_11754;
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11769){
var map__11770 = p__11769;
var map__11770__$1 = (((((!((map__11770 == null))))?(((((map__11770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11770):map__11770);
var opts = map__11770__$1;
var statearr_11772_13248 = state;
(statearr_11772_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11773_13249 = state;
(statearr_11773_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11774_13250 = state;
(statearr_11774_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11762){
var G__11763 = cljs.core.first(seq11762);
var seq11762__$1 = cljs.core.next(seq11762);
var G__11764 = cljs.core.first(seq11762__$1);
var seq11762__$2 = cljs.core.next(seq11762__$1);
var G__11765 = cljs.core.first(seq11762__$2);
var seq11762__$3 = cljs.core.next(seq11762__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11763,G__11764,G__11765,seq11762__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11775 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11776){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11776 = meta11776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11777,meta11776__$1){
var self__ = this;
var _11777__$1 = this;
return (new cljs.core.async.t_cljs$core$async11775(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11776__$1));
}));

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11777){
var self__ = this;
var _11777__$1 = this;
return self__.meta11776;
}));

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11775.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11776","meta11776",1571879899,null)], null);
}));

(cljs.core.async.t_cljs$core$async11775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11775");

(cljs.core.async.t_cljs$core$async11775.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11775.
 */
cljs.core.async.__GT_t_cljs$core$async11775 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11775(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11776){
return (new cljs.core.async.t_cljs$core$async11775(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11776));
});

}

return (new cljs.core.async.t_cljs$core$async11775(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10971__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_11910){
var state_val_11911 = (state_11910[(1)]);
if((state_val_11911 === (7))){
var inst_11814 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
var statearr_11912_13252 = state_11910__$1;
(statearr_11912_13252[(2)] = inst_11814);

(statearr_11912_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (20))){
var inst_11826 = (state_11910[(7)]);
var state_11910__$1 = state_11910;
var statearr_11913_13253 = state_11910__$1;
(statearr_11913_13253[(2)] = inst_11826);

(statearr_11913_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (27))){
var state_11910__$1 = state_11910;
var statearr_11915_13254 = state_11910__$1;
(statearr_11915_13254[(2)] = null);

(statearr_11915_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (1))){
var inst_11786 = (state_11910[(8)]);
var inst_11786__$1 = calc_state();
var inst_11788 = (inst_11786__$1 == null);
var inst_11789 = cljs.core.not(inst_11788);
var state_11910__$1 = (function (){var statearr_11916 = state_11910;
(statearr_11916[(8)] = inst_11786__$1);

return statearr_11916;
})();
if(inst_11789){
var statearr_11917_13255 = state_11910__$1;
(statearr_11917_13255[(1)] = (2));

} else {
var statearr_11918_13256 = state_11910__$1;
(statearr_11918_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (24))){
var inst_11884 = (state_11910[(9)]);
var inst_11850 = (state_11910[(10)]);
var inst_11859 = (state_11910[(11)]);
var inst_11884__$1 = (inst_11850.cljs$core$IFn$_invoke$arity$1 ? inst_11850.cljs$core$IFn$_invoke$arity$1(inst_11859) : inst_11850.call(null,inst_11859));
var state_11910__$1 = (function (){var statearr_11919 = state_11910;
(statearr_11919[(9)] = inst_11884__$1);

return statearr_11919;
})();
if(cljs.core.truth_(inst_11884__$1)){
var statearr_11920_13257 = state_11910__$1;
(statearr_11920_13257[(1)] = (29));

} else {
var statearr_11921_13258 = state_11910__$1;
(statearr_11921_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (4))){
var inst_11817 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11817)){
var statearr_11922_13259 = state_11910__$1;
(statearr_11922_13259[(1)] = (8));

} else {
var statearr_11923_13260 = state_11910__$1;
(statearr_11923_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (15))){
var inst_11844 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11844)){
var statearr_11924_13261 = state_11910__$1;
(statearr_11924_13261[(1)] = (19));

} else {
var statearr_11925_13262 = state_11910__$1;
(statearr_11925_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (21))){
var inst_11849 = (state_11910[(12)]);
var inst_11849__$1 = (state_11910[(2)]);
var inst_11850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11849__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11849__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11849__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11910__$1 = (function (){var statearr_11928 = state_11910;
(statearr_11928[(10)] = inst_11850);

(statearr_11928[(12)] = inst_11849__$1);

(statearr_11928[(13)] = inst_11851);

return statearr_11928;
})();
return cljs.core.async.ioc_alts_BANG_(state_11910__$1,(22),inst_11852);
} else {
if((state_val_11911 === (31))){
var inst_11892 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11892)){
var statearr_11929_13263 = state_11910__$1;
(statearr_11929_13263[(1)] = (32));

} else {
var statearr_11930_13264 = state_11910__$1;
(statearr_11930_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (32))){
var inst_11858 = (state_11910[(14)]);
var state_11910__$1 = state_11910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11910__$1,(35),out,inst_11858);
} else {
if((state_val_11911 === (33))){
var inst_11849 = (state_11910[(12)]);
var inst_11826 = inst_11849;
var state_11910__$1 = (function (){var statearr_11933 = state_11910;
(statearr_11933[(7)] = inst_11826);

return statearr_11933;
})();
var statearr_11934_13265 = state_11910__$1;
(statearr_11934_13265[(2)] = null);

(statearr_11934_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (13))){
var inst_11826 = (state_11910[(7)]);
var inst_11833 = inst_11826.cljs$lang$protocol_mask$partition0$;
var inst_11834 = (inst_11833 & (64));
var inst_11835 = inst_11826.cljs$core$ISeq$;
var inst_11836 = (cljs.core.PROTOCOL_SENTINEL === inst_11835);
var inst_11837 = ((inst_11834) || (inst_11836));
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11837)){
var statearr_11935_13266 = state_11910__$1;
(statearr_11935_13266[(1)] = (16));

} else {
var statearr_11936_13267 = state_11910__$1;
(statearr_11936_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (22))){
var inst_11858 = (state_11910[(14)]);
var inst_11859 = (state_11910[(11)]);
var inst_11857 = (state_11910[(2)]);
var inst_11858__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11857,(0),null);
var inst_11859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11857,(1),null);
var inst_11860 = (inst_11858__$1 == null);
var inst_11861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11859__$1,change);
var inst_11862 = ((inst_11860) || (inst_11861));
var state_11910__$1 = (function (){var statearr_11937 = state_11910;
(statearr_11937[(14)] = inst_11858__$1);

(statearr_11937[(11)] = inst_11859__$1);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11862)){
var statearr_11938_13268 = state_11910__$1;
(statearr_11938_13268[(1)] = (23));

} else {
var statearr_11940_13269 = state_11910__$1;
(statearr_11940_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (36))){
var inst_11849 = (state_11910[(12)]);
var inst_11826 = inst_11849;
var state_11910__$1 = (function (){var statearr_11942 = state_11910;
(statearr_11942[(7)] = inst_11826);

return statearr_11942;
})();
var statearr_11943_13270 = state_11910__$1;
(statearr_11943_13270[(2)] = null);

(statearr_11943_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (29))){
var inst_11884 = (state_11910[(9)]);
var state_11910__$1 = state_11910;
var statearr_11945_13271 = state_11910__$1;
(statearr_11945_13271[(2)] = inst_11884);

(statearr_11945_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (6))){
var state_11910__$1 = state_11910;
var statearr_11946_13272 = state_11910__$1;
(statearr_11946_13272[(2)] = false);

(statearr_11946_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (28))){
var inst_11869 = (state_11910[(2)]);
var inst_11881 = calc_state();
var inst_11826 = inst_11881;
var state_11910__$1 = (function (){var statearr_11947 = state_11910;
(statearr_11947[(7)] = inst_11826);

(statearr_11947[(15)] = inst_11869);

return statearr_11947;
})();
var statearr_11948_13273 = state_11910__$1;
(statearr_11948_13273[(2)] = null);

(statearr_11948_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (25))){
var inst_11906 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
var statearr_11949_13274 = state_11910__$1;
(statearr_11949_13274[(2)] = inst_11906);

(statearr_11949_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (34))){
var inst_11904 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
var statearr_11950_13275 = state_11910__$1;
(statearr_11950_13275[(2)] = inst_11904);

(statearr_11950_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (17))){
var state_11910__$1 = state_11910;
var statearr_11951_13276 = state_11910__$1;
(statearr_11951_13276[(2)] = false);

(statearr_11951_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (3))){
var state_11910__$1 = state_11910;
var statearr_11952_13277 = state_11910__$1;
(statearr_11952_13277[(2)] = false);

(statearr_11952_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (12))){
var inst_11908 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11910__$1,inst_11908);
} else {
if((state_val_11911 === (2))){
var inst_11786 = (state_11910[(8)]);
var inst_11806 = inst_11786.cljs$lang$protocol_mask$partition0$;
var inst_11807 = (inst_11806 & (64));
var inst_11808 = inst_11786.cljs$core$ISeq$;
var inst_11809 = (cljs.core.PROTOCOL_SENTINEL === inst_11808);
var inst_11810 = ((inst_11807) || (inst_11809));
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11810)){
var statearr_11953_13278 = state_11910__$1;
(statearr_11953_13278[(1)] = (5));

} else {
var statearr_11954_13279 = state_11910__$1;
(statearr_11954_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (23))){
var inst_11858 = (state_11910[(14)]);
var inst_11864 = (inst_11858 == null);
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11864)){
var statearr_11955_13280 = state_11910__$1;
(statearr_11955_13280[(1)] = (26));

} else {
var statearr_11956_13281 = state_11910__$1;
(statearr_11956_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (35))){
var inst_11895 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11895)){
var statearr_11957_13282 = state_11910__$1;
(statearr_11957_13282[(1)] = (36));

} else {
var statearr_11958_13283 = state_11910__$1;
(statearr_11958_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (19))){
var inst_11826 = (state_11910[(7)]);
var inst_11846 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11826);
var state_11910__$1 = state_11910;
var statearr_11959_13284 = state_11910__$1;
(statearr_11959_13284[(2)] = inst_11846);

(statearr_11959_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (11))){
var inst_11826 = (state_11910[(7)]);
var inst_11830 = (inst_11826 == null);
var inst_11831 = cljs.core.not(inst_11830);
var state_11910__$1 = state_11910;
if(inst_11831){
var statearr_11961_13285 = state_11910__$1;
(statearr_11961_13285[(1)] = (13));

} else {
var statearr_11962_13286 = state_11910__$1;
(statearr_11962_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (9))){
var inst_11786 = (state_11910[(8)]);
var state_11910__$1 = state_11910;
var statearr_11963_13287 = state_11910__$1;
(statearr_11963_13287[(2)] = inst_11786);

(statearr_11963_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (5))){
var state_11910__$1 = state_11910;
var statearr_11964_13288 = state_11910__$1;
(statearr_11964_13288[(2)] = true);

(statearr_11964_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (14))){
var state_11910__$1 = state_11910;
var statearr_11965_13289 = state_11910__$1;
(statearr_11965_13289[(2)] = false);

(statearr_11965_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (26))){
var inst_11859 = (state_11910[(11)]);
var inst_11866 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11859);
var state_11910__$1 = state_11910;
var statearr_11966_13290 = state_11910__$1;
(statearr_11966_13290[(2)] = inst_11866);

(statearr_11966_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (16))){
var state_11910__$1 = state_11910;
var statearr_11967_13291 = state_11910__$1;
(statearr_11967_13291[(2)] = true);

(statearr_11967_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (38))){
var inst_11900 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
var statearr_11972_13292 = state_11910__$1;
(statearr_11972_13292[(2)] = inst_11900);

(statearr_11972_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (30))){
var inst_11850 = (state_11910[(10)]);
var inst_11851 = (state_11910[(13)]);
var inst_11859 = (state_11910[(11)]);
var inst_11887 = cljs.core.empty_QMARK_(inst_11850);
var inst_11888 = (inst_11851.cljs$core$IFn$_invoke$arity$1 ? inst_11851.cljs$core$IFn$_invoke$arity$1(inst_11859) : inst_11851.call(null,inst_11859));
var inst_11889 = cljs.core.not(inst_11888);
var inst_11890 = ((inst_11887) && (inst_11889));
var state_11910__$1 = state_11910;
var statearr_11973_13293 = state_11910__$1;
(statearr_11973_13293[(2)] = inst_11890);

(statearr_11973_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (10))){
var inst_11786 = (state_11910[(8)]);
var inst_11822 = (state_11910[(2)]);
var inst_11823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11822,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11822,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11822,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11826 = inst_11786;
var state_11910__$1 = (function (){var statearr_11974 = state_11910;
(statearr_11974[(16)] = inst_11823);

(statearr_11974[(7)] = inst_11826);

(statearr_11974[(17)] = inst_11825);

(statearr_11974[(18)] = inst_11824);

return statearr_11974;
})();
var statearr_11975_13294 = state_11910__$1;
(statearr_11975_13294[(2)] = null);

(statearr_11975_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (18))){
var inst_11841 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
var statearr_11976_13295 = state_11910__$1;
(statearr_11976_13295[(2)] = inst_11841);

(statearr_11976_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (37))){
var state_11910__$1 = state_11910;
var statearr_11977_13296 = state_11910__$1;
(statearr_11977_13296[(2)] = null);

(statearr_11977_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (8))){
var inst_11786 = (state_11910[(8)]);
var inst_11819 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11786);
var state_11910__$1 = state_11910;
var statearr_11978_13297 = state_11910__$1;
(statearr_11978_13297[(2)] = inst_11819);

(statearr_11978_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10898__auto__ = null;
var cljs$core$async$mix_$_state_machine__10898__auto____0 = (function (){
var statearr_11979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11979[(0)] = cljs$core$async$mix_$_state_machine__10898__auto__);

(statearr_11979[(1)] = (1));

return statearr_11979;
});
var cljs$core$async$mix_$_state_machine__10898__auto____1 = (function (state_11910){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_11910);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e11980){var ex__10901__auto__ = e11980;
var statearr_11981_13298 = state_11910;
(statearr_11981_13298[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_11910[(4)]))){
var statearr_11982_13299 = state_11910;
(statearr_11982_13299[(1)] = cljs.core.first((state_11910[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_11910;
state_11910 = G__13300;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10898__auto__ = function(state_11910){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10898__auto____1.call(this,state_11910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10898__auto____0;
cljs$core$async$mix_$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10898__auto____1;
return cljs$core$async$mix_$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_11983 = f__10972__auto__();
(statearr_11983[(6)] = c__10971__auto___13251);

return statearr_11983;
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
var G__12004 = arguments.length;
switch (G__12004) {
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
var G__12007 = arguments.length;
switch (G__12007) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12005_SHARP_){
if(cljs.core.truth_((p1__12005_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12005_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12005_SHARP_.call(null,topic)))){
return p1__12005_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12005_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12012 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12013){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12013 = meta12013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12014,meta12013__$1){
var self__ = this;
var _12014__$1 = this;
return (new cljs.core.async.t_cljs$core$async12012(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12013__$1));
}));

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12014){
var self__ = this;
var _12014__$1 = this;
return self__.meta12013;
}));

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12013","meta12013",64948661,null)], null);
}));

(cljs.core.async.t_cljs$core$async12012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12012");

(cljs.core.async.t_cljs$core$async12012.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12012.
 */
cljs.core.async.__GT_t_cljs$core$async12012 = (function cljs$core$async$__GT_t_cljs$core$async12012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12013){
return (new cljs.core.async.t_cljs$core$async12012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12013));
});

}

return (new cljs.core.async.t_cljs$core$async12012(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10971__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12105){
var state_val_12106 = (state_12105[(1)]);
if((state_val_12106 === (7))){
var inst_12101 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12107_13308 = state_12105__$1;
(statearr_12107_13308[(2)] = inst_12101);

(statearr_12107_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (20))){
var state_12105__$1 = state_12105;
var statearr_12108_13309 = state_12105__$1;
(statearr_12108_13309[(2)] = null);

(statearr_12108_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (1))){
var state_12105__$1 = state_12105;
var statearr_12112_13310 = state_12105__$1;
(statearr_12112_13310[(2)] = null);

(statearr_12112_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (24))){
var inst_12084 = (state_12105[(7)]);
var inst_12093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12084);
var state_12105__$1 = state_12105;
var statearr_12113_13311 = state_12105__$1;
(statearr_12113_13311[(2)] = inst_12093);

(statearr_12113_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (4))){
var inst_12034 = (state_12105[(8)]);
var inst_12034__$1 = (state_12105[(2)]);
var inst_12037 = (inst_12034__$1 == null);
var state_12105__$1 = (function (){var statearr_12116 = state_12105;
(statearr_12116[(8)] = inst_12034__$1);

return statearr_12116;
})();
if(cljs.core.truth_(inst_12037)){
var statearr_12117_13312 = state_12105__$1;
(statearr_12117_13312[(1)] = (5));

} else {
var statearr_12118_13313 = state_12105__$1;
(statearr_12118_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (15))){
var inst_12078 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12119_13314 = state_12105__$1;
(statearr_12119_13314[(2)] = inst_12078);

(statearr_12119_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (21))){
var inst_12098 = (state_12105[(2)]);
var state_12105__$1 = (function (){var statearr_12121 = state_12105;
(statearr_12121[(9)] = inst_12098);

return statearr_12121;
})();
var statearr_12122_13315 = state_12105__$1;
(statearr_12122_13315[(2)] = null);

(statearr_12122_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (13))){
var inst_12060 = (state_12105[(10)]);
var inst_12062 = cljs.core.chunked_seq_QMARK_(inst_12060);
var state_12105__$1 = state_12105;
if(inst_12062){
var statearr_12124_13316 = state_12105__$1;
(statearr_12124_13316[(1)] = (16));

} else {
var statearr_12125_13317 = state_12105__$1;
(statearr_12125_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (22))){
var inst_12090 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
if(cljs.core.truth_(inst_12090)){
var statearr_12126_13318 = state_12105__$1;
(statearr_12126_13318[(1)] = (23));

} else {
var statearr_12127_13319 = state_12105__$1;
(statearr_12127_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (6))){
var inst_12084 = (state_12105[(7)]);
var inst_12086 = (state_12105[(11)]);
var inst_12034 = (state_12105[(8)]);
var inst_12084__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12034) : topic_fn.call(null,inst_12034));
var inst_12085 = cljs.core.deref(mults);
var inst_12086__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12085,inst_12084__$1);
var state_12105__$1 = (function (){var statearr_12128 = state_12105;
(statearr_12128[(7)] = inst_12084__$1);

(statearr_12128[(11)] = inst_12086__$1);

return statearr_12128;
})();
if(cljs.core.truth_(inst_12086__$1)){
var statearr_12129_13320 = state_12105__$1;
(statearr_12129_13320[(1)] = (19));

} else {
var statearr_12130_13321 = state_12105__$1;
(statearr_12130_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (25))){
var inst_12095 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12131_13322 = state_12105__$1;
(statearr_12131_13322[(2)] = inst_12095);

(statearr_12131_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (17))){
var inst_12060 = (state_12105[(10)]);
var inst_12069 = cljs.core.first(inst_12060);
var inst_12070 = cljs.core.async.muxch_STAR_(inst_12069);
var inst_12071 = cljs.core.async.close_BANG_(inst_12070);
var inst_12072 = cljs.core.next(inst_12060);
var inst_12046 = inst_12072;
var inst_12047 = null;
var inst_12048 = (0);
var inst_12049 = (0);
var state_12105__$1 = (function (){var statearr_12132 = state_12105;
(statearr_12132[(12)] = inst_12047);

(statearr_12132[(13)] = inst_12046);

(statearr_12132[(14)] = inst_12071);

(statearr_12132[(15)] = inst_12049);

(statearr_12132[(16)] = inst_12048);

return statearr_12132;
})();
var statearr_12133_13323 = state_12105__$1;
(statearr_12133_13323[(2)] = null);

(statearr_12133_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (3))){
var inst_12103 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12105__$1,inst_12103);
} else {
if((state_val_12106 === (12))){
var inst_12080 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12134_13324 = state_12105__$1;
(statearr_12134_13324[(2)] = inst_12080);

(statearr_12134_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (2))){
var state_12105__$1 = state_12105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12105__$1,(4),ch);
} else {
if((state_val_12106 === (23))){
var state_12105__$1 = state_12105;
var statearr_12135_13325 = state_12105__$1;
(statearr_12135_13325[(2)] = null);

(statearr_12135_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (19))){
var inst_12086 = (state_12105[(11)]);
var inst_12034 = (state_12105[(8)]);
var inst_12088 = cljs.core.async.muxch_STAR_(inst_12086);
var state_12105__$1 = state_12105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12105__$1,(22),inst_12088,inst_12034);
} else {
if((state_val_12106 === (11))){
var inst_12060 = (state_12105[(10)]);
var inst_12046 = (state_12105[(13)]);
var inst_12060__$1 = cljs.core.seq(inst_12046);
var state_12105__$1 = (function (){var statearr_12136 = state_12105;
(statearr_12136[(10)] = inst_12060__$1);

return statearr_12136;
})();
if(inst_12060__$1){
var statearr_12137_13326 = state_12105__$1;
(statearr_12137_13326[(1)] = (13));

} else {
var statearr_12138_13327 = state_12105__$1;
(statearr_12138_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (9))){
var inst_12082 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12139_13328 = state_12105__$1;
(statearr_12139_13328[(2)] = inst_12082);

(statearr_12139_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (5))){
var inst_12043 = cljs.core.deref(mults);
var inst_12044 = cljs.core.vals(inst_12043);
var inst_12045 = cljs.core.seq(inst_12044);
var inst_12046 = inst_12045;
var inst_12047 = null;
var inst_12048 = (0);
var inst_12049 = (0);
var state_12105__$1 = (function (){var statearr_12140 = state_12105;
(statearr_12140[(12)] = inst_12047);

(statearr_12140[(13)] = inst_12046);

(statearr_12140[(15)] = inst_12049);

(statearr_12140[(16)] = inst_12048);

return statearr_12140;
})();
var statearr_12141_13329 = state_12105__$1;
(statearr_12141_13329[(2)] = null);

(statearr_12141_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (14))){
var state_12105__$1 = state_12105;
var statearr_12145_13330 = state_12105__$1;
(statearr_12145_13330[(2)] = null);

(statearr_12145_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (16))){
var inst_12060 = (state_12105[(10)]);
var inst_12064 = cljs.core.chunk_first(inst_12060);
var inst_12065 = cljs.core.chunk_rest(inst_12060);
var inst_12066 = cljs.core.count(inst_12064);
var inst_12046 = inst_12065;
var inst_12047 = inst_12064;
var inst_12048 = inst_12066;
var inst_12049 = (0);
var state_12105__$1 = (function (){var statearr_12146 = state_12105;
(statearr_12146[(12)] = inst_12047);

(statearr_12146[(13)] = inst_12046);

(statearr_12146[(15)] = inst_12049);

(statearr_12146[(16)] = inst_12048);

return statearr_12146;
})();
var statearr_12147_13331 = state_12105__$1;
(statearr_12147_13331[(2)] = null);

(statearr_12147_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (10))){
var inst_12047 = (state_12105[(12)]);
var inst_12046 = (state_12105[(13)]);
var inst_12049 = (state_12105[(15)]);
var inst_12048 = (state_12105[(16)]);
var inst_12054 = cljs.core._nth(inst_12047,inst_12049);
var inst_12055 = cljs.core.async.muxch_STAR_(inst_12054);
var inst_12056 = cljs.core.async.close_BANG_(inst_12055);
var inst_12057 = (inst_12049 + (1));
var tmp12142 = inst_12047;
var tmp12143 = inst_12046;
var tmp12144 = inst_12048;
var inst_12046__$1 = tmp12143;
var inst_12047__$1 = tmp12142;
var inst_12048__$1 = tmp12144;
var inst_12049__$1 = inst_12057;
var state_12105__$1 = (function (){var statearr_12148 = state_12105;
(statearr_12148[(17)] = inst_12056);

(statearr_12148[(12)] = inst_12047__$1);

(statearr_12148[(13)] = inst_12046__$1);

(statearr_12148[(15)] = inst_12049__$1);

(statearr_12148[(16)] = inst_12048__$1);

return statearr_12148;
})();
var statearr_12149_13332 = state_12105__$1;
(statearr_12149_13332[(2)] = null);

(statearr_12149_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (18))){
var inst_12075 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12150_13333 = state_12105__$1;
(statearr_12150_13333[(2)] = inst_12075);

(statearr_12150_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (8))){
var inst_12049 = (state_12105[(15)]);
var inst_12048 = (state_12105[(16)]);
var inst_12051 = (inst_12049 < inst_12048);
var inst_12052 = inst_12051;
var state_12105__$1 = state_12105;
if(cljs.core.truth_(inst_12052)){
var statearr_12151_13334 = state_12105__$1;
(statearr_12151_13334[(1)] = (10));

} else {
var statearr_12152_13335 = state_12105__$1;
(statearr_12152_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12153[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12153[(1)] = (1));

return statearr_12153;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12105){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12105);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12154){var ex__10901__auto__ = e12154;
var statearr_12155_13336 = state_12105;
(statearr_12155_13336[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12105[(4)]))){
var statearr_12156_13337 = state_12105;
(statearr_12156_13337[(1)] = cljs.core.first((state_12105[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12105;
state_12105 = G__13338;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12159 = f__10972__auto__();
(statearr_12159[(6)] = c__10971__auto___13307);

return statearr_12159;
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
var G__12161 = arguments.length;
switch (G__12161) {
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
var G__12165 = arguments.length;
switch (G__12165) {
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
var G__12171 = arguments.length;
switch (G__12171) {
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
var c__10971__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12216){
var state_val_12217 = (state_12216[(1)]);
if((state_val_12217 === (7))){
var state_12216__$1 = state_12216;
var statearr_12218_13343 = state_12216__$1;
(statearr_12218_13343[(2)] = null);

(statearr_12218_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (1))){
var state_12216__$1 = state_12216;
var statearr_12219_13344 = state_12216__$1;
(statearr_12219_13344[(2)] = null);

(statearr_12219_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (4))){
var inst_12174 = (state_12216[(7)]);
var inst_12175 = (state_12216[(8)]);
var inst_12177 = (inst_12175 < inst_12174);
var state_12216__$1 = state_12216;
if(cljs.core.truth_(inst_12177)){
var statearr_12220_13345 = state_12216__$1;
(statearr_12220_13345[(1)] = (6));

} else {
var statearr_12221_13346 = state_12216__$1;
(statearr_12221_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (15))){
var inst_12200 = (state_12216[(9)]);
var inst_12205 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12200);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12216__$1,(17),out,inst_12205);
} else {
if((state_val_12217 === (13))){
var inst_12200 = (state_12216[(9)]);
var inst_12200__$1 = (state_12216[(2)]);
var inst_12201 = cljs.core.some(cljs.core.nil_QMARK_,inst_12200__$1);
var state_12216__$1 = (function (){var statearr_12222 = state_12216;
(statearr_12222[(9)] = inst_12200__$1);

return statearr_12222;
})();
if(cljs.core.truth_(inst_12201)){
var statearr_12223_13347 = state_12216__$1;
(statearr_12223_13347[(1)] = (14));

} else {
var statearr_12224_13348 = state_12216__$1;
(statearr_12224_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (6))){
var state_12216__$1 = state_12216;
var statearr_12225_13349 = state_12216__$1;
(statearr_12225_13349[(2)] = null);

(statearr_12225_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (17))){
var inst_12207 = (state_12216[(2)]);
var state_12216__$1 = (function (){var statearr_12227 = state_12216;
(statearr_12227[(10)] = inst_12207);

return statearr_12227;
})();
var statearr_12228_13350 = state_12216__$1;
(statearr_12228_13350[(2)] = null);

(statearr_12228_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (3))){
var inst_12212 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12216__$1,inst_12212);
} else {
if((state_val_12217 === (12))){
var _ = (function (){var statearr_12229 = state_12216;
(statearr_12229[(4)] = cljs.core.rest((state_12216[(4)])));

return statearr_12229;
})();
var state_12216__$1 = state_12216;
var ex12226 = (state_12216__$1[(2)]);
var statearr_12234_13351 = state_12216__$1;
(statearr_12234_13351[(5)] = ex12226);


if((ex12226 instanceof Object)){
var statearr_12239_13352 = state_12216__$1;
(statearr_12239_13352[(1)] = (11));

(statearr_12239_13352[(5)] = null);

} else {
throw ex12226;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (2))){
var inst_12173 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12174 = cnt;
var inst_12175 = (0);
var state_12216__$1 = (function (){var statearr_12244 = state_12216;
(statearr_12244[(11)] = inst_12173);

(statearr_12244[(7)] = inst_12174);

(statearr_12244[(8)] = inst_12175);

return statearr_12244;
})();
var statearr_12245_13353 = state_12216__$1;
(statearr_12245_13353[(2)] = null);

(statearr_12245_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (11))){
var inst_12179 = (state_12216[(2)]);
var inst_12180 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12216__$1 = (function (){var statearr_12246 = state_12216;
(statearr_12246[(12)] = inst_12179);

return statearr_12246;
})();
var statearr_12247_13354 = state_12216__$1;
(statearr_12247_13354[(2)] = inst_12180);

(statearr_12247_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (9))){
var inst_12175 = (state_12216[(8)]);
var _ = (function (){var statearr_12248 = state_12216;
(statearr_12248[(4)] = cljs.core.cons((12),(state_12216[(4)])));

return statearr_12248;
})();
var inst_12186 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12175) : chs__$1.call(null,inst_12175));
var inst_12187 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12175) : done.call(null,inst_12175));
var inst_12188 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12186,inst_12187);
var ___$1 = (function (){var statearr_12249 = state_12216;
(statearr_12249[(4)] = cljs.core.rest((state_12216[(4)])));

return statearr_12249;
})();
var state_12216__$1 = state_12216;
var statearr_12250_13355 = state_12216__$1;
(statearr_12250_13355[(2)] = inst_12188);

(statearr_12250_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (5))){
var inst_12198 = (state_12216[(2)]);
var state_12216__$1 = (function (){var statearr_12251 = state_12216;
(statearr_12251[(13)] = inst_12198);

return statearr_12251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12216__$1,(13),dchan);
} else {
if((state_val_12217 === (14))){
var inst_12203 = cljs.core.async.close_BANG_(out);
var state_12216__$1 = state_12216;
var statearr_12253_13356 = state_12216__$1;
(statearr_12253_13356[(2)] = inst_12203);

(statearr_12253_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (16))){
var inst_12210 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12265_13357 = state_12216__$1;
(statearr_12265_13357[(2)] = inst_12210);

(statearr_12265_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (10))){
var inst_12175 = (state_12216[(8)]);
var inst_12191 = (state_12216[(2)]);
var inst_12192 = (inst_12175 + (1));
var inst_12175__$1 = inst_12192;
var state_12216__$1 = (function (){var statearr_12266 = state_12216;
(statearr_12266[(14)] = inst_12191);

(statearr_12266[(8)] = inst_12175__$1);

return statearr_12266;
})();
var statearr_12267_13358 = state_12216__$1;
(statearr_12267_13358[(2)] = null);

(statearr_12267_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (8))){
var inst_12196 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12268_13359 = state_12216__$1;
(statearr_12268_13359[(2)] = inst_12196);

(statearr_12268_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12269[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12269[(1)] = (1));

return statearr_12269;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12216){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12216);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12270){var ex__10901__auto__ = e12270;
var statearr_12275_13360 = state_12216;
(statearr_12275_13360[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12216[(4)]))){
var statearr_12276_13361 = state_12216;
(statearr_12276_13361[(1)] = cljs.core.first((state_12216[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12216;
state_12216 = G__13362;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12285 = f__10972__auto__();
(statearr_12285[(6)] = c__10971__auto___13342);

return statearr_12285;
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
var G__12288 = arguments.length;
switch (G__12288) {
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
var c__10971__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12335){
var state_val_12336 = (state_12335[(1)]);
if((state_val_12336 === (7))){
var inst_12299 = (state_12335[(7)]);
var inst_12300 = (state_12335[(8)]);
var inst_12299__$1 = (state_12335[(2)]);
var inst_12300__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12299__$1,(0),null);
var inst_12301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12299__$1,(1),null);
var inst_12302 = (inst_12300__$1 == null);
var state_12335__$1 = (function (){var statearr_12338 = state_12335;
(statearr_12338[(7)] = inst_12299__$1);

(statearr_12338[(8)] = inst_12300__$1);

(statearr_12338[(9)] = inst_12301);

return statearr_12338;
})();
if(cljs.core.truth_(inst_12302)){
var statearr_12339_13365 = state_12335__$1;
(statearr_12339_13365[(1)] = (8));

} else {
var statearr_12340_13366 = state_12335__$1;
(statearr_12340_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12336 === (1))){
var inst_12289 = cljs.core.vec(chs);
var inst_12290 = inst_12289;
var state_12335__$1 = (function (){var statearr_12341 = state_12335;
(statearr_12341[(10)] = inst_12290);

return statearr_12341;
})();
var statearr_12342_13367 = state_12335__$1;
(statearr_12342_13367[(2)] = null);

(statearr_12342_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12336 === (4))){
var inst_12290 = (state_12335[(10)]);
var state_12335__$1 = state_12335;
return cljs.core.async.ioc_alts_BANG_(state_12335__$1,(7),inst_12290);
} else {
if((state_val_12336 === (6))){
var inst_12317 = (state_12335[(2)]);
var state_12335__$1 = state_12335;
var statearr_12345_13368 = state_12335__$1;
(statearr_12345_13368[(2)] = inst_12317);

(statearr_12345_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12336 === (3))){
var inst_12319 = (state_12335[(2)]);
var state_12335__$1 = state_12335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12335__$1,inst_12319);
} else {
if((state_val_12336 === (2))){
var inst_12290 = (state_12335[(10)]);
var inst_12292 = cljs.core.count(inst_12290);
var inst_12293 = (inst_12292 > (0));
var state_12335__$1 = state_12335;
if(cljs.core.truth_(inst_12293)){
var statearr_12347_13369 = state_12335__$1;
(statearr_12347_13369[(1)] = (4));

} else {
var statearr_12348_13370 = state_12335__$1;
(statearr_12348_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12336 === (11))){
var inst_12290 = (state_12335[(10)]);
var inst_12310 = (state_12335[(2)]);
var tmp12346 = inst_12290;
var inst_12290__$1 = tmp12346;
var state_12335__$1 = (function (){var statearr_12351 = state_12335;
(statearr_12351[(10)] = inst_12290__$1);

(statearr_12351[(11)] = inst_12310);

return statearr_12351;
})();
var statearr_12352_13371 = state_12335__$1;
(statearr_12352_13371[(2)] = null);

(statearr_12352_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12336 === (9))){
var inst_12300 = (state_12335[(8)]);
var state_12335__$1 = state_12335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12335__$1,(11),out,inst_12300);
} else {
if((state_val_12336 === (5))){
var inst_12315 = cljs.core.async.close_BANG_(out);
var state_12335__$1 = state_12335;
var statearr_12369_13372 = state_12335__$1;
(statearr_12369_13372[(2)] = inst_12315);

(statearr_12369_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12336 === (10))){
var inst_12313 = (state_12335[(2)]);
var state_12335__$1 = state_12335;
var statearr_12371_13373 = state_12335__$1;
(statearr_12371_13373[(2)] = inst_12313);

(statearr_12371_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12336 === (8))){
var inst_12299 = (state_12335[(7)]);
var inst_12300 = (state_12335[(8)]);
var inst_12290 = (state_12335[(10)]);
var inst_12301 = (state_12335[(9)]);
var inst_12304 = (function (){var cs = inst_12290;
var vec__12295 = inst_12299;
var v = inst_12300;
var c = inst_12301;
return (function (p1__12286_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12286_SHARP_);
});
})();
var inst_12305 = cljs.core.filterv(inst_12304,inst_12290);
var inst_12290__$1 = inst_12305;
var state_12335__$1 = (function (){var statearr_12372 = state_12335;
(statearr_12372[(10)] = inst_12290__$1);

return statearr_12372;
})();
var statearr_12373_13374 = state_12335__$1;
(statearr_12373_13374[(2)] = null);

(statearr_12373_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12374[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12374[(1)] = (1));

return statearr_12374;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12335){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12335);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12376){var ex__10901__auto__ = e12376;
var statearr_12377_13375 = state_12335;
(statearr_12377_13375[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12335[(4)]))){
var statearr_12378_13376 = state_12335;
(statearr_12378_13376[(1)] = cljs.core.first((state_12335[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12335;
state_12335 = G__13377;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12379 = f__10972__auto__();
(statearr_12379[(6)] = c__10971__auto___13364);

return statearr_12379;
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
var G__12382 = arguments.length;
switch (G__12382) {
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
var c__10971__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12408){
var state_val_12409 = (state_12408[(1)]);
if((state_val_12409 === (7))){
var inst_12390 = (state_12408[(7)]);
var inst_12390__$1 = (state_12408[(2)]);
var inst_12391 = (inst_12390__$1 == null);
var inst_12392 = cljs.core.not(inst_12391);
var state_12408__$1 = (function (){var statearr_12410 = state_12408;
(statearr_12410[(7)] = inst_12390__$1);

return statearr_12410;
})();
if(inst_12392){
var statearr_12411_13380 = state_12408__$1;
(statearr_12411_13380[(1)] = (8));

} else {
var statearr_12412_13381 = state_12408__$1;
(statearr_12412_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (1))){
var inst_12385 = (0);
var state_12408__$1 = (function (){var statearr_12415 = state_12408;
(statearr_12415[(8)] = inst_12385);

return statearr_12415;
})();
var statearr_12416_13382 = state_12408__$1;
(statearr_12416_13382[(2)] = null);

(statearr_12416_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (4))){
var state_12408__$1 = state_12408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12408__$1,(7),ch);
} else {
if((state_val_12409 === (6))){
var inst_12403 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12417_13383 = state_12408__$1;
(statearr_12417_13383[(2)] = inst_12403);

(statearr_12417_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (3))){
var inst_12405 = (state_12408[(2)]);
var inst_12406 = cljs.core.async.close_BANG_(out);
var state_12408__$1 = (function (){var statearr_12418 = state_12408;
(statearr_12418[(9)] = inst_12405);

return statearr_12418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12408__$1,inst_12406);
} else {
if((state_val_12409 === (2))){
var inst_12385 = (state_12408[(8)]);
var inst_12387 = (inst_12385 < n);
var state_12408__$1 = state_12408;
if(cljs.core.truth_(inst_12387)){
var statearr_12420_13384 = state_12408__$1;
(statearr_12420_13384[(1)] = (4));

} else {
var statearr_12421_13385 = state_12408__$1;
(statearr_12421_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (11))){
var inst_12385 = (state_12408[(8)]);
var inst_12395 = (state_12408[(2)]);
var inst_12396 = (inst_12385 + (1));
var inst_12385__$1 = inst_12396;
var state_12408__$1 = (function (){var statearr_12422 = state_12408;
(statearr_12422[(10)] = inst_12395);

(statearr_12422[(8)] = inst_12385__$1);

return statearr_12422;
})();
var statearr_12423_13386 = state_12408__$1;
(statearr_12423_13386[(2)] = null);

(statearr_12423_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (9))){
var state_12408__$1 = state_12408;
var statearr_12424_13387 = state_12408__$1;
(statearr_12424_13387[(2)] = null);

(statearr_12424_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (5))){
var state_12408__$1 = state_12408;
var statearr_12426_13388 = state_12408__$1;
(statearr_12426_13388[(2)] = null);

(statearr_12426_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (10))){
var inst_12400 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12427_13389 = state_12408__$1;
(statearr_12427_13389[(2)] = inst_12400);

(statearr_12427_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (8))){
var inst_12390 = (state_12408[(7)]);
var state_12408__$1 = state_12408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12408__$1,(11),out,inst_12390);
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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12429[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12429[(1)] = (1));

return statearr_12429;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12408){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12408);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12430){var ex__10901__auto__ = e12430;
var statearr_12431_13390 = state_12408;
(statearr_12431_13390[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12408[(4)]))){
var statearr_12432_13391 = state_12408;
(statearr_12432_13391[(1)] = cljs.core.first((state_12408[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12408;
state_12408 = G__13392;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12434 = f__10972__auto__();
(statearr_12434[(6)] = c__10971__auto___13379);

return statearr_12434;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12437 = (function (f,ch,meta12438){
this.f = f;
this.ch = ch;
this.meta12438 = meta12438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12439,meta12438__$1){
var self__ = this;
var _12439__$1 = this;
return (new cljs.core.async.t_cljs$core$async12437(self__.f,self__.ch,meta12438__$1));
}));

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12439){
var self__ = this;
var _12439__$1 = this;
return self__.meta12438;
}));

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12459 = (function (f,ch,meta12438,_,fn1,meta12460){
this.f = f;
this.ch = ch;
this.meta12438 = meta12438;
this._ = _;
this.fn1 = fn1;
this.meta12460 = meta12460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12461,meta12460__$1){
var self__ = this;
var _12461__$1 = this;
return (new cljs.core.async.t_cljs$core$async12459(self__.f,self__.ch,self__.meta12438,self__._,self__.fn1,meta12460__$1));
}));

(cljs.core.async.t_cljs$core$async12459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12461){
var self__ = this;
var _12461__$1 = this;
return self__.meta12460;
}));

(cljs.core.async.t_cljs$core$async12459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12436_SHARP_){
var G__12467 = (((p1__12436_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12436_SHARP_) : self__.f.call(null,p1__12436_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12467) : f1.call(null,G__12467));
});
}));

(cljs.core.async.t_cljs$core$async12459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12438","meta12438",266513858,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12437","cljs.core.async/t_cljs$core$async12437",73019479,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12460","meta12460",-1270486699,null)], null);
}));

(cljs.core.async.t_cljs$core$async12459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12459");

(cljs.core.async.t_cljs$core$async12459.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12459.
 */
cljs.core.async.__GT_t_cljs$core$async12459 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12459(f__$1,ch__$1,meta12438__$1,___$2,fn1__$1,meta12460){
return (new cljs.core.async.t_cljs$core$async12459(f__$1,ch__$1,meta12438__$1,___$2,fn1__$1,meta12460));
});

}

return (new cljs.core.async.t_cljs$core$async12459(self__.f,self__.ch,self__.meta12438,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12499 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12499) : self__.f.call(null,G__12499));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12438","meta12438",266513858,null)], null);
}));

(cljs.core.async.t_cljs$core$async12437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12437");

(cljs.core.async.t_cljs$core$async12437.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12437.
 */
cljs.core.async.__GT_t_cljs$core$async12437 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12437(f__$1,ch__$1,meta12438){
return (new cljs.core.async.t_cljs$core$async12437(f__$1,ch__$1,meta12438));
});

}

return (new cljs.core.async.t_cljs$core$async12437(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12507 = (function (f,ch,meta12508){
this.f = f;
this.ch = ch;
this.meta12508 = meta12508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12509,meta12508__$1){
var self__ = this;
var _12509__$1 = this;
return (new cljs.core.async.t_cljs$core$async12507(self__.f,self__.ch,meta12508__$1));
}));

(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12509){
var self__ = this;
var _12509__$1 = this;
return self__.meta12508;
}));

(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12507.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12508","meta12508",-356715649,null)], null);
}));

(cljs.core.async.t_cljs$core$async12507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12507");

(cljs.core.async.t_cljs$core$async12507.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12507.
 */
cljs.core.async.__GT_t_cljs$core$async12507 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12507(f__$1,ch__$1,meta12508){
return (new cljs.core.async.t_cljs$core$async12507(f__$1,ch__$1,meta12508));
});

}

return (new cljs.core.async.t_cljs$core$async12507(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12511 = (function (p,ch,meta12512){
this.p = p;
this.ch = ch;
this.meta12512 = meta12512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12513,meta12512__$1){
var self__ = this;
var _12513__$1 = this;
return (new cljs.core.async.t_cljs$core$async12511(self__.p,self__.ch,meta12512__$1));
}));

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12513){
var self__ = this;
var _12513__$1 = this;
return self__.meta12512;
}));

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12512","meta12512",-458513341,null)], null);
}));

(cljs.core.async.t_cljs$core$async12511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12511");

(cljs.core.async.t_cljs$core$async12511.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12511.
 */
cljs.core.async.__GT_t_cljs$core$async12511 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12511(p__$1,ch__$1,meta12512){
return (new cljs.core.async.t_cljs$core$async12511(p__$1,ch__$1,meta12512));
});

}

return (new cljs.core.async.t_cljs$core$async12511(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10971__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12581){
var state_val_12582 = (state_12581[(1)]);
if((state_val_12582 === (7))){
var inst_12577 = (state_12581[(2)]);
var state_12581__$1 = state_12581;
var statearr_12583_13395 = state_12581__$1;
(statearr_12583_13395[(2)] = inst_12577);

(statearr_12583_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (1))){
var state_12581__$1 = state_12581;
var statearr_12584_13396 = state_12581__$1;
(statearr_12584_13396[(2)] = null);

(statearr_12584_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (4))){
var inst_12563 = (state_12581[(7)]);
var inst_12563__$1 = (state_12581[(2)]);
var inst_12564 = (inst_12563__$1 == null);
var state_12581__$1 = (function (){var statearr_12585 = state_12581;
(statearr_12585[(7)] = inst_12563__$1);

return statearr_12585;
})();
if(cljs.core.truth_(inst_12564)){
var statearr_12586_13397 = state_12581__$1;
(statearr_12586_13397[(1)] = (5));

} else {
var statearr_12587_13398 = state_12581__$1;
(statearr_12587_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (6))){
var inst_12563 = (state_12581[(7)]);
var inst_12568 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12563) : p.call(null,inst_12563));
var state_12581__$1 = state_12581;
if(cljs.core.truth_(inst_12568)){
var statearr_12588_13399 = state_12581__$1;
(statearr_12588_13399[(1)] = (8));

} else {
var statearr_12589_13400 = state_12581__$1;
(statearr_12589_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (3))){
var inst_12579 = (state_12581[(2)]);
var state_12581__$1 = state_12581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12581__$1,inst_12579);
} else {
if((state_val_12582 === (2))){
var state_12581__$1 = state_12581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12581__$1,(4),ch);
} else {
if((state_val_12582 === (11))){
var inst_12571 = (state_12581[(2)]);
var state_12581__$1 = state_12581;
var statearr_12590_13401 = state_12581__$1;
(statearr_12590_13401[(2)] = inst_12571);

(statearr_12590_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (9))){
var state_12581__$1 = state_12581;
var statearr_12595_13402 = state_12581__$1;
(statearr_12595_13402[(2)] = null);

(statearr_12595_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (5))){
var inst_12566 = cljs.core.async.close_BANG_(out);
var state_12581__$1 = state_12581;
var statearr_12596_13403 = state_12581__$1;
(statearr_12596_13403[(2)] = inst_12566);

(statearr_12596_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (10))){
var inst_12574 = (state_12581[(2)]);
var state_12581__$1 = (function (){var statearr_12597 = state_12581;
(statearr_12597[(8)] = inst_12574);

return statearr_12597;
})();
var statearr_12598_13404 = state_12581__$1;
(statearr_12598_13404[(2)] = null);

(statearr_12598_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12582 === (8))){
var inst_12563 = (state_12581[(7)]);
var state_12581__$1 = state_12581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12581__$1,(11),out,inst_12563);
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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12599 = [null,null,null,null,null,null,null,null,null];
(statearr_12599[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12599[(1)] = (1));

return statearr_12599;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12581){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12581);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12600){var ex__10901__auto__ = e12600;
var statearr_12601_13405 = state_12581;
(statearr_12601_13405[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12581[(4)]))){
var statearr_12602_13406 = state_12581;
(statearr_12602_13406[(1)] = cljs.core.first((state_12581[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12581;
state_12581 = G__13407;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12604 = f__10972__auto__();
(statearr_12604[(6)] = c__10971__auto___13394);

return statearr_12604;
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
var G__12606 = arguments.length;
switch (G__12606) {
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
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12675){
var state_val_12676 = (state_12675[(1)]);
if((state_val_12676 === (7))){
var inst_12671 = (state_12675[(2)]);
var state_12675__$1 = state_12675;
var statearr_12677_13409 = state_12675__$1;
(statearr_12677_13409[(2)] = inst_12671);

(statearr_12677_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (20))){
var inst_12641 = (state_12675[(7)]);
var inst_12652 = (state_12675[(2)]);
var inst_12653 = cljs.core.next(inst_12641);
var inst_12620 = inst_12653;
var inst_12621 = null;
var inst_12622 = (0);
var inst_12623 = (0);
var state_12675__$1 = (function (){var statearr_12678 = state_12675;
(statearr_12678[(8)] = inst_12623);

(statearr_12678[(9)] = inst_12621);

(statearr_12678[(10)] = inst_12622);

(statearr_12678[(11)] = inst_12652);

(statearr_12678[(12)] = inst_12620);

return statearr_12678;
})();
var statearr_12679_13410 = state_12675__$1;
(statearr_12679_13410[(2)] = null);

(statearr_12679_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (1))){
var state_12675__$1 = state_12675;
var statearr_12680_13411 = state_12675__$1;
(statearr_12680_13411[(2)] = null);

(statearr_12680_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (4))){
var inst_12609 = (state_12675[(13)]);
var inst_12609__$1 = (state_12675[(2)]);
var inst_12610 = (inst_12609__$1 == null);
var state_12675__$1 = (function (){var statearr_12681 = state_12675;
(statearr_12681[(13)] = inst_12609__$1);

return statearr_12681;
})();
if(cljs.core.truth_(inst_12610)){
var statearr_12682_13412 = state_12675__$1;
(statearr_12682_13412[(1)] = (5));

} else {
var statearr_12683_13413 = state_12675__$1;
(statearr_12683_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (15))){
var state_12675__$1 = state_12675;
var statearr_12687_13414 = state_12675__$1;
(statearr_12687_13414[(2)] = null);

(statearr_12687_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (21))){
var state_12675__$1 = state_12675;
var statearr_12688_13415 = state_12675__$1;
(statearr_12688_13415[(2)] = null);

(statearr_12688_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (13))){
var inst_12623 = (state_12675[(8)]);
var inst_12621 = (state_12675[(9)]);
var inst_12622 = (state_12675[(10)]);
var inst_12620 = (state_12675[(12)]);
var inst_12637 = (state_12675[(2)]);
var inst_12638 = (inst_12623 + (1));
var tmp12684 = inst_12621;
var tmp12685 = inst_12622;
var tmp12686 = inst_12620;
var inst_12620__$1 = tmp12686;
var inst_12621__$1 = tmp12684;
var inst_12622__$1 = tmp12685;
var inst_12623__$1 = inst_12638;
var state_12675__$1 = (function (){var statearr_12689 = state_12675;
(statearr_12689[(8)] = inst_12623__$1);

(statearr_12689[(9)] = inst_12621__$1);

(statearr_12689[(14)] = inst_12637);

(statearr_12689[(10)] = inst_12622__$1);

(statearr_12689[(12)] = inst_12620__$1);

return statearr_12689;
})();
var statearr_12690_13416 = state_12675__$1;
(statearr_12690_13416[(2)] = null);

(statearr_12690_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (22))){
var state_12675__$1 = state_12675;
var statearr_12691_13417 = state_12675__$1;
(statearr_12691_13417[(2)] = null);

(statearr_12691_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (6))){
var inst_12609 = (state_12675[(13)]);
var inst_12618 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12609) : f.call(null,inst_12609));
var inst_12619 = cljs.core.seq(inst_12618);
var inst_12620 = inst_12619;
var inst_12621 = null;
var inst_12622 = (0);
var inst_12623 = (0);
var state_12675__$1 = (function (){var statearr_12692 = state_12675;
(statearr_12692[(8)] = inst_12623);

(statearr_12692[(9)] = inst_12621);

(statearr_12692[(10)] = inst_12622);

(statearr_12692[(12)] = inst_12620);

return statearr_12692;
})();
var statearr_12693_13418 = state_12675__$1;
(statearr_12693_13418[(2)] = null);

(statearr_12693_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (17))){
var inst_12641 = (state_12675[(7)]);
var inst_12645 = cljs.core.chunk_first(inst_12641);
var inst_12646 = cljs.core.chunk_rest(inst_12641);
var inst_12647 = cljs.core.count(inst_12645);
var inst_12620 = inst_12646;
var inst_12621 = inst_12645;
var inst_12622 = inst_12647;
var inst_12623 = (0);
var state_12675__$1 = (function (){var statearr_12694 = state_12675;
(statearr_12694[(8)] = inst_12623);

(statearr_12694[(9)] = inst_12621);

(statearr_12694[(10)] = inst_12622);

(statearr_12694[(12)] = inst_12620);

return statearr_12694;
})();
var statearr_12695_13419 = state_12675__$1;
(statearr_12695_13419[(2)] = null);

(statearr_12695_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (3))){
var inst_12673 = (state_12675[(2)]);
var state_12675__$1 = state_12675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12675__$1,inst_12673);
} else {
if((state_val_12676 === (12))){
var inst_12661 = (state_12675[(2)]);
var state_12675__$1 = state_12675;
var statearr_12696_13420 = state_12675__$1;
(statearr_12696_13420[(2)] = inst_12661);

(statearr_12696_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (2))){
var state_12675__$1 = state_12675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12675__$1,(4),in$);
} else {
if((state_val_12676 === (23))){
var inst_12669 = (state_12675[(2)]);
var state_12675__$1 = state_12675;
var statearr_12697_13421 = state_12675__$1;
(statearr_12697_13421[(2)] = inst_12669);

(statearr_12697_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (19))){
var inst_12656 = (state_12675[(2)]);
var state_12675__$1 = state_12675;
var statearr_12698_13422 = state_12675__$1;
(statearr_12698_13422[(2)] = inst_12656);

(statearr_12698_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (11))){
var inst_12641 = (state_12675[(7)]);
var inst_12620 = (state_12675[(12)]);
var inst_12641__$1 = cljs.core.seq(inst_12620);
var state_12675__$1 = (function (){var statearr_12699 = state_12675;
(statearr_12699[(7)] = inst_12641__$1);

return statearr_12699;
})();
if(inst_12641__$1){
var statearr_12700_13423 = state_12675__$1;
(statearr_12700_13423[(1)] = (14));

} else {
var statearr_12701_13424 = state_12675__$1;
(statearr_12701_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (9))){
var inst_12663 = (state_12675[(2)]);
var inst_12664 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12675__$1 = (function (){var statearr_12702 = state_12675;
(statearr_12702[(15)] = inst_12663);

return statearr_12702;
})();
if(cljs.core.truth_(inst_12664)){
var statearr_12703_13425 = state_12675__$1;
(statearr_12703_13425[(1)] = (21));

} else {
var statearr_12704_13426 = state_12675__$1;
(statearr_12704_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (5))){
var inst_12612 = cljs.core.async.close_BANG_(out);
var state_12675__$1 = state_12675;
var statearr_12714_13427 = state_12675__$1;
(statearr_12714_13427[(2)] = inst_12612);

(statearr_12714_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (14))){
var inst_12641 = (state_12675[(7)]);
var inst_12643 = cljs.core.chunked_seq_QMARK_(inst_12641);
var state_12675__$1 = state_12675;
if(inst_12643){
var statearr_12715_13428 = state_12675__$1;
(statearr_12715_13428[(1)] = (17));

} else {
var statearr_12716_13429 = state_12675__$1;
(statearr_12716_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (16))){
var inst_12659 = (state_12675[(2)]);
var state_12675__$1 = state_12675;
var statearr_12717_13430 = state_12675__$1;
(statearr_12717_13430[(2)] = inst_12659);

(statearr_12717_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12676 === (10))){
var inst_12623 = (state_12675[(8)]);
var inst_12621 = (state_12675[(9)]);
var inst_12635 = cljs.core._nth(inst_12621,inst_12623);
var state_12675__$1 = state_12675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12675__$1,(13),out,inst_12635);
} else {
if((state_val_12676 === (18))){
var inst_12641 = (state_12675[(7)]);
var inst_12650 = cljs.core.first(inst_12641);
var state_12675__$1 = state_12675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12675__$1,(20),out,inst_12650);
} else {
if((state_val_12676 === (8))){
var inst_12623 = (state_12675[(8)]);
var inst_12622 = (state_12675[(10)]);
var inst_12632 = (inst_12623 < inst_12622);
var inst_12633 = inst_12632;
var state_12675__$1 = state_12675;
if(cljs.core.truth_(inst_12633)){
var statearr_12718_13431 = state_12675__$1;
(statearr_12718_13431[(1)] = (10));

} else {
var statearr_12719_13432 = state_12675__$1;
(statearr_12719_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10898__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10898__auto____0 = (function (){
var statearr_12720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12720[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10898__auto__);

(statearr_12720[(1)] = (1));

return statearr_12720;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10898__auto____1 = (function (state_12675){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12675);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12721){var ex__10901__auto__ = e12721;
var statearr_12722_13433 = state_12675;
(statearr_12722_13433[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12675[(4)]))){
var statearr_12723_13434 = state_12675;
(statearr_12723_13434[(1)] = cljs.core.first((state_12675[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12675;
state_12675 = G__13435;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10898__auto__ = function(state_12675){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10898__auto____1.call(this,state_12675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10898__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10898__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12724 = f__10972__auto__();
(statearr_12724[(6)] = c__10971__auto__);

return statearr_12724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));

return c__10971__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12726 = arguments.length;
switch (G__12726) {
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
var G__12779 = arguments.length;
switch (G__12779) {
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
var G__12781 = arguments.length;
switch (G__12781) {
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
var c__10971__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12814){
var state_val_12815 = (state_12814[(1)]);
if((state_val_12815 === (7))){
var inst_12809 = (state_12814[(2)]);
var state_12814__$1 = state_12814;
var statearr_12816_13440 = state_12814__$1;
(statearr_12816_13440[(2)] = inst_12809);

(statearr_12816_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (1))){
var inst_12791 = null;
var state_12814__$1 = (function (){var statearr_12817 = state_12814;
(statearr_12817[(7)] = inst_12791);

return statearr_12817;
})();
var statearr_12818_13441 = state_12814__$1;
(statearr_12818_13441[(2)] = null);

(statearr_12818_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (4))){
var inst_12794 = (state_12814[(8)]);
var inst_12794__$1 = (state_12814[(2)]);
var inst_12795 = (inst_12794__$1 == null);
var inst_12796 = cljs.core.not(inst_12795);
var state_12814__$1 = (function (){var statearr_12821 = state_12814;
(statearr_12821[(8)] = inst_12794__$1);

return statearr_12821;
})();
if(inst_12796){
var statearr_12830_13442 = state_12814__$1;
(statearr_12830_13442[(1)] = (5));

} else {
var statearr_12831_13443 = state_12814__$1;
(statearr_12831_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (6))){
var state_12814__$1 = state_12814;
var statearr_12832_13444 = state_12814__$1;
(statearr_12832_13444[(2)] = null);

(statearr_12832_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (3))){
var inst_12811 = (state_12814[(2)]);
var inst_12812 = cljs.core.async.close_BANG_(out);
var state_12814__$1 = (function (){var statearr_12833 = state_12814;
(statearr_12833[(9)] = inst_12811);

return statearr_12833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12814__$1,inst_12812);
} else {
if((state_val_12815 === (2))){
var state_12814__$1 = state_12814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12814__$1,(4),ch);
} else {
if((state_val_12815 === (11))){
var inst_12794 = (state_12814[(8)]);
var inst_12803 = (state_12814[(2)]);
var inst_12791 = inst_12794;
var state_12814__$1 = (function (){var statearr_12834 = state_12814;
(statearr_12834[(10)] = inst_12803);

(statearr_12834[(7)] = inst_12791);

return statearr_12834;
})();
var statearr_12835_13445 = state_12814__$1;
(statearr_12835_13445[(2)] = null);

(statearr_12835_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (9))){
var inst_12794 = (state_12814[(8)]);
var state_12814__$1 = state_12814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12814__$1,(11),out,inst_12794);
} else {
if((state_val_12815 === (5))){
var inst_12791 = (state_12814[(7)]);
var inst_12794 = (state_12814[(8)]);
var inst_12798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12794,inst_12791);
var state_12814__$1 = state_12814;
if(inst_12798){
var statearr_12837_13446 = state_12814__$1;
(statearr_12837_13446[(1)] = (8));

} else {
var statearr_12838_13447 = state_12814__$1;
(statearr_12838_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (10))){
var inst_12806 = (state_12814[(2)]);
var state_12814__$1 = state_12814;
var statearr_12839_13448 = state_12814__$1;
(statearr_12839_13448[(2)] = inst_12806);

(statearr_12839_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (8))){
var inst_12791 = (state_12814[(7)]);
var tmp12836 = inst_12791;
var inst_12791__$1 = tmp12836;
var state_12814__$1 = (function (){var statearr_12840 = state_12814;
(statearr_12840[(7)] = inst_12791__$1);

return statearr_12840;
})();
var statearr_12841_13449 = state_12814__$1;
(statearr_12841_13449[(2)] = null);

(statearr_12841_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12842 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12842[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12842[(1)] = (1));

return statearr_12842;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12814){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12814);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12843){var ex__10901__auto__ = e12843;
var statearr_12844_13450 = state_12814;
(statearr_12844_13450[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12814[(4)]))){
var statearr_12845_13451 = state_12814;
(statearr_12845_13451[(1)] = cljs.core.first((state_12814[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12814;
state_12814 = G__13452;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12846 = f__10972__auto__();
(statearr_12846[(6)] = c__10971__auto___13439);

return statearr_12846;
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
var G__12851 = arguments.length;
switch (G__12851) {
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
var c__10971__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12889){
var state_val_12890 = (state_12889[(1)]);
if((state_val_12890 === (7))){
var inst_12885 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
var statearr_12891_13455 = state_12889__$1;
(statearr_12891_13455[(2)] = inst_12885);

(statearr_12891_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (1))){
var inst_12852 = (new Array(n));
var inst_12853 = inst_12852;
var inst_12854 = (0);
var state_12889__$1 = (function (){var statearr_12892 = state_12889;
(statearr_12892[(7)] = inst_12854);

(statearr_12892[(8)] = inst_12853);

return statearr_12892;
})();
var statearr_12893_13456 = state_12889__$1;
(statearr_12893_13456[(2)] = null);

(statearr_12893_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (4))){
var inst_12857 = (state_12889[(9)]);
var inst_12857__$1 = (state_12889[(2)]);
var inst_12858 = (inst_12857__$1 == null);
var inst_12859 = cljs.core.not(inst_12858);
var state_12889__$1 = (function (){var statearr_12901 = state_12889;
(statearr_12901[(9)] = inst_12857__$1);

return statearr_12901;
})();
if(inst_12859){
var statearr_12902_13457 = state_12889__$1;
(statearr_12902_13457[(1)] = (5));

} else {
var statearr_12903_13458 = state_12889__$1;
(statearr_12903_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (15))){
var inst_12879 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
var statearr_12904_13459 = state_12889__$1;
(statearr_12904_13459[(2)] = inst_12879);

(statearr_12904_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (13))){
var state_12889__$1 = state_12889;
var statearr_12905_13460 = state_12889__$1;
(statearr_12905_13460[(2)] = null);

(statearr_12905_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (6))){
var inst_12854 = (state_12889[(7)]);
var inst_12875 = (inst_12854 > (0));
var state_12889__$1 = state_12889;
if(cljs.core.truth_(inst_12875)){
var statearr_12906_13461 = state_12889__$1;
(statearr_12906_13461[(1)] = (12));

} else {
var statearr_12907_13462 = state_12889__$1;
(statearr_12907_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (3))){
var inst_12887 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12889__$1,inst_12887);
} else {
if((state_val_12890 === (12))){
var inst_12853 = (state_12889[(8)]);
var inst_12877 = cljs.core.vec(inst_12853);
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12889__$1,(15),out,inst_12877);
} else {
if((state_val_12890 === (2))){
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12889__$1,(4),ch);
} else {
if((state_val_12890 === (11))){
var inst_12869 = (state_12889[(2)]);
var inst_12870 = (new Array(n));
var inst_12853 = inst_12870;
var inst_12854 = (0);
var state_12889__$1 = (function (){var statearr_12908 = state_12889;
(statearr_12908[(7)] = inst_12854);

(statearr_12908[(10)] = inst_12869);

(statearr_12908[(8)] = inst_12853);

return statearr_12908;
})();
var statearr_12909_13463 = state_12889__$1;
(statearr_12909_13463[(2)] = null);

(statearr_12909_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (9))){
var inst_12853 = (state_12889[(8)]);
var inst_12867 = cljs.core.vec(inst_12853);
var state_12889__$1 = state_12889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12889__$1,(11),out,inst_12867);
} else {
if((state_val_12890 === (5))){
var inst_12862 = (state_12889[(11)]);
var inst_12857 = (state_12889[(9)]);
var inst_12854 = (state_12889[(7)]);
var inst_12853 = (state_12889[(8)]);
var inst_12861 = (inst_12853[inst_12854] = inst_12857);
var inst_12862__$1 = (inst_12854 + (1));
var inst_12863 = (inst_12862__$1 < n);
var state_12889__$1 = (function (){var statearr_12910 = state_12889;
(statearr_12910[(12)] = inst_12861);

(statearr_12910[(11)] = inst_12862__$1);

return statearr_12910;
})();
if(cljs.core.truth_(inst_12863)){
var statearr_12911_13464 = state_12889__$1;
(statearr_12911_13464[(1)] = (8));

} else {
var statearr_12912_13465 = state_12889__$1;
(statearr_12912_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (14))){
var inst_12882 = (state_12889[(2)]);
var inst_12883 = cljs.core.async.close_BANG_(out);
var state_12889__$1 = (function (){var statearr_12914 = state_12889;
(statearr_12914[(13)] = inst_12882);

return statearr_12914;
})();
var statearr_12915_13466 = state_12889__$1;
(statearr_12915_13466[(2)] = inst_12883);

(statearr_12915_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (10))){
var inst_12873 = (state_12889[(2)]);
var state_12889__$1 = state_12889;
var statearr_12919_13467 = state_12889__$1;
(statearr_12919_13467[(2)] = inst_12873);

(statearr_12919_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12890 === (8))){
var inst_12862 = (state_12889[(11)]);
var inst_12853 = (state_12889[(8)]);
var tmp12913 = inst_12853;
var inst_12853__$1 = tmp12913;
var inst_12854 = inst_12862;
var state_12889__$1 = (function (){var statearr_12920 = state_12889;
(statearr_12920[(7)] = inst_12854);

(statearr_12920[(8)] = inst_12853__$1);

return statearr_12920;
})();
var statearr_12921_13468 = state_12889__$1;
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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12922[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12922[(1)] = (1));

return statearr_12922;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12889){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12889);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12923){var ex__10901__auto__ = e12923;
var statearr_12924_13469 = state_12889;
(statearr_12924_13469[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12889[(4)]))){
var statearr_12925_13470 = state_12889;
(statearr_12925_13470[(1)] = cljs.core.first((state_12889[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12889;
state_12889 = G__13471;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12926 = f__10972__auto__();
(statearr_12926[(6)] = c__10971__auto___13454);

return statearr_12926;
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
var c__10971__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10972__auto__ = (function (){var switch__10897__auto__ = (function (state_12970){
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
var cljs$core$async$state_machine__10898__auto__ = null;
var cljs$core$async$state_machine__10898__auto____0 = (function (){
var statearr_12993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12993[(0)] = cljs$core$async$state_machine__10898__auto__);

(statearr_12993[(1)] = (1));

return statearr_12993;
});
var cljs$core$async$state_machine__10898__auto____1 = (function (state_12970){
while(true){
var ret_value__10899__auto__ = (function (){try{while(true){
var result__10900__auto__ = switch__10897__auto__(state_12970);
if(cljs.core.keyword_identical_QMARK_(result__10900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10900__auto__;
}
break;
}
}catch (e12994){var ex__10901__auto__ = e12994;
var statearr_12995_13488 = state_12970;
(statearr_12995_13488[(2)] = ex__10901__auto__);


if(cljs.core.seq((state_12970[(4)]))){
var statearr_12996_13489 = state_12970;
(statearr_12996_13489[(1)] = cljs.core.first((state_12970[(4)])));

} else {
throw ex__10901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12970;
state_12970 = G__13490;
continue;
} else {
return ret_value__10899__auto__;
}
break;
}
});
cljs$core$async$state_machine__10898__auto__ = function(state_12970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10898__auto____1.call(this,state_12970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10898__auto____0;
cljs$core$async$state_machine__10898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10898__auto____1;
return cljs$core$async$state_machine__10898__auto__;
})()
})();
var state__10973__auto__ = (function (){var statearr_12997 = f__10972__auto__();
(statearr_12997[(6)] = c__10971__auto___13473);

return statearr_12997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10973__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
