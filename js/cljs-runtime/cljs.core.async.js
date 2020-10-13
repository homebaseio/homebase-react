goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11058 = arguments.length;
switch (G__11058) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11059 = (function (f,blockable,meta11060){
this.f = f;
this.blockable = blockable;
this.meta11060 = meta11060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11061,meta11060__$1){
var self__ = this;
var _11061__$1 = this;
return (new cljs.core.async.t_cljs$core$async11059(self__.f,self__.blockable,meta11060__$1));
}));

(cljs.core.async.t_cljs$core$async11059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11061){
var self__ = this;
var _11061__$1 = this;
return self__.meta11060;
}));

(cljs.core.async.t_cljs$core$async11059.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11059.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11060","meta11060",1068044805,null)], null);
}));

(cljs.core.async.t_cljs$core$async11059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11059");

(cljs.core.async.t_cljs$core$async11059.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11059.
 */
cljs.core.async.__GT_t_cljs$core$async11059 = (function cljs$core$async$__GT_t_cljs$core$async11059(f__$1,blockable__$1,meta11060){
return (new cljs.core.async.t_cljs$core$async11059(f__$1,blockable__$1,meta11060));
});

}

return (new cljs.core.async.t_cljs$core$async11059(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11085 = arguments.length;
switch (G__11085) {
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
var G__11107 = arguments.length;
switch (G__11107) {
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
var val_12919 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12919) : fn1.call(null,val_12919));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12919) : fn1.call(null,val_12919));
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
var n__4613__auto___12942 = n;
var x_12943 = (0);
while(true){
if((x_12943 < n__4613__auto___12942)){
(a[x_12943] = x_12943);

var G__12944 = (x_12943 + (1));
x_12943 = G__12944;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11114 = (function (flag,meta11115){
this.flag = flag;
this.meta11115 = meta11115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11116,meta11115__$1){
var self__ = this;
var _11116__$1 = this;
return (new cljs.core.async.t_cljs$core$async11114(self__.flag,meta11115__$1));
}));

(cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11116){
var self__ = this;
var _11116__$1 = this;
return self__.meta11115;
}));

(cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11115","meta11115",428223918,null)], null);
}));

(cljs.core.async.t_cljs$core$async11114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11114");

(cljs.core.async.t_cljs$core$async11114.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11114.
 */
cljs.core.async.__GT_t_cljs$core$async11114 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11114(flag__$1,meta11115){
return (new cljs.core.async.t_cljs$core$async11114(flag__$1,meta11115));
});

}

return (new cljs.core.async.t_cljs$core$async11114(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11121 = (function (flag,cb,meta11122){
this.flag = flag;
this.cb = cb;
this.meta11122 = meta11122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11123,meta11122__$1){
var self__ = this;
var _11123__$1 = this;
return (new cljs.core.async.t_cljs$core$async11121(self__.flag,self__.cb,meta11122__$1));
}));

(cljs.core.async.t_cljs$core$async11121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11123){
var self__ = this;
var _11123__$1 = this;
return self__.meta11122;
}));

(cljs.core.async.t_cljs$core$async11121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11122","meta11122",-765423377,null)], null);
}));

(cljs.core.async.t_cljs$core$async11121.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11121");

(cljs.core.async.t_cljs$core$async11121.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11121");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11121.
 */
cljs.core.async.__GT_t_cljs$core$async11121 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11121(flag__$1,cb__$1,meta11122){
return (new cljs.core.async.t_cljs$core$async11121(flag__$1,cb__$1,meta11122));
});

}

return (new cljs.core.async.t_cljs$core$async11121(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11124_SHARP_){
var G__11126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11124_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11126) : fret.call(null,G__11126));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11125_SHARP_){
var G__11127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11125_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11127) : fret.call(null,G__11127));
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
var G__12987 = (i + (1));
i = G__12987;
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
var len__4736__auto___12988 = arguments.length;
var i__4737__auto___12990 = (0);
while(true){
if((i__4737__auto___12990 < len__4736__auto___12988)){
args__4742__auto__.push((arguments[i__4737__auto___12990]));

var G__12991 = (i__4737__auto___12990 + (1));
i__4737__auto___12990 = G__12991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11130){
var map__11131 = p__11130;
var map__11131__$1 = (((((!((map__11131 == null))))?(((((map__11131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11131):map__11131);
var opts = map__11131__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11128){
var G__11129 = cljs.core.first(seq11128);
var seq11128__$1 = cljs.core.next(seq11128);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11129,seq11128__$1);
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
var G__11142 = arguments.length;
switch (G__11142) {
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
var c__10997__auto___13000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11172){
var state_val_11173 = (state_11172[(1)]);
if((state_val_11173 === (7))){
var inst_11168 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
var statearr_11174_13001 = state_11172__$1;
(statearr_11174_13001[(2)] = inst_11168);

(statearr_11174_13001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (1))){
var state_11172__$1 = state_11172;
var statearr_11175_13002 = state_11172__$1;
(statearr_11175_13002[(2)] = null);

(statearr_11175_13002[(1)] = (2));


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
var statearr_11177_13003 = state_11172__$1;
(statearr_11177_13003[(1)] = (5));

} else {
var statearr_11178_13004 = state_11172__$1;
(statearr_11178_13004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (13))){
var state_11172__$1 = state_11172;
var statearr_11179_13005 = state_11172__$1;
(statearr_11179_13005[(2)] = null);

(statearr_11179_13005[(1)] = (14));


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
var statearr_11180_13006 = state_11172__$1;
(statearr_11180_13006[(2)] = null);

(statearr_11180_13006[(1)] = (2));


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
var statearr_11181_13008 = state_11172__$1;
(statearr_11181_13008[(1)] = (12));

} else {
var statearr_11182_13009 = state_11172__$1;
(statearr_11182_13009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (9))){
var state_11172__$1 = state_11172;
var statearr_11183_13011 = state_11172__$1;
(statearr_11183_13011[(2)] = null);

(statearr_11183_13011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (5))){
var state_11172__$1 = state_11172;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11184_13012 = state_11172__$1;
(statearr_11184_13012[(1)] = (8));

} else {
var statearr_11185_13013 = state_11172__$1;
(statearr_11185_13013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (14))){
var inst_11166 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
var statearr_11186_13014 = state_11172__$1;
(statearr_11186_13014[(2)] = inst_11166);

(statearr_11186_13014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (10))){
var inst_11158 = (state_11172[(2)]);
var state_11172__$1 = state_11172;
var statearr_11187_13015 = state_11172__$1;
(statearr_11187_13015[(2)] = inst_11158);

(statearr_11187_13015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11173 === (8))){
var inst_11155 = cljs.core.async.close_BANG_(to);
var state_11172__$1 = state_11172;
var statearr_11188_13016 = state_11172__$1;
(statearr_11188_13016[(2)] = inst_11155);

(statearr_11188_13016[(1)] = (10));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_11189 = [null,null,null,null,null,null,null,null];
(statearr_11189[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11189[(1)] = (1));

return statearr_11189;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11172){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11172);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11190){var ex__10932__auto__ = e11190;
var statearr_11191_13024 = state_11172;
(statearr_11191_13024[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11172[(4)]))){
var statearr_11192_13025 = state_11172;
(statearr_11192_13025[(1)] = cljs.core.first((state_11172[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13026 = state_11172;
state_11172 = G__13026;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11193 = f__10998__auto__();
(statearr_11193[(6)] = c__10997__auto___13000);

return statearr_11193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var process = (function (p__11194){
var vec__11195 = p__11194;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(1),null);
var job = vec__11195;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10997__auto___13029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11208){
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
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11211 = [null,null,null,null,null,null,null,null];
(statearr_11211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11211[(1)] = (1));

return statearr_11211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11208){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11208);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11212){var ex__10932__auto__ = e11212;
var statearr_11213_13031 = state_11208;
(statearr_11213_13031[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11208[(4)]))){
var statearr_11214_13032 = state_11208;
(statearr_11214_13032[(1)] = cljs.core.first((state_11208[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13033 = state_11208;
state_11208 = G__13033;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11215 = f__10998__auto__();
(statearr_11215[(6)] = c__10997__auto___13029);

return statearr_11215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11216){
var vec__11217 = p__11216;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11217,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11217,(1),null);
var job = vec__11217;
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
var G__11224_13036 = type;
var G__11224_13037__$1 = (((G__11224_13036 instanceof cljs.core.Keyword))?G__11224_13036.fqn:null);
switch (G__11224_13037__$1) {
case "compute":
var c__10997__auto___13039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10997__auto___13039,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = ((function (__13035,c__10997__auto___13039,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11237){
var state_val_11238 = (state_11237[(1)]);
if((state_val_11238 === (1))){
var state_11237__$1 = state_11237;
var statearr_11239_13040 = state_11237__$1;
(statearr_11239_13040[(2)] = null);

(statearr_11239_13040[(1)] = (2));


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
var statearr_11240_13041 = state_11237__$1;
(statearr_11240_13041[(1)] = (5));

} else {
var statearr_11241_13042 = state_11237__$1;
(statearr_11241_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (5))){
var state_11237__$1 = state_11237;
var statearr_11242_13043 = state_11237__$1;
(statearr_11242_13043[(2)] = null);

(statearr_11242_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (6))){
var state_11237__$1 = state_11237;
var statearr_11243_13044 = state_11237__$1;
(statearr_11243_13044[(2)] = null);

(statearr_11243_13044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (7))){
var inst_11233 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11244_13045 = state_11237__$1;
(statearr_11244_13045[(2)] = inst_11233);

(statearr_11244_13045[(1)] = (3));


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
});})(__13035,c__10997__auto___13039,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10928__auto__,c__10997__auto___13039,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11245 = [null,null,null,null,null,null,null];
(statearr_11245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11245[(1)] = (1));

return statearr_11245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11237){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11237);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11246){var ex__10932__auto__ = e11246;
var statearr_11247_13046 = state_11237;
(statearr_11247_13046[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11237[(4)]))){
var statearr_11248_13047 = state_11237;
(statearr_11248_13047[(1)] = cljs.core.first((state_11237[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13048 = state_11237;
state_11237 = G__13048;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
;})(__13035,switch__10928__auto__,c__10997__auto___13039,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10999__auto__ = (function (){var statearr_11249 = f__10998__auto__();
(statearr_11249[(6)] = c__10997__auto___13039);

return statearr_11249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
});})(__13035,c__10997__auto___13039,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
case "async":
var c__10997__auto___13049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13035,c__10997__auto___13049,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = ((function (__13035,c__10997__auto___13049,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function (state_11262){
var state_val_11263 = (state_11262[(1)]);
if((state_val_11263 === (1))){
var state_11262__$1 = state_11262;
var statearr_11264_13050 = state_11262__$1;
(statearr_11264_13050[(2)] = null);

(statearr_11264_13050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (2))){
var state_11262__$1 = state_11262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11262__$1,(4),jobs);
} else {
if((state_val_11263 === (3))){
var inst_11260 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11262__$1,inst_11260);
} else {
if((state_val_11263 === (4))){
var inst_11252 = (state_11262[(2)]);
var inst_11253 = async(inst_11252);
var state_11262__$1 = state_11262;
if(cljs.core.truth_(inst_11253)){
var statearr_11265_13051 = state_11262__$1;
(statearr_11265_13051[(1)] = (5));

} else {
var statearr_11266_13052 = state_11262__$1;
(statearr_11266_13052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (5))){
var state_11262__$1 = state_11262;
var statearr_11267_13053 = state_11262__$1;
(statearr_11267_13053[(2)] = null);

(statearr_11267_13053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (6))){
var state_11262__$1 = state_11262;
var statearr_11268_13054 = state_11262__$1;
(statearr_11268_13054[(2)] = null);

(statearr_11268_13054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (7))){
var inst_11258 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
var statearr_11269_13055 = state_11262__$1;
(statearr_11269_13055[(2)] = inst_11258);

(statearr_11269_13055[(1)] = (3));


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
});})(__13035,c__10997__auto___13049,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async))
;
return ((function (__13035,switch__10928__auto__,c__10997__auto___13049,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11270 = [null,null,null,null,null,null,null];
(statearr_11270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11270[(1)] = (1));

return statearr_11270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11262){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11262);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11271){var ex__10932__auto__ = e11271;
var statearr_11272_13056 = state_11262;
(statearr_11272_13056[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11262[(4)]))){
var statearr_11273_13057 = state_11262;
(statearr_11273_13057[(1)] = cljs.core.first((state_11262[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13058 = state_11262;
state_11262 = G__13058;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
;})(__13035,switch__10928__auto__,c__10997__auto___13049,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async))
})();
var state__10999__auto__ = (function (){var statearr_11274 = f__10998__auto__();
(statearr_11274[(6)] = c__10997__auto___13049);

return statearr_11274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
});})(__13035,c__10997__auto___13049,G__11224_13036,G__11224_13037__$1,n__4613__auto___13034,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11224_13037__$1)].join('')));

}

var G__13059 = (__13035 + (1));
__13035 = G__13059;
continue;
} else {
}
break;
}

var c__10997__auto___13060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11297){
var state_val_11298 = (state_11297[(1)]);
if((state_val_11298 === (7))){
var inst_11293 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
var statearr_11299_13061 = state_11297__$1;
(statearr_11299_13061[(2)] = inst_11293);

(statearr_11299_13061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (1))){
var state_11297__$1 = state_11297;
var statearr_11300_13062 = state_11297__$1;
(statearr_11300_13062[(2)] = null);

(statearr_11300_13062[(1)] = (2));


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
var statearr_11302_13063 = state_11297__$1;
(statearr_11302_13063[(1)] = (5));

} else {
var statearr_11303_13064 = state_11297__$1;
(statearr_11303_13064[(1)] = (6));

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
var statearr_11306_13065 = state_11297__$1;
(statearr_11306_13065[(2)] = null);

(statearr_11306_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (5))){
var inst_11281 = cljs.core.async.close_BANG_(jobs);
var state_11297__$1 = state_11297;
var statearr_11307_13066 = state_11297__$1;
(statearr_11307_13066[(2)] = inst_11281);

(statearr_11307_13066[(1)] = (7));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11309[(1)] = (1));

return statearr_11309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11297){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11297);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11310){var ex__10932__auto__ = e11310;
var statearr_11311_13067 = state_11297;
(statearr_11311_13067[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11297[(4)]))){
var statearr_11312_13068 = state_11297;
(statearr_11312_13068[(1)] = cljs.core.first((state_11297[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_11297;
state_11297 = G__13069;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11313 = f__10998__auto__();
(statearr_11313[(6)] = c__10997__auto___13060);

return statearr_11313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));


var c__10997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11354){
var state_val_11355 = (state_11354[(1)]);
if((state_val_11355 === (7))){
var inst_11350 = (state_11354[(2)]);
var state_11354__$1 = state_11354;
var statearr_11356_13070 = state_11354__$1;
(statearr_11356_13070[(2)] = inst_11350);

(statearr_11356_13070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (20))){
var state_11354__$1 = state_11354;
var statearr_11357_13071 = state_11354__$1;
(statearr_11357_13071[(2)] = null);

(statearr_11357_13071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (1))){
var state_11354__$1 = state_11354;
var statearr_11358_13072 = state_11354__$1;
(statearr_11358_13072[(2)] = null);

(statearr_11358_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (4))){
var inst_11316 = (state_11354[(7)]);
var inst_11316__$1 = (state_11354[(2)]);
var inst_11317 = (inst_11316__$1 == null);
var state_11354__$1 = (function (){var statearr_11359 = state_11354;
(statearr_11359[(7)] = inst_11316__$1);

return statearr_11359;
})();
if(cljs.core.truth_(inst_11317)){
var statearr_11360_13073 = state_11354__$1;
(statearr_11360_13073[(1)] = (5));

} else {
var statearr_11361_13074 = state_11354__$1;
(statearr_11361_13074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (15))){
var inst_11332 = (state_11354[(8)]);
var state_11354__$1 = state_11354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11354__$1,(18),to,inst_11332);
} else {
if((state_val_11355 === (21))){
var inst_11345 = (state_11354[(2)]);
var state_11354__$1 = state_11354;
var statearr_11362_13075 = state_11354__$1;
(statearr_11362_13075[(2)] = inst_11345);

(statearr_11362_13075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (13))){
var inst_11347 = (state_11354[(2)]);
var state_11354__$1 = (function (){var statearr_11363 = state_11354;
(statearr_11363[(9)] = inst_11347);

return statearr_11363;
})();
var statearr_11364_13076 = state_11354__$1;
(statearr_11364_13076[(2)] = null);

(statearr_11364_13076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (6))){
var inst_11316 = (state_11354[(7)]);
var state_11354__$1 = state_11354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11354__$1,(11),inst_11316);
} else {
if((state_val_11355 === (17))){
var inst_11340 = (state_11354[(2)]);
var state_11354__$1 = state_11354;
if(cljs.core.truth_(inst_11340)){
var statearr_11365_13077 = state_11354__$1;
(statearr_11365_13077[(1)] = (19));

} else {
var statearr_11371_13078 = state_11354__$1;
(statearr_11371_13078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (3))){
var inst_11352 = (state_11354[(2)]);
var state_11354__$1 = state_11354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11354__$1,inst_11352);
} else {
if((state_val_11355 === (12))){
var inst_11329 = (state_11354[(10)]);
var state_11354__$1 = state_11354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11354__$1,(14),inst_11329);
} else {
if((state_val_11355 === (2))){
var state_11354__$1 = state_11354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11354__$1,(4),results);
} else {
if((state_val_11355 === (19))){
var state_11354__$1 = state_11354;
var statearr_11372_13079 = state_11354__$1;
(statearr_11372_13079[(2)] = null);

(statearr_11372_13079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (11))){
var inst_11329 = (state_11354[(2)]);
var state_11354__$1 = (function (){var statearr_11373 = state_11354;
(statearr_11373[(10)] = inst_11329);

return statearr_11373;
})();
var statearr_11374_13080 = state_11354__$1;
(statearr_11374_13080[(2)] = null);

(statearr_11374_13080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (9))){
var state_11354__$1 = state_11354;
var statearr_11375_13081 = state_11354__$1;
(statearr_11375_13081[(2)] = null);

(statearr_11375_13081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (5))){
var state_11354__$1 = state_11354;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11376_13082 = state_11354__$1;
(statearr_11376_13082[(1)] = (8));

} else {
var statearr_11377_13083 = state_11354__$1;
(statearr_11377_13083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (14))){
var inst_11332 = (state_11354[(8)]);
var inst_11332__$1 = (state_11354[(2)]);
var inst_11333 = (inst_11332__$1 == null);
var inst_11334 = cljs.core.not(inst_11333);
var state_11354__$1 = (function (){var statearr_11378 = state_11354;
(statearr_11378[(8)] = inst_11332__$1);

return statearr_11378;
})();
if(inst_11334){
var statearr_11379_13084 = state_11354__$1;
(statearr_11379_13084[(1)] = (15));

} else {
var statearr_11380_13085 = state_11354__$1;
(statearr_11380_13085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (16))){
var state_11354__$1 = state_11354;
var statearr_11381_13086 = state_11354__$1;
(statearr_11381_13086[(2)] = false);

(statearr_11381_13086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (10))){
var inst_11326 = (state_11354[(2)]);
var state_11354__$1 = state_11354;
var statearr_11382_13087 = state_11354__$1;
(statearr_11382_13087[(2)] = inst_11326);

(statearr_11382_13087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (18))){
var inst_11337 = (state_11354[(2)]);
var state_11354__$1 = state_11354;
var statearr_11383_13088 = state_11354__$1;
(statearr_11383_13088[(2)] = inst_11337);

(statearr_11383_13088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11355 === (8))){
var inst_11320 = cljs.core.async.close_BANG_(to);
var state_11354__$1 = state_11354;
var statearr_11384_13089 = state_11354__$1;
(statearr_11384_13089[(2)] = inst_11320);

(statearr_11384_13089[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_11385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__);

(statearr_11385[(1)] = (1));

return statearr_11385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1 = (function (state_11354){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11354);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11386){var ex__10932__auto__ = e11386;
var statearr_11387_13090 = state_11354;
(statearr_11387_13090[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11354[(4)]))){
var statearr_11388_13091 = state_11354;
(statearr_11388_13091[(1)] = cljs.core.first((state_11354[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13092 = state_11354;
state_11354 = G__13092;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__ = function(state_11354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1.call(this,state_11354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11389 = f__10998__auto__();
(statearr_11389[(6)] = c__10997__auto__);

return statearr_11389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));

return c__10997__auto__;
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
var G__11391 = arguments.length;
switch (G__11391) {
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
var G__11396 = arguments.length;
switch (G__11396) {
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
var G__11398 = arguments.length;
switch (G__11398) {
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
var c__10997__auto___13096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11424){
var state_val_11425 = (state_11424[(1)]);
if((state_val_11425 === (7))){
var inst_11420 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11426_13097 = state_11424__$1;
(statearr_11426_13097[(2)] = inst_11420);

(statearr_11426_13097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (1))){
var state_11424__$1 = state_11424;
var statearr_11439_13098 = state_11424__$1;
(statearr_11439_13098[(2)] = null);

(statearr_11439_13098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (4))){
var inst_11401 = (state_11424[(7)]);
var inst_11401__$1 = (state_11424[(2)]);
var inst_11402 = (inst_11401__$1 == null);
var state_11424__$1 = (function (){var statearr_11440 = state_11424;
(statearr_11440[(7)] = inst_11401__$1);

return statearr_11440;
})();
if(cljs.core.truth_(inst_11402)){
var statearr_11441_13099 = state_11424__$1;
(statearr_11441_13099[(1)] = (5));

} else {
var statearr_11442_13100 = state_11424__$1;
(statearr_11442_13100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (13))){
var state_11424__$1 = state_11424;
var statearr_11443_13101 = state_11424__$1;
(statearr_11443_13101[(2)] = null);

(statearr_11443_13101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (6))){
var inst_11401 = (state_11424[(7)]);
var inst_11407 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11401) : p.call(null,inst_11401));
var state_11424__$1 = state_11424;
if(cljs.core.truth_(inst_11407)){
var statearr_11444_13102 = state_11424__$1;
(statearr_11444_13102[(1)] = (9));

} else {
var statearr_11445_13103 = state_11424__$1;
(statearr_11445_13103[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (3))){
var inst_11422 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11424__$1,inst_11422);
} else {
if((state_val_11425 === (12))){
var state_11424__$1 = state_11424;
var statearr_11446_13104 = state_11424__$1;
(statearr_11446_13104[(2)] = null);

(statearr_11446_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (2))){
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11424__$1,(4),ch);
} else {
if((state_val_11425 === (11))){
var inst_11401 = (state_11424[(7)]);
var inst_11411 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11424__$1,(8),inst_11411,inst_11401);
} else {
if((state_val_11425 === (9))){
var state_11424__$1 = state_11424;
var statearr_11447_13105 = state_11424__$1;
(statearr_11447_13105[(2)] = tc);

(statearr_11447_13105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (5))){
var inst_11404 = cljs.core.async.close_BANG_(tc);
var inst_11405 = cljs.core.async.close_BANG_(fc);
var state_11424__$1 = (function (){var statearr_11448 = state_11424;
(statearr_11448[(8)] = inst_11404);

return statearr_11448;
})();
var statearr_11449_13106 = state_11424__$1;
(statearr_11449_13106[(2)] = inst_11405);

(statearr_11449_13106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (14))){
var inst_11418 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11450_13107 = state_11424__$1;
(statearr_11450_13107[(2)] = inst_11418);

(statearr_11450_13107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (10))){
var state_11424__$1 = state_11424;
var statearr_11451_13108 = state_11424__$1;
(statearr_11451_13108[(2)] = fc);

(statearr_11451_13108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (8))){
var inst_11413 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
if(cljs.core.truth_(inst_11413)){
var statearr_11452_13109 = state_11424__$1;
(statearr_11452_13109[(1)] = (12));

} else {
var statearr_11453_13110 = state_11424__$1;
(statearr_11453_13110[(1)] = (13));

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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_11454 = [null,null,null,null,null,null,null,null,null];
(statearr_11454[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11454[(1)] = (1));

return statearr_11454;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11424){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11424);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11455){var ex__10932__auto__ = e11455;
var statearr_11456_13111 = state_11424;
(statearr_11456_13111[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11424[(4)]))){
var statearr_11457_13112 = state_11424;
(statearr_11457_13112[(1)] = cljs.core.first((state_11424[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13113 = state_11424;
state_11424 = G__13113;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11460 = f__10998__auto__();
(statearr_11460[(6)] = c__10997__auto___13096);

return statearr_11460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var c__10997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11482){
var state_val_11483 = (state_11482[(1)]);
if((state_val_11483 === (7))){
var inst_11478 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11484_13114 = state_11482__$1;
(statearr_11484_13114[(2)] = inst_11478);

(statearr_11484_13114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (1))){
var inst_11461 = init;
var inst_11462 = inst_11461;
var state_11482__$1 = (function (){var statearr_11485 = state_11482;
(statearr_11485[(7)] = inst_11462);

return statearr_11485;
})();
var statearr_11486_13115 = state_11482__$1;
(statearr_11486_13115[(2)] = null);

(statearr_11486_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (4))){
var inst_11465 = (state_11482[(8)]);
var inst_11465__$1 = (state_11482[(2)]);
var inst_11466 = (inst_11465__$1 == null);
var state_11482__$1 = (function (){var statearr_11487 = state_11482;
(statearr_11487[(8)] = inst_11465__$1);

return statearr_11487;
})();
if(cljs.core.truth_(inst_11466)){
var statearr_11495_13116 = state_11482__$1;
(statearr_11495_13116[(1)] = (5));

} else {
var statearr_11496_13117 = state_11482__$1;
(statearr_11496_13117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (6))){
var inst_11469 = (state_11482[(9)]);
var inst_11462 = (state_11482[(7)]);
var inst_11465 = (state_11482[(8)]);
var inst_11469__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11462,inst_11465) : f.call(null,inst_11462,inst_11465));
var inst_11470 = cljs.core.reduced_QMARK_(inst_11469__$1);
var state_11482__$1 = (function (){var statearr_11497 = state_11482;
(statearr_11497[(9)] = inst_11469__$1);

return statearr_11497;
})();
if(inst_11470){
var statearr_11498_13118 = state_11482__$1;
(statearr_11498_13118[(1)] = (8));

} else {
var statearr_11499_13119 = state_11482__$1;
(statearr_11499_13119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (3))){
var inst_11480 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11482__$1,inst_11480);
} else {
if((state_val_11483 === (2))){
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11482__$1,(4),ch);
} else {
if((state_val_11483 === (9))){
var inst_11469 = (state_11482[(9)]);
var inst_11462 = inst_11469;
var state_11482__$1 = (function (){var statearr_11500 = state_11482;
(statearr_11500[(7)] = inst_11462);

return statearr_11500;
})();
var statearr_11501_13120 = state_11482__$1;
(statearr_11501_13120[(2)] = null);

(statearr_11501_13120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (5))){
var inst_11462 = (state_11482[(7)]);
var state_11482__$1 = state_11482;
var statearr_11505_13121 = state_11482__$1;
(statearr_11505_13121[(2)] = inst_11462);

(statearr_11505_13121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (10))){
var inst_11476 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11506_13122 = state_11482__$1;
(statearr_11506_13122[(2)] = inst_11476);

(statearr_11506_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (8))){
var inst_11469 = (state_11482[(9)]);
var inst_11472 = cljs.core.deref(inst_11469);
var state_11482__$1 = state_11482;
var statearr_11507_13123 = state_11482__$1;
(statearr_11507_13123[(2)] = inst_11472);

(statearr_11507_13123[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10929__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10929__auto____0 = (function (){
var statearr_11508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11508[(0)] = cljs$core$async$reduce_$_state_machine__10929__auto__);

(statearr_11508[(1)] = (1));

return statearr_11508;
});
var cljs$core$async$reduce_$_state_machine__10929__auto____1 = (function (state_11482){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11482);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11509){var ex__10932__auto__ = e11509;
var statearr_11510_13124 = state_11482;
(statearr_11510_13124[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11482[(4)]))){
var statearr_11511_13125 = state_11482;
(statearr_11511_13125[(1)] = cljs.core.first((state_11482[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13126 = state_11482;
state_11482 = G__13126;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10929__auto__ = function(state_11482){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10929__auto____1.call(this,state_11482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10929__auto____0;
cljs$core$async$reduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10929__auto____1;
return cljs$core$async$reduce_$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11512 = f__10998__auto__();
(statearr_11512[(6)] = c__10997__auto__);

return statearr_11512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));

return c__10997__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11518){
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
var cljs$core$async$transduce_$_state_machine__10929__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10929__auto____0 = (function (){
var statearr_11520 = [null,null,null,null,null,null,null];
(statearr_11520[(0)] = cljs$core$async$transduce_$_state_machine__10929__auto__);

(statearr_11520[(1)] = (1));

return statearr_11520;
});
var cljs$core$async$transduce_$_state_machine__10929__auto____1 = (function (state_11518){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11518);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11521){var ex__10932__auto__ = e11521;
var statearr_11522_13127 = state_11518;
(statearr_11522_13127[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11518[(4)]))){
var statearr_11523_13128 = state_11518;
(statearr_11523_13128[(1)] = cljs.core.first((state_11518[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13129 = state_11518;
state_11518 = G__13129;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10929__auto__ = function(state_11518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10929__auto____1.call(this,state_11518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10929__auto____0;
cljs$core$async$transduce_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10929__auto____1;
return cljs$core$async$transduce_$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11524 = f__10998__auto__();
(statearr_11524[(6)] = c__10997__auto__);

return statearr_11524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));

return c__10997__auto__;
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
var G__11526 = arguments.length;
switch (G__11526) {
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
var c__10997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11555){
var state_val_11556 = (state_11555[(1)]);
if((state_val_11556 === (7))){
var inst_11537 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11557_13131 = state_11555__$1;
(statearr_11557_13131[(2)] = inst_11537);

(statearr_11557_13131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (1))){
var inst_11529 = cljs.core.seq(coll);
var inst_11530 = inst_11529;
var state_11555__$1 = (function (){var statearr_11558 = state_11555;
(statearr_11558[(7)] = inst_11530);

return statearr_11558;
})();
var statearr_11559_13132 = state_11555__$1;
(statearr_11559_13132[(2)] = null);

(statearr_11559_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (4))){
var inst_11530 = (state_11555[(7)]);
var inst_11535 = cljs.core.first(inst_11530);
var state_11555__$1 = state_11555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11555__$1,(7),ch,inst_11535);
} else {
if((state_val_11556 === (13))){
var inst_11549 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11560_13133 = state_11555__$1;
(statearr_11560_13133[(2)] = inst_11549);

(statearr_11560_13133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (6))){
var inst_11540 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
if(cljs.core.truth_(inst_11540)){
var statearr_11561_13134 = state_11555__$1;
(statearr_11561_13134[(1)] = (8));

} else {
var statearr_11562_13135 = state_11555__$1;
(statearr_11562_13135[(1)] = (9));

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
var statearr_11563_13136 = state_11555__$1;
(statearr_11563_13136[(2)] = null);

(statearr_11563_13136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (2))){
var inst_11530 = (state_11555[(7)]);
var state_11555__$1 = state_11555;
if(cljs.core.truth_(inst_11530)){
var statearr_11564_13137 = state_11555__$1;
(statearr_11564_13137[(1)] = (4));

} else {
var statearr_11565_13138 = state_11555__$1;
(statearr_11565_13138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (11))){
var inst_11546 = cljs.core.async.close_BANG_(ch);
var state_11555__$1 = state_11555;
var statearr_11566_13139 = state_11555__$1;
(statearr_11566_13139[(2)] = inst_11546);

(statearr_11566_13139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (9))){
var state_11555__$1 = state_11555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11567_13140 = state_11555__$1;
(statearr_11567_13140[(1)] = (11));

} else {
var statearr_11568_13141 = state_11555__$1;
(statearr_11568_13141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (5))){
var inst_11530 = (state_11555[(7)]);
var state_11555__$1 = state_11555;
var statearr_11569_13142 = state_11555__$1;
(statearr_11569_13142[(2)] = inst_11530);

(statearr_11569_13142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (10))){
var inst_11551 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11570_13143 = state_11555__$1;
(statearr_11570_13143[(2)] = inst_11551);

(statearr_11570_13143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (8))){
var inst_11530 = (state_11555[(7)]);
var inst_11542 = cljs.core.next(inst_11530);
var inst_11530__$1 = inst_11542;
var state_11555__$1 = (function (){var statearr_11571 = state_11555;
(statearr_11571[(7)] = inst_11530__$1);

return statearr_11571;
})();
var statearr_11572_13144 = state_11555__$1;
(statearr_11572_13144[(2)] = null);

(statearr_11572_13144[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_11573 = [null,null,null,null,null,null,null,null];
(statearr_11573[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_11573[(1)] = (1));

return statearr_11573;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_11555){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11555);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11574){var ex__10932__auto__ = e11574;
var statearr_11575_13145 = state_11555;
(statearr_11575_13145[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11555[(4)]))){
var statearr_11576_13146 = state_11555;
(statearr_11576_13146[(1)] = cljs.core.first((state_11555[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13147 = state_11555;
state_11555 = G__13147;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_11555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_11555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11577 = f__10998__auto__();
(statearr_11577[(6)] = c__10997__auto__);

return statearr_11577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));

return c__10997__auto__;
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
var c__10997__auto___13153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11718){
var state_val_11719 = (state_11718[(1)]);
if((state_val_11719 === (7))){
var inst_11714 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11720_13154 = state_11718__$1;
(statearr_11720_13154[(2)] = inst_11714);

(statearr_11720_13154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (20))){
var inst_11619 = (state_11718[(7)]);
var inst_11631 = cljs.core.first(inst_11619);
var inst_11632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11631,(0),null);
var inst_11633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11631,(1),null);
var state_11718__$1 = (function (){var statearr_11721 = state_11718;
(statearr_11721[(8)] = inst_11632);

return statearr_11721;
})();
if(cljs.core.truth_(inst_11633)){
var statearr_11722_13155 = state_11718__$1;
(statearr_11722_13155[(1)] = (22));

} else {
var statearr_11723_13156 = state_11718__$1;
(statearr_11723_13156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (27))){
var inst_11668 = (state_11718[(9)]);
var inst_11588 = (state_11718[(10)]);
var inst_11663 = (state_11718[(11)]);
var inst_11661 = (state_11718[(12)]);
var inst_11668__$1 = cljs.core._nth(inst_11661,inst_11663);
var inst_11669 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11668__$1,inst_11588,done);
var state_11718__$1 = (function (){var statearr_11725 = state_11718;
(statearr_11725[(9)] = inst_11668__$1);

return statearr_11725;
})();
if(cljs.core.truth_(inst_11669)){
var statearr_11726_13157 = state_11718__$1;
(statearr_11726_13157[(1)] = (30));

} else {
var statearr_11727_13158 = state_11718__$1;
(statearr_11727_13158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (1))){
var state_11718__$1 = state_11718;
var statearr_11728_13159 = state_11718__$1;
(statearr_11728_13159[(2)] = null);

(statearr_11728_13159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (24))){
var inst_11619 = (state_11718[(7)]);
var inst_11638 = (state_11718[(2)]);
var inst_11639 = cljs.core.next(inst_11619);
var inst_11597 = inst_11639;
var inst_11598 = null;
var inst_11599 = (0);
var inst_11600 = (0);
var state_11718__$1 = (function (){var statearr_11729 = state_11718;
(statearr_11729[(13)] = inst_11600);

(statearr_11729[(14)] = inst_11598);

(statearr_11729[(15)] = inst_11597);

(statearr_11729[(16)] = inst_11638);

(statearr_11729[(17)] = inst_11599);

return statearr_11729;
})();
var statearr_11730_13160 = state_11718__$1;
(statearr_11730_13160[(2)] = null);

(statearr_11730_13160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (39))){
var state_11718__$1 = state_11718;
var statearr_11734_13161 = state_11718__$1;
(statearr_11734_13161[(2)] = null);

(statearr_11734_13161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (4))){
var inst_11588 = (state_11718[(10)]);
var inst_11588__$1 = (state_11718[(2)]);
var inst_11589 = (inst_11588__$1 == null);
var state_11718__$1 = (function (){var statearr_11735 = state_11718;
(statearr_11735[(10)] = inst_11588__$1);

return statearr_11735;
})();
if(cljs.core.truth_(inst_11589)){
var statearr_11736_13162 = state_11718__$1;
(statearr_11736_13162[(1)] = (5));

} else {
var statearr_11737_13163 = state_11718__$1;
(statearr_11737_13163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (15))){
var inst_11600 = (state_11718[(13)]);
var inst_11598 = (state_11718[(14)]);
var inst_11597 = (state_11718[(15)]);
var inst_11599 = (state_11718[(17)]);
var inst_11615 = (state_11718[(2)]);
var inst_11616 = (inst_11600 + (1));
var tmp11731 = inst_11598;
var tmp11732 = inst_11597;
var tmp11733 = inst_11599;
var inst_11597__$1 = tmp11732;
var inst_11598__$1 = tmp11731;
var inst_11599__$1 = tmp11733;
var inst_11600__$1 = inst_11616;
var state_11718__$1 = (function (){var statearr_11738 = state_11718;
(statearr_11738[(13)] = inst_11600__$1);

(statearr_11738[(18)] = inst_11615);

(statearr_11738[(14)] = inst_11598__$1);

(statearr_11738[(15)] = inst_11597__$1);

(statearr_11738[(17)] = inst_11599__$1);

return statearr_11738;
})();
var statearr_11739_13164 = state_11718__$1;
(statearr_11739_13164[(2)] = null);

(statearr_11739_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (21))){
var inst_11642 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11743_13165 = state_11718__$1;
(statearr_11743_13165[(2)] = inst_11642);

(statearr_11743_13165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (31))){
var inst_11668 = (state_11718[(9)]);
var inst_11672 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11668);
var state_11718__$1 = state_11718;
var statearr_11744_13166 = state_11718__$1;
(statearr_11744_13166[(2)] = inst_11672);

(statearr_11744_13166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (32))){
var inst_11662 = (state_11718[(19)]);
var inst_11660 = (state_11718[(20)]);
var inst_11663 = (state_11718[(11)]);
var inst_11661 = (state_11718[(12)]);
var inst_11674 = (state_11718[(2)]);
var inst_11675 = (inst_11663 + (1));
var tmp11740 = inst_11662;
var tmp11741 = inst_11660;
var tmp11742 = inst_11661;
var inst_11660__$1 = tmp11741;
var inst_11661__$1 = tmp11742;
var inst_11662__$1 = tmp11740;
var inst_11663__$1 = inst_11675;
var state_11718__$1 = (function (){var statearr_11745 = state_11718;
(statearr_11745[(19)] = inst_11662__$1);

(statearr_11745[(20)] = inst_11660__$1);

(statearr_11745[(21)] = inst_11674);

(statearr_11745[(11)] = inst_11663__$1);

(statearr_11745[(12)] = inst_11661__$1);

return statearr_11745;
})();
var statearr_11746_13167 = state_11718__$1;
(statearr_11746_13167[(2)] = null);

(statearr_11746_13167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (40))){
var inst_11687 = (state_11718[(22)]);
var inst_11691 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11687);
var state_11718__$1 = state_11718;
var statearr_11747_13168 = state_11718__$1;
(statearr_11747_13168[(2)] = inst_11691);

(statearr_11747_13168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (33))){
var inst_11678 = (state_11718[(23)]);
var inst_11680 = cljs.core.chunked_seq_QMARK_(inst_11678);
var state_11718__$1 = state_11718;
if(inst_11680){
var statearr_11748_13169 = state_11718__$1;
(statearr_11748_13169[(1)] = (36));

} else {
var statearr_11749_13170 = state_11718__$1;
(statearr_11749_13170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (13))){
var inst_11609 = (state_11718[(24)]);
var inst_11612 = cljs.core.async.close_BANG_(inst_11609);
var state_11718__$1 = state_11718;
var statearr_11753_13171 = state_11718__$1;
(statearr_11753_13171[(2)] = inst_11612);

(statearr_11753_13171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (22))){
var inst_11632 = (state_11718[(8)]);
var inst_11635 = cljs.core.async.close_BANG_(inst_11632);
var state_11718__$1 = state_11718;
var statearr_11754_13172 = state_11718__$1;
(statearr_11754_13172[(2)] = inst_11635);

(statearr_11754_13172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (36))){
var inst_11678 = (state_11718[(23)]);
var inst_11682 = cljs.core.chunk_first(inst_11678);
var inst_11683 = cljs.core.chunk_rest(inst_11678);
var inst_11684 = cljs.core.count(inst_11682);
var inst_11660 = inst_11683;
var inst_11661 = inst_11682;
var inst_11662 = inst_11684;
var inst_11663 = (0);
var state_11718__$1 = (function (){var statearr_11755 = state_11718;
(statearr_11755[(19)] = inst_11662);

(statearr_11755[(20)] = inst_11660);

(statearr_11755[(11)] = inst_11663);

(statearr_11755[(12)] = inst_11661);

return statearr_11755;
})();
var statearr_11756_13173 = state_11718__$1;
(statearr_11756_13173[(2)] = null);

(statearr_11756_13173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (41))){
var inst_11678 = (state_11718[(23)]);
var inst_11693 = (state_11718[(2)]);
var inst_11694 = cljs.core.next(inst_11678);
var inst_11660 = inst_11694;
var inst_11661 = null;
var inst_11662 = (0);
var inst_11663 = (0);
var state_11718__$1 = (function (){var statearr_11757 = state_11718;
(statearr_11757[(19)] = inst_11662);

(statearr_11757[(20)] = inst_11660);

(statearr_11757[(25)] = inst_11693);

(statearr_11757[(11)] = inst_11663);

(statearr_11757[(12)] = inst_11661);

return statearr_11757;
})();
var statearr_11758_13174 = state_11718__$1;
(statearr_11758_13174[(2)] = null);

(statearr_11758_13174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (43))){
var state_11718__$1 = state_11718;
var statearr_11759_13175 = state_11718__$1;
(statearr_11759_13175[(2)] = null);

(statearr_11759_13175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (29))){
var inst_11702 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11760_13176 = state_11718__$1;
(statearr_11760_13176[(2)] = inst_11702);

(statearr_11760_13176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (44))){
var inst_11711 = (state_11718[(2)]);
var state_11718__$1 = (function (){var statearr_11761 = state_11718;
(statearr_11761[(26)] = inst_11711);

return statearr_11761;
})();
var statearr_11762_13177 = state_11718__$1;
(statearr_11762_13177[(2)] = null);

(statearr_11762_13177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (6))){
var inst_11652 = (state_11718[(27)]);
var inst_11651 = cljs.core.deref(cs);
var inst_11652__$1 = cljs.core.keys(inst_11651);
var inst_11653 = cljs.core.count(inst_11652__$1);
var inst_11654 = cljs.core.reset_BANG_(dctr,inst_11653);
var inst_11659 = cljs.core.seq(inst_11652__$1);
var inst_11660 = inst_11659;
var inst_11661 = null;
var inst_11662 = (0);
var inst_11663 = (0);
var state_11718__$1 = (function (){var statearr_11763 = state_11718;
(statearr_11763[(19)] = inst_11662);

(statearr_11763[(20)] = inst_11660);

(statearr_11763[(27)] = inst_11652__$1);

(statearr_11763[(28)] = inst_11654);

(statearr_11763[(11)] = inst_11663);

(statearr_11763[(12)] = inst_11661);

return statearr_11763;
})();
var statearr_11764_13178 = state_11718__$1;
(statearr_11764_13178[(2)] = null);

(statearr_11764_13178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (28))){
var inst_11660 = (state_11718[(20)]);
var inst_11678 = (state_11718[(23)]);
var inst_11678__$1 = cljs.core.seq(inst_11660);
var state_11718__$1 = (function (){var statearr_11765 = state_11718;
(statearr_11765[(23)] = inst_11678__$1);

return statearr_11765;
})();
if(inst_11678__$1){
var statearr_11766_13179 = state_11718__$1;
(statearr_11766_13179[(1)] = (33));

} else {
var statearr_11767_13180 = state_11718__$1;
(statearr_11767_13180[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (25))){
var inst_11662 = (state_11718[(19)]);
var inst_11663 = (state_11718[(11)]);
var inst_11665 = (inst_11663 < inst_11662);
var inst_11666 = inst_11665;
var state_11718__$1 = state_11718;
if(cljs.core.truth_(inst_11666)){
var statearr_11768_13181 = state_11718__$1;
(statearr_11768_13181[(1)] = (27));

} else {
var statearr_11769_13182 = state_11718__$1;
(statearr_11769_13182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (34))){
var state_11718__$1 = state_11718;
var statearr_11770_13183 = state_11718__$1;
(statearr_11770_13183[(2)] = null);

(statearr_11770_13183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (17))){
var state_11718__$1 = state_11718;
var statearr_11771_13184 = state_11718__$1;
(statearr_11771_13184[(2)] = null);

(statearr_11771_13184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (3))){
var inst_11716 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11718__$1,inst_11716);
} else {
if((state_val_11719 === (12))){
var inst_11647 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11772_13185 = state_11718__$1;
(statearr_11772_13185[(2)] = inst_11647);

(statearr_11772_13185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (2))){
var state_11718__$1 = state_11718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11718__$1,(4),ch);
} else {
if((state_val_11719 === (23))){
var state_11718__$1 = state_11718;
var statearr_11773_13186 = state_11718__$1;
(statearr_11773_13186[(2)] = null);

(statearr_11773_13186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (35))){
var inst_11700 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11774_13187 = state_11718__$1;
(statearr_11774_13187[(2)] = inst_11700);

(statearr_11774_13187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (19))){
var inst_11619 = (state_11718[(7)]);
var inst_11623 = cljs.core.chunk_first(inst_11619);
var inst_11624 = cljs.core.chunk_rest(inst_11619);
var inst_11625 = cljs.core.count(inst_11623);
var inst_11597 = inst_11624;
var inst_11598 = inst_11623;
var inst_11599 = inst_11625;
var inst_11600 = (0);
var state_11718__$1 = (function (){var statearr_11775 = state_11718;
(statearr_11775[(13)] = inst_11600);

(statearr_11775[(14)] = inst_11598);

(statearr_11775[(15)] = inst_11597);

(statearr_11775[(17)] = inst_11599);

return statearr_11775;
})();
var statearr_11776_13188 = state_11718__$1;
(statearr_11776_13188[(2)] = null);

(statearr_11776_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (11))){
var inst_11619 = (state_11718[(7)]);
var inst_11597 = (state_11718[(15)]);
var inst_11619__$1 = cljs.core.seq(inst_11597);
var state_11718__$1 = (function (){var statearr_11777 = state_11718;
(statearr_11777[(7)] = inst_11619__$1);

return statearr_11777;
})();
if(inst_11619__$1){
var statearr_11778_13189 = state_11718__$1;
(statearr_11778_13189[(1)] = (16));

} else {
var statearr_11779_13190 = state_11718__$1;
(statearr_11779_13190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (9))){
var inst_11649 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11780_13191 = state_11718__$1;
(statearr_11780_13191[(2)] = inst_11649);

(statearr_11780_13191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (5))){
var inst_11595 = cljs.core.deref(cs);
var inst_11596 = cljs.core.seq(inst_11595);
var inst_11597 = inst_11596;
var inst_11598 = null;
var inst_11599 = (0);
var inst_11600 = (0);
var state_11718__$1 = (function (){var statearr_11781 = state_11718;
(statearr_11781[(13)] = inst_11600);

(statearr_11781[(14)] = inst_11598);

(statearr_11781[(15)] = inst_11597);

(statearr_11781[(17)] = inst_11599);

return statearr_11781;
})();
var statearr_11782_13192 = state_11718__$1;
(statearr_11782_13192[(2)] = null);

(statearr_11782_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (14))){
var state_11718__$1 = state_11718;
var statearr_11783_13194 = state_11718__$1;
(statearr_11783_13194[(2)] = null);

(statearr_11783_13194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (45))){
var inst_11708 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11784_13195 = state_11718__$1;
(statearr_11784_13195[(2)] = inst_11708);

(statearr_11784_13195[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (26))){
var inst_11652 = (state_11718[(27)]);
var inst_11704 = (state_11718[(2)]);
var inst_11705 = cljs.core.seq(inst_11652);
var state_11718__$1 = (function (){var statearr_11785 = state_11718;
(statearr_11785[(29)] = inst_11704);

return statearr_11785;
})();
if(inst_11705){
var statearr_11786_13196 = state_11718__$1;
(statearr_11786_13196[(1)] = (42));

} else {
var statearr_11787_13197 = state_11718__$1;
(statearr_11787_13197[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (16))){
var inst_11619 = (state_11718[(7)]);
var inst_11621 = cljs.core.chunked_seq_QMARK_(inst_11619);
var state_11718__$1 = state_11718;
if(inst_11621){
var statearr_11788_13198 = state_11718__$1;
(statearr_11788_13198[(1)] = (19));

} else {
var statearr_11789_13199 = state_11718__$1;
(statearr_11789_13199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (38))){
var inst_11697 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11791_13200 = state_11718__$1;
(statearr_11791_13200[(2)] = inst_11697);

(statearr_11791_13200[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (30))){
var state_11718__$1 = state_11718;
var statearr_11792_13201 = state_11718__$1;
(statearr_11792_13201[(2)] = null);

(statearr_11792_13201[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (10))){
var inst_11600 = (state_11718[(13)]);
var inst_11598 = (state_11718[(14)]);
var inst_11608 = cljs.core._nth(inst_11598,inst_11600);
var inst_11609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11608,(0),null);
var inst_11610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11608,(1),null);
var state_11718__$1 = (function (){var statearr_11793 = state_11718;
(statearr_11793[(24)] = inst_11609);

return statearr_11793;
})();
if(cljs.core.truth_(inst_11610)){
var statearr_11794_13202 = state_11718__$1;
(statearr_11794_13202[(1)] = (13));

} else {
var statearr_11795_13203 = state_11718__$1;
(statearr_11795_13203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (18))){
var inst_11645 = (state_11718[(2)]);
var state_11718__$1 = state_11718;
var statearr_11796_13204 = state_11718__$1;
(statearr_11796_13204[(2)] = inst_11645);

(statearr_11796_13204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (42))){
var state_11718__$1 = state_11718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11718__$1,(45),dchan);
} else {
if((state_val_11719 === (37))){
var inst_11687 = (state_11718[(22)]);
var inst_11678 = (state_11718[(23)]);
var inst_11588 = (state_11718[(10)]);
var inst_11687__$1 = cljs.core.first(inst_11678);
var inst_11688 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11687__$1,inst_11588,done);
var state_11718__$1 = (function (){var statearr_11797 = state_11718;
(statearr_11797[(22)] = inst_11687__$1);

return statearr_11797;
})();
if(cljs.core.truth_(inst_11688)){
var statearr_11798_13205 = state_11718__$1;
(statearr_11798_13205[(1)] = (39));

} else {
var statearr_11799_13206 = state_11718__$1;
(statearr_11799_13206[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11719 === (8))){
var inst_11600 = (state_11718[(13)]);
var inst_11599 = (state_11718[(17)]);
var inst_11602 = (inst_11600 < inst_11599);
var inst_11603 = inst_11602;
var state_11718__$1 = state_11718;
if(cljs.core.truth_(inst_11603)){
var statearr_11800_13207 = state_11718__$1;
(statearr_11800_13207[(1)] = (10));

} else {
var statearr_11801_13208 = state_11718__$1;
(statearr_11801_13208[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10929__auto__ = null;
var cljs$core$async$mult_$_state_machine__10929__auto____0 = (function (){
var statearr_11802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11802[(0)] = cljs$core$async$mult_$_state_machine__10929__auto__);

(statearr_11802[(1)] = (1));

return statearr_11802;
});
var cljs$core$async$mult_$_state_machine__10929__auto____1 = (function (state_11718){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11718);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e11803){var ex__10932__auto__ = e11803;
var statearr_11804_13209 = state_11718;
(statearr_11804_13209[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11718[(4)]))){
var statearr_11805_13210 = state_11718;
(statearr_11805_13210[(1)] = cljs.core.first((state_11718[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13211 = state_11718;
state_11718 = G__13211;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10929__auto__ = function(state_11718){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10929__auto____1.call(this,state_11718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10929__auto____0;
cljs$core$async$mult_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10929__auto____1;
return cljs$core$async$mult_$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_11806 = f__10998__auto__();
(statearr_11806[(6)] = c__10997__auto___13153);

return statearr_11806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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

var cljs$core$async$Mix$admix_STAR_$dyn_13213 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13213(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13214 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_13214(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13215 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13215(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13216 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_13216(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13218 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13218(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13219 = arguments.length;
var i__4737__auto___13220 = (0);
while(true){
if((i__4737__auto___13220 < len__4736__auto___13219)){
args__4742__auto__.push((arguments[i__4737__auto___13220]));

var G__13221 = (i__4737__auto___13220 + (1));
i__4737__auto___13220 = G__13221;
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
var statearr_11816_13222 = state;
(statearr_11816_13222[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11817_13223 = state;
(statearr_11817_13223[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11818_13224 = state;
(statearr_11818_13224[(2)] = cljs.core.deref(cb));


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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11831 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11832){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11832 = meta11832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11833,meta11832__$1){
var self__ = this;
var _11833__$1 = this;
return (new cljs.core.async.t_cljs$core$async11831(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11832__$1));
}));

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11833){
var self__ = this;
var _11833__$1 = this;
return self__.meta11832;
}));

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11831.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11832","meta11832",1577627447,null)], null);
}));

(cljs.core.async.t_cljs$core$async11831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11831");

(cljs.core.async.t_cljs$core$async11831.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11831.
 */
cljs.core.async.__GT_t_cljs$core$async11831 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11831(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11832){
return (new cljs.core.async.t_cljs$core$async11831(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11832));
});

}

return (new cljs.core.async.t_cljs$core$async11831(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10997__auto___13247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_11940){
var state_val_11941 = (state_11940[(1)]);
if((state_val_11941 === (7))){
var inst_11852 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
var statearr_11942_13248 = state_11940__$1;
(statearr_11942_13248[(2)] = inst_11852);

(statearr_11942_13248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (20))){
var inst_11864 = (state_11940[(7)]);
var state_11940__$1 = state_11940;
var statearr_11943_13249 = state_11940__$1;
(statearr_11943_13249[(2)] = inst_11864);

(statearr_11943_13249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (27))){
var state_11940__$1 = state_11940;
var statearr_11944_13250 = state_11940__$1;
(statearr_11944_13250[(2)] = null);

(statearr_11944_13250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (1))){
var inst_11839 = (state_11940[(8)]);
var inst_11839__$1 = calc_state();
var inst_11841 = (inst_11839__$1 == null);
var inst_11842 = cljs.core.not(inst_11841);
var state_11940__$1 = (function (){var statearr_11945 = state_11940;
(statearr_11945[(8)] = inst_11839__$1);

return statearr_11945;
})();
if(inst_11842){
var statearr_11946_13251 = state_11940__$1;
(statearr_11946_13251[(1)] = (2));

} else {
var statearr_11947_13252 = state_11940__$1;
(statearr_11947_13252[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (24))){
var inst_11888 = (state_11940[(9)]);
var inst_11897 = (state_11940[(10)]);
var inst_11913 = (state_11940[(11)]);
var inst_11913__$1 = (inst_11888.cljs$core$IFn$_invoke$arity$1 ? inst_11888.cljs$core$IFn$_invoke$arity$1(inst_11897) : inst_11888.call(null,inst_11897));
var state_11940__$1 = (function (){var statearr_11948 = state_11940;
(statearr_11948[(11)] = inst_11913__$1);

return statearr_11948;
})();
if(cljs.core.truth_(inst_11913__$1)){
var statearr_11949_13253 = state_11940__$1;
(statearr_11949_13253[(1)] = (29));

} else {
var statearr_11950_13254 = state_11940__$1;
(statearr_11950_13254[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (4))){
var inst_11855 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
if(cljs.core.truth_(inst_11855)){
var statearr_11951_13255 = state_11940__$1;
(statearr_11951_13255[(1)] = (8));

} else {
var statearr_11952_13256 = state_11940__$1;
(statearr_11952_13256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (15))){
var inst_11882 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
if(cljs.core.truth_(inst_11882)){
var statearr_11953_13257 = state_11940__$1;
(statearr_11953_13257[(1)] = (19));

} else {
var statearr_11954_13262 = state_11940__$1;
(statearr_11954_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (21))){
var inst_11887 = (state_11940[(12)]);
var inst_11887__$1 = (state_11940[(2)]);
var inst_11888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11887__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11887__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11887__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11940__$1 = (function (){var statearr_11955 = state_11940;
(statearr_11955[(9)] = inst_11888);

(statearr_11955[(12)] = inst_11887__$1);

(statearr_11955[(13)] = inst_11889);

return statearr_11955;
})();
return cljs.core.async.ioc_alts_BANG_(state_11940__$1,(22),inst_11890);
} else {
if((state_val_11941 === (31))){
var inst_11922 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
if(cljs.core.truth_(inst_11922)){
var statearr_11956_13263 = state_11940__$1;
(statearr_11956_13263[(1)] = (32));

} else {
var statearr_11957_13264 = state_11940__$1;
(statearr_11957_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (32))){
var inst_11896 = (state_11940[(14)]);
var state_11940__$1 = state_11940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11940__$1,(35),out,inst_11896);
} else {
if((state_val_11941 === (33))){
var inst_11887 = (state_11940[(12)]);
var inst_11864 = inst_11887;
var state_11940__$1 = (function (){var statearr_11958 = state_11940;
(statearr_11958[(7)] = inst_11864);

return statearr_11958;
})();
var statearr_11959_13265 = state_11940__$1;
(statearr_11959_13265[(2)] = null);

(statearr_11959_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (13))){
var inst_11864 = (state_11940[(7)]);
var inst_11871 = inst_11864.cljs$lang$protocol_mask$partition0$;
var inst_11872 = (inst_11871 & (64));
var inst_11873 = inst_11864.cljs$core$ISeq$;
var inst_11874 = (cljs.core.PROTOCOL_SENTINEL === inst_11873);
var inst_11875 = ((inst_11872) || (inst_11874));
var state_11940__$1 = state_11940;
if(cljs.core.truth_(inst_11875)){
var statearr_11968_13266 = state_11940__$1;
(statearr_11968_13266[(1)] = (16));

} else {
var statearr_11969_13267 = state_11940__$1;
(statearr_11969_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (22))){
var inst_11896 = (state_11940[(14)]);
var inst_11897 = (state_11940[(10)]);
var inst_11895 = (state_11940[(2)]);
var inst_11896__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11895,(0),null);
var inst_11897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11895,(1),null);
var inst_11898 = (inst_11896__$1 == null);
var inst_11899 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11897__$1,change);
var inst_11900 = ((inst_11898) || (inst_11899));
var state_11940__$1 = (function (){var statearr_11970 = state_11940;
(statearr_11970[(14)] = inst_11896__$1);

(statearr_11970[(10)] = inst_11897__$1);

return statearr_11970;
})();
if(cljs.core.truth_(inst_11900)){
var statearr_11971_13268 = state_11940__$1;
(statearr_11971_13268[(1)] = (23));

} else {
var statearr_11972_13269 = state_11940__$1;
(statearr_11972_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (36))){
var inst_11887 = (state_11940[(12)]);
var inst_11864 = inst_11887;
var state_11940__$1 = (function (){var statearr_11973 = state_11940;
(statearr_11973[(7)] = inst_11864);

return statearr_11973;
})();
var statearr_11974_13270 = state_11940__$1;
(statearr_11974_13270[(2)] = null);

(statearr_11974_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (29))){
var inst_11913 = (state_11940[(11)]);
var state_11940__$1 = state_11940;
var statearr_11978_13271 = state_11940__$1;
(statearr_11978_13271[(2)] = inst_11913);

(statearr_11978_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (6))){
var state_11940__$1 = state_11940;
var statearr_11981_13272 = state_11940__$1;
(statearr_11981_13272[(2)] = false);

(statearr_11981_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (28))){
var inst_11907 = (state_11940[(2)]);
var inst_11908 = calc_state();
var inst_11864 = inst_11908;
var state_11940__$1 = (function (){var statearr_11985 = state_11940;
(statearr_11985[(7)] = inst_11864);

(statearr_11985[(15)] = inst_11907);

return statearr_11985;
})();
var statearr_11986_13273 = state_11940__$1;
(statearr_11986_13273[(2)] = null);

(statearr_11986_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (25))){
var inst_11936 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
var statearr_11987_13274 = state_11940__$1;
(statearr_11987_13274[(2)] = inst_11936);

(statearr_11987_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (34))){
var inst_11934 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
var statearr_11988_13275 = state_11940__$1;
(statearr_11988_13275[(2)] = inst_11934);

(statearr_11988_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (17))){
var state_11940__$1 = state_11940;
var statearr_11989_13276 = state_11940__$1;
(statearr_11989_13276[(2)] = false);

(statearr_11989_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (3))){
var state_11940__$1 = state_11940;
var statearr_11990_13277 = state_11940__$1;
(statearr_11990_13277[(2)] = false);

(statearr_11990_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (12))){
var inst_11938 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11940__$1,inst_11938);
} else {
if((state_val_11941 === (2))){
var inst_11839 = (state_11940[(8)]);
var inst_11844 = inst_11839.cljs$lang$protocol_mask$partition0$;
var inst_11845 = (inst_11844 & (64));
var inst_11846 = inst_11839.cljs$core$ISeq$;
var inst_11847 = (cljs.core.PROTOCOL_SENTINEL === inst_11846);
var inst_11848 = ((inst_11845) || (inst_11847));
var state_11940__$1 = state_11940;
if(cljs.core.truth_(inst_11848)){
var statearr_11991_13278 = state_11940__$1;
(statearr_11991_13278[(1)] = (5));

} else {
var statearr_11992_13279 = state_11940__$1;
(statearr_11992_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (23))){
var inst_11896 = (state_11940[(14)]);
var inst_11902 = (inst_11896 == null);
var state_11940__$1 = state_11940;
if(cljs.core.truth_(inst_11902)){
var statearr_11993_13280 = state_11940__$1;
(statearr_11993_13280[(1)] = (26));

} else {
var statearr_11994_13281 = state_11940__$1;
(statearr_11994_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (35))){
var inst_11925 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
if(cljs.core.truth_(inst_11925)){
var statearr_11995_13282 = state_11940__$1;
(statearr_11995_13282[(1)] = (36));

} else {
var statearr_11996_13283 = state_11940__$1;
(statearr_11996_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (19))){
var inst_11864 = (state_11940[(7)]);
var inst_11884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11864);
var state_11940__$1 = state_11940;
var statearr_11997_13284 = state_11940__$1;
(statearr_11997_13284[(2)] = inst_11884);

(statearr_11997_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (11))){
var inst_11864 = (state_11940[(7)]);
var inst_11868 = (inst_11864 == null);
var inst_11869 = cljs.core.not(inst_11868);
var state_11940__$1 = state_11940;
if(inst_11869){
var statearr_11998_13285 = state_11940__$1;
(statearr_11998_13285[(1)] = (13));

} else {
var statearr_11999_13286 = state_11940__$1;
(statearr_11999_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (9))){
var inst_11839 = (state_11940[(8)]);
var state_11940__$1 = state_11940;
var statearr_12000_13287 = state_11940__$1;
(statearr_12000_13287[(2)] = inst_11839);

(statearr_12000_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (5))){
var state_11940__$1 = state_11940;
var statearr_12001_13288 = state_11940__$1;
(statearr_12001_13288[(2)] = true);

(statearr_12001_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (14))){
var state_11940__$1 = state_11940;
var statearr_12002_13289 = state_11940__$1;
(statearr_12002_13289[(2)] = false);

(statearr_12002_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (26))){
var inst_11897 = (state_11940[(10)]);
var inst_11904 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11897);
var state_11940__$1 = state_11940;
var statearr_12003_13290 = state_11940__$1;
(statearr_12003_13290[(2)] = inst_11904);

(statearr_12003_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (16))){
var state_11940__$1 = state_11940;
var statearr_12004_13291 = state_11940__$1;
(statearr_12004_13291[(2)] = true);

(statearr_12004_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (38))){
var inst_11930 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
var statearr_12005_13292 = state_11940__$1;
(statearr_12005_13292[(2)] = inst_11930);

(statearr_12005_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (30))){
var inst_11888 = (state_11940[(9)]);
var inst_11889 = (state_11940[(13)]);
var inst_11897 = (state_11940[(10)]);
var inst_11917 = cljs.core.empty_QMARK_(inst_11888);
var inst_11918 = (inst_11889.cljs$core$IFn$_invoke$arity$1 ? inst_11889.cljs$core$IFn$_invoke$arity$1(inst_11897) : inst_11889.call(null,inst_11897));
var inst_11919 = cljs.core.not(inst_11918);
var inst_11920 = ((inst_11917) && (inst_11919));
var state_11940__$1 = state_11940;
var statearr_12008_13293 = state_11940__$1;
(statearr_12008_13293[(2)] = inst_11920);

(statearr_12008_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (10))){
var inst_11839 = (state_11940[(8)]);
var inst_11860 = (state_11940[(2)]);
var inst_11861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11860,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11860,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11860,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11864 = inst_11839;
var state_11940__$1 = (function (){var statearr_12010 = state_11940;
(statearr_12010[(7)] = inst_11864);

(statearr_12010[(16)] = inst_11861);

(statearr_12010[(17)] = inst_11862);

(statearr_12010[(18)] = inst_11863);

return statearr_12010;
})();
var statearr_12012_13294 = state_11940__$1;
(statearr_12012_13294[(2)] = null);

(statearr_12012_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (18))){
var inst_11879 = (state_11940[(2)]);
var state_11940__$1 = state_11940;
var statearr_12013_13295 = state_11940__$1;
(statearr_12013_13295[(2)] = inst_11879);

(statearr_12013_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (37))){
var state_11940__$1 = state_11940;
var statearr_12017_13296 = state_11940__$1;
(statearr_12017_13296[(2)] = null);

(statearr_12017_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11941 === (8))){
var inst_11839 = (state_11940[(8)]);
var inst_11857 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11839);
var state_11940__$1 = state_11940;
var statearr_12018_13297 = state_11940__$1;
(statearr_12018_13297[(2)] = inst_11857);

(statearr_12018_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10929__auto__ = null;
var cljs$core$async$mix_$_state_machine__10929__auto____0 = (function (){
var statearr_12023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12023[(0)] = cljs$core$async$mix_$_state_machine__10929__auto__);

(statearr_12023[(1)] = (1));

return statearr_12023;
});
var cljs$core$async$mix_$_state_machine__10929__auto____1 = (function (state_11940){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_11940);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12025){var ex__10932__auto__ = e12025;
var statearr_12026_13298 = state_11940;
(statearr_12026_13298[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_11940[(4)]))){
var statearr_12027_13299 = state_11940;
(statearr_12027_13299[(1)] = cljs.core.first((state_11940[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_11940;
state_11940 = G__13300;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10929__auto__ = function(state_11940){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10929__auto____1.call(this,state_11940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10929__auto____0;
cljs$core$async$mix_$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10929__auto____1;
return cljs$core$async$mix_$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12030 = f__10998__auto__();
(statearr_12030[(6)] = c__10997__auto___13247);

return statearr_12030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var G__12034 = arguments.length;
switch (G__12034) {
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
var G__12037 = arguments.length;
switch (G__12037) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12035_SHARP_){
if(cljs.core.truth_((p1__12035_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12035_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12035_SHARP_.call(null,topic)))){
return p1__12035_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12035_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12038 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12039){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12039 = meta12039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12040,meta12039__$1){
var self__ = this;
var _12040__$1 = this;
return (new cljs.core.async.t_cljs$core$async12038(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12039__$1));
}));

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12040){
var self__ = this;
var _12040__$1 = this;
return self__.meta12039;
}));

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12039","meta12039",708754049,null)], null);
}));

(cljs.core.async.t_cljs$core$async12038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12038");

(cljs.core.async.t_cljs$core$async12038.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12038.
 */
cljs.core.async.__GT_t_cljs$core$async12038 = (function cljs$core$async$__GT_t_cljs$core$async12038(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12039){
return (new cljs.core.async.t_cljs$core$async12038(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12039));
});

}

return (new cljs.core.async.t_cljs$core$async12038(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10997__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12114){
var state_val_12115 = (state_12114[(1)]);
if((state_val_12115 === (7))){
var inst_12110 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
var statearr_12116_13308 = state_12114__$1;
(statearr_12116_13308[(2)] = inst_12110);

(statearr_12116_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (20))){
var state_12114__$1 = state_12114;
var statearr_12117_13309 = state_12114__$1;
(statearr_12117_13309[(2)] = null);

(statearr_12117_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (1))){
var state_12114__$1 = state_12114;
var statearr_12118_13310 = state_12114__$1;
(statearr_12118_13310[(2)] = null);

(statearr_12118_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (24))){
var inst_12093 = (state_12114[(7)]);
var inst_12102 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12093);
var state_12114__$1 = state_12114;
var statearr_12119_13311 = state_12114__$1;
(statearr_12119_13311[(2)] = inst_12102);

(statearr_12119_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (4))){
var inst_12045 = (state_12114[(8)]);
var inst_12045__$1 = (state_12114[(2)]);
var inst_12046 = (inst_12045__$1 == null);
var state_12114__$1 = (function (){var statearr_12120 = state_12114;
(statearr_12120[(8)] = inst_12045__$1);

return statearr_12120;
})();
if(cljs.core.truth_(inst_12046)){
var statearr_12121_13312 = state_12114__$1;
(statearr_12121_13312[(1)] = (5));

} else {
var statearr_12122_13313 = state_12114__$1;
(statearr_12122_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (15))){
var inst_12087 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
var statearr_12123_13314 = state_12114__$1;
(statearr_12123_13314[(2)] = inst_12087);

(statearr_12123_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (21))){
var inst_12107 = (state_12114[(2)]);
var state_12114__$1 = (function (){var statearr_12124 = state_12114;
(statearr_12124[(9)] = inst_12107);

return statearr_12124;
})();
var statearr_12125_13315 = state_12114__$1;
(statearr_12125_13315[(2)] = null);

(statearr_12125_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (13))){
var inst_12069 = (state_12114[(10)]);
var inst_12071 = cljs.core.chunked_seq_QMARK_(inst_12069);
var state_12114__$1 = state_12114;
if(inst_12071){
var statearr_12126_13316 = state_12114__$1;
(statearr_12126_13316[(1)] = (16));

} else {
var statearr_12127_13317 = state_12114__$1;
(statearr_12127_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (22))){
var inst_12099 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
if(cljs.core.truth_(inst_12099)){
var statearr_12128_13318 = state_12114__$1;
(statearr_12128_13318[(1)] = (23));

} else {
var statearr_12130_13319 = state_12114__$1;
(statearr_12130_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (6))){
var inst_12095 = (state_12114[(11)]);
var inst_12093 = (state_12114[(7)]);
var inst_12045 = (state_12114[(8)]);
var inst_12093__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12045) : topic_fn.call(null,inst_12045));
var inst_12094 = cljs.core.deref(mults);
var inst_12095__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12094,inst_12093__$1);
var state_12114__$1 = (function (){var statearr_12136 = state_12114;
(statearr_12136[(11)] = inst_12095__$1);

(statearr_12136[(7)] = inst_12093__$1);

return statearr_12136;
})();
if(cljs.core.truth_(inst_12095__$1)){
var statearr_12137_13320 = state_12114__$1;
(statearr_12137_13320[(1)] = (19));

} else {
var statearr_12138_13321 = state_12114__$1;
(statearr_12138_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (25))){
var inst_12104 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
var statearr_12139_13322 = state_12114__$1;
(statearr_12139_13322[(2)] = inst_12104);

(statearr_12139_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (17))){
var inst_12069 = (state_12114[(10)]);
var inst_12078 = cljs.core.first(inst_12069);
var inst_12079 = cljs.core.async.muxch_STAR_(inst_12078);
var inst_12080 = cljs.core.async.close_BANG_(inst_12079);
var inst_12081 = cljs.core.next(inst_12069);
var inst_12055 = inst_12081;
var inst_12056 = null;
var inst_12057 = (0);
var inst_12058 = (0);
var state_12114__$1 = (function (){var statearr_12140 = state_12114;
(statearr_12140[(12)] = inst_12057);

(statearr_12140[(13)] = inst_12056);

(statearr_12140[(14)] = inst_12058);

(statearr_12140[(15)] = inst_12055);

(statearr_12140[(16)] = inst_12080);

return statearr_12140;
})();
var statearr_12141_13323 = state_12114__$1;
(statearr_12141_13323[(2)] = null);

(statearr_12141_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (3))){
var inst_12112 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12114__$1,inst_12112);
} else {
if((state_val_12115 === (12))){
var inst_12089 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
var statearr_12144_13324 = state_12114__$1;
(statearr_12144_13324[(2)] = inst_12089);

(statearr_12144_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (2))){
var state_12114__$1 = state_12114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12114__$1,(4),ch);
} else {
if((state_val_12115 === (23))){
var state_12114__$1 = state_12114;
var statearr_12145_13325 = state_12114__$1;
(statearr_12145_13325[(2)] = null);

(statearr_12145_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (19))){
var inst_12095 = (state_12114[(11)]);
var inst_12045 = (state_12114[(8)]);
var inst_12097 = cljs.core.async.muxch_STAR_(inst_12095);
var state_12114__$1 = state_12114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12114__$1,(22),inst_12097,inst_12045);
} else {
if((state_val_12115 === (11))){
var inst_12055 = (state_12114[(15)]);
var inst_12069 = (state_12114[(10)]);
var inst_12069__$1 = cljs.core.seq(inst_12055);
var state_12114__$1 = (function (){var statearr_12159 = state_12114;
(statearr_12159[(10)] = inst_12069__$1);

return statearr_12159;
})();
if(inst_12069__$1){
var statearr_12160_13326 = state_12114__$1;
(statearr_12160_13326[(1)] = (13));

} else {
var statearr_12161_13327 = state_12114__$1;
(statearr_12161_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (9))){
var inst_12091 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
var statearr_12162_13328 = state_12114__$1;
(statearr_12162_13328[(2)] = inst_12091);

(statearr_12162_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (5))){
var inst_12052 = cljs.core.deref(mults);
var inst_12053 = cljs.core.vals(inst_12052);
var inst_12054 = cljs.core.seq(inst_12053);
var inst_12055 = inst_12054;
var inst_12056 = null;
var inst_12057 = (0);
var inst_12058 = (0);
var state_12114__$1 = (function (){var statearr_12163 = state_12114;
(statearr_12163[(12)] = inst_12057);

(statearr_12163[(13)] = inst_12056);

(statearr_12163[(14)] = inst_12058);

(statearr_12163[(15)] = inst_12055);

return statearr_12163;
})();
var statearr_12164_13329 = state_12114__$1;
(statearr_12164_13329[(2)] = null);

(statearr_12164_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (14))){
var state_12114__$1 = state_12114;
var statearr_12168_13330 = state_12114__$1;
(statearr_12168_13330[(2)] = null);

(statearr_12168_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (16))){
var inst_12069 = (state_12114[(10)]);
var inst_12073 = cljs.core.chunk_first(inst_12069);
var inst_12074 = cljs.core.chunk_rest(inst_12069);
var inst_12075 = cljs.core.count(inst_12073);
var inst_12055 = inst_12074;
var inst_12056 = inst_12073;
var inst_12057 = inst_12075;
var inst_12058 = (0);
var state_12114__$1 = (function (){var statearr_12171 = state_12114;
(statearr_12171[(12)] = inst_12057);

(statearr_12171[(13)] = inst_12056);

(statearr_12171[(14)] = inst_12058);

(statearr_12171[(15)] = inst_12055);

return statearr_12171;
})();
var statearr_12172_13331 = state_12114__$1;
(statearr_12172_13331[(2)] = null);

(statearr_12172_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (10))){
var inst_12057 = (state_12114[(12)]);
var inst_12056 = (state_12114[(13)]);
var inst_12058 = (state_12114[(14)]);
var inst_12055 = (state_12114[(15)]);
var inst_12063 = cljs.core._nth(inst_12056,inst_12058);
var inst_12064 = cljs.core.async.muxch_STAR_(inst_12063);
var inst_12065 = cljs.core.async.close_BANG_(inst_12064);
var inst_12066 = (inst_12058 + (1));
var tmp12165 = inst_12057;
var tmp12166 = inst_12056;
var tmp12167 = inst_12055;
var inst_12055__$1 = tmp12167;
var inst_12056__$1 = tmp12166;
var inst_12057__$1 = tmp12165;
var inst_12058__$1 = inst_12066;
var state_12114__$1 = (function (){var statearr_12177 = state_12114;
(statearr_12177[(17)] = inst_12065);

(statearr_12177[(12)] = inst_12057__$1);

(statearr_12177[(13)] = inst_12056__$1);

(statearr_12177[(14)] = inst_12058__$1);

(statearr_12177[(15)] = inst_12055__$1);

return statearr_12177;
})();
var statearr_12179_13332 = state_12114__$1;
(statearr_12179_13332[(2)] = null);

(statearr_12179_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (18))){
var inst_12084 = (state_12114[(2)]);
var state_12114__$1 = state_12114;
var statearr_12182_13333 = state_12114__$1;
(statearr_12182_13333[(2)] = inst_12084);

(statearr_12182_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12115 === (8))){
var inst_12057 = (state_12114[(12)]);
var inst_12058 = (state_12114[(14)]);
var inst_12060 = (inst_12058 < inst_12057);
var inst_12061 = inst_12060;
var state_12114__$1 = state_12114;
if(cljs.core.truth_(inst_12061)){
var statearr_12184_13334 = state_12114__$1;
(statearr_12184_13334[(1)] = (10));

} else {
var statearr_12185_13335 = state_12114__$1;
(statearr_12185_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12199[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12199[(1)] = (1));

return statearr_12199;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12114){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12114);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12200){var ex__10932__auto__ = e12200;
var statearr_12201_13336 = state_12114;
(statearr_12201_13336[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12114[(4)]))){
var statearr_12202_13337 = state_12114;
(statearr_12202_13337[(1)] = cljs.core.first((state_12114[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12114;
state_12114 = G__13338;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12203 = f__10998__auto__();
(statearr_12203[(6)] = c__10997__auto___13307);

return statearr_12203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var G__12205 = arguments.length;
switch (G__12205) {
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
var G__12208 = arguments.length;
switch (G__12208) {
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
var G__12224 = arguments.length;
switch (G__12224) {
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
var c__10997__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12274){
var state_val_12275 = (state_12274[(1)]);
if((state_val_12275 === (7))){
var state_12274__$1 = state_12274;
var statearr_12276_13343 = state_12274__$1;
(statearr_12276_13343[(2)] = null);

(statearr_12276_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (1))){
var state_12274__$1 = state_12274;
var statearr_12277_13344 = state_12274__$1;
(statearr_12277_13344[(2)] = null);

(statearr_12277_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (4))){
var inst_12227 = (state_12274[(7)]);
var inst_12228 = (state_12274[(8)]);
var inst_12230 = (inst_12228 < inst_12227);
var state_12274__$1 = state_12274;
if(cljs.core.truth_(inst_12230)){
var statearr_12278_13345 = state_12274__$1;
(statearr_12278_13345[(1)] = (6));

} else {
var statearr_12279_13346 = state_12274__$1;
(statearr_12279_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (15))){
var inst_12260 = (state_12274[(9)]);
var inst_12265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12260);
var state_12274__$1 = state_12274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12274__$1,(17),out,inst_12265);
} else {
if((state_val_12275 === (13))){
var inst_12260 = (state_12274[(9)]);
var inst_12260__$1 = (state_12274[(2)]);
var inst_12261 = cljs.core.some(cljs.core.nil_QMARK_,inst_12260__$1);
var state_12274__$1 = (function (){var statearr_12280 = state_12274;
(statearr_12280[(9)] = inst_12260__$1);

return statearr_12280;
})();
if(cljs.core.truth_(inst_12261)){
var statearr_12284_13347 = state_12274__$1;
(statearr_12284_13347[(1)] = (14));

} else {
var statearr_12285_13348 = state_12274__$1;
(statearr_12285_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (6))){
var state_12274__$1 = state_12274;
var statearr_12287_13349 = state_12274__$1;
(statearr_12287_13349[(2)] = null);

(statearr_12287_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (17))){
var inst_12267 = (state_12274[(2)]);
var state_12274__$1 = (function (){var statearr_12292 = state_12274;
(statearr_12292[(10)] = inst_12267);

return statearr_12292;
})();
var statearr_12296_13350 = state_12274__$1;
(statearr_12296_13350[(2)] = null);

(statearr_12296_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (3))){
var inst_12272 = (state_12274[(2)]);
var state_12274__$1 = state_12274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12274__$1,inst_12272);
} else {
if((state_val_12275 === (12))){
var _ = (function (){var statearr_12298 = state_12274;
(statearr_12298[(4)] = cljs.core.rest((state_12274[(4)])));

return statearr_12298;
})();
var state_12274__$1 = state_12274;
var ex12291 = (state_12274__$1[(2)]);
var statearr_12299_13351 = state_12274__$1;
(statearr_12299_13351[(5)] = ex12291);


if((ex12291 instanceof Object)){
var statearr_12300_13352 = state_12274__$1;
(statearr_12300_13352[(1)] = (11));

(statearr_12300_13352[(5)] = null);

} else {
throw ex12291;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (2))){
var inst_12226 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12227 = cnt;
var inst_12228 = (0);
var state_12274__$1 = (function (){var statearr_12301 = state_12274;
(statearr_12301[(7)] = inst_12227);

(statearr_12301[(11)] = inst_12226);

(statearr_12301[(8)] = inst_12228);

return statearr_12301;
})();
var statearr_12302_13353 = state_12274__$1;
(statearr_12302_13353[(2)] = null);

(statearr_12302_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (11))){
var inst_12232 = (state_12274[(2)]);
var inst_12233 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12274__$1 = (function (){var statearr_12303 = state_12274;
(statearr_12303[(12)] = inst_12232);

return statearr_12303;
})();
var statearr_12304_13354 = state_12274__$1;
(statearr_12304_13354[(2)] = inst_12233);

(statearr_12304_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (9))){
var inst_12228 = (state_12274[(8)]);
var _ = (function (){var statearr_12305 = state_12274;
(statearr_12305[(4)] = cljs.core.cons((12),(state_12274[(4)])));

return statearr_12305;
})();
var inst_12246 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12228) : chs__$1.call(null,inst_12228));
var inst_12247 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12228) : done.call(null,inst_12228));
var inst_12248 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12246,inst_12247);
var ___$1 = (function (){var statearr_12306 = state_12274;
(statearr_12306[(4)] = cljs.core.rest((state_12274[(4)])));

return statearr_12306;
})();
var state_12274__$1 = state_12274;
var statearr_12307_13355 = state_12274__$1;
(statearr_12307_13355[(2)] = inst_12248);

(statearr_12307_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (5))){
var inst_12258 = (state_12274[(2)]);
var state_12274__$1 = (function (){var statearr_12308 = state_12274;
(statearr_12308[(13)] = inst_12258);

return statearr_12308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12274__$1,(13),dchan);
} else {
if((state_val_12275 === (14))){
var inst_12263 = cljs.core.async.close_BANG_(out);
var state_12274__$1 = state_12274;
var statearr_12309_13356 = state_12274__$1;
(statearr_12309_13356[(2)] = inst_12263);

(statearr_12309_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (16))){
var inst_12270 = (state_12274[(2)]);
var state_12274__$1 = state_12274;
var statearr_12310_13357 = state_12274__$1;
(statearr_12310_13357[(2)] = inst_12270);

(statearr_12310_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (10))){
var inst_12228 = (state_12274[(8)]);
var inst_12251 = (state_12274[(2)]);
var inst_12252 = (inst_12228 + (1));
var inst_12228__$1 = inst_12252;
var state_12274__$1 = (function (){var statearr_12311 = state_12274;
(statearr_12311[(14)] = inst_12251);

(statearr_12311[(8)] = inst_12228__$1);

return statearr_12311;
})();
var statearr_12312_13358 = state_12274__$1;
(statearr_12312_13358[(2)] = null);

(statearr_12312_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12275 === (8))){
var inst_12256 = (state_12274[(2)]);
var state_12274__$1 = state_12274;
var statearr_12313_13359 = state_12274__$1;
(statearr_12313_13359[(2)] = inst_12256);

(statearr_12313_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12314[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12314[(1)] = (1));

return statearr_12314;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12274){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12274);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12315){var ex__10932__auto__ = e12315;
var statearr_12316_13360 = state_12274;
(statearr_12316_13360[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12274[(4)]))){
var statearr_12317_13361 = state_12274;
(statearr_12317_13361[(1)] = cljs.core.first((state_12274[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12274;
state_12274 = G__13362;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12318 = f__10998__auto__();
(statearr_12318[(6)] = c__10997__auto___13342);

return statearr_12318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var c__10997__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12354){
var state_val_12355 = (state_12354[(1)]);
if((state_val_12355 === (7))){
var inst_12333 = (state_12354[(7)]);
var inst_12332 = (state_12354[(8)]);
var inst_12332__$1 = (state_12354[(2)]);
var inst_12333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12332__$1,(0),null);
var inst_12334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12332__$1,(1),null);
var inst_12335 = (inst_12333__$1 == null);
var state_12354__$1 = (function (){var statearr_12357 = state_12354;
(statearr_12357[(7)] = inst_12333__$1);

(statearr_12357[(8)] = inst_12332__$1);

(statearr_12357[(9)] = inst_12334);

return statearr_12357;
})();
if(cljs.core.truth_(inst_12335)){
var statearr_12358_13365 = state_12354__$1;
(statearr_12358_13365[(1)] = (8));

} else {
var statearr_12359_13366 = state_12354__$1;
(statearr_12359_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (1))){
var inst_12322 = cljs.core.vec(chs);
var inst_12323 = inst_12322;
var state_12354__$1 = (function (){var statearr_12360 = state_12354;
(statearr_12360[(10)] = inst_12323);

return statearr_12360;
})();
var statearr_12361_13367 = state_12354__$1;
(statearr_12361_13367[(2)] = null);

(statearr_12361_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (4))){
var inst_12323 = (state_12354[(10)]);
var state_12354__$1 = state_12354;
return cljs.core.async.ioc_alts_BANG_(state_12354__$1,(7),inst_12323);
} else {
if((state_val_12355 === (6))){
var inst_12350 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12363_13368 = state_12354__$1;
(statearr_12363_13368[(2)] = inst_12350);

(statearr_12363_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (3))){
var inst_12352 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12354__$1,inst_12352);
} else {
if((state_val_12355 === (2))){
var inst_12323 = (state_12354[(10)]);
var inst_12325 = cljs.core.count(inst_12323);
var inst_12326 = (inst_12325 > (0));
var state_12354__$1 = state_12354;
if(cljs.core.truth_(inst_12326)){
var statearr_12366_13369 = state_12354__$1;
(statearr_12366_13369[(1)] = (4));

} else {
var statearr_12367_13370 = state_12354__$1;
(statearr_12367_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (11))){
var inst_12323 = (state_12354[(10)]);
var inst_12342 = (state_12354[(2)]);
var tmp12364 = inst_12323;
var inst_12323__$1 = tmp12364;
var state_12354__$1 = (function (){var statearr_12368 = state_12354;
(statearr_12368[(11)] = inst_12342);

(statearr_12368[(10)] = inst_12323__$1);

return statearr_12368;
})();
var statearr_12369_13371 = state_12354__$1;
(statearr_12369_13371[(2)] = null);

(statearr_12369_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (9))){
var inst_12333 = (state_12354[(7)]);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12354__$1,(11),out,inst_12333);
} else {
if((state_val_12355 === (5))){
var inst_12348 = cljs.core.async.close_BANG_(out);
var state_12354__$1 = state_12354;
var statearr_12370_13372 = state_12354__$1;
(statearr_12370_13372[(2)] = inst_12348);

(statearr_12370_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (10))){
var inst_12346 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12371_13373 = state_12354__$1;
(statearr_12371_13373[(2)] = inst_12346);

(statearr_12371_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (8))){
var inst_12333 = (state_12354[(7)]);
var inst_12332 = (state_12354[(8)]);
var inst_12323 = (state_12354[(10)]);
var inst_12334 = (state_12354[(9)]);
var inst_12337 = (function (){var cs = inst_12323;
var vec__12328 = inst_12332;
var v = inst_12333;
var c = inst_12334;
return (function (p1__12319_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12319_SHARP_);
});
})();
var inst_12338 = cljs.core.filterv(inst_12337,inst_12323);
var inst_12323__$1 = inst_12338;
var state_12354__$1 = (function (){var statearr_12372 = state_12354;
(statearr_12372[(10)] = inst_12323__$1);

return statearr_12372;
})();
var statearr_12373_13374 = state_12354__$1;
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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12374[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12374[(1)] = (1));

return statearr_12374;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12354){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12354);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12375){var ex__10932__auto__ = e12375;
var statearr_12376_13375 = state_12354;
(statearr_12376_13375[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12354[(4)]))){
var statearr_12377_13376 = state_12354;
(statearr_12377_13376[(1)] = cljs.core.first((state_12354[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12354;
state_12354 = G__13377;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12378 = f__10998__auto__();
(statearr_12378[(6)] = c__10997__auto___13364);

return statearr_12378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var G__12381 = arguments.length;
switch (G__12381) {
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
var c__10997__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12405){
var state_val_12406 = (state_12405[(1)]);
if((state_val_12406 === (7))){
var inst_12387 = (state_12405[(7)]);
var inst_12387__$1 = (state_12405[(2)]);
var inst_12388 = (inst_12387__$1 == null);
var inst_12389 = cljs.core.not(inst_12388);
var state_12405__$1 = (function (){var statearr_12408 = state_12405;
(statearr_12408[(7)] = inst_12387__$1);

return statearr_12408;
})();
if(inst_12389){
var statearr_12409_13380 = state_12405__$1;
(statearr_12409_13380[(1)] = (8));

} else {
var statearr_12410_13381 = state_12405__$1;
(statearr_12410_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (1))){
var inst_12382 = (0);
var state_12405__$1 = (function (){var statearr_12411 = state_12405;
(statearr_12411[(8)] = inst_12382);

return statearr_12411;
})();
var statearr_12412_13382 = state_12405__$1;
(statearr_12412_13382[(2)] = null);

(statearr_12412_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (4))){
var state_12405__$1 = state_12405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12405__$1,(7),ch);
} else {
if((state_val_12406 === (6))){
var inst_12400 = (state_12405[(2)]);
var state_12405__$1 = state_12405;
var statearr_12413_13383 = state_12405__$1;
(statearr_12413_13383[(2)] = inst_12400);

(statearr_12413_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (3))){
var inst_12402 = (state_12405[(2)]);
var inst_12403 = cljs.core.async.close_BANG_(out);
var state_12405__$1 = (function (){var statearr_12414 = state_12405;
(statearr_12414[(9)] = inst_12402);

return statearr_12414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12405__$1,inst_12403);
} else {
if((state_val_12406 === (2))){
var inst_12382 = (state_12405[(8)]);
var inst_12384 = (inst_12382 < n);
var state_12405__$1 = state_12405;
if(cljs.core.truth_(inst_12384)){
var statearr_12415_13384 = state_12405__$1;
(statearr_12415_13384[(1)] = (4));

} else {
var statearr_12416_13385 = state_12405__$1;
(statearr_12416_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (11))){
var inst_12382 = (state_12405[(8)]);
var inst_12392 = (state_12405[(2)]);
var inst_12393 = (inst_12382 + (1));
var inst_12382__$1 = inst_12393;
var state_12405__$1 = (function (){var statearr_12417 = state_12405;
(statearr_12417[(8)] = inst_12382__$1);

(statearr_12417[(10)] = inst_12392);

return statearr_12417;
})();
var statearr_12418_13386 = state_12405__$1;
(statearr_12418_13386[(2)] = null);

(statearr_12418_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (9))){
var state_12405__$1 = state_12405;
var statearr_12419_13387 = state_12405__$1;
(statearr_12419_13387[(2)] = null);

(statearr_12419_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (5))){
var state_12405__$1 = state_12405;
var statearr_12420_13388 = state_12405__$1;
(statearr_12420_13388[(2)] = null);

(statearr_12420_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (10))){
var inst_12397 = (state_12405[(2)]);
var state_12405__$1 = state_12405;
var statearr_12421_13389 = state_12405__$1;
(statearr_12421_13389[(2)] = inst_12397);

(statearr_12421_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12406 === (8))){
var inst_12387 = (state_12405[(7)]);
var state_12405__$1 = state_12405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12405__$1,(11),out,inst_12387);
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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12422[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12422[(1)] = (1));

return statearr_12422;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12405){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12405);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12423){var ex__10932__auto__ = e12423;
var statearr_12424_13390 = state_12405;
(statearr_12424_13390[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12405[(4)]))){
var statearr_12425_13391 = state_12405;
(statearr_12425_13391[(1)] = cljs.core.first((state_12405[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12405;
state_12405 = G__13392;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12426 = f__10998__auto__();
(statearr_12426[(6)] = c__10997__auto___13379);

return statearr_12426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12428 = (function (f,ch,meta12429){
this.f = f;
this.ch = ch;
this.meta12429 = meta12429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12430,meta12429__$1){
var self__ = this;
var _12430__$1 = this;
return (new cljs.core.async.t_cljs$core$async12428(self__.f,self__.ch,meta12429__$1));
}));

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12430){
var self__ = this;
var _12430__$1 = this;
return self__.meta12429;
}));

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
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
cljs.core.async.t_cljs$core$async12431 = (function (f,ch,meta12429,_,fn1,meta12432){
this.f = f;
this.ch = ch;
this.meta12429 = meta12429;
this._ = _;
this.fn1 = fn1;
this.meta12432 = meta12432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12433,meta12432__$1){
var self__ = this;
var _12433__$1 = this;
return (new cljs.core.async.t_cljs$core$async12431(self__.f,self__.ch,self__.meta12429,self__._,self__.fn1,meta12432__$1));
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
return (function (p1__12427_SHARP_){
var G__12434 = (((p1__12427_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12427_SHARP_) : self__.f.call(null,p1__12427_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12434) : f1.call(null,G__12434));
});
}));

(cljs.core.async.t_cljs$core$async12431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12429","meta12429",-1936065664,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12428","cljs.core.async/t_cljs$core$async12428",-1366333350,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12432","meta12432",-1915193708,null)], null);
}));

(cljs.core.async.t_cljs$core$async12431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12431");

(cljs.core.async.t_cljs$core$async12431.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12431.
 */
cljs.core.async.__GT_t_cljs$core$async12431 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12431(f__$1,ch__$1,meta12429__$1,___$2,fn1__$1,meta12432){
return (new cljs.core.async.t_cljs$core$async12431(f__$1,ch__$1,meta12429__$1,___$2,fn1__$1,meta12432));
});

}

return (new cljs.core.async.t_cljs$core$async12431(self__.f,self__.ch,self__.meta12429,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12436 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12436) : self__.f.call(null,G__12436));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12429","meta12429",-1936065664,null)], null);
}));

(cljs.core.async.t_cljs$core$async12428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12428");

(cljs.core.async.t_cljs$core$async12428.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12428.
 */
cljs.core.async.__GT_t_cljs$core$async12428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12428(f__$1,ch__$1,meta12429){
return (new cljs.core.async.t_cljs$core$async12428(f__$1,ch__$1,meta12429));
});

}

return (new cljs.core.async.t_cljs$core$async12428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12441 = (function (p,ch,meta12442){
this.p = p;
this.ch = ch;
this.meta12442 = meta12442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12443,meta12442__$1){
var self__ = this;
var _12443__$1 = this;
return (new cljs.core.async.t_cljs$core$async12441(self__.p,self__.ch,meta12442__$1));
}));

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12443){
var self__ = this;
var _12443__$1 = this;
return self__.meta12442;
}));

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12442","meta12442",1664478898,null)], null);
}));

(cljs.core.async.t_cljs$core$async12441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12441");

(cljs.core.async.t_cljs$core$async12441.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12441.
 */
cljs.core.async.__GT_t_cljs$core$async12441 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12441(p__$1,ch__$1,meta12442){
return (new cljs.core.async.t_cljs$core$async12441(p__$1,ch__$1,meta12442));
});

}

return (new cljs.core.async.t_cljs$core$async12441(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12447 = arguments.length;
switch (G__12447) {
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
var c__10997__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12469){
var state_val_12470 = (state_12469[(1)]);
if((state_val_12470 === (7))){
var inst_12465 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12471_13395 = state_12469__$1;
(statearr_12471_13395[(2)] = inst_12465);

(statearr_12471_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (1))){
var state_12469__$1 = state_12469;
var statearr_12472_13396 = state_12469__$1;
(statearr_12472_13396[(2)] = null);

(statearr_12472_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (4))){
var inst_12450 = (state_12469[(7)]);
var inst_12450__$1 = (state_12469[(2)]);
var inst_12451 = (inst_12450__$1 == null);
var state_12469__$1 = (function (){var statearr_12473 = state_12469;
(statearr_12473[(7)] = inst_12450__$1);

return statearr_12473;
})();
if(cljs.core.truth_(inst_12451)){
var statearr_12474_13397 = state_12469__$1;
(statearr_12474_13397[(1)] = (5));

} else {
var statearr_12475_13398 = state_12469__$1;
(statearr_12475_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (6))){
var inst_12450 = (state_12469[(7)]);
var inst_12456 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12450) : p.call(null,inst_12450));
var state_12469__$1 = state_12469;
if(cljs.core.truth_(inst_12456)){
var statearr_12476_13399 = state_12469__$1;
(statearr_12476_13399[(1)] = (8));

} else {
var statearr_12477_13400 = state_12469__$1;
(statearr_12477_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (3))){
var inst_12467 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12469__$1,inst_12467);
} else {
if((state_val_12470 === (2))){
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12469__$1,(4),ch);
} else {
if((state_val_12470 === (11))){
var inst_12459 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12478_13401 = state_12469__$1;
(statearr_12478_13401[(2)] = inst_12459);

(statearr_12478_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (9))){
var state_12469__$1 = state_12469;
var statearr_12479_13402 = state_12469__$1;
(statearr_12479_13402[(2)] = null);

(statearr_12479_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (5))){
var inst_12454 = cljs.core.async.close_BANG_(out);
var state_12469__$1 = state_12469;
var statearr_12480_13403 = state_12469__$1;
(statearr_12480_13403[(2)] = inst_12454);

(statearr_12480_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (10))){
var inst_12462 = (state_12469[(2)]);
var state_12469__$1 = (function (){var statearr_12481 = state_12469;
(statearr_12481[(8)] = inst_12462);

return statearr_12481;
})();
var statearr_12482_13404 = state_12469__$1;
(statearr_12482_13404[(2)] = null);

(statearr_12482_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (8))){
var inst_12450 = (state_12469[(7)]);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12469__$1,(11),out,inst_12450);
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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12483 = [null,null,null,null,null,null,null,null,null];
(statearr_12483[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12483[(1)] = (1));

return statearr_12483;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12469){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12469);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12484){var ex__10932__auto__ = e12484;
var statearr_12485_13405 = state_12469;
(statearr_12485_13405[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12469[(4)]))){
var statearr_12486_13406 = state_12469;
(statearr_12486_13406[(1)] = cljs.core.first((state_12469[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12469;
state_12469 = G__13407;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12487 = f__10998__auto__();
(statearr_12487[(6)] = c__10997__auto___13394);

return statearr_12487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12489 = arguments.length;
switch (G__12489) {
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
var c__10997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12551){
var state_val_12552 = (state_12551[(1)]);
if((state_val_12552 === (7))){
var inst_12547 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12553_13409 = state_12551__$1;
(statearr_12553_13409[(2)] = inst_12547);

(statearr_12553_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (20))){
var inst_12517 = (state_12551[(7)]);
var inst_12528 = (state_12551[(2)]);
var inst_12529 = cljs.core.next(inst_12517);
var inst_12503 = inst_12529;
var inst_12504 = null;
var inst_12505 = (0);
var inst_12506 = (0);
var state_12551__$1 = (function (){var statearr_12554 = state_12551;
(statearr_12554[(8)] = inst_12506);

(statearr_12554[(9)] = inst_12505);

(statearr_12554[(10)] = inst_12528);

(statearr_12554[(11)] = inst_12503);

(statearr_12554[(12)] = inst_12504);

return statearr_12554;
})();
var statearr_12555_13410 = state_12551__$1;
(statearr_12555_13410[(2)] = null);

(statearr_12555_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (1))){
var state_12551__$1 = state_12551;
var statearr_12557_13411 = state_12551__$1;
(statearr_12557_13411[(2)] = null);

(statearr_12557_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (4))){
var inst_12492 = (state_12551[(13)]);
var inst_12492__$1 = (state_12551[(2)]);
var inst_12493 = (inst_12492__$1 == null);
var state_12551__$1 = (function (){var statearr_12558 = state_12551;
(statearr_12558[(13)] = inst_12492__$1);

return statearr_12558;
})();
if(cljs.core.truth_(inst_12493)){
var statearr_12560_13412 = state_12551__$1;
(statearr_12560_13412[(1)] = (5));

} else {
var statearr_12561_13413 = state_12551__$1;
(statearr_12561_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (15))){
var state_12551__$1 = state_12551;
var statearr_12565_13414 = state_12551__$1;
(statearr_12565_13414[(2)] = null);

(statearr_12565_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (21))){
var state_12551__$1 = state_12551;
var statearr_12566_13415 = state_12551__$1;
(statearr_12566_13415[(2)] = null);

(statearr_12566_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (13))){
var inst_12506 = (state_12551[(8)]);
var inst_12505 = (state_12551[(9)]);
var inst_12503 = (state_12551[(11)]);
var inst_12504 = (state_12551[(12)]);
var inst_12513 = (state_12551[(2)]);
var inst_12514 = (inst_12506 + (1));
var tmp12562 = inst_12505;
var tmp12563 = inst_12503;
var tmp12564 = inst_12504;
var inst_12503__$1 = tmp12563;
var inst_12504__$1 = tmp12564;
var inst_12505__$1 = tmp12562;
var inst_12506__$1 = inst_12514;
var state_12551__$1 = (function (){var statearr_12567 = state_12551;
(statearr_12567[(14)] = inst_12513);

(statearr_12567[(8)] = inst_12506__$1);

(statearr_12567[(9)] = inst_12505__$1);

(statearr_12567[(11)] = inst_12503__$1);

(statearr_12567[(12)] = inst_12504__$1);

return statearr_12567;
})();
var statearr_12569_13416 = state_12551__$1;
(statearr_12569_13416[(2)] = null);

(statearr_12569_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (22))){
var state_12551__$1 = state_12551;
var statearr_12570_13417 = state_12551__$1;
(statearr_12570_13417[(2)] = null);

(statearr_12570_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (6))){
var inst_12492 = (state_12551[(13)]);
var inst_12501 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12492) : f.call(null,inst_12492));
var inst_12502 = cljs.core.seq(inst_12501);
var inst_12503 = inst_12502;
var inst_12504 = null;
var inst_12505 = (0);
var inst_12506 = (0);
var state_12551__$1 = (function (){var statearr_12577 = state_12551;
(statearr_12577[(8)] = inst_12506);

(statearr_12577[(9)] = inst_12505);

(statearr_12577[(11)] = inst_12503);

(statearr_12577[(12)] = inst_12504);

return statearr_12577;
})();
var statearr_12579_13418 = state_12551__$1;
(statearr_12579_13418[(2)] = null);

(statearr_12579_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (17))){
var inst_12517 = (state_12551[(7)]);
var inst_12521 = cljs.core.chunk_first(inst_12517);
var inst_12522 = cljs.core.chunk_rest(inst_12517);
var inst_12523 = cljs.core.count(inst_12521);
var inst_12503 = inst_12522;
var inst_12504 = inst_12521;
var inst_12505 = inst_12523;
var inst_12506 = (0);
var state_12551__$1 = (function (){var statearr_12580 = state_12551;
(statearr_12580[(8)] = inst_12506);

(statearr_12580[(9)] = inst_12505);

(statearr_12580[(11)] = inst_12503);

(statearr_12580[(12)] = inst_12504);

return statearr_12580;
})();
var statearr_12581_13419 = state_12551__$1;
(statearr_12581_13419[(2)] = null);

(statearr_12581_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (3))){
var inst_12549 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12551__$1,inst_12549);
} else {
if((state_val_12552 === (12))){
var inst_12537 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12585_13420 = state_12551__$1;
(statearr_12585_13420[(2)] = inst_12537);

(statearr_12585_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (2))){
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12551__$1,(4),in$);
} else {
if((state_val_12552 === (23))){
var inst_12545 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12588_13421 = state_12551__$1;
(statearr_12588_13421[(2)] = inst_12545);

(statearr_12588_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (19))){
var inst_12532 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12590_13422 = state_12551__$1;
(statearr_12590_13422[(2)] = inst_12532);

(statearr_12590_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (11))){
var inst_12503 = (state_12551[(11)]);
var inst_12517 = (state_12551[(7)]);
var inst_12517__$1 = cljs.core.seq(inst_12503);
var state_12551__$1 = (function (){var statearr_12591 = state_12551;
(statearr_12591[(7)] = inst_12517__$1);

return statearr_12591;
})();
if(inst_12517__$1){
var statearr_12592_13423 = state_12551__$1;
(statearr_12592_13423[(1)] = (14));

} else {
var statearr_12593_13424 = state_12551__$1;
(statearr_12593_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (9))){
var inst_12539 = (state_12551[(2)]);
var inst_12540 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12551__$1 = (function (){var statearr_12595 = state_12551;
(statearr_12595[(15)] = inst_12539);

return statearr_12595;
})();
if(cljs.core.truth_(inst_12540)){
var statearr_12596_13425 = state_12551__$1;
(statearr_12596_13425[(1)] = (21));

} else {
var statearr_12597_13426 = state_12551__$1;
(statearr_12597_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (5))){
var inst_12495 = cljs.core.async.close_BANG_(out);
var state_12551__$1 = state_12551;
var statearr_12600_13427 = state_12551__$1;
(statearr_12600_13427[(2)] = inst_12495);

(statearr_12600_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (14))){
var inst_12517 = (state_12551[(7)]);
var inst_12519 = cljs.core.chunked_seq_QMARK_(inst_12517);
var state_12551__$1 = state_12551;
if(inst_12519){
var statearr_12603_13428 = state_12551__$1;
(statearr_12603_13428[(1)] = (17));

} else {
var statearr_12604_13429 = state_12551__$1;
(statearr_12604_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (16))){
var inst_12535 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12606_13430 = state_12551__$1;
(statearr_12606_13430[(2)] = inst_12535);

(statearr_12606_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (10))){
var inst_12506 = (state_12551[(8)]);
var inst_12504 = (state_12551[(12)]);
var inst_12511 = cljs.core._nth(inst_12504,inst_12506);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12551__$1,(13),out,inst_12511);
} else {
if((state_val_12552 === (18))){
var inst_12517 = (state_12551[(7)]);
var inst_12526 = cljs.core.first(inst_12517);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12551__$1,(20),out,inst_12526);
} else {
if((state_val_12552 === (8))){
var inst_12506 = (state_12551[(8)]);
var inst_12505 = (state_12551[(9)]);
var inst_12508 = (inst_12506 < inst_12505);
var inst_12509 = inst_12508;
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12509)){
var statearr_12623_13431 = state_12551__$1;
(statearr_12623_13431[(1)] = (10));

} else {
var statearr_12624_13432 = state_12551__$1;
(statearr_12624_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____0 = (function (){
var statearr_12625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12625[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__);

(statearr_12625[(1)] = (1));

return statearr_12625;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____1 = (function (state_12551){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12551);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12626){var ex__10932__auto__ = e12626;
var statearr_12627_13433 = state_12551;
(statearr_12627_13433[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12551[(4)]))){
var statearr_12628_13434 = state_12551;
(statearr_12628_13434[(1)] = cljs.core.first((state_12551[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12551;
state_12551 = G__13435;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__ = function(state_12551){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____1.call(this,state_12551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10929__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12629 = f__10998__auto__();
(statearr_12629[(6)] = c__10997__auto__);

return statearr_12629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));

return c__10997__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12631 = arguments.length;
switch (G__12631) {
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
var G__12663 = arguments.length;
switch (G__12663) {
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
var c__10997__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12687){
var state_val_12688 = (state_12687[(1)]);
if((state_val_12688 === (7))){
var inst_12682 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12706_13440 = state_12687__$1;
(statearr_12706_13440[(2)] = inst_12682);

(statearr_12706_13440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (1))){
var inst_12664 = null;
var state_12687__$1 = (function (){var statearr_12707 = state_12687;
(statearr_12707[(7)] = inst_12664);

return statearr_12707;
})();
var statearr_12708_13441 = state_12687__$1;
(statearr_12708_13441[(2)] = null);

(statearr_12708_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (4))){
var inst_12667 = (state_12687[(8)]);
var inst_12667__$1 = (state_12687[(2)]);
var inst_12668 = (inst_12667__$1 == null);
var inst_12669 = cljs.core.not(inst_12668);
var state_12687__$1 = (function (){var statearr_12712 = state_12687;
(statearr_12712[(8)] = inst_12667__$1);

return statearr_12712;
})();
if(inst_12669){
var statearr_12713_13442 = state_12687__$1;
(statearr_12713_13442[(1)] = (5));

} else {
var statearr_12714_13443 = state_12687__$1;
(statearr_12714_13443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (6))){
var state_12687__$1 = state_12687;
var statearr_12715_13444 = state_12687__$1;
(statearr_12715_13444[(2)] = null);

(statearr_12715_13444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (3))){
var inst_12684 = (state_12687[(2)]);
var inst_12685 = cljs.core.async.close_BANG_(out);
var state_12687__$1 = (function (){var statearr_12719 = state_12687;
(statearr_12719[(9)] = inst_12684);

return statearr_12719;
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
var state_12687__$1 = (function (){var statearr_12720 = state_12687;
(statearr_12720[(10)] = inst_12676);

(statearr_12720[(7)] = inst_12664);

return statearr_12720;
})();
var statearr_12721_13445 = state_12687__$1;
(statearr_12721_13445[(2)] = null);

(statearr_12721_13445[(1)] = (2));


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
var statearr_12728_13446 = state_12687__$1;
(statearr_12728_13446[(1)] = (8));

} else {
var statearr_12729_13447 = state_12687__$1;
(statearr_12729_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (10))){
var inst_12679 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12730_13448 = state_12687__$1;
(statearr_12730_13448[(2)] = inst_12679);

(statearr_12730_13448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (8))){
var inst_12664 = (state_12687[(7)]);
var tmp12726 = inst_12664;
var inst_12664__$1 = tmp12726;
var state_12687__$1 = (function (){var statearr_12733 = state_12687;
(statearr_12733[(7)] = inst_12664__$1);

return statearr_12733;
})();
var statearr_12735_13449 = state_12687__$1;
(statearr_12735_13449[(2)] = null);

(statearr_12735_13449[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12736[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12736[(1)] = (1));

return statearr_12736;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12687){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12687);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12752){var ex__10932__auto__ = e12752;
var statearr_12753_13450 = state_12687;
(statearr_12753_13450[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12687[(4)]))){
var statearr_12754_13451 = state_12687;
(statearr_12754_13451[(1)] = cljs.core.first((state_12687[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12687;
state_12687 = G__13452;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12755 = f__10998__auto__();
(statearr_12755[(6)] = c__10997__auto___13439);

return statearr_12755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var c__10997__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12795){
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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12818[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12818[(1)] = (1));

return statearr_12818;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12795){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12795);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12819){var ex__10932__auto__ = e12819;
var statearr_12820_13469 = state_12795;
(statearr_12820_13469[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12795[(4)]))){
var statearr_12821_13470 = state_12795;
(statearr_12821_13470[(1)] = cljs.core.first((state_12795[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12795;
state_12795 = G__13471;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12822 = f__10998__auto__();
(statearr_12822[(6)] = c__10997__auto___13454);

return statearr_12822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
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
var c__10997__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10998__auto__ = (function (){var switch__10928__auto__ = (function (state_12866){
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
var state_12866__$1 = (function (){var statearr_12883 = state_12866;
(statearr_12883[(7)] = inst_12827);

(statearr_12883[(11)] = inst_12844);

(statearr_12883[(12)] = inst_12846);

(statearr_12883[(8)] = inst_12826);

return statearr_12883;
})();
var statearr_12884_13482 = state_12866__$1;
(statearr_12884_13482[(2)] = null);

(statearr_12884_13482[(1)] = (2));


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
var state_12866__$1 = (function (){var statearr_12885 = state_12866;
(statearr_12885[(10)] = inst_12834__$1);

return statearr_12885;
})();
if(cljs.core.truth_(inst_12837)){
var statearr_12886_13483 = state_12866__$1;
(statearr_12886_13483[(1)] = (8));

} else {
var statearr_12887_13484 = state_12866__$1;
(statearr_12887_13484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (14))){
var inst_12859 = (state_12866[(2)]);
var inst_12860 = cljs.core.async.close_BANG_(out);
var state_12866__$1 = (function (){var statearr_12889 = state_12866;
(statearr_12889[(13)] = inst_12859);

return statearr_12889;
})();
var statearr_12890_13485 = state_12866__$1;
(statearr_12890_13485[(2)] = inst_12860);

(statearr_12890_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (10))){
var inst_12849 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
var statearr_12891_13486 = state_12866__$1;
(statearr_12891_13486[(2)] = inst_12849);

(statearr_12891_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (8))){
var inst_12834 = (state_12866[(10)]);
var inst_12826 = (state_12866[(8)]);
var inst_12830 = (state_12866[(9)]);
var inst_12839 = inst_12826.push(inst_12830);
var tmp12888 = inst_12826;
var inst_12826__$1 = tmp12888;
var inst_12827 = inst_12834;
var state_12866__$1 = (function (){var statearr_12892 = state_12866;
(statearr_12892[(14)] = inst_12839);

(statearr_12892[(7)] = inst_12827);

(statearr_12892[(8)] = inst_12826__$1);

return statearr_12892;
})();
var statearr_12893_13487 = state_12866__$1;
(statearr_12893_13487[(2)] = null);

(statearr_12893_13487[(1)] = (2));


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
var cljs$core$async$state_machine__10929__auto__ = null;
var cljs$core$async$state_machine__10929__auto____0 = (function (){
var statearr_12894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12894[(0)] = cljs$core$async$state_machine__10929__auto__);

(statearr_12894[(1)] = (1));

return statearr_12894;
});
var cljs$core$async$state_machine__10929__auto____1 = (function (state_12866){
while(true){
var ret_value__10930__auto__ = (function (){try{while(true){
var result__10931__auto__ = switch__10928__auto__(state_12866);
if(cljs.core.keyword_identical_QMARK_(result__10931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10931__auto__;
}
break;
}
}catch (e12895){var ex__10932__auto__ = e12895;
var statearr_12896_13488 = state_12866;
(statearr_12896_13488[(2)] = ex__10932__auto__);


if(cljs.core.seq((state_12866[(4)]))){
var statearr_12897_13489 = state_12866;
(statearr_12897_13489[(1)] = cljs.core.first((state_12866[(4)])));

} else {
throw ex__10932__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12866;
state_12866 = G__13490;
continue;
} else {
return ret_value__10930__auto__;
}
break;
}
});
cljs$core$async$state_machine__10929__auto__ = function(state_12866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10929__auto____1.call(this,state_12866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10929__auto____0;
cljs$core$async$state_machine__10929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10929__auto____1;
return cljs$core$async$state_machine__10929__auto__;
})()
})();
var state__10999__auto__ = (function (){var statearr_12898 = f__10998__auto__();
(statearr_12898[(6)] = c__10997__auto___13473);

return statearr_12898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10999__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
