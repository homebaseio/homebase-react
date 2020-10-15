goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10746 = arguments.length;
switch (G__10746) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10749 = (function (f,blockable,meta10750){
this.f = f;
this.blockable = blockable;
this.meta10750 = meta10750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10751,meta10750__$1){
var self__ = this;
var _10751__$1 = this;
return (new cljs.core.async.t_cljs$core$async10749(self__.f,self__.blockable,meta10750__$1));
}));

(cljs.core.async.t_cljs$core$async10749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10751){
var self__ = this;
var _10751__$1 = this;
return self__.meta10750;
}));

(cljs.core.async.t_cljs$core$async10749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10750","meta10750",-629043889,null)], null);
}));

(cljs.core.async.t_cljs$core$async10749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10749");

(cljs.core.async.t_cljs$core$async10749.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10749.
 */
cljs.core.async.__GT_t_cljs$core$async10749 = (function cljs$core$async$__GT_t_cljs$core$async10749(f__$1,blockable__$1,meta10750){
return (new cljs.core.async.t_cljs$core$async10749(f__$1,blockable__$1,meta10750));
});

}

return (new cljs.core.async.t_cljs$core$async10749(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10760 = arguments.length;
switch (G__10760) {
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
var G__10762 = arguments.length;
switch (G__10762) {
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
var G__10766 = arguments.length;
switch (G__10766) {
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
var val_12642 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12642) : fn1.call(null,val_12642));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12642) : fn1.call(null,val_12642));
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
var G__10774 = arguments.length;
switch (G__10774) {
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
var n__4613__auto___12644 = n;
var x_12645 = (0);
while(true){
if((x_12645 < n__4613__auto___12644)){
(a[x_12645] = x_12645);

var G__12646 = (x_12645 + (1));
x_12645 = G__12646;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10781 = (function (flag,meta10782){
this.flag = flag;
this.meta10782 = meta10782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10783,meta10782__$1){
var self__ = this;
var _10783__$1 = this;
return (new cljs.core.async.t_cljs$core$async10781(self__.flag,meta10782__$1));
}));

(cljs.core.async.t_cljs$core$async10781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10783){
var self__ = this;
var _10783__$1 = this;
return self__.meta10782;
}));

(cljs.core.async.t_cljs$core$async10781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10782","meta10782",-1291984573,null)], null);
}));

(cljs.core.async.t_cljs$core$async10781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10781");

(cljs.core.async.t_cljs$core$async10781.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10781.
 */
cljs.core.async.__GT_t_cljs$core$async10781 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10781(flag__$1,meta10782){
return (new cljs.core.async.t_cljs$core$async10781(flag__$1,meta10782));
});

}

return (new cljs.core.async.t_cljs$core$async10781(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10788 = (function (flag,cb,meta10789){
this.flag = flag;
this.cb = cb;
this.meta10789 = meta10789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10790,meta10789__$1){
var self__ = this;
var _10790__$1 = this;
return (new cljs.core.async.t_cljs$core$async10788(self__.flag,self__.cb,meta10789__$1));
}));

(cljs.core.async.t_cljs$core$async10788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10790){
var self__ = this;
var _10790__$1 = this;
return self__.meta10789;
}));

(cljs.core.async.t_cljs$core$async10788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10789","meta10789",1529283771,null)], null);
}));

(cljs.core.async.t_cljs$core$async10788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10788");

(cljs.core.async.t_cljs$core$async10788.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10788.
 */
cljs.core.async.__GT_t_cljs$core$async10788 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10788(flag__$1,cb__$1,meta10789){
return (new cljs.core.async.t_cljs$core$async10788(flag__$1,cb__$1,meta10789));
});

}

return (new cljs.core.async.t_cljs$core$async10788(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10795_SHARP_){
var G__10797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10795_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10797) : fret.call(null,G__10797));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10796_SHARP_){
var G__10798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10796_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10798) : fret.call(null,G__10798));
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
var G__12648 = (i + (1));
i = G__12648;
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
var len__4736__auto___12649 = arguments.length;
var i__4737__auto___12650 = (0);
while(true){
if((i__4737__auto___12650 < len__4736__auto___12649)){
args__4742__auto__.push((arguments[i__4737__auto___12650]));

var G__12651 = (i__4737__auto___12650 + (1));
i__4737__auto___12650 = G__12651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10804){
var map__10805 = p__10804;
var map__10805__$1 = (((((!((map__10805 == null))))?(((((map__10805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10805):map__10805);
var opts = map__10805__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10800){
var G__10801 = cljs.core.first(seq10800);
var seq10800__$1 = cljs.core.next(seq10800);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10801,seq10800__$1);
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
var G__10817 = arguments.length;
switch (G__10817) {
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
var c__10670__auto___12655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_10847){
var state_val_10848 = (state_10847[(1)]);
if((state_val_10848 === (7))){
var inst_10839 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
var statearr_10854_12657 = state_10847__$1;
(statearr_10854_12657[(2)] = inst_10839);

(statearr_10854_12657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (1))){
var state_10847__$1 = state_10847;
var statearr_10855_12658 = state_10847__$1;
(statearr_10855_12658[(2)] = null);

(statearr_10855_12658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (4))){
var inst_10821 = (state_10847[(7)]);
var inst_10821__$1 = (state_10847[(2)]);
var inst_10822 = (inst_10821__$1 == null);
var state_10847__$1 = (function (){var statearr_10856 = state_10847;
(statearr_10856[(7)] = inst_10821__$1);

return statearr_10856;
})();
if(cljs.core.truth_(inst_10822)){
var statearr_10857_12659 = state_10847__$1;
(statearr_10857_12659[(1)] = (5));

} else {
var statearr_10858_12660 = state_10847__$1;
(statearr_10858_12660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (13))){
var state_10847__$1 = state_10847;
var statearr_10859_12661 = state_10847__$1;
(statearr_10859_12661[(2)] = null);

(statearr_10859_12661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (6))){
var inst_10821 = (state_10847[(7)]);
var state_10847__$1 = state_10847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10847__$1,(11),to,inst_10821);
} else {
if((state_val_10848 === (3))){
var inst_10842 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10847__$1,inst_10842);
} else {
if((state_val_10848 === (12))){
var state_10847__$1 = state_10847;
var statearr_10861_12662 = state_10847__$1;
(statearr_10861_12662[(2)] = null);

(statearr_10861_12662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (2))){
var state_10847__$1 = state_10847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10847__$1,(4),from);
} else {
if((state_val_10848 === (11))){
var inst_10831 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
if(cljs.core.truth_(inst_10831)){
var statearr_10864_12663 = state_10847__$1;
(statearr_10864_12663[(1)] = (12));

} else {
var statearr_10865_12664 = state_10847__$1;
(statearr_10865_12664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (9))){
var state_10847__$1 = state_10847;
var statearr_10868_12665 = state_10847__$1;
(statearr_10868_12665[(2)] = null);

(statearr_10868_12665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (5))){
var state_10847__$1 = state_10847;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10870_12666 = state_10847__$1;
(statearr_10870_12666[(1)] = (8));

} else {
var statearr_10871_12667 = state_10847__$1;
(statearr_10871_12667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (14))){
var inst_10837 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
var statearr_10872_12668 = state_10847__$1;
(statearr_10872_12668[(2)] = inst_10837);

(statearr_10872_12668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (10))){
var inst_10828 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
var statearr_10874_12669 = state_10847__$1;
(statearr_10874_12669[(2)] = inst_10828);

(statearr_10874_12669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (8))){
var inst_10825 = cljs.core.async.close_BANG_(to);
var state_10847__$1 = state_10847;
var statearr_10875_12670 = state_10847__$1;
(statearr_10875_12670[(2)] = inst_10825);

(statearr_10875_12670[(1)] = (10));


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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_10878 = [null,null,null,null,null,null,null,null];
(statearr_10878[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_10878[(1)] = (1));

return statearr_10878;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_10847){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_10847);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e10879){var ex__10591__auto__ = e10879;
var statearr_10880_12671 = state_10847;
(statearr_10880_12671[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_10847[(4)]))){
var statearr_10881_12672 = state_10847;
(statearr_10881_12672[(1)] = cljs.core.first((state_10847[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12673 = state_10847;
state_10847 = G__12673;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_10847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_10847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_10882 = f__10671__auto__();
(statearr_10882[(6)] = c__10670__auto___12655);

return statearr_10882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var process = (function (p__10886){
var vec__10887 = p__10886;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10887,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10887,(1),null);
var job = vec__10887;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10670__auto___12674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_10894){
var state_val_10895 = (state_10894[(1)]);
if((state_val_10895 === (1))){
var state_10894__$1 = state_10894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10894__$1,(2),res,v);
} else {
if((state_val_10895 === (2))){
var inst_10891 = (state_10894[(2)]);
var inst_10892 = cljs.core.async.close_BANG_(res);
var state_10894__$1 = (function (){var statearr_10899 = state_10894;
(statearr_10899[(7)] = inst_10891);

return statearr_10899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10894__$1,inst_10892);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0 = (function (){
var statearr_10902 = [null,null,null,null,null,null,null,null];
(statearr_10902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__);

(statearr_10902[(1)] = (1));

return statearr_10902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1 = (function (state_10894){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_10894);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e10903){var ex__10591__auto__ = e10903;
var statearr_10905_12675 = state_10894;
(statearr_10905_12675[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_10894[(4)]))){
var statearr_10906_12676 = state_10894;
(statearr_10906_12676[(1)] = cljs.core.first((state_10894[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12677 = state_10894;
state_10894 = G__12677;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = function(state_10894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1.call(this,state_10894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_10908 = f__10671__auto__();
(statearr_10908[(6)] = c__10670__auto___12674);

return statearr_10908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10909){
var vec__10910 = p__10909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10910,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10910,(1),null);
var job = vec__10910;
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
var n__4613__auto___12678 = n;
var __12679 = (0);
while(true){
if((__12679 < n__4613__auto___12678)){
var G__10913_12680 = type;
var G__10913_12681__$1 = (((G__10913_12680 instanceof cljs.core.Keyword))?G__10913_12680.fqn:null);
switch (G__10913_12681__$1) {
case "compute":
var c__10670__auto___12683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12679,c__10670__auto___12683,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = ((function (__12679,c__10670__auto___12683,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (state_10926){
var state_val_10927 = (state_10926[(1)]);
if((state_val_10927 === (1))){
var state_10926__$1 = state_10926;
var statearr_10928_12684 = state_10926__$1;
(statearr_10928_12684[(2)] = null);

(statearr_10928_12684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10927 === (2))){
var state_10926__$1 = state_10926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10926__$1,(4),jobs);
} else {
if((state_val_10927 === (3))){
var inst_10924 = (state_10926[(2)]);
var state_10926__$1 = state_10926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10926__$1,inst_10924);
} else {
if((state_val_10927 === (4))){
var inst_10916 = (state_10926[(2)]);
var inst_10917 = process(inst_10916);
var state_10926__$1 = state_10926;
if(cljs.core.truth_(inst_10917)){
var statearr_10929_12685 = state_10926__$1;
(statearr_10929_12685[(1)] = (5));

} else {
var statearr_10930_12686 = state_10926__$1;
(statearr_10930_12686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10927 === (5))){
var state_10926__$1 = state_10926;
var statearr_10931_12687 = state_10926__$1;
(statearr_10931_12687[(2)] = null);

(statearr_10931_12687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10927 === (6))){
var state_10926__$1 = state_10926;
var statearr_10932_12688 = state_10926__$1;
(statearr_10932_12688[(2)] = null);

(statearr_10932_12688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10927 === (7))){
var inst_10922 = (state_10926[(2)]);
var state_10926__$1 = state_10926;
var statearr_10933_12689 = state_10926__$1;
(statearr_10933_12689[(2)] = inst_10922);

(statearr_10933_12689[(1)] = (3));


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
});})(__12679,c__10670__auto___12683,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async))
;
return ((function (__12679,switch__10587__auto__,c__10670__auto___12683,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0 = (function (){
var statearr_10934 = [null,null,null,null,null,null,null];
(statearr_10934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__);

(statearr_10934[(1)] = (1));

return statearr_10934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1 = (function (state_10926){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_10926);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e10935){var ex__10591__auto__ = e10935;
var statearr_10936_12690 = state_10926;
(statearr_10936_12690[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_10926[(4)]))){
var statearr_10937_12691 = state_10926;
(statearr_10937_12691[(1)] = cljs.core.first((state_10926[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12692 = state_10926;
state_10926 = G__12692;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = function(state_10926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1.call(this,state_10926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__;
})()
;})(__12679,switch__10587__auto__,c__10670__auto___12683,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async))
})();
var state__10672__auto__ = (function (){var statearr_10938 = f__10671__auto__();
(statearr_10938[(6)] = c__10670__auto___12683);

return statearr_10938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
});})(__12679,c__10670__auto___12683,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async))
);


break;
case "async":
var c__10670__auto___12693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12679,c__10670__auto___12693,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = ((function (__12679,c__10670__auto___12693,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function (state_10954){
var state_val_10955 = (state_10954[(1)]);
if((state_val_10955 === (1))){
var state_10954__$1 = state_10954;
var statearr_10958_12694 = state_10954__$1;
(statearr_10958_12694[(2)] = null);

(statearr_10958_12694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10955 === (2))){
var state_10954__$1 = state_10954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10954__$1,(4),jobs);
} else {
if((state_val_10955 === (3))){
var inst_10952 = (state_10954[(2)]);
var state_10954__$1 = state_10954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10954__$1,inst_10952);
} else {
if((state_val_10955 === (4))){
var inst_10941 = (state_10954[(2)]);
var inst_10942 = async(inst_10941);
var state_10954__$1 = state_10954;
if(cljs.core.truth_(inst_10942)){
var statearr_10959_12695 = state_10954__$1;
(statearr_10959_12695[(1)] = (5));

} else {
var statearr_10960_12696 = state_10954__$1;
(statearr_10960_12696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10955 === (5))){
var state_10954__$1 = state_10954;
var statearr_10961_12697 = state_10954__$1;
(statearr_10961_12697[(2)] = null);

(statearr_10961_12697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10955 === (6))){
var state_10954__$1 = state_10954;
var statearr_10965_12698 = state_10954__$1;
(statearr_10965_12698[(2)] = null);

(statearr_10965_12698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10955 === (7))){
var inst_10950 = (state_10954[(2)]);
var state_10954__$1 = state_10954;
var statearr_10966_12699 = state_10954__$1;
(statearr_10966_12699[(2)] = inst_10950);

(statearr_10966_12699[(1)] = (3));


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
});})(__12679,c__10670__auto___12693,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async))
;
return ((function (__12679,switch__10587__auto__,c__10670__auto___12693,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0 = (function (){
var statearr_10967 = [null,null,null,null,null,null,null];
(statearr_10967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__);

(statearr_10967[(1)] = (1));

return statearr_10967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1 = (function (state_10954){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_10954);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e10968){var ex__10591__auto__ = e10968;
var statearr_10969_12700 = state_10954;
(statearr_10969_12700[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_10954[(4)]))){
var statearr_10970_12701 = state_10954;
(statearr_10970_12701[(1)] = cljs.core.first((state_10954[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12702 = state_10954;
state_10954 = G__12702;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = function(state_10954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1.call(this,state_10954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__;
})()
;})(__12679,switch__10587__auto__,c__10670__auto___12693,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async))
})();
var state__10672__auto__ = (function (){var statearr_10971 = f__10671__auto__();
(statearr_10971[(6)] = c__10670__auto___12693);

return statearr_10971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
});})(__12679,c__10670__auto___12693,G__10913_12680,G__10913_12681__$1,n__4613__auto___12678,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10913_12681__$1)].join('')));

}

var G__12703 = (__12679 + (1));
__12679 = G__12703;
continue;
} else {
}
break;
}

var c__10670__auto___12704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_10993){
var state_val_10994 = (state_10993[(1)]);
if((state_val_10994 === (7))){
var inst_10989 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
var statearr_10996_12705 = state_10993__$1;
(statearr_10996_12705[(2)] = inst_10989);

(statearr_10996_12705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (1))){
var state_10993__$1 = state_10993;
var statearr_10997_12706 = state_10993__$1;
(statearr_10997_12706[(2)] = null);

(statearr_10997_12706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (4))){
var inst_10974 = (state_10993[(7)]);
var inst_10974__$1 = (state_10993[(2)]);
var inst_10975 = (inst_10974__$1 == null);
var state_10993__$1 = (function (){var statearr_10998 = state_10993;
(statearr_10998[(7)] = inst_10974__$1);

return statearr_10998;
})();
if(cljs.core.truth_(inst_10975)){
var statearr_10999_12707 = state_10993__$1;
(statearr_10999_12707[(1)] = (5));

} else {
var statearr_11000_12708 = state_10993__$1;
(statearr_11000_12708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (6))){
var inst_10979 = (state_10993[(8)]);
var inst_10974 = (state_10993[(7)]);
var inst_10979__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10981 = [inst_10974,inst_10979__$1];
var inst_10982 = (new cljs.core.PersistentVector(null,2,(5),inst_10980,inst_10981,null));
var state_10993__$1 = (function (){var statearr_11005 = state_10993;
(statearr_11005[(8)] = inst_10979__$1);

return statearr_11005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10993__$1,(8),jobs,inst_10982);
} else {
if((state_val_10994 === (3))){
var inst_10991 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10993__$1,inst_10991);
} else {
if((state_val_10994 === (2))){
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10993__$1,(4),from);
} else {
if((state_val_10994 === (9))){
var inst_10986 = (state_10993[(2)]);
var state_10993__$1 = (function (){var statearr_11022 = state_10993;
(statearr_11022[(9)] = inst_10986);

return statearr_11022;
})();
var statearr_11023_12709 = state_10993__$1;
(statearr_11023_12709[(2)] = null);

(statearr_11023_12709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (5))){
var inst_10977 = cljs.core.async.close_BANG_(jobs);
var state_10993__$1 = state_10993;
var statearr_11024_12710 = state_10993__$1;
(statearr_11024_12710[(2)] = inst_10977);

(statearr_11024_12710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (8))){
var inst_10979 = (state_10993[(8)]);
var inst_10984 = (state_10993[(2)]);
var state_10993__$1 = (function (){var statearr_11025 = state_10993;
(statearr_11025[(10)] = inst_10984);

return statearr_11025;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10993__$1,(9),results,inst_10979);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0 = (function (){
var statearr_11026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__);

(statearr_11026[(1)] = (1));

return statearr_11026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1 = (function (state_10993){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_10993);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11027){var ex__10591__auto__ = e11027;
var statearr_11028_12711 = state_10993;
(statearr_11028_12711[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_10993[(4)]))){
var statearr_11029_12712 = state_10993;
(statearr_11029_12712[(1)] = cljs.core.first((state_10993[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12713 = state_10993;
state_10993 = G__12713;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = function(state_10993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1.call(this,state_10993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11030 = f__10671__auto__();
(statearr_11030[(6)] = c__10670__auto___12704);

return statearr_11030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11072){
var state_val_11073 = (state_11072[(1)]);
if((state_val_11073 === (7))){
var inst_11068 = (state_11072[(2)]);
var state_11072__$1 = state_11072;
var statearr_11074_12714 = state_11072__$1;
(statearr_11074_12714[(2)] = inst_11068);

(statearr_11074_12714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (20))){
var state_11072__$1 = state_11072;
var statearr_11075_12715 = state_11072__$1;
(statearr_11075_12715[(2)] = null);

(statearr_11075_12715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (1))){
var state_11072__$1 = state_11072;
var statearr_11076_12716 = state_11072__$1;
(statearr_11076_12716[(2)] = null);

(statearr_11076_12716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (4))){
var inst_11034 = (state_11072[(7)]);
var inst_11034__$1 = (state_11072[(2)]);
var inst_11035 = (inst_11034__$1 == null);
var state_11072__$1 = (function (){var statearr_11077 = state_11072;
(statearr_11077[(7)] = inst_11034__$1);

return statearr_11077;
})();
if(cljs.core.truth_(inst_11035)){
var statearr_11078_12717 = state_11072__$1;
(statearr_11078_12717[(1)] = (5));

} else {
var statearr_11079_12718 = state_11072__$1;
(statearr_11079_12718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (15))){
var inst_11050 = (state_11072[(8)]);
var state_11072__$1 = state_11072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11072__$1,(18),to,inst_11050);
} else {
if((state_val_11073 === (21))){
var inst_11063 = (state_11072[(2)]);
var state_11072__$1 = state_11072;
var statearr_11080_12719 = state_11072__$1;
(statearr_11080_12719[(2)] = inst_11063);

(statearr_11080_12719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (13))){
var inst_11065 = (state_11072[(2)]);
var state_11072__$1 = (function (){var statearr_11091 = state_11072;
(statearr_11091[(9)] = inst_11065);

return statearr_11091;
})();
var statearr_11092_12720 = state_11072__$1;
(statearr_11092_12720[(2)] = null);

(statearr_11092_12720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (6))){
var inst_11034 = (state_11072[(7)]);
var state_11072__$1 = state_11072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11072__$1,(11),inst_11034);
} else {
if((state_val_11073 === (17))){
var inst_11058 = (state_11072[(2)]);
var state_11072__$1 = state_11072;
if(cljs.core.truth_(inst_11058)){
var statearr_11093_12721 = state_11072__$1;
(statearr_11093_12721[(1)] = (19));

} else {
var statearr_11094_12722 = state_11072__$1;
(statearr_11094_12722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (3))){
var inst_11070 = (state_11072[(2)]);
var state_11072__$1 = state_11072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11072__$1,inst_11070);
} else {
if((state_val_11073 === (12))){
var inst_11045 = (state_11072[(10)]);
var state_11072__$1 = state_11072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11072__$1,(14),inst_11045);
} else {
if((state_val_11073 === (2))){
var state_11072__$1 = state_11072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11072__$1,(4),results);
} else {
if((state_val_11073 === (19))){
var state_11072__$1 = state_11072;
var statearr_11098_12723 = state_11072__$1;
(statearr_11098_12723[(2)] = null);

(statearr_11098_12723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (11))){
var inst_11045 = (state_11072[(2)]);
var state_11072__$1 = (function (){var statearr_11101 = state_11072;
(statearr_11101[(10)] = inst_11045);

return statearr_11101;
})();
var statearr_11102_12724 = state_11072__$1;
(statearr_11102_12724[(2)] = null);

(statearr_11102_12724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (9))){
var state_11072__$1 = state_11072;
var statearr_11103_12726 = state_11072__$1;
(statearr_11103_12726[(2)] = null);

(statearr_11103_12726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (5))){
var state_11072__$1 = state_11072;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11104_12727 = state_11072__$1;
(statearr_11104_12727[(1)] = (8));

} else {
var statearr_11105_12728 = state_11072__$1;
(statearr_11105_12728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (14))){
var inst_11050 = (state_11072[(8)]);
var inst_11050__$1 = (state_11072[(2)]);
var inst_11051 = (inst_11050__$1 == null);
var inst_11052 = cljs.core.not(inst_11051);
var state_11072__$1 = (function (){var statearr_11106 = state_11072;
(statearr_11106[(8)] = inst_11050__$1);

return statearr_11106;
})();
if(inst_11052){
var statearr_11107_12729 = state_11072__$1;
(statearr_11107_12729[(1)] = (15));

} else {
var statearr_11108_12730 = state_11072__$1;
(statearr_11108_12730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (16))){
var state_11072__$1 = state_11072;
var statearr_11109_12731 = state_11072__$1;
(statearr_11109_12731[(2)] = false);

(statearr_11109_12731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (10))){
var inst_11041 = (state_11072[(2)]);
var state_11072__$1 = state_11072;
var statearr_11110_12732 = state_11072__$1;
(statearr_11110_12732[(2)] = inst_11041);

(statearr_11110_12732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (18))){
var inst_11055 = (state_11072[(2)]);
var state_11072__$1 = state_11072;
var statearr_11111_12733 = state_11072__$1;
(statearr_11111_12733[(2)] = inst_11055);

(statearr_11111_12733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11073 === (8))){
var inst_11038 = cljs.core.async.close_BANG_(to);
var state_11072__$1 = state_11072;
var statearr_11112_12734 = state_11072__$1;
(statearr_11112_12734[(2)] = inst_11038);

(statearr_11112_12734[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0 = (function (){
var statearr_11113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__);

(statearr_11113[(1)] = (1));

return statearr_11113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1 = (function (state_11072){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11072);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11114){var ex__10591__auto__ = e11114;
var statearr_11115_12735 = state_11072;
(statearr_11115_12735[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11072[(4)]))){
var statearr_11116_12736 = state_11072;
(statearr_11116_12736[(1)] = cljs.core.first((state_11072[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12737 = state_11072;
state_11072 = G__12737;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__ = function(state_11072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1.call(this,state_11072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11117 = f__10671__auto__();
(statearr_11117[(6)] = c__10670__auto__);

return statearr_11117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
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
var G__11119 = arguments.length;
switch (G__11119) {
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
var G__11122 = arguments.length;
switch (G__11122) {
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
var G__11128 = arguments.length;
switch (G__11128) {
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
var c__10670__auto___12741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11154){
var state_val_11155 = (state_11154[(1)]);
if((state_val_11155 === (7))){
var inst_11150 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
var statearr_11156_12742 = state_11154__$1;
(statearr_11156_12742[(2)] = inst_11150);

(statearr_11156_12742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (1))){
var state_11154__$1 = state_11154;
var statearr_11157_12743 = state_11154__$1;
(statearr_11157_12743[(2)] = null);

(statearr_11157_12743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (4))){
var inst_11131 = (state_11154[(7)]);
var inst_11131__$1 = (state_11154[(2)]);
var inst_11132 = (inst_11131__$1 == null);
var state_11154__$1 = (function (){var statearr_11158 = state_11154;
(statearr_11158[(7)] = inst_11131__$1);

return statearr_11158;
})();
if(cljs.core.truth_(inst_11132)){
var statearr_11159_12744 = state_11154__$1;
(statearr_11159_12744[(1)] = (5));

} else {
var statearr_11160_12745 = state_11154__$1;
(statearr_11160_12745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (13))){
var state_11154__$1 = state_11154;
var statearr_11161_12746 = state_11154__$1;
(statearr_11161_12746[(2)] = null);

(statearr_11161_12746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (6))){
var inst_11131 = (state_11154[(7)]);
var inst_11137 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11131) : p.call(null,inst_11131));
var state_11154__$1 = state_11154;
if(cljs.core.truth_(inst_11137)){
var statearr_11162_12747 = state_11154__$1;
(statearr_11162_12747[(1)] = (9));

} else {
var statearr_11163_12748 = state_11154__$1;
(statearr_11163_12748[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (3))){
var inst_11152 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11154__$1,inst_11152);
} else {
if((state_val_11155 === (12))){
var state_11154__$1 = state_11154;
var statearr_11164_12749 = state_11154__$1;
(statearr_11164_12749[(2)] = null);

(statearr_11164_12749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (2))){
var state_11154__$1 = state_11154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11154__$1,(4),ch);
} else {
if((state_val_11155 === (11))){
var inst_11131 = (state_11154[(7)]);
var inst_11141 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11154__$1,(8),inst_11141,inst_11131);
} else {
if((state_val_11155 === (9))){
var state_11154__$1 = state_11154;
var statearr_11165_12750 = state_11154__$1;
(statearr_11165_12750[(2)] = tc);

(statearr_11165_12750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (5))){
var inst_11134 = cljs.core.async.close_BANG_(tc);
var inst_11135 = cljs.core.async.close_BANG_(fc);
var state_11154__$1 = (function (){var statearr_11166 = state_11154;
(statearr_11166[(8)] = inst_11134);

return statearr_11166;
})();
var statearr_11167_12765 = state_11154__$1;
(statearr_11167_12765[(2)] = inst_11135);

(statearr_11167_12765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (14))){
var inst_11148 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
var statearr_11169_12766 = state_11154__$1;
(statearr_11169_12766[(2)] = inst_11148);

(statearr_11169_12766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (10))){
var state_11154__$1 = state_11154;
var statearr_11170_12767 = state_11154__$1;
(statearr_11170_12767[(2)] = fc);

(statearr_11170_12767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11155 === (8))){
var inst_11143 = (state_11154[(2)]);
var state_11154__$1 = state_11154;
if(cljs.core.truth_(inst_11143)){
var statearr_11172_12768 = state_11154__$1;
(statearr_11172_12768[(1)] = (12));

} else {
var statearr_11174_12769 = state_11154__$1;
(statearr_11174_12769[(1)] = (13));

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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_11177 = [null,null,null,null,null,null,null,null,null];
(statearr_11177[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_11177[(1)] = (1));

return statearr_11177;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_11154){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11154);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11178){var ex__10591__auto__ = e11178;
var statearr_11179_12770 = state_11154;
(statearr_11179_12770[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11154[(4)]))){
var statearr_11180_12771 = state_11154;
(statearr_11180_12771[(1)] = cljs.core.first((state_11154[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12772 = state_11154;
state_11154 = G__12772;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_11154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_11154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11181 = f__10671__auto__();
(statearr_11181[(6)] = c__10670__auto___12741);

return statearr_11181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11208){
var state_val_11209 = (state_11208[(1)]);
if((state_val_11209 === (7))){
var inst_11204 = (state_11208[(2)]);
var state_11208__$1 = state_11208;
var statearr_11210_12773 = state_11208__$1;
(statearr_11210_12773[(2)] = inst_11204);

(statearr_11210_12773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11209 === (1))){
var inst_11185 = init;
var inst_11186 = inst_11185;
var state_11208__$1 = (function (){var statearr_11211 = state_11208;
(statearr_11211[(7)] = inst_11186);

return statearr_11211;
})();
var statearr_11212_12774 = state_11208__$1;
(statearr_11212_12774[(2)] = null);

(statearr_11212_12774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11209 === (4))){
var inst_11191 = (state_11208[(8)]);
var inst_11191__$1 = (state_11208[(2)]);
var inst_11192 = (inst_11191__$1 == null);
var state_11208__$1 = (function (){var statearr_11213 = state_11208;
(statearr_11213[(8)] = inst_11191__$1);

return statearr_11213;
})();
if(cljs.core.truth_(inst_11192)){
var statearr_11214_12786 = state_11208__$1;
(statearr_11214_12786[(1)] = (5));

} else {
var statearr_11215_12787 = state_11208__$1;
(statearr_11215_12787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11209 === (6))){
var inst_11186 = (state_11208[(7)]);
var inst_11195 = (state_11208[(9)]);
var inst_11191 = (state_11208[(8)]);
var inst_11195__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11186,inst_11191) : f.call(null,inst_11186,inst_11191));
var inst_11196 = cljs.core.reduced_QMARK_(inst_11195__$1);
var state_11208__$1 = (function (){var statearr_11216 = state_11208;
(statearr_11216[(9)] = inst_11195__$1);

return statearr_11216;
})();
if(inst_11196){
var statearr_11217_12788 = state_11208__$1;
(statearr_11217_12788[(1)] = (8));

} else {
var statearr_11218_12789 = state_11208__$1;
(statearr_11218_12789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11209 === (3))){
var inst_11206 = (state_11208[(2)]);
var state_11208__$1 = state_11208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11208__$1,inst_11206);
} else {
if((state_val_11209 === (2))){
var state_11208__$1 = state_11208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11208__$1,(4),ch);
} else {
if((state_val_11209 === (9))){
var inst_11195 = (state_11208[(9)]);
var inst_11186 = inst_11195;
var state_11208__$1 = (function (){var statearr_11219 = state_11208;
(statearr_11219[(7)] = inst_11186);

return statearr_11219;
})();
var statearr_11220_12792 = state_11208__$1;
(statearr_11220_12792[(2)] = null);

(statearr_11220_12792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11209 === (5))){
var inst_11186 = (state_11208[(7)]);
var state_11208__$1 = state_11208;
var statearr_11221_12794 = state_11208__$1;
(statearr_11221_12794[(2)] = inst_11186);

(statearr_11221_12794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11209 === (10))){
var inst_11202 = (state_11208[(2)]);
var state_11208__$1 = state_11208;
var statearr_11222_12795 = state_11208__$1;
(statearr_11222_12795[(2)] = inst_11202);

(statearr_11222_12795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11209 === (8))){
var inst_11195 = (state_11208[(9)]);
var inst_11198 = cljs.core.deref(inst_11195);
var state_11208__$1 = state_11208;
var statearr_11223_12798 = state_11208__$1;
(statearr_11223_12798[(2)] = inst_11198);

(statearr_11223_12798[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10588__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10588__auto____0 = (function (){
var statearr_11227 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11227[(0)] = cljs$core$async$reduce_$_state_machine__10588__auto__);

(statearr_11227[(1)] = (1));

return statearr_11227;
});
var cljs$core$async$reduce_$_state_machine__10588__auto____1 = (function (state_11208){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11208);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11229){var ex__10591__auto__ = e11229;
var statearr_11230_12802 = state_11208;
(statearr_11230_12802[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11208[(4)]))){
var statearr_11232_12803 = state_11208;
(statearr_11232_12803[(1)] = cljs.core.first((state_11208[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12804 = state_11208;
state_11208 = G__12804;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10588__auto__ = function(state_11208){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10588__auto____1.call(this,state_11208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10588__auto____0;
cljs$core$async$reduce_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10588__auto____1;
return cljs$core$async$reduce_$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11235 = f__10671__auto__();
(statearr_11235[(6)] = c__10670__auto__);

return statearr_11235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11243){
var state_val_11244 = (state_11243[(1)]);
if((state_val_11244 === (1))){
var inst_11238 = cljs.core.async.reduce(f__$1,init,ch);
var state_11243__$1 = state_11243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11243__$1,(2),inst_11238);
} else {
if((state_val_11244 === (2))){
var inst_11240 = (state_11243[(2)]);
var inst_11241 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11240) : f__$1.call(null,inst_11240));
var state_11243__$1 = state_11243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11243__$1,inst_11241);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10588__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10588__auto____0 = (function (){
var statearr_11245 = [null,null,null,null,null,null,null];
(statearr_11245[(0)] = cljs$core$async$transduce_$_state_machine__10588__auto__);

(statearr_11245[(1)] = (1));

return statearr_11245;
});
var cljs$core$async$transduce_$_state_machine__10588__auto____1 = (function (state_11243){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11243);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11246){var ex__10591__auto__ = e11246;
var statearr_11247_12806 = state_11243;
(statearr_11247_12806[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11243[(4)]))){
var statearr_11248_12807 = state_11243;
(statearr_11248_12807[(1)] = cljs.core.first((state_11243[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12808 = state_11243;
state_11243 = G__12808;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10588__auto__ = function(state_11243){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10588__auto____1.call(this,state_11243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10588__auto____0;
cljs$core$async$transduce_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10588__auto____1;
return cljs$core$async$transduce_$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11249 = f__10671__auto__();
(statearr_11249[(6)] = c__10670__auto__);

return statearr_11249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
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
var G__11251 = arguments.length;
switch (G__11251) {
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
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11277){
var state_val_11279 = (state_11277[(1)]);
if((state_val_11279 === (7))){
var inst_11259 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11283_12810 = state_11277__$1;
(statearr_11283_12810[(2)] = inst_11259);

(statearr_11283_12810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (1))){
var inst_11252 = cljs.core.seq(coll);
var inst_11253 = inst_11252;
var state_11277__$1 = (function (){var statearr_11284 = state_11277;
(statearr_11284[(7)] = inst_11253);

return statearr_11284;
})();
var statearr_11285_12811 = state_11277__$1;
(statearr_11285_12811[(2)] = null);

(statearr_11285_12811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (4))){
var inst_11253 = (state_11277[(7)]);
var inst_11257 = cljs.core.first(inst_11253);
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11277__$1,(7),ch,inst_11257);
} else {
if((state_val_11279 === (13))){
var inst_11271 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11286_12812 = state_11277__$1;
(statearr_11286_12812[(2)] = inst_11271);

(statearr_11286_12812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (6))){
var inst_11262 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
if(cljs.core.truth_(inst_11262)){
var statearr_11287_12813 = state_11277__$1;
(statearr_11287_12813[(1)] = (8));

} else {
var statearr_11288_12815 = state_11277__$1;
(statearr_11288_12815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (3))){
var inst_11275 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11277__$1,inst_11275);
} else {
if((state_val_11279 === (12))){
var state_11277__$1 = state_11277;
var statearr_11289_12817 = state_11277__$1;
(statearr_11289_12817[(2)] = null);

(statearr_11289_12817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (2))){
var inst_11253 = (state_11277[(7)]);
var state_11277__$1 = state_11277;
if(cljs.core.truth_(inst_11253)){
var statearr_11291_12818 = state_11277__$1;
(statearr_11291_12818[(1)] = (4));

} else {
var statearr_11292_12819 = state_11277__$1;
(statearr_11292_12819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (11))){
var inst_11268 = cljs.core.async.close_BANG_(ch);
var state_11277__$1 = state_11277;
var statearr_11293_12821 = state_11277__$1;
(statearr_11293_12821[(2)] = inst_11268);

(statearr_11293_12821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (9))){
var state_11277__$1 = state_11277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11294_12823 = state_11277__$1;
(statearr_11294_12823[(1)] = (11));

} else {
var statearr_11295_12825 = state_11277__$1;
(statearr_11295_12825[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (5))){
var inst_11253 = (state_11277[(7)]);
var state_11277__$1 = state_11277;
var statearr_11296_12827 = state_11277__$1;
(statearr_11296_12827[(2)] = inst_11253);

(statearr_11296_12827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (10))){
var inst_11273 = (state_11277[(2)]);
var state_11277__$1 = state_11277;
var statearr_11297_12830 = state_11277__$1;
(statearr_11297_12830[(2)] = inst_11273);

(statearr_11297_12830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (8))){
var inst_11253 = (state_11277[(7)]);
var inst_11264 = cljs.core.next(inst_11253);
var inst_11253__$1 = inst_11264;
var state_11277__$1 = (function (){var statearr_11298 = state_11277;
(statearr_11298[(7)] = inst_11253__$1);

return statearr_11298;
})();
var statearr_11299_12831 = state_11277__$1;
(statearr_11299_12831[(2)] = null);

(statearr_11299_12831[(1)] = (2));


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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_11300 = [null,null,null,null,null,null,null,null];
(statearr_11300[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_11300[(1)] = (1));

return statearr_11300;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_11277){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11277);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11301){var ex__10591__auto__ = e11301;
var statearr_11302_12835 = state_11277;
(statearr_11302_12835[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11277[(4)]))){
var statearr_11303_12838 = state_11277;
(statearr_11303_12838[(1)] = cljs.core.first((state_11277[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12839 = state_11277;
state_11277 = G__12839;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_11277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_11277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11304 = f__10671__auto__();
(statearr_11304[(6)] = c__10670__auto__);

return statearr_11304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
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
var G__11306 = arguments.length;
switch (G__11306) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12842 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12842(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12844 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12844(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12845 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12845(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12846 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12846(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11320 = (function (ch,cs,meta11321){
this.ch = ch;
this.cs = cs;
this.meta11321 = meta11321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11322,meta11321__$1){
var self__ = this;
var _11322__$1 = this;
return (new cljs.core.async.t_cljs$core$async11320(self__.ch,self__.cs,meta11321__$1));
}));

(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11322){
var self__ = this;
var _11322__$1 = this;
return self__.meta11321;
}));

(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11320.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11321","meta11321",-1250130343,null)], null);
}));

(cljs.core.async.t_cljs$core$async11320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11320");

(cljs.core.async.t_cljs$core$async11320.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11320.
 */
cljs.core.async.__GT_t_cljs$core$async11320 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11320(ch__$1,cs__$1,meta11321){
return (new cljs.core.async.t_cljs$core$async11320(ch__$1,cs__$1,meta11321));
});

}

return (new cljs.core.async.t_cljs$core$async11320(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10670__auto___12847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11465){
var state_val_11467 = (state_11465[(1)]);
if((state_val_11467 === (7))){
var inst_11460 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11468_12848 = state_11465__$1;
(statearr_11468_12848[(2)] = inst_11460);

(statearr_11468_12848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (20))){
var inst_11365 = (state_11465[(7)]);
var inst_11377 = cljs.core.first(inst_11365);
var inst_11378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11377,(0),null);
var inst_11379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11377,(1),null);
var state_11465__$1 = (function (){var statearr_11469 = state_11465;
(statearr_11469[(8)] = inst_11378);

return statearr_11469;
})();
if(cljs.core.truth_(inst_11379)){
var statearr_11471_12849 = state_11465__$1;
(statearr_11471_12849[(1)] = (22));

} else {
var statearr_11472_12850 = state_11465__$1;
(statearr_11472_12850[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (27))){
var inst_11407 = (state_11465[(9)]);
var inst_11334 = (state_11465[(10)]);
var inst_11414 = (state_11465[(11)]);
var inst_11409 = (state_11465[(12)]);
var inst_11414__$1 = cljs.core._nth(inst_11407,inst_11409);
var inst_11415 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11414__$1,inst_11334,done);
var state_11465__$1 = (function (){var statearr_11473 = state_11465;
(statearr_11473[(11)] = inst_11414__$1);

return statearr_11473;
})();
if(cljs.core.truth_(inst_11415)){
var statearr_11474_12851 = state_11465__$1;
(statearr_11474_12851[(1)] = (30));

} else {
var statearr_11475_12852 = state_11465__$1;
(statearr_11475_12852[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (1))){
var state_11465__$1 = state_11465;
var statearr_11476_12853 = state_11465__$1;
(statearr_11476_12853[(2)] = null);

(statearr_11476_12853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (24))){
var inst_11365 = (state_11465[(7)]);
var inst_11384 = (state_11465[(2)]);
var inst_11385 = cljs.core.next(inst_11365);
var inst_11343 = inst_11385;
var inst_11344 = null;
var inst_11345 = (0);
var inst_11346 = (0);
var state_11465__$1 = (function (){var statearr_11477 = state_11465;
(statearr_11477[(13)] = inst_11345);

(statearr_11477[(14)] = inst_11343);

(statearr_11477[(15)] = inst_11344);

(statearr_11477[(16)] = inst_11346);

(statearr_11477[(17)] = inst_11384);

return statearr_11477;
})();
var statearr_11478_12854 = state_11465__$1;
(statearr_11478_12854[(2)] = null);

(statearr_11478_12854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (39))){
var state_11465__$1 = state_11465;
var statearr_11482_12855 = state_11465__$1;
(statearr_11482_12855[(2)] = null);

(statearr_11482_12855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (4))){
var inst_11334 = (state_11465[(10)]);
var inst_11334__$1 = (state_11465[(2)]);
var inst_11335 = (inst_11334__$1 == null);
var state_11465__$1 = (function (){var statearr_11483 = state_11465;
(statearr_11483[(10)] = inst_11334__$1);

return statearr_11483;
})();
if(cljs.core.truth_(inst_11335)){
var statearr_11484_12856 = state_11465__$1;
(statearr_11484_12856[(1)] = (5));

} else {
var statearr_11485_12857 = state_11465__$1;
(statearr_11485_12857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (15))){
var inst_11345 = (state_11465[(13)]);
var inst_11343 = (state_11465[(14)]);
var inst_11344 = (state_11465[(15)]);
var inst_11346 = (state_11465[(16)]);
var inst_11361 = (state_11465[(2)]);
var inst_11362 = (inst_11346 + (1));
var tmp11479 = inst_11345;
var tmp11480 = inst_11343;
var tmp11481 = inst_11344;
var inst_11343__$1 = tmp11480;
var inst_11344__$1 = tmp11481;
var inst_11345__$1 = tmp11479;
var inst_11346__$1 = inst_11362;
var state_11465__$1 = (function (){var statearr_11486 = state_11465;
(statearr_11486[(13)] = inst_11345__$1);

(statearr_11486[(14)] = inst_11343__$1);

(statearr_11486[(18)] = inst_11361);

(statearr_11486[(15)] = inst_11344__$1);

(statearr_11486[(16)] = inst_11346__$1);

return statearr_11486;
})();
var statearr_11487_12860 = state_11465__$1;
(statearr_11487_12860[(2)] = null);

(statearr_11487_12860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (21))){
var inst_11388 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11491_12861 = state_11465__$1;
(statearr_11491_12861[(2)] = inst_11388);

(statearr_11491_12861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (31))){
var inst_11414 = (state_11465[(11)]);
var inst_11418 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11414);
var state_11465__$1 = state_11465;
var statearr_11492_12862 = state_11465__$1;
(statearr_11492_12862[(2)] = inst_11418);

(statearr_11492_12862[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (32))){
var inst_11406 = (state_11465[(19)]);
var inst_11407 = (state_11465[(9)]);
var inst_11408 = (state_11465[(20)]);
var inst_11409 = (state_11465[(12)]);
var inst_11420 = (state_11465[(2)]);
var inst_11421 = (inst_11409 + (1));
var tmp11488 = inst_11406;
var tmp11489 = inst_11407;
var tmp11490 = inst_11408;
var inst_11406__$1 = tmp11488;
var inst_11407__$1 = tmp11489;
var inst_11408__$1 = tmp11490;
var inst_11409__$1 = inst_11421;
var state_11465__$1 = (function (){var statearr_11493 = state_11465;
(statearr_11493[(19)] = inst_11406__$1);

(statearr_11493[(9)] = inst_11407__$1);

(statearr_11493[(21)] = inst_11420);

(statearr_11493[(20)] = inst_11408__$1);

(statearr_11493[(12)] = inst_11409__$1);

return statearr_11493;
})();
var statearr_11502_12863 = state_11465__$1;
(statearr_11502_12863[(2)] = null);

(statearr_11502_12863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (40))){
var inst_11433 = (state_11465[(22)]);
var inst_11437 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11433);
var state_11465__$1 = state_11465;
var statearr_11503_12864 = state_11465__$1;
(statearr_11503_12864[(2)] = inst_11437);

(statearr_11503_12864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (33))){
var inst_11424 = (state_11465[(23)]);
var inst_11426 = cljs.core.chunked_seq_QMARK_(inst_11424);
var state_11465__$1 = state_11465;
if(inst_11426){
var statearr_11504_12865 = state_11465__$1;
(statearr_11504_12865[(1)] = (36));

} else {
var statearr_11505_12866 = state_11465__$1;
(statearr_11505_12866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (13))){
var inst_11355 = (state_11465[(24)]);
var inst_11358 = cljs.core.async.close_BANG_(inst_11355);
var state_11465__$1 = state_11465;
var statearr_11506_12867 = state_11465__$1;
(statearr_11506_12867[(2)] = inst_11358);

(statearr_11506_12867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (22))){
var inst_11378 = (state_11465[(8)]);
var inst_11381 = cljs.core.async.close_BANG_(inst_11378);
var state_11465__$1 = state_11465;
var statearr_11507_12868 = state_11465__$1;
(statearr_11507_12868[(2)] = inst_11381);

(statearr_11507_12868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (36))){
var inst_11424 = (state_11465[(23)]);
var inst_11428 = cljs.core.chunk_first(inst_11424);
var inst_11429 = cljs.core.chunk_rest(inst_11424);
var inst_11430 = cljs.core.count(inst_11428);
var inst_11406 = inst_11429;
var inst_11407 = inst_11428;
var inst_11408 = inst_11430;
var inst_11409 = (0);
var state_11465__$1 = (function (){var statearr_11508 = state_11465;
(statearr_11508[(19)] = inst_11406);

(statearr_11508[(9)] = inst_11407);

(statearr_11508[(20)] = inst_11408);

(statearr_11508[(12)] = inst_11409);

return statearr_11508;
})();
var statearr_11509_12869 = state_11465__$1;
(statearr_11509_12869[(2)] = null);

(statearr_11509_12869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (41))){
var inst_11424 = (state_11465[(23)]);
var inst_11439 = (state_11465[(2)]);
var inst_11440 = cljs.core.next(inst_11424);
var inst_11406 = inst_11440;
var inst_11407 = null;
var inst_11408 = (0);
var inst_11409 = (0);
var state_11465__$1 = (function (){var statearr_11510 = state_11465;
(statearr_11510[(19)] = inst_11406);

(statearr_11510[(25)] = inst_11439);

(statearr_11510[(9)] = inst_11407);

(statearr_11510[(20)] = inst_11408);

(statearr_11510[(12)] = inst_11409);

return statearr_11510;
})();
var statearr_11511_12870 = state_11465__$1;
(statearr_11511_12870[(2)] = null);

(statearr_11511_12870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (43))){
var state_11465__$1 = state_11465;
var statearr_11512_12871 = state_11465__$1;
(statearr_11512_12871[(2)] = null);

(statearr_11512_12871[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (29))){
var inst_11448 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11513_12872 = state_11465__$1;
(statearr_11513_12872[(2)] = inst_11448);

(statearr_11513_12872[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (44))){
var inst_11457 = (state_11465[(2)]);
var state_11465__$1 = (function (){var statearr_11514 = state_11465;
(statearr_11514[(26)] = inst_11457);

return statearr_11514;
})();
var statearr_11515_12873 = state_11465__$1;
(statearr_11515_12873[(2)] = null);

(statearr_11515_12873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (6))){
var inst_11398 = (state_11465[(27)]);
var inst_11397 = cljs.core.deref(cs);
var inst_11398__$1 = cljs.core.keys(inst_11397);
var inst_11399 = cljs.core.count(inst_11398__$1);
var inst_11400 = cljs.core.reset_BANG_(dctr,inst_11399);
var inst_11405 = cljs.core.seq(inst_11398__$1);
var inst_11406 = inst_11405;
var inst_11407 = null;
var inst_11408 = (0);
var inst_11409 = (0);
var state_11465__$1 = (function (){var statearr_11516 = state_11465;
(statearr_11516[(28)] = inst_11400);

(statearr_11516[(27)] = inst_11398__$1);

(statearr_11516[(19)] = inst_11406);

(statearr_11516[(9)] = inst_11407);

(statearr_11516[(20)] = inst_11408);

(statearr_11516[(12)] = inst_11409);

return statearr_11516;
})();
var statearr_11517_12874 = state_11465__$1;
(statearr_11517_12874[(2)] = null);

(statearr_11517_12874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (28))){
var inst_11406 = (state_11465[(19)]);
var inst_11424 = (state_11465[(23)]);
var inst_11424__$1 = cljs.core.seq(inst_11406);
var state_11465__$1 = (function (){var statearr_11526 = state_11465;
(statearr_11526[(23)] = inst_11424__$1);

return statearr_11526;
})();
if(inst_11424__$1){
var statearr_11527_12875 = state_11465__$1;
(statearr_11527_12875[(1)] = (33));

} else {
var statearr_11528_12876 = state_11465__$1;
(statearr_11528_12876[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (25))){
var inst_11408 = (state_11465[(20)]);
var inst_11409 = (state_11465[(12)]);
var inst_11411 = (inst_11409 < inst_11408);
var inst_11412 = inst_11411;
var state_11465__$1 = state_11465;
if(cljs.core.truth_(inst_11412)){
var statearr_11529_12877 = state_11465__$1;
(statearr_11529_12877[(1)] = (27));

} else {
var statearr_11530_12878 = state_11465__$1;
(statearr_11530_12878[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (34))){
var state_11465__$1 = state_11465;
var statearr_11531_12879 = state_11465__$1;
(statearr_11531_12879[(2)] = null);

(statearr_11531_12879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (17))){
var state_11465__$1 = state_11465;
var statearr_11532_12880 = state_11465__$1;
(statearr_11532_12880[(2)] = null);

(statearr_11532_12880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (3))){
var inst_11462 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11465__$1,inst_11462);
} else {
if((state_val_11467 === (12))){
var inst_11393 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11533_12881 = state_11465__$1;
(statearr_11533_12881[(2)] = inst_11393);

(statearr_11533_12881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (2))){
var state_11465__$1 = state_11465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11465__$1,(4),ch);
} else {
if((state_val_11467 === (23))){
var state_11465__$1 = state_11465;
var statearr_11534_12882 = state_11465__$1;
(statearr_11534_12882[(2)] = null);

(statearr_11534_12882[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (35))){
var inst_11446 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11535_12883 = state_11465__$1;
(statearr_11535_12883[(2)] = inst_11446);

(statearr_11535_12883[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (19))){
var inst_11365 = (state_11465[(7)]);
var inst_11369 = cljs.core.chunk_first(inst_11365);
var inst_11370 = cljs.core.chunk_rest(inst_11365);
var inst_11371 = cljs.core.count(inst_11369);
var inst_11343 = inst_11370;
var inst_11344 = inst_11369;
var inst_11345 = inst_11371;
var inst_11346 = (0);
var state_11465__$1 = (function (){var statearr_11536 = state_11465;
(statearr_11536[(13)] = inst_11345);

(statearr_11536[(14)] = inst_11343);

(statearr_11536[(15)] = inst_11344);

(statearr_11536[(16)] = inst_11346);

return statearr_11536;
})();
var statearr_11539_12884 = state_11465__$1;
(statearr_11539_12884[(2)] = null);

(statearr_11539_12884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (11))){
var inst_11343 = (state_11465[(14)]);
var inst_11365 = (state_11465[(7)]);
var inst_11365__$1 = cljs.core.seq(inst_11343);
var state_11465__$1 = (function (){var statearr_11540 = state_11465;
(statearr_11540[(7)] = inst_11365__$1);

return statearr_11540;
})();
if(inst_11365__$1){
var statearr_11541_12885 = state_11465__$1;
(statearr_11541_12885[(1)] = (16));

} else {
var statearr_11542_12886 = state_11465__$1;
(statearr_11542_12886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (9))){
var inst_11395 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11543_12887 = state_11465__$1;
(statearr_11543_12887[(2)] = inst_11395);

(statearr_11543_12887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (5))){
var inst_11341 = cljs.core.deref(cs);
var inst_11342 = cljs.core.seq(inst_11341);
var inst_11343 = inst_11342;
var inst_11344 = null;
var inst_11345 = (0);
var inst_11346 = (0);
var state_11465__$1 = (function (){var statearr_11544 = state_11465;
(statearr_11544[(13)] = inst_11345);

(statearr_11544[(14)] = inst_11343);

(statearr_11544[(15)] = inst_11344);

(statearr_11544[(16)] = inst_11346);

return statearr_11544;
})();
var statearr_11545_12896 = state_11465__$1;
(statearr_11545_12896[(2)] = null);

(statearr_11545_12896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (14))){
var state_11465__$1 = state_11465;
var statearr_11546_12897 = state_11465__$1;
(statearr_11546_12897[(2)] = null);

(statearr_11546_12897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (45))){
var inst_11454 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11547_12898 = state_11465__$1;
(statearr_11547_12898[(2)] = inst_11454);

(statearr_11547_12898[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (26))){
var inst_11398 = (state_11465[(27)]);
var inst_11450 = (state_11465[(2)]);
var inst_11451 = cljs.core.seq(inst_11398);
var state_11465__$1 = (function (){var statearr_11548 = state_11465;
(statearr_11548[(29)] = inst_11450);

return statearr_11548;
})();
if(inst_11451){
var statearr_11549_12899 = state_11465__$1;
(statearr_11549_12899[(1)] = (42));

} else {
var statearr_11550_12900 = state_11465__$1;
(statearr_11550_12900[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (16))){
var inst_11365 = (state_11465[(7)]);
var inst_11367 = cljs.core.chunked_seq_QMARK_(inst_11365);
var state_11465__$1 = state_11465;
if(inst_11367){
var statearr_11551_12901 = state_11465__$1;
(statearr_11551_12901[(1)] = (19));

} else {
var statearr_11552_12902 = state_11465__$1;
(statearr_11552_12902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (38))){
var inst_11443 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11553_12903 = state_11465__$1;
(statearr_11553_12903[(2)] = inst_11443);

(statearr_11553_12903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (30))){
var state_11465__$1 = state_11465;
var statearr_11554_12904 = state_11465__$1;
(statearr_11554_12904[(2)] = null);

(statearr_11554_12904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (10))){
var inst_11344 = (state_11465[(15)]);
var inst_11346 = (state_11465[(16)]);
var inst_11354 = cljs.core._nth(inst_11344,inst_11346);
var inst_11355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11354,(0),null);
var inst_11356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11354,(1),null);
var state_11465__$1 = (function (){var statearr_11562 = state_11465;
(statearr_11562[(24)] = inst_11355);

return statearr_11562;
})();
if(cljs.core.truth_(inst_11356)){
var statearr_11563_12905 = state_11465__$1;
(statearr_11563_12905[(1)] = (13));

} else {
var statearr_11564_12906 = state_11465__$1;
(statearr_11564_12906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (18))){
var inst_11391 = (state_11465[(2)]);
var state_11465__$1 = state_11465;
var statearr_11565_12919 = state_11465__$1;
(statearr_11565_12919[(2)] = inst_11391);

(statearr_11565_12919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (42))){
var state_11465__$1 = state_11465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11465__$1,(45),dchan);
} else {
if((state_val_11467 === (37))){
var inst_11424 = (state_11465[(23)]);
var inst_11433 = (state_11465[(22)]);
var inst_11334 = (state_11465[(10)]);
var inst_11433__$1 = cljs.core.first(inst_11424);
var inst_11434 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11433__$1,inst_11334,done);
var state_11465__$1 = (function (){var statearr_11566 = state_11465;
(statearr_11566[(22)] = inst_11433__$1);

return statearr_11566;
})();
if(cljs.core.truth_(inst_11434)){
var statearr_11567_12920 = state_11465__$1;
(statearr_11567_12920[(1)] = (39));

} else {
var statearr_11568_12921 = state_11465__$1;
(statearr_11568_12921[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11467 === (8))){
var inst_11345 = (state_11465[(13)]);
var inst_11346 = (state_11465[(16)]);
var inst_11348 = (inst_11346 < inst_11345);
var inst_11349 = inst_11348;
var state_11465__$1 = state_11465;
if(cljs.core.truth_(inst_11349)){
var statearr_11569_12922 = state_11465__$1;
(statearr_11569_12922[(1)] = (10));

} else {
var statearr_11570_12923 = state_11465__$1;
(statearr_11570_12923[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10588__auto__ = null;
var cljs$core$async$mult_$_state_machine__10588__auto____0 = (function (){
var statearr_11576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11576[(0)] = cljs$core$async$mult_$_state_machine__10588__auto__);

(statearr_11576[(1)] = (1));

return statearr_11576;
});
var cljs$core$async$mult_$_state_machine__10588__auto____1 = (function (state_11465){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11465);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11577){var ex__10591__auto__ = e11577;
var statearr_11578_12924 = state_11465;
(statearr_11578_12924[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11465[(4)]))){
var statearr_11579_12925 = state_11465;
(statearr_11579_12925[(1)] = cljs.core.first((state_11465[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12927 = state_11465;
state_11465 = G__12927;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10588__auto__ = function(state_11465){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10588__auto____1.call(this,state_11465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10588__auto____0;
cljs$core$async$mult_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10588__auto____1;
return cljs$core$async$mult_$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11580 = f__10671__auto__();
(statearr_11580[(6)] = c__10670__auto___12847);

return statearr_11580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__11582 = arguments.length;
switch (G__11582) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12929 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12929(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12941 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12941(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12942 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12942(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12943 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12943(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12944 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12944(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12957 = arguments.length;
var i__4737__auto___12958 = (0);
while(true){
if((i__4737__auto___12958 < len__4736__auto___12957)){
args__4742__auto__.push((arguments[i__4737__auto___12958]));

var G__12959 = (i__4737__auto___12958 + (1));
i__4737__auto___12958 = G__12959;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11604){
var map__11605 = p__11604;
var map__11605__$1 = (((((!((map__11605 == null))))?(((((map__11605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11605):map__11605);
var opts = map__11605__$1;
var statearr_11608_12960 = state;
(statearr_11608_12960[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11614_12961 = state;
(statearr_11614_12961[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11618_12962 = state;
(statearr_11618_12962[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11600){
var G__11601 = cljs.core.first(seq11600);
var seq11600__$1 = cljs.core.next(seq11600);
var G__11602 = cljs.core.first(seq11600__$1);
var seq11600__$2 = cljs.core.next(seq11600__$1);
var G__11603 = cljs.core.first(seq11600__$2);
var seq11600__$3 = cljs.core.next(seq11600__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11601,G__11602,G__11603,seq11600__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11623 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11624){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11624 = meta11624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11625,meta11624__$1){
var self__ = this;
var _11625__$1 = this;
return (new cljs.core.async.t_cljs$core$async11623(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11624__$1));
}));

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11625){
var self__ = this;
var _11625__$1 = this;
return self__.meta11624;
}));

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11623.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11624","meta11624",444186782,null)], null);
}));

(cljs.core.async.t_cljs$core$async11623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11623");

(cljs.core.async.t_cljs$core$async11623.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11623.
 */
cljs.core.async.__GT_t_cljs$core$async11623 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11623(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11624){
return (new cljs.core.async.t_cljs$core$async11623(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11624));
});

}

return (new cljs.core.async.t_cljs$core$async11623(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10670__auto___12968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11737){
var state_val_11738 = (state_11737[(1)]);
if((state_val_11738 === (7))){
var inst_11652 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11739_12969 = state_11737__$1;
(statearr_11739_12969[(2)] = inst_11652);

(statearr_11739_12969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (20))){
var inst_11664 = (state_11737[(7)]);
var state_11737__$1 = state_11737;
var statearr_11741_12970 = state_11737__$1;
(statearr_11741_12970[(2)] = inst_11664);

(statearr_11741_12970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (27))){
var state_11737__$1 = state_11737;
var statearr_11742_12971 = state_11737__$1;
(statearr_11742_12971[(2)] = null);

(statearr_11742_12971[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (1))){
var inst_11639 = (state_11737[(8)]);
var inst_11639__$1 = calc_state();
var inst_11641 = (inst_11639__$1 == null);
var inst_11642 = cljs.core.not(inst_11641);
var state_11737__$1 = (function (){var statearr_11743 = state_11737;
(statearr_11743[(8)] = inst_11639__$1);

return statearr_11743;
})();
if(inst_11642){
var statearr_11744_12972 = state_11737__$1;
(statearr_11744_12972[(1)] = (2));

} else {
var statearr_11745_12973 = state_11737__$1;
(statearr_11745_12973[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (24))){
var inst_11688 = (state_11737[(9)]);
var inst_11711 = (state_11737[(10)]);
var inst_11697 = (state_11737[(11)]);
var inst_11711__$1 = (inst_11688.cljs$core$IFn$_invoke$arity$1 ? inst_11688.cljs$core$IFn$_invoke$arity$1(inst_11697) : inst_11688.call(null,inst_11697));
var state_11737__$1 = (function (){var statearr_11749 = state_11737;
(statearr_11749[(10)] = inst_11711__$1);

return statearr_11749;
})();
if(cljs.core.truth_(inst_11711__$1)){
var statearr_11750_12974 = state_11737__$1;
(statearr_11750_12974[(1)] = (29));

} else {
var statearr_11751_12975 = state_11737__$1;
(statearr_11751_12975[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (4))){
var inst_11655 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11655)){
var statearr_11752_12976 = state_11737__$1;
(statearr_11752_12976[(1)] = (8));

} else {
var statearr_11753_12977 = state_11737__$1;
(statearr_11753_12977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (15))){
var inst_11682 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11682)){
var statearr_11754_12978 = state_11737__$1;
(statearr_11754_12978[(1)] = (19));

} else {
var statearr_11755_12979 = state_11737__$1;
(statearr_11755_12979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (21))){
var inst_11687 = (state_11737[(12)]);
var inst_11687__$1 = (state_11737[(2)]);
var inst_11688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11687__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11687__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11687__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11737__$1 = (function (){var statearr_11756 = state_11737;
(statearr_11756[(13)] = inst_11689);

(statearr_11756[(9)] = inst_11688);

(statearr_11756[(12)] = inst_11687__$1);

return statearr_11756;
})();
return cljs.core.async.ioc_alts_BANG_(state_11737__$1,(22),inst_11690);
} else {
if((state_val_11738 === (31))){
var inst_11719 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11719)){
var statearr_11757_12991 = state_11737__$1;
(statearr_11757_12991[(1)] = (32));

} else {
var statearr_11758_12992 = state_11737__$1;
(statearr_11758_12992[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (32))){
var inst_11696 = (state_11737[(14)]);
var state_11737__$1 = state_11737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11737__$1,(35),out,inst_11696);
} else {
if((state_val_11738 === (33))){
var inst_11687 = (state_11737[(12)]);
var inst_11664 = inst_11687;
var state_11737__$1 = (function (){var statearr_11759 = state_11737;
(statearr_11759[(7)] = inst_11664);

return statearr_11759;
})();
var statearr_11760_12993 = state_11737__$1;
(statearr_11760_12993[(2)] = null);

(statearr_11760_12993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (13))){
var inst_11664 = (state_11737[(7)]);
var inst_11671 = inst_11664.cljs$lang$protocol_mask$partition0$;
var inst_11672 = (inst_11671 & (64));
var inst_11673 = inst_11664.cljs$core$ISeq$;
var inst_11674 = (cljs.core.PROTOCOL_SENTINEL === inst_11673);
var inst_11675 = ((inst_11672) || (inst_11674));
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11675)){
var statearr_11761_12994 = state_11737__$1;
(statearr_11761_12994[(1)] = (16));

} else {
var statearr_11762_12995 = state_11737__$1;
(statearr_11762_12995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (22))){
var inst_11696 = (state_11737[(14)]);
var inst_11697 = (state_11737[(11)]);
var inst_11695 = (state_11737[(2)]);
var inst_11696__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11695,(0),null);
var inst_11697__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11695,(1),null);
var inst_11698 = (inst_11696__$1 == null);
var inst_11699 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11697__$1,change);
var inst_11700 = ((inst_11698) || (inst_11699));
var state_11737__$1 = (function (){var statearr_11763 = state_11737;
(statearr_11763[(14)] = inst_11696__$1);

(statearr_11763[(11)] = inst_11697__$1);

return statearr_11763;
})();
if(cljs.core.truth_(inst_11700)){
var statearr_11764_12996 = state_11737__$1;
(statearr_11764_12996[(1)] = (23));

} else {
var statearr_11765_12997 = state_11737__$1;
(statearr_11765_12997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (36))){
var inst_11687 = (state_11737[(12)]);
var inst_11664 = inst_11687;
var state_11737__$1 = (function (){var statearr_11766 = state_11737;
(statearr_11766[(7)] = inst_11664);

return statearr_11766;
})();
var statearr_11768_12998 = state_11737__$1;
(statearr_11768_12998[(2)] = null);

(statearr_11768_12998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (29))){
var inst_11711 = (state_11737[(10)]);
var state_11737__$1 = state_11737;
var statearr_11769_12999 = state_11737__$1;
(statearr_11769_12999[(2)] = inst_11711);

(statearr_11769_12999[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (6))){
var state_11737__$1 = state_11737;
var statearr_11771_13006 = state_11737__$1;
(statearr_11771_13006[(2)] = false);

(statearr_11771_13006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (28))){
var inst_11707 = (state_11737[(2)]);
var inst_11708 = calc_state();
var inst_11664 = inst_11708;
var state_11737__$1 = (function (){var statearr_11772 = state_11737;
(statearr_11772[(7)] = inst_11664);

(statearr_11772[(15)] = inst_11707);

return statearr_11772;
})();
var statearr_11773_13007 = state_11737__$1;
(statearr_11773_13007[(2)] = null);

(statearr_11773_13007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (25))){
var inst_11733 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11778_13011 = state_11737__$1;
(statearr_11778_13011[(2)] = inst_11733);

(statearr_11778_13011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (34))){
var inst_11731 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11779_13012 = state_11737__$1;
(statearr_11779_13012[(2)] = inst_11731);

(statearr_11779_13012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (17))){
var state_11737__$1 = state_11737;
var statearr_11780_13014 = state_11737__$1;
(statearr_11780_13014[(2)] = false);

(statearr_11780_13014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (3))){
var state_11737__$1 = state_11737;
var statearr_11781_13017 = state_11737__$1;
(statearr_11781_13017[(2)] = false);

(statearr_11781_13017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (12))){
var inst_11735 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11737__$1,inst_11735);
} else {
if((state_val_11738 === (2))){
var inst_11639 = (state_11737[(8)]);
var inst_11644 = inst_11639.cljs$lang$protocol_mask$partition0$;
var inst_11645 = (inst_11644 & (64));
var inst_11646 = inst_11639.cljs$core$ISeq$;
var inst_11647 = (cljs.core.PROTOCOL_SENTINEL === inst_11646);
var inst_11648 = ((inst_11645) || (inst_11647));
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11648)){
var statearr_11782_13019 = state_11737__$1;
(statearr_11782_13019[(1)] = (5));

} else {
var statearr_11783_13020 = state_11737__$1;
(statearr_11783_13020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (23))){
var inst_11696 = (state_11737[(14)]);
var inst_11702 = (inst_11696 == null);
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11702)){
var statearr_11784_13022 = state_11737__$1;
(statearr_11784_13022[(1)] = (26));

} else {
var statearr_11785_13023 = state_11737__$1;
(statearr_11785_13023[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (35))){
var inst_11722 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11722)){
var statearr_11786_13026 = state_11737__$1;
(statearr_11786_13026[(1)] = (36));

} else {
var statearr_11787_13027 = state_11737__$1;
(statearr_11787_13027[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (19))){
var inst_11664 = (state_11737[(7)]);
var inst_11684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11664);
var state_11737__$1 = state_11737;
var statearr_11792_13029 = state_11737__$1;
(statearr_11792_13029[(2)] = inst_11684);

(statearr_11792_13029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (11))){
var inst_11664 = (state_11737[(7)]);
var inst_11668 = (inst_11664 == null);
var inst_11669 = cljs.core.not(inst_11668);
var state_11737__$1 = state_11737;
if(inst_11669){
var statearr_11793_13032 = state_11737__$1;
(statearr_11793_13032[(1)] = (13));

} else {
var statearr_11794_13033 = state_11737__$1;
(statearr_11794_13033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (9))){
var inst_11639 = (state_11737[(8)]);
var state_11737__$1 = state_11737;
var statearr_11795_13034 = state_11737__$1;
(statearr_11795_13034[(2)] = inst_11639);

(statearr_11795_13034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (5))){
var state_11737__$1 = state_11737;
var statearr_11796_13035 = state_11737__$1;
(statearr_11796_13035[(2)] = true);

(statearr_11796_13035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (14))){
var state_11737__$1 = state_11737;
var statearr_11803_13037 = state_11737__$1;
(statearr_11803_13037[(2)] = false);

(statearr_11803_13037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (26))){
var inst_11697 = (state_11737[(11)]);
var inst_11704 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11697);
var state_11737__$1 = state_11737;
var statearr_11806_13039 = state_11737__$1;
(statearr_11806_13039[(2)] = inst_11704);

(statearr_11806_13039[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (16))){
var state_11737__$1 = state_11737;
var statearr_11808_13040 = state_11737__$1;
(statearr_11808_13040[(2)] = true);

(statearr_11808_13040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (38))){
var inst_11727 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11809_13041 = state_11737__$1;
(statearr_11809_13041[(2)] = inst_11727);

(statearr_11809_13041[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (30))){
var inst_11689 = (state_11737[(13)]);
var inst_11688 = (state_11737[(9)]);
var inst_11697 = (state_11737[(11)]);
var inst_11714 = cljs.core.empty_QMARK_(inst_11688);
var inst_11715 = (inst_11689.cljs$core$IFn$_invoke$arity$1 ? inst_11689.cljs$core$IFn$_invoke$arity$1(inst_11697) : inst_11689.call(null,inst_11697));
var inst_11716 = cljs.core.not(inst_11715);
var inst_11717 = ((inst_11714) && (inst_11716));
var state_11737__$1 = state_11737;
var statearr_11810_13042 = state_11737__$1;
(statearr_11810_13042[(2)] = inst_11717);

(statearr_11810_13042[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (10))){
var inst_11639 = (state_11737[(8)]);
var inst_11660 = (state_11737[(2)]);
var inst_11661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11660,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11660,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11660,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11664 = inst_11639;
var state_11737__$1 = (function (){var statearr_11812 = state_11737;
(statearr_11812[(16)] = inst_11662);

(statearr_11812[(7)] = inst_11664);

(statearr_11812[(17)] = inst_11663);

(statearr_11812[(18)] = inst_11661);

return statearr_11812;
})();
var statearr_11813_13043 = state_11737__$1;
(statearr_11813_13043[(2)] = null);

(statearr_11813_13043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (18))){
var inst_11679 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11815_13044 = state_11737__$1;
(statearr_11815_13044[(2)] = inst_11679);

(statearr_11815_13044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (37))){
var state_11737__$1 = state_11737;
var statearr_11816_13045 = state_11737__$1;
(statearr_11816_13045[(2)] = null);

(statearr_11816_13045[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (8))){
var inst_11639 = (state_11737[(8)]);
var inst_11657 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11639);
var state_11737__$1 = state_11737;
var statearr_11817_13047 = state_11737__$1;
(statearr_11817_13047[(2)] = inst_11657);

(statearr_11817_13047[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10588__auto__ = null;
var cljs$core$async$mix_$_state_machine__10588__auto____0 = (function (){
var statearr_11819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11819[(0)] = cljs$core$async$mix_$_state_machine__10588__auto__);

(statearr_11819[(1)] = (1));

return statearr_11819;
});
var cljs$core$async$mix_$_state_machine__10588__auto____1 = (function (state_11737){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11737);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11820){var ex__10591__auto__ = e11820;
var statearr_11821_13048 = state_11737;
(statearr_11821_13048[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11737[(4)]))){
var statearr_11822_13049 = state_11737;
(statearr_11822_13049[(1)] = cljs.core.first((state_11737[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13050 = state_11737;
state_11737 = G__13050;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10588__auto__ = function(state_11737){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10588__auto____1.call(this,state_11737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10588__auto____0;
cljs$core$async$mix_$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10588__auto____1;
return cljs$core$async$mix_$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11823 = f__10671__auto__();
(statearr_11823[(6)] = c__10670__auto___12968);

return statearr_11823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_13052 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_13052(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_13053 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_13053(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_13055 = (function() {
var G__13056 = null;
var G__13056__1 = (function (p){
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
var G__13056__2 = (function (p,v){
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
G__13056 = function(p,v){
switch(arguments.length){
case 1:
return G__13056__1.call(this,p);
case 2:
return G__13056__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13056.cljs$core$IFn$_invoke$arity$1 = G__13056__1;
G__13056.cljs$core$IFn$_invoke$arity$2 = G__13056__2;
return G__13056;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11839 = arguments.length;
switch (G__11839) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13055(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_13055(p,v);
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
var G__11842 = arguments.length;
switch (G__11842) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11840_SHARP_){
if(cljs.core.truth_((p1__11840_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11840_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11840_SHARP_.call(null,topic)))){
return p1__11840_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11840_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11844 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11845){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11846,meta11845__$1){
var self__ = this;
var _11846__$1 = this;
return (new cljs.core.async.t_cljs$core$async11844(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11845__$1));
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11846){
var self__ = this;
var _11846__$1 = this;
return self__.meta11845;
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11845","meta11845",-1073878825,null)], null);
}));

(cljs.core.async.t_cljs$core$async11844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11844");

(cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11844.
 */
cljs.core.async.__GT_t_cljs$core$async11844 = (function cljs$core$async$__GT_t_cljs$core$async11844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11845){
return (new cljs.core.async.t_cljs$core$async11844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11845));
});

}

return (new cljs.core.async.t_cljs$core$async11844(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10670__auto___13066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_11930){
var state_val_11931 = (state_11930[(1)]);
if((state_val_11931 === (7))){
var inst_11926 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11932_13068 = state_11930__$1;
(statearr_11932_13068[(2)] = inst_11926);

(statearr_11932_13068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (20))){
var state_11930__$1 = state_11930;
var statearr_11933_13069 = state_11930__$1;
(statearr_11933_13069[(2)] = null);

(statearr_11933_13069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (1))){
var state_11930__$1 = state_11930;
var statearr_11934_13070 = state_11930__$1;
(statearr_11934_13070[(2)] = null);

(statearr_11934_13070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (24))){
var inst_11909 = (state_11930[(7)]);
var inst_11918 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11909);
var state_11930__$1 = state_11930;
var statearr_11935_13071 = state_11930__$1;
(statearr_11935_13071[(2)] = inst_11918);

(statearr_11935_13071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (4))){
var inst_11853 = (state_11930[(8)]);
var inst_11853__$1 = (state_11930[(2)]);
var inst_11860 = (inst_11853__$1 == null);
var state_11930__$1 = (function (){var statearr_11936 = state_11930;
(statearr_11936[(8)] = inst_11853__$1);

return statearr_11936;
})();
if(cljs.core.truth_(inst_11860)){
var statearr_11937_13072 = state_11930__$1;
(statearr_11937_13072[(1)] = (5));

} else {
var statearr_11938_13073 = state_11930__$1;
(statearr_11938_13073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (15))){
var inst_11901 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11939_13074 = state_11930__$1;
(statearr_11939_13074[(2)] = inst_11901);

(statearr_11939_13074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (21))){
var inst_11923 = (state_11930[(2)]);
var state_11930__$1 = (function (){var statearr_11940 = state_11930;
(statearr_11940[(9)] = inst_11923);

return statearr_11940;
})();
var statearr_11941_13076 = state_11930__$1;
(statearr_11941_13076[(2)] = null);

(statearr_11941_13076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (13))){
var inst_11883 = (state_11930[(10)]);
var inst_11885 = cljs.core.chunked_seq_QMARK_(inst_11883);
var state_11930__$1 = state_11930;
if(inst_11885){
var statearr_11942_13077 = state_11930__$1;
(statearr_11942_13077[(1)] = (16));

} else {
var statearr_11943_13078 = state_11930__$1;
(statearr_11943_13078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (22))){
var inst_11915 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
if(cljs.core.truth_(inst_11915)){
var statearr_11944_13079 = state_11930__$1;
(statearr_11944_13079[(1)] = (23));

} else {
var statearr_11945_13080 = state_11930__$1;
(statearr_11945_13080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (6))){
var inst_11909 = (state_11930[(7)]);
var inst_11853 = (state_11930[(8)]);
var inst_11911 = (state_11930[(11)]);
var inst_11909__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11853) : topic_fn.call(null,inst_11853));
var inst_11910 = cljs.core.deref(mults);
var inst_11911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11910,inst_11909__$1);
var state_11930__$1 = (function (){var statearr_11946 = state_11930;
(statearr_11946[(7)] = inst_11909__$1);

(statearr_11946[(11)] = inst_11911__$1);

return statearr_11946;
})();
if(cljs.core.truth_(inst_11911__$1)){
var statearr_11947_13081 = state_11930__$1;
(statearr_11947_13081[(1)] = (19));

} else {
var statearr_11948_13082 = state_11930__$1;
(statearr_11948_13082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (25))){
var inst_11920 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11949_13083 = state_11930__$1;
(statearr_11949_13083[(2)] = inst_11920);

(statearr_11949_13083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (17))){
var inst_11883 = (state_11930[(10)]);
var inst_11892 = cljs.core.first(inst_11883);
var inst_11893 = cljs.core.async.muxch_STAR_(inst_11892);
var inst_11894 = cljs.core.async.close_BANG_(inst_11893);
var inst_11895 = cljs.core.next(inst_11883);
var inst_11869 = inst_11895;
var inst_11870 = null;
var inst_11871 = (0);
var inst_11872 = (0);
var state_11930__$1 = (function (){var statearr_11950 = state_11930;
(statearr_11950[(12)] = inst_11870);

(statearr_11950[(13)] = inst_11872);

(statearr_11950[(14)] = inst_11869);

(statearr_11950[(15)] = inst_11871);

(statearr_11950[(16)] = inst_11894);

return statearr_11950;
})();
var statearr_11951_13084 = state_11930__$1;
(statearr_11951_13084[(2)] = null);

(statearr_11951_13084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (3))){
var inst_11928 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11930__$1,inst_11928);
} else {
if((state_val_11931 === (12))){
var inst_11905 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11952_13085 = state_11930__$1;
(statearr_11952_13085[(2)] = inst_11905);

(statearr_11952_13085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (2))){
var state_11930__$1 = state_11930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11930__$1,(4),ch);
} else {
if((state_val_11931 === (23))){
var state_11930__$1 = state_11930;
var statearr_11953_13086 = state_11930__$1;
(statearr_11953_13086[(2)] = null);

(statearr_11953_13086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (19))){
var inst_11853 = (state_11930[(8)]);
var inst_11911 = (state_11930[(11)]);
var inst_11913 = cljs.core.async.muxch_STAR_(inst_11911);
var state_11930__$1 = state_11930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11930__$1,(22),inst_11913,inst_11853);
} else {
if((state_val_11931 === (11))){
var inst_11869 = (state_11930[(14)]);
var inst_11883 = (state_11930[(10)]);
var inst_11883__$1 = cljs.core.seq(inst_11869);
var state_11930__$1 = (function (){var statearr_11954 = state_11930;
(statearr_11954[(10)] = inst_11883__$1);

return statearr_11954;
})();
if(inst_11883__$1){
var statearr_11956_13087 = state_11930__$1;
(statearr_11956_13087[(1)] = (13));

} else {
var statearr_11957_13088 = state_11930__$1;
(statearr_11957_13088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (9))){
var inst_11907 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11958_13089 = state_11930__$1;
(statearr_11958_13089[(2)] = inst_11907);

(statearr_11958_13089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (5))){
var inst_11866 = cljs.core.deref(mults);
var inst_11867 = cljs.core.vals(inst_11866);
var inst_11868 = cljs.core.seq(inst_11867);
var inst_11869 = inst_11868;
var inst_11870 = null;
var inst_11871 = (0);
var inst_11872 = (0);
var state_11930__$1 = (function (){var statearr_11959 = state_11930;
(statearr_11959[(12)] = inst_11870);

(statearr_11959[(13)] = inst_11872);

(statearr_11959[(14)] = inst_11869);

(statearr_11959[(15)] = inst_11871);

return statearr_11959;
})();
var statearr_11960_13090 = state_11930__$1;
(statearr_11960_13090[(2)] = null);

(statearr_11960_13090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (14))){
var state_11930__$1 = state_11930;
var statearr_11964_13091 = state_11930__$1;
(statearr_11964_13091[(2)] = null);

(statearr_11964_13091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (16))){
var inst_11883 = (state_11930[(10)]);
var inst_11887 = cljs.core.chunk_first(inst_11883);
var inst_11888 = cljs.core.chunk_rest(inst_11883);
var inst_11889 = cljs.core.count(inst_11887);
var inst_11869 = inst_11888;
var inst_11870 = inst_11887;
var inst_11871 = inst_11889;
var inst_11872 = (0);
var state_11930__$1 = (function (){var statearr_11965 = state_11930;
(statearr_11965[(12)] = inst_11870);

(statearr_11965[(13)] = inst_11872);

(statearr_11965[(14)] = inst_11869);

(statearr_11965[(15)] = inst_11871);

return statearr_11965;
})();
var statearr_11966_13092 = state_11930__$1;
(statearr_11966_13092[(2)] = null);

(statearr_11966_13092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (10))){
var inst_11870 = (state_11930[(12)]);
var inst_11872 = (state_11930[(13)]);
var inst_11869 = (state_11930[(14)]);
var inst_11871 = (state_11930[(15)]);
var inst_11877 = cljs.core._nth(inst_11870,inst_11872);
var inst_11878 = cljs.core.async.muxch_STAR_(inst_11877);
var inst_11879 = cljs.core.async.close_BANG_(inst_11878);
var inst_11880 = (inst_11872 + (1));
var tmp11961 = inst_11870;
var tmp11962 = inst_11869;
var tmp11963 = inst_11871;
var inst_11869__$1 = tmp11962;
var inst_11870__$1 = tmp11961;
var inst_11871__$1 = tmp11963;
var inst_11872__$1 = inst_11880;
var state_11930__$1 = (function (){var statearr_11967 = state_11930;
(statearr_11967[(12)] = inst_11870__$1);

(statearr_11967[(13)] = inst_11872__$1);

(statearr_11967[(17)] = inst_11879);

(statearr_11967[(14)] = inst_11869__$1);

(statearr_11967[(15)] = inst_11871__$1);

return statearr_11967;
})();
var statearr_11968_13097 = state_11930__$1;
(statearr_11968_13097[(2)] = null);

(statearr_11968_13097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (18))){
var inst_11898 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11969_13098 = state_11930__$1;
(statearr_11969_13098[(2)] = inst_11898);

(statearr_11969_13098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (8))){
var inst_11872 = (state_11930[(13)]);
var inst_11871 = (state_11930[(15)]);
var inst_11874 = (inst_11872 < inst_11871);
var inst_11875 = inst_11874;
var state_11930__$1 = state_11930;
if(cljs.core.truth_(inst_11875)){
var statearr_11970_13100 = state_11930__$1;
(statearr_11970_13100[(1)] = (10));

} else {
var statearr_11971_13101 = state_11930__$1;
(statearr_11971_13101[(1)] = (11));

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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_11972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11972[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_11972[(1)] = (1));

return statearr_11972;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_11930){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_11930);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e11973){var ex__10591__auto__ = e11973;
var statearr_11974_13103 = state_11930;
(statearr_11974_13103[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_11930[(4)]))){
var statearr_11975_13104 = state_11930;
(statearr_11975_13104[(1)] = cljs.core.first((state_11930[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13106 = state_11930;
state_11930 = G__13106;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_11930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_11930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_11976 = f__10671__auto__();
(statearr_11976[(6)] = c__10670__auto___13066);

return statearr_11976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__11978 = arguments.length;
switch (G__11978) {
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
var G__11980 = arguments.length;
switch (G__11980) {
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
var G__11982 = arguments.length;
switch (G__11982) {
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
var c__10670__auto___13114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12032){
var state_val_12033 = (state_12032[(1)]);
if((state_val_12033 === (7))){
var state_12032__$1 = state_12032;
var statearr_12034_13115 = state_12032__$1;
(statearr_12034_13115[(2)] = null);

(statearr_12034_13115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (1))){
var state_12032__$1 = state_12032;
var statearr_12035_13116 = state_12032__$1;
(statearr_12035_13116[(2)] = null);

(statearr_12035_13116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (4))){
var inst_11989 = (state_12032[(7)]);
var inst_11990 = (state_12032[(8)]);
var inst_11993 = (inst_11990 < inst_11989);
var state_12032__$1 = state_12032;
if(cljs.core.truth_(inst_11993)){
var statearr_12039_13117 = state_12032__$1;
(statearr_12039_13117[(1)] = (6));

} else {
var statearr_12040_13118 = state_12032__$1;
(statearr_12040_13118[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (15))){
var inst_12018 = (state_12032[(9)]);
var inst_12023 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12018);
var state_12032__$1 = state_12032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12032__$1,(17),out,inst_12023);
} else {
if((state_val_12033 === (13))){
var inst_12018 = (state_12032[(9)]);
var inst_12018__$1 = (state_12032[(2)]);
var inst_12019 = cljs.core.some(cljs.core.nil_QMARK_,inst_12018__$1);
var state_12032__$1 = (function (){var statearr_12041 = state_12032;
(statearr_12041[(9)] = inst_12018__$1);

return statearr_12041;
})();
if(cljs.core.truth_(inst_12019)){
var statearr_12042_13119 = state_12032__$1;
(statearr_12042_13119[(1)] = (14));

} else {
var statearr_12043_13120 = state_12032__$1;
(statearr_12043_13120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (6))){
var state_12032__$1 = state_12032;
var statearr_12044_13121 = state_12032__$1;
(statearr_12044_13121[(2)] = null);

(statearr_12044_13121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (17))){
var inst_12025 = (state_12032[(2)]);
var state_12032__$1 = (function (){var statearr_12046 = state_12032;
(statearr_12046[(10)] = inst_12025);

return statearr_12046;
})();
var statearr_12047_13122 = state_12032__$1;
(statearr_12047_13122[(2)] = null);

(statearr_12047_13122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (3))){
var inst_12030 = (state_12032[(2)]);
var state_12032__$1 = state_12032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12032__$1,inst_12030);
} else {
if((state_val_12033 === (12))){
var _ = (function (){var statearr_12048 = state_12032;
(statearr_12048[(4)] = cljs.core.rest((state_12032[(4)])));

return statearr_12048;
})();
var state_12032__$1 = state_12032;
var ex12045 = (state_12032__$1[(2)]);
var statearr_12049_13123 = state_12032__$1;
(statearr_12049_13123[(5)] = ex12045);


if((ex12045 instanceof Object)){
var statearr_12050_13124 = state_12032__$1;
(statearr_12050_13124[(1)] = (11));

(statearr_12050_13124[(5)] = null);

} else {
throw ex12045;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (2))){
var inst_11988 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11989 = cnt;
var inst_11990 = (0);
var state_12032__$1 = (function (){var statearr_12051 = state_12032;
(statearr_12051[(7)] = inst_11989);

(statearr_12051[(8)] = inst_11990);

(statearr_12051[(11)] = inst_11988);

return statearr_12051;
})();
var statearr_12052_13126 = state_12032__$1;
(statearr_12052_13126[(2)] = null);

(statearr_12052_13126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (11))){
var inst_11997 = (state_12032[(2)]);
var inst_11998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12032__$1 = (function (){var statearr_12053 = state_12032;
(statearr_12053[(12)] = inst_11997);

return statearr_12053;
})();
var statearr_12054_13128 = state_12032__$1;
(statearr_12054_13128[(2)] = inst_11998);

(statearr_12054_13128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (9))){
var inst_11990 = (state_12032[(8)]);
var _ = (function (){var statearr_12055 = state_12032;
(statearr_12055[(4)] = cljs.core.cons((12),(state_12032[(4)])));

return statearr_12055;
})();
var inst_12004 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11990) : chs__$1.call(null,inst_11990));
var inst_12005 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11990) : done.call(null,inst_11990));
var inst_12006 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12004,inst_12005);
var ___$1 = (function (){var statearr_12056 = state_12032;
(statearr_12056[(4)] = cljs.core.rest((state_12032[(4)])));

return statearr_12056;
})();
var state_12032__$1 = state_12032;
var statearr_12057_13133 = state_12032__$1;
(statearr_12057_13133[(2)] = inst_12006);

(statearr_12057_13133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (5))){
var inst_12016 = (state_12032[(2)]);
var state_12032__$1 = (function (){var statearr_12058 = state_12032;
(statearr_12058[(13)] = inst_12016);

return statearr_12058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12032__$1,(13),dchan);
} else {
if((state_val_12033 === (14))){
var inst_12021 = cljs.core.async.close_BANG_(out);
var state_12032__$1 = state_12032;
var statearr_12059_13134 = state_12032__$1;
(statearr_12059_13134[(2)] = inst_12021);

(statearr_12059_13134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (16))){
var inst_12028 = (state_12032[(2)]);
var state_12032__$1 = state_12032;
var statearr_12060_13135 = state_12032__$1;
(statearr_12060_13135[(2)] = inst_12028);

(statearr_12060_13135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (10))){
var inst_11990 = (state_12032[(8)]);
var inst_12009 = (state_12032[(2)]);
var inst_12010 = (inst_11990 + (1));
var inst_11990__$1 = inst_12010;
var state_12032__$1 = (function (){var statearr_12061 = state_12032;
(statearr_12061[(8)] = inst_11990__$1);

(statearr_12061[(14)] = inst_12009);

return statearr_12061;
})();
var statearr_12062_13136 = state_12032__$1;
(statearr_12062_13136[(2)] = null);

(statearr_12062_13136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12033 === (8))){
var inst_12014 = (state_12032[(2)]);
var state_12032__$1 = state_12032;
var statearr_12063_13137 = state_12032__$1;
(statearr_12063_13137[(2)] = inst_12014);

(statearr_12063_13137[(1)] = (5));


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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_12064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12064[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_12064[(1)] = (1));

return statearr_12064;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_12032){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12032);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12066){var ex__10591__auto__ = e12066;
var statearr_12067_13138 = state_12032;
(statearr_12067_13138[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12032[(4)]))){
var statearr_12068_13139 = state_12032;
(statearr_12068_13139[(1)] = cljs.core.first((state_12032[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13140 = state_12032;
state_12032 = G__13140;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_12032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_12032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12069 = f__10671__auto__();
(statearr_12069[(6)] = c__10670__auto___13114);

return statearr_12069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__12072 = arguments.length;
switch (G__12072) {
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
var c__10670__auto___13142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12106){
var state_val_12107 = (state_12106[(1)]);
if((state_val_12107 === (7))){
var inst_12086 = (state_12106[(7)]);
var inst_12085 = (state_12106[(8)]);
var inst_12085__$1 = (state_12106[(2)]);
var inst_12086__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12085__$1,(0),null);
var inst_12087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12085__$1,(1),null);
var inst_12088 = (inst_12086__$1 == null);
var state_12106__$1 = (function (){var statearr_12108 = state_12106;
(statearr_12108[(9)] = inst_12087);

(statearr_12108[(7)] = inst_12086__$1);

(statearr_12108[(8)] = inst_12085__$1);

return statearr_12108;
})();
if(cljs.core.truth_(inst_12088)){
var statearr_12109_13143 = state_12106__$1;
(statearr_12109_13143[(1)] = (8));

} else {
var statearr_12110_13144 = state_12106__$1;
(statearr_12110_13144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12107 === (1))){
var inst_12075 = cljs.core.vec(chs);
var inst_12076 = inst_12075;
var state_12106__$1 = (function (){var statearr_12111 = state_12106;
(statearr_12111[(10)] = inst_12076);

return statearr_12111;
})();
var statearr_12112_13145 = state_12106__$1;
(statearr_12112_13145[(2)] = null);

(statearr_12112_13145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12107 === (4))){
var inst_12076 = (state_12106[(10)]);
var state_12106__$1 = state_12106;
return cljs.core.async.ioc_alts_BANG_(state_12106__$1,(7),inst_12076);
} else {
if((state_val_12107 === (6))){
var inst_12102 = (state_12106[(2)]);
var state_12106__$1 = state_12106;
var statearr_12113_13147 = state_12106__$1;
(statearr_12113_13147[(2)] = inst_12102);

(statearr_12113_13147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12107 === (3))){
var inst_12104 = (state_12106[(2)]);
var state_12106__$1 = state_12106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12106__$1,inst_12104);
} else {
if((state_val_12107 === (2))){
var inst_12076 = (state_12106[(10)]);
var inst_12078 = cljs.core.count(inst_12076);
var inst_12079 = (inst_12078 > (0));
var state_12106__$1 = state_12106;
if(cljs.core.truth_(inst_12079)){
var statearr_12115_13150 = state_12106__$1;
(statearr_12115_13150[(1)] = (4));

} else {
var statearr_12116_13151 = state_12106__$1;
(statearr_12116_13151[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12107 === (11))){
var inst_12076 = (state_12106[(10)]);
var inst_12095 = (state_12106[(2)]);
var tmp12114 = inst_12076;
var inst_12076__$1 = tmp12114;
var state_12106__$1 = (function (){var statearr_12117 = state_12106;
(statearr_12117[(11)] = inst_12095);

(statearr_12117[(10)] = inst_12076__$1);

return statearr_12117;
})();
var statearr_12118_13154 = state_12106__$1;
(statearr_12118_13154[(2)] = null);

(statearr_12118_13154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12107 === (9))){
var inst_12086 = (state_12106[(7)]);
var state_12106__$1 = state_12106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12106__$1,(11),out,inst_12086);
} else {
if((state_val_12107 === (5))){
var inst_12100 = cljs.core.async.close_BANG_(out);
var state_12106__$1 = state_12106;
var statearr_12119_13156 = state_12106__$1;
(statearr_12119_13156[(2)] = inst_12100);

(statearr_12119_13156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12107 === (10))){
var inst_12098 = (state_12106[(2)]);
var state_12106__$1 = state_12106;
var statearr_12120_13157 = state_12106__$1;
(statearr_12120_13157[(2)] = inst_12098);

(statearr_12120_13157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12107 === (8))){
var inst_12087 = (state_12106[(9)]);
var inst_12086 = (state_12106[(7)]);
var inst_12076 = (state_12106[(10)]);
var inst_12085 = (state_12106[(8)]);
var inst_12090 = (function (){var cs = inst_12076;
var vec__12081 = inst_12085;
var v = inst_12086;
var c = inst_12087;
return (function (p1__12070_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12070_SHARP_);
});
})();
var inst_12091 = cljs.core.filterv(inst_12090,inst_12076);
var inst_12076__$1 = inst_12091;
var state_12106__$1 = (function (){var statearr_12121 = state_12106;
(statearr_12121[(10)] = inst_12076__$1);

return statearr_12121;
})();
var statearr_12122_13158 = state_12106__$1;
(statearr_12122_13158[(2)] = null);

(statearr_12122_13158[(1)] = (2));


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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_12123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12123[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_12123[(1)] = (1));

return statearr_12123;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_12106){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12106);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12124){var ex__10591__auto__ = e12124;
var statearr_12125_13159 = state_12106;
(statearr_12125_13159[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12106[(4)]))){
var statearr_12126_13160 = state_12106;
(statearr_12126_13160[(1)] = cljs.core.first((state_12106[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13161 = state_12106;
state_12106 = G__13161;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_12106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_12106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12127 = f__10671__auto__();
(statearr_12127[(6)] = c__10670__auto___13142);

return statearr_12127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
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
var G__12133 = arguments.length;
switch (G__12133) {
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
var c__10670__auto___13163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12157){
var state_val_12158 = (state_12157[(1)]);
if((state_val_12158 === (7))){
var inst_12139 = (state_12157[(7)]);
var inst_12139__$1 = (state_12157[(2)]);
var inst_12140 = (inst_12139__$1 == null);
var inst_12141 = cljs.core.not(inst_12140);
var state_12157__$1 = (function (){var statearr_12159 = state_12157;
(statearr_12159[(7)] = inst_12139__$1);

return statearr_12159;
})();
if(inst_12141){
var statearr_12160_13164 = state_12157__$1;
(statearr_12160_13164[(1)] = (8));

} else {
var statearr_12161_13165 = state_12157__$1;
(statearr_12161_13165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (1))){
var inst_12134 = (0);
var state_12157__$1 = (function (){var statearr_12162 = state_12157;
(statearr_12162[(8)] = inst_12134);

return statearr_12162;
})();
var statearr_12163_13166 = state_12157__$1;
(statearr_12163_13166[(2)] = null);

(statearr_12163_13166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (4))){
var state_12157__$1 = state_12157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12157__$1,(7),ch);
} else {
if((state_val_12158 === (6))){
var inst_12152 = (state_12157[(2)]);
var state_12157__$1 = state_12157;
var statearr_12164_13167 = state_12157__$1;
(statearr_12164_13167[(2)] = inst_12152);

(statearr_12164_13167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (3))){
var inst_12154 = (state_12157[(2)]);
var inst_12155 = cljs.core.async.close_BANG_(out);
var state_12157__$1 = (function (){var statearr_12165 = state_12157;
(statearr_12165[(9)] = inst_12154);

return statearr_12165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12157__$1,inst_12155);
} else {
if((state_val_12158 === (2))){
var inst_12134 = (state_12157[(8)]);
var inst_12136 = (inst_12134 < n);
var state_12157__$1 = state_12157;
if(cljs.core.truth_(inst_12136)){
var statearr_12166_13171 = state_12157__$1;
(statearr_12166_13171[(1)] = (4));

} else {
var statearr_12167_13172 = state_12157__$1;
(statearr_12167_13172[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (11))){
var inst_12134 = (state_12157[(8)]);
var inst_12144 = (state_12157[(2)]);
var inst_12145 = (inst_12134 + (1));
var inst_12134__$1 = inst_12145;
var state_12157__$1 = (function (){var statearr_12168 = state_12157;
(statearr_12168[(10)] = inst_12144);

(statearr_12168[(8)] = inst_12134__$1);

return statearr_12168;
})();
var statearr_12169_13175 = state_12157__$1;
(statearr_12169_13175[(2)] = null);

(statearr_12169_13175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (9))){
var state_12157__$1 = state_12157;
var statearr_12170_13176 = state_12157__$1;
(statearr_12170_13176[(2)] = null);

(statearr_12170_13176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (5))){
var state_12157__$1 = state_12157;
var statearr_12171_13177 = state_12157__$1;
(statearr_12171_13177[(2)] = null);

(statearr_12171_13177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (10))){
var inst_12149 = (state_12157[(2)]);
var state_12157__$1 = state_12157;
var statearr_12172_13179 = state_12157__$1;
(statearr_12172_13179[(2)] = inst_12149);

(statearr_12172_13179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12158 === (8))){
var inst_12139 = (state_12157[(7)]);
var state_12157__$1 = state_12157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12157__$1,(11),out,inst_12139);
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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_12173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12173[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_12173[(1)] = (1));

return statearr_12173;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_12157){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12157);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12185){var ex__10591__auto__ = e12185;
var statearr_12186_13184 = state_12157;
(statearr_12186_13184[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12157[(4)]))){
var statearr_12187_13185 = state_12157;
(statearr_12187_13185[(1)] = cljs.core.first((state_12157[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13186 = state_12157;
state_12157 = G__13186;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_12157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_12157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12188 = f__10671__auto__();
(statearr_12188[(6)] = c__10670__auto___13163);

return statearr_12188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12190 = (function (f,ch,meta12191){
this.f = f;
this.ch = ch;
this.meta12191 = meta12191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12192,meta12191__$1){
var self__ = this;
var _12192__$1 = this;
return (new cljs.core.async.t_cljs$core$async12190(self__.f,self__.ch,meta12191__$1));
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12192){
var self__ = this;
var _12192__$1 = this;
return self__.meta12191;
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12205 = (function (f,ch,meta12191,_,fn1,meta12206){
this.f = f;
this.ch = ch;
this.meta12191 = meta12191;
this._ = _;
this.fn1 = fn1;
this.meta12206 = meta12206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12207,meta12206__$1){
var self__ = this;
var _12207__$1 = this;
return (new cljs.core.async.t_cljs$core$async12205(self__.f,self__.ch,self__.meta12191,self__._,self__.fn1,meta12206__$1));
}));

(cljs.core.async.t_cljs$core$async12205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12207){
var self__ = this;
var _12207__$1 = this;
return self__.meta12206;
}));

(cljs.core.async.t_cljs$core$async12205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__12189_SHARP_){
var G__12208 = (((p1__12189_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12189_SHARP_) : self__.f.call(null,p1__12189_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12208) : f1.call(null,G__12208));
});
}));

(cljs.core.async.t_cljs$core$async12205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12191","meta12191",-1209040385,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12190","cljs.core.async/t_cljs$core$async12190",-135596817,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12206","meta12206",-1227294953,null)], null);
}));

(cljs.core.async.t_cljs$core$async12205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12205");

(cljs.core.async.t_cljs$core$async12205.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12205.
 */
cljs.core.async.__GT_t_cljs$core$async12205 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12205(f__$1,ch__$1,meta12191__$1,___$2,fn1__$1,meta12206){
return (new cljs.core.async.t_cljs$core$async12205(f__$1,ch__$1,meta12191__$1,___$2,fn1__$1,meta12206));
});

}

return (new cljs.core.async.t_cljs$core$async12205(self__.f,self__.ch,self__.meta12191,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12209 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12209) : self__.f.call(null,G__12209));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12191","meta12191",-1209040385,null)], null);
}));

(cljs.core.async.t_cljs$core$async12190.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12190");

(cljs.core.async.t_cljs$core$async12190.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12190");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12190.
 */
cljs.core.async.__GT_t_cljs$core$async12190 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12190(f__$1,ch__$1,meta12191){
return (new cljs.core.async.t_cljs$core$async12190(f__$1,ch__$1,meta12191));
});

}

return (new cljs.core.async.t_cljs$core$async12190(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12224 = (function (f,ch,meta12225){
this.f = f;
this.ch = ch;
this.meta12225 = meta12225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12226,meta12225__$1){
var self__ = this;
var _12226__$1 = this;
return (new cljs.core.async.t_cljs$core$async12224(self__.f,self__.ch,meta12225__$1));
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12226){
var self__ = this;
var _12226__$1 = this;
return self__.meta12225;
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async12224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12225","meta12225",-300409316,null)], null);
}));

(cljs.core.async.t_cljs$core$async12224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12224");

(cljs.core.async.t_cljs$core$async12224.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12224.
 */
cljs.core.async.__GT_t_cljs$core$async12224 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12224(f__$1,ch__$1,meta12225){
return (new cljs.core.async.t_cljs$core$async12224(f__$1,ch__$1,meta12225));
});

}

return (new cljs.core.async.t_cljs$core$async12224(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12232 = (function (p,ch,meta12233){
this.p = p;
this.ch = ch;
this.meta12233 = meta12233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12234,meta12233__$1){
var self__ = this;
var _12234__$1 = this;
return (new cljs.core.async.t_cljs$core$async12232(self__.p,self__.ch,meta12233__$1));
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12234){
var self__ = this;
var _12234__$1 = this;
return self__.meta12233;
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12233","meta12233",1419753328,null)], null);
}));

(cljs.core.async.t_cljs$core$async12232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12232");

(cljs.core.async.t_cljs$core$async12232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12232.
 */
cljs.core.async.__GT_t_cljs$core$async12232 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12232(p__$1,ch__$1,meta12233){
return (new cljs.core.async.t_cljs$core$async12232(p__$1,ch__$1,meta12233));
});

}

return (new cljs.core.async.t_cljs$core$async12232(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12236 = arguments.length;
switch (G__12236) {
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
var c__10670__auto___13193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12260){
var state_val_12261 = (state_12260[(1)]);
if((state_val_12261 === (7))){
var inst_12256 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
var statearr_12262_13194 = state_12260__$1;
(statearr_12262_13194[(2)] = inst_12256);

(statearr_12262_13194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (1))){
var state_12260__$1 = state_12260;
var statearr_12263_13195 = state_12260__$1;
(statearr_12263_13195[(2)] = null);

(statearr_12263_13195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (4))){
var inst_12239 = (state_12260[(7)]);
var inst_12239__$1 = (state_12260[(2)]);
var inst_12240 = (inst_12239__$1 == null);
var state_12260__$1 = (function (){var statearr_12264 = state_12260;
(statearr_12264[(7)] = inst_12239__$1);

return statearr_12264;
})();
if(cljs.core.truth_(inst_12240)){
var statearr_12265_13196 = state_12260__$1;
(statearr_12265_13196[(1)] = (5));

} else {
var statearr_12266_13197 = state_12260__$1;
(statearr_12266_13197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (6))){
var inst_12239 = (state_12260[(7)]);
var inst_12247 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12239) : p.call(null,inst_12239));
var state_12260__$1 = state_12260;
if(cljs.core.truth_(inst_12247)){
var statearr_12267_13198 = state_12260__$1;
(statearr_12267_13198[(1)] = (8));

} else {
var statearr_12268_13199 = state_12260__$1;
(statearr_12268_13199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (3))){
var inst_12258 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12260__$1,inst_12258);
} else {
if((state_val_12261 === (2))){
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12260__$1,(4),ch);
} else {
if((state_val_12261 === (11))){
var inst_12250 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
var statearr_12269_13200 = state_12260__$1;
(statearr_12269_13200[(2)] = inst_12250);

(statearr_12269_13200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (9))){
var state_12260__$1 = state_12260;
var statearr_12270_13201 = state_12260__$1;
(statearr_12270_13201[(2)] = null);

(statearr_12270_13201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (5))){
var inst_12242 = cljs.core.async.close_BANG_(out);
var state_12260__$1 = state_12260;
var statearr_12271_13205 = state_12260__$1;
(statearr_12271_13205[(2)] = inst_12242);

(statearr_12271_13205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (10))){
var inst_12253 = (state_12260[(2)]);
var state_12260__$1 = (function (){var statearr_12272 = state_12260;
(statearr_12272[(8)] = inst_12253);

return statearr_12272;
})();
var statearr_12273_13208 = state_12260__$1;
(statearr_12273_13208[(2)] = null);

(statearr_12273_13208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (8))){
var inst_12239 = (state_12260[(7)]);
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12260__$1,(11),out,inst_12239);
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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_12274 = [null,null,null,null,null,null,null,null,null];
(statearr_12274[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_12274[(1)] = (1));

return statearr_12274;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_12260){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12260);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12275){var ex__10591__auto__ = e12275;
var statearr_12276_13212 = state_12260;
(statearr_12276_13212[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12260[(4)]))){
var statearr_12277_13213 = state_12260;
(statearr_12277_13213[(1)] = cljs.core.first((state_12260[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13214 = state_12260;
state_12260 = G__13214;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12278 = f__10671__auto__();
(statearr_12278[(6)] = c__10670__auto___13193);

return statearr_12278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12280 = arguments.length;
switch (G__12280) {
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
var c__10670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12354){
var state_val_12355 = (state_12354[(1)]);
if((state_val_12355 === (7))){
var inst_12350 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12356_13228 = state_12354__$1;
(statearr_12356_13228[(2)] = inst_12350);

(statearr_12356_13228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (20))){
var inst_12320 = (state_12354[(7)]);
var inst_12331 = (state_12354[(2)]);
var inst_12332 = cljs.core.next(inst_12320);
var inst_12306 = inst_12332;
var inst_12307 = null;
var inst_12308 = (0);
var inst_12309 = (0);
var state_12354__$1 = (function (){var statearr_12357 = state_12354;
(statearr_12357[(8)] = inst_12306);

(statearr_12357[(9)] = inst_12307);

(statearr_12357[(10)] = inst_12331);

(statearr_12357[(11)] = inst_12308);

(statearr_12357[(12)] = inst_12309);

return statearr_12357;
})();
var statearr_12358_13229 = state_12354__$1;
(statearr_12358_13229[(2)] = null);

(statearr_12358_13229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (1))){
var state_12354__$1 = state_12354;
var statearr_12359_13230 = state_12354__$1;
(statearr_12359_13230[(2)] = null);

(statearr_12359_13230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (4))){
var inst_12295 = (state_12354[(13)]);
var inst_12295__$1 = (state_12354[(2)]);
var inst_12296 = (inst_12295__$1 == null);
var state_12354__$1 = (function (){var statearr_12360 = state_12354;
(statearr_12360[(13)] = inst_12295__$1);

return statearr_12360;
})();
if(cljs.core.truth_(inst_12296)){
var statearr_12361_13231 = state_12354__$1;
(statearr_12361_13231[(1)] = (5));

} else {
var statearr_12362_13232 = state_12354__$1;
(statearr_12362_13232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (15))){
var state_12354__$1 = state_12354;
var statearr_12366_13233 = state_12354__$1;
(statearr_12366_13233[(2)] = null);

(statearr_12366_13233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (21))){
var state_12354__$1 = state_12354;
var statearr_12367_13234 = state_12354__$1;
(statearr_12367_13234[(2)] = null);

(statearr_12367_13234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (13))){
var inst_12306 = (state_12354[(8)]);
var inst_12307 = (state_12354[(9)]);
var inst_12308 = (state_12354[(11)]);
var inst_12309 = (state_12354[(12)]);
var inst_12316 = (state_12354[(2)]);
var inst_12317 = (inst_12309 + (1));
var tmp12363 = inst_12306;
var tmp12364 = inst_12307;
var tmp12365 = inst_12308;
var inst_12306__$1 = tmp12363;
var inst_12307__$1 = tmp12364;
var inst_12308__$1 = tmp12365;
var inst_12309__$1 = inst_12317;
var state_12354__$1 = (function (){var statearr_12368 = state_12354;
(statearr_12368[(8)] = inst_12306__$1);

(statearr_12368[(9)] = inst_12307__$1);

(statearr_12368[(14)] = inst_12316);

(statearr_12368[(11)] = inst_12308__$1);

(statearr_12368[(12)] = inst_12309__$1);

return statearr_12368;
})();
var statearr_12369_13235 = state_12354__$1;
(statearr_12369_13235[(2)] = null);

(statearr_12369_13235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (22))){
var state_12354__$1 = state_12354;
var statearr_12370_13236 = state_12354__$1;
(statearr_12370_13236[(2)] = null);

(statearr_12370_13236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (6))){
var inst_12295 = (state_12354[(13)]);
var inst_12304 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12295) : f.call(null,inst_12295));
var inst_12305 = cljs.core.seq(inst_12304);
var inst_12306 = inst_12305;
var inst_12307 = null;
var inst_12308 = (0);
var inst_12309 = (0);
var state_12354__$1 = (function (){var statearr_12371 = state_12354;
(statearr_12371[(8)] = inst_12306);

(statearr_12371[(9)] = inst_12307);

(statearr_12371[(11)] = inst_12308);

(statearr_12371[(12)] = inst_12309);

return statearr_12371;
})();
var statearr_12372_13237 = state_12354__$1;
(statearr_12372_13237[(2)] = null);

(statearr_12372_13237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (17))){
var inst_12320 = (state_12354[(7)]);
var inst_12324 = cljs.core.chunk_first(inst_12320);
var inst_12325 = cljs.core.chunk_rest(inst_12320);
var inst_12326 = cljs.core.count(inst_12324);
var inst_12306 = inst_12325;
var inst_12307 = inst_12324;
var inst_12308 = inst_12326;
var inst_12309 = (0);
var state_12354__$1 = (function (){var statearr_12379 = state_12354;
(statearr_12379[(8)] = inst_12306);

(statearr_12379[(9)] = inst_12307);

(statearr_12379[(11)] = inst_12308);

(statearr_12379[(12)] = inst_12309);

return statearr_12379;
})();
var statearr_12380_13238 = state_12354__$1;
(statearr_12380_13238[(2)] = null);

(statearr_12380_13238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (3))){
var inst_12352 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12354__$1,inst_12352);
} else {
if((state_val_12355 === (12))){
var inst_12340 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12381_13239 = state_12354__$1;
(statearr_12381_13239[(2)] = inst_12340);

(statearr_12381_13239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (2))){
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12354__$1,(4),in$);
} else {
if((state_val_12355 === (23))){
var inst_12348 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12382_13243 = state_12354__$1;
(statearr_12382_13243[(2)] = inst_12348);

(statearr_12382_13243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (19))){
var inst_12335 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12387_13244 = state_12354__$1;
(statearr_12387_13244[(2)] = inst_12335);

(statearr_12387_13244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (11))){
var inst_12306 = (state_12354[(8)]);
var inst_12320 = (state_12354[(7)]);
var inst_12320__$1 = cljs.core.seq(inst_12306);
var state_12354__$1 = (function (){var statearr_12388 = state_12354;
(statearr_12388[(7)] = inst_12320__$1);

return statearr_12388;
})();
if(inst_12320__$1){
var statearr_12389_13245 = state_12354__$1;
(statearr_12389_13245[(1)] = (14));

} else {
var statearr_12390_13246 = state_12354__$1;
(statearr_12390_13246[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (9))){
var inst_12342 = (state_12354[(2)]);
var inst_12343 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12354__$1 = (function (){var statearr_12391 = state_12354;
(statearr_12391[(15)] = inst_12342);

return statearr_12391;
})();
if(cljs.core.truth_(inst_12343)){
var statearr_12392_13247 = state_12354__$1;
(statearr_12392_13247[(1)] = (21));

} else {
var statearr_12393_13248 = state_12354__$1;
(statearr_12393_13248[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (5))){
var inst_12298 = cljs.core.async.close_BANG_(out);
var state_12354__$1 = state_12354;
var statearr_12394_13249 = state_12354__$1;
(statearr_12394_13249[(2)] = inst_12298);

(statearr_12394_13249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (14))){
var inst_12320 = (state_12354[(7)]);
var inst_12322 = cljs.core.chunked_seq_QMARK_(inst_12320);
var state_12354__$1 = state_12354;
if(inst_12322){
var statearr_12395_13250 = state_12354__$1;
(statearr_12395_13250[(1)] = (17));

} else {
var statearr_12396_13251 = state_12354__$1;
(statearr_12396_13251[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (16))){
var inst_12338 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12397_13252 = state_12354__$1;
(statearr_12397_13252[(2)] = inst_12338);

(statearr_12397_13252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (10))){
var inst_12307 = (state_12354[(9)]);
var inst_12309 = (state_12354[(12)]);
var inst_12314 = cljs.core._nth(inst_12307,inst_12309);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12354__$1,(13),out,inst_12314);
} else {
if((state_val_12355 === (18))){
var inst_12320 = (state_12354[(7)]);
var inst_12329 = cljs.core.first(inst_12320);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12354__$1,(20),out,inst_12329);
} else {
if((state_val_12355 === (8))){
var inst_12308 = (state_12354[(11)]);
var inst_12309 = (state_12354[(12)]);
var inst_12311 = (inst_12309 < inst_12308);
var inst_12312 = inst_12311;
var state_12354__$1 = state_12354;
if(cljs.core.truth_(inst_12312)){
var statearr_12399_13254 = state_12354__$1;
(statearr_12399_13254[(1)] = (10));

} else {
var statearr_12400_13255 = state_12354__$1;
(statearr_12400_13255[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10588__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10588__auto____0 = (function (){
var statearr_12401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12401[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10588__auto__);

(statearr_12401[(1)] = (1));

return statearr_12401;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10588__auto____1 = (function (state_12354){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12354);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12402){var ex__10591__auto__ = e12402;
var statearr_12403_13256 = state_12354;
(statearr_12403_13256[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12354[(4)]))){
var statearr_12404_13257 = state_12354;
(statearr_12404_13257[(1)] = cljs.core.first((state_12354[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13258 = state_12354;
state_12354 = G__13258;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10588__auto__ = function(state_12354){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10588__auto____1.call(this,state_12354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10588__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10588__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12405 = f__10671__auto__();
(statearr_12405[(6)] = c__10670__auto__);

return statearr_12405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));

return c__10670__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12407 = arguments.length;
switch (G__12407) {
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
var G__12412 = arguments.length;
switch (G__12412) {
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
var G__12414 = arguments.length;
switch (G__12414) {
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
var c__10670__auto___13262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12443){
var state_val_12444 = (state_12443[(1)]);
if((state_val_12444 === (7))){
var inst_12438 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12445_13263 = state_12443__$1;
(statearr_12445_13263[(2)] = inst_12438);

(statearr_12445_13263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (1))){
var inst_12415 = null;
var state_12443__$1 = (function (){var statearr_12446 = state_12443;
(statearr_12446[(7)] = inst_12415);

return statearr_12446;
})();
var statearr_12447_13264 = state_12443__$1;
(statearr_12447_13264[(2)] = null);

(statearr_12447_13264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (4))){
var inst_12418 = (state_12443[(8)]);
var inst_12418__$1 = (state_12443[(2)]);
var inst_12419 = (inst_12418__$1 == null);
var inst_12420 = cljs.core.not(inst_12419);
var state_12443__$1 = (function (){var statearr_12448 = state_12443;
(statearr_12448[(8)] = inst_12418__$1);

return statearr_12448;
})();
if(inst_12420){
var statearr_12449_13265 = state_12443__$1;
(statearr_12449_13265[(1)] = (5));

} else {
var statearr_12450_13266 = state_12443__$1;
(statearr_12450_13266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (6))){
var state_12443__$1 = state_12443;
var statearr_12451_13267 = state_12443__$1;
(statearr_12451_13267[(2)] = null);

(statearr_12451_13267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (3))){
var inst_12440 = (state_12443[(2)]);
var inst_12441 = cljs.core.async.close_BANG_(out);
var state_12443__$1 = (function (){var statearr_12452 = state_12443;
(statearr_12452[(9)] = inst_12440);

return statearr_12452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12443__$1,inst_12441);
} else {
if((state_val_12444 === (2))){
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12443__$1,(4),ch);
} else {
if((state_val_12444 === (11))){
var inst_12418 = (state_12443[(8)]);
var inst_12432 = (state_12443[(2)]);
var inst_12415 = inst_12418;
var state_12443__$1 = (function (){var statearr_12453 = state_12443;
(statearr_12453[(10)] = inst_12432);

(statearr_12453[(7)] = inst_12415);

return statearr_12453;
})();
var statearr_12454_13268 = state_12443__$1;
(statearr_12454_13268[(2)] = null);

(statearr_12454_13268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (9))){
var inst_12418 = (state_12443[(8)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12443__$1,(11),out,inst_12418);
} else {
if((state_val_12444 === (5))){
var inst_12415 = (state_12443[(7)]);
var inst_12418 = (state_12443[(8)]);
var inst_12427 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12418,inst_12415);
var state_12443__$1 = state_12443;
if(inst_12427){
var statearr_12456_13277 = state_12443__$1;
(statearr_12456_13277[(1)] = (8));

} else {
var statearr_12457_13278 = state_12443__$1;
(statearr_12457_13278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (10))){
var inst_12435 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12458_13283 = state_12443__$1;
(statearr_12458_13283[(2)] = inst_12435);

(statearr_12458_13283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (8))){
var inst_12415 = (state_12443[(7)]);
var tmp12455 = inst_12415;
var inst_12415__$1 = tmp12455;
var state_12443__$1 = (function (){var statearr_12460 = state_12443;
(statearr_12460[(7)] = inst_12415__$1);

return statearr_12460;
})();
var statearr_12461_13284 = state_12443__$1;
(statearr_12461_13284[(2)] = null);

(statearr_12461_13284[(1)] = (2));


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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_12462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12462[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_12462[(1)] = (1));

return statearr_12462;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_12443){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12443);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12465){var ex__10591__auto__ = e12465;
var statearr_12466_13285 = state_12443;
(statearr_12466_13285[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12443[(4)]))){
var statearr_12467_13286 = state_12443;
(statearr_12467_13286[(1)] = cljs.core.first((state_12443[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13287 = state_12443;
state_12443 = G__13287;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_12443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_12443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12468 = f__10671__auto__();
(statearr_12468[(6)] = c__10670__auto___13262);

return statearr_12468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12470 = arguments.length;
switch (G__12470) {
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
var c__10670__auto___13289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12520){
var state_val_12521 = (state_12520[(1)]);
if((state_val_12521 === (7))){
var inst_12516 = (state_12520[(2)]);
var state_12520__$1 = state_12520;
var statearr_12522_13290 = state_12520__$1;
(statearr_12522_13290[(2)] = inst_12516);

(statearr_12522_13290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (1))){
var inst_12483 = (new Array(n));
var inst_12484 = inst_12483;
var inst_12485 = (0);
var state_12520__$1 = (function (){var statearr_12523 = state_12520;
(statearr_12523[(7)] = inst_12485);

(statearr_12523[(8)] = inst_12484);

return statearr_12523;
})();
var statearr_12524_13291 = state_12520__$1;
(statearr_12524_13291[(2)] = null);

(statearr_12524_13291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (4))){
var inst_12488 = (state_12520[(9)]);
var inst_12488__$1 = (state_12520[(2)]);
var inst_12489 = (inst_12488__$1 == null);
var inst_12490 = cljs.core.not(inst_12489);
var state_12520__$1 = (function (){var statearr_12525 = state_12520;
(statearr_12525[(9)] = inst_12488__$1);

return statearr_12525;
})();
if(inst_12490){
var statearr_12526_13292 = state_12520__$1;
(statearr_12526_13292[(1)] = (5));

} else {
var statearr_12527_13293 = state_12520__$1;
(statearr_12527_13293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (15))){
var inst_12510 = (state_12520[(2)]);
var state_12520__$1 = state_12520;
var statearr_12528_13294 = state_12520__$1;
(statearr_12528_13294[(2)] = inst_12510);

(statearr_12528_13294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (13))){
var state_12520__$1 = state_12520;
var statearr_12529_13295 = state_12520__$1;
(statearr_12529_13295[(2)] = null);

(statearr_12529_13295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (6))){
var inst_12485 = (state_12520[(7)]);
var inst_12506 = (inst_12485 > (0));
var state_12520__$1 = state_12520;
if(cljs.core.truth_(inst_12506)){
var statearr_12530_13296 = state_12520__$1;
(statearr_12530_13296[(1)] = (12));

} else {
var statearr_12531_13297 = state_12520__$1;
(statearr_12531_13297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (3))){
var inst_12518 = (state_12520[(2)]);
var state_12520__$1 = state_12520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12520__$1,inst_12518);
} else {
if((state_val_12521 === (12))){
var inst_12484 = (state_12520[(8)]);
var inst_12508 = cljs.core.vec(inst_12484);
var state_12520__$1 = state_12520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12520__$1,(15),out,inst_12508);
} else {
if((state_val_12521 === (2))){
var state_12520__$1 = state_12520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12520__$1,(4),ch);
} else {
if((state_val_12521 === (11))){
var inst_12500 = (state_12520[(2)]);
var inst_12501 = (new Array(n));
var inst_12484 = inst_12501;
var inst_12485 = (0);
var state_12520__$1 = (function (){var statearr_12532 = state_12520;
(statearr_12532[(10)] = inst_12500);

(statearr_12532[(7)] = inst_12485);

(statearr_12532[(8)] = inst_12484);

return statearr_12532;
})();
var statearr_12533_13302 = state_12520__$1;
(statearr_12533_13302[(2)] = null);

(statearr_12533_13302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (9))){
var inst_12484 = (state_12520[(8)]);
var inst_12498 = cljs.core.vec(inst_12484);
var state_12520__$1 = state_12520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12520__$1,(11),out,inst_12498);
} else {
if((state_val_12521 === (5))){
var inst_12485 = (state_12520[(7)]);
var inst_12488 = (state_12520[(9)]);
var inst_12484 = (state_12520[(8)]);
var inst_12493 = (state_12520[(11)]);
var inst_12492 = (inst_12484[inst_12485] = inst_12488);
var inst_12493__$1 = (inst_12485 + (1));
var inst_12494 = (inst_12493__$1 < n);
var state_12520__$1 = (function (){var statearr_12537 = state_12520;
(statearr_12537[(11)] = inst_12493__$1);

(statearr_12537[(12)] = inst_12492);

return statearr_12537;
})();
if(cljs.core.truth_(inst_12494)){
var statearr_12538_13306 = state_12520__$1;
(statearr_12538_13306[(1)] = (8));

} else {
var statearr_12539_13307 = state_12520__$1;
(statearr_12539_13307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (14))){
var inst_12513 = (state_12520[(2)]);
var inst_12514 = cljs.core.async.close_BANG_(out);
var state_12520__$1 = (function (){var statearr_12541 = state_12520;
(statearr_12541[(13)] = inst_12513);

return statearr_12541;
})();
var statearr_12542_13308 = state_12520__$1;
(statearr_12542_13308[(2)] = inst_12514);

(statearr_12542_13308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (10))){
var inst_12504 = (state_12520[(2)]);
var state_12520__$1 = state_12520;
var statearr_12543_13312 = state_12520__$1;
(statearr_12543_13312[(2)] = inst_12504);

(statearr_12543_13312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12521 === (8))){
var inst_12484 = (state_12520[(8)]);
var inst_12493 = (state_12520[(11)]);
var tmp12540 = inst_12484;
var inst_12484__$1 = tmp12540;
var inst_12485 = inst_12493;
var state_12520__$1 = (function (){var statearr_12544 = state_12520;
(statearr_12544[(7)] = inst_12485);

(statearr_12544[(8)] = inst_12484__$1);

return statearr_12544;
})();
var statearr_12545_13313 = state_12520__$1;
(statearr_12545_13313[(2)] = null);

(statearr_12545_13313[(1)] = (2));


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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_12546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12546[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_12546[(1)] = (1));

return statearr_12546;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_12520){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12520);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12547){var ex__10591__auto__ = e12547;
var statearr_12548_13314 = state_12520;
(statearr_12548_13314[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12520[(4)]))){
var statearr_12549_13315 = state_12520;
(statearr_12549_13315[(1)] = cljs.core.first((state_12520[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13316 = state_12520;
state_12520 = G__13316;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_12520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_12520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12558 = f__10671__auto__();
(statearr_12558[(6)] = c__10670__auto___13289);

return statearr_12558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12560 = arguments.length;
switch (G__12560) {
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
var c__10670__auto___13318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10671__auto__ = (function (){var switch__10587__auto__ = (function (state_12605){
var state_val_12606 = (state_12605[(1)]);
if((state_val_12606 === (7))){
var inst_12601 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
var statearr_12607_13319 = state_12605__$1;
(statearr_12607_13319[(2)] = inst_12601);

(statearr_12607_13319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (1))){
var inst_12561 = [];
var inst_12562 = inst_12561;
var inst_12563 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12605__$1 = (function (){var statearr_12608 = state_12605;
(statearr_12608[(7)] = inst_12562);

(statearr_12608[(8)] = inst_12563);

return statearr_12608;
})();
var statearr_12609_13320 = state_12605__$1;
(statearr_12609_13320[(2)] = null);

(statearr_12609_13320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (4))){
var inst_12566 = (state_12605[(9)]);
var inst_12566__$1 = (state_12605[(2)]);
var inst_12567 = (inst_12566__$1 == null);
var inst_12568 = cljs.core.not(inst_12567);
var state_12605__$1 = (function (){var statearr_12610 = state_12605;
(statearr_12610[(9)] = inst_12566__$1);

return statearr_12610;
})();
if(inst_12568){
var statearr_12611_13321 = state_12605__$1;
(statearr_12611_13321[(1)] = (5));

} else {
var statearr_12612_13322 = state_12605__$1;
(statearr_12612_13322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (15))){
var inst_12595 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
var statearr_12613_13323 = state_12605__$1;
(statearr_12613_13323[(2)] = inst_12595);

(statearr_12613_13323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (13))){
var state_12605__$1 = state_12605;
var statearr_12614_13324 = state_12605__$1;
(statearr_12614_13324[(2)] = null);

(statearr_12614_13324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (6))){
var inst_12562 = (state_12605[(7)]);
var inst_12590 = inst_12562.length;
var inst_12591 = (inst_12590 > (0));
var state_12605__$1 = state_12605;
if(cljs.core.truth_(inst_12591)){
var statearr_12615_13325 = state_12605__$1;
(statearr_12615_13325[(1)] = (12));

} else {
var statearr_12616_13327 = state_12605__$1;
(statearr_12616_13327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (3))){
var inst_12603 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12605__$1,inst_12603);
} else {
if((state_val_12606 === (12))){
var inst_12562 = (state_12605[(7)]);
var inst_12593 = cljs.core.vec(inst_12562);
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12605__$1,(15),out,inst_12593);
} else {
if((state_val_12606 === (2))){
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12605__$1,(4),ch);
} else {
if((state_val_12606 === (11))){
var inst_12566 = (state_12605[(9)]);
var inst_12570 = (state_12605[(10)]);
var inst_12580 = (state_12605[(2)]);
var inst_12581 = [];
var inst_12582 = inst_12581.push(inst_12566);
var inst_12562 = inst_12581;
var inst_12563 = inst_12570;
var state_12605__$1 = (function (){var statearr_12617 = state_12605;
(statearr_12617[(11)] = inst_12582);

(statearr_12617[(7)] = inst_12562);

(statearr_12617[(8)] = inst_12563);

(statearr_12617[(12)] = inst_12580);

return statearr_12617;
})();
var statearr_12618_13332 = state_12605__$1;
(statearr_12618_13332[(2)] = null);

(statearr_12618_13332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (9))){
var inst_12562 = (state_12605[(7)]);
var inst_12578 = cljs.core.vec(inst_12562);
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12605__$1,(11),out,inst_12578);
} else {
if((state_val_12606 === (5))){
var inst_12566 = (state_12605[(9)]);
var inst_12563 = (state_12605[(8)]);
var inst_12570 = (state_12605[(10)]);
var inst_12570__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12566) : f.call(null,inst_12566));
var inst_12571 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12570__$1,inst_12563);
var inst_12572 = cljs.core.keyword_identical_QMARK_(inst_12563,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12573 = ((inst_12571) || (inst_12572));
var state_12605__$1 = (function (){var statearr_12619 = state_12605;
(statearr_12619[(10)] = inst_12570__$1);

return statearr_12619;
})();
if(cljs.core.truth_(inst_12573)){
var statearr_12620_13336 = state_12605__$1;
(statearr_12620_13336[(1)] = (8));

} else {
var statearr_12621_13338 = state_12605__$1;
(statearr_12621_13338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (14))){
var inst_12598 = (state_12605[(2)]);
var inst_12599 = cljs.core.async.close_BANG_(out);
var state_12605__$1 = (function (){var statearr_12623 = state_12605;
(statearr_12623[(13)] = inst_12598);

return statearr_12623;
})();
var statearr_12624_13341 = state_12605__$1;
(statearr_12624_13341[(2)] = inst_12599);

(statearr_12624_13341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (10))){
var inst_12588 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
var statearr_12625_13342 = state_12605__$1;
(statearr_12625_13342[(2)] = inst_12588);

(statearr_12625_13342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (8))){
var inst_12566 = (state_12605[(9)]);
var inst_12562 = (state_12605[(7)]);
var inst_12570 = (state_12605[(10)]);
var inst_12575 = inst_12562.push(inst_12566);
var tmp12622 = inst_12562;
var inst_12562__$1 = tmp12622;
var inst_12563 = inst_12570;
var state_12605__$1 = (function (){var statearr_12626 = state_12605;
(statearr_12626[(7)] = inst_12562__$1);

(statearr_12626[(14)] = inst_12575);

(statearr_12626[(8)] = inst_12563);

return statearr_12626;
})();
var statearr_12627_13343 = state_12605__$1;
(statearr_12627_13343[(2)] = null);

(statearr_12627_13343[(1)] = (2));


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
var cljs$core$async$state_machine__10588__auto__ = null;
var cljs$core$async$state_machine__10588__auto____0 = (function (){
var statearr_12628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12628[(0)] = cljs$core$async$state_machine__10588__auto__);

(statearr_12628[(1)] = (1));

return statearr_12628;
});
var cljs$core$async$state_machine__10588__auto____1 = (function (state_12605){
while(true){
var ret_value__10589__auto__ = (function (){try{while(true){
var result__10590__auto__ = switch__10587__auto__(state_12605);
if(cljs.core.keyword_identical_QMARK_(result__10590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10590__auto__;
}
break;
}
}catch (e12629){var ex__10591__auto__ = e12629;
var statearr_12630_13344 = state_12605;
(statearr_12630_13344[(2)] = ex__10591__auto__);


if(cljs.core.seq((state_12605[(4)]))){
var statearr_12631_13345 = state_12605;
(statearr_12631_13345[(1)] = cljs.core.first((state_12605[(4)])));

} else {
throw ex__10591__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13346 = state_12605;
state_12605 = G__13346;
continue;
} else {
return ret_value__10589__auto__;
}
break;
}
});
cljs$core$async$state_machine__10588__auto__ = function(state_12605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10588__auto____1.call(this,state_12605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10588__auto____0;
cljs$core$async$state_machine__10588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10588__auto____1;
return cljs$core$async$state_machine__10588__auto__;
})()
})();
var state__10672__auto__ = (function (){var statearr_12634 = f__10671__auto__();
(statearr_12634[(6)] = c__10670__auto___13318);

return statearr_12634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10672__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
