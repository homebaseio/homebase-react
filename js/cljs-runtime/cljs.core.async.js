goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11023 = arguments.length;
switch (G__11023) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11024 = (function (f,blockable,meta11025){
this.f = f;
this.blockable = blockable;
this.meta11025 = meta11025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11026,meta11025__$1){
var self__ = this;
var _11026__$1 = this;
return (new cljs.core.async.t_cljs$core$async11024(self__.f,self__.blockable,meta11025__$1));
}));

(cljs.core.async.t_cljs$core$async11024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11026){
var self__ = this;
var _11026__$1 = this;
return self__.meta11025;
}));

(cljs.core.async.t_cljs$core$async11024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11025","meta11025",-422253851,null)], null);
}));

(cljs.core.async.t_cljs$core$async11024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11024");

(cljs.core.async.t_cljs$core$async11024.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11024.
 */
cljs.core.async.__GT_t_cljs$core$async11024 = (function cljs$core$async$__GT_t_cljs$core$async11024(f__$1,blockable__$1,meta11025){
return (new cljs.core.async.t_cljs$core$async11024(f__$1,blockable__$1,meta11025));
});

}

return (new cljs.core.async.t_cljs$core$async11024(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11029 = arguments.length;
switch (G__11029) {
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
var G__11031 = arguments.length;
switch (G__11031) {
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
var G__11039 = arguments.length;
switch (G__11039) {
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
var val_12990 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12990) : fn1.call(null,val_12990));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12990) : fn1.call(null,val_12990));
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
var G__11043 = arguments.length;
switch (G__11043) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11044 = (function (flag,meta11045){
this.flag = flag;
this.meta11045 = meta11045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11046,meta11045__$1){
var self__ = this;
var _11046__$1 = this;
return (new cljs.core.async.t_cljs$core$async11044(self__.flag,meta11045__$1));
}));

(cljs.core.async.t_cljs$core$async11044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11046){
var self__ = this;
var _11046__$1 = this;
return self__.meta11045;
}));

(cljs.core.async.t_cljs$core$async11044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11045","meta11045",-2024096314,null)], null);
}));

(cljs.core.async.t_cljs$core$async11044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11044");

(cljs.core.async.t_cljs$core$async11044.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11044.
 */
cljs.core.async.__GT_t_cljs$core$async11044 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11044(flag__$1,meta11045){
return (new cljs.core.async.t_cljs$core$async11044(flag__$1,meta11045));
});

}

return (new cljs.core.async.t_cljs$core$async11044(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11047 = (function (flag,cb,meta11048){
this.flag = flag;
this.cb = cb;
this.meta11048 = meta11048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11049,meta11048__$1){
var self__ = this;
var _11049__$1 = this;
return (new cljs.core.async.t_cljs$core$async11047(self__.flag,self__.cb,meta11048__$1));
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11049){
var self__ = this;
var _11049__$1 = this;
return self__.meta11048;
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11048","meta11048",-2138760179,null)], null);
}));

(cljs.core.async.t_cljs$core$async11047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11047");

(cljs.core.async.t_cljs$core$async11047.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11047.
 */
cljs.core.async.__GT_t_cljs$core$async11047 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11047(flag__$1,cb__$1,meta11048){
return (new cljs.core.async.t_cljs$core$async11047(flag__$1,cb__$1,meta11048));
});

}

return (new cljs.core.async.t_cljs$core$async11047(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11050_SHARP_){
var G__11052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11050_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11052) : fret.call(null,G__11052));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11051_SHARP_){
var G__11053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11051_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11053) : fret.call(null,G__11053));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11057){
var map__11058 = p__11057;
var map__11058__$1 = (((((!((map__11058 == null))))?(((((map__11058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11058):map__11058);
var opts = map__11058__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11055){
var G__11056 = cljs.core.first(seq11055);
var seq11055__$1 = cljs.core.next(seq11055);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11056,seq11055__$1);
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
var G__11061 = arguments.length;
switch (G__11061) {
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
var c__10964__auto___13012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11089){
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
var statearr_11097_13018 = state_11089__$1;
(statearr_11097_13018[(2)] = null);

(statearr_11097_13018[(1)] = (2));


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
var statearr_11104_13019 = state_11089__$1;
(statearr_11104_13019[(1)] = (12));

} else {
var statearr_11105_13020 = state_11089__$1;
(statearr_11105_13020[(1)] = (13));

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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_11112 = [null,null,null,null,null,null,null,null];
(statearr_11112[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_11112[(1)] = (1));

return statearr_11112;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_11089){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11089);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11113){var ex__10911__auto__ = e11113;
var statearr_11114_13027 = state_11089;
(statearr_11114_13027[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11089[(4)]))){
var statearr_11115_13028 = state_11089;
(statearr_11115_13028[(1)] = cljs.core.first((state_11089[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_11089;
state_11089 = G__13029;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_11089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_11089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11116 = f__10965__auto__();
(statearr_11116[(6)] = c__10964__auto___13012);

return statearr_11116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var c__10964__auto___13030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11128){
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
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0 = (function (){
var statearr_11131 = [null,null,null,null,null,null,null,null];
(statearr_11131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__);

(statearr_11131[(1)] = (1));

return statearr_11131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1 = (function (state_11128){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11128);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11132){var ex__10911__auto__ = e11132;
var statearr_11133_13031 = state_11128;
(statearr_11133_13031[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11128[(4)]))){
var statearr_11134_13032 = state_11128;
(statearr_11134_13032[(1)] = cljs.core.first((state_11128[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11128;
state_11128 = G__13033;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = function(state_11128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1.call(this,state_11128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11135 = f__10965__auto__();
(statearr_11135[(6)] = c__10964__auto___13030);

return statearr_11135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var n__4613__auto___13034 = n;
var __13035 = (0);
while(true){
if((__13035 < n__4613__auto___13034)){
var G__11140_13036 = type;
var G__11140_13037__$1 = (((G__11140_13036 instanceof cljs.core.Keyword))?G__11140_13036.fqn:null);
switch (G__11140_13037__$1) {
case "compute":
var c__10964__auto___13039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10964__auto___13039,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = ((function (__13035,c__10964__auto___13039,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11153){
var state_val_11154 = (state_11153[(1)]);
if((state_val_11154 === (1))){
var state_11153__$1 = state_11153;
var statearr_11155_13040 = state_11153__$1;
(statearr_11155_13040[(2)] = null);

(statearr_11155_13040[(1)] = (2));


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
var statearr_11156_13041 = state_11153__$1;
(statearr_11156_13041[(1)] = (5));

} else {
var statearr_11157_13042 = state_11153__$1;
(statearr_11157_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (5))){
var state_11153__$1 = state_11153;
var statearr_11158_13043 = state_11153__$1;
(statearr_11158_13043[(2)] = null);

(statearr_11158_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (6))){
var state_11153__$1 = state_11153;
var statearr_11159_13044 = state_11153__$1;
(statearr_11159_13044[(2)] = null);

(statearr_11159_13044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (7))){
var inst_11149 = (state_11153[(2)]);
var state_11153__$1 = state_11153;
var statearr_11160_13045 = state_11153__$1;
(statearr_11160_13045[(2)] = inst_11149);

(statearr_11160_13045[(1)] = (3));


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
});})(__13035,c__10964__auto___13039,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10907__auto__,c__10964__auto___13039,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0 = (function (){
var statearr_11161 = [null,null,null,null,null,null,null];
(statearr_11161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__);

(statearr_11161[(1)] = (1));

return statearr_11161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1 = (function (state_11153){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11153);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11162){var ex__10911__auto__ = e11162;
var statearr_11163_13046 = state_11153;
(statearr_11163_13046[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11153[(4)]))){
var statearr_11164_13047 = state_11153;
(statearr_11164_13047[(1)] = cljs.core.first((state_11153[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13048 = state_11153;
state_11153 = G__13048;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = function(state_11153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1.call(this,state_11153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__;
})()
;})(__13035,switch__10907__auto__,c__10964__auto___13039,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10966__auto__ = (function (){var statearr_11175 = f__10965__auto__();
(statearr_11175[(6)] = c__10964__auto___13039);

return statearr_11175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
});})(__13035,c__10964__auto___13039,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
case "async":
var c__10964__auto___13049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10964__auto___13049,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = ((function (__13035,c__10964__auto___13049,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11188){
var state_val_11189 = (state_11188[(1)]);
if((state_val_11189 === (1))){
var state_11188__$1 = state_11188;
var statearr_11190_13050 = state_11188__$1;
(statearr_11190_13050[(2)] = null);

(statearr_11190_13050[(1)] = (2));


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
var statearr_11191_13051 = state_11188__$1;
(statearr_11191_13051[(1)] = (5));

} else {
var statearr_11192_13052 = state_11188__$1;
(statearr_11192_13052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (5))){
var state_11188__$1 = state_11188;
var statearr_11193_13053 = state_11188__$1;
(statearr_11193_13053[(2)] = null);

(statearr_11193_13053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (6))){
var state_11188__$1 = state_11188;
var statearr_11194_13054 = state_11188__$1;
(statearr_11194_13054[(2)] = null);

(statearr_11194_13054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (7))){
var inst_11184 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11195_13055 = state_11188__$1;
(statearr_11195_13055[(2)] = inst_11184);

(statearr_11195_13055[(1)] = (3));


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
});})(__13035,c__10964__auto___13049,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10907__auto__,c__10964__auto___13049,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0 = (function (){
var statearr_11196 = [null,null,null,null,null,null,null];
(statearr_11196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__);

(statearr_11196[(1)] = (1));

return statearr_11196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1 = (function (state_11188){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11188);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11197){var ex__10911__auto__ = e11197;
var statearr_11198_13056 = state_11188;
(statearr_11198_13056[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11188[(4)]))){
var statearr_11199_13057 = state_11188;
(statearr_11199_13057[(1)] = cljs.core.first((state_11188[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13058 = state_11188;
state_11188 = G__13058;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = function(state_11188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1.call(this,state_11188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__;
})()
;})(__13035,switch__10907__auto__,c__10964__auto___13049,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10966__auto__ = (function (){var statearr_11200 = f__10965__auto__();
(statearr_11200[(6)] = c__10964__auto___13049);

return statearr_11200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
});})(__13035,c__10964__auto___13049,G__11140_13036,G__11140_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11140_13037__$1)].join('')));

}

var G__13059 = (__13035 + (1));
__13035 = G__13059;
continue;
} else {
}
break;
}

var c__10964__auto___13060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11223){
var state_val_11224 = (state_11223[(1)]);
if((state_val_11224 === (7))){
var inst_11219 = (state_11223[(2)]);
var state_11223__$1 = state_11223;
var statearr_11225_13061 = state_11223__$1;
(statearr_11225_13061[(2)] = inst_11219);

(statearr_11225_13061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (1))){
var state_11223__$1 = state_11223;
var statearr_11226_13062 = state_11223__$1;
(statearr_11226_13062[(2)] = null);

(statearr_11226_13062[(1)] = (2));


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
var statearr_11228_13063 = state_11223__$1;
(statearr_11228_13063[(1)] = (5));

} else {
var statearr_11229_13064 = state_11223__$1;
(statearr_11229_13064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (6))){
var inst_11208 = (state_11223[(8)]);
var inst_11203 = (state_11223[(7)]);
var inst_11208__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11211 = [inst_11203,inst_11208__$1];
var inst_11212 = (new cljs.core.PersistentVector(null,2,(5),inst_11209,inst_11211,null));
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
var statearr_11232_13065 = state_11223__$1;
(statearr_11232_13065[(2)] = null);

(statearr_11232_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (5))){
var inst_11206 = cljs.core.async.close_BANG_(jobs);
var state_11223__$1 = state_11223;
var statearr_11233_13066 = state_11223__$1;
(statearr_11233_13066[(2)] = inst_11206);

(statearr_11233_13066[(1)] = (7));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0 = (function (){
var statearr_11235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__);

(statearr_11235[(1)] = (1));

return statearr_11235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1 = (function (state_11223){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11223);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11236){var ex__10911__auto__ = e11236;
var statearr_11237_13067 = state_11223;
(statearr_11237_13067[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11223[(4)]))){
var statearr_11240_13068 = state_11223;
(statearr_11240_13068[(1)] = cljs.core.first((state_11223[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11223;
state_11223 = G__13069;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = function(state_11223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1.call(this,state_11223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11241 = f__10965__auto__();
(statearr_11241[(6)] = c__10964__auto___13060);

return statearr_11241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));


var c__10964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11279){
var state_val_11280 = (state_11279[(1)]);
if((state_val_11280 === (7))){
var inst_11275 = (state_11279[(2)]);
var state_11279__$1 = state_11279;
var statearr_11281_13070 = state_11279__$1;
(statearr_11281_13070[(2)] = inst_11275);

(statearr_11281_13070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (20))){
var state_11279__$1 = state_11279;
var statearr_11282_13071 = state_11279__$1;
(statearr_11282_13071[(2)] = null);

(statearr_11282_13071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (1))){
var state_11279__$1 = state_11279;
var statearr_11283_13072 = state_11279__$1;
(statearr_11283_13072[(2)] = null);

(statearr_11283_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (4))){
var inst_11244 = (state_11279[(7)]);
var inst_11244__$1 = (state_11279[(2)]);
var inst_11245 = (inst_11244__$1 == null);
var state_11279__$1 = (function (){var statearr_11284 = state_11279;
(statearr_11284[(7)] = inst_11244__$1);

return statearr_11284;
})();
if(cljs.core.truth_(inst_11245)){
var statearr_11285_13073 = state_11279__$1;
(statearr_11285_13073[(1)] = (5));

} else {
var statearr_11286_13074 = state_11279__$1;
(statearr_11286_13074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (15))){
var inst_11257 = (state_11279[(8)]);
var state_11279__$1 = state_11279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11279__$1,(18),to,inst_11257);
} else {
if((state_val_11280 === (21))){
var inst_11270 = (state_11279[(2)]);
var state_11279__$1 = state_11279;
var statearr_11287_13075 = state_11279__$1;
(statearr_11287_13075[(2)] = inst_11270);

(statearr_11287_13075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (13))){
var inst_11272 = (state_11279[(2)]);
var state_11279__$1 = (function (){var statearr_11288 = state_11279;
(statearr_11288[(9)] = inst_11272);

return statearr_11288;
})();
var statearr_11289_13076 = state_11279__$1;
(statearr_11289_13076[(2)] = null);

(statearr_11289_13076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (6))){
var inst_11244 = (state_11279[(7)]);
var state_11279__$1 = state_11279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11279__$1,(11),inst_11244);
} else {
if((state_val_11280 === (17))){
var inst_11265 = (state_11279[(2)]);
var state_11279__$1 = state_11279;
if(cljs.core.truth_(inst_11265)){
var statearr_11290_13077 = state_11279__$1;
(statearr_11290_13077[(1)] = (19));

} else {
var statearr_11305_13078 = state_11279__$1;
(statearr_11305_13078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (3))){
var inst_11277 = (state_11279[(2)]);
var state_11279__$1 = state_11279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11279__$1,inst_11277);
} else {
if((state_val_11280 === (12))){
var inst_11254 = (state_11279[(10)]);
var state_11279__$1 = state_11279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11279__$1,(14),inst_11254);
} else {
if((state_val_11280 === (2))){
var state_11279__$1 = state_11279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11279__$1,(4),results);
} else {
if((state_val_11280 === (19))){
var state_11279__$1 = state_11279;
var statearr_11306_13079 = state_11279__$1;
(statearr_11306_13079[(2)] = null);

(statearr_11306_13079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (11))){
var inst_11254 = (state_11279[(2)]);
var state_11279__$1 = (function (){var statearr_11307 = state_11279;
(statearr_11307[(10)] = inst_11254);

return statearr_11307;
})();
var statearr_11308_13080 = state_11279__$1;
(statearr_11308_13080[(2)] = null);

(statearr_11308_13080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (9))){
var state_11279__$1 = state_11279;
var statearr_11309_13081 = state_11279__$1;
(statearr_11309_13081[(2)] = null);

(statearr_11309_13081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (5))){
var state_11279__$1 = state_11279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11310_13082 = state_11279__$1;
(statearr_11310_13082[(1)] = (8));

} else {
var statearr_11311_13083 = state_11279__$1;
(statearr_11311_13083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (14))){
var inst_11257 = (state_11279[(8)]);
var inst_11257__$1 = (state_11279[(2)]);
var inst_11258 = (inst_11257__$1 == null);
var inst_11259 = cljs.core.not(inst_11258);
var state_11279__$1 = (function (){var statearr_11312 = state_11279;
(statearr_11312[(8)] = inst_11257__$1);

return statearr_11312;
})();
if(inst_11259){
var statearr_11313_13084 = state_11279__$1;
(statearr_11313_13084[(1)] = (15));

} else {
var statearr_11314_13085 = state_11279__$1;
(statearr_11314_13085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (16))){
var state_11279__$1 = state_11279;
var statearr_11315_13086 = state_11279__$1;
(statearr_11315_13086[(2)] = false);

(statearr_11315_13086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (10))){
var inst_11251 = (state_11279[(2)]);
var state_11279__$1 = state_11279;
var statearr_11316_13087 = state_11279__$1;
(statearr_11316_13087[(2)] = inst_11251);

(statearr_11316_13087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (18))){
var inst_11262 = (state_11279[(2)]);
var state_11279__$1 = state_11279;
var statearr_11317_13088 = state_11279__$1;
(statearr_11317_13088[(2)] = inst_11262);

(statearr_11317_13088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11280 === (8))){
var inst_11248 = cljs.core.async.close_BANG_(to);
var state_11279__$1 = state_11279;
var statearr_11318_13089 = state_11279__$1;
(statearr_11318_13089[(2)] = inst_11248);

(statearr_11318_13089[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0 = (function (){
var statearr_11319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__);

(statearr_11319[(1)] = (1));

return statearr_11319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1 = (function (state_11279){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11279);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11320){var ex__10911__auto__ = e11320;
var statearr_11321_13090 = state_11279;
(statearr_11321_13090[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11279[(4)]))){
var statearr_11322_13091 = state_11279;
(statearr_11322_13091[(1)] = cljs.core.first((state_11279[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13092 = state_11279;
state_11279 = G__13092;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__ = function(state_11279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1.call(this,state_11279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11323 = f__10965__auto__();
(statearr_11323[(6)] = c__10964__auto__);

return statearr_11323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));

return c__10964__auto__;
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
var G__11330 = arguments.length;
switch (G__11330) {
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
var G__11332 = arguments.length;
switch (G__11332) {
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
var G__11334 = arguments.length;
switch (G__11334) {
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
var c__10964__auto___13096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11379){
var state_val_11380 = (state_11379[(1)]);
if((state_val_11380 === (7))){
var inst_11375 = (state_11379[(2)]);
var state_11379__$1 = state_11379;
var statearr_11381_13097 = state_11379__$1;
(statearr_11381_13097[(2)] = inst_11375);

(statearr_11381_13097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (1))){
var state_11379__$1 = state_11379;
var statearr_11382_13098 = state_11379__$1;
(statearr_11382_13098[(2)] = null);

(statearr_11382_13098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (4))){
var inst_11356 = (state_11379[(7)]);
var inst_11356__$1 = (state_11379[(2)]);
var inst_11357 = (inst_11356__$1 == null);
var state_11379__$1 = (function (){var statearr_11383 = state_11379;
(statearr_11383[(7)] = inst_11356__$1);

return statearr_11383;
})();
if(cljs.core.truth_(inst_11357)){
var statearr_11384_13099 = state_11379__$1;
(statearr_11384_13099[(1)] = (5));

} else {
var statearr_11385_13100 = state_11379__$1;
(statearr_11385_13100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (13))){
var state_11379__$1 = state_11379;
var statearr_11386_13101 = state_11379__$1;
(statearr_11386_13101[(2)] = null);

(statearr_11386_13101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (6))){
var inst_11356 = (state_11379[(7)]);
var inst_11362 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11356) : p.call(null,inst_11356));
var state_11379__$1 = state_11379;
if(cljs.core.truth_(inst_11362)){
var statearr_11387_13102 = state_11379__$1;
(statearr_11387_13102[(1)] = (9));

} else {
var statearr_11388_13103 = state_11379__$1;
(statearr_11388_13103[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (3))){
var inst_11377 = (state_11379[(2)]);
var state_11379__$1 = state_11379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11379__$1,inst_11377);
} else {
if((state_val_11380 === (12))){
var state_11379__$1 = state_11379;
var statearr_11389_13104 = state_11379__$1;
(statearr_11389_13104[(2)] = null);

(statearr_11389_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (2))){
var state_11379__$1 = state_11379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11379__$1,(4),ch);
} else {
if((state_val_11380 === (11))){
var inst_11356 = (state_11379[(7)]);
var inst_11366 = (state_11379[(2)]);
var state_11379__$1 = state_11379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11379__$1,(8),inst_11366,inst_11356);
} else {
if((state_val_11380 === (9))){
var state_11379__$1 = state_11379;
var statearr_11390_13105 = state_11379__$1;
(statearr_11390_13105[(2)] = tc);

(statearr_11390_13105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (5))){
var inst_11359 = cljs.core.async.close_BANG_(tc);
var inst_11360 = cljs.core.async.close_BANG_(fc);
var state_11379__$1 = (function (){var statearr_11391 = state_11379;
(statearr_11391[(8)] = inst_11359);

return statearr_11391;
})();
var statearr_11392_13106 = state_11379__$1;
(statearr_11392_13106[(2)] = inst_11360);

(statearr_11392_13106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (14))){
var inst_11373 = (state_11379[(2)]);
var state_11379__$1 = state_11379;
var statearr_11398_13107 = state_11379__$1;
(statearr_11398_13107[(2)] = inst_11373);

(statearr_11398_13107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (10))){
var state_11379__$1 = state_11379;
var statearr_11399_13108 = state_11379__$1;
(statearr_11399_13108[(2)] = fc);

(statearr_11399_13108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11380 === (8))){
var inst_11368 = (state_11379[(2)]);
var state_11379__$1 = state_11379;
if(cljs.core.truth_(inst_11368)){
var statearr_11400_13109 = state_11379__$1;
(statearr_11400_13109[(1)] = (12));

} else {
var statearr_11401_13110 = state_11379__$1;
(statearr_11401_13110[(1)] = (13));

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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_11402 = [null,null,null,null,null,null,null,null,null];
(statearr_11402[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_11402[(1)] = (1));

return statearr_11402;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_11379){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11379);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11403){var ex__10911__auto__ = e11403;
var statearr_11404_13111 = state_11379;
(statearr_11404_13111[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11379[(4)]))){
var statearr_11405_13112 = state_11379;
(statearr_11405_13112[(1)] = cljs.core.first((state_11379[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13113 = state_11379;
state_11379 = G__13113;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_11379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_11379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11406 = f__10965__auto__();
(statearr_11406[(6)] = c__10964__auto___13096);

return statearr_11406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var c__10964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11428){
var state_val_11429 = (state_11428[(1)]);
if((state_val_11429 === (7))){
var inst_11424 = (state_11428[(2)]);
var state_11428__$1 = state_11428;
var statearr_11430_13114 = state_11428__$1;
(statearr_11430_13114[(2)] = inst_11424);

(statearr_11430_13114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11429 === (1))){
var inst_11407 = init;
var inst_11408 = inst_11407;
var state_11428__$1 = (function (){var statearr_11431 = state_11428;
(statearr_11431[(7)] = inst_11408);

return statearr_11431;
})();
var statearr_11436_13115 = state_11428__$1;
(statearr_11436_13115[(2)] = null);

(statearr_11436_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11429 === (4))){
var inst_11411 = (state_11428[(8)]);
var inst_11411__$1 = (state_11428[(2)]);
var inst_11412 = (inst_11411__$1 == null);
var state_11428__$1 = (function (){var statearr_11437 = state_11428;
(statearr_11437[(8)] = inst_11411__$1);

return statearr_11437;
})();
if(cljs.core.truth_(inst_11412)){
var statearr_11438_13116 = state_11428__$1;
(statearr_11438_13116[(1)] = (5));

} else {
var statearr_11439_13117 = state_11428__$1;
(statearr_11439_13117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11429 === (6))){
var inst_11411 = (state_11428[(8)]);
var inst_11415 = (state_11428[(9)]);
var inst_11408 = (state_11428[(7)]);
var inst_11415__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11408,inst_11411) : f.call(null,inst_11408,inst_11411));
var inst_11416 = cljs.core.reduced_QMARK_(inst_11415__$1);
var state_11428__$1 = (function (){var statearr_11440 = state_11428;
(statearr_11440[(9)] = inst_11415__$1);

return statearr_11440;
})();
if(inst_11416){
var statearr_11441_13118 = state_11428__$1;
(statearr_11441_13118[(1)] = (8));

} else {
var statearr_11442_13119 = state_11428__$1;
(statearr_11442_13119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11429 === (3))){
var inst_11426 = (state_11428[(2)]);
var state_11428__$1 = state_11428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11428__$1,inst_11426);
} else {
if((state_val_11429 === (2))){
var state_11428__$1 = state_11428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11428__$1,(4),ch);
} else {
if((state_val_11429 === (9))){
var inst_11415 = (state_11428[(9)]);
var inst_11408 = inst_11415;
var state_11428__$1 = (function (){var statearr_11443 = state_11428;
(statearr_11443[(7)] = inst_11408);

return statearr_11443;
})();
var statearr_11444_13120 = state_11428__$1;
(statearr_11444_13120[(2)] = null);

(statearr_11444_13120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11429 === (5))){
var inst_11408 = (state_11428[(7)]);
var state_11428__$1 = state_11428;
var statearr_11445_13121 = state_11428__$1;
(statearr_11445_13121[(2)] = inst_11408);

(statearr_11445_13121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11429 === (10))){
var inst_11422 = (state_11428[(2)]);
var state_11428__$1 = state_11428;
var statearr_11446_13122 = state_11428__$1;
(statearr_11446_13122[(2)] = inst_11422);

(statearr_11446_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11429 === (8))){
var inst_11415 = (state_11428[(9)]);
var inst_11418 = cljs.core.deref(inst_11415);
var state_11428__$1 = state_11428;
var statearr_11447_13123 = state_11428__$1;
(statearr_11447_13123[(2)] = inst_11418);

(statearr_11447_13123[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10908__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10908__auto____0 = (function (){
var statearr_11448 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11448[(0)] = cljs$core$async$reduce_$_state_machine__10908__auto__);

(statearr_11448[(1)] = (1));

return statearr_11448;
});
var cljs$core$async$reduce_$_state_machine__10908__auto____1 = (function (state_11428){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11428);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11449){var ex__10911__auto__ = e11449;
var statearr_11450_13124 = state_11428;
(statearr_11450_13124[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11428[(4)]))){
var statearr_11451_13125 = state_11428;
(statearr_11451_13125[(1)] = cljs.core.first((state_11428[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13126 = state_11428;
state_11428 = G__13126;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10908__auto__ = function(state_11428){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10908__auto____1.call(this,state_11428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10908__auto____0;
cljs$core$async$reduce_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10908__auto____1;
return cljs$core$async$reduce_$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11452 = f__10965__auto__();
(statearr_11452[(6)] = c__10964__auto__);

return statearr_11452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));

return c__10964__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11464){
var state_val_11465 = (state_11464[(1)]);
if((state_val_11465 === (1))){
var inst_11459 = cljs.core.async.reduce(f__$1,init,ch);
var state_11464__$1 = state_11464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11464__$1,(2),inst_11459);
} else {
if((state_val_11465 === (2))){
var inst_11461 = (state_11464[(2)]);
var inst_11462 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11461) : f__$1.call(null,inst_11461));
var state_11464__$1 = state_11464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11464__$1,inst_11462);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10908__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10908__auto____0 = (function (){
var statearr_11466 = [null,null,null,null,null,null,null];
(statearr_11466[(0)] = cljs$core$async$transduce_$_state_machine__10908__auto__);

(statearr_11466[(1)] = (1));

return statearr_11466;
});
var cljs$core$async$transduce_$_state_machine__10908__auto____1 = (function (state_11464){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11464);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11467){var ex__10911__auto__ = e11467;
var statearr_11468_13127 = state_11464;
(statearr_11468_13127[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11464[(4)]))){
var statearr_11469_13128 = state_11464;
(statearr_11469_13128[(1)] = cljs.core.first((state_11464[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13129 = state_11464;
state_11464 = G__13129;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10908__auto__ = function(state_11464){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10908__auto____1.call(this,state_11464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10908__auto____0;
cljs$core$async$transduce_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10908__auto____1;
return cljs$core$async$transduce_$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11470 = f__10965__auto__();
(statearr_11470[(6)] = c__10964__auto__);

return statearr_11470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));

return c__10964__auto__;
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
var G__11472 = arguments.length;
switch (G__11472) {
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
var c__10964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11497){
var state_val_11498 = (state_11497[(1)]);
if((state_val_11498 === (7))){
var inst_11479 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11507_13131 = state_11497__$1;
(statearr_11507_13131[(2)] = inst_11479);

(statearr_11507_13131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (1))){
var inst_11473 = cljs.core.seq(coll);
var inst_11474 = inst_11473;
var state_11497__$1 = (function (){var statearr_11508 = state_11497;
(statearr_11508[(7)] = inst_11474);

return statearr_11508;
})();
var statearr_11509_13132 = state_11497__$1;
(statearr_11509_13132[(2)] = null);

(statearr_11509_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (4))){
var inst_11474 = (state_11497[(7)]);
var inst_11477 = cljs.core.first(inst_11474);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11497__$1,(7),ch,inst_11477);
} else {
if((state_val_11498 === (13))){
var inst_11491 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11510_13133 = state_11497__$1;
(statearr_11510_13133[(2)] = inst_11491);

(statearr_11510_13133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (6))){
var inst_11482 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
if(cljs.core.truth_(inst_11482)){
var statearr_11511_13134 = state_11497__$1;
(statearr_11511_13134[(1)] = (8));

} else {
var statearr_11512_13135 = state_11497__$1;
(statearr_11512_13135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (3))){
var inst_11495 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11497__$1,inst_11495);
} else {
if((state_val_11498 === (12))){
var state_11497__$1 = state_11497;
var statearr_11513_13136 = state_11497__$1;
(statearr_11513_13136[(2)] = null);

(statearr_11513_13136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (2))){
var inst_11474 = (state_11497[(7)]);
var state_11497__$1 = state_11497;
if(cljs.core.truth_(inst_11474)){
var statearr_11514_13137 = state_11497__$1;
(statearr_11514_13137[(1)] = (4));

} else {
var statearr_11515_13138 = state_11497__$1;
(statearr_11515_13138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (11))){
var inst_11488 = cljs.core.async.close_BANG_(ch);
var state_11497__$1 = state_11497;
var statearr_11516_13139 = state_11497__$1;
(statearr_11516_13139[(2)] = inst_11488);

(statearr_11516_13139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (9))){
var state_11497__$1 = state_11497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11517_13140 = state_11497__$1;
(statearr_11517_13140[(1)] = (11));

} else {
var statearr_11518_13141 = state_11497__$1;
(statearr_11518_13141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (5))){
var inst_11474 = (state_11497[(7)]);
var state_11497__$1 = state_11497;
var statearr_11519_13142 = state_11497__$1;
(statearr_11519_13142[(2)] = inst_11474);

(statearr_11519_13142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (10))){
var inst_11493 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11520_13143 = state_11497__$1;
(statearr_11520_13143[(2)] = inst_11493);

(statearr_11520_13143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (8))){
var inst_11474 = (state_11497[(7)]);
var inst_11484 = cljs.core.next(inst_11474);
var inst_11474__$1 = inst_11484;
var state_11497__$1 = (function (){var statearr_11521 = state_11497;
(statearr_11521[(7)] = inst_11474__$1);

return statearr_11521;
})();
var statearr_11522_13144 = state_11497__$1;
(statearr_11522_13144[(2)] = null);

(statearr_11522_13144[(1)] = (2));


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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_11523 = [null,null,null,null,null,null,null,null];
(statearr_11523[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_11523[(1)] = (1));

return statearr_11523;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_11497){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11497);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11524){var ex__10911__auto__ = e11524;
var statearr_11525_13145 = state_11497;
(statearr_11525_13145[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11497[(4)]))){
var statearr_11526_13146 = state_11497;
(statearr_11526_13146[(1)] = cljs.core.first((state_11497[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13147 = state_11497;
state_11497 = G__13147;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11527 = f__10965__auto__();
(statearr_11527[(6)] = c__10964__auto__);

return statearr_11527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));

return c__10964__auto__;
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
var G__11529 = arguments.length;
switch (G__11529) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13149 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13149(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13150 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13150(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13151 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13151(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13152 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13152(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11540 = (function (ch,cs,meta11541){
this.ch = ch;
this.cs = cs;
this.meta11541 = meta11541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11542,meta11541__$1){
var self__ = this;
var _11542__$1 = this;
return (new cljs.core.async.t_cljs$core$async11540(self__.ch,self__.cs,meta11541__$1));
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11542){
var self__ = this;
var _11542__$1 = this;
return self__.meta11541;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11541","meta11541",661674944,null)], null);
}));

(cljs.core.async.t_cljs$core$async11540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11540");

(cljs.core.async.t_cljs$core$async11540.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11540.
 */
cljs.core.async.__GT_t_cljs$core$async11540 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11540(ch__$1,cs__$1,meta11541){
return (new cljs.core.async.t_cljs$core$async11540(ch__$1,cs__$1,meta11541));
});

}

return (new cljs.core.async.t_cljs$core$async11540(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10964__auto___13153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11679){
var state_val_11680 = (state_11679[(1)]);
if((state_val_11680 === (7))){
var inst_11675 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11681_13154 = state_11679__$1;
(statearr_11681_13154[(2)] = inst_11675);

(statearr_11681_13154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (20))){
var inst_11577 = (state_11679[(7)]);
var inst_11592 = cljs.core.first(inst_11577);
var inst_11593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11592,(0),null);
var inst_11594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11592,(1),null);
var state_11679__$1 = (function (){var statearr_11682 = state_11679;
(statearr_11682[(8)] = inst_11593);

return statearr_11682;
})();
if(cljs.core.truth_(inst_11594)){
var statearr_11683_13155 = state_11679__$1;
(statearr_11683_13155[(1)] = (22));

} else {
var statearr_11684_13156 = state_11679__$1;
(statearr_11684_13156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (27))){
var inst_11546 = (state_11679[(9)]);
var inst_11624 = (state_11679[(10)]);
var inst_11622 = (state_11679[(11)]);
var inst_11629 = (state_11679[(12)]);
var inst_11629__$1 = cljs.core._nth(inst_11622,inst_11624);
var inst_11630 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11629__$1,inst_11546,done);
var state_11679__$1 = (function (){var statearr_11690 = state_11679;
(statearr_11690[(12)] = inst_11629__$1);

return statearr_11690;
})();
if(cljs.core.truth_(inst_11630)){
var statearr_11691_13157 = state_11679__$1;
(statearr_11691_13157[(1)] = (30));

} else {
var statearr_11692_13158 = state_11679__$1;
(statearr_11692_13158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (1))){
var state_11679__$1 = state_11679;
var statearr_11693_13159 = state_11679__$1;
(statearr_11693_13159[(2)] = null);

(statearr_11693_13159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (24))){
var inst_11577 = (state_11679[(7)]);
var inst_11599 = (state_11679[(2)]);
var inst_11600 = cljs.core.next(inst_11577);
var inst_11555 = inst_11600;
var inst_11556 = null;
var inst_11557 = (0);
var inst_11558 = (0);
var state_11679__$1 = (function (){var statearr_11694 = state_11679;
(statearr_11694[(13)] = inst_11556);

(statearr_11694[(14)] = inst_11557);

(statearr_11694[(15)] = inst_11555);

(statearr_11694[(16)] = inst_11558);

(statearr_11694[(17)] = inst_11599);

return statearr_11694;
})();
var statearr_11695_13160 = state_11679__$1;
(statearr_11695_13160[(2)] = null);

(statearr_11695_13160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (39))){
var state_11679__$1 = state_11679;
var statearr_11699_13161 = state_11679__$1;
(statearr_11699_13161[(2)] = null);

(statearr_11699_13161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (4))){
var inst_11546 = (state_11679[(9)]);
var inst_11546__$1 = (state_11679[(2)]);
var inst_11547 = (inst_11546__$1 == null);
var state_11679__$1 = (function (){var statearr_11700 = state_11679;
(statearr_11700[(9)] = inst_11546__$1);

return statearr_11700;
})();
if(cljs.core.truth_(inst_11547)){
var statearr_11701_13162 = state_11679__$1;
(statearr_11701_13162[(1)] = (5));

} else {
var statearr_11702_13163 = state_11679__$1;
(statearr_11702_13163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (15))){
var inst_11556 = (state_11679[(13)]);
var inst_11557 = (state_11679[(14)]);
var inst_11555 = (state_11679[(15)]);
var inst_11558 = (state_11679[(16)]);
var inst_11573 = (state_11679[(2)]);
var inst_11574 = (inst_11558 + (1));
var tmp11696 = inst_11556;
var tmp11697 = inst_11557;
var tmp11698 = inst_11555;
var inst_11555__$1 = tmp11698;
var inst_11556__$1 = tmp11696;
var inst_11557__$1 = tmp11697;
var inst_11558__$1 = inst_11574;
var state_11679__$1 = (function (){var statearr_11703 = state_11679;
(statearr_11703[(13)] = inst_11556__$1);

(statearr_11703[(14)] = inst_11557__$1);

(statearr_11703[(15)] = inst_11555__$1);

(statearr_11703[(16)] = inst_11558__$1);

(statearr_11703[(18)] = inst_11573);

return statearr_11703;
})();
var statearr_11704_13164 = state_11679__$1;
(statearr_11704_13164[(2)] = null);

(statearr_11704_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (21))){
var inst_11603 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11708_13165 = state_11679__$1;
(statearr_11708_13165[(2)] = inst_11603);

(statearr_11708_13165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (31))){
var inst_11629 = (state_11679[(12)]);
var inst_11633 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11629);
var state_11679__$1 = state_11679;
var statearr_11709_13166 = state_11679__$1;
(statearr_11709_13166[(2)] = inst_11633);

(statearr_11709_13166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (32))){
var inst_11624 = (state_11679[(10)]);
var inst_11623 = (state_11679[(19)]);
var inst_11622 = (state_11679[(11)]);
var inst_11621 = (state_11679[(20)]);
var inst_11635 = (state_11679[(2)]);
var inst_11636 = (inst_11624 + (1));
var tmp11705 = inst_11623;
var tmp11706 = inst_11622;
var tmp11707 = inst_11621;
var inst_11621__$1 = tmp11707;
var inst_11622__$1 = tmp11706;
var inst_11623__$1 = tmp11705;
var inst_11624__$1 = inst_11636;
var state_11679__$1 = (function (){var statearr_11710 = state_11679;
(statearr_11710[(10)] = inst_11624__$1);

(statearr_11710[(19)] = inst_11623__$1);

(statearr_11710[(21)] = inst_11635);

(statearr_11710[(11)] = inst_11622__$1);

(statearr_11710[(20)] = inst_11621__$1);

return statearr_11710;
})();
var statearr_11711_13168 = state_11679__$1;
(statearr_11711_13168[(2)] = null);

(statearr_11711_13168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (40))){
var inst_11648 = (state_11679[(22)]);
var inst_11652 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11648);
var state_11679__$1 = state_11679;
var statearr_11712_13169 = state_11679__$1;
(statearr_11712_13169[(2)] = inst_11652);

(statearr_11712_13169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (33))){
var inst_11639 = (state_11679[(23)]);
var inst_11641 = cljs.core.chunked_seq_QMARK_(inst_11639);
var state_11679__$1 = state_11679;
if(inst_11641){
var statearr_11713_13170 = state_11679__$1;
(statearr_11713_13170[(1)] = (36));

} else {
var statearr_11714_13171 = state_11679__$1;
(statearr_11714_13171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (13))){
var inst_11567 = (state_11679[(24)]);
var inst_11570 = cljs.core.async.close_BANG_(inst_11567);
var state_11679__$1 = state_11679;
var statearr_11715_13172 = state_11679__$1;
(statearr_11715_13172[(2)] = inst_11570);

(statearr_11715_13172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (22))){
var inst_11593 = (state_11679[(8)]);
var inst_11596 = cljs.core.async.close_BANG_(inst_11593);
var state_11679__$1 = state_11679;
var statearr_11716_13173 = state_11679__$1;
(statearr_11716_13173[(2)] = inst_11596);

(statearr_11716_13173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (36))){
var inst_11639 = (state_11679[(23)]);
var inst_11643 = cljs.core.chunk_first(inst_11639);
var inst_11644 = cljs.core.chunk_rest(inst_11639);
var inst_11645 = cljs.core.count(inst_11643);
var inst_11621 = inst_11644;
var inst_11622 = inst_11643;
var inst_11623 = inst_11645;
var inst_11624 = (0);
var state_11679__$1 = (function (){var statearr_11717 = state_11679;
(statearr_11717[(10)] = inst_11624);

(statearr_11717[(19)] = inst_11623);

(statearr_11717[(11)] = inst_11622);

(statearr_11717[(20)] = inst_11621);

return statearr_11717;
})();
var statearr_11718_13174 = state_11679__$1;
(statearr_11718_13174[(2)] = null);

(statearr_11718_13174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (41))){
var inst_11639 = (state_11679[(23)]);
var inst_11654 = (state_11679[(2)]);
var inst_11655 = cljs.core.next(inst_11639);
var inst_11621 = inst_11655;
var inst_11622 = null;
var inst_11623 = (0);
var inst_11624 = (0);
var state_11679__$1 = (function (){var statearr_11719 = state_11679;
(statearr_11719[(25)] = inst_11654);

(statearr_11719[(10)] = inst_11624);

(statearr_11719[(19)] = inst_11623);

(statearr_11719[(11)] = inst_11622);

(statearr_11719[(20)] = inst_11621);

return statearr_11719;
})();
var statearr_11720_13175 = state_11679__$1;
(statearr_11720_13175[(2)] = null);

(statearr_11720_13175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (43))){
var state_11679__$1 = state_11679;
var statearr_11722_13176 = state_11679__$1;
(statearr_11722_13176[(2)] = null);

(statearr_11722_13176[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (29))){
var inst_11663 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11723_13177 = state_11679__$1;
(statearr_11723_13177[(2)] = inst_11663);

(statearr_11723_13177[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (44))){
var inst_11672 = (state_11679[(2)]);
var state_11679__$1 = (function (){var statearr_11725 = state_11679;
(statearr_11725[(26)] = inst_11672);

return statearr_11725;
})();
var statearr_11727_13178 = state_11679__$1;
(statearr_11727_13178[(2)] = null);

(statearr_11727_13178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (6))){
var inst_11613 = (state_11679[(27)]);
var inst_11612 = cljs.core.deref(cs);
var inst_11613__$1 = cljs.core.keys(inst_11612);
var inst_11614 = cljs.core.count(inst_11613__$1);
var inst_11615 = cljs.core.reset_BANG_(dctr,inst_11614);
var inst_11620 = cljs.core.seq(inst_11613__$1);
var inst_11621 = inst_11620;
var inst_11622 = null;
var inst_11623 = (0);
var inst_11624 = (0);
var state_11679__$1 = (function (){var statearr_11728 = state_11679;
(statearr_11728[(28)] = inst_11615);

(statearr_11728[(27)] = inst_11613__$1);

(statearr_11728[(10)] = inst_11624);

(statearr_11728[(19)] = inst_11623);

(statearr_11728[(11)] = inst_11622);

(statearr_11728[(20)] = inst_11621);

return statearr_11728;
})();
var statearr_11729_13179 = state_11679__$1;
(statearr_11729_13179[(2)] = null);

(statearr_11729_13179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (28))){
var inst_11621 = (state_11679[(20)]);
var inst_11639 = (state_11679[(23)]);
var inst_11639__$1 = cljs.core.seq(inst_11621);
var state_11679__$1 = (function (){var statearr_11730 = state_11679;
(statearr_11730[(23)] = inst_11639__$1);

return statearr_11730;
})();
if(inst_11639__$1){
var statearr_11731_13180 = state_11679__$1;
(statearr_11731_13180[(1)] = (33));

} else {
var statearr_11732_13181 = state_11679__$1;
(statearr_11732_13181[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (25))){
var inst_11624 = (state_11679[(10)]);
var inst_11623 = (state_11679[(19)]);
var inst_11626 = (inst_11624 < inst_11623);
var inst_11627 = inst_11626;
var state_11679__$1 = state_11679;
if(cljs.core.truth_(inst_11627)){
var statearr_11733_13182 = state_11679__$1;
(statearr_11733_13182[(1)] = (27));

} else {
var statearr_11734_13183 = state_11679__$1;
(statearr_11734_13183[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (34))){
var state_11679__$1 = state_11679;
var statearr_11735_13184 = state_11679__$1;
(statearr_11735_13184[(2)] = null);

(statearr_11735_13184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (17))){
var state_11679__$1 = state_11679;
var statearr_11736_13185 = state_11679__$1;
(statearr_11736_13185[(2)] = null);

(statearr_11736_13185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (3))){
var inst_11677 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11679__$1,inst_11677);
} else {
if((state_val_11680 === (12))){
var inst_11608 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11737_13186 = state_11679__$1;
(statearr_11737_13186[(2)] = inst_11608);

(statearr_11737_13186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (2))){
var state_11679__$1 = state_11679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11679__$1,(4),ch);
} else {
if((state_val_11680 === (23))){
var state_11679__$1 = state_11679;
var statearr_11738_13187 = state_11679__$1;
(statearr_11738_13187[(2)] = null);

(statearr_11738_13187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (35))){
var inst_11661 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11739_13188 = state_11679__$1;
(statearr_11739_13188[(2)] = inst_11661);

(statearr_11739_13188[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (19))){
var inst_11577 = (state_11679[(7)]);
var inst_11581 = cljs.core.chunk_first(inst_11577);
var inst_11582 = cljs.core.chunk_rest(inst_11577);
var inst_11583 = cljs.core.count(inst_11581);
var inst_11555 = inst_11582;
var inst_11556 = inst_11581;
var inst_11557 = inst_11583;
var inst_11558 = (0);
var state_11679__$1 = (function (){var statearr_11740 = state_11679;
(statearr_11740[(13)] = inst_11556);

(statearr_11740[(14)] = inst_11557);

(statearr_11740[(15)] = inst_11555);

(statearr_11740[(16)] = inst_11558);

return statearr_11740;
})();
var statearr_11741_13189 = state_11679__$1;
(statearr_11741_13189[(2)] = null);

(statearr_11741_13189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (11))){
var inst_11577 = (state_11679[(7)]);
var inst_11555 = (state_11679[(15)]);
var inst_11577__$1 = cljs.core.seq(inst_11555);
var state_11679__$1 = (function (){var statearr_11742 = state_11679;
(statearr_11742[(7)] = inst_11577__$1);

return statearr_11742;
})();
if(inst_11577__$1){
var statearr_11743_13190 = state_11679__$1;
(statearr_11743_13190[(1)] = (16));

} else {
var statearr_11744_13192 = state_11679__$1;
(statearr_11744_13192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (9))){
var inst_11610 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11745_13193 = state_11679__$1;
(statearr_11745_13193[(2)] = inst_11610);

(statearr_11745_13193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (5))){
var inst_11553 = cljs.core.deref(cs);
var inst_11554 = cljs.core.seq(inst_11553);
var inst_11555 = inst_11554;
var inst_11556 = null;
var inst_11557 = (0);
var inst_11558 = (0);
var state_11679__$1 = (function (){var statearr_11746 = state_11679;
(statearr_11746[(13)] = inst_11556);

(statearr_11746[(14)] = inst_11557);

(statearr_11746[(15)] = inst_11555);

(statearr_11746[(16)] = inst_11558);

return statearr_11746;
})();
var statearr_11747_13194 = state_11679__$1;
(statearr_11747_13194[(2)] = null);

(statearr_11747_13194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (14))){
var state_11679__$1 = state_11679;
var statearr_11748_13195 = state_11679__$1;
(statearr_11748_13195[(2)] = null);

(statearr_11748_13195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (45))){
var inst_11669 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11749_13196 = state_11679__$1;
(statearr_11749_13196[(2)] = inst_11669);

(statearr_11749_13196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (26))){
var inst_11613 = (state_11679[(27)]);
var inst_11665 = (state_11679[(2)]);
var inst_11666 = cljs.core.seq(inst_11613);
var state_11679__$1 = (function (){var statearr_11750 = state_11679;
(statearr_11750[(29)] = inst_11665);

return statearr_11750;
})();
if(inst_11666){
var statearr_11751_13197 = state_11679__$1;
(statearr_11751_13197[(1)] = (42));

} else {
var statearr_11752_13198 = state_11679__$1;
(statearr_11752_13198[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (16))){
var inst_11577 = (state_11679[(7)]);
var inst_11579 = cljs.core.chunked_seq_QMARK_(inst_11577);
var state_11679__$1 = state_11679;
if(inst_11579){
var statearr_11753_13199 = state_11679__$1;
(statearr_11753_13199[(1)] = (19));

} else {
var statearr_11754_13200 = state_11679__$1;
(statearr_11754_13200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (38))){
var inst_11658 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11755_13201 = state_11679__$1;
(statearr_11755_13201[(2)] = inst_11658);

(statearr_11755_13201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (30))){
var state_11679__$1 = state_11679;
var statearr_11756_13202 = state_11679__$1;
(statearr_11756_13202[(2)] = null);

(statearr_11756_13202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (10))){
var inst_11556 = (state_11679[(13)]);
var inst_11558 = (state_11679[(16)]);
var inst_11566 = cljs.core._nth(inst_11556,inst_11558);
var inst_11567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11566,(0),null);
var inst_11568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11566,(1),null);
var state_11679__$1 = (function (){var statearr_11757 = state_11679;
(statearr_11757[(24)] = inst_11567);

return statearr_11757;
})();
if(cljs.core.truth_(inst_11568)){
var statearr_11758_13208 = state_11679__$1;
(statearr_11758_13208[(1)] = (13));

} else {
var statearr_11759_13209 = state_11679__$1;
(statearr_11759_13209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (18))){
var inst_11606 = (state_11679[(2)]);
var state_11679__$1 = state_11679;
var statearr_11760_13211 = state_11679__$1;
(statearr_11760_13211[(2)] = inst_11606);

(statearr_11760_13211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (42))){
var state_11679__$1 = state_11679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11679__$1,(45),dchan);
} else {
if((state_val_11680 === (37))){
var inst_11546 = (state_11679[(9)]);
var inst_11648 = (state_11679[(22)]);
var inst_11639 = (state_11679[(23)]);
var inst_11648__$1 = cljs.core.first(inst_11639);
var inst_11649 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11648__$1,inst_11546,done);
var state_11679__$1 = (function (){var statearr_11761 = state_11679;
(statearr_11761[(22)] = inst_11648__$1);

return statearr_11761;
})();
if(cljs.core.truth_(inst_11649)){
var statearr_11762_13212 = state_11679__$1;
(statearr_11762_13212[(1)] = (39));

} else {
var statearr_11763_13213 = state_11679__$1;
(statearr_11763_13213[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11680 === (8))){
var inst_11557 = (state_11679[(14)]);
var inst_11558 = (state_11679[(16)]);
var inst_11560 = (inst_11558 < inst_11557);
var inst_11561 = inst_11560;
var state_11679__$1 = state_11679;
if(cljs.core.truth_(inst_11561)){
var statearr_11764_13216 = state_11679__$1;
(statearr_11764_13216[(1)] = (10));

} else {
var statearr_11765_13217 = state_11679__$1;
(statearr_11765_13217[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10908__auto__ = null;
var cljs$core$async$mult_$_state_machine__10908__auto____0 = (function (){
var statearr_11766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11766[(0)] = cljs$core$async$mult_$_state_machine__10908__auto__);

(statearr_11766[(1)] = (1));

return statearr_11766;
});
var cljs$core$async$mult_$_state_machine__10908__auto____1 = (function (state_11679){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11679);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11771){var ex__10911__auto__ = e11771;
var statearr_11772_13218 = state_11679;
(statearr_11772_13218[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11679[(4)]))){
var statearr_11773_13219 = state_11679;
(statearr_11773_13219[(1)] = cljs.core.first((state_11679[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13220 = state_11679;
state_11679 = G__13220;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10908__auto__ = function(state_11679){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10908__auto____1.call(this,state_11679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10908__auto____0;
cljs$core$async$mult_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10908__auto____1;
return cljs$core$async$mult_$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11782 = f__10965__auto__();
(statearr_11782[(6)] = c__10964__auto___13153);

return statearr_11782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var G__11784 = arguments.length;
switch (G__11784) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13222 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13222(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13223 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13223(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13224 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13224(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13225 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13225(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13226 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13226(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13227 = arguments.length;
var i__4737__auto___13228 = (0);
while(true){
if((i__4737__auto___13228 < len__4736__auto___13227)){
args__4742__auto__.push((arguments[i__4737__auto___13228]));

var G__13229 = (i__4737__auto___13228 + (1));
i__4737__auto___13228 = G__13229;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11792){
var map__11793 = p__11792;
var map__11793__$1 = (((((!((map__11793 == null))))?(((((map__11793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11793):map__11793);
var opts = map__11793__$1;
var statearr_11795_13230 = state;
(statearr_11795_13230[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11796_13231 = state;
(statearr_11796_13231[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11797_13232 = state;
(statearr_11797_13232[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11788){
var G__11789 = cljs.core.first(seq11788);
var seq11788__$1 = cljs.core.next(seq11788);
var G__11790 = cljs.core.first(seq11788__$1);
var seq11788__$2 = cljs.core.next(seq11788__$1);
var G__11791 = cljs.core.first(seq11788__$2);
var seq11788__$3 = cljs.core.next(seq11788__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11789,G__11790,G__11791,seq11788__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11806 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11807){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11807 = meta11807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11808,meta11807__$1){
var self__ = this;
var _11808__$1 = this;
return (new cljs.core.async.t_cljs$core$async11806(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11807__$1));
}));

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11808){
var self__ = this;
var _11808__$1 = this;
return self__.meta11807;
}));

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11806.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11807","meta11807",-325126706,null)], null);
}));

(cljs.core.async.t_cljs$core$async11806.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11806");

(cljs.core.async.t_cljs$core$async11806.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11806");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11806.
 */
cljs.core.async.__GT_t_cljs$core$async11806 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11806(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11807){
return (new cljs.core.async.t_cljs$core$async11806(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11807));
});

}

return (new cljs.core.async.t_cljs$core$async11806(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10964__auto___13250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_11915){
var state_val_11916 = (state_11915[(1)]);
if((state_val_11916 === (7))){
var inst_11826 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
var statearr_11917_13252 = state_11915__$1;
(statearr_11917_13252[(2)] = inst_11826);

(statearr_11917_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (20))){
var inst_11838 = (state_11915[(7)]);
var state_11915__$1 = state_11915;
var statearr_11918_13253 = state_11915__$1;
(statearr_11918_13253[(2)] = inst_11838);

(statearr_11918_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (27))){
var state_11915__$1 = state_11915;
var statearr_11919_13254 = state_11915__$1;
(statearr_11919_13254[(2)] = null);

(statearr_11919_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (1))){
var inst_11813 = (state_11915[(8)]);
var inst_11813__$1 = calc_state();
var inst_11815 = (inst_11813__$1 == null);
var inst_11816 = cljs.core.not(inst_11815);
var state_11915__$1 = (function (){var statearr_11920 = state_11915;
(statearr_11920[(8)] = inst_11813__$1);

return statearr_11920;
})();
if(inst_11816){
var statearr_11921_13255 = state_11915__$1;
(statearr_11921_13255[(1)] = (2));

} else {
var statearr_11922_13256 = state_11915__$1;
(statearr_11922_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (24))){
var inst_11889 = (state_11915[(9)]);
var inst_11875 = (state_11915[(10)]);
var inst_11862 = (state_11915[(11)]);
var inst_11889__$1 = (inst_11862.cljs$core$IFn$_invoke$arity$1 ? inst_11862.cljs$core$IFn$_invoke$arity$1(inst_11875) : inst_11862.call(null,inst_11875));
var state_11915__$1 = (function (){var statearr_11923 = state_11915;
(statearr_11923[(9)] = inst_11889__$1);

return statearr_11923;
})();
if(cljs.core.truth_(inst_11889__$1)){
var statearr_11924_13257 = state_11915__$1;
(statearr_11924_13257[(1)] = (29));

} else {
var statearr_11925_13258 = state_11915__$1;
(statearr_11925_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (4))){
var inst_11829 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
if(cljs.core.truth_(inst_11829)){
var statearr_11926_13259 = state_11915__$1;
(statearr_11926_13259[(1)] = (8));

} else {
var statearr_11927_13260 = state_11915__$1;
(statearr_11927_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (15))){
var inst_11856 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
if(cljs.core.truth_(inst_11856)){
var statearr_11928_13261 = state_11915__$1;
(statearr_11928_13261[(1)] = (19));

} else {
var statearr_11929_13262 = state_11915__$1;
(statearr_11929_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (21))){
var inst_11861 = (state_11915[(12)]);
var inst_11861__$1 = (state_11915[(2)]);
var inst_11862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11861__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11861__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11861__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11915__$1 = (function (){var statearr_11930 = state_11915;
(statearr_11930[(12)] = inst_11861__$1);

(statearr_11930[(11)] = inst_11862);

(statearr_11930[(13)] = inst_11863);

return statearr_11930;
})();
return cljs.core.async.ioc_alts_BANG_(state_11915__$1,(22),inst_11864);
} else {
if((state_val_11916 === (31))){
var inst_11897 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
if(cljs.core.truth_(inst_11897)){
var statearr_11931_13263 = state_11915__$1;
(statearr_11931_13263[(1)] = (32));

} else {
var statearr_11932_13264 = state_11915__$1;
(statearr_11932_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (32))){
var inst_11874 = (state_11915[(14)]);
var state_11915__$1 = state_11915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11915__$1,(35),out,inst_11874);
} else {
if((state_val_11916 === (33))){
var inst_11861 = (state_11915[(12)]);
var inst_11838 = inst_11861;
var state_11915__$1 = (function (){var statearr_11933 = state_11915;
(statearr_11933[(7)] = inst_11838);

return statearr_11933;
})();
var statearr_11934_13265 = state_11915__$1;
(statearr_11934_13265[(2)] = null);

(statearr_11934_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (13))){
var inst_11838 = (state_11915[(7)]);
var inst_11845 = inst_11838.cljs$lang$protocol_mask$partition0$;
var inst_11846 = (inst_11845 & (64));
var inst_11847 = inst_11838.cljs$core$ISeq$;
var inst_11848 = (cljs.core.PROTOCOL_SENTINEL === inst_11847);
var inst_11849 = ((inst_11846) || (inst_11848));
var state_11915__$1 = state_11915;
if(cljs.core.truth_(inst_11849)){
var statearr_11935_13266 = state_11915__$1;
(statearr_11935_13266[(1)] = (16));

} else {
var statearr_11936_13267 = state_11915__$1;
(statearr_11936_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (22))){
var inst_11874 = (state_11915[(14)]);
var inst_11875 = (state_11915[(10)]);
var inst_11873 = (state_11915[(2)]);
var inst_11874__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11873,(0),null);
var inst_11875__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11873,(1),null);
var inst_11876 = (inst_11874__$1 == null);
var inst_11877 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11875__$1,change);
var inst_11878 = ((inst_11876) || (inst_11877));
var state_11915__$1 = (function (){var statearr_11937 = state_11915;
(statearr_11937[(14)] = inst_11874__$1);

(statearr_11937[(10)] = inst_11875__$1);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11878)){
var statearr_11938_13268 = state_11915__$1;
(statearr_11938_13268[(1)] = (23));

} else {
var statearr_11939_13269 = state_11915__$1;
(statearr_11939_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (36))){
var inst_11861 = (state_11915[(12)]);
var inst_11838 = inst_11861;
var state_11915__$1 = (function (){var statearr_11940 = state_11915;
(statearr_11940[(7)] = inst_11838);

return statearr_11940;
})();
var statearr_11941_13270 = state_11915__$1;
(statearr_11941_13270[(2)] = null);

(statearr_11941_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (29))){
var inst_11889 = (state_11915[(9)]);
var state_11915__$1 = state_11915;
var statearr_11942_13271 = state_11915__$1;
(statearr_11942_13271[(2)] = inst_11889);

(statearr_11942_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (6))){
var state_11915__$1 = state_11915;
var statearr_11943_13272 = state_11915__$1;
(statearr_11943_13272[(2)] = false);

(statearr_11943_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (28))){
var inst_11885 = (state_11915[(2)]);
var inst_11886 = calc_state();
var inst_11838 = inst_11886;
var state_11915__$1 = (function (){var statearr_11944 = state_11915;
(statearr_11944[(15)] = inst_11885);

(statearr_11944[(7)] = inst_11838);

return statearr_11944;
})();
var statearr_11945_13273 = state_11915__$1;
(statearr_11945_13273[(2)] = null);

(statearr_11945_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (25))){
var inst_11911 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
var statearr_11946_13274 = state_11915__$1;
(statearr_11946_13274[(2)] = inst_11911);

(statearr_11946_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (34))){
var inst_11909 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
var statearr_11947_13275 = state_11915__$1;
(statearr_11947_13275[(2)] = inst_11909);

(statearr_11947_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (17))){
var state_11915__$1 = state_11915;
var statearr_11948_13276 = state_11915__$1;
(statearr_11948_13276[(2)] = false);

(statearr_11948_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (3))){
var state_11915__$1 = state_11915;
var statearr_11952_13277 = state_11915__$1;
(statearr_11952_13277[(2)] = false);

(statearr_11952_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (12))){
var inst_11913 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11915__$1,inst_11913);
} else {
if((state_val_11916 === (2))){
var inst_11813 = (state_11915[(8)]);
var inst_11818 = inst_11813.cljs$lang$protocol_mask$partition0$;
var inst_11819 = (inst_11818 & (64));
var inst_11820 = inst_11813.cljs$core$ISeq$;
var inst_11821 = (cljs.core.PROTOCOL_SENTINEL === inst_11820);
var inst_11822 = ((inst_11819) || (inst_11821));
var state_11915__$1 = state_11915;
if(cljs.core.truth_(inst_11822)){
var statearr_11953_13278 = state_11915__$1;
(statearr_11953_13278[(1)] = (5));

} else {
var statearr_11954_13279 = state_11915__$1;
(statearr_11954_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (23))){
var inst_11874 = (state_11915[(14)]);
var inst_11880 = (inst_11874 == null);
var state_11915__$1 = state_11915;
if(cljs.core.truth_(inst_11880)){
var statearr_11955_13280 = state_11915__$1;
(statearr_11955_13280[(1)] = (26));

} else {
var statearr_11956_13281 = state_11915__$1;
(statearr_11956_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (35))){
var inst_11900 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
if(cljs.core.truth_(inst_11900)){
var statearr_11957_13282 = state_11915__$1;
(statearr_11957_13282[(1)] = (36));

} else {
var statearr_11958_13283 = state_11915__$1;
(statearr_11958_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (19))){
var inst_11838 = (state_11915[(7)]);
var inst_11858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11838);
var state_11915__$1 = state_11915;
var statearr_11959_13284 = state_11915__$1;
(statearr_11959_13284[(2)] = inst_11858);

(statearr_11959_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (11))){
var inst_11838 = (state_11915[(7)]);
var inst_11842 = (inst_11838 == null);
var inst_11843 = cljs.core.not(inst_11842);
var state_11915__$1 = state_11915;
if(inst_11843){
var statearr_11960_13285 = state_11915__$1;
(statearr_11960_13285[(1)] = (13));

} else {
var statearr_11961_13286 = state_11915__$1;
(statearr_11961_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (9))){
var inst_11813 = (state_11915[(8)]);
var state_11915__$1 = state_11915;
var statearr_11962_13287 = state_11915__$1;
(statearr_11962_13287[(2)] = inst_11813);

(statearr_11962_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (5))){
var state_11915__$1 = state_11915;
var statearr_11963_13288 = state_11915__$1;
(statearr_11963_13288[(2)] = true);

(statearr_11963_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (14))){
var state_11915__$1 = state_11915;
var statearr_11964_13289 = state_11915__$1;
(statearr_11964_13289[(2)] = false);

(statearr_11964_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (26))){
var inst_11875 = (state_11915[(10)]);
var inst_11882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11875);
var state_11915__$1 = state_11915;
var statearr_11965_13290 = state_11915__$1;
(statearr_11965_13290[(2)] = inst_11882);

(statearr_11965_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (16))){
var state_11915__$1 = state_11915;
var statearr_11966_13291 = state_11915__$1;
(statearr_11966_13291[(2)] = true);

(statearr_11966_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (38))){
var inst_11905 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
var statearr_11967_13292 = state_11915__$1;
(statearr_11967_13292[(2)] = inst_11905);

(statearr_11967_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (30))){
var inst_11875 = (state_11915[(10)]);
var inst_11862 = (state_11915[(11)]);
var inst_11863 = (state_11915[(13)]);
var inst_11892 = cljs.core.empty_QMARK_(inst_11862);
var inst_11893 = (inst_11863.cljs$core$IFn$_invoke$arity$1 ? inst_11863.cljs$core$IFn$_invoke$arity$1(inst_11875) : inst_11863.call(null,inst_11875));
var inst_11894 = cljs.core.not(inst_11893);
var inst_11895 = ((inst_11892) && (inst_11894));
var state_11915__$1 = state_11915;
var statearr_11968_13293 = state_11915__$1;
(statearr_11968_13293[(2)] = inst_11895);

(statearr_11968_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (10))){
var inst_11813 = (state_11915[(8)]);
var inst_11834 = (state_11915[(2)]);
var inst_11835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11838 = inst_11813;
var state_11915__$1 = (function (){var statearr_11969 = state_11915;
(statearr_11969[(16)] = inst_11837);

(statearr_11969[(17)] = inst_11835);

(statearr_11969[(18)] = inst_11836);

(statearr_11969[(7)] = inst_11838);

return statearr_11969;
})();
var statearr_11970_13294 = state_11915__$1;
(statearr_11970_13294[(2)] = null);

(statearr_11970_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (18))){
var inst_11853 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
var statearr_11971_13295 = state_11915__$1;
(statearr_11971_13295[(2)] = inst_11853);

(statearr_11971_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (37))){
var state_11915__$1 = state_11915;
var statearr_11972_13296 = state_11915__$1;
(statearr_11972_13296[(2)] = null);

(statearr_11972_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (8))){
var inst_11813 = (state_11915[(8)]);
var inst_11831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11813);
var state_11915__$1 = state_11915;
var statearr_11973_13297 = state_11915__$1;
(statearr_11973_13297[(2)] = inst_11831);

(statearr_11973_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10908__auto__ = null;
var cljs$core$async$mix_$_state_machine__10908__auto____0 = (function (){
var statearr_11974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11974[(0)] = cljs$core$async$mix_$_state_machine__10908__auto__);

(statearr_11974[(1)] = (1));

return statearr_11974;
});
var cljs$core$async$mix_$_state_machine__10908__auto____1 = (function (state_11915){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_11915);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e11975){var ex__10911__auto__ = e11975;
var statearr_11976_13298 = state_11915;
(statearr_11976_13298[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_11915[(4)]))){
var statearr_11977_13299 = state_11915;
(statearr_11977_13299[(1)] = cljs.core.first((state_11915[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_11915;
state_11915 = G__13300;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10908__auto__ = function(state_11915){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10908__auto____1.call(this,state_11915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10908__auto____0;
cljs$core$async$mix_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10908__auto____1;
return cljs$core$async$mix_$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_11978 = f__10965__auto__();
(statearr_11978[(6)] = c__10964__auto___13250);

return statearr_11978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var G__11984 = arguments.length;
switch (G__11984) {
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
var G__11987 = arguments.length;
switch (G__11987) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11985_SHARP_){
if(cljs.core.truth_((p1__11985_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11985_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11985_SHARP_.call(null,topic)))){
return p1__11985_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11985_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11989 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11990){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11990 = meta11990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11991,meta11990__$1){
var self__ = this;
var _11991__$1 = this;
return (new cljs.core.async.t_cljs$core$async11989(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11990__$1));
}));

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11991){
var self__ = this;
var _11991__$1 = this;
return self__.meta11990;
}));

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11989.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11990","meta11990",-287807930,null)], null);
}));

(cljs.core.async.t_cljs$core$async11989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11989");

(cljs.core.async.t_cljs$core$async11989.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11989.
 */
cljs.core.async.__GT_t_cljs$core$async11989 = (function cljs$core$async$__GT_t_cljs$core$async11989(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11990){
return (new cljs.core.async.t_cljs$core$async11989(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11990));
});

}

return (new cljs.core.async.t_cljs$core$async11989(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10964__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12096){
var state_val_12113 = (state_12096[(1)]);
if((state_val_12113 === (7))){
var inst_12092 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12114_13308 = state_12096__$1;
(statearr_12114_13308[(2)] = inst_12092);

(statearr_12114_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (20))){
var state_12096__$1 = state_12096;
var statearr_12115_13309 = state_12096__$1;
(statearr_12115_13309[(2)] = null);

(statearr_12115_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (1))){
var state_12096__$1 = state_12096;
var statearr_12116_13310 = state_12096__$1;
(statearr_12116_13310[(2)] = null);

(statearr_12116_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (24))){
var inst_12075 = (state_12096[(7)]);
var inst_12084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12075);
var state_12096__$1 = state_12096;
var statearr_12117_13311 = state_12096__$1;
(statearr_12117_13311[(2)] = inst_12084);

(statearr_12117_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (4))){
var inst_12011 = (state_12096[(8)]);
var inst_12011__$1 = (state_12096[(2)]);
var inst_12022 = (inst_12011__$1 == null);
var state_12096__$1 = (function (){var statearr_12118 = state_12096;
(statearr_12118[(8)] = inst_12011__$1);

return statearr_12118;
})();
if(cljs.core.truth_(inst_12022)){
var statearr_12119_13312 = state_12096__$1;
(statearr_12119_13312[(1)] = (5));

} else {
var statearr_12120_13313 = state_12096__$1;
(statearr_12120_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (15))){
var inst_12069 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12121_13314 = state_12096__$1;
(statearr_12121_13314[(2)] = inst_12069);

(statearr_12121_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (21))){
var inst_12089 = (state_12096[(2)]);
var state_12096__$1 = (function (){var statearr_12122 = state_12096;
(statearr_12122[(9)] = inst_12089);

return statearr_12122;
})();
var statearr_12123_13315 = state_12096__$1;
(statearr_12123_13315[(2)] = null);

(statearr_12123_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (13))){
var inst_12048 = (state_12096[(10)]);
var inst_12050 = cljs.core.chunked_seq_QMARK_(inst_12048);
var state_12096__$1 = state_12096;
if(inst_12050){
var statearr_12124_13316 = state_12096__$1;
(statearr_12124_13316[(1)] = (16));

} else {
var statearr_12125_13317 = state_12096__$1;
(statearr_12125_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (22))){
var inst_12081 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
if(cljs.core.truth_(inst_12081)){
var statearr_12126_13318 = state_12096__$1;
(statearr_12126_13318[(1)] = (23));

} else {
var statearr_12127_13319 = state_12096__$1;
(statearr_12127_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (6))){
var inst_12011 = (state_12096[(8)]);
var inst_12077 = (state_12096[(11)]);
var inst_12075 = (state_12096[(7)]);
var inst_12075__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12011) : topic_fn.call(null,inst_12011));
var inst_12076 = cljs.core.deref(mults);
var inst_12077__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12076,inst_12075__$1);
var state_12096__$1 = (function (){var statearr_12128 = state_12096;
(statearr_12128[(11)] = inst_12077__$1);

(statearr_12128[(7)] = inst_12075__$1);

return statearr_12128;
})();
if(cljs.core.truth_(inst_12077__$1)){
var statearr_12129_13320 = state_12096__$1;
(statearr_12129_13320[(1)] = (19));

} else {
var statearr_12130_13321 = state_12096__$1;
(statearr_12130_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (25))){
var inst_12086 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12131_13322 = state_12096__$1;
(statearr_12131_13322[(2)] = inst_12086);

(statearr_12131_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (17))){
var inst_12048 = (state_12096[(10)]);
var inst_12059 = cljs.core.first(inst_12048);
var inst_12060 = cljs.core.async.muxch_STAR_(inst_12059);
var inst_12061 = cljs.core.async.close_BANG_(inst_12060);
var inst_12062 = cljs.core.next(inst_12048);
var inst_12032 = inst_12062;
var inst_12033 = null;
var inst_12034 = (0);
var inst_12035 = (0);
var state_12096__$1 = (function (){var statearr_12132 = state_12096;
(statearr_12132[(12)] = inst_12033);

(statearr_12132[(13)] = inst_12035);

(statearr_12132[(14)] = inst_12061);

(statearr_12132[(15)] = inst_12032);

(statearr_12132[(16)] = inst_12034);

return statearr_12132;
})();
var statearr_12133_13323 = state_12096__$1;
(statearr_12133_13323[(2)] = null);

(statearr_12133_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (3))){
var inst_12094 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12096__$1,inst_12094);
} else {
if((state_val_12113 === (12))){
var inst_12071 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12136_13324 = state_12096__$1;
(statearr_12136_13324[(2)] = inst_12071);

(statearr_12136_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (2))){
var state_12096__$1 = state_12096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12096__$1,(4),ch);
} else {
if((state_val_12113 === (23))){
var state_12096__$1 = state_12096;
var statearr_12137_13325 = state_12096__$1;
(statearr_12137_13325[(2)] = null);

(statearr_12137_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (19))){
var inst_12011 = (state_12096[(8)]);
var inst_12077 = (state_12096[(11)]);
var inst_12079 = cljs.core.async.muxch_STAR_(inst_12077);
var state_12096__$1 = state_12096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12096__$1,(22),inst_12079,inst_12011);
} else {
if((state_val_12113 === (11))){
var inst_12032 = (state_12096[(15)]);
var inst_12048 = (state_12096[(10)]);
var inst_12048__$1 = cljs.core.seq(inst_12032);
var state_12096__$1 = (function (){var statearr_12146 = state_12096;
(statearr_12146[(10)] = inst_12048__$1);

return statearr_12146;
})();
if(inst_12048__$1){
var statearr_12147_13326 = state_12096__$1;
(statearr_12147_13326[(1)] = (13));

} else {
var statearr_12148_13327 = state_12096__$1;
(statearr_12148_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (9))){
var inst_12073 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12149_13328 = state_12096__$1;
(statearr_12149_13328[(2)] = inst_12073);

(statearr_12149_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (5))){
var inst_12029 = cljs.core.deref(mults);
var inst_12030 = cljs.core.vals(inst_12029);
var inst_12031 = cljs.core.seq(inst_12030);
var inst_12032 = inst_12031;
var inst_12033 = null;
var inst_12034 = (0);
var inst_12035 = (0);
var state_12096__$1 = (function (){var statearr_12150 = state_12096;
(statearr_12150[(12)] = inst_12033);

(statearr_12150[(13)] = inst_12035);

(statearr_12150[(15)] = inst_12032);

(statearr_12150[(16)] = inst_12034);

return statearr_12150;
})();
var statearr_12151_13329 = state_12096__$1;
(statearr_12151_13329[(2)] = null);

(statearr_12151_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (14))){
var state_12096__$1 = state_12096;
var statearr_12155_13330 = state_12096__$1;
(statearr_12155_13330[(2)] = null);

(statearr_12155_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (16))){
var inst_12048 = (state_12096[(10)]);
var inst_12052 = cljs.core.chunk_first(inst_12048);
var inst_12053 = cljs.core.chunk_rest(inst_12048);
var inst_12054 = cljs.core.count(inst_12052);
var inst_12032 = inst_12053;
var inst_12033 = inst_12052;
var inst_12034 = inst_12054;
var inst_12035 = (0);
var state_12096__$1 = (function (){var statearr_12156 = state_12096;
(statearr_12156[(12)] = inst_12033);

(statearr_12156[(13)] = inst_12035);

(statearr_12156[(15)] = inst_12032);

(statearr_12156[(16)] = inst_12034);

return statearr_12156;
})();
var statearr_12157_13331 = state_12096__$1;
(statearr_12157_13331[(2)] = null);

(statearr_12157_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (10))){
var inst_12033 = (state_12096[(12)]);
var inst_12035 = (state_12096[(13)]);
var inst_12032 = (state_12096[(15)]);
var inst_12034 = (state_12096[(16)]);
var inst_12040 = cljs.core._nth(inst_12033,inst_12035);
var inst_12041 = cljs.core.async.muxch_STAR_(inst_12040);
var inst_12042 = cljs.core.async.close_BANG_(inst_12041);
var inst_12045 = (inst_12035 + (1));
var tmp12152 = inst_12033;
var tmp12153 = inst_12032;
var tmp12154 = inst_12034;
var inst_12032__$1 = tmp12153;
var inst_12033__$1 = tmp12152;
var inst_12034__$1 = tmp12154;
var inst_12035__$1 = inst_12045;
var state_12096__$1 = (function (){var statearr_12158 = state_12096;
(statearr_12158[(12)] = inst_12033__$1);

(statearr_12158[(13)] = inst_12035__$1);

(statearr_12158[(17)] = inst_12042);

(statearr_12158[(15)] = inst_12032__$1);

(statearr_12158[(16)] = inst_12034__$1);

return statearr_12158;
})();
var statearr_12159_13332 = state_12096__$1;
(statearr_12159_13332[(2)] = null);

(statearr_12159_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (18))){
var inst_12066 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12160_13333 = state_12096__$1;
(statearr_12160_13333[(2)] = inst_12066);

(statearr_12160_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (8))){
var inst_12035 = (state_12096[(13)]);
var inst_12034 = (state_12096[(16)]);
var inst_12037 = (inst_12035 < inst_12034);
var inst_12038 = inst_12037;
var state_12096__$1 = state_12096;
if(cljs.core.truth_(inst_12038)){
var statearr_12161_13334 = state_12096__$1;
(statearr_12161_13334[(1)] = (10));

} else {
var statearr_12162_13335 = state_12096__$1;
(statearr_12162_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12163[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12163[(1)] = (1));

return statearr_12163;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12096){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12096);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12164){var ex__10911__auto__ = e12164;
var statearr_12177_13336 = state_12096;
(statearr_12177_13336[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12096[(4)]))){
var statearr_12178_13337 = state_12096;
(statearr_12178_13337[(1)] = cljs.core.first((state_12096[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12096;
state_12096 = G__13338;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12179 = f__10965__auto__();
(statearr_12179[(6)] = c__10964__auto___13307);

return statearr_12179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var G__12181 = arguments.length;
switch (G__12181) {
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
var G__12183 = arguments.length;
switch (G__12183) {
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
var G__12185 = arguments.length;
switch (G__12185) {
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
var c__10964__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12239){
var state_val_12240 = (state_12239[(1)]);
if((state_val_12240 === (7))){
var state_12239__$1 = state_12239;
var statearr_12242_13343 = state_12239__$1;
(statearr_12242_13343[(2)] = null);

(statearr_12242_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (1))){
var state_12239__$1 = state_12239;
var statearr_12243_13344 = state_12239__$1;
(statearr_12243_13344[(2)] = null);

(statearr_12243_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (4))){
var inst_12199 = (state_12239[(7)]);
var inst_12200 = (state_12239[(8)]);
var inst_12202 = (inst_12200 < inst_12199);
var state_12239__$1 = state_12239;
if(cljs.core.truth_(inst_12202)){
var statearr_12244_13345 = state_12239__$1;
(statearr_12244_13345[(1)] = (6));

} else {
var statearr_12245_13346 = state_12239__$1;
(statearr_12245_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (15))){
var inst_12225 = (state_12239[(9)]);
var inst_12230 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12225);
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12239__$1,(17),out,inst_12230);
} else {
if((state_val_12240 === (13))){
var inst_12225 = (state_12239[(9)]);
var inst_12225__$1 = (state_12239[(2)]);
var inst_12226 = cljs.core.some(cljs.core.nil_QMARK_,inst_12225__$1);
var state_12239__$1 = (function (){var statearr_12246 = state_12239;
(statearr_12246[(9)] = inst_12225__$1);

return statearr_12246;
})();
if(cljs.core.truth_(inst_12226)){
var statearr_12247_13347 = state_12239__$1;
(statearr_12247_13347[(1)] = (14));

} else {
var statearr_12248_13348 = state_12239__$1;
(statearr_12248_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (6))){
var state_12239__$1 = state_12239;
var statearr_12249_13349 = state_12239__$1;
(statearr_12249_13349[(2)] = null);

(statearr_12249_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (17))){
var inst_12232 = (state_12239[(2)]);
var state_12239__$1 = (function (){var statearr_12255 = state_12239;
(statearr_12255[(10)] = inst_12232);

return statearr_12255;
})();
var statearr_12256_13350 = state_12239__$1;
(statearr_12256_13350[(2)] = null);

(statearr_12256_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (3))){
var inst_12237 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12239__$1,inst_12237);
} else {
if((state_val_12240 === (12))){
var _ = (function (){var statearr_12257 = state_12239;
(statearr_12257[(4)] = cljs.core.rest((state_12239[(4)])));

return statearr_12257;
})();
var state_12239__$1 = state_12239;
var ex12254 = (state_12239__$1[(2)]);
var statearr_12258_13351 = state_12239__$1;
(statearr_12258_13351[(5)] = ex12254);


if((ex12254 instanceof Object)){
var statearr_12259_13352 = state_12239__$1;
(statearr_12259_13352[(1)] = (11));

(statearr_12259_13352[(5)] = null);

} else {
throw ex12254;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (2))){
var inst_12198 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12199 = cnt;
var inst_12200 = (0);
var state_12239__$1 = (function (){var statearr_12260 = state_12239;
(statearr_12260[(7)] = inst_12199);

(statearr_12260[(8)] = inst_12200);

(statearr_12260[(11)] = inst_12198);

return statearr_12260;
})();
var statearr_12261_13353 = state_12239__$1;
(statearr_12261_13353[(2)] = null);

(statearr_12261_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (11))){
var inst_12204 = (state_12239[(2)]);
var inst_12205 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12239__$1 = (function (){var statearr_12262 = state_12239;
(statearr_12262[(12)] = inst_12204);

return statearr_12262;
})();
var statearr_12263_13354 = state_12239__$1;
(statearr_12263_13354[(2)] = inst_12205);

(statearr_12263_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (9))){
var inst_12200 = (state_12239[(8)]);
var _ = (function (){var statearr_12264 = state_12239;
(statearr_12264[(4)] = cljs.core.cons((12),(state_12239[(4)])));

return statearr_12264;
})();
var inst_12211 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12200) : chs__$1.call(null,inst_12200));
var inst_12212 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12200) : done.call(null,inst_12200));
var inst_12213 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12211,inst_12212);
var ___$1 = (function (){var statearr_12265 = state_12239;
(statearr_12265[(4)] = cljs.core.rest((state_12239[(4)])));

return statearr_12265;
})();
var state_12239__$1 = state_12239;
var statearr_12266_13355 = state_12239__$1;
(statearr_12266_13355[(2)] = inst_12213);

(statearr_12266_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (5))){
var inst_12223 = (state_12239[(2)]);
var state_12239__$1 = (function (){var statearr_12267 = state_12239;
(statearr_12267[(13)] = inst_12223);

return statearr_12267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12239__$1,(13),dchan);
} else {
if((state_val_12240 === (14))){
var inst_12228 = cljs.core.async.close_BANG_(out);
var state_12239__$1 = state_12239;
var statearr_12268_13356 = state_12239__$1;
(statearr_12268_13356[(2)] = inst_12228);

(statearr_12268_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (16))){
var inst_12235 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12273_13357 = state_12239__$1;
(statearr_12273_13357[(2)] = inst_12235);

(statearr_12273_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (10))){
var inst_12200 = (state_12239[(8)]);
var inst_12216 = (state_12239[(2)]);
var inst_12217 = (inst_12200 + (1));
var inst_12200__$1 = inst_12217;
var state_12239__$1 = (function (){var statearr_12278 = state_12239;
(statearr_12278[(14)] = inst_12216);

(statearr_12278[(8)] = inst_12200__$1);

return statearr_12278;
})();
var statearr_12279_13358 = state_12239__$1;
(statearr_12279_13358[(2)] = null);

(statearr_12279_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (8))){
var inst_12221 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12280_13359 = state_12239__$1;
(statearr_12280_13359[(2)] = inst_12221);

(statearr_12280_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12281[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12281[(1)] = (1));

return statearr_12281;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12239){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12239);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12282){var ex__10911__auto__ = e12282;
var statearr_12283_13360 = state_12239;
(statearr_12283_13360[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12239[(4)]))){
var statearr_12284_13361 = state_12239;
(statearr_12284_13361[(1)] = cljs.core.first((state_12239[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12239;
state_12239 = G__13362;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12285 = f__10965__auto__();
(statearr_12285[(6)] = c__10964__auto___13342);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var c__10964__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12321){
var state_val_12322 = (state_12321[(1)]);
if((state_val_12322 === (7))){
var inst_12300 = (state_12321[(7)]);
var inst_12301 = (state_12321[(8)]);
var inst_12300__$1 = (state_12321[(2)]);
var inst_12301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12300__$1,(0),null);
var inst_12302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12300__$1,(1),null);
var inst_12303 = (inst_12301__$1 == null);
var state_12321__$1 = (function (){var statearr_12323 = state_12321;
(statearr_12323[(9)] = inst_12302);

(statearr_12323[(7)] = inst_12300__$1);

(statearr_12323[(8)] = inst_12301__$1);

return statearr_12323;
})();
if(cljs.core.truth_(inst_12303)){
var statearr_12324_13365 = state_12321__$1;
(statearr_12324_13365[(1)] = (8));

} else {
var statearr_12325_13366 = state_12321__$1;
(statearr_12325_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (1))){
var inst_12290 = cljs.core.vec(chs);
var inst_12291 = inst_12290;
var state_12321__$1 = (function (){var statearr_12326 = state_12321;
(statearr_12326[(10)] = inst_12291);

return statearr_12326;
})();
var statearr_12327_13367 = state_12321__$1;
(statearr_12327_13367[(2)] = null);

(statearr_12327_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (4))){
var inst_12291 = (state_12321[(10)]);
var state_12321__$1 = state_12321;
return cljs.core.async.ioc_alts_BANG_(state_12321__$1,(7),inst_12291);
} else {
if((state_val_12322 === (6))){
var inst_12317 = (state_12321[(2)]);
var state_12321__$1 = state_12321;
var statearr_12328_13368 = state_12321__$1;
(statearr_12328_13368[(2)] = inst_12317);

(statearr_12328_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (3))){
var inst_12319 = (state_12321[(2)]);
var state_12321__$1 = state_12321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12321__$1,inst_12319);
} else {
if((state_val_12322 === (2))){
var inst_12291 = (state_12321[(10)]);
var inst_12293 = cljs.core.count(inst_12291);
var inst_12294 = (inst_12293 > (0));
var state_12321__$1 = state_12321;
if(cljs.core.truth_(inst_12294)){
var statearr_12330_13369 = state_12321__$1;
(statearr_12330_13369[(1)] = (4));

} else {
var statearr_12331_13370 = state_12321__$1;
(statearr_12331_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (11))){
var inst_12291 = (state_12321[(10)]);
var inst_12310 = (state_12321[(2)]);
var tmp12329 = inst_12291;
var inst_12291__$1 = tmp12329;
var state_12321__$1 = (function (){var statearr_12332 = state_12321;
(statearr_12332[(11)] = inst_12310);

(statearr_12332[(10)] = inst_12291__$1);

return statearr_12332;
})();
var statearr_12333_13371 = state_12321__$1;
(statearr_12333_13371[(2)] = null);

(statearr_12333_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (9))){
var inst_12301 = (state_12321[(8)]);
var state_12321__$1 = state_12321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12321__$1,(11),out,inst_12301);
} else {
if((state_val_12322 === (5))){
var inst_12315 = cljs.core.async.close_BANG_(out);
var state_12321__$1 = state_12321;
var statearr_12334_13372 = state_12321__$1;
(statearr_12334_13372[(2)] = inst_12315);

(statearr_12334_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (10))){
var inst_12313 = (state_12321[(2)]);
var state_12321__$1 = state_12321;
var statearr_12335_13373 = state_12321__$1;
(statearr_12335_13373[(2)] = inst_12313);

(statearr_12335_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (8))){
var inst_12302 = (state_12321[(9)]);
var inst_12300 = (state_12321[(7)]);
var inst_12301 = (state_12321[(8)]);
var inst_12291 = (state_12321[(10)]);
var inst_12305 = (function (){var cs = inst_12291;
var vec__12296 = inst_12300;
var v = inst_12301;
var c = inst_12302;
return (function (p1__12286_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12286_SHARP_);
});
})();
var inst_12306 = cljs.core.filterv(inst_12305,inst_12291);
var inst_12291__$1 = inst_12306;
var state_12321__$1 = (function (){var statearr_12347 = state_12321;
(statearr_12347[(10)] = inst_12291__$1);

return statearr_12347;
})();
var statearr_12348_13374 = state_12321__$1;
(statearr_12348_13374[(2)] = null);

(statearr_12348_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12349[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12349[(1)] = (1));

return statearr_12349;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12321){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12321);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12350){var ex__10911__auto__ = e12350;
var statearr_12351_13375 = state_12321;
(statearr_12351_13375[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12321[(4)]))){
var statearr_12352_13376 = state_12321;
(statearr_12352_13376[(1)] = cljs.core.first((state_12321[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12321;
state_12321 = G__13377;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12355 = f__10965__auto__();
(statearr_12355[(6)] = c__10964__auto___13364);

return statearr_12355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var G__12359 = arguments.length;
switch (G__12359) {
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
var c__10964__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12385){
var state_val_12386 = (state_12385[(1)]);
if((state_val_12386 === (7))){
var inst_12365 = (state_12385[(7)]);
var inst_12365__$1 = (state_12385[(2)]);
var inst_12366 = (inst_12365__$1 == null);
var inst_12367 = cljs.core.not(inst_12366);
var state_12385__$1 = (function (){var statearr_12387 = state_12385;
(statearr_12387[(7)] = inst_12365__$1);

return statearr_12387;
})();
if(inst_12367){
var statearr_12390_13380 = state_12385__$1;
(statearr_12390_13380[(1)] = (8));

} else {
var statearr_12391_13381 = state_12385__$1;
(statearr_12391_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (1))){
var inst_12360 = (0);
var state_12385__$1 = (function (){var statearr_12392 = state_12385;
(statearr_12392[(8)] = inst_12360);

return statearr_12392;
})();
var statearr_12393_13382 = state_12385__$1;
(statearr_12393_13382[(2)] = null);

(statearr_12393_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (4))){
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12385__$1,(7),ch);
} else {
if((state_val_12386 === (6))){
var inst_12378 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12396_13383 = state_12385__$1;
(statearr_12396_13383[(2)] = inst_12378);

(statearr_12396_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (3))){
var inst_12380 = (state_12385[(2)]);
var inst_12383 = cljs.core.async.close_BANG_(out);
var state_12385__$1 = (function (){var statearr_12397 = state_12385;
(statearr_12397[(9)] = inst_12380);

return statearr_12397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12385__$1,inst_12383);
} else {
if((state_val_12386 === (2))){
var inst_12360 = (state_12385[(8)]);
var inst_12362 = (inst_12360 < n);
var state_12385__$1 = state_12385;
if(cljs.core.truth_(inst_12362)){
var statearr_12402_13384 = state_12385__$1;
(statearr_12402_13384[(1)] = (4));

} else {
var statearr_12403_13385 = state_12385__$1;
(statearr_12403_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (11))){
var inst_12360 = (state_12385[(8)]);
var inst_12370 = (state_12385[(2)]);
var inst_12371 = (inst_12360 + (1));
var inst_12360__$1 = inst_12371;
var state_12385__$1 = (function (){var statearr_12404 = state_12385;
(statearr_12404[(10)] = inst_12370);

(statearr_12404[(8)] = inst_12360__$1);

return statearr_12404;
})();
var statearr_12405_13386 = state_12385__$1;
(statearr_12405_13386[(2)] = null);

(statearr_12405_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (9))){
var state_12385__$1 = state_12385;
var statearr_12406_13387 = state_12385__$1;
(statearr_12406_13387[(2)] = null);

(statearr_12406_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (5))){
var state_12385__$1 = state_12385;
var statearr_12407_13388 = state_12385__$1;
(statearr_12407_13388[(2)] = null);

(statearr_12407_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (10))){
var inst_12375 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12408_13389 = state_12385__$1;
(statearr_12408_13389[(2)] = inst_12375);

(statearr_12408_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (8))){
var inst_12365 = (state_12385[(7)]);
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12385__$1,(11),out,inst_12365);
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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12409[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12409[(1)] = (1));

return statearr_12409;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12385){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12385);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12410){var ex__10911__auto__ = e12410;
var statearr_12411_13390 = state_12385;
(statearr_12411_13390[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12385[(4)]))){
var statearr_12412_13391 = state_12385;
(statearr_12412_13391[(1)] = cljs.core.first((state_12385[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12385;
state_12385 = G__13392;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12413 = f__10965__auto__();
(statearr_12413[(6)] = c__10964__auto___13379);

return statearr_12413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12415 = (function (f,ch,meta12416){
this.f = f;
this.ch = ch;
this.meta12416 = meta12416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12417,meta12416__$1){
var self__ = this;
var _12417__$1 = this;
return (new cljs.core.async.t_cljs$core$async12415(self__.f,self__.ch,meta12416__$1));
}));

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12417){
var self__ = this;
var _12417__$1 = this;
return self__.meta12416;
}));

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12421 = (function (f,ch,meta12416,_,fn1,meta12422){
this.f = f;
this.ch = ch;
this.meta12416 = meta12416;
this._ = _;
this.fn1 = fn1;
this.meta12422 = meta12422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12423,meta12422__$1){
var self__ = this;
var _12423__$1 = this;
return (new cljs.core.async.t_cljs$core$async12421(self__.f,self__.ch,self__.meta12416,self__._,self__.fn1,meta12422__$1));
}));

(cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12423){
var self__ = this;
var _12423__$1 = this;
return self__.meta12422;
}));

(cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12414_SHARP_){
var G__12428 = (((p1__12414_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12414_SHARP_) : self__.f.call(null,p1__12414_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12428) : f1.call(null,G__12428));
});
}));

(cljs.core.async.t_cljs$core$async12421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12416","meta12416",-1901712020,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12415","cljs.core.async/t_cljs$core$async12415",1944895750,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12422","meta12422",-1741990455,null)], null);
}));

(cljs.core.async.t_cljs$core$async12421.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12421");

(cljs.core.async.t_cljs$core$async12421.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12421");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12421.
 */
cljs.core.async.__GT_t_cljs$core$async12421 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12421(f__$1,ch__$1,meta12416__$1,___$2,fn1__$1,meta12422){
return (new cljs.core.async.t_cljs$core$async12421(f__$1,ch__$1,meta12416__$1,___$2,fn1__$1,meta12422));
});

}

return (new cljs.core.async.t_cljs$core$async12421(self__.f,self__.ch,self__.meta12416,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12435 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12435) : self__.f.call(null,G__12435));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12415.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12416","meta12416",-1901712020,null)], null);
}));

(cljs.core.async.t_cljs$core$async12415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12415");

(cljs.core.async.t_cljs$core$async12415.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12415.
 */
cljs.core.async.__GT_t_cljs$core$async12415 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12415(f__$1,ch__$1,meta12416){
return (new cljs.core.async.t_cljs$core$async12415(f__$1,ch__$1,meta12416));
});

}

return (new cljs.core.async.t_cljs$core$async12415(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12436 = (function (f,ch,meta12437){
this.f = f;
this.ch = ch;
this.meta12437 = meta12437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12438,meta12437__$1){
var self__ = this;
var _12438__$1 = this;
return (new cljs.core.async.t_cljs$core$async12436(self__.f,self__.ch,meta12437__$1));
}));

(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12438){
var self__ = this;
var _12438__$1 = this;
return self__.meta12437;
}));

(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12437","meta12437",-348375743,null)], null);
}));

(cljs.core.async.t_cljs$core$async12436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12436");

(cljs.core.async.t_cljs$core$async12436.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12436.
 */
cljs.core.async.__GT_t_cljs$core$async12436 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12436(f__$1,ch__$1,meta12437){
return (new cljs.core.async.t_cljs$core$async12436(f__$1,ch__$1,meta12437));
});

}

return (new cljs.core.async.t_cljs$core$async12436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12443 = (function (p,ch,meta12444){
this.p = p;
this.ch = ch;
this.meta12444 = meta12444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12445,meta12444__$1){
var self__ = this;
var _12445__$1 = this;
return (new cljs.core.async.t_cljs$core$async12443(self__.p,self__.ch,meta12444__$1));
}));

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12445){
var self__ = this;
var _12445__$1 = this;
return self__.meta12444;
}));

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12444","meta12444",875929104,null)], null);
}));

(cljs.core.async.t_cljs$core$async12443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12443");

(cljs.core.async.t_cljs$core$async12443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12443.
 */
cljs.core.async.__GT_t_cljs$core$async12443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12443(p__$1,ch__$1,meta12444){
return (new cljs.core.async.t_cljs$core$async12443(p__$1,ch__$1,meta12444));
});

}

return (new cljs.core.async.t_cljs$core$async12443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12454 = arguments.length;
switch (G__12454) {
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
var c__10964__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12503){
var state_val_12504 = (state_12503[(1)]);
if((state_val_12504 === (7))){
var inst_12498 = (state_12503[(2)]);
var state_12503__$1 = state_12503;
var statearr_12508_13395 = state_12503__$1;
(statearr_12508_13395[(2)] = inst_12498);

(statearr_12508_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (1))){
var state_12503__$1 = state_12503;
var statearr_12510_13396 = state_12503__$1;
(statearr_12510_13396[(2)] = null);

(statearr_12510_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (4))){
var inst_12461 = (state_12503[(7)]);
var inst_12461__$1 = (state_12503[(2)]);
var inst_12462 = (inst_12461__$1 == null);
var state_12503__$1 = (function (){var statearr_12511 = state_12503;
(statearr_12511[(7)] = inst_12461__$1);

return statearr_12511;
})();
if(cljs.core.truth_(inst_12462)){
var statearr_12512_13397 = state_12503__$1;
(statearr_12512_13397[(1)] = (5));

} else {
var statearr_12513_13398 = state_12503__$1;
(statearr_12513_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (6))){
var inst_12461 = (state_12503[(7)]);
var inst_12466 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12461) : p.call(null,inst_12461));
var state_12503__$1 = state_12503;
if(cljs.core.truth_(inst_12466)){
var statearr_12514_13399 = state_12503__$1;
(statearr_12514_13399[(1)] = (8));

} else {
var statearr_12515_13400 = state_12503__$1;
(statearr_12515_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (3))){
var inst_12500 = (state_12503[(2)]);
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12503__$1,inst_12500);
} else {
if((state_val_12504 === (2))){
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12503__$1,(4),ch);
} else {
if((state_val_12504 === (11))){
var inst_12492 = (state_12503[(2)]);
var state_12503__$1 = state_12503;
var statearr_12516_13401 = state_12503__$1;
(statearr_12516_13401[(2)] = inst_12492);

(statearr_12516_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (9))){
var state_12503__$1 = state_12503;
var statearr_12517_13402 = state_12503__$1;
(statearr_12517_13402[(2)] = null);

(statearr_12517_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (5))){
var inst_12464 = cljs.core.async.close_BANG_(out);
var state_12503__$1 = state_12503;
var statearr_12523_13403 = state_12503__$1;
(statearr_12523_13403[(2)] = inst_12464);

(statearr_12523_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (10))){
var inst_12495 = (state_12503[(2)]);
var state_12503__$1 = (function (){var statearr_12527 = state_12503;
(statearr_12527[(8)] = inst_12495);

return statearr_12527;
})();
var statearr_12530_13404 = state_12503__$1;
(statearr_12530_13404[(2)] = null);

(statearr_12530_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12504 === (8))){
var inst_12461 = (state_12503[(7)]);
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12503__$1,(11),out,inst_12461);
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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12533 = [null,null,null,null,null,null,null,null,null];
(statearr_12533[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12533[(1)] = (1));

return statearr_12533;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12503){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12503);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12535){var ex__10911__auto__ = e12535;
var statearr_12536_13405 = state_12503;
(statearr_12536_13405[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12503[(4)]))){
var statearr_12537_13406 = state_12503;
(statearr_12537_13406[(1)] = cljs.core.first((state_12503[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12503;
state_12503 = G__13407;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12542 = f__10965__auto__();
(statearr_12542[(6)] = c__10964__auto___13394);

return statearr_12542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
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
var c__10964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12647){
var state_val_12648 = (state_12647[(1)]);
if((state_val_12648 === (7))){
var inst_12630 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12649_13409 = state_12647__$1;
(statearr_12649_13409[(2)] = inst_12630);

(statearr_12649_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (20))){
var inst_12599 = (state_12647[(7)]);
var inst_12611 = (state_12647[(2)]);
var inst_12612 = cljs.core.next(inst_12599);
var inst_12582 = inst_12612;
var inst_12583 = null;
var inst_12584 = (0);
var inst_12585 = (0);
var state_12647__$1 = (function (){var statearr_12650 = state_12647;
(statearr_12650[(8)] = inst_12582);

(statearr_12650[(9)] = inst_12583);

(statearr_12650[(10)] = inst_12584);

(statearr_12650[(11)] = inst_12585);

(statearr_12650[(12)] = inst_12611);

return statearr_12650;
})();
var statearr_12651_13410 = state_12647__$1;
(statearr_12651_13410[(2)] = null);

(statearr_12651_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (1))){
var state_12647__$1 = state_12647;
var statearr_12652_13411 = state_12647__$1;
(statearr_12652_13411[(2)] = null);

(statearr_12652_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (4))){
var inst_12571 = (state_12647[(13)]);
var inst_12571__$1 = (state_12647[(2)]);
var inst_12572 = (inst_12571__$1 == null);
var state_12647__$1 = (function (){var statearr_12653 = state_12647;
(statearr_12653[(13)] = inst_12571__$1);

return statearr_12653;
})();
if(cljs.core.truth_(inst_12572)){
var statearr_12654_13412 = state_12647__$1;
(statearr_12654_13412[(1)] = (5));

} else {
var statearr_12655_13413 = state_12647__$1;
(statearr_12655_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (15))){
var state_12647__$1 = state_12647;
var statearr_12659_13414 = state_12647__$1;
(statearr_12659_13414[(2)] = null);

(statearr_12659_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (21))){
var state_12647__$1 = state_12647;
var statearr_12660_13415 = state_12647__$1;
(statearr_12660_13415[(2)] = null);

(statearr_12660_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (13))){
var inst_12582 = (state_12647[(8)]);
var inst_12583 = (state_12647[(9)]);
var inst_12584 = (state_12647[(10)]);
var inst_12585 = (state_12647[(11)]);
var inst_12593 = (state_12647[(2)]);
var inst_12594 = (inst_12585 + (1));
var tmp12656 = inst_12582;
var tmp12657 = inst_12583;
var tmp12658 = inst_12584;
var inst_12582__$1 = tmp12656;
var inst_12583__$1 = tmp12657;
var inst_12584__$1 = tmp12658;
var inst_12585__$1 = inst_12594;
var state_12647__$1 = (function (){var statearr_12661 = state_12647;
(statearr_12661[(8)] = inst_12582__$1);

(statearr_12661[(14)] = inst_12593);

(statearr_12661[(9)] = inst_12583__$1);

(statearr_12661[(10)] = inst_12584__$1);

(statearr_12661[(11)] = inst_12585__$1);

return statearr_12661;
})();
var statearr_12662_13416 = state_12647__$1;
(statearr_12662_13416[(2)] = null);

(statearr_12662_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (22))){
var state_12647__$1 = state_12647;
var statearr_12663_13417 = state_12647__$1;
(statearr_12663_13417[(2)] = null);

(statearr_12663_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (6))){
var inst_12571 = (state_12647[(13)]);
var inst_12580 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12571) : f.call(null,inst_12571));
var inst_12581 = cljs.core.seq(inst_12580);
var inst_12582 = inst_12581;
var inst_12583 = null;
var inst_12584 = (0);
var inst_12585 = (0);
var state_12647__$1 = (function (){var statearr_12664 = state_12647;
(statearr_12664[(8)] = inst_12582);

(statearr_12664[(9)] = inst_12583);

(statearr_12664[(10)] = inst_12584);

(statearr_12664[(11)] = inst_12585);

return statearr_12664;
})();
var statearr_12665_13418 = state_12647__$1;
(statearr_12665_13418[(2)] = null);

(statearr_12665_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (17))){
var inst_12599 = (state_12647[(7)]);
var inst_12604 = cljs.core.chunk_first(inst_12599);
var inst_12605 = cljs.core.chunk_rest(inst_12599);
var inst_12606 = cljs.core.count(inst_12604);
var inst_12582 = inst_12605;
var inst_12583 = inst_12604;
var inst_12584 = inst_12606;
var inst_12585 = (0);
var state_12647__$1 = (function (){var statearr_12666 = state_12647;
(statearr_12666[(8)] = inst_12582);

(statearr_12666[(9)] = inst_12583);

(statearr_12666[(10)] = inst_12584);

(statearr_12666[(11)] = inst_12585);

return statearr_12666;
})();
var statearr_12683_13419 = state_12647__$1;
(statearr_12683_13419[(2)] = null);

(statearr_12683_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (3))){
var inst_12632 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12647__$1,inst_12632);
} else {
if((state_val_12648 === (12))){
var inst_12620 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12684_13420 = state_12647__$1;
(statearr_12684_13420[(2)] = inst_12620);

(statearr_12684_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (2))){
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12647__$1,(4),in$);
} else {
if((state_val_12648 === (23))){
var inst_12628 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12685_13421 = state_12647__$1;
(statearr_12685_13421[(2)] = inst_12628);

(statearr_12685_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (19))){
var inst_12615 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12686_13422 = state_12647__$1;
(statearr_12686_13422[(2)] = inst_12615);

(statearr_12686_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (11))){
var inst_12582 = (state_12647[(8)]);
var inst_12599 = (state_12647[(7)]);
var inst_12599__$1 = cljs.core.seq(inst_12582);
var state_12647__$1 = (function (){var statearr_12687 = state_12647;
(statearr_12687[(7)] = inst_12599__$1);

return statearr_12687;
})();
if(inst_12599__$1){
var statearr_12688_13423 = state_12647__$1;
(statearr_12688_13423[(1)] = (14));

} else {
var statearr_12689_13424 = state_12647__$1;
(statearr_12689_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (9))){
var inst_12622 = (state_12647[(2)]);
var inst_12623 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12647__$1 = (function (){var statearr_12690 = state_12647;
(statearr_12690[(15)] = inst_12622);

return statearr_12690;
})();
if(cljs.core.truth_(inst_12623)){
var statearr_12691_13425 = state_12647__$1;
(statearr_12691_13425[(1)] = (21));

} else {
var statearr_12692_13426 = state_12647__$1;
(statearr_12692_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (5))){
var inst_12574 = cljs.core.async.close_BANG_(out);
var state_12647__$1 = state_12647;
var statearr_12693_13427 = state_12647__$1;
(statearr_12693_13427[(2)] = inst_12574);

(statearr_12693_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (14))){
var inst_12599 = (state_12647[(7)]);
var inst_12602 = cljs.core.chunked_seq_QMARK_(inst_12599);
var state_12647__$1 = state_12647;
if(inst_12602){
var statearr_12694_13428 = state_12647__$1;
(statearr_12694_13428[(1)] = (17));

} else {
var statearr_12695_13429 = state_12647__$1;
(statearr_12695_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (16))){
var inst_12618 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12696_13430 = state_12647__$1;
(statearr_12696_13430[(2)] = inst_12618);

(statearr_12696_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (10))){
var inst_12583 = (state_12647[(9)]);
var inst_12585 = (state_12647[(11)]);
var inst_12591 = cljs.core._nth(inst_12583,inst_12585);
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12647__$1,(13),out,inst_12591);
} else {
if((state_val_12648 === (18))){
var inst_12599 = (state_12647[(7)]);
var inst_12609 = cljs.core.first(inst_12599);
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12647__$1,(20),out,inst_12609);
} else {
if((state_val_12648 === (8))){
var inst_12584 = (state_12647[(10)]);
var inst_12585 = (state_12647[(11)]);
var inst_12588 = (inst_12585 < inst_12584);
var inst_12589 = inst_12588;
var state_12647__$1 = state_12647;
if(cljs.core.truth_(inst_12589)){
var statearr_12697_13431 = state_12647__$1;
(statearr_12697_13431[(1)] = (10));

} else {
var statearr_12698_13432 = state_12647__$1;
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
var cljs$core$async$mapcat_STAR__$_state_machine__10908__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10908__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10908__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10908__auto____1 = (function (state_12647){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12647);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12700){var ex__10911__auto__ = e12700;
var statearr_12701_13433 = state_12647;
(statearr_12701_13433[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12647[(4)]))){
var statearr_12702_13434 = state_12647;
(statearr_12702_13434[(1)] = cljs.core.first((state_12647[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12647;
state_12647 = G__13435;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10908__auto__ = function(state_12647){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10908__auto____1.call(this,state_12647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10908__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10908__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12703 = f__10965__auto__();
(statearr_12703[(6)] = c__10964__auto__);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));

return c__10964__auto__;
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
var c__10964__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12733){
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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12755[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12755[(1)] = (1));

return statearr_12755;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12733){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12733);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12756){var ex__10911__auto__ = e12756;
var statearr_12757_13450 = state_12733;
(statearr_12757_13450[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12733[(4)]))){
var statearr_12758_13451 = state_12733;
(statearr_12758_13451[(1)] = cljs.core.first((state_12733[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12733;
state_12733 = G__13452;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12759 = f__10965__auto__();
(statearr_12759[(6)] = c__10964__auto___13439);

return statearr_12759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12761 = arguments.length;
switch (G__12761) {
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
var c__10964__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12799){
var state_val_12800 = (state_12799[(1)]);
if((state_val_12800 === (7))){
var inst_12795 = (state_12799[(2)]);
var state_12799__$1 = state_12799;
var statearr_12801_13455 = state_12799__$1;
(statearr_12801_13455[(2)] = inst_12795);

(statearr_12801_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (1))){
var inst_12762 = (new Array(n));
var inst_12763 = inst_12762;
var inst_12764 = (0);
var state_12799__$1 = (function (){var statearr_12802 = state_12799;
(statearr_12802[(7)] = inst_12763);

(statearr_12802[(8)] = inst_12764);

return statearr_12802;
})();
var statearr_12803_13456 = state_12799__$1;
(statearr_12803_13456[(2)] = null);

(statearr_12803_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (4))){
var inst_12767 = (state_12799[(9)]);
var inst_12767__$1 = (state_12799[(2)]);
var inst_12768 = (inst_12767__$1 == null);
var inst_12769 = cljs.core.not(inst_12768);
var state_12799__$1 = (function (){var statearr_12804 = state_12799;
(statearr_12804[(9)] = inst_12767__$1);

return statearr_12804;
})();
if(inst_12769){
var statearr_12805_13457 = state_12799__$1;
(statearr_12805_13457[(1)] = (5));

} else {
var statearr_12806_13458 = state_12799__$1;
(statearr_12806_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (15))){
var inst_12789 = (state_12799[(2)]);
var state_12799__$1 = state_12799;
var statearr_12807_13459 = state_12799__$1;
(statearr_12807_13459[(2)] = inst_12789);

(statearr_12807_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (13))){
var state_12799__$1 = state_12799;
var statearr_12808_13460 = state_12799__$1;
(statearr_12808_13460[(2)] = null);

(statearr_12808_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (6))){
var inst_12764 = (state_12799[(8)]);
var inst_12785 = (inst_12764 > (0));
var state_12799__$1 = state_12799;
if(cljs.core.truth_(inst_12785)){
var statearr_12809_13461 = state_12799__$1;
(statearr_12809_13461[(1)] = (12));

} else {
var statearr_12810_13462 = state_12799__$1;
(statearr_12810_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (3))){
var inst_12797 = (state_12799[(2)]);
var state_12799__$1 = state_12799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12799__$1,inst_12797);
} else {
if((state_val_12800 === (12))){
var inst_12763 = (state_12799[(7)]);
var inst_12787 = cljs.core.vec(inst_12763);
var state_12799__$1 = state_12799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12799__$1,(15),out,inst_12787);
} else {
if((state_val_12800 === (2))){
var state_12799__$1 = state_12799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12799__$1,(4),ch);
} else {
if((state_val_12800 === (11))){
var inst_12779 = (state_12799[(2)]);
var inst_12780 = (new Array(n));
var inst_12763 = inst_12780;
var inst_12764 = (0);
var state_12799__$1 = (function (){var statearr_12811 = state_12799;
(statearr_12811[(7)] = inst_12763);

(statearr_12811[(8)] = inst_12764);

(statearr_12811[(10)] = inst_12779);

return statearr_12811;
})();
var statearr_12812_13463 = state_12799__$1;
(statearr_12812_13463[(2)] = null);

(statearr_12812_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (9))){
var inst_12763 = (state_12799[(7)]);
var inst_12777 = cljs.core.vec(inst_12763);
var state_12799__$1 = state_12799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12799__$1,(11),out,inst_12777);
} else {
if((state_val_12800 === (5))){
var inst_12763 = (state_12799[(7)]);
var inst_12764 = (state_12799[(8)]);
var inst_12772 = (state_12799[(11)]);
var inst_12767 = (state_12799[(9)]);
var inst_12771 = (inst_12763[inst_12764] = inst_12767);
var inst_12772__$1 = (inst_12764 + (1));
var inst_12773 = (inst_12772__$1 < n);
var state_12799__$1 = (function (){var statearr_12813 = state_12799;
(statearr_12813[(12)] = inst_12771);

(statearr_12813[(11)] = inst_12772__$1);

return statearr_12813;
})();
if(cljs.core.truth_(inst_12773)){
var statearr_12814_13464 = state_12799__$1;
(statearr_12814_13464[(1)] = (8));

} else {
var statearr_12815_13465 = state_12799__$1;
(statearr_12815_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (14))){
var inst_12792 = (state_12799[(2)]);
var inst_12793 = cljs.core.async.close_BANG_(out);
var state_12799__$1 = (function (){var statearr_12817 = state_12799;
(statearr_12817[(13)] = inst_12792);

return statearr_12817;
})();
var statearr_12818_13466 = state_12799__$1;
(statearr_12818_13466[(2)] = inst_12793);

(statearr_12818_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (10))){
var inst_12783 = (state_12799[(2)]);
var state_12799__$1 = state_12799;
var statearr_12823_13467 = state_12799__$1;
(statearr_12823_13467[(2)] = inst_12783);

(statearr_12823_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12800 === (8))){
var inst_12763 = (state_12799[(7)]);
var inst_12772 = (state_12799[(11)]);
var tmp12816 = inst_12763;
var inst_12763__$1 = tmp12816;
var inst_12764 = inst_12772;
var state_12799__$1 = (function (){var statearr_12824 = state_12799;
(statearr_12824[(7)] = inst_12763__$1);

(statearr_12824[(8)] = inst_12764);

return statearr_12824;
})();
var statearr_12825_13468 = state_12799__$1;
(statearr_12825_13468[(2)] = null);

(statearr_12825_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12830[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12830[(1)] = (1));

return statearr_12830;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12799){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12799);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12831){var ex__10911__auto__ = e12831;
var statearr_12832_13469 = state_12799;
(statearr_12832_13469[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12799[(4)]))){
var statearr_12833_13470 = state_12799;
(statearr_12833_13470[(1)] = cljs.core.first((state_12799[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12799;
state_12799 = G__13471;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12834 = f__10965__auto__();
(statearr_12834[(6)] = c__10964__auto___13454);

return statearr_12834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12836 = arguments.length;
switch (G__12836) {
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
var c__10964__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_12878){
var state_val_12879 = (state_12878[(1)]);
if((state_val_12879 === (7))){
var inst_12874 = (state_12878[(2)]);
var state_12878__$1 = state_12878;
var statearr_12883_13474 = state_12878__$1;
(statearr_12883_13474[(2)] = inst_12874);

(statearr_12883_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (1))){
var inst_12837 = [];
var inst_12838 = inst_12837;
var inst_12839 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12878__$1 = (function (){var statearr_12884 = state_12878;
(statearr_12884[(7)] = inst_12839);

(statearr_12884[(8)] = inst_12838);

return statearr_12884;
})();
var statearr_12885_13475 = state_12878__$1;
(statearr_12885_13475[(2)] = null);

(statearr_12885_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (4))){
var inst_12842 = (state_12878[(9)]);
var inst_12842__$1 = (state_12878[(2)]);
var inst_12843 = (inst_12842__$1 == null);
var inst_12844 = cljs.core.not(inst_12843);
var state_12878__$1 = (function (){var statearr_12886 = state_12878;
(statearr_12886[(9)] = inst_12842__$1);

return statearr_12886;
})();
if(inst_12844){
var statearr_12887_13476 = state_12878__$1;
(statearr_12887_13476[(1)] = (5));

} else {
var statearr_12888_13477 = state_12878__$1;
(statearr_12888_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (15))){
var inst_12868 = (state_12878[(2)]);
var state_12878__$1 = state_12878;
var statearr_12889_13478 = state_12878__$1;
(statearr_12889_13478[(2)] = inst_12868);

(statearr_12889_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (13))){
var state_12878__$1 = state_12878;
var statearr_12890_13479 = state_12878__$1;
(statearr_12890_13479[(2)] = null);

(statearr_12890_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (6))){
var inst_12838 = (state_12878[(8)]);
var inst_12863 = inst_12838.length;
var inst_12864 = (inst_12863 > (0));
var state_12878__$1 = state_12878;
if(cljs.core.truth_(inst_12864)){
var statearr_12891_13480 = state_12878__$1;
(statearr_12891_13480[(1)] = (12));

} else {
var statearr_12892_13481 = state_12878__$1;
(statearr_12892_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (3))){
var inst_12876 = (state_12878[(2)]);
var state_12878__$1 = state_12878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12878__$1,inst_12876);
} else {
if((state_val_12879 === (12))){
var inst_12838 = (state_12878[(8)]);
var inst_12866 = cljs.core.vec(inst_12838);
var state_12878__$1 = state_12878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12878__$1,(15),out,inst_12866);
} else {
if((state_val_12879 === (2))){
var state_12878__$1 = state_12878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12878__$1,(4),ch);
} else {
if((state_val_12879 === (11))){
var inst_12846 = (state_12878[(10)]);
var inst_12842 = (state_12878[(9)]);
var inst_12856 = (state_12878[(2)]);
var inst_12857 = [];
var inst_12858 = inst_12857.push(inst_12842);
var inst_12838 = inst_12857;
var inst_12839 = inst_12846;
var state_12878__$1 = (function (){var statearr_12893 = state_12878;
(statearr_12893[(11)] = inst_12856);

(statearr_12893[(7)] = inst_12839);

(statearr_12893[(8)] = inst_12838);

(statearr_12893[(12)] = inst_12858);

return statearr_12893;
})();
var statearr_12894_13482 = state_12878__$1;
(statearr_12894_13482[(2)] = null);

(statearr_12894_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (9))){
var inst_12838 = (state_12878[(8)]);
var inst_12854 = cljs.core.vec(inst_12838);
var state_12878__$1 = state_12878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12878__$1,(11),out,inst_12854);
} else {
if((state_val_12879 === (5))){
var inst_12839 = (state_12878[(7)]);
var inst_12846 = (state_12878[(10)]);
var inst_12842 = (state_12878[(9)]);
var inst_12846__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12842) : f.call(null,inst_12842));
var inst_12847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12846__$1,inst_12839);
var inst_12848 = cljs.core.keyword_identical_QMARK_(inst_12839,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12849 = ((inst_12847) || (inst_12848));
var state_12878__$1 = (function (){var statearr_12952 = state_12878;
(statearr_12952[(10)] = inst_12846__$1);

return statearr_12952;
})();
if(cljs.core.truth_(inst_12849)){
var statearr_12953_13483 = state_12878__$1;
(statearr_12953_13483[(1)] = (8));

} else {
var statearr_12954_13484 = state_12878__$1;
(statearr_12954_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (14))){
var inst_12871 = (state_12878[(2)]);
var inst_12872 = cljs.core.async.close_BANG_(out);
var state_12878__$1 = (function (){var statearr_12956 = state_12878;
(statearr_12956[(13)] = inst_12871);

return statearr_12956;
})();
var statearr_12957_13485 = state_12878__$1;
(statearr_12957_13485[(2)] = inst_12872);

(statearr_12957_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (10))){
var inst_12861 = (state_12878[(2)]);
var state_12878__$1 = state_12878;
var statearr_12958_13486 = state_12878__$1;
(statearr_12958_13486[(2)] = inst_12861);

(statearr_12958_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (8))){
var inst_12838 = (state_12878[(8)]);
var inst_12846 = (state_12878[(10)]);
var inst_12842 = (state_12878[(9)]);
var inst_12851 = inst_12838.push(inst_12842);
var tmp12955 = inst_12838;
var inst_12838__$1 = tmp12955;
var inst_12839 = inst_12846;
var state_12878__$1 = (function (){var statearr_12959 = state_12878;
(statearr_12959[(7)] = inst_12839);

(statearr_12959[(14)] = inst_12851);

(statearr_12959[(8)] = inst_12838__$1);

return statearr_12959;
})();
var statearr_12960_13487 = state_12878__$1;
(statearr_12960_13487[(2)] = null);

(statearr_12960_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10908__auto__ = null;
var cljs$core$async$state_machine__10908__auto____0 = (function (){
var statearr_12961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12961[(0)] = cljs$core$async$state_machine__10908__auto__);

(statearr_12961[(1)] = (1));

return statearr_12961;
});
var cljs$core$async$state_machine__10908__auto____1 = (function (state_12878){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_12878);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e12962){var ex__10911__auto__ = e12962;
var statearr_12963_13488 = state_12878;
(statearr_12963_13488[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_12878[(4)]))){
var statearr_12969_13489 = state_12878;
(statearr_12969_13489[(1)] = cljs.core.first((state_12878[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12878;
state_12878 = G__13490;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
cljs$core$async$state_machine__10908__auto__ = function(state_12878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10908__auto____1.call(this,state_12878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10908__auto____0;
cljs$core$async$state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10908__auto____1;
return cljs$core$async$state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_12973 = f__10965__auto__();
(statearr_12973[(6)] = c__10964__auto___13473);

return statearr_12973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
