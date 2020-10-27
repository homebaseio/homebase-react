goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11037 = arguments.length;
switch (G__11037) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11040 = (function (f,blockable,meta11041){
this.f = f;
this.blockable = blockable;
this.meta11041 = meta11041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11042,meta11041__$1){
var self__ = this;
var _11042__$1 = this;
return (new cljs.core.async.t_cljs$core$async11040(self__.f,self__.blockable,meta11041__$1));
}));

(cljs.core.async.t_cljs$core$async11040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11042){
var self__ = this;
var _11042__$1 = this;
return self__.meta11041;
}));

(cljs.core.async.t_cljs$core$async11040.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11041","meta11041",-1058958849,null)], null);
}));

(cljs.core.async.t_cljs$core$async11040.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11040");

(cljs.core.async.t_cljs$core$async11040.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11040");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11040.
 */
cljs.core.async.__GT_t_cljs$core$async11040 = (function cljs$core$async$__GT_t_cljs$core$async11040(f__$1,blockable__$1,meta11041){
return (new cljs.core.async.t_cljs$core$async11040(f__$1,blockable__$1,meta11041));
});

}

return (new cljs.core.async.t_cljs$core$async11040(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11045 = arguments.length;
switch (G__11045) {
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
var G__11053 = arguments.length;
switch (G__11053) {
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
var G__11055 = arguments.length;
switch (G__11055) {
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
var val_12905 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12905) : fn1.call(null,val_12905));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12905) : fn1.call(null,val_12905));
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
var G__11057 = arguments.length;
switch (G__11057) {
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
var n__4613__auto___12907 = n;
var x_12908 = (0);
while(true){
if((x_12908 < n__4613__auto___12907)){
(a[x_12908] = x_12908);

var G__12909 = (x_12908 + (1));
x_12908 = G__12909;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11063 = (function (flag,meta11064){
this.flag = flag;
this.meta11064 = meta11064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11065,meta11064__$1){
var self__ = this;
var _11065__$1 = this;
return (new cljs.core.async.t_cljs$core$async11063(self__.flag,meta11064__$1));
}));

(cljs.core.async.t_cljs$core$async11063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11065){
var self__ = this;
var _11065__$1 = this;
return self__.meta11064;
}));

(cljs.core.async.t_cljs$core$async11063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11064","meta11064",1358545818,null)], null);
}));

(cljs.core.async.t_cljs$core$async11063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11063");

(cljs.core.async.t_cljs$core$async11063.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11063.
 */
cljs.core.async.__GT_t_cljs$core$async11063 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11063(flag__$1,meta11064){
return (new cljs.core.async.t_cljs$core$async11063(flag__$1,meta11064));
});

}

return (new cljs.core.async.t_cljs$core$async11063(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11071 = (function (flag,cb,meta11072){
this.flag = flag;
this.cb = cb;
this.meta11072 = meta11072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11073,meta11072__$1){
var self__ = this;
var _11073__$1 = this;
return (new cljs.core.async.t_cljs$core$async11071(self__.flag,self__.cb,meta11072__$1));
}));

(cljs.core.async.t_cljs$core$async11071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11073){
var self__ = this;
var _11073__$1 = this;
return self__.meta11072;
}));

(cljs.core.async.t_cljs$core$async11071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11072","meta11072",742129974,null)], null);
}));

(cljs.core.async.t_cljs$core$async11071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11071");

(cljs.core.async.t_cljs$core$async11071.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11071.
 */
cljs.core.async.__GT_t_cljs$core$async11071 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11071(flag__$1,cb__$1,meta11072){
return (new cljs.core.async.t_cljs$core$async11071(flag__$1,cb__$1,meta11072));
});

}

return (new cljs.core.async.t_cljs$core$async11071(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11074_SHARP_){
var G__11077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11074_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11077) : fret.call(null,G__11077));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11075_SHARP_){
var G__11078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11075_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11078) : fret.call(null,G__11078));
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
var G__12912 = (i + (1));
i = G__12912;
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
var len__4736__auto___12913 = arguments.length;
var i__4737__auto___12914 = (0);
while(true){
if((i__4737__auto___12914 < len__4736__auto___12913)){
args__4742__auto__.push((arguments[i__4737__auto___12914]));

var G__12916 = (i__4737__auto___12914 + (1));
i__4737__auto___12914 = G__12916;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11083){
var map__11084 = p__11083;
var map__11084__$1 = (((((!((map__11084 == null))))?(((((map__11084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11084):map__11084);
var opts = map__11084__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11081){
var G__11082 = cljs.core.first(seq11081);
var seq11081__$1 = cljs.core.next(seq11081);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11082,seq11081__$1);
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
var G__11087 = arguments.length;
switch (G__11087) {
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
var c__10978__auto___12920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11123){
var state_val_11124 = (state_11123[(1)]);
if((state_val_11124 === (7))){
var inst_11119 = (state_11123[(2)]);
var state_11123__$1 = state_11123;
var statearr_11132_12921 = state_11123__$1;
(statearr_11132_12921[(2)] = inst_11119);

(statearr_11132_12921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (1))){
var state_11123__$1 = state_11123;
var statearr_11133_12922 = state_11123__$1;
(statearr_11133_12922[(2)] = null);

(statearr_11133_12922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (4))){
var inst_11102 = (state_11123[(7)]);
var inst_11102__$1 = (state_11123[(2)]);
var inst_11103 = (inst_11102__$1 == null);
var state_11123__$1 = (function (){var statearr_11134 = state_11123;
(statearr_11134[(7)] = inst_11102__$1);

return statearr_11134;
})();
if(cljs.core.truth_(inst_11103)){
var statearr_11135_12923 = state_11123__$1;
(statearr_11135_12923[(1)] = (5));

} else {
var statearr_11136_12924 = state_11123__$1;
(statearr_11136_12924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (13))){
var state_11123__$1 = state_11123;
var statearr_11157_12925 = state_11123__$1;
(statearr_11157_12925[(2)] = null);

(statearr_11157_12925[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (6))){
var inst_11102 = (state_11123[(7)]);
var state_11123__$1 = state_11123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11123__$1,(11),to,inst_11102);
} else {
if((state_val_11124 === (3))){
var inst_11121 = (state_11123[(2)]);
var state_11123__$1 = state_11123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11123__$1,inst_11121);
} else {
if((state_val_11124 === (12))){
var state_11123__$1 = state_11123;
var statearr_11158_12926 = state_11123__$1;
(statearr_11158_12926[(2)] = null);

(statearr_11158_12926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (2))){
var state_11123__$1 = state_11123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11123__$1,(4),from);
} else {
if((state_val_11124 === (11))){
var inst_11112 = (state_11123[(2)]);
var state_11123__$1 = state_11123;
if(cljs.core.truth_(inst_11112)){
var statearr_11159_12927 = state_11123__$1;
(statearr_11159_12927[(1)] = (12));

} else {
var statearr_11160_12928 = state_11123__$1;
(statearr_11160_12928[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (9))){
var state_11123__$1 = state_11123;
var statearr_11161_12929 = state_11123__$1;
(statearr_11161_12929[(2)] = null);

(statearr_11161_12929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (5))){
var state_11123__$1 = state_11123;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11162_12930 = state_11123__$1;
(statearr_11162_12930[(1)] = (8));

} else {
var statearr_11163_12931 = state_11123__$1;
(statearr_11163_12931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (14))){
var inst_11117 = (state_11123[(2)]);
var state_11123__$1 = state_11123;
var statearr_11164_12932 = state_11123__$1;
(statearr_11164_12932[(2)] = inst_11117);

(statearr_11164_12932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (10))){
var inst_11109 = (state_11123[(2)]);
var state_11123__$1 = state_11123;
var statearr_11165_12933 = state_11123__$1;
(statearr_11165_12933[(2)] = inst_11109);

(statearr_11165_12933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11124 === (8))){
var inst_11106 = cljs.core.async.close_BANG_(to);
var state_11123__$1 = state_11123;
var statearr_11166_12934 = state_11123__$1;
(statearr_11166_12934[(2)] = inst_11106);

(statearr_11166_12934[(1)] = (10));


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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_11167 = [null,null,null,null,null,null,null,null];
(statearr_11167[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11167[(1)] = (1));

return statearr_11167;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11123){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11123);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11168){var ex__10939__auto__ = e11168;
var statearr_11169_12935 = state_11123;
(statearr_11169_12935[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11123[(4)]))){
var statearr_11170_12936 = state_11123;
(statearr_11170_12936[(1)] = cljs.core.first((state_11123[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12937 = state_11123;
state_11123 = G__12937;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11171 = f__10979__auto__();
(statearr_11171[(6)] = c__10978__auto___12920);

return statearr_11171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var process = (function (p__11176){
var vec__11177 = p__11176;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11177,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11177,(1),null);
var job = vec__11177;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10978__auto___12941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11184){
var state_val_11185 = (state_11184[(1)]);
if((state_val_11185 === (1))){
var state_11184__$1 = state_11184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11184__$1,(2),res,v);
} else {
if((state_val_11185 === (2))){
var inst_11181 = (state_11184[(2)]);
var inst_11182 = cljs.core.async.close_BANG_(res);
var state_11184__$1 = (function (){var statearr_11186 = state_11184;
(statearr_11186[(7)] = inst_11181);

return statearr_11186;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11184__$1,inst_11182);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11187 = [null,null,null,null,null,null,null,null];
(statearr_11187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11187[(1)] = (1));

return statearr_11187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11184){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11184);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11188){var ex__10939__auto__ = e11188;
var statearr_11189_12944 = state_11184;
(statearr_11189_12944[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11184[(4)]))){
var statearr_11190_12945 = state_11184;
(statearr_11190_12945[(1)] = cljs.core.first((state_11184[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12946 = state_11184;
state_11184 = G__12946;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11191 = f__10979__auto__();
(statearr_11191[(6)] = c__10978__auto___12941);

return statearr_11191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11198){
var vec__11199 = p__11198;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11199,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11199,(1),null);
var job = vec__11199;
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
var n__4613__auto___12948 = n;
var __12949 = (0);
while(true){
if((__12949 < n__4613__auto___12948)){
var G__11202_12950 = type;
var G__11202_12951__$1 = (((G__11202_12950 instanceof cljs.core.Keyword))?G__11202_12950.fqn:null);
switch (G__11202_12951__$1) {
case "compute":
var c__10978__auto___12953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12949,c__10978__auto___12953,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async){
return (function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = ((function (__12949,c__10978__auto___12953,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async){
return (function (state_11215){
var state_val_11216 = (state_11215[(1)]);
if((state_val_11216 === (1))){
var state_11215__$1 = state_11215;
var statearr_11217_13003 = state_11215__$1;
(statearr_11217_13003[(2)] = null);

(statearr_11217_13003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11216 === (2))){
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11215__$1,(4),jobs);
} else {
if((state_val_11216 === (3))){
var inst_11213 = (state_11215[(2)]);
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11215__$1,inst_11213);
} else {
if((state_val_11216 === (4))){
var inst_11205 = (state_11215[(2)]);
var inst_11206 = process(inst_11205);
var state_11215__$1 = state_11215;
if(cljs.core.truth_(inst_11206)){
var statearr_11218_13005 = state_11215__$1;
(statearr_11218_13005[(1)] = (5));

} else {
var statearr_11219_13006 = state_11215__$1;
(statearr_11219_13006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11216 === (5))){
var state_11215__$1 = state_11215;
var statearr_11220_13007 = state_11215__$1;
(statearr_11220_13007[(2)] = null);

(statearr_11220_13007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11216 === (6))){
var state_11215__$1 = state_11215;
var statearr_11221_13009 = state_11215__$1;
(statearr_11221_13009[(2)] = null);

(statearr_11221_13009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11216 === (7))){
var inst_11211 = (state_11215[(2)]);
var state_11215__$1 = state_11215;
var statearr_11222_13012 = state_11215__$1;
(statearr_11222_13012[(2)] = inst_11211);

(statearr_11222_13012[(1)] = (3));


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
});})(__12949,c__10978__auto___12953,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async))
;
return ((function (__12949,switch__10935__auto__,c__10978__auto___12953,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11223 = [null,null,null,null,null,null,null];
(statearr_11223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11223[(1)] = (1));

return statearr_11223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11215){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11215);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11224){var ex__10939__auto__ = e11224;
var statearr_11225_13014 = state_11215;
(statearr_11225_13014[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11215[(4)]))){
var statearr_11226_13015 = state_11215;
(statearr_11226_13015[(1)] = cljs.core.first((state_11215[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13016 = state_11215;
state_11215 = G__13016;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
;})(__12949,switch__10935__auto__,c__10978__auto___12953,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async))
})();
var state__10980__auto__ = (function (){var statearr_11235 = f__10979__auto__();
(statearr_11235[(6)] = c__10978__auto___12953);

return statearr_11235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
});})(__12949,c__10978__auto___12953,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async))
);


break;
case "async":
var c__10978__auto___13017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12949,c__10978__auto___13017,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async){
return (function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = ((function (__12949,c__10978__auto___13017,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async){
return (function (state_11248){
var state_val_11249 = (state_11248[(1)]);
if((state_val_11249 === (1))){
var state_11248__$1 = state_11248;
var statearr_11250_13018 = state_11248__$1;
(statearr_11250_13018[(2)] = null);

(statearr_11250_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (2))){
var state_11248__$1 = state_11248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11248__$1,(4),jobs);
} else {
if((state_val_11249 === (3))){
var inst_11246 = (state_11248[(2)]);
var state_11248__$1 = state_11248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11248__$1,inst_11246);
} else {
if((state_val_11249 === (4))){
var inst_11238 = (state_11248[(2)]);
var inst_11239 = async(inst_11238);
var state_11248__$1 = state_11248;
if(cljs.core.truth_(inst_11239)){
var statearr_11251_13019 = state_11248__$1;
(statearr_11251_13019[(1)] = (5));

} else {
var statearr_11252_13020 = state_11248__$1;
(statearr_11252_13020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (5))){
var state_11248__$1 = state_11248;
var statearr_11253_13033 = state_11248__$1;
(statearr_11253_13033[(2)] = null);

(statearr_11253_13033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (6))){
var state_11248__$1 = state_11248;
var statearr_11254_13034 = state_11248__$1;
(statearr_11254_13034[(2)] = null);

(statearr_11254_13034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11249 === (7))){
var inst_11244 = (state_11248[(2)]);
var state_11248__$1 = state_11248;
var statearr_11255_13036 = state_11248__$1;
(statearr_11255_13036[(2)] = inst_11244);

(statearr_11255_13036[(1)] = (3));


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
});})(__12949,c__10978__auto___13017,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async))
;
return ((function (__12949,switch__10935__auto__,c__10978__auto___13017,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11256 = [null,null,null,null,null,null,null];
(statearr_11256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11256[(1)] = (1));

return statearr_11256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11248){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11248);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11257){var ex__10939__auto__ = e11257;
var statearr_11258_13037 = state_11248;
(statearr_11258_13037[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11248[(4)]))){
var statearr_11259_13038 = state_11248;
(statearr_11259_13038[(1)] = cljs.core.first((state_11248[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13039 = state_11248;
state_11248 = G__13039;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
;})(__12949,switch__10935__auto__,c__10978__auto___13017,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async))
})();
var state__10980__auto__ = (function (){var statearr_11260 = f__10979__auto__();
(statearr_11260[(6)] = c__10978__auto___13017);

return statearr_11260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
});})(__12949,c__10978__auto___13017,G__11202_12950,G__11202_12951__$1,n__4613__auto___12948,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11202_12951__$1)].join('')));

}

var G__13042 = (__12949 + (1));
__12949 = G__13042;
continue;
} else {
}
break;
}

var c__10978__auto___13044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11286){
var state_val_11287 = (state_11286[(1)]);
if((state_val_11287 === (7))){
var inst_11282 = (state_11286[(2)]);
var state_11286__$1 = state_11286;
var statearr_11288_13045 = state_11286__$1;
(statearr_11288_13045[(2)] = inst_11282);

(statearr_11288_13045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (1))){
var state_11286__$1 = state_11286;
var statearr_11289_13046 = state_11286__$1;
(statearr_11289_13046[(2)] = null);

(statearr_11289_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (4))){
var inst_11267 = (state_11286[(7)]);
var inst_11267__$1 = (state_11286[(2)]);
var inst_11268 = (inst_11267__$1 == null);
var state_11286__$1 = (function (){var statearr_11290 = state_11286;
(statearr_11290[(7)] = inst_11267__$1);

return statearr_11290;
})();
if(cljs.core.truth_(inst_11268)){
var statearr_11291_13048 = state_11286__$1;
(statearr_11291_13048[(1)] = (5));

} else {
var statearr_11292_13049 = state_11286__$1;
(statearr_11292_13049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (6))){
var inst_11267 = (state_11286[(7)]);
var inst_11272 = (state_11286[(8)]);
var inst_11272__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11273 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11274 = [inst_11267,inst_11272__$1];
var inst_11275 = (new cljs.core.PersistentVector(null,2,(5),inst_11273,inst_11274,null));
var state_11286__$1 = (function (){var statearr_11293 = state_11286;
(statearr_11293[(8)] = inst_11272__$1);

return statearr_11293;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11286__$1,(8),jobs,inst_11275);
} else {
if((state_val_11287 === (3))){
var inst_11284 = (state_11286[(2)]);
var state_11286__$1 = state_11286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11286__$1,inst_11284);
} else {
if((state_val_11287 === (2))){
var state_11286__$1 = state_11286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11286__$1,(4),from);
} else {
if((state_val_11287 === (9))){
var inst_11279 = (state_11286[(2)]);
var state_11286__$1 = (function (){var statearr_11294 = state_11286;
(statearr_11294[(9)] = inst_11279);

return statearr_11294;
})();
var statearr_11295_13053 = state_11286__$1;
(statearr_11295_13053[(2)] = null);

(statearr_11295_13053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (5))){
var inst_11270 = cljs.core.async.close_BANG_(jobs);
var state_11286__$1 = state_11286;
var statearr_11302_13054 = state_11286__$1;
(statearr_11302_13054[(2)] = inst_11270);

(statearr_11302_13054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (8))){
var inst_11272 = (state_11286[(8)]);
var inst_11277 = (state_11286[(2)]);
var state_11286__$1 = (function (){var statearr_11303 = state_11286;
(statearr_11303[(10)] = inst_11277);

return statearr_11303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11286__$1,(9),results,inst_11272);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11304[(1)] = (1));

return statearr_11304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11286){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11286);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11305){var ex__10939__auto__ = e11305;
var statearr_11306_13055 = state_11286;
(statearr_11306_13055[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11286[(4)]))){
var statearr_11307_13056 = state_11286;
(statearr_11307_13056[(1)] = cljs.core.first((state_11286[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_11286;
state_11286 = G__13057;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11308 = f__10979__auto__();
(statearr_11308[(6)] = c__10978__auto___13044);

return statearr_11308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11350){
var state_val_11351 = (state_11350[(1)]);
if((state_val_11351 === (7))){
var inst_11346 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11352_13058 = state_11350__$1;
(statearr_11352_13058[(2)] = inst_11346);

(statearr_11352_13058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (20))){
var state_11350__$1 = state_11350;
var statearr_11353_13059 = state_11350__$1;
(statearr_11353_13059[(2)] = null);

(statearr_11353_13059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (1))){
var state_11350__$1 = state_11350;
var statearr_11354_13060 = state_11350__$1;
(statearr_11354_13060[(2)] = null);

(statearr_11354_13060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (4))){
var inst_11311 = (state_11350[(7)]);
var inst_11311__$1 = (state_11350[(2)]);
var inst_11312 = (inst_11311__$1 == null);
var state_11350__$1 = (function (){var statearr_11355 = state_11350;
(statearr_11355[(7)] = inst_11311__$1);

return statearr_11355;
})();
if(cljs.core.truth_(inst_11312)){
var statearr_11356_13061 = state_11350__$1;
(statearr_11356_13061[(1)] = (5));

} else {
var statearr_11357_13062 = state_11350__$1;
(statearr_11357_13062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (15))){
var inst_11324 = (state_11350[(8)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11350__$1,(18),to,inst_11324);
} else {
if((state_val_11351 === (21))){
var inst_11341 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11358_13063 = state_11350__$1;
(statearr_11358_13063[(2)] = inst_11341);

(statearr_11358_13063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (13))){
var inst_11343 = (state_11350[(2)]);
var state_11350__$1 = (function (){var statearr_11359 = state_11350;
(statearr_11359[(9)] = inst_11343);

return statearr_11359;
})();
var statearr_11360_13066 = state_11350__$1;
(statearr_11360_13066[(2)] = null);

(statearr_11360_13066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (6))){
var inst_11311 = (state_11350[(7)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11350__$1,(11),inst_11311);
} else {
if((state_val_11351 === (17))){
var inst_11336 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
if(cljs.core.truth_(inst_11336)){
var statearr_11361_13067 = state_11350__$1;
(statearr_11361_13067[(1)] = (19));

} else {
var statearr_11362_13068 = state_11350__$1;
(statearr_11362_13068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (3))){
var inst_11348 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11350__$1,inst_11348);
} else {
if((state_val_11351 === (12))){
var inst_11321 = (state_11350[(10)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11350__$1,(14),inst_11321);
} else {
if((state_val_11351 === (2))){
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11350__$1,(4),results);
} else {
if((state_val_11351 === (19))){
var state_11350__$1 = state_11350;
var statearr_11363_13069 = state_11350__$1;
(statearr_11363_13069[(2)] = null);

(statearr_11363_13069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (11))){
var inst_11321 = (state_11350[(2)]);
var state_11350__$1 = (function (){var statearr_11364 = state_11350;
(statearr_11364[(10)] = inst_11321);

return statearr_11364;
})();
var statearr_11365_13070 = state_11350__$1;
(statearr_11365_13070[(2)] = null);

(statearr_11365_13070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (9))){
var state_11350__$1 = state_11350;
var statearr_11367_13071 = state_11350__$1;
(statearr_11367_13071[(2)] = null);

(statearr_11367_13071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (5))){
var state_11350__$1 = state_11350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11368_13072 = state_11350__$1;
(statearr_11368_13072[(1)] = (8));

} else {
var statearr_11369_13073 = state_11350__$1;
(statearr_11369_13073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (14))){
var inst_11324 = (state_11350[(8)]);
var inst_11324__$1 = (state_11350[(2)]);
var inst_11329 = (inst_11324__$1 == null);
var inst_11330 = cljs.core.not(inst_11329);
var state_11350__$1 = (function (){var statearr_11370 = state_11350;
(statearr_11370[(8)] = inst_11324__$1);

return statearr_11370;
})();
if(inst_11330){
var statearr_11371_13074 = state_11350__$1;
(statearr_11371_13074[(1)] = (15));

} else {
var statearr_11372_13075 = state_11350__$1;
(statearr_11372_13075[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (16))){
var state_11350__$1 = state_11350;
var statearr_11373_13076 = state_11350__$1;
(statearr_11373_13076[(2)] = false);

(statearr_11373_13076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (10))){
var inst_11318 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11374_13077 = state_11350__$1;
(statearr_11374_13077[(2)] = inst_11318);

(statearr_11374_13077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (18))){
var inst_11333 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11375_13078 = state_11350__$1;
(statearr_11375_13078[(2)] = inst_11333);

(statearr_11375_13078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (8))){
var inst_11315 = cljs.core.async.close_BANG_(to);
var state_11350__$1 = state_11350;
var statearr_11376_13079 = state_11350__$1;
(statearr_11376_13079[(2)] = inst_11315);

(statearr_11376_13079[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11377[(1)] = (1));

return statearr_11377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11350){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11350);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11378){var ex__10939__auto__ = e11378;
var statearr_11379_13080 = state_11350;
(statearr_11379_13080[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11350[(4)]))){
var statearr_11380_13081 = state_11350;
(statearr_11380_13081[(1)] = cljs.core.first((state_11350[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13082 = state_11350;
state_11350 = G__13082;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11381 = f__10979__auto__();
(statearr_11381[(6)] = c__10978__auto__);

return statearr_11381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
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
var G__11384 = arguments.length;
switch (G__11384) {
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
var G__11386 = arguments.length;
switch (G__11386) {
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
var G__11388 = arguments.length;
switch (G__11388) {
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
var c__10978__auto___13087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11414){
var state_val_11415 = (state_11414[(1)]);
if((state_val_11415 === (7))){
var inst_11410 = (state_11414[(2)]);
var state_11414__$1 = state_11414;
var statearr_11416_13088 = state_11414__$1;
(statearr_11416_13088[(2)] = inst_11410);

(statearr_11416_13088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (1))){
var state_11414__$1 = state_11414;
var statearr_11417_13089 = state_11414__$1;
(statearr_11417_13089[(2)] = null);

(statearr_11417_13089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (4))){
var inst_11391 = (state_11414[(7)]);
var inst_11391__$1 = (state_11414[(2)]);
var inst_11392 = (inst_11391__$1 == null);
var state_11414__$1 = (function (){var statearr_11418 = state_11414;
(statearr_11418[(7)] = inst_11391__$1);

return statearr_11418;
})();
if(cljs.core.truth_(inst_11392)){
var statearr_11419_13091 = state_11414__$1;
(statearr_11419_13091[(1)] = (5));

} else {
var statearr_11420_13092 = state_11414__$1;
(statearr_11420_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (13))){
var state_11414__$1 = state_11414;
var statearr_11421_13093 = state_11414__$1;
(statearr_11421_13093[(2)] = null);

(statearr_11421_13093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (6))){
var inst_11391 = (state_11414[(7)]);
var inst_11397 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11391) : p.call(null,inst_11391));
var state_11414__$1 = state_11414;
if(cljs.core.truth_(inst_11397)){
var statearr_11422_13094 = state_11414__$1;
(statearr_11422_13094[(1)] = (9));

} else {
var statearr_11423_13096 = state_11414__$1;
(statearr_11423_13096[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (3))){
var inst_11412 = (state_11414[(2)]);
var state_11414__$1 = state_11414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11414__$1,inst_11412);
} else {
if((state_val_11415 === (12))){
var state_11414__$1 = state_11414;
var statearr_11424_13097 = state_11414__$1;
(statearr_11424_13097[(2)] = null);

(statearr_11424_13097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (2))){
var state_11414__$1 = state_11414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11414__$1,(4),ch);
} else {
if((state_val_11415 === (11))){
var inst_11391 = (state_11414[(7)]);
var inst_11401 = (state_11414[(2)]);
var state_11414__$1 = state_11414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11414__$1,(8),inst_11401,inst_11391);
} else {
if((state_val_11415 === (9))){
var state_11414__$1 = state_11414;
var statearr_11425_13098 = state_11414__$1;
(statearr_11425_13098[(2)] = tc);

(statearr_11425_13098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (5))){
var inst_11394 = cljs.core.async.close_BANG_(tc);
var inst_11395 = cljs.core.async.close_BANG_(fc);
var state_11414__$1 = (function (){var statearr_11428 = state_11414;
(statearr_11428[(8)] = inst_11394);

return statearr_11428;
})();
var statearr_11429_13099 = state_11414__$1;
(statearr_11429_13099[(2)] = inst_11395);

(statearr_11429_13099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (14))){
var inst_11408 = (state_11414[(2)]);
var state_11414__$1 = state_11414;
var statearr_11430_13100 = state_11414__$1;
(statearr_11430_13100[(2)] = inst_11408);

(statearr_11430_13100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (10))){
var state_11414__$1 = state_11414;
var statearr_11431_13102 = state_11414__$1;
(statearr_11431_13102[(2)] = fc);

(statearr_11431_13102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11415 === (8))){
var inst_11403 = (state_11414[(2)]);
var state_11414__$1 = state_11414;
if(cljs.core.truth_(inst_11403)){
var statearr_11432_13103 = state_11414__$1;
(statearr_11432_13103[(1)] = (12));

} else {
var statearr_11433_13104 = state_11414__$1;
(statearr_11433_13104[(1)] = (13));

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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_11434 = [null,null,null,null,null,null,null,null,null];
(statearr_11434[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11434[(1)] = (1));

return statearr_11434;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11414){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11414);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11435){var ex__10939__auto__ = e11435;
var statearr_11436_13106 = state_11414;
(statearr_11436_13106[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11414[(4)]))){
var statearr_11437_13107 = state_11414;
(statearr_11437_13107[(1)] = cljs.core.first((state_11414[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13108 = state_11414;
state_11414 = G__13108;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11438 = f__10979__auto__();
(statearr_11438[(6)] = c__10978__auto___13087);

return statearr_11438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11460){
var state_val_11461 = (state_11460[(1)]);
if((state_val_11461 === (7))){
var inst_11456 = (state_11460[(2)]);
var state_11460__$1 = state_11460;
var statearr_11463_13109 = state_11460__$1;
(statearr_11463_13109[(2)] = inst_11456);

(statearr_11463_13109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (1))){
var inst_11439 = init;
var inst_11440 = inst_11439;
var state_11460__$1 = (function (){var statearr_11464 = state_11460;
(statearr_11464[(7)] = inst_11440);

return statearr_11464;
})();
var statearr_11465_13110 = state_11460__$1;
(statearr_11465_13110[(2)] = null);

(statearr_11465_13110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (4))){
var inst_11443 = (state_11460[(8)]);
var inst_11443__$1 = (state_11460[(2)]);
var inst_11444 = (inst_11443__$1 == null);
var state_11460__$1 = (function (){var statearr_11468 = state_11460;
(statearr_11468[(8)] = inst_11443__$1);

return statearr_11468;
})();
if(cljs.core.truth_(inst_11444)){
var statearr_11469_13111 = state_11460__$1;
(statearr_11469_13111[(1)] = (5));

} else {
var statearr_11470_13112 = state_11460__$1;
(statearr_11470_13112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (6))){
var inst_11447 = (state_11460[(9)]);
var inst_11443 = (state_11460[(8)]);
var inst_11440 = (state_11460[(7)]);
var inst_11447__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11440,inst_11443) : f.call(null,inst_11440,inst_11443));
var inst_11448 = cljs.core.reduced_QMARK_(inst_11447__$1);
var state_11460__$1 = (function (){var statearr_11472 = state_11460;
(statearr_11472[(9)] = inst_11447__$1);

return statearr_11472;
})();
if(inst_11448){
var statearr_11473_13113 = state_11460__$1;
(statearr_11473_13113[(1)] = (8));

} else {
var statearr_11474_13114 = state_11460__$1;
(statearr_11474_13114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (3))){
var inst_11458 = (state_11460[(2)]);
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11460__$1,inst_11458);
} else {
if((state_val_11461 === (2))){
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11460__$1,(4),ch);
} else {
if((state_val_11461 === (9))){
var inst_11447 = (state_11460[(9)]);
var inst_11440 = inst_11447;
var state_11460__$1 = (function (){var statearr_11476 = state_11460;
(statearr_11476[(7)] = inst_11440);

return statearr_11476;
})();
var statearr_11477_13115 = state_11460__$1;
(statearr_11477_13115[(2)] = null);

(statearr_11477_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (5))){
var inst_11440 = (state_11460[(7)]);
var state_11460__$1 = state_11460;
var statearr_11478_13116 = state_11460__$1;
(statearr_11478_13116[(2)] = inst_11440);

(statearr_11478_13116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (10))){
var inst_11454 = (state_11460[(2)]);
var state_11460__$1 = state_11460;
var statearr_11479_13117 = state_11460__$1;
(statearr_11479_13117[(2)] = inst_11454);

(statearr_11479_13117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (8))){
var inst_11447 = (state_11460[(9)]);
var inst_11450 = cljs.core.deref(inst_11447);
var state_11460__$1 = state_11460;
var statearr_11480_13118 = state_11460__$1;
(statearr_11480_13118[(2)] = inst_11450);

(statearr_11480_13118[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10936__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10936__auto____0 = (function (){
var statearr_11481 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11481[(0)] = cljs$core$async$reduce_$_state_machine__10936__auto__);

(statearr_11481[(1)] = (1));

return statearr_11481;
});
var cljs$core$async$reduce_$_state_machine__10936__auto____1 = (function (state_11460){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11460);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11482){var ex__10939__auto__ = e11482;
var statearr_11483_13119 = state_11460;
(statearr_11483_13119[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11460[(4)]))){
var statearr_11484_13120 = state_11460;
(statearr_11484_13120[(1)] = cljs.core.first((state_11460[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13122 = state_11460;
state_11460 = G__13122;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10936__auto__ = function(state_11460){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10936__auto____1.call(this,state_11460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10936__auto____0;
cljs$core$async$reduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10936__auto____1;
return cljs$core$async$reduce_$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11485 = f__10979__auto__();
(statearr_11485[(6)] = c__10978__auto__);

return statearr_11485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11491){
var state_val_11492 = (state_11491[(1)]);
if((state_val_11492 === (1))){
var inst_11486 = cljs.core.async.reduce(f__$1,init,ch);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11491__$1,(2),inst_11486);
} else {
if((state_val_11492 === (2))){
var inst_11488 = (state_11491[(2)]);
var inst_11489 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11488) : f__$1.call(null,inst_11488));
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11491__$1,inst_11489);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10936__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10936__auto____0 = (function (){
var statearr_11493 = [null,null,null,null,null,null,null];
(statearr_11493[(0)] = cljs$core$async$transduce_$_state_machine__10936__auto__);

(statearr_11493[(1)] = (1));

return statearr_11493;
});
var cljs$core$async$transduce_$_state_machine__10936__auto____1 = (function (state_11491){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11491);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11494){var ex__10939__auto__ = e11494;
var statearr_11495_13125 = state_11491;
(statearr_11495_13125[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11491[(4)]))){
var statearr_11496_13126 = state_11491;
(statearr_11496_13126[(1)] = cljs.core.first((state_11491[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13127 = state_11491;
state_11491 = G__13127;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10936__auto__ = function(state_11491){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10936__auto____1.call(this,state_11491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10936__auto____0;
cljs$core$async$transduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10936__auto____1;
return cljs$core$async$transduce_$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11497 = f__10979__auto__();
(statearr_11497[(6)] = c__10978__auto__);

return statearr_11497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
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
var G__11499 = arguments.length;
switch (G__11499) {
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
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11524){
var state_val_11525 = (state_11524[(1)]);
if((state_val_11525 === (7))){
var inst_11506 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
var statearr_11527_13131 = state_11524__$1;
(statearr_11527_13131[(2)] = inst_11506);

(statearr_11527_13131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (1))){
var inst_11500 = cljs.core.seq(coll);
var inst_11501 = inst_11500;
var state_11524__$1 = (function (){var statearr_11528 = state_11524;
(statearr_11528[(7)] = inst_11501);

return statearr_11528;
})();
var statearr_11529_13132 = state_11524__$1;
(statearr_11529_13132[(2)] = null);

(statearr_11529_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (4))){
var inst_11501 = (state_11524[(7)]);
var inst_11504 = cljs.core.first(inst_11501);
var state_11524__$1 = state_11524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11524__$1,(7),ch,inst_11504);
} else {
if((state_val_11525 === (13))){
var inst_11518 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
var statearr_11530_13133 = state_11524__$1;
(statearr_11530_13133[(2)] = inst_11518);

(statearr_11530_13133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (6))){
var inst_11509 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
if(cljs.core.truth_(inst_11509)){
var statearr_11531_13134 = state_11524__$1;
(statearr_11531_13134[(1)] = (8));

} else {
var statearr_11532_13135 = state_11524__$1;
(statearr_11532_13135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (3))){
var inst_11522 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11524__$1,inst_11522);
} else {
if((state_val_11525 === (12))){
var state_11524__$1 = state_11524;
var statearr_11533_13136 = state_11524__$1;
(statearr_11533_13136[(2)] = null);

(statearr_11533_13136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (2))){
var inst_11501 = (state_11524[(7)]);
var state_11524__$1 = state_11524;
if(cljs.core.truth_(inst_11501)){
var statearr_11535_13137 = state_11524__$1;
(statearr_11535_13137[(1)] = (4));

} else {
var statearr_11537_13138 = state_11524__$1;
(statearr_11537_13138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (11))){
var inst_11515 = cljs.core.async.close_BANG_(ch);
var state_11524__$1 = state_11524;
var statearr_11538_13139 = state_11524__$1;
(statearr_11538_13139[(2)] = inst_11515);

(statearr_11538_13139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (9))){
var state_11524__$1 = state_11524;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11539_13140 = state_11524__$1;
(statearr_11539_13140[(1)] = (11));

} else {
var statearr_11540_13141 = state_11524__$1;
(statearr_11540_13141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (5))){
var inst_11501 = (state_11524[(7)]);
var state_11524__$1 = state_11524;
var statearr_11541_13142 = state_11524__$1;
(statearr_11541_13142[(2)] = inst_11501);

(statearr_11541_13142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (10))){
var inst_11520 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
var statearr_11542_13143 = state_11524__$1;
(statearr_11542_13143[(2)] = inst_11520);

(statearr_11542_13143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (8))){
var inst_11501 = (state_11524[(7)]);
var inst_11511 = cljs.core.next(inst_11501);
var inst_11501__$1 = inst_11511;
var state_11524__$1 = (function (){var statearr_11543 = state_11524;
(statearr_11543[(7)] = inst_11501__$1);

return statearr_11543;
})();
var statearr_11544_13144 = state_11524__$1;
(statearr_11544_13144[(2)] = null);

(statearr_11544_13144[(1)] = (2));


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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_11545 = [null,null,null,null,null,null,null,null];
(statearr_11545[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11545[(1)] = (1));

return statearr_11545;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11524){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11524);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11546){var ex__10939__auto__ = e11546;
var statearr_11547_13145 = state_11524;
(statearr_11547_13145[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11524[(4)]))){
var statearr_11548_13146 = state_11524;
(statearr_11548_13146[(1)] = cljs.core.first((state_11524[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13147 = state_11524;
state_11524 = G__13147;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11549 = f__10979__auto__();
(statearr_11549[(6)] = c__10978__auto__);

return statearr_11549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
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
var G__11551 = arguments.length;
switch (G__11551) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11552 = (function (ch,cs,meta11553){
this.ch = ch;
this.cs = cs;
this.meta11553 = meta11553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11554,meta11553__$1){
var self__ = this;
var _11554__$1 = this;
return (new cljs.core.async.t_cljs$core$async11552(self__.ch,self__.cs,meta11553__$1));
}));

(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11554){
var self__ = this;
var _11554__$1 = this;
return self__.meta11553;
}));

(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11552.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11553","meta11553",84768360,null)], null);
}));

(cljs.core.async.t_cljs$core$async11552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11552");

(cljs.core.async.t_cljs$core$async11552.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11552.
 */
cljs.core.async.__GT_t_cljs$core$async11552 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11552(ch__$1,cs__$1,meta11553){
return (new cljs.core.async.t_cljs$core$async11552(ch__$1,cs__$1,meta11553));
});

}

return (new cljs.core.async.t_cljs$core$async11552(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10978__auto___13153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11710){
var state_val_11711 = (state_11710[(1)]);
if((state_val_11711 === (7))){
var inst_11706 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11712_13154 = state_11710__$1;
(statearr_11712_13154[(2)] = inst_11706);

(statearr_11712_13154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (20))){
var inst_11588 = (state_11710[(7)]);
var inst_11612 = cljs.core.first(inst_11588);
var inst_11613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11612,(0),null);
var inst_11614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11612,(1),null);
var state_11710__$1 = (function (){var statearr_11713 = state_11710;
(statearr_11713[(8)] = inst_11613);

return statearr_11713;
})();
if(cljs.core.truth_(inst_11614)){
var statearr_11714_13155 = state_11710__$1;
(statearr_11714_13155[(1)] = (22));

} else {
var statearr_11715_13156 = state_11710__$1;
(statearr_11715_13156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (27))){
var inst_11557 = (state_11710[(9)]);
var inst_11644 = (state_11710[(10)]);
var inst_11642 = (state_11710[(11)]);
var inst_11649 = (state_11710[(12)]);
var inst_11649__$1 = cljs.core._nth(inst_11642,inst_11644);
var inst_11650 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11649__$1,inst_11557,done);
var state_11710__$1 = (function (){var statearr_11716 = state_11710;
(statearr_11716[(12)] = inst_11649__$1);

return statearr_11716;
})();
if(cljs.core.truth_(inst_11650)){
var statearr_11717_13157 = state_11710__$1;
(statearr_11717_13157[(1)] = (30));

} else {
var statearr_11723_13158 = state_11710__$1;
(statearr_11723_13158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (1))){
var state_11710__$1 = state_11710;
var statearr_11724_13159 = state_11710__$1;
(statearr_11724_13159[(2)] = null);

(statearr_11724_13159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (24))){
var inst_11588 = (state_11710[(7)]);
var inst_11619 = (state_11710[(2)]);
var inst_11620 = cljs.core.next(inst_11588);
var inst_11566 = inst_11620;
var inst_11567 = null;
var inst_11568 = (0);
var inst_11569 = (0);
var state_11710__$1 = (function (){var statearr_11725 = state_11710;
(statearr_11725[(13)] = inst_11619);

(statearr_11725[(14)] = inst_11568);

(statearr_11725[(15)] = inst_11569);

(statearr_11725[(16)] = inst_11567);

(statearr_11725[(17)] = inst_11566);

return statearr_11725;
})();
var statearr_11726_13160 = state_11710__$1;
(statearr_11726_13160[(2)] = null);

(statearr_11726_13160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (39))){
var state_11710__$1 = state_11710;
var statearr_11730_13161 = state_11710__$1;
(statearr_11730_13161[(2)] = null);

(statearr_11730_13161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (4))){
var inst_11557 = (state_11710[(9)]);
var inst_11557__$1 = (state_11710[(2)]);
var inst_11558 = (inst_11557__$1 == null);
var state_11710__$1 = (function (){var statearr_11731 = state_11710;
(statearr_11731[(9)] = inst_11557__$1);

return statearr_11731;
})();
if(cljs.core.truth_(inst_11558)){
var statearr_11732_13162 = state_11710__$1;
(statearr_11732_13162[(1)] = (5));

} else {
var statearr_11733_13163 = state_11710__$1;
(statearr_11733_13163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (15))){
var inst_11568 = (state_11710[(14)]);
var inst_11569 = (state_11710[(15)]);
var inst_11567 = (state_11710[(16)]);
var inst_11566 = (state_11710[(17)]);
var inst_11584 = (state_11710[(2)]);
var inst_11585 = (inst_11569 + (1));
var tmp11727 = inst_11568;
var tmp11728 = inst_11567;
var tmp11729 = inst_11566;
var inst_11566__$1 = tmp11729;
var inst_11567__$1 = tmp11728;
var inst_11568__$1 = tmp11727;
var inst_11569__$1 = inst_11585;
var state_11710__$1 = (function (){var statearr_11734 = state_11710;
(statearr_11734[(14)] = inst_11568__$1);

(statearr_11734[(18)] = inst_11584);

(statearr_11734[(15)] = inst_11569__$1);

(statearr_11734[(16)] = inst_11567__$1);

(statearr_11734[(17)] = inst_11566__$1);

return statearr_11734;
})();
var statearr_11735_13164 = state_11710__$1;
(statearr_11735_13164[(2)] = null);

(statearr_11735_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (21))){
var inst_11623 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11739_13165 = state_11710__$1;
(statearr_11739_13165[(2)] = inst_11623);

(statearr_11739_13165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (31))){
var inst_11649 = (state_11710[(12)]);
var inst_11656 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11649);
var state_11710__$1 = state_11710;
var statearr_11740_13166 = state_11710__$1;
(statearr_11740_13166[(2)] = inst_11656);

(statearr_11740_13166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (32))){
var inst_11643 = (state_11710[(19)]);
var inst_11641 = (state_11710[(20)]);
var inst_11644 = (state_11710[(10)]);
var inst_11642 = (state_11710[(11)]);
var inst_11658 = (state_11710[(2)]);
var inst_11659 = (inst_11644 + (1));
var tmp11736 = inst_11643;
var tmp11737 = inst_11641;
var tmp11738 = inst_11642;
var inst_11641__$1 = tmp11737;
var inst_11642__$1 = tmp11738;
var inst_11643__$1 = tmp11736;
var inst_11644__$1 = inst_11659;
var state_11710__$1 = (function (){var statearr_11741 = state_11710;
(statearr_11741[(19)] = inst_11643__$1);

(statearr_11741[(20)] = inst_11641__$1);

(statearr_11741[(21)] = inst_11658);

(statearr_11741[(10)] = inst_11644__$1);

(statearr_11741[(11)] = inst_11642__$1);

return statearr_11741;
})();
var statearr_11742_13167 = state_11710__$1;
(statearr_11742_13167[(2)] = null);

(statearr_11742_13167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (40))){
var inst_11671 = (state_11710[(22)]);
var inst_11675 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11671);
var state_11710__$1 = state_11710;
var statearr_11743_13168 = state_11710__$1;
(statearr_11743_13168[(2)] = inst_11675);

(statearr_11743_13168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (33))){
var inst_11662 = (state_11710[(23)]);
var inst_11664 = cljs.core.chunked_seq_QMARK_(inst_11662);
var state_11710__$1 = state_11710;
if(inst_11664){
var statearr_11744_13169 = state_11710__$1;
(statearr_11744_13169[(1)] = (36));

} else {
var statearr_11745_13170 = state_11710__$1;
(statearr_11745_13170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (13))){
var inst_11578 = (state_11710[(24)]);
var inst_11581 = cljs.core.async.close_BANG_(inst_11578);
var state_11710__$1 = state_11710;
var statearr_11749_13171 = state_11710__$1;
(statearr_11749_13171[(2)] = inst_11581);

(statearr_11749_13171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (22))){
var inst_11613 = (state_11710[(8)]);
var inst_11616 = cljs.core.async.close_BANG_(inst_11613);
var state_11710__$1 = state_11710;
var statearr_11750_13172 = state_11710__$1;
(statearr_11750_13172[(2)] = inst_11616);

(statearr_11750_13172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (36))){
var inst_11662 = (state_11710[(23)]);
var inst_11666 = cljs.core.chunk_first(inst_11662);
var inst_11667 = cljs.core.chunk_rest(inst_11662);
var inst_11668 = cljs.core.count(inst_11666);
var inst_11641 = inst_11667;
var inst_11642 = inst_11666;
var inst_11643 = inst_11668;
var inst_11644 = (0);
var state_11710__$1 = (function (){var statearr_11751 = state_11710;
(statearr_11751[(19)] = inst_11643);

(statearr_11751[(20)] = inst_11641);

(statearr_11751[(10)] = inst_11644);

(statearr_11751[(11)] = inst_11642);

return statearr_11751;
})();
var statearr_11753_13173 = state_11710__$1;
(statearr_11753_13173[(2)] = null);

(statearr_11753_13173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (41))){
var inst_11662 = (state_11710[(23)]);
var inst_11677 = (state_11710[(2)]);
var inst_11678 = cljs.core.next(inst_11662);
var inst_11641 = inst_11678;
var inst_11642 = null;
var inst_11643 = (0);
var inst_11644 = (0);
var state_11710__$1 = (function (){var statearr_11754 = state_11710;
(statearr_11754[(19)] = inst_11643);

(statearr_11754[(20)] = inst_11641);

(statearr_11754[(10)] = inst_11644);

(statearr_11754[(11)] = inst_11642);

(statearr_11754[(25)] = inst_11677);

return statearr_11754;
})();
var statearr_11755_13174 = state_11710__$1;
(statearr_11755_13174[(2)] = null);

(statearr_11755_13174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (43))){
var state_11710__$1 = state_11710;
var statearr_11756_13175 = state_11710__$1;
(statearr_11756_13175[(2)] = null);

(statearr_11756_13175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (29))){
var inst_11686 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11757_13176 = state_11710__$1;
(statearr_11757_13176[(2)] = inst_11686);

(statearr_11757_13176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (44))){
var inst_11703 = (state_11710[(2)]);
var state_11710__$1 = (function (){var statearr_11758 = state_11710;
(statearr_11758[(26)] = inst_11703);

return statearr_11758;
})();
var statearr_11759_13177 = state_11710__$1;
(statearr_11759_13177[(2)] = null);

(statearr_11759_13177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (6))){
var inst_11633 = (state_11710[(27)]);
var inst_11632 = cljs.core.deref(cs);
var inst_11633__$1 = cljs.core.keys(inst_11632);
var inst_11634 = cljs.core.count(inst_11633__$1);
var inst_11635 = cljs.core.reset_BANG_(dctr,inst_11634);
var inst_11640 = cljs.core.seq(inst_11633__$1);
var inst_11641 = inst_11640;
var inst_11642 = null;
var inst_11643 = (0);
var inst_11644 = (0);
var state_11710__$1 = (function (){var statearr_11760 = state_11710;
(statearr_11760[(27)] = inst_11633__$1);

(statearr_11760[(19)] = inst_11643);

(statearr_11760[(20)] = inst_11641);

(statearr_11760[(10)] = inst_11644);

(statearr_11760[(28)] = inst_11635);

(statearr_11760[(11)] = inst_11642);

return statearr_11760;
})();
var statearr_11762_13178 = state_11710__$1;
(statearr_11762_13178[(2)] = null);

(statearr_11762_13178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (28))){
var inst_11662 = (state_11710[(23)]);
var inst_11641 = (state_11710[(20)]);
var inst_11662__$1 = cljs.core.seq(inst_11641);
var state_11710__$1 = (function (){var statearr_11764 = state_11710;
(statearr_11764[(23)] = inst_11662__$1);

return statearr_11764;
})();
if(inst_11662__$1){
var statearr_11765_13179 = state_11710__$1;
(statearr_11765_13179[(1)] = (33));

} else {
var statearr_11767_13180 = state_11710__$1;
(statearr_11767_13180[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (25))){
var inst_11643 = (state_11710[(19)]);
var inst_11644 = (state_11710[(10)]);
var inst_11646 = (inst_11644 < inst_11643);
var inst_11647 = inst_11646;
var state_11710__$1 = state_11710;
if(cljs.core.truth_(inst_11647)){
var statearr_11768_13181 = state_11710__$1;
(statearr_11768_13181[(1)] = (27));

} else {
var statearr_11769_13182 = state_11710__$1;
(statearr_11769_13182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (34))){
var state_11710__$1 = state_11710;
var statearr_11770_13183 = state_11710__$1;
(statearr_11770_13183[(2)] = null);

(statearr_11770_13183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (17))){
var state_11710__$1 = state_11710;
var statearr_11771_13184 = state_11710__$1;
(statearr_11771_13184[(2)] = null);

(statearr_11771_13184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (3))){
var inst_11708 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11710__$1,inst_11708);
} else {
if((state_val_11711 === (12))){
var inst_11628 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11772_13185 = state_11710__$1;
(statearr_11772_13185[(2)] = inst_11628);

(statearr_11772_13185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (2))){
var state_11710__$1 = state_11710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11710__$1,(4),ch);
} else {
if((state_val_11711 === (23))){
var state_11710__$1 = state_11710;
var statearr_11773_13186 = state_11710__$1;
(statearr_11773_13186[(2)] = null);

(statearr_11773_13186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (35))){
var inst_11684 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11774_13187 = state_11710__$1;
(statearr_11774_13187[(2)] = inst_11684);

(statearr_11774_13187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (19))){
var inst_11588 = (state_11710[(7)]);
var inst_11592 = cljs.core.chunk_first(inst_11588);
var inst_11593 = cljs.core.chunk_rest(inst_11588);
var inst_11594 = cljs.core.count(inst_11592);
var inst_11566 = inst_11593;
var inst_11567 = inst_11592;
var inst_11568 = inst_11594;
var inst_11569 = (0);
var state_11710__$1 = (function (){var statearr_11775 = state_11710;
(statearr_11775[(14)] = inst_11568);

(statearr_11775[(15)] = inst_11569);

(statearr_11775[(16)] = inst_11567);

(statearr_11775[(17)] = inst_11566);

return statearr_11775;
})();
var statearr_11776_13188 = state_11710__$1;
(statearr_11776_13188[(2)] = null);

(statearr_11776_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (11))){
var inst_11588 = (state_11710[(7)]);
var inst_11566 = (state_11710[(17)]);
var inst_11588__$1 = cljs.core.seq(inst_11566);
var state_11710__$1 = (function (){var statearr_11777 = state_11710;
(statearr_11777[(7)] = inst_11588__$1);

return statearr_11777;
})();
if(inst_11588__$1){
var statearr_11778_13189 = state_11710__$1;
(statearr_11778_13189[(1)] = (16));

} else {
var statearr_11779_13190 = state_11710__$1;
(statearr_11779_13190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (9))){
var inst_11630 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11780_13191 = state_11710__$1;
(statearr_11780_13191[(2)] = inst_11630);

(statearr_11780_13191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (5))){
var inst_11564 = cljs.core.deref(cs);
var inst_11565 = cljs.core.seq(inst_11564);
var inst_11566 = inst_11565;
var inst_11567 = null;
var inst_11568 = (0);
var inst_11569 = (0);
var state_11710__$1 = (function (){var statearr_11781 = state_11710;
(statearr_11781[(14)] = inst_11568);

(statearr_11781[(15)] = inst_11569);

(statearr_11781[(16)] = inst_11567);

(statearr_11781[(17)] = inst_11566);

return statearr_11781;
})();
var statearr_11782_13192 = state_11710__$1;
(statearr_11782_13192[(2)] = null);

(statearr_11782_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (14))){
var state_11710__$1 = state_11710;
var statearr_11783_13193 = state_11710__$1;
(statearr_11783_13193[(2)] = null);

(statearr_11783_13193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (45))){
var inst_11700 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11784_13194 = state_11710__$1;
(statearr_11784_13194[(2)] = inst_11700);

(statearr_11784_13194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (26))){
var inst_11633 = (state_11710[(27)]);
var inst_11688 = (state_11710[(2)]);
var inst_11689 = cljs.core.seq(inst_11633);
var state_11710__$1 = (function (){var statearr_11785 = state_11710;
(statearr_11785[(29)] = inst_11688);

return statearr_11785;
})();
if(inst_11689){
var statearr_11786_13195 = state_11710__$1;
(statearr_11786_13195[(1)] = (42));

} else {
var statearr_11787_13196 = state_11710__$1;
(statearr_11787_13196[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (16))){
var inst_11588 = (state_11710[(7)]);
var inst_11590 = cljs.core.chunked_seq_QMARK_(inst_11588);
var state_11710__$1 = state_11710;
if(inst_11590){
var statearr_11788_13197 = state_11710__$1;
(statearr_11788_13197[(1)] = (19));

} else {
var statearr_11789_13198 = state_11710__$1;
(statearr_11789_13198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (38))){
var inst_11681 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11790_13199 = state_11710__$1;
(statearr_11790_13199[(2)] = inst_11681);

(statearr_11790_13199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (30))){
var state_11710__$1 = state_11710;
var statearr_11791_13200 = state_11710__$1;
(statearr_11791_13200[(2)] = null);

(statearr_11791_13200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (10))){
var inst_11569 = (state_11710[(15)]);
var inst_11567 = (state_11710[(16)]);
var inst_11577 = cljs.core._nth(inst_11567,inst_11569);
var inst_11578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11577,(0),null);
var inst_11579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11577,(1),null);
var state_11710__$1 = (function (){var statearr_11792 = state_11710;
(statearr_11792[(24)] = inst_11578);

return statearr_11792;
})();
if(cljs.core.truth_(inst_11579)){
var statearr_11793_13201 = state_11710__$1;
(statearr_11793_13201[(1)] = (13));

} else {
var statearr_11794_13202 = state_11710__$1;
(statearr_11794_13202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (18))){
var inst_11626 = (state_11710[(2)]);
var state_11710__$1 = state_11710;
var statearr_11795_13203 = state_11710__$1;
(statearr_11795_13203[(2)] = inst_11626);

(statearr_11795_13203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (42))){
var state_11710__$1 = state_11710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11710__$1,(45),dchan);
} else {
if((state_val_11711 === (37))){
var inst_11662 = (state_11710[(23)]);
var inst_11557 = (state_11710[(9)]);
var inst_11671 = (state_11710[(22)]);
var inst_11671__$1 = cljs.core.first(inst_11662);
var inst_11672 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11671__$1,inst_11557,done);
var state_11710__$1 = (function (){var statearr_11796 = state_11710;
(statearr_11796[(22)] = inst_11671__$1);

return statearr_11796;
})();
if(cljs.core.truth_(inst_11672)){
var statearr_11797_13204 = state_11710__$1;
(statearr_11797_13204[(1)] = (39));

} else {
var statearr_11798_13205 = state_11710__$1;
(statearr_11798_13205[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11711 === (8))){
var inst_11568 = (state_11710[(14)]);
var inst_11569 = (state_11710[(15)]);
var inst_11571 = (inst_11569 < inst_11568);
var inst_11572 = inst_11571;
var state_11710__$1 = state_11710;
if(cljs.core.truth_(inst_11572)){
var statearr_11799_13206 = state_11710__$1;
(statearr_11799_13206[(1)] = (10));

} else {
var statearr_11800_13207 = state_11710__$1;
(statearr_11800_13207[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10936__auto__ = null;
var cljs$core$async$mult_$_state_machine__10936__auto____0 = (function (){
var statearr_11801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11801[(0)] = cljs$core$async$mult_$_state_machine__10936__auto__);

(statearr_11801[(1)] = (1));

return statearr_11801;
});
var cljs$core$async$mult_$_state_machine__10936__auto____1 = (function (state_11710){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11710);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11802){var ex__10939__auto__ = e11802;
var statearr_11803_13208 = state_11710;
(statearr_11803_13208[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11710[(4)]))){
var statearr_11804_13209 = state_11710;
(statearr_11804_13209[(1)] = cljs.core.first((state_11710[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13210 = state_11710;
state_11710 = G__13210;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10936__auto__ = function(state_11710){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10936__auto____1.call(this,state_11710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10936__auto____0;
cljs$core$async$mult_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10936__auto____1;
return cljs$core$async$mult_$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11805 = f__10979__auto__();
(statearr_11805[(6)] = c__10978__auto___13153);

return statearr_11805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__11807 = arguments.length;
switch (G__11807) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11813){
var map__11814 = p__11813;
var map__11814__$1 = (((((!((map__11814 == null))))?(((((map__11814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11814):map__11814);
var opts = map__11814__$1;
var statearr_11816_13220 = state;
(statearr_11816_13220[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11817_13221 = state;
(statearr_11817_13221[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11818_13222 = state;
(statearr_11818_13222[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11809){
var G__11810 = cljs.core.first(seq11809);
var seq11809__$1 = cljs.core.next(seq11809);
var G__11811 = cljs.core.first(seq11809__$1);
var seq11809__$2 = cljs.core.next(seq11809__$1);
var G__11812 = cljs.core.first(seq11809__$2);
var seq11809__$3 = cljs.core.next(seq11809__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11810,G__11811,G__11812,seq11809__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11819 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11820){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11820 = meta11820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11821,meta11820__$1){
var self__ = this;
var _11821__$1 = this;
return (new cljs.core.async.t_cljs$core$async11819(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11820__$1));
}));

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11821){
var self__ = this;
var _11821__$1 = this;
return self__.meta11820;
}));

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11819.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11820","meta11820",-1953057140,null)], null);
}));

(cljs.core.async.t_cljs$core$async11819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11819");

(cljs.core.async.t_cljs$core$async11819.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11819.
 */
cljs.core.async.__GT_t_cljs$core$async11819 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11819(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11820){
return (new cljs.core.async.t_cljs$core$async11819(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11820));
});

}

return (new cljs.core.async.t_cljs$core$async11819(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10978__auto___13223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_11923){
var state_val_11924 = (state_11923[(1)]);
if((state_val_11924 === (7))){
var inst_11838 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11933_13224 = state_11923__$1;
(statearr_11933_13224[(2)] = inst_11838);

(statearr_11933_13224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (20))){
var inst_11850 = (state_11923[(7)]);
var state_11923__$1 = state_11923;
var statearr_11934_13225 = state_11923__$1;
(statearr_11934_13225[(2)] = inst_11850);

(statearr_11934_13225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (27))){
var state_11923__$1 = state_11923;
var statearr_11939_13226 = state_11923__$1;
(statearr_11939_13226[(2)] = null);

(statearr_11939_13226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (1))){
var inst_11825 = (state_11923[(8)]);
var inst_11825__$1 = calc_state();
var inst_11827 = (inst_11825__$1 == null);
var inst_11828 = cljs.core.not(inst_11827);
var state_11923__$1 = (function (){var statearr_11940 = state_11923;
(statearr_11940[(8)] = inst_11825__$1);

return statearr_11940;
})();
if(inst_11828){
var statearr_11941_13227 = state_11923__$1;
(statearr_11941_13227[(1)] = (2));

} else {
var statearr_11942_13228 = state_11923__$1;
(statearr_11942_13228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (24))){
var inst_11874 = (state_11923[(9)]);
var inst_11897 = (state_11923[(10)]);
var inst_11883 = (state_11923[(11)]);
var inst_11897__$1 = (inst_11874.cljs$core$IFn$_invoke$arity$1 ? inst_11874.cljs$core$IFn$_invoke$arity$1(inst_11883) : inst_11874.call(null,inst_11883));
var state_11923__$1 = (function (){var statearr_11943 = state_11923;
(statearr_11943[(10)] = inst_11897__$1);

return statearr_11943;
})();
if(cljs.core.truth_(inst_11897__$1)){
var statearr_11944_13229 = state_11923__$1;
(statearr_11944_13229[(1)] = (29));

} else {
var statearr_11945_13230 = state_11923__$1;
(statearr_11945_13230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (4))){
var inst_11841 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11841)){
var statearr_11947_13231 = state_11923__$1;
(statearr_11947_13231[(1)] = (8));

} else {
var statearr_11949_13232 = state_11923__$1;
(statearr_11949_13232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (15))){
var inst_11868 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11868)){
var statearr_11950_13233 = state_11923__$1;
(statearr_11950_13233[(1)] = (19));

} else {
var statearr_11951_13234 = state_11923__$1;
(statearr_11951_13234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (21))){
var inst_11873 = (state_11923[(12)]);
var inst_11873__$1 = (state_11923[(2)]);
var inst_11874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11873__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11873__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11873__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11923__$1 = (function (){var statearr_11952 = state_11923;
(statearr_11952[(9)] = inst_11874);

(statearr_11952[(12)] = inst_11873__$1);

(statearr_11952[(13)] = inst_11875);

return statearr_11952;
})();
return cljs.core.async.ioc_alts_BANG_(state_11923__$1,(22),inst_11876);
} else {
if((state_val_11924 === (31))){
var inst_11905 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11905)){
var statearr_11953_13235 = state_11923__$1;
(statearr_11953_13235[(1)] = (32));

} else {
var statearr_11954_13236 = state_11923__$1;
(statearr_11954_13236[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (32))){
var inst_11882 = (state_11923[(14)]);
var state_11923__$1 = state_11923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11923__$1,(35),out,inst_11882);
} else {
if((state_val_11924 === (33))){
var inst_11873 = (state_11923[(12)]);
var inst_11850 = inst_11873;
var state_11923__$1 = (function (){var statearr_11955 = state_11923;
(statearr_11955[(7)] = inst_11850);

return statearr_11955;
})();
var statearr_11956_13237 = state_11923__$1;
(statearr_11956_13237[(2)] = null);

(statearr_11956_13237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (13))){
var inst_11850 = (state_11923[(7)]);
var inst_11857 = inst_11850.cljs$lang$protocol_mask$partition0$;
var inst_11858 = (inst_11857 & (64));
var inst_11859 = inst_11850.cljs$core$ISeq$;
var inst_11860 = (cljs.core.PROTOCOL_SENTINEL === inst_11859);
var inst_11861 = ((inst_11858) || (inst_11860));
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11861)){
var statearr_11957_13238 = state_11923__$1;
(statearr_11957_13238[(1)] = (16));

} else {
var statearr_11958_13239 = state_11923__$1;
(statearr_11958_13239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (22))){
var inst_11882 = (state_11923[(14)]);
var inst_11883 = (state_11923[(11)]);
var inst_11881 = (state_11923[(2)]);
var inst_11882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11881,(0),null);
var inst_11883__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11881,(1),null);
var inst_11884 = (inst_11882__$1 == null);
var inst_11885 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11883__$1,change);
var inst_11886 = ((inst_11884) || (inst_11885));
var state_11923__$1 = (function (){var statearr_11959 = state_11923;
(statearr_11959[(14)] = inst_11882__$1);

(statearr_11959[(11)] = inst_11883__$1);

return statearr_11959;
})();
if(cljs.core.truth_(inst_11886)){
var statearr_11960_13240 = state_11923__$1;
(statearr_11960_13240[(1)] = (23));

} else {
var statearr_11961_13241 = state_11923__$1;
(statearr_11961_13241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (36))){
var inst_11873 = (state_11923[(12)]);
var inst_11850 = inst_11873;
var state_11923__$1 = (function (){var statearr_11962 = state_11923;
(statearr_11962[(7)] = inst_11850);

return statearr_11962;
})();
var statearr_11963_13242 = state_11923__$1;
(statearr_11963_13242[(2)] = null);

(statearr_11963_13242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (29))){
var inst_11897 = (state_11923[(10)]);
var state_11923__$1 = state_11923;
var statearr_11964_13243 = state_11923__$1;
(statearr_11964_13243[(2)] = inst_11897);

(statearr_11964_13243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (6))){
var state_11923__$1 = state_11923;
var statearr_11965_13244 = state_11923__$1;
(statearr_11965_13244[(2)] = false);

(statearr_11965_13244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (28))){
var inst_11893 = (state_11923[(2)]);
var inst_11894 = calc_state();
var inst_11850 = inst_11894;
var state_11923__$1 = (function (){var statearr_11966 = state_11923;
(statearr_11966[(7)] = inst_11850);

(statearr_11966[(15)] = inst_11893);

return statearr_11966;
})();
var statearr_11967_13245 = state_11923__$1;
(statearr_11967_13245[(2)] = null);

(statearr_11967_13245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (25))){
var inst_11919 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11968_13246 = state_11923__$1;
(statearr_11968_13246[(2)] = inst_11919);

(statearr_11968_13246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (34))){
var inst_11917 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11969_13247 = state_11923__$1;
(statearr_11969_13247[(2)] = inst_11917);

(statearr_11969_13247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (17))){
var state_11923__$1 = state_11923;
var statearr_11970_13248 = state_11923__$1;
(statearr_11970_13248[(2)] = false);

(statearr_11970_13248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (3))){
var state_11923__$1 = state_11923;
var statearr_11971_13249 = state_11923__$1;
(statearr_11971_13249[(2)] = false);

(statearr_11971_13249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (12))){
var inst_11921 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11923__$1,inst_11921);
} else {
if((state_val_11924 === (2))){
var inst_11825 = (state_11923[(8)]);
var inst_11830 = inst_11825.cljs$lang$protocol_mask$partition0$;
var inst_11831 = (inst_11830 & (64));
var inst_11832 = inst_11825.cljs$core$ISeq$;
var inst_11833 = (cljs.core.PROTOCOL_SENTINEL === inst_11832);
var inst_11834 = ((inst_11831) || (inst_11833));
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11834)){
var statearr_11972_13250 = state_11923__$1;
(statearr_11972_13250[(1)] = (5));

} else {
var statearr_11973_13251 = state_11923__$1;
(statearr_11973_13251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (23))){
var inst_11882 = (state_11923[(14)]);
var inst_11888 = (inst_11882 == null);
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11888)){
var statearr_11974_13252 = state_11923__$1;
(statearr_11974_13252[(1)] = (26));

} else {
var statearr_11975_13253 = state_11923__$1;
(statearr_11975_13253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (35))){
var inst_11908 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11908)){
var statearr_11976_13254 = state_11923__$1;
(statearr_11976_13254[(1)] = (36));

} else {
var statearr_11977_13255 = state_11923__$1;
(statearr_11977_13255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (19))){
var inst_11850 = (state_11923[(7)]);
var inst_11870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11850);
var state_11923__$1 = state_11923;
var statearr_11978_13256 = state_11923__$1;
(statearr_11978_13256[(2)] = inst_11870);

(statearr_11978_13256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (11))){
var inst_11850 = (state_11923[(7)]);
var inst_11854 = (inst_11850 == null);
var inst_11855 = cljs.core.not(inst_11854);
var state_11923__$1 = state_11923;
if(inst_11855){
var statearr_11979_13257 = state_11923__$1;
(statearr_11979_13257[(1)] = (13));

} else {
var statearr_11980_13258 = state_11923__$1;
(statearr_11980_13258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (9))){
var inst_11825 = (state_11923[(8)]);
var state_11923__$1 = state_11923;
var statearr_11981_13259 = state_11923__$1;
(statearr_11981_13259[(2)] = inst_11825);

(statearr_11981_13259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (5))){
var state_11923__$1 = state_11923;
var statearr_11982_13260 = state_11923__$1;
(statearr_11982_13260[(2)] = true);

(statearr_11982_13260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (14))){
var state_11923__$1 = state_11923;
var statearr_11983_13261 = state_11923__$1;
(statearr_11983_13261[(2)] = false);

(statearr_11983_13261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (26))){
var inst_11883 = (state_11923[(11)]);
var inst_11890 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11883);
var state_11923__$1 = state_11923;
var statearr_11984_13262 = state_11923__$1;
(statearr_11984_13262[(2)] = inst_11890);

(statearr_11984_13262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (16))){
var state_11923__$1 = state_11923;
var statearr_11985_13263 = state_11923__$1;
(statearr_11985_13263[(2)] = true);

(statearr_11985_13263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (38))){
var inst_11913 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11986_13264 = state_11923__$1;
(statearr_11986_13264[(2)] = inst_11913);

(statearr_11986_13264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (30))){
var inst_11874 = (state_11923[(9)]);
var inst_11875 = (state_11923[(13)]);
var inst_11883 = (state_11923[(11)]);
var inst_11900 = cljs.core.empty_QMARK_(inst_11874);
var inst_11901 = (inst_11875.cljs$core$IFn$_invoke$arity$1 ? inst_11875.cljs$core$IFn$_invoke$arity$1(inst_11883) : inst_11875.call(null,inst_11883));
var inst_11902 = cljs.core.not(inst_11901);
var inst_11903 = ((inst_11900) && (inst_11902));
var state_11923__$1 = state_11923;
var statearr_11987_13265 = state_11923__$1;
(statearr_11987_13265[(2)] = inst_11903);

(statearr_11987_13265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (10))){
var inst_11825 = (state_11923[(8)]);
var inst_11846 = (state_11923[(2)]);
var inst_11847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11846,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11846,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11846,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11850 = inst_11825;
var state_11923__$1 = (function (){var statearr_11988 = state_11923;
(statearr_11988[(7)] = inst_11850);

(statearr_11988[(16)] = inst_11847);

(statearr_11988[(17)] = inst_11849);

(statearr_11988[(18)] = inst_11848);

return statearr_11988;
})();
var statearr_11989_13267 = state_11923__$1;
(statearr_11989_13267[(2)] = null);

(statearr_11989_13267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (18))){
var inst_11865 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11990_13268 = state_11923__$1;
(statearr_11990_13268[(2)] = inst_11865);

(statearr_11990_13268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (37))){
var state_11923__$1 = state_11923;
var statearr_11991_13269 = state_11923__$1;
(statearr_11991_13269[(2)] = null);

(statearr_11991_13269[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (8))){
var inst_11825 = (state_11923[(8)]);
var inst_11843 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11825);
var state_11923__$1 = state_11923;
var statearr_11992_13270 = state_11923__$1;
(statearr_11992_13270[(2)] = inst_11843);

(statearr_11992_13270[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10936__auto__ = null;
var cljs$core$async$mix_$_state_machine__10936__auto____0 = (function (){
var statearr_11993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11993[(0)] = cljs$core$async$mix_$_state_machine__10936__auto__);

(statearr_11993[(1)] = (1));

return statearr_11993;
});
var cljs$core$async$mix_$_state_machine__10936__auto____1 = (function (state_11923){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11923);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11994){var ex__10939__auto__ = e11994;
var statearr_11995_13271 = state_11923;
(statearr_11995_13271[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11923[(4)]))){
var statearr_11996_13272 = state_11923;
(statearr_11996_13272[(1)] = cljs.core.first((state_11923[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13273 = state_11923;
state_11923 = G__13273;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10936__auto__ = function(state_11923){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10936__auto____1.call(this,state_11923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10936__auto____0;
cljs$core$async$mix_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10936__auto____1;
return cljs$core$async$mix_$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_11997 = f__10979__auto__();
(statearr_11997[(6)] = c__10978__auto___13223);

return statearr_11997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13274 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13274(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13276 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13276(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13277 = (function() {
var G__13278 = null;
var G__13278__1 = (function (p){
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
var G__13278__2 = (function (p,v){
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
G__13278 = function(p,v){
switch(arguments.length){
case 1:
return G__13278__1.call(this,p);
case 2:
return G__13278__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13278.cljs$core$IFn$_invoke$arity$1 = G__13278__1;
G__13278.cljs$core$IFn$_invoke$arity$2 = G__13278__2;
return G__13278;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12011 = arguments.length;
switch (G__12011) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13277(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13277(p,v);
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
var G__12021 = arguments.length;
switch (G__12021) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12019_SHARP_){
if(cljs.core.truth_((p1__12019_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12019_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12019_SHARP_.call(null,topic)))){
return p1__12019_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12019_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12022 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12023){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12023 = meta12023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12024,meta12023__$1){
var self__ = this;
var _12024__$1 = this;
return (new cljs.core.async.t_cljs$core$async12022(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12023__$1));
}));

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12024){
var self__ = this;
var _12024__$1 = this;
return self__.meta12023;
}));

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12023","meta12023",-1387912320,null)], null);
}));

(cljs.core.async.t_cljs$core$async12022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12022");

(cljs.core.async.t_cljs$core$async12022.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12022.
 */
cljs.core.async.__GT_t_cljs$core$async12022 = (function cljs$core$async$__GT_t_cljs$core$async12022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12023){
return (new cljs.core.async.t_cljs$core$async12022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12023));
});

}

return (new cljs.core.async.t_cljs$core$async12022(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10978__auto___13289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12112){
var state_val_12113 = (state_12112[(1)]);
if((state_val_12113 === (7))){
var inst_12106 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
var statearr_12114_13290 = state_12112__$1;
(statearr_12114_13290[(2)] = inst_12106);

(statearr_12114_13290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (20))){
var state_12112__$1 = state_12112;
var statearr_12115_13291 = state_12112__$1;
(statearr_12115_13291[(2)] = null);

(statearr_12115_13291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (1))){
var state_12112__$1 = state_12112;
var statearr_12116_13292 = state_12112__$1;
(statearr_12116_13292[(2)] = null);

(statearr_12116_13292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (24))){
var inst_12089 = (state_12112[(7)]);
var inst_12098 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12089);
var state_12112__$1 = state_12112;
var statearr_12117_13293 = state_12112__$1;
(statearr_12117_13293[(2)] = inst_12098);

(statearr_12117_13293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (4))){
var inst_12031 = (state_12112[(8)]);
var inst_12031__$1 = (state_12112[(2)]);
var inst_12040 = (inst_12031__$1 == null);
var state_12112__$1 = (function (){var statearr_12118 = state_12112;
(statearr_12118[(8)] = inst_12031__$1);

return statearr_12118;
})();
if(cljs.core.truth_(inst_12040)){
var statearr_12119_13294 = state_12112__$1;
(statearr_12119_13294[(1)] = (5));

} else {
var statearr_12120_13295 = state_12112__$1;
(statearr_12120_13295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (15))){
var inst_12083 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
var statearr_12121_13296 = state_12112__$1;
(statearr_12121_13296[(2)] = inst_12083);

(statearr_12121_13296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (21))){
var inst_12103 = (state_12112[(2)]);
var state_12112__$1 = (function (){var statearr_12122 = state_12112;
(statearr_12122[(9)] = inst_12103);

return statearr_12122;
})();
var statearr_12123_13297 = state_12112__$1;
(statearr_12123_13297[(2)] = null);

(statearr_12123_13297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (13))){
var inst_12065 = (state_12112[(10)]);
var inst_12067 = cljs.core.chunked_seq_QMARK_(inst_12065);
var state_12112__$1 = state_12112;
if(inst_12067){
var statearr_12124_13298 = state_12112__$1;
(statearr_12124_13298[(1)] = (16));

} else {
var statearr_12125_13299 = state_12112__$1;
(statearr_12125_13299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (22))){
var inst_12095 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
if(cljs.core.truth_(inst_12095)){
var statearr_12126_13300 = state_12112__$1;
(statearr_12126_13300[(1)] = (23));

} else {
var statearr_12127_13301 = state_12112__$1;
(statearr_12127_13301[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (6))){
var inst_12089 = (state_12112[(7)]);
var inst_12031 = (state_12112[(8)]);
var inst_12091 = (state_12112[(11)]);
var inst_12089__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12031) : topic_fn.call(null,inst_12031));
var inst_12090 = cljs.core.deref(mults);
var inst_12091__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12090,inst_12089__$1);
var state_12112__$1 = (function (){var statearr_12128 = state_12112;
(statearr_12128[(7)] = inst_12089__$1);

(statearr_12128[(11)] = inst_12091__$1);

return statearr_12128;
})();
if(cljs.core.truth_(inst_12091__$1)){
var statearr_12134_13320 = state_12112__$1;
(statearr_12134_13320[(1)] = (19));

} else {
var statearr_12135_13321 = state_12112__$1;
(statearr_12135_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (25))){
var inst_12100 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
var statearr_12136_13322 = state_12112__$1;
(statearr_12136_13322[(2)] = inst_12100);

(statearr_12136_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (17))){
var inst_12065 = (state_12112[(10)]);
var inst_12074 = cljs.core.first(inst_12065);
var inst_12075 = cljs.core.async.muxch_STAR_(inst_12074);
var inst_12076 = cljs.core.async.close_BANG_(inst_12075);
var inst_12077 = cljs.core.next(inst_12065);
var inst_12049 = inst_12077;
var inst_12050 = null;
var inst_12051 = (0);
var inst_12052 = (0);
var state_12112__$1 = (function (){var statearr_12140 = state_12112;
(statearr_12140[(12)] = inst_12050);

(statearr_12140[(13)] = inst_12052);

(statearr_12140[(14)] = inst_12076);

(statearr_12140[(15)] = inst_12051);

(statearr_12140[(16)] = inst_12049);

return statearr_12140;
})();
var statearr_12141_13323 = state_12112__$1;
(statearr_12141_13323[(2)] = null);

(statearr_12141_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (3))){
var inst_12108 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12112__$1,inst_12108);
} else {
if((state_val_12113 === (12))){
var inst_12085 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
var statearr_12142_13324 = state_12112__$1;
(statearr_12142_13324[(2)] = inst_12085);

(statearr_12142_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (2))){
var state_12112__$1 = state_12112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12112__$1,(4),ch);
} else {
if((state_val_12113 === (23))){
var state_12112__$1 = state_12112;
var statearr_12143_13325 = state_12112__$1;
(statearr_12143_13325[(2)] = null);

(statearr_12143_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (19))){
var inst_12031 = (state_12112[(8)]);
var inst_12091 = (state_12112[(11)]);
var inst_12093 = cljs.core.async.muxch_STAR_(inst_12091);
var state_12112__$1 = state_12112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12112__$1,(22),inst_12093,inst_12031);
} else {
if((state_val_12113 === (11))){
var inst_12065 = (state_12112[(10)]);
var inst_12049 = (state_12112[(16)]);
var inst_12065__$1 = cljs.core.seq(inst_12049);
var state_12112__$1 = (function (){var statearr_12144 = state_12112;
(statearr_12144[(10)] = inst_12065__$1);

return statearr_12144;
})();
if(inst_12065__$1){
var statearr_12145_13326 = state_12112__$1;
(statearr_12145_13326[(1)] = (13));

} else {
var statearr_12146_13327 = state_12112__$1;
(statearr_12146_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (9))){
var inst_12087 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
var statearr_12147_13328 = state_12112__$1;
(statearr_12147_13328[(2)] = inst_12087);

(statearr_12147_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (5))){
var inst_12046 = cljs.core.deref(mults);
var inst_12047 = cljs.core.vals(inst_12046);
var inst_12048 = cljs.core.seq(inst_12047);
var inst_12049 = inst_12048;
var inst_12050 = null;
var inst_12051 = (0);
var inst_12052 = (0);
var state_12112__$1 = (function (){var statearr_12148 = state_12112;
(statearr_12148[(12)] = inst_12050);

(statearr_12148[(13)] = inst_12052);

(statearr_12148[(15)] = inst_12051);

(statearr_12148[(16)] = inst_12049);

return statearr_12148;
})();
var statearr_12149_13329 = state_12112__$1;
(statearr_12149_13329[(2)] = null);

(statearr_12149_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (14))){
var state_12112__$1 = state_12112;
var statearr_12153_13330 = state_12112__$1;
(statearr_12153_13330[(2)] = null);

(statearr_12153_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (16))){
var inst_12065 = (state_12112[(10)]);
var inst_12069 = cljs.core.chunk_first(inst_12065);
var inst_12070 = cljs.core.chunk_rest(inst_12065);
var inst_12071 = cljs.core.count(inst_12069);
var inst_12049 = inst_12070;
var inst_12050 = inst_12069;
var inst_12051 = inst_12071;
var inst_12052 = (0);
var state_12112__$1 = (function (){var statearr_12156 = state_12112;
(statearr_12156[(12)] = inst_12050);

(statearr_12156[(13)] = inst_12052);

(statearr_12156[(15)] = inst_12051);

(statearr_12156[(16)] = inst_12049);

return statearr_12156;
})();
var statearr_12157_13331 = state_12112__$1;
(statearr_12157_13331[(2)] = null);

(statearr_12157_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (10))){
var inst_12050 = (state_12112[(12)]);
var inst_12052 = (state_12112[(13)]);
var inst_12051 = (state_12112[(15)]);
var inst_12049 = (state_12112[(16)]);
var inst_12057 = cljs.core._nth(inst_12050,inst_12052);
var inst_12058 = cljs.core.async.muxch_STAR_(inst_12057);
var inst_12059 = cljs.core.async.close_BANG_(inst_12058);
var inst_12062 = (inst_12052 + (1));
var tmp12150 = inst_12050;
var tmp12151 = inst_12051;
var tmp12152 = inst_12049;
var inst_12049__$1 = tmp12152;
var inst_12050__$1 = tmp12150;
var inst_12051__$1 = tmp12151;
var inst_12052__$1 = inst_12062;
var state_12112__$1 = (function (){var statearr_12158 = state_12112;
(statearr_12158[(12)] = inst_12050__$1);

(statearr_12158[(17)] = inst_12059);

(statearr_12158[(13)] = inst_12052__$1);

(statearr_12158[(15)] = inst_12051__$1);

(statearr_12158[(16)] = inst_12049__$1);

return statearr_12158;
})();
var statearr_12159_13332 = state_12112__$1;
(statearr_12159_13332[(2)] = null);

(statearr_12159_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (18))){
var inst_12080 = (state_12112[(2)]);
var state_12112__$1 = state_12112;
var statearr_12160_13333 = state_12112__$1;
(statearr_12160_13333[(2)] = inst_12080);

(statearr_12160_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12113 === (8))){
var inst_12052 = (state_12112[(13)]);
var inst_12051 = (state_12112[(15)]);
var inst_12054 = (inst_12052 < inst_12051);
var inst_12055 = inst_12054;
var state_12112__$1 = state_12112;
if(cljs.core.truth_(inst_12055)){
var statearr_12161_13334 = state_12112__$1;
(statearr_12161_13334[(1)] = (10));

} else {
var statearr_12162_13335 = state_12112__$1;
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12176[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12176[(1)] = (1));

return statearr_12176;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12112){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12112);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12177){var ex__10939__auto__ = e12177;
var statearr_12178_13336 = state_12112;
(statearr_12178_13336[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12112[(4)]))){
var statearr_12179_13337 = state_12112;
(statearr_12179_13337[(1)] = cljs.core.first((state_12112[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12112;
state_12112 = G__13338;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12180 = f__10979__auto__();
(statearr_12180[(6)] = c__10978__auto___13289);

return statearr_12180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__12186 = arguments.length;
switch (G__12186) {
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
var G__12194 = arguments.length;
switch (G__12194) {
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
var G__12209 = arguments.length;
switch (G__12209) {
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
var c__10978__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12269){
var state_val_12270 = (state_12269[(1)]);
if((state_val_12270 === (7))){
var state_12269__$1 = state_12269;
var statearr_12271_13343 = state_12269__$1;
(statearr_12271_13343[(2)] = null);

(statearr_12271_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (1))){
var state_12269__$1 = state_12269;
var statearr_12273_13344 = state_12269__$1;
(statearr_12273_13344[(2)] = null);

(statearr_12273_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (4))){
var inst_12214 = (state_12269[(7)]);
var inst_12213 = (state_12269[(8)]);
var inst_12216 = (inst_12214 < inst_12213);
var state_12269__$1 = state_12269;
if(cljs.core.truth_(inst_12216)){
var statearr_12274_13345 = state_12269__$1;
(statearr_12274_13345[(1)] = (6));

} else {
var statearr_12275_13346 = state_12269__$1;
(statearr_12275_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (15))){
var inst_12254 = (state_12269[(9)]);
var inst_12260 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12254);
var state_12269__$1 = state_12269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12269__$1,(17),out,inst_12260);
} else {
if((state_val_12270 === (13))){
var inst_12254 = (state_12269[(9)]);
var inst_12254__$1 = (state_12269[(2)]);
var inst_12256 = cljs.core.some(cljs.core.nil_QMARK_,inst_12254__$1);
var state_12269__$1 = (function (){var statearr_12276 = state_12269;
(statearr_12276[(9)] = inst_12254__$1);

return statearr_12276;
})();
if(cljs.core.truth_(inst_12256)){
var statearr_12277_13347 = state_12269__$1;
(statearr_12277_13347[(1)] = (14));

} else {
var statearr_12278_13348 = state_12269__$1;
(statearr_12278_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (6))){
var state_12269__$1 = state_12269;
var statearr_12279_13349 = state_12269__$1;
(statearr_12279_13349[(2)] = null);

(statearr_12279_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (17))){
var inst_12262 = (state_12269[(2)]);
var state_12269__$1 = (function (){var statearr_12281 = state_12269;
(statearr_12281[(10)] = inst_12262);

return statearr_12281;
})();
var statearr_12282_13350 = state_12269__$1;
(statearr_12282_13350[(2)] = null);

(statearr_12282_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (3))){
var inst_12267 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12269__$1,inst_12267);
} else {
if((state_val_12270 === (12))){
var _ = (function (){var statearr_12283 = state_12269;
(statearr_12283[(4)] = cljs.core.rest((state_12269[(4)])));

return statearr_12283;
})();
var state_12269__$1 = state_12269;
var ex12280 = (state_12269__$1[(2)]);
var statearr_12284_13351 = state_12269__$1;
(statearr_12284_13351[(5)] = ex12280);


if((ex12280 instanceof Object)){
var statearr_12285_13352 = state_12269__$1;
(statearr_12285_13352[(1)] = (11));

(statearr_12285_13352[(5)] = null);

} else {
throw ex12280;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (2))){
var inst_12212 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12213 = cnt;
var inst_12214 = (0);
var state_12269__$1 = (function (){var statearr_12286 = state_12269;
(statearr_12286[(11)] = inst_12212);

(statearr_12286[(7)] = inst_12214);

(statearr_12286[(8)] = inst_12213);

return statearr_12286;
})();
var statearr_12287_13353 = state_12269__$1;
(statearr_12287_13353[(2)] = null);

(statearr_12287_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (11))){
var inst_12218 = (state_12269[(2)]);
var inst_12219 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12269__$1 = (function (){var statearr_12288 = state_12269;
(statearr_12288[(12)] = inst_12218);

return statearr_12288;
})();
var statearr_12289_13354 = state_12269__$1;
(statearr_12289_13354[(2)] = inst_12219);

(statearr_12289_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (9))){
var inst_12214 = (state_12269[(7)]);
var _ = (function (){var statearr_12290 = state_12269;
(statearr_12290[(4)] = cljs.core.cons((12),(state_12269[(4)])));

return statearr_12290;
})();
var inst_12240 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12214) : chs__$1.call(null,inst_12214));
var inst_12241 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12214) : done.call(null,inst_12214));
var inst_12242 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12240,inst_12241);
var ___$1 = (function (){var statearr_12291 = state_12269;
(statearr_12291[(4)] = cljs.core.rest((state_12269[(4)])));

return statearr_12291;
})();
var state_12269__$1 = state_12269;
var statearr_12294_13355 = state_12269__$1;
(statearr_12294_13355[(2)] = inst_12242);

(statearr_12294_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (5))){
var inst_12252 = (state_12269[(2)]);
var state_12269__$1 = (function (){var statearr_12295 = state_12269;
(statearr_12295[(13)] = inst_12252);

return statearr_12295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12269__$1,(13),dchan);
} else {
if((state_val_12270 === (14))){
var inst_12258 = cljs.core.async.close_BANG_(out);
var state_12269__$1 = state_12269;
var statearr_12298_13356 = state_12269__$1;
(statearr_12298_13356[(2)] = inst_12258);

(statearr_12298_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (16))){
var inst_12265 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
var statearr_12299_13357 = state_12269__$1;
(statearr_12299_13357[(2)] = inst_12265);

(statearr_12299_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (10))){
var inst_12214 = (state_12269[(7)]);
var inst_12245 = (state_12269[(2)]);
var inst_12246 = (inst_12214 + (1));
var inst_12214__$1 = inst_12246;
var state_12269__$1 = (function (){var statearr_12300 = state_12269;
(statearr_12300[(7)] = inst_12214__$1);

(statearr_12300[(14)] = inst_12245);

return statearr_12300;
})();
var statearr_12301_13358 = state_12269__$1;
(statearr_12301_13358[(2)] = null);

(statearr_12301_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (8))){
var inst_12250 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
var statearr_12309_13359 = state_12269__$1;
(statearr_12309_13359[(2)] = inst_12250);

(statearr_12309_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12310[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12310[(1)] = (1));

return statearr_12310;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12269){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12269);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12311){var ex__10939__auto__ = e12311;
var statearr_12312_13360 = state_12269;
(statearr_12312_13360[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12269[(4)]))){
var statearr_12313_13361 = state_12269;
(statearr_12313_13361[(1)] = cljs.core.first((state_12269[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12269;
state_12269 = G__13362;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12314 = f__10979__auto__();
(statearr_12314[(6)] = c__10978__auto___13342);

return statearr_12314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__12321 = arguments.length;
switch (G__12321) {
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
var c__10978__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12353){
var state_val_12354 = (state_12353[(1)]);
if((state_val_12354 === (7))){
var inst_12333 = (state_12353[(7)]);
var inst_12332 = (state_12353[(8)]);
var inst_12332__$1 = (state_12353[(2)]);
var inst_12333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12332__$1,(0),null);
var inst_12334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12332__$1,(1),null);
var inst_12335 = (inst_12333__$1 == null);
var state_12353__$1 = (function (){var statearr_12356 = state_12353;
(statearr_12356[(7)] = inst_12333__$1);

(statearr_12356[(8)] = inst_12332__$1);

(statearr_12356[(9)] = inst_12334);

return statearr_12356;
})();
if(cljs.core.truth_(inst_12335)){
var statearr_12357_13365 = state_12353__$1;
(statearr_12357_13365[(1)] = (8));

} else {
var statearr_12359_13366 = state_12353__$1;
(statearr_12359_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (1))){
var inst_12322 = cljs.core.vec(chs);
var inst_12323 = inst_12322;
var state_12353__$1 = (function (){var statearr_12360 = state_12353;
(statearr_12360[(10)] = inst_12323);

return statearr_12360;
})();
var statearr_12361_13367 = state_12353__$1;
(statearr_12361_13367[(2)] = null);

(statearr_12361_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (4))){
var inst_12323 = (state_12353[(10)]);
var state_12353__$1 = state_12353;
return cljs.core.async.ioc_alts_BANG_(state_12353__$1,(7),inst_12323);
} else {
if((state_val_12354 === (6))){
var inst_12349 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
var statearr_12366_13368 = state_12353__$1;
(statearr_12366_13368[(2)] = inst_12349);

(statearr_12366_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (3))){
var inst_12351 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12353__$1,inst_12351);
} else {
if((state_val_12354 === (2))){
var inst_12323 = (state_12353[(10)]);
var inst_12325 = cljs.core.count(inst_12323);
var inst_12326 = (inst_12325 > (0));
var state_12353__$1 = state_12353;
if(cljs.core.truth_(inst_12326)){
var statearr_12368_13369 = state_12353__$1;
(statearr_12368_13369[(1)] = (4));

} else {
var statearr_12369_13370 = state_12353__$1;
(statearr_12369_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (11))){
var inst_12323 = (state_12353[(10)]);
var inst_12342 = (state_12353[(2)]);
var tmp12367 = inst_12323;
var inst_12323__$1 = tmp12367;
var state_12353__$1 = (function (){var statearr_12370 = state_12353;
(statearr_12370[(11)] = inst_12342);

(statearr_12370[(10)] = inst_12323__$1);

return statearr_12370;
})();
var statearr_12371_13371 = state_12353__$1;
(statearr_12371_13371[(2)] = null);

(statearr_12371_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (9))){
var inst_12333 = (state_12353[(7)]);
var state_12353__$1 = state_12353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12353__$1,(11),out,inst_12333);
} else {
if((state_val_12354 === (5))){
var inst_12347 = cljs.core.async.close_BANG_(out);
var state_12353__$1 = state_12353;
var statearr_12372_13372 = state_12353__$1;
(statearr_12372_13372[(2)] = inst_12347);

(statearr_12372_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (10))){
var inst_12345 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
var statearr_12373_13373 = state_12353__$1;
(statearr_12373_13373[(2)] = inst_12345);

(statearr_12373_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (8))){
var inst_12333 = (state_12353[(7)]);
var inst_12332 = (state_12353[(8)]);
var inst_12323 = (state_12353[(10)]);
var inst_12334 = (state_12353[(9)]);
var inst_12337 = (function (){var cs = inst_12323;
var vec__12328 = inst_12332;
var v = inst_12333;
var c = inst_12334;
return (function (p1__12317_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12317_SHARP_);
});
})();
var inst_12338 = cljs.core.filterv(inst_12337,inst_12323);
var inst_12323__$1 = inst_12338;
var state_12353__$1 = (function (){var statearr_12374 = state_12353;
(statearr_12374[(10)] = inst_12323__$1);

return statearr_12374;
})();
var statearr_12375_13374 = state_12353__$1;
(statearr_12375_13374[(2)] = null);

(statearr_12375_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12378[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12378[(1)] = (1));

return statearr_12378;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12353){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12353);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12379){var ex__10939__auto__ = e12379;
var statearr_12380_13375 = state_12353;
(statearr_12380_13375[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12353[(4)]))){
var statearr_12381_13376 = state_12353;
(statearr_12381_13376[(1)] = cljs.core.first((state_12353[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12353;
state_12353 = G__13377;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12384 = f__10979__auto__();
(statearr_12384[(6)] = c__10978__auto___13364);

return statearr_12384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
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
var G__12386 = arguments.length;
switch (G__12386) {
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
var c__10978__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12411){
var state_val_12412 = (state_12411[(1)]);
if((state_val_12412 === (7))){
var inst_12393 = (state_12411[(7)]);
var inst_12393__$1 = (state_12411[(2)]);
var inst_12394 = (inst_12393__$1 == null);
var inst_12395 = cljs.core.not(inst_12394);
var state_12411__$1 = (function (){var statearr_12413 = state_12411;
(statearr_12413[(7)] = inst_12393__$1);

return statearr_12413;
})();
if(inst_12395){
var statearr_12414_13380 = state_12411__$1;
(statearr_12414_13380[(1)] = (8));

} else {
var statearr_12416_13381 = state_12411__$1;
(statearr_12416_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (1))){
var inst_12388 = (0);
var state_12411__$1 = (function (){var statearr_12417 = state_12411;
(statearr_12417[(8)] = inst_12388);

return statearr_12417;
})();
var statearr_12418_13382 = state_12411__$1;
(statearr_12418_13382[(2)] = null);

(statearr_12418_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (4))){
var state_12411__$1 = state_12411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12411__$1,(7),ch);
} else {
if((state_val_12412 === (6))){
var inst_12406 = (state_12411[(2)]);
var state_12411__$1 = state_12411;
var statearr_12420_13383 = state_12411__$1;
(statearr_12420_13383[(2)] = inst_12406);

(statearr_12420_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (3))){
var inst_12408 = (state_12411[(2)]);
var inst_12409 = cljs.core.async.close_BANG_(out);
var state_12411__$1 = (function (){var statearr_12421 = state_12411;
(statearr_12421[(9)] = inst_12408);

return statearr_12421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12411__$1,inst_12409);
} else {
if((state_val_12412 === (2))){
var inst_12388 = (state_12411[(8)]);
var inst_12390 = (inst_12388 < n);
var state_12411__$1 = state_12411;
if(cljs.core.truth_(inst_12390)){
var statearr_12422_13384 = state_12411__$1;
(statearr_12422_13384[(1)] = (4));

} else {
var statearr_12423_13385 = state_12411__$1;
(statearr_12423_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (11))){
var inst_12388 = (state_12411[(8)]);
var inst_12398 = (state_12411[(2)]);
var inst_12399 = (inst_12388 + (1));
var inst_12388__$1 = inst_12399;
var state_12411__$1 = (function (){var statearr_12424 = state_12411;
(statearr_12424[(8)] = inst_12388__$1);

(statearr_12424[(10)] = inst_12398);

return statearr_12424;
})();
var statearr_12425_13386 = state_12411__$1;
(statearr_12425_13386[(2)] = null);

(statearr_12425_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (9))){
var state_12411__$1 = state_12411;
var statearr_12426_13387 = state_12411__$1;
(statearr_12426_13387[(2)] = null);

(statearr_12426_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (5))){
var state_12411__$1 = state_12411;
var statearr_12427_13388 = state_12411__$1;
(statearr_12427_13388[(2)] = null);

(statearr_12427_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (10))){
var inst_12403 = (state_12411[(2)]);
var state_12411__$1 = state_12411;
var statearr_12428_13389 = state_12411__$1;
(statearr_12428_13389[(2)] = inst_12403);

(statearr_12428_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12412 === (8))){
var inst_12393 = (state_12411[(7)]);
var state_12411__$1 = state_12411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12411__$1,(11),out,inst_12393);
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12429[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12429[(1)] = (1));

return statearr_12429;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12411){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12411);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12430){var ex__10939__auto__ = e12430;
var statearr_12431_13390 = state_12411;
(statearr_12431_13390[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12411[(4)]))){
var statearr_12432_13391 = state_12411;
(statearr_12432_13391[(1)] = cljs.core.first((state_12411[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12411;
state_12411 = G__13392;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12433 = f__10979__auto__();
(statearr_12433[(6)] = c__10978__auto___13379);

return statearr_12433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12435 = (function (f,ch,meta12436){
this.f = f;
this.ch = ch;
this.meta12436 = meta12436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12437,meta12436__$1){
var self__ = this;
var _12437__$1 = this;
return (new cljs.core.async.t_cljs$core$async12435(self__.f,self__.ch,meta12436__$1));
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12437){
var self__ = this;
var _12437__$1 = this;
return self__.meta12436;
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12439 = (function (f,ch,meta12436,_,fn1,meta12440){
this.f = f;
this.ch = ch;
this.meta12436 = meta12436;
this._ = _;
this.fn1 = fn1;
this.meta12440 = meta12440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12441,meta12440__$1){
var self__ = this;
var _12441__$1 = this;
return (new cljs.core.async.t_cljs$core$async12439(self__.f,self__.ch,self__.meta12436,self__._,self__.fn1,meta12440__$1));
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12441){
var self__ = this;
var _12441__$1 = this;
return self__.meta12440;
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12434_SHARP_){
var G__12443 = (((p1__12434_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12434_SHARP_) : self__.f.call(null,p1__12434_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12443) : f1.call(null,G__12443));
});
}));

(cljs.core.async.t_cljs$core$async12439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12436","meta12436",-1036236578,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12435","cljs.core.async/t_cljs$core$async12435",-1149488540,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12440","meta12440",1990022388,null)], null);
}));

(cljs.core.async.t_cljs$core$async12439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12439");

(cljs.core.async.t_cljs$core$async12439.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12439.
 */
cljs.core.async.__GT_t_cljs$core$async12439 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12439(f__$1,ch__$1,meta12436__$1,___$2,fn1__$1,meta12440){
return (new cljs.core.async.t_cljs$core$async12439(f__$1,ch__$1,meta12436__$1,___$2,fn1__$1,meta12440));
});

}

return (new cljs.core.async.t_cljs$core$async12439(self__.f,self__.ch,self__.meta12436,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12445 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12445) : self__.f.call(null,G__12445));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12436","meta12436",-1036236578,null)], null);
}));

(cljs.core.async.t_cljs$core$async12435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12435");

(cljs.core.async.t_cljs$core$async12435.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12435.
 */
cljs.core.async.__GT_t_cljs$core$async12435 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12435(f__$1,ch__$1,meta12436){
return (new cljs.core.async.t_cljs$core$async12435(f__$1,ch__$1,meta12436));
});

}

return (new cljs.core.async.t_cljs$core$async12435(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12447 = (function (f,ch,meta12448){
this.f = f;
this.ch = ch;
this.meta12448 = meta12448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12449,meta12448__$1){
var self__ = this;
var _12449__$1 = this;
return (new cljs.core.async.t_cljs$core$async12447(self__.f,self__.ch,meta12448__$1));
}));

(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12449){
var self__ = this;
var _12449__$1 = this;
return self__.meta12448;
}));

(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12448","meta12448",940718696,null)], null);
}));

(cljs.core.async.t_cljs$core$async12447.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12447");

(cljs.core.async.t_cljs$core$async12447.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12447");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12447.
 */
cljs.core.async.__GT_t_cljs$core$async12447 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12447(f__$1,ch__$1,meta12448){
return (new cljs.core.async.t_cljs$core$async12447(f__$1,ch__$1,meta12448));
});

}

return (new cljs.core.async.t_cljs$core$async12447(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12454 = (function (p,ch,meta12455){
this.p = p;
this.ch = ch;
this.meta12455 = meta12455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12456,meta12455__$1){
var self__ = this;
var _12456__$1 = this;
return (new cljs.core.async.t_cljs$core$async12454(self__.p,self__.ch,meta12455__$1));
}));

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12456){
var self__ = this;
var _12456__$1 = this;
return self__.meta12455;
}));

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12455","meta12455",-193399194,null)], null);
}));

(cljs.core.async.t_cljs$core$async12454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12454");

(cljs.core.async.t_cljs$core$async12454.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12454.
 */
cljs.core.async.__GT_t_cljs$core$async12454 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12454(p__$1,ch__$1,meta12455){
return (new cljs.core.async.t_cljs$core$async12454(p__$1,ch__$1,meta12455));
});

}

return (new cljs.core.async.t_cljs$core$async12454(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12469 = arguments.length;
switch (G__12469) {
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
var c__10978__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12491){
var state_val_12492 = (state_12491[(1)]);
if((state_val_12492 === (7))){
var inst_12487 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
var statearr_12493_13395 = state_12491__$1;
(statearr_12493_13395[(2)] = inst_12487);

(statearr_12493_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (1))){
var state_12491__$1 = state_12491;
var statearr_12495_13396 = state_12491__$1;
(statearr_12495_13396[(2)] = null);

(statearr_12495_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (4))){
var inst_12472 = (state_12491[(7)]);
var inst_12472__$1 = (state_12491[(2)]);
var inst_12473 = (inst_12472__$1 == null);
var state_12491__$1 = (function (){var statearr_12497 = state_12491;
(statearr_12497[(7)] = inst_12472__$1);

return statearr_12497;
})();
if(cljs.core.truth_(inst_12473)){
var statearr_12499_13397 = state_12491__$1;
(statearr_12499_13397[(1)] = (5));

} else {
var statearr_12500_13398 = state_12491__$1;
(statearr_12500_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (6))){
var inst_12472 = (state_12491[(7)]);
var inst_12477 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12472) : p.call(null,inst_12472));
var state_12491__$1 = state_12491;
if(cljs.core.truth_(inst_12477)){
var statearr_12503_13399 = state_12491__$1;
(statearr_12503_13399[(1)] = (8));

} else {
var statearr_12504_13400 = state_12491__$1;
(statearr_12504_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (3))){
var inst_12489 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12491__$1,inst_12489);
} else {
if((state_val_12492 === (2))){
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12491__$1,(4),ch);
} else {
if((state_val_12492 === (11))){
var inst_12481 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
var statearr_12506_13401 = state_12491__$1;
(statearr_12506_13401[(2)] = inst_12481);

(statearr_12506_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (9))){
var state_12491__$1 = state_12491;
var statearr_12512_13402 = state_12491__$1;
(statearr_12512_13402[(2)] = null);

(statearr_12512_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (5))){
var inst_12475 = cljs.core.async.close_BANG_(out);
var state_12491__$1 = state_12491;
var statearr_12513_13403 = state_12491__$1;
(statearr_12513_13403[(2)] = inst_12475);

(statearr_12513_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (10))){
var inst_12484 = (state_12491[(2)]);
var state_12491__$1 = (function (){var statearr_12514 = state_12491;
(statearr_12514[(8)] = inst_12484);

return statearr_12514;
})();
var statearr_12515_13404 = state_12491__$1;
(statearr_12515_13404[(2)] = null);

(statearr_12515_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (8))){
var inst_12472 = (state_12491[(7)]);
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12491__$1,(11),out,inst_12472);
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12516 = [null,null,null,null,null,null,null,null,null];
(statearr_12516[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12516[(1)] = (1));

return statearr_12516;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12491){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12491);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12517){var ex__10939__auto__ = e12517;
var statearr_12518_13405 = state_12491;
(statearr_12518_13405[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12491[(4)]))){
var statearr_12519_13406 = state_12491;
(statearr_12519_13406[(1)] = cljs.core.first((state_12491[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12491;
state_12491 = G__13407;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12520 = f__10979__auto__();
(statearr_12520[(6)] = c__10978__auto___13394);

return statearr_12520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12522 = arguments.length;
switch (G__12522) {
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
var c__10978__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12589){
var state_val_12590 = (state_12589[(1)]);
if((state_val_12590 === (7))){
var inst_12585 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12591_13409 = state_12589__$1;
(statearr_12591_13409[(2)] = inst_12585);

(statearr_12591_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (20))){
var inst_12555 = (state_12589[(7)]);
var inst_12566 = (state_12589[(2)]);
var inst_12567 = cljs.core.next(inst_12555);
var inst_12536 = inst_12567;
var inst_12537 = null;
var inst_12538 = (0);
var inst_12539 = (0);
var state_12589__$1 = (function (){var statearr_12592 = state_12589;
(statearr_12592[(8)] = inst_12566);

(statearr_12592[(9)] = inst_12538);

(statearr_12592[(10)] = inst_12539);

(statearr_12592[(11)] = inst_12536);

(statearr_12592[(12)] = inst_12537);

return statearr_12592;
})();
var statearr_12593_13410 = state_12589__$1;
(statearr_12593_13410[(2)] = null);

(statearr_12593_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (1))){
var state_12589__$1 = state_12589;
var statearr_12594_13411 = state_12589__$1;
(statearr_12594_13411[(2)] = null);

(statearr_12594_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (4))){
var inst_12525 = (state_12589[(13)]);
var inst_12525__$1 = (state_12589[(2)]);
var inst_12526 = (inst_12525__$1 == null);
var state_12589__$1 = (function (){var statearr_12595 = state_12589;
(statearr_12595[(13)] = inst_12525__$1);

return statearr_12595;
})();
if(cljs.core.truth_(inst_12526)){
var statearr_12596_13412 = state_12589__$1;
(statearr_12596_13412[(1)] = (5));

} else {
var statearr_12597_13413 = state_12589__$1;
(statearr_12597_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (15))){
var state_12589__$1 = state_12589;
var statearr_12601_13414 = state_12589__$1;
(statearr_12601_13414[(2)] = null);

(statearr_12601_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (21))){
var state_12589__$1 = state_12589;
var statearr_12602_13415 = state_12589__$1;
(statearr_12602_13415[(2)] = null);

(statearr_12602_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (13))){
var inst_12538 = (state_12589[(9)]);
var inst_12539 = (state_12589[(10)]);
var inst_12536 = (state_12589[(11)]);
var inst_12537 = (state_12589[(12)]);
var inst_12551 = (state_12589[(2)]);
var inst_12552 = (inst_12539 + (1));
var tmp12598 = inst_12538;
var tmp12599 = inst_12536;
var tmp12600 = inst_12537;
var inst_12536__$1 = tmp12599;
var inst_12537__$1 = tmp12600;
var inst_12538__$1 = tmp12598;
var inst_12539__$1 = inst_12552;
var state_12589__$1 = (function (){var statearr_12603 = state_12589;
(statearr_12603[(14)] = inst_12551);

(statearr_12603[(9)] = inst_12538__$1);

(statearr_12603[(10)] = inst_12539__$1);

(statearr_12603[(11)] = inst_12536__$1);

(statearr_12603[(12)] = inst_12537__$1);

return statearr_12603;
})();
var statearr_12604_13416 = state_12589__$1;
(statearr_12604_13416[(2)] = null);

(statearr_12604_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (22))){
var state_12589__$1 = state_12589;
var statearr_12605_13417 = state_12589__$1;
(statearr_12605_13417[(2)] = null);

(statearr_12605_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (6))){
var inst_12525 = (state_12589[(13)]);
var inst_12534 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12525) : f.call(null,inst_12525));
var inst_12535 = cljs.core.seq(inst_12534);
var inst_12536 = inst_12535;
var inst_12537 = null;
var inst_12538 = (0);
var inst_12539 = (0);
var state_12589__$1 = (function (){var statearr_12606 = state_12589;
(statearr_12606[(9)] = inst_12538);

(statearr_12606[(10)] = inst_12539);

(statearr_12606[(11)] = inst_12536);

(statearr_12606[(12)] = inst_12537);

return statearr_12606;
})();
var statearr_12607_13418 = state_12589__$1;
(statearr_12607_13418[(2)] = null);

(statearr_12607_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (17))){
var inst_12555 = (state_12589[(7)]);
var inst_12559 = cljs.core.chunk_first(inst_12555);
var inst_12560 = cljs.core.chunk_rest(inst_12555);
var inst_12561 = cljs.core.count(inst_12559);
var inst_12536 = inst_12560;
var inst_12537 = inst_12559;
var inst_12538 = inst_12561;
var inst_12539 = (0);
var state_12589__$1 = (function (){var statearr_12608 = state_12589;
(statearr_12608[(9)] = inst_12538);

(statearr_12608[(10)] = inst_12539);

(statearr_12608[(11)] = inst_12536);

(statearr_12608[(12)] = inst_12537);

return statearr_12608;
})();
var statearr_12609_13419 = state_12589__$1;
(statearr_12609_13419[(2)] = null);

(statearr_12609_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (3))){
var inst_12587 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12589__$1,inst_12587);
} else {
if((state_val_12590 === (12))){
var inst_12575 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12610_13420 = state_12589__$1;
(statearr_12610_13420[(2)] = inst_12575);

(statearr_12610_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (2))){
var state_12589__$1 = state_12589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12589__$1,(4),in$);
} else {
if((state_val_12590 === (23))){
var inst_12583 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12611_13421 = state_12589__$1;
(statearr_12611_13421[(2)] = inst_12583);

(statearr_12611_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (19))){
var inst_12570 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12612_13422 = state_12589__$1;
(statearr_12612_13422[(2)] = inst_12570);

(statearr_12612_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (11))){
var inst_12555 = (state_12589[(7)]);
var inst_12536 = (state_12589[(11)]);
var inst_12555__$1 = cljs.core.seq(inst_12536);
var state_12589__$1 = (function (){var statearr_12613 = state_12589;
(statearr_12613[(7)] = inst_12555__$1);

return statearr_12613;
})();
if(inst_12555__$1){
var statearr_12614_13423 = state_12589__$1;
(statearr_12614_13423[(1)] = (14));

} else {
var statearr_12615_13424 = state_12589__$1;
(statearr_12615_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (9))){
var inst_12577 = (state_12589[(2)]);
var inst_12578 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12589__$1 = (function (){var statearr_12616 = state_12589;
(statearr_12616[(15)] = inst_12577);

return statearr_12616;
})();
if(cljs.core.truth_(inst_12578)){
var statearr_12617_13425 = state_12589__$1;
(statearr_12617_13425[(1)] = (21));

} else {
var statearr_12618_13426 = state_12589__$1;
(statearr_12618_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (5))){
var inst_12528 = cljs.core.async.close_BANG_(out);
var state_12589__$1 = state_12589;
var statearr_12619_13427 = state_12589__$1;
(statearr_12619_13427[(2)] = inst_12528);

(statearr_12619_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (14))){
var inst_12555 = (state_12589[(7)]);
var inst_12557 = cljs.core.chunked_seq_QMARK_(inst_12555);
var state_12589__$1 = state_12589;
if(inst_12557){
var statearr_12620_13428 = state_12589__$1;
(statearr_12620_13428[(1)] = (17));

} else {
var statearr_12621_13429 = state_12589__$1;
(statearr_12621_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (16))){
var inst_12573 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12625_13430 = state_12589__$1;
(statearr_12625_13430[(2)] = inst_12573);

(statearr_12625_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (10))){
var inst_12539 = (state_12589[(10)]);
var inst_12537 = (state_12589[(12)]);
var inst_12549 = cljs.core._nth(inst_12537,inst_12539);
var state_12589__$1 = state_12589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12589__$1,(13),out,inst_12549);
} else {
if((state_val_12590 === (18))){
var inst_12555 = (state_12589[(7)]);
var inst_12564 = cljs.core.first(inst_12555);
var state_12589__$1 = state_12589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12589__$1,(20),out,inst_12564);
} else {
if((state_val_12590 === (8))){
var inst_12538 = (state_12589[(9)]);
var inst_12539 = (state_12589[(10)]);
var inst_12545 = (inst_12539 < inst_12538);
var inst_12546 = inst_12545;
var state_12589__$1 = state_12589;
if(cljs.core.truth_(inst_12546)){
var statearr_12633_13431 = state_12589__$1;
(statearr_12633_13431[(1)] = (10));

} else {
var statearr_12634_13432 = state_12589__$1;
(statearr_12634_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_12642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12642[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__);

(statearr_12642[(1)] = (1));

return statearr_12642;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____1 = (function (state_12589){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12589);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12647){var ex__10939__auto__ = e12647;
var statearr_12648_13433 = state_12589;
(statearr_12648_13433[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12589[(4)]))){
var statearr_12653_13434 = state_12589;
(statearr_12653_13434[(1)] = cljs.core.first((state_12589[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12589;
state_12589 = G__13435;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__ = function(state_12589){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____1.call(this,state_12589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12654 = f__10979__auto__();
(statearr_12654[(6)] = c__10978__auto__);

return statearr_12654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));

return c__10978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12656 = arguments.length;
switch (G__12656) {
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
var G__12658 = arguments.length;
switch (G__12658) {
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
var G__12660 = arguments.length;
switch (G__12660) {
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
var c__10978__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12687){
var state_val_12688 = (state_12687[(1)]);
if((state_val_12688 === (7))){
var inst_12682 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12689_13440 = state_12687__$1;
(statearr_12689_13440[(2)] = inst_12682);

(statearr_12689_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (1))){
var inst_12664 = null;
var state_12687__$1 = (function (){var statearr_12690 = state_12687;
(statearr_12690[(7)] = inst_12664);

return statearr_12690;
})();
var statearr_12691_13441 = state_12687__$1;
(statearr_12691_13441[(2)] = null);

(statearr_12691_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (4))){
var inst_12667 = (state_12687[(8)]);
var inst_12667__$1 = (state_12687[(2)]);
var inst_12668 = (inst_12667__$1 == null);
var inst_12669 = cljs.core.not(inst_12668);
var state_12687__$1 = (function (){var statearr_12692 = state_12687;
(statearr_12692[(8)] = inst_12667__$1);

return statearr_12692;
})();
if(inst_12669){
var statearr_12693_13442 = state_12687__$1;
(statearr_12693_13442[(1)] = (5));

} else {
var statearr_12694_13443 = state_12687__$1;
(statearr_12694_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (6))){
var state_12687__$1 = state_12687;
var statearr_12695_13444 = state_12687__$1;
(statearr_12695_13444[(2)] = null);

(statearr_12695_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (3))){
var inst_12684 = (state_12687[(2)]);
var inst_12685 = cljs.core.async.close_BANG_(out);
var state_12687__$1 = (function (){var statearr_12696 = state_12687;
(statearr_12696[(9)] = inst_12684);

return statearr_12696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12687__$1,inst_12685);
} else {
if((state_val_12688 === (2))){
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12687__$1,(4),ch);
} else {
if((state_val_12688 === (11))){
var inst_12667 = (state_12687[(8)]);
var inst_12676 = (state_12687[(2)]);
var inst_12664 = inst_12667;
var state_12687__$1 = (function (){var statearr_12697 = state_12687;
(statearr_12697[(10)] = inst_12676);

(statearr_12697[(7)] = inst_12664);

return statearr_12697;
})();
var statearr_12698_13445 = state_12687__$1;
(statearr_12698_13445[(2)] = null);

(statearr_12698_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (9))){
var inst_12667 = (state_12687[(8)]);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12687__$1,(11),out,inst_12667);
} else {
if((state_val_12688 === (5))){
var inst_12667 = (state_12687[(8)]);
var inst_12664 = (state_12687[(7)]);
var inst_12671 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12667,inst_12664);
var state_12687__$1 = state_12687;
if(inst_12671){
var statearr_12700_13446 = state_12687__$1;
(statearr_12700_13446[(1)] = (8));

} else {
var statearr_12701_13447 = state_12687__$1;
(statearr_12701_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (10))){
var inst_12679 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12702_13448 = state_12687__$1;
(statearr_12702_13448[(2)] = inst_12679);

(statearr_12702_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (8))){
var inst_12664 = (state_12687[(7)]);
var tmp12699 = inst_12664;
var inst_12664__$1 = tmp12699;
var state_12687__$1 = (function (){var statearr_12703 = state_12687;
(statearr_12703[(7)] = inst_12664__$1);

return statearr_12703;
})();
var statearr_12704_13449 = state_12687__$1;
(statearr_12704_13449[(2)] = null);

(statearr_12704_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12719[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12719[(1)] = (1));

return statearr_12719;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12687){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12687);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12720){var ex__10939__auto__ = e12720;
var statearr_12721_13450 = state_12687;
(statearr_12721_13450[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12687[(4)]))){
var statearr_12722_13451 = state_12687;
(statearr_12722_13451[(1)] = cljs.core.first((state_12687[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12687;
state_12687 = G__13452;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12723 = f__10979__auto__();
(statearr_12723[(6)] = c__10978__auto___13439);

return statearr_12723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12725 = arguments.length;
switch (G__12725) {
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
var c__10978__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12784){
var state_val_12785 = (state_12784[(1)]);
if((state_val_12785 === (7))){
var inst_12780 = (state_12784[(2)]);
var state_12784__$1 = state_12784;
var statearr_12786_13455 = state_12784__$1;
(statearr_12786_13455[(2)] = inst_12780);

(statearr_12786_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (1))){
var inst_12747 = (new Array(n));
var inst_12748 = inst_12747;
var inst_12749 = (0);
var state_12784__$1 = (function (){var statearr_12787 = state_12784;
(statearr_12787[(7)] = inst_12748);

(statearr_12787[(8)] = inst_12749);

return statearr_12787;
})();
var statearr_12788_13456 = state_12784__$1;
(statearr_12788_13456[(2)] = null);

(statearr_12788_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (4))){
var inst_12752 = (state_12784[(9)]);
var inst_12752__$1 = (state_12784[(2)]);
var inst_12753 = (inst_12752__$1 == null);
var inst_12754 = cljs.core.not(inst_12753);
var state_12784__$1 = (function (){var statearr_12789 = state_12784;
(statearr_12789[(9)] = inst_12752__$1);

return statearr_12789;
})();
if(inst_12754){
var statearr_12790_13457 = state_12784__$1;
(statearr_12790_13457[(1)] = (5));

} else {
var statearr_12791_13458 = state_12784__$1;
(statearr_12791_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (15))){
var inst_12774 = (state_12784[(2)]);
var state_12784__$1 = state_12784;
var statearr_12792_13459 = state_12784__$1;
(statearr_12792_13459[(2)] = inst_12774);

(statearr_12792_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (13))){
var state_12784__$1 = state_12784;
var statearr_12793_13460 = state_12784__$1;
(statearr_12793_13460[(2)] = null);

(statearr_12793_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (6))){
var inst_12749 = (state_12784[(8)]);
var inst_12770 = (inst_12749 > (0));
var state_12784__$1 = state_12784;
if(cljs.core.truth_(inst_12770)){
var statearr_12794_13461 = state_12784__$1;
(statearr_12794_13461[(1)] = (12));

} else {
var statearr_12795_13462 = state_12784__$1;
(statearr_12795_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (3))){
var inst_12782 = (state_12784[(2)]);
var state_12784__$1 = state_12784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12784__$1,inst_12782);
} else {
if((state_val_12785 === (12))){
var inst_12748 = (state_12784[(7)]);
var inst_12772 = cljs.core.vec(inst_12748);
var state_12784__$1 = state_12784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12784__$1,(15),out,inst_12772);
} else {
if((state_val_12785 === (2))){
var state_12784__$1 = state_12784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12784__$1,(4),ch);
} else {
if((state_val_12785 === (11))){
var inst_12764 = (state_12784[(2)]);
var inst_12765 = (new Array(n));
var inst_12748 = inst_12765;
var inst_12749 = (0);
var state_12784__$1 = (function (){var statearr_12807 = state_12784;
(statearr_12807[(10)] = inst_12764);

(statearr_12807[(7)] = inst_12748);

(statearr_12807[(8)] = inst_12749);

return statearr_12807;
})();
var statearr_12808_13463 = state_12784__$1;
(statearr_12808_13463[(2)] = null);

(statearr_12808_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (9))){
var inst_12748 = (state_12784[(7)]);
var inst_12762 = cljs.core.vec(inst_12748);
var state_12784__$1 = state_12784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12784__$1,(11),out,inst_12762);
} else {
if((state_val_12785 === (5))){
var inst_12757 = (state_12784[(11)]);
var inst_12752 = (state_12784[(9)]);
var inst_12748 = (state_12784[(7)]);
var inst_12749 = (state_12784[(8)]);
var inst_12756 = (inst_12748[inst_12749] = inst_12752);
var inst_12757__$1 = (inst_12749 + (1));
var inst_12758 = (inst_12757__$1 < n);
var state_12784__$1 = (function (){var statearr_12809 = state_12784;
(statearr_12809[(11)] = inst_12757__$1);

(statearr_12809[(12)] = inst_12756);

return statearr_12809;
})();
if(cljs.core.truth_(inst_12758)){
var statearr_12810_13464 = state_12784__$1;
(statearr_12810_13464[(1)] = (8));

} else {
var statearr_12811_13465 = state_12784__$1;
(statearr_12811_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (14))){
var inst_12777 = (state_12784[(2)]);
var inst_12778 = cljs.core.async.close_BANG_(out);
var state_12784__$1 = (function (){var statearr_12813 = state_12784;
(statearr_12813[(13)] = inst_12777);

return statearr_12813;
})();
var statearr_12814_13466 = state_12784__$1;
(statearr_12814_13466[(2)] = inst_12778);

(statearr_12814_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (10))){
var inst_12768 = (state_12784[(2)]);
var state_12784__$1 = state_12784;
var statearr_12815_13467 = state_12784__$1;
(statearr_12815_13467[(2)] = inst_12768);

(statearr_12815_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12785 === (8))){
var inst_12757 = (state_12784[(11)]);
var inst_12748 = (state_12784[(7)]);
var tmp12812 = inst_12748;
var inst_12748__$1 = tmp12812;
var inst_12749 = inst_12757;
var state_12784__$1 = (function (){var statearr_12816 = state_12784;
(statearr_12816[(7)] = inst_12748__$1);

(statearr_12816[(8)] = inst_12749);

return statearr_12816;
})();
var statearr_12817_13468 = state_12784__$1;
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12818[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12818[(1)] = (1));

return statearr_12818;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12784){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12784);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12819){var ex__10939__auto__ = e12819;
var statearr_12820_13469 = state_12784;
(statearr_12820_13469[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12784[(4)]))){
var statearr_12821_13470 = state_12784;
(statearr_12821_13470[(1)] = cljs.core.first((state_12784[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12784;
state_12784 = G__13471;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12822 = f__10979__auto__();
(statearr_12822[(6)] = c__10978__auto___13454);

return statearr_12822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12824 = arguments.length;
switch (G__12824) {
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
var c__10978__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10979__auto__ = (function (){var switch__10935__auto__ = (function (state_12866){
var state_val_12867 = (state_12866[(1)]);
if((state_val_12867 === (7))){
var inst_12862 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
var statearr_12868_13474 = state_12866__$1;
(statearr_12868_13474[(2)] = inst_12862);

(statearr_12868_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (1))){
var inst_12825 = [];
var inst_12826 = inst_12825;
var inst_12827 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12866__$1 = (function (){var statearr_12869 = state_12866;
(statearr_12869[(7)] = inst_12827);

(statearr_12869[(8)] = inst_12826);

return statearr_12869;
})();
var statearr_12870_13475 = state_12866__$1;
(statearr_12870_13475[(2)] = null);

(statearr_12870_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (4))){
var inst_12830 = (state_12866[(9)]);
var inst_12830__$1 = (state_12866[(2)]);
var inst_12831 = (inst_12830__$1 == null);
var inst_12832 = cljs.core.not(inst_12831);
var state_12866__$1 = (function (){var statearr_12871 = state_12866;
(statearr_12871[(9)] = inst_12830__$1);

return statearr_12871;
})();
if(inst_12832){
var statearr_12872_13476 = state_12866__$1;
(statearr_12872_13476[(1)] = (5));

} else {
var statearr_12873_13477 = state_12866__$1;
(statearr_12873_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (15))){
var inst_12856 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
var statearr_12874_13478 = state_12866__$1;
(statearr_12874_13478[(2)] = inst_12856);

(statearr_12874_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (13))){
var state_12866__$1 = state_12866;
var statearr_12875_13479 = state_12866__$1;
(statearr_12875_13479[(2)] = null);

(statearr_12875_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (6))){
var inst_12826 = (state_12866[(8)]);
var inst_12851 = inst_12826.length;
var inst_12852 = (inst_12851 > (0));
var state_12866__$1 = state_12866;
if(cljs.core.truth_(inst_12852)){
var statearr_12876_13480 = state_12866__$1;
(statearr_12876_13480[(1)] = (12));

} else {
var statearr_12877_13481 = state_12866__$1;
(statearr_12877_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (3))){
var inst_12864 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12866__$1,inst_12864);
} else {
if((state_val_12867 === (12))){
var inst_12826 = (state_12866[(8)]);
var inst_12854 = cljs.core.vec(inst_12826);
var state_12866__$1 = state_12866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12866__$1,(15),out,inst_12854);
} else {
if((state_val_12867 === (2))){
var state_12866__$1 = state_12866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12866__$1,(4),ch);
} else {
if((state_val_12867 === (11))){
var inst_12834 = (state_12866[(10)]);
var inst_12830 = (state_12866[(9)]);
var inst_12844 = (state_12866[(2)]);
var inst_12845 = [];
var inst_12846 = inst_12845.push(inst_12830);
var inst_12826 = inst_12845;
var inst_12827 = inst_12834;
var state_12866__$1 = (function (){var statearr_12878 = state_12866;
(statearr_12878[(7)] = inst_12827);

(statearr_12878[(11)] = inst_12844);

(statearr_12878[(12)] = inst_12846);

(statearr_12878[(8)] = inst_12826);

return statearr_12878;
})();
var statearr_12879_13482 = state_12866__$1;
(statearr_12879_13482[(2)] = null);

(statearr_12879_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (9))){
var inst_12826 = (state_12866[(8)]);
var inst_12842 = cljs.core.vec(inst_12826);
var state_12866__$1 = state_12866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12866__$1,(11),out,inst_12842);
} else {
if((state_val_12867 === (5))){
var inst_12827 = (state_12866[(7)]);
var inst_12834 = (state_12866[(10)]);
var inst_12830 = (state_12866[(9)]);
var inst_12834__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12830) : f.call(null,inst_12830));
var inst_12835 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12834__$1,inst_12827);
var inst_12836 = cljs.core.keyword_identical_QMARK_(inst_12827,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12837 = ((inst_12835) || (inst_12836));
var state_12866__$1 = (function (){var statearr_12880 = state_12866;
(statearr_12880[(10)] = inst_12834__$1);

return statearr_12880;
})();
if(cljs.core.truth_(inst_12837)){
var statearr_12881_13483 = state_12866__$1;
(statearr_12881_13483[(1)] = (8));

} else {
var statearr_12882_13484 = state_12866__$1;
(statearr_12882_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (14))){
var inst_12859 = (state_12866[(2)]);
var inst_12860 = cljs.core.async.close_BANG_(out);
var state_12866__$1 = (function (){var statearr_12884 = state_12866;
(statearr_12884[(13)] = inst_12859);

return statearr_12884;
})();
var statearr_12885_13485 = state_12866__$1;
(statearr_12885_13485[(2)] = inst_12860);

(statearr_12885_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (10))){
var inst_12849 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
var statearr_12886_13486 = state_12866__$1;
(statearr_12886_13486[(2)] = inst_12849);

(statearr_12886_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (8))){
var inst_12834 = (state_12866[(10)]);
var inst_12826 = (state_12866[(8)]);
var inst_12830 = (state_12866[(9)]);
var inst_12839 = inst_12826.push(inst_12830);
var tmp12883 = inst_12826;
var inst_12826__$1 = tmp12883;
var inst_12827 = inst_12834;
var state_12866__$1 = (function (){var statearr_12887 = state_12866;
(statearr_12887[(14)] = inst_12839);

(statearr_12887[(7)] = inst_12827);

(statearr_12887[(8)] = inst_12826__$1);

return statearr_12887;
})();
var statearr_12888_13487 = state_12866__$1;
(statearr_12888_13487[(2)] = null);

(statearr_12888_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12889[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12889[(1)] = (1));

return statearr_12889;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12866){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12866);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12890){var ex__10939__auto__ = e12890;
var statearr_12891_13488 = state_12866;
(statearr_12891_13488[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12866[(4)]))){
var statearr_12892_13489 = state_12866;
(statearr_12892_13489[(1)] = cljs.core.first((state_12866[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12866;
state_12866 = G__13490;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10980__auto__ = (function (){var statearr_12893 = f__10979__auto__();
(statearr_12893[(6)] = c__10978__auto___13473);

return statearr_12893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10980__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
