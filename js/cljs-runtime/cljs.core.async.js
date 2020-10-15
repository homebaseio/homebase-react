goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11045 = arguments.length;
switch (G__11045) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11048 = (function (f,blockable,meta11049){
this.f = f;
this.blockable = blockable;
this.meta11049 = meta11049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11050,meta11049__$1){
var self__ = this;
var _11050__$1 = this;
return (new cljs.core.async.t_cljs$core$async11048(self__.f,self__.blockable,meta11049__$1));
}));

(cljs.core.async.t_cljs$core$async11048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11050){
var self__ = this;
var _11050__$1 = this;
return self__.meta11049;
}));

(cljs.core.async.t_cljs$core$async11048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11049","meta11049",-436113013,null)], null);
}));

(cljs.core.async.t_cljs$core$async11048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11048");

(cljs.core.async.t_cljs$core$async11048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11048.
 */
cljs.core.async.__GT_t_cljs$core$async11048 = (function cljs$core$async$__GT_t_cljs$core$async11048(f__$1,blockable__$1,meta11049){
return (new cljs.core.async.t_cljs$core$async11048(f__$1,blockable__$1,meta11049));
});

}

return (new cljs.core.async.t_cljs$core$async11048(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11064 = arguments.length;
switch (G__11064) {
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
var G__11078 = arguments.length;
switch (G__11078) {
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
var G__11091 = arguments.length;
switch (G__11091) {
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
var val_12982 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12982) : fn1.call(null,val_12982));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12982) : fn1.call(null,val_12982));
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
var G__11109 = arguments.length;
switch (G__11109) {
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
var n__4613__auto___12984 = n;
var x_12985 = (0);
while(true){
if((x_12985 < n__4613__auto___12984)){
(a[x_12985] = x_12985);

var G__12986 = (x_12985 + (1));
x_12985 = G__12986;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11120 = (function (flag,meta11121){
this.flag = flag;
this.meta11121 = meta11121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11122,meta11121__$1){
var self__ = this;
var _11122__$1 = this;
return (new cljs.core.async.t_cljs$core$async11120(self__.flag,meta11121__$1));
}));

(cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11122){
var self__ = this;
var _11122__$1 = this;
return self__.meta11121;
}));

(cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11121","meta11121",-1304286547,null)], null);
}));

(cljs.core.async.t_cljs$core$async11120.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11120");

(cljs.core.async.t_cljs$core$async11120.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11120");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11120.
 */
cljs.core.async.__GT_t_cljs$core$async11120 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11120(flag__$1,meta11121){
return (new cljs.core.async.t_cljs$core$async11120(flag__$1,meta11121));
});

}

return (new cljs.core.async.t_cljs$core$async11120(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11135 = (function (flag,cb,meta11136){
this.flag = flag;
this.cb = cb;
this.meta11136 = meta11136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11137,meta11136__$1){
var self__ = this;
var _11137__$1 = this;
return (new cljs.core.async.t_cljs$core$async11135(self__.flag,self__.cb,meta11136__$1));
}));

(cljs.core.async.t_cljs$core$async11135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11137){
var self__ = this;
var _11137__$1 = this;
return self__.meta11136;
}));

(cljs.core.async.t_cljs$core$async11135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11136","meta11136",683106694,null)], null);
}));

(cljs.core.async.t_cljs$core$async11135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11135");

(cljs.core.async.t_cljs$core$async11135.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11135.
 */
cljs.core.async.__GT_t_cljs$core$async11135 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11135(flag__$1,cb__$1,meta11136){
return (new cljs.core.async.t_cljs$core$async11135(flag__$1,cb__$1,meta11136));
});

}

return (new cljs.core.async.t_cljs$core$async11135(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11148_SHARP_){
var G__11150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11148_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11150) : fret.call(null,G__11150));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11149_SHARP_){
var G__11151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11149_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11151) : fret.call(null,G__11151));
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
var G__12994 = (i + (1));
i = G__12994;
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
var len__4736__auto___12995 = arguments.length;
var i__4737__auto___12996 = (0);
while(true){
if((i__4737__auto___12996 < len__4736__auto___12995)){
args__4742__auto__.push((arguments[i__4737__auto___12996]));

var G__12997 = (i__4737__auto___12996 + (1));
i__4737__auto___12996 = G__12997;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11155){
var map__11156 = p__11155;
var map__11156__$1 = (((((!((map__11156 == null))))?(((((map__11156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11156):map__11156);
var opts = map__11156__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11153){
var G__11154 = cljs.core.first(seq11153);
var seq11153__$1 = cljs.core.next(seq11153);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11154,seq11153__$1);
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
var G__11160 = arguments.length;
switch (G__11160) {
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
var c__10986__auto___12999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11194){
var state_val_11195 = (state_11194[(1)]);
if((state_val_11195 === (7))){
var inst_11190 = (state_11194[(2)]);
var state_11194__$1 = state_11194;
var statearr_11208_13000 = state_11194__$1;
(statearr_11208_13000[(2)] = inst_11190);

(statearr_11208_13000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (1))){
var state_11194__$1 = state_11194;
var statearr_11209_13001 = state_11194__$1;
(statearr_11209_13001[(2)] = null);

(statearr_11209_13001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (4))){
var inst_11171 = (state_11194[(7)]);
var inst_11171__$1 = (state_11194[(2)]);
var inst_11174 = (inst_11171__$1 == null);
var state_11194__$1 = (function (){var statearr_11212 = state_11194;
(statearr_11212[(7)] = inst_11171__$1);

return statearr_11212;
})();
if(cljs.core.truth_(inst_11174)){
var statearr_11214_13005 = state_11194__$1;
(statearr_11214_13005[(1)] = (5));

} else {
var statearr_11215_13006 = state_11194__$1;
(statearr_11215_13006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (13))){
var state_11194__$1 = state_11194;
var statearr_11216_13007 = state_11194__$1;
(statearr_11216_13007[(2)] = null);

(statearr_11216_13007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (6))){
var inst_11171 = (state_11194[(7)]);
var state_11194__$1 = state_11194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11194__$1,(11),to,inst_11171);
} else {
if((state_val_11195 === (3))){
var inst_11192 = (state_11194[(2)]);
var state_11194__$1 = state_11194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11194__$1,inst_11192);
} else {
if((state_val_11195 === (12))){
var state_11194__$1 = state_11194;
var statearr_11217_13008 = state_11194__$1;
(statearr_11217_13008[(2)] = null);

(statearr_11217_13008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (2))){
var state_11194__$1 = state_11194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11194__$1,(4),from);
} else {
if((state_val_11195 === (11))){
var inst_11183 = (state_11194[(2)]);
var state_11194__$1 = state_11194;
if(cljs.core.truth_(inst_11183)){
var statearr_11227_13009 = state_11194__$1;
(statearr_11227_13009[(1)] = (12));

} else {
var statearr_11228_13010 = state_11194__$1;
(statearr_11228_13010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (9))){
var state_11194__$1 = state_11194;
var statearr_11229_13011 = state_11194__$1;
(statearr_11229_13011[(2)] = null);

(statearr_11229_13011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (5))){
var state_11194__$1 = state_11194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11230_13012 = state_11194__$1;
(statearr_11230_13012[(1)] = (8));

} else {
var statearr_11231_13013 = state_11194__$1;
(statearr_11231_13013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (14))){
var inst_11188 = (state_11194[(2)]);
var state_11194__$1 = state_11194;
var statearr_11232_13014 = state_11194__$1;
(statearr_11232_13014[(2)] = inst_11188);

(statearr_11232_13014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (10))){
var inst_11180 = (state_11194[(2)]);
var state_11194__$1 = state_11194;
var statearr_11233_13015 = state_11194__$1;
(statearr_11233_13015[(2)] = inst_11180);

(statearr_11233_13015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11195 === (8))){
var inst_11177 = cljs.core.async.close_BANG_(to);
var state_11194__$1 = state_11194;
var statearr_11234_13016 = state_11194__$1;
(statearr_11234_13016[(2)] = inst_11177);

(statearr_11234_13016[(1)] = (10));


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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_11237 = [null,null,null,null,null,null,null,null];
(statearr_11237[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_11237[(1)] = (1));

return statearr_11237;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_11194){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11194);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11238){var ex__10942__auto__ = e11238;
var statearr_11239_13017 = state_11194;
(statearr_11239_13017[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11194[(4)]))){
var statearr_11241_13018 = state_11194;
(statearr_11241_13018[(1)] = cljs.core.first((state_11194[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13019 = state_11194;
state_11194 = G__13019;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_11194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_11194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11243 = f__10987__auto__();
(statearr_11243[(6)] = c__10986__auto___12999);

return statearr_11243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var process = (function (p__11244){
var vec__11245 = p__11244;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11245,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11245,(1),null);
var job = vec__11245;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10986__auto___13020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11252){
var state_val_11253 = (state_11252[(1)]);
if((state_val_11253 === (1))){
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11252__$1,(2),res,v);
} else {
if((state_val_11253 === (2))){
var inst_11249 = (state_11252[(2)]);
var inst_11250 = cljs.core.async.close_BANG_(res);
var state_11252__$1 = (function (){var statearr_11256 = state_11252;
(statearr_11256[(7)] = inst_11249);

return statearr_11256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11252__$1,inst_11250);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0 = (function (){
var statearr_11258 = [null,null,null,null,null,null,null,null];
(statearr_11258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__);

(statearr_11258[(1)] = (1));

return statearr_11258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1 = (function (state_11252){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11252);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11259){var ex__10942__auto__ = e11259;
var statearr_11260_13023 = state_11252;
(statearr_11260_13023[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11252[(4)]))){
var statearr_11261_13024 = state_11252;
(statearr_11261_13024[(1)] = cljs.core.first((state_11252[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13025 = state_11252;
state_11252 = G__13025;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = function(state_11252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1.call(this,state_11252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11262 = f__10987__auto__();
(statearr_11262[(6)] = c__10986__auto___13020);

return statearr_11262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11263){
var vec__11264 = p__11263;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11264,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11264,(1),null);
var job = vec__11264;
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
var n__4613__auto___13027 = n;
var __13028 = (0);
while(true){
if((__13028 < n__4613__auto___13027)){
var G__11267_13029 = type;
var G__11267_13030__$1 = (((G__11267_13029 instanceof cljs.core.Keyword))?G__11267_13029.fqn:null);
switch (G__11267_13030__$1) {
case "compute":
var c__10986__auto___13033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13028,c__10986__auto___13033,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async){
return (function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = ((function (__13028,c__10986__auto___13033,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async){
return (function (state_11280){
var state_val_11281 = (state_11280[(1)]);
if((state_val_11281 === (1))){
var state_11280__$1 = state_11280;
var statearr_11282_13034 = state_11280__$1;
(statearr_11282_13034[(2)] = null);

(statearr_11282_13034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11281 === (2))){
var state_11280__$1 = state_11280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11280__$1,(4),jobs);
} else {
if((state_val_11281 === (3))){
var inst_11278 = (state_11280[(2)]);
var state_11280__$1 = state_11280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11280__$1,inst_11278);
} else {
if((state_val_11281 === (4))){
var inst_11270 = (state_11280[(2)]);
var inst_11271 = process(inst_11270);
var state_11280__$1 = state_11280;
if(cljs.core.truth_(inst_11271)){
var statearr_11283_13036 = state_11280__$1;
(statearr_11283_13036[(1)] = (5));

} else {
var statearr_11284_13037 = state_11280__$1;
(statearr_11284_13037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11281 === (5))){
var state_11280__$1 = state_11280;
var statearr_11285_13038 = state_11280__$1;
(statearr_11285_13038[(2)] = null);

(statearr_11285_13038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11281 === (6))){
var state_11280__$1 = state_11280;
var statearr_11286_13039 = state_11280__$1;
(statearr_11286_13039[(2)] = null);

(statearr_11286_13039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11281 === (7))){
var inst_11276 = (state_11280[(2)]);
var state_11280__$1 = state_11280;
var statearr_11287_13041 = state_11280__$1;
(statearr_11287_13041[(2)] = inst_11276);

(statearr_11287_13041[(1)] = (3));


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
});})(__13028,c__10986__auto___13033,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async))
;
return ((function (__13028,switch__10938__auto__,c__10986__auto___13033,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0 = (function (){
var statearr_11288 = [null,null,null,null,null,null,null];
(statearr_11288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__);

(statearr_11288[(1)] = (1));

return statearr_11288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1 = (function (state_11280){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11280);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11289){var ex__10942__auto__ = e11289;
var statearr_11290_13043 = state_11280;
(statearr_11290_13043[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11280[(4)]))){
var statearr_11291_13044 = state_11280;
(statearr_11291_13044[(1)] = cljs.core.first((state_11280[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13048 = state_11280;
state_11280 = G__13048;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = function(state_11280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1.call(this,state_11280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__;
})()
;})(__13028,switch__10938__auto__,c__10986__auto___13033,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async))
})();
var state__10988__auto__ = (function (){var statearr_11292 = f__10987__auto__();
(statearr_11292[(6)] = c__10986__auto___13033);

return statearr_11292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
});})(__13028,c__10986__auto___13033,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async))
);


break;
case "async":
var c__10986__auto___13049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13028,c__10986__auto___13049,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async){
return (function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = ((function (__13028,c__10986__auto___13049,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async){
return (function (state_11305){
var state_val_11306 = (state_11305[(1)]);
if((state_val_11306 === (1))){
var state_11305__$1 = state_11305;
var statearr_11307_13050 = state_11305__$1;
(statearr_11307_13050[(2)] = null);

(statearr_11307_13050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (2))){
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11305__$1,(4),jobs);
} else {
if((state_val_11306 === (3))){
var inst_11303 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11305__$1,inst_11303);
} else {
if((state_val_11306 === (4))){
var inst_11295 = (state_11305[(2)]);
var inst_11296 = async(inst_11295);
var state_11305__$1 = state_11305;
if(cljs.core.truth_(inst_11296)){
var statearr_11308_13051 = state_11305__$1;
(statearr_11308_13051[(1)] = (5));

} else {
var statearr_11309_13052 = state_11305__$1;
(statearr_11309_13052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (5))){
var state_11305__$1 = state_11305;
var statearr_11310_13053 = state_11305__$1;
(statearr_11310_13053[(2)] = null);

(statearr_11310_13053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (6))){
var state_11305__$1 = state_11305;
var statearr_11311_13054 = state_11305__$1;
(statearr_11311_13054[(2)] = null);

(statearr_11311_13054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (7))){
var inst_11301 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11312_13055 = state_11305__$1;
(statearr_11312_13055[(2)] = inst_11301);

(statearr_11312_13055[(1)] = (3));


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
});})(__13028,c__10986__auto___13049,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async))
;
return ((function (__13028,switch__10938__auto__,c__10986__auto___13049,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0 = (function (){
var statearr_11313 = [null,null,null,null,null,null,null];
(statearr_11313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__);

(statearr_11313[(1)] = (1));

return statearr_11313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1 = (function (state_11305){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11305);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11314){var ex__10942__auto__ = e11314;
var statearr_11315_13056 = state_11305;
(statearr_11315_13056[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11305[(4)]))){
var statearr_11316_13057 = state_11305;
(statearr_11316_13057[(1)] = cljs.core.first((state_11305[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13058 = state_11305;
state_11305 = G__13058;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = function(state_11305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1.call(this,state_11305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__;
})()
;})(__13028,switch__10938__auto__,c__10986__auto___13049,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async))
})();
var state__10988__auto__ = (function (){var statearr_11317 = f__10987__auto__();
(statearr_11317[(6)] = c__10986__auto___13049);

return statearr_11317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
});})(__13028,c__10986__auto___13049,G__11267_13029,G__11267_13030__$1,n__4613__auto___13027,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11267_13030__$1)].join('')));

}

var G__13059 = (__13028 + (1));
__13028 = G__13059;
continue;
} else {
}
break;
}

var c__10986__auto___13060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11339){
var state_val_11340 = (state_11339[(1)]);
if((state_val_11340 === (7))){
var inst_11335 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
var statearr_11342_13061 = state_11339__$1;
(statearr_11342_13061[(2)] = inst_11335);

(statearr_11342_13061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (1))){
var state_11339__$1 = state_11339;
var statearr_11343_13062 = state_11339__$1;
(statearr_11343_13062[(2)] = null);

(statearr_11343_13062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (4))){
var inst_11320 = (state_11339[(7)]);
var inst_11320__$1 = (state_11339[(2)]);
var inst_11321 = (inst_11320__$1 == null);
var state_11339__$1 = (function (){var statearr_11344 = state_11339;
(statearr_11344[(7)] = inst_11320__$1);

return statearr_11344;
})();
if(cljs.core.truth_(inst_11321)){
var statearr_11345_13063 = state_11339__$1;
(statearr_11345_13063[(1)] = (5));

} else {
var statearr_11346_13064 = state_11339__$1;
(statearr_11346_13064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (6))){
var inst_11320 = (state_11339[(7)]);
var inst_11325 = (state_11339[(8)]);
var inst_11325__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11327 = [inst_11320,inst_11325__$1];
var inst_11328 = (new cljs.core.PersistentVector(null,2,(5),inst_11326,inst_11327,null));
var state_11339__$1 = (function (){var statearr_11347 = state_11339;
(statearr_11347[(8)] = inst_11325__$1);

return statearr_11347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11339__$1,(8),jobs,inst_11328);
} else {
if((state_val_11340 === (3))){
var inst_11337 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11339__$1,inst_11337);
} else {
if((state_val_11340 === (2))){
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11339__$1,(4),from);
} else {
if((state_val_11340 === (9))){
var inst_11332 = (state_11339[(2)]);
var state_11339__$1 = (function (){var statearr_11348 = state_11339;
(statearr_11348[(9)] = inst_11332);

return statearr_11348;
})();
var statearr_11349_13065 = state_11339__$1;
(statearr_11349_13065[(2)] = null);

(statearr_11349_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (5))){
var inst_11323 = cljs.core.async.close_BANG_(jobs);
var state_11339__$1 = state_11339;
var statearr_11350_13066 = state_11339__$1;
(statearr_11350_13066[(2)] = inst_11323);

(statearr_11350_13066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (8))){
var inst_11325 = (state_11339[(8)]);
var inst_11330 = (state_11339[(2)]);
var state_11339__$1 = (function (){var statearr_11351 = state_11339;
(statearr_11351[(10)] = inst_11330);

return statearr_11351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11339__$1,(9),results,inst_11325);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0 = (function (){
var statearr_11352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__);

(statearr_11352[(1)] = (1));

return statearr_11352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1 = (function (state_11339){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11339);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11353){var ex__10942__auto__ = e11353;
var statearr_11354_13067 = state_11339;
(statearr_11354_13067[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11339[(4)]))){
var statearr_11355_13068 = state_11339;
(statearr_11355_13068[(1)] = cljs.core.first((state_11339[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11339;
state_11339 = G__13069;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = function(state_11339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1.call(this,state_11339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11356 = f__10987__auto__();
(statearr_11356[(6)] = c__10986__auto___13060);

return statearr_11356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));


var c__10986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11394){
var state_val_11395 = (state_11394[(1)]);
if((state_val_11395 === (7))){
var inst_11390 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11398_13070 = state_11394__$1;
(statearr_11398_13070[(2)] = inst_11390);

(statearr_11398_13070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (20))){
var state_11394__$1 = state_11394;
var statearr_11399_13071 = state_11394__$1;
(statearr_11399_13071[(2)] = null);

(statearr_11399_13071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (1))){
var state_11394__$1 = state_11394;
var statearr_11401_13072 = state_11394__$1;
(statearr_11401_13072[(2)] = null);

(statearr_11401_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (4))){
var inst_11359 = (state_11394[(7)]);
var inst_11359__$1 = (state_11394[(2)]);
var inst_11360 = (inst_11359__$1 == null);
var state_11394__$1 = (function (){var statearr_11402 = state_11394;
(statearr_11402[(7)] = inst_11359__$1);

return statearr_11402;
})();
if(cljs.core.truth_(inst_11360)){
var statearr_11403_13073 = state_11394__$1;
(statearr_11403_13073[(1)] = (5));

} else {
var statearr_11404_13074 = state_11394__$1;
(statearr_11404_13074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (15))){
var inst_11372 = (state_11394[(8)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11394__$1,(18),to,inst_11372);
} else {
if((state_val_11395 === (21))){
var inst_11385 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11405_13075 = state_11394__$1;
(statearr_11405_13075[(2)] = inst_11385);

(statearr_11405_13075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (13))){
var inst_11387 = (state_11394[(2)]);
var state_11394__$1 = (function (){var statearr_11406 = state_11394;
(statearr_11406[(9)] = inst_11387);

return statearr_11406;
})();
var statearr_11407_13076 = state_11394__$1;
(statearr_11407_13076[(2)] = null);

(statearr_11407_13076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (6))){
var inst_11359 = (state_11394[(7)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(11),inst_11359);
} else {
if((state_val_11395 === (17))){
var inst_11380 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
if(cljs.core.truth_(inst_11380)){
var statearr_11408_13077 = state_11394__$1;
(statearr_11408_13077[(1)] = (19));

} else {
var statearr_11409_13078 = state_11394__$1;
(statearr_11409_13078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (3))){
var inst_11392 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11394__$1,inst_11392);
} else {
if((state_val_11395 === (12))){
var inst_11369 = (state_11394[(10)]);
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(14),inst_11369);
} else {
if((state_val_11395 === (2))){
var state_11394__$1 = state_11394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,(4),results);
} else {
if((state_val_11395 === (19))){
var state_11394__$1 = state_11394;
var statearr_11410_13079 = state_11394__$1;
(statearr_11410_13079[(2)] = null);

(statearr_11410_13079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (11))){
var inst_11369 = (state_11394[(2)]);
var state_11394__$1 = (function (){var statearr_11411 = state_11394;
(statearr_11411[(10)] = inst_11369);

return statearr_11411;
})();
var statearr_11412_13080 = state_11394__$1;
(statearr_11412_13080[(2)] = null);

(statearr_11412_13080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (9))){
var state_11394__$1 = state_11394;
var statearr_11413_13081 = state_11394__$1;
(statearr_11413_13081[(2)] = null);

(statearr_11413_13081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (5))){
var state_11394__$1 = state_11394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11414_13082 = state_11394__$1;
(statearr_11414_13082[(1)] = (8));

} else {
var statearr_11415_13083 = state_11394__$1;
(statearr_11415_13083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (14))){
var inst_11372 = (state_11394[(8)]);
var inst_11372__$1 = (state_11394[(2)]);
var inst_11373 = (inst_11372__$1 == null);
var inst_11374 = cljs.core.not(inst_11373);
var state_11394__$1 = (function (){var statearr_11416 = state_11394;
(statearr_11416[(8)] = inst_11372__$1);

return statearr_11416;
})();
if(inst_11374){
var statearr_11417_13084 = state_11394__$1;
(statearr_11417_13084[(1)] = (15));

} else {
var statearr_11418_13085 = state_11394__$1;
(statearr_11418_13085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (16))){
var state_11394__$1 = state_11394;
var statearr_11419_13086 = state_11394__$1;
(statearr_11419_13086[(2)] = false);

(statearr_11419_13086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (10))){
var inst_11366 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11420_13087 = state_11394__$1;
(statearr_11420_13087[(2)] = inst_11366);

(statearr_11420_13087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (18))){
var inst_11377 = (state_11394[(2)]);
var state_11394__$1 = state_11394;
var statearr_11421_13088 = state_11394__$1;
(statearr_11421_13088[(2)] = inst_11377);

(statearr_11421_13088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11395 === (8))){
var inst_11363 = cljs.core.async.close_BANG_(to);
var state_11394__$1 = state_11394;
var statearr_11422_13089 = state_11394__$1;
(statearr_11422_13089[(2)] = inst_11363);

(statearr_11422_13089[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0 = (function (){
var statearr_11423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__);

(statearr_11423[(1)] = (1));

return statearr_11423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1 = (function (state_11394){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11394);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11424){var ex__10942__auto__ = e11424;
var statearr_11425_13090 = state_11394;
(statearr_11425_13090[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11394[(4)]))){
var statearr_11426_13091 = state_11394;
(statearr_11426_13091[(1)] = cljs.core.first((state_11394[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13092 = state_11394;
state_11394 = G__13092;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__ = function(state_11394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1.call(this,state_11394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11427 = f__10987__auto__();
(statearr_11427[(6)] = c__10986__auto__);

return statearr_11427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));

return c__10986__auto__;
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
var G__11429 = arguments.length;
switch (G__11429) {
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
var G__11431 = arguments.length;
switch (G__11431) {
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
var G__11433 = arguments.length;
switch (G__11433) {
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
var c__10986__auto___13096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11459){
var state_val_11460 = (state_11459[(1)]);
if((state_val_11460 === (7))){
var inst_11455 = (state_11459[(2)]);
var state_11459__$1 = state_11459;
var statearr_11461_13097 = state_11459__$1;
(statearr_11461_13097[(2)] = inst_11455);

(statearr_11461_13097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (1))){
var state_11459__$1 = state_11459;
var statearr_11462_13098 = state_11459__$1;
(statearr_11462_13098[(2)] = null);

(statearr_11462_13098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (4))){
var inst_11436 = (state_11459[(7)]);
var inst_11436__$1 = (state_11459[(2)]);
var inst_11437 = (inst_11436__$1 == null);
var state_11459__$1 = (function (){var statearr_11463 = state_11459;
(statearr_11463[(7)] = inst_11436__$1);

return statearr_11463;
})();
if(cljs.core.truth_(inst_11437)){
var statearr_11464_13099 = state_11459__$1;
(statearr_11464_13099[(1)] = (5));

} else {
var statearr_11465_13100 = state_11459__$1;
(statearr_11465_13100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (13))){
var state_11459__$1 = state_11459;
var statearr_11466_13101 = state_11459__$1;
(statearr_11466_13101[(2)] = null);

(statearr_11466_13101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (6))){
var inst_11436 = (state_11459[(7)]);
var inst_11442 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11436) : p.call(null,inst_11436));
var state_11459__$1 = state_11459;
if(cljs.core.truth_(inst_11442)){
var statearr_11467_13102 = state_11459__$1;
(statearr_11467_13102[(1)] = (9));

} else {
var statearr_11468_13103 = state_11459__$1;
(statearr_11468_13103[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (3))){
var inst_11457 = (state_11459[(2)]);
var state_11459__$1 = state_11459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11459__$1,inst_11457);
} else {
if((state_val_11460 === (12))){
var state_11459__$1 = state_11459;
var statearr_11469_13104 = state_11459__$1;
(statearr_11469_13104[(2)] = null);

(statearr_11469_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (2))){
var state_11459__$1 = state_11459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11459__$1,(4),ch);
} else {
if((state_val_11460 === (11))){
var inst_11436 = (state_11459[(7)]);
var inst_11446 = (state_11459[(2)]);
var state_11459__$1 = state_11459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11459__$1,(8),inst_11446,inst_11436);
} else {
if((state_val_11460 === (9))){
var state_11459__$1 = state_11459;
var statearr_11471_13105 = state_11459__$1;
(statearr_11471_13105[(2)] = tc);

(statearr_11471_13105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (5))){
var inst_11439 = cljs.core.async.close_BANG_(tc);
var inst_11440 = cljs.core.async.close_BANG_(fc);
var state_11459__$1 = (function (){var statearr_11472 = state_11459;
(statearr_11472[(8)] = inst_11439);

return statearr_11472;
})();
var statearr_11473_13106 = state_11459__$1;
(statearr_11473_13106[(2)] = inst_11440);

(statearr_11473_13106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (14))){
var inst_11453 = (state_11459[(2)]);
var state_11459__$1 = state_11459;
var statearr_11474_13107 = state_11459__$1;
(statearr_11474_13107[(2)] = inst_11453);

(statearr_11474_13107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (10))){
var state_11459__$1 = state_11459;
var statearr_11475_13108 = state_11459__$1;
(statearr_11475_13108[(2)] = fc);

(statearr_11475_13108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11460 === (8))){
var inst_11448 = (state_11459[(2)]);
var state_11459__$1 = state_11459;
if(cljs.core.truth_(inst_11448)){
var statearr_11476_13109 = state_11459__$1;
(statearr_11476_13109[(1)] = (12));

} else {
var statearr_11477_13110 = state_11459__$1;
(statearr_11477_13110[(1)] = (13));

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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_11478 = [null,null,null,null,null,null,null,null,null];
(statearr_11478[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_11478[(1)] = (1));

return statearr_11478;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_11459){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11459);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11479){var ex__10942__auto__ = e11479;
var statearr_11480_13111 = state_11459;
(statearr_11480_13111[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11459[(4)]))){
var statearr_11481_13112 = state_11459;
(statearr_11481_13112[(1)] = cljs.core.first((state_11459[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13113 = state_11459;
state_11459 = G__13113;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_11459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_11459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11482 = f__10987__auto__();
(statearr_11482[(6)] = c__10986__auto___13096);

return statearr_11482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var c__10986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11504){
var state_val_11505 = (state_11504[(1)]);
if((state_val_11505 === (7))){
var inst_11500 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
var statearr_11506_13114 = state_11504__$1;
(statearr_11506_13114[(2)] = inst_11500);

(statearr_11506_13114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (1))){
var inst_11483 = init;
var inst_11484 = inst_11483;
var state_11504__$1 = (function (){var statearr_11507 = state_11504;
(statearr_11507[(7)] = inst_11484);

return statearr_11507;
})();
var statearr_11508_13115 = state_11504__$1;
(statearr_11508_13115[(2)] = null);

(statearr_11508_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (4))){
var inst_11487 = (state_11504[(8)]);
var inst_11487__$1 = (state_11504[(2)]);
var inst_11488 = (inst_11487__$1 == null);
var state_11504__$1 = (function (){var statearr_11509 = state_11504;
(statearr_11509[(8)] = inst_11487__$1);

return statearr_11509;
})();
if(cljs.core.truth_(inst_11488)){
var statearr_11510_13116 = state_11504__$1;
(statearr_11510_13116[(1)] = (5));

} else {
var statearr_11511_13117 = state_11504__$1;
(statearr_11511_13117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (6))){
var inst_11491 = (state_11504[(9)]);
var inst_11484 = (state_11504[(7)]);
var inst_11487 = (state_11504[(8)]);
var inst_11491__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11484,inst_11487) : f.call(null,inst_11484,inst_11487));
var inst_11492 = cljs.core.reduced_QMARK_(inst_11491__$1);
var state_11504__$1 = (function (){var statearr_11512 = state_11504;
(statearr_11512[(9)] = inst_11491__$1);

return statearr_11512;
})();
if(inst_11492){
var statearr_11513_13118 = state_11504__$1;
(statearr_11513_13118[(1)] = (8));

} else {
var statearr_11514_13119 = state_11504__$1;
(statearr_11514_13119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (3))){
var inst_11502 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11504__$1,inst_11502);
} else {
if((state_val_11505 === (2))){
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11504__$1,(4),ch);
} else {
if((state_val_11505 === (9))){
var inst_11491 = (state_11504[(9)]);
var inst_11484 = inst_11491;
var state_11504__$1 = (function (){var statearr_11515 = state_11504;
(statearr_11515[(7)] = inst_11484);

return statearr_11515;
})();
var statearr_11516_13120 = state_11504__$1;
(statearr_11516_13120[(2)] = null);

(statearr_11516_13120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (5))){
var inst_11484 = (state_11504[(7)]);
var state_11504__$1 = state_11504;
var statearr_11517_13121 = state_11504__$1;
(statearr_11517_13121[(2)] = inst_11484);

(statearr_11517_13121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (10))){
var inst_11498 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
var statearr_11518_13122 = state_11504__$1;
(statearr_11518_13122[(2)] = inst_11498);

(statearr_11518_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (8))){
var inst_11491 = (state_11504[(9)]);
var inst_11494 = cljs.core.deref(inst_11491);
var state_11504__$1 = state_11504;
var statearr_11519_13123 = state_11504__$1;
(statearr_11519_13123[(2)] = inst_11494);

(statearr_11519_13123[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10939__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10939__auto____0 = (function (){
var statearr_11520 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11520[(0)] = cljs$core$async$reduce_$_state_machine__10939__auto__);

(statearr_11520[(1)] = (1));

return statearr_11520;
});
var cljs$core$async$reduce_$_state_machine__10939__auto____1 = (function (state_11504){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11504);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11521){var ex__10942__auto__ = e11521;
var statearr_11522_13124 = state_11504;
(statearr_11522_13124[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11504[(4)]))){
var statearr_11523_13125 = state_11504;
(statearr_11523_13125[(1)] = cljs.core.first((state_11504[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13126 = state_11504;
state_11504 = G__13126;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10939__auto__ = function(state_11504){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10939__auto____1.call(this,state_11504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10939__auto____0;
cljs$core$async$reduce_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10939__auto____1;
return cljs$core$async$reduce_$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11524 = f__10987__auto__();
(statearr_11524[(6)] = c__10986__auto__);

return statearr_11524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));

return c__10986__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11530){
var state_val_11531 = (state_11530[(1)]);
if((state_val_11531 === (1))){
var inst_11525 = cljs.core.async.reduce(f__$1,init,ch);
var state_11530__$1 = state_11530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11530__$1,(2),inst_11525);
} else {
if((state_val_11531 === (2))){
var inst_11527 = (state_11530[(2)]);
var inst_11528 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11527) : f__$1.call(null,inst_11527));
var state_11530__$1 = state_11530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11530__$1,inst_11528);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10939__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10939__auto____0 = (function (){
var statearr_11532 = [null,null,null,null,null,null,null];
(statearr_11532[(0)] = cljs$core$async$transduce_$_state_machine__10939__auto__);

(statearr_11532[(1)] = (1));

return statearr_11532;
});
var cljs$core$async$transduce_$_state_machine__10939__auto____1 = (function (state_11530){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11530);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11533){var ex__10942__auto__ = e11533;
var statearr_11534_13127 = state_11530;
(statearr_11534_13127[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11530[(4)]))){
var statearr_11535_13128 = state_11530;
(statearr_11535_13128[(1)] = cljs.core.first((state_11530[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13129 = state_11530;
state_11530 = G__13129;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10939__auto__ = function(state_11530){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10939__auto____1.call(this,state_11530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10939__auto____0;
cljs$core$async$transduce_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10939__auto____1;
return cljs$core$async$transduce_$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11536 = f__10987__auto__();
(statearr_11536[(6)] = c__10986__auto__);

return statearr_11536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));

return c__10986__auto__;
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
var G__11538 = arguments.length;
switch (G__11538) {
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
var c__10986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11563){
var state_val_11564 = (state_11563[(1)]);
if((state_val_11564 === (7))){
var inst_11545 = (state_11563[(2)]);
var state_11563__$1 = state_11563;
var statearr_11565_13131 = state_11563__$1;
(statearr_11565_13131[(2)] = inst_11545);

(statearr_11565_13131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (1))){
var inst_11539 = cljs.core.seq(coll);
var inst_11540 = inst_11539;
var state_11563__$1 = (function (){var statearr_11566 = state_11563;
(statearr_11566[(7)] = inst_11540);

return statearr_11566;
})();
var statearr_11567_13132 = state_11563__$1;
(statearr_11567_13132[(2)] = null);

(statearr_11567_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (4))){
var inst_11540 = (state_11563[(7)]);
var inst_11543 = cljs.core.first(inst_11540);
var state_11563__$1 = state_11563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11563__$1,(7),ch,inst_11543);
} else {
if((state_val_11564 === (13))){
var inst_11557 = (state_11563[(2)]);
var state_11563__$1 = state_11563;
var statearr_11568_13134 = state_11563__$1;
(statearr_11568_13134[(2)] = inst_11557);

(statearr_11568_13134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (6))){
var inst_11548 = (state_11563[(2)]);
var state_11563__$1 = state_11563;
if(cljs.core.truth_(inst_11548)){
var statearr_11573_13135 = state_11563__$1;
(statearr_11573_13135[(1)] = (8));

} else {
var statearr_11574_13136 = state_11563__$1;
(statearr_11574_13136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (3))){
var inst_11561 = (state_11563[(2)]);
var state_11563__$1 = state_11563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11563__$1,inst_11561);
} else {
if((state_val_11564 === (12))){
var state_11563__$1 = state_11563;
var statearr_11579_13137 = state_11563__$1;
(statearr_11579_13137[(2)] = null);

(statearr_11579_13137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (2))){
var inst_11540 = (state_11563[(7)]);
var state_11563__$1 = state_11563;
if(cljs.core.truth_(inst_11540)){
var statearr_11584_13138 = state_11563__$1;
(statearr_11584_13138[(1)] = (4));

} else {
var statearr_11585_13139 = state_11563__$1;
(statearr_11585_13139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (11))){
var inst_11554 = cljs.core.async.close_BANG_(ch);
var state_11563__$1 = state_11563;
var statearr_11586_13140 = state_11563__$1;
(statearr_11586_13140[(2)] = inst_11554);

(statearr_11586_13140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (9))){
var state_11563__$1 = state_11563;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11587_13141 = state_11563__$1;
(statearr_11587_13141[(1)] = (11));

} else {
var statearr_11588_13142 = state_11563__$1;
(statearr_11588_13142[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (5))){
var inst_11540 = (state_11563[(7)]);
var state_11563__$1 = state_11563;
var statearr_11589_13143 = state_11563__$1;
(statearr_11589_13143[(2)] = inst_11540);

(statearr_11589_13143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (10))){
var inst_11559 = (state_11563[(2)]);
var state_11563__$1 = state_11563;
var statearr_11591_13144 = state_11563__$1;
(statearr_11591_13144[(2)] = inst_11559);

(statearr_11591_13144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11564 === (8))){
var inst_11540 = (state_11563[(7)]);
var inst_11550 = cljs.core.next(inst_11540);
var inst_11540__$1 = inst_11550;
var state_11563__$1 = (function (){var statearr_11593 = state_11563;
(statearr_11593[(7)] = inst_11540__$1);

return statearr_11593;
})();
var statearr_11594_13145 = state_11563__$1;
(statearr_11594_13145[(2)] = null);

(statearr_11594_13145[(1)] = (2));


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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_11595 = [null,null,null,null,null,null,null,null];
(statearr_11595[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_11595[(1)] = (1));

return statearr_11595;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_11563){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11563);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11596){var ex__10942__auto__ = e11596;
var statearr_11597_13146 = state_11563;
(statearr_11597_13146[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11563[(4)]))){
var statearr_11598_13147 = state_11563;
(statearr_11598_13147[(1)] = cljs.core.first((state_11563[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13149 = state_11563;
state_11563 = G__13149;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_11563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_11563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11599 = f__10987__auto__();
(statearr_11599[(6)] = c__10986__auto__);

return statearr_11599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));

return c__10986__auto__;
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
var G__11601 = arguments.length;
switch (G__11601) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13173 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13173(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13174 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13174(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13175 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13175(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13176 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13176(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11605 = (function (ch,cs,meta11606){
this.ch = ch;
this.cs = cs;
this.meta11606 = meta11606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11607,meta11606__$1){
var self__ = this;
var _11607__$1 = this;
return (new cljs.core.async.t_cljs$core$async11605(self__.ch,self__.cs,meta11606__$1));
}));

(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11607){
var self__ = this;
var _11607__$1 = this;
return self__.meta11606;
}));

(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11605.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11606","meta11606",-1927517655,null)], null);
}));

(cljs.core.async.t_cljs$core$async11605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11605");

(cljs.core.async.t_cljs$core$async11605.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11605.
 */
cljs.core.async.__GT_t_cljs$core$async11605 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11605(ch__$1,cs__$1,meta11606){
return (new cljs.core.async.t_cljs$core$async11605(ch__$1,cs__$1,meta11606));
});

}

return (new cljs.core.async.t_cljs$core$async11605(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10986__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_11751){
var state_val_11752 = (state_11751[(1)]);
if((state_val_11752 === (7))){
var inst_11747 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11753_13182 = state_11751__$1;
(statearr_11753_13182[(2)] = inst_11747);

(statearr_11753_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (20))){
var inst_11641 = (state_11751[(7)]);
var inst_11653 = cljs.core.first(inst_11641);
var inst_11654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11653,(0),null);
var inst_11655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11653,(1),null);
var state_11751__$1 = (function (){var statearr_11754 = state_11751;
(statearr_11754[(8)] = inst_11654);

return statearr_11754;
})();
if(cljs.core.truth_(inst_11655)){
var statearr_11757_13183 = state_11751__$1;
(statearr_11757_13183[(1)] = (22));

} else {
var statearr_11758_13184 = state_11751__$1;
(statearr_11758_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (27))){
var inst_11692 = (state_11751[(9)]);
var inst_11610 = (state_11751[(10)]);
var inst_11683 = (state_11751[(11)]);
var inst_11685 = (state_11751[(12)]);
var inst_11692__$1 = cljs.core._nth(inst_11683,inst_11685);
var inst_11693 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11692__$1,inst_11610,done);
var state_11751__$1 = (function (){var statearr_11759 = state_11751;
(statearr_11759[(9)] = inst_11692__$1);

return statearr_11759;
})();
if(cljs.core.truth_(inst_11693)){
var statearr_11761_13185 = state_11751__$1;
(statearr_11761_13185[(1)] = (30));

} else {
var statearr_11763_13186 = state_11751__$1;
(statearr_11763_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (1))){
var state_11751__$1 = state_11751;
var statearr_11765_13187 = state_11751__$1;
(statearr_11765_13187[(2)] = null);

(statearr_11765_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (24))){
var inst_11641 = (state_11751[(7)]);
var inst_11660 = (state_11751[(2)]);
var inst_11661 = cljs.core.next(inst_11641);
var inst_11619 = inst_11661;
var inst_11620 = null;
var inst_11621 = (0);
var inst_11622 = (0);
var state_11751__$1 = (function (){var statearr_11766 = state_11751;
(statearr_11766[(13)] = inst_11619);

(statearr_11766[(14)] = inst_11620);

(statearr_11766[(15)] = inst_11660);

(statearr_11766[(16)] = inst_11622);

(statearr_11766[(17)] = inst_11621);

return statearr_11766;
})();
var statearr_11767_13188 = state_11751__$1;
(statearr_11767_13188[(2)] = null);

(statearr_11767_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (39))){
var state_11751__$1 = state_11751;
var statearr_11787_13189 = state_11751__$1;
(statearr_11787_13189[(2)] = null);

(statearr_11787_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (4))){
var inst_11610 = (state_11751[(10)]);
var inst_11610__$1 = (state_11751[(2)]);
var inst_11611 = (inst_11610__$1 == null);
var state_11751__$1 = (function (){var statearr_11788 = state_11751;
(statearr_11788[(10)] = inst_11610__$1);

return statearr_11788;
})();
if(cljs.core.truth_(inst_11611)){
var statearr_11789_13190 = state_11751__$1;
(statearr_11789_13190[(1)] = (5));

} else {
var statearr_11790_13191 = state_11751__$1;
(statearr_11790_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (15))){
var inst_11619 = (state_11751[(13)]);
var inst_11620 = (state_11751[(14)]);
var inst_11622 = (state_11751[(16)]);
var inst_11621 = (state_11751[(17)]);
var inst_11637 = (state_11751[(2)]);
var inst_11638 = (inst_11622 + (1));
var tmp11771 = inst_11619;
var tmp11772 = inst_11620;
var tmp11773 = inst_11621;
var inst_11619__$1 = tmp11771;
var inst_11620__$1 = tmp11772;
var inst_11621__$1 = tmp11773;
var inst_11622__$1 = inst_11638;
var state_11751__$1 = (function (){var statearr_11791 = state_11751;
(statearr_11791[(18)] = inst_11637);

(statearr_11791[(13)] = inst_11619__$1);

(statearr_11791[(14)] = inst_11620__$1);

(statearr_11791[(16)] = inst_11622__$1);

(statearr_11791[(17)] = inst_11621__$1);

return statearr_11791;
})();
var statearr_11792_13192 = state_11751__$1;
(statearr_11792_13192[(2)] = null);

(statearr_11792_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (21))){
var inst_11664 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11796_13193 = state_11751__$1;
(statearr_11796_13193[(2)] = inst_11664);

(statearr_11796_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (31))){
var inst_11692 = (state_11751[(9)]);
var inst_11696 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11692);
var state_11751__$1 = state_11751;
var statearr_11797_13194 = state_11751__$1;
(statearr_11797_13194[(2)] = inst_11696);

(statearr_11797_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (32))){
var inst_11683 = (state_11751[(11)]);
var inst_11684 = (state_11751[(19)]);
var inst_11685 = (state_11751[(12)]);
var inst_11682 = (state_11751[(20)]);
var inst_11698 = (state_11751[(2)]);
var inst_11699 = (inst_11685 + (1));
var tmp11793 = inst_11683;
var tmp11794 = inst_11684;
var tmp11795 = inst_11682;
var inst_11682__$1 = tmp11795;
var inst_11683__$1 = tmp11793;
var inst_11684__$1 = tmp11794;
var inst_11685__$1 = inst_11699;
var state_11751__$1 = (function (){var statearr_11798 = state_11751;
(statearr_11798[(21)] = inst_11698);

(statearr_11798[(11)] = inst_11683__$1);

(statearr_11798[(19)] = inst_11684__$1);

(statearr_11798[(12)] = inst_11685__$1);

(statearr_11798[(20)] = inst_11682__$1);

return statearr_11798;
})();
var statearr_11799_13195 = state_11751__$1;
(statearr_11799_13195[(2)] = null);

(statearr_11799_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (40))){
var inst_11719 = (state_11751[(22)]);
var inst_11723 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11719);
var state_11751__$1 = state_11751;
var statearr_11800_13196 = state_11751__$1;
(statearr_11800_13196[(2)] = inst_11723);

(statearr_11800_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (33))){
var inst_11702 = (state_11751[(23)]);
var inst_11704 = cljs.core.chunked_seq_QMARK_(inst_11702);
var state_11751__$1 = state_11751;
if(inst_11704){
var statearr_11803_13197 = state_11751__$1;
(statearr_11803_13197[(1)] = (36));

} else {
var statearr_11804_13198 = state_11751__$1;
(statearr_11804_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (13))){
var inst_11631 = (state_11751[(24)]);
var inst_11634 = cljs.core.async.close_BANG_(inst_11631);
var state_11751__$1 = state_11751;
var statearr_11805_13199 = state_11751__$1;
(statearr_11805_13199[(2)] = inst_11634);

(statearr_11805_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (22))){
var inst_11654 = (state_11751[(8)]);
var inst_11657 = cljs.core.async.close_BANG_(inst_11654);
var state_11751__$1 = state_11751;
var statearr_11809_13200 = state_11751__$1;
(statearr_11809_13200[(2)] = inst_11657);

(statearr_11809_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (36))){
var inst_11702 = (state_11751[(23)]);
var inst_11706 = cljs.core.chunk_first(inst_11702);
var inst_11713 = cljs.core.chunk_rest(inst_11702);
var inst_11714 = cljs.core.count(inst_11706);
var inst_11682 = inst_11713;
var inst_11683 = inst_11706;
var inst_11684 = inst_11714;
var inst_11685 = (0);
var state_11751__$1 = (function (){var statearr_11813 = state_11751;
(statearr_11813[(11)] = inst_11683);

(statearr_11813[(19)] = inst_11684);

(statearr_11813[(12)] = inst_11685);

(statearr_11813[(20)] = inst_11682);

return statearr_11813;
})();
var statearr_11814_13201 = state_11751__$1;
(statearr_11814_13201[(2)] = null);

(statearr_11814_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (41))){
var inst_11702 = (state_11751[(23)]);
var inst_11725 = (state_11751[(2)]);
var inst_11727 = cljs.core.next(inst_11702);
var inst_11682 = inst_11727;
var inst_11683 = null;
var inst_11684 = (0);
var inst_11685 = (0);
var state_11751__$1 = (function (){var statearr_11815 = state_11751;
(statearr_11815[(25)] = inst_11725);

(statearr_11815[(11)] = inst_11683);

(statearr_11815[(19)] = inst_11684);

(statearr_11815[(12)] = inst_11685);

(statearr_11815[(20)] = inst_11682);

return statearr_11815;
})();
var statearr_11816_13202 = state_11751__$1;
(statearr_11816_13202[(2)] = null);

(statearr_11816_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (43))){
var state_11751__$1 = state_11751;
var statearr_11817_13203 = state_11751__$1;
(statearr_11817_13203[(2)] = null);

(statearr_11817_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (29))){
var inst_11735 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11818_13204 = state_11751__$1;
(statearr_11818_13204[(2)] = inst_11735);

(statearr_11818_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (44))){
var inst_11744 = (state_11751[(2)]);
var state_11751__$1 = (function (){var statearr_11819 = state_11751;
(statearr_11819[(26)] = inst_11744);

return statearr_11819;
})();
var statearr_11820_13205 = state_11751__$1;
(statearr_11820_13205[(2)] = null);

(statearr_11820_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (6))){
var inst_11674 = (state_11751[(27)]);
var inst_11673 = cljs.core.deref(cs);
var inst_11674__$1 = cljs.core.keys(inst_11673);
var inst_11675 = cljs.core.count(inst_11674__$1);
var inst_11676 = cljs.core.reset_BANG_(dctr,inst_11675);
var inst_11681 = cljs.core.seq(inst_11674__$1);
var inst_11682 = inst_11681;
var inst_11683 = null;
var inst_11684 = (0);
var inst_11685 = (0);
var state_11751__$1 = (function (){var statearr_11821 = state_11751;
(statearr_11821[(28)] = inst_11676);

(statearr_11821[(11)] = inst_11683);

(statearr_11821[(27)] = inst_11674__$1);

(statearr_11821[(19)] = inst_11684);

(statearr_11821[(12)] = inst_11685);

(statearr_11821[(20)] = inst_11682);

return statearr_11821;
})();
var statearr_11822_13206 = state_11751__$1;
(statearr_11822_13206[(2)] = null);

(statearr_11822_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (28))){
var inst_11702 = (state_11751[(23)]);
var inst_11682 = (state_11751[(20)]);
var inst_11702__$1 = cljs.core.seq(inst_11682);
var state_11751__$1 = (function (){var statearr_11823 = state_11751;
(statearr_11823[(23)] = inst_11702__$1);

return statearr_11823;
})();
if(inst_11702__$1){
var statearr_11824_13207 = state_11751__$1;
(statearr_11824_13207[(1)] = (33));

} else {
var statearr_11825_13208 = state_11751__$1;
(statearr_11825_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (25))){
var inst_11684 = (state_11751[(19)]);
var inst_11685 = (state_11751[(12)]);
var inst_11687 = (inst_11685 < inst_11684);
var inst_11688 = inst_11687;
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11688)){
var statearr_11826_13209 = state_11751__$1;
(statearr_11826_13209[(1)] = (27));

} else {
var statearr_11827_13210 = state_11751__$1;
(statearr_11827_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (34))){
var state_11751__$1 = state_11751;
var statearr_11828_13211 = state_11751__$1;
(statearr_11828_13211[(2)] = null);

(statearr_11828_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (17))){
var state_11751__$1 = state_11751;
var statearr_11829_13212 = state_11751__$1;
(statearr_11829_13212[(2)] = null);

(statearr_11829_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (3))){
var inst_11749 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11751__$1,inst_11749);
} else {
if((state_val_11752 === (12))){
var inst_11669 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11832_13213 = state_11751__$1;
(statearr_11832_13213[(2)] = inst_11669);

(statearr_11832_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (2))){
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11751__$1,(4),ch);
} else {
if((state_val_11752 === (23))){
var state_11751__$1 = state_11751;
var statearr_11833_13214 = state_11751__$1;
(statearr_11833_13214[(2)] = null);

(statearr_11833_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (35))){
var inst_11733 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11834_13215 = state_11751__$1;
(statearr_11834_13215[(2)] = inst_11733);

(statearr_11834_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (19))){
var inst_11641 = (state_11751[(7)]);
var inst_11645 = cljs.core.chunk_first(inst_11641);
var inst_11646 = cljs.core.chunk_rest(inst_11641);
var inst_11647 = cljs.core.count(inst_11645);
var inst_11619 = inst_11646;
var inst_11620 = inst_11645;
var inst_11621 = inst_11647;
var inst_11622 = (0);
var state_11751__$1 = (function (){var statearr_11835 = state_11751;
(statearr_11835[(13)] = inst_11619);

(statearr_11835[(14)] = inst_11620);

(statearr_11835[(16)] = inst_11622);

(statearr_11835[(17)] = inst_11621);

return statearr_11835;
})();
var statearr_11836_13216 = state_11751__$1;
(statearr_11836_13216[(2)] = null);

(statearr_11836_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (11))){
var inst_11619 = (state_11751[(13)]);
var inst_11641 = (state_11751[(7)]);
var inst_11641__$1 = cljs.core.seq(inst_11619);
var state_11751__$1 = (function (){var statearr_11837 = state_11751;
(statearr_11837[(7)] = inst_11641__$1);

return statearr_11837;
})();
if(inst_11641__$1){
var statearr_11838_13217 = state_11751__$1;
(statearr_11838_13217[(1)] = (16));

} else {
var statearr_11839_13218 = state_11751__$1;
(statearr_11839_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (9))){
var inst_11671 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11840_13219 = state_11751__$1;
(statearr_11840_13219[(2)] = inst_11671);

(statearr_11840_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (5))){
var inst_11617 = cljs.core.deref(cs);
var inst_11618 = cljs.core.seq(inst_11617);
var inst_11619 = inst_11618;
var inst_11620 = null;
var inst_11621 = (0);
var inst_11622 = (0);
var state_11751__$1 = (function (){var statearr_11845 = state_11751;
(statearr_11845[(13)] = inst_11619);

(statearr_11845[(14)] = inst_11620);

(statearr_11845[(16)] = inst_11622);

(statearr_11845[(17)] = inst_11621);

return statearr_11845;
})();
var statearr_11850_13220 = state_11751__$1;
(statearr_11850_13220[(2)] = null);

(statearr_11850_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (14))){
var state_11751__$1 = state_11751;
var statearr_11851_13221 = state_11751__$1;
(statearr_11851_13221[(2)] = null);

(statearr_11851_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (45))){
var inst_11741 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11856_13222 = state_11751__$1;
(statearr_11856_13222[(2)] = inst_11741);

(statearr_11856_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (26))){
var inst_11674 = (state_11751[(27)]);
var inst_11737 = (state_11751[(2)]);
var inst_11738 = cljs.core.seq(inst_11674);
var state_11751__$1 = (function (){var statearr_11857 = state_11751;
(statearr_11857[(29)] = inst_11737);

return statearr_11857;
})();
if(inst_11738){
var statearr_11858_13223 = state_11751__$1;
(statearr_11858_13223[(1)] = (42));

} else {
var statearr_11859_13224 = state_11751__$1;
(statearr_11859_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (16))){
var inst_11641 = (state_11751[(7)]);
var inst_11643 = cljs.core.chunked_seq_QMARK_(inst_11641);
var state_11751__$1 = state_11751;
if(inst_11643){
var statearr_11860_13225 = state_11751__$1;
(statearr_11860_13225[(1)] = (19));

} else {
var statearr_11861_13226 = state_11751__$1;
(statearr_11861_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (38))){
var inst_11730 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11862_13227 = state_11751__$1;
(statearr_11862_13227[(2)] = inst_11730);

(statearr_11862_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (30))){
var state_11751__$1 = state_11751;
var statearr_11863_13228 = state_11751__$1;
(statearr_11863_13228[(2)] = null);

(statearr_11863_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (10))){
var inst_11620 = (state_11751[(14)]);
var inst_11622 = (state_11751[(16)]);
var inst_11630 = cljs.core._nth(inst_11620,inst_11622);
var inst_11631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11630,(0),null);
var inst_11632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11630,(1),null);
var state_11751__$1 = (function (){var statearr_11864 = state_11751;
(statearr_11864[(24)] = inst_11631);

return statearr_11864;
})();
if(cljs.core.truth_(inst_11632)){
var statearr_11865_13229 = state_11751__$1;
(statearr_11865_13229[(1)] = (13));

} else {
var statearr_11866_13230 = state_11751__$1;
(statearr_11866_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (18))){
var inst_11667 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11867_13231 = state_11751__$1;
(statearr_11867_13231[(2)] = inst_11667);

(statearr_11867_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (42))){
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11751__$1,(45),dchan);
} else {
if((state_val_11752 === (37))){
var inst_11610 = (state_11751[(10)]);
var inst_11719 = (state_11751[(22)]);
var inst_11702 = (state_11751[(23)]);
var inst_11719__$1 = cljs.core.first(inst_11702);
var inst_11720 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11719__$1,inst_11610,done);
var state_11751__$1 = (function (){var statearr_11868 = state_11751;
(statearr_11868[(22)] = inst_11719__$1);

return statearr_11868;
})();
if(cljs.core.truth_(inst_11720)){
var statearr_11869_13232 = state_11751__$1;
(statearr_11869_13232[(1)] = (39));

} else {
var statearr_11870_13233 = state_11751__$1;
(statearr_11870_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (8))){
var inst_11622 = (state_11751[(16)]);
var inst_11621 = (state_11751[(17)]);
var inst_11624 = (inst_11622 < inst_11621);
var inst_11625 = inst_11624;
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11625)){
var statearr_11871_13234 = state_11751__$1;
(statearr_11871_13234[(1)] = (10));

} else {
var statearr_11872_13235 = state_11751__$1;
(statearr_11872_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10939__auto__ = null;
var cljs$core$async$mult_$_state_machine__10939__auto____0 = (function (){
var statearr_11873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11873[(0)] = cljs$core$async$mult_$_state_machine__10939__auto__);

(statearr_11873[(1)] = (1));

return statearr_11873;
});
var cljs$core$async$mult_$_state_machine__10939__auto____1 = (function (state_11751){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_11751);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e11874){var ex__10942__auto__ = e11874;
var statearr_11875_13236 = state_11751;
(statearr_11875_13236[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_11751[(4)]))){
var statearr_11876_13237 = state_11751;
(statearr_11876_13237[(1)] = cljs.core.first((state_11751[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11751;
state_11751 = G__13238;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10939__auto__ = function(state_11751){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10939__auto____1.call(this,state_11751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10939__auto____0;
cljs$core$async$mult_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10939__auto____1;
return cljs$core$async$mult_$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_11877 = f__10987__auto__();
(statearr_11877[(6)] = c__10986__auto___13181);

return statearr_11877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var G__11879 = arguments.length;
switch (G__11879) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11896){
var map__11897 = p__11896;
var map__11897__$1 = (((((!((map__11897 == null))))?(((((map__11897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11897):map__11897);
var opts = map__11897__$1;
var statearr_11899_13248 = state;
(statearr_11899_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11900_13249 = state;
(statearr_11900_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11901_13250 = state;
(statearr_11901_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11891){
var G__11892 = cljs.core.first(seq11891);
var seq11891__$1 = cljs.core.next(seq11891);
var G__11893 = cljs.core.first(seq11891__$1);
var seq11891__$2 = cljs.core.next(seq11891__$1);
var G__11894 = cljs.core.first(seq11891__$2);
var seq11891__$3 = cljs.core.next(seq11891__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11892,G__11893,G__11894,seq11891__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11906 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11907){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11907 = meta11907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11908,meta11907__$1){
var self__ = this;
var _11908__$1 = this;
return (new cljs.core.async.t_cljs$core$async11906(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11907__$1));
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11908){
var self__ = this;
var _11908__$1 = this;
return self__.meta11907;
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11907","meta11907",594407662,null)], null);
}));

(cljs.core.async.t_cljs$core$async11906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11906");

(cljs.core.async.t_cljs$core$async11906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11906.
 */
cljs.core.async.__GT_t_cljs$core$async11906 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11906(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11907){
return (new cljs.core.async.t_cljs$core$async11906(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11907));
});

}

return (new cljs.core.async.t_cljs$core$async11906(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10986__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12019){
var state_val_12020 = (state_12019[(1)]);
if((state_val_12020 === (7))){
var inst_11934 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12021_13252 = state_12019__$1;
(statearr_12021_13252[(2)] = inst_11934);

(statearr_12021_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (20))){
var inst_11946 = (state_12019[(7)]);
var state_12019__$1 = state_12019;
var statearr_12022_13253 = state_12019__$1;
(statearr_12022_13253[(2)] = inst_11946);

(statearr_12022_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (27))){
var state_12019__$1 = state_12019;
var statearr_12023_13254 = state_12019__$1;
(statearr_12023_13254[(2)] = null);

(statearr_12023_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (1))){
var inst_11920 = (state_12019[(8)]);
var inst_11920__$1 = calc_state();
var inst_11922 = (inst_11920__$1 == null);
var inst_11923 = cljs.core.not(inst_11922);
var state_12019__$1 = (function (){var statearr_12024 = state_12019;
(statearr_12024[(8)] = inst_11920__$1);

return statearr_12024;
})();
if(inst_11923){
var statearr_12025_13255 = state_12019__$1;
(statearr_12025_13255[(1)] = (2));

} else {
var statearr_12026_13256 = state_12019__$1;
(statearr_12026_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (24))){
var inst_11979 = (state_12019[(9)]);
var inst_11970 = (state_12019[(10)]);
var inst_11993 = (state_12019[(11)]);
var inst_11993__$1 = (inst_11970.cljs$core$IFn$_invoke$arity$1 ? inst_11970.cljs$core$IFn$_invoke$arity$1(inst_11979) : inst_11970.call(null,inst_11979));
var state_12019__$1 = (function (){var statearr_12027 = state_12019;
(statearr_12027[(11)] = inst_11993__$1);

return statearr_12027;
})();
if(cljs.core.truth_(inst_11993__$1)){
var statearr_12028_13257 = state_12019__$1;
(statearr_12028_13257[(1)] = (29));

} else {
var statearr_12029_13258 = state_12019__$1;
(statearr_12029_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (4))){
var inst_11937 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11937)){
var statearr_12030_13259 = state_12019__$1;
(statearr_12030_13259[(1)] = (8));

} else {
var statearr_12031_13260 = state_12019__$1;
(statearr_12031_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (15))){
var inst_11964 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11964)){
var statearr_12032_13261 = state_12019__$1;
(statearr_12032_13261[(1)] = (19));

} else {
var statearr_12033_13262 = state_12019__$1;
(statearr_12033_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (21))){
var inst_11969 = (state_12019[(12)]);
var inst_11969__$1 = (state_12019[(2)]);
var inst_11970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11969__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11969__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11969__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12019__$1 = (function (){var statearr_12048 = state_12019;
(statearr_12048[(13)] = inst_11971);

(statearr_12048[(10)] = inst_11970);

(statearr_12048[(12)] = inst_11969__$1);

return statearr_12048;
})();
return cljs.core.async.ioc_alts_BANG_(state_12019__$1,(22),inst_11972);
} else {
if((state_val_12020 === (31))){
var inst_12001 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_12001)){
var statearr_12049_13263 = state_12019__$1;
(statearr_12049_13263[(1)] = (32));

} else {
var statearr_12050_13264 = state_12019__$1;
(statearr_12050_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (32))){
var inst_11978 = (state_12019[(14)]);
var state_12019__$1 = state_12019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12019__$1,(35),out,inst_11978);
} else {
if((state_val_12020 === (33))){
var inst_11969 = (state_12019[(12)]);
var inst_11946 = inst_11969;
var state_12019__$1 = (function (){var statearr_12051 = state_12019;
(statearr_12051[(7)] = inst_11946);

return statearr_12051;
})();
var statearr_12052_13265 = state_12019__$1;
(statearr_12052_13265[(2)] = null);

(statearr_12052_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (13))){
var inst_11946 = (state_12019[(7)]);
var inst_11953 = inst_11946.cljs$lang$protocol_mask$partition0$;
var inst_11954 = (inst_11953 & (64));
var inst_11955 = inst_11946.cljs$core$ISeq$;
var inst_11956 = (cljs.core.PROTOCOL_SENTINEL === inst_11955);
var inst_11957 = ((inst_11954) || (inst_11956));
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11957)){
var statearr_12053_13266 = state_12019__$1;
(statearr_12053_13266[(1)] = (16));

} else {
var statearr_12054_13267 = state_12019__$1;
(statearr_12054_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (22))){
var inst_11979 = (state_12019[(9)]);
var inst_11978 = (state_12019[(14)]);
var inst_11977 = (state_12019[(2)]);
var inst_11978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11977,(0),null);
var inst_11979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11977,(1),null);
var inst_11980 = (inst_11978__$1 == null);
var inst_11981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11979__$1,change);
var inst_11982 = ((inst_11980) || (inst_11981));
var state_12019__$1 = (function (){var statearr_12055 = state_12019;
(statearr_12055[(9)] = inst_11979__$1);

(statearr_12055[(14)] = inst_11978__$1);

return statearr_12055;
})();
if(cljs.core.truth_(inst_11982)){
var statearr_12056_13268 = state_12019__$1;
(statearr_12056_13268[(1)] = (23));

} else {
var statearr_12057_13269 = state_12019__$1;
(statearr_12057_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (36))){
var inst_11969 = (state_12019[(12)]);
var inst_11946 = inst_11969;
var state_12019__$1 = (function (){var statearr_12058 = state_12019;
(statearr_12058[(7)] = inst_11946);

return statearr_12058;
})();
var statearr_12059_13270 = state_12019__$1;
(statearr_12059_13270[(2)] = null);

(statearr_12059_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (29))){
var inst_11993 = (state_12019[(11)]);
var state_12019__$1 = state_12019;
var statearr_12065_13271 = state_12019__$1;
(statearr_12065_13271[(2)] = inst_11993);

(statearr_12065_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (6))){
var state_12019__$1 = state_12019;
var statearr_12066_13272 = state_12019__$1;
(statearr_12066_13272[(2)] = false);

(statearr_12066_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (28))){
var inst_11989 = (state_12019[(2)]);
var inst_11990 = calc_state();
var inst_11946 = inst_11990;
var state_12019__$1 = (function (){var statearr_12067 = state_12019;
(statearr_12067[(15)] = inst_11989);

(statearr_12067[(7)] = inst_11946);

return statearr_12067;
})();
var statearr_12068_13273 = state_12019__$1;
(statearr_12068_13273[(2)] = null);

(statearr_12068_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (25))){
var inst_12015 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12069_13274 = state_12019__$1;
(statearr_12069_13274[(2)] = inst_12015);

(statearr_12069_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (34))){
var inst_12013 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12070_13275 = state_12019__$1;
(statearr_12070_13275[(2)] = inst_12013);

(statearr_12070_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (17))){
var state_12019__$1 = state_12019;
var statearr_12071_13276 = state_12019__$1;
(statearr_12071_13276[(2)] = false);

(statearr_12071_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (3))){
var state_12019__$1 = state_12019;
var statearr_12072_13277 = state_12019__$1;
(statearr_12072_13277[(2)] = false);

(statearr_12072_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (12))){
var inst_12017 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12019__$1,inst_12017);
} else {
if((state_val_12020 === (2))){
var inst_11920 = (state_12019[(8)]);
var inst_11926 = inst_11920.cljs$lang$protocol_mask$partition0$;
var inst_11927 = (inst_11926 & (64));
var inst_11928 = inst_11920.cljs$core$ISeq$;
var inst_11929 = (cljs.core.PROTOCOL_SENTINEL === inst_11928);
var inst_11930 = ((inst_11927) || (inst_11929));
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11930)){
var statearr_12073_13278 = state_12019__$1;
(statearr_12073_13278[(1)] = (5));

} else {
var statearr_12074_13279 = state_12019__$1;
(statearr_12074_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (23))){
var inst_11978 = (state_12019[(14)]);
var inst_11984 = (inst_11978 == null);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11984)){
var statearr_12075_13280 = state_12019__$1;
(statearr_12075_13280[(1)] = (26));

} else {
var statearr_12076_13281 = state_12019__$1;
(statearr_12076_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (35))){
var inst_12004 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_12004)){
var statearr_12077_13282 = state_12019__$1;
(statearr_12077_13282[(1)] = (36));

} else {
var statearr_12078_13283 = state_12019__$1;
(statearr_12078_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (19))){
var inst_11946 = (state_12019[(7)]);
var inst_11966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11946);
var state_12019__$1 = state_12019;
var statearr_12092_13284 = state_12019__$1;
(statearr_12092_13284[(2)] = inst_11966);

(statearr_12092_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (11))){
var inst_11946 = (state_12019[(7)]);
var inst_11950 = (inst_11946 == null);
var inst_11951 = cljs.core.not(inst_11950);
var state_12019__$1 = state_12019;
if(inst_11951){
var statearr_12093_13285 = state_12019__$1;
(statearr_12093_13285[(1)] = (13));

} else {
var statearr_12094_13286 = state_12019__$1;
(statearr_12094_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (9))){
var inst_11920 = (state_12019[(8)]);
var state_12019__$1 = state_12019;
var statearr_12095_13287 = state_12019__$1;
(statearr_12095_13287[(2)] = inst_11920);

(statearr_12095_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (5))){
var state_12019__$1 = state_12019;
var statearr_12096_13288 = state_12019__$1;
(statearr_12096_13288[(2)] = true);

(statearr_12096_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (14))){
var state_12019__$1 = state_12019;
var statearr_12097_13289 = state_12019__$1;
(statearr_12097_13289[(2)] = false);

(statearr_12097_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (26))){
var inst_11979 = (state_12019[(9)]);
var inst_11986 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11979);
var state_12019__$1 = state_12019;
var statearr_12098_13290 = state_12019__$1;
(statearr_12098_13290[(2)] = inst_11986);

(statearr_12098_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (16))){
var state_12019__$1 = state_12019;
var statearr_12099_13291 = state_12019__$1;
(statearr_12099_13291[(2)] = true);

(statearr_12099_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (38))){
var inst_12009 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12100_13292 = state_12019__$1;
(statearr_12100_13292[(2)] = inst_12009);

(statearr_12100_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (30))){
var inst_11979 = (state_12019[(9)]);
var inst_11971 = (state_12019[(13)]);
var inst_11970 = (state_12019[(10)]);
var inst_11996 = cljs.core.empty_QMARK_(inst_11970);
var inst_11997 = (inst_11971.cljs$core$IFn$_invoke$arity$1 ? inst_11971.cljs$core$IFn$_invoke$arity$1(inst_11979) : inst_11971.call(null,inst_11979));
var inst_11998 = cljs.core.not(inst_11997);
var inst_11999 = ((inst_11996) && (inst_11998));
var state_12019__$1 = state_12019;
var statearr_12101_13293 = state_12019__$1;
(statearr_12101_13293[(2)] = inst_11999);

(statearr_12101_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (10))){
var inst_11920 = (state_12019[(8)]);
var inst_11942 = (state_12019[(2)]);
var inst_11943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11942,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11942,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11942,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11946 = inst_11920;
var state_12019__$1 = (function (){var statearr_12102 = state_12019;
(statearr_12102[(16)] = inst_11944);

(statearr_12102[(17)] = inst_11943);

(statearr_12102[(7)] = inst_11946);

(statearr_12102[(18)] = inst_11945);

return statearr_12102;
})();
var statearr_12103_13294 = state_12019__$1;
(statearr_12103_13294[(2)] = null);

(statearr_12103_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (18))){
var inst_11961 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12104_13295 = state_12019__$1;
(statearr_12104_13295[(2)] = inst_11961);

(statearr_12104_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (37))){
var state_12019__$1 = state_12019;
var statearr_12105_13296 = state_12019__$1;
(statearr_12105_13296[(2)] = null);

(statearr_12105_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (8))){
var inst_11920 = (state_12019[(8)]);
var inst_11939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11920);
var state_12019__$1 = state_12019;
var statearr_12106_13297 = state_12019__$1;
(statearr_12106_13297[(2)] = inst_11939);

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
var cljs$core$async$mix_$_state_machine__10939__auto__ = null;
var cljs$core$async$mix_$_state_machine__10939__auto____0 = (function (){
var statearr_12107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12107[(0)] = cljs$core$async$mix_$_state_machine__10939__auto__);

(statearr_12107[(1)] = (1));

return statearr_12107;
});
var cljs$core$async$mix_$_state_machine__10939__auto____1 = (function (state_12019){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12019);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12108){var ex__10942__auto__ = e12108;
var statearr_12109_13298 = state_12019;
(statearr_12109_13298[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12019[(4)]))){
var statearr_12110_13299 = state_12019;
(statearr_12110_13299[(1)] = cljs.core.first((state_12019[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12019;
state_12019 = G__13300;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10939__auto__ = function(state_12019){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10939__auto____1.call(this,state_12019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10939__auto____0;
cljs$core$async$mix_$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10939__auto____1;
return cljs$core$async$mix_$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12111 = f__10987__auto__();
(statearr_12111[(6)] = c__10986__auto___13251);

return statearr_12111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var G__12120 = arguments.length;
switch (G__12120) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12118_SHARP_){
if(cljs.core.truth_((p1__12118_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12118_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12118_SHARP_.call(null,topic)))){
return p1__12118_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12118_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12122 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12123){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12123 = meta12123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12124,meta12123__$1){
var self__ = this;
var _12124__$1 = this;
return (new cljs.core.async.t_cljs$core$async12122(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12123__$1));
}));

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12124){
var self__ = this;
var _12124__$1 = this;
return self__.meta12123;
}));

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12123","meta12123",527054917,null)], null);
}));

(cljs.core.async.t_cljs$core$async12122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12122");

(cljs.core.async.t_cljs$core$async12122.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12122.
 */
cljs.core.async.__GT_t_cljs$core$async12122 = (function cljs$core$async$__GT_t_cljs$core$async12122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12123){
return (new cljs.core.async.t_cljs$core$async12122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12123));
});

}

return (new cljs.core.async.t_cljs$core$async12122(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10986__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12197){
var state_val_12198 = (state_12197[(1)]);
if((state_val_12198 === (7))){
var inst_12193 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12199_13308 = state_12197__$1;
(statearr_12199_13308[(2)] = inst_12193);

(statearr_12199_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (20))){
var state_12197__$1 = state_12197;
var statearr_12200_13309 = state_12197__$1;
(statearr_12200_13309[(2)] = null);

(statearr_12200_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (1))){
var state_12197__$1 = state_12197;
var statearr_12202_13310 = state_12197__$1;
(statearr_12202_13310[(2)] = null);

(statearr_12202_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (24))){
var inst_12176 = (state_12197[(7)]);
var inst_12185 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12176);
var state_12197__$1 = state_12197;
var statearr_12203_13311 = state_12197__$1;
(statearr_12203_13311[(2)] = inst_12185);

(statearr_12203_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (4))){
var inst_12128 = (state_12197[(8)]);
var inst_12128__$1 = (state_12197[(2)]);
var inst_12129 = (inst_12128__$1 == null);
var state_12197__$1 = (function (){var statearr_12204 = state_12197;
(statearr_12204[(8)] = inst_12128__$1);

return statearr_12204;
})();
if(cljs.core.truth_(inst_12129)){
var statearr_12205_13312 = state_12197__$1;
(statearr_12205_13312[(1)] = (5));

} else {
var statearr_12206_13313 = state_12197__$1;
(statearr_12206_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (15))){
var inst_12170 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12207_13314 = state_12197__$1;
(statearr_12207_13314[(2)] = inst_12170);

(statearr_12207_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (21))){
var inst_12190 = (state_12197[(2)]);
var state_12197__$1 = (function (){var statearr_12208 = state_12197;
(statearr_12208[(9)] = inst_12190);

return statearr_12208;
})();
var statearr_12209_13315 = state_12197__$1;
(statearr_12209_13315[(2)] = null);

(statearr_12209_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (13))){
var inst_12152 = (state_12197[(10)]);
var inst_12154 = cljs.core.chunked_seq_QMARK_(inst_12152);
var state_12197__$1 = state_12197;
if(inst_12154){
var statearr_12210_13316 = state_12197__$1;
(statearr_12210_13316[(1)] = (16));

} else {
var statearr_12211_13317 = state_12197__$1;
(statearr_12211_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (22))){
var inst_12182 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
if(cljs.core.truth_(inst_12182)){
var statearr_12212_13318 = state_12197__$1;
(statearr_12212_13318[(1)] = (23));

} else {
var statearr_12213_13319 = state_12197__$1;
(statearr_12213_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (6))){
var inst_12128 = (state_12197[(8)]);
var inst_12178 = (state_12197[(11)]);
var inst_12176 = (state_12197[(7)]);
var inst_12176__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12128) : topic_fn.call(null,inst_12128));
var inst_12177 = cljs.core.deref(mults);
var inst_12178__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12177,inst_12176__$1);
var state_12197__$1 = (function (){var statearr_12214 = state_12197;
(statearr_12214[(11)] = inst_12178__$1);

(statearr_12214[(7)] = inst_12176__$1);

return statearr_12214;
})();
if(cljs.core.truth_(inst_12178__$1)){
var statearr_12215_13320 = state_12197__$1;
(statearr_12215_13320[(1)] = (19));

} else {
var statearr_12216_13321 = state_12197__$1;
(statearr_12216_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (25))){
var inst_12187 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12217_13322 = state_12197__$1;
(statearr_12217_13322[(2)] = inst_12187);

(statearr_12217_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (17))){
var inst_12152 = (state_12197[(10)]);
var inst_12161 = cljs.core.first(inst_12152);
var inst_12162 = cljs.core.async.muxch_STAR_(inst_12161);
var inst_12163 = cljs.core.async.close_BANG_(inst_12162);
var inst_12164 = cljs.core.next(inst_12152);
var inst_12138 = inst_12164;
var inst_12139 = null;
var inst_12140 = (0);
var inst_12141 = (0);
var state_12197__$1 = (function (){var statearr_12218 = state_12197;
(statearr_12218[(12)] = inst_12138);

(statearr_12218[(13)] = inst_12139);

(statearr_12218[(14)] = inst_12141);

(statearr_12218[(15)] = inst_12163);

(statearr_12218[(16)] = inst_12140);

return statearr_12218;
})();
var statearr_12219_13323 = state_12197__$1;
(statearr_12219_13323[(2)] = null);

(statearr_12219_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (3))){
var inst_12195 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12197__$1,inst_12195);
} else {
if((state_val_12198 === (12))){
var inst_12172 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12220_13324 = state_12197__$1;
(statearr_12220_13324[(2)] = inst_12172);

(statearr_12220_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (2))){
var state_12197__$1 = state_12197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12197__$1,(4),ch);
} else {
if((state_val_12198 === (23))){
var state_12197__$1 = state_12197;
var statearr_12221_13325 = state_12197__$1;
(statearr_12221_13325[(2)] = null);

(statearr_12221_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (19))){
var inst_12128 = (state_12197[(8)]);
var inst_12178 = (state_12197[(11)]);
var inst_12180 = cljs.core.async.muxch_STAR_(inst_12178);
var state_12197__$1 = state_12197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12197__$1,(22),inst_12180,inst_12128);
} else {
if((state_val_12198 === (11))){
var inst_12138 = (state_12197[(12)]);
var inst_12152 = (state_12197[(10)]);
var inst_12152__$1 = cljs.core.seq(inst_12138);
var state_12197__$1 = (function (){var statearr_12223 = state_12197;
(statearr_12223[(10)] = inst_12152__$1);

return statearr_12223;
})();
if(inst_12152__$1){
var statearr_12224_13326 = state_12197__$1;
(statearr_12224_13326[(1)] = (13));

} else {
var statearr_12225_13327 = state_12197__$1;
(statearr_12225_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (9))){
var inst_12174 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12226_13328 = state_12197__$1;
(statearr_12226_13328[(2)] = inst_12174);

(statearr_12226_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (5))){
var inst_12135 = cljs.core.deref(mults);
var inst_12136 = cljs.core.vals(inst_12135);
var inst_12137 = cljs.core.seq(inst_12136);
var inst_12138 = inst_12137;
var inst_12139 = null;
var inst_12140 = (0);
var inst_12141 = (0);
var state_12197__$1 = (function (){var statearr_12227 = state_12197;
(statearr_12227[(12)] = inst_12138);

(statearr_12227[(13)] = inst_12139);

(statearr_12227[(14)] = inst_12141);

(statearr_12227[(16)] = inst_12140);

return statearr_12227;
})();
var statearr_12228_13329 = state_12197__$1;
(statearr_12228_13329[(2)] = null);

(statearr_12228_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (14))){
var state_12197__$1 = state_12197;
var statearr_12232_13330 = state_12197__$1;
(statearr_12232_13330[(2)] = null);

(statearr_12232_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (16))){
var inst_12152 = (state_12197[(10)]);
var inst_12156 = cljs.core.chunk_first(inst_12152);
var inst_12157 = cljs.core.chunk_rest(inst_12152);
var inst_12158 = cljs.core.count(inst_12156);
var inst_12138 = inst_12157;
var inst_12139 = inst_12156;
var inst_12140 = inst_12158;
var inst_12141 = (0);
var state_12197__$1 = (function (){var statearr_12233 = state_12197;
(statearr_12233[(12)] = inst_12138);

(statearr_12233[(13)] = inst_12139);

(statearr_12233[(14)] = inst_12141);

(statearr_12233[(16)] = inst_12140);

return statearr_12233;
})();
var statearr_12234_13331 = state_12197__$1;
(statearr_12234_13331[(2)] = null);

(statearr_12234_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (10))){
var inst_12138 = (state_12197[(12)]);
var inst_12139 = (state_12197[(13)]);
var inst_12141 = (state_12197[(14)]);
var inst_12140 = (state_12197[(16)]);
var inst_12146 = cljs.core._nth(inst_12139,inst_12141);
var inst_12147 = cljs.core.async.muxch_STAR_(inst_12146);
var inst_12148 = cljs.core.async.close_BANG_(inst_12147);
var inst_12149 = (inst_12141 + (1));
var tmp12229 = inst_12138;
var tmp12230 = inst_12139;
var tmp12231 = inst_12140;
var inst_12138__$1 = tmp12229;
var inst_12139__$1 = tmp12230;
var inst_12140__$1 = tmp12231;
var inst_12141__$1 = inst_12149;
var state_12197__$1 = (function (){var statearr_12235 = state_12197;
(statearr_12235[(12)] = inst_12138__$1);

(statearr_12235[(17)] = inst_12148);

(statearr_12235[(13)] = inst_12139__$1);

(statearr_12235[(14)] = inst_12141__$1);

(statearr_12235[(16)] = inst_12140__$1);

return statearr_12235;
})();
var statearr_12236_13332 = state_12197__$1;
(statearr_12236_13332[(2)] = null);

(statearr_12236_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (18))){
var inst_12167 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12237_13333 = state_12197__$1;
(statearr_12237_13333[(2)] = inst_12167);

(statearr_12237_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (8))){
var inst_12141 = (state_12197[(14)]);
var inst_12140 = (state_12197[(16)]);
var inst_12143 = (inst_12141 < inst_12140);
var inst_12144 = inst_12143;
var state_12197__$1 = state_12197;
if(cljs.core.truth_(inst_12144)){
var statearr_12238_13334 = state_12197__$1;
(statearr_12238_13334[(1)] = (10));

} else {
var statearr_12239_13335 = state_12197__$1;
(statearr_12239_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12242[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12242[(1)] = (1));

return statearr_12242;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12197){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12197);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12243){var ex__10942__auto__ = e12243;
var statearr_12244_13336 = state_12197;
(statearr_12244_13336[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12197[(4)]))){
var statearr_12245_13337 = state_12197;
(statearr_12245_13337[(1)] = cljs.core.first((state_12197[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12197;
state_12197 = G__13338;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12246 = f__10987__auto__();
(statearr_12246[(6)] = c__10986__auto___13307);

return statearr_12246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var G__12250 = arguments.length;
switch (G__12250) {
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
var G__12252 = arguments.length;
switch (G__12252) {
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
var c__10986__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (7))){
var state_12298__$1 = state_12298;
var statearr_12300_13343 = state_12298__$1;
(statearr_12300_13343[(2)] = null);

(statearr_12300_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12301_13344 = state_12298__$1;
(statearr_12301_13344[(2)] = null);

(statearr_12301_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (4))){
var inst_12256 = (state_12298[(7)]);
var inst_12255 = (state_12298[(8)]);
var inst_12259 = (inst_12256 < inst_12255);
var state_12298__$1 = state_12298;
if(cljs.core.truth_(inst_12259)){
var statearr_12302_13345 = state_12298__$1;
(statearr_12302_13345[(1)] = (6));

} else {
var statearr_12304_13346 = state_12298__$1;
(statearr_12304_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (15))){
var inst_12283 = (state_12298[(9)]);
var inst_12289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12283);
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12298__$1,(17),out,inst_12289);
} else {
if((state_val_12299 === (13))){
var inst_12283 = (state_12298[(9)]);
var inst_12283__$1 = (state_12298[(2)]);
var inst_12284 = cljs.core.some(cljs.core.nil_QMARK_,inst_12283__$1);
var state_12298__$1 = (function (){var statearr_12306 = state_12298;
(statearr_12306[(9)] = inst_12283__$1);

return statearr_12306;
})();
if(cljs.core.truth_(inst_12284)){
var statearr_12307_13347 = state_12298__$1;
(statearr_12307_13347[(1)] = (14));

} else {
var statearr_12308_13348 = state_12298__$1;
(statearr_12308_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12309_13349 = state_12298__$1;
(statearr_12309_13349[(2)] = null);

(statearr_12309_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (17))){
var inst_12291 = (state_12298[(2)]);
var state_12298__$1 = (function (){var statearr_12311 = state_12298;
(statearr_12311[(10)] = inst_12291);

return statearr_12311;
})();
var statearr_12312_13350 = state_12298__$1;
(statearr_12312_13350[(2)] = null);

(statearr_12312_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (3))){
var inst_12296 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12298__$1,inst_12296);
} else {
if((state_val_12299 === (12))){
var _ = (function (){var statearr_12313 = state_12298;
(statearr_12313[(4)] = cljs.core.rest((state_12298[(4)])));

return statearr_12313;
})();
var state_12298__$1 = state_12298;
var ex12310 = (state_12298__$1[(2)]);
var statearr_12314_13351 = state_12298__$1;
(statearr_12314_13351[(5)] = ex12310);


if((ex12310 instanceof Object)){
var statearr_12315_13352 = state_12298__$1;
(statearr_12315_13352[(1)] = (11));

(statearr_12315_13352[(5)] = null);

} else {
throw ex12310;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (2))){
var inst_12254 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12255 = cnt;
var inst_12256 = (0);
var state_12298__$1 = (function (){var statearr_12316 = state_12298;
(statearr_12316[(7)] = inst_12256);

(statearr_12316[(8)] = inst_12255);

(statearr_12316[(11)] = inst_12254);

return statearr_12316;
})();
var statearr_12317_13353 = state_12298__$1;
(statearr_12317_13353[(2)] = null);

(statearr_12317_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (11))){
var inst_12261 = (state_12298[(2)]);
var inst_12262 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12298__$1 = (function (){var statearr_12318 = state_12298;
(statearr_12318[(12)] = inst_12261);

return statearr_12318;
})();
var statearr_12319_13354 = state_12298__$1;
(statearr_12319_13354[(2)] = inst_12262);

(statearr_12319_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (9))){
var inst_12256 = (state_12298[(7)]);
var _ = (function (){var statearr_12320 = state_12298;
(statearr_12320[(4)] = cljs.core.cons((12),(state_12298[(4)])));

return statearr_12320;
})();
var inst_12269 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12256) : chs__$1.call(null,inst_12256));
var inst_12270 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12256) : done.call(null,inst_12256));
var inst_12271 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12269,inst_12270);
var ___$1 = (function (){var statearr_12321 = state_12298;
(statearr_12321[(4)] = cljs.core.rest((state_12298[(4)])));

return statearr_12321;
})();
var state_12298__$1 = state_12298;
var statearr_12322_13355 = state_12298__$1;
(statearr_12322_13355[(2)] = inst_12271);

(statearr_12322_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var inst_12281 = (state_12298[(2)]);
var state_12298__$1 = (function (){var statearr_12323 = state_12298;
(statearr_12323[(13)] = inst_12281);

return statearr_12323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12298__$1,(13),dchan);
} else {
if((state_val_12299 === (14))){
var inst_12287 = cljs.core.async.close_BANG_(out);
var state_12298__$1 = state_12298;
var statearr_12324_13356 = state_12298__$1;
(statearr_12324_13356[(2)] = inst_12287);

(statearr_12324_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (16))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12325_13357 = state_12298__$1;
(statearr_12325_13357[(2)] = inst_12294);

(statearr_12325_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (10))){
var inst_12256 = (state_12298[(7)]);
var inst_12274 = (state_12298[(2)]);
var inst_12275 = (inst_12256 + (1));
var inst_12256__$1 = inst_12275;
var state_12298__$1 = (function (){var statearr_12326 = state_12298;
(statearr_12326[(7)] = inst_12256__$1);

(statearr_12326[(14)] = inst_12274);

return statearr_12326;
})();
var statearr_12327_13358 = state_12298__$1;
(statearr_12327_13358[(2)] = null);

(statearr_12327_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (8))){
var inst_12279 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12328_13359 = state_12298__$1;
(statearr_12328_13359[(2)] = inst_12279);

(statearr_12328_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12329[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12329[(1)] = (1));

return statearr_12329;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12298){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12298);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12330){var ex__10942__auto__ = e12330;
var statearr_12331_13360 = state_12298;
(statearr_12331_13360[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12332_13361 = state_12298;
(statearr_12332_13361[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12298;
state_12298 = G__13362;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12333 = f__10987__auto__();
(statearr_12333[(6)] = c__10986__auto___13342);

return statearr_12333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var G__12336 = arguments.length;
switch (G__12336) {
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
var c__10986__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12370){
var state_val_12371 = (state_12370[(1)]);
if((state_val_12371 === (7))){
var inst_12348 = (state_12370[(7)]);
var inst_12349 = (state_12370[(8)]);
var inst_12348__$1 = (state_12370[(2)]);
var inst_12349__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12348__$1,(0),null);
var inst_12350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12348__$1,(1),null);
var inst_12351 = (inst_12349__$1 == null);
var state_12370__$1 = (function (){var statearr_12376 = state_12370;
(statearr_12376[(7)] = inst_12348__$1);

(statearr_12376[(8)] = inst_12349__$1);

(statearr_12376[(9)] = inst_12350);

return statearr_12376;
})();
if(cljs.core.truth_(inst_12351)){
var statearr_12377_13365 = state_12370__$1;
(statearr_12377_13365[(1)] = (8));

} else {
var statearr_12378_13366 = state_12370__$1;
(statearr_12378_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12371 === (1))){
var inst_12338 = cljs.core.vec(chs);
var inst_12339 = inst_12338;
var state_12370__$1 = (function (){var statearr_12379 = state_12370;
(statearr_12379[(10)] = inst_12339);

return statearr_12379;
})();
var statearr_12380_13367 = state_12370__$1;
(statearr_12380_13367[(2)] = null);

(statearr_12380_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12371 === (4))){
var inst_12339 = (state_12370[(10)]);
var state_12370__$1 = state_12370;
return cljs.core.async.ioc_alts_BANG_(state_12370__$1,(7),inst_12339);
} else {
if((state_val_12371 === (6))){
var inst_12366 = (state_12370[(2)]);
var state_12370__$1 = state_12370;
var statearr_12381_13368 = state_12370__$1;
(statearr_12381_13368[(2)] = inst_12366);

(statearr_12381_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12371 === (3))){
var inst_12368 = (state_12370[(2)]);
var state_12370__$1 = state_12370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12370__$1,inst_12368);
} else {
if((state_val_12371 === (2))){
var inst_12339 = (state_12370[(10)]);
var inst_12341 = cljs.core.count(inst_12339);
var inst_12342 = (inst_12341 > (0));
var state_12370__$1 = state_12370;
if(cljs.core.truth_(inst_12342)){
var statearr_12383_13369 = state_12370__$1;
(statearr_12383_13369[(1)] = (4));

} else {
var statearr_12384_13370 = state_12370__$1;
(statearr_12384_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12371 === (11))){
var inst_12339 = (state_12370[(10)]);
var inst_12359 = (state_12370[(2)]);
var tmp12382 = inst_12339;
var inst_12339__$1 = tmp12382;
var state_12370__$1 = (function (){var statearr_12385 = state_12370;
(statearr_12385[(10)] = inst_12339__$1);

(statearr_12385[(11)] = inst_12359);

return statearr_12385;
})();
var statearr_12386_13371 = state_12370__$1;
(statearr_12386_13371[(2)] = null);

(statearr_12386_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12371 === (9))){
var inst_12349 = (state_12370[(8)]);
var state_12370__$1 = state_12370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12370__$1,(11),out,inst_12349);
} else {
if((state_val_12371 === (5))){
var inst_12364 = cljs.core.async.close_BANG_(out);
var state_12370__$1 = state_12370;
var statearr_12387_13372 = state_12370__$1;
(statearr_12387_13372[(2)] = inst_12364);

(statearr_12387_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12371 === (10))){
var inst_12362 = (state_12370[(2)]);
var state_12370__$1 = state_12370;
var statearr_12388_13373 = state_12370__$1;
(statearr_12388_13373[(2)] = inst_12362);

(statearr_12388_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12371 === (8))){
var inst_12339 = (state_12370[(10)]);
var inst_12348 = (state_12370[(7)]);
var inst_12349 = (state_12370[(8)]);
var inst_12350 = (state_12370[(9)]);
var inst_12353 = (function (){var cs = inst_12339;
var vec__12344 = inst_12348;
var v = inst_12349;
var c = inst_12350;
return (function (p1__12334_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12334_SHARP_);
});
})();
var inst_12354 = cljs.core.filterv(inst_12353,inst_12339);
var inst_12339__$1 = inst_12354;
var state_12370__$1 = (function (){var statearr_12389 = state_12370;
(statearr_12389[(10)] = inst_12339__$1);

return statearr_12389;
})();
var statearr_12390_13374 = state_12370__$1;
(statearr_12390_13374[(2)] = null);

(statearr_12390_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12391 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12391[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12391[(1)] = (1));

return statearr_12391;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12370){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12370);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12392){var ex__10942__auto__ = e12392;
var statearr_12393_13375 = state_12370;
(statearr_12393_13375[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12370[(4)]))){
var statearr_12394_13376 = state_12370;
(statearr_12394_13376[(1)] = cljs.core.first((state_12370[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12370;
state_12370 = G__13377;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12396 = f__10987__auto__();
(statearr_12396[(6)] = c__10986__auto___13364);

return statearr_12396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var G__12403 = arguments.length;
switch (G__12403) {
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
var c__10986__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12432){
var state_val_12433 = (state_12432[(1)]);
if((state_val_12433 === (7))){
var inst_12412 = (state_12432[(7)]);
var inst_12412__$1 = (state_12432[(2)]);
var inst_12413 = (inst_12412__$1 == null);
var inst_12414 = cljs.core.not(inst_12413);
var state_12432__$1 = (function (){var statearr_12435 = state_12432;
(statearr_12435[(7)] = inst_12412__$1);

return statearr_12435;
})();
if(inst_12414){
var statearr_12436_13380 = state_12432__$1;
(statearr_12436_13380[(1)] = (8));

} else {
var statearr_12437_13381 = state_12432__$1;
(statearr_12437_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (1))){
var inst_12407 = (0);
var state_12432__$1 = (function (){var statearr_12438 = state_12432;
(statearr_12438[(8)] = inst_12407);

return statearr_12438;
})();
var statearr_12439_13382 = state_12432__$1;
(statearr_12439_13382[(2)] = null);

(statearr_12439_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (4))){
var state_12432__$1 = state_12432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12432__$1,(7),ch);
} else {
if((state_val_12433 === (6))){
var inst_12427 = (state_12432[(2)]);
var state_12432__$1 = state_12432;
var statearr_12440_13383 = state_12432__$1;
(statearr_12440_13383[(2)] = inst_12427);

(statearr_12440_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (3))){
var inst_12429 = (state_12432[(2)]);
var inst_12430 = cljs.core.async.close_BANG_(out);
var state_12432__$1 = (function (){var statearr_12441 = state_12432;
(statearr_12441[(9)] = inst_12429);

return statearr_12441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12432__$1,inst_12430);
} else {
if((state_val_12433 === (2))){
var inst_12407 = (state_12432[(8)]);
var inst_12409 = (inst_12407 < n);
var state_12432__$1 = state_12432;
if(cljs.core.truth_(inst_12409)){
var statearr_12442_13384 = state_12432__$1;
(statearr_12442_13384[(1)] = (4));

} else {
var statearr_12443_13385 = state_12432__$1;
(statearr_12443_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (11))){
var inst_12407 = (state_12432[(8)]);
var inst_12417 = (state_12432[(2)]);
var inst_12418 = (inst_12407 + (1));
var inst_12407__$1 = inst_12418;
var state_12432__$1 = (function (){var statearr_12444 = state_12432;
(statearr_12444[(10)] = inst_12417);

(statearr_12444[(8)] = inst_12407__$1);

return statearr_12444;
})();
var statearr_12445_13386 = state_12432__$1;
(statearr_12445_13386[(2)] = null);

(statearr_12445_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (9))){
var state_12432__$1 = state_12432;
var statearr_12446_13387 = state_12432__$1;
(statearr_12446_13387[(2)] = null);

(statearr_12446_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (5))){
var state_12432__$1 = state_12432;
var statearr_12447_13388 = state_12432__$1;
(statearr_12447_13388[(2)] = null);

(statearr_12447_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (10))){
var inst_12423 = (state_12432[(2)]);
var state_12432__$1 = state_12432;
var statearr_12448_13389 = state_12432__$1;
(statearr_12448_13389[(2)] = inst_12423);

(statearr_12448_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (8))){
var inst_12412 = (state_12432[(7)]);
var state_12432__$1 = state_12432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12432__$1,(11),out,inst_12412);
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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12449[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12449[(1)] = (1));

return statearr_12449;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12432){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12432);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12450){var ex__10942__auto__ = e12450;
var statearr_12451_13390 = state_12432;
(statearr_12451_13390[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12432[(4)]))){
var statearr_12452_13391 = state_12432;
(statearr_12452_13391[(1)] = cljs.core.first((state_12432[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12432;
state_12432 = G__13392;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12453 = f__10987__auto__();
(statearr_12453[(6)] = c__10986__auto___13379);

return statearr_12453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12456 = (function (f,ch,meta12457){
this.f = f;
this.ch = ch;
this.meta12457 = meta12457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12458,meta12457__$1){
var self__ = this;
var _12458__$1 = this;
return (new cljs.core.async.t_cljs$core$async12456(self__.f,self__.ch,meta12457__$1));
}));

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12458){
var self__ = this;
var _12458__$1 = this;
return self__.meta12457;
}));

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12464 = (function (f,ch,meta12457,_,fn1,meta12465){
this.f = f;
this.ch = ch;
this.meta12457 = meta12457;
this._ = _;
this.fn1 = fn1;
this.meta12465 = meta12465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12466,meta12465__$1){
var self__ = this;
var _12466__$1 = this;
return (new cljs.core.async.t_cljs$core$async12464(self__.f,self__.ch,self__.meta12457,self__._,self__.fn1,meta12465__$1));
}));

(cljs.core.async.t_cljs$core$async12464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12466){
var self__ = this;
var _12466__$1 = this;
return self__.meta12465;
}));

(cljs.core.async.t_cljs$core$async12464.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12464.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12454_SHARP_){
var G__12473 = (((p1__12454_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12454_SHARP_) : self__.f.call(null,p1__12454_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12473) : f1.call(null,G__12473));
});
}));

(cljs.core.async.t_cljs$core$async12464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12457","meta12457",1302213651,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12456","cljs.core.async/t_cljs$core$async12456",-1531538971,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12465","meta12465",-1111426819,null)], null);
}));

(cljs.core.async.t_cljs$core$async12464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12464");

(cljs.core.async.t_cljs$core$async12464.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12464.
 */
cljs.core.async.__GT_t_cljs$core$async12464 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12464(f__$1,ch__$1,meta12457__$1,___$2,fn1__$1,meta12465){
return (new cljs.core.async.t_cljs$core$async12464(f__$1,ch__$1,meta12457__$1,___$2,fn1__$1,meta12465));
});

}

return (new cljs.core.async.t_cljs$core$async12464(self__.f,self__.ch,self__.meta12457,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12474 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12474) : self__.f.call(null,G__12474));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12457","meta12457",1302213651,null)], null);
}));

(cljs.core.async.t_cljs$core$async12456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12456");

(cljs.core.async.t_cljs$core$async12456.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12456.
 */
cljs.core.async.__GT_t_cljs$core$async12456 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12456(f__$1,ch__$1,meta12457){
return (new cljs.core.async.t_cljs$core$async12456(f__$1,ch__$1,meta12457));
});

}

return (new cljs.core.async.t_cljs$core$async12456(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12475 = (function (f,ch,meta12476){
this.f = f;
this.ch = ch;
this.meta12476 = meta12476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12477,meta12476__$1){
var self__ = this;
var _12477__$1 = this;
return (new cljs.core.async.t_cljs$core$async12475(self__.f,self__.ch,meta12476__$1));
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12477){
var self__ = this;
var _12477__$1 = this;
return self__.meta12476;
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12476","meta12476",1202178637,null)], null);
}));

(cljs.core.async.t_cljs$core$async12475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12475");

(cljs.core.async.t_cljs$core$async12475.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12475.
 */
cljs.core.async.__GT_t_cljs$core$async12475 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12475(f__$1,ch__$1,meta12476){
return (new cljs.core.async.t_cljs$core$async12475(f__$1,ch__$1,meta12476));
});

}

return (new cljs.core.async.t_cljs$core$async12475(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12482 = (function (p,ch,meta12483){
this.p = p;
this.ch = ch;
this.meta12483 = meta12483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12484,meta12483__$1){
var self__ = this;
var _12484__$1 = this;
return (new cljs.core.async.t_cljs$core$async12482(self__.p,self__.ch,meta12483__$1));
}));

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12484){
var self__ = this;
var _12484__$1 = this;
return self__.meta12483;
}));

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12483","meta12483",1289639288,null)], null);
}));

(cljs.core.async.t_cljs$core$async12482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12482");

(cljs.core.async.t_cljs$core$async12482.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12482.
 */
cljs.core.async.__GT_t_cljs$core$async12482 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12482(p__$1,ch__$1,meta12483){
return (new cljs.core.async.t_cljs$core$async12482(p__$1,ch__$1,meta12483));
});

}

return (new cljs.core.async.t_cljs$core$async12482(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12486 = arguments.length;
switch (G__12486) {
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
var c__10986__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12507){
var state_val_12508 = (state_12507[(1)]);
if((state_val_12508 === (7))){
var inst_12503 = (state_12507[(2)]);
var state_12507__$1 = state_12507;
var statearr_12509_13395 = state_12507__$1;
(statearr_12509_13395[(2)] = inst_12503);

(statearr_12509_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (1))){
var state_12507__$1 = state_12507;
var statearr_12510_13396 = state_12507__$1;
(statearr_12510_13396[(2)] = null);

(statearr_12510_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (4))){
var inst_12489 = (state_12507[(7)]);
var inst_12489__$1 = (state_12507[(2)]);
var inst_12490 = (inst_12489__$1 == null);
var state_12507__$1 = (function (){var statearr_12514 = state_12507;
(statearr_12514[(7)] = inst_12489__$1);

return statearr_12514;
})();
if(cljs.core.truth_(inst_12490)){
var statearr_12515_13397 = state_12507__$1;
(statearr_12515_13397[(1)] = (5));

} else {
var statearr_12516_13398 = state_12507__$1;
(statearr_12516_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (6))){
var inst_12489 = (state_12507[(7)]);
var inst_12494 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12489) : p.call(null,inst_12489));
var state_12507__$1 = state_12507;
if(cljs.core.truth_(inst_12494)){
var statearr_12522_13399 = state_12507__$1;
(statearr_12522_13399[(1)] = (8));

} else {
var statearr_12523_13400 = state_12507__$1;
(statearr_12523_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (3))){
var inst_12505 = (state_12507[(2)]);
var state_12507__$1 = state_12507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12507__$1,inst_12505);
} else {
if((state_val_12508 === (2))){
var state_12507__$1 = state_12507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12507__$1,(4),ch);
} else {
if((state_val_12508 === (11))){
var inst_12497 = (state_12507[(2)]);
var state_12507__$1 = state_12507;
var statearr_12526_13401 = state_12507__$1;
(statearr_12526_13401[(2)] = inst_12497);

(statearr_12526_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (9))){
var state_12507__$1 = state_12507;
var statearr_12528_13402 = state_12507__$1;
(statearr_12528_13402[(2)] = null);

(statearr_12528_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (5))){
var inst_12492 = cljs.core.async.close_BANG_(out);
var state_12507__$1 = state_12507;
var statearr_12529_13403 = state_12507__$1;
(statearr_12529_13403[(2)] = inst_12492);

(statearr_12529_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (10))){
var inst_12500 = (state_12507[(2)]);
var state_12507__$1 = (function (){var statearr_12530 = state_12507;
(statearr_12530[(8)] = inst_12500);

return statearr_12530;
})();
var statearr_12531_13404 = state_12507__$1;
(statearr_12531_13404[(2)] = null);

(statearr_12531_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (8))){
var inst_12489 = (state_12507[(7)]);
var state_12507__$1 = state_12507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12507__$1,(11),out,inst_12489);
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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12546 = [null,null,null,null,null,null,null,null,null];
(statearr_12546[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12546[(1)] = (1));

return statearr_12546;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12507){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12507);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12547){var ex__10942__auto__ = e12547;
var statearr_12548_13405 = state_12507;
(statearr_12548_13405[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12507[(4)]))){
var statearr_12549_13406 = state_12507;
(statearr_12549_13406[(1)] = cljs.core.first((state_12507[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12507;
state_12507 = G__13407;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12550 = f__10987__auto__();
(statearr_12550[(6)] = c__10986__auto___13394);

return statearr_12550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var c__10986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12622){
var state_val_12623 = (state_12622[(1)]);
if((state_val_12623 === (7))){
var inst_12618 = (state_12622[(2)]);
var state_12622__$1 = state_12622;
var statearr_12624_13409 = state_12622__$1;
(statearr_12624_13409[(2)] = inst_12618);

(statearr_12624_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (20))){
var inst_12588 = (state_12622[(7)]);
var inst_12599 = (state_12622[(2)]);
var inst_12600 = cljs.core.next(inst_12588);
var inst_12574 = inst_12600;
var inst_12575 = null;
var inst_12576 = (0);
var inst_12577 = (0);
var state_12622__$1 = (function (){var statearr_12625 = state_12622;
(statearr_12625[(8)] = inst_12576);

(statearr_12625[(9)] = inst_12574);

(statearr_12625[(10)] = inst_12575);

(statearr_12625[(11)] = inst_12599);

(statearr_12625[(12)] = inst_12577);

return statearr_12625;
})();
var statearr_12626_13410 = state_12622__$1;
(statearr_12626_13410[(2)] = null);

(statearr_12626_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (1))){
var state_12622__$1 = state_12622;
var statearr_12650_13411 = state_12622__$1;
(statearr_12650_13411[(2)] = null);

(statearr_12650_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (4))){
var inst_12563 = (state_12622[(13)]);
var inst_12563__$1 = (state_12622[(2)]);
var inst_12564 = (inst_12563__$1 == null);
var state_12622__$1 = (function (){var statearr_12651 = state_12622;
(statearr_12651[(13)] = inst_12563__$1);

return statearr_12651;
})();
if(cljs.core.truth_(inst_12564)){
var statearr_12652_13412 = state_12622__$1;
(statearr_12652_13412[(1)] = (5));

} else {
var statearr_12653_13413 = state_12622__$1;
(statearr_12653_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (15))){
var state_12622__$1 = state_12622;
var statearr_12657_13414 = state_12622__$1;
(statearr_12657_13414[(2)] = null);

(statearr_12657_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (21))){
var state_12622__$1 = state_12622;
var statearr_12658_13415 = state_12622__$1;
(statearr_12658_13415[(2)] = null);

(statearr_12658_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (13))){
var inst_12576 = (state_12622[(8)]);
var inst_12574 = (state_12622[(9)]);
var inst_12575 = (state_12622[(10)]);
var inst_12577 = (state_12622[(12)]);
var inst_12584 = (state_12622[(2)]);
var inst_12585 = (inst_12577 + (1));
var tmp12654 = inst_12576;
var tmp12655 = inst_12574;
var tmp12656 = inst_12575;
var inst_12574__$1 = tmp12655;
var inst_12575__$1 = tmp12656;
var inst_12576__$1 = tmp12654;
var inst_12577__$1 = inst_12585;
var state_12622__$1 = (function (){var statearr_12659 = state_12622;
(statearr_12659[(8)] = inst_12576__$1);

(statearr_12659[(9)] = inst_12574__$1);

(statearr_12659[(14)] = inst_12584);

(statearr_12659[(10)] = inst_12575__$1);

(statearr_12659[(12)] = inst_12577__$1);

return statearr_12659;
})();
var statearr_12660_13416 = state_12622__$1;
(statearr_12660_13416[(2)] = null);

(statearr_12660_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (22))){
var state_12622__$1 = state_12622;
var statearr_12661_13417 = state_12622__$1;
(statearr_12661_13417[(2)] = null);

(statearr_12661_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (6))){
var inst_12563 = (state_12622[(13)]);
var inst_12572 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12563) : f.call(null,inst_12563));
var inst_12573 = cljs.core.seq(inst_12572);
var inst_12574 = inst_12573;
var inst_12575 = null;
var inst_12576 = (0);
var inst_12577 = (0);
var state_12622__$1 = (function (){var statearr_12662 = state_12622;
(statearr_12662[(8)] = inst_12576);

(statearr_12662[(9)] = inst_12574);

(statearr_12662[(10)] = inst_12575);

(statearr_12662[(12)] = inst_12577);

return statearr_12662;
})();
var statearr_12663_13418 = state_12622__$1;
(statearr_12663_13418[(2)] = null);

(statearr_12663_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (17))){
var inst_12588 = (state_12622[(7)]);
var inst_12592 = cljs.core.chunk_first(inst_12588);
var inst_12593 = cljs.core.chunk_rest(inst_12588);
var inst_12594 = cljs.core.count(inst_12592);
var inst_12574 = inst_12593;
var inst_12575 = inst_12592;
var inst_12576 = inst_12594;
var inst_12577 = (0);
var state_12622__$1 = (function (){var statearr_12664 = state_12622;
(statearr_12664[(8)] = inst_12576);

(statearr_12664[(9)] = inst_12574);

(statearr_12664[(10)] = inst_12575);

(statearr_12664[(12)] = inst_12577);

return statearr_12664;
})();
var statearr_12665_13419 = state_12622__$1;
(statearr_12665_13419[(2)] = null);

(statearr_12665_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (3))){
var inst_12620 = (state_12622[(2)]);
var state_12622__$1 = state_12622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12622__$1,inst_12620);
} else {
if((state_val_12623 === (12))){
var inst_12608 = (state_12622[(2)]);
var state_12622__$1 = state_12622;
var statearr_12666_13420 = state_12622__$1;
(statearr_12666_13420[(2)] = inst_12608);

(statearr_12666_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (2))){
var state_12622__$1 = state_12622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12622__$1,(4),in$);
} else {
if((state_val_12623 === (23))){
var inst_12616 = (state_12622[(2)]);
var state_12622__$1 = state_12622;
var statearr_12667_13421 = state_12622__$1;
(statearr_12667_13421[(2)] = inst_12616);

(statearr_12667_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (19))){
var inst_12603 = (state_12622[(2)]);
var state_12622__$1 = state_12622;
var statearr_12668_13422 = state_12622__$1;
(statearr_12668_13422[(2)] = inst_12603);

(statearr_12668_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (11))){
var inst_12574 = (state_12622[(9)]);
var inst_12588 = (state_12622[(7)]);
var inst_12588__$1 = cljs.core.seq(inst_12574);
var state_12622__$1 = (function (){var statearr_12669 = state_12622;
(statearr_12669[(7)] = inst_12588__$1);

return statearr_12669;
})();
if(inst_12588__$1){
var statearr_12670_13423 = state_12622__$1;
(statearr_12670_13423[(1)] = (14));

} else {
var statearr_12674_13424 = state_12622__$1;
(statearr_12674_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (9))){
var inst_12610 = (state_12622[(2)]);
var inst_12611 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12622__$1 = (function (){var statearr_12687 = state_12622;
(statearr_12687[(15)] = inst_12610);

return statearr_12687;
})();
if(cljs.core.truth_(inst_12611)){
var statearr_12688_13425 = state_12622__$1;
(statearr_12688_13425[(1)] = (21));

} else {
var statearr_12689_13426 = state_12622__$1;
(statearr_12689_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (5))){
var inst_12566 = cljs.core.async.close_BANG_(out);
var state_12622__$1 = state_12622;
var statearr_12690_13427 = state_12622__$1;
(statearr_12690_13427[(2)] = inst_12566);

(statearr_12690_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (14))){
var inst_12588 = (state_12622[(7)]);
var inst_12590 = cljs.core.chunked_seq_QMARK_(inst_12588);
var state_12622__$1 = state_12622;
if(inst_12590){
var statearr_12691_13428 = state_12622__$1;
(statearr_12691_13428[(1)] = (17));

} else {
var statearr_12692_13429 = state_12622__$1;
(statearr_12692_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (16))){
var inst_12606 = (state_12622[(2)]);
var state_12622__$1 = state_12622;
var statearr_12693_13430 = state_12622__$1;
(statearr_12693_13430[(2)] = inst_12606);

(statearr_12693_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12623 === (10))){
var inst_12575 = (state_12622[(10)]);
var inst_12577 = (state_12622[(12)]);
var inst_12582 = cljs.core._nth(inst_12575,inst_12577);
var state_12622__$1 = state_12622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12622__$1,(13),out,inst_12582);
} else {
if((state_val_12623 === (18))){
var inst_12588 = (state_12622[(7)]);
var inst_12597 = cljs.core.first(inst_12588);
var state_12622__$1 = state_12622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12622__$1,(20),out,inst_12597);
} else {
if((state_val_12623 === (8))){
var inst_12576 = (state_12622[(8)]);
var inst_12577 = (state_12622[(12)]);
var inst_12579 = (inst_12577 < inst_12576);
var inst_12580 = inst_12579;
var state_12622__$1 = state_12622;
if(cljs.core.truth_(inst_12580)){
var statearr_12694_13431 = state_12622__$1;
(statearr_12694_13431[(1)] = (10));

} else {
var statearr_12695_13432 = state_12622__$1;
(statearr_12695_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10939__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10939__auto____0 = (function (){
var statearr_12696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12696[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10939__auto__);

(statearr_12696[(1)] = (1));

return statearr_12696;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10939__auto____1 = (function (state_12622){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12622);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12697){var ex__10942__auto__ = e12697;
var statearr_12698_13433 = state_12622;
(statearr_12698_13433[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12622[(4)]))){
var statearr_12699_13434 = state_12622;
(statearr_12699_13434[(1)] = cljs.core.first((state_12622[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12622;
state_12622 = G__13435;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10939__auto__ = function(state_12622){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10939__auto____1.call(this,state_12622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10939__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10939__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12700 = f__10987__auto__();
(statearr_12700[(6)] = c__10986__auto__);

return statearr_12700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));

return c__10986__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12702 = arguments.length;
switch (G__12702) {
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
var G__12704 = arguments.length;
switch (G__12704) {
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
var c__10986__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12733){
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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12751[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12751[(1)] = (1));

return statearr_12751;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12733){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12733);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12752){var ex__10942__auto__ = e12752;
var statearr_12753_13450 = state_12733;
(statearr_12753_13450[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12733[(4)]))){
var statearr_12754_13451 = state_12733;
(statearr_12754_13451[(1)] = cljs.core.first((state_12733[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12733;
state_12733 = G__13452;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12755 = f__10987__auto__();
(statearr_12755[(6)] = c__10986__auto___13439);

return statearr_12755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
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
var c__10986__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12795){
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
var state_12795__$1 = (function (){var statearr_12811 = state_12795;
(statearr_12811[(10)] = inst_12775);

(statearr_12811[(7)] = inst_12760);

(statearr_12811[(8)] = inst_12759);

return statearr_12811;
})();
var statearr_12812_13463 = state_12795__$1;
(statearr_12812_13463[(2)] = null);

(statearr_12812_13463[(1)] = (2));


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
var state_12795__$1 = (function (){var statearr_12813 = state_12795;
(statearr_12813[(11)] = inst_12768__$1);

(statearr_12813[(12)] = inst_12767);

return statearr_12813;
})();
if(cljs.core.truth_(inst_12769)){
var statearr_12814_13464 = state_12795__$1;
(statearr_12814_13464[(1)] = (8));

} else {
var statearr_12815_13465 = state_12795__$1;
(statearr_12815_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (14))){
var inst_12788 = (state_12795[(2)]);
var inst_12789 = cljs.core.async.close_BANG_(out);
var state_12795__$1 = (function (){var statearr_12817 = state_12795;
(statearr_12817[(13)] = inst_12788);

return statearr_12817;
})();
var statearr_12818_13466 = state_12795__$1;
(statearr_12818_13466[(2)] = inst_12789);

(statearr_12818_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (10))){
var inst_12779 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
var statearr_12819_13467 = state_12795__$1;
(statearr_12819_13467[(2)] = inst_12779);

(statearr_12819_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (8))){
var inst_12768 = (state_12795[(11)]);
var inst_12759 = (state_12795[(8)]);
var tmp12816 = inst_12759;
var inst_12759__$1 = tmp12816;
var inst_12760 = inst_12768;
var state_12795__$1 = (function (){var statearr_12820 = state_12795;
(statearr_12820[(7)] = inst_12760);

(statearr_12820[(8)] = inst_12759__$1);

return statearr_12820;
})();
var statearr_12821_13468 = state_12795__$1;
(statearr_12821_13468[(2)] = null);

(statearr_12821_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12822[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12822[(1)] = (1));

return statearr_12822;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12795){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12795);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12823){var ex__10942__auto__ = e12823;
var statearr_12824_13469 = state_12795;
(statearr_12824_13469[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12795[(4)]))){
var statearr_12825_13470 = state_12795;
(statearr_12825_13470[(1)] = cljs.core.first((state_12795[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12795;
state_12795 = G__13471;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12826 = f__10987__auto__();
(statearr_12826[(6)] = c__10986__auto___13454);

return statearr_12826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12828 = arguments.length;
switch (G__12828) {
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
var c__10986__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10987__auto__ = (function (){var switch__10938__auto__ = (function (state_12877){
var state_val_12878 = (state_12877[(1)]);
if((state_val_12878 === (7))){
var inst_12873 = (state_12877[(2)]);
var state_12877__$1 = state_12877;
var statearr_12879_13474 = state_12877__$1;
(statearr_12879_13474[(2)] = inst_12873);

(statearr_12879_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (1))){
var inst_12836 = [];
var inst_12837 = inst_12836;
var inst_12838 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12877__$1 = (function (){var statearr_12880 = state_12877;
(statearr_12880[(7)] = inst_12838);

(statearr_12880[(8)] = inst_12837);

return statearr_12880;
})();
var statearr_12881_13475 = state_12877__$1;
(statearr_12881_13475[(2)] = null);

(statearr_12881_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (4))){
var inst_12841 = (state_12877[(9)]);
var inst_12841__$1 = (state_12877[(2)]);
var inst_12842 = (inst_12841__$1 == null);
var inst_12843 = cljs.core.not(inst_12842);
var state_12877__$1 = (function (){var statearr_12882 = state_12877;
(statearr_12882[(9)] = inst_12841__$1);

return statearr_12882;
})();
if(inst_12843){
var statearr_12883_13476 = state_12877__$1;
(statearr_12883_13476[(1)] = (5));

} else {
var statearr_12884_13477 = state_12877__$1;
(statearr_12884_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (15))){
var inst_12867 = (state_12877[(2)]);
var state_12877__$1 = state_12877;
var statearr_12885_13478 = state_12877__$1;
(statearr_12885_13478[(2)] = inst_12867);

(statearr_12885_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (13))){
var state_12877__$1 = state_12877;
var statearr_12886_13479 = state_12877__$1;
(statearr_12886_13479[(2)] = null);

(statearr_12886_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (6))){
var inst_12837 = (state_12877[(8)]);
var inst_12862 = inst_12837.length;
var inst_12863 = (inst_12862 > (0));
var state_12877__$1 = state_12877;
if(cljs.core.truth_(inst_12863)){
var statearr_12887_13480 = state_12877__$1;
(statearr_12887_13480[(1)] = (12));

} else {
var statearr_12888_13481 = state_12877__$1;
(statearr_12888_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (3))){
var inst_12875 = (state_12877[(2)]);
var state_12877__$1 = state_12877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12877__$1,inst_12875);
} else {
if((state_val_12878 === (12))){
var inst_12837 = (state_12877[(8)]);
var inst_12865 = cljs.core.vec(inst_12837);
var state_12877__$1 = state_12877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12877__$1,(15),out,inst_12865);
} else {
if((state_val_12878 === (2))){
var state_12877__$1 = state_12877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12877__$1,(4),ch);
} else {
if((state_val_12878 === (11))){
var inst_12845 = (state_12877[(10)]);
var inst_12841 = (state_12877[(9)]);
var inst_12855 = (state_12877[(2)]);
var inst_12856 = [];
var inst_12857 = inst_12856.push(inst_12841);
var inst_12837 = inst_12856;
var inst_12838 = inst_12845;
var state_12877__$1 = (function (){var statearr_12896 = state_12877;
(statearr_12896[(7)] = inst_12838);

(statearr_12896[(11)] = inst_12857);

(statearr_12896[(12)] = inst_12855);

(statearr_12896[(8)] = inst_12837);

return statearr_12896;
})();
var statearr_12897_13482 = state_12877__$1;
(statearr_12897_13482[(2)] = null);

(statearr_12897_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (9))){
var inst_12837 = (state_12877[(8)]);
var inst_12853 = cljs.core.vec(inst_12837);
var state_12877__$1 = state_12877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12877__$1,(11),out,inst_12853);
} else {
if((state_val_12878 === (5))){
var inst_12838 = (state_12877[(7)]);
var inst_12845 = (state_12877[(10)]);
var inst_12841 = (state_12877[(9)]);
var inst_12845__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12841) : f.call(null,inst_12841));
var inst_12846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12845__$1,inst_12838);
var inst_12847 = cljs.core.keyword_identical_QMARK_(inst_12838,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12848 = ((inst_12846) || (inst_12847));
var state_12877__$1 = (function (){var statearr_12898 = state_12877;
(statearr_12898[(10)] = inst_12845__$1);

return statearr_12898;
})();
if(cljs.core.truth_(inst_12848)){
var statearr_12899_13483 = state_12877__$1;
(statearr_12899_13483[(1)] = (8));

} else {
var statearr_12900_13484 = state_12877__$1;
(statearr_12900_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (14))){
var inst_12870 = (state_12877[(2)]);
var inst_12871 = cljs.core.async.close_BANG_(out);
var state_12877__$1 = (function (){var statearr_12902 = state_12877;
(statearr_12902[(13)] = inst_12870);

return statearr_12902;
})();
var statearr_12924_13485 = state_12877__$1;
(statearr_12924_13485[(2)] = inst_12871);

(statearr_12924_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (10))){
var inst_12860 = (state_12877[(2)]);
var state_12877__$1 = state_12877;
var statearr_12925_13486 = state_12877__$1;
(statearr_12925_13486[(2)] = inst_12860);

(statearr_12925_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12878 === (8))){
var inst_12845 = (state_12877[(10)]);
var inst_12837 = (state_12877[(8)]);
var inst_12841 = (state_12877[(9)]);
var inst_12850 = inst_12837.push(inst_12841);
var tmp12901 = inst_12837;
var inst_12837__$1 = tmp12901;
var inst_12838 = inst_12845;
var state_12877__$1 = (function (){var statearr_12926 = state_12877;
(statearr_12926[(7)] = inst_12838);

(statearr_12926[(8)] = inst_12837__$1);

(statearr_12926[(14)] = inst_12850);

return statearr_12926;
})();
var statearr_12927_13487 = state_12877__$1;
(statearr_12927_13487[(2)] = null);

(statearr_12927_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10939__auto__ = null;
var cljs$core$async$state_machine__10939__auto____0 = (function (){
var statearr_12928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12928[(0)] = cljs$core$async$state_machine__10939__auto__);

(statearr_12928[(1)] = (1));

return statearr_12928;
});
var cljs$core$async$state_machine__10939__auto____1 = (function (state_12877){
while(true){
var ret_value__10940__auto__ = (function (){try{while(true){
var result__10941__auto__ = switch__10938__auto__(state_12877);
if(cljs.core.keyword_identical_QMARK_(result__10941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10941__auto__;
}
break;
}
}catch (e12929){var ex__10942__auto__ = e12929;
var statearr_12930_13488 = state_12877;
(statearr_12930_13488[(2)] = ex__10942__auto__);


if(cljs.core.seq((state_12877[(4)]))){
var statearr_12931_13489 = state_12877;
(statearr_12931_13489[(1)] = cljs.core.first((state_12877[(4)])));

} else {
throw ex__10942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12877;
state_12877 = G__13490;
continue;
} else {
return ret_value__10940__auto__;
}
break;
}
});
cljs$core$async$state_machine__10939__auto__ = function(state_12877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10939__auto____1.call(this,state_12877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10939__auto____0;
cljs$core$async$state_machine__10939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10939__auto____1;
return cljs$core$async$state_machine__10939__auto__;
})()
})();
var state__10988__auto__ = (function (){var statearr_12932 = f__10987__auto__();
(statearr_12932[(6)] = c__10986__auto___13473);

return statearr_12932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10988__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
