goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11097 = arguments.length;
switch (G__11097) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11105 = (function (f,blockable,meta11106){
this.f = f;
this.blockable = blockable;
this.meta11106 = meta11106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11107,meta11106__$1){
var self__ = this;
var _11107__$1 = this;
return (new cljs.core.async.t_cljs$core$async11105(self__.f,self__.blockable,meta11106__$1));
}));

(cljs.core.async.t_cljs$core$async11105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11107){
var self__ = this;
var _11107__$1 = this;
return self__.meta11106;
}));

(cljs.core.async.t_cljs$core$async11105.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11105.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11106","meta11106",558905401,null)], null);
}));

(cljs.core.async.t_cljs$core$async11105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11105");

(cljs.core.async.t_cljs$core$async11105.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11105.
 */
cljs.core.async.__GT_t_cljs$core$async11105 = (function cljs$core$async$__GT_t_cljs$core$async11105(f__$1,blockable__$1,meta11106){
return (new cljs.core.async.t_cljs$core$async11105(f__$1,blockable__$1,meta11106));
});

}

return (new cljs.core.async.t_cljs$core$async11105(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11121 = arguments.length;
switch (G__11121) {
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
var G__11132 = arguments.length;
switch (G__11132) {
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
var val_13003 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13003) : fn1.call(null,val_13003));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13003) : fn1.call(null,val_13003));
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
var G__11141 = arguments.length;
switch (G__11141) {
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
var n__4613__auto___13005 = n;
var x_13006 = (0);
while(true){
if((x_13006 < n__4613__auto___13005)){
(a[x_13006] = x_13006);

var G__13007 = (x_13006 + (1));
x_13006 = G__13007;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11144 = (function (flag,meta11145){
this.flag = flag;
this.meta11145 = meta11145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11146,meta11145__$1){
var self__ = this;
var _11146__$1 = this;
return (new cljs.core.async.t_cljs$core$async11144(self__.flag,meta11145__$1));
}));

(cljs.core.async.t_cljs$core$async11144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11146){
var self__ = this;
var _11146__$1 = this;
return self__.meta11145;
}));

(cljs.core.async.t_cljs$core$async11144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11145","meta11145",1248319409,null)], null);
}));

(cljs.core.async.t_cljs$core$async11144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11144");

(cljs.core.async.t_cljs$core$async11144.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11144.
 */
cljs.core.async.__GT_t_cljs$core$async11144 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11144(flag__$1,meta11145){
return (new cljs.core.async.t_cljs$core$async11144(flag__$1,meta11145));
});

}

return (new cljs.core.async.t_cljs$core$async11144(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11154 = (function (flag,cb,meta11155){
this.flag = flag;
this.cb = cb;
this.meta11155 = meta11155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11156,meta11155__$1){
var self__ = this;
var _11156__$1 = this;
return (new cljs.core.async.t_cljs$core$async11154(self__.flag,self__.cb,meta11155__$1));
}));

(cljs.core.async.t_cljs$core$async11154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11156){
var self__ = this;
var _11156__$1 = this;
return self__.meta11155;
}));

(cljs.core.async.t_cljs$core$async11154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11155","meta11155",2081124379,null)], null);
}));

(cljs.core.async.t_cljs$core$async11154.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11154");

(cljs.core.async.t_cljs$core$async11154.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11154");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11154.
 */
cljs.core.async.__GT_t_cljs$core$async11154 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11154(flag__$1,cb__$1,meta11155){
return (new cljs.core.async.t_cljs$core$async11154(flag__$1,cb__$1,meta11155));
});

}

return (new cljs.core.async.t_cljs$core$async11154(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11157_SHARP_){
var G__11162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11157_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11162) : fret.call(null,G__11162));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11158_SHARP_){
var G__11163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11158_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11163) : fret.call(null,G__11163));
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
var G__13009 = (i + (1));
i = G__13009;
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
var len__4736__auto___13010 = arguments.length;
var i__4737__auto___13011 = (0);
while(true){
if((i__4737__auto___13011 < len__4736__auto___13010)){
args__4742__auto__.push((arguments[i__4737__auto___13011]));

var G__13012 = (i__4737__auto___13011 + (1));
i__4737__auto___13011 = G__13012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11166){
var map__11184 = p__11166;
var map__11184__$1 = (((((!((map__11184 == null))))?(((((map__11184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11184):map__11184);
var opts = map__11184__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11164){
var G__11165 = cljs.core.first(seq11164);
var seq11164__$1 = cljs.core.next(seq11164);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11165,seq11164__$1);
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
var G__11187 = arguments.length;
switch (G__11187) {
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
var c__11012__auto___13014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11218){
var state_val_11219 = (state_11218[(1)]);
if((state_val_11219 === (7))){
var inst_11213 = (state_11218[(2)]);
var state_11218__$1 = state_11218;
var statearr_11220_13015 = state_11218__$1;
(statearr_11220_13015[(2)] = inst_11213);

(statearr_11220_13015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (1))){
var state_11218__$1 = state_11218;
var statearr_11221_13016 = state_11218__$1;
(statearr_11221_13016[(2)] = null);

(statearr_11221_13016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (4))){
var inst_11196 = (state_11218[(7)]);
var inst_11196__$1 = (state_11218[(2)]);
var inst_11197 = (inst_11196__$1 == null);
var state_11218__$1 = (function (){var statearr_11226 = state_11218;
(statearr_11226[(7)] = inst_11196__$1);

return statearr_11226;
})();
if(cljs.core.truth_(inst_11197)){
var statearr_11227_13017 = state_11218__$1;
(statearr_11227_13017[(1)] = (5));

} else {
var statearr_11228_13018 = state_11218__$1;
(statearr_11228_13018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (13))){
var state_11218__$1 = state_11218;
var statearr_11229_13019 = state_11218__$1;
(statearr_11229_13019[(2)] = null);

(statearr_11229_13019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (6))){
var inst_11196 = (state_11218[(7)]);
var state_11218__$1 = state_11218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11218__$1,(11),to,inst_11196);
} else {
if((state_val_11219 === (3))){
var inst_11216 = (state_11218[(2)]);
var state_11218__$1 = state_11218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11218__$1,inst_11216);
} else {
if((state_val_11219 === (12))){
var state_11218__$1 = state_11218;
var statearr_11230_13022 = state_11218__$1;
(statearr_11230_13022[(2)] = null);

(statearr_11230_13022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (2))){
var state_11218__$1 = state_11218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11218__$1,(4),from);
} else {
if((state_val_11219 === (11))){
var inst_11206 = (state_11218[(2)]);
var state_11218__$1 = state_11218;
if(cljs.core.truth_(inst_11206)){
var statearr_11231_13023 = state_11218__$1;
(statearr_11231_13023[(1)] = (12));

} else {
var statearr_11232_13024 = state_11218__$1;
(statearr_11232_13024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (9))){
var state_11218__$1 = state_11218;
var statearr_11233_13025 = state_11218__$1;
(statearr_11233_13025[(2)] = null);

(statearr_11233_13025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (5))){
var state_11218__$1 = state_11218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11234_13029 = state_11218__$1;
(statearr_11234_13029[(1)] = (8));

} else {
var statearr_11235_13030 = state_11218__$1;
(statearr_11235_13030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (14))){
var inst_11211 = (state_11218[(2)]);
var state_11218__$1 = state_11218;
var statearr_11236_13032 = state_11218__$1;
(statearr_11236_13032[(2)] = inst_11211);

(statearr_11236_13032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (10))){
var inst_11203 = (state_11218[(2)]);
var state_11218__$1 = state_11218;
var statearr_11237_13033 = state_11218__$1;
(statearr_11237_13033[(2)] = inst_11203);

(statearr_11237_13033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11219 === (8))){
var inst_11200 = cljs.core.async.close_BANG_(to);
var state_11218__$1 = state_11218;
var statearr_11238_13034 = state_11218__$1;
(statearr_11238_13034[(2)] = inst_11200);

(statearr_11238_13034[(1)] = (10));


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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_11239 = [null,null,null,null,null,null,null,null];
(statearr_11239[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_11239[(1)] = (1));

return statearr_11239;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_11218){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11218);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11240){var ex__10946__auto__ = e11240;
var statearr_11241_13037 = state_11218;
(statearr_11241_13037[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11218[(4)]))){
var statearr_11242_13038 = state_11218;
(statearr_11242_13038[(1)] = cljs.core.first((state_11218[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13039 = state_11218;
state_11218 = G__13039;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_11218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_11218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11243 = f__11013__auto__();
(statearr_11243[(6)] = c__11012__auto___13014);

return statearr_11243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var c__11012__auto___13058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11252){
var state_val_11253 = (state_11252[(1)]);
if((state_val_11253 === (1))){
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11252__$1,(2),res,v);
} else {
if((state_val_11253 === (2))){
var inst_11249 = (state_11252[(2)]);
var inst_11250 = cljs.core.async.close_BANG_(res);
var state_11252__$1 = (function (){var statearr_11254 = state_11252;
(statearr_11254[(7)] = inst_11249);

return statearr_11254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11252__$1,inst_11250);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0 = (function (){
var statearr_11258 = [null,null,null,null,null,null,null,null];
(statearr_11258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__);

(statearr_11258[(1)] = (1));

return statearr_11258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1 = (function (state_11252){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11252);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11259){var ex__10946__auto__ = e11259;
var statearr_11260_13059 = state_11252;
(statearr_11260_13059[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11252[(4)]))){
var statearr_11261_13060 = state_11252;
(statearr_11261_13060[(1)] = cljs.core.first((state_11252[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13061 = state_11252;
state_11252 = G__13061;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = function(state_11252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1.call(this,state_11252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11262 = f__11013__auto__();
(statearr_11262[(6)] = c__11012__auto___13058);

return statearr_11262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var n__4613__auto___13062 = n;
var __13063 = (0);
while(true){
if((__13063 < n__4613__auto___13062)){
var G__11267_13064 = type;
var G__11267_13065__$1 = (((G__11267_13064 instanceof cljs.core.Keyword))?G__11267_13064.fqn:null);
switch (G__11267_13065__$1) {
case "compute":
var c__11012__auto___13067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__11012__auto___13067,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = ((function (__13063,c__11012__auto___13067,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11280){
var state_val_11281 = (state_11280[(1)]);
if((state_val_11281 === (1))){
var state_11280__$1 = state_11280;
var statearr_11282_13068 = state_11280__$1;
(statearr_11282_13068[(2)] = null);

(statearr_11282_13068[(1)] = (2));


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
var statearr_11283_13069 = state_11280__$1;
(statearr_11283_13069[(1)] = (5));

} else {
var statearr_11284_13070 = state_11280__$1;
(statearr_11284_13070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11281 === (5))){
var state_11280__$1 = state_11280;
var statearr_11285_13071 = state_11280__$1;
(statearr_11285_13071[(2)] = null);

(statearr_11285_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11281 === (6))){
var state_11280__$1 = state_11280;
var statearr_11286_13072 = state_11280__$1;
(statearr_11286_13072[(2)] = null);

(statearr_11286_13072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11281 === (7))){
var inst_11276 = (state_11280[(2)]);
var state_11280__$1 = state_11280;
var statearr_11287_13073 = state_11280__$1;
(statearr_11287_13073[(2)] = inst_11276);

(statearr_11287_13073[(1)] = (3));


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
});})(__13063,c__11012__auto___13067,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10942__auto__,c__11012__auto___13067,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0 = (function (){
var statearr_11288 = [null,null,null,null,null,null,null];
(statearr_11288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__);

(statearr_11288[(1)] = (1));

return statearr_11288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1 = (function (state_11280){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11280);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11289){var ex__10946__auto__ = e11289;
var statearr_11290_13074 = state_11280;
(statearr_11290_13074[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11280[(4)]))){
var statearr_11291_13075 = state_11280;
(statearr_11291_13075[(1)] = cljs.core.first((state_11280[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13076 = state_11280;
state_11280 = G__13076;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = function(state_11280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1.call(this,state_11280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__;
})()
;})(__13063,switch__10942__auto__,c__11012__auto___13067,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__11014__auto__ = (function (){var statearr_11292 = f__11013__auto__();
(statearr_11292[(6)] = c__11012__auto___13067);

return statearr_11292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
});})(__13063,c__11012__auto___13067,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
case "async":
var c__11012__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13063,c__11012__auto___13077,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = ((function (__13063,c__11012__auto___13077,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function (state_11305){
var state_val_11306 = (state_11305[(1)]);
if((state_val_11306 === (1))){
var state_11305__$1 = state_11305;
var statearr_11307_13078 = state_11305__$1;
(statearr_11307_13078[(2)] = null);

(statearr_11307_13078[(1)] = (2));


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
var statearr_11308_13079 = state_11305__$1;
(statearr_11308_13079[(1)] = (5));

} else {
var statearr_11309_13080 = state_11305__$1;
(statearr_11309_13080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (5))){
var state_11305__$1 = state_11305;
var statearr_11310_13081 = state_11305__$1;
(statearr_11310_13081[(2)] = null);

(statearr_11310_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (6))){
var state_11305__$1 = state_11305;
var statearr_11311_13082 = state_11305__$1;
(statearr_11311_13082[(2)] = null);

(statearr_11311_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (7))){
var inst_11301 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11312_13083 = state_11305__$1;
(statearr_11312_13083[(2)] = inst_11301);

(statearr_11312_13083[(1)] = (3));


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
});})(__13063,c__11012__auto___13077,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async))
;
return ((function (__13063,switch__10942__auto__,c__11012__auto___13077,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0 = (function (){
var statearr_11313 = [null,null,null,null,null,null,null];
(statearr_11313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__);

(statearr_11313[(1)] = (1));

return statearr_11313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1 = (function (state_11305){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11305);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11314){var ex__10946__auto__ = e11314;
var statearr_11315_13084 = state_11305;
(statearr_11315_13084[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11305[(4)]))){
var statearr_11320_13085 = state_11305;
(statearr_11320_13085[(1)] = cljs.core.first((state_11305[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_11305;
state_11305 = G__13086;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = function(state_11305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1.call(this,state_11305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__;
})()
;})(__13063,switch__10942__auto__,c__11012__auto___13077,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async))
})();
var state__11014__auto__ = (function (){var statearr_11321 = f__11013__auto__();
(statearr_11321[(6)] = c__11012__auto___13077);

return statearr_11321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
});})(__13063,c__11012__auto___13077,G__11267_13064,G__11267_13065__$1,n__4613__auto___13062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11267_13065__$1)].join('')));

}

var G__13087 = (__13063 + (1));
__13063 = G__13087;
continue;
} else {
}
break;
}

var c__11012__auto___13088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11344){
var state_val_11345 = (state_11344[(1)]);
if((state_val_11345 === (7))){
var inst_11340 = (state_11344[(2)]);
var state_11344__$1 = state_11344;
var statearr_11346_13089 = state_11344__$1;
(statearr_11346_13089[(2)] = inst_11340);

(statearr_11346_13089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (1))){
var state_11344__$1 = state_11344;
var statearr_11347_13090 = state_11344__$1;
(statearr_11347_13090[(2)] = null);

(statearr_11347_13090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (4))){
var inst_11324 = (state_11344[(7)]);
var inst_11324__$1 = (state_11344[(2)]);
var inst_11326 = (inst_11324__$1 == null);
var state_11344__$1 = (function (){var statearr_11348 = state_11344;
(statearr_11348[(7)] = inst_11324__$1);

return statearr_11348;
})();
if(cljs.core.truth_(inst_11326)){
var statearr_11349_13091 = state_11344__$1;
(statearr_11349_13091[(1)] = (5));

} else {
var statearr_11350_13092 = state_11344__$1;
(statearr_11350_13092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (6))){
var inst_11330 = (state_11344[(8)]);
var inst_11324 = (state_11344[(7)]);
var inst_11330__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11332 = [inst_11324,inst_11330__$1];
var inst_11333 = (new cljs.core.PersistentVector(null,2,(5),inst_11331,inst_11332,null));
var state_11344__$1 = (function (){var statearr_11351 = state_11344;
(statearr_11351[(8)] = inst_11330__$1);

return statearr_11351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11344__$1,(8),jobs,inst_11333);
} else {
if((state_val_11345 === (3))){
var inst_11342 = (state_11344[(2)]);
var state_11344__$1 = state_11344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11344__$1,inst_11342);
} else {
if((state_val_11345 === (2))){
var state_11344__$1 = state_11344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11344__$1,(4),from);
} else {
if((state_val_11345 === (9))){
var inst_11337 = (state_11344[(2)]);
var state_11344__$1 = (function (){var statearr_11352 = state_11344;
(statearr_11352[(9)] = inst_11337);

return statearr_11352;
})();
var statearr_11353_13093 = state_11344__$1;
(statearr_11353_13093[(2)] = null);

(statearr_11353_13093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (5))){
var inst_11328 = cljs.core.async.close_BANG_(jobs);
var state_11344__$1 = state_11344;
var statearr_11354_13094 = state_11344__$1;
(statearr_11354_13094[(2)] = inst_11328);

(statearr_11354_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (8))){
var inst_11330 = (state_11344[(8)]);
var inst_11335 = (state_11344[(2)]);
var state_11344__$1 = (function (){var statearr_11367 = state_11344;
(statearr_11367[(10)] = inst_11335);

return statearr_11367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11344__$1,(9),results,inst_11330);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0 = (function (){
var statearr_11368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__);

(statearr_11368[(1)] = (1));

return statearr_11368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1 = (function (state_11344){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11344);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11371){var ex__10946__auto__ = e11371;
var statearr_11372_13095 = state_11344;
(statearr_11372_13095[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11344[(4)]))){
var statearr_11373_13096 = state_11344;
(statearr_11373_13096[(1)] = cljs.core.first((state_11344[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_11344;
state_11344 = G__13097;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = function(state_11344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1.call(this,state_11344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11374 = f__11013__auto__();
(statearr_11374[(6)] = c__11012__auto___13088);

return statearr_11374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));


var c__11012__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11426){
var state_val_11427 = (state_11426[(1)]);
if((state_val_11427 === (7))){
var inst_11408 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
var statearr_11430_13098 = state_11426__$1;
(statearr_11430_13098[(2)] = inst_11408);

(statearr_11430_13098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (20))){
var state_11426__$1 = state_11426;
var statearr_11433_13099 = state_11426__$1;
(statearr_11433_13099[(2)] = null);

(statearr_11433_13099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (1))){
var state_11426__$1 = state_11426;
var statearr_11435_13100 = state_11426__$1;
(statearr_11435_13100[(2)] = null);

(statearr_11435_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (4))){
var inst_11377 = (state_11426[(7)]);
var inst_11377__$1 = (state_11426[(2)]);
var inst_11378 = (inst_11377__$1 == null);
var state_11426__$1 = (function (){var statearr_11436 = state_11426;
(statearr_11436[(7)] = inst_11377__$1);

return statearr_11436;
})();
if(cljs.core.truth_(inst_11378)){
var statearr_11437_13101 = state_11426__$1;
(statearr_11437_13101[(1)] = (5));

} else {
var statearr_11438_13102 = state_11426__$1;
(statearr_11438_13102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (15))){
var inst_11390 = (state_11426[(8)]);
var state_11426__$1 = state_11426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11426__$1,(18),to,inst_11390);
} else {
if((state_val_11427 === (21))){
var inst_11403 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
var statearr_11442_13103 = state_11426__$1;
(statearr_11442_13103[(2)] = inst_11403);

(statearr_11442_13103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (13))){
var inst_11405 = (state_11426[(2)]);
var state_11426__$1 = (function (){var statearr_11443 = state_11426;
(statearr_11443[(9)] = inst_11405);

return statearr_11443;
})();
var statearr_11445_13104 = state_11426__$1;
(statearr_11445_13104[(2)] = null);

(statearr_11445_13104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (6))){
var inst_11377 = (state_11426[(7)]);
var state_11426__$1 = state_11426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11426__$1,(11),inst_11377);
} else {
if((state_val_11427 === (17))){
var inst_11398 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
if(cljs.core.truth_(inst_11398)){
var statearr_11458_13105 = state_11426__$1;
(statearr_11458_13105[(1)] = (19));

} else {
var statearr_11459_13106 = state_11426__$1;
(statearr_11459_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (3))){
var inst_11423 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11426__$1,inst_11423);
} else {
if((state_val_11427 === (12))){
var inst_11387 = (state_11426[(10)]);
var state_11426__$1 = state_11426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11426__$1,(14),inst_11387);
} else {
if((state_val_11427 === (2))){
var state_11426__$1 = state_11426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11426__$1,(4),results);
} else {
if((state_val_11427 === (19))){
var state_11426__$1 = state_11426;
var statearr_11460_13107 = state_11426__$1;
(statearr_11460_13107[(2)] = null);

(statearr_11460_13107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (11))){
var inst_11387 = (state_11426[(2)]);
var state_11426__$1 = (function (){var statearr_11461 = state_11426;
(statearr_11461[(10)] = inst_11387);

return statearr_11461;
})();
var statearr_11462_13108 = state_11426__$1;
(statearr_11462_13108[(2)] = null);

(statearr_11462_13108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (9))){
var state_11426__$1 = state_11426;
var statearr_11463_13109 = state_11426__$1;
(statearr_11463_13109[(2)] = null);

(statearr_11463_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (5))){
var state_11426__$1 = state_11426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11464_13110 = state_11426__$1;
(statearr_11464_13110[(1)] = (8));

} else {
var statearr_11465_13111 = state_11426__$1;
(statearr_11465_13111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (14))){
var inst_11390 = (state_11426[(8)]);
var inst_11390__$1 = (state_11426[(2)]);
var inst_11391 = (inst_11390__$1 == null);
var inst_11392 = cljs.core.not(inst_11391);
var state_11426__$1 = (function (){var statearr_11466 = state_11426;
(statearr_11466[(8)] = inst_11390__$1);

return statearr_11466;
})();
if(inst_11392){
var statearr_11467_13112 = state_11426__$1;
(statearr_11467_13112[(1)] = (15));

} else {
var statearr_11468_13113 = state_11426__$1;
(statearr_11468_13113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (16))){
var state_11426__$1 = state_11426;
var statearr_11469_13114 = state_11426__$1;
(statearr_11469_13114[(2)] = false);

(statearr_11469_13114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (10))){
var inst_11384 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
var statearr_11470_13115 = state_11426__$1;
(statearr_11470_13115[(2)] = inst_11384);

(statearr_11470_13115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (18))){
var inst_11395 = (state_11426[(2)]);
var state_11426__$1 = state_11426;
var statearr_11471_13116 = state_11426__$1;
(statearr_11471_13116[(2)] = inst_11395);

(statearr_11471_13116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11427 === (8))){
var inst_11381 = cljs.core.async.close_BANG_(to);
var state_11426__$1 = state_11426;
var statearr_11472_13117 = state_11426__$1;
(statearr_11472_13117[(2)] = inst_11381);

(statearr_11472_13117[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0 = (function (){
var statearr_11473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__);

(statearr_11473[(1)] = (1));

return statearr_11473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1 = (function (state_11426){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11426);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11474){var ex__10946__auto__ = e11474;
var statearr_11475_13118 = state_11426;
(statearr_11475_13118[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11426[(4)]))){
var statearr_11476_13119 = state_11426;
(statearr_11476_13119[(1)] = cljs.core.first((state_11426[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_11426;
state_11426 = G__13120;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__ = function(state_11426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1.call(this,state_11426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11479 = f__11013__auto__();
(statearr_11479[(6)] = c__11012__auto__);

return statearr_11479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));

return c__11012__auto__;
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
var G__11481 = arguments.length;
switch (G__11481) {
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
var G__11483 = arguments.length;
switch (G__11483) {
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
var G__11491 = arguments.length;
switch (G__11491) {
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
var c__11012__auto___13124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11517){
var state_val_11518 = (state_11517[(1)]);
if((state_val_11518 === (7))){
var inst_11513 = (state_11517[(2)]);
var state_11517__$1 = state_11517;
var statearr_11519_13125 = state_11517__$1;
(statearr_11519_13125[(2)] = inst_11513);

(statearr_11519_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (1))){
var state_11517__$1 = state_11517;
var statearr_11520_13126 = state_11517__$1;
(statearr_11520_13126[(2)] = null);

(statearr_11520_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (4))){
var inst_11494 = (state_11517[(7)]);
var inst_11494__$1 = (state_11517[(2)]);
var inst_11495 = (inst_11494__$1 == null);
var state_11517__$1 = (function (){var statearr_11521 = state_11517;
(statearr_11521[(7)] = inst_11494__$1);

return statearr_11521;
})();
if(cljs.core.truth_(inst_11495)){
var statearr_11522_13127 = state_11517__$1;
(statearr_11522_13127[(1)] = (5));

} else {
var statearr_11523_13128 = state_11517__$1;
(statearr_11523_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (13))){
var state_11517__$1 = state_11517;
var statearr_11524_13129 = state_11517__$1;
(statearr_11524_13129[(2)] = null);

(statearr_11524_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (6))){
var inst_11494 = (state_11517[(7)]);
var inst_11500 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11494) : p.call(null,inst_11494));
var state_11517__$1 = state_11517;
if(cljs.core.truth_(inst_11500)){
var statearr_11525_13130 = state_11517__$1;
(statearr_11525_13130[(1)] = (9));

} else {
var statearr_11526_13131 = state_11517__$1;
(statearr_11526_13131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (3))){
var inst_11515 = (state_11517[(2)]);
var state_11517__$1 = state_11517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11517__$1,inst_11515);
} else {
if((state_val_11518 === (12))){
var state_11517__$1 = state_11517;
var statearr_11527_13132 = state_11517__$1;
(statearr_11527_13132[(2)] = null);

(statearr_11527_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (2))){
var state_11517__$1 = state_11517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11517__$1,(4),ch);
} else {
if((state_val_11518 === (11))){
var inst_11494 = (state_11517[(7)]);
var inst_11504 = (state_11517[(2)]);
var state_11517__$1 = state_11517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11517__$1,(8),inst_11504,inst_11494);
} else {
if((state_val_11518 === (9))){
var state_11517__$1 = state_11517;
var statearr_11534_13133 = state_11517__$1;
(statearr_11534_13133[(2)] = tc);

(statearr_11534_13133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (5))){
var inst_11497 = cljs.core.async.close_BANG_(tc);
var inst_11498 = cljs.core.async.close_BANG_(fc);
var state_11517__$1 = (function (){var statearr_11535 = state_11517;
(statearr_11535[(8)] = inst_11497);

return statearr_11535;
})();
var statearr_11536_13134 = state_11517__$1;
(statearr_11536_13134[(2)] = inst_11498);

(statearr_11536_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (14))){
var inst_11511 = (state_11517[(2)]);
var state_11517__$1 = state_11517;
var statearr_11537_13135 = state_11517__$1;
(statearr_11537_13135[(2)] = inst_11511);

(statearr_11537_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (10))){
var state_11517__$1 = state_11517;
var statearr_11538_13136 = state_11517__$1;
(statearr_11538_13136[(2)] = fc);

(statearr_11538_13136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11518 === (8))){
var inst_11506 = (state_11517[(2)]);
var state_11517__$1 = state_11517;
if(cljs.core.truth_(inst_11506)){
var statearr_11539_13137 = state_11517__$1;
(statearr_11539_13137[(1)] = (12));

} else {
var statearr_11540_13138 = state_11517__$1;
(statearr_11540_13138[(1)] = (13));

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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_11541 = [null,null,null,null,null,null,null,null,null];
(statearr_11541[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_11541[(1)] = (1));

return statearr_11541;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_11517){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11517);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11542){var ex__10946__auto__ = e11542;
var statearr_11543_13139 = state_11517;
(statearr_11543_13139[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11517[(4)]))){
var statearr_11544_13140 = state_11517;
(statearr_11544_13140[(1)] = cljs.core.first((state_11517[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_11517;
state_11517 = G__13141;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_11517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_11517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11545 = f__11013__auto__();
(statearr_11545[(6)] = c__11012__auto___13124);

return statearr_11545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var c__11012__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11580){
var state_val_11581 = (state_11580[(1)]);
if((state_val_11581 === (7))){
var inst_11563 = (state_11580[(2)]);
var state_11580__$1 = state_11580;
var statearr_11588_13142 = state_11580__$1;
(statearr_11588_13142[(2)] = inst_11563);

(statearr_11588_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11581 === (1))){
var inst_11546 = init;
var inst_11547 = inst_11546;
var state_11580__$1 = (function (){var statearr_11589 = state_11580;
(statearr_11589[(7)] = inst_11547);

return statearr_11589;
})();
var statearr_11590_13143 = state_11580__$1;
(statearr_11590_13143[(2)] = null);

(statearr_11590_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11581 === (4))){
var inst_11550 = (state_11580[(8)]);
var inst_11550__$1 = (state_11580[(2)]);
var inst_11551 = (inst_11550__$1 == null);
var state_11580__$1 = (function (){var statearr_11591 = state_11580;
(statearr_11591[(8)] = inst_11550__$1);

return statearr_11591;
})();
if(cljs.core.truth_(inst_11551)){
var statearr_11592_13144 = state_11580__$1;
(statearr_11592_13144[(1)] = (5));

} else {
var statearr_11593_13145 = state_11580__$1;
(statearr_11593_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11581 === (6))){
var inst_11547 = (state_11580[(7)]);
var inst_11550 = (state_11580[(8)]);
var inst_11554 = (state_11580[(9)]);
var inst_11554__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11547,inst_11550) : f.call(null,inst_11547,inst_11550));
var inst_11555 = cljs.core.reduced_QMARK_(inst_11554__$1);
var state_11580__$1 = (function (){var statearr_11595 = state_11580;
(statearr_11595[(9)] = inst_11554__$1);

return statearr_11595;
})();
if(inst_11555){
var statearr_11596_13146 = state_11580__$1;
(statearr_11596_13146[(1)] = (8));

} else {
var statearr_11597_13147 = state_11580__$1;
(statearr_11597_13147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11581 === (3))){
var inst_11578 = (state_11580[(2)]);
var state_11580__$1 = state_11580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11580__$1,inst_11578);
} else {
if((state_val_11581 === (2))){
var state_11580__$1 = state_11580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11580__$1,(4),ch);
} else {
if((state_val_11581 === (9))){
var inst_11554 = (state_11580[(9)]);
var inst_11547 = inst_11554;
var state_11580__$1 = (function (){var statearr_11611 = state_11580;
(statearr_11611[(7)] = inst_11547);

return statearr_11611;
})();
var statearr_11612_13148 = state_11580__$1;
(statearr_11612_13148[(2)] = null);

(statearr_11612_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11581 === (5))){
var inst_11547 = (state_11580[(7)]);
var state_11580__$1 = state_11580;
var statearr_11613_13149 = state_11580__$1;
(statearr_11613_13149[(2)] = inst_11547);

(statearr_11613_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11581 === (10))){
var inst_11561 = (state_11580[(2)]);
var state_11580__$1 = state_11580;
var statearr_11614_13150 = state_11580__$1;
(statearr_11614_13150[(2)] = inst_11561);

(statearr_11614_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11581 === (8))){
var inst_11554 = (state_11580[(9)]);
var inst_11557 = cljs.core.deref(inst_11554);
var state_11580__$1 = state_11580;
var statearr_11615_13151 = state_11580__$1;
(statearr_11615_13151[(2)] = inst_11557);

(statearr_11615_13151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10943__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10943__auto____0 = (function (){
var statearr_11616 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11616[(0)] = cljs$core$async$reduce_$_state_machine__10943__auto__);

(statearr_11616[(1)] = (1));

return statearr_11616;
});
var cljs$core$async$reduce_$_state_machine__10943__auto____1 = (function (state_11580){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11580);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11617){var ex__10946__auto__ = e11617;
var statearr_11618_13152 = state_11580;
(statearr_11618_13152[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11580[(4)]))){
var statearr_11619_13153 = state_11580;
(statearr_11619_13153[(1)] = cljs.core.first((state_11580[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_11580;
state_11580 = G__13154;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10943__auto__ = function(state_11580){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10943__auto____1.call(this,state_11580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10943__auto____0;
cljs$core$async$reduce_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10943__auto____1;
return cljs$core$async$reduce_$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11622 = f__11013__auto__();
(statearr_11622[(6)] = c__11012__auto__);

return statearr_11622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));

return c__11012__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11012__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11631){
var state_val_11632 = (state_11631[(1)]);
if((state_val_11632 === (1))){
var inst_11625 = cljs.core.async.reduce(f__$1,init,ch);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11631__$1,(2),inst_11625);
} else {
if((state_val_11632 === (2))){
var inst_11627 = (state_11631[(2)]);
var inst_11628 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11627) : f__$1.call(null,inst_11627));
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11631__$1,inst_11628);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10943__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10943__auto____0 = (function (){
var statearr_11639 = [null,null,null,null,null,null,null];
(statearr_11639[(0)] = cljs$core$async$transduce_$_state_machine__10943__auto__);

(statearr_11639[(1)] = (1));

return statearr_11639;
});
var cljs$core$async$transduce_$_state_machine__10943__auto____1 = (function (state_11631){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11631);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11640){var ex__10946__auto__ = e11640;
var statearr_11641_13155 = state_11631;
(statearr_11641_13155[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11631[(4)]))){
var statearr_11642_13156 = state_11631;
(statearr_11642_13156[(1)] = cljs.core.first((state_11631[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_11631;
state_11631 = G__13157;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10943__auto__ = function(state_11631){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10943__auto____1.call(this,state_11631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10943__auto____0;
cljs$core$async$transduce_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10943__auto____1;
return cljs$core$async$transduce_$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11646 = f__11013__auto__();
(statearr_11646[(6)] = c__11012__auto__);

return statearr_11646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));

return c__11012__auto__;
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
var G__11658 = arguments.length;
switch (G__11658) {
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
var c__11012__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11695){
var state_val_11696 = (state_11695[(1)]);
if((state_val_11696 === (7))){
var inst_11676 = (state_11695[(2)]);
var state_11695__$1 = state_11695;
var statearr_11697_13159 = state_11695__$1;
(statearr_11697_13159[(2)] = inst_11676);

(statearr_11697_13159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (1))){
var inst_11663 = cljs.core.seq(coll);
var inst_11664 = inst_11663;
var state_11695__$1 = (function (){var statearr_11698 = state_11695;
(statearr_11698[(7)] = inst_11664);

return statearr_11698;
})();
var statearr_11699_13160 = state_11695__$1;
(statearr_11699_13160[(2)] = null);

(statearr_11699_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (4))){
var inst_11664 = (state_11695[(7)]);
var inst_11674 = cljs.core.first(inst_11664);
var state_11695__$1 = state_11695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11695__$1,(7),ch,inst_11674);
} else {
if((state_val_11696 === (13))){
var inst_11688 = (state_11695[(2)]);
var state_11695__$1 = state_11695;
var statearr_11701_13161 = state_11695__$1;
(statearr_11701_13161[(2)] = inst_11688);

(statearr_11701_13161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (6))){
var inst_11679 = (state_11695[(2)]);
var state_11695__$1 = state_11695;
if(cljs.core.truth_(inst_11679)){
var statearr_11702_13162 = state_11695__$1;
(statearr_11702_13162[(1)] = (8));

} else {
var statearr_11703_13163 = state_11695__$1;
(statearr_11703_13163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (3))){
var inst_11692 = (state_11695[(2)]);
var state_11695__$1 = state_11695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11695__$1,inst_11692);
} else {
if((state_val_11696 === (12))){
var state_11695__$1 = state_11695;
var statearr_11704_13164 = state_11695__$1;
(statearr_11704_13164[(2)] = null);

(statearr_11704_13164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (2))){
var inst_11664 = (state_11695[(7)]);
var state_11695__$1 = state_11695;
if(cljs.core.truth_(inst_11664)){
var statearr_11705_13165 = state_11695__$1;
(statearr_11705_13165[(1)] = (4));

} else {
var statearr_11706_13166 = state_11695__$1;
(statearr_11706_13166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (11))){
var inst_11685 = cljs.core.async.close_BANG_(ch);
var state_11695__$1 = state_11695;
var statearr_11707_13167 = state_11695__$1;
(statearr_11707_13167[(2)] = inst_11685);

(statearr_11707_13167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (9))){
var state_11695__$1 = state_11695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11709_13168 = state_11695__$1;
(statearr_11709_13168[(1)] = (11));

} else {
var statearr_11710_13169 = state_11695__$1;
(statearr_11710_13169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (5))){
var inst_11664 = (state_11695[(7)]);
var state_11695__$1 = state_11695;
var statearr_11711_13170 = state_11695__$1;
(statearr_11711_13170[(2)] = inst_11664);

(statearr_11711_13170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (10))){
var inst_11690 = (state_11695[(2)]);
var state_11695__$1 = state_11695;
var statearr_11712_13171 = state_11695__$1;
(statearr_11712_13171[(2)] = inst_11690);

(statearr_11712_13171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11696 === (8))){
var inst_11664 = (state_11695[(7)]);
var inst_11681 = cljs.core.next(inst_11664);
var inst_11664__$1 = inst_11681;
var state_11695__$1 = (function (){var statearr_11713 = state_11695;
(statearr_11713[(7)] = inst_11664__$1);

return statearr_11713;
})();
var statearr_11714_13172 = state_11695__$1;
(statearr_11714_13172[(2)] = null);

(statearr_11714_13172[(1)] = (2));


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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_11715 = [null,null,null,null,null,null,null,null];
(statearr_11715[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_11715[(1)] = (1));

return statearr_11715;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_11695){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11695);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e11716){var ex__10946__auto__ = e11716;
var statearr_11717_13173 = state_11695;
(statearr_11717_13173[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11695[(4)]))){
var statearr_11718_13174 = state_11695;
(statearr_11718_13174[(1)] = cljs.core.first((state_11695[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13175 = state_11695;
state_11695 = G__13175;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_11695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_11695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_11721 = f__11013__auto__();
(statearr_11721[(6)] = c__11012__auto__);

return statearr_11721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));

return c__11012__auto__;
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
var G__11723 = arguments.length;
switch (G__11723) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11738 = (function (ch,cs,meta11739){
this.ch = ch;
this.cs = cs;
this.meta11739 = meta11739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11740,meta11739__$1){
var self__ = this;
var _11740__$1 = this;
return (new cljs.core.async.t_cljs$core$async11738(self__.ch,self__.cs,meta11739__$1));
}));

(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11740){
var self__ = this;
var _11740__$1 = this;
return self__.meta11739;
}));

(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11738.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11739","meta11739",667670610,null)], null);
}));

(cljs.core.async.t_cljs$core$async11738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11738");

(cljs.core.async.t_cljs$core$async11738.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11738.
 */
cljs.core.async.__GT_t_cljs$core$async11738 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11738(ch__$1,cs__$1,meta11739){
return (new cljs.core.async.t_cljs$core$async11738(ch__$1,cs__$1,meta11739));
});

}

return (new cljs.core.async.t_cljs$core$async11738(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11012__auto___13181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_11887){
var state_val_11890 = (state_11887[(1)]);
if((state_val_11890 === (7))){
var inst_11881 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11892_13182 = state_11887__$1;
(statearr_11892_13182[(2)] = inst_11881);

(statearr_11892_13182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (20))){
var inst_11785 = (state_11887[(7)]);
var inst_11797 = cljs.core.first(inst_11785);
var inst_11798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11797,(0),null);
var inst_11799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11797,(1),null);
var state_11887__$1 = (function (){var statearr_11893 = state_11887;
(statearr_11893[(8)] = inst_11798);

return statearr_11893;
})();
if(cljs.core.truth_(inst_11799)){
var statearr_11894_13183 = state_11887__$1;
(statearr_11894_13183[(1)] = (22));

} else {
var statearr_11896_13184 = state_11887__$1;
(statearr_11896_13184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (27))){
var inst_11834 = (state_11887[(9)]);
var inst_11829 = (state_11887[(10)]);
var inst_11827 = (state_11887[(11)]);
var inst_11754 = (state_11887[(12)]);
var inst_11834__$1 = cljs.core._nth(inst_11827,inst_11829);
var inst_11835 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11834__$1,inst_11754,done);
var state_11887__$1 = (function (){var statearr_11901 = state_11887;
(statearr_11901[(9)] = inst_11834__$1);

return statearr_11901;
})();
if(cljs.core.truth_(inst_11835)){
var statearr_11902_13185 = state_11887__$1;
(statearr_11902_13185[(1)] = (30));

} else {
var statearr_11903_13186 = state_11887__$1;
(statearr_11903_13186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (1))){
var state_11887__$1 = state_11887;
var statearr_11904_13187 = state_11887__$1;
(statearr_11904_13187[(2)] = null);

(statearr_11904_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (24))){
var inst_11785 = (state_11887[(7)]);
var inst_11804 = (state_11887[(2)]);
var inst_11805 = cljs.core.next(inst_11785);
var inst_11763 = inst_11805;
var inst_11764 = null;
var inst_11765 = (0);
var inst_11766 = (0);
var state_11887__$1 = (function (){var statearr_11906 = state_11887;
(statearr_11906[(13)] = inst_11765);

(statearr_11906[(14)] = inst_11804);

(statearr_11906[(15)] = inst_11763);

(statearr_11906[(16)] = inst_11764);

(statearr_11906[(17)] = inst_11766);

return statearr_11906;
})();
var statearr_11907_13188 = state_11887__$1;
(statearr_11907_13188[(2)] = null);

(statearr_11907_13188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (39))){
var state_11887__$1 = state_11887;
var statearr_11915_13189 = state_11887__$1;
(statearr_11915_13189[(2)] = null);

(statearr_11915_13189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (4))){
var inst_11754 = (state_11887[(12)]);
var inst_11754__$1 = (state_11887[(2)]);
var inst_11755 = (inst_11754__$1 == null);
var state_11887__$1 = (function (){var statearr_11916 = state_11887;
(statearr_11916[(12)] = inst_11754__$1);

return statearr_11916;
})();
if(cljs.core.truth_(inst_11755)){
var statearr_11917_13190 = state_11887__$1;
(statearr_11917_13190[(1)] = (5));

} else {
var statearr_11918_13191 = state_11887__$1;
(statearr_11918_13191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (15))){
var inst_11765 = (state_11887[(13)]);
var inst_11763 = (state_11887[(15)]);
var inst_11764 = (state_11887[(16)]);
var inst_11766 = (state_11887[(17)]);
var inst_11781 = (state_11887[(2)]);
var inst_11782 = (inst_11766 + (1));
var tmp11911 = inst_11765;
var tmp11912 = inst_11763;
var tmp11913 = inst_11764;
var inst_11763__$1 = tmp11912;
var inst_11764__$1 = tmp11913;
var inst_11765__$1 = tmp11911;
var inst_11766__$1 = inst_11782;
var state_11887__$1 = (function (){var statearr_11919 = state_11887;
(statearr_11919[(13)] = inst_11765__$1);

(statearr_11919[(15)] = inst_11763__$1);

(statearr_11919[(18)] = inst_11781);

(statearr_11919[(16)] = inst_11764__$1);

(statearr_11919[(17)] = inst_11766__$1);

return statearr_11919;
})();
var statearr_11920_13192 = state_11887__$1;
(statearr_11920_13192[(2)] = null);

(statearr_11920_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (21))){
var inst_11808 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11924_13193 = state_11887__$1;
(statearr_11924_13193[(2)] = inst_11808);

(statearr_11924_13193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (31))){
var inst_11834 = (state_11887[(9)]);
var inst_11838 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11834);
var state_11887__$1 = state_11887;
var statearr_11925_13194 = state_11887__$1;
(statearr_11925_13194[(2)] = inst_11838);

(statearr_11925_13194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (32))){
var inst_11826 = (state_11887[(19)]);
var inst_11828 = (state_11887[(20)]);
var inst_11829 = (state_11887[(10)]);
var inst_11827 = (state_11887[(11)]);
var inst_11840 = (state_11887[(2)]);
var inst_11841 = (inst_11829 + (1));
var tmp11921 = inst_11826;
var tmp11922 = inst_11828;
var tmp11923 = inst_11827;
var inst_11826__$1 = tmp11921;
var inst_11827__$1 = tmp11923;
var inst_11828__$1 = tmp11922;
var inst_11829__$1 = inst_11841;
var state_11887__$1 = (function (){var statearr_11926 = state_11887;
(statearr_11926[(19)] = inst_11826__$1);

(statearr_11926[(20)] = inst_11828__$1);

(statearr_11926[(10)] = inst_11829__$1);

(statearr_11926[(11)] = inst_11827__$1);

(statearr_11926[(21)] = inst_11840);

return statearr_11926;
})();
var statearr_11927_13195 = state_11887__$1;
(statearr_11927_13195[(2)] = null);

(statearr_11927_13195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (40))){
var inst_11853 = (state_11887[(22)]);
var inst_11857 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11853);
var state_11887__$1 = state_11887;
var statearr_11928_13196 = state_11887__$1;
(statearr_11928_13196[(2)] = inst_11857);

(statearr_11928_13196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (33))){
var inst_11844 = (state_11887[(23)]);
var inst_11846 = cljs.core.chunked_seq_QMARK_(inst_11844);
var state_11887__$1 = state_11887;
if(inst_11846){
var statearr_11929_13197 = state_11887__$1;
(statearr_11929_13197[(1)] = (36));

} else {
var statearr_11930_13198 = state_11887__$1;
(statearr_11930_13198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (13))){
var inst_11775 = (state_11887[(24)]);
var inst_11778 = cljs.core.async.close_BANG_(inst_11775);
var state_11887__$1 = state_11887;
var statearr_11931_13199 = state_11887__$1;
(statearr_11931_13199[(2)] = inst_11778);

(statearr_11931_13199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (22))){
var inst_11798 = (state_11887[(8)]);
var inst_11801 = cljs.core.async.close_BANG_(inst_11798);
var state_11887__$1 = state_11887;
var statearr_11932_13200 = state_11887__$1;
(statearr_11932_13200[(2)] = inst_11801);

(statearr_11932_13200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (36))){
var inst_11844 = (state_11887[(23)]);
var inst_11848 = cljs.core.chunk_first(inst_11844);
var inst_11849 = cljs.core.chunk_rest(inst_11844);
var inst_11850 = cljs.core.count(inst_11848);
var inst_11826 = inst_11849;
var inst_11827 = inst_11848;
var inst_11828 = inst_11850;
var inst_11829 = (0);
var state_11887__$1 = (function (){var statearr_11933 = state_11887;
(statearr_11933[(19)] = inst_11826);

(statearr_11933[(20)] = inst_11828);

(statearr_11933[(10)] = inst_11829);

(statearr_11933[(11)] = inst_11827);

return statearr_11933;
})();
var statearr_11934_13201 = state_11887__$1;
(statearr_11934_13201[(2)] = null);

(statearr_11934_13201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (41))){
var inst_11844 = (state_11887[(23)]);
var inst_11859 = (state_11887[(2)]);
var inst_11860 = cljs.core.next(inst_11844);
var inst_11826 = inst_11860;
var inst_11827 = null;
var inst_11828 = (0);
var inst_11829 = (0);
var state_11887__$1 = (function (){var statearr_11935 = state_11887;
(statearr_11935[(19)] = inst_11826);

(statearr_11935[(20)] = inst_11828);

(statearr_11935[(10)] = inst_11829);

(statearr_11935[(11)] = inst_11827);

(statearr_11935[(25)] = inst_11859);

return statearr_11935;
})();
var statearr_11936_13202 = state_11887__$1;
(statearr_11936_13202[(2)] = null);

(statearr_11936_13202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (43))){
var state_11887__$1 = state_11887;
var statearr_11937_13203 = state_11887__$1;
(statearr_11937_13203[(2)] = null);

(statearr_11937_13203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (29))){
var inst_11868 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11938_13204 = state_11887__$1;
(statearr_11938_13204[(2)] = inst_11868);

(statearr_11938_13204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (44))){
var inst_11878 = (state_11887[(2)]);
var state_11887__$1 = (function (){var statearr_11939 = state_11887;
(statearr_11939[(26)] = inst_11878);

return statearr_11939;
})();
var statearr_11940_13205 = state_11887__$1;
(statearr_11940_13205[(2)] = null);

(statearr_11940_13205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (6))){
var inst_11818 = (state_11887[(27)]);
var inst_11817 = cljs.core.deref(cs);
var inst_11818__$1 = cljs.core.keys(inst_11817);
var inst_11819 = cljs.core.count(inst_11818__$1);
var inst_11820 = cljs.core.reset_BANG_(dctr,inst_11819);
var inst_11825 = cljs.core.seq(inst_11818__$1);
var inst_11826 = inst_11825;
var inst_11827 = null;
var inst_11828 = (0);
var inst_11829 = (0);
var state_11887__$1 = (function (){var statearr_11941 = state_11887;
(statearr_11941[(19)] = inst_11826);

(statearr_11941[(27)] = inst_11818__$1);

(statearr_11941[(20)] = inst_11828);

(statearr_11941[(10)] = inst_11829);

(statearr_11941[(28)] = inst_11820);

(statearr_11941[(11)] = inst_11827);

return statearr_11941;
})();
var statearr_11942_13206 = state_11887__$1;
(statearr_11942_13206[(2)] = null);

(statearr_11942_13206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (28))){
var inst_11844 = (state_11887[(23)]);
var inst_11826 = (state_11887[(19)]);
var inst_11844__$1 = cljs.core.seq(inst_11826);
var state_11887__$1 = (function (){var statearr_11946 = state_11887;
(statearr_11946[(23)] = inst_11844__$1);

return statearr_11946;
})();
if(inst_11844__$1){
var statearr_11947_13207 = state_11887__$1;
(statearr_11947_13207[(1)] = (33));

} else {
var statearr_11950_13208 = state_11887__$1;
(statearr_11950_13208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (25))){
var inst_11828 = (state_11887[(20)]);
var inst_11829 = (state_11887[(10)]);
var inst_11831 = (inst_11829 < inst_11828);
var inst_11832 = inst_11831;
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11832)){
var statearr_11954_13209 = state_11887__$1;
(statearr_11954_13209[(1)] = (27));

} else {
var statearr_11955_13210 = state_11887__$1;
(statearr_11955_13210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (34))){
var state_11887__$1 = state_11887;
var statearr_11958_13211 = state_11887__$1;
(statearr_11958_13211[(2)] = null);

(statearr_11958_13211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (17))){
var state_11887__$1 = state_11887;
var statearr_11959_13212 = state_11887__$1;
(statearr_11959_13212[(2)] = null);

(statearr_11959_13212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (3))){
var inst_11883 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11887__$1,inst_11883);
} else {
if((state_val_11890 === (12))){
var inst_11813 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11960_13213 = state_11887__$1;
(statearr_11960_13213[(2)] = inst_11813);

(statearr_11960_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (2))){
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11887__$1,(4),ch);
} else {
if((state_val_11890 === (23))){
var state_11887__$1 = state_11887;
var statearr_11961_13214 = state_11887__$1;
(statearr_11961_13214[(2)] = null);

(statearr_11961_13214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (35))){
var inst_11866 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11962_13215 = state_11887__$1;
(statearr_11962_13215[(2)] = inst_11866);

(statearr_11962_13215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (19))){
var inst_11785 = (state_11887[(7)]);
var inst_11789 = cljs.core.chunk_first(inst_11785);
var inst_11790 = cljs.core.chunk_rest(inst_11785);
var inst_11791 = cljs.core.count(inst_11789);
var inst_11763 = inst_11790;
var inst_11764 = inst_11789;
var inst_11765 = inst_11791;
var inst_11766 = (0);
var state_11887__$1 = (function (){var statearr_11963 = state_11887;
(statearr_11963[(13)] = inst_11765);

(statearr_11963[(15)] = inst_11763);

(statearr_11963[(16)] = inst_11764);

(statearr_11963[(17)] = inst_11766);

return statearr_11963;
})();
var statearr_11964_13216 = state_11887__$1;
(statearr_11964_13216[(2)] = null);

(statearr_11964_13216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (11))){
var inst_11785 = (state_11887[(7)]);
var inst_11763 = (state_11887[(15)]);
var inst_11785__$1 = cljs.core.seq(inst_11763);
var state_11887__$1 = (function (){var statearr_11965 = state_11887;
(statearr_11965[(7)] = inst_11785__$1);

return statearr_11965;
})();
if(inst_11785__$1){
var statearr_11966_13217 = state_11887__$1;
(statearr_11966_13217[(1)] = (16));

} else {
var statearr_11967_13218 = state_11887__$1;
(statearr_11967_13218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (9))){
var inst_11815 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11971_13219 = state_11887__$1;
(statearr_11971_13219[(2)] = inst_11815);

(statearr_11971_13219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (5))){
var inst_11761 = cljs.core.deref(cs);
var inst_11762 = cljs.core.seq(inst_11761);
var inst_11763 = inst_11762;
var inst_11764 = null;
var inst_11765 = (0);
var inst_11766 = (0);
var state_11887__$1 = (function (){var statearr_11972 = state_11887;
(statearr_11972[(13)] = inst_11765);

(statearr_11972[(15)] = inst_11763);

(statearr_11972[(16)] = inst_11764);

(statearr_11972[(17)] = inst_11766);

return statearr_11972;
})();
var statearr_11977_13220 = state_11887__$1;
(statearr_11977_13220[(2)] = null);

(statearr_11977_13220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (14))){
var state_11887__$1 = state_11887;
var statearr_11982_13221 = state_11887__$1;
(statearr_11982_13221[(2)] = null);

(statearr_11982_13221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (45))){
var inst_11874 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11987_13222 = state_11887__$1;
(statearr_11987_13222[(2)] = inst_11874);

(statearr_11987_13222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (26))){
var inst_11818 = (state_11887[(27)]);
var inst_11870 = (state_11887[(2)]);
var inst_11871 = cljs.core.seq(inst_11818);
var state_11887__$1 = (function (){var statearr_11988 = state_11887;
(statearr_11988[(29)] = inst_11870);

return statearr_11988;
})();
if(inst_11871){
var statearr_11989_13223 = state_11887__$1;
(statearr_11989_13223[(1)] = (42));

} else {
var statearr_11990_13224 = state_11887__$1;
(statearr_11990_13224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (16))){
var inst_11785 = (state_11887[(7)]);
var inst_11787 = cljs.core.chunked_seq_QMARK_(inst_11785);
var state_11887__$1 = state_11887;
if(inst_11787){
var statearr_11991_13225 = state_11887__$1;
(statearr_11991_13225[(1)] = (19));

} else {
var statearr_11992_13226 = state_11887__$1;
(statearr_11992_13226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (38))){
var inst_11863 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11993_13227 = state_11887__$1;
(statearr_11993_13227[(2)] = inst_11863);

(statearr_11993_13227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (30))){
var state_11887__$1 = state_11887;
var statearr_11994_13228 = state_11887__$1;
(statearr_11994_13228[(2)] = null);

(statearr_11994_13228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (10))){
var inst_11764 = (state_11887[(16)]);
var inst_11766 = (state_11887[(17)]);
var inst_11774 = cljs.core._nth(inst_11764,inst_11766);
var inst_11775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11774,(0),null);
var inst_11776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11774,(1),null);
var state_11887__$1 = (function (){var statearr_11995 = state_11887;
(statearr_11995[(24)] = inst_11775);

return statearr_11995;
})();
if(cljs.core.truth_(inst_11776)){
var statearr_11996_13229 = state_11887__$1;
(statearr_11996_13229[(1)] = (13));

} else {
var statearr_11997_13230 = state_11887__$1;
(statearr_11997_13230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (18))){
var inst_11811 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11998_13231 = state_11887__$1;
(statearr_11998_13231[(2)] = inst_11811);

(statearr_11998_13231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (42))){
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11887__$1,(45),dchan);
} else {
if((state_val_11890 === (37))){
var inst_11844 = (state_11887[(23)]);
var inst_11853 = (state_11887[(22)]);
var inst_11754 = (state_11887[(12)]);
var inst_11853__$1 = cljs.core.first(inst_11844);
var inst_11854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11853__$1,inst_11754,done);
var state_11887__$1 = (function (){var statearr_11999 = state_11887;
(statearr_11999[(22)] = inst_11853__$1);

return statearr_11999;
})();
if(cljs.core.truth_(inst_11854)){
var statearr_12000_13232 = state_11887__$1;
(statearr_12000_13232[(1)] = (39));

} else {
var statearr_12001_13233 = state_11887__$1;
(statearr_12001_13233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (8))){
var inst_11765 = (state_11887[(13)]);
var inst_11766 = (state_11887[(17)]);
var inst_11768 = (inst_11766 < inst_11765);
var inst_11769 = inst_11768;
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11769)){
var statearr_12002_13234 = state_11887__$1;
(statearr_12002_13234[(1)] = (10));

} else {
var statearr_12003_13235 = state_11887__$1;
(statearr_12003_13235[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10943__auto__ = null;
var cljs$core$async$mult_$_state_machine__10943__auto____0 = (function (){
var statearr_12004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12004[(0)] = cljs$core$async$mult_$_state_machine__10943__auto__);

(statearr_12004[(1)] = (1));

return statearr_12004;
});
var cljs$core$async$mult_$_state_machine__10943__auto____1 = (function (state_11887){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_11887);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12005){var ex__10946__auto__ = e12005;
var statearr_12006_13236 = state_11887;
(statearr_12006_13236[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_11887[(4)]))){
var statearr_12007_13237 = state_11887;
(statearr_12007_13237[(1)] = cljs.core.first((state_11887[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13238 = state_11887;
state_11887 = G__13238;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10943__auto__ = function(state_11887){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10943__auto____1.call(this,state_11887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10943__auto____0;
cljs$core$async$mult_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10943__auto____1;
return cljs$core$async$mult_$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12008 = f__11013__auto__();
(statearr_12008[(6)] = c__11012__auto___13181);

return statearr_12008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var G__12010 = arguments.length;
switch (G__12010) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12019){
var map__12020 = p__12019;
var map__12020__$1 = (((((!((map__12020 == null))))?(((((map__12020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12020):map__12020);
var opts = map__12020__$1;
var statearr_12022_13248 = state;
(statearr_12022_13248[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12027_13249 = state;
(statearr_12027_13249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12032_13250 = state;
(statearr_12032_13250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12015){
var G__12016 = cljs.core.first(seq12015);
var seq12015__$1 = cljs.core.next(seq12015);
var G__12017 = cljs.core.first(seq12015__$1);
var seq12015__$2 = cljs.core.next(seq12015__$1);
var G__12018 = cljs.core.first(seq12015__$2);
var seq12015__$3 = cljs.core.next(seq12015__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12016,G__12017,G__12018,seq12015__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12037 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12038){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12038 = meta12038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12039,meta12038__$1){
var self__ = this;
var _12039__$1 = this;
return (new cljs.core.async.t_cljs$core$async12037(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12038__$1));
}));

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12039){
var self__ = this;
var _12039__$1 = this;
return self__.meta12038;
}));

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12037.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12038","meta12038",996851773,null)], null);
}));

(cljs.core.async.t_cljs$core$async12037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12037");

(cljs.core.async.t_cljs$core$async12037.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12037.
 */
cljs.core.async.__GT_t_cljs$core$async12037 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12038){
return (new cljs.core.async.t_cljs$core$async12037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12038));
});

}

return (new cljs.core.async.t_cljs$core$async12037(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11012__auto___13251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12151){
var state_val_12152 = (state_12151[(1)]);
if((state_val_12152 === (7))){
var inst_12065 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12157_13252 = state_12151__$1;
(statearr_12157_13252[(2)] = inst_12065);

(statearr_12157_13252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (20))){
var inst_12078 = (state_12151[(7)]);
var state_12151__$1 = state_12151;
var statearr_12159_13253 = state_12151__$1;
(statearr_12159_13253[(2)] = inst_12078);

(statearr_12159_13253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (27))){
var state_12151__$1 = state_12151;
var statearr_12160_13254 = state_12151__$1;
(statearr_12160_13254[(2)] = null);

(statearr_12160_13254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (1))){
var inst_12050 = (state_12151[(8)]);
var inst_12050__$1 = calc_state();
var inst_12052 = (inst_12050__$1 == null);
var inst_12053 = cljs.core.not(inst_12052);
var state_12151__$1 = (function (){var statearr_12163 = state_12151;
(statearr_12163[(8)] = inst_12050__$1);

return statearr_12163;
})();
if(inst_12053){
var statearr_12165_13255 = state_12151__$1;
(statearr_12165_13255[(1)] = (2));

} else {
var statearr_12166_13256 = state_12151__$1;
(statearr_12166_13256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (24))){
var inst_12111 = (state_12151[(9)]);
var inst_12125 = (state_12151[(10)]);
var inst_12102 = (state_12151[(11)]);
var inst_12125__$1 = (inst_12102.cljs$core$IFn$_invoke$arity$1 ? inst_12102.cljs$core$IFn$_invoke$arity$1(inst_12111) : inst_12102.call(null,inst_12111));
var state_12151__$1 = (function (){var statearr_12167 = state_12151;
(statearr_12167[(10)] = inst_12125__$1);

return statearr_12167;
})();
if(cljs.core.truth_(inst_12125__$1)){
var statearr_12168_13257 = state_12151__$1;
(statearr_12168_13257[(1)] = (29));

} else {
var statearr_12169_13258 = state_12151__$1;
(statearr_12169_13258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (4))){
var inst_12068 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12068)){
var statearr_12170_13259 = state_12151__$1;
(statearr_12170_13259[(1)] = (8));

} else {
var statearr_12171_13260 = state_12151__$1;
(statearr_12171_13260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (15))){
var inst_12096 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12096)){
var statearr_12172_13261 = state_12151__$1;
(statearr_12172_13261[(1)] = (19));

} else {
var statearr_12173_13262 = state_12151__$1;
(statearr_12173_13262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (21))){
var inst_12101 = (state_12151[(12)]);
var inst_12101__$1 = (state_12151[(2)]);
var inst_12102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12101__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12101__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12101__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12151__$1 = (function (){var statearr_12189 = state_12151;
(statearr_12189[(13)] = inst_12103);

(statearr_12189[(12)] = inst_12101__$1);

(statearr_12189[(11)] = inst_12102);

return statearr_12189;
})();
return cljs.core.async.ioc_alts_BANG_(state_12151__$1,(22),inst_12104);
} else {
if((state_val_12152 === (31))){
var inst_12133 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12133)){
var statearr_12190_13263 = state_12151__$1;
(statearr_12190_13263[(1)] = (32));

} else {
var statearr_12191_13264 = state_12151__$1;
(statearr_12191_13264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (32))){
var inst_12110 = (state_12151[(14)]);
var state_12151__$1 = state_12151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12151__$1,(35),out,inst_12110);
} else {
if((state_val_12152 === (33))){
var inst_12101 = (state_12151[(12)]);
var inst_12078 = inst_12101;
var state_12151__$1 = (function (){var statearr_12192 = state_12151;
(statearr_12192[(7)] = inst_12078);

return statearr_12192;
})();
var statearr_12193_13265 = state_12151__$1;
(statearr_12193_13265[(2)] = null);

(statearr_12193_13265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (13))){
var inst_12078 = (state_12151[(7)]);
var inst_12085 = inst_12078.cljs$lang$protocol_mask$partition0$;
var inst_12086 = (inst_12085 & (64));
var inst_12087 = inst_12078.cljs$core$ISeq$;
var inst_12088 = (cljs.core.PROTOCOL_SENTINEL === inst_12087);
var inst_12089 = ((inst_12086) || (inst_12088));
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12089)){
var statearr_12194_13266 = state_12151__$1;
(statearr_12194_13266[(1)] = (16));

} else {
var statearr_12195_13267 = state_12151__$1;
(statearr_12195_13267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (22))){
var inst_12110 = (state_12151[(14)]);
var inst_12111 = (state_12151[(9)]);
var inst_12109 = (state_12151[(2)]);
var inst_12110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12109,(0),null);
var inst_12111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12109,(1),null);
var inst_12112 = (inst_12110__$1 == null);
var inst_12113 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12111__$1,change);
var inst_12114 = ((inst_12112) || (inst_12113));
var state_12151__$1 = (function (){var statearr_12196 = state_12151;
(statearr_12196[(14)] = inst_12110__$1);

(statearr_12196[(9)] = inst_12111__$1);

return statearr_12196;
})();
if(cljs.core.truth_(inst_12114)){
var statearr_12197_13268 = state_12151__$1;
(statearr_12197_13268[(1)] = (23));

} else {
var statearr_12198_13269 = state_12151__$1;
(statearr_12198_13269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (36))){
var inst_12101 = (state_12151[(12)]);
var inst_12078 = inst_12101;
var state_12151__$1 = (function (){var statearr_12199 = state_12151;
(statearr_12199[(7)] = inst_12078);

return statearr_12199;
})();
var statearr_12200_13270 = state_12151__$1;
(statearr_12200_13270[(2)] = null);

(statearr_12200_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (29))){
var inst_12125 = (state_12151[(10)]);
var state_12151__$1 = state_12151;
var statearr_12201_13271 = state_12151__$1;
(statearr_12201_13271[(2)] = inst_12125);

(statearr_12201_13271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (6))){
var state_12151__$1 = state_12151;
var statearr_12202_13272 = state_12151__$1;
(statearr_12202_13272[(2)] = false);

(statearr_12202_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (28))){
var inst_12121 = (state_12151[(2)]);
var inst_12122 = calc_state();
var inst_12078 = inst_12122;
var state_12151__$1 = (function (){var statearr_12203 = state_12151;
(statearr_12203[(15)] = inst_12121);

(statearr_12203[(7)] = inst_12078);

return statearr_12203;
})();
var statearr_12204_13273 = state_12151__$1;
(statearr_12204_13273[(2)] = null);

(statearr_12204_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (25))){
var inst_12147 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12205_13274 = state_12151__$1;
(statearr_12205_13274[(2)] = inst_12147);

(statearr_12205_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (34))){
var inst_12145 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12206_13275 = state_12151__$1;
(statearr_12206_13275[(2)] = inst_12145);

(statearr_12206_13275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (17))){
var state_12151__$1 = state_12151;
var statearr_12207_13276 = state_12151__$1;
(statearr_12207_13276[(2)] = false);

(statearr_12207_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (3))){
var state_12151__$1 = state_12151;
var statearr_12208_13277 = state_12151__$1;
(statearr_12208_13277[(2)] = false);

(statearr_12208_13277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (12))){
var inst_12149 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12151__$1,inst_12149);
} else {
if((state_val_12152 === (2))){
var inst_12050 = (state_12151[(8)]);
var inst_12057 = inst_12050.cljs$lang$protocol_mask$partition0$;
var inst_12058 = (inst_12057 & (64));
var inst_12059 = inst_12050.cljs$core$ISeq$;
var inst_12060 = (cljs.core.PROTOCOL_SENTINEL === inst_12059);
var inst_12061 = ((inst_12058) || (inst_12060));
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12061)){
var statearr_12209_13278 = state_12151__$1;
(statearr_12209_13278[(1)] = (5));

} else {
var statearr_12210_13279 = state_12151__$1;
(statearr_12210_13279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (23))){
var inst_12110 = (state_12151[(14)]);
var inst_12116 = (inst_12110 == null);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12116)){
var statearr_12211_13280 = state_12151__$1;
(statearr_12211_13280[(1)] = (26));

} else {
var statearr_12212_13281 = state_12151__$1;
(statearr_12212_13281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (35))){
var inst_12136 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12136)){
var statearr_12213_13282 = state_12151__$1;
(statearr_12213_13282[(1)] = (36));

} else {
var statearr_12214_13283 = state_12151__$1;
(statearr_12214_13283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (19))){
var inst_12078 = (state_12151[(7)]);
var inst_12098 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12078);
var state_12151__$1 = state_12151;
var statearr_12215_13284 = state_12151__$1;
(statearr_12215_13284[(2)] = inst_12098);

(statearr_12215_13284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (11))){
var inst_12078 = (state_12151[(7)]);
var inst_12082 = (inst_12078 == null);
var inst_12083 = cljs.core.not(inst_12082);
var state_12151__$1 = state_12151;
if(inst_12083){
var statearr_12216_13285 = state_12151__$1;
(statearr_12216_13285[(1)] = (13));

} else {
var statearr_12217_13286 = state_12151__$1;
(statearr_12217_13286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (9))){
var inst_12050 = (state_12151[(8)]);
var state_12151__$1 = state_12151;
var statearr_12218_13287 = state_12151__$1;
(statearr_12218_13287[(2)] = inst_12050);

(statearr_12218_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (5))){
var state_12151__$1 = state_12151;
var statearr_12219_13288 = state_12151__$1;
(statearr_12219_13288[(2)] = true);

(statearr_12219_13288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (14))){
var state_12151__$1 = state_12151;
var statearr_12220_13289 = state_12151__$1;
(statearr_12220_13289[(2)] = false);

(statearr_12220_13289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (26))){
var inst_12111 = (state_12151[(9)]);
var inst_12118 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12111);
var state_12151__$1 = state_12151;
var statearr_12221_13290 = state_12151__$1;
(statearr_12221_13290[(2)] = inst_12118);

(statearr_12221_13290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (16))){
var state_12151__$1 = state_12151;
var statearr_12222_13291 = state_12151__$1;
(statearr_12222_13291[(2)] = true);

(statearr_12222_13291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (38))){
var inst_12141 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12223_13292 = state_12151__$1;
(statearr_12223_13292[(2)] = inst_12141);

(statearr_12223_13292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (30))){
var inst_12111 = (state_12151[(9)]);
var inst_12103 = (state_12151[(13)]);
var inst_12102 = (state_12151[(11)]);
var inst_12128 = cljs.core.empty_QMARK_(inst_12102);
var inst_12129 = (inst_12103.cljs$core$IFn$_invoke$arity$1 ? inst_12103.cljs$core$IFn$_invoke$arity$1(inst_12111) : inst_12103.call(null,inst_12111));
var inst_12130 = cljs.core.not(inst_12129);
var inst_12131 = ((inst_12128) && (inst_12130));
var state_12151__$1 = state_12151;
var statearr_12228_13293 = state_12151__$1;
(statearr_12228_13293[(2)] = inst_12131);

(statearr_12228_13293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (10))){
var inst_12050 = (state_12151[(8)]);
var inst_12074 = (state_12151[(2)]);
var inst_12075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12074,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12074,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12074,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12078 = inst_12050;
var state_12151__$1 = (function (){var statearr_12229 = state_12151;
(statearr_12229[(16)] = inst_12077);

(statearr_12229[(17)] = inst_12075);

(statearr_12229[(18)] = inst_12076);

(statearr_12229[(7)] = inst_12078);

return statearr_12229;
})();
var statearr_12230_13294 = state_12151__$1;
(statearr_12230_13294[(2)] = null);

(statearr_12230_13294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (18))){
var inst_12093 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12231_13295 = state_12151__$1;
(statearr_12231_13295[(2)] = inst_12093);

(statearr_12231_13295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (37))){
var state_12151__$1 = state_12151;
var statearr_12232_13296 = state_12151__$1;
(statearr_12232_13296[(2)] = null);

(statearr_12232_13296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (8))){
var inst_12050 = (state_12151[(8)]);
var inst_12071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12050);
var state_12151__$1 = state_12151;
var statearr_12233_13297 = state_12151__$1;
(statearr_12233_13297[(2)] = inst_12071);

(statearr_12233_13297[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10943__auto__ = null;
var cljs$core$async$mix_$_state_machine__10943__auto____0 = (function (){
var statearr_12235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12235[(0)] = cljs$core$async$mix_$_state_machine__10943__auto__);

(statearr_12235[(1)] = (1));

return statearr_12235;
});
var cljs$core$async$mix_$_state_machine__10943__auto____1 = (function (state_12151){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12151);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12237){var ex__10946__auto__ = e12237;
var statearr_12238_13298 = state_12151;
(statearr_12238_13298[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12151[(4)]))){
var statearr_12239_13299 = state_12151;
(statearr_12239_13299[(1)] = cljs.core.first((state_12151[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_12151;
state_12151 = G__13300;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10943__auto__ = function(state_12151){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10943__auto____1.call(this,state_12151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10943__auto____0;
cljs$core$async$mix_$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10943__auto____1;
return cljs$core$async$mix_$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12241 = f__11013__auto__();
(statearr_12241[(6)] = c__11012__auto___13251);

return statearr_12241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var G__12254 = arguments.length;
switch (G__12254) {
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
var G__12257 = arguments.length;
switch (G__12257) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12255_SHARP_){
if(cljs.core.truth_((p1__12255_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12255_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12255_SHARP_.call(null,topic)))){
return p1__12255_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12255_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12258 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12259){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12259 = meta12259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12260,meta12259__$1){
var self__ = this;
var _12260__$1 = this;
return (new cljs.core.async.t_cljs$core$async12258(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12259__$1));
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12260){
var self__ = this;
var _12260__$1 = this;
return self__.meta12259;
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12259","meta12259",-856831041,null)], null);
}));

(cljs.core.async.t_cljs$core$async12258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12258");

(cljs.core.async.t_cljs$core$async12258.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12258.
 */
cljs.core.async.__GT_t_cljs$core$async12258 = (function cljs$core$async$__GT_t_cljs$core$async12258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12259){
return (new cljs.core.async.t_cljs$core$async12258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12259));
});

}

return (new cljs.core.async.t_cljs$core$async12258(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11012__auto___13307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12382){
var state_val_12383 = (state_12382[(1)]);
if((state_val_12383 === (7))){
var inst_12378 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12384_13308 = state_12382__$1;
(statearr_12384_13308[(2)] = inst_12378);

(statearr_12384_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (20))){
var state_12382__$1 = state_12382;
var statearr_12385_13309 = state_12382__$1;
(statearr_12385_13309[(2)] = null);

(statearr_12385_13309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (1))){
var state_12382__$1 = state_12382;
var statearr_12386_13310 = state_12382__$1;
(statearr_12386_13310[(2)] = null);

(statearr_12386_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (24))){
var inst_12361 = (state_12382[(7)]);
var inst_12370 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12361);
var state_12382__$1 = state_12382;
var statearr_12387_13311 = state_12382__$1;
(statearr_12387_13311[(2)] = inst_12370);

(statearr_12387_13311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (4))){
var inst_12308 = (state_12382[(8)]);
var inst_12308__$1 = (state_12382[(2)]);
var inst_12314 = (inst_12308__$1 == null);
var state_12382__$1 = (function (){var statearr_12388 = state_12382;
(statearr_12388[(8)] = inst_12308__$1);

return statearr_12388;
})();
if(cljs.core.truth_(inst_12314)){
var statearr_12389_13312 = state_12382__$1;
(statearr_12389_13312[(1)] = (5));

} else {
var statearr_12390_13313 = state_12382__$1;
(statearr_12390_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (15))){
var inst_12355 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12392_13314 = state_12382__$1;
(statearr_12392_13314[(2)] = inst_12355);

(statearr_12392_13314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (21))){
var inst_12375 = (state_12382[(2)]);
var state_12382__$1 = (function (){var statearr_12396 = state_12382;
(statearr_12396[(9)] = inst_12375);

return statearr_12396;
})();
var statearr_12397_13315 = state_12382__$1;
(statearr_12397_13315[(2)] = null);

(statearr_12397_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (13))){
var inst_12337 = (state_12382[(10)]);
var inst_12339 = cljs.core.chunked_seq_QMARK_(inst_12337);
var state_12382__$1 = state_12382;
if(inst_12339){
var statearr_12398_13316 = state_12382__$1;
(statearr_12398_13316[(1)] = (16));

} else {
var statearr_12399_13317 = state_12382__$1;
(statearr_12399_13317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (22))){
var inst_12367 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
if(cljs.core.truth_(inst_12367)){
var statearr_12400_13318 = state_12382__$1;
(statearr_12400_13318[(1)] = (23));

} else {
var statearr_12401_13319 = state_12382__$1;
(statearr_12401_13319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (6))){
var inst_12361 = (state_12382[(7)]);
var inst_12363 = (state_12382[(11)]);
var inst_12308 = (state_12382[(8)]);
var inst_12361__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12308) : topic_fn.call(null,inst_12308));
var inst_12362 = cljs.core.deref(mults);
var inst_12363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12362,inst_12361__$1);
var state_12382__$1 = (function (){var statearr_12402 = state_12382;
(statearr_12402[(7)] = inst_12361__$1);

(statearr_12402[(11)] = inst_12363__$1);

return statearr_12402;
})();
if(cljs.core.truth_(inst_12363__$1)){
var statearr_12403_13320 = state_12382__$1;
(statearr_12403_13320[(1)] = (19));

} else {
var statearr_12404_13321 = state_12382__$1;
(statearr_12404_13321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (25))){
var inst_12372 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12405_13322 = state_12382__$1;
(statearr_12405_13322[(2)] = inst_12372);

(statearr_12405_13322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (17))){
var inst_12337 = (state_12382[(10)]);
var inst_12346 = cljs.core.first(inst_12337);
var inst_12347 = cljs.core.async.muxch_STAR_(inst_12346);
var inst_12348 = cljs.core.async.close_BANG_(inst_12347);
var inst_12349 = cljs.core.next(inst_12337);
var inst_12323 = inst_12349;
var inst_12324 = null;
var inst_12325 = (0);
var inst_12326 = (0);
var state_12382__$1 = (function (){var statearr_12406 = state_12382;
(statearr_12406[(12)] = inst_12348);

(statearr_12406[(13)] = inst_12326);

(statearr_12406[(14)] = inst_12325);

(statearr_12406[(15)] = inst_12324);

(statearr_12406[(16)] = inst_12323);

return statearr_12406;
})();
var statearr_12407_13323 = state_12382__$1;
(statearr_12407_13323[(2)] = null);

(statearr_12407_13323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (3))){
var inst_12380 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12382__$1,inst_12380);
} else {
if((state_val_12383 === (12))){
var inst_12357 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12421_13324 = state_12382__$1;
(statearr_12421_13324[(2)] = inst_12357);

(statearr_12421_13324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (2))){
var state_12382__$1 = state_12382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12382__$1,(4),ch);
} else {
if((state_val_12383 === (23))){
var state_12382__$1 = state_12382;
var statearr_12422_13325 = state_12382__$1;
(statearr_12422_13325[(2)] = null);

(statearr_12422_13325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (19))){
var inst_12363 = (state_12382[(11)]);
var inst_12308 = (state_12382[(8)]);
var inst_12365 = cljs.core.async.muxch_STAR_(inst_12363);
var state_12382__$1 = state_12382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12382__$1,(22),inst_12365,inst_12308);
} else {
if((state_val_12383 === (11))){
var inst_12323 = (state_12382[(16)]);
var inst_12337 = (state_12382[(10)]);
var inst_12337__$1 = cljs.core.seq(inst_12323);
var state_12382__$1 = (function (){var statearr_12425 = state_12382;
(statearr_12425[(10)] = inst_12337__$1);

return statearr_12425;
})();
if(inst_12337__$1){
var statearr_12426_13326 = state_12382__$1;
(statearr_12426_13326[(1)] = (13));

} else {
var statearr_12427_13327 = state_12382__$1;
(statearr_12427_13327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (9))){
var inst_12359 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12429_13328 = state_12382__$1;
(statearr_12429_13328[(2)] = inst_12359);

(statearr_12429_13328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (5))){
var inst_12320 = cljs.core.deref(mults);
var inst_12321 = cljs.core.vals(inst_12320);
var inst_12322 = cljs.core.seq(inst_12321);
var inst_12323 = inst_12322;
var inst_12324 = null;
var inst_12325 = (0);
var inst_12326 = (0);
var state_12382__$1 = (function (){var statearr_12430 = state_12382;
(statearr_12430[(13)] = inst_12326);

(statearr_12430[(14)] = inst_12325);

(statearr_12430[(15)] = inst_12324);

(statearr_12430[(16)] = inst_12323);

return statearr_12430;
})();
var statearr_12432_13329 = state_12382__$1;
(statearr_12432_13329[(2)] = null);

(statearr_12432_13329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (14))){
var state_12382__$1 = state_12382;
var statearr_12436_13330 = state_12382__$1;
(statearr_12436_13330[(2)] = null);

(statearr_12436_13330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (16))){
var inst_12337 = (state_12382[(10)]);
var inst_12341 = cljs.core.chunk_first(inst_12337);
var inst_12342 = cljs.core.chunk_rest(inst_12337);
var inst_12343 = cljs.core.count(inst_12341);
var inst_12323 = inst_12342;
var inst_12324 = inst_12341;
var inst_12325 = inst_12343;
var inst_12326 = (0);
var state_12382__$1 = (function (){var statearr_12438 = state_12382;
(statearr_12438[(13)] = inst_12326);

(statearr_12438[(14)] = inst_12325);

(statearr_12438[(15)] = inst_12324);

(statearr_12438[(16)] = inst_12323);

return statearr_12438;
})();
var statearr_12439_13331 = state_12382__$1;
(statearr_12439_13331[(2)] = null);

(statearr_12439_13331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (10))){
var inst_12326 = (state_12382[(13)]);
var inst_12325 = (state_12382[(14)]);
var inst_12324 = (state_12382[(15)]);
var inst_12323 = (state_12382[(16)]);
var inst_12331 = cljs.core._nth(inst_12324,inst_12326);
var inst_12332 = cljs.core.async.muxch_STAR_(inst_12331);
var inst_12333 = cljs.core.async.close_BANG_(inst_12332);
var inst_12334 = (inst_12326 + (1));
var tmp12433 = inst_12325;
var tmp12434 = inst_12324;
var tmp12435 = inst_12323;
var inst_12323__$1 = tmp12435;
var inst_12324__$1 = tmp12434;
var inst_12325__$1 = tmp12433;
var inst_12326__$1 = inst_12334;
var state_12382__$1 = (function (){var statearr_12441 = state_12382;
(statearr_12441[(17)] = inst_12333);

(statearr_12441[(13)] = inst_12326__$1);

(statearr_12441[(14)] = inst_12325__$1);

(statearr_12441[(15)] = inst_12324__$1);

(statearr_12441[(16)] = inst_12323__$1);

return statearr_12441;
})();
var statearr_12443_13332 = state_12382__$1;
(statearr_12443_13332[(2)] = null);

(statearr_12443_13332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (18))){
var inst_12352 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12444_13333 = state_12382__$1;
(statearr_12444_13333[(2)] = inst_12352);

(statearr_12444_13333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (8))){
var inst_12326 = (state_12382[(13)]);
var inst_12325 = (state_12382[(14)]);
var inst_12328 = (inst_12326 < inst_12325);
var inst_12329 = inst_12328;
var state_12382__$1 = state_12382;
if(cljs.core.truth_(inst_12329)){
var statearr_12446_13334 = state_12382__$1;
(statearr_12446_13334[(1)] = (10));

} else {
var statearr_12447_13335 = state_12382__$1;
(statearr_12447_13335[(1)] = (11));

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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12449[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12449[(1)] = (1));

return statearr_12449;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12382){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12382);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12450){var ex__10946__auto__ = e12450;
var statearr_12451_13336 = state_12382;
(statearr_12451_13336[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12382[(4)]))){
var statearr_12452_13337 = state_12382;
(statearr_12452_13337[(1)] = cljs.core.first((state_12382[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_12382;
state_12382 = G__13338;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12453 = f__11013__auto__();
(statearr_12453[(6)] = c__11012__auto___13307);

return statearr_12453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var G__12455 = arguments.length;
switch (G__12455) {
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
var G__12459 = arguments.length;
switch (G__12459) {
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
var G__12461 = arguments.length;
switch (G__12461) {
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
var c__11012__auto___13342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12506){
var state_val_12507 = (state_12506[(1)]);
if((state_val_12507 === (7))){
var state_12506__$1 = state_12506;
var statearr_12509_13343 = state_12506__$1;
(statearr_12509_13343[(2)] = null);

(statearr_12509_13343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (1))){
var state_12506__$1 = state_12506;
var statearr_12510_13344 = state_12506__$1;
(statearr_12510_13344[(2)] = null);

(statearr_12510_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (4))){
var inst_12464 = (state_12506[(7)]);
var inst_12465 = (state_12506[(8)]);
var inst_12467 = (inst_12465 < inst_12464);
var state_12506__$1 = state_12506;
if(cljs.core.truth_(inst_12467)){
var statearr_12512_13345 = state_12506__$1;
(statearr_12512_13345[(1)] = (6));

} else {
var statearr_12513_13346 = state_12506__$1;
(statearr_12513_13346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (15))){
var inst_12491 = (state_12506[(9)]);
var inst_12496 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12491);
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12506__$1,(17),out,inst_12496);
} else {
if((state_val_12507 === (13))){
var inst_12491 = (state_12506[(9)]);
var inst_12491__$1 = (state_12506[(2)]);
var inst_12492 = cljs.core.some(cljs.core.nil_QMARK_,inst_12491__$1);
var state_12506__$1 = (function (){var statearr_12515 = state_12506;
(statearr_12515[(9)] = inst_12491__$1);

return statearr_12515;
})();
if(cljs.core.truth_(inst_12492)){
var statearr_12516_13347 = state_12506__$1;
(statearr_12516_13347[(1)] = (14));

} else {
var statearr_12517_13348 = state_12506__$1;
(statearr_12517_13348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (6))){
var state_12506__$1 = state_12506;
var statearr_12518_13349 = state_12506__$1;
(statearr_12518_13349[(2)] = null);

(statearr_12518_13349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (17))){
var inst_12498 = (state_12506[(2)]);
var state_12506__$1 = (function (){var statearr_12522 = state_12506;
(statearr_12522[(10)] = inst_12498);

return statearr_12522;
})();
var statearr_12523_13350 = state_12506__$1;
(statearr_12523_13350[(2)] = null);

(statearr_12523_13350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (3))){
var inst_12503 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12506__$1,inst_12503);
} else {
if((state_val_12507 === (12))){
var _ = (function (){var statearr_12524 = state_12506;
(statearr_12524[(4)] = cljs.core.rest((state_12506[(4)])));

return statearr_12524;
})();
var state_12506__$1 = state_12506;
var ex12521 = (state_12506__$1[(2)]);
var statearr_12525_13351 = state_12506__$1;
(statearr_12525_13351[(5)] = ex12521);


if((ex12521 instanceof Object)){
var statearr_12526_13352 = state_12506__$1;
(statearr_12526_13352[(1)] = (11));

(statearr_12526_13352[(5)] = null);

} else {
throw ex12521;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (2))){
var inst_12463 = cljs.core.reset_BANG_(dctr,cnt);
var inst_12464 = cnt;
var inst_12465 = (0);
var state_12506__$1 = (function (){var statearr_12527 = state_12506;
(statearr_12527[(7)] = inst_12464);

(statearr_12527[(8)] = inst_12465);

(statearr_12527[(11)] = inst_12463);

return statearr_12527;
})();
var statearr_12528_13353 = state_12506__$1;
(statearr_12528_13353[(2)] = null);

(statearr_12528_13353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (11))){
var inst_12469 = (state_12506[(2)]);
var inst_12470 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12506__$1 = (function (){var statearr_12529 = state_12506;
(statearr_12529[(12)] = inst_12469);

return statearr_12529;
})();
var statearr_12530_13354 = state_12506__$1;
(statearr_12530_13354[(2)] = inst_12470);

(statearr_12530_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (9))){
var inst_12465 = (state_12506[(8)]);
var _ = (function (){var statearr_12531 = state_12506;
(statearr_12531[(4)] = cljs.core.cons((12),(state_12506[(4)])));

return statearr_12531;
})();
var inst_12476 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12465) : chs__$1.call(null,inst_12465));
var inst_12477 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12465) : done.call(null,inst_12465));
var inst_12478 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12476,inst_12477);
var ___$1 = (function (){var statearr_12532 = state_12506;
(statearr_12532[(4)] = cljs.core.rest((state_12506[(4)])));

return statearr_12532;
})();
var state_12506__$1 = state_12506;
var statearr_12533_13355 = state_12506__$1;
(statearr_12533_13355[(2)] = inst_12478);

(statearr_12533_13355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (5))){
var inst_12488 = (state_12506[(2)]);
var state_12506__$1 = (function (){var statearr_12534 = state_12506;
(statearr_12534[(13)] = inst_12488);

return statearr_12534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12506__$1,(13),dchan);
} else {
if((state_val_12507 === (14))){
var inst_12494 = cljs.core.async.close_BANG_(out);
var state_12506__$1 = state_12506;
var statearr_12535_13356 = state_12506__$1;
(statearr_12535_13356[(2)] = inst_12494);

(statearr_12535_13356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (16))){
var inst_12501 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12536_13357 = state_12506__$1;
(statearr_12536_13357[(2)] = inst_12501);

(statearr_12536_13357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (10))){
var inst_12465 = (state_12506[(8)]);
var inst_12481 = (state_12506[(2)]);
var inst_12482 = (inst_12465 + (1));
var inst_12465__$1 = inst_12482;
var state_12506__$1 = (function (){var statearr_12537 = state_12506;
(statearr_12537[(8)] = inst_12465__$1);

(statearr_12537[(14)] = inst_12481);

return statearr_12537;
})();
var statearr_12538_13358 = state_12506__$1;
(statearr_12538_13358[(2)] = null);

(statearr_12538_13358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (8))){
var inst_12486 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12539_13359 = state_12506__$1;
(statearr_12539_13359[(2)] = inst_12486);

(statearr_12539_13359[(1)] = (5));


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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12540[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12540[(1)] = (1));

return statearr_12540;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12506){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12506);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12541){var ex__10946__auto__ = e12541;
var statearr_12542_13360 = state_12506;
(statearr_12542_13360[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12506[(4)]))){
var statearr_12543_13361 = state_12506;
(statearr_12543_13361[(1)] = cljs.core.first((state_12506[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_12506;
state_12506 = G__13362;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12544 = f__11013__auto__();
(statearr_12544[(6)] = c__11012__auto___13342);

return statearr_12544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var G__12547 = arguments.length;
switch (G__12547) {
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
var c__11012__auto___13364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12580){
var state_val_12581 = (state_12580[(1)]);
if((state_val_12581 === (7))){
var inst_12559 = (state_12580[(7)]);
var inst_12560 = (state_12580[(8)]);
var inst_12559__$1 = (state_12580[(2)]);
var inst_12560__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12559__$1,(0),null);
var inst_12561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12559__$1,(1),null);
var inst_12562 = (inst_12560__$1 == null);
var state_12580__$1 = (function (){var statearr_12582 = state_12580;
(statearr_12582[(7)] = inst_12559__$1);

(statearr_12582[(9)] = inst_12561);

(statearr_12582[(8)] = inst_12560__$1);

return statearr_12582;
})();
if(cljs.core.truth_(inst_12562)){
var statearr_12583_13365 = state_12580__$1;
(statearr_12583_13365[(1)] = (8));

} else {
var statearr_12584_13366 = state_12580__$1;
(statearr_12584_13366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (1))){
var inst_12549 = cljs.core.vec(chs);
var inst_12550 = inst_12549;
var state_12580__$1 = (function (){var statearr_12585 = state_12580;
(statearr_12585[(10)] = inst_12550);

return statearr_12585;
})();
var statearr_12586_13367 = state_12580__$1;
(statearr_12586_13367[(2)] = null);

(statearr_12586_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (4))){
var inst_12550 = (state_12580[(10)]);
var state_12580__$1 = state_12580;
return cljs.core.async.ioc_alts_BANG_(state_12580__$1,(7),inst_12550);
} else {
if((state_val_12581 === (6))){
var inst_12576 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
var statearr_12587_13368 = state_12580__$1;
(statearr_12587_13368[(2)] = inst_12576);

(statearr_12587_13368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (3))){
var inst_12578 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12580__$1,inst_12578);
} else {
if((state_val_12581 === (2))){
var inst_12550 = (state_12580[(10)]);
var inst_12552 = cljs.core.count(inst_12550);
var inst_12553 = (inst_12552 > (0));
var state_12580__$1 = state_12580;
if(cljs.core.truth_(inst_12553)){
var statearr_12589_13369 = state_12580__$1;
(statearr_12589_13369[(1)] = (4));

} else {
var statearr_12590_13370 = state_12580__$1;
(statearr_12590_13370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (11))){
var inst_12550 = (state_12580[(10)]);
var inst_12569 = (state_12580[(2)]);
var tmp12588 = inst_12550;
var inst_12550__$1 = tmp12588;
var state_12580__$1 = (function (){var statearr_12591 = state_12580;
(statearr_12591[(10)] = inst_12550__$1);

(statearr_12591[(11)] = inst_12569);

return statearr_12591;
})();
var statearr_12592_13371 = state_12580__$1;
(statearr_12592_13371[(2)] = null);

(statearr_12592_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (9))){
var inst_12560 = (state_12580[(8)]);
var state_12580__$1 = state_12580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12580__$1,(11),out,inst_12560);
} else {
if((state_val_12581 === (5))){
var inst_12574 = cljs.core.async.close_BANG_(out);
var state_12580__$1 = state_12580;
var statearr_12593_13372 = state_12580__$1;
(statearr_12593_13372[(2)] = inst_12574);

(statearr_12593_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (10))){
var inst_12572 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
var statearr_12594_13373 = state_12580__$1;
(statearr_12594_13373[(2)] = inst_12572);

(statearr_12594_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (8))){
var inst_12550 = (state_12580[(10)]);
var inst_12559 = (state_12580[(7)]);
var inst_12561 = (state_12580[(9)]);
var inst_12560 = (state_12580[(8)]);
var inst_12564 = (function (){var cs = inst_12550;
var vec__12555 = inst_12559;
var v = inst_12560;
var c = inst_12561;
return (function (p1__12545_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12545_SHARP_);
});
})();
var inst_12565 = cljs.core.filterv(inst_12564,inst_12550);
var inst_12550__$1 = inst_12565;
var state_12580__$1 = (function (){var statearr_12595 = state_12580;
(statearr_12595[(10)] = inst_12550__$1);

return statearr_12595;
})();
var statearr_12596_13374 = state_12580__$1;
(statearr_12596_13374[(2)] = null);

(statearr_12596_13374[(1)] = (2));


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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12597[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12597[(1)] = (1));

return statearr_12597;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12580){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12580);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12598){var ex__10946__auto__ = e12598;
var statearr_12599_13375 = state_12580;
(statearr_12599_13375[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12580[(4)]))){
var statearr_12600_13376 = state_12580;
(statearr_12600_13376[(1)] = cljs.core.first((state_12580[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_12580;
state_12580 = G__13377;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12601 = f__11013__auto__();
(statearr_12601[(6)] = c__11012__auto___13364);

return statearr_12601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var G__12603 = arguments.length;
switch (G__12603) {
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
var c__11012__auto___13379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12627){
var state_val_12628 = (state_12627[(1)]);
if((state_val_12628 === (7))){
var inst_12609 = (state_12627[(7)]);
var inst_12609__$1 = (state_12627[(2)]);
var inst_12610 = (inst_12609__$1 == null);
var inst_12611 = cljs.core.not(inst_12610);
var state_12627__$1 = (function (){var statearr_12629 = state_12627;
(statearr_12629[(7)] = inst_12609__$1);

return statearr_12629;
})();
if(inst_12611){
var statearr_12630_13380 = state_12627__$1;
(statearr_12630_13380[(1)] = (8));

} else {
var statearr_12631_13381 = state_12627__$1;
(statearr_12631_13381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (1))){
var inst_12604 = (0);
var state_12627__$1 = (function (){var statearr_12632 = state_12627;
(statearr_12632[(8)] = inst_12604);

return statearr_12632;
})();
var statearr_12633_13382 = state_12627__$1;
(statearr_12633_13382[(2)] = null);

(statearr_12633_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (4))){
var state_12627__$1 = state_12627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12627__$1,(7),ch);
} else {
if((state_val_12628 === (6))){
var inst_12622 = (state_12627[(2)]);
var state_12627__$1 = state_12627;
var statearr_12634_13383 = state_12627__$1;
(statearr_12634_13383[(2)] = inst_12622);

(statearr_12634_13383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (3))){
var inst_12624 = (state_12627[(2)]);
var inst_12625 = cljs.core.async.close_BANG_(out);
var state_12627__$1 = (function (){var statearr_12635 = state_12627;
(statearr_12635[(9)] = inst_12624);

return statearr_12635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12627__$1,inst_12625);
} else {
if((state_val_12628 === (2))){
var inst_12604 = (state_12627[(8)]);
var inst_12606 = (inst_12604 < n);
var state_12627__$1 = state_12627;
if(cljs.core.truth_(inst_12606)){
var statearr_12636_13384 = state_12627__$1;
(statearr_12636_13384[(1)] = (4));

} else {
var statearr_12637_13385 = state_12627__$1;
(statearr_12637_13385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (11))){
var inst_12604 = (state_12627[(8)]);
var inst_12614 = (state_12627[(2)]);
var inst_12615 = (inst_12604 + (1));
var inst_12604__$1 = inst_12615;
var state_12627__$1 = (function (){var statearr_12638 = state_12627;
(statearr_12638[(10)] = inst_12614);

(statearr_12638[(8)] = inst_12604__$1);

return statearr_12638;
})();
var statearr_12639_13386 = state_12627__$1;
(statearr_12639_13386[(2)] = null);

(statearr_12639_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (9))){
var state_12627__$1 = state_12627;
var statearr_12640_13387 = state_12627__$1;
(statearr_12640_13387[(2)] = null);

(statearr_12640_13387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (5))){
var state_12627__$1 = state_12627;
var statearr_12641_13388 = state_12627__$1;
(statearr_12641_13388[(2)] = null);

(statearr_12641_13388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (10))){
var inst_12619 = (state_12627[(2)]);
var state_12627__$1 = state_12627;
var statearr_12642_13389 = state_12627__$1;
(statearr_12642_13389[(2)] = inst_12619);

(statearr_12642_13389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12628 === (8))){
var inst_12609 = (state_12627[(7)]);
var state_12627__$1 = state_12627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12627__$1,(11),out,inst_12609);
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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12643[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12643[(1)] = (1));

return statearr_12643;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12627){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12627);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12644){var ex__10946__auto__ = e12644;
var statearr_12645_13390 = state_12627;
(statearr_12645_13390[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12627[(4)]))){
var statearr_12646_13391 = state_12627;
(statearr_12646_13391[(1)] = cljs.core.first((state_12627[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13392 = state_12627;
state_12627 = G__13392;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12647 = f__11013__auto__();
(statearr_12647[(6)] = c__11012__auto___13379);

return statearr_12647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12649 = (function (f,ch,meta12650){
this.f = f;
this.ch = ch;
this.meta12650 = meta12650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12651,meta12650__$1){
var self__ = this;
var _12651__$1 = this;
return (new cljs.core.async.t_cljs$core$async12649(self__.f,self__.ch,meta12650__$1));
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12651){
var self__ = this;
var _12651__$1 = this;
return self__.meta12650;
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12652 = (function (f,ch,meta12650,_,fn1,meta12653){
this.f = f;
this.ch = ch;
this.meta12650 = meta12650;
this._ = _;
this.fn1 = fn1;
this.meta12653 = meta12653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12654,meta12653__$1){
var self__ = this;
var _12654__$1 = this;
return (new cljs.core.async.t_cljs$core$async12652(self__.f,self__.ch,self__.meta12650,self__._,self__.fn1,meta12653__$1));
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12654){
var self__ = this;
var _12654__$1 = this;
return self__.meta12653;
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12648_SHARP_){
var G__12655 = (((p1__12648_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12648_SHARP_) : self__.f.call(null,p1__12648_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12655) : f1.call(null,G__12655));
});
}));

(cljs.core.async.t_cljs$core$async12652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12650","meta12650",-1105755866,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12649","cljs.core.async/t_cljs$core$async12649",1369530664,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12653","meta12653",-1936240358,null)], null);
}));

(cljs.core.async.t_cljs$core$async12652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12652");

(cljs.core.async.t_cljs$core$async12652.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12652.
 */
cljs.core.async.__GT_t_cljs$core$async12652 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12652(f__$1,ch__$1,meta12650__$1,___$2,fn1__$1,meta12653){
return (new cljs.core.async.t_cljs$core$async12652(f__$1,ch__$1,meta12650__$1,___$2,fn1__$1,meta12653));
});

}

return (new cljs.core.async.t_cljs$core$async12652(self__.f,self__.ch,self__.meta12650,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12656 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12656) : self__.f.call(null,G__12656));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12650","meta12650",-1105755866,null)], null);
}));

(cljs.core.async.t_cljs$core$async12649.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12649");

(cljs.core.async.t_cljs$core$async12649.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12649");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12649.
 */
cljs.core.async.__GT_t_cljs$core$async12649 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12649(f__$1,ch__$1,meta12650){
return (new cljs.core.async.t_cljs$core$async12649(f__$1,ch__$1,meta12650));
});

}

return (new cljs.core.async.t_cljs$core$async12649(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12657 = (function (f,ch,meta12658){
this.f = f;
this.ch = ch;
this.meta12658 = meta12658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12659,meta12658__$1){
var self__ = this;
var _12659__$1 = this;
return (new cljs.core.async.t_cljs$core$async12657(self__.f,self__.ch,meta12658__$1));
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12659){
var self__ = this;
var _12659__$1 = this;
return self__.meta12658;
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12658","meta12658",363659380,null)], null);
}));

(cljs.core.async.t_cljs$core$async12657.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12657");

(cljs.core.async.t_cljs$core$async12657.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12657");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12657.
 */
cljs.core.async.__GT_t_cljs$core$async12657 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12657(f__$1,ch__$1,meta12658){
return (new cljs.core.async.t_cljs$core$async12657(f__$1,ch__$1,meta12658));
});

}

return (new cljs.core.async.t_cljs$core$async12657(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12660 = (function (p,ch,meta12661){
this.p = p;
this.ch = ch;
this.meta12661 = meta12661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12662,meta12661__$1){
var self__ = this;
var _12662__$1 = this;
return (new cljs.core.async.t_cljs$core$async12660(self__.p,self__.ch,meta12661__$1));
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12662){
var self__ = this;
var _12662__$1 = this;
return self__.meta12661;
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12661","meta12661",-302234611,null)], null);
}));

(cljs.core.async.t_cljs$core$async12660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12660");

(cljs.core.async.t_cljs$core$async12660.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12660.
 */
cljs.core.async.__GT_t_cljs$core$async12660 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12660(p__$1,ch__$1,meta12661){
return (new cljs.core.async.t_cljs$core$async12660(p__$1,ch__$1,meta12661));
});

}

return (new cljs.core.async.t_cljs$core$async12660(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12664 = arguments.length;
switch (G__12664) {
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
var c__11012__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12685){
var state_val_12686 = (state_12685[(1)]);
if((state_val_12686 === (7))){
var inst_12681 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12687_13395 = state_12685__$1;
(statearr_12687_13395[(2)] = inst_12681);

(statearr_12687_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (1))){
var state_12685__$1 = state_12685;
var statearr_12688_13396 = state_12685__$1;
(statearr_12688_13396[(2)] = null);

(statearr_12688_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (4))){
var inst_12667 = (state_12685[(7)]);
var inst_12667__$1 = (state_12685[(2)]);
var inst_12668 = (inst_12667__$1 == null);
var state_12685__$1 = (function (){var statearr_12689 = state_12685;
(statearr_12689[(7)] = inst_12667__$1);

return statearr_12689;
})();
if(cljs.core.truth_(inst_12668)){
var statearr_12690_13397 = state_12685__$1;
(statearr_12690_13397[(1)] = (5));

} else {
var statearr_12691_13398 = state_12685__$1;
(statearr_12691_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (6))){
var inst_12667 = (state_12685[(7)]);
var inst_12672 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12667) : p.call(null,inst_12667));
var state_12685__$1 = state_12685;
if(cljs.core.truth_(inst_12672)){
var statearr_12692_13399 = state_12685__$1;
(statearr_12692_13399[(1)] = (8));

} else {
var statearr_12693_13400 = state_12685__$1;
(statearr_12693_13400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (3))){
var inst_12683 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12685__$1,inst_12683);
} else {
if((state_val_12686 === (2))){
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12685__$1,(4),ch);
} else {
if((state_val_12686 === (11))){
var inst_12675 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12694_13401 = state_12685__$1;
(statearr_12694_13401[(2)] = inst_12675);

(statearr_12694_13401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (9))){
var state_12685__$1 = state_12685;
var statearr_12695_13402 = state_12685__$1;
(statearr_12695_13402[(2)] = null);

(statearr_12695_13402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (5))){
var inst_12670 = cljs.core.async.close_BANG_(out);
var state_12685__$1 = state_12685;
var statearr_12696_13403 = state_12685__$1;
(statearr_12696_13403[(2)] = inst_12670);

(statearr_12696_13403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (10))){
var inst_12678 = (state_12685[(2)]);
var state_12685__$1 = (function (){var statearr_12697 = state_12685;
(statearr_12697[(8)] = inst_12678);

return statearr_12697;
})();
var statearr_12698_13404 = state_12685__$1;
(statearr_12698_13404[(2)] = null);

(statearr_12698_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (8))){
var inst_12667 = (state_12685[(7)]);
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12685__$1,(11),out,inst_12667);
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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12699 = [null,null,null,null,null,null,null,null,null];
(statearr_12699[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12699[(1)] = (1));

return statearr_12699;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12685){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12685);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12700){var ex__10946__auto__ = e12700;
var statearr_12701_13405 = state_12685;
(statearr_12701_13405[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12685[(4)]))){
var statearr_12702_13406 = state_12685;
(statearr_12702_13406[(1)] = cljs.core.first((state_12685[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13407 = state_12685;
state_12685 = G__13407;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12703 = f__11013__auto__();
(statearr_12703[(6)] = c__11012__auto___13394);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12705 = arguments.length;
switch (G__12705) {
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
var c__11012__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12767){
var state_val_12768 = (state_12767[(1)]);
if((state_val_12768 === (7))){
var inst_12763 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12769_13409 = state_12767__$1;
(statearr_12769_13409[(2)] = inst_12763);

(statearr_12769_13409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (20))){
var inst_12733 = (state_12767[(7)]);
var inst_12744 = (state_12767[(2)]);
var inst_12745 = cljs.core.next(inst_12733);
var inst_12719 = inst_12745;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12770 = state_12767;
(statearr_12770[(8)] = inst_12722);

(statearr_12770[(9)] = inst_12721);

(statearr_12770[(10)] = inst_12719);

(statearr_12770[(11)] = inst_12720);

(statearr_12770[(12)] = inst_12744);

return statearr_12770;
})();
var statearr_12771_13410 = state_12767__$1;
(statearr_12771_13410[(2)] = null);

(statearr_12771_13410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (1))){
var state_12767__$1 = state_12767;
var statearr_12772_13411 = state_12767__$1;
(statearr_12772_13411[(2)] = null);

(statearr_12772_13411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (4))){
var inst_12708 = (state_12767[(13)]);
var inst_12708__$1 = (state_12767[(2)]);
var inst_12709 = (inst_12708__$1 == null);
var state_12767__$1 = (function (){var statearr_12773 = state_12767;
(statearr_12773[(13)] = inst_12708__$1);

return statearr_12773;
})();
if(cljs.core.truth_(inst_12709)){
var statearr_12774_13412 = state_12767__$1;
(statearr_12774_13412[(1)] = (5));

} else {
var statearr_12775_13413 = state_12767__$1;
(statearr_12775_13413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (15))){
var state_12767__$1 = state_12767;
var statearr_12779_13414 = state_12767__$1;
(statearr_12779_13414[(2)] = null);

(statearr_12779_13414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (21))){
var state_12767__$1 = state_12767;
var statearr_12780_13415 = state_12767__$1;
(statearr_12780_13415[(2)] = null);

(statearr_12780_13415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (13))){
var inst_12722 = (state_12767[(8)]);
var inst_12721 = (state_12767[(9)]);
var inst_12719 = (state_12767[(10)]);
var inst_12720 = (state_12767[(11)]);
var inst_12729 = (state_12767[(2)]);
var inst_12730 = (inst_12722 + (1));
var tmp12776 = inst_12721;
var tmp12777 = inst_12719;
var tmp12778 = inst_12720;
var inst_12719__$1 = tmp12777;
var inst_12720__$1 = tmp12778;
var inst_12721__$1 = tmp12776;
var inst_12722__$1 = inst_12730;
var state_12767__$1 = (function (){var statearr_12781 = state_12767;
(statearr_12781[(8)] = inst_12722__$1);

(statearr_12781[(9)] = inst_12721__$1);

(statearr_12781[(10)] = inst_12719__$1);

(statearr_12781[(14)] = inst_12729);

(statearr_12781[(11)] = inst_12720__$1);

return statearr_12781;
})();
var statearr_12782_13416 = state_12767__$1;
(statearr_12782_13416[(2)] = null);

(statearr_12782_13416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (22))){
var state_12767__$1 = state_12767;
var statearr_12783_13417 = state_12767__$1;
(statearr_12783_13417[(2)] = null);

(statearr_12783_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (6))){
var inst_12708 = (state_12767[(13)]);
var inst_12717 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12708) : f.call(null,inst_12708));
var inst_12718 = cljs.core.seq(inst_12717);
var inst_12719 = inst_12718;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12784 = state_12767;
(statearr_12784[(8)] = inst_12722);

(statearr_12784[(9)] = inst_12721);

(statearr_12784[(10)] = inst_12719);

(statearr_12784[(11)] = inst_12720);

return statearr_12784;
})();
var statearr_12785_13418 = state_12767__$1;
(statearr_12785_13418[(2)] = null);

(statearr_12785_13418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (17))){
var inst_12733 = (state_12767[(7)]);
var inst_12737 = cljs.core.chunk_first(inst_12733);
var inst_12738 = cljs.core.chunk_rest(inst_12733);
var inst_12739 = cljs.core.count(inst_12737);
var inst_12719 = inst_12738;
var inst_12720 = inst_12737;
var inst_12721 = inst_12739;
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12786 = state_12767;
(statearr_12786[(8)] = inst_12722);

(statearr_12786[(9)] = inst_12721);

(statearr_12786[(10)] = inst_12719);

(statearr_12786[(11)] = inst_12720);

return statearr_12786;
})();
var statearr_12787_13419 = state_12767__$1;
(statearr_12787_13419[(2)] = null);

(statearr_12787_13419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (3))){
var inst_12765 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12767__$1,inst_12765);
} else {
if((state_val_12768 === (12))){
var inst_12753 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12788_13420 = state_12767__$1;
(statearr_12788_13420[(2)] = inst_12753);

(statearr_12788_13420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (2))){
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12767__$1,(4),in$);
} else {
if((state_val_12768 === (23))){
var inst_12761 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12789_13421 = state_12767__$1;
(statearr_12789_13421[(2)] = inst_12761);

(statearr_12789_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (19))){
var inst_12748 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12790_13422 = state_12767__$1;
(statearr_12790_13422[(2)] = inst_12748);

(statearr_12790_13422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (11))){
var inst_12719 = (state_12767[(10)]);
var inst_12733 = (state_12767[(7)]);
var inst_12733__$1 = cljs.core.seq(inst_12719);
var state_12767__$1 = (function (){var statearr_12791 = state_12767;
(statearr_12791[(7)] = inst_12733__$1);

return statearr_12791;
})();
if(inst_12733__$1){
var statearr_12792_13423 = state_12767__$1;
(statearr_12792_13423[(1)] = (14));

} else {
var statearr_12793_13424 = state_12767__$1;
(statearr_12793_13424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (9))){
var inst_12755 = (state_12767[(2)]);
var inst_12756 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12767__$1 = (function (){var statearr_12794 = state_12767;
(statearr_12794[(15)] = inst_12755);

return statearr_12794;
})();
if(cljs.core.truth_(inst_12756)){
var statearr_12795_13425 = state_12767__$1;
(statearr_12795_13425[(1)] = (21));

} else {
var statearr_12796_13426 = state_12767__$1;
(statearr_12796_13426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (5))){
var inst_12711 = cljs.core.async.close_BANG_(out);
var state_12767__$1 = state_12767;
var statearr_12797_13427 = state_12767__$1;
(statearr_12797_13427[(2)] = inst_12711);

(statearr_12797_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (14))){
var inst_12733 = (state_12767[(7)]);
var inst_12735 = cljs.core.chunked_seq_QMARK_(inst_12733);
var state_12767__$1 = state_12767;
if(inst_12735){
var statearr_12798_13428 = state_12767__$1;
(statearr_12798_13428[(1)] = (17));

} else {
var statearr_12799_13429 = state_12767__$1;
(statearr_12799_13429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (16))){
var inst_12751 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12800_13430 = state_12767__$1;
(statearr_12800_13430[(2)] = inst_12751);

(statearr_12800_13430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (10))){
var inst_12722 = (state_12767[(8)]);
var inst_12720 = (state_12767[(11)]);
var inst_12727 = cljs.core._nth(inst_12720,inst_12722);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12767__$1,(13),out,inst_12727);
} else {
if((state_val_12768 === (18))){
var inst_12733 = (state_12767[(7)]);
var inst_12742 = cljs.core.first(inst_12733);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12767__$1,(20),out,inst_12742);
} else {
if((state_val_12768 === (8))){
var inst_12722 = (state_12767[(8)]);
var inst_12721 = (state_12767[(9)]);
var inst_12724 = (inst_12722 < inst_12721);
var inst_12725 = inst_12724;
var state_12767__$1 = state_12767;
if(cljs.core.truth_(inst_12725)){
var statearr_12801_13431 = state_12767__$1;
(statearr_12801_13431[(1)] = (10));

} else {
var statearr_12802_13432 = state_12767__$1;
(statearr_12802_13432[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10943__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10943__auto____0 = (function (){
var statearr_12803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12803[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10943__auto__);

(statearr_12803[(1)] = (1));

return statearr_12803;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10943__auto____1 = (function (state_12767){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12767);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12804){var ex__10946__auto__ = e12804;
var statearr_12805_13433 = state_12767;
(statearr_12805_13433[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12767[(4)]))){
var statearr_12806_13434 = state_12767;
(statearr_12806_13434[(1)] = cljs.core.first((state_12767[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13435 = state_12767;
state_12767 = G__13435;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10943__auto__ = function(state_12767){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10943__auto____1.call(this,state_12767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10943__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10943__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12807 = f__11013__auto__();
(statearr_12807[(6)] = c__11012__auto__);

return statearr_12807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));

return c__11012__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12809 = arguments.length;
switch (G__12809) {
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
var c__11012__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12837){
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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12855[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12855[(1)] = (1));

return statearr_12855;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12837){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12837);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12856){var ex__10946__auto__ = e12856;
var statearr_12857_13450 = state_12837;
(statearr_12857_13450[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12837[(4)]))){
var statearr_12858_13451 = state_12837;
(statearr_12858_13451[(1)] = cljs.core.first((state_12837[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_12837;
state_12837 = G__13452;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12859 = f__11013__auto__();
(statearr_12859[(6)] = c__11012__auto___13439);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var c__11012__auto___13454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12899){
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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12922[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12922[(1)] = (1));

return statearr_12922;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12899){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12899);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12923){var ex__10946__auto__ = e12923;
var statearr_12924_13469 = state_12899;
(statearr_12924_13469[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12899[(4)]))){
var statearr_12925_13470 = state_12899;
(statearr_12925_13470[(1)] = cljs.core.first((state_12899[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13471 = state_12899;
state_12899 = G__13471;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12926 = f__11013__auto__();
(statearr_12926[(6)] = c__11012__auto___13454);

return statearr_12926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
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
var c__11012__auto___13473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11013__auto__ = (function (){var switch__10942__auto__ = (function (state_12970){
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
var cljs$core$async$state_machine__10943__auto__ = null;
var cljs$core$async$state_machine__10943__auto____0 = (function (){
var statearr_12993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12993[(0)] = cljs$core$async$state_machine__10943__auto__);

(statearr_12993[(1)] = (1));

return statearr_12993;
});
var cljs$core$async$state_machine__10943__auto____1 = (function (state_12970){
while(true){
var ret_value__10944__auto__ = (function (){try{while(true){
var result__10945__auto__ = switch__10942__auto__(state_12970);
if(cljs.core.keyword_identical_QMARK_(result__10945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10945__auto__;
}
break;
}
}catch (e12994){var ex__10946__auto__ = e12994;
var statearr_12995_13488 = state_12970;
(statearr_12995_13488[(2)] = ex__10946__auto__);


if(cljs.core.seq((state_12970[(4)]))){
var statearr_12996_13489 = state_12970;
(statearr_12996_13489[(1)] = cljs.core.first((state_12970[(4)])));

} else {
throw ex__10946__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13490 = state_12970;
state_12970 = G__13490;
continue;
} else {
return ret_value__10944__auto__;
}
break;
}
});
cljs$core$async$state_machine__10943__auto__ = function(state_12970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10943__auto____1.call(this,state_12970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10943__auto____0;
cljs$core$async$state_machine__10943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10943__auto____1;
return cljs$core$async$state_machine__10943__auto__;
})()
})();
var state__11014__auto__ = (function (){var statearr_12997 = f__11013__auto__();
(statearr_12997[(6)] = c__11012__auto___13473);

return statearr_12997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11014__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
