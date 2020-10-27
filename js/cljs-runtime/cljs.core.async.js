goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10728 = arguments.length;
switch (G__10728) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10729 = (function (f,blockable,meta10730){
this.f = f;
this.blockable = blockable;
this.meta10730 = meta10730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10731,meta10730__$1){
var self__ = this;
var _10731__$1 = this;
return (new cljs.core.async.t_cljs$core$async10729(self__.f,self__.blockable,meta10730__$1));
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10731){
var self__ = this;
var _10731__$1 = this;
return self__.meta10730;
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10730","meta10730",-67940849,null)], null);
}));

(cljs.core.async.t_cljs$core$async10729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10729");

(cljs.core.async.t_cljs$core$async10729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10729.
 */
cljs.core.async.__GT_t_cljs$core$async10729 = (function cljs$core$async$__GT_t_cljs$core$async10729(f__$1,blockable__$1,meta10730){
return (new cljs.core.async.t_cljs$core$async10729(f__$1,blockable__$1,meta10730));
});

}

return (new cljs.core.async.t_cljs$core$async10729(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10734 = arguments.length;
switch (G__10734) {
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
var G__10736 = arguments.length;
switch (G__10736) {
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
var G__10738 = arguments.length;
switch (G__10738) {
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
var val_12560 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12560) : fn1.call(null,val_12560));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12560) : fn1.call(null,val_12560));
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
var G__10740 = arguments.length;
switch (G__10740) {
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
var n__4613__auto___12573 = n;
var x_12574 = (0);
while(true){
if((x_12574 < n__4613__auto___12573)){
(a[x_12574] = x_12574);

var G__12575 = (x_12574 + (1));
x_12574 = G__12575;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10744 = (function (flag,meta10745){
this.flag = flag;
this.meta10745 = meta10745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10746,meta10745__$1){
var self__ = this;
var _10746__$1 = this;
return (new cljs.core.async.t_cljs$core$async10744(self__.flag,meta10745__$1));
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10746){
var self__ = this;
var _10746__$1 = this;
return self__.meta10745;
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10745","meta10745",1348361103,null)], null);
}));

(cljs.core.async.t_cljs$core$async10744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10744");

(cljs.core.async.t_cljs$core$async10744.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10744.
 */
cljs.core.async.__GT_t_cljs$core$async10744 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10744(flag__$1,meta10745){
return (new cljs.core.async.t_cljs$core$async10744(flag__$1,meta10745));
});

}

return (new cljs.core.async.t_cljs$core$async10744(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10747 = (function (flag,cb,meta10748){
this.flag = flag;
this.cb = cb;
this.meta10748 = meta10748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10749,meta10748__$1){
var self__ = this;
var _10749__$1 = this;
return (new cljs.core.async.t_cljs$core$async10747(self__.flag,self__.cb,meta10748__$1));
}));

(cljs.core.async.t_cljs$core$async10747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10749){
var self__ = this;
var _10749__$1 = this;
return self__.meta10748;
}));

(cljs.core.async.t_cljs$core$async10747.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10748","meta10748",1099975574,null)], null);
}));

(cljs.core.async.t_cljs$core$async10747.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10747");

(cljs.core.async.t_cljs$core$async10747.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10747");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10747.
 */
cljs.core.async.__GT_t_cljs$core$async10747 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10747(flag__$1,cb__$1,meta10748){
return (new cljs.core.async.t_cljs$core$async10747(flag__$1,cb__$1,meta10748));
});

}

return (new cljs.core.async.t_cljs$core$async10747(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10750_SHARP_){
var G__10752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10750_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10752) : fret.call(null,G__10752));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10751_SHARP_){
var G__10753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10751_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10753) : fret.call(null,G__10753));
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
var G__12582 = (i + (1));
i = G__12582;
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
var len__4736__auto___12583 = arguments.length;
var i__4737__auto___12584 = (0);
while(true){
if((i__4737__auto___12584 < len__4736__auto___12583)){
args__4742__auto__.push((arguments[i__4737__auto___12584]));

var G__12585 = (i__4737__auto___12584 + (1));
i__4737__auto___12584 = G__12585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10758){
var map__10759 = p__10758;
var map__10759__$1 = (((((!((map__10759 == null))))?(((((map__10759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10759):map__10759);
var opts = map__10759__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10755){
var G__10756 = cljs.core.first(seq10755);
var seq10755__$1 = cljs.core.next(seq10755);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10756,seq10755__$1);
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
var G__10762 = arguments.length;
switch (G__10762) {
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
var c__10662__auto___12587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_10791){
var state_val_10792 = (state_10791[(1)]);
if((state_val_10792 === (7))){
var inst_10787 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
var statearr_10793_12588 = state_10791__$1;
(statearr_10793_12588[(2)] = inst_10787);

(statearr_10793_12588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (1))){
var state_10791__$1 = state_10791;
var statearr_10794_12589 = state_10791__$1;
(statearr_10794_12589[(2)] = null);

(statearr_10794_12589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (4))){
var inst_10766 = (state_10791[(7)]);
var inst_10766__$1 = (state_10791[(2)]);
var inst_10771 = (inst_10766__$1 == null);
var state_10791__$1 = (function (){var statearr_10795 = state_10791;
(statearr_10795[(7)] = inst_10766__$1);

return statearr_10795;
})();
if(cljs.core.truth_(inst_10771)){
var statearr_10796_12590 = state_10791__$1;
(statearr_10796_12590[(1)] = (5));

} else {
var statearr_10797_12591 = state_10791__$1;
(statearr_10797_12591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (13))){
var state_10791__$1 = state_10791;
var statearr_10798_12592 = state_10791__$1;
(statearr_10798_12592[(2)] = null);

(statearr_10798_12592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (6))){
var inst_10766 = (state_10791[(7)]);
var state_10791__$1 = state_10791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10791__$1,(11),to,inst_10766);
} else {
if((state_val_10792 === (3))){
var inst_10789 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10791__$1,inst_10789);
} else {
if((state_val_10792 === (12))){
var state_10791__$1 = state_10791;
var statearr_10801_12593 = state_10791__$1;
(statearr_10801_12593[(2)] = null);

(statearr_10801_12593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (2))){
var state_10791__$1 = state_10791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10791__$1,(4),from);
} else {
if((state_val_10792 === (11))){
var inst_10780 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
if(cljs.core.truth_(inst_10780)){
var statearr_10802_12594 = state_10791__$1;
(statearr_10802_12594[(1)] = (12));

} else {
var statearr_10805_12595 = state_10791__$1;
(statearr_10805_12595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (9))){
var state_10791__$1 = state_10791;
var statearr_10806_12596 = state_10791__$1;
(statearr_10806_12596[(2)] = null);

(statearr_10806_12596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (5))){
var state_10791__$1 = state_10791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10807_12597 = state_10791__$1;
(statearr_10807_12597[(1)] = (8));

} else {
var statearr_10808_12598 = state_10791__$1;
(statearr_10808_12598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (14))){
var inst_10785 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
var statearr_10810_12599 = state_10791__$1;
(statearr_10810_12599[(2)] = inst_10785);

(statearr_10810_12599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (10))){
var inst_10777 = (state_10791[(2)]);
var state_10791__$1 = state_10791;
var statearr_10812_12600 = state_10791__$1;
(statearr_10812_12600[(2)] = inst_10777);

(statearr_10812_12600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10792 === (8))){
var inst_10774 = cljs.core.async.close_BANG_(to);
var state_10791__$1 = state_10791;
var statearr_10814_12601 = state_10791__$1;
(statearr_10814_12601[(2)] = inst_10774);

(statearr_10814_12601[(1)] = (10));


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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_10818 = [null,null,null,null,null,null,null,null];
(statearr_10818[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_10818[(1)] = (1));

return statearr_10818;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_10791){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_10791);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e10819){var ex__10624__auto__ = e10819;
var statearr_10820_12602 = state_10791;
(statearr_10820_12602[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_10791[(4)]))){
var statearr_10821_12603 = state_10791;
(statearr_10821_12603[(1)] = cljs.core.first((state_10791[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12604 = state_10791;
state_10791 = G__12604;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_10791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_10791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_10823 = f__10663__auto__();
(statearr_10823[(6)] = c__10662__auto___12587);

return statearr_10823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
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
var process = (function (p__10824){
var vec__10825 = p__10824;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10825,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10825,(1),null);
var job = vec__10825;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10662__auto___12605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_10832){
var state_val_10833 = (state_10832[(1)]);
if((state_val_10833 === (1))){
var state_10832__$1 = state_10832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10832__$1,(2),res,v);
} else {
if((state_val_10833 === (2))){
var inst_10829 = (state_10832[(2)]);
var inst_10830 = cljs.core.async.close_BANG_(res);
var state_10832__$1 = (function (){var statearr_10834 = state_10832;
(statearr_10834[(7)] = inst_10829);

return statearr_10834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10832__$1,inst_10830);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0 = (function (){
var statearr_10837 = [null,null,null,null,null,null,null,null];
(statearr_10837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__);

(statearr_10837[(1)] = (1));

return statearr_10837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1 = (function (state_10832){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_10832);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e10839){var ex__10624__auto__ = e10839;
var statearr_10840_12606 = state_10832;
(statearr_10840_12606[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_10832[(4)]))){
var statearr_10843_12607 = state_10832;
(statearr_10843_12607[(1)] = cljs.core.first((state_10832[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12608 = state_10832;
state_10832 = G__12608;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = function(state_10832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1.call(this,state_10832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_10845 = f__10663__auto__();
(statearr_10845[(6)] = c__10662__auto___12605);

return statearr_10845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10847){
var vec__10848 = p__10847;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10848,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10848,(1),null);
var job = vec__10848;
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
var n__4613__auto___12609 = n;
var __12610 = (0);
while(true){
if((__12610 < n__4613__auto___12609)){
var G__10852_12611 = type;
var G__10852_12612__$1 = (((G__10852_12611 instanceof cljs.core.Keyword))?G__10852_12611.fqn:null);
switch (G__10852_12612__$1) {
case "compute":
var c__10662__auto___12614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12610,c__10662__auto___12614,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async){
return (function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = ((function (__12610,c__10662__auto___12614,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async){
return (function (state_10867){
var state_val_10868 = (state_10867[(1)]);
if((state_val_10868 === (1))){
var state_10867__$1 = state_10867;
var statearr_10872_12615 = state_10867__$1;
(statearr_10872_12615[(2)] = null);

(statearr_10872_12615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10868 === (2))){
var state_10867__$1 = state_10867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10867__$1,(4),jobs);
} else {
if((state_val_10868 === (3))){
var inst_10865 = (state_10867[(2)]);
var state_10867__$1 = state_10867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10867__$1,inst_10865);
} else {
if((state_val_10868 === (4))){
var inst_10857 = (state_10867[(2)]);
var inst_10858 = process(inst_10857);
var state_10867__$1 = state_10867;
if(cljs.core.truth_(inst_10858)){
var statearr_10873_12616 = state_10867__$1;
(statearr_10873_12616[(1)] = (5));

} else {
var statearr_10874_12617 = state_10867__$1;
(statearr_10874_12617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10868 === (5))){
var state_10867__$1 = state_10867;
var statearr_10876_12618 = state_10867__$1;
(statearr_10876_12618[(2)] = null);

(statearr_10876_12618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10868 === (6))){
var state_10867__$1 = state_10867;
var statearr_10877_12619 = state_10867__$1;
(statearr_10877_12619[(2)] = null);

(statearr_10877_12619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10868 === (7))){
var inst_10863 = (state_10867[(2)]);
var state_10867__$1 = state_10867;
var statearr_10878_12620 = state_10867__$1;
(statearr_10878_12620[(2)] = inst_10863);

(statearr_10878_12620[(1)] = (3));


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
});})(__12610,c__10662__auto___12614,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async))
;
return ((function (__12610,switch__10620__auto__,c__10662__auto___12614,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0 = (function (){
var statearr_10879 = [null,null,null,null,null,null,null];
(statearr_10879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__);

(statearr_10879[(1)] = (1));

return statearr_10879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1 = (function (state_10867){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_10867);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e10880){var ex__10624__auto__ = e10880;
var statearr_10881_12621 = state_10867;
(statearr_10881_12621[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_10867[(4)]))){
var statearr_10882_12622 = state_10867;
(statearr_10882_12622[(1)] = cljs.core.first((state_10867[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12623 = state_10867;
state_10867 = G__12623;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = function(state_10867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1.call(this,state_10867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__;
})()
;})(__12610,switch__10620__auto__,c__10662__auto___12614,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async))
})();
var state__10664__auto__ = (function (){var statearr_10883 = f__10663__auto__();
(statearr_10883[(6)] = c__10662__auto___12614);

return statearr_10883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
});})(__12610,c__10662__auto___12614,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async))
);


break;
case "async":
var c__10662__auto___12624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12610,c__10662__auto___12624,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async){
return (function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = ((function (__12610,c__10662__auto___12624,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async){
return (function (state_10896){
var state_val_10897 = (state_10896[(1)]);
if((state_val_10897 === (1))){
var state_10896__$1 = state_10896;
var statearr_10898_12625 = state_10896__$1;
(statearr_10898_12625[(2)] = null);

(statearr_10898_12625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10897 === (2))){
var state_10896__$1 = state_10896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10896__$1,(4),jobs);
} else {
if((state_val_10897 === (3))){
var inst_10894 = (state_10896[(2)]);
var state_10896__$1 = state_10896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10896__$1,inst_10894);
} else {
if((state_val_10897 === (4))){
var inst_10886 = (state_10896[(2)]);
var inst_10887 = async(inst_10886);
var state_10896__$1 = state_10896;
if(cljs.core.truth_(inst_10887)){
var statearr_10899_12626 = state_10896__$1;
(statearr_10899_12626[(1)] = (5));

} else {
var statearr_10900_12627 = state_10896__$1;
(statearr_10900_12627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10897 === (5))){
var state_10896__$1 = state_10896;
var statearr_10901_12628 = state_10896__$1;
(statearr_10901_12628[(2)] = null);

(statearr_10901_12628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10897 === (6))){
var state_10896__$1 = state_10896;
var statearr_10902_12629 = state_10896__$1;
(statearr_10902_12629[(2)] = null);

(statearr_10902_12629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10897 === (7))){
var inst_10892 = (state_10896[(2)]);
var state_10896__$1 = state_10896;
var statearr_10903_12630 = state_10896__$1;
(statearr_10903_12630[(2)] = inst_10892);

(statearr_10903_12630[(1)] = (3));


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
});})(__12610,c__10662__auto___12624,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async))
;
return ((function (__12610,switch__10620__auto__,c__10662__auto___12624,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0 = (function (){
var statearr_10904 = [null,null,null,null,null,null,null];
(statearr_10904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__);

(statearr_10904[(1)] = (1));

return statearr_10904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1 = (function (state_10896){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_10896);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e10905){var ex__10624__auto__ = e10905;
var statearr_10906_12631 = state_10896;
(statearr_10906_12631[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_10896[(4)]))){
var statearr_10907_12632 = state_10896;
(statearr_10907_12632[(1)] = cljs.core.first((state_10896[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12633 = state_10896;
state_10896 = G__12633;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = function(state_10896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1.call(this,state_10896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__;
})()
;})(__12610,switch__10620__auto__,c__10662__auto___12624,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async))
})();
var state__10664__auto__ = (function (){var statearr_10908 = f__10663__auto__();
(statearr_10908[(6)] = c__10662__auto___12624);

return statearr_10908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
});})(__12610,c__10662__auto___12624,G__10852_12611,G__10852_12612__$1,n__4613__auto___12609,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10852_12612__$1)].join('')));

}

var G__12634 = (__12610 + (1));
__12610 = G__12634;
continue;
} else {
}
break;
}

var c__10662__auto___12635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_10930){
var state_val_10931 = (state_10930[(1)]);
if((state_val_10931 === (7))){
var inst_10926 = (state_10930[(2)]);
var state_10930__$1 = state_10930;
var statearr_10939_12638 = state_10930__$1;
(statearr_10939_12638[(2)] = inst_10926);

(statearr_10939_12638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10931 === (1))){
var state_10930__$1 = state_10930;
var statearr_10942_12641 = state_10930__$1;
(statearr_10942_12641[(2)] = null);

(statearr_10942_12641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10931 === (4))){
var inst_10911 = (state_10930[(7)]);
var inst_10911__$1 = (state_10930[(2)]);
var inst_10912 = (inst_10911__$1 == null);
var state_10930__$1 = (function (){var statearr_10943 = state_10930;
(statearr_10943[(7)] = inst_10911__$1);

return statearr_10943;
})();
if(cljs.core.truth_(inst_10912)){
var statearr_10944_12644 = state_10930__$1;
(statearr_10944_12644[(1)] = (5));

} else {
var statearr_10946_12645 = state_10930__$1;
(statearr_10946_12645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10931 === (6))){
var inst_10916 = (state_10930[(8)]);
var inst_10911 = (state_10930[(7)]);
var inst_10916__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10918 = [inst_10911,inst_10916__$1];
var inst_10919 = (new cljs.core.PersistentVector(null,2,(5),inst_10917,inst_10918,null));
var state_10930__$1 = (function (){var statearr_10950 = state_10930;
(statearr_10950[(8)] = inst_10916__$1);

return statearr_10950;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10930__$1,(8),jobs,inst_10919);
} else {
if((state_val_10931 === (3))){
var inst_10928 = (state_10930[(2)]);
var state_10930__$1 = state_10930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10930__$1,inst_10928);
} else {
if((state_val_10931 === (2))){
var state_10930__$1 = state_10930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10930__$1,(4),from);
} else {
if((state_val_10931 === (9))){
var inst_10923 = (state_10930[(2)]);
var state_10930__$1 = (function (){var statearr_10953 = state_10930;
(statearr_10953[(9)] = inst_10923);

return statearr_10953;
})();
var statearr_10955_12646 = state_10930__$1;
(statearr_10955_12646[(2)] = null);

(statearr_10955_12646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10931 === (5))){
var inst_10914 = cljs.core.async.close_BANG_(jobs);
var state_10930__$1 = state_10930;
var statearr_10957_12647 = state_10930__$1;
(statearr_10957_12647[(2)] = inst_10914);

(statearr_10957_12647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10931 === (8))){
var inst_10916 = (state_10930[(8)]);
var inst_10921 = (state_10930[(2)]);
var state_10930__$1 = (function (){var statearr_10960 = state_10930;
(statearr_10960[(10)] = inst_10921);

return statearr_10960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10930__$1,(9),results,inst_10916);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0 = (function (){
var statearr_10962 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__);

(statearr_10962[(1)] = (1));

return statearr_10962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1 = (function (state_10930){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_10930);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e10963){var ex__10624__auto__ = e10963;
var statearr_10964_12648 = state_10930;
(statearr_10964_12648[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_10930[(4)]))){
var statearr_10965_12649 = state_10930;
(statearr_10965_12649[(1)] = cljs.core.first((state_10930[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12650 = state_10930;
state_10930 = G__12650;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = function(state_10930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1.call(this,state_10930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_10966 = f__10663__auto__();
(statearr_10966[(6)] = c__10662__auto___12635);

return statearr_10966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));


var c__10662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11004){
var state_val_11005 = (state_11004[(1)]);
if((state_val_11005 === (7))){
var inst_11000 = (state_11004[(2)]);
var state_11004__$1 = state_11004;
var statearr_11006_12651 = state_11004__$1;
(statearr_11006_12651[(2)] = inst_11000);

(statearr_11006_12651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (20))){
var state_11004__$1 = state_11004;
var statearr_11007_12652 = state_11004__$1;
(statearr_11007_12652[(2)] = null);

(statearr_11007_12652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (1))){
var state_11004__$1 = state_11004;
var statearr_11008_12653 = state_11004__$1;
(statearr_11008_12653[(2)] = null);

(statearr_11008_12653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (4))){
var inst_10969 = (state_11004[(7)]);
var inst_10969__$1 = (state_11004[(2)]);
var inst_10970 = (inst_10969__$1 == null);
var state_11004__$1 = (function (){var statearr_11009 = state_11004;
(statearr_11009[(7)] = inst_10969__$1);

return statearr_11009;
})();
if(cljs.core.truth_(inst_10970)){
var statearr_11010_12654 = state_11004__$1;
(statearr_11010_12654[(1)] = (5));

} else {
var statearr_11011_12655 = state_11004__$1;
(statearr_11011_12655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (15))){
var inst_10982 = (state_11004[(8)]);
var state_11004__$1 = state_11004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11004__$1,(18),to,inst_10982);
} else {
if((state_val_11005 === (21))){
var inst_10995 = (state_11004[(2)]);
var state_11004__$1 = state_11004;
var statearr_11012_12656 = state_11004__$1;
(statearr_11012_12656[(2)] = inst_10995);

(statearr_11012_12656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (13))){
var inst_10997 = (state_11004[(2)]);
var state_11004__$1 = (function (){var statearr_11015 = state_11004;
(statearr_11015[(9)] = inst_10997);

return statearr_11015;
})();
var statearr_11017_12657 = state_11004__$1;
(statearr_11017_12657[(2)] = null);

(statearr_11017_12657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (6))){
var inst_10969 = (state_11004[(7)]);
var state_11004__$1 = state_11004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11004__$1,(11),inst_10969);
} else {
if((state_val_11005 === (17))){
var inst_10990 = (state_11004[(2)]);
var state_11004__$1 = state_11004;
if(cljs.core.truth_(inst_10990)){
var statearr_11020_12658 = state_11004__$1;
(statearr_11020_12658[(1)] = (19));

} else {
var statearr_11022_12659 = state_11004__$1;
(statearr_11022_12659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (3))){
var inst_11002 = (state_11004[(2)]);
var state_11004__$1 = state_11004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11004__$1,inst_11002);
} else {
if((state_val_11005 === (12))){
var inst_10979 = (state_11004[(10)]);
var state_11004__$1 = state_11004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11004__$1,(14),inst_10979);
} else {
if((state_val_11005 === (2))){
var state_11004__$1 = state_11004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11004__$1,(4),results);
} else {
if((state_val_11005 === (19))){
var state_11004__$1 = state_11004;
var statearr_11026_12660 = state_11004__$1;
(statearr_11026_12660[(2)] = null);

(statearr_11026_12660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (11))){
var inst_10979 = (state_11004[(2)]);
var state_11004__$1 = (function (){var statearr_11029 = state_11004;
(statearr_11029[(10)] = inst_10979);

return statearr_11029;
})();
var statearr_11030_12661 = state_11004__$1;
(statearr_11030_12661[(2)] = null);

(statearr_11030_12661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (9))){
var state_11004__$1 = state_11004;
var statearr_11034_12662 = state_11004__$1;
(statearr_11034_12662[(2)] = null);

(statearr_11034_12662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (5))){
var state_11004__$1 = state_11004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11035_12663 = state_11004__$1;
(statearr_11035_12663[(1)] = (8));

} else {
var statearr_11036_12664 = state_11004__$1;
(statearr_11036_12664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (14))){
var inst_10982 = (state_11004[(8)]);
var inst_10982__$1 = (state_11004[(2)]);
var inst_10983 = (inst_10982__$1 == null);
var inst_10984 = cljs.core.not(inst_10983);
var state_11004__$1 = (function (){var statearr_11038 = state_11004;
(statearr_11038[(8)] = inst_10982__$1);

return statearr_11038;
})();
if(inst_10984){
var statearr_11039_12665 = state_11004__$1;
(statearr_11039_12665[(1)] = (15));

} else {
var statearr_11040_12666 = state_11004__$1;
(statearr_11040_12666[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (16))){
var state_11004__$1 = state_11004;
var statearr_11042_12667 = state_11004__$1;
(statearr_11042_12667[(2)] = false);

(statearr_11042_12667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (10))){
var inst_10976 = (state_11004[(2)]);
var state_11004__$1 = state_11004;
var statearr_11043_12670 = state_11004__$1;
(statearr_11043_12670[(2)] = inst_10976);

(statearr_11043_12670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (18))){
var inst_10987 = (state_11004[(2)]);
var state_11004__$1 = state_11004;
var statearr_11044_12673 = state_11004__$1;
(statearr_11044_12673[(2)] = inst_10987);

(statearr_11044_12673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11005 === (8))){
var inst_10973 = cljs.core.async.close_BANG_(to);
var state_11004__$1 = state_11004;
var statearr_11045_12674 = state_11004__$1;
(statearr_11045_12674[(2)] = inst_10973);

(statearr_11045_12674[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0 = (function (){
var statearr_11046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__);

(statearr_11046[(1)] = (1));

return statearr_11046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1 = (function (state_11004){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11004);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11047){var ex__10624__auto__ = e11047;
var statearr_11048_12677 = state_11004;
(statearr_11048_12677[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11004[(4)]))){
var statearr_11049_12678 = state_11004;
(statearr_11049_12678[(1)] = cljs.core.first((state_11004[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12679 = state_11004;
state_11004 = G__12679;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__ = function(state_11004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1.call(this,state_11004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11050 = f__10663__auto__();
(statearr_11050[(6)] = c__10662__auto__);

return statearr_11050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));

return c__10662__auto__;
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
var G__11052 = arguments.length;
switch (G__11052) {
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
var G__11054 = arguments.length;
switch (G__11054) {
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
var G__11059 = arguments.length;
switch (G__11059) {
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
var c__10662__auto___12683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11091){
var state_val_11092 = (state_11091[(1)]);
if((state_val_11092 === (7))){
var inst_11087 = (state_11091[(2)]);
var state_11091__$1 = state_11091;
var statearr_11096_12684 = state_11091__$1;
(statearr_11096_12684[(2)] = inst_11087);

(statearr_11096_12684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (1))){
var state_11091__$1 = state_11091;
var statearr_11097_12695 = state_11091__$1;
(statearr_11097_12695[(2)] = null);

(statearr_11097_12695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (4))){
var inst_11066 = (state_11091[(7)]);
var inst_11066__$1 = (state_11091[(2)]);
var inst_11067 = (inst_11066__$1 == null);
var state_11091__$1 = (function (){var statearr_11099 = state_11091;
(statearr_11099[(7)] = inst_11066__$1);

return statearr_11099;
})();
if(cljs.core.truth_(inst_11067)){
var statearr_11100_12696 = state_11091__$1;
(statearr_11100_12696[(1)] = (5));

} else {
var statearr_11101_12697 = state_11091__$1;
(statearr_11101_12697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (13))){
var state_11091__$1 = state_11091;
var statearr_11104_12698 = state_11091__$1;
(statearr_11104_12698[(2)] = null);

(statearr_11104_12698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (6))){
var inst_11066 = (state_11091[(7)]);
var inst_11073 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11066) : p.call(null,inst_11066));
var state_11091__$1 = state_11091;
if(cljs.core.truth_(inst_11073)){
var statearr_11106_12699 = state_11091__$1;
(statearr_11106_12699[(1)] = (9));

} else {
var statearr_11107_12700 = state_11091__$1;
(statearr_11107_12700[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (3))){
var inst_11089 = (state_11091[(2)]);
var state_11091__$1 = state_11091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11091__$1,inst_11089);
} else {
if((state_val_11092 === (12))){
var state_11091__$1 = state_11091;
var statearr_11110_12701 = state_11091__$1;
(statearr_11110_12701[(2)] = null);

(statearr_11110_12701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (2))){
var state_11091__$1 = state_11091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11091__$1,(4),ch);
} else {
if((state_val_11092 === (11))){
var inst_11066 = (state_11091[(7)]);
var inst_11078 = (state_11091[(2)]);
var state_11091__$1 = state_11091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11091__$1,(8),inst_11078,inst_11066);
} else {
if((state_val_11092 === (9))){
var state_11091__$1 = state_11091;
var statearr_11111_12702 = state_11091__$1;
(statearr_11111_12702[(2)] = tc);

(statearr_11111_12702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (5))){
var inst_11069 = cljs.core.async.close_BANG_(tc);
var inst_11071 = cljs.core.async.close_BANG_(fc);
var state_11091__$1 = (function (){var statearr_11112 = state_11091;
(statearr_11112[(8)] = inst_11069);

return statearr_11112;
})();
var statearr_11113_12703 = state_11091__$1;
(statearr_11113_12703[(2)] = inst_11071);

(statearr_11113_12703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (14))){
var inst_11085 = (state_11091[(2)]);
var state_11091__$1 = state_11091;
var statearr_11114_12704 = state_11091__$1;
(statearr_11114_12704[(2)] = inst_11085);

(statearr_11114_12704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (10))){
var state_11091__$1 = state_11091;
var statearr_11115_12706 = state_11091__$1;
(statearr_11115_12706[(2)] = fc);

(statearr_11115_12706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11092 === (8))){
var inst_11080 = (state_11091[(2)]);
var state_11091__$1 = state_11091;
if(cljs.core.truth_(inst_11080)){
var statearr_11116_12707 = state_11091__$1;
(statearr_11116_12707[(1)] = (12));

} else {
var statearr_11117_12708 = state_11091__$1;
(statearr_11117_12708[(1)] = (13));

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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_11118 = [null,null,null,null,null,null,null,null,null];
(statearr_11118[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_11118[(1)] = (1));

return statearr_11118;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_11091){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11091);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11119){var ex__10624__auto__ = e11119;
var statearr_11120_12709 = state_11091;
(statearr_11120_12709[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11091[(4)]))){
var statearr_11121_12710 = state_11091;
(statearr_11121_12710[(1)] = cljs.core.first((state_11091[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12711 = state_11091;
state_11091 = G__12711;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_11091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_11091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11122 = f__10663__auto__();
(statearr_11122[(6)] = c__10662__auto___12683);

return statearr_11122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
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
var c__10662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11144){
var state_val_11145 = (state_11144[(1)]);
if((state_val_11145 === (7))){
var inst_11140 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11146_12712 = state_11144__$1;
(statearr_11146_12712[(2)] = inst_11140);

(statearr_11146_12712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (1))){
var inst_11123 = init;
var inst_11124 = inst_11123;
var state_11144__$1 = (function (){var statearr_11147 = state_11144;
(statearr_11147[(7)] = inst_11124);

return statearr_11147;
})();
var statearr_11148_12713 = state_11144__$1;
(statearr_11148_12713[(2)] = null);

(statearr_11148_12713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (4))){
var inst_11127 = (state_11144[(8)]);
var inst_11127__$1 = (state_11144[(2)]);
var inst_11128 = (inst_11127__$1 == null);
var state_11144__$1 = (function (){var statearr_11150 = state_11144;
(statearr_11150[(8)] = inst_11127__$1);

return statearr_11150;
})();
if(cljs.core.truth_(inst_11128)){
var statearr_11151_12714 = state_11144__$1;
(statearr_11151_12714[(1)] = (5));

} else {
var statearr_11152_12715 = state_11144__$1;
(statearr_11152_12715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (6))){
var inst_11124 = (state_11144[(7)]);
var inst_11127 = (state_11144[(8)]);
var inst_11131 = (state_11144[(9)]);
var inst_11131__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11124,inst_11127) : f.call(null,inst_11124,inst_11127));
var inst_11132 = cljs.core.reduced_QMARK_(inst_11131__$1);
var state_11144__$1 = (function (){var statearr_11153 = state_11144;
(statearr_11153[(9)] = inst_11131__$1);

return statearr_11153;
})();
if(inst_11132){
var statearr_11154_12717 = state_11144__$1;
(statearr_11154_12717[(1)] = (8));

} else {
var statearr_11155_12718 = state_11144__$1;
(statearr_11155_12718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (3))){
var inst_11142 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11144__$1,inst_11142);
} else {
if((state_val_11145 === (2))){
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11144__$1,(4),ch);
} else {
if((state_val_11145 === (9))){
var inst_11131 = (state_11144[(9)]);
var inst_11124 = inst_11131;
var state_11144__$1 = (function (){var statearr_11159 = state_11144;
(statearr_11159[(7)] = inst_11124);

return statearr_11159;
})();
var statearr_11160_12721 = state_11144__$1;
(statearr_11160_12721[(2)] = null);

(statearr_11160_12721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (5))){
var inst_11124 = (state_11144[(7)]);
var state_11144__$1 = state_11144;
var statearr_11162_12723 = state_11144__$1;
(statearr_11162_12723[(2)] = inst_11124);

(statearr_11162_12723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (10))){
var inst_11138 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11164_12724 = state_11144__$1;
(statearr_11164_12724[(2)] = inst_11138);

(statearr_11164_12724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (8))){
var inst_11131 = (state_11144[(9)]);
var inst_11134 = cljs.core.deref(inst_11131);
var state_11144__$1 = state_11144;
var statearr_11165_12725 = state_11144__$1;
(statearr_11165_12725[(2)] = inst_11134);

(statearr_11165_12725[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10621__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10621__auto____0 = (function (){
var statearr_11168 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11168[(0)] = cljs$core$async$reduce_$_state_machine__10621__auto__);

(statearr_11168[(1)] = (1));

return statearr_11168;
});
var cljs$core$async$reduce_$_state_machine__10621__auto____1 = (function (state_11144){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11144);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11170){var ex__10624__auto__ = e11170;
var statearr_11172_12728 = state_11144;
(statearr_11172_12728[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11144[(4)]))){
var statearr_11173_12729 = state_11144;
(statearr_11173_12729[(1)] = cljs.core.first((state_11144[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12730 = state_11144;
state_11144 = G__12730;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10621__auto__ = function(state_11144){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10621__auto____1.call(this,state_11144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10621__auto____0;
cljs$core$async$reduce_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10621__auto____1;
return cljs$core$async$reduce_$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11174 = f__10663__auto__();
(statearr_11174[(6)] = c__10662__auto__);

return statearr_11174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));

return c__10662__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11180){
var state_val_11181 = (state_11180[(1)]);
if((state_val_11181 === (1))){
var inst_11175 = cljs.core.async.reduce(f__$1,init,ch);
var state_11180__$1 = state_11180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11180__$1,(2),inst_11175);
} else {
if((state_val_11181 === (2))){
var inst_11177 = (state_11180[(2)]);
var inst_11178 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11177) : f__$1.call(null,inst_11177));
var state_11180__$1 = state_11180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11180__$1,inst_11178);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10621__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10621__auto____0 = (function (){
var statearr_11182 = [null,null,null,null,null,null,null];
(statearr_11182[(0)] = cljs$core$async$transduce_$_state_machine__10621__auto__);

(statearr_11182[(1)] = (1));

return statearr_11182;
});
var cljs$core$async$transduce_$_state_machine__10621__auto____1 = (function (state_11180){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11180);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11183){var ex__10624__auto__ = e11183;
var statearr_11184_12733 = state_11180;
(statearr_11184_12733[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11180[(4)]))){
var statearr_11185_12734 = state_11180;
(statearr_11185_12734[(1)] = cljs.core.first((state_11180[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12735 = state_11180;
state_11180 = G__12735;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10621__auto__ = function(state_11180){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10621__auto____1.call(this,state_11180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10621__auto____0;
cljs$core$async$transduce_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10621__auto____1;
return cljs$core$async$transduce_$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11186 = f__10663__auto__();
(statearr_11186[(6)] = c__10662__auto__);

return statearr_11186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));

return c__10662__auto__;
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
var G__11188 = arguments.length;
switch (G__11188) {
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
var c__10662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11213){
var state_val_11214 = (state_11213[(1)]);
if((state_val_11214 === (7))){
var inst_11195 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
var statearr_11219_12744 = state_11213__$1;
(statearr_11219_12744[(2)] = inst_11195);

(statearr_11219_12744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (1))){
var inst_11189 = cljs.core.seq(coll);
var inst_11190 = inst_11189;
var state_11213__$1 = (function (){var statearr_11224 = state_11213;
(statearr_11224[(7)] = inst_11190);

return statearr_11224;
})();
var statearr_11225_12749 = state_11213__$1;
(statearr_11225_12749[(2)] = null);

(statearr_11225_12749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (4))){
var inst_11190 = (state_11213[(7)]);
var inst_11193 = cljs.core.first(inst_11190);
var state_11213__$1 = state_11213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11213__$1,(7),ch,inst_11193);
} else {
if((state_val_11214 === (13))){
var inst_11207 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
var statearr_11230_12750 = state_11213__$1;
(statearr_11230_12750[(2)] = inst_11207);

(statearr_11230_12750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (6))){
var inst_11198 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
if(cljs.core.truth_(inst_11198)){
var statearr_11231_12755 = state_11213__$1;
(statearr_11231_12755[(1)] = (8));

} else {
var statearr_11232_12756 = state_11213__$1;
(statearr_11232_12756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (3))){
var inst_11211 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11213__$1,inst_11211);
} else {
if((state_val_11214 === (12))){
var state_11213__$1 = state_11213;
var statearr_11233_12757 = state_11213__$1;
(statearr_11233_12757[(2)] = null);

(statearr_11233_12757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (2))){
var inst_11190 = (state_11213[(7)]);
var state_11213__$1 = state_11213;
if(cljs.core.truth_(inst_11190)){
var statearr_11235_12758 = state_11213__$1;
(statearr_11235_12758[(1)] = (4));

} else {
var statearr_11237_12759 = state_11213__$1;
(statearr_11237_12759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (11))){
var inst_11204 = cljs.core.async.close_BANG_(ch);
var state_11213__$1 = state_11213;
var statearr_11240_12760 = state_11213__$1;
(statearr_11240_12760[(2)] = inst_11204);

(statearr_11240_12760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (9))){
var state_11213__$1 = state_11213;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11241_12761 = state_11213__$1;
(statearr_11241_12761[(1)] = (11));

} else {
var statearr_11242_12762 = state_11213__$1;
(statearr_11242_12762[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (5))){
var inst_11190 = (state_11213[(7)]);
var state_11213__$1 = state_11213;
var statearr_11243_12763 = state_11213__$1;
(statearr_11243_12763[(2)] = inst_11190);

(statearr_11243_12763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (10))){
var inst_11209 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
var statearr_11244_12764 = state_11213__$1;
(statearr_11244_12764[(2)] = inst_11209);

(statearr_11244_12764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (8))){
var inst_11190 = (state_11213[(7)]);
var inst_11200 = cljs.core.next(inst_11190);
var inst_11190__$1 = inst_11200;
var state_11213__$1 = (function (){var statearr_11245 = state_11213;
(statearr_11245[(7)] = inst_11190__$1);

return statearr_11245;
})();
var statearr_11246_12765 = state_11213__$1;
(statearr_11246_12765[(2)] = null);

(statearr_11246_12765[(1)] = (2));


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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_11247 = [null,null,null,null,null,null,null,null];
(statearr_11247[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_11247[(1)] = (1));

return statearr_11247;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_11213){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11213);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11248){var ex__10624__auto__ = e11248;
var statearr_11249_12766 = state_11213;
(statearr_11249_12766[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11213[(4)]))){
var statearr_11250_12767 = state_11213;
(statearr_11250_12767[(1)] = cljs.core.first((state_11213[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12768 = state_11213;
state_11213 = G__12768;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_11213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_11213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11251 = f__10663__auto__();
(statearr_11251[(6)] = c__10662__auto__);

return statearr_11251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));

return c__10662__auto__;
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
var G__11253 = arguments.length;
switch (G__11253) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12770 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12770(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12773 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12773(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12783 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12783(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12784 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12784(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11262 = (function (ch,cs,meta11263){
this.ch = ch;
this.cs = cs;
this.meta11263 = meta11263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11264,meta11263__$1){
var self__ = this;
var _11264__$1 = this;
return (new cljs.core.async.t_cljs$core$async11262(self__.ch,self__.cs,meta11263__$1));
}));

(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11264){
var self__ = this;
var _11264__$1 = this;
return self__.meta11263;
}));

(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11262.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11263","meta11263",-1861030407,null)], null);
}));

(cljs.core.async.t_cljs$core$async11262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11262");

(cljs.core.async.t_cljs$core$async11262.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11262.
 */
cljs.core.async.__GT_t_cljs$core$async11262 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11262(ch__$1,cs__$1,meta11263){
return (new cljs.core.async.t_cljs$core$async11262(ch__$1,cs__$1,meta11263));
});

}

return (new cljs.core.async.t_cljs$core$async11262(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10662__auto___12785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11403){
var state_val_11404 = (state_11403[(1)]);
if((state_val_11404 === (7))){
var inst_11398 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11405_12786 = state_11403__$1;
(statearr_11405_12786[(2)] = inst_11398);

(statearr_11405_12786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (20))){
var inst_11298 = (state_11403[(7)]);
var inst_11310 = cljs.core.first(inst_11298);
var inst_11311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11310,(0),null);
var inst_11312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11310,(1),null);
var state_11403__$1 = (function (){var statearr_11406 = state_11403;
(statearr_11406[(8)] = inst_11311);

return statearr_11406;
})();
if(cljs.core.truth_(inst_11312)){
var statearr_11407_12787 = state_11403__$1;
(statearr_11407_12787[(1)] = (22));

} else {
var statearr_11408_12788 = state_11403__$1;
(statearr_11408_12788[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (27))){
var inst_11267 = (state_11403[(9)]);
var inst_11342 = (state_11403[(10)]);
var inst_11340 = (state_11403[(11)]);
var inst_11347 = (state_11403[(12)]);
var inst_11347__$1 = cljs.core._nth(inst_11340,inst_11342);
var inst_11348 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11347__$1,inst_11267,done);
var state_11403__$1 = (function (){var statearr_11409 = state_11403;
(statearr_11409[(12)] = inst_11347__$1);

return statearr_11409;
})();
if(cljs.core.truth_(inst_11348)){
var statearr_11410_12794 = state_11403__$1;
(statearr_11410_12794[(1)] = (30));

} else {
var statearr_11411_12795 = state_11403__$1;
(statearr_11411_12795[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (1))){
var state_11403__$1 = state_11403;
var statearr_11412_12796 = state_11403__$1;
(statearr_11412_12796[(2)] = null);

(statearr_11412_12796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (24))){
var inst_11298 = (state_11403[(7)]);
var inst_11317 = (state_11403[(2)]);
var inst_11318 = cljs.core.next(inst_11298);
var inst_11276 = inst_11318;
var inst_11277 = null;
var inst_11278 = (0);
var inst_11279 = (0);
var state_11403__$1 = (function (){var statearr_11413 = state_11403;
(statearr_11413[(13)] = inst_11276);

(statearr_11413[(14)] = inst_11279);

(statearr_11413[(15)] = inst_11278);

(statearr_11413[(16)] = inst_11317);

(statearr_11413[(17)] = inst_11277);

return statearr_11413;
})();
var statearr_11414_12797 = state_11403__$1;
(statearr_11414_12797[(2)] = null);

(statearr_11414_12797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (39))){
var state_11403__$1 = state_11403;
var statearr_11418_12798 = state_11403__$1;
(statearr_11418_12798[(2)] = null);

(statearr_11418_12798[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (4))){
var inst_11267 = (state_11403[(9)]);
var inst_11267__$1 = (state_11403[(2)]);
var inst_11268 = (inst_11267__$1 == null);
var state_11403__$1 = (function (){var statearr_11419 = state_11403;
(statearr_11419[(9)] = inst_11267__$1);

return statearr_11419;
})();
if(cljs.core.truth_(inst_11268)){
var statearr_11420_12799 = state_11403__$1;
(statearr_11420_12799[(1)] = (5));

} else {
var statearr_11421_12800 = state_11403__$1;
(statearr_11421_12800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (15))){
var inst_11276 = (state_11403[(13)]);
var inst_11279 = (state_11403[(14)]);
var inst_11278 = (state_11403[(15)]);
var inst_11277 = (state_11403[(17)]);
var inst_11294 = (state_11403[(2)]);
var inst_11295 = (inst_11279 + (1));
var tmp11415 = inst_11276;
var tmp11416 = inst_11278;
var tmp11417 = inst_11277;
var inst_11276__$1 = tmp11415;
var inst_11277__$1 = tmp11417;
var inst_11278__$1 = tmp11416;
var inst_11279__$1 = inst_11295;
var state_11403__$1 = (function (){var statearr_11422 = state_11403;
(statearr_11422[(13)] = inst_11276__$1);

(statearr_11422[(18)] = inst_11294);

(statearr_11422[(14)] = inst_11279__$1);

(statearr_11422[(15)] = inst_11278__$1);

(statearr_11422[(17)] = inst_11277__$1);

return statearr_11422;
})();
var statearr_11423_12801 = state_11403__$1;
(statearr_11423_12801[(2)] = null);

(statearr_11423_12801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (21))){
var inst_11321 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11427_12802 = state_11403__$1;
(statearr_11427_12802[(2)] = inst_11321);

(statearr_11427_12802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (31))){
var inst_11347 = (state_11403[(12)]);
var inst_11353 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11347);
var state_11403__$1 = state_11403;
var statearr_11429_12803 = state_11403__$1;
(statearr_11429_12803[(2)] = inst_11353);

(statearr_11429_12803[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (32))){
var inst_11342 = (state_11403[(10)]);
var inst_11340 = (state_11403[(11)]);
var inst_11339 = (state_11403[(19)]);
var inst_11341 = (state_11403[(20)]);
var inst_11355 = (state_11403[(2)]);
var inst_11356 = (inst_11342 + (1));
var tmp11424 = inst_11340;
var tmp11425 = inst_11339;
var tmp11426 = inst_11341;
var inst_11339__$1 = tmp11425;
var inst_11340__$1 = tmp11424;
var inst_11341__$1 = tmp11426;
var inst_11342__$1 = inst_11356;
var state_11403__$1 = (function (){var statearr_11433 = state_11403;
(statearr_11433[(21)] = inst_11355);

(statearr_11433[(10)] = inst_11342__$1);

(statearr_11433[(11)] = inst_11340__$1);

(statearr_11433[(19)] = inst_11339__$1);

(statearr_11433[(20)] = inst_11341__$1);

return statearr_11433;
})();
var statearr_11434_12804 = state_11403__$1;
(statearr_11434_12804[(2)] = null);

(statearr_11434_12804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (40))){
var inst_11368 = (state_11403[(22)]);
var inst_11372 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11368);
var state_11403__$1 = state_11403;
var statearr_11435_12805 = state_11403__$1;
(statearr_11435_12805[(2)] = inst_11372);

(statearr_11435_12805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (33))){
var inst_11359 = (state_11403[(23)]);
var inst_11361 = cljs.core.chunked_seq_QMARK_(inst_11359);
var state_11403__$1 = state_11403;
if(inst_11361){
var statearr_11437_12806 = state_11403__$1;
(statearr_11437_12806[(1)] = (36));

} else {
var statearr_11439_12807 = state_11403__$1;
(statearr_11439_12807[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (13))){
var inst_11288 = (state_11403[(24)]);
var inst_11291 = cljs.core.async.close_BANG_(inst_11288);
var state_11403__$1 = state_11403;
var statearr_11443_12808 = state_11403__$1;
(statearr_11443_12808[(2)] = inst_11291);

(statearr_11443_12808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (22))){
var inst_11311 = (state_11403[(8)]);
var inst_11314 = cljs.core.async.close_BANG_(inst_11311);
var state_11403__$1 = state_11403;
var statearr_11444_12809 = state_11403__$1;
(statearr_11444_12809[(2)] = inst_11314);

(statearr_11444_12809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (36))){
var inst_11359 = (state_11403[(23)]);
var inst_11363 = cljs.core.chunk_first(inst_11359);
var inst_11364 = cljs.core.chunk_rest(inst_11359);
var inst_11365 = cljs.core.count(inst_11363);
var inst_11339 = inst_11364;
var inst_11340 = inst_11363;
var inst_11341 = inst_11365;
var inst_11342 = (0);
var state_11403__$1 = (function (){var statearr_11445 = state_11403;
(statearr_11445[(10)] = inst_11342);

(statearr_11445[(11)] = inst_11340);

(statearr_11445[(19)] = inst_11339);

(statearr_11445[(20)] = inst_11341);

return statearr_11445;
})();
var statearr_11446_12810 = state_11403__$1;
(statearr_11446_12810[(2)] = null);

(statearr_11446_12810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (41))){
var inst_11359 = (state_11403[(23)]);
var inst_11374 = (state_11403[(2)]);
var inst_11375 = cljs.core.next(inst_11359);
var inst_11339 = inst_11375;
var inst_11340 = null;
var inst_11341 = (0);
var inst_11342 = (0);
var state_11403__$1 = (function (){var statearr_11447 = state_11403;
(statearr_11447[(25)] = inst_11374);

(statearr_11447[(10)] = inst_11342);

(statearr_11447[(11)] = inst_11340);

(statearr_11447[(19)] = inst_11339);

(statearr_11447[(20)] = inst_11341);

return statearr_11447;
})();
var statearr_11448_12811 = state_11403__$1;
(statearr_11448_12811[(2)] = null);

(statearr_11448_12811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (43))){
var state_11403__$1 = state_11403;
var statearr_11449_12812 = state_11403__$1;
(statearr_11449_12812[(2)] = null);

(statearr_11449_12812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (29))){
var inst_11383 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11450_12813 = state_11403__$1;
(statearr_11450_12813[(2)] = inst_11383);

(statearr_11450_12813[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (44))){
var inst_11395 = (state_11403[(2)]);
var state_11403__$1 = (function (){var statearr_11451 = state_11403;
(statearr_11451[(26)] = inst_11395);

return statearr_11451;
})();
var statearr_11452_12814 = state_11403__$1;
(statearr_11452_12814[(2)] = null);

(statearr_11452_12814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (6))){
var inst_11331 = (state_11403[(27)]);
var inst_11330 = cljs.core.deref(cs);
var inst_11331__$1 = cljs.core.keys(inst_11330);
var inst_11332 = cljs.core.count(inst_11331__$1);
var inst_11333 = cljs.core.reset_BANG_(dctr,inst_11332);
var inst_11338 = cljs.core.seq(inst_11331__$1);
var inst_11339 = inst_11338;
var inst_11340 = null;
var inst_11341 = (0);
var inst_11342 = (0);
var state_11403__$1 = (function (){var statearr_11453 = state_11403;
(statearr_11453[(27)] = inst_11331__$1);

(statearr_11453[(10)] = inst_11342);

(statearr_11453[(11)] = inst_11340);

(statearr_11453[(28)] = inst_11333);

(statearr_11453[(19)] = inst_11339);

(statearr_11453[(20)] = inst_11341);

return statearr_11453;
})();
var statearr_11454_12815 = state_11403__$1;
(statearr_11454_12815[(2)] = null);

(statearr_11454_12815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (28))){
var inst_11359 = (state_11403[(23)]);
var inst_11339 = (state_11403[(19)]);
var inst_11359__$1 = cljs.core.seq(inst_11339);
var state_11403__$1 = (function (){var statearr_11455 = state_11403;
(statearr_11455[(23)] = inst_11359__$1);

return statearr_11455;
})();
if(inst_11359__$1){
var statearr_11456_12816 = state_11403__$1;
(statearr_11456_12816[(1)] = (33));

} else {
var statearr_11457_12817 = state_11403__$1;
(statearr_11457_12817[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (25))){
var inst_11342 = (state_11403[(10)]);
var inst_11341 = (state_11403[(20)]);
var inst_11344 = (inst_11342 < inst_11341);
var inst_11345 = inst_11344;
var state_11403__$1 = state_11403;
if(cljs.core.truth_(inst_11345)){
var statearr_11458_12818 = state_11403__$1;
(statearr_11458_12818[(1)] = (27));

} else {
var statearr_11459_12819 = state_11403__$1;
(statearr_11459_12819[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (34))){
var state_11403__$1 = state_11403;
var statearr_11460_12820 = state_11403__$1;
(statearr_11460_12820[(2)] = null);

(statearr_11460_12820[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (17))){
var state_11403__$1 = state_11403;
var statearr_11462_12824 = state_11403__$1;
(statearr_11462_12824[(2)] = null);

(statearr_11462_12824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (3))){
var inst_11400 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11403__$1,inst_11400);
} else {
if((state_val_11404 === (12))){
var inst_11326 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11464_12825 = state_11403__$1;
(statearr_11464_12825[(2)] = inst_11326);

(statearr_11464_12825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (2))){
var state_11403__$1 = state_11403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11403__$1,(4),ch);
} else {
if((state_val_11404 === (23))){
var state_11403__$1 = state_11403;
var statearr_11468_12826 = state_11403__$1;
(statearr_11468_12826[(2)] = null);

(statearr_11468_12826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (35))){
var inst_11381 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11469_12827 = state_11403__$1;
(statearr_11469_12827[(2)] = inst_11381);

(statearr_11469_12827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (19))){
var inst_11298 = (state_11403[(7)]);
var inst_11302 = cljs.core.chunk_first(inst_11298);
var inst_11303 = cljs.core.chunk_rest(inst_11298);
var inst_11304 = cljs.core.count(inst_11302);
var inst_11276 = inst_11303;
var inst_11277 = inst_11302;
var inst_11278 = inst_11304;
var inst_11279 = (0);
var state_11403__$1 = (function (){var statearr_11470 = state_11403;
(statearr_11470[(13)] = inst_11276);

(statearr_11470[(14)] = inst_11279);

(statearr_11470[(15)] = inst_11278);

(statearr_11470[(17)] = inst_11277);

return statearr_11470;
})();
var statearr_11471_12828 = state_11403__$1;
(statearr_11471_12828[(2)] = null);

(statearr_11471_12828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (11))){
var inst_11298 = (state_11403[(7)]);
var inst_11276 = (state_11403[(13)]);
var inst_11298__$1 = cljs.core.seq(inst_11276);
var state_11403__$1 = (function (){var statearr_11472 = state_11403;
(statearr_11472[(7)] = inst_11298__$1);

return statearr_11472;
})();
if(inst_11298__$1){
var statearr_11473_12829 = state_11403__$1;
(statearr_11473_12829[(1)] = (16));

} else {
var statearr_11474_12830 = state_11403__$1;
(statearr_11474_12830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (9))){
var inst_11328 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11475_12831 = state_11403__$1;
(statearr_11475_12831[(2)] = inst_11328);

(statearr_11475_12831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (5))){
var inst_11274 = cljs.core.deref(cs);
var inst_11275 = cljs.core.seq(inst_11274);
var inst_11276 = inst_11275;
var inst_11277 = null;
var inst_11278 = (0);
var inst_11279 = (0);
var state_11403__$1 = (function (){var statearr_11476 = state_11403;
(statearr_11476[(13)] = inst_11276);

(statearr_11476[(14)] = inst_11279);

(statearr_11476[(15)] = inst_11278);

(statearr_11476[(17)] = inst_11277);

return statearr_11476;
})();
var statearr_11477_12832 = state_11403__$1;
(statearr_11477_12832[(2)] = null);

(statearr_11477_12832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (14))){
var state_11403__$1 = state_11403;
var statearr_11478_12833 = state_11403__$1;
(statearr_11478_12833[(2)] = null);

(statearr_11478_12833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (45))){
var inst_11392 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11480_12834 = state_11403__$1;
(statearr_11480_12834[(2)] = inst_11392);

(statearr_11480_12834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (26))){
var inst_11331 = (state_11403[(27)]);
var inst_11385 = (state_11403[(2)]);
var inst_11386 = cljs.core.seq(inst_11331);
var state_11403__$1 = (function (){var statearr_11481 = state_11403;
(statearr_11481[(29)] = inst_11385);

return statearr_11481;
})();
if(inst_11386){
var statearr_11482_12835 = state_11403__$1;
(statearr_11482_12835[(1)] = (42));

} else {
var statearr_11484_12836 = state_11403__$1;
(statearr_11484_12836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (16))){
var inst_11298 = (state_11403[(7)]);
var inst_11300 = cljs.core.chunked_seq_QMARK_(inst_11298);
var state_11403__$1 = state_11403;
if(inst_11300){
var statearr_11486_12837 = state_11403__$1;
(statearr_11486_12837[(1)] = (19));

} else {
var statearr_11489_12838 = state_11403__$1;
(statearr_11489_12838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (38))){
var inst_11378 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11490_12839 = state_11403__$1;
(statearr_11490_12839[(2)] = inst_11378);

(statearr_11490_12839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (30))){
var state_11403__$1 = state_11403;
var statearr_11491_12840 = state_11403__$1;
(statearr_11491_12840[(2)] = null);

(statearr_11491_12840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (10))){
var inst_11279 = (state_11403[(14)]);
var inst_11277 = (state_11403[(17)]);
var inst_11287 = cljs.core._nth(inst_11277,inst_11279);
var inst_11288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11287,(0),null);
var inst_11289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11287,(1),null);
var state_11403__$1 = (function (){var statearr_11492 = state_11403;
(statearr_11492[(24)] = inst_11288);

return statearr_11492;
})();
if(cljs.core.truth_(inst_11289)){
var statearr_11493_12841 = state_11403__$1;
(statearr_11493_12841[(1)] = (13));

} else {
var statearr_11494_12842 = state_11403__$1;
(statearr_11494_12842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (18))){
var inst_11324 = (state_11403[(2)]);
var state_11403__$1 = state_11403;
var statearr_11495_12844 = state_11403__$1;
(statearr_11495_12844[(2)] = inst_11324);

(statearr_11495_12844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (42))){
var state_11403__$1 = state_11403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11403__$1,(45),dchan);
} else {
if((state_val_11404 === (37))){
var inst_11267 = (state_11403[(9)]);
var inst_11368 = (state_11403[(22)]);
var inst_11359 = (state_11403[(23)]);
var inst_11368__$1 = cljs.core.first(inst_11359);
var inst_11369 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11368__$1,inst_11267,done);
var state_11403__$1 = (function (){var statearr_11496 = state_11403;
(statearr_11496[(22)] = inst_11368__$1);

return statearr_11496;
})();
if(cljs.core.truth_(inst_11369)){
var statearr_11497_12845 = state_11403__$1;
(statearr_11497_12845[(1)] = (39));

} else {
var statearr_11498_12846 = state_11403__$1;
(statearr_11498_12846[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11404 === (8))){
var inst_11279 = (state_11403[(14)]);
var inst_11278 = (state_11403[(15)]);
var inst_11281 = (inst_11279 < inst_11278);
var inst_11282 = inst_11281;
var state_11403__$1 = state_11403;
if(cljs.core.truth_(inst_11282)){
var statearr_11499_12847 = state_11403__$1;
(statearr_11499_12847[(1)] = (10));

} else {
var statearr_11500_12848 = state_11403__$1;
(statearr_11500_12848[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10621__auto__ = null;
var cljs$core$async$mult_$_state_machine__10621__auto____0 = (function (){
var statearr_11501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11501[(0)] = cljs$core$async$mult_$_state_machine__10621__auto__);

(statearr_11501[(1)] = (1));

return statearr_11501;
});
var cljs$core$async$mult_$_state_machine__10621__auto____1 = (function (state_11403){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11403);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11502){var ex__10624__auto__ = e11502;
var statearr_11503_12849 = state_11403;
(statearr_11503_12849[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11403[(4)]))){
var statearr_11504_12850 = state_11403;
(statearr_11504_12850[(1)] = cljs.core.first((state_11403[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12851 = state_11403;
state_11403 = G__12851;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10621__auto__ = function(state_11403){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10621__auto____1.call(this,state_11403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10621__auto____0;
cljs$core$async$mult_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10621__auto____1;
return cljs$core$async$mult_$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11505 = f__10663__auto__();
(statearr_11505[(6)] = c__10662__auto___12785);

return statearr_11505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
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
var G__11507 = arguments.length;
switch (G__11507) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12853 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12853(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12854 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12854(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12855 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12855(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12859 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12859(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12860 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12860(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12861 = arguments.length;
var i__4737__auto___12862 = (0);
while(true){
if((i__4737__auto___12862 < len__4736__auto___12861)){
args__4742__auto__.push((arguments[i__4737__auto___12862]));

var G__12863 = (i__4737__auto___12862 + (1));
i__4737__auto___12862 = G__12863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11526){
var map__11527 = p__11526;
var map__11527__$1 = (((((!((map__11527 == null))))?(((((map__11527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11527):map__11527);
var opts = map__11527__$1;
var statearr_11529_12864 = state;
(statearr_11529_12864[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11530_12865 = state;
(statearr_11530_12865[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11531_12866 = state;
(statearr_11531_12866[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11522){
var G__11523 = cljs.core.first(seq11522);
var seq11522__$1 = cljs.core.next(seq11522);
var G__11524 = cljs.core.first(seq11522__$1);
var seq11522__$2 = cljs.core.next(seq11522__$1);
var G__11525 = cljs.core.first(seq11522__$2);
var seq11522__$3 = cljs.core.next(seq11522__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11523,G__11524,G__11525,seq11522__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11532 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11533){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11533 = meta11533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11534,meta11533__$1){
var self__ = this;
var _11534__$1 = this;
return (new cljs.core.async.t_cljs$core$async11532(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11533__$1));
}));

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11534){
var self__ = this;
var _11534__$1 = this;
return self__.meta11533;
}));

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11533","meta11533",-1975641634,null)], null);
}));

(cljs.core.async.t_cljs$core$async11532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11532");

(cljs.core.async.t_cljs$core$async11532.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11532.
 */
cljs.core.async.__GT_t_cljs$core$async11532 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11532(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11533){
return (new cljs.core.async.t_cljs$core$async11532(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11533));
});

}

return (new cljs.core.async.t_cljs$core$async11532(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10662__auto___12868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11656){
var state_val_11657 = (state_11656[(1)]);
if((state_val_11657 === (7))){
var inst_11557 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
var statearr_11658_12869 = state_11656__$1;
(statearr_11658_12869[(2)] = inst_11557);

(statearr_11658_12869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (20))){
var inst_11569 = (state_11656[(7)]);
var state_11656__$1 = state_11656;
var statearr_11659_12870 = state_11656__$1;
(statearr_11659_12870[(2)] = inst_11569);

(statearr_11659_12870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (27))){
var state_11656__$1 = state_11656;
var statearr_11660_12871 = state_11656__$1;
(statearr_11660_12871[(2)] = null);

(statearr_11660_12871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (1))){
var inst_11544 = (state_11656[(8)]);
var inst_11544__$1 = calc_state();
var inst_11546 = (inst_11544__$1 == null);
var inst_11547 = cljs.core.not(inst_11546);
var state_11656__$1 = (function (){var statearr_11661 = state_11656;
(statearr_11661[(8)] = inst_11544__$1);

return statearr_11661;
})();
if(inst_11547){
var statearr_11662_12872 = state_11656__$1;
(statearr_11662_12872[(1)] = (2));

} else {
var statearr_11663_12873 = state_11656__$1;
(statearr_11663_12873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (24))){
var inst_11593 = (state_11656[(9)]);
var inst_11616 = (state_11656[(10)]);
var inst_11602 = (state_11656[(11)]);
var inst_11616__$1 = (inst_11593.cljs$core$IFn$_invoke$arity$1 ? inst_11593.cljs$core$IFn$_invoke$arity$1(inst_11602) : inst_11593.call(null,inst_11602));
var state_11656__$1 = (function (){var statearr_11664 = state_11656;
(statearr_11664[(10)] = inst_11616__$1);

return statearr_11664;
})();
if(cljs.core.truth_(inst_11616__$1)){
var statearr_11665_12874 = state_11656__$1;
(statearr_11665_12874[(1)] = (29));

} else {
var statearr_11666_12875 = state_11656__$1;
(statearr_11666_12875[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (4))){
var inst_11560 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
if(cljs.core.truth_(inst_11560)){
var statearr_11667_12876 = state_11656__$1;
(statearr_11667_12876[(1)] = (8));

} else {
var statearr_11668_12877 = state_11656__$1;
(statearr_11668_12877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (15))){
var inst_11587 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
if(cljs.core.truth_(inst_11587)){
var statearr_11669_12878 = state_11656__$1;
(statearr_11669_12878[(1)] = (19));

} else {
var statearr_11670_12879 = state_11656__$1;
(statearr_11670_12879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (21))){
var inst_11592 = (state_11656[(12)]);
var inst_11592__$1 = (state_11656[(2)]);
var inst_11593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11592__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11592__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11592__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11656__$1 = (function (){var statearr_11671 = state_11656;
(statearr_11671[(9)] = inst_11593);

(statearr_11671[(12)] = inst_11592__$1);

(statearr_11671[(13)] = inst_11594);

return statearr_11671;
})();
return cljs.core.async.ioc_alts_BANG_(state_11656__$1,(22),inst_11595);
} else {
if((state_val_11657 === (31))){
var inst_11624 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
if(cljs.core.truth_(inst_11624)){
var statearr_11672_12880 = state_11656__$1;
(statearr_11672_12880[(1)] = (32));

} else {
var statearr_11673_12881 = state_11656__$1;
(statearr_11673_12881[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (32))){
var inst_11601 = (state_11656[(14)]);
var state_11656__$1 = state_11656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11656__$1,(35),out,inst_11601);
} else {
if((state_val_11657 === (33))){
var inst_11592 = (state_11656[(12)]);
var inst_11569 = inst_11592;
var state_11656__$1 = (function (){var statearr_11674 = state_11656;
(statearr_11674[(7)] = inst_11569);

return statearr_11674;
})();
var statearr_11675_12882 = state_11656__$1;
(statearr_11675_12882[(2)] = null);

(statearr_11675_12882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (13))){
var inst_11569 = (state_11656[(7)]);
var inst_11576 = inst_11569.cljs$lang$protocol_mask$partition0$;
var inst_11577 = (inst_11576 & (64));
var inst_11578 = inst_11569.cljs$core$ISeq$;
var inst_11579 = (cljs.core.PROTOCOL_SENTINEL === inst_11578);
var inst_11580 = ((inst_11577) || (inst_11579));
var state_11656__$1 = state_11656;
if(cljs.core.truth_(inst_11580)){
var statearr_11676_12883 = state_11656__$1;
(statearr_11676_12883[(1)] = (16));

} else {
var statearr_11677_12884 = state_11656__$1;
(statearr_11677_12884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (22))){
var inst_11601 = (state_11656[(14)]);
var inst_11602 = (state_11656[(11)]);
var inst_11600 = (state_11656[(2)]);
var inst_11601__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11600,(0),null);
var inst_11602__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11600,(1),null);
var inst_11603 = (inst_11601__$1 == null);
var inst_11604 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11602__$1,change);
var inst_11605 = ((inst_11603) || (inst_11604));
var state_11656__$1 = (function (){var statearr_11678 = state_11656;
(statearr_11678[(14)] = inst_11601__$1);

(statearr_11678[(11)] = inst_11602__$1);

return statearr_11678;
})();
if(cljs.core.truth_(inst_11605)){
var statearr_11679_12885 = state_11656__$1;
(statearr_11679_12885[(1)] = (23));

} else {
var statearr_11680_12886 = state_11656__$1;
(statearr_11680_12886[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (36))){
var inst_11592 = (state_11656[(12)]);
var inst_11569 = inst_11592;
var state_11656__$1 = (function (){var statearr_11681 = state_11656;
(statearr_11681[(7)] = inst_11569);

return statearr_11681;
})();
var statearr_11682_12887 = state_11656__$1;
(statearr_11682_12887[(2)] = null);

(statearr_11682_12887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (29))){
var inst_11616 = (state_11656[(10)]);
var state_11656__$1 = state_11656;
var statearr_11683_12888 = state_11656__$1;
(statearr_11683_12888[(2)] = inst_11616);

(statearr_11683_12888[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (6))){
var state_11656__$1 = state_11656;
var statearr_11684_12889 = state_11656__$1;
(statearr_11684_12889[(2)] = false);

(statearr_11684_12889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (28))){
var inst_11612 = (state_11656[(2)]);
var inst_11613 = calc_state();
var inst_11569 = inst_11613;
var state_11656__$1 = (function (){var statearr_11685 = state_11656;
(statearr_11685[(7)] = inst_11569);

(statearr_11685[(15)] = inst_11612);

return statearr_11685;
})();
var statearr_11686_12890 = state_11656__$1;
(statearr_11686_12890[(2)] = null);

(statearr_11686_12890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (25))){
var inst_11638 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
var statearr_11688_12891 = state_11656__$1;
(statearr_11688_12891[(2)] = inst_11638);

(statearr_11688_12891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (34))){
var inst_11636 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
var statearr_11690_12892 = state_11656__$1;
(statearr_11690_12892[(2)] = inst_11636);

(statearr_11690_12892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (17))){
var state_11656__$1 = state_11656;
var statearr_11692_12893 = state_11656__$1;
(statearr_11692_12893[(2)] = false);

(statearr_11692_12893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (3))){
var state_11656__$1 = state_11656;
var statearr_11695_12894 = state_11656__$1;
(statearr_11695_12894[(2)] = false);

(statearr_11695_12894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (12))){
var inst_11640 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11656__$1,inst_11640);
} else {
if((state_val_11657 === (2))){
var inst_11544 = (state_11656[(8)]);
var inst_11549 = inst_11544.cljs$lang$protocol_mask$partition0$;
var inst_11550 = (inst_11549 & (64));
var inst_11551 = inst_11544.cljs$core$ISeq$;
var inst_11552 = (cljs.core.PROTOCOL_SENTINEL === inst_11551);
var inst_11553 = ((inst_11550) || (inst_11552));
var state_11656__$1 = state_11656;
if(cljs.core.truth_(inst_11553)){
var statearr_11698_12895 = state_11656__$1;
(statearr_11698_12895[(1)] = (5));

} else {
var statearr_11700_12896 = state_11656__$1;
(statearr_11700_12896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (23))){
var inst_11601 = (state_11656[(14)]);
var inst_11607 = (inst_11601 == null);
var state_11656__$1 = state_11656;
if(cljs.core.truth_(inst_11607)){
var statearr_11701_12897 = state_11656__$1;
(statearr_11701_12897[(1)] = (26));

} else {
var statearr_11702_12898 = state_11656__$1;
(statearr_11702_12898[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (35))){
var inst_11627 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
if(cljs.core.truth_(inst_11627)){
var statearr_11703_12899 = state_11656__$1;
(statearr_11703_12899[(1)] = (36));

} else {
var statearr_11704_12900 = state_11656__$1;
(statearr_11704_12900[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (19))){
var inst_11569 = (state_11656[(7)]);
var inst_11589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11569);
var state_11656__$1 = state_11656;
var statearr_11705_12901 = state_11656__$1;
(statearr_11705_12901[(2)] = inst_11589);

(statearr_11705_12901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (11))){
var inst_11569 = (state_11656[(7)]);
var inst_11573 = (inst_11569 == null);
var inst_11574 = cljs.core.not(inst_11573);
var state_11656__$1 = state_11656;
if(inst_11574){
var statearr_11706_12916 = state_11656__$1;
(statearr_11706_12916[(1)] = (13));

} else {
var statearr_11707_12917 = state_11656__$1;
(statearr_11707_12917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (9))){
var inst_11544 = (state_11656[(8)]);
var state_11656__$1 = state_11656;
var statearr_11708_12918 = state_11656__$1;
(statearr_11708_12918[(2)] = inst_11544);

(statearr_11708_12918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (5))){
var state_11656__$1 = state_11656;
var statearr_11709_12919 = state_11656__$1;
(statearr_11709_12919[(2)] = true);

(statearr_11709_12919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (14))){
var state_11656__$1 = state_11656;
var statearr_11710_12920 = state_11656__$1;
(statearr_11710_12920[(2)] = false);

(statearr_11710_12920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (26))){
var inst_11602 = (state_11656[(11)]);
var inst_11609 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11602);
var state_11656__$1 = state_11656;
var statearr_11711_12921 = state_11656__$1;
(statearr_11711_12921[(2)] = inst_11609);

(statearr_11711_12921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (16))){
var state_11656__$1 = state_11656;
var statearr_11712_12922 = state_11656__$1;
(statearr_11712_12922[(2)] = true);

(statearr_11712_12922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (38))){
var inst_11632 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
var statearr_11713_12923 = state_11656__$1;
(statearr_11713_12923[(2)] = inst_11632);

(statearr_11713_12923[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (30))){
var inst_11593 = (state_11656[(9)]);
var inst_11602 = (state_11656[(11)]);
var inst_11594 = (state_11656[(13)]);
var inst_11619 = cljs.core.empty_QMARK_(inst_11593);
var inst_11620 = (inst_11594.cljs$core$IFn$_invoke$arity$1 ? inst_11594.cljs$core$IFn$_invoke$arity$1(inst_11602) : inst_11594.call(null,inst_11602));
var inst_11621 = cljs.core.not(inst_11620);
var inst_11622 = ((inst_11619) && (inst_11621));
var state_11656__$1 = state_11656;
var statearr_11714_12924 = state_11656__$1;
(statearr_11714_12924[(2)] = inst_11622);

(statearr_11714_12924[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (10))){
var inst_11544 = (state_11656[(8)]);
var inst_11565 = (state_11656[(2)]);
var inst_11566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11565,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11565,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11565,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11569 = inst_11544;
var state_11656__$1 = (function (){var statearr_11715 = state_11656;
(statearr_11715[(16)] = inst_11568);

(statearr_11715[(7)] = inst_11569);

(statearr_11715[(17)] = inst_11567);

(statearr_11715[(18)] = inst_11566);

return statearr_11715;
})();
var statearr_11716_12925 = state_11656__$1;
(statearr_11716_12925[(2)] = null);

(statearr_11716_12925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (18))){
var inst_11584 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
var statearr_11717_12926 = state_11656__$1;
(statearr_11717_12926[(2)] = inst_11584);

(statearr_11717_12926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (37))){
var state_11656__$1 = state_11656;
var statearr_11718_12927 = state_11656__$1;
(statearr_11718_12927[(2)] = null);

(statearr_11718_12927[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (8))){
var inst_11544 = (state_11656[(8)]);
var inst_11562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11544);
var state_11656__$1 = state_11656;
var statearr_11719_12939 = state_11656__$1;
(statearr_11719_12939[(2)] = inst_11562);

(statearr_11719_12939[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10621__auto__ = null;
var cljs$core$async$mix_$_state_machine__10621__auto____0 = (function (){
var statearr_11720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11720[(0)] = cljs$core$async$mix_$_state_machine__10621__auto__);

(statearr_11720[(1)] = (1));

return statearr_11720;
});
var cljs$core$async$mix_$_state_machine__10621__auto____1 = (function (state_11656){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11656);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11721){var ex__10624__auto__ = e11721;
var statearr_11722_12940 = state_11656;
(statearr_11722_12940[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11656[(4)]))){
var statearr_11723_12956 = state_11656;
(statearr_11723_12956[(1)] = cljs.core.first((state_11656[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12957 = state_11656;
state_11656 = G__12957;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10621__auto__ = function(state_11656){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10621__auto____1.call(this,state_11656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10621__auto____0;
cljs$core$async$mix_$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10621__auto____1;
return cljs$core$async$mix_$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11724 = f__10663__auto__();
(statearr_11724[(6)] = c__10662__auto___12868);

return statearr_11724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12958 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12958(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12959 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12959(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12960 = (function() {
var G__12961 = null;
var G__12961__1 = (function (p){
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
var G__12961__2 = (function (p,v){
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
G__12961 = function(p,v){
switch(arguments.length){
case 1:
return G__12961__1.call(this,p);
case 2:
return G__12961__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12961.cljs$core$IFn$_invoke$arity$1 = G__12961__1;
G__12961.cljs$core$IFn$_invoke$arity$2 = G__12961__2;
return G__12961;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11732 = arguments.length;
switch (G__11732) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12960(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12960(p,v);
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
var G__11735 = arguments.length;
switch (G__11735) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11733_SHARP_){
if(cljs.core.truth_((p1__11733_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11733_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11733_SHARP_.call(null,topic)))){
return p1__11733_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11733_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11737 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11738){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11738 = meta11738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11739,meta11738__$1){
var self__ = this;
var _11739__$1 = this;
return (new cljs.core.async.t_cljs$core$async11737(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11738__$1));
}));

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11739){
var self__ = this;
var _11739__$1 = this;
return self__.meta11738;
}));

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11738","meta11738",-914235754,null)], null);
}));

(cljs.core.async.t_cljs$core$async11737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11737");

(cljs.core.async.t_cljs$core$async11737.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11737.
 */
cljs.core.async.__GT_t_cljs$core$async11737 = (function cljs$core$async$__GT_t_cljs$core$async11737(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11738){
return (new cljs.core.async.t_cljs$core$async11737(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11738));
});

}

return (new cljs.core.async.t_cljs$core$async11737(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10662__auto___12975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11819){
var state_val_11820 = (state_11819[(1)]);
if((state_val_11820 === (7))){
var inst_11815 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11821_12976 = state_11819__$1;
(statearr_11821_12976[(2)] = inst_11815);

(statearr_11821_12976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (20))){
var state_11819__$1 = state_11819;
var statearr_11822_12979 = state_11819__$1;
(statearr_11822_12979[(2)] = null);

(statearr_11822_12979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (1))){
var state_11819__$1 = state_11819;
var statearr_11823_12981 = state_11819__$1;
(statearr_11823_12981[(2)] = null);

(statearr_11823_12981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (24))){
var inst_11798 = (state_11819[(7)]);
var inst_11807 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11798);
var state_11819__$1 = state_11819;
var statearr_11824_12982 = state_11819__$1;
(statearr_11824_12982[(2)] = inst_11807);

(statearr_11824_12982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (4))){
var inst_11750 = (state_11819[(8)]);
var inst_11750__$1 = (state_11819[(2)]);
var inst_11751 = (inst_11750__$1 == null);
var state_11819__$1 = (function (){var statearr_11827 = state_11819;
(statearr_11827[(8)] = inst_11750__$1);

return statearr_11827;
})();
if(cljs.core.truth_(inst_11751)){
var statearr_11828_12983 = state_11819__$1;
(statearr_11828_12983[(1)] = (5));

} else {
var statearr_11829_12986 = state_11819__$1;
(statearr_11829_12986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (15))){
var inst_11792 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11830_12988 = state_11819__$1;
(statearr_11830_12988[(2)] = inst_11792);

(statearr_11830_12988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (21))){
var inst_11812 = (state_11819[(2)]);
var state_11819__$1 = (function (){var statearr_11833 = state_11819;
(statearr_11833[(9)] = inst_11812);

return statearr_11833;
})();
var statearr_11834_13003 = state_11819__$1;
(statearr_11834_13003[(2)] = null);

(statearr_11834_13003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (13))){
var inst_11774 = (state_11819[(10)]);
var inst_11776 = cljs.core.chunked_seq_QMARK_(inst_11774);
var state_11819__$1 = state_11819;
if(inst_11776){
var statearr_11835_13004 = state_11819__$1;
(statearr_11835_13004[(1)] = (16));

} else {
var statearr_11836_13005 = state_11819__$1;
(statearr_11836_13005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (22))){
var inst_11804 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
if(cljs.core.truth_(inst_11804)){
var statearr_11837_13006 = state_11819__$1;
(statearr_11837_13006[(1)] = (23));

} else {
var statearr_11838_13007 = state_11819__$1;
(statearr_11838_13007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (6))){
var inst_11750 = (state_11819[(8)]);
var inst_11800 = (state_11819[(11)]);
var inst_11798 = (state_11819[(7)]);
var inst_11798__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11750) : topic_fn.call(null,inst_11750));
var inst_11799 = cljs.core.deref(mults);
var inst_11800__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11799,inst_11798__$1);
var state_11819__$1 = (function (){var statearr_11839 = state_11819;
(statearr_11839[(11)] = inst_11800__$1);

(statearr_11839[(7)] = inst_11798__$1);

return statearr_11839;
})();
if(cljs.core.truth_(inst_11800__$1)){
var statearr_11840_13008 = state_11819__$1;
(statearr_11840_13008[(1)] = (19));

} else {
var statearr_11841_13009 = state_11819__$1;
(statearr_11841_13009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (25))){
var inst_11809 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11842_13010 = state_11819__$1;
(statearr_11842_13010[(2)] = inst_11809);

(statearr_11842_13010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (17))){
var inst_11774 = (state_11819[(10)]);
var inst_11783 = cljs.core.first(inst_11774);
var inst_11784 = cljs.core.async.muxch_STAR_(inst_11783);
var inst_11785 = cljs.core.async.close_BANG_(inst_11784);
var inst_11786 = cljs.core.next(inst_11774);
var inst_11760 = inst_11786;
var inst_11761 = null;
var inst_11762 = (0);
var inst_11763 = (0);
var state_11819__$1 = (function (){var statearr_11843 = state_11819;
(statearr_11843[(12)] = inst_11762);

(statearr_11843[(13)] = inst_11785);

(statearr_11843[(14)] = inst_11760);

(statearr_11843[(15)] = inst_11761);

(statearr_11843[(16)] = inst_11763);

return statearr_11843;
})();
var statearr_11845_13012 = state_11819__$1;
(statearr_11845_13012[(2)] = null);

(statearr_11845_13012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (3))){
var inst_11817 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11819__$1,inst_11817);
} else {
if((state_val_11820 === (12))){
var inst_11794 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11847_13013 = state_11819__$1;
(statearr_11847_13013[(2)] = inst_11794);

(statearr_11847_13013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (2))){
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11819__$1,(4),ch);
} else {
if((state_val_11820 === (23))){
var state_11819__$1 = state_11819;
var statearr_11848_13014 = state_11819__$1;
(statearr_11848_13014[(2)] = null);

(statearr_11848_13014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (19))){
var inst_11750 = (state_11819[(8)]);
var inst_11800 = (state_11819[(11)]);
var inst_11802 = cljs.core.async.muxch_STAR_(inst_11800);
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11819__$1,(22),inst_11802,inst_11750);
} else {
if((state_val_11820 === (11))){
var inst_11760 = (state_11819[(14)]);
var inst_11774 = (state_11819[(10)]);
var inst_11774__$1 = cljs.core.seq(inst_11760);
var state_11819__$1 = (function (){var statearr_11849 = state_11819;
(statearr_11849[(10)] = inst_11774__$1);

return statearr_11849;
})();
if(inst_11774__$1){
var statearr_11850_13015 = state_11819__$1;
(statearr_11850_13015[(1)] = (13));

} else {
var statearr_11851_13016 = state_11819__$1;
(statearr_11851_13016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (9))){
var inst_11796 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11852_13019 = state_11819__$1;
(statearr_11852_13019[(2)] = inst_11796);

(statearr_11852_13019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (5))){
var inst_11757 = cljs.core.deref(mults);
var inst_11758 = cljs.core.vals(inst_11757);
var inst_11759 = cljs.core.seq(inst_11758);
var inst_11760 = inst_11759;
var inst_11761 = null;
var inst_11762 = (0);
var inst_11763 = (0);
var state_11819__$1 = (function (){var statearr_11853 = state_11819;
(statearr_11853[(12)] = inst_11762);

(statearr_11853[(14)] = inst_11760);

(statearr_11853[(15)] = inst_11761);

(statearr_11853[(16)] = inst_11763);

return statearr_11853;
})();
var statearr_11854_13024 = state_11819__$1;
(statearr_11854_13024[(2)] = null);

(statearr_11854_13024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (14))){
var state_11819__$1 = state_11819;
var statearr_11858_13025 = state_11819__$1;
(statearr_11858_13025[(2)] = null);

(statearr_11858_13025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (16))){
var inst_11774 = (state_11819[(10)]);
var inst_11778 = cljs.core.chunk_first(inst_11774);
var inst_11779 = cljs.core.chunk_rest(inst_11774);
var inst_11780 = cljs.core.count(inst_11778);
var inst_11760 = inst_11779;
var inst_11761 = inst_11778;
var inst_11762 = inst_11780;
var inst_11763 = (0);
var state_11819__$1 = (function (){var statearr_11859 = state_11819;
(statearr_11859[(12)] = inst_11762);

(statearr_11859[(14)] = inst_11760);

(statearr_11859[(15)] = inst_11761);

(statearr_11859[(16)] = inst_11763);

return statearr_11859;
})();
var statearr_11860_13030 = state_11819__$1;
(statearr_11860_13030[(2)] = null);

(statearr_11860_13030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (10))){
var inst_11762 = (state_11819[(12)]);
var inst_11760 = (state_11819[(14)]);
var inst_11761 = (state_11819[(15)]);
var inst_11763 = (state_11819[(16)]);
var inst_11768 = cljs.core._nth(inst_11761,inst_11763);
var inst_11769 = cljs.core.async.muxch_STAR_(inst_11768);
var inst_11770 = cljs.core.async.close_BANG_(inst_11769);
var inst_11771 = (inst_11763 + (1));
var tmp11855 = inst_11762;
var tmp11856 = inst_11760;
var tmp11857 = inst_11761;
var inst_11760__$1 = tmp11856;
var inst_11761__$1 = tmp11857;
var inst_11762__$1 = tmp11855;
var inst_11763__$1 = inst_11771;
var state_11819__$1 = (function (){var statearr_11861 = state_11819;
(statearr_11861[(12)] = inst_11762__$1);

(statearr_11861[(17)] = inst_11770);

(statearr_11861[(14)] = inst_11760__$1);

(statearr_11861[(15)] = inst_11761__$1);

(statearr_11861[(16)] = inst_11763__$1);

return statearr_11861;
})();
var statearr_11862_13044 = state_11819__$1;
(statearr_11862_13044[(2)] = null);

(statearr_11862_13044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (18))){
var inst_11789 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11863_13046 = state_11819__$1;
(statearr_11863_13046[(2)] = inst_11789);

(statearr_11863_13046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (8))){
var inst_11762 = (state_11819[(12)]);
var inst_11763 = (state_11819[(16)]);
var inst_11765 = (inst_11763 < inst_11762);
var inst_11766 = inst_11765;
var state_11819__$1 = state_11819;
if(cljs.core.truth_(inst_11766)){
var statearr_11864_13047 = state_11819__$1;
(statearr_11864_13047[(1)] = (10));

} else {
var statearr_11865_13048 = state_11819__$1;
(statearr_11865_13048[(1)] = (11));

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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_11866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11866[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_11866[(1)] = (1));

return statearr_11866;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_11819){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11819);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11867){var ex__10624__auto__ = e11867;
var statearr_11868_13049 = state_11819;
(statearr_11868_13049[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11819[(4)]))){
var statearr_11869_13061 = state_11819;
(statearr_11869_13061[(1)] = cljs.core.first((state_11819[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13063 = state_11819;
state_11819 = G__13063;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_11819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_11819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11870 = f__10663__auto__();
(statearr_11870[(6)] = c__10662__auto___12975);

return statearr_11870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
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
var G__11875 = arguments.length;
switch (G__11875) {
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
var G__11880 = arguments.length;
switch (G__11880) {
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
var G__11883 = arguments.length;
switch (G__11883) {
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
var c__10662__auto___13084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_11929){
var state_val_11930 = (state_11929[(1)]);
if((state_val_11930 === (7))){
var state_11929__$1 = state_11929;
var statearr_11933_13087 = state_11929__$1;
(statearr_11933_13087[(2)] = null);

(statearr_11933_13087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (1))){
var state_11929__$1 = state_11929;
var statearr_11934_13089 = state_11929__$1;
(statearr_11934_13089[(2)] = null);

(statearr_11934_13089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (4))){
var inst_11887 = (state_11929[(7)]);
var inst_11886 = (state_11929[(8)]);
var inst_11889 = (inst_11887 < inst_11886);
var state_11929__$1 = state_11929;
if(cljs.core.truth_(inst_11889)){
var statearr_11935_13090 = state_11929__$1;
(statearr_11935_13090[(1)] = (6));

} else {
var statearr_11936_13091 = state_11929__$1;
(statearr_11936_13091[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (15))){
var inst_11912 = (state_11929[(9)]);
var inst_11918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11912);
var state_11929__$1 = state_11929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11929__$1,(17),out,inst_11918);
} else {
if((state_val_11930 === (13))){
var inst_11912 = (state_11929[(9)]);
var inst_11912__$1 = (state_11929[(2)]);
var inst_11913 = cljs.core.some(cljs.core.nil_QMARK_,inst_11912__$1);
var state_11929__$1 = (function (){var statearr_11937 = state_11929;
(statearr_11937[(9)] = inst_11912__$1);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11913)){
var statearr_11938_13092 = state_11929__$1;
(statearr_11938_13092[(1)] = (14));

} else {
var statearr_11939_13093 = state_11929__$1;
(statearr_11939_13093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (6))){
var state_11929__$1 = state_11929;
var statearr_11940_13094 = state_11929__$1;
(statearr_11940_13094[(2)] = null);

(statearr_11940_13094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (17))){
var inst_11920 = (state_11929[(2)]);
var state_11929__$1 = (function (){var statearr_11942 = state_11929;
(statearr_11942[(10)] = inst_11920);

return statearr_11942;
})();
var statearr_11943_13099 = state_11929__$1;
(statearr_11943_13099[(2)] = null);

(statearr_11943_13099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (3))){
var inst_11925 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11929__$1,inst_11925);
} else {
if((state_val_11930 === (12))){
var _ = (function (){var statearr_11944 = state_11929;
(statearr_11944[(4)] = cljs.core.rest((state_11929[(4)])));

return statearr_11944;
})();
var state_11929__$1 = state_11929;
var ex11941 = (state_11929__$1[(2)]);
var statearr_11945_13100 = state_11929__$1;
(statearr_11945_13100[(5)] = ex11941);


if((ex11941 instanceof Object)){
var statearr_11946_13101 = state_11929__$1;
(statearr_11946_13101[(1)] = (11));

(statearr_11946_13101[(5)] = null);

} else {
throw ex11941;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (2))){
var inst_11885 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11886 = cnt;
var inst_11887 = (0);
var state_11929__$1 = (function (){var statearr_11947 = state_11929;
(statearr_11947[(7)] = inst_11887);

(statearr_11947[(11)] = inst_11885);

(statearr_11947[(8)] = inst_11886);

return statearr_11947;
})();
var statearr_11948_13102 = state_11929__$1;
(statearr_11948_13102[(2)] = null);

(statearr_11948_13102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (11))){
var inst_11891 = (state_11929[(2)]);
var inst_11892 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11929__$1 = (function (){var statearr_11949 = state_11929;
(statearr_11949[(12)] = inst_11891);

return statearr_11949;
})();
var statearr_11950_13103 = state_11929__$1;
(statearr_11950_13103[(2)] = inst_11892);

(statearr_11950_13103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (9))){
var inst_11887 = (state_11929[(7)]);
var _ = (function (){var statearr_11951 = state_11929;
(statearr_11951[(4)] = cljs.core.cons((12),(state_11929[(4)])));

return statearr_11951;
})();
var inst_11898 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11887) : chs__$1.call(null,inst_11887));
var inst_11899 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11887) : done.call(null,inst_11887));
var inst_11900 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11898,inst_11899);
var ___$1 = (function (){var statearr_11952 = state_11929;
(statearr_11952[(4)] = cljs.core.rest((state_11929[(4)])));

return statearr_11952;
})();
var state_11929__$1 = state_11929;
var statearr_11953_13104 = state_11929__$1;
(statearr_11953_13104[(2)] = inst_11900);

(statearr_11953_13104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (5))){
var inst_11910 = (state_11929[(2)]);
var state_11929__$1 = (function (){var statearr_11954 = state_11929;
(statearr_11954[(13)] = inst_11910);

return statearr_11954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11929__$1,(13),dchan);
} else {
if((state_val_11930 === (14))){
var inst_11916 = cljs.core.async.close_BANG_(out);
var state_11929__$1 = state_11929;
var statearr_11955_13105 = state_11929__$1;
(statearr_11955_13105[(2)] = inst_11916);

(statearr_11955_13105[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (16))){
var inst_11923 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
var statearr_11956_13106 = state_11929__$1;
(statearr_11956_13106[(2)] = inst_11923);

(statearr_11956_13106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (10))){
var inst_11887 = (state_11929[(7)]);
var inst_11903 = (state_11929[(2)]);
var inst_11904 = (inst_11887 + (1));
var inst_11887__$1 = inst_11904;
var state_11929__$1 = (function (){var statearr_11957 = state_11929;
(statearr_11957[(14)] = inst_11903);

(statearr_11957[(7)] = inst_11887__$1);

return statearr_11957;
})();
var statearr_11958_13107 = state_11929__$1;
(statearr_11958_13107[(2)] = null);

(statearr_11958_13107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (8))){
var inst_11908 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
var statearr_11959_13108 = state_11929__$1;
(statearr_11959_13108[(2)] = inst_11908);

(statearr_11959_13108[(1)] = (5));


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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_11960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11960[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_11960[(1)] = (1));

return statearr_11960;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_11929){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_11929);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e11961){var ex__10624__auto__ = e11961;
var statearr_11962_13109 = state_11929;
(statearr_11962_13109[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_11929[(4)]))){
var statearr_11963_13110 = state_11929;
(statearr_11963_13110[(1)] = cljs.core.first((state_11929[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13113 = state_11929;
state_11929 = G__13113;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_11929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_11929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_11964 = f__10663__auto__();
(statearr_11964[(6)] = c__10662__auto___13084);

return statearr_11964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
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
var G__11970 = arguments.length;
switch (G__11970) {
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
var c__10662__auto___13115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_12003){
var state_val_12004 = (state_12003[(1)]);
if((state_val_12004 === (7))){
var inst_11982 = (state_12003[(7)]);
var inst_11983 = (state_12003[(8)]);
var inst_11982__$1 = (state_12003[(2)]);
var inst_11983__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11982__$1,(0),null);
var inst_11984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11982__$1,(1),null);
var inst_11985 = (inst_11983__$1 == null);
var state_12003__$1 = (function (){var statearr_12007 = state_12003;
(statearr_12007[(7)] = inst_11982__$1);

(statearr_12007[(9)] = inst_11984);

(statearr_12007[(8)] = inst_11983__$1);

return statearr_12007;
})();
if(cljs.core.truth_(inst_11985)){
var statearr_12008_13116 = state_12003__$1;
(statearr_12008_13116[(1)] = (8));

} else {
var statearr_12009_13117 = state_12003__$1;
(statearr_12009_13117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (1))){
var inst_11972 = cljs.core.vec(chs);
var inst_11973 = inst_11972;
var state_12003__$1 = (function (){var statearr_12010 = state_12003;
(statearr_12010[(10)] = inst_11973);

return statearr_12010;
})();
var statearr_12011_13118 = state_12003__$1;
(statearr_12011_13118[(2)] = null);

(statearr_12011_13118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (4))){
var inst_11973 = (state_12003[(10)]);
var state_12003__$1 = state_12003;
return cljs.core.async.ioc_alts_BANG_(state_12003__$1,(7),inst_11973);
} else {
if((state_val_12004 === (6))){
var inst_11999 = (state_12003[(2)]);
var state_12003__$1 = state_12003;
var statearr_12012_13119 = state_12003__$1;
(statearr_12012_13119[(2)] = inst_11999);

(statearr_12012_13119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (3))){
var inst_12001 = (state_12003[(2)]);
var state_12003__$1 = state_12003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12003__$1,inst_12001);
} else {
if((state_val_12004 === (2))){
var inst_11973 = (state_12003[(10)]);
var inst_11975 = cljs.core.count(inst_11973);
var inst_11976 = (inst_11975 > (0));
var state_12003__$1 = state_12003;
if(cljs.core.truth_(inst_11976)){
var statearr_12014_13120 = state_12003__$1;
(statearr_12014_13120[(1)] = (4));

} else {
var statearr_12015_13121 = state_12003__$1;
(statearr_12015_13121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (11))){
var inst_11973 = (state_12003[(10)]);
var inst_11992 = (state_12003[(2)]);
var tmp12013 = inst_11973;
var inst_11973__$1 = tmp12013;
var state_12003__$1 = (function (){var statearr_12016 = state_12003;
(statearr_12016[(11)] = inst_11992);

(statearr_12016[(10)] = inst_11973__$1);

return statearr_12016;
})();
var statearr_12017_13122 = state_12003__$1;
(statearr_12017_13122[(2)] = null);

(statearr_12017_13122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (9))){
var inst_11983 = (state_12003[(8)]);
var state_12003__$1 = state_12003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12003__$1,(11),out,inst_11983);
} else {
if((state_val_12004 === (5))){
var inst_11997 = cljs.core.async.close_BANG_(out);
var state_12003__$1 = state_12003;
var statearr_12018_13123 = state_12003__$1;
(statearr_12018_13123[(2)] = inst_11997);

(statearr_12018_13123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (10))){
var inst_11995 = (state_12003[(2)]);
var state_12003__$1 = state_12003;
var statearr_12019_13124 = state_12003__$1;
(statearr_12019_13124[(2)] = inst_11995);

(statearr_12019_13124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (8))){
var inst_11982 = (state_12003[(7)]);
var inst_11973 = (state_12003[(10)]);
var inst_11984 = (state_12003[(9)]);
var inst_11983 = (state_12003[(8)]);
var inst_11987 = (function (){var cs = inst_11973;
var vec__11978 = inst_11982;
var v = inst_11983;
var c = inst_11984;
return (function (p1__11965_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__11965_SHARP_);
});
})();
var inst_11988 = cljs.core.filterv(inst_11987,inst_11973);
var inst_11973__$1 = inst_11988;
var state_12003__$1 = (function (){var statearr_12020 = state_12003;
(statearr_12020[(10)] = inst_11973__$1);

return statearr_12020;
})();
var statearr_12021_13129 = state_12003__$1;
(statearr_12021_13129[(2)] = null);

(statearr_12021_13129[(1)] = (2));


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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_12022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12022[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_12022[(1)] = (1));

return statearr_12022;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_12003){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_12003);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e12023){var ex__10624__auto__ = e12023;
var statearr_12034_13130 = state_12003;
(statearr_12034_13130[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_12003[(4)]))){
var statearr_12035_13131 = state_12003;
(statearr_12035_13131[(1)] = cljs.core.first((state_12003[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13132 = state_12003;
state_12003 = G__13132;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_12003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_12003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_12036 = f__10663__auto__();
(statearr_12036[(6)] = c__10662__auto___13115);

return statearr_12036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
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
var G__12038 = arguments.length;
switch (G__12038) {
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
var c__10662__auto___13135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_12067){
var state_val_12068 = (state_12067[(1)]);
if((state_val_12068 === (7))){
var inst_12044 = (state_12067[(7)]);
var inst_12044__$1 = (state_12067[(2)]);
var inst_12045 = (inst_12044__$1 == null);
var inst_12046 = cljs.core.not(inst_12045);
var state_12067__$1 = (function (){var statearr_12069 = state_12067;
(statearr_12069[(7)] = inst_12044__$1);

return statearr_12069;
})();
if(inst_12046){
var statearr_12070_13137 = state_12067__$1;
(statearr_12070_13137[(1)] = (8));

} else {
var statearr_12071_13138 = state_12067__$1;
(statearr_12071_13138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (1))){
var inst_12039 = (0);
var state_12067__$1 = (function (){var statearr_12072 = state_12067;
(statearr_12072[(8)] = inst_12039);

return statearr_12072;
})();
var statearr_12073_13139 = state_12067__$1;
(statearr_12073_13139[(2)] = null);

(statearr_12073_13139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (4))){
var state_12067__$1 = state_12067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12067__$1,(7),ch);
} else {
if((state_val_12068 === (6))){
var inst_12057 = (state_12067[(2)]);
var state_12067__$1 = state_12067;
var statearr_12074_13144 = state_12067__$1;
(statearr_12074_13144[(2)] = inst_12057);

(statearr_12074_13144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (3))){
var inst_12059 = (state_12067[(2)]);
var inst_12060 = cljs.core.async.close_BANG_(out);
var state_12067__$1 = (function (){var statearr_12075 = state_12067;
(statearr_12075[(9)] = inst_12059);

return statearr_12075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12067__$1,inst_12060);
} else {
if((state_val_12068 === (2))){
var inst_12039 = (state_12067[(8)]);
var inst_12041 = (inst_12039 < n);
var state_12067__$1 = state_12067;
if(cljs.core.truth_(inst_12041)){
var statearr_12076_13145 = state_12067__$1;
(statearr_12076_13145[(1)] = (4));

} else {
var statearr_12077_13147 = state_12067__$1;
(statearr_12077_13147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (11))){
var inst_12039 = (state_12067[(8)]);
var inst_12049 = (state_12067[(2)]);
var inst_12050 = (inst_12039 + (1));
var inst_12039__$1 = inst_12050;
var state_12067__$1 = (function (){var statearr_12078 = state_12067;
(statearr_12078[(8)] = inst_12039__$1);

(statearr_12078[(10)] = inst_12049);

return statearr_12078;
})();
var statearr_12079_13151 = state_12067__$1;
(statearr_12079_13151[(2)] = null);

(statearr_12079_13151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (9))){
var state_12067__$1 = state_12067;
var statearr_12080_13152 = state_12067__$1;
(statearr_12080_13152[(2)] = null);

(statearr_12080_13152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (5))){
var state_12067__$1 = state_12067;
var statearr_12081_13154 = state_12067__$1;
(statearr_12081_13154[(2)] = null);

(statearr_12081_13154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (10))){
var inst_12054 = (state_12067[(2)]);
var state_12067__$1 = state_12067;
var statearr_12082_13155 = state_12067__$1;
(statearr_12082_13155[(2)] = inst_12054);

(statearr_12082_13155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12068 === (8))){
var inst_12044 = (state_12067[(7)]);
var state_12067__$1 = state_12067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12067__$1,(11),out,inst_12044);
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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_12083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12083[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_12083[(1)] = (1));

return statearr_12083;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_12067){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_12067);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e12084){var ex__10624__auto__ = e12084;
var statearr_12085_13158 = state_12067;
(statearr_12085_13158[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_12067[(4)]))){
var statearr_12086_13160 = state_12067;
(statearr_12086_13160[(1)] = cljs.core.first((state_12067[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13162 = state_12067;
state_12067 = G__13162;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_12067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_12067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_12087 = f__10663__auto__();
(statearr_12087[(6)] = c__10662__auto___13135);

return statearr_12087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12098 = (function (f,ch,meta12099){
this.f = f;
this.ch = ch;
this.meta12099 = meta12099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12100,meta12099__$1){
var self__ = this;
var _12100__$1 = this;
return (new cljs.core.async.t_cljs$core$async12098(self__.f,self__.ch,meta12099__$1));
}));

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12100){
var self__ = this;
var _12100__$1 = this;
return self__.meta12099;
}));

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12101 = (function (f,ch,meta12099,_,fn1,meta12102){
this.f = f;
this.ch = ch;
this.meta12099 = meta12099;
this._ = _;
this.fn1 = fn1;
this.meta12102 = meta12102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12103,meta12102__$1){
var self__ = this;
var _12103__$1 = this;
return (new cljs.core.async.t_cljs$core$async12101(self__.f,self__.ch,self__.meta12099,self__._,self__.fn1,meta12102__$1));
}));

(cljs.core.async.t_cljs$core$async12101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12103){
var self__ = this;
var _12103__$1 = this;
return self__.meta12102;
}));

(cljs.core.async.t_cljs$core$async12101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12088_SHARP_){
var G__12110 = (((p1__12088_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12088_SHARP_) : self__.f.call(null,p1__12088_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12110) : f1.call(null,G__12110));
});
}));

(cljs.core.async.t_cljs$core$async12101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12099","meta12099",-1555405925,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12098","cljs.core.async/t_cljs$core$async12098",1850570463,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12102","meta12102",2079475059,null)], null);
}));

(cljs.core.async.t_cljs$core$async12101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12101");

(cljs.core.async.t_cljs$core$async12101.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12101.
 */
cljs.core.async.__GT_t_cljs$core$async12101 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12101(f__$1,ch__$1,meta12099__$1,___$2,fn1__$1,meta12102){
return (new cljs.core.async.t_cljs$core$async12101(f__$1,ch__$1,meta12099__$1,___$2,fn1__$1,meta12102));
});

}

return (new cljs.core.async.t_cljs$core$async12101(self__.f,self__.ch,self__.meta12099,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12113 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12113) : self__.f.call(null,G__12113));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12099","meta12099",-1555405925,null)], null);
}));

(cljs.core.async.t_cljs$core$async12098.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12098");

(cljs.core.async.t_cljs$core$async12098.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12098");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12098.
 */
cljs.core.async.__GT_t_cljs$core$async12098 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12098(f__$1,ch__$1,meta12099){
return (new cljs.core.async.t_cljs$core$async12098(f__$1,ch__$1,meta12099));
});

}

return (new cljs.core.async.t_cljs$core$async12098(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12116 = (function (f,ch,meta12117){
this.f = f;
this.ch = ch;
this.meta12117 = meta12117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12118,meta12117__$1){
var self__ = this;
var _12118__$1 = this;
return (new cljs.core.async.t_cljs$core$async12116(self__.f,self__.ch,meta12117__$1));
}));

(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12118){
var self__ = this;
var _12118__$1 = this;
return self__.meta12117;
}));

(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12117","meta12117",1275853666,null)], null);
}));

(cljs.core.async.t_cljs$core$async12116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12116");

(cljs.core.async.t_cljs$core$async12116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12116.
 */
cljs.core.async.__GT_t_cljs$core$async12116 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12116(f__$1,ch__$1,meta12117){
return (new cljs.core.async.t_cljs$core$async12116(f__$1,ch__$1,meta12117));
});

}

return (new cljs.core.async.t_cljs$core$async12116(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12129 = (function (p,ch,meta12130){
this.p = p;
this.ch = ch;
this.meta12130 = meta12130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12131,meta12130__$1){
var self__ = this;
var _12131__$1 = this;
return (new cljs.core.async.t_cljs$core$async12129(self__.p,self__.ch,meta12130__$1));
}));

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12131){
var self__ = this;
var _12131__$1 = this;
return self__.meta12130;
}));

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12130","meta12130",-1310319939,null)], null);
}));

(cljs.core.async.t_cljs$core$async12129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12129");

(cljs.core.async.t_cljs$core$async12129.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12129.
 */
cljs.core.async.__GT_t_cljs$core$async12129 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12129(p__$1,ch__$1,meta12130){
return (new cljs.core.async.t_cljs$core$async12129(p__$1,ch__$1,meta12130));
});

}

return (new cljs.core.async.t_cljs$core$async12129(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12133 = arguments.length;
switch (G__12133) {
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
var c__10662__auto___13173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_12164){
var state_val_12165 = (state_12164[(1)]);
if((state_val_12165 === (7))){
var inst_12160 = (state_12164[(2)]);
var state_12164__$1 = state_12164;
var statearr_12166_13176 = state_12164__$1;
(statearr_12166_13176[(2)] = inst_12160);

(statearr_12166_13176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (1))){
var state_12164__$1 = state_12164;
var statearr_12170_13177 = state_12164__$1;
(statearr_12170_13177[(2)] = null);

(statearr_12170_13177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (4))){
var inst_12146 = (state_12164[(7)]);
var inst_12146__$1 = (state_12164[(2)]);
var inst_12147 = (inst_12146__$1 == null);
var state_12164__$1 = (function (){var statearr_12171 = state_12164;
(statearr_12171[(7)] = inst_12146__$1);

return statearr_12171;
})();
if(cljs.core.truth_(inst_12147)){
var statearr_12172_13180 = state_12164__$1;
(statearr_12172_13180[(1)] = (5));

} else {
var statearr_12173_13182 = state_12164__$1;
(statearr_12173_13182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (6))){
var inst_12146 = (state_12164[(7)]);
var inst_12151 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12146) : p.call(null,inst_12146));
var state_12164__$1 = state_12164;
if(cljs.core.truth_(inst_12151)){
var statearr_12174_13183 = state_12164__$1;
(statearr_12174_13183[(1)] = (8));

} else {
var statearr_12175_13184 = state_12164__$1;
(statearr_12175_13184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (3))){
var inst_12162 = (state_12164[(2)]);
var state_12164__$1 = state_12164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12164__$1,inst_12162);
} else {
if((state_val_12165 === (2))){
var state_12164__$1 = state_12164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12164__$1,(4),ch);
} else {
if((state_val_12165 === (11))){
var inst_12154 = (state_12164[(2)]);
var state_12164__$1 = state_12164;
var statearr_12177_13186 = state_12164__$1;
(statearr_12177_13186[(2)] = inst_12154);

(statearr_12177_13186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (9))){
var state_12164__$1 = state_12164;
var statearr_12179_13187 = state_12164__$1;
(statearr_12179_13187[(2)] = null);

(statearr_12179_13187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (5))){
var inst_12149 = cljs.core.async.close_BANG_(out);
var state_12164__$1 = state_12164;
var statearr_12180_13188 = state_12164__$1;
(statearr_12180_13188[(2)] = inst_12149);

(statearr_12180_13188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (10))){
var inst_12157 = (state_12164[(2)]);
var state_12164__$1 = (function (){var statearr_12181 = state_12164;
(statearr_12181[(8)] = inst_12157);

return statearr_12181;
})();
var statearr_12182_13189 = state_12164__$1;
(statearr_12182_13189[(2)] = null);

(statearr_12182_13189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12165 === (8))){
var inst_12146 = (state_12164[(7)]);
var state_12164__$1 = state_12164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12164__$1,(11),out,inst_12146);
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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_12183 = [null,null,null,null,null,null,null,null,null];
(statearr_12183[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_12183[(1)] = (1));

return statearr_12183;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_12164){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_12164);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e12184){var ex__10624__auto__ = e12184;
var statearr_12186_13190 = state_12164;
(statearr_12186_13190[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_12164[(4)]))){
var statearr_12187_13191 = state_12164;
(statearr_12187_13191[(1)] = cljs.core.first((state_12164[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13192 = state_12164;
state_12164 = G__13192;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_12164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_12164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_12188 = f__10663__auto__();
(statearr_12188[(6)] = c__10662__auto___13173);

return statearr_12188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12191 = arguments.length;
switch (G__12191) {
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
var c__10662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_12257){
var state_val_12258 = (state_12257[(1)]);
if((state_val_12258 === (7))){
var inst_12253 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12259_13198 = state_12257__$1;
(statearr_12259_13198[(2)] = inst_12253);

(statearr_12259_13198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (20))){
var inst_12223 = (state_12257[(7)]);
var inst_12234 = (state_12257[(2)]);
var inst_12235 = cljs.core.next(inst_12223);
var inst_12209 = inst_12235;
var inst_12210 = null;
var inst_12211 = (0);
var inst_12212 = (0);
var state_12257__$1 = (function (){var statearr_12260 = state_12257;
(statearr_12260[(8)] = inst_12209);

(statearr_12260[(9)] = inst_12212);

(statearr_12260[(10)] = inst_12211);

(statearr_12260[(11)] = inst_12234);

(statearr_12260[(12)] = inst_12210);

return statearr_12260;
})();
var statearr_12261_13200 = state_12257__$1;
(statearr_12261_13200[(2)] = null);

(statearr_12261_13200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (1))){
var state_12257__$1 = state_12257;
var statearr_12262_13202 = state_12257__$1;
(statearr_12262_13202[(2)] = null);

(statearr_12262_13202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (4))){
var inst_12198 = (state_12257[(13)]);
var inst_12198__$1 = (state_12257[(2)]);
var inst_12199 = (inst_12198__$1 == null);
var state_12257__$1 = (function (){var statearr_12264 = state_12257;
(statearr_12264[(13)] = inst_12198__$1);

return statearr_12264;
})();
if(cljs.core.truth_(inst_12199)){
var statearr_12265_13205 = state_12257__$1;
(statearr_12265_13205[(1)] = (5));

} else {
var statearr_12266_13207 = state_12257__$1;
(statearr_12266_13207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (15))){
var state_12257__$1 = state_12257;
var statearr_12270_13208 = state_12257__$1;
(statearr_12270_13208[(2)] = null);

(statearr_12270_13208[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (21))){
var state_12257__$1 = state_12257;
var statearr_12271_13209 = state_12257__$1;
(statearr_12271_13209[(2)] = null);

(statearr_12271_13209[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (13))){
var inst_12209 = (state_12257[(8)]);
var inst_12212 = (state_12257[(9)]);
var inst_12211 = (state_12257[(10)]);
var inst_12210 = (state_12257[(12)]);
var inst_12219 = (state_12257[(2)]);
var inst_12220 = (inst_12212 + (1));
var tmp12267 = inst_12209;
var tmp12268 = inst_12211;
var tmp12269 = inst_12210;
var inst_12209__$1 = tmp12267;
var inst_12210__$1 = tmp12269;
var inst_12211__$1 = tmp12268;
var inst_12212__$1 = inst_12220;
var state_12257__$1 = (function (){var statearr_12272 = state_12257;
(statearr_12272[(8)] = inst_12209__$1);

(statearr_12272[(9)] = inst_12212__$1);

(statearr_12272[(10)] = inst_12211__$1);

(statearr_12272[(12)] = inst_12210__$1);

(statearr_12272[(14)] = inst_12219);

return statearr_12272;
})();
var statearr_12273_13210 = state_12257__$1;
(statearr_12273_13210[(2)] = null);

(statearr_12273_13210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (22))){
var state_12257__$1 = state_12257;
var statearr_12280_13211 = state_12257__$1;
(statearr_12280_13211[(2)] = null);

(statearr_12280_13211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (6))){
var inst_12198 = (state_12257[(13)]);
var inst_12207 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12198) : f.call(null,inst_12198));
var inst_12208 = cljs.core.seq(inst_12207);
var inst_12209 = inst_12208;
var inst_12210 = null;
var inst_12211 = (0);
var inst_12212 = (0);
var state_12257__$1 = (function (){var statearr_12281 = state_12257;
(statearr_12281[(8)] = inst_12209);

(statearr_12281[(9)] = inst_12212);

(statearr_12281[(10)] = inst_12211);

(statearr_12281[(12)] = inst_12210);

return statearr_12281;
})();
var statearr_12282_13212 = state_12257__$1;
(statearr_12282_13212[(2)] = null);

(statearr_12282_13212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (17))){
var inst_12223 = (state_12257[(7)]);
var inst_12227 = cljs.core.chunk_first(inst_12223);
var inst_12228 = cljs.core.chunk_rest(inst_12223);
var inst_12229 = cljs.core.count(inst_12227);
var inst_12209 = inst_12228;
var inst_12210 = inst_12227;
var inst_12211 = inst_12229;
var inst_12212 = (0);
var state_12257__$1 = (function (){var statearr_12283 = state_12257;
(statearr_12283[(8)] = inst_12209);

(statearr_12283[(9)] = inst_12212);

(statearr_12283[(10)] = inst_12211);

(statearr_12283[(12)] = inst_12210);

return statearr_12283;
})();
var statearr_12284_13213 = state_12257__$1;
(statearr_12284_13213[(2)] = null);

(statearr_12284_13213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (3))){
var inst_12255 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12257__$1,inst_12255);
} else {
if((state_val_12258 === (12))){
var inst_12243 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12285_13214 = state_12257__$1;
(statearr_12285_13214[(2)] = inst_12243);

(statearr_12285_13214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (2))){
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12257__$1,(4),in$);
} else {
if((state_val_12258 === (23))){
var inst_12251 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12286_13215 = state_12257__$1;
(statearr_12286_13215[(2)] = inst_12251);

(statearr_12286_13215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (19))){
var inst_12238 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12287_13216 = state_12257__$1;
(statearr_12287_13216[(2)] = inst_12238);

(statearr_12287_13216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (11))){
var inst_12209 = (state_12257[(8)]);
var inst_12223 = (state_12257[(7)]);
var inst_12223__$1 = cljs.core.seq(inst_12209);
var state_12257__$1 = (function (){var statearr_12288 = state_12257;
(statearr_12288[(7)] = inst_12223__$1);

return statearr_12288;
})();
if(inst_12223__$1){
var statearr_12291_13217 = state_12257__$1;
(statearr_12291_13217[(1)] = (14));

} else {
var statearr_12292_13218 = state_12257__$1;
(statearr_12292_13218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (9))){
var inst_12245 = (state_12257[(2)]);
var inst_12246 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12257__$1 = (function (){var statearr_12293 = state_12257;
(statearr_12293[(15)] = inst_12245);

return statearr_12293;
})();
if(cljs.core.truth_(inst_12246)){
var statearr_12294_13219 = state_12257__$1;
(statearr_12294_13219[(1)] = (21));

} else {
var statearr_12295_13220 = state_12257__$1;
(statearr_12295_13220[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (5))){
var inst_12201 = cljs.core.async.close_BANG_(out);
var state_12257__$1 = state_12257;
var statearr_12296_13221 = state_12257__$1;
(statearr_12296_13221[(2)] = inst_12201);

(statearr_12296_13221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (14))){
var inst_12223 = (state_12257[(7)]);
var inst_12225 = cljs.core.chunked_seq_QMARK_(inst_12223);
var state_12257__$1 = state_12257;
if(inst_12225){
var statearr_12298_13222 = state_12257__$1;
(statearr_12298_13222[(1)] = (17));

} else {
var statearr_12299_13223 = state_12257__$1;
(statearr_12299_13223[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (16))){
var inst_12241 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12300_13224 = state_12257__$1;
(statearr_12300_13224[(2)] = inst_12241);

(statearr_12300_13224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (10))){
var inst_12212 = (state_12257[(9)]);
var inst_12210 = (state_12257[(12)]);
var inst_12217 = cljs.core._nth(inst_12210,inst_12212);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12257__$1,(13),out,inst_12217);
} else {
if((state_val_12258 === (18))){
var inst_12223 = (state_12257[(7)]);
var inst_12232 = cljs.core.first(inst_12223);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12257__$1,(20),out,inst_12232);
} else {
if((state_val_12258 === (8))){
var inst_12212 = (state_12257[(9)]);
var inst_12211 = (state_12257[(10)]);
var inst_12214 = (inst_12212 < inst_12211);
var inst_12215 = inst_12214;
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12215)){
var statearr_12301_13225 = state_12257__$1;
(statearr_12301_13225[(1)] = (10));

} else {
var statearr_12302_13226 = state_12257__$1;
(statearr_12302_13226[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10621__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10621__auto____0 = (function (){
var statearr_12303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12303[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10621__auto__);

(statearr_12303[(1)] = (1));

return statearr_12303;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10621__auto____1 = (function (state_12257){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_12257);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e12304){var ex__10624__auto__ = e12304;
var statearr_12305_13227 = state_12257;
(statearr_12305_13227[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_12257[(4)]))){
var statearr_12306_13228 = state_12257;
(statearr_12306_13228[(1)] = cljs.core.first((state_12257[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13229 = state_12257;
state_12257 = G__13229;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10621__auto__ = function(state_12257){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10621__auto____1.call(this,state_12257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10621__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10621__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_12307 = f__10663__auto__();
(statearr_12307[(6)] = c__10662__auto__);

return statearr_12307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));

return c__10662__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12310 = arguments.length;
switch (G__12310) {
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
var G__12315 = arguments.length;
switch (G__12315) {
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
var G__12317 = arguments.length;
switch (G__12317) {
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
var c__10662__auto___13233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_12341){
var state_val_12342 = (state_12341[(1)]);
if((state_val_12342 === (7))){
var inst_12336 = (state_12341[(2)]);
var state_12341__$1 = state_12341;
var statearr_12343_13234 = state_12341__$1;
(statearr_12343_13234[(2)] = inst_12336);

(statearr_12343_13234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12342 === (1))){
var inst_12318 = null;
var state_12341__$1 = (function (){var statearr_12344 = state_12341;
(statearr_12344[(7)] = inst_12318);

return statearr_12344;
})();
var statearr_12346_13235 = state_12341__$1;
(statearr_12346_13235[(2)] = null);

(statearr_12346_13235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12342 === (4))){
var inst_12321 = (state_12341[(8)]);
var inst_12321__$1 = (state_12341[(2)]);
var inst_12322 = (inst_12321__$1 == null);
var inst_12323 = cljs.core.not(inst_12322);
var state_12341__$1 = (function (){var statearr_12347 = state_12341;
(statearr_12347[(8)] = inst_12321__$1);

return statearr_12347;
})();
if(inst_12323){
var statearr_12348_13236 = state_12341__$1;
(statearr_12348_13236[(1)] = (5));

} else {
var statearr_12349_13237 = state_12341__$1;
(statearr_12349_13237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12342 === (6))){
var state_12341__$1 = state_12341;
var statearr_12352_13241 = state_12341__$1;
(statearr_12352_13241[(2)] = null);

(statearr_12352_13241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12342 === (3))){
var inst_12338 = (state_12341[(2)]);
var inst_12339 = cljs.core.async.close_BANG_(out);
var state_12341__$1 = (function (){var statearr_12353 = state_12341;
(statearr_12353[(9)] = inst_12338);

return statearr_12353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12341__$1,inst_12339);
} else {
if((state_val_12342 === (2))){
var state_12341__$1 = state_12341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12341__$1,(4),ch);
} else {
if((state_val_12342 === (11))){
var inst_12321 = (state_12341[(8)]);
var inst_12330 = (state_12341[(2)]);
var inst_12318 = inst_12321;
var state_12341__$1 = (function (){var statearr_12360 = state_12341;
(statearr_12360[(7)] = inst_12318);

(statearr_12360[(10)] = inst_12330);

return statearr_12360;
})();
var statearr_12361_13249 = state_12341__$1;
(statearr_12361_13249[(2)] = null);

(statearr_12361_13249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12342 === (9))){
var inst_12321 = (state_12341[(8)]);
var state_12341__$1 = state_12341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12341__$1,(11),out,inst_12321);
} else {
if((state_val_12342 === (5))){
var inst_12318 = (state_12341[(7)]);
var inst_12321 = (state_12341[(8)]);
var inst_12325 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12321,inst_12318);
var state_12341__$1 = state_12341;
if(inst_12325){
var statearr_12363_13253 = state_12341__$1;
(statearr_12363_13253[(1)] = (8));

} else {
var statearr_12364_13254 = state_12341__$1;
(statearr_12364_13254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12342 === (10))){
var inst_12333 = (state_12341[(2)]);
var state_12341__$1 = state_12341;
var statearr_12365_13255 = state_12341__$1;
(statearr_12365_13255[(2)] = inst_12333);

(statearr_12365_13255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12342 === (8))){
var inst_12318 = (state_12341[(7)]);
var tmp12362 = inst_12318;
var inst_12318__$1 = tmp12362;
var state_12341__$1 = (function (){var statearr_12366 = state_12341;
(statearr_12366[(7)] = inst_12318__$1);

return statearr_12366;
})();
var statearr_12367_13260 = state_12341__$1;
(statearr_12367_13260[(2)] = null);

(statearr_12367_13260[(1)] = (2));


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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_12368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12368[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_12368[(1)] = (1));

return statearr_12368;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_12341){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_12341);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e12369){var ex__10624__auto__ = e12369;
var statearr_12370_13269 = state_12341;
(statearr_12370_13269[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_12341[(4)]))){
var statearr_12371_13270 = state_12341;
(statearr_12371_13270[(1)] = cljs.core.first((state_12341[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13271 = state_12341;
state_12341 = G__13271;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_12341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_12341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_12373 = f__10663__auto__();
(statearr_12373[(6)] = c__10662__auto___13233);

return statearr_12373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12377 = arguments.length;
switch (G__12377) {
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
var c__10662__auto___13273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_12417){
var state_val_12418 = (state_12417[(1)]);
if((state_val_12418 === (7))){
var inst_12413 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12419_13274 = state_12417__$1;
(statearr_12419_13274[(2)] = inst_12413);

(statearr_12419_13274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (1))){
var inst_12380 = (new Array(n));
var inst_12381 = inst_12380;
var inst_12382 = (0);
var state_12417__$1 = (function (){var statearr_12420 = state_12417;
(statearr_12420[(7)] = inst_12382);

(statearr_12420[(8)] = inst_12381);

return statearr_12420;
})();
var statearr_12421_13275 = state_12417__$1;
(statearr_12421_13275[(2)] = null);

(statearr_12421_13275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (4))){
var inst_12385 = (state_12417[(9)]);
var inst_12385__$1 = (state_12417[(2)]);
var inst_12386 = (inst_12385__$1 == null);
var inst_12387 = cljs.core.not(inst_12386);
var state_12417__$1 = (function (){var statearr_12422 = state_12417;
(statearr_12422[(9)] = inst_12385__$1);

return statearr_12422;
})();
if(inst_12387){
var statearr_12423_13276 = state_12417__$1;
(statearr_12423_13276[(1)] = (5));

} else {
var statearr_12424_13277 = state_12417__$1;
(statearr_12424_13277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (15))){
var inst_12407 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12425_13278 = state_12417__$1;
(statearr_12425_13278[(2)] = inst_12407);

(statearr_12425_13278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (13))){
var state_12417__$1 = state_12417;
var statearr_12426_13279 = state_12417__$1;
(statearr_12426_13279[(2)] = null);

(statearr_12426_13279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (6))){
var inst_12382 = (state_12417[(7)]);
var inst_12403 = (inst_12382 > (0));
var state_12417__$1 = state_12417;
if(cljs.core.truth_(inst_12403)){
var statearr_12427_13280 = state_12417__$1;
(statearr_12427_13280[(1)] = (12));

} else {
var statearr_12428_13281 = state_12417__$1;
(statearr_12428_13281[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (3))){
var inst_12415 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12417__$1,inst_12415);
} else {
if((state_val_12418 === (12))){
var inst_12381 = (state_12417[(8)]);
var inst_12405 = cljs.core.vec(inst_12381);
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12417__$1,(15),out,inst_12405);
} else {
if((state_val_12418 === (2))){
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12417__$1,(4),ch);
} else {
if((state_val_12418 === (11))){
var inst_12397 = (state_12417[(2)]);
var inst_12398 = (new Array(n));
var inst_12381 = inst_12398;
var inst_12382 = (0);
var state_12417__$1 = (function (){var statearr_12432 = state_12417;
(statearr_12432[(10)] = inst_12397);

(statearr_12432[(7)] = inst_12382);

(statearr_12432[(8)] = inst_12381);

return statearr_12432;
})();
var statearr_12433_13282 = state_12417__$1;
(statearr_12433_13282[(2)] = null);

(statearr_12433_13282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (9))){
var inst_12381 = (state_12417[(8)]);
var inst_12395 = cljs.core.vec(inst_12381);
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12417__$1,(11),out,inst_12395);
} else {
if((state_val_12418 === (5))){
var inst_12390 = (state_12417[(11)]);
var inst_12382 = (state_12417[(7)]);
var inst_12381 = (state_12417[(8)]);
var inst_12385 = (state_12417[(9)]);
var inst_12389 = (inst_12381[inst_12382] = inst_12385);
var inst_12390__$1 = (inst_12382 + (1));
var inst_12391 = (inst_12390__$1 < n);
var state_12417__$1 = (function (){var statearr_12435 = state_12417;
(statearr_12435[(12)] = inst_12389);

(statearr_12435[(11)] = inst_12390__$1);

return statearr_12435;
})();
if(cljs.core.truth_(inst_12391)){
var statearr_12436_13283 = state_12417__$1;
(statearr_12436_13283[(1)] = (8));

} else {
var statearr_12437_13284 = state_12417__$1;
(statearr_12437_13284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (14))){
var inst_12410 = (state_12417[(2)]);
var inst_12411 = cljs.core.async.close_BANG_(out);
var state_12417__$1 = (function (){var statearr_12439 = state_12417;
(statearr_12439[(13)] = inst_12410);

return statearr_12439;
})();
var statearr_12440_13285 = state_12417__$1;
(statearr_12440_13285[(2)] = inst_12411);

(statearr_12440_13285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (10))){
var inst_12401 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12441_13286 = state_12417__$1;
(statearr_12441_13286[(2)] = inst_12401);

(statearr_12441_13286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (8))){
var inst_12390 = (state_12417[(11)]);
var inst_12381 = (state_12417[(8)]);
var tmp12438 = inst_12381;
var inst_12381__$1 = tmp12438;
var inst_12382 = inst_12390;
var state_12417__$1 = (function (){var statearr_12442 = state_12417;
(statearr_12442[(7)] = inst_12382);

(statearr_12442[(8)] = inst_12381__$1);

return statearr_12442;
})();
var statearr_12443_13287 = state_12417__$1;
(statearr_12443_13287[(2)] = null);

(statearr_12443_13287[(1)] = (2));


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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_12444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12444[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_12444[(1)] = (1));

return statearr_12444;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_12417){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_12417);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e12445){var ex__10624__auto__ = e12445;
var statearr_12446_13291 = state_12417;
(statearr_12446_13291[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_12417[(4)]))){
var statearr_12447_13292 = state_12417;
(statearr_12447_13292[(1)] = cljs.core.first((state_12417[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13293 = state_12417;
state_12417 = G__13293;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_12417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_12417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_12448 = f__10663__auto__();
(statearr_12448[(6)] = c__10662__auto___13273);

return statearr_12448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12450 = arguments.length;
switch (G__12450) {
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
var c__10662__auto___13295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10663__auto__ = (function (){var switch__10620__auto__ = (function (state_12492){
var state_val_12493 = (state_12492[(1)]);
if((state_val_12493 === (7))){
var inst_12488 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12494_13296 = state_12492__$1;
(statearr_12494_13296[(2)] = inst_12488);

(statearr_12494_13296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (1))){
var inst_12451 = [];
var inst_12452 = inst_12451;
var inst_12453 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12492__$1 = (function (){var statearr_12495 = state_12492;
(statearr_12495[(7)] = inst_12453);

(statearr_12495[(8)] = inst_12452);

return statearr_12495;
})();
var statearr_12496_13297 = state_12492__$1;
(statearr_12496_13297[(2)] = null);

(statearr_12496_13297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (4))){
var inst_12456 = (state_12492[(9)]);
var inst_12456__$1 = (state_12492[(2)]);
var inst_12457 = (inst_12456__$1 == null);
var inst_12458 = cljs.core.not(inst_12457);
var state_12492__$1 = (function (){var statearr_12498 = state_12492;
(statearr_12498[(9)] = inst_12456__$1);

return statearr_12498;
})();
if(inst_12458){
var statearr_12499_13298 = state_12492__$1;
(statearr_12499_13298[(1)] = (5));

} else {
var statearr_12500_13299 = state_12492__$1;
(statearr_12500_13299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (15))){
var inst_12482 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12501_13300 = state_12492__$1;
(statearr_12501_13300[(2)] = inst_12482);

(statearr_12501_13300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (13))){
var state_12492__$1 = state_12492;
var statearr_12502_13301 = state_12492__$1;
(statearr_12502_13301[(2)] = null);

(statearr_12502_13301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (6))){
var inst_12452 = (state_12492[(8)]);
var inst_12477 = inst_12452.length;
var inst_12478 = (inst_12477 > (0));
var state_12492__$1 = state_12492;
if(cljs.core.truth_(inst_12478)){
var statearr_12503_13302 = state_12492__$1;
(statearr_12503_13302[(1)] = (12));

} else {
var statearr_12504_13303 = state_12492__$1;
(statearr_12504_13303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (3))){
var inst_12490 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12492__$1,inst_12490);
} else {
if((state_val_12493 === (12))){
var inst_12452 = (state_12492[(8)]);
var inst_12480 = cljs.core.vec(inst_12452);
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12492__$1,(15),out,inst_12480);
} else {
if((state_val_12493 === (2))){
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12492__$1,(4),ch);
} else {
if((state_val_12493 === (11))){
var inst_12460 = (state_12492[(10)]);
var inst_12456 = (state_12492[(9)]);
var inst_12470 = (state_12492[(2)]);
var inst_12471 = [];
var inst_12472 = inst_12471.push(inst_12456);
var inst_12452 = inst_12471;
var inst_12453 = inst_12460;
var state_12492__$1 = (function (){var statearr_12505 = state_12492;
(statearr_12505[(7)] = inst_12453);

(statearr_12505[(11)] = inst_12472);

(statearr_12505[(12)] = inst_12470);

(statearr_12505[(8)] = inst_12452);

return statearr_12505;
})();
var statearr_12506_13304 = state_12492__$1;
(statearr_12506_13304[(2)] = null);

(statearr_12506_13304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (9))){
var inst_12452 = (state_12492[(8)]);
var inst_12468 = cljs.core.vec(inst_12452);
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12492__$1,(11),out,inst_12468);
} else {
if((state_val_12493 === (5))){
var inst_12460 = (state_12492[(10)]);
var inst_12456 = (state_12492[(9)]);
var inst_12453 = (state_12492[(7)]);
var inst_12460__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12456) : f.call(null,inst_12456));
var inst_12461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12460__$1,inst_12453);
var inst_12462 = cljs.core.keyword_identical_QMARK_(inst_12453,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12463 = ((inst_12461) || (inst_12462));
var state_12492__$1 = (function (){var statearr_12507 = state_12492;
(statearr_12507[(10)] = inst_12460__$1);

return statearr_12507;
})();
if(cljs.core.truth_(inst_12463)){
var statearr_12508_13305 = state_12492__$1;
(statearr_12508_13305[(1)] = (8));

} else {
var statearr_12509_13306 = state_12492__$1;
(statearr_12509_13306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (14))){
var inst_12485 = (state_12492[(2)]);
var inst_12486 = cljs.core.async.close_BANG_(out);
var state_12492__$1 = (function (){var statearr_12511 = state_12492;
(statearr_12511[(13)] = inst_12485);

return statearr_12511;
})();
var statearr_12512_13307 = state_12492__$1;
(statearr_12512_13307[(2)] = inst_12486);

(statearr_12512_13307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (10))){
var inst_12475 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12514_13308 = state_12492__$1;
(statearr_12514_13308[(2)] = inst_12475);

(statearr_12514_13308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (8))){
var inst_12460 = (state_12492[(10)]);
var inst_12456 = (state_12492[(9)]);
var inst_12452 = (state_12492[(8)]);
var inst_12465 = inst_12452.push(inst_12456);
var tmp12510 = inst_12452;
var inst_12452__$1 = tmp12510;
var inst_12453 = inst_12460;
var state_12492__$1 = (function (){var statearr_12515 = state_12492;
(statearr_12515[(7)] = inst_12453);

(statearr_12515[(14)] = inst_12465);

(statearr_12515[(8)] = inst_12452__$1);

return statearr_12515;
})();
var statearr_12516_13309 = state_12492__$1;
(statearr_12516_13309[(2)] = null);

(statearr_12516_13309[(1)] = (2));


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
var cljs$core$async$state_machine__10621__auto__ = null;
var cljs$core$async$state_machine__10621__auto____0 = (function (){
var statearr_12519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12519[(0)] = cljs$core$async$state_machine__10621__auto__);

(statearr_12519[(1)] = (1));

return statearr_12519;
});
var cljs$core$async$state_machine__10621__auto____1 = (function (state_12492){
while(true){
var ret_value__10622__auto__ = (function (){try{while(true){
var result__10623__auto__ = switch__10620__auto__(state_12492);
if(cljs.core.keyword_identical_QMARK_(result__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10623__auto__;
}
break;
}
}catch (e12520){var ex__10624__auto__ = e12520;
var statearr_12521_13310 = state_12492;
(statearr_12521_13310[(2)] = ex__10624__auto__);


if(cljs.core.seq((state_12492[(4)]))){
var statearr_12522_13311 = state_12492;
(statearr_12522_13311[(1)] = cljs.core.first((state_12492[(4)])));

} else {
throw ex__10624__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13312 = state_12492;
state_12492 = G__13312;
continue;
} else {
return ret_value__10622__auto__;
}
break;
}
});
cljs$core$async$state_machine__10621__auto__ = function(state_12492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10621__auto____1.call(this,state_12492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10621__auto____0;
cljs$core$async$state_machine__10621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10621__auto____1;
return cljs$core$async$state_machine__10621__auto__;
})()
})();
var state__10664__auto__ = (function (){var statearr_12523 = f__10663__auto__();
(statearr_12523[(6)] = c__10662__auto___13295);

return statearr_12523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10664__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
