goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10995 = arguments.length;
switch (G__10995) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10996 = (function (f,blockable,meta10997){
this.f = f;
this.blockable = blockable;
this.meta10997 = meta10997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10998,meta10997__$1){
var self__ = this;
var _10998__$1 = this;
return (new cljs.core.async.t_cljs$core$async10996(self__.f,self__.blockable,meta10997__$1));
}));

(cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10998){
var self__ = this;
var _10998__$1 = this;
return self__.meta10997;
}));

(cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10997","meta10997",-882537212,null)], null);
}));

(cljs.core.async.t_cljs$core$async10996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10996");

(cljs.core.async.t_cljs$core$async10996.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10996.
 */
cljs.core.async.__GT_t_cljs$core$async10996 = (function cljs$core$async$__GT_t_cljs$core$async10996(f__$1,blockable__$1,meta10997){
return (new cljs.core.async.t_cljs$core$async10996(f__$1,blockable__$1,meta10997));
});

}

return (new cljs.core.async.t_cljs$core$async10996(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11024 = arguments.length;
switch (G__11024) {
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
var G__11029 = arguments.length;
switch (G__11029) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11035 = (function (flag,meta11036){
this.flag = flag;
this.meta11036 = meta11036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11037,meta11036__$1){
var self__ = this;
var _11037__$1 = this;
return (new cljs.core.async.t_cljs$core$async11035(self__.flag,meta11036__$1));
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
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11036","meta11036",1899986924,null)], null);
}));

(cljs.core.async.t_cljs$core$async11035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11035");

(cljs.core.async.t_cljs$core$async11035.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11035.
 */
cljs.core.async.__GT_t_cljs$core$async11035 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11035(flag__$1,meta11036){
return (new cljs.core.async.t_cljs$core$async11035(flag__$1,meta11036));
});

}

return (new cljs.core.async.t_cljs$core$async11035(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11045 = (function (flag,cb,meta11046){
this.flag = flag;
this.cb = cb;
this.meta11046 = meta11046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11047,meta11046__$1){
var self__ = this;
var _11047__$1 = this;
return (new cljs.core.async.t_cljs$core$async11045(self__.flag,self__.cb,meta11046__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11046","meta11046",-410823665,null)], null);
}));

(cljs.core.async.t_cljs$core$async11045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11045");

(cljs.core.async.t_cljs$core$async11045.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11045.
 */
cljs.core.async.__GT_t_cljs$core$async11045 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11045(flag__$1,cb__$1,meta11046){
return (new cljs.core.async.t_cljs$core$async11045(flag__$1,cb__$1,meta11046));
});

}

return (new cljs.core.async.t_cljs$core$async11045(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11052_SHARP_){
var G__11055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11052_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11055) : fret.call(null,G__11055));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11053_SHARP_){
var G__11056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11053_SHARP_,port], null);
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11061){
var map__11062 = p__11061;
var map__11062__$1 = (((((!((map__11062 == null))))?(((((map__11062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11062):map__11062);
var opts = map__11062__$1;
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
var c__10923__auto___13012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11106){
var state_val_11107 = (state_11106[(1)]);
if((state_val_11107 === (7))){
var inst_11102 = (state_11106[(2)]);
var state_11106__$1 = state_11106;
var statearr_11111_13013 = state_11106__$1;
(statearr_11111_13013[(2)] = inst_11102);

(statearr_11111_13013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (1))){
var state_11106__$1 = state_11106;
var statearr_11112_13014 = state_11106__$1;
(statearr_11112_13014[(2)] = null);

(statearr_11112_13014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (4))){
var inst_11085 = (state_11106[(7)]);
var inst_11085__$1 = (state_11106[(2)]);
var inst_11086 = (inst_11085__$1 == null);
var state_11106__$1 = (function (){var statearr_11113 = state_11106;
(statearr_11113[(7)] = inst_11085__$1);

return statearr_11113;
})();
if(cljs.core.truth_(inst_11086)){
var statearr_11114_13015 = state_11106__$1;
(statearr_11114_13015[(1)] = (5));

} else {
var statearr_11115_13016 = state_11106__$1;
(statearr_11115_13016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (13))){
var state_11106__$1 = state_11106;
var statearr_11116_13017 = state_11106__$1;
(statearr_11116_13017[(2)] = null);

(statearr_11116_13017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (6))){
var inst_11085 = (state_11106[(7)]);
var state_11106__$1 = state_11106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11106__$1,(11),to,inst_11085);
} else {
if((state_val_11107 === (3))){
var inst_11104 = (state_11106[(2)]);
var state_11106__$1 = state_11106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11106__$1,inst_11104);
} else {
if((state_val_11107 === (12))){
var state_11106__$1 = state_11106;
var statearr_11117_13018 = state_11106__$1;
(statearr_11117_13018[(2)] = null);

(statearr_11117_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (2))){
var state_11106__$1 = state_11106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11106__$1,(4),from);
} else {
if((state_val_11107 === (11))){
var inst_11095 = (state_11106[(2)]);
var state_11106__$1 = state_11106;
if(cljs.core.truth_(inst_11095)){
var statearr_11118_13019 = state_11106__$1;
(statearr_11118_13019[(1)] = (12));

} else {
var statearr_11119_13020 = state_11106__$1;
(statearr_11119_13020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (9))){
var state_11106__$1 = state_11106;
var statearr_11120_13021 = state_11106__$1;
(statearr_11120_13021[(2)] = null);

(statearr_11120_13021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (5))){
var state_11106__$1 = state_11106;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11121_13022 = state_11106__$1;
(statearr_11121_13022[(1)] = (8));

} else {
var statearr_11122_13023 = state_11106__$1;
(statearr_11122_13023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (14))){
var inst_11100 = (state_11106[(2)]);
var state_11106__$1 = state_11106;
var statearr_11123_13024 = state_11106__$1;
(statearr_11123_13024[(2)] = inst_11100);

(statearr_11123_13024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (10))){
var inst_11092 = (state_11106[(2)]);
var state_11106__$1 = state_11106;
var statearr_11126_13025 = state_11106__$1;
(statearr_11126_13025[(2)] = inst_11092);

(statearr_11126_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11107 === (8))){
var inst_11089 = cljs.core.async.close_BANG_(to);
var state_11106__$1 = state_11106;
var statearr_11127_13026 = state_11106__$1;
(statearr_11127_13026[(2)] = inst_11089);

(statearr_11127_13026[(1)] = (10));


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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_11128 = [null,null,null,null,null,null,null,null];
(statearr_11128[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_11128[(1)] = (1));

return statearr_11128;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_11106){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11106);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11129){var ex__10781__auto__ = e11129;
var statearr_11130_13027 = state_11106;
(statearr_11130_13027[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11106[(4)]))){
var statearr_11131_13028 = state_11106;
(statearr_11131_13028[(1)] = cljs.core.first((state_11106[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_11106;
state_11106 = G__13029;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_11106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_11106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11132 = f__10924__auto__();
(statearr_11132[(6)] = c__10923__auto___13012);

return statearr_11132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
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
var process = (function (p__11133){
var vec__11134 = p__11133;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11134,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11134,(1),null);
var job = vec__11134;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10923__auto___13030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11141){
var state_val_11142 = (state_11141[(1)]);
if((state_val_11142 === (1))){
var state_11141__$1 = state_11141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11141__$1,(2),res,v);
} else {
if((state_val_11142 === (2))){
var inst_11138 = (state_11141[(2)]);
var inst_11139 = cljs.core.async.close_BANG_(res);
var state_11141__$1 = (function (){var statearr_11155 = state_11141;
(statearr_11155[(7)] = inst_11138);

return statearr_11155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11141__$1,inst_11139);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0 = (function (){
var statearr_11156 = [null,null,null,null,null,null,null,null];
(statearr_11156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__);

(statearr_11156[(1)] = (1));

return statearr_11156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1 = (function (state_11141){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11141);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11157){var ex__10781__auto__ = e11157;
var statearr_11158_13031 = state_11141;
(statearr_11158_13031[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11141[(4)]))){
var statearr_11159_13032 = state_11141;
(statearr_11159_13032[(1)] = cljs.core.first((state_11141[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11141;
state_11141 = G__13033;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = function(state_11141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1.call(this,state_11141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11160 = f__10924__auto__();
(statearr_11160[(6)] = c__10923__auto___13030);

return statearr_11160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11161){
var vec__11162 = p__11161;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(1),null);
var job = vec__11162;
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
var G__11165_13036 = type;
var G__11165_13037__$1 = (((G__11165_13036 instanceof cljs.core.Keyword))?G__11165_13036.fqn:null);
switch (G__11165_13037__$1) {
case "compute":
var c__10923__auto___13039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10923__auto___13039,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = ((function (__13035,c__10923__auto___13039,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11178){
var state_val_11179 = (state_11178[(1)]);
if((state_val_11179 === (1))){
var state_11178__$1 = state_11178;
var statearr_11180_13040 = state_11178__$1;
(statearr_11180_13040[(2)] = null);

(statearr_11180_13040[(1)] = (2));


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
var inst_11169 = process(inst_11168);
var state_11178__$1 = state_11178;
if(cljs.core.truth_(inst_11169)){
var statearr_11188_13041 = state_11178__$1;
(statearr_11188_13041[(1)] = (5));

} else {
var statearr_11189_13042 = state_11178__$1;
(statearr_11189_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (5))){
var state_11178__$1 = state_11178;
var statearr_11190_13043 = state_11178__$1;
(statearr_11190_13043[(2)] = null);

(statearr_11190_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (6))){
var state_11178__$1 = state_11178;
var statearr_11191_13044 = state_11178__$1;
(statearr_11191_13044[(2)] = null);

(statearr_11191_13044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (7))){
var inst_11174 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11192_13045 = state_11178__$1;
(statearr_11192_13045[(2)] = inst_11174);

(statearr_11192_13045[(1)] = (3));


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
});})(__13035,c__10923__auto___13039,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10777__auto__,c__10923__auto___13039,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0 = (function (){
var statearr_11193 = [null,null,null,null,null,null,null];
(statearr_11193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__);

(statearr_11193[(1)] = (1));

return statearr_11193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1 = (function (state_11178){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11178);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11194){var ex__10781__auto__ = e11194;
var statearr_11195_13047 = state_11178;
(statearr_11195_13047[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11178[(4)]))){
var statearr_11196_13048 = state_11178;
(statearr_11196_13048[(1)] = cljs.core.first((state_11178[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13049 = state_11178;
state_11178 = G__13049;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = function(state_11178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1.call(this,state_11178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__;
})()
;})(__13035,switch__10777__auto__,c__10923__auto___13039,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10925__auto__ = (function (){var statearr_11197 = f__10924__auto__();
(statearr_11197[(6)] = c__10923__auto___13039);

return statearr_11197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
});})(__13035,c__10923__auto___13039,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
case "async":
var c__10923__auto___13050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10923__auto___13050,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = ((function (__13035,c__10923__auto___13050,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11210){
var state_val_11211 = (state_11210[(1)]);
if((state_val_11211 === (1))){
var state_11210__$1 = state_11210;
var statearr_11212_13051 = state_11210__$1;
(statearr_11212_13051[(2)] = null);

(statearr_11212_13051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (2))){
var state_11210__$1 = state_11210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11210__$1,(4),jobs);
} else {
if((state_val_11211 === (3))){
var inst_11208 = (state_11210[(2)]);
var state_11210__$1 = state_11210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11210__$1,inst_11208);
} else {
if((state_val_11211 === (4))){
var inst_11200 = (state_11210[(2)]);
var inst_11201 = async(inst_11200);
var state_11210__$1 = state_11210;
if(cljs.core.truth_(inst_11201)){
var statearr_11213_13052 = state_11210__$1;
(statearr_11213_13052[(1)] = (5));

} else {
var statearr_11214_13053 = state_11210__$1;
(statearr_11214_13053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (5))){
var state_11210__$1 = state_11210;
var statearr_11215_13054 = state_11210__$1;
(statearr_11215_13054[(2)] = null);

(statearr_11215_13054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (6))){
var state_11210__$1 = state_11210;
var statearr_11216_13055 = state_11210__$1;
(statearr_11216_13055[(2)] = null);

(statearr_11216_13055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (7))){
var inst_11206 = (state_11210[(2)]);
var state_11210__$1 = state_11210;
var statearr_11217_13056 = state_11210__$1;
(statearr_11217_13056[(2)] = inst_11206);

(statearr_11217_13056[(1)] = (3));


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
});})(__13035,c__10923__auto___13050,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10777__auto__,c__10923__auto___13050,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0 = (function (){
var statearr_11237 = [null,null,null,null,null,null,null];
(statearr_11237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__);

(statearr_11237[(1)] = (1));

return statearr_11237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1 = (function (state_11210){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11210);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11238){var ex__10781__auto__ = e11238;
var statearr_11239_13057 = state_11210;
(statearr_11239_13057[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11210[(4)]))){
var statearr_11240_13058 = state_11210;
(statearr_11240_13058[(1)] = cljs.core.first((state_11210[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13059 = state_11210;
state_11210 = G__13059;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = function(state_11210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1.call(this,state_11210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__;
})()
;})(__13035,switch__10777__auto__,c__10923__auto___13050,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10925__auto__ = (function (){var statearr_11241 = f__10924__auto__();
(statearr_11241[(6)] = c__10923__auto___13050);

return statearr_11241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
});})(__13035,c__10923__auto___13050,G__11165_13036,G__11165_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11165_13037__$1)].join('')));

}

var G__13060 = (__13035 + (1));
__13035 = G__13060;
continue;
} else {
}
break;
}

var c__10923__auto___13061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11263){
var state_val_11264 = (state_11263[(1)]);
if((state_val_11264 === (7))){
var inst_11259 = (state_11263[(2)]);
var state_11263__$1 = state_11263;
var statearr_11265_13062 = state_11263__$1;
(statearr_11265_13062[(2)] = inst_11259);

(statearr_11265_13062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (1))){
var state_11263__$1 = state_11263;
var statearr_11266_13063 = state_11263__$1;
(statearr_11266_13063[(2)] = null);

(statearr_11266_13063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (4))){
var inst_11244 = (state_11263[(7)]);
var inst_11244__$1 = (state_11263[(2)]);
var inst_11245 = (inst_11244__$1 == null);
var state_11263__$1 = (function (){var statearr_11267 = state_11263;
(statearr_11267[(7)] = inst_11244__$1);

return statearr_11267;
})();
if(cljs.core.truth_(inst_11245)){
var statearr_11268_13090 = state_11263__$1;
(statearr_11268_13090[(1)] = (5));

} else {
var statearr_11269_13091 = state_11263__$1;
(statearr_11269_13091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (6))){
var inst_11244 = (state_11263[(7)]);
var inst_11249 = (state_11263[(8)]);
var inst_11249__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11251 = [inst_11244,inst_11249__$1];
var inst_11252 = (new cljs.core.PersistentVector(null,2,(5),inst_11250,inst_11251,null));
var state_11263__$1 = (function (){var statearr_11275 = state_11263;
(statearr_11275[(8)] = inst_11249__$1);

return statearr_11275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11263__$1,(8),jobs,inst_11252);
} else {
if((state_val_11264 === (3))){
var inst_11261 = (state_11263[(2)]);
var state_11263__$1 = state_11263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11263__$1,inst_11261);
} else {
if((state_val_11264 === (2))){
var state_11263__$1 = state_11263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11263__$1,(4),from);
} else {
if((state_val_11264 === (9))){
var inst_11256 = (state_11263[(2)]);
var state_11263__$1 = (function (){var statearr_11276 = state_11263;
(statearr_11276[(9)] = inst_11256);

return statearr_11276;
})();
var statearr_11277_13092 = state_11263__$1;
(statearr_11277_13092[(2)] = null);

(statearr_11277_13092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (5))){
var inst_11247 = cljs.core.async.close_BANG_(jobs);
var state_11263__$1 = state_11263;
var statearr_11278_13093 = state_11263__$1;
(statearr_11278_13093[(2)] = inst_11247);

(statearr_11278_13093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (8))){
var inst_11249 = (state_11263[(8)]);
var inst_11254 = (state_11263[(2)]);
var state_11263__$1 = (function (){var statearr_11279 = state_11263;
(statearr_11279[(10)] = inst_11254);

return statearr_11279;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11263__$1,(9),results,inst_11249);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0 = (function (){
var statearr_11280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__);

(statearr_11280[(1)] = (1));

return statearr_11280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1 = (function (state_11263){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11263);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11281){var ex__10781__auto__ = e11281;
var statearr_11282_13094 = state_11263;
(statearr_11282_13094[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11263[(4)]))){
var statearr_11283_13095 = state_11263;
(statearr_11283_13095[(1)] = cljs.core.first((state_11263[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13096 = state_11263;
state_11263 = G__13096;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = function(state_11263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1.call(this,state_11263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11284 = f__10924__auto__();
(statearr_11284[(6)] = c__10923__auto___13061);

return statearr_11284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));


var c__10923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11326){
var state_val_11327 = (state_11326[(1)]);
if((state_val_11327 === (7))){
var inst_11318 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
var statearr_11328_13097 = state_11326__$1;
(statearr_11328_13097[(2)] = inst_11318);

(statearr_11328_13097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (20))){
var state_11326__$1 = state_11326;
var statearr_11329_13098 = state_11326__$1;
(statearr_11329_13098[(2)] = null);

(statearr_11329_13098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (1))){
var state_11326__$1 = state_11326;
var statearr_11330_13099 = state_11326__$1;
(statearr_11330_13099[(2)] = null);

(statearr_11330_13099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (4))){
var inst_11287 = (state_11326[(7)]);
var inst_11287__$1 = (state_11326[(2)]);
var inst_11288 = (inst_11287__$1 == null);
var state_11326__$1 = (function (){var statearr_11331 = state_11326;
(statearr_11331[(7)] = inst_11287__$1);

return statearr_11331;
})();
if(cljs.core.truth_(inst_11288)){
var statearr_11332_13100 = state_11326__$1;
(statearr_11332_13100[(1)] = (5));

} else {
var statearr_11333_13101 = state_11326__$1;
(statearr_11333_13101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (15))){
var inst_11300 = (state_11326[(8)]);
var state_11326__$1 = state_11326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11326__$1,(18),to,inst_11300);
} else {
if((state_val_11327 === (21))){
var inst_11313 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
var statearr_11334_13102 = state_11326__$1;
(statearr_11334_13102[(2)] = inst_11313);

(statearr_11334_13102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (13))){
var inst_11315 = (state_11326[(2)]);
var state_11326__$1 = (function (){var statearr_11335 = state_11326;
(statearr_11335[(9)] = inst_11315);

return statearr_11335;
})();
var statearr_11336_13103 = state_11326__$1;
(statearr_11336_13103[(2)] = null);

(statearr_11336_13103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (6))){
var inst_11287 = (state_11326[(7)]);
var state_11326__$1 = state_11326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11326__$1,(11),inst_11287);
} else {
if((state_val_11327 === (17))){
var inst_11308 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
if(cljs.core.truth_(inst_11308)){
var statearr_11337_13104 = state_11326__$1;
(statearr_11337_13104[(1)] = (19));

} else {
var statearr_11338_13105 = state_11326__$1;
(statearr_11338_13105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (3))){
var inst_11320 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11326__$1,inst_11320);
} else {
if((state_val_11327 === (12))){
var inst_11297 = (state_11326[(10)]);
var state_11326__$1 = state_11326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11326__$1,(14),inst_11297);
} else {
if((state_val_11327 === (2))){
var state_11326__$1 = state_11326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11326__$1,(4),results);
} else {
if((state_val_11327 === (19))){
var state_11326__$1 = state_11326;
var statearr_11339_13106 = state_11326__$1;
(statearr_11339_13106[(2)] = null);

(statearr_11339_13106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (11))){
var inst_11297 = (state_11326[(2)]);
var state_11326__$1 = (function (){var statearr_11340 = state_11326;
(statearr_11340[(10)] = inst_11297);

return statearr_11340;
})();
var statearr_11341_13107 = state_11326__$1;
(statearr_11341_13107[(2)] = null);

(statearr_11341_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (9))){
var state_11326__$1 = state_11326;
var statearr_11342_13108 = state_11326__$1;
(statearr_11342_13108[(2)] = null);

(statearr_11342_13108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (5))){
var state_11326__$1 = state_11326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11343_13109 = state_11326__$1;
(statearr_11343_13109[(1)] = (8));

} else {
var statearr_11346_13110 = state_11326__$1;
(statearr_11346_13110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (14))){
var inst_11300 = (state_11326[(8)]);
var inst_11300__$1 = (state_11326[(2)]);
var inst_11301 = (inst_11300__$1 == null);
var inst_11302 = cljs.core.not(inst_11301);
var state_11326__$1 = (function (){var statearr_11347 = state_11326;
(statearr_11347[(8)] = inst_11300__$1);

return statearr_11347;
})();
if(inst_11302){
var statearr_11348_13111 = state_11326__$1;
(statearr_11348_13111[(1)] = (15));

} else {
var statearr_11349_13112 = state_11326__$1;
(statearr_11349_13112[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (16))){
var state_11326__$1 = state_11326;
var statearr_11350_13113 = state_11326__$1;
(statearr_11350_13113[(2)] = false);

(statearr_11350_13113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (10))){
var inst_11294 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
var statearr_11351_13114 = state_11326__$1;
(statearr_11351_13114[(2)] = inst_11294);

(statearr_11351_13114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (18))){
var inst_11305 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
var statearr_11352_13115 = state_11326__$1;
(statearr_11352_13115[(2)] = inst_11305);

(statearr_11352_13115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (8))){
var inst_11291 = cljs.core.async.close_BANG_(to);
var state_11326__$1 = state_11326;
var statearr_11353_13116 = state_11326__$1;
(statearr_11353_13116[(2)] = inst_11291);

(statearr_11353_13116[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0 = (function (){
var statearr_11354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__);

(statearr_11354[(1)] = (1));

return statearr_11354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1 = (function (state_11326){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11326);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11355){var ex__10781__auto__ = e11355;
var statearr_11356_13118 = state_11326;
(statearr_11356_13118[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11326[(4)]))){
var statearr_11357_13119 = state_11326;
(statearr_11357_13119[(1)] = cljs.core.first((state_11326[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11326;
state_11326 = G__13120;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__ = function(state_11326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1.call(this,state_11326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11358 = f__10924__auto__();
(statearr_11358[(6)] = c__10923__auto__);

return statearr_11358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));

return c__10923__auto__;
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
var G__11360 = arguments.length;
switch (G__11360) {
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
var G__11368 = arguments.length;
switch (G__11368) {
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
var G__11370 = arguments.length;
switch (G__11370) {
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
var c__10923__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11396){
var state_val_11397 = (state_11396[(1)]);
if((state_val_11397 === (7))){
var inst_11392 = (state_11396[(2)]);
var state_11396__$1 = state_11396;
var statearr_11404_13125 = state_11396__$1;
(statearr_11404_13125[(2)] = inst_11392);

(statearr_11404_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (1))){
var state_11396__$1 = state_11396;
var statearr_11405_13126 = state_11396__$1;
(statearr_11405_13126[(2)] = null);

(statearr_11405_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (4))){
var inst_11373 = (state_11396[(7)]);
var inst_11373__$1 = (state_11396[(2)]);
var inst_11374 = (inst_11373__$1 == null);
var state_11396__$1 = (function (){var statearr_11406 = state_11396;
(statearr_11406[(7)] = inst_11373__$1);

return statearr_11406;
})();
if(cljs.core.truth_(inst_11374)){
var statearr_11407_13127 = state_11396__$1;
(statearr_11407_13127[(1)] = (5));

} else {
var statearr_11408_13128 = state_11396__$1;
(statearr_11408_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (13))){
var state_11396__$1 = state_11396;
var statearr_11409_13129 = state_11396__$1;
(statearr_11409_13129[(2)] = null);

(statearr_11409_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (6))){
var inst_11373 = (state_11396[(7)]);
var inst_11379 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11373) : p.call(null,inst_11373));
var state_11396__$1 = state_11396;
if(cljs.core.truth_(inst_11379)){
var statearr_11410_13130 = state_11396__$1;
(statearr_11410_13130[(1)] = (9));

} else {
var statearr_11411_13131 = state_11396__$1;
(statearr_11411_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (3))){
var inst_11394 = (state_11396[(2)]);
var state_11396__$1 = state_11396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11396__$1,inst_11394);
} else {
if((state_val_11397 === (12))){
var state_11396__$1 = state_11396;
var statearr_11412_13132 = state_11396__$1;
(statearr_11412_13132[(2)] = null);

(statearr_11412_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (2))){
var state_11396__$1 = state_11396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11396__$1,(4),ch);
} else {
if((state_val_11397 === (11))){
var inst_11373 = (state_11396[(7)]);
var inst_11383 = (state_11396[(2)]);
var state_11396__$1 = state_11396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11396__$1,(8),inst_11383,inst_11373);
} else {
if((state_val_11397 === (9))){
var state_11396__$1 = state_11396;
var statearr_11413_13133 = state_11396__$1;
(statearr_11413_13133[(2)] = tc);

(statearr_11413_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (5))){
var inst_11376 = cljs.core.async.close_BANG_(tc);
var inst_11377 = cljs.core.async.close_BANG_(fc);
var state_11396__$1 = (function (){var statearr_11414 = state_11396;
(statearr_11414[(8)] = inst_11376);

return statearr_11414;
})();
var statearr_11415_13134 = state_11396__$1;
(statearr_11415_13134[(2)] = inst_11377);

(statearr_11415_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (14))){
var inst_11390 = (state_11396[(2)]);
var state_11396__$1 = state_11396;
var statearr_11416_13135 = state_11396__$1;
(statearr_11416_13135[(2)] = inst_11390);

(statearr_11416_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (10))){
var state_11396__$1 = state_11396;
var statearr_11417_13136 = state_11396__$1;
(statearr_11417_13136[(2)] = fc);

(statearr_11417_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11397 === (8))){
var inst_11385 = (state_11396[(2)]);
var state_11396__$1 = state_11396;
if(cljs.core.truth_(inst_11385)){
var statearr_11418_13137 = state_11396__$1;
(statearr_11418_13137[(1)] = (12));

} else {
var statearr_11419_13138 = state_11396__$1;
(statearr_11419_13138[(1)] = (13));

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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_11420 = [null,null,null,null,null,null,null,null,null];
(statearr_11420[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_11420[(1)] = (1));

return statearr_11420;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_11396){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11396);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11421){var ex__10781__auto__ = e11421;
var statearr_11422_13139 = state_11396;
(statearr_11422_13139[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11396[(4)]))){
var statearr_11423_13140 = state_11396;
(statearr_11423_13140[(1)] = cljs.core.first((state_11396[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11396;
state_11396 = G__13141;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_11396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_11396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11430 = f__10924__auto__();
(statearr_11430[(6)] = c__10923__auto___13124);

return statearr_11430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
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
var c__10923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11452){
var state_val_11453 = (state_11452[(1)]);
if((state_val_11453 === (7))){
var inst_11448 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
var statearr_11454_13142 = state_11452__$1;
(statearr_11454_13142[(2)] = inst_11448);

(statearr_11454_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (1))){
var inst_11431 = init;
var inst_11432 = inst_11431;
var state_11452__$1 = (function (){var statearr_11455 = state_11452;
(statearr_11455[(7)] = inst_11432);

return statearr_11455;
})();
var statearr_11456_13143 = state_11452__$1;
(statearr_11456_13143[(2)] = null);

(statearr_11456_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (4))){
var inst_11435 = (state_11452[(8)]);
var inst_11435__$1 = (state_11452[(2)]);
var inst_11436 = (inst_11435__$1 == null);
var state_11452__$1 = (function (){var statearr_11457 = state_11452;
(statearr_11457[(8)] = inst_11435__$1);

return statearr_11457;
})();
if(cljs.core.truth_(inst_11436)){
var statearr_11458_13144 = state_11452__$1;
(statearr_11458_13144[(1)] = (5));

} else {
var statearr_11459_13145 = state_11452__$1;
(statearr_11459_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (6))){
var inst_11432 = (state_11452[(7)]);
var inst_11439 = (state_11452[(9)]);
var inst_11435 = (state_11452[(8)]);
var inst_11439__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11432,inst_11435) : f.call(null,inst_11432,inst_11435));
var inst_11440 = cljs.core.reduced_QMARK_(inst_11439__$1);
var state_11452__$1 = (function (){var statearr_11460 = state_11452;
(statearr_11460[(9)] = inst_11439__$1);

return statearr_11460;
})();
if(inst_11440){
var statearr_11461_13146 = state_11452__$1;
(statearr_11461_13146[(1)] = (8));

} else {
var statearr_11462_13147 = state_11452__$1;
(statearr_11462_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (3))){
var inst_11450 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11452__$1,inst_11450);
} else {
if((state_val_11453 === (2))){
var state_11452__$1 = state_11452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11452__$1,(4),ch);
} else {
if((state_val_11453 === (9))){
var inst_11439 = (state_11452[(9)]);
var inst_11432 = inst_11439;
var state_11452__$1 = (function (){var statearr_11468 = state_11452;
(statearr_11468[(7)] = inst_11432);

return statearr_11468;
})();
var statearr_11469_13148 = state_11452__$1;
(statearr_11469_13148[(2)] = null);

(statearr_11469_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (5))){
var inst_11432 = (state_11452[(7)]);
var state_11452__$1 = state_11452;
var statearr_11470_13149 = state_11452__$1;
(statearr_11470_13149[(2)] = inst_11432);

(statearr_11470_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (10))){
var inst_11446 = (state_11452[(2)]);
var state_11452__$1 = state_11452;
var statearr_11471_13150 = state_11452__$1;
(statearr_11471_13150[(2)] = inst_11446);

(statearr_11471_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11453 === (8))){
var inst_11439 = (state_11452[(9)]);
var inst_11442 = cljs.core.deref(inst_11439);
var state_11452__$1 = state_11452;
var statearr_11472_13151 = state_11452__$1;
(statearr_11472_13151[(2)] = inst_11442);

(statearr_11472_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10778__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10778__auto____0 = (function (){
var statearr_11473 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11473[(0)] = cljs$core$async$reduce_$_state_machine__10778__auto__);

(statearr_11473[(1)] = (1));

return statearr_11473;
});
var cljs$core$async$reduce_$_state_machine__10778__auto____1 = (function (state_11452){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11452);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11474){var ex__10781__auto__ = e11474;
var statearr_11475_13152 = state_11452;
(statearr_11475_13152[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11452[(4)]))){
var statearr_11476_13153 = state_11452;
(statearr_11476_13153[(1)] = cljs.core.first((state_11452[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11452;
state_11452 = G__13154;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10778__auto__ = function(state_11452){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10778__auto____1.call(this,state_11452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10778__auto____0;
cljs$core$async$reduce_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10778__auto____1;
return cljs$core$async$reduce_$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11477 = f__10924__auto__();
(statearr_11477[(6)] = c__10923__auto__);

return statearr_11477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));

return c__10923__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11483){
var state_val_11484 = (state_11483[(1)]);
if((state_val_11484 === (1))){
var inst_11478 = cljs.core.async.reduce(f__$1,init,ch);
var state_11483__$1 = state_11483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11483__$1,(2),inst_11478);
} else {
if((state_val_11484 === (2))){
var inst_11480 = (state_11483[(2)]);
var inst_11481 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11480) : f__$1.call(null,inst_11480));
var state_11483__$1 = state_11483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11483__$1,inst_11481);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10778__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10778__auto____0 = (function (){
var statearr_11485 = [null,null,null,null,null,null,null];
(statearr_11485[(0)] = cljs$core$async$transduce_$_state_machine__10778__auto__);

(statearr_11485[(1)] = (1));

return statearr_11485;
});
var cljs$core$async$transduce_$_state_machine__10778__auto____1 = (function (state_11483){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11483);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11486){var ex__10781__auto__ = e11486;
var statearr_11487_13155 = state_11483;
(statearr_11487_13155[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11483[(4)]))){
var statearr_11488_13156 = state_11483;
(statearr_11488_13156[(1)] = cljs.core.first((state_11483[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11483;
state_11483 = G__13157;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10778__auto__ = function(state_11483){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10778__auto____1.call(this,state_11483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10778__auto____0;
cljs$core$async$transduce_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10778__auto____1;
return cljs$core$async$transduce_$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11489 = f__10924__auto__();
(statearr_11489[(6)] = c__10923__auto__);

return statearr_11489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));

return c__10923__auto__;
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
var G__11494 = arguments.length;
switch (G__11494) {
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
var c__10923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11519){
var state_val_11520 = (state_11519[(1)]);
if((state_val_11520 === (7))){
var inst_11501 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
var statearr_11522_13159 = state_11519__$1;
(statearr_11522_13159[(2)] = inst_11501);

(statearr_11522_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (1))){
var inst_11495 = cljs.core.seq(coll);
var inst_11496 = inst_11495;
var state_11519__$1 = (function (){var statearr_11523 = state_11519;
(statearr_11523[(7)] = inst_11496);

return statearr_11523;
})();
var statearr_11524_13160 = state_11519__$1;
(statearr_11524_13160[(2)] = null);

(statearr_11524_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (4))){
var inst_11496 = (state_11519[(7)]);
var inst_11499 = cljs.core.first(inst_11496);
var state_11519__$1 = state_11519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11519__$1,(7),ch,inst_11499);
} else {
if((state_val_11520 === (13))){
var inst_11513 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
var statearr_11527_13161 = state_11519__$1;
(statearr_11527_13161[(2)] = inst_11513);

(statearr_11527_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (6))){
var inst_11504 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
if(cljs.core.truth_(inst_11504)){
var statearr_11528_13162 = state_11519__$1;
(statearr_11528_13162[(1)] = (8));

} else {
var statearr_11529_13163 = state_11519__$1;
(statearr_11529_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (3))){
var inst_11517 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11519__$1,inst_11517);
} else {
if((state_val_11520 === (12))){
var state_11519__$1 = state_11519;
var statearr_11531_13164 = state_11519__$1;
(statearr_11531_13164[(2)] = null);

(statearr_11531_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (2))){
var inst_11496 = (state_11519[(7)]);
var state_11519__$1 = state_11519;
if(cljs.core.truth_(inst_11496)){
var statearr_11533_13165 = state_11519__$1;
(statearr_11533_13165[(1)] = (4));

} else {
var statearr_11534_13166 = state_11519__$1;
(statearr_11534_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (11))){
var inst_11510 = cljs.core.async.close_BANG_(ch);
var state_11519__$1 = state_11519;
var statearr_11535_13167 = state_11519__$1;
(statearr_11535_13167[(2)] = inst_11510);

(statearr_11535_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (9))){
var state_11519__$1 = state_11519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11536_13168 = state_11519__$1;
(statearr_11536_13168[(1)] = (11));

} else {
var statearr_11537_13169 = state_11519__$1;
(statearr_11537_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (5))){
var inst_11496 = (state_11519[(7)]);
var state_11519__$1 = state_11519;
var statearr_11538_13170 = state_11519__$1;
(statearr_11538_13170[(2)] = inst_11496);

(statearr_11538_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (10))){
var inst_11515 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
var statearr_11539_13171 = state_11519__$1;
(statearr_11539_13171[(2)] = inst_11515);

(statearr_11539_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (8))){
var inst_11496 = (state_11519[(7)]);
var inst_11506 = cljs.core.next(inst_11496);
var inst_11496__$1 = inst_11506;
var state_11519__$1 = (function (){var statearr_11540 = state_11519;
(statearr_11540[(7)] = inst_11496__$1);

return statearr_11540;
})();
var statearr_11541_13172 = state_11519__$1;
(statearr_11541_13172[(2)] = null);

(statearr_11541_13172[(1)] = (2));


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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_11542 = [null,null,null,null,null,null,null,null];
(statearr_11542[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_11542[(1)] = (1));

return statearr_11542;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_11519){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11519);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11543){var ex__10781__auto__ = e11543;
var statearr_11544_13173 = state_11519;
(statearr_11544_13173[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11519[(4)]))){
var statearr_11545_13174 = state_11519;
(statearr_11545_13174[(1)] = cljs.core.first((state_11519[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11519;
state_11519 = G__13175;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_11519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_11519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11546 = f__10924__auto__();
(statearr_11546[(6)] = c__10923__auto__);

return statearr_11546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));

return c__10923__auto__;
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
var G__11566 = arguments.length;
switch (G__11566) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11580 = (function (ch,cs,meta11581){
this.ch = ch;
this.cs = cs;
this.meta11581 = meta11581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11582,meta11581__$1){
var self__ = this;
var _11582__$1 = this;
return (new cljs.core.async.t_cljs$core$async11580(self__.ch,self__.cs,meta11581__$1));
}));

(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11582){
var self__ = this;
var _11582__$1 = this;
return self__.meta11581;
}));

(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11580.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11581","meta11581",-556696896,null)], null);
}));

(cljs.core.async.t_cljs$core$async11580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11580");

(cljs.core.async.t_cljs$core$async11580.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11580.
 */
cljs.core.async.__GT_t_cljs$core$async11580 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11580(ch__$1,cs__$1,meta11581){
return (new cljs.core.async.t_cljs$core$async11580(ch__$1,cs__$1,meta11581));
});

}

return (new cljs.core.async.t_cljs$core$async11580(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10923__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_11723){
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
var inst_11623 = (state_11723[(7)]);
var inst_11636 = cljs.core.first(inst_11623);
var inst_11637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11636,(0),null);
var inst_11638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11636,(1),null);
var state_11723__$1 = (function (){var statearr_11726 = state_11723;
(statearr_11726[(8)] = inst_11637);

return statearr_11726;
})();
if(cljs.core.truth_(inst_11638)){
var statearr_11727_13183 = state_11723__$1;
(statearr_11727_13183[(1)] = (22));

} else {
var statearr_11728_13184 = state_11723__$1;
(statearr_11728_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (27))){
var inst_11668 = (state_11723[(9)]);
var inst_11589 = (state_11723[(10)]);
var inst_11673 = (state_11723[(11)]);
var inst_11666 = (state_11723[(12)]);
var inst_11673__$1 = cljs.core._nth(inst_11666,inst_11668);
var inst_11674 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11673__$1,inst_11589,done);
var state_11723__$1 = (function (){var statearr_11729 = state_11723;
(statearr_11729[(11)] = inst_11673__$1);

return statearr_11729;
})();
if(cljs.core.truth_(inst_11674)){
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
var statearr_11746_13187 = state_11723__$1;
(statearr_11746_13187[(2)] = null);

(statearr_11746_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (24))){
var inst_11623 = (state_11723[(7)]);
var inst_11643 = (state_11723[(2)]);
var inst_11644 = cljs.core.next(inst_11623);
var inst_11598 = inst_11644;
var inst_11599 = null;
var inst_11600 = (0);
var inst_11601 = (0);
var state_11723__$1 = (function (){var statearr_11747 = state_11723;
(statearr_11747[(13)] = inst_11601);

(statearr_11747[(14)] = inst_11600);

(statearr_11747[(15)] = inst_11643);

(statearr_11747[(16)] = inst_11598);

(statearr_11747[(17)] = inst_11599);

return statearr_11747;
})();
var statearr_11748_13188 = state_11723__$1;
(statearr_11748_13188[(2)] = null);

(statearr_11748_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (39))){
var state_11723__$1 = state_11723;
var statearr_11752_13189 = state_11723__$1;
(statearr_11752_13189[(2)] = null);

(statearr_11752_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (4))){
var inst_11589 = (state_11723[(10)]);
var inst_11589__$1 = (state_11723[(2)]);
var inst_11590 = (inst_11589__$1 == null);
var state_11723__$1 = (function (){var statearr_11753 = state_11723;
(statearr_11753[(10)] = inst_11589__$1);

return statearr_11753;
})();
if(cljs.core.truth_(inst_11590)){
var statearr_11754_13190 = state_11723__$1;
(statearr_11754_13190[(1)] = (5));

} else {
var statearr_11755_13191 = state_11723__$1;
(statearr_11755_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (15))){
var inst_11601 = (state_11723[(13)]);
var inst_11600 = (state_11723[(14)]);
var inst_11598 = (state_11723[(16)]);
var inst_11599 = (state_11723[(17)]);
var inst_11619 = (state_11723[(2)]);
var inst_11620 = (inst_11601 + (1));
var tmp11749 = inst_11600;
var tmp11750 = inst_11598;
var tmp11751 = inst_11599;
var inst_11598__$1 = tmp11750;
var inst_11599__$1 = tmp11751;
var inst_11600__$1 = tmp11749;
var inst_11601__$1 = inst_11620;
var state_11723__$1 = (function (){var statearr_11756 = state_11723;
(statearr_11756[(13)] = inst_11601__$1);

(statearr_11756[(18)] = inst_11619);

(statearr_11756[(14)] = inst_11600__$1);

(statearr_11756[(16)] = inst_11598__$1);

(statearr_11756[(17)] = inst_11599__$1);

return statearr_11756;
})();
var statearr_11757_13192 = state_11723__$1;
(statearr_11757_13192[(2)] = null);

(statearr_11757_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (21))){
var inst_11647 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11761_13193 = state_11723__$1;
(statearr_11761_13193[(2)] = inst_11647);

(statearr_11761_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (31))){
var inst_11673 = (state_11723[(11)]);
var inst_11677 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11673);
var state_11723__$1 = state_11723;
var statearr_11762_13194 = state_11723__$1;
(statearr_11762_13194[(2)] = inst_11677);

(statearr_11762_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (32))){
var inst_11668 = (state_11723[(9)]);
var inst_11667 = (state_11723[(19)]);
var inst_11665 = (state_11723[(20)]);
var inst_11666 = (state_11723[(12)]);
var inst_11679 = (state_11723[(2)]);
var inst_11680 = (inst_11668 + (1));
var tmp11758 = inst_11667;
var tmp11759 = inst_11665;
var tmp11760 = inst_11666;
var inst_11665__$1 = tmp11759;
var inst_11666__$1 = tmp11760;
var inst_11667__$1 = tmp11758;
var inst_11668__$1 = inst_11680;
var state_11723__$1 = (function (){var statearr_11763 = state_11723;
(statearr_11763[(9)] = inst_11668__$1);

(statearr_11763[(19)] = inst_11667__$1);

(statearr_11763[(20)] = inst_11665__$1);

(statearr_11763[(12)] = inst_11666__$1);

(statearr_11763[(21)] = inst_11679);

return statearr_11763;
})();
var statearr_11764_13195 = state_11723__$1;
(statearr_11764_13195[(2)] = null);

(statearr_11764_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (40))){
var inst_11692 = (state_11723[(22)]);
var inst_11696 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11692);
var state_11723__$1 = state_11723;
var statearr_11765_13196 = state_11723__$1;
(statearr_11765_13196[(2)] = inst_11696);

(statearr_11765_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (33))){
var inst_11683 = (state_11723[(23)]);
var inst_11685 = cljs.core.chunked_seq_QMARK_(inst_11683);
var state_11723__$1 = state_11723;
if(inst_11685){
var statearr_11785_13197 = state_11723__$1;
(statearr_11785_13197[(1)] = (36));

} else {
var statearr_11786_13198 = state_11723__$1;
(statearr_11786_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (13))){
var inst_11613 = (state_11723[(24)]);
var inst_11616 = cljs.core.async.close_BANG_(inst_11613);
var state_11723__$1 = state_11723;
var statearr_11787_13199 = state_11723__$1;
(statearr_11787_13199[(2)] = inst_11616);

(statearr_11787_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (22))){
var inst_11637 = (state_11723[(8)]);
var inst_11640 = cljs.core.async.close_BANG_(inst_11637);
var state_11723__$1 = state_11723;
var statearr_11788_13200 = state_11723__$1;
(statearr_11788_13200[(2)] = inst_11640);

(statearr_11788_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (36))){
var inst_11683 = (state_11723[(23)]);
var inst_11687 = cljs.core.chunk_first(inst_11683);
var inst_11688 = cljs.core.chunk_rest(inst_11683);
var inst_11689 = cljs.core.count(inst_11687);
var inst_11665 = inst_11688;
var inst_11666 = inst_11687;
var inst_11667 = inst_11689;
var inst_11668 = (0);
var state_11723__$1 = (function (){var statearr_11789 = state_11723;
(statearr_11789[(9)] = inst_11668);

(statearr_11789[(19)] = inst_11667);

(statearr_11789[(20)] = inst_11665);

(statearr_11789[(12)] = inst_11666);

return statearr_11789;
})();
var statearr_11790_13201 = state_11723__$1;
(statearr_11790_13201[(2)] = null);

(statearr_11790_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (41))){
var inst_11683 = (state_11723[(23)]);
var inst_11698 = (state_11723[(2)]);
var inst_11699 = cljs.core.next(inst_11683);
var inst_11665 = inst_11699;
var inst_11666 = null;
var inst_11667 = (0);
var inst_11668 = (0);
var state_11723__$1 = (function (){var statearr_11791 = state_11723;
(statearr_11791[(25)] = inst_11698);

(statearr_11791[(9)] = inst_11668);

(statearr_11791[(19)] = inst_11667);

(statearr_11791[(20)] = inst_11665);

(statearr_11791[(12)] = inst_11666);

return statearr_11791;
})();
var statearr_11792_13202 = state_11723__$1;
(statearr_11792_13202[(2)] = null);

(statearr_11792_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (43))){
var state_11723__$1 = state_11723;
var statearr_11793_13203 = state_11723__$1;
(statearr_11793_13203[(2)] = null);

(statearr_11793_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (29))){
var inst_11707 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11794_13204 = state_11723__$1;
(statearr_11794_13204[(2)] = inst_11707);

(statearr_11794_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (44))){
var inst_11716 = (state_11723[(2)]);
var state_11723__$1 = (function (){var statearr_11795 = state_11723;
(statearr_11795[(26)] = inst_11716);

return statearr_11795;
})();
var statearr_11796_13205 = state_11723__$1;
(statearr_11796_13205[(2)] = null);

(statearr_11796_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (6))){
var inst_11657 = (state_11723[(27)]);
var inst_11656 = cljs.core.deref(cs);
var inst_11657__$1 = cljs.core.keys(inst_11656);
var inst_11658 = cljs.core.count(inst_11657__$1);
var inst_11659 = cljs.core.reset_BANG_(dctr,inst_11658);
var inst_11664 = cljs.core.seq(inst_11657__$1);
var inst_11665 = inst_11664;
var inst_11666 = null;
var inst_11667 = (0);
var inst_11668 = (0);
var state_11723__$1 = (function (){var statearr_11797 = state_11723;
(statearr_11797[(9)] = inst_11668);

(statearr_11797[(27)] = inst_11657__$1);

(statearr_11797[(19)] = inst_11667);

(statearr_11797[(28)] = inst_11659);

(statearr_11797[(20)] = inst_11665);

(statearr_11797[(12)] = inst_11666);

return statearr_11797;
})();
var statearr_11798_13206 = state_11723__$1;
(statearr_11798_13206[(2)] = null);

(statearr_11798_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (28))){
var inst_11683 = (state_11723[(23)]);
var inst_11665 = (state_11723[(20)]);
var inst_11683__$1 = cljs.core.seq(inst_11665);
var state_11723__$1 = (function (){var statearr_11799 = state_11723;
(statearr_11799[(23)] = inst_11683__$1);

return statearr_11799;
})();
if(inst_11683__$1){
var statearr_11800_13207 = state_11723__$1;
(statearr_11800_13207[(1)] = (33));

} else {
var statearr_11801_13208 = state_11723__$1;
(statearr_11801_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (25))){
var inst_11668 = (state_11723[(9)]);
var inst_11667 = (state_11723[(19)]);
var inst_11670 = (inst_11668 < inst_11667);
var inst_11671 = inst_11670;
var state_11723__$1 = state_11723;
if(cljs.core.truth_(inst_11671)){
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
var statearr_11820_13211 = state_11723__$1;
(statearr_11820_13211[(2)] = null);

(statearr_11820_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (17))){
var state_11723__$1 = state_11723;
var statearr_11821_13212 = state_11723__$1;
(statearr_11821_13212[(2)] = null);

(statearr_11821_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (3))){
var inst_11721 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11723__$1,inst_11721);
} else {
if((state_val_11724 === (12))){
var inst_11652 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11822_13213 = state_11723__$1;
(statearr_11822_13213[(2)] = inst_11652);

(statearr_11822_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (2))){
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11723__$1,(4),ch);
} else {
if((state_val_11724 === (23))){
var state_11723__$1 = state_11723;
var statearr_11823_13214 = state_11723__$1;
(statearr_11823_13214[(2)] = null);

(statearr_11823_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (35))){
var inst_11705 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11824_13215 = state_11723__$1;
(statearr_11824_13215[(2)] = inst_11705);

(statearr_11824_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (19))){
var inst_11623 = (state_11723[(7)]);
var inst_11627 = cljs.core.chunk_first(inst_11623);
var inst_11628 = cljs.core.chunk_rest(inst_11623);
var inst_11629 = cljs.core.count(inst_11627);
var inst_11598 = inst_11628;
var inst_11599 = inst_11627;
var inst_11600 = inst_11629;
var inst_11601 = (0);
var state_11723__$1 = (function (){var statearr_11825 = state_11723;
(statearr_11825[(13)] = inst_11601);

(statearr_11825[(14)] = inst_11600);

(statearr_11825[(16)] = inst_11598);

(statearr_11825[(17)] = inst_11599);

return statearr_11825;
})();
var statearr_11826_13216 = state_11723__$1;
(statearr_11826_13216[(2)] = null);

(statearr_11826_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (11))){
var inst_11598 = (state_11723[(16)]);
var inst_11623 = (state_11723[(7)]);
var inst_11623__$1 = cljs.core.seq(inst_11598);
var state_11723__$1 = (function (){var statearr_11827 = state_11723;
(statearr_11827[(7)] = inst_11623__$1);

return statearr_11827;
})();
if(inst_11623__$1){
var statearr_11828_13217 = state_11723__$1;
(statearr_11828_13217[(1)] = (16));

} else {
var statearr_11829_13218 = state_11723__$1;
(statearr_11829_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (9))){
var inst_11654 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11830_13219 = state_11723__$1;
(statearr_11830_13219[(2)] = inst_11654);

(statearr_11830_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (5))){
var inst_11596 = cljs.core.deref(cs);
var inst_11597 = cljs.core.seq(inst_11596);
var inst_11598 = inst_11597;
var inst_11599 = null;
var inst_11600 = (0);
var inst_11601 = (0);
var state_11723__$1 = (function (){var statearr_11831 = state_11723;
(statearr_11831[(13)] = inst_11601);

(statearr_11831[(14)] = inst_11600);

(statearr_11831[(16)] = inst_11598);

(statearr_11831[(17)] = inst_11599);

return statearr_11831;
})();
var statearr_11832_13220 = state_11723__$1;
(statearr_11832_13220[(2)] = null);

(statearr_11832_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (14))){
var state_11723__$1 = state_11723;
var statearr_11833_13221 = state_11723__$1;
(statearr_11833_13221[(2)] = null);

(statearr_11833_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (45))){
var inst_11713 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11834_13222 = state_11723__$1;
(statearr_11834_13222[(2)] = inst_11713);

(statearr_11834_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (26))){
var inst_11657 = (state_11723[(27)]);
var inst_11709 = (state_11723[(2)]);
var inst_11710 = cljs.core.seq(inst_11657);
var state_11723__$1 = (function (){var statearr_11835 = state_11723;
(statearr_11835[(29)] = inst_11709);

return statearr_11835;
})();
if(inst_11710){
var statearr_11836_13223 = state_11723__$1;
(statearr_11836_13223[(1)] = (42));

} else {
var statearr_11837_13224 = state_11723__$1;
(statearr_11837_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (16))){
var inst_11623 = (state_11723[(7)]);
var inst_11625 = cljs.core.chunked_seq_QMARK_(inst_11623);
var state_11723__$1 = state_11723;
if(inst_11625){
var statearr_11838_13225 = state_11723__$1;
(statearr_11838_13225[(1)] = (19));

} else {
var statearr_11839_13226 = state_11723__$1;
(statearr_11839_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (38))){
var inst_11702 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11840_13227 = state_11723__$1;
(statearr_11840_13227[(2)] = inst_11702);

(statearr_11840_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (30))){
var state_11723__$1 = state_11723;
var statearr_11841_13228 = state_11723__$1;
(statearr_11841_13228[(2)] = null);

(statearr_11841_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (10))){
var inst_11601 = (state_11723[(13)]);
var inst_11599 = (state_11723[(17)]);
var inst_11609 = cljs.core._nth(inst_11599,inst_11601);
var inst_11613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11609,(0),null);
var inst_11614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11609,(1),null);
var state_11723__$1 = (function (){var statearr_11842 = state_11723;
(statearr_11842[(24)] = inst_11613);

return statearr_11842;
})();
if(cljs.core.truth_(inst_11614)){
var statearr_11843_13229 = state_11723__$1;
(statearr_11843_13229[(1)] = (13));

} else {
var statearr_11844_13230 = state_11723__$1;
(statearr_11844_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (18))){
var inst_11650 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11845_13231 = state_11723__$1;
(statearr_11845_13231[(2)] = inst_11650);

(statearr_11845_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (42))){
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11723__$1,(45),dchan);
} else {
if((state_val_11724 === (37))){
var inst_11589 = (state_11723[(10)]);
var inst_11692 = (state_11723[(22)]);
var inst_11683 = (state_11723[(23)]);
var inst_11692__$1 = cljs.core.first(inst_11683);
var inst_11693 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11692__$1,inst_11589,done);
var state_11723__$1 = (function (){var statearr_11846 = state_11723;
(statearr_11846[(22)] = inst_11692__$1);

return statearr_11846;
})();
if(cljs.core.truth_(inst_11693)){
var statearr_11847_13232 = state_11723__$1;
(statearr_11847_13232[(1)] = (39));

} else {
var statearr_11848_13233 = state_11723__$1;
(statearr_11848_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (8))){
var inst_11601 = (state_11723[(13)]);
var inst_11600 = (state_11723[(14)]);
var inst_11603 = (inst_11601 < inst_11600);
var inst_11604 = inst_11603;
var state_11723__$1 = state_11723;
if(cljs.core.truth_(inst_11604)){
var statearr_11849_13234 = state_11723__$1;
(statearr_11849_13234[(1)] = (10));

} else {
var statearr_11850_13235 = state_11723__$1;
(statearr_11850_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10778__auto__ = null;
var cljs$core$async$mult_$_state_machine__10778__auto____0 = (function (){
var statearr_11851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11851[(0)] = cljs$core$async$mult_$_state_machine__10778__auto__);

(statearr_11851[(1)] = (1));

return statearr_11851;
});
var cljs$core$async$mult_$_state_machine__10778__auto____1 = (function (state_11723){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_11723);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e11852){var ex__10781__auto__ = e11852;
var statearr_11853_13236 = state_11723;
(statearr_11853_13236[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_11723[(4)]))){
var statearr_11854_13237 = state_11723;
(statearr_11854_13237[(1)] = cljs.core.first((state_11723[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11723;
state_11723 = G__13238;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10778__auto__ = function(state_11723){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10778__auto____1.call(this,state_11723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10778__auto____0;
cljs$core$async$mult_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10778__auto____1;
return cljs$core$async$mult_$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_11855 = f__10924__auto__();
(statearr_11855[(6)] = c__10923__auto___13181);

return statearr_11855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
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
var G__11859 = arguments.length;
switch (G__11859) {
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
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11904){
var G__11905 = cljs.core.first(seq11904);
var seq11904__$1 = cljs.core.next(seq11904);
var G__11906 = cljs.core.first(seq11904__$1);
var seq11904__$2 = cljs.core.next(seq11904__$1);
var G__11907 = cljs.core.first(seq11904__$2);
var seq11904__$3 = cljs.core.next(seq11904__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11905,G__11906,G__11907,seq11904__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11932 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11933){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11933 = meta11933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11934,meta11933__$1){
var self__ = this;
var _11934__$1 = this;
return (new cljs.core.async.t_cljs$core$async11932(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11933__$1));
}));

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11934){
var self__ = this;
var _11934__$1 = this;
return self__.meta11933;
}));

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11933","meta11933",2086151790,null)], null);
}));

(cljs.core.async.t_cljs$core$async11932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11932");

(cljs.core.async.t_cljs$core$async11932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11932.
 */
cljs.core.async.__GT_t_cljs$core$async11932 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11932(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11933){
return (new cljs.core.async.t_cljs$core$async11932(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11933));
});

}

return (new cljs.core.async.t_cljs$core$async11932(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10923__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12057){
var state_val_12058 = (state_12057[(1)]);
if((state_val_12058 === (7))){
var inst_11970 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12059_13252 = state_12057__$1;
(statearr_12059_13252[(2)] = inst_11970);

(statearr_12059_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (20))){
var inst_11982 = (state_12057[(7)]);
var state_12057__$1 = state_12057;
var statearr_12060_13253 = state_12057__$1;
(statearr_12060_13253[(2)] = inst_11982);

(statearr_12060_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (27))){
var state_12057__$1 = state_12057;
var statearr_12061_13254 = state_12057__$1;
(statearr_12061_13254[(2)] = null);

(statearr_12061_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (1))){
var inst_11957 = (state_12057[(8)]);
var inst_11957__$1 = calc_state();
var inst_11959 = (inst_11957__$1 == null);
var inst_11960 = cljs.core.not(inst_11959);
var state_12057__$1 = (function (){var statearr_12062 = state_12057;
(statearr_12062[(8)] = inst_11957__$1);

return statearr_12062;
})();
if(inst_11960){
var statearr_12063_13255 = state_12057__$1;
(statearr_12063_13255[(1)] = (2));

} else {
var statearr_12064_13256 = state_12057__$1;
(statearr_12064_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (24))){
var inst_12006 = (state_12057[(9)]);
var inst_12031 = (state_12057[(10)]);
var inst_12015 = (state_12057[(11)]);
var inst_12031__$1 = (inst_12006.cljs$core$IFn$_invoke$arity$1 ? inst_12006.cljs$core$IFn$_invoke$arity$1(inst_12015) : inst_12006.call(null,inst_12015));
var state_12057__$1 = (function (){var statearr_12065 = state_12057;
(statearr_12065[(10)] = inst_12031__$1);

return statearr_12065;
})();
if(cljs.core.truth_(inst_12031__$1)){
var statearr_12066_13257 = state_12057__$1;
(statearr_12066_13257[(1)] = (29));

} else {
var statearr_12067_13258 = state_12057__$1;
(statearr_12067_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (4))){
var inst_11973 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_11973)){
var statearr_12068_13259 = state_12057__$1;
(statearr_12068_13259[(1)] = (8));

} else {
var statearr_12069_13260 = state_12057__$1;
(statearr_12069_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (15))){
var inst_12000 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12000)){
var statearr_12070_13261 = state_12057__$1;
(statearr_12070_13261[(1)] = (19));

} else {
var statearr_12071_13262 = state_12057__$1;
(statearr_12071_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (21))){
var inst_12005 = (state_12057[(12)]);
var inst_12005__$1 = (state_12057[(2)]);
var inst_12006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12005__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12005__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12005__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12057__$1 = (function (){var statearr_12072 = state_12057;
(statearr_12072[(9)] = inst_12006);

(statearr_12072[(12)] = inst_12005__$1);

(statearr_12072[(13)] = inst_12007);

return statearr_12072;
})();
return cljs.core.async.ioc_alts_BANG_(state_12057__$1,(22),inst_12008);
} else {
if((state_val_12058 === (31))){
var inst_12039 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12039)){
var statearr_12077_13263 = state_12057__$1;
(statearr_12077_13263[(1)] = (32));

} else {
var statearr_12078_13264 = state_12057__$1;
(statearr_12078_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (32))){
var inst_12014 = (state_12057[(14)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12057__$1,(35),out,inst_12014);
} else {
if((state_val_12058 === (33))){
var inst_12005 = (state_12057[(12)]);
var inst_11982 = inst_12005;
var state_12057__$1 = (function (){var statearr_12079 = state_12057;
(statearr_12079[(7)] = inst_11982);

return statearr_12079;
})();
var statearr_12080_13265 = state_12057__$1;
(statearr_12080_13265[(2)] = null);

(statearr_12080_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (13))){
var inst_11982 = (state_12057[(7)]);
var inst_11989 = inst_11982.cljs$lang$protocol_mask$partition0$;
var inst_11990 = (inst_11989 & (64));
var inst_11991 = inst_11982.cljs$core$ISeq$;
var inst_11992 = (cljs.core.PROTOCOL_SENTINEL === inst_11991);
var inst_11993 = ((inst_11990) || (inst_11992));
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_11993)){
var statearr_12081_13266 = state_12057__$1;
(statearr_12081_13266[(1)] = (16));

} else {
var statearr_12082_13267 = state_12057__$1;
(statearr_12082_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (22))){
var inst_12014 = (state_12057[(14)]);
var inst_12015 = (state_12057[(11)]);
var inst_12013 = (state_12057[(2)]);
var inst_12014__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12013,(0),null);
var inst_12015__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12013,(1),null);
var inst_12016 = (inst_12014__$1 == null);
var inst_12017 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12015__$1,change);
var inst_12018 = ((inst_12016) || (inst_12017));
var state_12057__$1 = (function (){var statearr_12083 = state_12057;
(statearr_12083[(14)] = inst_12014__$1);

(statearr_12083[(11)] = inst_12015__$1);

return statearr_12083;
})();
if(cljs.core.truth_(inst_12018)){
var statearr_12084_13268 = state_12057__$1;
(statearr_12084_13268[(1)] = (23));

} else {
var statearr_12085_13269 = state_12057__$1;
(statearr_12085_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (36))){
var inst_12005 = (state_12057[(12)]);
var inst_11982 = inst_12005;
var state_12057__$1 = (function (){var statearr_12087 = state_12057;
(statearr_12087[(7)] = inst_11982);

return statearr_12087;
})();
var statearr_12088_13270 = state_12057__$1;
(statearr_12088_13270[(2)] = null);

(statearr_12088_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (29))){
var inst_12031 = (state_12057[(10)]);
var state_12057__$1 = state_12057;
var statearr_12089_13271 = state_12057__$1;
(statearr_12089_13271[(2)] = inst_12031);

(statearr_12089_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (6))){
var state_12057__$1 = state_12057;
var statearr_12090_13272 = state_12057__$1;
(statearr_12090_13272[(2)] = false);

(statearr_12090_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (28))){
var inst_12025 = (state_12057[(2)]);
var inst_12028 = calc_state();
var inst_11982 = inst_12028;
var state_12057__$1 = (function (){var statearr_12091 = state_12057;
(statearr_12091[(7)] = inst_11982);

(statearr_12091[(15)] = inst_12025);

return statearr_12091;
})();
var statearr_12092_13273 = state_12057__$1;
(statearr_12092_13273[(2)] = null);

(statearr_12092_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (25))){
var inst_12053 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12093_13274 = state_12057__$1;
(statearr_12093_13274[(2)] = inst_12053);

(statearr_12093_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (34))){
var inst_12051 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12094_13275 = state_12057__$1;
(statearr_12094_13275[(2)] = inst_12051);

(statearr_12094_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (17))){
var state_12057__$1 = state_12057;
var statearr_12097_13276 = state_12057__$1;
(statearr_12097_13276[(2)] = false);

(statearr_12097_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (3))){
var state_12057__$1 = state_12057;
var statearr_12099_13277 = state_12057__$1;
(statearr_12099_13277[(2)] = false);

(statearr_12099_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (12))){
var inst_12055 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12057__$1,inst_12055);
} else {
if((state_val_12058 === (2))){
var inst_11957 = (state_12057[(8)]);
var inst_11962 = inst_11957.cljs$lang$protocol_mask$partition0$;
var inst_11963 = (inst_11962 & (64));
var inst_11964 = inst_11957.cljs$core$ISeq$;
var inst_11965 = (cljs.core.PROTOCOL_SENTINEL === inst_11964);
var inst_11966 = ((inst_11963) || (inst_11965));
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_11966)){
var statearr_12101_13278 = state_12057__$1;
(statearr_12101_13278[(1)] = (5));

} else {
var statearr_12102_13279 = state_12057__$1;
(statearr_12102_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (23))){
var inst_12014 = (state_12057[(14)]);
var inst_12020 = (inst_12014 == null);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12020)){
var statearr_12103_13280 = state_12057__$1;
(statearr_12103_13280[(1)] = (26));

} else {
var statearr_12104_13281 = state_12057__$1;
(statearr_12104_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (35))){
var inst_12042 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12042)){
var statearr_12105_13282 = state_12057__$1;
(statearr_12105_13282[(1)] = (36));

} else {
var statearr_12106_13283 = state_12057__$1;
(statearr_12106_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (19))){
var inst_11982 = (state_12057[(7)]);
var inst_12002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11982);
var state_12057__$1 = state_12057;
var statearr_12107_13284 = state_12057__$1;
(statearr_12107_13284[(2)] = inst_12002);

(statearr_12107_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (11))){
var inst_11982 = (state_12057[(7)]);
var inst_11986 = (inst_11982 == null);
var inst_11987 = cljs.core.not(inst_11986);
var state_12057__$1 = state_12057;
if(inst_11987){
var statearr_12108_13285 = state_12057__$1;
(statearr_12108_13285[(1)] = (13));

} else {
var statearr_12109_13286 = state_12057__$1;
(statearr_12109_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (9))){
var inst_11957 = (state_12057[(8)]);
var state_12057__$1 = state_12057;
var statearr_12111_13287 = state_12057__$1;
(statearr_12111_13287[(2)] = inst_11957);

(statearr_12111_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (5))){
var state_12057__$1 = state_12057;
var statearr_12112_13288 = state_12057__$1;
(statearr_12112_13288[(2)] = true);

(statearr_12112_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (14))){
var state_12057__$1 = state_12057;
var statearr_12113_13289 = state_12057__$1;
(statearr_12113_13289[(2)] = false);

(statearr_12113_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (26))){
var inst_12015 = (state_12057[(11)]);
var inst_12022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12015);
var state_12057__$1 = state_12057;
var statearr_12114_13290 = state_12057__$1;
(statearr_12114_13290[(2)] = inst_12022);

(statearr_12114_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (16))){
var state_12057__$1 = state_12057;
var statearr_12115_13291 = state_12057__$1;
(statearr_12115_13291[(2)] = true);

(statearr_12115_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (38))){
var inst_12047 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12116_13292 = state_12057__$1;
(statearr_12116_13292[(2)] = inst_12047);

(statearr_12116_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (30))){
var inst_12006 = (state_12057[(9)]);
var inst_12015 = (state_12057[(11)]);
var inst_12007 = (state_12057[(13)]);
var inst_12034 = cljs.core.empty_QMARK_(inst_12006);
var inst_12035 = (inst_12007.cljs$core$IFn$_invoke$arity$1 ? inst_12007.cljs$core$IFn$_invoke$arity$1(inst_12015) : inst_12007.call(null,inst_12015));
var inst_12036 = cljs.core.not(inst_12035);
var inst_12037 = ((inst_12034) && (inst_12036));
var state_12057__$1 = state_12057;
var statearr_12117_13293 = state_12057__$1;
(statearr_12117_13293[(2)] = inst_12037);

(statearr_12117_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (10))){
var inst_11957 = (state_12057[(8)]);
var inst_11978 = (state_12057[(2)]);
var inst_11979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11978,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11978,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11978,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11982 = inst_11957;
var state_12057__$1 = (function (){var statearr_12118 = state_12057;
(statearr_12118[(16)] = inst_11979);

(statearr_12118[(17)] = inst_11981);

(statearr_12118[(7)] = inst_11982);

(statearr_12118[(18)] = inst_11980);

return statearr_12118;
})();
var statearr_12119_13294 = state_12057__$1;
(statearr_12119_13294[(2)] = null);

(statearr_12119_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (18))){
var inst_11997 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12120_13295 = state_12057__$1;
(statearr_12120_13295[(2)] = inst_11997);

(statearr_12120_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (37))){
var state_12057__$1 = state_12057;
var statearr_12121_13296 = state_12057__$1;
(statearr_12121_13296[(2)] = null);

(statearr_12121_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (8))){
var inst_11957 = (state_12057[(8)]);
var inst_11975 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11957);
var state_12057__$1 = state_12057;
var statearr_12122_13297 = state_12057__$1;
(statearr_12122_13297[(2)] = inst_11975);

(statearr_12122_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10778__auto__ = null;
var cljs$core$async$mix_$_state_machine__10778__auto____0 = (function (){
var statearr_12123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12123[(0)] = cljs$core$async$mix_$_state_machine__10778__auto__);

(statearr_12123[(1)] = (1));

return statearr_12123;
});
var cljs$core$async$mix_$_state_machine__10778__auto____1 = (function (state_12057){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12057);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12124){var ex__10781__auto__ = e12124;
var statearr_12125_13298 = state_12057;
(statearr_12125_13298[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12057[(4)]))){
var statearr_12126_13299 = state_12057;
(statearr_12126_13299[(1)] = cljs.core.first((state_12057[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12057;
state_12057 = G__13300;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10778__auto__ = function(state_12057){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10778__auto____1.call(this,state_12057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10778__auto____0;
cljs$core$async$mix_$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10778__auto____1;
return cljs$core$async$mix_$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12127 = f__10924__auto__();
(statearr_12127[(6)] = c__10923__auto___13251);

return statearr_12127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
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
var G__12141 = arguments.length;
switch (G__12141) {
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
var G__12146 = arguments.length;
switch (G__12146) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12142_SHARP_){
if(cljs.core.truth_((p1__12142_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12142_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12142_SHARP_.call(null,topic)))){
return p1__12142_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12142_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12150 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12151){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12151 = meta12151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12152,meta12151__$1){
var self__ = this;
var _12152__$1 = this;
return (new cljs.core.async.t_cljs$core$async12150(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12151__$1));
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12152){
var self__ = this;
var _12152__$1 = this;
return self__.meta12151;
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12151","meta12151",-2121112602,null)], null);
}));

(cljs.core.async.t_cljs$core$async12150.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12150");

(cljs.core.async.t_cljs$core$async12150.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12150");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12150.
 */
cljs.core.async.__GT_t_cljs$core$async12150 = (function cljs$core$async$__GT_t_cljs$core$async12150(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12151){
return (new cljs.core.async.t_cljs$core$async12150(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12151));
});

}

return (new cljs.core.async.t_cljs$core$async12150(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10923__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12230){
var state_val_12231 = (state_12230[(1)]);
if((state_val_12231 === (7))){
var inst_12226 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
var statearr_12232_13308 = state_12230__$1;
(statearr_12232_13308[(2)] = inst_12226);

(statearr_12232_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (20))){
var state_12230__$1 = state_12230;
var statearr_12234_13309 = state_12230__$1;
(statearr_12234_13309[(2)] = null);

(statearr_12234_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (1))){
var state_12230__$1 = state_12230;
var statearr_12237_13310 = state_12230__$1;
(statearr_12237_13310[(2)] = null);

(statearr_12237_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (24))){
var inst_12209 = (state_12230[(7)]);
var inst_12218 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12209);
var state_12230__$1 = state_12230;
var statearr_12240_13311 = state_12230__$1;
(statearr_12240_13311[(2)] = inst_12218);

(statearr_12240_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (4))){
var inst_12156 = (state_12230[(8)]);
var inst_12156__$1 = (state_12230[(2)]);
var inst_12157 = (inst_12156__$1 == null);
var state_12230__$1 = (function (){var statearr_12241 = state_12230;
(statearr_12241[(8)] = inst_12156__$1);

return statearr_12241;
})();
if(cljs.core.truth_(inst_12157)){
var statearr_12242_13312 = state_12230__$1;
(statearr_12242_13312[(1)] = (5));

} else {
var statearr_12243_13313 = state_12230__$1;
(statearr_12243_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (15))){
var inst_12202 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
var statearr_12245_13314 = state_12230__$1;
(statearr_12245_13314[(2)] = inst_12202);

(statearr_12245_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (21))){
var inst_12223 = (state_12230[(2)]);
var state_12230__$1 = (function (){var statearr_12247 = state_12230;
(statearr_12247[(9)] = inst_12223);

return statearr_12247;
})();
var statearr_12248_13315 = state_12230__$1;
(statearr_12248_13315[(2)] = null);

(statearr_12248_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (13))){
var inst_12182 = (state_12230[(10)]);
var inst_12184 = cljs.core.chunked_seq_QMARK_(inst_12182);
var state_12230__$1 = state_12230;
if(inst_12184){
var statearr_12252_13316 = state_12230__$1;
(statearr_12252_13316[(1)] = (16));

} else {
var statearr_12253_13317 = state_12230__$1;
(statearr_12253_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (22))){
var inst_12215 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
if(cljs.core.truth_(inst_12215)){
var statearr_12254_13318 = state_12230__$1;
(statearr_12254_13318[(1)] = (23));

} else {
var statearr_12255_13319 = state_12230__$1;
(statearr_12255_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (6))){
var inst_12209 = (state_12230[(7)]);
var inst_12211 = (state_12230[(11)]);
var inst_12156 = (state_12230[(8)]);
var inst_12209__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12156) : topic_fn.call(null,inst_12156));
var inst_12210 = cljs.core.deref(mults);
var inst_12211__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12210,inst_12209__$1);
var state_12230__$1 = (function (){var statearr_12256 = state_12230;
(statearr_12256[(7)] = inst_12209__$1);

(statearr_12256[(11)] = inst_12211__$1);

return statearr_12256;
})();
if(cljs.core.truth_(inst_12211__$1)){
var statearr_12257_13320 = state_12230__$1;
(statearr_12257_13320[(1)] = (19));

} else {
var statearr_12258_13321 = state_12230__$1;
(statearr_12258_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (25))){
var inst_12220 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
var statearr_12259_13322 = state_12230__$1;
(statearr_12259_13322[(2)] = inst_12220);

(statearr_12259_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (17))){
var inst_12182 = (state_12230[(10)]);
var inst_12193 = cljs.core.first(inst_12182);
var inst_12194 = cljs.core.async.muxch_STAR_(inst_12193);
var inst_12195 = cljs.core.async.close_BANG_(inst_12194);
var inst_12196 = cljs.core.next(inst_12182);
var inst_12166 = inst_12196;
var inst_12167 = null;
var inst_12168 = (0);
var inst_12169 = (0);
var state_12230__$1 = (function (){var statearr_12260 = state_12230;
(statearr_12260[(12)] = inst_12168);

(statearr_12260[(13)] = inst_12167);

(statearr_12260[(14)] = inst_12166);

(statearr_12260[(15)] = inst_12169);

(statearr_12260[(16)] = inst_12195);

return statearr_12260;
})();
var statearr_12261_13323 = state_12230__$1;
(statearr_12261_13323[(2)] = null);

(statearr_12261_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (3))){
var inst_12228 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12230__$1,inst_12228);
} else {
if((state_val_12231 === (12))){
var inst_12204 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
var statearr_12262_13324 = state_12230__$1;
(statearr_12262_13324[(2)] = inst_12204);

(statearr_12262_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (2))){
var state_12230__$1 = state_12230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12230__$1,(4),ch);
} else {
if((state_val_12231 === (23))){
var state_12230__$1 = state_12230;
var statearr_12263_13325 = state_12230__$1;
(statearr_12263_13325[(2)] = null);

(statearr_12263_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (19))){
var inst_12211 = (state_12230[(11)]);
var inst_12156 = (state_12230[(8)]);
var inst_12213 = cljs.core.async.muxch_STAR_(inst_12211);
var state_12230__$1 = state_12230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12230__$1,(22),inst_12213,inst_12156);
} else {
if((state_val_12231 === (11))){
var inst_12182 = (state_12230[(10)]);
var inst_12166 = (state_12230[(14)]);
var inst_12182__$1 = cljs.core.seq(inst_12166);
var state_12230__$1 = (function (){var statearr_12264 = state_12230;
(statearr_12264[(10)] = inst_12182__$1);

return statearr_12264;
})();
if(inst_12182__$1){
var statearr_12265_13326 = state_12230__$1;
(statearr_12265_13326[(1)] = (13));

} else {
var statearr_12266_13327 = state_12230__$1;
(statearr_12266_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (9))){
var inst_12206 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
var statearr_12267_13328 = state_12230__$1;
(statearr_12267_13328[(2)] = inst_12206);

(statearr_12267_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (5))){
var inst_12163 = cljs.core.deref(mults);
var inst_12164 = cljs.core.vals(inst_12163);
var inst_12165 = cljs.core.seq(inst_12164);
var inst_12166 = inst_12165;
var inst_12167 = null;
var inst_12168 = (0);
var inst_12169 = (0);
var state_12230__$1 = (function (){var statearr_12268 = state_12230;
(statearr_12268[(12)] = inst_12168);

(statearr_12268[(13)] = inst_12167);

(statearr_12268[(14)] = inst_12166);

(statearr_12268[(15)] = inst_12169);

return statearr_12268;
})();
var statearr_12269_13329 = state_12230__$1;
(statearr_12269_13329[(2)] = null);

(statearr_12269_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (14))){
var state_12230__$1 = state_12230;
var statearr_12273_13330 = state_12230__$1;
(statearr_12273_13330[(2)] = null);

(statearr_12273_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (16))){
var inst_12182 = (state_12230[(10)]);
var inst_12188 = cljs.core.chunk_first(inst_12182);
var inst_12189 = cljs.core.chunk_rest(inst_12182);
var inst_12190 = cljs.core.count(inst_12188);
var inst_12166 = inst_12189;
var inst_12167 = inst_12188;
var inst_12168 = inst_12190;
var inst_12169 = (0);
var state_12230__$1 = (function (){var statearr_12274 = state_12230;
(statearr_12274[(12)] = inst_12168);

(statearr_12274[(13)] = inst_12167);

(statearr_12274[(14)] = inst_12166);

(statearr_12274[(15)] = inst_12169);

return statearr_12274;
})();
var statearr_12275_13331 = state_12230__$1;
(statearr_12275_13331[(2)] = null);

(statearr_12275_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (10))){
var inst_12168 = (state_12230[(12)]);
var inst_12167 = (state_12230[(13)]);
var inst_12166 = (state_12230[(14)]);
var inst_12169 = (state_12230[(15)]);
var inst_12175 = cljs.core._nth(inst_12167,inst_12169);
var inst_12176 = cljs.core.async.muxch_STAR_(inst_12175);
var inst_12177 = cljs.core.async.close_BANG_(inst_12176);
var inst_12179 = (inst_12169 + (1));
var tmp12270 = inst_12168;
var tmp12271 = inst_12167;
var tmp12272 = inst_12166;
var inst_12166__$1 = tmp12272;
var inst_12167__$1 = tmp12271;
var inst_12168__$1 = tmp12270;
var inst_12169__$1 = inst_12179;
var state_12230__$1 = (function (){var statearr_12276 = state_12230;
(statearr_12276[(17)] = inst_12177);

(statearr_12276[(12)] = inst_12168__$1);

(statearr_12276[(13)] = inst_12167__$1);

(statearr_12276[(14)] = inst_12166__$1);

(statearr_12276[(15)] = inst_12169__$1);

return statearr_12276;
})();
var statearr_12277_13332 = state_12230__$1;
(statearr_12277_13332[(2)] = null);

(statearr_12277_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (18))){
var inst_12199 = (state_12230[(2)]);
var state_12230__$1 = state_12230;
var statearr_12278_13333 = state_12230__$1;
(statearr_12278_13333[(2)] = inst_12199);

(statearr_12278_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12231 === (8))){
var inst_12168 = (state_12230[(12)]);
var inst_12169 = (state_12230[(15)]);
var inst_12171 = (inst_12169 < inst_12168);
var inst_12172 = inst_12171;
var state_12230__$1 = state_12230;
if(cljs.core.truth_(inst_12172)){
var statearr_12279_13334 = state_12230__$1;
(statearr_12279_13334[(1)] = (10));

} else {
var statearr_12280_13335 = state_12230__$1;
(statearr_12280_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12281[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12281[(1)] = (1));

return statearr_12281;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12230){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12230);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12282){var ex__10781__auto__ = e12282;
var statearr_12283_13336 = state_12230;
(statearr_12283_13336[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12230[(4)]))){
var statearr_12284_13337 = state_12230;
(statearr_12284_13337[(1)] = cljs.core.first((state_12230[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12230;
state_12230 = G__13338;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12290 = f__10924__auto__();
(statearr_12290[(6)] = c__10923__auto___13307);

return statearr_12290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
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
var G__12297 = arguments.length;
switch (G__12297) {
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
var G__12310 = arguments.length;
switch (G__12310) {
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
var G__12312 = arguments.length;
switch (G__12312) {
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
var c__10923__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12359){
var state_val_12360 = (state_12359[(1)]);
if((state_val_12360 === (7))){
var state_12359__$1 = state_12359;
var statearr_12361_13343 = state_12359__$1;
(statearr_12361_13343[(2)] = null);

(statearr_12361_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (1))){
var state_12359__$1 = state_12359;
var statearr_12362_13344 = state_12359__$1;
(statearr_12362_13344[(2)] = null);

(statearr_12362_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (4))){
var inst_12316 = (state_12359[(7)]);
var inst_12315 = (state_12359[(8)]);
var inst_12318 = (inst_12316 < inst_12315);
var state_12359__$1 = state_12359;
if(cljs.core.truth_(inst_12318)){
var statearr_12363_13345 = state_12359__$1;
(statearr_12363_13345[(1)] = (6));

} else {
var statearr_12364_13346 = state_12359__$1;
(statearr_12364_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (15))){
var inst_12345 = (state_12359[(9)]);
var inst_12350 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12345);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12359__$1,(17),out,inst_12350);
} else {
if((state_val_12360 === (13))){
var inst_12345 = (state_12359[(9)]);
var inst_12345__$1 = (state_12359[(2)]);
var inst_12346 = cljs.core.some(cljs.core.nil_QMARK_,inst_12345__$1);
var state_12359__$1 = (function (){var statearr_12365 = state_12359;
(statearr_12365[(9)] = inst_12345__$1);

return statearr_12365;
})();
if(cljs.core.truth_(inst_12346)){
var statearr_12366_13347 = state_12359__$1;
(statearr_12366_13347[(1)] = (14));

} else {
var statearr_12367_13348 = state_12359__$1;
(statearr_12367_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (6))){
var state_12359__$1 = state_12359;
var statearr_12368_13349 = state_12359__$1;
(statearr_12368_13349[(2)] = null);

(statearr_12368_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (17))){
var inst_12352 = (state_12359[(2)]);
var state_12359__$1 = (function (){var statearr_12373 = state_12359;
(statearr_12373[(10)] = inst_12352);

return statearr_12373;
})();
var statearr_12374_13350 = state_12359__$1;
(statearr_12374_13350[(2)] = null);

(statearr_12374_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (3))){
var inst_12357 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12359__$1,inst_12357);
} else {
if((state_val_12360 === (12))){
var _ = (function (){var statearr_12375 = state_12359;
(statearr_12375[(4)] = cljs.core.rest((state_12359[(4)])));

return statearr_12375;
})();
var state_12359__$1 = state_12359;
var ex12372 = (state_12359__$1[(2)]);
var statearr_12376_13351 = state_12359__$1;
(statearr_12376_13351[(5)] = ex12372);


if((ex12372 instanceof Object)){
var statearr_12378_13352 = state_12359__$1;
(statearr_12378_13352[(1)] = (11));

(statearr_12378_13352[(5)] = null);

} else {
throw ex12372;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (2))){
var inst_12314 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12315 = cnt;
var inst_12316 = (0);
var state_12359__$1 = (function (){var statearr_12379 = state_12359;
(statearr_12379[(7)] = inst_12316);

(statearr_12379[(11)] = inst_12314);

(statearr_12379[(8)] = inst_12315);

return statearr_12379;
})();
var statearr_12380_13353 = state_12359__$1;
(statearr_12380_13353[(2)] = null);

(statearr_12380_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (11))){
var inst_12324 = (state_12359[(2)]);
var inst_12325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12359__$1 = (function (){var statearr_12381 = state_12359;
(statearr_12381[(12)] = inst_12324);

return statearr_12381;
})();
var statearr_12382_13354 = state_12359__$1;
(statearr_12382_13354[(2)] = inst_12325);

(statearr_12382_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (9))){
var inst_12316 = (state_12359[(7)]);
var _ = (function (){var statearr_12383 = state_12359;
(statearr_12383[(4)] = cljs.core.cons((12),(state_12359[(4)])));

return statearr_12383;
})();
var inst_12331 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12316) : chs__$1.call(null,inst_12316));
var inst_12332 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12316) : done.call(null,inst_12316));
var inst_12333 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12331,inst_12332);
var ___$1 = (function (){var statearr_12384 = state_12359;
(statearr_12384[(4)] = cljs.core.rest((state_12359[(4)])));

return statearr_12384;
})();
var state_12359__$1 = state_12359;
var statearr_12385_13355 = state_12359__$1;
(statearr_12385_13355[(2)] = inst_12333);

(statearr_12385_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (5))){
var inst_12343 = (state_12359[(2)]);
var state_12359__$1 = (function (){var statearr_12386 = state_12359;
(statearr_12386[(13)] = inst_12343);

return statearr_12386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12359__$1,(13),dchan);
} else {
if((state_val_12360 === (14))){
var inst_12348 = cljs.core.async.close_BANG_(out);
var state_12359__$1 = state_12359;
var statearr_12387_13356 = state_12359__$1;
(statearr_12387_13356[(2)] = inst_12348);

(statearr_12387_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (16))){
var inst_12355 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
var statearr_12388_13357 = state_12359__$1;
(statearr_12388_13357[(2)] = inst_12355);

(statearr_12388_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (10))){
var inst_12316 = (state_12359[(7)]);
var inst_12336 = (state_12359[(2)]);
var inst_12337 = (inst_12316 + (1));
var inst_12316__$1 = inst_12337;
var state_12359__$1 = (function (){var statearr_12389 = state_12359;
(statearr_12389[(7)] = inst_12316__$1);

(statearr_12389[(14)] = inst_12336);

return statearr_12389;
})();
var statearr_12390_13358 = state_12359__$1;
(statearr_12390_13358[(2)] = null);

(statearr_12390_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (8))){
var inst_12341 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
var statearr_12391_13359 = state_12359__$1;
(statearr_12391_13359[(2)] = inst_12341);

(statearr_12391_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12392[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12392[(1)] = (1));

return statearr_12392;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12359){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12359);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12393){var ex__10781__auto__ = e12393;
var statearr_12394_13360 = state_12359;
(statearr_12394_13360[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12359[(4)]))){
var statearr_12395_13361 = state_12359;
(statearr_12395_13361[(1)] = cljs.core.first((state_12359[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12359;
state_12359 = G__13362;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12396 = f__10924__auto__();
(statearr_12396[(6)] = c__10923__auto___13342);

return statearr_12396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
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
var G__12399 = arguments.length;
switch (G__12399) {
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
var c__10923__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12443){
var state_val_12444 = (state_12443[(1)]);
if((state_val_12444 === (7))){
var inst_12415 = (state_12443[(7)]);
var inst_12414 = (state_12443[(8)]);
var inst_12414__$1 = (state_12443[(2)]);
var inst_12415__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12414__$1,(0),null);
var inst_12420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12414__$1,(1),null);
var inst_12421 = (inst_12415__$1 == null);
var state_12443__$1 = (function (){var statearr_12446 = state_12443;
(statearr_12446[(7)] = inst_12415__$1);

(statearr_12446[(9)] = inst_12420);

(statearr_12446[(8)] = inst_12414__$1);

return statearr_12446;
})();
if(cljs.core.truth_(inst_12421)){
var statearr_12450_13365 = state_12443__$1;
(statearr_12450_13365[(1)] = (8));

} else {
var statearr_12451_13366 = state_12443__$1;
(statearr_12451_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (1))){
var inst_12400 = cljs.core.vec(chs);
var inst_12401 = inst_12400;
var state_12443__$1 = (function (){var statearr_12452 = state_12443;
(statearr_12452[(10)] = inst_12401);

return statearr_12452;
})();
var statearr_12453_13367 = state_12443__$1;
(statearr_12453_13367[(2)] = null);

(statearr_12453_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (4))){
var inst_12401 = (state_12443[(10)]);
var state_12443__$1 = state_12443;
return cljs.core.async.ioc_alts_BANG_(state_12443__$1,(7),inst_12401);
} else {
if((state_val_12444 === (6))){
var inst_12439 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12457_13368 = state_12443__$1;
(statearr_12457_13368[(2)] = inst_12439);

(statearr_12457_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (3))){
var inst_12441 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12443__$1,inst_12441);
} else {
if((state_val_12444 === (2))){
var inst_12401 = (state_12443[(10)]);
var inst_12407 = cljs.core.count(inst_12401);
var inst_12408 = (inst_12407 > (0));
var state_12443__$1 = state_12443;
if(cljs.core.truth_(inst_12408)){
var statearr_12462_13369 = state_12443__$1;
(statearr_12462_13369[(1)] = (4));

} else {
var statearr_12463_13370 = state_12443__$1;
(statearr_12463_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (11))){
var inst_12401 = (state_12443[(10)]);
var inst_12432 = (state_12443[(2)]);
var tmp12458 = inst_12401;
var inst_12401__$1 = tmp12458;
var state_12443__$1 = (function (){var statearr_12464 = state_12443;
(statearr_12464[(10)] = inst_12401__$1);

(statearr_12464[(11)] = inst_12432);

return statearr_12464;
})();
var statearr_12465_13371 = state_12443__$1;
(statearr_12465_13371[(2)] = null);

(statearr_12465_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (9))){
var inst_12415 = (state_12443[(7)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12443__$1,(11),out,inst_12415);
} else {
if((state_val_12444 === (5))){
var inst_12437 = cljs.core.async.close_BANG_(out);
var state_12443__$1 = state_12443;
var statearr_12473_13372 = state_12443__$1;
(statearr_12473_13372[(2)] = inst_12437);

(statearr_12473_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (10))){
var inst_12435 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12475_13373 = state_12443__$1;
(statearr_12475_13373[(2)] = inst_12435);

(statearr_12475_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (8))){
var inst_12401 = (state_12443[(10)]);
var inst_12415 = (state_12443[(7)]);
var inst_12420 = (state_12443[(9)]);
var inst_12414 = (state_12443[(8)]);
var inst_12427 = (function (){var cs = inst_12401;
var vec__12410 = inst_12414;
var v = inst_12415;
var c = inst_12420;
return (function (p1__12397_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12397_SHARP_);
});
})();
var inst_12428 = cljs.core.filterv(inst_12427,inst_12401);
var inst_12401__$1 = inst_12428;
var state_12443__$1 = (function (){var statearr_12491 = state_12443;
(statearr_12491[(10)] = inst_12401__$1);

return statearr_12491;
})();
var statearr_12492_13374 = state_12443__$1;
(statearr_12492_13374[(2)] = null);

(statearr_12492_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12493[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12493[(1)] = (1));

return statearr_12493;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12443){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12443);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12494){var ex__10781__auto__ = e12494;
var statearr_12495_13375 = state_12443;
(statearr_12495_13375[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12443[(4)]))){
var statearr_12496_13376 = state_12443;
(statearr_12496_13376[(1)] = cljs.core.first((state_12443[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12443;
state_12443 = G__13377;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12497 = f__10924__auto__();
(statearr_12497[(6)] = c__10923__auto___13364);

return statearr_12497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
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
var G__12499 = arguments.length;
switch (G__12499) {
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
var c__10923__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12523){
var state_val_12524 = (state_12523[(1)]);
if((state_val_12524 === (7))){
var inst_12505 = (state_12523[(7)]);
var inst_12505__$1 = (state_12523[(2)]);
var inst_12506 = (inst_12505__$1 == null);
var inst_12507 = cljs.core.not(inst_12506);
var state_12523__$1 = (function (){var statearr_12525 = state_12523;
(statearr_12525[(7)] = inst_12505__$1);

return statearr_12525;
})();
if(inst_12507){
var statearr_12526_13380 = state_12523__$1;
(statearr_12526_13380[(1)] = (8));

} else {
var statearr_12527_13381 = state_12523__$1;
(statearr_12527_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (1))){
var inst_12500 = (0);
var state_12523__$1 = (function (){var statearr_12528 = state_12523;
(statearr_12528[(8)] = inst_12500);

return statearr_12528;
})();
var statearr_12529_13382 = state_12523__$1;
(statearr_12529_13382[(2)] = null);

(statearr_12529_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (4))){
var state_12523__$1 = state_12523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12523__$1,(7),ch);
} else {
if((state_val_12524 === (6))){
var inst_12518 = (state_12523[(2)]);
var state_12523__$1 = state_12523;
var statearr_12530_13383 = state_12523__$1;
(statearr_12530_13383[(2)] = inst_12518);

(statearr_12530_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (3))){
var inst_12520 = (state_12523[(2)]);
var inst_12521 = cljs.core.async.close_BANG_(out);
var state_12523__$1 = (function (){var statearr_12531 = state_12523;
(statearr_12531[(9)] = inst_12520);

return statearr_12531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12523__$1,inst_12521);
} else {
if((state_val_12524 === (2))){
var inst_12500 = (state_12523[(8)]);
var inst_12502 = (inst_12500 < n);
var state_12523__$1 = state_12523;
if(cljs.core.truth_(inst_12502)){
var statearr_12532_13384 = state_12523__$1;
(statearr_12532_13384[(1)] = (4));

} else {
var statearr_12533_13385 = state_12523__$1;
(statearr_12533_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (11))){
var inst_12500 = (state_12523[(8)]);
var inst_12510 = (state_12523[(2)]);
var inst_12511 = (inst_12500 + (1));
var inst_12500__$1 = inst_12511;
var state_12523__$1 = (function (){var statearr_12534 = state_12523;
(statearr_12534[(8)] = inst_12500__$1);

(statearr_12534[(10)] = inst_12510);

return statearr_12534;
})();
var statearr_12535_13386 = state_12523__$1;
(statearr_12535_13386[(2)] = null);

(statearr_12535_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (9))){
var state_12523__$1 = state_12523;
var statearr_12536_13387 = state_12523__$1;
(statearr_12536_13387[(2)] = null);

(statearr_12536_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (5))){
var state_12523__$1 = state_12523;
var statearr_12537_13388 = state_12523__$1;
(statearr_12537_13388[(2)] = null);

(statearr_12537_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (10))){
var inst_12515 = (state_12523[(2)]);
var state_12523__$1 = state_12523;
var statearr_12538_13389 = state_12523__$1;
(statearr_12538_13389[(2)] = inst_12515);

(statearr_12538_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (8))){
var inst_12505 = (state_12523[(7)]);
var state_12523__$1 = state_12523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12523__$1,(11),out,inst_12505);
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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12544[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12544[(1)] = (1));

return statearr_12544;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12523){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12523);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12546){var ex__10781__auto__ = e12546;
var statearr_12547_13390 = state_12523;
(statearr_12547_13390[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12523[(4)]))){
var statearr_12548_13391 = state_12523;
(statearr_12548_13391[(1)] = cljs.core.first((state_12523[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12523;
state_12523 = G__13392;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12550 = f__10924__auto__();
(statearr_12550[(6)] = c__10923__auto___13379);

return statearr_12550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12552 = (function (f,ch,meta12553){
this.f = f;
this.ch = ch;
this.meta12553 = meta12553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12554,meta12553__$1){
var self__ = this;
var _12554__$1 = this;
return (new cljs.core.async.t_cljs$core$async12552(self__.f,self__.ch,meta12553__$1));
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12554){
var self__ = this;
var _12554__$1 = this;
return self__.meta12553;
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12559 = (function (f,ch,meta12553,_,fn1,meta12560){
this.f = f;
this.ch = ch;
this.meta12553 = meta12553;
this._ = _;
this.fn1 = fn1;
this.meta12560 = meta12560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12561,meta12560__$1){
var self__ = this;
var _12561__$1 = this;
return (new cljs.core.async.t_cljs$core$async12559(self__.f,self__.ch,self__.meta12553,self__._,self__.fn1,meta12560__$1));
}));

(cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12561){
var self__ = this;
var _12561__$1 = this;
return self__.meta12560;
}));

(cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12551_SHARP_){
var G__12572 = (((p1__12551_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12551_SHARP_) : self__.f.call(null,p1__12551_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12572) : f1.call(null,G__12572));
});
}));

(cljs.core.async.t_cljs$core$async12559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12553","meta12553",-106559428,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12552","cljs.core.async/t_cljs$core$async12552",-37019604,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12560","meta12560",-1795378817,null)], null);
}));

(cljs.core.async.t_cljs$core$async12559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12559");

(cljs.core.async.t_cljs$core$async12559.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12559.
 */
cljs.core.async.__GT_t_cljs$core$async12559 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12559(f__$1,ch__$1,meta12553__$1,___$2,fn1__$1,meta12560){
return (new cljs.core.async.t_cljs$core$async12559(f__$1,ch__$1,meta12553__$1,___$2,fn1__$1,meta12560));
});

}

return (new cljs.core.async.t_cljs$core$async12559(self__.f,self__.ch,self__.meta12553,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12585 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12585) : self__.f.call(null,G__12585));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12553","meta12553",-106559428,null)], null);
}));

(cljs.core.async.t_cljs$core$async12552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12552");

(cljs.core.async.t_cljs$core$async12552.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12552.
 */
cljs.core.async.__GT_t_cljs$core$async12552 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12552(f__$1,ch__$1,meta12553){
return (new cljs.core.async.t_cljs$core$async12552(f__$1,ch__$1,meta12553));
});

}

return (new cljs.core.async.t_cljs$core$async12552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12620 = (function (f,ch,meta12621){
this.f = f;
this.ch = ch;
this.meta12621 = meta12621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12622,meta12621__$1){
var self__ = this;
var _12622__$1 = this;
return (new cljs.core.async.t_cljs$core$async12620(self__.f,self__.ch,meta12621__$1));
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12622){
var self__ = this;
var _12622__$1 = this;
return self__.meta12621;
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12621","meta12621",1621311316,null)], null);
}));

(cljs.core.async.t_cljs$core$async12620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12620");

(cljs.core.async.t_cljs$core$async12620.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12620.
 */
cljs.core.async.__GT_t_cljs$core$async12620 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12620(f__$1,ch__$1,meta12621){
return (new cljs.core.async.t_cljs$core$async12620(f__$1,ch__$1,meta12621));
});

}

return (new cljs.core.async.t_cljs$core$async12620(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12623 = (function (p,ch,meta12624){
this.p = p;
this.ch = ch;
this.meta12624 = meta12624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12625,meta12624__$1){
var self__ = this;
var _12625__$1 = this;
return (new cljs.core.async.t_cljs$core$async12623(self__.p,self__.ch,meta12624__$1));
}));

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12625){
var self__ = this;
var _12625__$1 = this;
return self__.meta12624;
}));

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12624","meta12624",1487564665,null)], null);
}));

(cljs.core.async.t_cljs$core$async12623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12623");

(cljs.core.async.t_cljs$core$async12623.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12623.
 */
cljs.core.async.__GT_t_cljs$core$async12623 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12623(p__$1,ch__$1,meta12624){
return (new cljs.core.async.t_cljs$core$async12623(p__$1,ch__$1,meta12624));
});

}

return (new cljs.core.async.t_cljs$core$async12623(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12632 = arguments.length;
switch (G__12632) {
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
var c__10923__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12656){
var state_val_12657 = (state_12656[(1)]);
if((state_val_12657 === (7))){
var inst_12652 = (state_12656[(2)]);
var state_12656__$1 = state_12656;
var statearr_12658_13395 = state_12656__$1;
(statearr_12658_13395[(2)] = inst_12652);

(statearr_12658_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (1))){
var state_12656__$1 = state_12656;
var statearr_12659_13396 = state_12656__$1;
(statearr_12659_13396[(2)] = null);

(statearr_12659_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (4))){
var inst_12636 = (state_12656[(7)]);
var inst_12636__$1 = (state_12656[(2)]);
var inst_12637 = (inst_12636__$1 == null);
var state_12656__$1 = (function (){var statearr_12660 = state_12656;
(statearr_12660[(7)] = inst_12636__$1);

return statearr_12660;
})();
if(cljs.core.truth_(inst_12637)){
var statearr_12661_13397 = state_12656__$1;
(statearr_12661_13397[(1)] = (5));

} else {
var statearr_12662_13398 = state_12656__$1;
(statearr_12662_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (6))){
var inst_12636 = (state_12656[(7)]);
var inst_12642 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12636) : p.call(null,inst_12636));
var state_12656__$1 = state_12656;
if(cljs.core.truth_(inst_12642)){
var statearr_12663_13399 = state_12656__$1;
(statearr_12663_13399[(1)] = (8));

} else {
var statearr_12664_13400 = state_12656__$1;
(statearr_12664_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (3))){
var inst_12654 = (state_12656[(2)]);
var state_12656__$1 = state_12656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12656__$1,inst_12654);
} else {
if((state_val_12657 === (2))){
var state_12656__$1 = state_12656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12656__$1,(4),ch);
} else {
if((state_val_12657 === (11))){
var inst_12646 = (state_12656[(2)]);
var state_12656__$1 = state_12656;
var statearr_12665_13401 = state_12656__$1;
(statearr_12665_13401[(2)] = inst_12646);

(statearr_12665_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (9))){
var state_12656__$1 = state_12656;
var statearr_12666_13402 = state_12656__$1;
(statearr_12666_13402[(2)] = null);

(statearr_12666_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (5))){
var inst_12640 = cljs.core.async.close_BANG_(out);
var state_12656__$1 = state_12656;
var statearr_12667_13403 = state_12656__$1;
(statearr_12667_13403[(2)] = inst_12640);

(statearr_12667_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (10))){
var inst_12649 = (state_12656[(2)]);
var state_12656__$1 = (function (){var statearr_12668 = state_12656;
(statearr_12668[(8)] = inst_12649);

return statearr_12668;
})();
var statearr_12669_13404 = state_12656__$1;
(statearr_12669_13404[(2)] = null);

(statearr_12669_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (8))){
var inst_12636 = (state_12656[(7)]);
var state_12656__$1 = state_12656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12656__$1,(11),out,inst_12636);
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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12670 = [null,null,null,null,null,null,null,null,null];
(statearr_12670[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12670[(1)] = (1));

return statearr_12670;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12656){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12656);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12671){var ex__10781__auto__ = e12671;
var statearr_12672_13405 = state_12656;
(statearr_12672_13405[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12656[(4)]))){
var statearr_12673_13406 = state_12656;
(statearr_12673_13406[(1)] = cljs.core.first((state_12656[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12656;
state_12656 = G__13407;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12674 = f__10924__auto__();
(statearr_12674[(6)] = c__10923__auto___13394);

return statearr_12674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12676 = arguments.length;
switch (G__12676) {
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
var c__10923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12742){
var state_val_12743 = (state_12742[(1)]);
if((state_val_12743 === (7))){
var inst_12737 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12746_13409 = state_12742__$1;
(statearr_12746_13409[(2)] = inst_12737);

(statearr_12746_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (20))){
var inst_12704 = (state_12742[(7)]);
var inst_12716 = (state_12742[(2)]);
var inst_12717 = cljs.core.next(inst_12704);
var inst_12690 = inst_12717;
var inst_12691 = null;
var inst_12692 = (0);
var inst_12693 = (0);
var state_12742__$1 = (function (){var statearr_12747 = state_12742;
(statearr_12747[(8)] = inst_12693);

(statearr_12747[(9)] = inst_12691);

(statearr_12747[(10)] = inst_12716);

(statearr_12747[(11)] = inst_12690);

(statearr_12747[(12)] = inst_12692);

return statearr_12747;
})();
var statearr_12748_13410 = state_12742__$1;
(statearr_12748_13410[(2)] = null);

(statearr_12748_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (1))){
var state_12742__$1 = state_12742;
var statearr_12749_13411 = state_12742__$1;
(statearr_12749_13411[(2)] = null);

(statearr_12749_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (4))){
var inst_12679 = (state_12742[(13)]);
var inst_12679__$1 = (state_12742[(2)]);
var inst_12680 = (inst_12679__$1 == null);
var state_12742__$1 = (function (){var statearr_12750 = state_12742;
(statearr_12750[(13)] = inst_12679__$1);

return statearr_12750;
})();
if(cljs.core.truth_(inst_12680)){
var statearr_12751_13412 = state_12742__$1;
(statearr_12751_13412[(1)] = (5));

} else {
var statearr_12752_13413 = state_12742__$1;
(statearr_12752_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (15))){
var state_12742__$1 = state_12742;
var statearr_12756_13414 = state_12742__$1;
(statearr_12756_13414[(2)] = null);

(statearr_12756_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (21))){
var state_12742__$1 = state_12742;
var statearr_12757_13415 = state_12742__$1;
(statearr_12757_13415[(2)] = null);

(statearr_12757_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (13))){
var inst_12693 = (state_12742[(8)]);
var inst_12691 = (state_12742[(9)]);
var inst_12690 = (state_12742[(11)]);
var inst_12692 = (state_12742[(12)]);
var inst_12700 = (state_12742[(2)]);
var inst_12701 = (inst_12693 + (1));
var tmp12753 = inst_12691;
var tmp12754 = inst_12690;
var tmp12755 = inst_12692;
var inst_12690__$1 = tmp12754;
var inst_12691__$1 = tmp12753;
var inst_12692__$1 = tmp12755;
var inst_12693__$1 = inst_12701;
var state_12742__$1 = (function (){var statearr_12758 = state_12742;
(statearr_12758[(14)] = inst_12700);

(statearr_12758[(8)] = inst_12693__$1);

(statearr_12758[(9)] = inst_12691__$1);

(statearr_12758[(11)] = inst_12690__$1);

(statearr_12758[(12)] = inst_12692__$1);

return statearr_12758;
})();
var statearr_12759_13416 = state_12742__$1;
(statearr_12759_13416[(2)] = null);

(statearr_12759_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (22))){
var state_12742__$1 = state_12742;
var statearr_12760_13417 = state_12742__$1;
(statearr_12760_13417[(2)] = null);

(statearr_12760_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (6))){
var inst_12679 = (state_12742[(13)]);
var inst_12688 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12679) : f.call(null,inst_12679));
var inst_12689 = cljs.core.seq(inst_12688);
var inst_12690 = inst_12689;
var inst_12691 = null;
var inst_12692 = (0);
var inst_12693 = (0);
var state_12742__$1 = (function (){var statearr_12761 = state_12742;
(statearr_12761[(8)] = inst_12693);

(statearr_12761[(9)] = inst_12691);

(statearr_12761[(11)] = inst_12690);

(statearr_12761[(12)] = inst_12692);

return statearr_12761;
})();
var statearr_12762_13418 = state_12742__$1;
(statearr_12762_13418[(2)] = null);

(statearr_12762_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (17))){
var inst_12704 = (state_12742[(7)]);
var inst_12708 = cljs.core.chunk_first(inst_12704);
var inst_12709 = cljs.core.chunk_rest(inst_12704);
var inst_12710 = cljs.core.count(inst_12708);
var inst_12690 = inst_12709;
var inst_12691 = inst_12708;
var inst_12692 = inst_12710;
var inst_12693 = (0);
var state_12742__$1 = (function (){var statearr_12763 = state_12742;
(statearr_12763[(8)] = inst_12693);

(statearr_12763[(9)] = inst_12691);

(statearr_12763[(11)] = inst_12690);

(statearr_12763[(12)] = inst_12692);

return statearr_12763;
})();
var statearr_12764_13419 = state_12742__$1;
(statearr_12764_13419[(2)] = null);

(statearr_12764_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (3))){
var inst_12739 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12742__$1,inst_12739);
} else {
if((state_val_12743 === (12))){
var inst_12727 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12765_13420 = state_12742__$1;
(statearr_12765_13420[(2)] = inst_12727);

(statearr_12765_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (2))){
var state_12742__$1 = state_12742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12742__$1,(4),in$);
} else {
if((state_val_12743 === (23))){
var inst_12735 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12766_13421 = state_12742__$1;
(statearr_12766_13421[(2)] = inst_12735);

(statearr_12766_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (19))){
var inst_12721 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12767_13422 = state_12742__$1;
(statearr_12767_13422[(2)] = inst_12721);

(statearr_12767_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (11))){
var inst_12704 = (state_12742[(7)]);
var inst_12690 = (state_12742[(11)]);
var inst_12704__$1 = cljs.core.seq(inst_12690);
var state_12742__$1 = (function (){var statearr_12768 = state_12742;
(statearr_12768[(7)] = inst_12704__$1);

return statearr_12768;
})();
if(inst_12704__$1){
var statearr_12769_13423 = state_12742__$1;
(statearr_12769_13423[(1)] = (14));

} else {
var statearr_12770_13424 = state_12742__$1;
(statearr_12770_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (9))){
var inst_12729 = (state_12742[(2)]);
var inst_12730 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12742__$1 = (function (){var statearr_12771 = state_12742;
(statearr_12771[(15)] = inst_12729);

return statearr_12771;
})();
if(cljs.core.truth_(inst_12730)){
var statearr_12772_13425 = state_12742__$1;
(statearr_12772_13425[(1)] = (21));

} else {
var statearr_12773_13426 = state_12742__$1;
(statearr_12773_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (5))){
var inst_12682 = cljs.core.async.close_BANG_(out);
var state_12742__$1 = state_12742;
var statearr_12774_13427 = state_12742__$1;
(statearr_12774_13427[(2)] = inst_12682);

(statearr_12774_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (14))){
var inst_12704 = (state_12742[(7)]);
var inst_12706 = cljs.core.chunked_seq_QMARK_(inst_12704);
var state_12742__$1 = state_12742;
if(inst_12706){
var statearr_12775_13428 = state_12742__$1;
(statearr_12775_13428[(1)] = (17));

} else {
var statearr_12776_13429 = state_12742__$1;
(statearr_12776_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (16))){
var inst_12724 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12777_13430 = state_12742__$1;
(statearr_12777_13430[(2)] = inst_12724);

(statearr_12777_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (10))){
var inst_12693 = (state_12742[(8)]);
var inst_12691 = (state_12742[(9)]);
var inst_12698 = cljs.core._nth(inst_12691,inst_12693);
var state_12742__$1 = state_12742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12742__$1,(13),out,inst_12698);
} else {
if((state_val_12743 === (18))){
var inst_12704 = (state_12742[(7)]);
var inst_12714 = cljs.core.first(inst_12704);
var state_12742__$1 = state_12742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12742__$1,(20),out,inst_12714);
} else {
if((state_val_12743 === (8))){
var inst_12693 = (state_12742[(8)]);
var inst_12692 = (state_12742[(12)]);
var inst_12695 = (inst_12693 < inst_12692);
var inst_12696 = inst_12695;
var state_12742__$1 = state_12742;
if(cljs.core.truth_(inst_12696)){
var statearr_12778_13431 = state_12742__$1;
(statearr_12778_13431[(1)] = (10));

} else {
var statearr_12779_13432 = state_12742__$1;
(statearr_12779_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10778__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10778__auto____0 = (function (){
var statearr_12783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12783[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10778__auto__);

(statearr_12783[(1)] = (1));

return statearr_12783;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10778__auto____1 = (function (state_12742){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12742);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12784){var ex__10781__auto__ = e12784;
var statearr_12785_13433 = state_12742;
(statearr_12785_13433[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12742[(4)]))){
var statearr_12786_13434 = state_12742;
(statearr_12786_13434[(1)] = cljs.core.first((state_12742[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12742;
state_12742 = G__13435;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10778__auto__ = function(state_12742){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10778__auto____1.call(this,state_12742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10778__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10778__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12788 = f__10924__auto__();
(statearr_12788[(6)] = c__10923__auto__);

return statearr_12788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));

return c__10923__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12790 = arguments.length;
switch (G__12790) {
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
var G__12792 = arguments.length;
switch (G__12792) {
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
var G__12794 = arguments.length;
switch (G__12794) {
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
var c__10923__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12818){
var state_val_12819 = (state_12818[(1)]);
if((state_val_12819 === (7))){
var inst_12813 = (state_12818[(2)]);
var state_12818__$1 = state_12818;
var statearr_12822_13440 = state_12818__$1;
(statearr_12822_13440[(2)] = inst_12813);

(statearr_12822_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (1))){
var inst_12795 = null;
var state_12818__$1 = (function (){var statearr_12824 = state_12818;
(statearr_12824[(7)] = inst_12795);

return statearr_12824;
})();
var statearr_12825_13441 = state_12818__$1;
(statearr_12825_13441[(2)] = null);

(statearr_12825_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (4))){
var inst_12798 = (state_12818[(8)]);
var inst_12798__$1 = (state_12818[(2)]);
var inst_12799 = (inst_12798__$1 == null);
var inst_12800 = cljs.core.not(inst_12799);
var state_12818__$1 = (function (){var statearr_12826 = state_12818;
(statearr_12826[(8)] = inst_12798__$1);

return statearr_12826;
})();
if(inst_12800){
var statearr_12828_13442 = state_12818__$1;
(statearr_12828_13442[(1)] = (5));

} else {
var statearr_12829_13443 = state_12818__$1;
(statearr_12829_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (6))){
var state_12818__$1 = state_12818;
var statearr_12830_13444 = state_12818__$1;
(statearr_12830_13444[(2)] = null);

(statearr_12830_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (3))){
var inst_12815 = (state_12818[(2)]);
var inst_12816 = cljs.core.async.close_BANG_(out);
var state_12818__$1 = (function (){var statearr_12832 = state_12818;
(statearr_12832[(9)] = inst_12815);

return statearr_12832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12818__$1,inst_12816);
} else {
if((state_val_12819 === (2))){
var state_12818__$1 = state_12818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12818__$1,(4),ch);
} else {
if((state_val_12819 === (11))){
var inst_12798 = (state_12818[(8)]);
var inst_12807 = (state_12818[(2)]);
var inst_12795 = inst_12798;
var state_12818__$1 = (function (){var statearr_12834 = state_12818;
(statearr_12834[(7)] = inst_12795);

(statearr_12834[(10)] = inst_12807);

return statearr_12834;
})();
var statearr_12835_13445 = state_12818__$1;
(statearr_12835_13445[(2)] = null);

(statearr_12835_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (9))){
var inst_12798 = (state_12818[(8)]);
var state_12818__$1 = state_12818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12818__$1,(11),out,inst_12798);
} else {
if((state_val_12819 === (5))){
var inst_12795 = (state_12818[(7)]);
var inst_12798 = (state_12818[(8)]);
var inst_12802 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12798,inst_12795);
var state_12818__$1 = state_12818;
if(inst_12802){
var statearr_12837_13446 = state_12818__$1;
(statearr_12837_13446[(1)] = (8));

} else {
var statearr_12838_13447 = state_12818__$1;
(statearr_12838_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (10))){
var inst_12810 = (state_12818[(2)]);
var state_12818__$1 = state_12818;
var statearr_12839_13448 = state_12818__$1;
(statearr_12839_13448[(2)] = inst_12810);

(statearr_12839_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12819 === (8))){
var inst_12795 = (state_12818[(7)]);
var tmp12836 = inst_12795;
var inst_12795__$1 = tmp12836;
var state_12818__$1 = (function (){var statearr_12840 = state_12818;
(statearr_12840[(7)] = inst_12795__$1);

return statearr_12840;
})();
var statearr_12841_13449 = state_12818__$1;
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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12842 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12842[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12842[(1)] = (1));

return statearr_12842;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12818){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12818);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12843){var ex__10781__auto__ = e12843;
var statearr_12844_13450 = state_12818;
(statearr_12844_13450[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12818[(4)]))){
var statearr_12845_13451 = state_12818;
(statearr_12845_13451[(1)] = cljs.core.first((state_12818[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12818;
state_12818 = G__13452;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12847 = f__10924__auto__();
(statearr_12847[(6)] = c__10923__auto___13439);

return statearr_12847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12849 = arguments.length;
switch (G__12849) {
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
var c__10923__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12887){
var state_val_12888 = (state_12887[(1)]);
if((state_val_12888 === (7))){
var inst_12883 = (state_12887[(2)]);
var state_12887__$1 = state_12887;
var statearr_12889_13455 = state_12887__$1;
(statearr_12889_13455[(2)] = inst_12883);

(statearr_12889_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (1))){
var inst_12850 = (new Array(n));
var inst_12851 = inst_12850;
var inst_12852 = (0);
var state_12887__$1 = (function (){var statearr_12890 = state_12887;
(statearr_12890[(7)] = inst_12851);

(statearr_12890[(8)] = inst_12852);

return statearr_12890;
})();
var statearr_12891_13456 = state_12887__$1;
(statearr_12891_13456[(2)] = null);

(statearr_12891_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (4))){
var inst_12855 = (state_12887[(9)]);
var inst_12855__$1 = (state_12887[(2)]);
var inst_12856 = (inst_12855__$1 == null);
var inst_12857 = cljs.core.not(inst_12856);
var state_12887__$1 = (function (){var statearr_12892 = state_12887;
(statearr_12892[(9)] = inst_12855__$1);

return statearr_12892;
})();
if(inst_12857){
var statearr_12893_13457 = state_12887__$1;
(statearr_12893_13457[(1)] = (5));

} else {
var statearr_12894_13458 = state_12887__$1;
(statearr_12894_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (15))){
var inst_12877 = (state_12887[(2)]);
var state_12887__$1 = state_12887;
var statearr_12895_13459 = state_12887__$1;
(statearr_12895_13459[(2)] = inst_12877);

(statearr_12895_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (13))){
var state_12887__$1 = state_12887;
var statearr_12896_13460 = state_12887__$1;
(statearr_12896_13460[(2)] = null);

(statearr_12896_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (6))){
var inst_12852 = (state_12887[(8)]);
var inst_12873 = (inst_12852 > (0));
var state_12887__$1 = state_12887;
if(cljs.core.truth_(inst_12873)){
var statearr_12897_13461 = state_12887__$1;
(statearr_12897_13461[(1)] = (12));

} else {
var statearr_12898_13462 = state_12887__$1;
(statearr_12898_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (3))){
var inst_12885 = (state_12887[(2)]);
var state_12887__$1 = state_12887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12887__$1,inst_12885);
} else {
if((state_val_12888 === (12))){
var inst_12851 = (state_12887[(7)]);
var inst_12875 = cljs.core.vec(inst_12851);
var state_12887__$1 = state_12887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12887__$1,(15),out,inst_12875);
} else {
if((state_val_12888 === (2))){
var state_12887__$1 = state_12887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12887__$1,(4),ch);
} else {
if((state_val_12888 === (11))){
var inst_12867 = (state_12887[(2)]);
var inst_12868 = (new Array(n));
var inst_12851 = inst_12868;
var inst_12852 = (0);
var state_12887__$1 = (function (){var statearr_12899 = state_12887;
(statearr_12899[(7)] = inst_12851);

(statearr_12899[(10)] = inst_12867);

(statearr_12899[(8)] = inst_12852);

return statearr_12899;
})();
var statearr_12900_13463 = state_12887__$1;
(statearr_12900_13463[(2)] = null);

(statearr_12900_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (9))){
var inst_12851 = (state_12887[(7)]);
var inst_12865 = cljs.core.vec(inst_12851);
var state_12887__$1 = state_12887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12887__$1,(11),out,inst_12865);
} else {
if((state_val_12888 === (5))){
var inst_12851 = (state_12887[(7)]);
var inst_12855 = (state_12887[(9)]);
var inst_12852 = (state_12887[(8)]);
var inst_12860 = (state_12887[(11)]);
var inst_12859 = (inst_12851[inst_12852] = inst_12855);
var inst_12860__$1 = (inst_12852 + (1));
var inst_12861 = (inst_12860__$1 < n);
var state_12887__$1 = (function (){var statearr_12901 = state_12887;
(statearr_12901[(12)] = inst_12859);

(statearr_12901[(11)] = inst_12860__$1);

return statearr_12901;
})();
if(cljs.core.truth_(inst_12861)){
var statearr_12902_13464 = state_12887__$1;
(statearr_12902_13464[(1)] = (8));

} else {
var statearr_12903_13465 = state_12887__$1;
(statearr_12903_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (14))){
var inst_12880 = (state_12887[(2)]);
var inst_12881 = cljs.core.async.close_BANG_(out);
var state_12887__$1 = (function (){var statearr_12905 = state_12887;
(statearr_12905[(13)] = inst_12880);

return statearr_12905;
})();
var statearr_12906_13466 = state_12887__$1;
(statearr_12906_13466[(2)] = inst_12881);

(statearr_12906_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (10))){
var inst_12871 = (state_12887[(2)]);
var state_12887__$1 = state_12887;
var statearr_12908_13467 = state_12887__$1;
(statearr_12908_13467[(2)] = inst_12871);

(statearr_12908_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12888 === (8))){
var inst_12851 = (state_12887[(7)]);
var inst_12860 = (state_12887[(11)]);
var tmp12904 = inst_12851;
var inst_12851__$1 = tmp12904;
var inst_12852 = inst_12860;
var state_12887__$1 = (function (){var statearr_12909 = state_12887;
(statearr_12909[(7)] = inst_12851__$1);

(statearr_12909[(8)] = inst_12852);

return statearr_12909;
})();
var statearr_12911_13468 = state_12887__$1;
(statearr_12911_13468[(2)] = null);

(statearr_12911_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12912[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12912[(1)] = (1));

return statearr_12912;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12887){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12887);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12913){var ex__10781__auto__ = e12913;
var statearr_12914_13469 = state_12887;
(statearr_12914_13469[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12887[(4)]))){
var statearr_12915_13470 = state_12887;
(statearr_12915_13470[(1)] = cljs.core.first((state_12887[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12887;
state_12887 = G__13471;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12916 = f__10924__auto__();
(statearr_12916[(6)] = c__10923__auto___13454);

return statearr_12916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12919 = arguments.length;
switch (G__12919) {
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
var c__10923__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10924__auto__ = (function (){var switch__10777__auto__ = (function (state_12961){
var state_val_12962 = (state_12961[(1)]);
if((state_val_12962 === (7))){
var inst_12957 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12963_13474 = state_12961__$1;
(statearr_12963_13474[(2)] = inst_12957);

(statearr_12963_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (1))){
var inst_12920 = [];
var inst_12921 = inst_12920;
var inst_12922 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12961__$1 = (function (){var statearr_12964 = state_12961;
(statearr_12964[(7)] = inst_12922);

(statearr_12964[(8)] = inst_12921);

return statearr_12964;
})();
var statearr_12965_13475 = state_12961__$1;
(statearr_12965_13475[(2)] = null);

(statearr_12965_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (4))){
var inst_12925 = (state_12961[(9)]);
var inst_12925__$1 = (state_12961[(2)]);
var inst_12926 = (inst_12925__$1 == null);
var inst_12927 = cljs.core.not(inst_12926);
var state_12961__$1 = (function (){var statearr_12966 = state_12961;
(statearr_12966[(9)] = inst_12925__$1);

return statearr_12966;
})();
if(inst_12927){
var statearr_12967_13476 = state_12961__$1;
(statearr_12967_13476[(1)] = (5));

} else {
var statearr_12968_13477 = state_12961__$1;
(statearr_12968_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (15))){
var inst_12951 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12969_13478 = state_12961__$1;
(statearr_12969_13478[(2)] = inst_12951);

(statearr_12969_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (13))){
var state_12961__$1 = state_12961;
var statearr_12970_13479 = state_12961__$1;
(statearr_12970_13479[(2)] = null);

(statearr_12970_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (6))){
var inst_12921 = (state_12961[(8)]);
var inst_12946 = inst_12921.length;
var inst_12947 = (inst_12946 > (0));
var state_12961__$1 = state_12961;
if(cljs.core.truth_(inst_12947)){
var statearr_12971_13480 = state_12961__$1;
(statearr_12971_13480[(1)] = (12));

} else {
var statearr_12972_13481 = state_12961__$1;
(statearr_12972_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (3))){
var inst_12959 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12961__$1,inst_12959);
} else {
if((state_val_12962 === (12))){
var inst_12921 = (state_12961[(8)]);
var inst_12949 = cljs.core.vec(inst_12921);
var state_12961__$1 = state_12961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12961__$1,(15),out,inst_12949);
} else {
if((state_val_12962 === (2))){
var state_12961__$1 = state_12961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12961__$1,(4),ch);
} else {
if((state_val_12962 === (11))){
var inst_12929 = (state_12961[(10)]);
var inst_12925 = (state_12961[(9)]);
var inst_12939 = (state_12961[(2)]);
var inst_12940 = [];
var inst_12941 = inst_12940.push(inst_12925);
var inst_12921 = inst_12940;
var inst_12922 = inst_12929;
var state_12961__$1 = (function (){var statearr_12980 = state_12961;
(statearr_12980[(11)] = inst_12939);

(statearr_12980[(7)] = inst_12922);

(statearr_12980[(8)] = inst_12921);

(statearr_12980[(12)] = inst_12941);

return statearr_12980;
})();
var statearr_12981_13482 = state_12961__$1;
(statearr_12981_13482[(2)] = null);

(statearr_12981_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (9))){
var inst_12921 = (state_12961[(8)]);
var inst_12937 = cljs.core.vec(inst_12921);
var state_12961__$1 = state_12961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12961__$1,(11),out,inst_12937);
} else {
if((state_val_12962 === (5))){
var inst_12929 = (state_12961[(10)]);
var inst_12922 = (state_12961[(7)]);
var inst_12925 = (state_12961[(9)]);
var inst_12929__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12925) : f.call(null,inst_12925));
var inst_12930 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12929__$1,inst_12922);
var inst_12931 = cljs.core.keyword_identical_QMARK_(inst_12922,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12932 = ((inst_12930) || (inst_12931));
var state_12961__$1 = (function (){var statearr_12982 = state_12961;
(statearr_12982[(10)] = inst_12929__$1);

return statearr_12982;
})();
if(cljs.core.truth_(inst_12932)){
var statearr_12983_13483 = state_12961__$1;
(statearr_12983_13483[(1)] = (8));

} else {
var statearr_12984_13484 = state_12961__$1;
(statearr_12984_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (14))){
var inst_12954 = (state_12961[(2)]);
var inst_12955 = cljs.core.async.close_BANG_(out);
var state_12961__$1 = (function (){var statearr_12986 = state_12961;
(statearr_12986[(13)] = inst_12954);

return statearr_12986;
})();
var statearr_12987_13485 = state_12961__$1;
(statearr_12987_13485[(2)] = inst_12955);

(statearr_12987_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (10))){
var inst_12944 = (state_12961[(2)]);
var state_12961__$1 = state_12961;
var statearr_12988_13486 = state_12961__$1;
(statearr_12988_13486[(2)] = inst_12944);

(statearr_12988_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12962 === (8))){
var inst_12929 = (state_12961[(10)]);
var inst_12925 = (state_12961[(9)]);
var inst_12921 = (state_12961[(8)]);
var inst_12934 = inst_12921.push(inst_12925);
var tmp12985 = inst_12921;
var inst_12921__$1 = tmp12985;
var inst_12922 = inst_12929;
var state_12961__$1 = (function (){var statearr_12989 = state_12961;
(statearr_12989[(7)] = inst_12922);

(statearr_12989[(14)] = inst_12934);

(statearr_12989[(8)] = inst_12921__$1);

return statearr_12989;
})();
var statearr_12990_13487 = state_12961__$1;
(statearr_12990_13487[(2)] = null);

(statearr_12990_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10778__auto__ = null;
var cljs$core$async$state_machine__10778__auto____0 = (function (){
var statearr_12991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12991[(0)] = cljs$core$async$state_machine__10778__auto__);

(statearr_12991[(1)] = (1));

return statearr_12991;
});
var cljs$core$async$state_machine__10778__auto____1 = (function (state_12961){
while(true){
var ret_value__10779__auto__ = (function (){try{while(true){
var result__10780__auto__ = switch__10777__auto__(state_12961);
if(cljs.core.keyword_identical_QMARK_(result__10780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10780__auto__;
}
break;
}
}catch (e12992){var ex__10781__auto__ = e12992;
var statearr_12993_13488 = state_12961;
(statearr_12993_13488[(2)] = ex__10781__auto__);


if(cljs.core.seq((state_12961[(4)]))){
var statearr_12994_13489 = state_12961;
(statearr_12994_13489[(1)] = cljs.core.first((state_12961[(4)])));

} else {
throw ex__10781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12961;
state_12961 = G__13490;
continue;
} else {
return ret_value__10779__auto__;
}
break;
}
});
cljs$core$async$state_machine__10778__auto__ = function(state_12961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10778__auto____1.call(this,state_12961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10778__auto____0;
cljs$core$async$state_machine__10778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10778__auto____1;
return cljs$core$async$state_machine__10778__auto__;
})()
})();
var state__10925__auto__ = (function (){var statearr_12995 = f__10924__auto__();
(statearr_12995[(6)] = c__10923__auto___13473);

return statearr_12995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10925__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
