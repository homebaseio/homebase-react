goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11036 = arguments.length;
switch (G__11036) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11037 = (function (f,blockable,meta11038){
this.f = f;
this.blockable = blockable;
this.meta11038 = meta11038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11039,meta11038__$1){
var self__ = this;
var _11039__$1 = this;
return (new cljs.core.async.t_cljs$core$async11037(self__.f,self__.blockable,meta11038__$1));
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11039){
var self__ = this;
var _11039__$1 = this;
return self__.meta11038;
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11038","meta11038",282322275,null)], null);
}));

(cljs.core.async.t_cljs$core$async11037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11037");

(cljs.core.async.t_cljs$core$async11037.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11037.
 */
cljs.core.async.__GT_t_cljs$core$async11037 = (function cljs$core$async$__GT_t_cljs$core$async11037(f__$1,blockable__$1,meta11038){
return (new cljs.core.async.t_cljs$core$async11037(f__$1,blockable__$1,meta11038));
});

}

return (new cljs.core.async.t_cljs$core$async11037(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11042 = arguments.length;
switch (G__11042) {
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
var G__11044 = arguments.length;
switch (G__11044) {
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
var G__11046 = arguments.length;
switch (G__11046) {
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
var G__11056 = arguments.length;
switch (G__11056) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11058 = (function (flag,meta11059){
this.flag = flag;
this.meta11059 = meta11059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11060,meta11059__$1){
var self__ = this;
var _11060__$1 = this;
return (new cljs.core.async.t_cljs$core$async11058(self__.flag,meta11059__$1));
}));

(cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11060){
var self__ = this;
var _11060__$1 = this;
return self__.meta11059;
}));

(cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11059","meta11059",-1354530946,null)], null);
}));

(cljs.core.async.t_cljs$core$async11058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11058");

(cljs.core.async.t_cljs$core$async11058.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11058.
 */
cljs.core.async.__GT_t_cljs$core$async11058 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11058(flag__$1,meta11059){
return (new cljs.core.async.t_cljs$core$async11058(flag__$1,meta11059));
});

}

return (new cljs.core.async.t_cljs$core$async11058(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11061 = (function (flag,cb,meta11062){
this.flag = flag;
this.cb = cb;
this.meta11062 = meta11062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11063,meta11062__$1){
var self__ = this;
var _11063__$1 = this;
return (new cljs.core.async.t_cljs$core$async11061(self__.flag,self__.cb,meta11062__$1));
}));

(cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11063){
var self__ = this;
var _11063__$1 = this;
return self__.meta11062;
}));

(cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11062","meta11062",-764150062,null)], null);
}));

(cljs.core.async.t_cljs$core$async11061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11061");

(cljs.core.async.t_cljs$core$async11061.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11061.
 */
cljs.core.async.__GT_t_cljs$core$async11061 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11061(flag__$1,cb__$1,meta11062){
return (new cljs.core.async.t_cljs$core$async11061(flag__$1,cb__$1,meta11062));
});

}

return (new cljs.core.async.t_cljs$core$async11061(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11069_SHARP_){
var G__11074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11069_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11074) : fret.call(null,G__11074));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11070_SHARP_){
var G__11076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11070_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11076) : fret.call(null,G__11076));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11081){
var map__11082 = p__11081;
var map__11082__$1 = (((((!((map__11082 == null))))?(((((map__11082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11082):map__11082);
var opts = map__11082__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11079){
var G__11080 = cljs.core.first(seq11079);
var seq11079__$1 = cljs.core.next(seq11079);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11080,seq11079__$1);
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
var c__10976__auto___13012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11148){
var state_val_11149 = (state_11148[(1)]);
if((state_val_11149 === (7))){
var inst_11138 = (state_11148[(2)]);
var state_11148__$1 = state_11148;
var statearr_11152_13013 = state_11148__$1;
(statearr_11152_13013[(2)] = inst_11138);

(statearr_11152_13013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (1))){
var state_11148__$1 = state_11148;
var statearr_11153_13014 = state_11148__$1;
(statearr_11153_13014[(2)] = null);

(statearr_11153_13014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (4))){
var inst_11112 = (state_11148[(7)]);
var inst_11112__$1 = (state_11148[(2)]);
var inst_11113 = (inst_11112__$1 == null);
var state_11148__$1 = (function (){var statearr_11154 = state_11148;
(statearr_11154[(7)] = inst_11112__$1);

return statearr_11154;
})();
if(cljs.core.truth_(inst_11113)){
var statearr_11155_13015 = state_11148__$1;
(statearr_11155_13015[(1)] = (5));

} else {
var statearr_11156_13016 = state_11148__$1;
(statearr_11156_13016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (13))){
var state_11148__$1 = state_11148;
var statearr_11157_13017 = state_11148__$1;
(statearr_11157_13017[(2)] = null);

(statearr_11157_13017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (6))){
var inst_11112 = (state_11148[(7)]);
var state_11148__$1 = state_11148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11148__$1,(11),to,inst_11112);
} else {
if((state_val_11149 === (3))){
var inst_11141 = (state_11148[(2)]);
var state_11148__$1 = state_11148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11148__$1,inst_11141);
} else {
if((state_val_11149 === (12))){
var state_11148__$1 = state_11148;
var statearr_11158_13018 = state_11148__$1;
(statearr_11158_13018[(2)] = null);

(statearr_11158_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (2))){
var state_11148__$1 = state_11148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11148__$1,(4),from);
} else {
if((state_val_11149 === (11))){
var inst_11127 = (state_11148[(2)]);
var state_11148__$1 = state_11148;
if(cljs.core.truth_(inst_11127)){
var statearr_11159_13019 = state_11148__$1;
(statearr_11159_13019[(1)] = (12));

} else {
var statearr_11160_13020 = state_11148__$1;
(statearr_11160_13020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (9))){
var state_11148__$1 = state_11148;
var statearr_11161_13021 = state_11148__$1;
(statearr_11161_13021[(2)] = null);

(statearr_11161_13021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (5))){
var state_11148__$1 = state_11148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11162_13022 = state_11148__$1;
(statearr_11162_13022[(1)] = (8));

} else {
var statearr_11163_13023 = state_11148__$1;
(statearr_11163_13023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (14))){
var inst_11136 = (state_11148[(2)]);
var state_11148__$1 = state_11148;
var statearr_11164_13024 = state_11148__$1;
(statearr_11164_13024[(2)] = inst_11136);

(statearr_11164_13024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (10))){
var inst_11123 = (state_11148[(2)]);
var state_11148__$1 = state_11148;
var statearr_11165_13025 = state_11148__$1;
(statearr_11165_13025[(2)] = inst_11123);

(statearr_11165_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11149 === (8))){
var inst_11120 = cljs.core.async.close_BANG_(to);
var state_11148__$1 = state_11148;
var statearr_11168_13026 = state_11148__$1;
(statearr_11168_13026[(2)] = inst_11120);

(statearr_11168_13026[(1)] = (10));


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
var statearr_11169 = [null,null,null,null,null,null,null,null];
(statearr_11169[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11169[(1)] = (1));

return statearr_11169;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11148){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11148);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11170){var ex__10939__auto__ = e11170;
var statearr_11171_13027 = state_11148;
(statearr_11171_13027[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11148[(4)]))){
var statearr_11172_13028 = state_11148;
(statearr_11172_13028[(1)] = cljs.core.first((state_11148[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_11148;
state_11148 = G__13029;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11173 = f__10977__auto__();
(statearr_11173[(6)] = c__10976__auto___13012);

return statearr_11173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var c__10976__auto___13030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11184){
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
var statearr_11189_13031 = state_11184;
(statearr_11189_13031[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11184[(4)]))){
var statearr_11190_13032 = state_11184;
(statearr_11190_13032[(1)] = cljs.core.first((state_11184[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11184;
state_11184 = G__13033;
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
var state__10978__auto__ = (function (){var statearr_11191 = f__10977__auto__();
(statearr_11191[(6)] = c__10976__auto___13030);

return statearr_11191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11192){
var vec__11193 = p__11192;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11193,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11193,(1),null);
var job = vec__11193;
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
var G__11196_13036 = type;
var G__11196_13037__$1 = (((G__11196_13036 instanceof cljs.core.Keyword))?G__11196_13036.fqn:null);
switch (G__11196_13037__$1) {
case "compute":
var c__10976__auto___13039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10976__auto___13039,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = ((function (__13035,c__10976__auto___13039,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11209){
var state_val_11210 = (state_11209[(1)]);
if((state_val_11210 === (1))){
var state_11209__$1 = state_11209;
var statearr_11213_13040 = state_11209__$1;
(statearr_11213_13040[(2)] = null);

(statearr_11213_13040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (2))){
var state_11209__$1 = state_11209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11209__$1,(4),jobs);
} else {
if((state_val_11210 === (3))){
var inst_11207 = (state_11209[(2)]);
var state_11209__$1 = state_11209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11209__$1,inst_11207);
} else {
if((state_val_11210 === (4))){
var inst_11199 = (state_11209[(2)]);
var inst_11200 = process(inst_11199);
var state_11209__$1 = state_11209;
if(cljs.core.truth_(inst_11200)){
var statearr_11214_13041 = state_11209__$1;
(statearr_11214_13041[(1)] = (5));

} else {
var statearr_11216_13042 = state_11209__$1;
(statearr_11216_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (5))){
var state_11209__$1 = state_11209;
var statearr_11217_13043 = state_11209__$1;
(statearr_11217_13043[(2)] = null);

(statearr_11217_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (6))){
var state_11209__$1 = state_11209;
var statearr_11218_13044 = state_11209__$1;
(statearr_11218_13044[(2)] = null);

(statearr_11218_13044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (7))){
var inst_11205 = (state_11209[(2)]);
var state_11209__$1 = state_11209;
var statearr_11219_13045 = state_11209__$1;
(statearr_11219_13045[(2)] = inst_11205);

(statearr_11219_13045[(1)] = (3));


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
});})(__13035,c__10976__auto___13039,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10935__auto__,c__10976__auto___13039,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11220 = [null,null,null,null,null,null,null];
(statearr_11220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11220[(1)] = (1));

return statearr_11220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11209){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11209);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11221){var ex__10939__auto__ = e11221;
var statearr_11222_13046 = state_11209;
(statearr_11222_13046[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11209[(4)]))){
var statearr_11223_13047 = state_11209;
(statearr_11223_13047[(1)] = cljs.core.first((state_11209[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13049 = state_11209;
state_11209 = G__13049;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
;})(__13035,switch__10935__auto__,c__10976__auto___13039,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10978__auto__ = (function (){var statearr_11224 = f__10977__auto__();
(statearr_11224[(6)] = c__10976__auto___13039);

return statearr_11224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
});})(__13035,c__10976__auto___13039,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
case "async":
var c__10976__auto___13050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10976__auto___13050,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = ((function (__13035,c__10976__auto___13050,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11237){
var state_val_11238 = (state_11237[(1)]);
if((state_val_11238 === (1))){
var state_11237__$1 = state_11237;
var statearr_11239_13051 = state_11237__$1;
(statearr_11239_13051[(2)] = null);

(statearr_11239_13051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (2))){
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11237__$1,(4),jobs);
} else {
if((state_val_11238 === (3))){
var inst_11235 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11237__$1,inst_11235);
} else {
if((state_val_11238 === (4))){
var inst_11227 = (state_11237[(2)]);
var inst_11228 = async(inst_11227);
var state_11237__$1 = state_11237;
if(cljs.core.truth_(inst_11228)){
var statearr_11240_13052 = state_11237__$1;
(statearr_11240_13052[(1)] = (5));

} else {
var statearr_11241_13053 = state_11237__$1;
(statearr_11241_13053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (5))){
var state_11237__$1 = state_11237;
var statearr_11242_13060 = state_11237__$1;
(statearr_11242_13060[(2)] = null);

(statearr_11242_13060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (6))){
var state_11237__$1 = state_11237;
var statearr_11243_13062 = state_11237__$1;
(statearr_11243_13062[(2)] = null);

(statearr_11243_13062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (7))){
var inst_11233 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11244_13063 = state_11237__$1;
(statearr_11244_13063[(2)] = inst_11233);

(statearr_11244_13063[(1)] = (3));


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
});})(__13035,c__10976__auto___13050,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10935__auto__,c__10976__auto___13050,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11245 = [null,null,null,null,null,null,null];
(statearr_11245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11245[(1)] = (1));

return statearr_11245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11237){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11237);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11247){var ex__10939__auto__ = e11247;
var statearr_11248_13064 = state_11237;
(statearr_11248_13064[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11237[(4)]))){
var statearr_11249_13065 = state_11237;
(statearr_11249_13065[(1)] = cljs.core.first((state_11237[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13066 = state_11237;
state_11237 = G__13066;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
;})(__13035,switch__10935__auto__,c__10976__auto___13050,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10978__auto__ = (function (){var statearr_11250 = f__10977__auto__();
(statearr_11250[(6)] = c__10976__auto___13050);

return statearr_11250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
});})(__13035,c__10976__auto___13050,G__11196_13036,G__11196_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11196_13037__$1)].join('')));

}

var G__13067 = (__13035 + (1));
__13035 = G__13067;
continue;
} else {
}
break;
}

var c__10976__auto___13068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11272){
var state_val_11273 = (state_11272[(1)]);
if((state_val_11273 === (7))){
var inst_11268 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
var statearr_11276_13069 = state_11272__$1;
(statearr_11276_13069[(2)] = inst_11268);

(statearr_11276_13069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (1))){
var state_11272__$1 = state_11272;
var statearr_11277_13070 = state_11272__$1;
(statearr_11277_13070[(2)] = null);

(statearr_11277_13070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (4))){
var inst_11253 = (state_11272[(7)]);
var inst_11253__$1 = (state_11272[(2)]);
var inst_11254 = (inst_11253__$1 == null);
var state_11272__$1 = (function (){var statearr_11278 = state_11272;
(statearr_11278[(7)] = inst_11253__$1);

return statearr_11278;
})();
if(cljs.core.truth_(inst_11254)){
var statearr_11279_13071 = state_11272__$1;
(statearr_11279_13071[(1)] = (5));

} else {
var statearr_11280_13072 = state_11272__$1;
(statearr_11280_13072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (6))){
var inst_11253 = (state_11272[(7)]);
var inst_11258 = (state_11272[(8)]);
var inst_11258__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11259 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11260 = [inst_11253,inst_11258__$1];
var inst_11261 = (new cljs.core.PersistentVector(null,2,(5),inst_11259,inst_11260,null));
var state_11272__$1 = (function (){var statearr_11281 = state_11272;
(statearr_11281[(8)] = inst_11258__$1);

return statearr_11281;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11272__$1,(8),jobs,inst_11261);
} else {
if((state_val_11273 === (3))){
var inst_11270 = (state_11272[(2)]);
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11272__$1,inst_11270);
} else {
if((state_val_11273 === (2))){
var state_11272__$1 = state_11272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11272__$1,(4),from);
} else {
if((state_val_11273 === (9))){
var inst_11265 = (state_11272[(2)]);
var state_11272__$1 = (function (){var statearr_11282 = state_11272;
(statearr_11282[(9)] = inst_11265);

return statearr_11282;
})();
var statearr_11283_13075 = state_11272__$1;
(statearr_11283_13075[(2)] = null);

(statearr_11283_13075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (5))){
var inst_11256 = cljs.core.async.close_BANG_(jobs);
var state_11272__$1 = state_11272;
var statearr_11284_13076 = state_11272__$1;
(statearr_11284_13076[(2)] = inst_11256);

(statearr_11284_13076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11273 === (8))){
var inst_11258 = (state_11272[(8)]);
var inst_11263 = (state_11272[(2)]);
var state_11272__$1 = (function (){var statearr_11285 = state_11272;
(statearr_11285[(10)] = inst_11263);

return statearr_11285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11272__$1,(9),results,inst_11258);
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
var statearr_11286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11286[(1)] = (1));

return statearr_11286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11272){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11272);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11287){var ex__10939__auto__ = e11287;
var statearr_11288_13077 = state_11272;
(statearr_11288_13077[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11272[(4)]))){
var statearr_11289_13078 = state_11272;
(statearr_11289_13078[(1)] = cljs.core.first((state_11272[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13080 = state_11272;
state_11272 = G__13080;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11290 = f__10977__auto__();
(statearr_11290[(6)] = c__10976__auto___13068);

return statearr_11290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11328){
var state_val_11329 = (state_11328[(1)]);
if((state_val_11329 === (7))){
var inst_11324 = (state_11328[(2)]);
var state_11328__$1 = state_11328;
var statearr_11330_13089 = state_11328__$1;
(statearr_11330_13089[(2)] = inst_11324);

(statearr_11330_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (20))){
var state_11328__$1 = state_11328;
var statearr_11331_13095 = state_11328__$1;
(statearr_11331_13095[(2)] = null);

(statearr_11331_13095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (1))){
var state_11328__$1 = state_11328;
var statearr_11332_13096 = state_11328__$1;
(statearr_11332_13096[(2)] = null);

(statearr_11332_13096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (4))){
var inst_11293 = (state_11328[(7)]);
var inst_11293__$1 = (state_11328[(2)]);
var inst_11294 = (inst_11293__$1 == null);
var state_11328__$1 = (function (){var statearr_11333 = state_11328;
(statearr_11333[(7)] = inst_11293__$1);

return statearr_11333;
})();
if(cljs.core.truth_(inst_11294)){
var statearr_11334_13097 = state_11328__$1;
(statearr_11334_13097[(1)] = (5));

} else {
var statearr_11335_13098 = state_11328__$1;
(statearr_11335_13098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (15))){
var inst_11306 = (state_11328[(8)]);
var state_11328__$1 = state_11328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11328__$1,(18),to,inst_11306);
} else {
if((state_val_11329 === (21))){
var inst_11319 = (state_11328[(2)]);
var state_11328__$1 = state_11328;
var statearr_11342_13099 = state_11328__$1;
(statearr_11342_13099[(2)] = inst_11319);

(statearr_11342_13099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (13))){
var inst_11321 = (state_11328[(2)]);
var state_11328__$1 = (function (){var statearr_11343 = state_11328;
(statearr_11343[(9)] = inst_11321);

return statearr_11343;
})();
var statearr_11344_13100 = state_11328__$1;
(statearr_11344_13100[(2)] = null);

(statearr_11344_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (6))){
var inst_11293 = (state_11328[(7)]);
var state_11328__$1 = state_11328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11328__$1,(11),inst_11293);
} else {
if((state_val_11329 === (17))){
var inst_11314 = (state_11328[(2)]);
var state_11328__$1 = state_11328;
if(cljs.core.truth_(inst_11314)){
var statearr_11345_13101 = state_11328__$1;
(statearr_11345_13101[(1)] = (19));

} else {
var statearr_11346_13102 = state_11328__$1;
(statearr_11346_13102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (3))){
var inst_11326 = (state_11328[(2)]);
var state_11328__$1 = state_11328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11328__$1,inst_11326);
} else {
if((state_val_11329 === (12))){
var inst_11303 = (state_11328[(10)]);
var state_11328__$1 = state_11328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11328__$1,(14),inst_11303);
} else {
if((state_val_11329 === (2))){
var state_11328__$1 = state_11328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11328__$1,(4),results);
} else {
if((state_val_11329 === (19))){
var state_11328__$1 = state_11328;
var statearr_11351_13103 = state_11328__$1;
(statearr_11351_13103[(2)] = null);

(statearr_11351_13103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (11))){
var inst_11303 = (state_11328[(2)]);
var state_11328__$1 = (function (){var statearr_11352 = state_11328;
(statearr_11352[(10)] = inst_11303);

return statearr_11352;
})();
var statearr_11353_13104 = state_11328__$1;
(statearr_11353_13104[(2)] = null);

(statearr_11353_13104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (9))){
var state_11328__$1 = state_11328;
var statearr_11354_13105 = state_11328__$1;
(statearr_11354_13105[(2)] = null);

(statearr_11354_13105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (5))){
var state_11328__$1 = state_11328;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11355_13106 = state_11328__$1;
(statearr_11355_13106[(1)] = (8));

} else {
var statearr_11356_13107 = state_11328__$1;
(statearr_11356_13107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (14))){
var inst_11306 = (state_11328[(8)]);
var inst_11306__$1 = (state_11328[(2)]);
var inst_11307 = (inst_11306__$1 == null);
var inst_11308 = cljs.core.not(inst_11307);
var state_11328__$1 = (function (){var statearr_11357 = state_11328;
(statearr_11357[(8)] = inst_11306__$1);

return statearr_11357;
})();
if(inst_11308){
var statearr_11358_13108 = state_11328__$1;
(statearr_11358_13108[(1)] = (15));

} else {
var statearr_11359_13109 = state_11328__$1;
(statearr_11359_13109[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (16))){
var state_11328__$1 = state_11328;
var statearr_11360_13110 = state_11328__$1;
(statearr_11360_13110[(2)] = false);

(statearr_11360_13110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (10))){
var inst_11300 = (state_11328[(2)]);
var state_11328__$1 = state_11328;
var statearr_11361_13111 = state_11328__$1;
(statearr_11361_13111[(2)] = inst_11300);

(statearr_11361_13111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (18))){
var inst_11311 = (state_11328[(2)]);
var state_11328__$1 = state_11328;
var statearr_11362_13112 = state_11328__$1;
(statearr_11362_13112[(2)] = inst_11311);

(statearr_11362_13112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11329 === (8))){
var inst_11297 = cljs.core.async.close_BANG_(to);
var state_11328__$1 = state_11328;
var statearr_11371_13113 = state_11328__$1;
(statearr_11371_13113[(2)] = inst_11297);

(statearr_11371_13113[(1)] = (10));


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
var statearr_11372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11372[(1)] = (1));

return statearr_11372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11328){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11328);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11373){var ex__10939__auto__ = e11373;
var statearr_11374_13114 = state_11328;
(statearr_11374_13114[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11328[(4)]))){
var statearr_11375_13115 = state_11328;
(statearr_11375_13115[(1)] = cljs.core.first((state_11328[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13116 = state_11328;
state_11328 = G__13116;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11376 = f__10977__auto__();
(statearr_11376[(6)] = c__10976__auto__);

return statearr_11376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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
var G__11378 = arguments.length;
switch (G__11378) {
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
var G__11380 = arguments.length;
switch (G__11380) {
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
var G__11382 = arguments.length;
switch (G__11382) {
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
var c__10976__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11412){
var state_val_11413 = (state_11412[(1)]);
if((state_val_11413 === (7))){
var inst_11408 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11414_13125 = state_11412__$1;
(statearr_11414_13125[(2)] = inst_11408);

(statearr_11414_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (1))){
var state_11412__$1 = state_11412;
var statearr_11415_13126 = state_11412__$1;
(statearr_11415_13126[(2)] = null);

(statearr_11415_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (4))){
var inst_11385 = (state_11412[(7)]);
var inst_11385__$1 = (state_11412[(2)]);
var inst_11386 = (inst_11385__$1 == null);
var state_11412__$1 = (function (){var statearr_11416 = state_11412;
(statearr_11416[(7)] = inst_11385__$1);

return statearr_11416;
})();
if(cljs.core.truth_(inst_11386)){
var statearr_11417_13127 = state_11412__$1;
(statearr_11417_13127[(1)] = (5));

} else {
var statearr_11418_13128 = state_11412__$1;
(statearr_11418_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (13))){
var state_11412__$1 = state_11412;
var statearr_11419_13129 = state_11412__$1;
(statearr_11419_13129[(2)] = null);

(statearr_11419_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (6))){
var inst_11385 = (state_11412[(7)]);
var inst_11395 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11385) : p.call(null,inst_11385));
var state_11412__$1 = state_11412;
if(cljs.core.truth_(inst_11395)){
var statearr_11420_13130 = state_11412__$1;
(statearr_11420_13130[(1)] = (9));

} else {
var statearr_11421_13131 = state_11412__$1;
(statearr_11421_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (3))){
var inst_11410 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11412__$1,inst_11410);
} else {
if((state_val_11413 === (12))){
var state_11412__$1 = state_11412;
var statearr_11422_13132 = state_11412__$1;
(statearr_11422_13132[(2)] = null);

(statearr_11422_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (2))){
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11412__$1,(4),ch);
} else {
if((state_val_11413 === (11))){
var inst_11385 = (state_11412[(7)]);
var inst_11399 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11412__$1,(8),inst_11399,inst_11385);
} else {
if((state_val_11413 === (9))){
var state_11412__$1 = state_11412;
var statearr_11424_13133 = state_11412__$1;
(statearr_11424_13133[(2)] = tc);

(statearr_11424_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (5))){
var inst_11388 = cljs.core.async.close_BANG_(tc);
var inst_11389 = cljs.core.async.close_BANG_(fc);
var state_11412__$1 = (function (){var statearr_11425 = state_11412;
(statearr_11425[(8)] = inst_11388);

return statearr_11425;
})();
var statearr_11426_13134 = state_11412__$1;
(statearr_11426_13134[(2)] = inst_11389);

(statearr_11426_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (14))){
var inst_11406 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11427_13135 = state_11412__$1;
(statearr_11427_13135[(2)] = inst_11406);

(statearr_11427_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (10))){
var state_11412__$1 = state_11412;
var statearr_11428_13136 = state_11412__$1;
(statearr_11428_13136[(2)] = fc);

(statearr_11428_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (8))){
var inst_11401 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
if(cljs.core.truth_(inst_11401)){
var statearr_11429_13137 = state_11412__$1;
(statearr_11429_13137[(1)] = (12));

} else {
var statearr_11430_13138 = state_11412__$1;
(statearr_11430_13138[(1)] = (13));

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
var statearr_11431 = [null,null,null,null,null,null,null,null,null];
(statearr_11431[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11431[(1)] = (1));

return statearr_11431;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11412){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11412);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11432){var ex__10939__auto__ = e11432;
var statearr_11433_13139 = state_11412;
(statearr_11433_13139[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11412[(4)]))){
var statearr_11434_13140 = state_11412;
(statearr_11434_13140[(1)] = cljs.core.first((state_11412[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11412;
state_11412 = G__13141;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11435 = f__10977__auto__();
(statearr_11435[(6)] = c__10976__auto___13124);

return statearr_11435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11457){
var state_val_11458 = (state_11457[(1)]);
if((state_val_11458 === (7))){
var inst_11453 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
var statearr_11459_13142 = state_11457__$1;
(statearr_11459_13142[(2)] = inst_11453);

(statearr_11459_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (1))){
var inst_11436 = init;
var inst_11437 = inst_11436;
var state_11457__$1 = (function (){var statearr_11460 = state_11457;
(statearr_11460[(7)] = inst_11437);

return statearr_11460;
})();
var statearr_11461_13143 = state_11457__$1;
(statearr_11461_13143[(2)] = null);

(statearr_11461_13143[(1)] = (2));


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
var statearr_11463_13144 = state_11457__$1;
(statearr_11463_13144[(1)] = (5));

} else {
var statearr_11464_13145 = state_11457__$1;
(statearr_11464_13145[(1)] = (6));

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
var statearr_11466_13146 = state_11457__$1;
(statearr_11466_13146[(1)] = (8));

} else {
var statearr_11467_13147 = state_11457__$1;
(statearr_11467_13147[(1)] = (9));

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
var state_11457__$1 = (function (){var statearr_11468 = state_11457;
(statearr_11468[(7)] = inst_11437);

return statearr_11468;
})();
var statearr_11469_13148 = state_11457__$1;
(statearr_11469_13148[(2)] = null);

(statearr_11469_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (5))){
var inst_11437 = (state_11457[(7)]);
var state_11457__$1 = state_11457;
var statearr_11473_13149 = state_11457__$1;
(statearr_11473_13149[(2)] = inst_11437);

(statearr_11473_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (10))){
var inst_11451 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
var statearr_11474_13150 = state_11457__$1;
(statearr_11474_13150[(2)] = inst_11451);

(statearr_11474_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (8))){
var inst_11444 = (state_11457[(9)]);
var inst_11447 = cljs.core.deref(inst_11444);
var state_11457__$1 = state_11457;
var statearr_11475_13151 = state_11457__$1;
(statearr_11475_13151[(2)] = inst_11447);

(statearr_11475_13151[(1)] = (10));


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
var statearr_11476 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11476[(0)] = cljs$core$async$reduce_$_state_machine__10936__auto__);

(statearr_11476[(1)] = (1));

return statearr_11476;
});
var cljs$core$async$reduce_$_state_machine__10936__auto____1 = (function (state_11457){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11457);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11477){var ex__10939__auto__ = e11477;
var statearr_11478_13152 = state_11457;
(statearr_11478_13152[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11457[(4)]))){
var statearr_11479_13153 = state_11457;
(statearr_11479_13153[(1)] = cljs.core.first((state_11457[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11457;
state_11457 = G__13154;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10936__auto__ = function(state_11457){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10936__auto____1.call(this,state_11457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10936__auto____0;
cljs$core$async$reduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10936__auto____1;
return cljs$core$async$reduce_$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11480 = f__10977__auto__();
(statearr_11480[(6)] = c__10976__auto__);

return statearr_11480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11491){
var state_val_11492 = (state_11491[(1)]);
if((state_val_11492 === (1))){
var inst_11481 = cljs.core.async.reduce(f__$1,init,ch);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11491__$1,(2),inst_11481);
} else {
if((state_val_11492 === (2))){
var inst_11483 = (state_11491[(2)]);
var inst_11484 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11483) : f__$1.call(null,inst_11483));
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11491__$1,inst_11484);
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
var statearr_11495_13155 = state_11491;
(statearr_11495_13155[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11491[(4)]))){
var statearr_11499_13156 = state_11491;
(statearr_11499_13156[(1)] = cljs.core.first((state_11491[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11491;
state_11491 = G__13157;
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
var state__10978__auto__ = (function (){var statearr_11500 = f__10977__auto__();
(statearr_11500[(6)] = c__10976__auto__);

return statearr_11500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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
var G__11502 = arguments.length;
switch (G__11502) {
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
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11539){
var state_val_11540 = (state_11539[(1)]);
if((state_val_11540 === (7))){
var inst_11521 = (state_11539[(2)]);
var state_11539__$1 = state_11539;
var statearr_11541_13159 = state_11539__$1;
(statearr_11541_13159[(2)] = inst_11521);

(statearr_11541_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (1))){
var inst_11515 = cljs.core.seq(coll);
var inst_11516 = inst_11515;
var state_11539__$1 = (function (){var statearr_11542 = state_11539;
(statearr_11542[(7)] = inst_11516);

return statearr_11542;
})();
var statearr_11543_13160 = state_11539__$1;
(statearr_11543_13160[(2)] = null);

(statearr_11543_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (4))){
var inst_11516 = (state_11539[(7)]);
var inst_11519 = cljs.core.first(inst_11516);
var state_11539__$1 = state_11539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11539__$1,(7),ch,inst_11519);
} else {
if((state_val_11540 === (13))){
var inst_11533 = (state_11539[(2)]);
var state_11539__$1 = state_11539;
var statearr_11544_13161 = state_11539__$1;
(statearr_11544_13161[(2)] = inst_11533);

(statearr_11544_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (6))){
var inst_11524 = (state_11539[(2)]);
var state_11539__$1 = state_11539;
if(cljs.core.truth_(inst_11524)){
var statearr_11545_13162 = state_11539__$1;
(statearr_11545_13162[(1)] = (8));

} else {
var statearr_11546_13163 = state_11539__$1;
(statearr_11546_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (3))){
var inst_11537 = (state_11539[(2)]);
var state_11539__$1 = state_11539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11539__$1,inst_11537);
} else {
if((state_val_11540 === (12))){
var state_11539__$1 = state_11539;
var statearr_11547_13164 = state_11539__$1;
(statearr_11547_13164[(2)] = null);

(statearr_11547_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (2))){
var inst_11516 = (state_11539[(7)]);
var state_11539__$1 = state_11539;
if(cljs.core.truth_(inst_11516)){
var statearr_11548_13165 = state_11539__$1;
(statearr_11548_13165[(1)] = (4));

} else {
var statearr_11549_13166 = state_11539__$1;
(statearr_11549_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (11))){
var inst_11530 = cljs.core.async.close_BANG_(ch);
var state_11539__$1 = state_11539;
var statearr_11550_13167 = state_11539__$1;
(statearr_11550_13167[(2)] = inst_11530);

(statearr_11550_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (9))){
var state_11539__$1 = state_11539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11551_13168 = state_11539__$1;
(statearr_11551_13168[(1)] = (11));

} else {
var statearr_11552_13169 = state_11539__$1;
(statearr_11552_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (5))){
var inst_11516 = (state_11539[(7)]);
var state_11539__$1 = state_11539;
var statearr_11562_13170 = state_11539__$1;
(statearr_11562_13170[(2)] = inst_11516);

(statearr_11562_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (10))){
var inst_11535 = (state_11539[(2)]);
var state_11539__$1 = state_11539;
var statearr_11565_13171 = state_11539__$1;
(statearr_11565_13171[(2)] = inst_11535);

(statearr_11565_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11540 === (8))){
var inst_11516 = (state_11539[(7)]);
var inst_11526 = cljs.core.next(inst_11516);
var inst_11516__$1 = inst_11526;
var state_11539__$1 = (function (){var statearr_11566 = state_11539;
(statearr_11566[(7)] = inst_11516__$1);

return statearr_11566;
})();
var statearr_11567_13172 = state_11539__$1;
(statearr_11567_13172[(2)] = null);

(statearr_11567_13172[(1)] = (2));


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
var statearr_11568 = [null,null,null,null,null,null,null,null];
(statearr_11568[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11568[(1)] = (1));

return statearr_11568;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11539){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11539);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11569){var ex__10939__auto__ = e11569;
var statearr_11570_13173 = state_11539;
(statearr_11570_13173[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11539[(4)]))){
var statearr_11571_13174 = state_11539;
(statearr_11571_13174[(1)] = cljs.core.first((state_11539[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11539;
state_11539 = G__13175;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11572 = f__10977__auto__();
(statearr_11572[(6)] = c__10976__auto__);

return statearr_11572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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
var G__11574 = arguments.length;
switch (G__11574) {
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
var c__10976__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11719){
var state_val_11720 = (state_11719[(1)]);
if((state_val_11720 === (7))){
var inst_11715 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11721_13182 = state_11719__$1;
(statearr_11721_13182[(2)] = inst_11715);

(statearr_11721_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (20))){
var inst_11619 = (state_11719[(7)]);
var inst_11632 = cljs.core.first(inst_11619);
var inst_11633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11632,(0),null);
var inst_11634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11632,(1),null);
var state_11719__$1 = (function (){var statearr_11722 = state_11719;
(statearr_11722[(8)] = inst_11633);

return statearr_11722;
})();
if(cljs.core.truth_(inst_11634)){
var statearr_11723_13183 = state_11719__$1;
(statearr_11723_13183[(1)] = (22));

} else {
var statearr_11724_13184 = state_11719__$1;
(statearr_11724_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (27))){
var inst_11662 = (state_11719[(9)]);
var inst_11669 = (state_11719[(10)]);
var inst_11664 = (state_11719[(11)]);
var inst_11588 = (state_11719[(12)]);
var inst_11669__$1 = cljs.core._nth(inst_11662,inst_11664);
var inst_11670 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11669__$1,inst_11588,done);
var state_11719__$1 = (function (){var statearr_11725 = state_11719;
(statearr_11725[(10)] = inst_11669__$1);

return statearr_11725;
})();
if(cljs.core.truth_(inst_11670)){
var statearr_11726_13185 = state_11719__$1;
(statearr_11726_13185[(1)] = (30));

} else {
var statearr_11727_13186 = state_11719__$1;
(statearr_11727_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (1))){
var state_11719__$1 = state_11719;
var statearr_11728_13187 = state_11719__$1;
(statearr_11728_13187[(2)] = null);

(statearr_11728_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (24))){
var inst_11619 = (state_11719[(7)]);
var inst_11639 = (state_11719[(2)]);
var inst_11640 = cljs.core.next(inst_11619);
var inst_11597 = inst_11640;
var inst_11598 = null;
var inst_11599 = (0);
var inst_11600 = (0);
var state_11719__$1 = (function (){var statearr_11732 = state_11719;
(statearr_11732[(13)] = inst_11600);

(statearr_11732[(14)] = inst_11598);

(statearr_11732[(15)] = inst_11597);

(statearr_11732[(16)] = inst_11639);

(statearr_11732[(17)] = inst_11599);

return statearr_11732;
})();
var statearr_11733_13188 = state_11719__$1;
(statearr_11733_13188[(2)] = null);

(statearr_11733_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (39))){
var state_11719__$1 = state_11719;
var statearr_11737_13189 = state_11719__$1;
(statearr_11737_13189[(2)] = null);

(statearr_11737_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (4))){
var inst_11588 = (state_11719[(12)]);
var inst_11588__$1 = (state_11719[(2)]);
var inst_11589 = (inst_11588__$1 == null);
var state_11719__$1 = (function (){var statearr_11738 = state_11719;
(statearr_11738[(12)] = inst_11588__$1);

return statearr_11738;
})();
if(cljs.core.truth_(inst_11589)){
var statearr_11739_13190 = state_11719__$1;
(statearr_11739_13190[(1)] = (5));

} else {
var statearr_11740_13191 = state_11719__$1;
(statearr_11740_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (15))){
var inst_11600 = (state_11719[(13)]);
var inst_11598 = (state_11719[(14)]);
var inst_11597 = (state_11719[(15)]);
var inst_11599 = (state_11719[(17)]);
var inst_11615 = (state_11719[(2)]);
var inst_11616 = (inst_11600 + (1));
var tmp11734 = inst_11598;
var tmp11735 = inst_11597;
var tmp11736 = inst_11599;
var inst_11597__$1 = tmp11735;
var inst_11598__$1 = tmp11734;
var inst_11599__$1 = tmp11736;
var inst_11600__$1 = inst_11616;
var state_11719__$1 = (function (){var statearr_11741 = state_11719;
(statearr_11741[(13)] = inst_11600__$1);

(statearr_11741[(18)] = inst_11615);

(statearr_11741[(14)] = inst_11598__$1);

(statearr_11741[(15)] = inst_11597__$1);

(statearr_11741[(17)] = inst_11599__$1);

return statearr_11741;
})();
var statearr_11742_13192 = state_11719__$1;
(statearr_11742_13192[(2)] = null);

(statearr_11742_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (21))){
var inst_11643 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11746_13193 = state_11719__$1;
(statearr_11746_13193[(2)] = inst_11643);

(statearr_11746_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (31))){
var inst_11669 = (state_11719[(10)]);
var inst_11673 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11669);
var state_11719__$1 = state_11719;
var statearr_11747_13194 = state_11719__$1;
(statearr_11747_13194[(2)] = inst_11673);

(statearr_11747_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (32))){
var inst_11662 = (state_11719[(9)]);
var inst_11664 = (state_11719[(11)]);
var inst_11663 = (state_11719[(19)]);
var inst_11661 = (state_11719[(20)]);
var inst_11675 = (state_11719[(2)]);
var inst_11676 = (inst_11664 + (1));
var tmp11743 = inst_11662;
var tmp11744 = inst_11663;
var tmp11745 = inst_11661;
var inst_11661__$1 = tmp11745;
var inst_11662__$1 = tmp11743;
var inst_11663__$1 = tmp11744;
var inst_11664__$1 = inst_11676;
var state_11719__$1 = (function (){var statearr_11748 = state_11719;
(statearr_11748[(9)] = inst_11662__$1);

(statearr_11748[(21)] = inst_11675);

(statearr_11748[(11)] = inst_11664__$1);

(statearr_11748[(19)] = inst_11663__$1);

(statearr_11748[(20)] = inst_11661__$1);

return statearr_11748;
})();
var statearr_11749_13195 = state_11719__$1;
(statearr_11749_13195[(2)] = null);

(statearr_11749_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (40))){
var inst_11688 = (state_11719[(22)]);
var inst_11692 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11688);
var state_11719__$1 = state_11719;
var statearr_11750_13196 = state_11719__$1;
(statearr_11750_13196[(2)] = inst_11692);

(statearr_11750_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (33))){
var inst_11679 = (state_11719[(23)]);
var inst_11681 = cljs.core.chunked_seq_QMARK_(inst_11679);
var state_11719__$1 = state_11719;
if(inst_11681){
var statearr_11751_13197 = state_11719__$1;
(statearr_11751_13197[(1)] = (36));

} else {
var statearr_11752_13198 = state_11719__$1;
(statearr_11752_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (13))){
var inst_11609 = (state_11719[(24)]);
var inst_11612 = cljs.core.async.close_BANG_(inst_11609);
var state_11719__$1 = state_11719;
var statearr_11753_13199 = state_11719__$1;
(statearr_11753_13199[(2)] = inst_11612);

(statearr_11753_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (22))){
var inst_11633 = (state_11719[(8)]);
var inst_11636 = cljs.core.async.close_BANG_(inst_11633);
var state_11719__$1 = state_11719;
var statearr_11754_13200 = state_11719__$1;
(statearr_11754_13200[(2)] = inst_11636);

(statearr_11754_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (36))){
var inst_11679 = (state_11719[(23)]);
var inst_11683 = cljs.core.chunk_first(inst_11679);
var inst_11684 = cljs.core.chunk_rest(inst_11679);
var inst_11685 = cljs.core.count(inst_11683);
var inst_11661 = inst_11684;
var inst_11662 = inst_11683;
var inst_11663 = inst_11685;
var inst_11664 = (0);
var state_11719__$1 = (function (){var statearr_11755 = state_11719;
(statearr_11755[(9)] = inst_11662);

(statearr_11755[(11)] = inst_11664);

(statearr_11755[(19)] = inst_11663);

(statearr_11755[(20)] = inst_11661);

return statearr_11755;
})();
var statearr_11756_13201 = state_11719__$1;
(statearr_11756_13201[(2)] = null);

(statearr_11756_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (41))){
var inst_11679 = (state_11719[(23)]);
var inst_11694 = (state_11719[(2)]);
var inst_11695 = cljs.core.next(inst_11679);
var inst_11661 = inst_11695;
var inst_11662 = null;
var inst_11663 = (0);
var inst_11664 = (0);
var state_11719__$1 = (function (){var statearr_11757 = state_11719;
(statearr_11757[(9)] = inst_11662);

(statearr_11757[(25)] = inst_11694);

(statearr_11757[(11)] = inst_11664);

(statearr_11757[(19)] = inst_11663);

(statearr_11757[(20)] = inst_11661);

return statearr_11757;
})();
var statearr_11758_13202 = state_11719__$1;
(statearr_11758_13202[(2)] = null);

(statearr_11758_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (43))){
var state_11719__$1 = state_11719;
var statearr_11759_13203 = state_11719__$1;
(statearr_11759_13203[(2)] = null);

(statearr_11759_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (29))){
var inst_11703 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11760_13204 = state_11719__$1;
(statearr_11760_13204[(2)] = inst_11703);

(statearr_11760_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (44))){
var inst_11712 = (state_11719[(2)]);
var state_11719__$1 = (function (){var statearr_11761 = state_11719;
(statearr_11761[(26)] = inst_11712);

return statearr_11761;
})();
var statearr_11762_13205 = state_11719__$1;
(statearr_11762_13205[(2)] = null);

(statearr_11762_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (6))){
var inst_11653 = (state_11719[(27)]);
var inst_11652 = cljs.core.deref(cs);
var inst_11653__$1 = cljs.core.keys(inst_11652);
var inst_11654 = cljs.core.count(inst_11653__$1);
var inst_11655 = cljs.core.reset_BANG_(dctr,inst_11654);
var inst_11660 = cljs.core.seq(inst_11653__$1);
var inst_11661 = inst_11660;
var inst_11662 = null;
var inst_11663 = (0);
var inst_11664 = (0);
var state_11719__$1 = (function (){var statearr_11764 = state_11719;
(statearr_11764[(9)] = inst_11662);

(statearr_11764[(28)] = inst_11655);

(statearr_11764[(11)] = inst_11664);

(statearr_11764[(19)] = inst_11663);

(statearr_11764[(27)] = inst_11653__$1);

(statearr_11764[(20)] = inst_11661);

return statearr_11764;
})();
var statearr_11765_13206 = state_11719__$1;
(statearr_11765_13206[(2)] = null);

(statearr_11765_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (28))){
var inst_11679 = (state_11719[(23)]);
var inst_11661 = (state_11719[(20)]);
var inst_11679__$1 = cljs.core.seq(inst_11661);
var state_11719__$1 = (function (){var statearr_11766 = state_11719;
(statearr_11766[(23)] = inst_11679__$1);

return statearr_11766;
})();
if(inst_11679__$1){
var statearr_11767_13207 = state_11719__$1;
(statearr_11767_13207[(1)] = (33));

} else {
var statearr_11768_13208 = state_11719__$1;
(statearr_11768_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (25))){
var inst_11664 = (state_11719[(11)]);
var inst_11663 = (state_11719[(19)]);
var inst_11666 = (inst_11664 < inst_11663);
var inst_11667 = inst_11666;
var state_11719__$1 = state_11719;
if(cljs.core.truth_(inst_11667)){
var statearr_11769_13209 = state_11719__$1;
(statearr_11769_13209[(1)] = (27));

} else {
var statearr_11770_13210 = state_11719__$1;
(statearr_11770_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (34))){
var state_11719__$1 = state_11719;
var statearr_11771_13211 = state_11719__$1;
(statearr_11771_13211[(2)] = null);

(statearr_11771_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (17))){
var state_11719__$1 = state_11719;
var statearr_11772_13212 = state_11719__$1;
(statearr_11772_13212[(2)] = null);

(statearr_11772_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (3))){
var inst_11717 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11719__$1,inst_11717);
} else {
if((state_val_11720 === (12))){
var inst_11648 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11773_13213 = state_11719__$1;
(statearr_11773_13213[(2)] = inst_11648);

(statearr_11773_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (2))){
var state_11719__$1 = state_11719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11719__$1,(4),ch);
} else {
if((state_val_11720 === (23))){
var state_11719__$1 = state_11719;
var statearr_11774_13214 = state_11719__$1;
(statearr_11774_13214[(2)] = null);

(statearr_11774_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (35))){
var inst_11701 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11775_13215 = state_11719__$1;
(statearr_11775_13215[(2)] = inst_11701);

(statearr_11775_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (19))){
var inst_11619 = (state_11719[(7)]);
var inst_11623 = cljs.core.chunk_first(inst_11619);
var inst_11624 = cljs.core.chunk_rest(inst_11619);
var inst_11625 = cljs.core.count(inst_11623);
var inst_11597 = inst_11624;
var inst_11598 = inst_11623;
var inst_11599 = inst_11625;
var inst_11600 = (0);
var state_11719__$1 = (function (){var statearr_11776 = state_11719;
(statearr_11776[(13)] = inst_11600);

(statearr_11776[(14)] = inst_11598);

(statearr_11776[(15)] = inst_11597);

(statearr_11776[(17)] = inst_11599);

return statearr_11776;
})();
var statearr_11777_13216 = state_11719__$1;
(statearr_11777_13216[(2)] = null);

(statearr_11777_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (11))){
var inst_11619 = (state_11719[(7)]);
var inst_11597 = (state_11719[(15)]);
var inst_11619__$1 = cljs.core.seq(inst_11597);
var state_11719__$1 = (function (){var statearr_11778 = state_11719;
(statearr_11778[(7)] = inst_11619__$1);

return statearr_11778;
})();
if(inst_11619__$1){
var statearr_11779_13217 = state_11719__$1;
(statearr_11779_13217[(1)] = (16));

} else {
var statearr_11780_13218 = state_11719__$1;
(statearr_11780_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (9))){
var inst_11650 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11781_13219 = state_11719__$1;
(statearr_11781_13219[(2)] = inst_11650);

(statearr_11781_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (5))){
var inst_11595 = cljs.core.deref(cs);
var inst_11596 = cljs.core.seq(inst_11595);
var inst_11597 = inst_11596;
var inst_11598 = null;
var inst_11599 = (0);
var inst_11600 = (0);
var state_11719__$1 = (function (){var statearr_11782 = state_11719;
(statearr_11782[(13)] = inst_11600);

(statearr_11782[(14)] = inst_11598);

(statearr_11782[(15)] = inst_11597);

(statearr_11782[(17)] = inst_11599);

return statearr_11782;
})();
var statearr_11783_13220 = state_11719__$1;
(statearr_11783_13220[(2)] = null);

(statearr_11783_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (14))){
var state_11719__$1 = state_11719;
var statearr_11784_13221 = state_11719__$1;
(statearr_11784_13221[(2)] = null);

(statearr_11784_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (45))){
var inst_11709 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11785_13222 = state_11719__$1;
(statearr_11785_13222[(2)] = inst_11709);

(statearr_11785_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (26))){
var inst_11653 = (state_11719[(27)]);
var inst_11705 = (state_11719[(2)]);
var inst_11706 = cljs.core.seq(inst_11653);
var state_11719__$1 = (function (){var statearr_11786 = state_11719;
(statearr_11786[(29)] = inst_11705);

return statearr_11786;
})();
if(inst_11706){
var statearr_11787_13223 = state_11719__$1;
(statearr_11787_13223[(1)] = (42));

} else {
var statearr_11788_13224 = state_11719__$1;
(statearr_11788_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (16))){
var inst_11619 = (state_11719[(7)]);
var inst_11621 = cljs.core.chunked_seq_QMARK_(inst_11619);
var state_11719__$1 = state_11719;
if(inst_11621){
var statearr_11789_13225 = state_11719__$1;
(statearr_11789_13225[(1)] = (19));

} else {
var statearr_11790_13226 = state_11719__$1;
(statearr_11790_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (38))){
var inst_11698 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11791_13227 = state_11719__$1;
(statearr_11791_13227[(2)] = inst_11698);

(statearr_11791_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (30))){
var state_11719__$1 = state_11719;
var statearr_11792_13228 = state_11719__$1;
(statearr_11792_13228[(2)] = null);

(statearr_11792_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (10))){
var inst_11600 = (state_11719[(13)]);
var inst_11598 = (state_11719[(14)]);
var inst_11608 = cljs.core._nth(inst_11598,inst_11600);
var inst_11609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11608,(0),null);
var inst_11610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11608,(1),null);
var state_11719__$1 = (function (){var statearr_11793 = state_11719;
(statearr_11793[(24)] = inst_11609);

return statearr_11793;
})();
if(cljs.core.truth_(inst_11610)){
var statearr_11794_13229 = state_11719__$1;
(statearr_11794_13229[(1)] = (13));

} else {
var statearr_11795_13230 = state_11719__$1;
(statearr_11795_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (18))){
var inst_11646 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11796_13231 = state_11719__$1;
(statearr_11796_13231[(2)] = inst_11646);

(statearr_11796_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (42))){
var state_11719__$1 = state_11719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11719__$1,(45),dchan);
} else {
if((state_val_11720 === (37))){
var inst_11688 = (state_11719[(22)]);
var inst_11588 = (state_11719[(12)]);
var inst_11679 = (state_11719[(23)]);
var inst_11688__$1 = cljs.core.first(inst_11679);
var inst_11689 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11688__$1,inst_11588,done);
var state_11719__$1 = (function (){var statearr_11797 = state_11719;
(statearr_11797[(22)] = inst_11688__$1);

return statearr_11797;
})();
if(cljs.core.truth_(inst_11689)){
var statearr_11798_13232 = state_11719__$1;
(statearr_11798_13232[(1)] = (39));

} else {
var statearr_11799_13233 = state_11719__$1;
(statearr_11799_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (8))){
var inst_11600 = (state_11719[(13)]);
var inst_11599 = (state_11719[(17)]);
var inst_11602 = (inst_11600 < inst_11599);
var inst_11603 = inst_11602;
var state_11719__$1 = state_11719;
if(cljs.core.truth_(inst_11603)){
var statearr_11800_13234 = state_11719__$1;
(statearr_11800_13234[(1)] = (10));

} else {
var statearr_11801_13235 = state_11719__$1;
(statearr_11801_13235[(1)] = (11));

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
var statearr_11802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11802[(0)] = cljs$core$async$mult_$_state_machine__10936__auto__);

(statearr_11802[(1)] = (1));

return statearr_11802;
});
var cljs$core$async$mult_$_state_machine__10936__auto____1 = (function (state_11719){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11719);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11803){var ex__10939__auto__ = e11803;
var statearr_11804_13236 = state_11719;
(statearr_11804_13236[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11719[(4)]))){
var statearr_11805_13237 = state_11719;
(statearr_11805_13237[(1)] = cljs.core.first((state_11719[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11719;
state_11719 = G__13238;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10936__auto__ = function(state_11719){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10936__auto____1.call(this,state_11719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10936__auto____0;
cljs$core$async$mult_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10936__auto____1;
return cljs$core$async$mult_$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_11806 = f__10977__auto__();
(statearr_11806[(6)] = c__10976__auto___13181);

return statearr_11806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__11808 = arguments.length;
switch (G__11808) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11827){
var map__11828 = p__11827;
var map__11828__$1 = (((((!((map__11828 == null))))?(((((map__11828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11828):map__11828);
var opts = map__11828__$1;
var statearr_11830_13248 = state;
(statearr_11830_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11831_13249 = state;
(statearr_11831_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11832_13250 = state;
(statearr_11832_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11823){
var G__11824 = cljs.core.first(seq11823);
var seq11823__$1 = cljs.core.next(seq11823);
var G__11825 = cljs.core.first(seq11823__$1);
var seq11823__$2 = cljs.core.next(seq11823__$1);
var G__11826 = cljs.core.first(seq11823__$2);
var seq11823__$3 = cljs.core.next(seq11823__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11824,G__11825,G__11826,seq11823__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11833 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11834){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11834 = meta11834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11835,meta11834__$1){
var self__ = this;
var _11835__$1 = this;
return (new cljs.core.async.t_cljs$core$async11833(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11834__$1));
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11835){
var self__ = this;
var _11835__$1 = this;
return self__.meta11834;
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11834","meta11834",61315183,null)], null);
}));

(cljs.core.async.t_cljs$core$async11833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11833");

(cljs.core.async.t_cljs$core$async11833.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11833.
 */
cljs.core.async.__GT_t_cljs$core$async11833 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11833(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11834){
return (new cljs.core.async.t_cljs$core$async11833(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11834));
});

}

return (new cljs.core.async.t_cljs$core$async11833(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10976__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_11963){
var state_val_11964 = (state_11963[(1)]);
if((state_val_11964 === (7))){
var inst_11878 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_11965_13252 = state_11963__$1;
(statearr_11965_13252[(2)] = inst_11878);

(statearr_11965_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (20))){
var inst_11890 = (state_11963[(7)]);
var state_11963__$1 = state_11963;
var statearr_11966_13253 = state_11963__$1;
(statearr_11966_13253[(2)] = inst_11890);

(statearr_11966_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (27))){
var state_11963__$1 = state_11963;
var statearr_11967_13254 = state_11963__$1;
(statearr_11967_13254[(2)] = null);

(statearr_11967_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (1))){
var inst_11865 = (state_11963[(8)]);
var inst_11865__$1 = calc_state();
var inst_11867 = (inst_11865__$1 == null);
var inst_11868 = cljs.core.not(inst_11867);
var state_11963__$1 = (function (){var statearr_11968 = state_11963;
(statearr_11968[(8)] = inst_11865__$1);

return statearr_11968;
})();
if(inst_11868){
var statearr_11969_13255 = state_11963__$1;
(statearr_11969_13255[(1)] = (2));

} else {
var statearr_11970_13256 = state_11963__$1;
(statearr_11970_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (24))){
var inst_11937 = (state_11963[(9)]);
var inst_11914 = (state_11963[(10)]);
var inst_11923 = (state_11963[(11)]);
var inst_11937__$1 = (inst_11914.cljs$core$IFn$_invoke$arity$1 ? inst_11914.cljs$core$IFn$_invoke$arity$1(inst_11923) : inst_11914.call(null,inst_11923));
var state_11963__$1 = (function (){var statearr_11971 = state_11963;
(statearr_11971[(9)] = inst_11937__$1);

return statearr_11971;
})();
if(cljs.core.truth_(inst_11937__$1)){
var statearr_11972_13257 = state_11963__$1;
(statearr_11972_13257[(1)] = (29));

} else {
var statearr_11973_13258 = state_11963__$1;
(statearr_11973_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (4))){
var inst_11881 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11881)){
var statearr_11974_13259 = state_11963__$1;
(statearr_11974_13259[(1)] = (8));

} else {
var statearr_11975_13260 = state_11963__$1;
(statearr_11975_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (15))){
var inst_11908 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11908)){
var statearr_11976_13261 = state_11963__$1;
(statearr_11976_13261[(1)] = (19));

} else {
var statearr_11977_13262 = state_11963__$1;
(statearr_11977_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (21))){
var inst_11913 = (state_11963[(12)]);
var inst_11913__$1 = (state_11963[(2)]);
var inst_11914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11913__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11913__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11913__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11963__$1 = (function (){var statearr_11978 = state_11963;
(statearr_11978[(13)] = inst_11915);

(statearr_11978[(10)] = inst_11914);

(statearr_11978[(12)] = inst_11913__$1);

return statearr_11978;
})();
return cljs.core.async.ioc_alts_BANG_(state_11963__$1,(22),inst_11916);
} else {
if((state_val_11964 === (31))){
var inst_11945 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11945)){
var statearr_11979_13263 = state_11963__$1;
(statearr_11979_13263[(1)] = (32));

} else {
var statearr_11980_13264 = state_11963__$1;
(statearr_11980_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (32))){
var inst_11922 = (state_11963[(14)]);
var state_11963__$1 = state_11963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11963__$1,(35),out,inst_11922);
} else {
if((state_val_11964 === (33))){
var inst_11913 = (state_11963[(12)]);
var inst_11890 = inst_11913;
var state_11963__$1 = (function (){var statearr_11983 = state_11963;
(statearr_11983[(7)] = inst_11890);

return statearr_11983;
})();
var statearr_11984_13265 = state_11963__$1;
(statearr_11984_13265[(2)] = null);

(statearr_11984_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (13))){
var inst_11890 = (state_11963[(7)]);
var inst_11897 = inst_11890.cljs$lang$protocol_mask$partition0$;
var inst_11898 = (inst_11897 & (64));
var inst_11899 = inst_11890.cljs$core$ISeq$;
var inst_11900 = (cljs.core.PROTOCOL_SENTINEL === inst_11899);
var inst_11901 = ((inst_11898) || (inst_11900));
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11901)){
var statearr_11987_13266 = state_11963__$1;
(statearr_11987_13266[(1)] = (16));

} else {
var statearr_11989_13267 = state_11963__$1;
(statearr_11989_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (22))){
var inst_11922 = (state_11963[(14)]);
var inst_11923 = (state_11963[(11)]);
var inst_11921 = (state_11963[(2)]);
var inst_11922__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11921,(0),null);
var inst_11923__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11921,(1),null);
var inst_11924 = (inst_11922__$1 == null);
var inst_11925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11923__$1,change);
var inst_11926 = ((inst_11924) || (inst_11925));
var state_11963__$1 = (function (){var statearr_11992 = state_11963;
(statearr_11992[(14)] = inst_11922__$1);

(statearr_11992[(11)] = inst_11923__$1);

return statearr_11992;
})();
if(cljs.core.truth_(inst_11926)){
var statearr_11993_13268 = state_11963__$1;
(statearr_11993_13268[(1)] = (23));

} else {
var statearr_11994_13269 = state_11963__$1;
(statearr_11994_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (36))){
var inst_11913 = (state_11963[(12)]);
var inst_11890 = inst_11913;
var state_11963__$1 = (function (){var statearr_11995 = state_11963;
(statearr_11995[(7)] = inst_11890);

return statearr_11995;
})();
var statearr_11996_13270 = state_11963__$1;
(statearr_11996_13270[(2)] = null);

(statearr_11996_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (29))){
var inst_11937 = (state_11963[(9)]);
var state_11963__$1 = state_11963;
var statearr_11997_13271 = state_11963__$1;
(statearr_11997_13271[(2)] = inst_11937);

(statearr_11997_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (6))){
var state_11963__$1 = state_11963;
var statearr_11998_13272 = state_11963__$1;
(statearr_11998_13272[(2)] = false);

(statearr_11998_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (28))){
var inst_11933 = (state_11963[(2)]);
var inst_11934 = calc_state();
var inst_11890 = inst_11934;
var state_11963__$1 = (function (){var statearr_11999 = state_11963;
(statearr_11999[(7)] = inst_11890);

(statearr_11999[(15)] = inst_11933);

return statearr_11999;
})();
var statearr_12000_13273 = state_11963__$1;
(statearr_12000_13273[(2)] = null);

(statearr_12000_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (25))){
var inst_11959 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_12001_13274 = state_11963__$1;
(statearr_12001_13274[(2)] = inst_11959);

(statearr_12001_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (34))){
var inst_11957 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_12002_13275 = state_11963__$1;
(statearr_12002_13275[(2)] = inst_11957);

(statearr_12002_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (17))){
var state_11963__$1 = state_11963;
var statearr_12003_13276 = state_11963__$1;
(statearr_12003_13276[(2)] = false);

(statearr_12003_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (3))){
var state_11963__$1 = state_11963;
var statearr_12005_13277 = state_11963__$1;
(statearr_12005_13277[(2)] = false);

(statearr_12005_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (12))){
var inst_11961 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11963__$1,inst_11961);
} else {
if((state_val_11964 === (2))){
var inst_11865 = (state_11963[(8)]);
var inst_11870 = inst_11865.cljs$lang$protocol_mask$partition0$;
var inst_11871 = (inst_11870 & (64));
var inst_11872 = inst_11865.cljs$core$ISeq$;
var inst_11873 = (cljs.core.PROTOCOL_SENTINEL === inst_11872);
var inst_11874 = ((inst_11871) || (inst_11873));
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11874)){
var statearr_12007_13278 = state_11963__$1;
(statearr_12007_13278[(1)] = (5));

} else {
var statearr_12008_13279 = state_11963__$1;
(statearr_12008_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (23))){
var inst_11922 = (state_11963[(14)]);
var inst_11928 = (inst_11922 == null);
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11928)){
var statearr_12009_13280 = state_11963__$1;
(statearr_12009_13280[(1)] = (26));

} else {
var statearr_12010_13281 = state_11963__$1;
(statearr_12010_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (35))){
var inst_11948 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11948)){
var statearr_12011_13282 = state_11963__$1;
(statearr_12011_13282[(1)] = (36));

} else {
var statearr_12012_13283 = state_11963__$1;
(statearr_12012_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (19))){
var inst_11890 = (state_11963[(7)]);
var inst_11910 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11890);
var state_11963__$1 = state_11963;
var statearr_12013_13284 = state_11963__$1;
(statearr_12013_13284[(2)] = inst_11910);

(statearr_12013_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (11))){
var inst_11890 = (state_11963[(7)]);
var inst_11894 = (inst_11890 == null);
var inst_11895 = cljs.core.not(inst_11894);
var state_11963__$1 = state_11963;
if(inst_11895){
var statearr_12014_13285 = state_11963__$1;
(statearr_12014_13285[(1)] = (13));

} else {
var statearr_12015_13286 = state_11963__$1;
(statearr_12015_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (9))){
var inst_11865 = (state_11963[(8)]);
var state_11963__$1 = state_11963;
var statearr_12016_13287 = state_11963__$1;
(statearr_12016_13287[(2)] = inst_11865);

(statearr_12016_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (5))){
var state_11963__$1 = state_11963;
var statearr_12017_13288 = state_11963__$1;
(statearr_12017_13288[(2)] = true);

(statearr_12017_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (14))){
var state_11963__$1 = state_11963;
var statearr_12018_13289 = state_11963__$1;
(statearr_12018_13289[(2)] = false);

(statearr_12018_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (26))){
var inst_11923 = (state_11963[(11)]);
var inst_11930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11923);
var state_11963__$1 = state_11963;
var statearr_12019_13290 = state_11963__$1;
(statearr_12019_13290[(2)] = inst_11930);

(statearr_12019_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (16))){
var state_11963__$1 = state_11963;
var statearr_12020_13291 = state_11963__$1;
(statearr_12020_13291[(2)] = true);

(statearr_12020_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (38))){
var inst_11953 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_12021_13292 = state_11963__$1;
(statearr_12021_13292[(2)] = inst_11953);

(statearr_12021_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (30))){
var inst_11915 = (state_11963[(13)]);
var inst_11914 = (state_11963[(10)]);
var inst_11923 = (state_11963[(11)]);
var inst_11940 = cljs.core.empty_QMARK_(inst_11914);
var inst_11941 = (inst_11915.cljs$core$IFn$_invoke$arity$1 ? inst_11915.cljs$core$IFn$_invoke$arity$1(inst_11923) : inst_11915.call(null,inst_11923));
var inst_11942 = cljs.core.not(inst_11941);
var inst_11943 = ((inst_11940) && (inst_11942));
var state_11963__$1 = state_11963;
var statearr_12022_13293 = state_11963__$1;
(statearr_12022_13293[(2)] = inst_11943);

(statearr_12022_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (10))){
var inst_11865 = (state_11963[(8)]);
var inst_11886 = (state_11963[(2)]);
var inst_11887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11890 = inst_11865;
var state_11963__$1 = (function (){var statearr_12023 = state_11963;
(statearr_12023[(16)] = inst_11888);

(statearr_12023[(7)] = inst_11890);

(statearr_12023[(17)] = inst_11887);

(statearr_12023[(18)] = inst_11889);

return statearr_12023;
})();
var statearr_12024_13294 = state_11963__$1;
(statearr_12024_13294[(2)] = null);

(statearr_12024_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (18))){
var inst_11905 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_12025_13295 = state_11963__$1;
(statearr_12025_13295[(2)] = inst_11905);

(statearr_12025_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (37))){
var state_11963__$1 = state_11963;
var statearr_12026_13296 = state_11963__$1;
(statearr_12026_13296[(2)] = null);

(statearr_12026_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (8))){
var inst_11865 = (state_11963[(8)]);
var inst_11883 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11865);
var state_11963__$1 = state_11963;
var statearr_12027_13297 = state_11963__$1;
(statearr_12027_13297[(2)] = inst_11883);

(statearr_12027_13297[(1)] = (10));


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
var statearr_12028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12028[(0)] = cljs$core$async$mix_$_state_machine__10936__auto__);

(statearr_12028[(1)] = (1));

return statearr_12028;
});
var cljs$core$async$mix_$_state_machine__10936__auto____1 = (function (state_11963){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11963);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12029){var ex__10939__auto__ = e12029;
var statearr_12030_13298 = state_11963;
(statearr_12030_13298[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11963[(4)]))){
var statearr_12031_13299 = state_11963;
(statearr_12031_13299[(1)] = cljs.core.first((state_11963[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_11963;
state_11963 = G__13300;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10936__auto__ = function(state_11963){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10936__auto____1.call(this,state_11963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10936__auto____0;
cljs$core$async$mix_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10936__auto____1;
return cljs$core$async$mix_$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12032 = f__10977__auto__();
(statearr_12032[(6)] = c__10976__auto___13251);

return statearr_12032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__12042 = arguments.length;
switch (G__12042) {
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
var G__12047 = arguments.length;
switch (G__12047) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12043_SHARP_){
if(cljs.core.truth_((p1__12043_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12043_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12043_SHARP_.call(null,topic)))){
return p1__12043_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12043_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12048 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12049){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12049 = meta12049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12050,meta12049__$1){
var self__ = this;
var _12050__$1 = this;
return (new cljs.core.async.t_cljs$core$async12048(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12049__$1));
}));

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12050){
var self__ = this;
var _12050__$1 = this;
return self__.meta12049;
}));

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12049","meta12049",1367582293,null)], null);
}));

(cljs.core.async.t_cljs$core$async12048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12048");

(cljs.core.async.t_cljs$core$async12048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12048.
 */
cljs.core.async.__GT_t_cljs$core$async12048 = (function cljs$core$async$__GT_t_cljs$core$async12048(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12049){
return (new cljs.core.async.t_cljs$core$async12048(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12049));
});

}

return (new cljs.core.async.t_cljs$core$async12048(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10976__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12126){
var state_val_12127 = (state_12126[(1)]);
if((state_val_12127 === (7))){
var inst_12122 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
var statearr_12132_13308 = state_12126__$1;
(statearr_12132_13308[(2)] = inst_12122);

(statearr_12132_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (20))){
var state_12126__$1 = state_12126;
var statearr_12137_13309 = state_12126__$1;
(statearr_12137_13309[(2)] = null);

(statearr_12137_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (1))){
var state_12126__$1 = state_12126;
var statearr_12138_13310 = state_12126__$1;
(statearr_12138_13310[(2)] = null);

(statearr_12138_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (24))){
var inst_12105 = (state_12126[(7)]);
var inst_12114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12105);
var state_12126__$1 = state_12126;
var statearr_12139_13311 = state_12126__$1;
(statearr_12139_13311[(2)] = inst_12114);

(statearr_12139_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (4))){
var inst_12053 = (state_12126[(8)]);
var inst_12053__$1 = (state_12126[(2)]);
var inst_12054 = (inst_12053__$1 == null);
var state_12126__$1 = (function (){var statearr_12140 = state_12126;
(statearr_12140[(8)] = inst_12053__$1);

return statearr_12140;
})();
if(cljs.core.truth_(inst_12054)){
var statearr_12141_13312 = state_12126__$1;
(statearr_12141_13312[(1)] = (5));

} else {
var statearr_12142_13313 = state_12126__$1;
(statearr_12142_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (15))){
var inst_12099 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
var statearr_12143_13314 = state_12126__$1;
(statearr_12143_13314[(2)] = inst_12099);

(statearr_12143_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (21))){
var inst_12119 = (state_12126[(2)]);
var state_12126__$1 = (function (){var statearr_12144 = state_12126;
(statearr_12144[(9)] = inst_12119);

return statearr_12144;
})();
var statearr_12145_13315 = state_12126__$1;
(statearr_12145_13315[(2)] = null);

(statearr_12145_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (13))){
var inst_12077 = (state_12126[(10)]);
var inst_12079 = cljs.core.chunked_seq_QMARK_(inst_12077);
var state_12126__$1 = state_12126;
if(inst_12079){
var statearr_12146_13316 = state_12126__$1;
(statearr_12146_13316[(1)] = (16));

} else {
var statearr_12147_13317 = state_12126__$1;
(statearr_12147_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (22))){
var inst_12111 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
if(cljs.core.truth_(inst_12111)){
var statearr_12148_13318 = state_12126__$1;
(statearr_12148_13318[(1)] = (23));

} else {
var statearr_12149_13319 = state_12126__$1;
(statearr_12149_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (6))){
var inst_12053 = (state_12126[(8)]);
var inst_12107 = (state_12126[(11)]);
var inst_12105 = (state_12126[(7)]);
var inst_12105__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12053) : topic_fn.call(null,inst_12053));
var inst_12106 = cljs.core.deref(mults);
var inst_12107__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12106,inst_12105__$1);
var state_12126__$1 = (function (){var statearr_12150 = state_12126;
(statearr_12150[(11)] = inst_12107__$1);

(statearr_12150[(7)] = inst_12105__$1);

return statearr_12150;
})();
if(cljs.core.truth_(inst_12107__$1)){
var statearr_12152_13320 = state_12126__$1;
(statearr_12152_13320[(1)] = (19));

} else {
var statearr_12153_13321 = state_12126__$1;
(statearr_12153_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (25))){
var inst_12116 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
var statearr_12154_13322 = state_12126__$1;
(statearr_12154_13322[(2)] = inst_12116);

(statearr_12154_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (17))){
var inst_12077 = (state_12126[(10)]);
var inst_12086 = cljs.core.first(inst_12077);
var inst_12087 = cljs.core.async.muxch_STAR_(inst_12086);
var inst_12088 = cljs.core.async.close_BANG_(inst_12087);
var inst_12093 = cljs.core.next(inst_12077);
var inst_12063 = inst_12093;
var inst_12064 = null;
var inst_12065 = (0);
var inst_12066 = (0);
var state_12126__$1 = (function (){var statearr_12155 = state_12126;
(statearr_12155[(12)] = inst_12065);

(statearr_12155[(13)] = inst_12064);

(statearr_12155[(14)] = inst_12063);

(statearr_12155[(15)] = inst_12066);

(statearr_12155[(16)] = inst_12088);

return statearr_12155;
})();
var statearr_12156_13323 = state_12126__$1;
(statearr_12156_13323[(2)] = null);

(statearr_12156_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (3))){
var inst_12124 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12126__$1,inst_12124);
} else {
if((state_val_12127 === (12))){
var inst_12101 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
var statearr_12157_13324 = state_12126__$1;
(statearr_12157_13324[(2)] = inst_12101);

(statearr_12157_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (2))){
var state_12126__$1 = state_12126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12126__$1,(4),ch);
} else {
if((state_val_12127 === (23))){
var state_12126__$1 = state_12126;
var statearr_12158_13325 = state_12126__$1;
(statearr_12158_13325[(2)] = null);

(statearr_12158_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (19))){
var inst_12053 = (state_12126[(8)]);
var inst_12107 = (state_12126[(11)]);
var inst_12109 = cljs.core.async.muxch_STAR_(inst_12107);
var state_12126__$1 = state_12126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12126__$1,(22),inst_12109,inst_12053);
} else {
if((state_val_12127 === (11))){
var inst_12077 = (state_12126[(10)]);
var inst_12063 = (state_12126[(14)]);
var inst_12077__$1 = cljs.core.seq(inst_12063);
var state_12126__$1 = (function (){var statearr_12159 = state_12126;
(statearr_12159[(10)] = inst_12077__$1);

return statearr_12159;
})();
if(inst_12077__$1){
var statearr_12160_13326 = state_12126__$1;
(statearr_12160_13326[(1)] = (13));

} else {
var statearr_12161_13327 = state_12126__$1;
(statearr_12161_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (9))){
var inst_12103 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
var statearr_12162_13328 = state_12126__$1;
(statearr_12162_13328[(2)] = inst_12103);

(statearr_12162_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (5))){
var inst_12060 = cljs.core.deref(mults);
var inst_12061 = cljs.core.vals(inst_12060);
var inst_12062 = cljs.core.seq(inst_12061);
var inst_12063 = inst_12062;
var inst_12064 = null;
var inst_12065 = (0);
var inst_12066 = (0);
var state_12126__$1 = (function (){var statearr_12163 = state_12126;
(statearr_12163[(12)] = inst_12065);

(statearr_12163[(13)] = inst_12064);

(statearr_12163[(14)] = inst_12063);

(statearr_12163[(15)] = inst_12066);

return statearr_12163;
})();
var statearr_12164_13329 = state_12126__$1;
(statearr_12164_13329[(2)] = null);

(statearr_12164_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (14))){
var state_12126__$1 = state_12126;
var statearr_12168_13330 = state_12126__$1;
(statearr_12168_13330[(2)] = null);

(statearr_12168_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (16))){
var inst_12077 = (state_12126[(10)]);
var inst_12081 = cljs.core.chunk_first(inst_12077);
var inst_12082 = cljs.core.chunk_rest(inst_12077);
var inst_12083 = cljs.core.count(inst_12081);
var inst_12063 = inst_12082;
var inst_12064 = inst_12081;
var inst_12065 = inst_12083;
var inst_12066 = (0);
var state_12126__$1 = (function (){var statearr_12169 = state_12126;
(statearr_12169[(12)] = inst_12065);

(statearr_12169[(13)] = inst_12064);

(statearr_12169[(14)] = inst_12063);

(statearr_12169[(15)] = inst_12066);

return statearr_12169;
})();
var statearr_12170_13331 = state_12126__$1;
(statearr_12170_13331[(2)] = null);

(statearr_12170_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (10))){
var inst_12065 = (state_12126[(12)]);
var inst_12064 = (state_12126[(13)]);
var inst_12063 = (state_12126[(14)]);
var inst_12066 = (state_12126[(15)]);
var inst_12071 = cljs.core._nth(inst_12064,inst_12066);
var inst_12072 = cljs.core.async.muxch_STAR_(inst_12071);
var inst_12073 = cljs.core.async.close_BANG_(inst_12072);
var inst_12074 = (inst_12066 + (1));
var tmp12165 = inst_12065;
var tmp12166 = inst_12064;
var tmp12167 = inst_12063;
var inst_12063__$1 = tmp12167;
var inst_12064__$1 = tmp12166;
var inst_12065__$1 = tmp12165;
var inst_12066__$1 = inst_12074;
var state_12126__$1 = (function (){var statearr_12171 = state_12126;
(statearr_12171[(12)] = inst_12065__$1);

(statearr_12171[(13)] = inst_12064__$1);

(statearr_12171[(14)] = inst_12063__$1);

(statearr_12171[(17)] = inst_12073);

(statearr_12171[(15)] = inst_12066__$1);

return statearr_12171;
})();
var statearr_12172_13332 = state_12126__$1;
(statearr_12172_13332[(2)] = null);

(statearr_12172_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (18))){
var inst_12096 = (state_12126[(2)]);
var state_12126__$1 = state_12126;
var statearr_12173_13333 = state_12126__$1;
(statearr_12173_13333[(2)] = inst_12096);

(statearr_12173_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12127 === (8))){
var inst_12065 = (state_12126[(12)]);
var inst_12066 = (state_12126[(15)]);
var inst_12068 = (inst_12066 < inst_12065);
var inst_12069 = inst_12068;
var state_12126__$1 = state_12126;
if(cljs.core.truth_(inst_12069)){
var statearr_12174_13334 = state_12126__$1;
(statearr_12174_13334[(1)] = (10));

} else {
var statearr_12175_13335 = state_12126__$1;
(statearr_12175_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12126){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12126);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12177){var ex__10939__auto__ = e12177;
var statearr_12178_13336 = state_12126;
(statearr_12178_13336[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12126[(4)]))){
var statearr_12179_13337 = state_12126;
(statearr_12179_13337[(1)] = cljs.core.first((state_12126[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12126;
state_12126 = G__13338;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12180 = f__10977__auto__();
(statearr_12180[(6)] = c__10976__auto___13307);

return statearr_12180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__12182 = arguments.length;
switch (G__12182) {
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
var G__12184 = arguments.length;
switch (G__12184) {
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
var G__12193 = arguments.length;
switch (G__12193) {
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
var c__10976__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12239){
var state_val_12240 = (state_12239[(1)]);
if((state_val_12240 === (7))){
var state_12239__$1 = state_12239;
var statearr_12241_13343 = state_12239__$1;
(statearr_12241_13343[(2)] = null);

(statearr_12241_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (1))){
var state_12239__$1 = state_12239;
var statearr_12242_13344 = state_12239__$1;
(statearr_12242_13344[(2)] = null);

(statearr_12242_13344[(1)] = (2));


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
var state_12239__$1 = (function (){var statearr_12251 = state_12239;
(statearr_12251[(10)] = inst_12232);

return statearr_12251;
})();
var statearr_12252_13350 = state_12239__$1;
(statearr_12252_13350[(2)] = null);

(statearr_12252_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (3))){
var inst_12237 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12239__$1,inst_12237);
} else {
if((state_val_12240 === (12))){
var _ = (function (){var statearr_12253 = state_12239;
(statearr_12253[(4)] = cljs.core.rest((state_12239[(4)])));

return statearr_12253;
})();
var state_12239__$1 = state_12239;
var ex12250 = (state_12239__$1[(2)]);
var statearr_12254_13351 = state_12239__$1;
(statearr_12254_13351[(5)] = ex12250);


if((ex12250 instanceof Object)){
var statearr_12255_13352 = state_12239__$1;
(statearr_12255_13352[(1)] = (11));

(statearr_12255_13352[(5)] = null);

} else {
throw ex12250;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (2))){
var inst_12197 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12199 = cnt;
var inst_12200 = (0);
var state_12239__$1 = (function (){var statearr_12256 = state_12239;
(statearr_12256[(7)] = inst_12199);

(statearr_12256[(8)] = inst_12200);

(statearr_12256[(11)] = inst_12197);

return statearr_12256;
})();
var statearr_12257_13353 = state_12239__$1;
(statearr_12257_13353[(2)] = null);

(statearr_12257_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (11))){
var inst_12204 = (state_12239[(2)]);
var inst_12205 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12239__$1 = (function (){var statearr_12258 = state_12239;
(statearr_12258[(12)] = inst_12204);

return statearr_12258;
})();
var statearr_12259_13354 = state_12239__$1;
(statearr_12259_13354[(2)] = inst_12205);

(statearr_12259_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (9))){
var inst_12200 = (state_12239[(8)]);
var _ = (function (){var statearr_12260 = state_12239;
(statearr_12260[(4)] = cljs.core.cons((12),(state_12239[(4)])));

return statearr_12260;
})();
var inst_12211 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12200) : chs__$1.call(null,inst_12200));
var inst_12212 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12200) : done.call(null,inst_12200));
var inst_12213 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12211,inst_12212);
var ___$1 = (function (){var statearr_12261 = state_12239;
(statearr_12261[(4)] = cljs.core.rest((state_12239[(4)])));

return statearr_12261;
})();
var state_12239__$1 = state_12239;
var statearr_12262_13355 = state_12239__$1;
(statearr_12262_13355[(2)] = inst_12213);

(statearr_12262_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (5))){
var inst_12223 = (state_12239[(2)]);
var state_12239__$1 = (function (){var statearr_12263 = state_12239;
(statearr_12263[(13)] = inst_12223);

return statearr_12263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12239__$1,(13),dchan);
} else {
if((state_val_12240 === (14))){
var inst_12228 = cljs.core.async.close_BANG_(out);
var state_12239__$1 = state_12239;
var statearr_12264_13356 = state_12239__$1;
(statearr_12264_13356[(2)] = inst_12228);

(statearr_12264_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (16))){
var inst_12235 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12265_13357 = state_12239__$1;
(statearr_12265_13357[(2)] = inst_12235);

(statearr_12265_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (10))){
var inst_12200 = (state_12239[(8)]);
var inst_12216 = (state_12239[(2)]);
var inst_12217 = (inst_12200 + (1));
var inst_12200__$1 = inst_12217;
var state_12239__$1 = (function (){var statearr_12266 = state_12239;
(statearr_12266[(14)] = inst_12216);

(statearr_12266[(8)] = inst_12200__$1);

return statearr_12266;
})();
var statearr_12271_13358 = state_12239__$1;
(statearr_12271_13358[(2)] = null);

(statearr_12271_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (8))){
var inst_12221 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12272_13359 = state_12239__$1;
(statearr_12272_13359[(2)] = inst_12221);

(statearr_12272_13359[(1)] = (5));


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
var statearr_12277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12277[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12277[(1)] = (1));

return statearr_12277;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12239){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12239);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12278){var ex__10939__auto__ = e12278;
var statearr_12279_13360 = state_12239;
(statearr_12279_13360[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12239[(4)]))){
var statearr_12280_13361 = state_12239;
(statearr_12280_13361[(1)] = cljs.core.first((state_12239[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12239;
state_12239 = G__13362;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12281 = f__10977__auto__();
(statearr_12281[(6)] = c__10976__auto___13342);

return statearr_12281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var G__12284 = arguments.length;
switch (G__12284) {
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
var c__10976__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12316){
var state_val_12317 = (state_12316[(1)]);
if((state_val_12317 === (7))){
var inst_12295 = (state_12316[(7)]);
var inst_12296 = (state_12316[(8)]);
var inst_12295__$1 = (state_12316[(2)]);
var inst_12296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12295__$1,(0),null);
var inst_12297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12295__$1,(1),null);
var inst_12298 = (inst_12296__$1 == null);
var state_12316__$1 = (function (){var statearr_12318 = state_12316;
(statearr_12318[(7)] = inst_12295__$1);

(statearr_12318[(8)] = inst_12296__$1);

(statearr_12318[(9)] = inst_12297);

return statearr_12318;
})();
if(cljs.core.truth_(inst_12298)){
var statearr_12319_13365 = state_12316__$1;
(statearr_12319_13365[(1)] = (8));

} else {
var statearr_12324_13366 = state_12316__$1;
(statearr_12324_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12317 === (1))){
var inst_12285 = cljs.core.vec(chs);
var inst_12286 = inst_12285;
var state_12316__$1 = (function (){var statearr_12325 = state_12316;
(statearr_12325[(10)] = inst_12286);

return statearr_12325;
})();
var statearr_12326_13367 = state_12316__$1;
(statearr_12326_13367[(2)] = null);

(statearr_12326_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12317 === (4))){
var inst_12286 = (state_12316[(10)]);
var state_12316__$1 = state_12316;
return cljs.core.async.ioc_alts_BANG_(state_12316__$1,(7),inst_12286);
} else {
if((state_val_12317 === (6))){
var inst_12312 = (state_12316[(2)]);
var state_12316__$1 = state_12316;
var statearr_12327_13368 = state_12316__$1;
(statearr_12327_13368[(2)] = inst_12312);

(statearr_12327_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12317 === (3))){
var inst_12314 = (state_12316[(2)]);
var state_12316__$1 = state_12316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12316__$1,inst_12314);
} else {
if((state_val_12317 === (2))){
var inst_12286 = (state_12316[(10)]);
var inst_12288 = cljs.core.count(inst_12286);
var inst_12289 = (inst_12288 > (0));
var state_12316__$1 = state_12316;
if(cljs.core.truth_(inst_12289)){
var statearr_12329_13369 = state_12316__$1;
(statearr_12329_13369[(1)] = (4));

} else {
var statearr_12330_13370 = state_12316__$1;
(statearr_12330_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12317 === (11))){
var inst_12286 = (state_12316[(10)]);
var inst_12305 = (state_12316[(2)]);
var tmp12328 = inst_12286;
var inst_12286__$1 = tmp12328;
var state_12316__$1 = (function (){var statearr_12331 = state_12316;
(statearr_12331[(10)] = inst_12286__$1);

(statearr_12331[(11)] = inst_12305);

return statearr_12331;
})();
var statearr_12332_13371 = state_12316__$1;
(statearr_12332_13371[(2)] = null);

(statearr_12332_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12317 === (9))){
var inst_12296 = (state_12316[(8)]);
var state_12316__$1 = state_12316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12316__$1,(11),out,inst_12296);
} else {
if((state_val_12317 === (5))){
var inst_12310 = cljs.core.async.close_BANG_(out);
var state_12316__$1 = state_12316;
var statearr_12333_13372 = state_12316__$1;
(statearr_12333_13372[(2)] = inst_12310);

(statearr_12333_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12317 === (10))){
var inst_12308 = (state_12316[(2)]);
var state_12316__$1 = state_12316;
var statearr_12334_13373 = state_12316__$1;
(statearr_12334_13373[(2)] = inst_12308);

(statearr_12334_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12317 === (8))){
var inst_12286 = (state_12316[(10)]);
var inst_12295 = (state_12316[(7)]);
var inst_12296 = (state_12316[(8)]);
var inst_12297 = (state_12316[(9)]);
var inst_12300 = (function (){var cs = inst_12286;
var vec__12291 = inst_12295;
var v = inst_12296;
var c = inst_12297;
return (function (p1__12282_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12282_SHARP_);
});
})();
var inst_12301 = cljs.core.filterv(inst_12300,inst_12286);
var inst_12286__$1 = inst_12301;
var state_12316__$1 = (function (){var statearr_12336 = state_12316;
(statearr_12336[(10)] = inst_12286__$1);

return statearr_12336;
})();
var statearr_12337_13374 = state_12316__$1;
(statearr_12337_13374[(2)] = null);

(statearr_12337_13374[(1)] = (2));


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
var statearr_12349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12349[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12349[(1)] = (1));

return statearr_12349;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12316){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12316);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12350){var ex__10939__auto__ = e12350;
var statearr_12351_13375 = state_12316;
(statearr_12351_13375[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12316[(4)]))){
var statearr_12352_13376 = state_12316;
(statearr_12352_13376[(1)] = cljs.core.first((state_12316[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12316;
state_12316 = G__13377;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12356 = f__10977__auto__();
(statearr_12356[(6)] = c__10976__auto___13364);

return statearr_12356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
var c__10976__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12385){
var state_val_12386 = (state_12385[(1)]);
if((state_val_12386 === (7))){
var inst_12366 = (state_12385[(7)]);
var inst_12366__$1 = (state_12385[(2)]);
var inst_12367 = (inst_12366__$1 == null);
var inst_12368 = cljs.core.not(inst_12367);
var state_12385__$1 = (function (){var statearr_12387 = state_12385;
(statearr_12387[(7)] = inst_12366__$1);

return statearr_12387;
})();
if(inst_12368){
var statearr_12388_13380 = state_12385__$1;
(statearr_12388_13380[(1)] = (8));

} else {
var statearr_12389_13381 = state_12385__$1;
(statearr_12389_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (1))){
var inst_12361 = (0);
var state_12385__$1 = (function (){var statearr_12390 = state_12385;
(statearr_12390[(8)] = inst_12361);

return statearr_12390;
})();
var statearr_12391_13382 = state_12385__$1;
(statearr_12391_13382[(2)] = null);

(statearr_12391_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (4))){
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12385__$1,(7),ch);
} else {
if((state_val_12386 === (6))){
var inst_12380 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12392_13383 = state_12385__$1;
(statearr_12392_13383[(2)] = inst_12380);

(statearr_12392_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (3))){
var inst_12382 = (state_12385[(2)]);
var inst_12383 = cljs.core.async.close_BANG_(out);
var state_12385__$1 = (function (){var statearr_12393 = state_12385;
(statearr_12393[(9)] = inst_12382);

return statearr_12393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12385__$1,inst_12383);
} else {
if((state_val_12386 === (2))){
var inst_12361 = (state_12385[(8)]);
var inst_12363 = (inst_12361 < n);
var state_12385__$1 = state_12385;
if(cljs.core.truth_(inst_12363)){
var statearr_12409_13384 = state_12385__$1;
(statearr_12409_13384[(1)] = (4));

} else {
var statearr_12410_13385 = state_12385__$1;
(statearr_12410_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (11))){
var inst_12361 = (state_12385[(8)]);
var inst_12371 = (state_12385[(2)]);
var inst_12373 = (inst_12361 + (1));
var inst_12361__$1 = inst_12373;
var state_12385__$1 = (function (){var statearr_12411 = state_12385;
(statearr_12411[(8)] = inst_12361__$1);

(statearr_12411[(10)] = inst_12371);

return statearr_12411;
})();
var statearr_12412_13386 = state_12385__$1;
(statearr_12412_13386[(2)] = null);

(statearr_12412_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (9))){
var state_12385__$1 = state_12385;
var statearr_12413_13387 = state_12385__$1;
(statearr_12413_13387[(2)] = null);

(statearr_12413_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (5))){
var state_12385__$1 = state_12385;
var statearr_12414_13388 = state_12385__$1;
(statearr_12414_13388[(2)] = null);

(statearr_12414_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (10))){
var inst_12377 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12415_13389 = state_12385__$1;
(statearr_12415_13389[(2)] = inst_12377);

(statearr_12415_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (8))){
var inst_12366 = (state_12385[(7)]);
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12385__$1,(11),out,inst_12366);
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
var statearr_12416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12416[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12416[(1)] = (1));

return statearr_12416;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12385){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12385);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12417){var ex__10939__auto__ = e12417;
var statearr_12418_13390 = state_12385;
(statearr_12418_13390[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12385[(4)]))){
var statearr_12423_13391 = state_12385;
(statearr_12423_13391[(1)] = cljs.core.first((state_12385[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12385;
state_12385 = G__13392;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12425 = f__10977__auto__();
(statearr_12425[(6)] = c__10976__auto___13379);

return statearr_12425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12427 = (function (f,ch,meta12428){
this.f = f;
this.ch = ch;
this.meta12428 = meta12428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12429,meta12428__$1){
var self__ = this;
var _12429__$1 = this;
return (new cljs.core.async.t_cljs$core$async12427(self__.f,self__.ch,meta12428__$1));
}));

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12429){
var self__ = this;
var _12429__$1 = this;
return self__.meta12428;
}));

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12431 = (function (f,ch,meta12428,_,fn1,meta12432){
this.f = f;
this.ch = ch;
this.meta12428 = meta12428;
this._ = _;
this.fn1 = fn1;
this.meta12432 = meta12432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12433,meta12432__$1){
var self__ = this;
var _12433__$1 = this;
return (new cljs.core.async.t_cljs$core$async12431(self__.f,self__.ch,self__.meta12428,self__._,self__.fn1,meta12432__$1));
}));

(cljs.core.async.t_cljs$core$async12431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12433){
var self__ = this;
var _12433__$1 = this;
return self__.meta12432;
}));

(cljs.core.async.t_cljs$core$async12431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12426_SHARP_){
var G__12434 = (((p1__12426_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12426_SHARP_) : self__.f.call(null,p1__12426_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12434) : f1.call(null,G__12434));
});
}));

(cljs.core.async.t_cljs$core$async12431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12428","meta12428",-495988654,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12427","cljs.core.async/t_cljs$core$async12427",-157597453,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12432","meta12432",-1915193708,null)], null);
}));

(cljs.core.async.t_cljs$core$async12431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12431");

(cljs.core.async.t_cljs$core$async12431.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12431.
 */
cljs.core.async.__GT_t_cljs$core$async12431 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12431(f__$1,ch__$1,meta12428__$1,___$2,fn1__$1,meta12432){
return (new cljs.core.async.t_cljs$core$async12431(f__$1,ch__$1,meta12428__$1,___$2,fn1__$1,meta12432));
});

}

return (new cljs.core.async.t_cljs$core$async12431(self__.f,self__.ch,self__.meta12428,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12428","meta12428",-495988654,null)], null);
}));

(cljs.core.async.t_cljs$core$async12427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12427");

(cljs.core.async.t_cljs$core$async12427.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12427.
 */
cljs.core.async.__GT_t_cljs$core$async12427 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12427(f__$1,ch__$1,meta12428){
return (new cljs.core.async.t_cljs$core$async12427(f__$1,ch__$1,meta12428));
});

}

return (new cljs.core.async.t_cljs$core$async12427(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12467 = arguments.length;
switch (G__12467) {
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
var c__10976__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12491){
var state_val_12492 = (state_12491[(1)]);
if((state_val_12492 === (7))){
var inst_12487 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
var statearr_12500_13395 = state_12491__$1;
(statearr_12500_13395[(2)] = inst_12487);

(statearr_12500_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (1))){
var state_12491__$1 = state_12491;
var statearr_12503_13396 = state_12491__$1;
(statearr_12503_13396[(2)] = null);

(statearr_12503_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (4))){
var inst_12473 = (state_12491[(7)]);
var inst_12473__$1 = (state_12491[(2)]);
var inst_12474 = (inst_12473__$1 == null);
var state_12491__$1 = (function (){var statearr_12506 = state_12491;
(statearr_12506[(7)] = inst_12473__$1);

return statearr_12506;
})();
if(cljs.core.truth_(inst_12474)){
var statearr_12507_13397 = state_12491__$1;
(statearr_12507_13397[(1)] = (5));

} else {
var statearr_12508_13398 = state_12491__$1;
(statearr_12508_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (6))){
var inst_12473 = (state_12491[(7)]);
var inst_12478 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12473) : p.call(null,inst_12473));
var state_12491__$1 = state_12491;
if(cljs.core.truth_(inst_12478)){
var statearr_12509_13399 = state_12491__$1;
(statearr_12509_13399[(1)] = (8));

} else {
var statearr_12510_13400 = state_12491__$1;
(statearr_12510_13400[(1)] = (9));

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
var statearr_12512_13401 = state_12491__$1;
(statearr_12512_13401[(2)] = inst_12481);

(statearr_12512_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (9))){
var state_12491__$1 = state_12491;
var statearr_12514_13402 = state_12491__$1;
(statearr_12514_13402[(2)] = null);

(statearr_12514_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (5))){
var inst_12476 = cljs.core.async.close_BANG_(out);
var state_12491__$1 = state_12491;
var statearr_12515_13403 = state_12491__$1;
(statearr_12515_13403[(2)] = inst_12476);

(statearr_12515_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (10))){
var inst_12484 = (state_12491[(2)]);
var state_12491__$1 = (function (){var statearr_12516 = state_12491;
(statearr_12516[(8)] = inst_12484);

return statearr_12516;
})();
var statearr_12517_13404 = state_12491__$1;
(statearr_12517_13404[(2)] = null);

(statearr_12517_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (8))){
var inst_12473 = (state_12491[(7)]);
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12491__$1,(11),out,inst_12473);
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
var statearr_12518 = [null,null,null,null,null,null,null,null,null];
(statearr_12518[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12518[(1)] = (1));

return statearr_12518;
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
}catch (e12519){var ex__10939__auto__ = e12519;
var statearr_12520_13405 = state_12491;
(statearr_12520_13405[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12491[(4)]))){
var statearr_12521_13406 = state_12491;
(statearr_12521_13406[(1)] = cljs.core.first((state_12491[(4)])));

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
var state__10978__auto__ = (function (){var statearr_12524 = f__10977__auto__();
(statearr_12524[(6)] = c__10976__auto___13394);

return statearr_12524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12527 = arguments.length;
switch (G__12527) {
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
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12589){
var state_val_12590 = (state_12589[(1)]);
if((state_val_12590 === (7))){
var inst_12585 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12616_13409 = state_12589__$1;
(statearr_12616_13409[(2)] = inst_12585);

(statearr_12616_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (20))){
var inst_12555 = (state_12589[(7)]);
var inst_12566 = (state_12589[(2)]);
var inst_12567 = cljs.core.next(inst_12555);
var inst_12541 = inst_12567;
var inst_12542 = null;
var inst_12543 = (0);
var inst_12544 = (0);
var state_12589__$1 = (function (){var statearr_12617 = state_12589;
(statearr_12617[(8)] = inst_12566);

(statearr_12617[(9)] = inst_12541);

(statearr_12617[(10)] = inst_12542);

(statearr_12617[(11)] = inst_12543);

(statearr_12617[(12)] = inst_12544);

return statearr_12617;
})();
var statearr_12618_13410 = state_12589__$1;
(statearr_12618_13410[(2)] = null);

(statearr_12618_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (1))){
var state_12589__$1 = state_12589;
var statearr_12619_13411 = state_12589__$1;
(statearr_12619_13411[(2)] = null);

(statearr_12619_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (4))){
var inst_12530 = (state_12589[(13)]);
var inst_12530__$1 = (state_12589[(2)]);
var inst_12531 = (inst_12530__$1 == null);
var state_12589__$1 = (function (){var statearr_12623 = state_12589;
(statearr_12623[(13)] = inst_12530__$1);

return statearr_12623;
})();
if(cljs.core.truth_(inst_12531)){
var statearr_12624_13412 = state_12589__$1;
(statearr_12624_13412[(1)] = (5));

} else {
var statearr_12625_13413 = state_12589__$1;
(statearr_12625_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (15))){
var state_12589__$1 = state_12589;
var statearr_12629_13414 = state_12589__$1;
(statearr_12629_13414[(2)] = null);

(statearr_12629_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (21))){
var state_12589__$1 = state_12589;
var statearr_12630_13415 = state_12589__$1;
(statearr_12630_13415[(2)] = null);

(statearr_12630_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (13))){
var inst_12541 = (state_12589[(9)]);
var inst_12542 = (state_12589[(10)]);
var inst_12543 = (state_12589[(11)]);
var inst_12544 = (state_12589[(12)]);
var inst_12551 = (state_12589[(2)]);
var inst_12552 = (inst_12544 + (1));
var tmp12626 = inst_12541;
var tmp12627 = inst_12542;
var tmp12628 = inst_12543;
var inst_12541__$1 = tmp12626;
var inst_12542__$1 = tmp12627;
var inst_12543__$1 = tmp12628;
var inst_12544__$1 = inst_12552;
var state_12589__$1 = (function (){var statearr_12631 = state_12589;
(statearr_12631[(14)] = inst_12551);

(statearr_12631[(9)] = inst_12541__$1);

(statearr_12631[(10)] = inst_12542__$1);

(statearr_12631[(11)] = inst_12543__$1);

(statearr_12631[(12)] = inst_12544__$1);

return statearr_12631;
})();
var statearr_12632_13416 = state_12589__$1;
(statearr_12632_13416[(2)] = null);

(statearr_12632_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (22))){
var state_12589__$1 = state_12589;
var statearr_12633_13417 = state_12589__$1;
(statearr_12633_13417[(2)] = null);

(statearr_12633_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (6))){
var inst_12530 = (state_12589[(13)]);
var inst_12539 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12530) : f.call(null,inst_12530));
var inst_12540 = cljs.core.seq(inst_12539);
var inst_12541 = inst_12540;
var inst_12542 = null;
var inst_12543 = (0);
var inst_12544 = (0);
var state_12589__$1 = (function (){var statearr_12634 = state_12589;
(statearr_12634[(9)] = inst_12541);

(statearr_12634[(10)] = inst_12542);

(statearr_12634[(11)] = inst_12543);

(statearr_12634[(12)] = inst_12544);

return statearr_12634;
})();
var statearr_12635_13418 = state_12589__$1;
(statearr_12635_13418[(2)] = null);

(statearr_12635_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (17))){
var inst_12555 = (state_12589[(7)]);
var inst_12559 = cljs.core.chunk_first(inst_12555);
var inst_12560 = cljs.core.chunk_rest(inst_12555);
var inst_12561 = cljs.core.count(inst_12559);
var inst_12541 = inst_12560;
var inst_12542 = inst_12559;
var inst_12543 = inst_12561;
var inst_12544 = (0);
var state_12589__$1 = (function (){var statearr_12637 = state_12589;
(statearr_12637[(9)] = inst_12541);

(statearr_12637[(10)] = inst_12542);

(statearr_12637[(11)] = inst_12543);

(statearr_12637[(12)] = inst_12544);

return statearr_12637;
})();
var statearr_12638_13419 = state_12589__$1;
(statearr_12638_13419[(2)] = null);

(statearr_12638_13419[(1)] = (8));


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
var statearr_12639_13420 = state_12589__$1;
(statearr_12639_13420[(2)] = inst_12575);

(statearr_12639_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (2))){
var state_12589__$1 = state_12589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12589__$1,(4),in$);
} else {
if((state_val_12590 === (23))){
var inst_12583 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12640_13421 = state_12589__$1;
(statearr_12640_13421[(2)] = inst_12583);

(statearr_12640_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (19))){
var inst_12570 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12641_13422 = state_12589__$1;
(statearr_12641_13422[(2)] = inst_12570);

(statearr_12641_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (11))){
var inst_12541 = (state_12589[(9)]);
var inst_12555 = (state_12589[(7)]);
var inst_12555__$1 = cljs.core.seq(inst_12541);
var state_12589__$1 = (function (){var statearr_12642 = state_12589;
(statearr_12642[(7)] = inst_12555__$1);

return statearr_12642;
})();
if(inst_12555__$1){
var statearr_12661_13423 = state_12589__$1;
(statearr_12661_13423[(1)] = (14));

} else {
var statearr_12662_13424 = state_12589__$1;
(statearr_12662_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (9))){
var inst_12577 = (state_12589[(2)]);
var inst_12578 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12589__$1 = (function (){var statearr_12663 = state_12589;
(statearr_12663[(15)] = inst_12577);

return statearr_12663;
})();
if(cljs.core.truth_(inst_12578)){
var statearr_12664_13425 = state_12589__$1;
(statearr_12664_13425[(1)] = (21));

} else {
var statearr_12666_13426 = state_12589__$1;
(statearr_12666_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (5))){
var inst_12533 = cljs.core.async.close_BANG_(out);
var state_12589__$1 = state_12589;
var statearr_12667_13427 = state_12589__$1;
(statearr_12667_13427[(2)] = inst_12533);

(statearr_12667_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (14))){
var inst_12555 = (state_12589[(7)]);
var inst_12557 = cljs.core.chunked_seq_QMARK_(inst_12555);
var state_12589__$1 = state_12589;
if(inst_12557){
var statearr_12668_13428 = state_12589__$1;
(statearr_12668_13428[(1)] = (17));

} else {
var statearr_12669_13429 = state_12589__$1;
(statearr_12669_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (16))){
var inst_12573 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12673_13430 = state_12589__$1;
(statearr_12673_13430[(2)] = inst_12573);

(statearr_12673_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (10))){
var inst_12542 = (state_12589[(10)]);
var inst_12544 = (state_12589[(12)]);
var inst_12549 = cljs.core._nth(inst_12542,inst_12544);
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
var inst_12543 = (state_12589[(11)]);
var inst_12544 = (state_12589[(12)]);
var inst_12546 = (inst_12544 < inst_12543);
var inst_12547 = inst_12546;
var state_12589__$1 = state_12589;
if(cljs.core.truth_(inst_12547)){
var statearr_12674_13431 = state_12589__$1;
(statearr_12674_13431[(1)] = (10));

} else {
var statearr_12675_13432 = state_12589__$1;
(statearr_12675_13432[(1)] = (11));

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
var statearr_12680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12680[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__);

(statearr_12680[(1)] = (1));

return statearr_12680;
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
}catch (e12682){var ex__10939__auto__ = e12682;
var statearr_12683_13433 = state_12589;
(statearr_12683_13433[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12589[(4)]))){
var statearr_12684_13434 = state_12589;
(statearr_12684_13434[(1)] = cljs.core.first((state_12589[(4)])));

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
var state__10978__auto__ = (function (){var statearr_12687 = f__10977__auto__();
(statearr_12687[(6)] = c__10976__auto__);

return statearr_12687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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
var c__10976__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12733){
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12751[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12751[(1)] = (1));

return statearr_12751;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12733){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12733);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12752){var ex__10939__auto__ = e12752;
var statearr_12753_13450 = state_12733;
(statearr_12753_13450[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12733[(4)]))){
var statearr_12754_13451 = state_12733;
(statearr_12754_13451[(1)] = cljs.core.first((state_12733[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12733;
state_12733 = G__13452;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12755 = f__10977__auto__();
(statearr_12755[(6)] = c__10976__auto___13439);

return statearr_12755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12760 = arguments.length;
switch (G__12760) {
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
var c__10976__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12802){
var state_val_12803 = (state_12802[(1)]);
if((state_val_12803 === (7))){
var inst_12795 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
var statearr_12804_13455 = state_12802__$1;
(statearr_12804_13455[(2)] = inst_12795);

(statearr_12804_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (1))){
var inst_12762 = (new Array(n));
var inst_12763 = inst_12762;
var inst_12764 = (0);
var state_12802__$1 = (function (){var statearr_12806 = state_12802;
(statearr_12806[(7)] = inst_12763);

(statearr_12806[(8)] = inst_12764);

return statearr_12806;
})();
var statearr_12807_13456 = state_12802__$1;
(statearr_12807_13456[(2)] = null);

(statearr_12807_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (4))){
var inst_12767 = (state_12802[(9)]);
var inst_12767__$1 = (state_12802[(2)]);
var inst_12768 = (inst_12767__$1 == null);
var inst_12769 = cljs.core.not(inst_12768);
var state_12802__$1 = (function (){var statearr_12809 = state_12802;
(statearr_12809[(9)] = inst_12767__$1);

return statearr_12809;
})();
if(inst_12769){
var statearr_12810_13457 = state_12802__$1;
(statearr_12810_13457[(1)] = (5));

} else {
var statearr_12811_13458 = state_12802__$1;
(statearr_12811_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (15))){
var inst_12789 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
var statearr_12812_13459 = state_12802__$1;
(statearr_12812_13459[(2)] = inst_12789);

(statearr_12812_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (13))){
var state_12802__$1 = state_12802;
var statearr_12814_13460 = state_12802__$1;
(statearr_12814_13460[(2)] = null);

(statearr_12814_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (6))){
var inst_12764 = (state_12802[(8)]);
var inst_12785 = (inst_12764 > (0));
var state_12802__$1 = state_12802;
if(cljs.core.truth_(inst_12785)){
var statearr_12815_13461 = state_12802__$1;
(statearr_12815_13461[(1)] = (12));

} else {
var statearr_12816_13462 = state_12802__$1;
(statearr_12816_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (3))){
var inst_12797 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12802__$1,inst_12797);
} else {
if((state_val_12803 === (12))){
var inst_12763 = (state_12802[(7)]);
var inst_12787 = cljs.core.vec(inst_12763);
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12802__$1,(15),out,inst_12787);
} else {
if((state_val_12803 === (2))){
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12802__$1,(4),ch);
} else {
if((state_val_12803 === (11))){
var inst_12779 = (state_12802[(2)]);
var inst_12780 = (new Array(n));
var inst_12763 = inst_12780;
var inst_12764 = (0);
var state_12802__$1 = (function (){var statearr_12819 = state_12802;
(statearr_12819[(7)] = inst_12763);

(statearr_12819[(8)] = inst_12764);

(statearr_12819[(10)] = inst_12779);

return statearr_12819;
})();
var statearr_12820_13463 = state_12802__$1;
(statearr_12820_13463[(2)] = null);

(statearr_12820_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (9))){
var inst_12763 = (state_12802[(7)]);
var inst_12777 = cljs.core.vec(inst_12763);
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12802__$1,(11),out,inst_12777);
} else {
if((state_val_12803 === (5))){
var inst_12763 = (state_12802[(7)]);
var inst_12764 = (state_12802[(8)]);
var inst_12772 = (state_12802[(11)]);
var inst_12767 = (state_12802[(9)]);
var inst_12771 = (inst_12763[inst_12764] = inst_12767);
var inst_12772__$1 = (inst_12764 + (1));
var inst_12773 = (inst_12772__$1 < n);
var state_12802__$1 = (function (){var statearr_12821 = state_12802;
(statearr_12821[(12)] = inst_12771);

(statearr_12821[(11)] = inst_12772__$1);

return statearr_12821;
})();
if(cljs.core.truth_(inst_12773)){
var statearr_12822_13464 = state_12802__$1;
(statearr_12822_13464[(1)] = (8));

} else {
var statearr_12823_13465 = state_12802__$1;
(statearr_12823_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (14))){
var inst_12792 = (state_12802[(2)]);
var inst_12793 = cljs.core.async.close_BANG_(out);
var state_12802__$1 = (function (){var statearr_12825 = state_12802;
(statearr_12825[(13)] = inst_12792);

return statearr_12825;
})();
var statearr_12826_13466 = state_12802__$1;
(statearr_12826_13466[(2)] = inst_12793);

(statearr_12826_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (10))){
var inst_12783 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
var statearr_12827_13467 = state_12802__$1;
(statearr_12827_13467[(2)] = inst_12783);

(statearr_12827_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (8))){
var inst_12763 = (state_12802[(7)]);
var inst_12772 = (state_12802[(11)]);
var tmp12824 = inst_12763;
var inst_12763__$1 = tmp12824;
var inst_12764 = inst_12772;
var state_12802__$1 = (function (){var statearr_12828 = state_12802;
(statearr_12828[(7)] = inst_12763__$1);

(statearr_12828[(8)] = inst_12764);

return statearr_12828;
})();
var statearr_12829_13468 = state_12802__$1;
(statearr_12829_13468[(2)] = null);

(statearr_12829_13468[(1)] = (2));


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
var statearr_12832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12832[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12832[(1)] = (1));

return statearr_12832;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12802){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12802);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12834){var ex__10939__auto__ = e12834;
var statearr_12835_13469 = state_12802;
(statearr_12835_13469[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12802[(4)]))){
var statearr_12836_13470 = state_12802;
(statearr_12836_13470[(1)] = cljs.core.first((state_12802[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12802;
state_12802 = G__13471;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12843 = f__10977__auto__();
(statearr_12843[(6)] = c__10976__auto___13454);

return statearr_12843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12856 = arguments.length;
switch (G__12856) {
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
var c__10976__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_12933){
var state_val_12934 = (state_12933[(1)]);
if((state_val_12934 === (7))){
var inst_12929 = (state_12933[(2)]);
var state_12933__$1 = state_12933;
var statearr_12943_13474 = state_12933__$1;
(statearr_12943_13474[(2)] = inst_12929);

(statearr_12943_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (1))){
var inst_12875 = [];
var inst_12876 = inst_12875;
var inst_12877 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12933__$1 = (function (){var statearr_12946 = state_12933;
(statearr_12946[(7)] = inst_12877);

(statearr_12946[(8)] = inst_12876);

return statearr_12946;
})();
var statearr_12948_13475 = state_12933__$1;
(statearr_12948_13475[(2)] = null);

(statearr_12948_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (4))){
var inst_12880 = (state_12933[(9)]);
var inst_12880__$1 = (state_12933[(2)]);
var inst_12882 = (inst_12880__$1 == null);
var inst_12883 = cljs.core.not(inst_12882);
var state_12933__$1 = (function (){var statearr_12950 = state_12933;
(statearr_12950[(9)] = inst_12880__$1);

return statearr_12950;
})();
if(inst_12883){
var statearr_12952_13476 = state_12933__$1;
(statearr_12952_13476[(1)] = (5));

} else {
var statearr_12953_13477 = state_12933__$1;
(statearr_12953_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (15))){
var inst_12923 = (state_12933[(2)]);
var state_12933__$1 = state_12933;
var statearr_12954_13478 = state_12933__$1;
(statearr_12954_13478[(2)] = inst_12923);

(statearr_12954_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (13))){
var state_12933__$1 = state_12933;
var statearr_12956_13479 = state_12933__$1;
(statearr_12956_13479[(2)] = null);

(statearr_12956_13479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (6))){
var inst_12876 = (state_12933[(8)]);
var inst_12914 = inst_12876.length;
var inst_12915 = (inst_12914 > (0));
var state_12933__$1 = state_12933;
if(cljs.core.truth_(inst_12915)){
var statearr_12957_13480 = state_12933__$1;
(statearr_12957_13480[(1)] = (12));

} else {
var statearr_12958_13481 = state_12933__$1;
(statearr_12958_13481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (3))){
var inst_12931 = (state_12933[(2)]);
var state_12933__$1 = state_12933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12933__$1,inst_12931);
} else {
if((state_val_12934 === (12))){
var inst_12876 = (state_12933[(8)]);
var inst_12917 = cljs.core.vec(inst_12876);
var state_12933__$1 = state_12933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12933__$1,(15),out,inst_12917);
} else {
if((state_val_12934 === (2))){
var state_12933__$1 = state_12933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12933__$1,(4),ch);
} else {
if((state_val_12934 === (11))){
var inst_12880 = (state_12933[(9)]);
var inst_12889 = (state_12933[(10)]);
var inst_12902 = (state_12933[(2)]);
var inst_12907 = [];
var inst_12908 = inst_12907.push(inst_12880);
var inst_12876 = inst_12907;
var inst_12877 = inst_12889;
var state_12933__$1 = (function (){var statearr_12959 = state_12933;
(statearr_12959[(7)] = inst_12877);

(statearr_12959[(8)] = inst_12876);

(statearr_12959[(11)] = inst_12908);

(statearr_12959[(12)] = inst_12902);

return statearr_12959;
})();
var statearr_12960_13482 = state_12933__$1;
(statearr_12960_13482[(2)] = null);

(statearr_12960_13482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (9))){
var inst_12876 = (state_12933[(8)]);
var inst_12900 = cljs.core.vec(inst_12876);
var state_12933__$1 = state_12933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12933__$1,(11),out,inst_12900);
} else {
if((state_val_12934 === (5))){
var inst_12877 = (state_12933[(7)]);
var inst_12880 = (state_12933[(9)]);
var inst_12889 = (state_12933[(10)]);
var inst_12889__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12880) : f.call(null,inst_12880));
var inst_12891 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12889__$1,inst_12877);
var inst_12892 = cljs.core.keyword_identical_QMARK_(inst_12877,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12893 = ((inst_12891) || (inst_12892));
var state_12933__$1 = (function (){var statearr_12963 = state_12933;
(statearr_12963[(10)] = inst_12889__$1);

return statearr_12963;
})();
if(cljs.core.truth_(inst_12893)){
var statearr_12965_13483 = state_12933__$1;
(statearr_12965_13483[(1)] = (8));

} else {
var statearr_12966_13484 = state_12933__$1;
(statearr_12966_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (14))){
var inst_12926 = (state_12933[(2)]);
var inst_12927 = cljs.core.async.close_BANG_(out);
var state_12933__$1 = (function (){var statearr_12974 = state_12933;
(statearr_12974[(13)] = inst_12926);

return statearr_12974;
})();
var statearr_12976_13485 = state_12933__$1;
(statearr_12976_13485[(2)] = inst_12927);

(statearr_12976_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (10))){
var inst_12911 = (state_12933[(2)]);
var state_12933__$1 = state_12933;
var statearr_12977_13486 = state_12933__$1;
(statearr_12977_13486[(2)] = inst_12911);

(statearr_12977_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12934 === (8))){
var inst_12880 = (state_12933[(9)]);
var inst_12889 = (state_12933[(10)]);
var inst_12876 = (state_12933[(8)]);
var inst_12896 = inst_12876.push(inst_12880);
var tmp12967 = inst_12876;
var inst_12876__$1 = tmp12967;
var inst_12877 = inst_12889;
var state_12933__$1 = (function (){var statearr_12978 = state_12933;
(statearr_12978[(7)] = inst_12877);

(statearr_12978[(14)] = inst_12896);

(statearr_12978[(8)] = inst_12876__$1);

return statearr_12978;
})();
var statearr_12979_13487 = state_12933__$1;
(statearr_12979_13487[(2)] = null);

(statearr_12979_13487[(1)] = (2));


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
var statearr_12980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12980[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12980[(1)] = (1));

return statearr_12980;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12933){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12933);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12982){var ex__10939__auto__ = e12982;
var statearr_12983_13488 = state_12933;
(statearr_12983_13488[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12933[(4)]))){
var statearr_12984_13489 = state_12933;
(statearr_12984_13489[(1)] = cljs.core.first((state_12933[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12933;
state_12933 = G__13490;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_12986 = f__10977__auto__();
(statearr_12986[(6)] = c__10976__auto___13473);

return statearr_12986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
