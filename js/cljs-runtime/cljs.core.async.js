goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11017 = arguments.length;
switch (G__11017) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11023 = (function (f,blockable,meta11024){
this.f = f;
this.blockable = blockable;
this.meta11024 = meta11024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11025,meta11024__$1){
var self__ = this;
var _11025__$1 = this;
return (new cljs.core.async.t_cljs$core$async11023(self__.f,self__.blockable,meta11024__$1));
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11025){
var self__ = this;
var _11025__$1 = this;
return self__.meta11024;
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11024","meta11024",-52135434,null)], null);
}));

(cljs.core.async.t_cljs$core$async11023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11023");

(cljs.core.async.t_cljs$core$async11023.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11023.
 */
cljs.core.async.__GT_t_cljs$core$async11023 = (function cljs$core$async$__GT_t_cljs$core$async11023(f__$1,blockable__$1,meta11024){
return (new cljs.core.async.t_cljs$core$async11023(f__$1,blockable__$1,meta11024));
});

}

return (new cljs.core.async.t_cljs$core$async11023(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11037 = arguments.length;
switch (G__11037) {
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
var val_12898 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12898) : fn1.call(null,val_12898));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12898) : fn1.call(null,val_12898));
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
var n__4613__auto___12900 = n;
var x_12901 = (0);
while(true){
if((x_12901 < n__4613__auto___12900)){
(a[x_12901] = x_12901);

var G__12902 = (x_12901 + (1));
x_12901 = G__12902;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11053 = (function (flag,cb,meta11054){
this.flag = flag;
this.cb = cb;
this.meta11054 = meta11054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11055,meta11054__$1){
var self__ = this;
var _11055__$1 = this;
return (new cljs.core.async.t_cljs$core$async11053(self__.flag,self__.cb,meta11054__$1));
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11055){
var self__ = this;
var _11055__$1 = this;
return self__.meta11054;
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11054","meta11054",-614314209,null)], null);
}));

(cljs.core.async.t_cljs$core$async11053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11053");

(cljs.core.async.t_cljs$core$async11053.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11053.
 */
cljs.core.async.__GT_t_cljs$core$async11053 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11053(flag__$1,cb__$1,meta11054){
return (new cljs.core.async.t_cljs$core$async11053(flag__$1,cb__$1,meta11054));
});

}

return (new cljs.core.async.t_cljs$core$async11053(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11064_SHARP_){
var G__11071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11064_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11071) : fret.call(null,G__11071));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11065_SHARP_){
var G__11072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11065_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11072) : fret.call(null,G__11072));
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
var G__12903 = (i + (1));
i = G__12903;
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
var len__4736__auto___12904 = arguments.length;
var i__4737__auto___12905 = (0);
while(true){
if((i__4737__auto___12905 < len__4736__auto___12904)){
args__4742__auto__.push((arguments[i__4737__auto___12905]));

var G__12906 = (i__4737__auto___12905 + (1));
i__4737__auto___12905 = G__12906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11080){
var map__11081 = p__11080;
var map__11081__$1 = (((((!((map__11081 == null))))?(((((map__11081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11081):map__11081);
var opts = map__11081__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11077){
var G__11078 = cljs.core.first(seq11077);
var seq11077__$1 = cljs.core.next(seq11077);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11078,seq11077__$1);
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
var c__10953__auto___12908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11130){
var state_val_11131 = (state_11130[(1)]);
if((state_val_11131 === (7))){
var inst_11126 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11154_12909 = state_11130__$1;
(statearr_11154_12909[(2)] = inst_11126);

(statearr_11154_12909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (1))){
var state_11130__$1 = state_11130;
var statearr_11155_12910 = state_11130__$1;
(statearr_11155_12910[(2)] = null);

(statearr_11155_12910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (4))){
var inst_11105 = (state_11130[(7)]);
var inst_11105__$1 = (state_11130[(2)]);
var inst_11108 = (inst_11105__$1 == null);
var state_11130__$1 = (function (){var statearr_11156 = state_11130;
(statearr_11156[(7)] = inst_11105__$1);

return statearr_11156;
})();
if(cljs.core.truth_(inst_11108)){
var statearr_11157_12911 = state_11130__$1;
(statearr_11157_12911[(1)] = (5));

} else {
var statearr_11158_12912 = state_11130__$1;
(statearr_11158_12912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (13))){
var state_11130__$1 = state_11130;
var statearr_11159_12913 = state_11130__$1;
(statearr_11159_12913[(2)] = null);

(statearr_11159_12913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (6))){
var inst_11105 = (state_11130[(7)]);
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11130__$1,(11),to,inst_11105);
} else {
if((state_val_11131 === (3))){
var inst_11128 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11130__$1,inst_11128);
} else {
if((state_val_11131 === (12))){
var state_11130__$1 = state_11130;
var statearr_11166_12914 = state_11130__$1;
(statearr_11166_12914[(2)] = null);

(statearr_11166_12914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (2))){
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11130__$1,(4),from);
} else {
if((state_val_11131 === (11))){
var inst_11119 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
if(cljs.core.truth_(inst_11119)){
var statearr_11167_12915 = state_11130__$1;
(statearr_11167_12915[(1)] = (12));

} else {
var statearr_11168_12916 = state_11130__$1;
(statearr_11168_12916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (9))){
var state_11130__$1 = state_11130;
var statearr_11169_12917 = state_11130__$1;
(statearr_11169_12917[(2)] = null);

(statearr_11169_12917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (5))){
var state_11130__$1 = state_11130;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11170_12918 = state_11130__$1;
(statearr_11170_12918[(1)] = (8));

} else {
var statearr_11171_12919 = state_11130__$1;
(statearr_11171_12919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (14))){
var inst_11124 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11172_12920 = state_11130__$1;
(statearr_11172_12920[(2)] = inst_11124);

(statearr_11172_12920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (10))){
var inst_11116 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11173_12921 = state_11130__$1;
(statearr_11173_12921[(2)] = inst_11116);

(statearr_11173_12921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (8))){
var inst_11113 = cljs.core.async.close_BANG_(to);
var state_11130__$1 = state_11130;
var statearr_11174_12922 = state_11130__$1;
(statearr_11174_12922[(2)] = inst_11113);

(statearr_11174_12922[(1)] = (10));


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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_11175 = [null,null,null,null,null,null,null,null];
(statearr_11175[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_11175[(1)] = (1));

return statearr_11175;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_11130){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11130);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11176){var ex__10895__auto__ = e11176;
var statearr_11177_12923 = state_11130;
(statearr_11177_12923[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11130[(4)]))){
var statearr_11178_12924 = state_11130;
(statearr_11178_12924[(1)] = cljs.core.first((state_11130[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12925 = state_11130;
state_11130 = G__12925;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_11130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_11130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11179 = f__10954__auto__();
(statearr_11179[(6)] = c__10953__auto___12908);

return statearr_11179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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
var process = (function (p__11180){
var vec__11181 = p__11180;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11181,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11181,(1),null);
var job = vec__11181;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10953__auto___12928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11190){
var state_val_11191 = (state_11190[(1)]);
if((state_val_11191 === (1))){
var state_11190__$1 = state_11190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11190__$1,(2),res,v);
} else {
if((state_val_11191 === (2))){
var inst_11185 = (state_11190[(2)]);
var inst_11188 = cljs.core.async.close_BANG_(res);
var state_11190__$1 = (function (){var statearr_11192 = state_11190;
(statearr_11192[(7)] = inst_11185);

return statearr_11192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11190__$1,inst_11188);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0 = (function (){
var statearr_11193 = [null,null,null,null,null,null,null,null];
(statearr_11193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__);

(statearr_11193[(1)] = (1));

return statearr_11193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1 = (function (state_11190){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11190);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11194){var ex__10895__auto__ = e11194;
var statearr_11195_12930 = state_11190;
(statearr_11195_12930[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11190[(4)]))){
var statearr_11196_12931 = state_11190;
(statearr_11196_12931[(1)] = cljs.core.first((state_11190[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12932 = state_11190;
state_11190 = G__12932;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11197 = f__10954__auto__();
(statearr_11197[(6)] = c__10953__auto___12928);

return statearr_11197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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
var n__4613__auto___12934 = n;
var __12935 = (0);
while(true){
if((__12935 < n__4613__auto___12934)){
var G__11202_12936 = type;
var G__11202_12937__$1 = (((G__11202_12936 instanceof cljs.core.Keyword))?G__11202_12936.fqn:null);
switch (G__11202_12937__$1) {
case "compute":
var c__10953__auto___12939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12935,c__10953__auto___12939,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async){
return (function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = ((function (__12935,c__10953__auto___12939,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async){
return (function (state_11215){
var state_val_11216 = (state_11215[(1)]);
if((state_val_11216 === (1))){
var state_11215__$1 = state_11215;
var statearr_11217_12945 = state_11215__$1;
(statearr_11217_12945[(2)] = null);

(statearr_11217_12945[(1)] = (2));


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
var statearr_11218_12947 = state_11215__$1;
(statearr_11218_12947[(1)] = (5));

} else {
var statearr_11219_12948 = state_11215__$1;
(statearr_11219_12948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11216 === (5))){
var state_11215__$1 = state_11215;
var statearr_11226_12949 = state_11215__$1;
(statearr_11226_12949[(2)] = null);

(statearr_11226_12949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11216 === (6))){
var state_11215__$1 = state_11215;
var statearr_11227_12950 = state_11215__$1;
(statearr_11227_12950[(2)] = null);

(statearr_11227_12950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11216 === (7))){
var inst_11211 = (state_11215[(2)]);
var state_11215__$1 = state_11215;
var statearr_11228_12952 = state_11215__$1;
(statearr_11228_12952[(2)] = inst_11211);

(statearr_11228_12952[(1)] = (3));


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
});})(__12935,c__10953__auto___12939,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async))
;
return ((function (__12935,switch__10891__auto__,c__10953__auto___12939,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0 = (function (){
var statearr_11229 = [null,null,null,null,null,null,null];
(statearr_11229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__);

(statearr_11229[(1)] = (1));

return statearr_11229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1 = (function (state_11215){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11215);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11230){var ex__10895__auto__ = e11230;
var statearr_11231_12954 = state_11215;
(statearr_11231_12954[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11215[(4)]))){
var statearr_11232_12955 = state_11215;
(statearr_11232_12955[(1)] = cljs.core.first((state_11215[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12956 = state_11215;
state_11215 = G__12956;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = function(state_11215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1.call(this,state_11215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__;
})()
;})(__12935,switch__10891__auto__,c__10953__auto___12939,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async))
})();
var state__10955__auto__ = (function (){var statearr_11233 = f__10954__auto__();
(statearr_11233[(6)] = c__10953__auto___12939);

return statearr_11233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
});})(__12935,c__10953__auto___12939,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async))
);


break;
case "async":
var c__10953__auto___12957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12935,c__10953__auto___12957,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async){
return (function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = ((function (__12935,c__10953__auto___12957,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async){
return (function (state_11246){
var state_val_11247 = (state_11246[(1)]);
if((state_val_11247 === (1))){
var state_11246__$1 = state_11246;
var statearr_11248_12958 = state_11246__$1;
(statearr_11248_12958[(2)] = null);

(statearr_11248_12958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11247 === (2))){
var state_11246__$1 = state_11246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11246__$1,(4),jobs);
} else {
if((state_val_11247 === (3))){
var inst_11244 = (state_11246[(2)]);
var state_11246__$1 = state_11246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11246__$1,inst_11244);
} else {
if((state_val_11247 === (4))){
var inst_11236 = (state_11246[(2)]);
var inst_11237 = async(inst_11236);
var state_11246__$1 = state_11246;
if(cljs.core.truth_(inst_11237)){
var statearr_11249_12962 = state_11246__$1;
(statearr_11249_12962[(1)] = (5));

} else {
var statearr_11250_12963 = state_11246__$1;
(statearr_11250_12963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11247 === (5))){
var state_11246__$1 = state_11246;
var statearr_11251_12964 = state_11246__$1;
(statearr_11251_12964[(2)] = null);

(statearr_11251_12964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11247 === (6))){
var state_11246__$1 = state_11246;
var statearr_11252_12965 = state_11246__$1;
(statearr_11252_12965[(2)] = null);

(statearr_11252_12965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11247 === (7))){
var inst_11242 = (state_11246[(2)]);
var state_11246__$1 = state_11246;
var statearr_11253_13019 = state_11246__$1;
(statearr_11253_13019[(2)] = inst_11242);

(statearr_11253_13019[(1)] = (3));


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
});})(__12935,c__10953__auto___12957,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async))
;
return ((function (__12935,switch__10891__auto__,c__10953__auto___12957,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0 = (function (){
var statearr_11254 = [null,null,null,null,null,null,null];
(statearr_11254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__);

(statearr_11254[(1)] = (1));

return statearr_11254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1 = (function (state_11246){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11246);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11255){var ex__10895__auto__ = e11255;
var statearr_11256_13024 = state_11246;
(statearr_11256_13024[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11246[(4)]))){
var statearr_11257_13025 = state_11246;
(statearr_11257_13025[(1)] = cljs.core.first((state_11246[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13026 = state_11246;
state_11246 = G__13026;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = function(state_11246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1.call(this,state_11246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__;
})()
;})(__12935,switch__10891__auto__,c__10953__auto___12957,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async))
})();
var state__10955__auto__ = (function (){var statearr_11264 = f__10954__auto__();
(statearr_11264[(6)] = c__10953__auto___12957);

return statearr_11264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
});})(__12935,c__10953__auto___12957,G__11202_12936,G__11202_12937__$1,n__4613__auto___12934,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11202_12937__$1)].join('')));

}

var G__13027 = (__12935 + (1));
__12935 = G__13027;
continue;
} else {
}
break;
}

var c__10953__auto___13028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11286){
var state_val_11287 = (state_11286[(1)]);
if((state_val_11287 === (7))){
var inst_11282 = (state_11286[(2)]);
var state_11286__$1 = state_11286;
var statearr_11288_13029 = state_11286__$1;
(statearr_11288_13029[(2)] = inst_11282);

(statearr_11288_13029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (1))){
var state_11286__$1 = state_11286;
var statearr_11289_13030 = state_11286__$1;
(statearr_11289_13030[(2)] = null);

(statearr_11289_13030[(1)] = (2));


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
var statearr_11291_13031 = state_11286__$1;
(statearr_11291_13031[(1)] = (5));

} else {
var statearr_11292_13032 = state_11286__$1;
(statearr_11292_13032[(1)] = (6));

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
var statearr_11295_13034 = state_11286__$1;
(statearr_11295_13034[(2)] = null);

(statearr_11295_13034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (5))){
var inst_11270 = cljs.core.async.close_BANG_(jobs);
var state_11286__$1 = state_11286;
var statearr_11296_13037 = state_11286__$1;
(statearr_11296_13037[(2)] = inst_11270);

(statearr_11296_13037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (8))){
var inst_11272 = (state_11286[(8)]);
var inst_11277 = (state_11286[(2)]);
var state_11286__$1 = (function (){var statearr_11297 = state_11286;
(statearr_11297[(10)] = inst_11277);

return statearr_11297;
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
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0 = (function (){
var statearr_11298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__);

(statearr_11298[(1)] = (1));

return statearr_11298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1 = (function (state_11286){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11286);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11299){var ex__10895__auto__ = e11299;
var statearr_11300_13043 = state_11286;
(statearr_11300_13043[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11286[(4)]))){
var statearr_11301_13044 = state_11286;
(statearr_11301_13044[(1)] = cljs.core.first((state_11286[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13045 = state_11286;
state_11286 = G__13045;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = function(state_11286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1.call(this,state_11286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11302 = f__10954__auto__();
(statearr_11302[(6)] = c__10953__auto___13028);

return statearr_11302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));


var c__10953__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11346){
var state_val_11347 = (state_11346[(1)]);
if((state_val_11347 === (7))){
var inst_11342 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11348_13047 = state_11346__$1;
(statearr_11348_13047[(2)] = inst_11342);

(statearr_11348_13047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (20))){
var state_11346__$1 = state_11346;
var statearr_11349_13048 = state_11346__$1;
(statearr_11349_13048[(2)] = null);

(statearr_11349_13048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (1))){
var state_11346__$1 = state_11346;
var statearr_11350_13049 = state_11346__$1;
(statearr_11350_13049[(2)] = null);

(statearr_11350_13049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (4))){
var inst_11305 = (state_11346[(7)]);
var inst_11305__$1 = (state_11346[(2)]);
var inst_11306 = (inst_11305__$1 == null);
var state_11346__$1 = (function (){var statearr_11351 = state_11346;
(statearr_11351[(7)] = inst_11305__$1);

return statearr_11351;
})();
if(cljs.core.truth_(inst_11306)){
var statearr_11352_13050 = state_11346__$1;
(statearr_11352_13050[(1)] = (5));

} else {
var statearr_11353_13051 = state_11346__$1;
(statearr_11353_13051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (15))){
var inst_11318 = (state_11346[(8)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11346__$1,(18),to,inst_11318);
} else {
if((state_val_11347 === (21))){
var inst_11337 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11354_13052 = state_11346__$1;
(statearr_11354_13052[(2)] = inst_11337);

(statearr_11354_13052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (13))){
var inst_11339 = (state_11346[(2)]);
var state_11346__$1 = (function (){var statearr_11355 = state_11346;
(statearr_11355[(9)] = inst_11339);

return statearr_11355;
})();
var statearr_11356_13053 = state_11346__$1;
(statearr_11356_13053[(2)] = null);

(statearr_11356_13053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (6))){
var inst_11305 = (state_11346[(7)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11346__$1,(11),inst_11305);
} else {
if((state_val_11347 === (17))){
var inst_11332 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
if(cljs.core.truth_(inst_11332)){
var statearr_11357_13054 = state_11346__$1;
(statearr_11357_13054[(1)] = (19));

} else {
var statearr_11358_13055 = state_11346__$1;
(statearr_11358_13055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (3))){
var inst_11344 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11346__$1,inst_11344);
} else {
if((state_val_11347 === (12))){
var inst_11315 = (state_11346[(10)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11346__$1,(14),inst_11315);
} else {
if((state_val_11347 === (2))){
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11346__$1,(4),results);
} else {
if((state_val_11347 === (19))){
var state_11346__$1 = state_11346;
var statearr_11359_13056 = state_11346__$1;
(statearr_11359_13056[(2)] = null);

(statearr_11359_13056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (11))){
var inst_11315 = (state_11346[(2)]);
var state_11346__$1 = (function (){var statearr_11360 = state_11346;
(statearr_11360[(10)] = inst_11315);

return statearr_11360;
})();
var statearr_11361_13057 = state_11346__$1;
(statearr_11361_13057[(2)] = null);

(statearr_11361_13057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (9))){
var state_11346__$1 = state_11346;
var statearr_11362_13058 = state_11346__$1;
(statearr_11362_13058[(2)] = null);

(statearr_11362_13058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (5))){
var state_11346__$1 = state_11346;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11363_13059 = state_11346__$1;
(statearr_11363_13059[(1)] = (8));

} else {
var statearr_11364_13060 = state_11346__$1;
(statearr_11364_13060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (14))){
var inst_11318 = (state_11346[(8)]);
var inst_11318__$1 = (state_11346[(2)]);
var inst_11325 = (inst_11318__$1 == null);
var inst_11326 = cljs.core.not(inst_11325);
var state_11346__$1 = (function (){var statearr_11365 = state_11346;
(statearr_11365[(8)] = inst_11318__$1);

return statearr_11365;
})();
if(inst_11326){
var statearr_11366_13061 = state_11346__$1;
(statearr_11366_13061[(1)] = (15));

} else {
var statearr_11367_13062 = state_11346__$1;
(statearr_11367_13062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (16))){
var state_11346__$1 = state_11346;
var statearr_11368_13063 = state_11346__$1;
(statearr_11368_13063[(2)] = false);

(statearr_11368_13063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (10))){
var inst_11312 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11373_13064 = state_11346__$1;
(statearr_11373_13064[(2)] = inst_11312);

(statearr_11373_13064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (18))){
var inst_11329 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11374_13065 = state_11346__$1;
(statearr_11374_13065[(2)] = inst_11329);

(statearr_11374_13065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (8))){
var inst_11309 = cljs.core.async.close_BANG_(to);
var state_11346__$1 = state_11346;
var statearr_11375_13066 = state_11346__$1;
(statearr_11375_13066[(2)] = inst_11309);

(statearr_11375_13066[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0 = (function (){
var statearr_11376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__);

(statearr_11376[(1)] = (1));

return statearr_11376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1 = (function (state_11346){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11346);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11377){var ex__10895__auto__ = e11377;
var statearr_11378_13067 = state_11346;
(statearr_11378_13067[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11346[(4)]))){
var statearr_11379_13068 = state_11346;
(statearr_11379_13068[(1)] = cljs.core.first((state_11346[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11346;
state_11346 = G__13069;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__ = function(state_11346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1.call(this,state_11346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11380 = f__10954__auto__();
(statearr_11380[(6)] = c__10953__auto__);

return statearr_11380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));

return c__10953__auto__;
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
var G__11382 = arguments.length;
switch (G__11382) {
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
var G__11384 = arguments.length;
switch (G__11384) {
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
var G__11386 = arguments.length;
switch (G__11386) {
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
var c__10953__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11413){
var state_val_11414 = (state_11413[(1)]);
if((state_val_11414 === (7))){
var inst_11409 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
var statearr_11415_13078 = state_11413__$1;
(statearr_11415_13078[(2)] = inst_11409);

(statearr_11415_13078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (1))){
var state_11413__$1 = state_11413;
var statearr_11416_13079 = state_11413__$1;
(statearr_11416_13079[(2)] = null);

(statearr_11416_13079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (4))){
var inst_11390 = (state_11413[(7)]);
var inst_11390__$1 = (state_11413[(2)]);
var inst_11391 = (inst_11390__$1 == null);
var state_11413__$1 = (function (){var statearr_11417 = state_11413;
(statearr_11417[(7)] = inst_11390__$1);

return statearr_11417;
})();
if(cljs.core.truth_(inst_11391)){
var statearr_11418_13080 = state_11413__$1;
(statearr_11418_13080[(1)] = (5));

} else {
var statearr_11419_13081 = state_11413__$1;
(statearr_11419_13081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (13))){
var state_11413__$1 = state_11413;
var statearr_11420_13082 = state_11413__$1;
(statearr_11420_13082[(2)] = null);

(statearr_11420_13082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (6))){
var inst_11390 = (state_11413[(7)]);
var inst_11396 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11390) : p.call(null,inst_11390));
var state_11413__$1 = state_11413;
if(cljs.core.truth_(inst_11396)){
var statearr_11421_13085 = state_11413__$1;
(statearr_11421_13085[(1)] = (9));

} else {
var statearr_11422_13086 = state_11413__$1;
(statearr_11422_13086[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (3))){
var inst_11411 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11413__$1,inst_11411);
} else {
if((state_val_11414 === (12))){
var state_11413__$1 = state_11413;
var statearr_11423_13089 = state_11413__$1;
(statearr_11423_13089[(2)] = null);

(statearr_11423_13089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (2))){
var state_11413__$1 = state_11413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11413__$1,(4),ch);
} else {
if((state_val_11414 === (11))){
var inst_11390 = (state_11413[(7)]);
var inst_11400 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11413__$1,(8),inst_11400,inst_11390);
} else {
if((state_val_11414 === (9))){
var state_11413__$1 = state_11413;
var statearr_11424_13091 = state_11413__$1;
(statearr_11424_13091[(2)] = tc);

(statearr_11424_13091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (5))){
var inst_11393 = cljs.core.async.close_BANG_(tc);
var inst_11394 = cljs.core.async.close_BANG_(fc);
var state_11413__$1 = (function (){var statearr_11425 = state_11413;
(statearr_11425[(8)] = inst_11393);

return statearr_11425;
})();
var statearr_11426_13093 = state_11413__$1;
(statearr_11426_13093[(2)] = inst_11394);

(statearr_11426_13093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (14))){
var inst_11407 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
var statearr_11427_13094 = state_11413__$1;
(statearr_11427_13094[(2)] = inst_11407);

(statearr_11427_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (10))){
var state_11413__$1 = state_11413;
var statearr_11428_13095 = state_11413__$1;
(statearr_11428_13095[(2)] = fc);

(statearr_11428_13095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (8))){
var inst_11402 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
if(cljs.core.truth_(inst_11402)){
var statearr_11429_13096 = state_11413__$1;
(statearr_11429_13096[(1)] = (12));

} else {
var statearr_11430_13097 = state_11413__$1;
(statearr_11430_13097[(1)] = (13));

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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_11431 = [null,null,null,null,null,null,null,null,null];
(statearr_11431[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_11431[(1)] = (1));

return statearr_11431;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_11413){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11413);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11432){var ex__10895__auto__ = e11432;
var statearr_11433_13099 = state_11413;
(statearr_11433_13099[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11413[(4)]))){
var statearr_11434_13101 = state_11413;
(statearr_11434_13101[(1)] = cljs.core.first((state_11413[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13102 = state_11413;
state_11413 = G__13102;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_11413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_11413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11435 = f__10954__auto__();
(statearr_11435[(6)] = c__10953__auto___13077);

return statearr_11435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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
var c__10953__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11457){
var state_val_11458 = (state_11457[(1)]);
if((state_val_11458 === (7))){
var inst_11453 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
var statearr_11459_13104 = state_11457__$1;
(statearr_11459_13104[(2)] = inst_11453);

(statearr_11459_13104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (1))){
var inst_11436 = init;
var inst_11437 = inst_11436;
var state_11457__$1 = (function (){var statearr_11460 = state_11457;
(statearr_11460[(7)] = inst_11437);

return statearr_11460;
})();
var statearr_11461_13105 = state_11457__$1;
(statearr_11461_13105[(2)] = null);

(statearr_11461_13105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (4))){
var inst_11440 = (state_11457[(8)]);
var inst_11440__$1 = (state_11457[(2)]);
var inst_11441 = (inst_11440__$1 == null);
var state_11457__$1 = (function (){var statearr_11462 = state_11457;
(statearr_11462[(8)] = inst_11440__$1);

return statearr_11462;
})();
if(cljs.core.truth_(inst_11441)){
var statearr_11463_13106 = state_11457__$1;
(statearr_11463_13106[(1)] = (5));

} else {
var statearr_11464_13107 = state_11457__$1;
(statearr_11464_13107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (6))){
var inst_11437 = (state_11457[(7)]);
var inst_11444 = (state_11457[(9)]);
var inst_11440 = (state_11457[(8)]);
var inst_11444__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11437,inst_11440) : f.call(null,inst_11437,inst_11440));
var inst_11445 = cljs.core.reduced_QMARK_(inst_11444__$1);
var state_11457__$1 = (function (){var statearr_11465 = state_11457;
(statearr_11465[(9)] = inst_11444__$1);

return statearr_11465;
})();
if(inst_11445){
var statearr_11466_13108 = state_11457__$1;
(statearr_11466_13108[(1)] = (8));

} else {
var statearr_11467_13109 = state_11457__$1;
(statearr_11467_13109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (3))){
var inst_11455 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11457__$1,inst_11455);
} else {
if((state_val_11458 === (2))){
var state_11457__$1 = state_11457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11457__$1,(4),ch);
} else {
if((state_val_11458 === (9))){
var inst_11444 = (state_11457[(9)]);
var inst_11437 = inst_11444;
var state_11457__$1 = (function (){var statearr_11469 = state_11457;
(statearr_11469[(7)] = inst_11437);

return statearr_11469;
})();
var statearr_11470_13111 = state_11457__$1;
(statearr_11470_13111[(2)] = null);

(statearr_11470_13111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (5))){
var inst_11437 = (state_11457[(7)]);
var state_11457__$1 = state_11457;
var statearr_11471_13121 = state_11457__$1;
(statearr_11471_13121[(2)] = inst_11437);

(statearr_11471_13121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (10))){
var inst_11451 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
var statearr_11472_13122 = state_11457__$1;
(statearr_11472_13122[(2)] = inst_11451);

(statearr_11472_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (8))){
var inst_11444 = (state_11457[(9)]);
var inst_11447 = cljs.core.deref(inst_11444);
var state_11457__$1 = state_11457;
var statearr_11473_13123 = state_11457__$1;
(statearr_11473_13123[(2)] = inst_11447);

(statearr_11473_13123[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10892__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10892__auto____0 = (function (){
var statearr_11474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11474[(0)] = cljs$core$async$reduce_$_state_machine__10892__auto__);

(statearr_11474[(1)] = (1));

return statearr_11474;
});
var cljs$core$async$reduce_$_state_machine__10892__auto____1 = (function (state_11457){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11457);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11475){var ex__10895__auto__ = e11475;
var statearr_11476_13124 = state_11457;
(statearr_11476_13124[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11457[(4)]))){
var statearr_11477_13125 = state_11457;
(statearr_11477_13125[(1)] = cljs.core.first((state_11457[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13126 = state_11457;
state_11457 = G__13126;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10892__auto__ = function(state_11457){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10892__auto____1.call(this,state_11457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10892__auto____0;
cljs$core$async$reduce_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10892__auto____1;
return cljs$core$async$reduce_$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11478 = f__10954__auto__();
(statearr_11478[(6)] = c__10953__auto__);

return statearr_11478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));

return c__10953__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10953__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11484){
var state_val_11485 = (state_11484[(1)]);
if((state_val_11485 === (1))){
var inst_11479 = cljs.core.async.reduce(f__$1,init,ch);
var state_11484__$1 = state_11484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11484__$1,(2),inst_11479);
} else {
if((state_val_11485 === (2))){
var inst_11481 = (state_11484[(2)]);
var inst_11482 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11481) : f__$1.call(null,inst_11481));
var state_11484__$1 = state_11484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11484__$1,inst_11482);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10892__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10892__auto____0 = (function (){
var statearr_11486 = [null,null,null,null,null,null,null];
(statearr_11486[(0)] = cljs$core$async$transduce_$_state_machine__10892__auto__);

(statearr_11486[(1)] = (1));

return statearr_11486;
});
var cljs$core$async$transduce_$_state_machine__10892__auto____1 = (function (state_11484){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11484);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11487){var ex__10895__auto__ = e11487;
var statearr_11488_13127 = state_11484;
(statearr_11488_13127[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11484[(4)]))){
var statearr_11489_13128 = state_11484;
(statearr_11489_13128[(1)] = cljs.core.first((state_11484[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13129 = state_11484;
state_11484 = G__13129;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10892__auto__ = function(state_11484){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10892__auto____1.call(this,state_11484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10892__auto____0;
cljs$core$async$transduce_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10892__auto____1;
return cljs$core$async$transduce_$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11490 = f__10954__auto__();
(statearr_11490[(6)] = c__10953__auto__);

return statearr_11490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));

return c__10953__auto__;
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
var c__10953__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11519){
var state_val_11520 = (state_11519[(1)]);
if((state_val_11520 === (7))){
var inst_11501 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
var statearr_11521_13131 = state_11519__$1;
(statearr_11521_13131[(2)] = inst_11501);

(statearr_11521_13131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (1))){
var inst_11495 = cljs.core.seq(coll);
var inst_11496 = inst_11495;
var state_11519__$1 = (function (){var statearr_11522 = state_11519;
(statearr_11522[(7)] = inst_11496);

return statearr_11522;
})();
var statearr_11523_13132 = state_11519__$1;
(statearr_11523_13132[(2)] = null);

(statearr_11523_13132[(1)] = (2));


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
var statearr_11524_13133 = state_11519__$1;
(statearr_11524_13133[(2)] = inst_11513);

(statearr_11524_13133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (6))){
var inst_11504 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
if(cljs.core.truth_(inst_11504)){
var statearr_11525_13134 = state_11519__$1;
(statearr_11525_13134[(1)] = (8));

} else {
var statearr_11526_13135 = state_11519__$1;
(statearr_11526_13135[(1)] = (9));

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
var statearr_11527_13136 = state_11519__$1;
(statearr_11527_13136[(2)] = null);

(statearr_11527_13136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (2))){
var inst_11496 = (state_11519[(7)]);
var state_11519__$1 = state_11519;
if(cljs.core.truth_(inst_11496)){
var statearr_11528_13137 = state_11519__$1;
(statearr_11528_13137[(1)] = (4));

} else {
var statearr_11529_13138 = state_11519__$1;
(statearr_11529_13138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (11))){
var inst_11510 = cljs.core.async.close_BANG_(ch);
var state_11519__$1 = state_11519;
var statearr_11530_13139 = state_11519__$1;
(statearr_11530_13139[(2)] = inst_11510);

(statearr_11530_13139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (9))){
var state_11519__$1 = state_11519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11531_13140 = state_11519__$1;
(statearr_11531_13140[(1)] = (11));

} else {
var statearr_11532_13141 = state_11519__$1;
(statearr_11532_13141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (5))){
var inst_11496 = (state_11519[(7)]);
var state_11519__$1 = state_11519;
var statearr_11533_13142 = state_11519__$1;
(statearr_11533_13142[(2)] = inst_11496);

(statearr_11533_13142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (10))){
var inst_11515 = (state_11519[(2)]);
var state_11519__$1 = state_11519;
var statearr_11534_13143 = state_11519__$1;
(statearr_11534_13143[(2)] = inst_11515);

(statearr_11534_13143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11520 === (8))){
var inst_11496 = (state_11519[(7)]);
var inst_11506 = cljs.core.next(inst_11496);
var inst_11496__$1 = inst_11506;
var state_11519__$1 = (function (){var statearr_11535 = state_11519;
(statearr_11535[(7)] = inst_11496__$1);

return statearr_11535;
})();
var statearr_11536_13144 = state_11519__$1;
(statearr_11536_13144[(2)] = null);

(statearr_11536_13144[(1)] = (2));


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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_11537 = [null,null,null,null,null,null,null,null];
(statearr_11537[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_11537[(1)] = (1));

return statearr_11537;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_11519){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11519);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11538){var ex__10895__auto__ = e11538;
var statearr_11539_13145 = state_11519;
(statearr_11539_13145[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11519[(4)]))){
var statearr_11540_13146 = state_11519;
(statearr_11540_13146[(1)] = cljs.core.first((state_11519[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13147 = state_11519;
state_11519 = G__13147;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_11519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_11519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11541 = f__10954__auto__();
(statearr_11541[(6)] = c__10953__auto__);

return statearr_11541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));

return c__10953__auto__;
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
var G__11546 = arguments.length;
switch (G__11546) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11549 = (function (ch,cs,meta11550){
this.ch = ch;
this.cs = cs;
this.meta11550 = meta11550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11551,meta11550__$1){
var self__ = this;
var _11551__$1 = this;
return (new cljs.core.async.t_cljs$core$async11549(self__.ch,self__.cs,meta11550__$1));
}));

(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11551){
var self__ = this;
var _11551__$1 = this;
return self__.meta11550;
}));

(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11549.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11550","meta11550",-778435754,null)], null);
}));

(cljs.core.async.t_cljs$core$async11549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11549");

(cljs.core.async.t_cljs$core$async11549.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11549.
 */
cljs.core.async.__GT_t_cljs$core$async11549 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11549(ch__$1,cs__$1,meta11550){
return (new cljs.core.async.t_cljs$core$async11549(ch__$1,cs__$1,meta11550));
});

}

return (new cljs.core.async.t_cljs$core$async11549(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10953__auto___13153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11687){
var state_val_11688 = (state_11687[(1)]);
if((state_val_11688 === (7))){
var inst_11683 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11689_13154 = state_11687__$1;
(statearr_11689_13154[(2)] = inst_11683);

(statearr_11689_13154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (20))){
var inst_11588 = (state_11687[(7)]);
var inst_11600 = cljs.core.first(inst_11588);
var inst_11601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11600,(0),null);
var inst_11602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11600,(1),null);
var state_11687__$1 = (function (){var statearr_11690 = state_11687;
(statearr_11690[(8)] = inst_11601);

return statearr_11690;
})();
if(cljs.core.truth_(inst_11602)){
var statearr_11691_13155 = state_11687__$1;
(statearr_11691_13155[(1)] = (22));

} else {
var statearr_11692_13156 = state_11687__$1;
(statearr_11692_13156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (27))){
var inst_11637 = (state_11687[(9)]);
var inst_11630 = (state_11687[(10)]);
var inst_11554 = (state_11687[(11)]);
var inst_11632 = (state_11687[(12)]);
var inst_11637__$1 = cljs.core._nth(inst_11630,inst_11632);
var inst_11638 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11637__$1,inst_11554,done);
var state_11687__$1 = (function (){var statearr_11705 = state_11687;
(statearr_11705[(9)] = inst_11637__$1);

return statearr_11705;
})();
if(cljs.core.truth_(inst_11638)){
var statearr_11706_13157 = state_11687__$1;
(statearr_11706_13157[(1)] = (30));

} else {
var statearr_11707_13158 = state_11687__$1;
(statearr_11707_13158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (1))){
var state_11687__$1 = state_11687;
var statearr_11708_13159 = state_11687__$1;
(statearr_11708_13159[(2)] = null);

(statearr_11708_13159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (24))){
var inst_11588 = (state_11687[(7)]);
var inst_11607 = (state_11687[(2)]);
var inst_11608 = cljs.core.next(inst_11588);
var inst_11563 = inst_11608;
var inst_11564 = null;
var inst_11565 = (0);
var inst_11566 = (0);
var state_11687__$1 = (function (){var statearr_11709 = state_11687;
(statearr_11709[(13)] = inst_11563);

(statearr_11709[(14)] = inst_11564);

(statearr_11709[(15)] = inst_11607);

(statearr_11709[(16)] = inst_11566);

(statearr_11709[(17)] = inst_11565);

return statearr_11709;
})();
var statearr_11710_13160 = state_11687__$1;
(statearr_11710_13160[(2)] = null);

(statearr_11710_13160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (39))){
var state_11687__$1 = state_11687;
var statearr_11714_13161 = state_11687__$1;
(statearr_11714_13161[(2)] = null);

(statearr_11714_13161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (4))){
var inst_11554 = (state_11687[(11)]);
var inst_11554__$1 = (state_11687[(2)]);
var inst_11555 = (inst_11554__$1 == null);
var state_11687__$1 = (function (){var statearr_11715 = state_11687;
(statearr_11715[(11)] = inst_11554__$1);

return statearr_11715;
})();
if(cljs.core.truth_(inst_11555)){
var statearr_11716_13162 = state_11687__$1;
(statearr_11716_13162[(1)] = (5));

} else {
var statearr_11717_13163 = state_11687__$1;
(statearr_11717_13163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (15))){
var inst_11563 = (state_11687[(13)]);
var inst_11564 = (state_11687[(14)]);
var inst_11566 = (state_11687[(16)]);
var inst_11565 = (state_11687[(17)]);
var inst_11582 = (state_11687[(2)]);
var inst_11585 = (inst_11566 + (1));
var tmp11711 = inst_11563;
var tmp11712 = inst_11564;
var tmp11713 = inst_11565;
var inst_11563__$1 = tmp11711;
var inst_11564__$1 = tmp11712;
var inst_11565__$1 = tmp11713;
var inst_11566__$1 = inst_11585;
var state_11687__$1 = (function (){var statearr_11718 = state_11687;
(statearr_11718[(13)] = inst_11563__$1);

(statearr_11718[(14)] = inst_11564__$1);

(statearr_11718[(18)] = inst_11582);

(statearr_11718[(16)] = inst_11566__$1);

(statearr_11718[(17)] = inst_11565__$1);

return statearr_11718;
})();
var statearr_11719_13164 = state_11687__$1;
(statearr_11719_13164[(2)] = null);

(statearr_11719_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (21))){
var inst_11611 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11723_13165 = state_11687__$1;
(statearr_11723_13165[(2)] = inst_11611);

(statearr_11723_13165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (31))){
var inst_11637 = (state_11687[(9)]);
var inst_11641 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11637);
var state_11687__$1 = state_11687;
var statearr_11724_13166 = state_11687__$1;
(statearr_11724_13166[(2)] = inst_11641);

(statearr_11724_13166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (32))){
var inst_11630 = (state_11687[(10)]);
var inst_11631 = (state_11687[(19)]);
var inst_11632 = (state_11687[(12)]);
var inst_11629 = (state_11687[(20)]);
var inst_11643 = (state_11687[(2)]);
var inst_11644 = (inst_11632 + (1));
var tmp11720 = inst_11630;
var tmp11721 = inst_11631;
var tmp11722 = inst_11629;
var inst_11629__$1 = tmp11722;
var inst_11630__$1 = tmp11720;
var inst_11631__$1 = tmp11721;
var inst_11632__$1 = inst_11644;
var state_11687__$1 = (function (){var statearr_11725 = state_11687;
(statearr_11725[(10)] = inst_11630__$1);

(statearr_11725[(21)] = inst_11643);

(statearr_11725[(19)] = inst_11631__$1);

(statearr_11725[(12)] = inst_11632__$1);

(statearr_11725[(20)] = inst_11629__$1);

return statearr_11725;
})();
var statearr_11728_13167 = state_11687__$1;
(statearr_11728_13167[(2)] = null);

(statearr_11728_13167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (40))){
var inst_11656 = (state_11687[(22)]);
var inst_11660 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11656);
var state_11687__$1 = state_11687;
var statearr_11729_13168 = state_11687__$1;
(statearr_11729_13168[(2)] = inst_11660);

(statearr_11729_13168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (33))){
var inst_11647 = (state_11687[(23)]);
var inst_11649 = cljs.core.chunked_seq_QMARK_(inst_11647);
var state_11687__$1 = state_11687;
if(inst_11649){
var statearr_11730_13169 = state_11687__$1;
(statearr_11730_13169[(1)] = (36));

} else {
var statearr_11731_13170 = state_11687__$1;
(statearr_11731_13170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (13))){
var inst_11576 = (state_11687[(24)]);
var inst_11579 = cljs.core.async.close_BANG_(inst_11576);
var state_11687__$1 = state_11687;
var statearr_11732_13171 = state_11687__$1;
(statearr_11732_13171[(2)] = inst_11579);

(statearr_11732_13171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (22))){
var inst_11601 = (state_11687[(8)]);
var inst_11604 = cljs.core.async.close_BANG_(inst_11601);
var state_11687__$1 = state_11687;
var statearr_11733_13172 = state_11687__$1;
(statearr_11733_13172[(2)] = inst_11604);

(statearr_11733_13172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (36))){
var inst_11647 = (state_11687[(23)]);
var inst_11651 = cljs.core.chunk_first(inst_11647);
var inst_11652 = cljs.core.chunk_rest(inst_11647);
var inst_11653 = cljs.core.count(inst_11651);
var inst_11629 = inst_11652;
var inst_11630 = inst_11651;
var inst_11631 = inst_11653;
var inst_11632 = (0);
var state_11687__$1 = (function (){var statearr_11734 = state_11687;
(statearr_11734[(10)] = inst_11630);

(statearr_11734[(19)] = inst_11631);

(statearr_11734[(12)] = inst_11632);

(statearr_11734[(20)] = inst_11629);

return statearr_11734;
})();
var statearr_11735_13173 = state_11687__$1;
(statearr_11735_13173[(2)] = null);

(statearr_11735_13173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (41))){
var inst_11647 = (state_11687[(23)]);
var inst_11662 = (state_11687[(2)]);
var inst_11663 = cljs.core.next(inst_11647);
var inst_11629 = inst_11663;
var inst_11630 = null;
var inst_11631 = (0);
var inst_11632 = (0);
var state_11687__$1 = (function (){var statearr_11736 = state_11687;
(statearr_11736[(25)] = inst_11662);

(statearr_11736[(10)] = inst_11630);

(statearr_11736[(19)] = inst_11631);

(statearr_11736[(12)] = inst_11632);

(statearr_11736[(20)] = inst_11629);

return statearr_11736;
})();
var statearr_11737_13174 = state_11687__$1;
(statearr_11737_13174[(2)] = null);

(statearr_11737_13174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (43))){
var state_11687__$1 = state_11687;
var statearr_11738_13175 = state_11687__$1;
(statearr_11738_13175[(2)] = null);

(statearr_11738_13175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (29))){
var inst_11671 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11739_13176 = state_11687__$1;
(statearr_11739_13176[(2)] = inst_11671);

(statearr_11739_13176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (44))){
var inst_11680 = (state_11687[(2)]);
var state_11687__$1 = (function (){var statearr_11740 = state_11687;
(statearr_11740[(26)] = inst_11680);

return statearr_11740;
})();
var statearr_11742_13177 = state_11687__$1;
(statearr_11742_13177[(2)] = null);

(statearr_11742_13177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (6))){
var inst_11621 = (state_11687[(27)]);
var inst_11620 = cljs.core.deref(cs);
var inst_11621__$1 = cljs.core.keys(inst_11620);
var inst_11622 = cljs.core.count(inst_11621__$1);
var inst_11623 = cljs.core.reset_BANG_(dctr,inst_11622);
var inst_11628 = cljs.core.seq(inst_11621__$1);
var inst_11629 = inst_11628;
var inst_11630 = null;
var inst_11631 = (0);
var inst_11632 = (0);
var state_11687__$1 = (function (){var statearr_11743 = state_11687;
(statearr_11743[(10)] = inst_11630);

(statearr_11743[(19)] = inst_11631);

(statearr_11743[(28)] = inst_11623);

(statearr_11743[(12)] = inst_11632);

(statearr_11743[(27)] = inst_11621__$1);

(statearr_11743[(20)] = inst_11629);

return statearr_11743;
})();
var statearr_11744_13178 = state_11687__$1;
(statearr_11744_13178[(2)] = null);

(statearr_11744_13178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (28))){
var inst_11647 = (state_11687[(23)]);
var inst_11629 = (state_11687[(20)]);
var inst_11647__$1 = cljs.core.seq(inst_11629);
var state_11687__$1 = (function (){var statearr_11745 = state_11687;
(statearr_11745[(23)] = inst_11647__$1);

return statearr_11745;
})();
if(inst_11647__$1){
var statearr_11746_13179 = state_11687__$1;
(statearr_11746_13179[(1)] = (33));

} else {
var statearr_11747_13180 = state_11687__$1;
(statearr_11747_13180[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (25))){
var inst_11631 = (state_11687[(19)]);
var inst_11632 = (state_11687[(12)]);
var inst_11634 = (inst_11632 < inst_11631);
var inst_11635 = inst_11634;
var state_11687__$1 = state_11687;
if(cljs.core.truth_(inst_11635)){
var statearr_11750_13181 = state_11687__$1;
(statearr_11750_13181[(1)] = (27));

} else {
var statearr_11751_13182 = state_11687__$1;
(statearr_11751_13182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (34))){
var state_11687__$1 = state_11687;
var statearr_11756_13183 = state_11687__$1;
(statearr_11756_13183[(2)] = null);

(statearr_11756_13183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (17))){
var state_11687__$1 = state_11687;
var statearr_11757_13184 = state_11687__$1;
(statearr_11757_13184[(2)] = null);

(statearr_11757_13184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (3))){
var inst_11685 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11687__$1,inst_11685);
} else {
if((state_val_11688 === (12))){
var inst_11616 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11758_13185 = state_11687__$1;
(statearr_11758_13185[(2)] = inst_11616);

(statearr_11758_13185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (2))){
var state_11687__$1 = state_11687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11687__$1,(4),ch);
} else {
if((state_val_11688 === (23))){
var state_11687__$1 = state_11687;
var statearr_11759_13186 = state_11687__$1;
(statearr_11759_13186[(2)] = null);

(statearr_11759_13186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (35))){
var inst_11669 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11760_13187 = state_11687__$1;
(statearr_11760_13187[(2)] = inst_11669);

(statearr_11760_13187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (19))){
var inst_11588 = (state_11687[(7)]);
var inst_11592 = cljs.core.chunk_first(inst_11588);
var inst_11593 = cljs.core.chunk_rest(inst_11588);
var inst_11594 = cljs.core.count(inst_11592);
var inst_11563 = inst_11593;
var inst_11564 = inst_11592;
var inst_11565 = inst_11594;
var inst_11566 = (0);
var state_11687__$1 = (function (){var statearr_11761 = state_11687;
(statearr_11761[(13)] = inst_11563);

(statearr_11761[(14)] = inst_11564);

(statearr_11761[(16)] = inst_11566);

(statearr_11761[(17)] = inst_11565);

return statearr_11761;
})();
var statearr_11762_13188 = state_11687__$1;
(statearr_11762_13188[(2)] = null);

(statearr_11762_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (11))){
var inst_11563 = (state_11687[(13)]);
var inst_11588 = (state_11687[(7)]);
var inst_11588__$1 = cljs.core.seq(inst_11563);
var state_11687__$1 = (function (){var statearr_11763 = state_11687;
(statearr_11763[(7)] = inst_11588__$1);

return statearr_11763;
})();
if(inst_11588__$1){
var statearr_11764_13189 = state_11687__$1;
(statearr_11764_13189[(1)] = (16));

} else {
var statearr_11765_13190 = state_11687__$1;
(statearr_11765_13190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (9))){
var inst_11618 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11766_13191 = state_11687__$1;
(statearr_11766_13191[(2)] = inst_11618);

(statearr_11766_13191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (5))){
var inst_11561 = cljs.core.deref(cs);
var inst_11562 = cljs.core.seq(inst_11561);
var inst_11563 = inst_11562;
var inst_11564 = null;
var inst_11565 = (0);
var inst_11566 = (0);
var state_11687__$1 = (function (){var statearr_11767 = state_11687;
(statearr_11767[(13)] = inst_11563);

(statearr_11767[(14)] = inst_11564);

(statearr_11767[(16)] = inst_11566);

(statearr_11767[(17)] = inst_11565);

return statearr_11767;
})();
var statearr_11768_13192 = state_11687__$1;
(statearr_11768_13192[(2)] = null);

(statearr_11768_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (14))){
var state_11687__$1 = state_11687;
var statearr_11769_13193 = state_11687__$1;
(statearr_11769_13193[(2)] = null);

(statearr_11769_13193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (45))){
var inst_11677 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11770_13194 = state_11687__$1;
(statearr_11770_13194[(2)] = inst_11677);

(statearr_11770_13194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (26))){
var inst_11621 = (state_11687[(27)]);
var inst_11673 = (state_11687[(2)]);
var inst_11674 = cljs.core.seq(inst_11621);
var state_11687__$1 = (function (){var statearr_11771 = state_11687;
(statearr_11771[(29)] = inst_11673);

return statearr_11771;
})();
if(inst_11674){
var statearr_11772_13195 = state_11687__$1;
(statearr_11772_13195[(1)] = (42));

} else {
var statearr_11773_13196 = state_11687__$1;
(statearr_11773_13196[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (16))){
var inst_11588 = (state_11687[(7)]);
var inst_11590 = cljs.core.chunked_seq_QMARK_(inst_11588);
var state_11687__$1 = state_11687;
if(inst_11590){
var statearr_11776_13197 = state_11687__$1;
(statearr_11776_13197[(1)] = (19));

} else {
var statearr_11777_13198 = state_11687__$1;
(statearr_11777_13198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (38))){
var inst_11666 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11778_13199 = state_11687__$1;
(statearr_11778_13199[(2)] = inst_11666);

(statearr_11778_13199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (30))){
var state_11687__$1 = state_11687;
var statearr_11779_13200 = state_11687__$1;
(statearr_11779_13200[(2)] = null);

(statearr_11779_13200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (10))){
var inst_11564 = (state_11687[(14)]);
var inst_11566 = (state_11687[(16)]);
var inst_11575 = cljs.core._nth(inst_11564,inst_11566);
var inst_11576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11575,(0),null);
var inst_11577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11575,(1),null);
var state_11687__$1 = (function (){var statearr_11780 = state_11687;
(statearr_11780[(24)] = inst_11576);

return statearr_11780;
})();
if(cljs.core.truth_(inst_11577)){
var statearr_11781_13201 = state_11687__$1;
(statearr_11781_13201[(1)] = (13));

} else {
var statearr_11782_13202 = state_11687__$1;
(statearr_11782_13202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (18))){
var inst_11614 = (state_11687[(2)]);
var state_11687__$1 = state_11687;
var statearr_11783_13203 = state_11687__$1;
(statearr_11783_13203[(2)] = inst_11614);

(statearr_11783_13203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (42))){
var state_11687__$1 = state_11687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11687__$1,(45),dchan);
} else {
if((state_val_11688 === (37))){
var inst_11656 = (state_11687[(22)]);
var inst_11554 = (state_11687[(11)]);
var inst_11647 = (state_11687[(23)]);
var inst_11656__$1 = cljs.core.first(inst_11647);
var inst_11657 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11656__$1,inst_11554,done);
var state_11687__$1 = (function (){var statearr_11784 = state_11687;
(statearr_11784[(22)] = inst_11656__$1);

return statearr_11784;
})();
if(cljs.core.truth_(inst_11657)){
var statearr_11785_13204 = state_11687__$1;
(statearr_11785_13204[(1)] = (39));

} else {
var statearr_11786_13205 = state_11687__$1;
(statearr_11786_13205[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11688 === (8))){
var inst_11566 = (state_11687[(16)]);
var inst_11565 = (state_11687[(17)]);
var inst_11568 = (inst_11566 < inst_11565);
var inst_11569 = inst_11568;
var state_11687__$1 = state_11687;
if(cljs.core.truth_(inst_11569)){
var statearr_11787_13206 = state_11687__$1;
(statearr_11787_13206[(1)] = (10));

} else {
var statearr_11788_13207 = state_11687__$1;
(statearr_11788_13207[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10892__auto__ = null;
var cljs$core$async$mult_$_state_machine__10892__auto____0 = (function (){
var statearr_11790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11790[(0)] = cljs$core$async$mult_$_state_machine__10892__auto__);

(statearr_11790[(1)] = (1));

return statearr_11790;
});
var cljs$core$async$mult_$_state_machine__10892__auto____1 = (function (state_11687){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11687);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11791){var ex__10895__auto__ = e11791;
var statearr_11792_13208 = state_11687;
(statearr_11792_13208[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11687[(4)]))){
var statearr_11793_13209 = state_11687;
(statearr_11793_13209[(1)] = cljs.core.first((state_11687[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13210 = state_11687;
state_11687 = G__13210;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10892__auto__ = function(state_11687){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10892__auto____1.call(this,state_11687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10892__auto____0;
cljs$core$async$mult_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10892__auto____1;
return cljs$core$async$mult_$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11794 = f__10954__auto__();
(statearr_11794[(6)] = c__10953__auto___13153);

return statearr_11794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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
var G__11796 = arguments.length;
switch (G__11796) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11805){
var map__11806 = p__11805;
var map__11806__$1 = (((((!((map__11806 == null))))?(((((map__11806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11806):map__11806);
var opts = map__11806__$1;
var statearr_11808_13220 = state;
(statearr_11808_13220[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11809_13221 = state;
(statearr_11809_13221[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11810_13222 = state;
(statearr_11810_13222[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11801){
var G__11802 = cljs.core.first(seq11801);
var seq11801__$1 = cljs.core.next(seq11801);
var G__11803 = cljs.core.first(seq11801__$1);
var seq11801__$2 = cljs.core.next(seq11801__$1);
var G__11804 = cljs.core.first(seq11801__$2);
var seq11801__$3 = cljs.core.next(seq11801__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11802,G__11803,G__11804,seq11801__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11811 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11812){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11812 = meta11812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11813,meta11812__$1){
var self__ = this;
var _11813__$1 = this;
return (new cljs.core.async.t_cljs$core$async11811(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11812__$1));
}));

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11813){
var self__ = this;
var _11813__$1 = this;
return self__.meta11812;
}));

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11811.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11812","meta11812",-1995095710,null)], null);
}));

(cljs.core.async.t_cljs$core$async11811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11811");

(cljs.core.async.t_cljs$core$async11811.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11811.
 */
cljs.core.async.__GT_t_cljs$core$async11811 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11811(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11812){
return (new cljs.core.async.t_cljs$core$async11811(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11812));
});

}

return (new cljs.core.async.t_cljs$core$async11811(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10953__auto___13223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_11918){
var state_val_11919 = (state_11918[(1)]);
if((state_val_11919 === (7))){
var inst_11830 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
var statearr_11920_13224 = state_11918__$1;
(statearr_11920_13224[(2)] = inst_11830);

(statearr_11920_13224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (20))){
var inst_11842 = (state_11918[(7)]);
var state_11918__$1 = state_11918;
var statearr_11921_13225 = state_11918__$1;
(statearr_11921_13225[(2)] = inst_11842);

(statearr_11921_13225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (27))){
var state_11918__$1 = state_11918;
var statearr_11922_13226 = state_11918__$1;
(statearr_11922_13226[(2)] = null);

(statearr_11922_13226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (1))){
var inst_11817 = (state_11918[(8)]);
var inst_11817__$1 = calc_state();
var inst_11819 = (inst_11817__$1 == null);
var inst_11820 = cljs.core.not(inst_11819);
var state_11918__$1 = (function (){var statearr_11923 = state_11918;
(statearr_11923[(8)] = inst_11817__$1);

return statearr_11923;
})();
if(inst_11820){
var statearr_11924_13227 = state_11918__$1;
(statearr_11924_13227[(1)] = (2));

} else {
var statearr_11925_13228 = state_11918__$1;
(statearr_11925_13228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (24))){
var inst_11866 = (state_11918[(9)]);
var inst_11889 = (state_11918[(10)]);
var inst_11875 = (state_11918[(11)]);
var inst_11889__$1 = (inst_11866.cljs$core$IFn$_invoke$arity$1 ? inst_11866.cljs$core$IFn$_invoke$arity$1(inst_11875) : inst_11866.call(null,inst_11875));
var state_11918__$1 = (function (){var statearr_11926 = state_11918;
(statearr_11926[(10)] = inst_11889__$1);

return statearr_11926;
})();
if(cljs.core.truth_(inst_11889__$1)){
var statearr_11927_13229 = state_11918__$1;
(statearr_11927_13229[(1)] = (29));

} else {
var statearr_11928_13230 = state_11918__$1;
(statearr_11928_13230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (4))){
var inst_11833 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
if(cljs.core.truth_(inst_11833)){
var statearr_11929_13231 = state_11918__$1;
(statearr_11929_13231[(1)] = (8));

} else {
var statearr_11930_13232 = state_11918__$1;
(statearr_11930_13232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (15))){
var inst_11860 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
if(cljs.core.truth_(inst_11860)){
var statearr_11931_13233 = state_11918__$1;
(statearr_11931_13233[(1)] = (19));

} else {
var statearr_11932_13234 = state_11918__$1;
(statearr_11932_13234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (21))){
var inst_11865 = (state_11918[(12)]);
var inst_11865__$1 = (state_11918[(2)]);
var inst_11866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11865__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11865__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11865__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11918__$1 = (function (){var statearr_11933 = state_11918;
(statearr_11933[(12)] = inst_11865__$1);

(statearr_11933[(9)] = inst_11866);

(statearr_11933[(13)] = inst_11867);

return statearr_11933;
})();
return cljs.core.async.ioc_alts_BANG_(state_11918__$1,(22),inst_11868);
} else {
if((state_val_11919 === (31))){
var inst_11897 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
if(cljs.core.truth_(inst_11897)){
var statearr_11934_13235 = state_11918__$1;
(statearr_11934_13235[(1)] = (32));

} else {
var statearr_11935_13236 = state_11918__$1;
(statearr_11935_13236[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (32))){
var inst_11874 = (state_11918[(14)]);
var state_11918__$1 = state_11918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11918__$1,(35),out,inst_11874);
} else {
if((state_val_11919 === (33))){
var inst_11865 = (state_11918[(12)]);
var inst_11842 = inst_11865;
var state_11918__$1 = (function (){var statearr_11937 = state_11918;
(statearr_11937[(7)] = inst_11842);

return statearr_11937;
})();
var statearr_11938_13237 = state_11918__$1;
(statearr_11938_13237[(2)] = null);

(statearr_11938_13237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (13))){
var inst_11842 = (state_11918[(7)]);
var inst_11849 = inst_11842.cljs$lang$protocol_mask$partition0$;
var inst_11850 = (inst_11849 & (64));
var inst_11851 = inst_11842.cljs$core$ISeq$;
var inst_11852 = (cljs.core.PROTOCOL_SENTINEL === inst_11851);
var inst_11853 = ((inst_11850) || (inst_11852));
var state_11918__$1 = state_11918;
if(cljs.core.truth_(inst_11853)){
var statearr_11939_13238 = state_11918__$1;
(statearr_11939_13238[(1)] = (16));

} else {
var statearr_11940_13239 = state_11918__$1;
(statearr_11940_13239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (22))){
var inst_11874 = (state_11918[(14)]);
var inst_11875 = (state_11918[(11)]);
var inst_11873 = (state_11918[(2)]);
var inst_11874__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11873,(0),null);
var inst_11875__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11873,(1),null);
var inst_11876 = (inst_11874__$1 == null);
var inst_11877 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11875__$1,change);
var inst_11878 = ((inst_11876) || (inst_11877));
var state_11918__$1 = (function (){var statearr_11941 = state_11918;
(statearr_11941[(14)] = inst_11874__$1);

(statearr_11941[(11)] = inst_11875__$1);

return statearr_11941;
})();
if(cljs.core.truth_(inst_11878)){
var statearr_11942_13240 = state_11918__$1;
(statearr_11942_13240[(1)] = (23));

} else {
var statearr_11943_13241 = state_11918__$1;
(statearr_11943_13241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (36))){
var inst_11865 = (state_11918[(12)]);
var inst_11842 = inst_11865;
var state_11918__$1 = (function (){var statearr_11944 = state_11918;
(statearr_11944[(7)] = inst_11842);

return statearr_11944;
})();
var statearr_11945_13242 = state_11918__$1;
(statearr_11945_13242[(2)] = null);

(statearr_11945_13242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (29))){
var inst_11889 = (state_11918[(10)]);
var state_11918__$1 = state_11918;
var statearr_11946_13243 = state_11918__$1;
(statearr_11946_13243[(2)] = inst_11889);

(statearr_11946_13243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (6))){
var state_11918__$1 = state_11918;
var statearr_11947_13244 = state_11918__$1;
(statearr_11947_13244[(2)] = false);

(statearr_11947_13244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (28))){
var inst_11885 = (state_11918[(2)]);
var inst_11886 = calc_state();
var inst_11842 = inst_11886;
var state_11918__$1 = (function (){var statearr_11948 = state_11918;
(statearr_11948[(7)] = inst_11842);

(statearr_11948[(15)] = inst_11885);

return statearr_11948;
})();
var statearr_11949_13245 = state_11918__$1;
(statearr_11949_13245[(2)] = null);

(statearr_11949_13245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (25))){
var inst_11911 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
var statearr_11950_13246 = state_11918__$1;
(statearr_11950_13246[(2)] = inst_11911);

(statearr_11950_13246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (34))){
var inst_11909 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
var statearr_11952_13248 = state_11918__$1;
(statearr_11952_13248[(2)] = inst_11909);

(statearr_11952_13248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (17))){
var state_11918__$1 = state_11918;
var statearr_11954_13249 = state_11918__$1;
(statearr_11954_13249[(2)] = false);

(statearr_11954_13249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (3))){
var state_11918__$1 = state_11918;
var statearr_11956_13250 = state_11918__$1;
(statearr_11956_13250[(2)] = false);

(statearr_11956_13250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (12))){
var inst_11913 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11918__$1,inst_11913);
} else {
if((state_val_11919 === (2))){
var inst_11817 = (state_11918[(8)]);
var inst_11822 = inst_11817.cljs$lang$protocol_mask$partition0$;
var inst_11823 = (inst_11822 & (64));
var inst_11824 = inst_11817.cljs$core$ISeq$;
var inst_11825 = (cljs.core.PROTOCOL_SENTINEL === inst_11824);
var inst_11826 = ((inst_11823) || (inst_11825));
var state_11918__$1 = state_11918;
if(cljs.core.truth_(inst_11826)){
var statearr_11957_13251 = state_11918__$1;
(statearr_11957_13251[(1)] = (5));

} else {
var statearr_11958_13252 = state_11918__$1;
(statearr_11958_13252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (23))){
var inst_11874 = (state_11918[(14)]);
var inst_11880 = (inst_11874 == null);
var state_11918__$1 = state_11918;
if(cljs.core.truth_(inst_11880)){
var statearr_11959_13253 = state_11918__$1;
(statearr_11959_13253[(1)] = (26));

} else {
var statearr_11960_13254 = state_11918__$1;
(statearr_11960_13254[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (35))){
var inst_11900 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
if(cljs.core.truth_(inst_11900)){
var statearr_11961_13255 = state_11918__$1;
(statearr_11961_13255[(1)] = (36));

} else {
var statearr_11962_13256 = state_11918__$1;
(statearr_11962_13256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (19))){
var inst_11842 = (state_11918[(7)]);
var inst_11862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11842);
var state_11918__$1 = state_11918;
var statearr_11963_13257 = state_11918__$1;
(statearr_11963_13257[(2)] = inst_11862);

(statearr_11963_13257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (11))){
var inst_11842 = (state_11918[(7)]);
var inst_11846 = (inst_11842 == null);
var inst_11847 = cljs.core.not(inst_11846);
var state_11918__$1 = state_11918;
if(inst_11847){
var statearr_11964_13258 = state_11918__$1;
(statearr_11964_13258[(1)] = (13));

} else {
var statearr_11965_13259 = state_11918__$1;
(statearr_11965_13259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (9))){
var inst_11817 = (state_11918[(8)]);
var state_11918__$1 = state_11918;
var statearr_11966_13260 = state_11918__$1;
(statearr_11966_13260[(2)] = inst_11817);

(statearr_11966_13260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (5))){
var state_11918__$1 = state_11918;
var statearr_11967_13261 = state_11918__$1;
(statearr_11967_13261[(2)] = true);

(statearr_11967_13261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (14))){
var state_11918__$1 = state_11918;
var statearr_11968_13262 = state_11918__$1;
(statearr_11968_13262[(2)] = false);

(statearr_11968_13262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (26))){
var inst_11875 = (state_11918[(11)]);
var inst_11882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11875);
var state_11918__$1 = state_11918;
var statearr_11969_13263 = state_11918__$1;
(statearr_11969_13263[(2)] = inst_11882);

(statearr_11969_13263[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (16))){
var state_11918__$1 = state_11918;
var statearr_11970_13264 = state_11918__$1;
(statearr_11970_13264[(2)] = true);

(statearr_11970_13264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (38))){
var inst_11905 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
var statearr_11971_13265 = state_11918__$1;
(statearr_11971_13265[(2)] = inst_11905);

(statearr_11971_13265[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (30))){
var inst_11866 = (state_11918[(9)]);
var inst_11867 = (state_11918[(13)]);
var inst_11875 = (state_11918[(11)]);
var inst_11892 = cljs.core.empty_QMARK_(inst_11866);
var inst_11893 = (inst_11867.cljs$core$IFn$_invoke$arity$1 ? inst_11867.cljs$core$IFn$_invoke$arity$1(inst_11875) : inst_11867.call(null,inst_11875));
var inst_11894 = cljs.core.not(inst_11893);
var inst_11895 = ((inst_11892) && (inst_11894));
var state_11918__$1 = state_11918;
var statearr_11972_13266 = state_11918__$1;
(statearr_11972_13266[(2)] = inst_11895);

(statearr_11972_13266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (10))){
var inst_11817 = (state_11918[(8)]);
var inst_11838 = (state_11918[(2)]);
var inst_11839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11838,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11838,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11838,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11842 = inst_11817;
var state_11918__$1 = (function (){var statearr_11973 = state_11918;
(statearr_11973[(7)] = inst_11842);

(statearr_11973[(16)] = inst_11840);

(statearr_11973[(17)] = inst_11839);

(statearr_11973[(18)] = inst_11841);

return statearr_11973;
})();
var statearr_11974_13267 = state_11918__$1;
(statearr_11974_13267[(2)] = null);

(statearr_11974_13267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (18))){
var inst_11857 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
var statearr_11975_13268 = state_11918__$1;
(statearr_11975_13268[(2)] = inst_11857);

(statearr_11975_13268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (37))){
var state_11918__$1 = state_11918;
var statearr_11976_13270 = state_11918__$1;
(statearr_11976_13270[(2)] = null);

(statearr_11976_13270[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11919 === (8))){
var inst_11817 = (state_11918[(8)]);
var inst_11835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11817);
var state_11918__$1 = state_11918;
var statearr_11977_13271 = state_11918__$1;
(statearr_11977_13271[(2)] = inst_11835);

(statearr_11977_13271[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10892__auto__ = null;
var cljs$core$async$mix_$_state_machine__10892__auto____0 = (function (){
var statearr_11978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11978[(0)] = cljs$core$async$mix_$_state_machine__10892__auto__);

(statearr_11978[(1)] = (1));

return statearr_11978;
});
var cljs$core$async$mix_$_state_machine__10892__auto____1 = (function (state_11918){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_11918);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e11979){var ex__10895__auto__ = e11979;
var statearr_11980_13272 = state_11918;
(statearr_11980_13272[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_11918[(4)]))){
var statearr_11981_13273 = state_11918;
(statearr_11981_13273[(1)] = cljs.core.first((state_11918[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13274 = state_11918;
state_11918 = G__13274;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10892__auto__ = function(state_11918){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10892__auto____1.call(this,state_11918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10892__auto____0;
cljs$core$async$mix_$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10892__auto____1;
return cljs$core$async$mix_$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_11982 = f__10954__auto__();
(statearr_11982[(6)] = c__10953__auto___13223);

return statearr_11982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13277 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13277(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13282 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13282(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13283 = (function() {
var G__13284 = null;
var G__13284__1 = (function (p){
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
var G__13284__2 = (function (p,v){
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
G__13284 = function(p,v){
switch(arguments.length){
case 1:
return G__13284__1.call(this,p);
case 2:
return G__13284__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13284.cljs$core$IFn$_invoke$arity$1 = G__13284__1;
G__13284.cljs$core$IFn$_invoke$arity$2 = G__13284__2;
return G__13284;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11985 = arguments.length;
switch (G__11985) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13283(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13283(p,v);
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
var G__11988 = arguments.length;
switch (G__11988) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11986_SHARP_){
if(cljs.core.truth_((p1__11986_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11986_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11986_SHARP_.call(null,topic)))){
return p1__11986_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11986_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
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
var c__10953__auto___13289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12063){
var state_val_12064 = (state_12063[(1)]);
if((state_val_12064 === (7))){
var inst_12059 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12065_13290 = state_12063__$1;
(statearr_12065_13290[(2)] = inst_12059);

(statearr_12065_13290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (20))){
var state_12063__$1 = state_12063;
var statearr_12066_13291 = state_12063__$1;
(statearr_12066_13291[(2)] = null);

(statearr_12066_13291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (1))){
var state_12063__$1 = state_12063;
var statearr_12067_13292 = state_12063__$1;
(statearr_12067_13292[(2)] = null);

(statearr_12067_13292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (24))){
var inst_12042 = (state_12063[(7)]);
var inst_12051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12042);
var state_12063__$1 = state_12063;
var statearr_12068_13293 = state_12063__$1;
(statearr_12068_13293[(2)] = inst_12051);

(statearr_12068_13293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (4))){
var inst_11994 = (state_12063[(8)]);
var inst_11994__$1 = (state_12063[(2)]);
var inst_11995 = (inst_11994__$1 == null);
var state_12063__$1 = (function (){var statearr_12069 = state_12063;
(statearr_12069[(8)] = inst_11994__$1);

return statearr_12069;
})();
if(cljs.core.truth_(inst_11995)){
var statearr_12070_13299 = state_12063__$1;
(statearr_12070_13299[(1)] = (5));

} else {
var statearr_12071_13300 = state_12063__$1;
(statearr_12071_13300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (15))){
var inst_12036 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12072_13305 = state_12063__$1;
(statearr_12072_13305[(2)] = inst_12036);

(statearr_12072_13305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (21))){
var inst_12056 = (state_12063[(2)]);
var state_12063__$1 = (function (){var statearr_12073 = state_12063;
(statearr_12073[(9)] = inst_12056);

return statearr_12073;
})();
var statearr_12074_13311 = state_12063__$1;
(statearr_12074_13311[(2)] = null);

(statearr_12074_13311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (13))){
var inst_12018 = (state_12063[(10)]);
var inst_12020 = cljs.core.chunked_seq_QMARK_(inst_12018);
var state_12063__$1 = state_12063;
if(inst_12020){
var statearr_12075_13312 = state_12063__$1;
(statearr_12075_13312[(1)] = (16));

} else {
var statearr_12076_13313 = state_12063__$1;
(statearr_12076_13313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (22))){
var inst_12048 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
if(cljs.core.truth_(inst_12048)){
var statearr_12077_13314 = state_12063__$1;
(statearr_12077_13314[(1)] = (23));

} else {
var statearr_12078_13315 = state_12063__$1;
(statearr_12078_13315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (6))){
var inst_12042 = (state_12063[(7)]);
var inst_12044 = (state_12063[(11)]);
var inst_11994 = (state_12063[(8)]);
var inst_12042__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11994) : topic_fn.call(null,inst_11994));
var inst_12043 = cljs.core.deref(mults);
var inst_12044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12043,inst_12042__$1);
var state_12063__$1 = (function (){var statearr_12079 = state_12063;
(statearr_12079[(7)] = inst_12042__$1);

(statearr_12079[(11)] = inst_12044__$1);

return statearr_12079;
})();
if(cljs.core.truth_(inst_12044__$1)){
var statearr_12080_13316 = state_12063__$1;
(statearr_12080_13316[(1)] = (19));

} else {
var statearr_12081_13317 = state_12063__$1;
(statearr_12081_13317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (25))){
var inst_12053 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12082_13322 = state_12063__$1;
(statearr_12082_13322[(2)] = inst_12053);

(statearr_12082_13322[(1)] = (21));


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
var statearr_12088_13323 = state_12063__$1;
(statearr_12088_13323[(2)] = null);

(statearr_12088_13323[(1)] = (8));


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
var statearr_12093_13324 = state_12063__$1;
(statearr_12093_13324[(2)] = inst_12038);

(statearr_12093_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (2))){
var state_12063__$1 = state_12063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12063__$1,(4),ch);
} else {
if((state_val_12064 === (23))){
var state_12063__$1 = state_12063;
var statearr_12098_13325 = state_12063__$1;
(statearr_12098_13325[(2)] = null);

(statearr_12098_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (19))){
var inst_12044 = (state_12063[(11)]);
var inst_11994 = (state_12063[(8)]);
var inst_12046 = cljs.core.async.muxch_STAR_(inst_12044);
var state_12063__$1 = state_12063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12063__$1,(22),inst_12046,inst_11994);
} else {
if((state_val_12064 === (11))){
var inst_12018 = (state_12063[(10)]);
var inst_12004 = (state_12063[(13)]);
var inst_12018__$1 = cljs.core.seq(inst_12004);
var state_12063__$1 = (function (){var statearr_12099 = state_12063;
(statearr_12099[(10)] = inst_12018__$1);

return statearr_12099;
})();
if(inst_12018__$1){
var statearr_12100_13326 = state_12063__$1;
(statearr_12100_13326[(1)] = (13));

} else {
var statearr_12101_13327 = state_12063__$1;
(statearr_12101_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (9))){
var inst_12040 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12103_13328 = state_12063__$1;
(statearr_12103_13328[(2)] = inst_12040);

(statearr_12103_13328[(1)] = (7));


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
var state_12063__$1 = (function (){var statearr_12105 = state_12063;
(statearr_12105[(12)] = inst_12006);

(statearr_12105[(13)] = inst_12004);

(statearr_12105[(14)] = inst_12005);

(statearr_12105[(15)] = inst_12007);

return statearr_12105;
})();
var statearr_12106_13329 = state_12063__$1;
(statearr_12106_13329[(2)] = null);

(statearr_12106_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (14))){
var state_12063__$1 = state_12063;
var statearr_12110_13330 = state_12063__$1;
(statearr_12110_13330[(2)] = null);

(statearr_12110_13330[(1)] = (15));


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
var state_12063__$1 = (function (){var statearr_12111 = state_12063;
(statearr_12111[(12)] = inst_12006);

(statearr_12111[(13)] = inst_12004);

(statearr_12111[(14)] = inst_12005);

(statearr_12111[(15)] = inst_12007);

return statearr_12111;
})();
var statearr_12112_13331 = state_12063__$1;
(statearr_12112_13331[(2)] = null);

(statearr_12112_13331[(1)] = (8));


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
var tmp12107 = inst_12006;
var tmp12108 = inst_12004;
var tmp12109 = inst_12005;
var inst_12004__$1 = tmp12108;
var inst_12005__$1 = tmp12109;
var inst_12006__$1 = tmp12107;
var inst_12007__$1 = inst_12015;
var state_12063__$1 = (function (){var statearr_12113 = state_12063;
(statearr_12113[(17)] = inst_12014);

(statearr_12113[(12)] = inst_12006__$1);

(statearr_12113[(13)] = inst_12004__$1);

(statearr_12113[(14)] = inst_12005__$1);

(statearr_12113[(15)] = inst_12007__$1);

return statearr_12113;
})();
var statearr_12114_13332 = state_12063__$1;
(statearr_12114_13332[(2)] = null);

(statearr_12114_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (18))){
var inst_12033 = (state_12063[(2)]);
var state_12063__$1 = state_12063;
var statearr_12115_13333 = state_12063__$1;
(statearr_12115_13333[(2)] = inst_12033);

(statearr_12115_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12064 === (8))){
var inst_12006 = (state_12063[(12)]);
var inst_12007 = (state_12063[(15)]);
var inst_12009 = (inst_12007 < inst_12006);
var inst_12010 = inst_12009;
var state_12063__$1 = state_12063;
if(cljs.core.truth_(inst_12010)){
var statearr_12116_13334 = state_12063__$1;
(statearr_12116_13334[(1)] = (10));

} else {
var statearr_12117_13335 = state_12063__$1;
(statearr_12117_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12118[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12118[(1)] = (1));

return statearr_12118;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12063){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12063);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12119){var ex__10895__auto__ = e12119;
var statearr_12120_13336 = state_12063;
(statearr_12120_13336[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12063[(4)]))){
var statearr_12121_13337 = state_12063;
(statearr_12121_13337[(1)] = cljs.core.first((state_12063[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12063;
state_12063 = G__13338;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12122 = f__10954__auto__();
(statearr_12122[(6)] = c__10953__auto___13289);

return statearr_12122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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
var G__12124 = arguments.length;
switch (G__12124) {
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
var G__12131 = arguments.length;
switch (G__12131) {
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
var c__10953__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12182){
var state_val_12183 = (state_12182[(1)]);
if((state_val_12183 === (7))){
var state_12182__$1 = state_12182;
var statearr_12184_13343 = state_12182__$1;
(statearr_12184_13343[(2)] = null);

(statearr_12184_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (1))){
var state_12182__$1 = state_12182;
var statearr_12185_13344 = state_12182__$1;
(statearr_12185_13344[(2)] = null);

(statearr_12185_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (4))){
var inst_12135 = (state_12182[(7)]);
var inst_12134 = (state_12182[(8)]);
var inst_12137 = (inst_12135 < inst_12134);
var state_12182__$1 = state_12182;
if(cljs.core.truth_(inst_12137)){
var statearr_12189_13345 = state_12182__$1;
(statearr_12189_13345[(1)] = (6));

} else {
var statearr_12190_13346 = state_12182__$1;
(statearr_12190_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (15))){
var inst_12160 = (state_12182[(9)]);
var inst_12165 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12160);
var state_12182__$1 = state_12182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12182__$1,(17),out,inst_12165);
} else {
if((state_val_12183 === (13))){
var inst_12160 = (state_12182[(9)]);
var inst_12160__$1 = (state_12182[(2)]);
var inst_12161 = cljs.core.some(cljs.core.nil_QMARK_,inst_12160__$1);
var state_12182__$1 = (function (){var statearr_12194 = state_12182;
(statearr_12194[(9)] = inst_12160__$1);

return statearr_12194;
})();
if(cljs.core.truth_(inst_12161)){
var statearr_12197_13347 = state_12182__$1;
(statearr_12197_13347[(1)] = (14));

} else {
var statearr_12198_13348 = state_12182__$1;
(statearr_12198_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (6))){
var state_12182__$1 = state_12182;
var statearr_12199_13349 = state_12182__$1;
(statearr_12199_13349[(2)] = null);

(statearr_12199_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (17))){
var inst_12167 = (state_12182[(2)]);
var state_12182__$1 = (function (){var statearr_12206 = state_12182;
(statearr_12206[(10)] = inst_12167);

return statearr_12206;
})();
var statearr_12208_13350 = state_12182__$1;
(statearr_12208_13350[(2)] = null);

(statearr_12208_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (3))){
var inst_12172 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12182__$1,inst_12172);
} else {
if((state_val_12183 === (12))){
var _ = (function (){var statearr_12219 = state_12182;
(statearr_12219[(4)] = cljs.core.rest((state_12182[(4)])));

return statearr_12219;
})();
var state_12182__$1 = state_12182;
var ex12204 = (state_12182__$1[(2)]);
var statearr_12220_13351 = state_12182__$1;
(statearr_12220_13351[(5)] = ex12204);


if((ex12204 instanceof Object)){
var statearr_12221_13352 = state_12182__$1;
(statearr_12221_13352[(1)] = (11));

(statearr_12221_13352[(5)] = null);

} else {
throw ex12204;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (2))){
var inst_12133 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12134 = cnt;
var inst_12135 = (0);
var state_12182__$1 = (function (){var statearr_12223 = state_12182;
(statearr_12223[(7)] = inst_12135);

(statearr_12223[(11)] = inst_12133);

(statearr_12223[(8)] = inst_12134);

return statearr_12223;
})();
var statearr_12224_13353 = state_12182__$1;
(statearr_12224_13353[(2)] = null);

(statearr_12224_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (11))){
var inst_12139 = (state_12182[(2)]);
var inst_12140 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12182__$1 = (function (){var statearr_12226 = state_12182;
(statearr_12226[(12)] = inst_12139);

return statearr_12226;
})();
var statearr_12227_13354 = state_12182__$1;
(statearr_12227_13354[(2)] = inst_12140);

(statearr_12227_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (9))){
var inst_12135 = (state_12182[(7)]);
var _ = (function (){var statearr_12228 = state_12182;
(statearr_12228[(4)] = cljs.core.cons((12),(state_12182[(4)])));

return statearr_12228;
})();
var inst_12146 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12135) : chs__$1.call(null,inst_12135));
var inst_12147 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12135) : done.call(null,inst_12135));
var inst_12148 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12146,inst_12147);
var ___$1 = (function (){var statearr_12231 = state_12182;
(statearr_12231[(4)] = cljs.core.rest((state_12182[(4)])));

return statearr_12231;
})();
var state_12182__$1 = state_12182;
var statearr_12233_13355 = state_12182__$1;
(statearr_12233_13355[(2)] = inst_12148);

(statearr_12233_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (5))){
var inst_12158 = (state_12182[(2)]);
var state_12182__$1 = (function (){var statearr_12234 = state_12182;
(statearr_12234[(13)] = inst_12158);

return statearr_12234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12182__$1,(13),dchan);
} else {
if((state_val_12183 === (14))){
var inst_12163 = cljs.core.async.close_BANG_(out);
var state_12182__$1 = state_12182;
var statearr_12235_13356 = state_12182__$1;
(statearr_12235_13356[(2)] = inst_12163);

(statearr_12235_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (16))){
var inst_12170 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
var statearr_12239_13357 = state_12182__$1;
(statearr_12239_13357[(2)] = inst_12170);

(statearr_12239_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (10))){
var inst_12135 = (state_12182[(7)]);
var inst_12151 = (state_12182[(2)]);
var inst_12152 = (inst_12135 + (1));
var inst_12135__$1 = inst_12152;
var state_12182__$1 = (function (){var statearr_12240 = state_12182;
(statearr_12240[(7)] = inst_12135__$1);

(statearr_12240[(14)] = inst_12151);

return statearr_12240;
})();
var statearr_12241_13358 = state_12182__$1;
(statearr_12241_13358[(2)] = null);

(statearr_12241_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (8))){
var inst_12156 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
var statearr_12242_13359 = state_12182__$1;
(statearr_12242_13359[(2)] = inst_12156);

(statearr_12242_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12243[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12243[(1)] = (1));

return statearr_12243;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12182){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12182);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12244){var ex__10895__auto__ = e12244;
var statearr_12245_13360 = state_12182;
(statearr_12245_13360[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12182[(4)]))){
var statearr_12248_13361 = state_12182;
(statearr_12248_13361[(1)] = cljs.core.first((state_12182[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12182;
state_12182 = G__13362;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12249 = f__10954__auto__();
(statearr_12249[(6)] = c__10953__auto___13342);

return statearr_12249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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
var G__12275 = arguments.length;
switch (G__12275) {
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
var c__10953__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12308){
var state_val_12309 = (state_12308[(1)]);
if((state_val_12309 === (7))){
var inst_12288 = (state_12308[(7)]);
var inst_12287 = (state_12308[(8)]);
var inst_12287__$1 = (state_12308[(2)]);
var inst_12288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12287__$1,(0),null);
var inst_12289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12287__$1,(1),null);
var inst_12290 = (inst_12288__$1 == null);
var state_12308__$1 = (function (){var statearr_12310 = state_12308;
(statearr_12310[(7)] = inst_12288__$1);

(statearr_12310[(9)] = inst_12289);

(statearr_12310[(8)] = inst_12287__$1);

return statearr_12310;
})();
if(cljs.core.truth_(inst_12290)){
var statearr_12311_13365 = state_12308__$1;
(statearr_12311_13365[(1)] = (8));

} else {
var statearr_12316_13366 = state_12308__$1;
(statearr_12316_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (1))){
var inst_12277 = cljs.core.vec(chs);
var inst_12278 = inst_12277;
var state_12308__$1 = (function (){var statearr_12321 = state_12308;
(statearr_12321[(10)] = inst_12278);

return statearr_12321;
})();
var statearr_12322_13367 = state_12308__$1;
(statearr_12322_13367[(2)] = null);

(statearr_12322_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (4))){
var inst_12278 = (state_12308[(10)]);
var state_12308__$1 = state_12308;
return cljs.core.async.ioc_alts_BANG_(state_12308__$1,(7),inst_12278);
} else {
if((state_val_12309 === (6))){
var inst_12304 = (state_12308[(2)]);
var state_12308__$1 = state_12308;
var statearr_12327_13368 = state_12308__$1;
(statearr_12327_13368[(2)] = inst_12304);

(statearr_12327_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (3))){
var inst_12306 = (state_12308[(2)]);
var state_12308__$1 = state_12308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12308__$1,inst_12306);
} else {
if((state_val_12309 === (2))){
var inst_12278 = (state_12308[(10)]);
var inst_12280 = cljs.core.count(inst_12278);
var inst_12281 = (inst_12280 > (0));
var state_12308__$1 = state_12308;
if(cljs.core.truth_(inst_12281)){
var statearr_12329_13369 = state_12308__$1;
(statearr_12329_13369[(1)] = (4));

} else {
var statearr_12330_13370 = state_12308__$1;
(statearr_12330_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (11))){
var inst_12278 = (state_12308[(10)]);
var inst_12297 = (state_12308[(2)]);
var tmp12328 = inst_12278;
var inst_12278__$1 = tmp12328;
var state_12308__$1 = (function (){var statearr_12331 = state_12308;
(statearr_12331[(10)] = inst_12278__$1);

(statearr_12331[(11)] = inst_12297);

return statearr_12331;
})();
var statearr_12332_13371 = state_12308__$1;
(statearr_12332_13371[(2)] = null);

(statearr_12332_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (9))){
var inst_12288 = (state_12308[(7)]);
var state_12308__$1 = state_12308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12308__$1,(11),out,inst_12288);
} else {
if((state_val_12309 === (5))){
var inst_12302 = cljs.core.async.close_BANG_(out);
var state_12308__$1 = state_12308;
var statearr_12342_13372 = state_12308__$1;
(statearr_12342_13372[(2)] = inst_12302);

(statearr_12342_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (10))){
var inst_12300 = (state_12308[(2)]);
var state_12308__$1 = state_12308;
var statearr_12343_13373 = state_12308__$1;
(statearr_12343_13373[(2)] = inst_12300);

(statearr_12343_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12309 === (8))){
var inst_12288 = (state_12308[(7)]);
var inst_12278 = (state_12308[(10)]);
var inst_12289 = (state_12308[(9)]);
var inst_12287 = (state_12308[(8)]);
var inst_12292 = (function (){var cs = inst_12278;
var vec__12283 = inst_12287;
var v = inst_12288;
var c = inst_12289;
return (function (p1__12250_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12250_SHARP_);
});
})();
var inst_12293 = cljs.core.filterv(inst_12292,inst_12278);
var inst_12278__$1 = inst_12293;
var state_12308__$1 = (function (){var statearr_12344 = state_12308;
(statearr_12344[(10)] = inst_12278__$1);

return statearr_12344;
})();
var statearr_12345_13374 = state_12308__$1;
(statearr_12345_13374[(2)] = null);

(statearr_12345_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12346[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12346[(1)] = (1));

return statearr_12346;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12308){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12308);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12347){var ex__10895__auto__ = e12347;
var statearr_12348_13375 = state_12308;
(statearr_12348_13375[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12308[(4)]))){
var statearr_12349_13376 = state_12308;
(statearr_12349_13376[(1)] = cljs.core.first((state_12308[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12308;
state_12308 = G__13377;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12350 = f__10954__auto__();
(statearr_12350[(6)] = c__10953__auto___13364);

return statearr_12350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
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
var G__12352 = arguments.length;
switch (G__12352) {
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
var c__10953__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12396){
var state_val_12397 = (state_12396[(1)]);
if((state_val_12397 === (7))){
var inst_12378 = (state_12396[(7)]);
var inst_12378__$1 = (state_12396[(2)]);
var inst_12379 = (inst_12378__$1 == null);
var inst_12380 = cljs.core.not(inst_12379);
var state_12396__$1 = (function (){var statearr_12398 = state_12396;
(statearr_12398[(7)] = inst_12378__$1);

return statearr_12398;
})();
if(inst_12380){
var statearr_12399_13380 = state_12396__$1;
(statearr_12399_13380[(1)] = (8));

} else {
var statearr_12400_13381 = state_12396__$1;
(statearr_12400_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (1))){
var inst_12373 = (0);
var state_12396__$1 = (function (){var statearr_12401 = state_12396;
(statearr_12401[(8)] = inst_12373);

return statearr_12401;
})();
var statearr_12402_13382 = state_12396__$1;
(statearr_12402_13382[(2)] = null);

(statearr_12402_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (4))){
var state_12396__$1 = state_12396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12396__$1,(7),ch);
} else {
if((state_val_12397 === (6))){
var inst_12391 = (state_12396[(2)]);
var state_12396__$1 = state_12396;
var statearr_12403_13383 = state_12396__$1;
(statearr_12403_13383[(2)] = inst_12391);

(statearr_12403_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (3))){
var inst_12393 = (state_12396[(2)]);
var inst_12394 = cljs.core.async.close_BANG_(out);
var state_12396__$1 = (function (){var statearr_12404 = state_12396;
(statearr_12404[(9)] = inst_12393);

return statearr_12404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12396__$1,inst_12394);
} else {
if((state_val_12397 === (2))){
var inst_12373 = (state_12396[(8)]);
var inst_12375 = (inst_12373 < n);
var state_12396__$1 = state_12396;
if(cljs.core.truth_(inst_12375)){
var statearr_12405_13384 = state_12396__$1;
(statearr_12405_13384[(1)] = (4));

} else {
var statearr_12406_13385 = state_12396__$1;
(statearr_12406_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (11))){
var inst_12373 = (state_12396[(8)]);
var inst_12383 = (state_12396[(2)]);
var inst_12384 = (inst_12373 + (1));
var inst_12373__$1 = inst_12384;
var state_12396__$1 = (function (){var statearr_12407 = state_12396;
(statearr_12407[(8)] = inst_12373__$1);

(statearr_12407[(10)] = inst_12383);

return statearr_12407;
})();
var statearr_12408_13386 = state_12396__$1;
(statearr_12408_13386[(2)] = null);

(statearr_12408_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (9))){
var state_12396__$1 = state_12396;
var statearr_12409_13387 = state_12396__$1;
(statearr_12409_13387[(2)] = null);

(statearr_12409_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (5))){
var state_12396__$1 = state_12396;
var statearr_12410_13388 = state_12396__$1;
(statearr_12410_13388[(2)] = null);

(statearr_12410_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (10))){
var inst_12388 = (state_12396[(2)]);
var state_12396__$1 = state_12396;
var statearr_12411_13389 = state_12396__$1;
(statearr_12411_13389[(2)] = inst_12388);

(statearr_12411_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12397 === (8))){
var inst_12378 = (state_12396[(7)]);
var state_12396__$1 = state_12396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12396__$1,(11),out,inst_12378);
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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12412[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12412[(1)] = (1));

return statearr_12412;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12396){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12396);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12413){var ex__10895__auto__ = e12413;
var statearr_12414_13390 = state_12396;
(statearr_12414_13390[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12396[(4)]))){
var statearr_12415_13391 = state_12396;
(statearr_12415_13391[(1)] = cljs.core.first((state_12396[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12396;
state_12396 = G__13392;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12416 = f__10954__auto__();
(statearr_12416[(6)] = c__10953__auto___13379);

return statearr_12416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12418 = (function (f,ch,meta12419){
this.f = f;
this.ch = ch;
this.meta12419 = meta12419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12420,meta12419__$1){
var self__ = this;
var _12420__$1 = this;
return (new cljs.core.async.t_cljs$core$async12418(self__.f,self__.ch,meta12419__$1));
}));

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12420){
var self__ = this;
var _12420__$1 = this;
return self__.meta12419;
}));

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12429 = (function (f,ch,meta12419,_,fn1,meta12430){
this.f = f;
this.ch = ch;
this.meta12419 = meta12419;
this._ = _;
this.fn1 = fn1;
this.meta12430 = meta12430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12431,meta12430__$1){
var self__ = this;
var _12431__$1 = this;
return (new cljs.core.async.t_cljs$core$async12429(self__.f,self__.ch,self__.meta12419,self__._,self__.fn1,meta12430__$1));
}));

(cljs.core.async.t_cljs$core$async12429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12431){
var self__ = this;
var _12431__$1 = this;
return self__.meta12430;
}));

(cljs.core.async.t_cljs$core$async12429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12417_SHARP_){
var G__12432 = (((p1__12417_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12417_SHARP_) : self__.f.call(null,p1__12417_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12432) : f1.call(null,G__12432));
});
}));

(cljs.core.async.t_cljs$core$async12429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12419","meta12419",1074972391,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12418","cljs.core.async/t_cljs$core$async12418",83262807,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12430","meta12430",-1961197361,null)], null);
}));

(cljs.core.async.t_cljs$core$async12429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12429");

(cljs.core.async.t_cljs$core$async12429.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12429.
 */
cljs.core.async.__GT_t_cljs$core$async12429 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12429(f__$1,ch__$1,meta12419__$1,___$2,fn1__$1,meta12430){
return (new cljs.core.async.t_cljs$core$async12429(f__$1,ch__$1,meta12419__$1,___$2,fn1__$1,meta12430));
});

}

return (new cljs.core.async.t_cljs$core$async12429(self__.f,self__.ch,self__.meta12419,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12433 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12433) : self__.f.call(null,G__12433));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12419","meta12419",1074972391,null)], null);
}));

(cljs.core.async.t_cljs$core$async12418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12418");

(cljs.core.async.t_cljs$core$async12418.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12418.
 */
cljs.core.async.__GT_t_cljs$core$async12418 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12418(f__$1,ch__$1,meta12419){
return (new cljs.core.async.t_cljs$core$async12418(f__$1,ch__$1,meta12419));
});

}

return (new cljs.core.async.t_cljs$core$async12418(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12439 = (function (p,ch,meta12440){
this.p = p;
this.ch = ch;
this.meta12440 = meta12440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12441,meta12440__$1){
var self__ = this;
var _12441__$1 = this;
return (new cljs.core.async.t_cljs$core$async12439(self__.p,self__.ch,meta12440__$1));
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12441){
var self__ = this;
var _12441__$1 = this;
return self__.meta12440;
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12440","meta12440",1990022388,null)], null);
}));

(cljs.core.async.t_cljs$core$async12439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12439");

(cljs.core.async.t_cljs$core$async12439.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12439.
 */
cljs.core.async.__GT_t_cljs$core$async12439 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12439(p__$1,ch__$1,meta12440){
return (new cljs.core.async.t_cljs$core$async12439(p__$1,ch__$1,meta12440));
});

}

return (new cljs.core.async.t_cljs$core$async12439(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12445 = arguments.length;
switch (G__12445) {
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
var c__10953__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12470){
var state_val_12471 = (state_12470[(1)]);
if((state_val_12471 === (7))){
var inst_12466 = (state_12470[(2)]);
var state_12470__$1 = state_12470;
var statearr_12472_13395 = state_12470__$1;
(statearr_12472_13395[(2)] = inst_12466);

(statearr_12472_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (1))){
var state_12470__$1 = state_12470;
var statearr_12473_13396 = state_12470__$1;
(statearr_12473_13396[(2)] = null);

(statearr_12473_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (4))){
var inst_12448 = (state_12470[(7)]);
var inst_12448__$1 = (state_12470[(2)]);
var inst_12449 = (inst_12448__$1 == null);
var state_12470__$1 = (function (){var statearr_12474 = state_12470;
(statearr_12474[(7)] = inst_12448__$1);

return statearr_12474;
})();
if(cljs.core.truth_(inst_12449)){
var statearr_12475_13397 = state_12470__$1;
(statearr_12475_13397[(1)] = (5));

} else {
var statearr_12476_13398 = state_12470__$1;
(statearr_12476_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (6))){
var inst_12448 = (state_12470[(7)]);
var inst_12453 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12448) : p.call(null,inst_12448));
var state_12470__$1 = state_12470;
if(cljs.core.truth_(inst_12453)){
var statearr_12477_13399 = state_12470__$1;
(statearr_12477_13399[(1)] = (8));

} else {
var statearr_12478_13400 = state_12470__$1;
(statearr_12478_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (3))){
var inst_12468 = (state_12470[(2)]);
var state_12470__$1 = state_12470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12470__$1,inst_12468);
} else {
if((state_val_12471 === (2))){
var state_12470__$1 = state_12470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12470__$1,(4),ch);
} else {
if((state_val_12471 === (11))){
var inst_12458 = (state_12470[(2)]);
var state_12470__$1 = state_12470;
var statearr_12479_13401 = state_12470__$1;
(statearr_12479_13401[(2)] = inst_12458);

(statearr_12479_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (9))){
var state_12470__$1 = state_12470;
var statearr_12485_13402 = state_12470__$1;
(statearr_12485_13402[(2)] = null);

(statearr_12485_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (5))){
var inst_12451 = cljs.core.async.close_BANG_(out);
var state_12470__$1 = state_12470;
var statearr_12486_13403 = state_12470__$1;
(statearr_12486_13403[(2)] = inst_12451);

(statearr_12486_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (10))){
var inst_12463 = (state_12470[(2)]);
var state_12470__$1 = (function (){var statearr_12487 = state_12470;
(statearr_12487[(8)] = inst_12463);

return statearr_12487;
})();
var statearr_12488_13404 = state_12470__$1;
(statearr_12488_13404[(2)] = null);

(statearr_12488_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12471 === (8))){
var inst_12448 = (state_12470[(7)]);
var state_12470__$1 = state_12470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12470__$1,(11),out,inst_12448);
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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12489 = [null,null,null,null,null,null,null,null,null];
(statearr_12489[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12489[(1)] = (1));

return statearr_12489;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12470){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12470);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12490){var ex__10895__auto__ = e12490;
var statearr_12491_13405 = state_12470;
(statearr_12491_13405[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12470[(4)]))){
var statearr_12492_13406 = state_12470;
(statearr_12492_13406[(1)] = cljs.core.first((state_12470[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12470;
state_12470 = G__13407;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12493 = f__10954__auto__();
(statearr_12493[(6)] = c__10953__auto___13394);

return statearr_12493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12495 = arguments.length;
switch (G__12495) {
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
var c__10953__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12561){
var state_val_12562 = (state_12561[(1)]);
if((state_val_12562 === (7))){
var inst_12557 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12568_13409 = state_12561__$1;
(statearr_12568_13409[(2)] = inst_12557);

(statearr_12568_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (20))){
var inst_12526 = (state_12561[(7)]);
var inst_12538 = (state_12561[(2)]);
var inst_12539 = cljs.core.next(inst_12526);
var inst_12509 = inst_12539;
var inst_12510 = null;
var inst_12511 = (0);
var inst_12512 = (0);
var state_12561__$1 = (function (){var statearr_12570 = state_12561;
(statearr_12570[(8)] = inst_12538);

(statearr_12570[(9)] = inst_12511);

(statearr_12570[(10)] = inst_12510);

(statearr_12570[(11)] = inst_12512);

(statearr_12570[(12)] = inst_12509);

return statearr_12570;
})();
var statearr_12571_13410 = state_12561__$1;
(statearr_12571_13410[(2)] = null);

(statearr_12571_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (1))){
var state_12561__$1 = state_12561;
var statearr_12572_13411 = state_12561__$1;
(statearr_12572_13411[(2)] = null);

(statearr_12572_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (4))){
var inst_12498 = (state_12561[(13)]);
var inst_12498__$1 = (state_12561[(2)]);
var inst_12499 = (inst_12498__$1 == null);
var state_12561__$1 = (function (){var statearr_12574 = state_12561;
(statearr_12574[(13)] = inst_12498__$1);

return statearr_12574;
})();
if(cljs.core.truth_(inst_12499)){
var statearr_12575_13412 = state_12561__$1;
(statearr_12575_13412[(1)] = (5));

} else {
var statearr_12576_13413 = state_12561__$1;
(statearr_12576_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (15))){
var state_12561__$1 = state_12561;
var statearr_12582_13414 = state_12561__$1;
(statearr_12582_13414[(2)] = null);

(statearr_12582_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (21))){
var state_12561__$1 = state_12561;
var statearr_12585_13415 = state_12561__$1;
(statearr_12585_13415[(2)] = null);

(statearr_12585_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (13))){
var inst_12511 = (state_12561[(9)]);
var inst_12510 = (state_12561[(10)]);
var inst_12512 = (state_12561[(11)]);
var inst_12509 = (state_12561[(12)]);
var inst_12522 = (state_12561[(2)]);
var inst_12523 = (inst_12512 + (1));
var tmp12579 = inst_12511;
var tmp12580 = inst_12510;
var tmp12581 = inst_12509;
var inst_12509__$1 = tmp12581;
var inst_12510__$1 = tmp12580;
var inst_12511__$1 = tmp12579;
var inst_12512__$1 = inst_12523;
var state_12561__$1 = (function (){var statearr_12587 = state_12561;
(statearr_12587[(9)] = inst_12511__$1);

(statearr_12587[(10)] = inst_12510__$1);

(statearr_12587[(11)] = inst_12512__$1);

(statearr_12587[(12)] = inst_12509__$1);

(statearr_12587[(14)] = inst_12522);

return statearr_12587;
})();
var statearr_12588_13416 = state_12561__$1;
(statearr_12588_13416[(2)] = null);

(statearr_12588_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (22))){
var state_12561__$1 = state_12561;
var statearr_12589_13417 = state_12561__$1;
(statearr_12589_13417[(2)] = null);

(statearr_12589_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (6))){
var inst_12498 = (state_12561[(13)]);
var inst_12507 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12498) : f.call(null,inst_12498));
var inst_12508 = cljs.core.seq(inst_12507);
var inst_12509 = inst_12508;
var inst_12510 = null;
var inst_12511 = (0);
var inst_12512 = (0);
var state_12561__$1 = (function (){var statearr_12590 = state_12561;
(statearr_12590[(9)] = inst_12511);

(statearr_12590[(10)] = inst_12510);

(statearr_12590[(11)] = inst_12512);

(statearr_12590[(12)] = inst_12509);

return statearr_12590;
})();
var statearr_12591_13418 = state_12561__$1;
(statearr_12591_13418[(2)] = null);

(statearr_12591_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (17))){
var inst_12526 = (state_12561[(7)]);
var inst_12531 = cljs.core.chunk_first(inst_12526);
var inst_12532 = cljs.core.chunk_rest(inst_12526);
var inst_12533 = cljs.core.count(inst_12531);
var inst_12509 = inst_12532;
var inst_12510 = inst_12531;
var inst_12511 = inst_12533;
var inst_12512 = (0);
var state_12561__$1 = (function (){var statearr_12592 = state_12561;
(statearr_12592[(9)] = inst_12511);

(statearr_12592[(10)] = inst_12510);

(statearr_12592[(11)] = inst_12512);

(statearr_12592[(12)] = inst_12509);

return statearr_12592;
})();
var statearr_12593_13419 = state_12561__$1;
(statearr_12593_13419[(2)] = null);

(statearr_12593_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (3))){
var inst_12559 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12561__$1,inst_12559);
} else {
if((state_val_12562 === (12))){
var inst_12547 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12594_13420 = state_12561__$1;
(statearr_12594_13420[(2)] = inst_12547);

(statearr_12594_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (2))){
var state_12561__$1 = state_12561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12561__$1,(4),in$);
} else {
if((state_val_12562 === (23))){
var inst_12555 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12595_13421 = state_12561__$1;
(statearr_12595_13421[(2)] = inst_12555);

(statearr_12595_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (19))){
var inst_12542 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12596_13422 = state_12561__$1;
(statearr_12596_13422[(2)] = inst_12542);

(statearr_12596_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (11))){
var inst_12526 = (state_12561[(7)]);
var inst_12509 = (state_12561[(12)]);
var inst_12526__$1 = cljs.core.seq(inst_12509);
var state_12561__$1 = (function (){var statearr_12597 = state_12561;
(statearr_12597[(7)] = inst_12526__$1);

return statearr_12597;
})();
if(inst_12526__$1){
var statearr_12598_13423 = state_12561__$1;
(statearr_12598_13423[(1)] = (14));

} else {
var statearr_12599_13424 = state_12561__$1;
(statearr_12599_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (9))){
var inst_12549 = (state_12561[(2)]);
var inst_12550 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12561__$1 = (function (){var statearr_12600 = state_12561;
(statearr_12600[(15)] = inst_12549);

return statearr_12600;
})();
if(cljs.core.truth_(inst_12550)){
var statearr_12601_13425 = state_12561__$1;
(statearr_12601_13425[(1)] = (21));

} else {
var statearr_12602_13426 = state_12561__$1;
(statearr_12602_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (5))){
var inst_12501 = cljs.core.async.close_BANG_(out);
var state_12561__$1 = state_12561;
var statearr_12603_13427 = state_12561__$1;
(statearr_12603_13427[(2)] = inst_12501);

(statearr_12603_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (14))){
var inst_12526 = (state_12561[(7)]);
var inst_12529 = cljs.core.chunked_seq_QMARK_(inst_12526);
var state_12561__$1 = state_12561;
if(inst_12529){
var statearr_12604_13428 = state_12561__$1;
(statearr_12604_13428[(1)] = (17));

} else {
var statearr_12605_13429 = state_12561__$1;
(statearr_12605_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (16))){
var inst_12545 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12606_13430 = state_12561__$1;
(statearr_12606_13430[(2)] = inst_12545);

(statearr_12606_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (10))){
var inst_12510 = (state_12561[(10)]);
var inst_12512 = (state_12561[(11)]);
var inst_12520 = cljs.core._nth(inst_12510,inst_12512);
var state_12561__$1 = state_12561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12561__$1,(13),out,inst_12520);
} else {
if((state_val_12562 === (18))){
var inst_12526 = (state_12561[(7)]);
var inst_12536 = cljs.core.first(inst_12526);
var state_12561__$1 = state_12561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12561__$1,(20),out,inst_12536);
} else {
if((state_val_12562 === (8))){
var inst_12511 = (state_12561[(9)]);
var inst_12512 = (state_12561[(11)]);
var inst_12514 = (inst_12512 < inst_12511);
var inst_12515 = inst_12514;
var state_12561__$1 = state_12561;
if(cljs.core.truth_(inst_12515)){
var statearr_12608_13431 = state_12561__$1;
(statearr_12608_13431[(1)] = (10));

} else {
var statearr_12609_13432 = state_12561__$1;
(statearr_12609_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10892__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10892__auto____0 = (function (){
var statearr_12612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12612[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10892__auto__);

(statearr_12612[(1)] = (1));

return statearr_12612;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10892__auto____1 = (function (state_12561){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12561);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12615){var ex__10895__auto__ = e12615;
var statearr_12617_13433 = state_12561;
(statearr_12617_13433[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12561[(4)]))){
var statearr_12618_13434 = state_12561;
(statearr_12618_13434[(1)] = cljs.core.first((state_12561[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12561;
state_12561 = G__13435;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10892__auto__ = function(state_12561){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10892__auto____1.call(this,state_12561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10892__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10892__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12619 = f__10954__auto__();
(statearr_12619[(6)] = c__10953__auto__);

return statearr_12619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));

return c__10953__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12624 = arguments.length;
switch (G__12624) {
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
var G__12630 = arguments.length;
switch (G__12630) {
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
var G__12632 = arguments.length;
switch (G__12632) {
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
var c__10953__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12656){
var state_val_12657 = (state_12656[(1)]);
if((state_val_12657 === (7))){
var inst_12651 = (state_12656[(2)]);
var state_12656__$1 = state_12656;
var statearr_12658_13440 = state_12656__$1;
(statearr_12658_13440[(2)] = inst_12651);

(statearr_12658_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (1))){
var inst_12633 = null;
var state_12656__$1 = (function (){var statearr_12659 = state_12656;
(statearr_12659[(7)] = inst_12633);

return statearr_12659;
})();
var statearr_12660_13441 = state_12656__$1;
(statearr_12660_13441[(2)] = null);

(statearr_12660_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (4))){
var inst_12636 = (state_12656[(8)]);
var inst_12636__$1 = (state_12656[(2)]);
var inst_12637 = (inst_12636__$1 == null);
var inst_12638 = cljs.core.not(inst_12637);
var state_12656__$1 = (function (){var statearr_12661 = state_12656;
(statearr_12661[(8)] = inst_12636__$1);

return statearr_12661;
})();
if(inst_12638){
var statearr_12664_13442 = state_12656__$1;
(statearr_12664_13442[(1)] = (5));

} else {
var statearr_12665_13443 = state_12656__$1;
(statearr_12665_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (6))){
var state_12656__$1 = state_12656;
var statearr_12667_13444 = state_12656__$1;
(statearr_12667_13444[(2)] = null);

(statearr_12667_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (3))){
var inst_12653 = (state_12656[(2)]);
var inst_12654 = cljs.core.async.close_BANG_(out);
var state_12656__$1 = (function (){var statearr_12668 = state_12656;
(statearr_12668[(9)] = inst_12653);

return statearr_12668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12656__$1,inst_12654);
} else {
if((state_val_12657 === (2))){
var state_12656__$1 = state_12656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12656__$1,(4),ch);
} else {
if((state_val_12657 === (11))){
var inst_12636 = (state_12656[(8)]);
var inst_12645 = (state_12656[(2)]);
var inst_12633 = inst_12636;
var state_12656__$1 = (function (){var statearr_12669 = state_12656;
(statearr_12669[(7)] = inst_12633);

(statearr_12669[(10)] = inst_12645);

return statearr_12669;
})();
var statearr_12670_13445 = state_12656__$1;
(statearr_12670_13445[(2)] = null);

(statearr_12670_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (9))){
var inst_12636 = (state_12656[(8)]);
var state_12656__$1 = state_12656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12656__$1,(11),out,inst_12636);
} else {
if((state_val_12657 === (5))){
var inst_12633 = (state_12656[(7)]);
var inst_12636 = (state_12656[(8)]);
var inst_12640 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12636,inst_12633);
var state_12656__$1 = state_12656;
if(inst_12640){
var statearr_12672_13446 = state_12656__$1;
(statearr_12672_13446[(1)] = (8));

} else {
var statearr_12673_13447 = state_12656__$1;
(statearr_12673_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (10))){
var inst_12648 = (state_12656[(2)]);
var state_12656__$1 = state_12656;
var statearr_12674_13448 = state_12656__$1;
(statearr_12674_13448[(2)] = inst_12648);

(statearr_12674_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12657 === (8))){
var inst_12633 = (state_12656[(7)]);
var tmp12671 = inst_12633;
var inst_12633__$1 = tmp12671;
var state_12656__$1 = (function (){var statearr_12675 = state_12656;
(statearr_12675[(7)] = inst_12633__$1);

return statearr_12675;
})();
var statearr_12676_13449 = state_12656__$1;
(statearr_12676_13449[(2)] = null);

(statearr_12676_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12677 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12677[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12677[(1)] = (1));

return statearr_12677;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12656){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12656);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12678){var ex__10895__auto__ = e12678;
var statearr_12679_13450 = state_12656;
(statearr_12679_13450[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12656[(4)]))){
var statearr_12680_13451 = state_12656;
(statearr_12680_13451[(1)] = cljs.core.first((state_12656[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12656;
state_12656 = G__13452;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12684 = f__10954__auto__();
(statearr_12684[(6)] = c__10953__auto___13439);

return statearr_12684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12688 = arguments.length;
switch (G__12688) {
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
var c__10953__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12726){
var state_val_12727 = (state_12726[(1)]);
if((state_val_12727 === (7))){
var inst_12722 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12728_13455 = state_12726__$1;
(statearr_12728_13455[(2)] = inst_12722);

(statearr_12728_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (1))){
var inst_12689 = (new Array(n));
var inst_12690 = inst_12689;
var inst_12691 = (0);
var state_12726__$1 = (function (){var statearr_12729 = state_12726;
(statearr_12729[(7)] = inst_12691);

(statearr_12729[(8)] = inst_12690);

return statearr_12729;
})();
var statearr_12730_13456 = state_12726__$1;
(statearr_12730_13456[(2)] = null);

(statearr_12730_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (4))){
var inst_12694 = (state_12726[(9)]);
var inst_12694__$1 = (state_12726[(2)]);
var inst_12695 = (inst_12694__$1 == null);
var inst_12696 = cljs.core.not(inst_12695);
var state_12726__$1 = (function (){var statearr_12731 = state_12726;
(statearr_12731[(9)] = inst_12694__$1);

return statearr_12731;
})();
if(inst_12696){
var statearr_12732_13457 = state_12726__$1;
(statearr_12732_13457[(1)] = (5));

} else {
var statearr_12736_13458 = state_12726__$1;
(statearr_12736_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (15))){
var inst_12716 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12739_13459 = state_12726__$1;
(statearr_12739_13459[(2)] = inst_12716);

(statearr_12739_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (13))){
var state_12726__$1 = state_12726;
var statearr_12747_13460 = state_12726__$1;
(statearr_12747_13460[(2)] = null);

(statearr_12747_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (6))){
var inst_12691 = (state_12726[(7)]);
var inst_12712 = (inst_12691 > (0));
var state_12726__$1 = state_12726;
if(cljs.core.truth_(inst_12712)){
var statearr_12752_13461 = state_12726__$1;
(statearr_12752_13461[(1)] = (12));

} else {
var statearr_12757_13462 = state_12726__$1;
(statearr_12757_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (3))){
var inst_12724 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12726__$1,inst_12724);
} else {
if((state_val_12727 === (12))){
var inst_12690 = (state_12726[(8)]);
var inst_12714 = cljs.core.vec(inst_12690);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12726__$1,(15),out,inst_12714);
} else {
if((state_val_12727 === (2))){
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12726__$1,(4),ch);
} else {
if((state_val_12727 === (11))){
var inst_12706 = (state_12726[(2)]);
var inst_12707 = (new Array(n));
var inst_12690 = inst_12707;
var inst_12691 = (0);
var state_12726__$1 = (function (){var statearr_12758 = state_12726;
(statearr_12758[(7)] = inst_12691);

(statearr_12758[(8)] = inst_12690);

(statearr_12758[(10)] = inst_12706);

return statearr_12758;
})();
var statearr_12759_13463 = state_12726__$1;
(statearr_12759_13463[(2)] = null);

(statearr_12759_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (9))){
var inst_12690 = (state_12726[(8)]);
var inst_12704 = cljs.core.vec(inst_12690);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12726__$1,(11),out,inst_12704);
} else {
if((state_val_12727 === (5))){
var inst_12694 = (state_12726[(9)]);
var inst_12699 = (state_12726[(11)]);
var inst_12691 = (state_12726[(7)]);
var inst_12690 = (state_12726[(8)]);
var inst_12698 = (inst_12690[inst_12691] = inst_12694);
var inst_12699__$1 = (inst_12691 + (1));
var inst_12700 = (inst_12699__$1 < n);
var state_12726__$1 = (function (){var statearr_12763 = state_12726;
(statearr_12763[(11)] = inst_12699__$1);

(statearr_12763[(12)] = inst_12698);

return statearr_12763;
})();
if(cljs.core.truth_(inst_12700)){
var statearr_12764_13464 = state_12726__$1;
(statearr_12764_13464[(1)] = (8));

} else {
var statearr_12765_13465 = state_12726__$1;
(statearr_12765_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (14))){
var inst_12719 = (state_12726[(2)]);
var inst_12720 = cljs.core.async.close_BANG_(out);
var state_12726__$1 = (function (){var statearr_12767 = state_12726;
(statearr_12767[(13)] = inst_12719);

return statearr_12767;
})();
var statearr_12768_13466 = state_12726__$1;
(statearr_12768_13466[(2)] = inst_12720);

(statearr_12768_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (10))){
var inst_12710 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12769_13467 = state_12726__$1;
(statearr_12769_13467[(2)] = inst_12710);

(statearr_12769_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (8))){
var inst_12699 = (state_12726[(11)]);
var inst_12690 = (state_12726[(8)]);
var tmp12766 = inst_12690;
var inst_12690__$1 = tmp12766;
var inst_12691 = inst_12699;
var state_12726__$1 = (function (){var statearr_12770 = state_12726;
(statearr_12770[(7)] = inst_12691);

(statearr_12770[(8)] = inst_12690__$1);

return statearr_12770;
})();
var statearr_12771_13468 = state_12726__$1;
(statearr_12771_13468[(2)] = null);

(statearr_12771_13468[(1)] = (2));


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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12772[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12772[(1)] = (1));

return statearr_12772;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12726){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12726);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12773){var ex__10895__auto__ = e12773;
var statearr_12774_13469 = state_12726;
(statearr_12774_13469[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12726[(4)]))){
var statearr_12775_13470 = state_12726;
(statearr_12775_13470[(1)] = cljs.core.first((state_12726[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12726;
state_12726 = G__13471;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12776 = f__10954__auto__();
(statearr_12776[(6)] = c__10953__auto___13454);

return statearr_12776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12778 = arguments.length;
switch (G__12778) {
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
var c__10953__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10954__auto__ = (function (){var switch__10891__auto__ = (function (state_12821){
var state_val_12822 = (state_12821[(1)]);
if((state_val_12822 === (7))){
var inst_12817 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
var statearr_12850_13474 = state_12821__$1;
(statearr_12850_13474[(2)] = inst_12817);

(statearr_12850_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (1))){
var inst_12780 = [];
var inst_12781 = inst_12780;
var inst_12782 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12821__$1 = (function (){var statearr_12851 = state_12821;
(statearr_12851[(7)] = inst_12781);

(statearr_12851[(8)] = inst_12782);

return statearr_12851;
})();
var statearr_12852_13475 = state_12821__$1;
(statearr_12852_13475[(2)] = null);

(statearr_12852_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (4))){
var inst_12785 = (state_12821[(9)]);
var inst_12785__$1 = (state_12821[(2)]);
var inst_12786 = (inst_12785__$1 == null);
var inst_12787 = cljs.core.not(inst_12786);
var state_12821__$1 = (function (){var statearr_12856 = state_12821;
(statearr_12856[(9)] = inst_12785__$1);

return statearr_12856;
})();
if(inst_12787){
var statearr_12857_13476 = state_12821__$1;
(statearr_12857_13476[(1)] = (5));

} else {
var statearr_12858_13477 = state_12821__$1;
(statearr_12858_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (15))){
var inst_12811 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
var statearr_12859_13478 = state_12821__$1;
(statearr_12859_13478[(2)] = inst_12811);

(statearr_12859_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (13))){
var state_12821__$1 = state_12821;
var statearr_12862_13479 = state_12821__$1;
(statearr_12862_13479[(2)] = null);

(statearr_12862_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (6))){
var inst_12781 = (state_12821[(7)]);
var inst_12806 = inst_12781.length;
var inst_12807 = (inst_12806 > (0));
var state_12821__$1 = state_12821;
if(cljs.core.truth_(inst_12807)){
var statearr_12864_13480 = state_12821__$1;
(statearr_12864_13480[(1)] = (12));

} else {
var statearr_12865_13481 = state_12821__$1;
(statearr_12865_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (3))){
var inst_12819 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12821__$1,inst_12819);
} else {
if((state_val_12822 === (12))){
var inst_12781 = (state_12821[(7)]);
var inst_12809 = cljs.core.vec(inst_12781);
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12821__$1,(15),out,inst_12809);
} else {
if((state_val_12822 === (2))){
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12821__$1,(4),ch);
} else {
if((state_val_12822 === (11))){
var inst_12789 = (state_12821[(10)]);
var inst_12785 = (state_12821[(9)]);
var inst_12799 = (state_12821[(2)]);
var inst_12800 = [];
var inst_12801 = inst_12800.push(inst_12785);
var inst_12781 = inst_12800;
var inst_12782 = inst_12789;
var state_12821__$1 = (function (){var statearr_12878 = state_12821;
(statearr_12878[(7)] = inst_12781);

(statearr_12878[(11)] = inst_12799);

(statearr_12878[(8)] = inst_12782);

(statearr_12878[(12)] = inst_12801);

return statearr_12878;
})();
var statearr_12879_13482 = state_12821__$1;
(statearr_12879_13482[(2)] = null);

(statearr_12879_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (9))){
var inst_12781 = (state_12821[(7)]);
var inst_12797 = cljs.core.vec(inst_12781);
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12821__$1,(11),out,inst_12797);
} else {
if((state_val_12822 === (5))){
var inst_12789 = (state_12821[(10)]);
var inst_12782 = (state_12821[(8)]);
var inst_12785 = (state_12821[(9)]);
var inst_12789__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12785) : f.call(null,inst_12785));
var inst_12790 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12789__$1,inst_12782);
var inst_12791 = cljs.core.keyword_identical_QMARK_(inst_12782,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12792 = ((inst_12790) || (inst_12791));
var state_12821__$1 = (function (){var statearr_12880 = state_12821;
(statearr_12880[(10)] = inst_12789__$1);

return statearr_12880;
})();
if(cljs.core.truth_(inst_12792)){
var statearr_12881_13483 = state_12821__$1;
(statearr_12881_13483[(1)] = (8));

} else {
var statearr_12882_13484 = state_12821__$1;
(statearr_12882_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (14))){
var inst_12814 = (state_12821[(2)]);
var inst_12815 = cljs.core.async.close_BANG_(out);
var state_12821__$1 = (function (){var statearr_12884 = state_12821;
(statearr_12884[(13)] = inst_12814);

return statearr_12884;
})();
var statearr_12885_13485 = state_12821__$1;
(statearr_12885_13485[(2)] = inst_12815);

(statearr_12885_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (10))){
var inst_12804 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
var statearr_12886_13486 = state_12821__$1;
(statearr_12886_13486[(2)] = inst_12804);

(statearr_12886_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (8))){
var inst_12781 = (state_12821[(7)]);
var inst_12789 = (state_12821[(10)]);
var inst_12785 = (state_12821[(9)]);
var inst_12794 = inst_12781.push(inst_12785);
var tmp12883 = inst_12781;
var inst_12781__$1 = tmp12883;
var inst_12782 = inst_12789;
var state_12821__$1 = (function (){var statearr_12887 = state_12821;
(statearr_12887[(7)] = inst_12781__$1);

(statearr_12887[(8)] = inst_12782);

(statearr_12887[(14)] = inst_12794);

return statearr_12887;
})();
var statearr_12888_13487 = state_12821__$1;
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
var cljs$core$async$state_machine__10892__auto__ = null;
var cljs$core$async$state_machine__10892__auto____0 = (function (){
var statearr_12889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12889[(0)] = cljs$core$async$state_machine__10892__auto__);

(statearr_12889[(1)] = (1));

return statearr_12889;
});
var cljs$core$async$state_machine__10892__auto____1 = (function (state_12821){
while(true){
var ret_value__10893__auto__ = (function (){try{while(true){
var result__10894__auto__ = switch__10891__auto__(state_12821);
if(cljs.core.keyword_identical_QMARK_(result__10894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10894__auto__;
}
break;
}
}catch (e12890){var ex__10895__auto__ = e12890;
var statearr_12891_13488 = state_12821;
(statearr_12891_13488[(2)] = ex__10895__auto__);


if(cljs.core.seq((state_12821[(4)]))){
var statearr_12892_13489 = state_12821;
(statearr_12892_13489[(1)] = cljs.core.first((state_12821[(4)])));

} else {
throw ex__10895__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12821;
state_12821 = G__13490;
continue;
} else {
return ret_value__10893__auto__;
}
break;
}
});
cljs$core$async$state_machine__10892__auto__ = function(state_12821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10892__auto____1.call(this,state_12821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10892__auto____0;
cljs$core$async$state_machine__10892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10892__auto____1;
return cljs$core$async$state_machine__10892__auto__;
})()
})();
var state__10955__auto__ = (function (){var statearr_12893 = f__10954__auto__();
(statearr_12893[(6)] = c__10953__auto___13473);

return statearr_12893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10955__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
