goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11105 = arguments.length;
switch (G__11105) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11106 = (function (f,blockable,meta11107){
this.f = f;
this.blockable = blockable;
this.meta11107 = meta11107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11108,meta11107__$1){
var self__ = this;
var _11108__$1 = this;
return (new cljs.core.async.t_cljs$core$async11106(self__.f,self__.blockable,meta11107__$1));
}));

(cljs.core.async.t_cljs$core$async11106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11108){
var self__ = this;
var _11108__$1 = this;
return self__.meta11107;
}));

(cljs.core.async.t_cljs$core$async11106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11107","meta11107",533404185,null)], null);
}));

(cljs.core.async.t_cljs$core$async11106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11106");

(cljs.core.async.t_cljs$core$async11106.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11106.
 */
cljs.core.async.__GT_t_cljs$core$async11106 = (function cljs$core$async$__GT_t_cljs$core$async11106(f__$1,blockable__$1,meta11107){
return (new cljs.core.async.t_cljs$core$async11106(f__$1,blockable__$1,meta11107));
});

}

return (new cljs.core.async.t_cljs$core$async11106(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11113 = arguments.length;
switch (G__11113) {
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
var G__11115 = arguments.length;
switch (G__11115) {
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
var G__11117 = arguments.length;
switch (G__11117) {
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
var G__11119 = arguments.length;
switch (G__11119) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11129 = (function (flag,cb,meta11130){
this.flag = flag;
this.cb = cb;
this.meta11130 = meta11130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11131,meta11130__$1){
var self__ = this;
var _11131__$1 = this;
return (new cljs.core.async.t_cljs$core$async11129(self__.flag,self__.cb,meta11130__$1));
}));

(cljs.core.async.t_cljs$core$async11129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11131){
var self__ = this;
var _11131__$1 = this;
return self__.meta11130;
}));

(cljs.core.async.t_cljs$core$async11129.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11130","meta11130",192864608,null)], null);
}));

(cljs.core.async.t_cljs$core$async11129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11129");

(cljs.core.async.t_cljs$core$async11129.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11129.
 */
cljs.core.async.__GT_t_cljs$core$async11129 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11129(flag__$1,cb__$1,meta11130){
return (new cljs.core.async.t_cljs$core$async11129(flag__$1,cb__$1,meta11130));
});

}

return (new cljs.core.async.t_cljs$core$async11129(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11132_SHARP_){
var G__11134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11132_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11134) : fret.call(null,G__11134));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11133_SHARP_){
var G__11135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11133_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11135) : fret.call(null,G__11135));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11138){
var map__11139 = p__11138;
var map__11139__$1 = (((((!((map__11139 == null))))?(((((map__11139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11139):map__11139);
var opts = map__11139__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11136){
var G__11137 = cljs.core.first(seq11136);
var seq11136__$1 = cljs.core.next(seq11136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11137,seq11136__$1);
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
var G__11148 = arguments.length;
switch (G__11148) {
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
var c__11039__auto___13012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11172){
var state_val_11173 = (state_11172[(1)]);
if((state_val_11173 === (7))){
var inst_11168 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
var statearr_11174_13013 = state_11172__$1;
(statearr_11174_13013[(2)] = inst_11168);

(statearr_11174_13013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (1))){
var state_11172__$1 = state_11172;
var statearr_11175_13014 = state_11172__$1;
(statearr_11175_13014[(2)] = null);

(statearr_11175_13014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (4))){
var inst_11151 = (state_11172[(7)]);
var inst_11151__$1 = (state_11172[(2)]);
var inst_11152 = (inst_11151__$1 == null);
var state_11172__$1 = (function (){var statearr_11176 = state_11172;
(statearr_11176[(7)] = inst_11151__$1);

return statearr_11176;
})();
if(cljs.core.truth_(inst_11152)){
var statearr_11177_13015 = state_11172__$1;
(statearr_11177_13015[(1)] = (5));

} else {
var statearr_11178_13016 = state_11172__$1;
(statearr_11178_13016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (13))){
var state_11172__$1 = state_11172;
var statearr_11179_13017 = state_11172__$1;
(statearr_11179_13017[(2)] = null);

(statearr_11179_13017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (6))){
var inst_11151 = (state_11172[(7)]);
var state_11172__$1 = state_11172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11172__$1,(11),to,inst_11151);
} else {
if((state_val_11173 === (3))){
var inst_11170 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11172__$1,inst_11170);
} else {
if((state_val_11173 === (12))){
var state_11172__$1 = state_11172;
var statearr_11186_13018 = state_11172__$1;
(statearr_11186_13018[(2)] = null);

(statearr_11186_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (2))){
var state_11172__$1 = state_11172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11172__$1,(4),from);
} else {
if((state_val_11173 === (11))){
var inst_11161 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
if(cljs.core.truth_(inst_11161)){
var statearr_11187_13019 = state_11172__$1;
(statearr_11187_13019[(1)] = (12));

} else {
var statearr_11188_13020 = state_11172__$1;
(statearr_11188_13020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (9))){
var state_11172__$1 = state_11172;
var statearr_11189_13021 = state_11172__$1;
(statearr_11189_13021[(2)] = null);

(statearr_11189_13021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (5))){
var state_11172__$1 = state_11172;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11190_13022 = state_11172__$1;
(statearr_11190_13022[(1)] = (8));

} else {
var statearr_11191_13023 = state_11172__$1;
(statearr_11191_13023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (14))){
var inst_11166 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
var statearr_11192_13024 = state_11172__$1;
(statearr_11192_13024[(2)] = inst_11166);

(statearr_11192_13024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (10))){
var inst_11158 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
var statearr_11193_13025 = state_11172__$1;
(statearr_11193_13025[(2)] = inst_11158);

(statearr_11193_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (8))){
var inst_11155 = cljs.core.async.close_BANG_(to);
var state_11172__$1 = state_11172;
var statearr_11194_13026 = state_11172__$1;
(statearr_11194_13026[(2)] = inst_11155);

(statearr_11194_13026[(1)] = (10));


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
var statearr_11195 = [null,null,null,null,null,null,null,null];
(statearr_11195[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11195[(1)] = (1));

return statearr_11195;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11172){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11172);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11196){var ex__10939__auto__ = e11196;
var statearr_11197_13027 = state_11172;
(statearr_11197_13027[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11172[(4)]))){
var statearr_11198_13028 = state_11172;
(statearr_11198_13028[(1)] = cljs.core.first((state_11172[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_11172;
state_11172 = G__13029;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11199 = f__11040__auto__();
(statearr_11199[(6)] = c__11039__auto___13012);

return statearr_11199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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
var process = (function (p__11200){
var vec__11201 = p__11200;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11201,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11201,(1),null);
var job = vec__11201;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11039__auto___13031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11208){
var state_val_11209 = (state_11208[(1)]);
if((state_val_11209 === (1))){
var state_11208__$1 = state_11208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11208__$1,(2),res,v);
} else {
if((state_val_11209 === (2))){
var inst_11205 = (state_11208[(2)]);
var inst_11206 = cljs.core.async.close_BANG_(res);
var state_11208__$1 = (function (){var statearr_11210 = state_11208;
(statearr_11210[(7)] = inst_11205);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11208__$1,inst_11206);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11211 = [null,null,null,null,null,null,null,null];
(statearr_11211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11211[(1)] = (1));

return statearr_11211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11208){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11208);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11212){var ex__10939__auto__ = e11212;
var statearr_11213_13032 = state_11208;
(statearr_11213_13032[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11208[(4)]))){
var statearr_11214_13034 = state_11208;
(statearr_11214_13034[(1)] = cljs.core.first((state_11208[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13035 = state_11208;
state_11208 = G__13035;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11215 = f__11040__auto__();
(statearr_11215[(6)] = c__11039__auto___13031);

return statearr_11215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11220){
var vec__11221 = p__11220;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11221,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11221,(1),null);
var job = vec__11221;
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
var n__4613__auto___13036 = n;
var __13037 = (0);
while(true){
if((__13037 < n__4613__auto___13036)){
var G__11224_13038 = type;
var G__11224_13039__$1 = (((G__11224_13038 instanceof cljs.core.Keyword))?G__11224_13038.fqn:null);
switch (G__11224_13039__$1) {
case "compute":
var c__11039__auto___13041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13037,c__11039__auto___13041,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async){
return (function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = ((function (__13037,c__11039__auto___13041,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async){
return (function (state_11237){
var state_val_11238 = (state_11237[(1)]);
if((state_val_11238 === (1))){
var state_11237__$1 = state_11237;
var statearr_11239_13042 = state_11237__$1;
(statearr_11239_13042[(2)] = null);

(statearr_11239_13042[(1)] = (2));


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
var inst_11228 = process(inst_11227);
var state_11237__$1 = state_11237;
if(cljs.core.truth_(inst_11228)){
var statearr_11240_13043 = state_11237__$1;
(statearr_11240_13043[(1)] = (5));

} else {
var statearr_11241_13046 = state_11237__$1;
(statearr_11241_13046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (5))){
var state_11237__$1 = state_11237;
var statearr_11242_13047 = state_11237__$1;
(statearr_11242_13047[(2)] = null);

(statearr_11242_13047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (6))){
var state_11237__$1 = state_11237;
var statearr_11243_13049 = state_11237__$1;
(statearr_11243_13049[(2)] = null);

(statearr_11243_13049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (7))){
var inst_11233 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11244_13069 = state_11237__$1;
(statearr_11244_13069[(2)] = inst_11233);

(statearr_11244_13069[(1)] = (3));


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
});})(__13037,c__11039__auto___13041,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async))
;
return ((function (__13037,switch__10935__auto__,c__11039__auto___13041,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async){
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
}catch (e11246){var ex__10939__auto__ = e11246;
var statearr_11247_13070 = state_11237;
(statearr_11247_13070[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11237[(4)]))){
var statearr_11248_13071 = state_11237;
(statearr_11248_13071[(1)] = cljs.core.first((state_11237[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13072 = state_11237;
state_11237 = G__13072;
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
;})(__13037,switch__10935__auto__,c__11039__auto___13041,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async))
})();
var state__11041__auto__ = (function (){var statearr_11250 = f__11040__auto__();
(statearr_11250[(6)] = c__11039__auto___13041);

return statearr_11250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
});})(__13037,c__11039__auto___13041,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async))
);


break;
case "async":
var c__11039__auto___13075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13037,c__11039__auto___13075,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async){
return (function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = ((function (__13037,c__11039__auto___13075,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async){
return (function (state_11263){
var state_val_11264 = (state_11263[(1)]);
if((state_val_11264 === (1))){
var state_11263__$1 = state_11263;
var statearr_11265_13077 = state_11263__$1;
(statearr_11265_13077[(2)] = null);

(statearr_11265_13077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (2))){
var state_11263__$1 = state_11263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11263__$1,(4),jobs);
} else {
if((state_val_11264 === (3))){
var inst_11261 = (state_11263[(2)]);
var state_11263__$1 = state_11263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11263__$1,inst_11261);
} else {
if((state_val_11264 === (4))){
var inst_11253 = (state_11263[(2)]);
var inst_11254 = async(inst_11253);
var state_11263__$1 = state_11263;
if(cljs.core.truth_(inst_11254)){
var statearr_11266_13078 = state_11263__$1;
(statearr_11266_13078[(1)] = (5));

} else {
var statearr_11267_13079 = state_11263__$1;
(statearr_11267_13079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (5))){
var state_11263__$1 = state_11263;
var statearr_11268_13080 = state_11263__$1;
(statearr_11268_13080[(2)] = null);

(statearr_11268_13080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (6))){
var state_11263__$1 = state_11263;
var statearr_11269_13081 = state_11263__$1;
(statearr_11269_13081[(2)] = null);

(statearr_11269_13081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11264 === (7))){
var inst_11259 = (state_11263[(2)]);
var state_11263__$1 = state_11263;
var statearr_11270_13082 = state_11263__$1;
(statearr_11270_13082[(2)] = inst_11259);

(statearr_11270_13082[(1)] = (3));


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
});})(__13037,c__11039__auto___13075,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async))
;
return ((function (__13037,switch__10935__auto__,c__11039__auto___13075,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0 = (function (){
var statearr_11271 = [null,null,null,null,null,null,null];
(statearr_11271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11271[(1)] = (1));

return statearr_11271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11263){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11263);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11272){var ex__10939__auto__ = e11272;
var statearr_11273_13084 = state_11263;
(statearr_11273_13084[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11263[(4)]))){
var statearr_11274_13085 = state_11263;
(statearr_11274_13085[(1)] = cljs.core.first((state_11263[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11263;
state_11263 = G__13086;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
;})(__13037,switch__10935__auto__,c__11039__auto___13075,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async))
})();
var state__11041__auto__ = (function (){var statearr_11275 = f__11040__auto__();
(statearr_11275[(6)] = c__11039__auto___13075);

return statearr_11275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
});})(__13037,c__11039__auto___13075,G__11224_13038,G__11224_13039__$1,n__4613__auto___13036,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11224_13039__$1)].join('')));

}

var G__13087 = (__13037 + (1));
__13037 = G__13087;
continue;
} else {
}
break;
}

var c__11039__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11297){
var state_val_11298 = (state_11297[(1)]);
if((state_val_11298 === (7))){
var inst_11293 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
var statearr_11299_13089 = state_11297__$1;
(statearr_11299_13089[(2)] = inst_11293);

(statearr_11299_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (1))){
var state_11297__$1 = state_11297;
var statearr_11300_13090 = state_11297__$1;
(statearr_11300_13090[(2)] = null);

(statearr_11300_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (4))){
var inst_11278 = (state_11297[(7)]);
var inst_11278__$1 = (state_11297[(2)]);
var inst_11279 = (inst_11278__$1 == null);
var state_11297__$1 = (function (){var statearr_11301 = state_11297;
(statearr_11301[(7)] = inst_11278__$1);

return statearr_11301;
})();
if(cljs.core.truth_(inst_11279)){
var statearr_11302_13091 = state_11297__$1;
(statearr_11302_13091[(1)] = (5));

} else {
var statearr_11303_13092 = state_11297__$1;
(statearr_11303_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (6))){
var inst_11283 = (state_11297[(8)]);
var inst_11278 = (state_11297[(7)]);
var inst_11283__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11285 = [inst_11278,inst_11283__$1];
var inst_11286 = (new cljs.core.PersistentVector(null,2,(5),inst_11284,inst_11285,null));
var state_11297__$1 = (function (){var statearr_11304 = state_11297;
(statearr_11304[(8)] = inst_11283__$1);

return statearr_11304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11297__$1,(8),jobs,inst_11286);
} else {
if((state_val_11298 === (3))){
var inst_11295 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11297__$1,inst_11295);
} else {
if((state_val_11298 === (2))){
var state_11297__$1 = state_11297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11297__$1,(4),from);
} else {
if((state_val_11298 === (9))){
var inst_11290 = (state_11297[(2)]);
var state_11297__$1 = (function (){var statearr_11305 = state_11297;
(statearr_11305[(9)] = inst_11290);

return statearr_11305;
})();
var statearr_11306_13093 = state_11297__$1;
(statearr_11306_13093[(2)] = null);

(statearr_11306_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (5))){
var inst_11281 = cljs.core.async.close_BANG_(jobs);
var state_11297__$1 = state_11297;
var statearr_11307_13094 = state_11297__$1;
(statearr_11307_13094[(2)] = inst_11281);

(statearr_11307_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (8))){
var inst_11283 = (state_11297[(8)]);
var inst_11288 = (state_11297[(2)]);
var state_11297__$1 = (function (){var statearr_11308 = state_11297;
(statearr_11308[(10)] = inst_11288);

return statearr_11308;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11297__$1,(9),results,inst_11283);
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
var statearr_11309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11309[(1)] = (1));

return statearr_11309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11297){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11297);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11310){var ex__10939__auto__ = e11310;
var statearr_11311_13095 = state_11297;
(statearr_11311_13095[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11297[(4)]))){
var statearr_11312_13096 = state_11297;
(statearr_11312_13096[(1)] = cljs.core.first((state_11297[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11297;
state_11297 = G__13097;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11313 = f__11040__auto__();
(statearr_11313[(6)] = c__11039__auto___13088);

return statearr_11313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));


var c__11039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11351){
var state_val_11352 = (state_11351[(1)]);
if((state_val_11352 === (7))){
var inst_11347 = (state_11351[(2)]);
var state_11351__$1 = state_11351;
var statearr_11353_13098 = state_11351__$1;
(statearr_11353_13098[(2)] = inst_11347);

(statearr_11353_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (20))){
var state_11351__$1 = state_11351;
var statearr_11354_13099 = state_11351__$1;
(statearr_11354_13099[(2)] = null);

(statearr_11354_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (1))){
var state_11351__$1 = state_11351;
var statearr_11355_13100 = state_11351__$1;
(statearr_11355_13100[(2)] = null);

(statearr_11355_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (4))){
var inst_11316 = (state_11351[(7)]);
var inst_11316__$1 = (state_11351[(2)]);
var inst_11317 = (inst_11316__$1 == null);
var state_11351__$1 = (function (){var statearr_11356 = state_11351;
(statearr_11356[(7)] = inst_11316__$1);

return statearr_11356;
})();
if(cljs.core.truth_(inst_11317)){
var statearr_11357_13101 = state_11351__$1;
(statearr_11357_13101[(1)] = (5));

} else {
var statearr_11358_13102 = state_11351__$1;
(statearr_11358_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (15))){
var inst_11329 = (state_11351[(8)]);
var state_11351__$1 = state_11351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11351__$1,(18),to,inst_11329);
} else {
if((state_val_11352 === (21))){
var inst_11342 = (state_11351[(2)]);
var state_11351__$1 = state_11351;
var statearr_11359_13103 = state_11351__$1;
(statearr_11359_13103[(2)] = inst_11342);

(statearr_11359_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (13))){
var inst_11344 = (state_11351[(2)]);
var state_11351__$1 = (function (){var statearr_11360 = state_11351;
(statearr_11360[(9)] = inst_11344);

return statearr_11360;
})();
var statearr_11361_13104 = state_11351__$1;
(statearr_11361_13104[(2)] = null);

(statearr_11361_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (6))){
var inst_11316 = (state_11351[(7)]);
var state_11351__$1 = state_11351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11351__$1,(11),inst_11316);
} else {
if((state_val_11352 === (17))){
var inst_11337 = (state_11351[(2)]);
var state_11351__$1 = state_11351;
if(cljs.core.truth_(inst_11337)){
var statearr_11363_13105 = state_11351__$1;
(statearr_11363_13105[(1)] = (19));

} else {
var statearr_11364_13106 = state_11351__$1;
(statearr_11364_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (3))){
var inst_11349 = (state_11351[(2)]);
var state_11351__$1 = state_11351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11351__$1,inst_11349);
} else {
if((state_val_11352 === (12))){
var inst_11326 = (state_11351[(10)]);
var state_11351__$1 = state_11351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11351__$1,(14),inst_11326);
} else {
if((state_val_11352 === (2))){
var state_11351__$1 = state_11351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11351__$1,(4),results);
} else {
if((state_val_11352 === (19))){
var state_11351__$1 = state_11351;
var statearr_11365_13107 = state_11351__$1;
(statearr_11365_13107[(2)] = null);

(statearr_11365_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (11))){
var inst_11326 = (state_11351[(2)]);
var state_11351__$1 = (function (){var statearr_11366 = state_11351;
(statearr_11366[(10)] = inst_11326);

return statearr_11366;
})();
var statearr_11367_13108 = state_11351__$1;
(statearr_11367_13108[(2)] = null);

(statearr_11367_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (9))){
var state_11351__$1 = state_11351;
var statearr_11368_13109 = state_11351__$1;
(statearr_11368_13109[(2)] = null);

(statearr_11368_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (5))){
var state_11351__$1 = state_11351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11370_13110 = state_11351__$1;
(statearr_11370_13110[(1)] = (8));

} else {
var statearr_11371_13111 = state_11351__$1;
(statearr_11371_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (14))){
var inst_11329 = (state_11351[(8)]);
var inst_11329__$1 = (state_11351[(2)]);
var inst_11330 = (inst_11329__$1 == null);
var inst_11331 = cljs.core.not(inst_11330);
var state_11351__$1 = (function (){var statearr_11373 = state_11351;
(statearr_11373[(8)] = inst_11329__$1);

return statearr_11373;
})();
if(inst_11331){
var statearr_11374_13112 = state_11351__$1;
(statearr_11374_13112[(1)] = (15));

} else {
var statearr_11375_13113 = state_11351__$1;
(statearr_11375_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (16))){
var state_11351__$1 = state_11351;
var statearr_11376_13114 = state_11351__$1;
(statearr_11376_13114[(2)] = false);

(statearr_11376_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (10))){
var inst_11323 = (state_11351[(2)]);
var state_11351__$1 = state_11351;
var statearr_11377_13115 = state_11351__$1;
(statearr_11377_13115[(2)] = inst_11323);

(statearr_11377_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (18))){
var inst_11334 = (state_11351[(2)]);
var state_11351__$1 = state_11351;
var statearr_11378_13116 = state_11351__$1;
(statearr_11378_13116[(2)] = inst_11334);

(statearr_11378_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11352 === (8))){
var inst_11320 = cljs.core.async.close_BANG_(to);
var state_11351__$1 = state_11351;
var statearr_11379_13117 = state_11351__$1;
(statearr_11379_13117[(2)] = inst_11320);

(statearr_11379_13117[(1)] = (10));


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
var statearr_11380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__);

(statearr_11380[(1)] = (1));

return statearr_11380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1 = (function (state_11351){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11351);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11381){var ex__10939__auto__ = e11381;
var statearr_11382_13118 = state_11351;
(statearr_11382_13118[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11351[(4)]))){
var statearr_11383_13119 = state_11351;
(statearr_11383_13119[(1)] = cljs.core.first((state_11351[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11351;
state_11351 = G__13120;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__ = function(state_11351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1.call(this,state_11351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11384 = f__11040__auto__();
(statearr_11384[(6)] = c__11039__auto__);

return statearr_11384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));

return c__11039__auto__;
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
var G__11386 = arguments.length;
switch (G__11386) {
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
var G__11388 = arguments.length;
switch (G__11388) {
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
var G__11393 = arguments.length;
switch (G__11393) {
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
var c__11039__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11419){
var state_val_11420 = (state_11419[(1)]);
if((state_val_11420 === (7))){
var inst_11415 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
var statearr_11421_13125 = state_11419__$1;
(statearr_11421_13125[(2)] = inst_11415);

(statearr_11421_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (1))){
var state_11419__$1 = state_11419;
var statearr_11422_13126 = state_11419__$1;
(statearr_11422_13126[(2)] = null);

(statearr_11422_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (4))){
var inst_11396 = (state_11419[(7)]);
var inst_11396__$1 = (state_11419[(2)]);
var inst_11397 = (inst_11396__$1 == null);
var state_11419__$1 = (function (){var statearr_11423 = state_11419;
(statearr_11423[(7)] = inst_11396__$1);

return statearr_11423;
})();
if(cljs.core.truth_(inst_11397)){
var statearr_11424_13127 = state_11419__$1;
(statearr_11424_13127[(1)] = (5));

} else {
var statearr_11425_13128 = state_11419__$1;
(statearr_11425_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (13))){
var state_11419__$1 = state_11419;
var statearr_11426_13129 = state_11419__$1;
(statearr_11426_13129[(2)] = null);

(statearr_11426_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (6))){
var inst_11396 = (state_11419[(7)]);
var inst_11402 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11396) : p.call(null,inst_11396));
var state_11419__$1 = state_11419;
if(cljs.core.truth_(inst_11402)){
var statearr_11427_13130 = state_11419__$1;
(statearr_11427_13130[(1)] = (9));

} else {
var statearr_11428_13131 = state_11419__$1;
(statearr_11428_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (3))){
var inst_11417 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11419__$1,inst_11417);
} else {
if((state_val_11420 === (12))){
var state_11419__$1 = state_11419;
var statearr_11429_13132 = state_11419__$1;
(statearr_11429_13132[(2)] = null);

(statearr_11429_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (2))){
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11419__$1,(4),ch);
} else {
if((state_val_11420 === (11))){
var inst_11396 = (state_11419[(7)]);
var inst_11406 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11419__$1,(8),inst_11406,inst_11396);
} else {
if((state_val_11420 === (9))){
var state_11419__$1 = state_11419;
var statearr_11433_13133 = state_11419__$1;
(statearr_11433_13133[(2)] = tc);

(statearr_11433_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (5))){
var inst_11399 = cljs.core.async.close_BANG_(tc);
var inst_11400 = cljs.core.async.close_BANG_(fc);
var state_11419__$1 = (function (){var statearr_11436 = state_11419;
(statearr_11436[(8)] = inst_11399);

return statearr_11436;
})();
var statearr_11437_13134 = state_11419__$1;
(statearr_11437_13134[(2)] = inst_11400);

(statearr_11437_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (14))){
var inst_11413 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
var statearr_11438_13135 = state_11419__$1;
(statearr_11438_13135[(2)] = inst_11413);

(statearr_11438_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (10))){
var state_11419__$1 = state_11419;
var statearr_11439_13136 = state_11419__$1;
(statearr_11439_13136[(2)] = fc);

(statearr_11439_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11420 === (8))){
var inst_11408 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
if(cljs.core.truth_(inst_11408)){
var statearr_11440_13137 = state_11419__$1;
(statearr_11440_13137[(1)] = (12));

} else {
var statearr_11441_13138 = state_11419__$1;
(statearr_11441_13138[(1)] = (13));

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
var statearr_11442 = [null,null,null,null,null,null,null,null,null];
(statearr_11442[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11442[(1)] = (1));

return statearr_11442;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11419){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11419);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11443){var ex__10939__auto__ = e11443;
var statearr_11444_13139 = state_11419;
(statearr_11444_13139[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11419[(4)]))){
var statearr_11445_13140 = state_11419;
(statearr_11445_13140[(1)] = cljs.core.first((state_11419[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11419;
state_11419 = G__13141;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11446 = f__11040__auto__();
(statearr_11446[(6)] = c__11039__auto___13124);

return statearr_11446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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
var c__11039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11468){
var state_val_11469 = (state_11468[(1)]);
if((state_val_11469 === (7))){
var inst_11464 = (state_11468[(2)]);
var state_11468__$1 = state_11468;
var statearr_11482_13142 = state_11468__$1;
(statearr_11482_13142[(2)] = inst_11464);

(statearr_11482_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11469 === (1))){
var inst_11447 = init;
var inst_11448 = inst_11447;
var state_11468__$1 = (function (){var statearr_11483 = state_11468;
(statearr_11483[(7)] = inst_11448);

return statearr_11483;
})();
var statearr_11484_13143 = state_11468__$1;
(statearr_11484_13143[(2)] = null);

(statearr_11484_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11469 === (4))){
var inst_11451 = (state_11468[(8)]);
var inst_11451__$1 = (state_11468[(2)]);
var inst_11452 = (inst_11451__$1 == null);
var state_11468__$1 = (function (){var statearr_11485 = state_11468;
(statearr_11485[(8)] = inst_11451__$1);

return statearr_11485;
})();
if(cljs.core.truth_(inst_11452)){
var statearr_11488_13144 = state_11468__$1;
(statearr_11488_13144[(1)] = (5));

} else {
var statearr_11489_13145 = state_11468__$1;
(statearr_11489_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11469 === (6))){
var inst_11448 = (state_11468[(7)]);
var inst_11455 = (state_11468[(9)]);
var inst_11451 = (state_11468[(8)]);
var inst_11455__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11448,inst_11451) : f.call(null,inst_11448,inst_11451));
var inst_11456 = cljs.core.reduced_QMARK_(inst_11455__$1);
var state_11468__$1 = (function (){var statearr_11491 = state_11468;
(statearr_11491[(9)] = inst_11455__$1);

return statearr_11491;
})();
if(inst_11456){
var statearr_11492_13146 = state_11468__$1;
(statearr_11492_13146[(1)] = (8));

} else {
var statearr_11493_13147 = state_11468__$1;
(statearr_11493_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11469 === (3))){
var inst_11466 = (state_11468[(2)]);
var state_11468__$1 = state_11468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11468__$1,inst_11466);
} else {
if((state_val_11469 === (2))){
var state_11468__$1 = state_11468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11468__$1,(4),ch);
} else {
if((state_val_11469 === (9))){
var inst_11455 = (state_11468[(9)]);
var inst_11448 = inst_11455;
var state_11468__$1 = (function (){var statearr_11494 = state_11468;
(statearr_11494[(7)] = inst_11448);

return statearr_11494;
})();
var statearr_11495_13148 = state_11468__$1;
(statearr_11495_13148[(2)] = null);

(statearr_11495_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11469 === (5))){
var inst_11448 = (state_11468[(7)]);
var state_11468__$1 = state_11468;
var statearr_11496_13149 = state_11468__$1;
(statearr_11496_13149[(2)] = inst_11448);

(statearr_11496_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11469 === (10))){
var inst_11462 = (state_11468[(2)]);
var state_11468__$1 = state_11468;
var statearr_11497_13150 = state_11468__$1;
(statearr_11497_13150[(2)] = inst_11462);

(statearr_11497_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11469 === (8))){
var inst_11455 = (state_11468[(9)]);
var inst_11458 = cljs.core.deref(inst_11455);
var state_11468__$1 = state_11468;
var statearr_11498_13151 = state_11468__$1;
(statearr_11498_13151[(2)] = inst_11458);

(statearr_11498_13151[(1)] = (10));


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
var statearr_11499 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11499[(0)] = cljs$core$async$reduce_$_state_machine__10936__auto__);

(statearr_11499[(1)] = (1));

return statearr_11499;
});
var cljs$core$async$reduce_$_state_machine__10936__auto____1 = (function (state_11468){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11468);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11500){var ex__10939__auto__ = e11500;
var statearr_11501_13152 = state_11468;
(statearr_11501_13152[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11468[(4)]))){
var statearr_11502_13153 = state_11468;
(statearr_11502_13153[(1)] = cljs.core.first((state_11468[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11468;
state_11468 = G__13154;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10936__auto__ = function(state_11468){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10936__auto____1.call(this,state_11468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10936__auto____0;
cljs$core$async$reduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10936__auto____1;
return cljs$core$async$reduce_$_state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11505 = f__11040__auto__();
(statearr_11505[(6)] = c__11039__auto__);

return statearr_11505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));

return c__11039__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11518){
var state_val_11519 = (state_11518[(1)]);
if((state_val_11519 === (1))){
var inst_11513 = cljs.core.async.reduce(f__$1,init,ch);
var state_11518__$1 = state_11518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11518__$1,(2),inst_11513);
} else {
if((state_val_11519 === (2))){
var inst_11515 = (state_11518[(2)]);
var inst_11516 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11515) : f__$1.call(null,inst_11515));
var state_11518__$1 = state_11518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11518__$1,inst_11516);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10936__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10936__auto____0 = (function (){
var statearr_11520 = [null,null,null,null,null,null,null];
(statearr_11520[(0)] = cljs$core$async$transduce_$_state_machine__10936__auto__);

(statearr_11520[(1)] = (1));

return statearr_11520;
});
var cljs$core$async$transduce_$_state_machine__10936__auto____1 = (function (state_11518){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11518);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11521){var ex__10939__auto__ = e11521;
var statearr_11522_13155 = state_11518;
(statearr_11522_13155[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11518[(4)]))){
var statearr_11523_13156 = state_11518;
(statearr_11523_13156[(1)] = cljs.core.first((state_11518[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11518;
state_11518 = G__13157;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10936__auto__ = function(state_11518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10936__auto____1.call(this,state_11518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10936__auto____0;
cljs$core$async$transduce_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10936__auto____1;
return cljs$core$async$transduce_$_state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11526 = f__11040__auto__();
(statearr_11526[(6)] = c__11039__auto__);

return statearr_11526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));

return c__11039__auto__;
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
var G__11529 = arguments.length;
switch (G__11529) {
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
var c__11039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11555){
var state_val_11556 = (state_11555[(1)]);
if((state_val_11556 === (7))){
var inst_11537 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11557_13159 = state_11555__$1;
(statearr_11557_13159[(2)] = inst_11537);

(statearr_11557_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (1))){
var inst_11531 = cljs.core.seq(coll);
var inst_11532 = inst_11531;
var state_11555__$1 = (function (){var statearr_11558 = state_11555;
(statearr_11558[(7)] = inst_11532);

return statearr_11558;
})();
var statearr_11559_13160 = state_11555__$1;
(statearr_11559_13160[(2)] = null);

(statearr_11559_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (4))){
var inst_11532 = (state_11555[(7)]);
var inst_11535 = cljs.core.first(inst_11532);
var state_11555__$1 = state_11555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11555__$1,(7),ch,inst_11535);
} else {
if((state_val_11556 === (13))){
var inst_11549 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11560_13161 = state_11555__$1;
(statearr_11560_13161[(2)] = inst_11549);

(statearr_11560_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (6))){
var inst_11540 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
if(cljs.core.truth_(inst_11540)){
var statearr_11561_13162 = state_11555__$1;
(statearr_11561_13162[(1)] = (8));

} else {
var statearr_11562_13163 = state_11555__$1;
(statearr_11562_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (3))){
var inst_11553 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11555__$1,inst_11553);
} else {
if((state_val_11556 === (12))){
var state_11555__$1 = state_11555;
var statearr_11563_13164 = state_11555__$1;
(statearr_11563_13164[(2)] = null);

(statearr_11563_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (2))){
var inst_11532 = (state_11555[(7)]);
var state_11555__$1 = state_11555;
if(cljs.core.truth_(inst_11532)){
var statearr_11564_13165 = state_11555__$1;
(statearr_11564_13165[(1)] = (4));

} else {
var statearr_11565_13166 = state_11555__$1;
(statearr_11565_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (11))){
var inst_11546 = cljs.core.async.close_BANG_(ch);
var state_11555__$1 = state_11555;
var statearr_11566_13167 = state_11555__$1;
(statearr_11566_13167[(2)] = inst_11546);

(statearr_11566_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (9))){
var state_11555__$1 = state_11555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11567_13168 = state_11555__$1;
(statearr_11567_13168[(1)] = (11));

} else {
var statearr_11568_13169 = state_11555__$1;
(statearr_11568_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (5))){
var inst_11532 = (state_11555[(7)]);
var state_11555__$1 = state_11555;
var statearr_11569_13170 = state_11555__$1;
(statearr_11569_13170[(2)] = inst_11532);

(statearr_11569_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (10))){
var inst_11551 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11570_13171 = state_11555__$1;
(statearr_11570_13171[(2)] = inst_11551);

(statearr_11570_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (8))){
var inst_11532 = (state_11555[(7)]);
var inst_11542 = cljs.core.next(inst_11532);
var inst_11532__$1 = inst_11542;
var state_11555__$1 = (function (){var statearr_11571 = state_11555;
(statearr_11571[(7)] = inst_11532__$1);

return statearr_11571;
})();
var statearr_11572_13172 = state_11555__$1;
(statearr_11572_13172[(2)] = null);

(statearr_11572_13172[(1)] = (2));


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
var statearr_11573 = [null,null,null,null,null,null,null,null];
(statearr_11573[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_11573[(1)] = (1));

return statearr_11573;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_11555){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_11555);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e11574){var ex__10939__auto__ = e11574;
var statearr_11575_13173 = state_11555;
(statearr_11575_13173[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11555[(4)]))){
var statearr_11576_13174 = state_11555;
(statearr_11576_13174[(1)] = cljs.core.first((state_11555[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11555;
state_11555 = G__13175;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_11555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_11555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_11577 = f__11040__auto__();
(statearr_11577[(6)] = c__11039__auto__);

return statearr_11577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));

return c__11039__auto__;
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
var G__11579 = arguments.length;
switch (G__11579) {
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
var c__11039__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_11719){
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
var inst_11620 = (state_11719[(7)]);
var inst_11632 = cljs.core.first(inst_11620);
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
var inst_11585 = (state_11719[(10)]);
var inst_11669 = (state_11719[(11)]);
var inst_11664 = (state_11719[(12)]);
var inst_11669__$1 = cljs.core._nth(inst_11662,inst_11664);
var inst_11670 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11669__$1,inst_11585,done);
var state_11719__$1 = (function (){var statearr_11728 = state_11719;
(statearr_11728[(11)] = inst_11669__$1);

return statearr_11728;
})();
if(cljs.core.truth_(inst_11670)){
var statearr_11729_13185 = state_11719__$1;
(statearr_11729_13185[(1)] = (30));

} else {
var statearr_11730_13186 = state_11719__$1;
(statearr_11730_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (1))){
var state_11719__$1 = state_11719;
var statearr_11731_13187 = state_11719__$1;
(statearr_11731_13187[(2)] = null);

(statearr_11731_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (24))){
var inst_11620 = (state_11719[(7)]);
var inst_11639 = (state_11719[(2)]);
var inst_11640 = cljs.core.next(inst_11620);
var inst_11594 = inst_11640;
var inst_11595 = null;
var inst_11596 = (0);
var inst_11597 = (0);
var state_11719__$1 = (function (){var statearr_11732 = state_11719;
(statearr_11732[(13)] = inst_11595);

(statearr_11732[(14)] = inst_11597);

(statearr_11732[(15)] = inst_11594);

(statearr_11732[(16)] = inst_11639);

(statearr_11732[(17)] = inst_11596);

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
var inst_11585 = (state_11719[(10)]);
var inst_11585__$1 = (state_11719[(2)]);
var inst_11586 = (inst_11585__$1 == null);
var state_11719__$1 = (function (){var statearr_11738 = state_11719;
(statearr_11738[(10)] = inst_11585__$1);

return statearr_11738;
})();
if(cljs.core.truth_(inst_11586)){
var statearr_11739_13190 = state_11719__$1;
(statearr_11739_13190[(1)] = (5));

} else {
var statearr_11740_13191 = state_11719__$1;
(statearr_11740_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (15))){
var inst_11595 = (state_11719[(13)]);
var inst_11597 = (state_11719[(14)]);
var inst_11594 = (state_11719[(15)]);
var inst_11596 = (state_11719[(17)]);
var inst_11616 = (state_11719[(2)]);
var inst_11617 = (inst_11597 + (1));
var tmp11734 = inst_11595;
var tmp11735 = inst_11594;
var tmp11736 = inst_11596;
var inst_11594__$1 = tmp11735;
var inst_11595__$1 = tmp11734;
var inst_11596__$1 = tmp11736;
var inst_11597__$1 = inst_11617;
var state_11719__$1 = (function (){var statearr_11741 = state_11719;
(statearr_11741[(18)] = inst_11616);

(statearr_11741[(13)] = inst_11595__$1);

(statearr_11741[(14)] = inst_11597__$1);

(statearr_11741[(15)] = inst_11594__$1);

(statearr_11741[(17)] = inst_11596__$1);

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
var inst_11669 = (state_11719[(11)]);
var inst_11673 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11669);
var state_11719__$1 = state_11719;
var statearr_11748_13194 = state_11719__$1;
(statearr_11748_13194[(2)] = inst_11673);

(statearr_11748_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (32))){
var inst_11662 = (state_11719[(9)]);
var inst_11664 = (state_11719[(12)]);
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
var state_11719__$1 = (function (){var statearr_11749 = state_11719;
(statearr_11749[(9)] = inst_11662__$1);

(statearr_11749[(21)] = inst_11675);

(statearr_11749[(12)] = inst_11664__$1);

(statearr_11749[(19)] = inst_11663__$1);

(statearr_11749[(20)] = inst_11661__$1);

return statearr_11749;
})();
var statearr_11750_13195 = state_11719__$1;
(statearr_11750_13195[(2)] = null);

(statearr_11750_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (40))){
var inst_11688 = (state_11719[(22)]);
var inst_11692 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11688);
var state_11719__$1 = state_11719;
var statearr_11751_13196 = state_11719__$1;
(statearr_11751_13196[(2)] = inst_11692);

(statearr_11751_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (33))){
var inst_11679 = (state_11719[(23)]);
var inst_11681 = cljs.core.chunked_seq_QMARK_(inst_11679);
var state_11719__$1 = state_11719;
if(inst_11681){
var statearr_11752_13197 = state_11719__$1;
(statearr_11752_13197[(1)] = (36));

} else {
var statearr_11753_13198 = state_11719__$1;
(statearr_11753_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (13))){
var inst_11610 = (state_11719[(24)]);
var inst_11613 = cljs.core.async.close_BANG_(inst_11610);
var state_11719__$1 = state_11719;
var statearr_11754_13199 = state_11719__$1;
(statearr_11754_13199[(2)] = inst_11613);

(statearr_11754_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (22))){
var inst_11633 = (state_11719[(8)]);
var inst_11636 = cljs.core.async.close_BANG_(inst_11633);
var state_11719__$1 = state_11719;
var statearr_11755_13200 = state_11719__$1;
(statearr_11755_13200[(2)] = inst_11636);

(statearr_11755_13200[(1)] = (24));


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
var state_11719__$1 = (function (){var statearr_11756 = state_11719;
(statearr_11756[(9)] = inst_11662);

(statearr_11756[(12)] = inst_11664);

(statearr_11756[(19)] = inst_11663);

(statearr_11756[(20)] = inst_11661);

return statearr_11756;
})();
var statearr_11757_13201 = state_11719__$1;
(statearr_11757_13201[(2)] = null);

(statearr_11757_13201[(1)] = (25));


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
var state_11719__$1 = (function (){var statearr_11758 = state_11719;
(statearr_11758[(9)] = inst_11662);

(statearr_11758[(25)] = inst_11694);

(statearr_11758[(12)] = inst_11664);

(statearr_11758[(19)] = inst_11663);

(statearr_11758[(20)] = inst_11661);

return statearr_11758;
})();
var statearr_11759_13202 = state_11719__$1;
(statearr_11759_13202[(2)] = null);

(statearr_11759_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (43))){
var state_11719__$1 = state_11719;
var statearr_11760_13203 = state_11719__$1;
(statearr_11760_13203[(2)] = null);

(statearr_11760_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (29))){
var inst_11703 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11775_13204 = state_11719__$1;
(statearr_11775_13204[(2)] = inst_11703);

(statearr_11775_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (44))){
var inst_11712 = (state_11719[(2)]);
var state_11719__$1 = (function (){var statearr_11776 = state_11719;
(statearr_11776[(26)] = inst_11712);

return statearr_11776;
})();
var statearr_11777_13205 = state_11719__$1;
(statearr_11777_13205[(2)] = null);

(statearr_11777_13205[(1)] = (2));


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
var state_11719__$1 = (function (){var statearr_11778 = state_11719;
(statearr_11778[(9)] = inst_11662);

(statearr_11778[(28)] = inst_11655);

(statearr_11778[(12)] = inst_11664);

(statearr_11778[(19)] = inst_11663);

(statearr_11778[(27)] = inst_11653__$1);

(statearr_11778[(20)] = inst_11661);

return statearr_11778;
})();
var statearr_11779_13206 = state_11719__$1;
(statearr_11779_13206[(2)] = null);

(statearr_11779_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (28))){
var inst_11679 = (state_11719[(23)]);
var inst_11661 = (state_11719[(20)]);
var inst_11679__$1 = cljs.core.seq(inst_11661);
var state_11719__$1 = (function (){var statearr_11780 = state_11719;
(statearr_11780[(23)] = inst_11679__$1);

return statearr_11780;
})();
if(inst_11679__$1){
var statearr_11781_13207 = state_11719__$1;
(statearr_11781_13207[(1)] = (33));

} else {
var statearr_11782_13208 = state_11719__$1;
(statearr_11782_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (25))){
var inst_11664 = (state_11719[(12)]);
var inst_11663 = (state_11719[(19)]);
var inst_11666 = (inst_11664 < inst_11663);
var inst_11667 = inst_11666;
var state_11719__$1 = state_11719;
if(cljs.core.truth_(inst_11667)){
var statearr_11783_13209 = state_11719__$1;
(statearr_11783_13209[(1)] = (27));

} else {
var statearr_11784_13210 = state_11719__$1;
(statearr_11784_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (34))){
var state_11719__$1 = state_11719;
var statearr_11785_13211 = state_11719__$1;
(statearr_11785_13211[(2)] = null);

(statearr_11785_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (17))){
var state_11719__$1 = state_11719;
var statearr_11786_13212 = state_11719__$1;
(statearr_11786_13212[(2)] = null);

(statearr_11786_13212[(1)] = (18));


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
var statearr_11787_13213 = state_11719__$1;
(statearr_11787_13213[(2)] = inst_11648);

(statearr_11787_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (2))){
var state_11719__$1 = state_11719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11719__$1,(4),ch);
} else {
if((state_val_11720 === (23))){
var state_11719__$1 = state_11719;
var statearr_11788_13214 = state_11719__$1;
(statearr_11788_13214[(2)] = null);

(statearr_11788_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (35))){
var inst_11701 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11789_13215 = state_11719__$1;
(statearr_11789_13215[(2)] = inst_11701);

(statearr_11789_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (19))){
var inst_11620 = (state_11719[(7)]);
var inst_11624 = cljs.core.chunk_first(inst_11620);
var inst_11625 = cljs.core.chunk_rest(inst_11620);
var inst_11626 = cljs.core.count(inst_11624);
var inst_11594 = inst_11625;
var inst_11595 = inst_11624;
var inst_11596 = inst_11626;
var inst_11597 = (0);
var state_11719__$1 = (function (){var statearr_11790 = state_11719;
(statearr_11790[(13)] = inst_11595);

(statearr_11790[(14)] = inst_11597);

(statearr_11790[(15)] = inst_11594);

(statearr_11790[(17)] = inst_11596);

return statearr_11790;
})();
var statearr_11791_13216 = state_11719__$1;
(statearr_11791_13216[(2)] = null);

(statearr_11791_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (11))){
var inst_11620 = (state_11719[(7)]);
var inst_11594 = (state_11719[(15)]);
var inst_11620__$1 = cljs.core.seq(inst_11594);
var state_11719__$1 = (function (){var statearr_11808 = state_11719;
(statearr_11808[(7)] = inst_11620__$1);

return statearr_11808;
})();
if(inst_11620__$1){
var statearr_11809_13217 = state_11719__$1;
(statearr_11809_13217[(1)] = (16));

} else {
var statearr_11810_13218 = state_11719__$1;
(statearr_11810_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (9))){
var inst_11650 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11814_13219 = state_11719__$1;
(statearr_11814_13219[(2)] = inst_11650);

(statearr_11814_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (5))){
var inst_11592 = cljs.core.deref(cs);
var inst_11593 = cljs.core.seq(inst_11592);
var inst_11594 = inst_11593;
var inst_11595 = null;
var inst_11596 = (0);
var inst_11597 = (0);
var state_11719__$1 = (function (){var statearr_11815 = state_11719;
(statearr_11815[(13)] = inst_11595);

(statearr_11815[(14)] = inst_11597);

(statearr_11815[(15)] = inst_11594);

(statearr_11815[(17)] = inst_11596);

return statearr_11815;
})();
var statearr_11816_13220 = state_11719__$1;
(statearr_11816_13220[(2)] = null);

(statearr_11816_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (14))){
var state_11719__$1 = state_11719;
var statearr_11818_13221 = state_11719__$1;
(statearr_11818_13221[(2)] = null);

(statearr_11818_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (45))){
var inst_11709 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11821_13222 = state_11719__$1;
(statearr_11821_13222[(2)] = inst_11709);

(statearr_11821_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (26))){
var inst_11653 = (state_11719[(27)]);
var inst_11705 = (state_11719[(2)]);
var inst_11706 = cljs.core.seq(inst_11653);
var state_11719__$1 = (function (){var statearr_11822 = state_11719;
(statearr_11822[(29)] = inst_11705);

return statearr_11822;
})();
if(inst_11706){
var statearr_11823_13223 = state_11719__$1;
(statearr_11823_13223[(1)] = (42));

} else {
var statearr_11825_13224 = state_11719__$1;
(statearr_11825_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (16))){
var inst_11620 = (state_11719[(7)]);
var inst_11622 = cljs.core.chunked_seq_QMARK_(inst_11620);
var state_11719__$1 = state_11719;
if(inst_11622){
var statearr_11826_13225 = state_11719__$1;
(statearr_11826_13225[(1)] = (19));

} else {
var statearr_11827_13226 = state_11719__$1;
(statearr_11827_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (38))){
var inst_11698 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11831_13227 = state_11719__$1;
(statearr_11831_13227[(2)] = inst_11698);

(statearr_11831_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (30))){
var state_11719__$1 = state_11719;
var statearr_11834_13228 = state_11719__$1;
(statearr_11834_13228[(2)] = null);

(statearr_11834_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (10))){
var inst_11595 = (state_11719[(13)]);
var inst_11597 = (state_11719[(14)]);
var inst_11608 = cljs.core._nth(inst_11595,inst_11597);
var inst_11610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11608,(0),null);
var inst_11611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11608,(1),null);
var state_11719__$1 = (function (){var statearr_11835 = state_11719;
(statearr_11835[(24)] = inst_11610);

return statearr_11835;
})();
if(cljs.core.truth_(inst_11611)){
var statearr_11838_13229 = state_11719__$1;
(statearr_11838_13229[(1)] = (13));

} else {
var statearr_11839_13230 = state_11719__$1;
(statearr_11839_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (18))){
var inst_11646 = (state_11719[(2)]);
var state_11719__$1 = state_11719;
var statearr_11841_13231 = state_11719__$1;
(statearr_11841_13231[(2)] = inst_11646);

(statearr_11841_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (42))){
var state_11719__$1 = state_11719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11719__$1,(45),dchan);
} else {
if((state_val_11720 === (37))){
var inst_11688 = (state_11719[(22)]);
var inst_11585 = (state_11719[(10)]);
var inst_11679 = (state_11719[(23)]);
var inst_11688__$1 = cljs.core.first(inst_11679);
var inst_11689 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11688__$1,inst_11585,done);
var state_11719__$1 = (function (){var statearr_11844 = state_11719;
(statearr_11844[(22)] = inst_11688__$1);

return statearr_11844;
})();
if(cljs.core.truth_(inst_11689)){
var statearr_11845_13232 = state_11719__$1;
(statearr_11845_13232[(1)] = (39));

} else {
var statearr_11846_13233 = state_11719__$1;
(statearr_11846_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11720 === (8))){
var inst_11597 = (state_11719[(14)]);
var inst_11596 = (state_11719[(17)]);
var inst_11599 = (inst_11597 < inst_11596);
var inst_11600 = inst_11599;
var state_11719__$1 = state_11719;
if(cljs.core.truth_(inst_11600)){
var statearr_11850_13234 = state_11719__$1;
(statearr_11850_13234[(1)] = (10));

} else {
var statearr_11851_13235 = state_11719__$1;
(statearr_11851_13235[(1)] = (11));

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
var statearr_11853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11853[(0)] = cljs$core$async$mult_$_state_machine__10936__auto__);

(statearr_11853[(1)] = (1));

return statearr_11853;
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
}catch (e11854){var ex__10939__auto__ = e11854;
var statearr_11855_13236 = state_11719;
(statearr_11855_13236[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_11719[(4)]))){
var statearr_11856_13237 = state_11719;
(statearr_11856_13237[(1)] = cljs.core.first((state_11719[(4)])));

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
var state__11041__auto__ = (function (){var statearr_11857 = f__11040__auto__();
(statearr_11857[(6)] = c__11039__auto___13181);

return statearr_11857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11893){
var map__11894 = p__11893;
var map__11894__$1 = (((((!((map__11894 == null))))?(((((map__11894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11894):map__11894);
var opts = map__11894__$1;
var statearr_11896_13248 = state;
(statearr_11896_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11897_13249 = state;
(statearr_11897_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11898_13250 = state;
(statearr_11898_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11888){
var G__11889 = cljs.core.first(seq11888);
var seq11888__$1 = cljs.core.next(seq11888);
var G__11890 = cljs.core.first(seq11888__$1);
var seq11888__$2 = cljs.core.next(seq11888__$1);
var G__11891 = cljs.core.first(seq11888__$2);
var seq11888__$3 = cljs.core.next(seq11888__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11889,G__11890,G__11891,seq11888__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11899 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11900){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11900 = meta11900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11901,meta11900__$1){
var self__ = this;
var _11901__$1 = this;
return (new cljs.core.async.t_cljs$core$async11899(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11900__$1));
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11901){
var self__ = this;
var _11901__$1 = this;
return self__.meta11900;
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11900","meta11900",916547616,null)], null);
}));

(cljs.core.async.t_cljs$core$async11899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11899");

(cljs.core.async.t_cljs$core$async11899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11899.
 */
cljs.core.async.__GT_t_cljs$core$async11899 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11899(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11900){
return (new cljs.core.async.t_cljs$core$async11899(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11900));
});

}

return (new cljs.core.async.t_cljs$core$async11899(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11039__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12006){
var state_val_12007 = (state_12006[(1)]);
if((state_val_12007 === (7))){
var inst_11921 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
var statearr_12008_13252 = state_12006__$1;
(statearr_12008_13252[(2)] = inst_11921);

(statearr_12008_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (20))){
var inst_11933 = (state_12006[(7)]);
var state_12006__$1 = state_12006;
var statearr_12009_13253 = state_12006__$1;
(statearr_12009_13253[(2)] = inst_11933);

(statearr_12009_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (27))){
var state_12006__$1 = state_12006;
var statearr_12010_13254 = state_12006__$1;
(statearr_12010_13254[(2)] = null);

(statearr_12010_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (1))){
var inst_11908 = (state_12006[(8)]);
var inst_11908__$1 = calc_state();
var inst_11910 = (inst_11908__$1 == null);
var inst_11911 = cljs.core.not(inst_11910);
var state_12006__$1 = (function (){var statearr_12011 = state_12006;
(statearr_12011[(8)] = inst_11908__$1);

return statearr_12011;
})();
if(inst_11911){
var statearr_12012_13255 = state_12006__$1;
(statearr_12012_13255[(1)] = (2));

} else {
var statearr_12013_13256 = state_12006__$1;
(statearr_12013_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (24))){
var inst_11957 = (state_12006[(9)]);
var inst_11966 = (state_12006[(10)]);
var inst_11980 = (state_12006[(11)]);
var inst_11980__$1 = (inst_11957.cljs$core$IFn$_invoke$arity$1 ? inst_11957.cljs$core$IFn$_invoke$arity$1(inst_11966) : inst_11957.call(null,inst_11966));
var state_12006__$1 = (function (){var statearr_12014 = state_12006;
(statearr_12014[(11)] = inst_11980__$1);

return statearr_12014;
})();
if(cljs.core.truth_(inst_11980__$1)){
var statearr_12015_13257 = state_12006__$1;
(statearr_12015_13257[(1)] = (29));

} else {
var statearr_12016_13258 = state_12006__$1;
(statearr_12016_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (4))){
var inst_11924 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
if(cljs.core.truth_(inst_11924)){
var statearr_12017_13259 = state_12006__$1;
(statearr_12017_13259[(1)] = (8));

} else {
var statearr_12018_13260 = state_12006__$1;
(statearr_12018_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (15))){
var inst_11951 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
if(cljs.core.truth_(inst_11951)){
var statearr_12019_13261 = state_12006__$1;
(statearr_12019_13261[(1)] = (19));

} else {
var statearr_12020_13262 = state_12006__$1;
(statearr_12020_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (21))){
var inst_11956 = (state_12006[(12)]);
var inst_11956__$1 = (state_12006[(2)]);
var inst_11957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11956__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11956__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11956__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12006__$1 = (function (){var statearr_12021 = state_12006;
(statearr_12021[(9)] = inst_11957);

(statearr_12021[(12)] = inst_11956__$1);

(statearr_12021[(13)] = inst_11958);

return statearr_12021;
})();
return cljs.core.async.ioc_alts_BANG_(state_12006__$1,(22),inst_11959);
} else {
if((state_val_12007 === (31))){
var inst_11988 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
if(cljs.core.truth_(inst_11988)){
var statearr_12022_13263 = state_12006__$1;
(statearr_12022_13263[(1)] = (32));

} else {
var statearr_12023_13264 = state_12006__$1;
(statearr_12023_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (32))){
var inst_11965 = (state_12006[(14)]);
var state_12006__$1 = state_12006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12006__$1,(35),out,inst_11965);
} else {
if((state_val_12007 === (33))){
var inst_11956 = (state_12006[(12)]);
var inst_11933 = inst_11956;
var state_12006__$1 = (function (){var statearr_12024 = state_12006;
(statearr_12024[(7)] = inst_11933);

return statearr_12024;
})();
var statearr_12025_13265 = state_12006__$1;
(statearr_12025_13265[(2)] = null);

(statearr_12025_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (13))){
var inst_11933 = (state_12006[(7)]);
var inst_11940 = inst_11933.cljs$lang$protocol_mask$partition0$;
var inst_11941 = (inst_11940 & (64));
var inst_11942 = inst_11933.cljs$core$ISeq$;
var inst_11943 = (cljs.core.PROTOCOL_SENTINEL === inst_11942);
var inst_11944 = ((inst_11941) || (inst_11943));
var state_12006__$1 = state_12006;
if(cljs.core.truth_(inst_11944)){
var statearr_12030_13266 = state_12006__$1;
(statearr_12030_13266[(1)] = (16));

} else {
var statearr_12031_13267 = state_12006__$1;
(statearr_12031_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (22))){
var inst_11966 = (state_12006[(10)]);
var inst_11965 = (state_12006[(14)]);
var inst_11964 = (state_12006[(2)]);
var inst_11965__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11964,(0),null);
var inst_11966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11964,(1),null);
var inst_11967 = (inst_11965__$1 == null);
var inst_11968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11966__$1,change);
var inst_11969 = ((inst_11967) || (inst_11968));
var state_12006__$1 = (function (){var statearr_12036 = state_12006;
(statearr_12036[(10)] = inst_11966__$1);

(statearr_12036[(14)] = inst_11965__$1);

return statearr_12036;
})();
if(cljs.core.truth_(inst_11969)){
var statearr_12041_13268 = state_12006__$1;
(statearr_12041_13268[(1)] = (23));

} else {
var statearr_12042_13269 = state_12006__$1;
(statearr_12042_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (36))){
var inst_11956 = (state_12006[(12)]);
var inst_11933 = inst_11956;
var state_12006__$1 = (function (){var statearr_12043 = state_12006;
(statearr_12043[(7)] = inst_11933);

return statearr_12043;
})();
var statearr_12044_13270 = state_12006__$1;
(statearr_12044_13270[(2)] = null);

(statearr_12044_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (29))){
var inst_11980 = (state_12006[(11)]);
var state_12006__$1 = state_12006;
var statearr_12045_13271 = state_12006__$1;
(statearr_12045_13271[(2)] = inst_11980);

(statearr_12045_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (6))){
var state_12006__$1 = state_12006;
var statearr_12046_13272 = state_12006__$1;
(statearr_12046_13272[(2)] = false);

(statearr_12046_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (28))){
var inst_11976 = (state_12006[(2)]);
var inst_11977 = calc_state();
var inst_11933 = inst_11977;
var state_12006__$1 = (function (){var statearr_12047 = state_12006;
(statearr_12047[(7)] = inst_11933);

(statearr_12047[(15)] = inst_11976);

return statearr_12047;
})();
var statearr_12048_13273 = state_12006__$1;
(statearr_12048_13273[(2)] = null);

(statearr_12048_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (25))){
var inst_12002 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
var statearr_12049_13274 = state_12006__$1;
(statearr_12049_13274[(2)] = inst_12002);

(statearr_12049_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (34))){
var inst_12000 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
var statearr_12050_13275 = state_12006__$1;
(statearr_12050_13275[(2)] = inst_12000);

(statearr_12050_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (17))){
var state_12006__$1 = state_12006;
var statearr_12051_13276 = state_12006__$1;
(statearr_12051_13276[(2)] = false);

(statearr_12051_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (3))){
var state_12006__$1 = state_12006;
var statearr_12052_13277 = state_12006__$1;
(statearr_12052_13277[(2)] = false);

(statearr_12052_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (12))){
var inst_12004 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12006__$1,inst_12004);
} else {
if((state_val_12007 === (2))){
var inst_11908 = (state_12006[(8)]);
var inst_11913 = inst_11908.cljs$lang$protocol_mask$partition0$;
var inst_11914 = (inst_11913 & (64));
var inst_11915 = inst_11908.cljs$core$ISeq$;
var inst_11916 = (cljs.core.PROTOCOL_SENTINEL === inst_11915);
var inst_11917 = ((inst_11914) || (inst_11916));
var state_12006__$1 = state_12006;
if(cljs.core.truth_(inst_11917)){
var statearr_12053_13278 = state_12006__$1;
(statearr_12053_13278[(1)] = (5));

} else {
var statearr_12054_13279 = state_12006__$1;
(statearr_12054_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (23))){
var inst_11965 = (state_12006[(14)]);
var inst_11971 = (inst_11965 == null);
var state_12006__$1 = state_12006;
if(cljs.core.truth_(inst_11971)){
var statearr_12055_13280 = state_12006__$1;
(statearr_12055_13280[(1)] = (26));

} else {
var statearr_12056_13281 = state_12006__$1;
(statearr_12056_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (35))){
var inst_11991 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
if(cljs.core.truth_(inst_11991)){
var statearr_12057_13282 = state_12006__$1;
(statearr_12057_13282[(1)] = (36));

} else {
var statearr_12058_13283 = state_12006__$1;
(statearr_12058_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (19))){
var inst_11933 = (state_12006[(7)]);
var inst_11953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11933);
var state_12006__$1 = state_12006;
var statearr_12060_13284 = state_12006__$1;
(statearr_12060_13284[(2)] = inst_11953);

(statearr_12060_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (11))){
var inst_11933 = (state_12006[(7)]);
var inst_11937 = (inst_11933 == null);
var inst_11938 = cljs.core.not(inst_11937);
var state_12006__$1 = state_12006;
if(inst_11938){
var statearr_12061_13285 = state_12006__$1;
(statearr_12061_13285[(1)] = (13));

} else {
var statearr_12062_13286 = state_12006__$1;
(statearr_12062_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (9))){
var inst_11908 = (state_12006[(8)]);
var state_12006__$1 = state_12006;
var statearr_12063_13287 = state_12006__$1;
(statearr_12063_13287[(2)] = inst_11908);

(statearr_12063_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (5))){
var state_12006__$1 = state_12006;
var statearr_12064_13288 = state_12006__$1;
(statearr_12064_13288[(2)] = true);

(statearr_12064_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (14))){
var state_12006__$1 = state_12006;
var statearr_12065_13289 = state_12006__$1;
(statearr_12065_13289[(2)] = false);

(statearr_12065_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (26))){
var inst_11966 = (state_12006[(10)]);
var inst_11973 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11966);
var state_12006__$1 = state_12006;
var statearr_12066_13290 = state_12006__$1;
(statearr_12066_13290[(2)] = inst_11973);

(statearr_12066_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (16))){
var state_12006__$1 = state_12006;
var statearr_12067_13291 = state_12006__$1;
(statearr_12067_13291[(2)] = true);

(statearr_12067_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (38))){
var inst_11996 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
var statearr_12068_13292 = state_12006__$1;
(statearr_12068_13292[(2)] = inst_11996);

(statearr_12068_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (30))){
var inst_11957 = (state_12006[(9)]);
var inst_11966 = (state_12006[(10)]);
var inst_11958 = (state_12006[(13)]);
var inst_11983 = cljs.core.empty_QMARK_(inst_11957);
var inst_11984 = (inst_11958.cljs$core$IFn$_invoke$arity$1 ? inst_11958.cljs$core$IFn$_invoke$arity$1(inst_11966) : inst_11958.call(null,inst_11966));
var inst_11985 = cljs.core.not(inst_11984);
var inst_11986 = ((inst_11983) && (inst_11985));
var state_12006__$1 = state_12006;
var statearr_12069_13293 = state_12006__$1;
(statearr_12069_13293[(2)] = inst_11986);

(statearr_12069_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (10))){
var inst_11908 = (state_12006[(8)]);
var inst_11929 = (state_12006[(2)]);
var inst_11930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11929,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11929,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11929,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11933 = inst_11908;
var state_12006__$1 = (function (){var statearr_12070 = state_12006;
(statearr_12070[(16)] = inst_11932);

(statearr_12070[(17)] = inst_11930);

(statearr_12070[(7)] = inst_11933);

(statearr_12070[(18)] = inst_11931);

return statearr_12070;
})();
var statearr_12071_13294 = state_12006__$1;
(statearr_12071_13294[(2)] = null);

(statearr_12071_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (18))){
var inst_11948 = (state_12006[(2)]);
var state_12006__$1 = state_12006;
var statearr_12072_13295 = state_12006__$1;
(statearr_12072_13295[(2)] = inst_11948);

(statearr_12072_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (37))){
var state_12006__$1 = state_12006;
var statearr_12073_13296 = state_12006__$1;
(statearr_12073_13296[(2)] = null);

(statearr_12073_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12007 === (8))){
var inst_11908 = (state_12006[(8)]);
var inst_11926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11908);
var state_12006__$1 = state_12006;
var statearr_12074_13297 = state_12006__$1;
(statearr_12074_13297[(2)] = inst_11926);

(statearr_12074_13297[(1)] = (10));


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
var statearr_12075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12075[(0)] = cljs$core$async$mix_$_state_machine__10936__auto__);

(statearr_12075[(1)] = (1));

return statearr_12075;
});
var cljs$core$async$mix_$_state_machine__10936__auto____1 = (function (state_12006){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12006);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12076){var ex__10939__auto__ = e12076;
var statearr_12077_13298 = state_12006;
(statearr_12077_13298[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12006[(4)]))){
var statearr_12078_13299 = state_12006;
(statearr_12078_13299[(1)] = cljs.core.first((state_12006[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12006;
state_12006 = G__13300;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10936__auto__ = function(state_12006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10936__auto____1.call(this,state_12006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10936__auto____0;
cljs$core$async$mix_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10936__auto____1;
return cljs$core$async$mix_$_state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12079 = f__11040__auto__();
(statearr_12079[(6)] = c__11039__auto___13251);

return statearr_12079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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
var G__12096 = arguments.length;
switch (G__12096) {
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
var G__12099 = arguments.length;
switch (G__12099) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12097_SHARP_){
if(cljs.core.truth_((p1__12097_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12097_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12097_SHARP_.call(null,topic)))){
return p1__12097_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12097_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12100 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12101){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12101 = meta12101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12102,meta12101__$1){
var self__ = this;
var _12102__$1 = this;
return (new cljs.core.async.t_cljs$core$async12100(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12101__$1));
}));

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12102){
var self__ = this;
var _12102__$1 = this;
return self__.meta12101;
}));

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12101","meta12101",-858500242,null)], null);
}));

(cljs.core.async.t_cljs$core$async12100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12100");

(cljs.core.async.t_cljs$core$async12100.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12100.
 */
cljs.core.async.__GT_t_cljs$core$async12100 = (function cljs$core$async$__GT_t_cljs$core$async12100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12101){
return (new cljs.core.async.t_cljs$core$async12100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12101));
});

}

return (new cljs.core.async.t_cljs$core$async12100(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11039__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12176){
var state_val_12177 = (state_12176[(1)]);
if((state_val_12177 === (7))){
var inst_12172 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12178_13308 = state_12176__$1;
(statearr_12178_13308[(2)] = inst_12172);

(statearr_12178_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (20))){
var state_12176__$1 = state_12176;
var statearr_12181_13309 = state_12176__$1;
(statearr_12181_13309[(2)] = null);

(statearr_12181_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (1))){
var state_12176__$1 = state_12176;
var statearr_12182_13310 = state_12176__$1;
(statearr_12182_13310[(2)] = null);

(statearr_12182_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (24))){
var inst_12155 = (state_12176[(7)]);
var inst_12164 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12155);
var state_12176__$1 = state_12176;
var statearr_12185_13311 = state_12176__$1;
(statearr_12185_13311[(2)] = inst_12164);

(statearr_12185_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (4))){
var inst_12105 = (state_12176[(8)]);
var inst_12105__$1 = (state_12176[(2)]);
var inst_12106 = (inst_12105__$1 == null);
var state_12176__$1 = (function (){var statearr_12186 = state_12176;
(statearr_12186[(8)] = inst_12105__$1);

return statearr_12186;
})();
if(cljs.core.truth_(inst_12106)){
var statearr_12187_13312 = state_12176__$1;
(statearr_12187_13312[(1)] = (5));

} else {
var statearr_12188_13313 = state_12176__$1;
(statearr_12188_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (15))){
var inst_12149 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12192_13314 = state_12176__$1;
(statearr_12192_13314[(2)] = inst_12149);

(statearr_12192_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (21))){
var inst_12169 = (state_12176[(2)]);
var state_12176__$1 = (function (){var statearr_12193 = state_12176;
(statearr_12193[(9)] = inst_12169);

return statearr_12193;
})();
var statearr_12194_13315 = state_12176__$1;
(statearr_12194_13315[(2)] = null);

(statearr_12194_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (13))){
var inst_12130 = (state_12176[(10)]);
var inst_12133 = cljs.core.chunked_seq_QMARK_(inst_12130);
var state_12176__$1 = state_12176;
if(inst_12133){
var statearr_12203_13316 = state_12176__$1;
(statearr_12203_13316[(1)] = (16));

} else {
var statearr_12204_13317 = state_12176__$1;
(statearr_12204_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (22))){
var inst_12161 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
if(cljs.core.truth_(inst_12161)){
var statearr_12205_13318 = state_12176__$1;
(statearr_12205_13318[(1)] = (23));

} else {
var statearr_12206_13319 = state_12176__$1;
(statearr_12206_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (6))){
var inst_12157 = (state_12176[(11)]);
var inst_12155 = (state_12176[(7)]);
var inst_12105 = (state_12176[(8)]);
var inst_12155__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12105) : topic_fn.call(null,inst_12105));
var inst_12156 = cljs.core.deref(mults);
var inst_12157__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12156,inst_12155__$1);
var state_12176__$1 = (function (){var statearr_12208 = state_12176;
(statearr_12208[(11)] = inst_12157__$1);

(statearr_12208[(7)] = inst_12155__$1);

return statearr_12208;
})();
if(cljs.core.truth_(inst_12157__$1)){
var statearr_12209_13320 = state_12176__$1;
(statearr_12209_13320[(1)] = (19));

} else {
var statearr_12210_13321 = state_12176__$1;
(statearr_12210_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (25))){
var inst_12166 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12212_13322 = state_12176__$1;
(statearr_12212_13322[(2)] = inst_12166);

(statearr_12212_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (17))){
var inst_12130 = (state_12176[(10)]);
var inst_12140 = cljs.core.first(inst_12130);
var inst_12141 = cljs.core.async.muxch_STAR_(inst_12140);
var inst_12142 = cljs.core.async.close_BANG_(inst_12141);
var inst_12143 = cljs.core.next(inst_12130);
var inst_12115 = inst_12143;
var inst_12116 = null;
var inst_12117 = (0);
var inst_12118 = (0);
var state_12176__$1 = (function (){var statearr_12213 = state_12176;
(statearr_12213[(12)] = inst_12115);

(statearr_12213[(13)] = inst_12116);

(statearr_12213[(14)] = inst_12117);

(statearr_12213[(15)] = inst_12142);

(statearr_12213[(16)] = inst_12118);

return statearr_12213;
})();
var statearr_12214_13323 = state_12176__$1;
(statearr_12214_13323[(2)] = null);

(statearr_12214_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (3))){
var inst_12174 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12176__$1,inst_12174);
} else {
if((state_val_12177 === (12))){
var inst_12151 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12215_13324 = state_12176__$1;
(statearr_12215_13324[(2)] = inst_12151);

(statearr_12215_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (2))){
var state_12176__$1 = state_12176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12176__$1,(4),ch);
} else {
if((state_val_12177 === (23))){
var state_12176__$1 = state_12176;
var statearr_12216_13325 = state_12176__$1;
(statearr_12216_13325[(2)] = null);

(statearr_12216_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (19))){
var inst_12157 = (state_12176[(11)]);
var inst_12105 = (state_12176[(8)]);
var inst_12159 = cljs.core.async.muxch_STAR_(inst_12157);
var state_12176__$1 = state_12176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12176__$1,(22),inst_12159,inst_12105);
} else {
if((state_val_12177 === (11))){
var inst_12115 = (state_12176[(12)]);
var inst_12130 = (state_12176[(10)]);
var inst_12130__$1 = cljs.core.seq(inst_12115);
var state_12176__$1 = (function (){var statearr_12219 = state_12176;
(statearr_12219[(10)] = inst_12130__$1);

return statearr_12219;
})();
if(inst_12130__$1){
var statearr_12222_13326 = state_12176__$1;
(statearr_12222_13326[(1)] = (13));

} else {
var statearr_12223_13327 = state_12176__$1;
(statearr_12223_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (9))){
var inst_12153 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12224_13328 = state_12176__$1;
(statearr_12224_13328[(2)] = inst_12153);

(statearr_12224_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (5))){
var inst_12112 = cljs.core.deref(mults);
var inst_12113 = cljs.core.vals(inst_12112);
var inst_12114 = cljs.core.seq(inst_12113);
var inst_12115 = inst_12114;
var inst_12116 = null;
var inst_12117 = (0);
var inst_12118 = (0);
var state_12176__$1 = (function (){var statearr_12225 = state_12176;
(statearr_12225[(12)] = inst_12115);

(statearr_12225[(13)] = inst_12116);

(statearr_12225[(14)] = inst_12117);

(statearr_12225[(16)] = inst_12118);

return statearr_12225;
})();
var statearr_12226_13329 = state_12176__$1;
(statearr_12226_13329[(2)] = null);

(statearr_12226_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (14))){
var state_12176__$1 = state_12176;
var statearr_12230_13330 = state_12176__$1;
(statearr_12230_13330[(2)] = null);

(statearr_12230_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (16))){
var inst_12130 = (state_12176[(10)]);
var inst_12135 = cljs.core.chunk_first(inst_12130);
var inst_12136 = cljs.core.chunk_rest(inst_12130);
var inst_12137 = cljs.core.count(inst_12135);
var inst_12115 = inst_12136;
var inst_12116 = inst_12135;
var inst_12117 = inst_12137;
var inst_12118 = (0);
var state_12176__$1 = (function (){var statearr_12231 = state_12176;
(statearr_12231[(12)] = inst_12115);

(statearr_12231[(13)] = inst_12116);

(statearr_12231[(14)] = inst_12117);

(statearr_12231[(16)] = inst_12118);

return statearr_12231;
})();
var statearr_12232_13331 = state_12176__$1;
(statearr_12232_13331[(2)] = null);

(statearr_12232_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (10))){
var inst_12115 = (state_12176[(12)]);
var inst_12116 = (state_12176[(13)]);
var inst_12117 = (state_12176[(14)]);
var inst_12118 = (state_12176[(16)]);
var inst_12124 = cljs.core._nth(inst_12116,inst_12118);
var inst_12125 = cljs.core.async.muxch_STAR_(inst_12124);
var inst_12126 = cljs.core.async.close_BANG_(inst_12125);
var inst_12127 = (inst_12118 + (1));
var tmp12227 = inst_12115;
var tmp12228 = inst_12116;
var tmp12229 = inst_12117;
var inst_12115__$1 = tmp12227;
var inst_12116__$1 = tmp12228;
var inst_12117__$1 = tmp12229;
var inst_12118__$1 = inst_12127;
var state_12176__$1 = (function (){var statearr_12235 = state_12176;
(statearr_12235[(12)] = inst_12115__$1);

(statearr_12235[(13)] = inst_12116__$1);

(statearr_12235[(17)] = inst_12126);

(statearr_12235[(14)] = inst_12117__$1);

(statearr_12235[(16)] = inst_12118__$1);

return statearr_12235;
})();
var statearr_12236_13332 = state_12176__$1;
(statearr_12236_13332[(2)] = null);

(statearr_12236_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (18))){
var inst_12146 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12239_13333 = state_12176__$1;
(statearr_12239_13333[(2)] = inst_12146);

(statearr_12239_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (8))){
var inst_12117 = (state_12176[(14)]);
var inst_12118 = (state_12176[(16)]);
var inst_12120 = (inst_12118 < inst_12117);
var inst_12121 = inst_12120;
var state_12176__$1 = state_12176;
if(cljs.core.truth_(inst_12121)){
var statearr_12240_13334 = state_12176__$1;
(statearr_12240_13334[(1)] = (10));

} else {
var statearr_12241_13335 = state_12176__$1;
(statearr_12241_13335[(1)] = (11));

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
var statearr_12242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12242[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12242[(1)] = (1));

return statearr_12242;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12176){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12176);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12243){var ex__10939__auto__ = e12243;
var statearr_12244_13336 = state_12176;
(statearr_12244_13336[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12176[(4)]))){
var statearr_12245_13337 = state_12176;
(statearr_12245_13337[(1)] = cljs.core.first((state_12176[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12176;
state_12176 = G__13338;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12246 = f__11040__auto__();
(statearr_12246[(6)] = c__11039__auto___13307);

return statearr_12246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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
var G__12249 = arguments.length;
switch (G__12249) {
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
var G__12256 = arguments.length;
switch (G__12256) {
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
var G__12259 = arguments.length;
switch (G__12259) {
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
var c__11039__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12324){
var state_val_12325 = (state_12324[(1)]);
if((state_val_12325 === (7))){
var state_12324__$1 = state_12324;
var statearr_12326_13343 = state_12324__$1;
(statearr_12326_13343[(2)] = null);

(statearr_12326_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (1))){
var state_12324__$1 = state_12324;
var statearr_12327_13344 = state_12324__$1;
(statearr_12327_13344[(2)] = null);

(statearr_12327_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (4))){
var inst_12268 = (state_12324[(7)]);
var inst_12267 = (state_12324[(8)]);
var inst_12270 = (inst_12268 < inst_12267);
var state_12324__$1 = state_12324;
if(cljs.core.truth_(inst_12270)){
var statearr_12328_13345 = state_12324__$1;
(statearr_12328_13345[(1)] = (6));

} else {
var statearr_12330_13346 = state_12324__$1;
(statearr_12330_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (15))){
var inst_12310 = (state_12324[(9)]);
var inst_12315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12310);
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12324__$1,(17),out,inst_12315);
} else {
if((state_val_12325 === (13))){
var inst_12310 = (state_12324[(9)]);
var inst_12310__$1 = (state_12324[(2)]);
var inst_12311 = cljs.core.some(cljs.core.nil_QMARK_,inst_12310__$1);
var state_12324__$1 = (function (){var statearr_12333 = state_12324;
(statearr_12333[(9)] = inst_12310__$1);

return statearr_12333;
})();
if(cljs.core.truth_(inst_12311)){
var statearr_12334_13347 = state_12324__$1;
(statearr_12334_13347[(1)] = (14));

} else {
var statearr_12337_13348 = state_12324__$1;
(statearr_12337_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (6))){
var state_12324__$1 = state_12324;
var statearr_12338_13349 = state_12324__$1;
(statearr_12338_13349[(2)] = null);

(statearr_12338_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (17))){
var inst_12317 = (state_12324[(2)]);
var state_12324__$1 = (function (){var statearr_12342 = state_12324;
(statearr_12342[(10)] = inst_12317);

return statearr_12342;
})();
var statearr_12345_13350 = state_12324__$1;
(statearr_12345_13350[(2)] = null);

(statearr_12345_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (3))){
var inst_12322 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12324__$1,inst_12322);
} else {
if((state_val_12325 === (12))){
var _ = (function (){var statearr_12347 = state_12324;
(statearr_12347[(4)] = cljs.core.rest((state_12324[(4)])));

return statearr_12347;
})();
var state_12324__$1 = state_12324;
var ex12340 = (state_12324__$1[(2)]);
var statearr_12348_13351 = state_12324__$1;
(statearr_12348_13351[(5)] = ex12340);


if((ex12340 instanceof Object)){
var statearr_12359_13352 = state_12324__$1;
(statearr_12359_13352[(1)] = (11));

(statearr_12359_13352[(5)] = null);

} else {
throw ex12340;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (2))){
var inst_12266 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12267 = cnt;
var inst_12268 = (0);
var state_12324__$1 = (function (){var statearr_12360 = state_12324;
(statearr_12360[(7)] = inst_12268);

(statearr_12360[(11)] = inst_12266);

(statearr_12360[(8)] = inst_12267);

return statearr_12360;
})();
var statearr_12361_13353 = state_12324__$1;
(statearr_12361_13353[(2)] = null);

(statearr_12361_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (11))){
var inst_12277 = (state_12324[(2)]);
var inst_12278 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12324__$1 = (function (){var statearr_12362 = state_12324;
(statearr_12362[(12)] = inst_12277);

return statearr_12362;
})();
var statearr_12363_13354 = state_12324__$1;
(statearr_12363_13354[(2)] = inst_12278);

(statearr_12363_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (9))){
var inst_12268 = (state_12324[(7)]);
var _ = (function (){var statearr_12364 = state_12324;
(statearr_12364[(4)] = cljs.core.cons((12),(state_12324[(4)])));

return statearr_12364;
})();
var inst_12295 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12268) : chs__$1.call(null,inst_12268));
var inst_12296 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12268) : done.call(null,inst_12268));
var inst_12298 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12295,inst_12296);
var ___$1 = (function (){var statearr_12367 = state_12324;
(statearr_12367[(4)] = cljs.core.rest((state_12324[(4)])));

return statearr_12367;
})();
var state_12324__$1 = state_12324;
var statearr_12369_13355 = state_12324__$1;
(statearr_12369_13355[(2)] = inst_12298);

(statearr_12369_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (5))){
var inst_12308 = (state_12324[(2)]);
var state_12324__$1 = (function (){var statearr_12370 = state_12324;
(statearr_12370[(13)] = inst_12308);

return statearr_12370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12324__$1,(13),dchan);
} else {
if((state_val_12325 === (14))){
var inst_12313 = cljs.core.async.close_BANG_(out);
var state_12324__$1 = state_12324;
var statearr_12371_13356 = state_12324__$1;
(statearr_12371_13356[(2)] = inst_12313);

(statearr_12371_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (16))){
var inst_12320 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12376_13357 = state_12324__$1;
(statearr_12376_13357[(2)] = inst_12320);

(statearr_12376_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (10))){
var inst_12268 = (state_12324[(7)]);
var inst_12301 = (state_12324[(2)]);
var inst_12302 = (inst_12268 + (1));
var inst_12268__$1 = inst_12302;
var state_12324__$1 = (function (){var statearr_12381 = state_12324;
(statearr_12381[(7)] = inst_12268__$1);

(statearr_12381[(14)] = inst_12301);

return statearr_12381;
})();
var statearr_12386_13358 = state_12324__$1;
(statearr_12386_13358[(2)] = null);

(statearr_12386_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (8))){
var inst_12306 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12387_13359 = state_12324__$1;
(statearr_12387_13359[(2)] = inst_12306);

(statearr_12387_13359[(1)] = (5));


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
var statearr_12388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12388[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12388[(1)] = (1));

return statearr_12388;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12324){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12324);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12389){var ex__10939__auto__ = e12389;
var statearr_12390_13360 = state_12324;
(statearr_12390_13360[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12324[(4)]))){
var statearr_12391_13361 = state_12324;
(statearr_12391_13361[(1)] = cljs.core.first((state_12324[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12324;
state_12324 = G__13362;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12396 = f__11040__auto__();
(statearr_12396[(6)] = c__11039__auto___13342);

return statearr_12396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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
var c__11039__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12443){
var state_val_12444 = (state_12443[(1)]);
if((state_val_12444 === (7))){
var inst_12423 = (state_12443[(7)]);
var inst_12422 = (state_12443[(8)]);
var inst_12422__$1 = (state_12443[(2)]);
var inst_12423__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12422__$1,(0),null);
var inst_12424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12422__$1,(1),null);
var inst_12425 = (inst_12423__$1 == null);
var state_12443__$1 = (function (){var statearr_12447 = state_12443;
(statearr_12447[(7)] = inst_12423__$1);

(statearr_12447[(9)] = inst_12424);

(statearr_12447[(8)] = inst_12422__$1);

return statearr_12447;
})();
if(cljs.core.truth_(inst_12425)){
var statearr_12450_13365 = state_12443__$1;
(statearr_12450_13365[(1)] = (8));

} else {
var statearr_12451_13366 = state_12443__$1;
(statearr_12451_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (1))){
var inst_12412 = cljs.core.vec(chs);
var inst_12413 = inst_12412;
var state_12443__$1 = (function (){var statearr_12452 = state_12443;
(statearr_12452[(10)] = inst_12413);

return statearr_12452;
})();
var statearr_12453_13367 = state_12443__$1;
(statearr_12453_13367[(2)] = null);

(statearr_12453_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (4))){
var inst_12413 = (state_12443[(10)]);
var state_12443__$1 = state_12443;
return cljs.core.async.ioc_alts_BANG_(state_12443__$1,(7),inst_12413);
} else {
if((state_val_12444 === (6))){
var inst_12439 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12456_13368 = state_12443__$1;
(statearr_12456_13368[(2)] = inst_12439);

(statearr_12456_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (3))){
var inst_12441 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12443__$1,inst_12441);
} else {
if((state_val_12444 === (2))){
var inst_12413 = (state_12443[(10)]);
var inst_12415 = cljs.core.count(inst_12413);
var inst_12416 = (inst_12415 > (0));
var state_12443__$1 = state_12443;
if(cljs.core.truth_(inst_12416)){
var statearr_12476_13369 = state_12443__$1;
(statearr_12476_13369[(1)] = (4));

} else {
var statearr_12477_13370 = state_12443__$1;
(statearr_12477_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (11))){
var inst_12413 = (state_12443[(10)]);
var inst_12432 = (state_12443[(2)]);
var tmp12458 = inst_12413;
var inst_12413__$1 = tmp12458;
var state_12443__$1 = (function (){var statearr_12478 = state_12443;
(statearr_12478[(11)] = inst_12432);

(statearr_12478[(10)] = inst_12413__$1);

return statearr_12478;
})();
var statearr_12479_13371 = state_12443__$1;
(statearr_12479_13371[(2)] = null);

(statearr_12479_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (9))){
var inst_12423 = (state_12443[(7)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12443__$1,(11),out,inst_12423);
} else {
if((state_val_12444 === (5))){
var inst_12437 = cljs.core.async.close_BANG_(out);
var state_12443__$1 = state_12443;
var statearr_12480_13372 = state_12443__$1;
(statearr_12480_13372[(2)] = inst_12437);

(statearr_12480_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (10))){
var inst_12435 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12481_13373 = state_12443__$1;
(statearr_12481_13373[(2)] = inst_12435);

(statearr_12481_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (8))){
var inst_12413 = (state_12443[(10)]);
var inst_12423 = (state_12443[(7)]);
var inst_12424 = (state_12443[(9)]);
var inst_12422 = (state_12443[(8)]);
var inst_12427 = (function (){var cs = inst_12413;
var vec__12418 = inst_12422;
var v = inst_12423;
var c = inst_12424;
return (function (p1__12397_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12397_SHARP_);
});
})();
var inst_12428 = cljs.core.filterv(inst_12427,inst_12413);
var inst_12413__$1 = inst_12428;
var state_12443__$1 = (function (){var statearr_12485 = state_12443;
(statearr_12485[(10)] = inst_12413__$1);

return statearr_12485;
})();
var statearr_12486_13374 = state_12443__$1;
(statearr_12486_13374[(2)] = null);

(statearr_12486_13374[(1)] = (2));


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
var statearr_12490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12490[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12490[(1)] = (1));

return statearr_12490;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12443){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12443);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12494){var ex__10939__auto__ = e12494;
var statearr_12495_13375 = state_12443;
(statearr_12495_13375[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12443[(4)]))){
var statearr_12496_13376 = state_12443;
(statearr_12496_13376[(1)] = cljs.core.first((state_12443[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12443;
state_12443 = G__13377;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12497 = f__11040__auto__();
(statearr_12497[(6)] = c__11039__auto___13364);

return statearr_12497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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
var c__11039__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12523){
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12539[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12539[(1)] = (1));

return statearr_12539;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12523){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12523);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12540){var ex__10939__auto__ = e12540;
var statearr_12541_13390 = state_12523;
(statearr_12541_13390[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12523[(4)]))){
var statearr_12542_13391 = state_12523;
(statearr_12542_13391[(1)] = cljs.core.first((state_12523[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12523;
state_12523 = G__13392;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12546 = f__11040__auto__();
(statearr_12546[(6)] = c__11039__auto___13379);

return statearr_12546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12548 = (function (f,ch,meta12549){
this.f = f;
this.ch = ch;
this.meta12549 = meta12549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12550,meta12549__$1){
var self__ = this;
var _12550__$1 = this;
return (new cljs.core.async.t_cljs$core$async12548(self__.f,self__.ch,meta12549__$1));
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12550){
var self__ = this;
var _12550__$1 = this;
return self__.meta12549;
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12552 = (function (f,ch,meta12549,_,fn1,meta12553){
this.f = f;
this.ch = ch;
this.meta12549 = meta12549;
this._ = _;
this.fn1 = fn1;
this.meta12553 = meta12553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12554,meta12553__$1){
var self__ = this;
var _12554__$1 = this;
return (new cljs.core.async.t_cljs$core$async12552(self__.f,self__.ch,self__.meta12549,self__._,self__.fn1,meta12553__$1));
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12554){
var self__ = this;
var _12554__$1 = this;
return self__.meta12553;
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12547_SHARP_){
var G__12562 = (((p1__12547_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12547_SHARP_) : self__.f.call(null,p1__12547_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12562) : f1.call(null,G__12562));
});
}));

(cljs.core.async.t_cljs$core$async12552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12549","meta12549",1996276862,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12548","cljs.core.async/t_cljs$core$async12548",-626290849,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12553","meta12553",-106559428,null)], null);
}));

(cljs.core.async.t_cljs$core$async12552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12552");

(cljs.core.async.t_cljs$core$async12552.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12552.
 */
cljs.core.async.__GT_t_cljs$core$async12552 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12552(f__$1,ch__$1,meta12549__$1,___$2,fn1__$1,meta12553){
return (new cljs.core.async.t_cljs$core$async12552(f__$1,ch__$1,meta12549__$1,___$2,fn1__$1,meta12553));
});

}

return (new cljs.core.async.t_cljs$core$async12552(self__.f,self__.ch,self__.meta12549,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12564 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12564) : self__.f.call(null,G__12564));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12549","meta12549",1996276862,null)], null);
}));

(cljs.core.async.t_cljs$core$async12548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12548");

(cljs.core.async.t_cljs$core$async12548.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12548.
 */
cljs.core.async.__GT_t_cljs$core$async12548 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12548(f__$1,ch__$1,meta12549){
return (new cljs.core.async.t_cljs$core$async12548(f__$1,ch__$1,meta12549));
});

}

return (new cljs.core.async.t_cljs$core$async12548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12568 = (function (f,ch,meta12569){
this.f = f;
this.ch = ch;
this.meta12569 = meta12569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12570,meta12569__$1){
var self__ = this;
var _12570__$1 = this;
return (new cljs.core.async.t_cljs$core$async12568(self__.f,self__.ch,meta12569__$1));
}));

(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12570){
var self__ = this;
var _12570__$1 = this;
return self__.meta12569;
}));

(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12569","meta12569",728397350,null)], null);
}));

(cljs.core.async.t_cljs$core$async12568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12568");

(cljs.core.async.t_cljs$core$async12568.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12568.
 */
cljs.core.async.__GT_t_cljs$core$async12568 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12568(f__$1,ch__$1,meta12569){
return (new cljs.core.async.t_cljs$core$async12568(f__$1,ch__$1,meta12569));
});

}

return (new cljs.core.async.t_cljs$core$async12568(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12624 = (function (p,ch,meta12625){
this.p = p;
this.ch = ch;
this.meta12625 = meta12625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12626,meta12625__$1){
var self__ = this;
var _12626__$1 = this;
return (new cljs.core.async.t_cljs$core$async12624(self__.p,self__.ch,meta12625__$1));
}));

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12626){
var self__ = this;
var _12626__$1 = this;
return self__.meta12625;
}));

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12625","meta12625",1486306824,null)], null);
}));

(cljs.core.async.t_cljs$core$async12624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12624");

(cljs.core.async.t_cljs$core$async12624.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12624.
 */
cljs.core.async.__GT_t_cljs$core$async12624 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12624(p__$1,ch__$1,meta12625){
return (new cljs.core.async.t_cljs$core$async12624(p__$1,ch__$1,meta12625));
});

}

return (new cljs.core.async.t_cljs$core$async12624(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12644 = arguments.length;
switch (G__12644) {
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
var c__11039__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12666){
var state_val_12667 = (state_12666[(1)]);
if((state_val_12667 === (7))){
var inst_12662 = (state_12666[(2)]);
var state_12666__$1 = state_12666;
var statearr_12670_13395 = state_12666__$1;
(statearr_12670_13395[(2)] = inst_12662);

(statearr_12670_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (1))){
var state_12666__$1 = state_12666;
var statearr_12671_13396 = state_12666__$1;
(statearr_12671_13396[(2)] = null);

(statearr_12671_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (4))){
var inst_12648 = (state_12666[(7)]);
var inst_12648__$1 = (state_12666[(2)]);
var inst_12649 = (inst_12648__$1 == null);
var state_12666__$1 = (function (){var statearr_12673 = state_12666;
(statearr_12673[(7)] = inst_12648__$1);

return statearr_12673;
})();
if(cljs.core.truth_(inst_12649)){
var statearr_12674_13397 = state_12666__$1;
(statearr_12674_13397[(1)] = (5));

} else {
var statearr_12675_13398 = state_12666__$1;
(statearr_12675_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (6))){
var inst_12648 = (state_12666[(7)]);
var inst_12653 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12648) : p.call(null,inst_12648));
var state_12666__$1 = state_12666;
if(cljs.core.truth_(inst_12653)){
var statearr_12676_13399 = state_12666__$1;
(statearr_12676_13399[(1)] = (8));

} else {
var statearr_12677_13400 = state_12666__$1;
(statearr_12677_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (3))){
var inst_12664 = (state_12666[(2)]);
var state_12666__$1 = state_12666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12666__$1,inst_12664);
} else {
if((state_val_12667 === (2))){
var state_12666__$1 = state_12666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12666__$1,(4),ch);
} else {
if((state_val_12667 === (11))){
var inst_12656 = (state_12666[(2)]);
var state_12666__$1 = state_12666;
var statearr_12679_13401 = state_12666__$1;
(statearr_12679_13401[(2)] = inst_12656);

(statearr_12679_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (9))){
var state_12666__$1 = state_12666;
var statearr_12680_13402 = state_12666__$1;
(statearr_12680_13402[(2)] = null);

(statearr_12680_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (5))){
var inst_12651 = cljs.core.async.close_BANG_(out);
var state_12666__$1 = state_12666;
var statearr_12681_13403 = state_12666__$1;
(statearr_12681_13403[(2)] = inst_12651);

(statearr_12681_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (10))){
var inst_12659 = (state_12666[(2)]);
var state_12666__$1 = (function (){var statearr_12682 = state_12666;
(statearr_12682[(8)] = inst_12659);

return statearr_12682;
})();
var statearr_12686_13404 = state_12666__$1;
(statearr_12686_13404[(2)] = null);

(statearr_12686_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12667 === (8))){
var inst_12648 = (state_12666[(7)]);
var state_12666__$1 = state_12666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12666__$1,(11),out,inst_12648);
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
var statearr_12687 = [null,null,null,null,null,null,null,null,null];
(statearr_12687[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12687[(1)] = (1));

return statearr_12687;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12666){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12666);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12688){var ex__10939__auto__ = e12688;
var statearr_12689_13405 = state_12666;
(statearr_12689_13405[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12666[(4)]))){
var statearr_12690_13406 = state_12666;
(statearr_12690_13406[(1)] = cljs.core.first((state_12666[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12666;
state_12666 = G__13407;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12691 = f__11040__auto__();
(statearr_12691[(6)] = c__11039__auto___13394);

return statearr_12691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12693 = arguments.length;
switch (G__12693) {
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
var c__11039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12758){
var state_val_12759 = (state_12758[(1)]);
if((state_val_12759 === (7))){
var inst_12754 = (state_12758[(2)]);
var state_12758__$1 = state_12758;
var statearr_12760_13409 = state_12758__$1;
(statearr_12760_13409[(2)] = inst_12754);

(statearr_12760_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (20))){
var inst_12724 = (state_12758[(7)]);
var inst_12735 = (state_12758[(2)]);
var inst_12736 = cljs.core.next(inst_12724);
var inst_12707 = inst_12736;
var inst_12708 = null;
var inst_12709 = (0);
var inst_12710 = (0);
var state_12758__$1 = (function (){var statearr_12761 = state_12758;
(statearr_12761[(8)] = inst_12735);

(statearr_12761[(9)] = inst_12709);

(statearr_12761[(10)] = inst_12707);

(statearr_12761[(11)] = inst_12710);

(statearr_12761[(12)] = inst_12708);

return statearr_12761;
})();
var statearr_12762_13410 = state_12758__$1;
(statearr_12762_13410[(2)] = null);

(statearr_12762_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (1))){
var state_12758__$1 = state_12758;
var statearr_12763_13411 = state_12758__$1;
(statearr_12763_13411[(2)] = null);

(statearr_12763_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (4))){
var inst_12696 = (state_12758[(13)]);
var inst_12696__$1 = (state_12758[(2)]);
var inst_12697 = (inst_12696__$1 == null);
var state_12758__$1 = (function (){var statearr_12764 = state_12758;
(statearr_12764[(13)] = inst_12696__$1);

return statearr_12764;
})();
if(cljs.core.truth_(inst_12697)){
var statearr_12765_13412 = state_12758__$1;
(statearr_12765_13412[(1)] = (5));

} else {
var statearr_12766_13413 = state_12758__$1;
(statearr_12766_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (15))){
var state_12758__$1 = state_12758;
var statearr_12770_13414 = state_12758__$1;
(statearr_12770_13414[(2)] = null);

(statearr_12770_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (21))){
var state_12758__$1 = state_12758;
var statearr_12771_13415 = state_12758__$1;
(statearr_12771_13415[(2)] = null);

(statearr_12771_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (13))){
var inst_12709 = (state_12758[(9)]);
var inst_12707 = (state_12758[(10)]);
var inst_12710 = (state_12758[(11)]);
var inst_12708 = (state_12758[(12)]);
var inst_12720 = (state_12758[(2)]);
var inst_12721 = (inst_12710 + (1));
var tmp12767 = inst_12709;
var tmp12768 = inst_12707;
var tmp12769 = inst_12708;
var inst_12707__$1 = tmp12768;
var inst_12708__$1 = tmp12769;
var inst_12709__$1 = tmp12767;
var inst_12710__$1 = inst_12721;
var state_12758__$1 = (function (){var statearr_12772 = state_12758;
(statearr_12772[(9)] = inst_12709__$1);

(statearr_12772[(10)] = inst_12707__$1);

(statearr_12772[(11)] = inst_12710__$1);

(statearr_12772[(12)] = inst_12708__$1);

(statearr_12772[(14)] = inst_12720);

return statearr_12772;
})();
var statearr_12773_13416 = state_12758__$1;
(statearr_12773_13416[(2)] = null);

(statearr_12773_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (22))){
var state_12758__$1 = state_12758;
var statearr_12774_13417 = state_12758__$1;
(statearr_12774_13417[(2)] = null);

(statearr_12774_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (6))){
var inst_12696 = (state_12758[(13)]);
var inst_12705 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12696) : f.call(null,inst_12696));
var inst_12706 = cljs.core.seq(inst_12705);
var inst_12707 = inst_12706;
var inst_12708 = null;
var inst_12709 = (0);
var inst_12710 = (0);
var state_12758__$1 = (function (){var statearr_12775 = state_12758;
(statearr_12775[(9)] = inst_12709);

(statearr_12775[(10)] = inst_12707);

(statearr_12775[(11)] = inst_12710);

(statearr_12775[(12)] = inst_12708);

return statearr_12775;
})();
var statearr_12776_13418 = state_12758__$1;
(statearr_12776_13418[(2)] = null);

(statearr_12776_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (17))){
var inst_12724 = (state_12758[(7)]);
var inst_12728 = cljs.core.chunk_first(inst_12724);
var inst_12729 = cljs.core.chunk_rest(inst_12724);
var inst_12730 = cljs.core.count(inst_12728);
var inst_12707 = inst_12729;
var inst_12708 = inst_12728;
var inst_12709 = inst_12730;
var inst_12710 = (0);
var state_12758__$1 = (function (){var statearr_12783 = state_12758;
(statearr_12783[(9)] = inst_12709);

(statearr_12783[(10)] = inst_12707);

(statearr_12783[(11)] = inst_12710);

(statearr_12783[(12)] = inst_12708);

return statearr_12783;
})();
var statearr_12784_13419 = state_12758__$1;
(statearr_12784_13419[(2)] = null);

(statearr_12784_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (3))){
var inst_12756 = (state_12758[(2)]);
var state_12758__$1 = state_12758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12758__$1,inst_12756);
} else {
if((state_val_12759 === (12))){
var inst_12744 = (state_12758[(2)]);
var state_12758__$1 = state_12758;
var statearr_12785_13420 = state_12758__$1;
(statearr_12785_13420[(2)] = inst_12744);

(statearr_12785_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (2))){
var state_12758__$1 = state_12758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12758__$1,(4),in$);
} else {
if((state_val_12759 === (23))){
var inst_12752 = (state_12758[(2)]);
var state_12758__$1 = state_12758;
var statearr_12786_13421 = state_12758__$1;
(statearr_12786_13421[(2)] = inst_12752);

(statearr_12786_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (19))){
var inst_12739 = (state_12758[(2)]);
var state_12758__$1 = state_12758;
var statearr_12787_13422 = state_12758__$1;
(statearr_12787_13422[(2)] = inst_12739);

(statearr_12787_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (11))){
var inst_12707 = (state_12758[(10)]);
var inst_12724 = (state_12758[(7)]);
var inst_12724__$1 = cljs.core.seq(inst_12707);
var state_12758__$1 = (function (){var statearr_12788 = state_12758;
(statearr_12788[(7)] = inst_12724__$1);

return statearr_12788;
})();
if(inst_12724__$1){
var statearr_12789_13423 = state_12758__$1;
(statearr_12789_13423[(1)] = (14));

} else {
var statearr_12790_13424 = state_12758__$1;
(statearr_12790_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (9))){
var inst_12746 = (state_12758[(2)]);
var inst_12747 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12758__$1 = (function (){var statearr_12791 = state_12758;
(statearr_12791[(15)] = inst_12746);

return statearr_12791;
})();
if(cljs.core.truth_(inst_12747)){
var statearr_12792_13425 = state_12758__$1;
(statearr_12792_13425[(1)] = (21));

} else {
var statearr_12793_13426 = state_12758__$1;
(statearr_12793_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (5))){
var inst_12699 = cljs.core.async.close_BANG_(out);
var state_12758__$1 = state_12758;
var statearr_12794_13427 = state_12758__$1;
(statearr_12794_13427[(2)] = inst_12699);

(statearr_12794_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (14))){
var inst_12724 = (state_12758[(7)]);
var inst_12726 = cljs.core.chunked_seq_QMARK_(inst_12724);
var state_12758__$1 = state_12758;
if(inst_12726){
var statearr_12795_13428 = state_12758__$1;
(statearr_12795_13428[(1)] = (17));

} else {
var statearr_12796_13429 = state_12758__$1;
(statearr_12796_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (16))){
var inst_12742 = (state_12758[(2)]);
var state_12758__$1 = state_12758;
var statearr_12797_13430 = state_12758__$1;
(statearr_12797_13430[(2)] = inst_12742);

(statearr_12797_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12759 === (10))){
var inst_12710 = (state_12758[(11)]);
var inst_12708 = (state_12758[(12)]);
var inst_12718 = cljs.core._nth(inst_12708,inst_12710);
var state_12758__$1 = state_12758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12758__$1,(13),out,inst_12718);
} else {
if((state_val_12759 === (18))){
var inst_12724 = (state_12758[(7)]);
var inst_12733 = cljs.core.first(inst_12724);
var state_12758__$1 = state_12758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12758__$1,(20),out,inst_12733);
} else {
if((state_val_12759 === (8))){
var inst_12709 = (state_12758[(9)]);
var inst_12710 = (state_12758[(11)]);
var inst_12715 = (inst_12710 < inst_12709);
var inst_12716 = inst_12715;
var state_12758__$1 = state_12758;
if(cljs.core.truth_(inst_12716)){
var statearr_12798_13431 = state_12758__$1;
(statearr_12798_13431[(1)] = (10));

} else {
var statearr_12799_13432 = state_12758__$1;
(statearr_12799_13432[(1)] = (11));

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
var statearr_12800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12800[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__);

(statearr_12800[(1)] = (1));

return statearr_12800;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____1 = (function (state_12758){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12758);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12801){var ex__10939__auto__ = e12801;
var statearr_12802_13433 = state_12758;
(statearr_12802_13433[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12758[(4)]))){
var statearr_12803_13434 = state_12758;
(statearr_12803_13434[(1)] = cljs.core.first((state_12758[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12758;
state_12758 = G__13435;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__ = function(state_12758){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____1.call(this,state_12758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10936__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12805 = f__11040__auto__();
(statearr_12805[(6)] = c__11039__auto__);

return statearr_12805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));

return c__11039__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12808 = arguments.length;
switch (G__12808) {
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
var G__12811 = arguments.length;
switch (G__12811) {
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
var G__12813 = arguments.length;
switch (G__12813) {
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
var c__11039__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12837){
var state_val_12838 = (state_12837[(1)]);
if((state_val_12838 === (7))){
var inst_12832 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12839_13440 = state_12837__$1;
(statearr_12839_13440[(2)] = inst_12832);

(statearr_12839_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (1))){
var inst_12814 = null;
var state_12837__$1 = (function (){var statearr_12840 = state_12837;
(statearr_12840[(7)] = inst_12814);

return statearr_12840;
})();
var statearr_12841_13441 = state_12837__$1;
(statearr_12841_13441[(2)] = null);

(statearr_12841_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (4))){
var inst_12817 = (state_12837[(8)]);
var inst_12817__$1 = (state_12837[(2)]);
var inst_12818 = (inst_12817__$1 == null);
var inst_12819 = cljs.core.not(inst_12818);
var state_12837__$1 = (function (){var statearr_12842 = state_12837;
(statearr_12842[(8)] = inst_12817__$1);

return statearr_12842;
})();
if(inst_12819){
var statearr_12843_13442 = state_12837__$1;
(statearr_12843_13442[(1)] = (5));

} else {
var statearr_12844_13443 = state_12837__$1;
(statearr_12844_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (6))){
var state_12837__$1 = state_12837;
var statearr_12845_13444 = state_12837__$1;
(statearr_12845_13444[(2)] = null);

(statearr_12845_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (3))){
var inst_12834 = (state_12837[(2)]);
var inst_12835 = cljs.core.async.close_BANG_(out);
var state_12837__$1 = (function (){var statearr_12846 = state_12837;
(statearr_12846[(9)] = inst_12834);

return statearr_12846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12837__$1,inst_12835);
} else {
if((state_val_12838 === (2))){
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12837__$1,(4),ch);
} else {
if((state_val_12838 === (11))){
var inst_12817 = (state_12837[(8)]);
var inst_12826 = (state_12837[(2)]);
var inst_12814 = inst_12817;
var state_12837__$1 = (function (){var statearr_12847 = state_12837;
(statearr_12847[(10)] = inst_12826);

(statearr_12847[(7)] = inst_12814);

return statearr_12847;
})();
var statearr_12848_13445 = state_12837__$1;
(statearr_12848_13445[(2)] = null);

(statearr_12848_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (9))){
var inst_12817 = (state_12837[(8)]);
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12837__$1,(11),out,inst_12817);
} else {
if((state_val_12838 === (5))){
var inst_12817 = (state_12837[(8)]);
var inst_12814 = (state_12837[(7)]);
var inst_12821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12817,inst_12814);
var state_12837__$1 = state_12837;
if(inst_12821){
var statearr_12850_13446 = state_12837__$1;
(statearr_12850_13446[(1)] = (8));

} else {
var statearr_12851_13447 = state_12837__$1;
(statearr_12851_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (10))){
var inst_12829 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12852_13448 = state_12837__$1;
(statearr_12852_13448[(2)] = inst_12829);

(statearr_12852_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (8))){
var inst_12814 = (state_12837[(7)]);
var tmp12849 = inst_12814;
var inst_12814__$1 = tmp12849;
var state_12837__$1 = (function (){var statearr_12853 = state_12837;
(statearr_12853[(7)] = inst_12814__$1);

return statearr_12853;
})();
var statearr_12854_13449 = state_12837__$1;
(statearr_12854_13449[(2)] = null);

(statearr_12854_13449[(1)] = (2));


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
var statearr_12855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12855[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12855[(1)] = (1));

return statearr_12855;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12837){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12837);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12856){var ex__10939__auto__ = e12856;
var statearr_12857_13450 = state_12837;
(statearr_12857_13450[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12837[(4)]))){
var statearr_12858_13451 = state_12837;
(statearr_12858_13451[(1)] = cljs.core.first((state_12837[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12837;
state_12837 = G__13452;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12859 = f__11040__auto__();
(statearr_12859[(6)] = c__11039__auto___13439);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12861 = arguments.length;
switch (G__12861) {
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
var c__11039__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12899){
var state_val_12900 = (state_12899[(1)]);
if((state_val_12900 === (7))){
var inst_12895 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12901_13455 = state_12899__$1;
(statearr_12901_13455[(2)] = inst_12895);

(statearr_12901_13455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (1))){
var inst_12862 = (new Array(n));
var inst_12863 = inst_12862;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12902 = state_12899;
(statearr_12902[(7)] = inst_12864);

(statearr_12902[(8)] = inst_12863);

return statearr_12902;
})();
var statearr_12903_13456 = state_12899__$1;
(statearr_12903_13456[(2)] = null);

(statearr_12903_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (4))){
var inst_12867 = (state_12899[(9)]);
var inst_12867__$1 = (state_12899[(2)]);
var inst_12868 = (inst_12867__$1 == null);
var inst_12869 = cljs.core.not(inst_12868);
var state_12899__$1 = (function (){var statearr_12904 = state_12899;
(statearr_12904[(9)] = inst_12867__$1);

return statearr_12904;
})();
if(inst_12869){
var statearr_12905_13457 = state_12899__$1;
(statearr_12905_13457[(1)] = (5));

} else {
var statearr_12906_13458 = state_12899__$1;
(statearr_12906_13458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (15))){
var inst_12889 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12907_13459 = state_12899__$1;
(statearr_12907_13459[(2)] = inst_12889);

(statearr_12907_13459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (13))){
var state_12899__$1 = state_12899;
var statearr_12908_13460 = state_12899__$1;
(statearr_12908_13460[(2)] = null);

(statearr_12908_13460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (6))){
var inst_12864 = (state_12899[(7)]);
var inst_12885 = (inst_12864 > (0));
var state_12899__$1 = state_12899;
if(cljs.core.truth_(inst_12885)){
var statearr_12909_13461 = state_12899__$1;
(statearr_12909_13461[(1)] = (12));

} else {
var statearr_12910_13462 = state_12899__$1;
(statearr_12910_13462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (3))){
var inst_12897 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12899__$1,inst_12897);
} else {
if((state_val_12900 === (12))){
var inst_12863 = (state_12899[(8)]);
var inst_12887 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(15),out,inst_12887);
} else {
if((state_val_12900 === (2))){
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12899__$1,(4),ch);
} else {
if((state_val_12900 === (11))){
var inst_12879 = (state_12899[(2)]);
var inst_12880 = (new Array(n));
var inst_12863 = inst_12880;
var inst_12864 = (0);
var state_12899__$1 = (function (){var statearr_12911 = state_12899;
(statearr_12911[(10)] = inst_12879);

(statearr_12911[(7)] = inst_12864);

(statearr_12911[(8)] = inst_12863);

return statearr_12911;
})();
var statearr_12912_13463 = state_12899__$1;
(statearr_12912_13463[(2)] = null);

(statearr_12912_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (9))){
var inst_12863 = (state_12899[(8)]);
var inst_12877 = cljs.core.vec(inst_12863);
var state_12899__$1 = state_12899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12899__$1,(11),out,inst_12877);
} else {
if((state_val_12900 === (5))){
var inst_12864 = (state_12899[(7)]);
var inst_12867 = (state_12899[(9)]);
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var inst_12871 = (inst_12863[inst_12864] = inst_12867);
var inst_12872__$1 = (inst_12864 + (1));
var inst_12873 = (inst_12872__$1 < n);
var state_12899__$1 = (function (){var statearr_12913 = state_12899;
(statearr_12913[(12)] = inst_12871);

(statearr_12913[(11)] = inst_12872__$1);

return statearr_12913;
})();
if(cljs.core.truth_(inst_12873)){
var statearr_12914_13464 = state_12899__$1;
(statearr_12914_13464[(1)] = (8));

} else {
var statearr_12915_13465 = state_12899__$1;
(statearr_12915_13465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (14))){
var inst_12892 = (state_12899[(2)]);
var inst_12893 = cljs.core.async.close_BANG_(out);
var state_12899__$1 = (function (){var statearr_12917 = state_12899;
(statearr_12917[(13)] = inst_12892);

return statearr_12917;
})();
var statearr_12918_13466 = state_12899__$1;
(statearr_12918_13466[(2)] = inst_12893);

(statearr_12918_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (10))){
var inst_12883 = (state_12899[(2)]);
var state_12899__$1 = state_12899;
var statearr_12919_13467 = state_12899__$1;
(statearr_12919_13467[(2)] = inst_12883);

(statearr_12919_13467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12900 === (8))){
var inst_12863 = (state_12899[(8)]);
var inst_12872 = (state_12899[(11)]);
var tmp12916 = inst_12863;
var inst_12863__$1 = tmp12916;
var inst_12864 = inst_12872;
var state_12899__$1 = (function (){var statearr_12920 = state_12899;
(statearr_12920[(7)] = inst_12864);

(statearr_12920[(8)] = inst_12863__$1);

return statearr_12920;
})();
var statearr_12921_13468 = state_12899__$1;
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12922[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12922[(1)] = (1));

return statearr_12922;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12899){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12899);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12923){var ex__10939__auto__ = e12923;
var statearr_12924_13469 = state_12899;
(statearr_12924_13469[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12899[(4)]))){
var statearr_12925_13470 = state_12899;
(statearr_12925_13470[(1)] = cljs.core.first((state_12899[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12899;
state_12899 = G__13471;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12926 = f__11040__auto__();
(statearr_12926[(6)] = c__11039__auto___13454);

return statearr_12926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
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
var c__11039__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11040__auto__ = (function (){var switch__10935__auto__ = (function (state_12970){
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
var cljs$core$async$state_machine__10936__auto__ = null;
var cljs$core$async$state_machine__10936__auto____0 = (function (){
var statearr_12993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12993[(0)] = cljs$core$async$state_machine__10936__auto__);

(statearr_12993[(1)] = (1));

return statearr_12993;
});
var cljs$core$async$state_machine__10936__auto____1 = (function (state_12970){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_12970);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e12994){var ex__10939__auto__ = e12994;
var statearr_12995_13488 = state_12970;
(statearr_12995_13488[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_12970[(4)]))){
var statearr_12996_13489 = state_12970;
(statearr_12996_13489[(1)] = cljs.core.first((state_12970[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12970;
state_12970 = G__13490;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
cljs$core$async$state_machine__10936__auto__ = function(state_12970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10936__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10936__auto____1.call(this,state_12970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10936__auto____0;
cljs$core$async$state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10936__auto____1;
return cljs$core$async$state_machine__10936__auto__;
})()
})();
var state__11041__auto__ = (function (){var statearr_12997 = f__11040__auto__();
(statearr_12997[(6)] = c__11039__auto___13473);

return statearr_12997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11041__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
