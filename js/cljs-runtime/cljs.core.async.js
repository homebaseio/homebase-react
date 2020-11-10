goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12165 = arguments.length;
switch (G__12165) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12166 = (function (f,blockable,meta12167){
this.f = f;
this.blockable = blockable;
this.meta12167 = meta12167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12168,meta12167__$1){
var self__ = this;
var _12168__$1 = this;
return (new cljs.core.async.t_cljs$core$async12166(self__.f,self__.blockable,meta12167__$1));
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12168){
var self__ = this;
var _12168__$1 = this;
return self__.meta12167;
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12167","meta12167",265214454,null)], null);
}));

(cljs.core.async.t_cljs$core$async12166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12166");

(cljs.core.async.t_cljs$core$async12166.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12166.
 */
cljs.core.async.__GT_t_cljs$core$async12166 = (function cljs$core$async$__GT_t_cljs$core$async12166(f__$1,blockable__$1,meta12167){
return (new cljs.core.async.t_cljs$core$async12166(f__$1,blockable__$1,meta12167));
});

}

return (new cljs.core.async.t_cljs$core$async12166(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12171 = arguments.length;
switch (G__12171) {
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
var G__12173 = arguments.length;
switch (G__12173) {
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
var G__12176 = arguments.length;
switch (G__12176) {
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
var val_14739 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14739) : fn1.call(null,val_14739));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14739) : fn1.call(null,val_14739));
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
var G__12178 = arguments.length;
switch (G__12178) {
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
var n__4613__auto___14776 = n;
var x_14777 = (0);
while(true){
if((x_14777 < n__4613__auto___14776)){
(a[x_14777] = x_14777);

var G__14778 = (x_14777 + (1));
x_14777 = G__14778;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12182 = (function (flag,meta12183){
this.flag = flag;
this.meta12183 = meta12183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12184,meta12183__$1){
var self__ = this;
var _12184__$1 = this;
return (new cljs.core.async.t_cljs$core$async12182(self__.flag,meta12183__$1));
}));

(cljs.core.async.t_cljs$core$async12182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12184){
var self__ = this;
var _12184__$1 = this;
return self__.meta12183;
}));

(cljs.core.async.t_cljs$core$async12182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12183","meta12183",-622300294,null)], null);
}));

(cljs.core.async.t_cljs$core$async12182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12182");

(cljs.core.async.t_cljs$core$async12182.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12182.
 */
cljs.core.async.__GT_t_cljs$core$async12182 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12182(flag__$1,meta12183){
return (new cljs.core.async.t_cljs$core$async12182(flag__$1,meta12183));
});

}

return (new cljs.core.async.t_cljs$core$async12182(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12190 = (function (flag,cb,meta12191){
this.flag = flag;
this.cb = cb;
this.meta12191 = meta12191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12192,meta12191__$1){
var self__ = this;
var _12192__$1 = this;
return (new cljs.core.async.t_cljs$core$async12190(self__.flag,self__.cb,meta12191__$1));
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12192){
var self__ = this;
var _12192__$1 = this;
return self__.meta12191;
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12191","meta12191",-1209040385,null)], null);
}));

(cljs.core.async.t_cljs$core$async12190.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12190");

(cljs.core.async.t_cljs$core$async12190.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12190");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12190.
 */
cljs.core.async.__GT_t_cljs$core$async12190 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12190(flag__$1,cb__$1,meta12191){
return (new cljs.core.async.t_cljs$core$async12190(flag__$1,cb__$1,meta12191));
});

}

return (new cljs.core.async.t_cljs$core$async12190(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12193_SHARP_){
var G__12195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12193_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12195) : fret.call(null,G__12195));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12194_SHARP_){
var G__12196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12194_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12196) : fret.call(null,G__12196));
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
var G__14820 = (i + (1));
i = G__14820;
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
var len__4736__auto___14821 = arguments.length;
var i__4737__auto___14822 = (0);
while(true){
if((i__4737__auto___14822 < len__4736__auto___14821)){
args__4742__auto__.push((arguments[i__4737__auto___14822]));

var G__14823 = (i__4737__auto___14822 + (1));
i__4737__auto___14822 = G__14823;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12199){
var map__12200 = p__12199;
var map__12200__$1 = (((((!((map__12200 == null))))?(((((map__12200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12200):map__12200);
var opts = map__12200__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12197){
var G__12198 = cljs.core.first(seq12197);
var seq12197__$1 = cljs.core.next(seq12197);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12198,seq12197__$1);
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
var G__12203 = arguments.length;
switch (G__12203) {
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
var c__12107__auto___14825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12232){
var state_val_12233 = (state_12232[(1)]);
if((state_val_12233 === (7))){
var inst_12225 = (state_12232[(2)]);
var state_12232__$1 = state_12232;
var statearr_12234_14826 = state_12232__$1;
(statearr_12234_14826[(2)] = inst_12225);

(statearr_12234_14826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (1))){
var state_12232__$1 = state_12232;
var statearr_12235_14827 = state_12232__$1;
(statearr_12235_14827[(2)] = null);

(statearr_12235_14827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (4))){
var inst_12206 = (state_12232[(7)]);
var inst_12206__$1 = (state_12232[(2)]);
var inst_12207 = (inst_12206__$1 == null);
var state_12232__$1 = (function (){var statearr_12236 = state_12232;
(statearr_12236[(7)] = inst_12206__$1);

return statearr_12236;
})();
if(cljs.core.truth_(inst_12207)){
var statearr_12237_14831 = state_12232__$1;
(statearr_12237_14831[(1)] = (5));

} else {
var statearr_12238_14832 = state_12232__$1;
(statearr_12238_14832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (13))){
var state_12232__$1 = state_12232;
var statearr_12239_14833 = state_12232__$1;
(statearr_12239_14833[(2)] = null);

(statearr_12239_14833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (6))){
var inst_12206 = (state_12232[(7)]);
var state_12232__$1 = state_12232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12232__$1,(11),to,inst_12206);
} else {
if((state_val_12233 === (3))){
var inst_12227 = (state_12232[(2)]);
var state_12232__$1 = state_12232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12232__$1,inst_12227);
} else {
if((state_val_12233 === (12))){
var state_12232__$1 = state_12232;
var statearr_12240_14834 = state_12232__$1;
(statearr_12240_14834[(2)] = null);

(statearr_12240_14834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (2))){
var state_12232__$1 = state_12232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12232__$1,(4),from);
} else {
if((state_val_12233 === (11))){
var inst_12217 = (state_12232[(2)]);
var state_12232__$1 = state_12232;
if(cljs.core.truth_(inst_12217)){
var statearr_12241_14841 = state_12232__$1;
(statearr_12241_14841[(1)] = (12));

} else {
var statearr_12242_14843 = state_12232__$1;
(statearr_12242_14843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (9))){
var state_12232__$1 = state_12232;
var statearr_12243_14844 = state_12232__$1;
(statearr_12243_14844[(2)] = null);

(statearr_12243_14844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (5))){
var state_12232__$1 = state_12232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12244_14845 = state_12232__$1;
(statearr_12244_14845[(1)] = (8));

} else {
var statearr_12245_14846 = state_12232__$1;
(statearr_12245_14846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (14))){
var inst_12223 = (state_12232[(2)]);
var state_12232__$1 = state_12232;
var statearr_12246_14848 = state_12232__$1;
(statearr_12246_14848[(2)] = inst_12223);

(statearr_12246_14848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (10))){
var inst_12214 = (state_12232[(2)]);
var state_12232__$1 = state_12232;
var statearr_12247_14849 = state_12232__$1;
(statearr_12247_14849[(2)] = inst_12214);

(statearr_12247_14849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (8))){
var inst_12211 = cljs.core.async.close_BANG_(to);
var state_12232__$1 = state_12232;
var statearr_12248_14851 = state_12232__$1;
(statearr_12248_14851[(2)] = inst_12211);

(statearr_12248_14851[(1)] = (10));


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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_12249 = [null,null,null,null,null,null,null,null];
(statearr_12249[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12249[(1)] = (1));

return statearr_12249;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12232){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12232);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12250){var ex__12075__auto__ = e12250;
var statearr_12251_14853 = state_12232;
(statearr_12251_14853[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12232[(4)]))){
var statearr_12252_14855 = state_12232;
(statearr_12252_14855[(1)] = cljs.core.first((state_12232[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14856 = state_12232;
state_12232 = G__14856;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12253 = f__12108__auto__();
(statearr_12253[(6)] = c__12107__auto___14825);

return statearr_12253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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
var process = (function (p__12254){
var vec__12255 = p__12254;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12255,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12255,(1),null);
var job = vec__12255;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12107__auto___14864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12262){
var state_val_12263 = (state_12262[(1)]);
if((state_val_12263 === (1))){
var state_12262__$1 = state_12262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12262__$1,(2),res,v);
} else {
if((state_val_12263 === (2))){
var inst_12259 = (state_12262[(2)]);
var inst_12260 = cljs.core.async.close_BANG_(res);
var state_12262__$1 = (function (){var statearr_12264 = state_12262;
(statearr_12264[(7)] = inst_12259);

return statearr_12264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12262__$1,inst_12260);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12265 = [null,null,null,null,null,null,null,null];
(statearr_12265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12265[(1)] = (1));

return statearr_12265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12262){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12262);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12266){var ex__12075__auto__ = e12266;
var statearr_12267_14865 = state_12262;
(statearr_12267_14865[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12262[(4)]))){
var statearr_12268_14866 = state_12262;
(statearr_12268_14866[(1)] = cljs.core.first((state_12262[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14867 = state_12262;
state_12262 = G__14867;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12269 = f__12108__auto__();
(statearr_12269[(6)] = c__12107__auto___14864);

return statearr_12269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12270){
var vec__12271 = p__12270;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12271,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12271,(1),null);
var job = vec__12271;
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
var n__4613__auto___14868 = n;
var __14869 = (0);
while(true){
if((__14869 < n__4613__auto___14868)){
var G__12274_14870 = type;
var G__12274_14871__$1 = (((G__12274_14870 instanceof cljs.core.Keyword))?G__12274_14870.fqn:null);
switch (G__12274_14871__$1) {
case "compute":
var c__12107__auto___14873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14869,c__12107__auto___14873,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14869,c__12107__auto___14873,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async){
return (function (state_12287){
var state_val_12288 = (state_12287[(1)]);
if((state_val_12288 === (1))){
var state_12287__$1 = state_12287;
var statearr_12289_14874 = state_12287__$1;
(statearr_12289_14874[(2)] = null);

(statearr_12289_14874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (2))){
var state_12287__$1 = state_12287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12287__$1,(4),jobs);
} else {
if((state_val_12288 === (3))){
var inst_12285 = (state_12287[(2)]);
var state_12287__$1 = state_12287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12287__$1,inst_12285);
} else {
if((state_val_12288 === (4))){
var inst_12277 = (state_12287[(2)]);
var inst_12278 = process(inst_12277);
var state_12287__$1 = state_12287;
if(cljs.core.truth_(inst_12278)){
var statearr_12290_14875 = state_12287__$1;
(statearr_12290_14875[(1)] = (5));

} else {
var statearr_12291_14876 = state_12287__$1;
(statearr_12291_14876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (5))){
var state_12287__$1 = state_12287;
var statearr_12292_14877 = state_12287__$1;
(statearr_12292_14877[(2)] = null);

(statearr_12292_14877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (6))){
var state_12287__$1 = state_12287;
var statearr_12293_14878 = state_12287__$1;
(statearr_12293_14878[(2)] = null);

(statearr_12293_14878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12288 === (7))){
var inst_12283 = (state_12287[(2)]);
var state_12287__$1 = state_12287;
var statearr_12294_14879 = state_12287__$1;
(statearr_12294_14879[(2)] = inst_12283);

(statearr_12294_14879[(1)] = (3));


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
});})(__14869,c__12107__auto___14873,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async))
;
return ((function (__14869,switch__12071__auto__,c__12107__auto___14873,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12295 = [null,null,null,null,null,null,null];
(statearr_12295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12295[(1)] = (1));

return statearr_12295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12287){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12287);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12296){var ex__12075__auto__ = e12296;
var statearr_12297_14880 = state_12287;
(statearr_12297_14880[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12287[(4)]))){
var statearr_12298_14881 = state_12287;
(statearr_12298_14881[(1)] = cljs.core.first((state_12287[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14884 = state_12287;
state_12287 = G__14884;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
;})(__14869,switch__12071__auto__,c__12107__auto___14873,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12299 = f__12108__auto__();
(statearr_12299[(6)] = c__12107__auto___14873);

return statearr_12299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14869,c__12107__auto___14873,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14869,c__12107__auto___14885,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14869,c__12107__auto___14885,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async){
return (function (state_12312){
var state_val_12313 = (state_12312[(1)]);
if((state_val_12313 === (1))){
var state_12312__$1 = state_12312;
var statearr_12314_14887 = state_12312__$1;
(statearr_12314_14887[(2)] = null);

(statearr_12314_14887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (2))){
var state_12312__$1 = state_12312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12312__$1,(4),jobs);
} else {
if((state_val_12313 === (3))){
var inst_12310 = (state_12312[(2)]);
var state_12312__$1 = state_12312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12312__$1,inst_12310);
} else {
if((state_val_12313 === (4))){
var inst_12302 = (state_12312[(2)]);
var inst_12303 = async(inst_12302);
var state_12312__$1 = state_12312;
if(cljs.core.truth_(inst_12303)){
var statearr_12315_14889 = state_12312__$1;
(statearr_12315_14889[(1)] = (5));

} else {
var statearr_12316_14890 = state_12312__$1;
(statearr_12316_14890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (5))){
var state_12312__$1 = state_12312;
var statearr_12317_14892 = state_12312__$1;
(statearr_12317_14892[(2)] = null);

(statearr_12317_14892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (6))){
var state_12312__$1 = state_12312;
var statearr_12318_14893 = state_12312__$1;
(statearr_12318_14893[(2)] = null);

(statearr_12318_14893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (7))){
var inst_12308 = (state_12312[(2)]);
var state_12312__$1 = state_12312;
var statearr_12319_14896 = state_12312__$1;
(statearr_12319_14896[(2)] = inst_12308);

(statearr_12319_14896[(1)] = (3));


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
});})(__14869,c__12107__auto___14885,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async))
;
return ((function (__14869,switch__12071__auto__,c__12107__auto___14885,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12320 = [null,null,null,null,null,null,null];
(statearr_12320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12320[(1)] = (1));

return statearr_12320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12312){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12312);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12321){var ex__12075__auto__ = e12321;
var statearr_12322_14903 = state_12312;
(statearr_12322_14903[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12312[(4)]))){
var statearr_12323_14905 = state_12312;
(statearr_12323_14905[(1)] = cljs.core.first((state_12312[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14907 = state_12312;
state_12312 = G__14907;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
;})(__14869,switch__12071__auto__,c__12107__auto___14885,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12324 = f__12108__auto__();
(statearr_12324[(6)] = c__12107__auto___14885);

return statearr_12324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14869,c__12107__auto___14885,G__12274_14870,G__12274_14871__$1,n__4613__auto___14868,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12274_14871__$1)].join('')));

}

var G__14908 = (__14869 + (1));
__14869 = G__14908;
continue;
} else {
}
break;
}

var c__12107__auto___14909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12346){
var state_val_12347 = (state_12346[(1)]);
if((state_val_12347 === (7))){
var inst_12342 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
var statearr_12348_14910 = state_12346__$1;
(statearr_12348_14910[(2)] = inst_12342);

(statearr_12348_14910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (1))){
var state_12346__$1 = state_12346;
var statearr_12349_14911 = state_12346__$1;
(statearr_12349_14911[(2)] = null);

(statearr_12349_14911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (4))){
var inst_12327 = (state_12346[(7)]);
var inst_12327__$1 = (state_12346[(2)]);
var inst_12328 = (inst_12327__$1 == null);
var state_12346__$1 = (function (){var statearr_12350 = state_12346;
(statearr_12350[(7)] = inst_12327__$1);

return statearr_12350;
})();
if(cljs.core.truth_(inst_12328)){
var statearr_12351_14912 = state_12346__$1;
(statearr_12351_14912[(1)] = (5));

} else {
var statearr_12352_14914 = state_12346__$1;
(statearr_12352_14914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (6))){
var inst_12332 = (state_12346[(8)]);
var inst_12327 = (state_12346[(7)]);
var inst_12332__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12333 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12334 = [inst_12327,inst_12332__$1];
var inst_12335 = (new cljs.core.PersistentVector(null,2,(5),inst_12333,inst_12334,null));
var state_12346__$1 = (function (){var statearr_12353 = state_12346;
(statearr_12353[(8)] = inst_12332__$1);

return statearr_12353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12346__$1,(8),jobs,inst_12335);
} else {
if((state_val_12347 === (3))){
var inst_12344 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12346__$1,inst_12344);
} else {
if((state_val_12347 === (2))){
var state_12346__$1 = state_12346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12346__$1,(4),from);
} else {
if((state_val_12347 === (9))){
var inst_12339 = (state_12346[(2)]);
var state_12346__$1 = (function (){var statearr_12354 = state_12346;
(statearr_12354[(9)] = inst_12339);

return statearr_12354;
})();
var statearr_12355_14957 = state_12346__$1;
(statearr_12355_14957[(2)] = null);

(statearr_12355_14957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (5))){
var inst_12330 = cljs.core.async.close_BANG_(jobs);
var state_12346__$1 = state_12346;
var statearr_12356_14961 = state_12346__$1;
(statearr_12356_14961[(2)] = inst_12330);

(statearr_12356_14961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (8))){
var inst_12332 = (state_12346[(8)]);
var inst_12337 = (state_12346[(2)]);
var state_12346__$1 = (function (){var statearr_12357 = state_12346;
(statearr_12357[(10)] = inst_12337);

return statearr_12357;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12346__$1,(9),results,inst_12332);
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
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12358[(1)] = (1));

return statearr_12358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12346){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12346);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12359){var ex__12075__auto__ = e12359;
var statearr_12360_14964 = state_12346;
(statearr_12360_14964[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12346[(4)]))){
var statearr_12361_14966 = state_12346;
(statearr_12361_14966[(1)] = cljs.core.first((state_12346[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14968 = state_12346;
state_12346 = G__14968;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12362 = f__12108__auto__();
(statearr_12362[(6)] = c__12107__auto___14909);

return statearr_12362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12400){
var state_val_12401 = (state_12400[(1)]);
if((state_val_12401 === (7))){
var inst_12396 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
var statearr_12402_14970 = state_12400__$1;
(statearr_12402_14970[(2)] = inst_12396);

(statearr_12402_14970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (20))){
var state_12400__$1 = state_12400;
var statearr_12403_14971 = state_12400__$1;
(statearr_12403_14971[(2)] = null);

(statearr_12403_14971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (1))){
var state_12400__$1 = state_12400;
var statearr_12404_14972 = state_12400__$1;
(statearr_12404_14972[(2)] = null);

(statearr_12404_14972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (4))){
var inst_12365 = (state_12400[(7)]);
var inst_12365__$1 = (state_12400[(2)]);
var inst_12366 = (inst_12365__$1 == null);
var state_12400__$1 = (function (){var statearr_12405 = state_12400;
(statearr_12405[(7)] = inst_12365__$1);

return statearr_12405;
})();
if(cljs.core.truth_(inst_12366)){
var statearr_12406_14974 = state_12400__$1;
(statearr_12406_14974[(1)] = (5));

} else {
var statearr_12407_14976 = state_12400__$1;
(statearr_12407_14976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (15))){
var inst_12378 = (state_12400[(8)]);
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12400__$1,(18),to,inst_12378);
} else {
if((state_val_12401 === (21))){
var inst_12391 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
var statearr_12412_14979 = state_12400__$1;
(statearr_12412_14979[(2)] = inst_12391);

(statearr_12412_14979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (13))){
var inst_12393 = (state_12400[(2)]);
var state_12400__$1 = (function (){var statearr_12413 = state_12400;
(statearr_12413[(9)] = inst_12393);

return statearr_12413;
})();
var statearr_12414_14982 = state_12400__$1;
(statearr_12414_14982[(2)] = null);

(statearr_12414_14982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (6))){
var inst_12365 = (state_12400[(7)]);
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12400__$1,(11),inst_12365);
} else {
if((state_val_12401 === (17))){
var inst_12386 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
if(cljs.core.truth_(inst_12386)){
var statearr_12415_14983 = state_12400__$1;
(statearr_12415_14983[(1)] = (19));

} else {
var statearr_12416_14985 = state_12400__$1;
(statearr_12416_14985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (3))){
var inst_12398 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12400__$1,inst_12398);
} else {
if((state_val_12401 === (12))){
var inst_12375 = (state_12400[(10)]);
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12400__$1,(14),inst_12375);
} else {
if((state_val_12401 === (2))){
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12400__$1,(4),results);
} else {
if((state_val_12401 === (19))){
var state_12400__$1 = state_12400;
var statearr_12417_15019 = state_12400__$1;
(statearr_12417_15019[(2)] = null);

(statearr_12417_15019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (11))){
var inst_12375 = (state_12400[(2)]);
var state_12400__$1 = (function (){var statearr_12418 = state_12400;
(statearr_12418[(10)] = inst_12375);

return statearr_12418;
})();
var statearr_12419_15022 = state_12400__$1;
(statearr_12419_15022[(2)] = null);

(statearr_12419_15022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (9))){
var state_12400__$1 = state_12400;
var statearr_12420_15025 = state_12400__$1;
(statearr_12420_15025[(2)] = null);

(statearr_12420_15025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (5))){
var state_12400__$1 = state_12400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12421_15026 = state_12400__$1;
(statearr_12421_15026[(1)] = (8));

} else {
var statearr_12422_15028 = state_12400__$1;
(statearr_12422_15028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (14))){
var inst_12378 = (state_12400[(8)]);
var inst_12378__$1 = (state_12400[(2)]);
var inst_12379 = (inst_12378__$1 == null);
var inst_12380 = cljs.core.not(inst_12379);
var state_12400__$1 = (function (){var statearr_12423 = state_12400;
(statearr_12423[(8)] = inst_12378__$1);

return statearr_12423;
})();
if(inst_12380){
var statearr_12424_15032 = state_12400__$1;
(statearr_12424_15032[(1)] = (15));

} else {
var statearr_12425_15033 = state_12400__$1;
(statearr_12425_15033[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (16))){
var state_12400__$1 = state_12400;
var statearr_12426_15035 = state_12400__$1;
(statearr_12426_15035[(2)] = false);

(statearr_12426_15035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (10))){
var inst_12372 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
var statearr_12427_15039 = state_12400__$1;
(statearr_12427_15039[(2)] = inst_12372);

(statearr_12427_15039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (18))){
var inst_12383 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
var statearr_12428_15040 = state_12400__$1;
(statearr_12428_15040[(2)] = inst_12383);

(statearr_12428_15040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (8))){
var inst_12369 = cljs.core.async.close_BANG_(to);
var state_12400__$1 = state_12400;
var statearr_12429_15041 = state_12400__$1;
(statearr_12429_15041[(2)] = inst_12369);

(statearr_12429_15041[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12430[(1)] = (1));

return statearr_12430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12400){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12400);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12431){var ex__12075__auto__ = e12431;
var statearr_12432_15042 = state_12400;
(statearr_12432_15042[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12400[(4)]))){
var statearr_12433_15044 = state_12400;
(statearr_12433_15044[(1)] = cljs.core.first((state_12400[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15046 = state_12400;
state_12400 = G__15046;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12434 = f__12108__auto__();
(statearr_12434[(6)] = c__12107__auto__);

return statearr_12434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
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
var G__12437 = arguments.length;
switch (G__12437) {
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
var G__12439 = arguments.length;
switch (G__12439) {
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
var G__12443 = arguments.length;
switch (G__12443) {
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
var c__12107__auto___15084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12479){
var state_val_12480 = (state_12479[(1)]);
if((state_val_12480 === (7))){
var inst_12474 = (state_12479[(2)]);
var state_12479__$1 = state_12479;
var statearr_12484_15085 = state_12479__$1;
(statearr_12484_15085[(2)] = inst_12474);

(statearr_12484_15085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (1))){
var state_12479__$1 = state_12479;
var statearr_12488_15086 = state_12479__$1;
(statearr_12488_15086[(2)] = null);

(statearr_12488_15086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (4))){
var inst_12455 = (state_12479[(7)]);
var inst_12455__$1 = (state_12479[(2)]);
var inst_12456 = (inst_12455__$1 == null);
var state_12479__$1 = (function (){var statearr_12489 = state_12479;
(statearr_12489[(7)] = inst_12455__$1);

return statearr_12489;
})();
if(cljs.core.truth_(inst_12456)){
var statearr_12490_15087 = state_12479__$1;
(statearr_12490_15087[(1)] = (5));

} else {
var statearr_12491_15088 = state_12479__$1;
(statearr_12491_15088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (13))){
var state_12479__$1 = state_12479;
var statearr_12492_15089 = state_12479__$1;
(statearr_12492_15089[(2)] = null);

(statearr_12492_15089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (6))){
var inst_12455 = (state_12479[(7)]);
var inst_12461 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12455) : p.call(null,inst_12455));
var state_12479__$1 = state_12479;
if(cljs.core.truth_(inst_12461)){
var statearr_12493_15090 = state_12479__$1;
(statearr_12493_15090[(1)] = (9));

} else {
var statearr_12494_15091 = state_12479__$1;
(statearr_12494_15091[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (3))){
var inst_12476 = (state_12479[(2)]);
var state_12479__$1 = state_12479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12479__$1,inst_12476);
} else {
if((state_val_12480 === (12))){
var state_12479__$1 = state_12479;
var statearr_12495_15092 = state_12479__$1;
(statearr_12495_15092[(2)] = null);

(statearr_12495_15092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (2))){
var state_12479__$1 = state_12479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12479__$1,(4),ch);
} else {
if((state_val_12480 === (11))){
var inst_12455 = (state_12479[(7)]);
var inst_12465 = (state_12479[(2)]);
var state_12479__$1 = state_12479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12479__$1,(8),inst_12465,inst_12455);
} else {
if((state_val_12480 === (9))){
var state_12479__$1 = state_12479;
var statearr_12496_15093 = state_12479__$1;
(statearr_12496_15093[(2)] = tc);

(statearr_12496_15093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (5))){
var inst_12458 = cljs.core.async.close_BANG_(tc);
var inst_12459 = cljs.core.async.close_BANG_(fc);
var state_12479__$1 = (function (){var statearr_12500 = state_12479;
(statearr_12500[(8)] = inst_12458);

return statearr_12500;
})();
var statearr_12501_15134 = state_12479__$1;
(statearr_12501_15134[(2)] = inst_12459);

(statearr_12501_15134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (14))){
var inst_12472 = (state_12479[(2)]);
var state_12479__$1 = state_12479;
var statearr_12502_15135 = state_12479__$1;
(statearr_12502_15135[(2)] = inst_12472);

(statearr_12502_15135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (10))){
var state_12479__$1 = state_12479;
var statearr_12503_15136 = state_12479__$1;
(statearr_12503_15136[(2)] = fc);

(statearr_12503_15136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (8))){
var inst_12467 = (state_12479[(2)]);
var state_12479__$1 = state_12479;
if(cljs.core.truth_(inst_12467)){
var statearr_12504_15137 = state_12479__$1;
(statearr_12504_15137[(1)] = (12));

} else {
var statearr_12505_15138 = state_12479__$1;
(statearr_12505_15138[(1)] = (13));

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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_12506 = [null,null,null,null,null,null,null,null,null];
(statearr_12506[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12506[(1)] = (1));

return statearr_12506;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12479){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12479);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12507){var ex__12075__auto__ = e12507;
var statearr_12508_15139 = state_12479;
(statearr_12508_15139[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12479[(4)]))){
var statearr_12509_15140 = state_12479;
(statearr_12509_15140[(1)] = cljs.core.first((state_12479[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15141 = state_12479;
state_12479 = G__15141;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12510 = f__12108__auto__();
(statearr_12510[(6)] = c__12107__auto___15084);

return statearr_12510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12532){
var state_val_12533 = (state_12532[(1)]);
if((state_val_12533 === (7))){
var inst_12528 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12534_15142 = state_12532__$1;
(statearr_12534_15142[(2)] = inst_12528);

(statearr_12534_15142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (1))){
var inst_12511 = init;
var inst_12512 = inst_12511;
var state_12532__$1 = (function (){var statearr_12535 = state_12532;
(statearr_12535[(7)] = inst_12512);

return statearr_12535;
})();
var statearr_12536_15143 = state_12532__$1;
(statearr_12536_15143[(2)] = null);

(statearr_12536_15143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (4))){
var inst_12515 = (state_12532[(8)]);
var inst_12515__$1 = (state_12532[(2)]);
var inst_12516 = (inst_12515__$1 == null);
var state_12532__$1 = (function (){var statearr_12537 = state_12532;
(statearr_12537[(8)] = inst_12515__$1);

return statearr_12537;
})();
if(cljs.core.truth_(inst_12516)){
var statearr_12538_15144 = state_12532__$1;
(statearr_12538_15144[(1)] = (5));

} else {
var statearr_12539_15145 = state_12532__$1;
(statearr_12539_15145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (6))){
var inst_12515 = (state_12532[(8)]);
var inst_12512 = (state_12532[(7)]);
var inst_12519 = (state_12532[(9)]);
var inst_12519__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12512,inst_12515) : f.call(null,inst_12512,inst_12515));
var inst_12520 = cljs.core.reduced_QMARK_(inst_12519__$1);
var state_12532__$1 = (function (){var statearr_12540 = state_12532;
(statearr_12540[(9)] = inst_12519__$1);

return statearr_12540;
})();
if(inst_12520){
var statearr_12541_15146 = state_12532__$1;
(statearr_12541_15146[(1)] = (8));

} else {
var statearr_12542_15147 = state_12532__$1;
(statearr_12542_15147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (3))){
var inst_12530 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12532__$1,inst_12530);
} else {
if((state_val_12533 === (2))){
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12532__$1,(4),ch);
} else {
if((state_val_12533 === (9))){
var inst_12519 = (state_12532[(9)]);
var inst_12512 = inst_12519;
var state_12532__$1 = (function (){var statearr_12543 = state_12532;
(statearr_12543[(7)] = inst_12512);

return statearr_12543;
})();
var statearr_12544_15148 = state_12532__$1;
(statearr_12544_15148[(2)] = null);

(statearr_12544_15148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (5))){
var inst_12512 = (state_12532[(7)]);
var state_12532__$1 = state_12532;
var statearr_12545_15149 = state_12532__$1;
(statearr_12545_15149[(2)] = inst_12512);

(statearr_12545_15149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (10))){
var inst_12526 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12546_15150 = state_12532__$1;
(statearr_12546_15150[(2)] = inst_12526);

(statearr_12546_15150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (8))){
var inst_12519 = (state_12532[(9)]);
var inst_12522 = cljs.core.deref(inst_12519);
var state_12532__$1 = state_12532;
var statearr_12547_15151 = state_12532__$1;
(statearr_12547_15151[(2)] = inst_12522);

(statearr_12547_15151[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12548 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12548[(0)] = cljs$core$async$reduce_$_state_machine__12072__auto__);

(statearr_12548[(1)] = (1));

return statearr_12548;
});
var cljs$core$async$reduce_$_state_machine__12072__auto____1 = (function (state_12532){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12532);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12549){var ex__12075__auto__ = e12549;
var statearr_12550_15153 = state_12532;
(statearr_12550_15153[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12532[(4)]))){
var statearr_12552_15154 = state_12532;
(statearr_12552_15154[(1)] = cljs.core.first((state_12532[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15155 = state_12532;
state_12532 = G__15155;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12072__auto__ = function(state_12532){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12072__auto____1.call(this,state_12532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12072__auto____0;
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12072__auto____1;
return cljs$core$async$reduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12557 = f__12108__auto__();
(statearr_12557[(6)] = c__12107__auto__);

return statearr_12557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12566){
var state_val_12567 = (state_12566[(1)]);
if((state_val_12567 === (1))){
var inst_12561 = cljs.core.async.reduce(f__$1,init,ch);
var state_12566__$1 = state_12566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12566__$1,(2),inst_12561);
} else {
if((state_val_12567 === (2))){
var inst_12563 = (state_12566[(2)]);
var inst_12564 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12563) : f__$1.call(null,inst_12563));
var state_12566__$1 = state_12566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12566__$1,inst_12564);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12569 = [null,null,null,null,null,null,null];
(statearr_12569[(0)] = cljs$core$async$transduce_$_state_machine__12072__auto__);

(statearr_12569[(1)] = (1));

return statearr_12569;
});
var cljs$core$async$transduce_$_state_machine__12072__auto____1 = (function (state_12566){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12566);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12570){var ex__12075__auto__ = e12570;
var statearr_12571_15163 = state_12566;
(statearr_12571_15163[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12566[(4)]))){
var statearr_12572_15165 = state_12566;
(statearr_12572_15165[(1)] = cljs.core.first((state_12566[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15166 = state_12566;
state_12566 = G__15166;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12072__auto__ = function(state_12566){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12072__auto____1.call(this,state_12566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12072__auto____0;
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12072__auto____1;
return cljs$core$async$transduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12573 = f__12108__auto__();
(statearr_12573[(6)] = c__12107__auto__);

return statearr_12573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
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
var G__12578 = arguments.length;
switch (G__12578) {
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
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12604){
var state_val_12605 = (state_12604[(1)]);
if((state_val_12605 === (7))){
var inst_12585 = (state_12604[(2)]);
var state_12604__$1 = state_12604;
var statearr_12606_15176 = state_12604__$1;
(statearr_12606_15176[(2)] = inst_12585);

(statearr_12606_15176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (1))){
var inst_12579 = cljs.core.seq(coll);
var inst_12580 = inst_12579;
var state_12604__$1 = (function (){var statearr_12607 = state_12604;
(statearr_12607[(7)] = inst_12580);

return statearr_12607;
})();
var statearr_12608_15178 = state_12604__$1;
(statearr_12608_15178[(2)] = null);

(statearr_12608_15178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (4))){
var inst_12580 = (state_12604[(7)]);
var inst_12583 = cljs.core.first(inst_12580);
var state_12604__$1 = state_12604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12604__$1,(7),ch,inst_12583);
} else {
if((state_val_12605 === (13))){
var inst_12598 = (state_12604[(2)]);
var state_12604__$1 = state_12604;
var statearr_12610_15183 = state_12604__$1;
(statearr_12610_15183[(2)] = inst_12598);

(statearr_12610_15183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (6))){
var inst_12588 = (state_12604[(2)]);
var state_12604__$1 = state_12604;
if(cljs.core.truth_(inst_12588)){
var statearr_12611_15184 = state_12604__$1;
(statearr_12611_15184[(1)] = (8));

} else {
var statearr_12612_15185 = state_12604__$1;
(statearr_12612_15185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (3))){
var inst_12602 = (state_12604[(2)]);
var state_12604__$1 = state_12604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12604__$1,inst_12602);
} else {
if((state_val_12605 === (12))){
var state_12604__$1 = state_12604;
var statearr_12614_15186 = state_12604__$1;
(statearr_12614_15186[(2)] = null);

(statearr_12614_15186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (2))){
var inst_12580 = (state_12604[(7)]);
var state_12604__$1 = state_12604;
if(cljs.core.truth_(inst_12580)){
var statearr_12615_15187 = state_12604__$1;
(statearr_12615_15187[(1)] = (4));

} else {
var statearr_12617_15188 = state_12604__$1;
(statearr_12617_15188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (11))){
var inst_12595 = cljs.core.async.close_BANG_(ch);
var state_12604__$1 = state_12604;
var statearr_12622_15189 = state_12604__$1;
(statearr_12622_15189[(2)] = inst_12595);

(statearr_12622_15189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (9))){
var state_12604__$1 = state_12604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12623_15190 = state_12604__$1;
(statearr_12623_15190[(1)] = (11));

} else {
var statearr_12624_15191 = state_12604__$1;
(statearr_12624_15191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (5))){
var inst_12580 = (state_12604[(7)]);
var state_12604__$1 = state_12604;
var statearr_12625_15192 = state_12604__$1;
(statearr_12625_15192[(2)] = inst_12580);

(statearr_12625_15192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (10))){
var inst_12600 = (state_12604[(2)]);
var state_12604__$1 = state_12604;
var statearr_12626_15193 = state_12604__$1;
(statearr_12626_15193[(2)] = inst_12600);

(statearr_12626_15193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12605 === (8))){
var inst_12580 = (state_12604[(7)]);
var inst_12590 = cljs.core.next(inst_12580);
var inst_12580__$1 = inst_12590;
var state_12604__$1 = (function (){var statearr_12627 = state_12604;
(statearr_12627[(7)] = inst_12580__$1);

return statearr_12627;
})();
var statearr_12628_15194 = state_12604__$1;
(statearr_12628_15194[(2)] = null);

(statearr_12628_15194[(1)] = (2));


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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_12629 = [null,null,null,null,null,null,null,null];
(statearr_12629[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12629[(1)] = (1));

return statearr_12629;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12604){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12604);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12630){var ex__12075__auto__ = e12630;
var statearr_12631_15195 = state_12604;
(statearr_12631_15195[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12604[(4)]))){
var statearr_12632_15196 = state_12604;
(statearr_12632_15196[(1)] = cljs.core.first((state_12604[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15197 = state_12604;
state_12604 = G__15197;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12633 = f__12108__auto__();
(statearr_12633[(6)] = c__12107__auto__);

return statearr_12633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
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
var G__12635 = arguments.length;
switch (G__12635) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_15199 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_15199(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15203 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_15203(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15205 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_15205(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15210 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_15210(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12661 = (function (ch,cs,meta12662){
this.ch = ch;
this.cs = cs;
this.meta12662 = meta12662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12663,meta12662__$1){
var self__ = this;
var _12663__$1 = this;
return (new cljs.core.async.t_cljs$core$async12661(self__.ch,self__.cs,meta12662__$1));
}));

(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12663){
var self__ = this;
var _12663__$1 = this;
return self__.meta12662;
}));

(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12661.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12662","meta12662",-681942548,null)], null);
}));

(cljs.core.async.t_cljs$core$async12661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12661");

(cljs.core.async.t_cljs$core$async12661.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12661.
 */
cljs.core.async.__GT_t_cljs$core$async12661 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12661(ch__$1,cs__$1,meta12662){
return (new cljs.core.async.t_cljs$core$async12661(ch__$1,cs__$1,meta12662));
});

}

return (new cljs.core.async.t_cljs$core$async12661(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___15221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12923){
var state_val_12924 = (state_12923[(1)]);
if((state_val_12924 === (7))){
var inst_12919 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_12925_15224 = state_12923__$1;
(statearr_12925_15224[(2)] = inst_12919);

(statearr_12925_15224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (20))){
var inst_12700 = (state_12923[(7)]);
var inst_12765 = cljs.core.first(inst_12700);
var inst_12766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12765,(0),null);
var inst_12769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12765,(1),null);
var state_12923__$1 = (function (){var statearr_12928 = state_12923;
(statearr_12928[(8)] = inst_12766);

return statearr_12928;
})();
if(cljs.core.truth_(inst_12769)){
var statearr_12929_15225 = state_12923__$1;
(statearr_12929_15225[(1)] = (22));

} else {
var statearr_12932_15226 = state_12923__$1;
(statearr_12932_15226[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (27))){
var inst_12669 = (state_12923[(9)]);
var inst_12813 = (state_12923[(10)]);
var inst_12800 = (state_12923[(11)]);
var inst_12802 = (state_12923[(12)]);
var inst_12813__$1 = cljs.core._nth(inst_12800,inst_12802);
var inst_12815 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12813__$1,inst_12669,done);
var state_12923__$1 = (function (){var statearr_12997 = state_12923;
(statearr_12997[(10)] = inst_12813__$1);

return statearr_12997;
})();
if(cljs.core.truth_(inst_12815)){
var statearr_12999_15227 = state_12923__$1;
(statearr_12999_15227[(1)] = (30));

} else {
var statearr_13001_15228 = state_12923__$1;
(statearr_13001_15228[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (1))){
var state_12923__$1 = state_12923;
var statearr_13006_15229 = state_12923__$1;
(statearr_13006_15229[(2)] = null);

(statearr_13006_15229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (24))){
var inst_12700 = (state_12923[(7)]);
var inst_12774 = (state_12923[(2)]);
var inst_12775 = cljs.core.next(inst_12700);
var inst_12678 = inst_12775;
var inst_12679 = null;
var inst_12680 = (0);
var inst_12681 = (0);
var state_12923__$1 = (function (){var statearr_13013 = state_12923;
(statearr_13013[(13)] = inst_12678);

(statearr_13013[(14)] = inst_12679);

(statearr_13013[(15)] = inst_12681);

(statearr_13013[(16)] = inst_12680);

(statearr_13013[(17)] = inst_12774);

return statearr_13013;
})();
var statearr_13017_15230 = state_12923__$1;
(statearr_13017_15230[(2)] = null);

(statearr_13017_15230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (39))){
var state_12923__$1 = state_12923;
var statearr_13029_15231 = state_12923__$1;
(statearr_13029_15231[(2)] = null);

(statearr_13029_15231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (4))){
var inst_12669 = (state_12923[(9)]);
var inst_12669__$1 = (state_12923[(2)]);
var inst_12670 = (inst_12669__$1 == null);
var state_12923__$1 = (function (){var statearr_13035 = state_12923;
(statearr_13035[(9)] = inst_12669__$1);

return statearr_13035;
})();
if(cljs.core.truth_(inst_12670)){
var statearr_13038_15232 = state_12923__$1;
(statearr_13038_15232[(1)] = (5));

} else {
var statearr_13041_15233 = state_12923__$1;
(statearr_13041_15233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (15))){
var inst_12678 = (state_12923[(13)]);
var inst_12679 = (state_12923[(14)]);
var inst_12681 = (state_12923[(15)]);
var inst_12680 = (state_12923[(16)]);
var inst_12696 = (state_12923[(2)]);
var inst_12697 = (inst_12681 + (1));
var tmp13021 = inst_12678;
var tmp13022 = inst_12679;
var tmp13023 = inst_12680;
var inst_12678__$1 = tmp13021;
var inst_12679__$1 = tmp13022;
var inst_12680__$1 = tmp13023;
var inst_12681__$1 = inst_12697;
var state_12923__$1 = (function (){var statearr_13049 = state_12923;
(statearr_13049[(13)] = inst_12678__$1);

(statearr_13049[(14)] = inst_12679__$1);

(statearr_13049[(15)] = inst_12681__$1);

(statearr_13049[(18)] = inst_12696);

(statearr_13049[(16)] = inst_12680__$1);

return statearr_13049;
})();
var statearr_13055_15234 = state_12923__$1;
(statearr_13055_15234[(2)] = null);

(statearr_13055_15234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (21))){
var inst_12778 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13064_15235 = state_12923__$1;
(statearr_13064_15235[(2)] = inst_12778);

(statearr_13064_15235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (31))){
var inst_12813 = (state_12923[(10)]);
var inst_12818 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12813);
var state_12923__$1 = state_12923;
var statearr_13072_15236 = state_12923__$1;
(statearr_13072_15236[(2)] = inst_12818);

(statearr_13072_15236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (32))){
var inst_12799 = (state_12923[(19)]);
var inst_12801 = (state_12923[(20)]);
var inst_12800 = (state_12923[(11)]);
var inst_12802 = (state_12923[(12)]);
var inst_12820 = (state_12923[(2)]);
var inst_12821 = (inst_12802 + (1));
var tmp13060 = inst_12799;
var tmp13061 = inst_12801;
var tmp13062 = inst_12800;
var inst_12799__$1 = tmp13060;
var inst_12800__$1 = tmp13062;
var inst_12801__$1 = tmp13061;
var inst_12802__$1 = inst_12821;
var state_12923__$1 = (function (){var statearr_13104 = state_12923;
(statearr_13104[(19)] = inst_12799__$1);

(statearr_13104[(21)] = inst_12820);

(statearr_13104[(20)] = inst_12801__$1);

(statearr_13104[(11)] = inst_12800__$1);

(statearr_13104[(12)] = inst_12802__$1);

return statearr_13104;
})();
var statearr_13105_15237 = state_12923__$1;
(statearr_13105_15237[(2)] = null);

(statearr_13105_15237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (40))){
var inst_12890 = (state_12923[(22)]);
var inst_12895 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12890);
var state_12923__$1 = state_12923;
var statearr_13106_15238 = state_12923__$1;
(statearr_13106_15238[(2)] = inst_12895);

(statearr_13106_15238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (33))){
var inst_12824 = (state_12923[(23)]);
var inst_12826 = cljs.core.chunked_seq_QMARK_(inst_12824);
var state_12923__$1 = state_12923;
if(inst_12826){
var statearr_13107_15242 = state_12923__$1;
(statearr_13107_15242[(1)] = (36));

} else {
var statearr_13108_15243 = state_12923__$1;
(statearr_13108_15243[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (13))){
var inst_12690 = (state_12923[(24)]);
var inst_12693 = cljs.core.async.close_BANG_(inst_12690);
var state_12923__$1 = state_12923;
var statearr_13109_15249 = state_12923__$1;
(statearr_13109_15249[(2)] = inst_12693);

(statearr_13109_15249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (22))){
var inst_12766 = (state_12923[(8)]);
var inst_12771 = cljs.core.async.close_BANG_(inst_12766);
var state_12923__$1 = state_12923;
var statearr_13110_15252 = state_12923__$1;
(statearr_13110_15252[(2)] = inst_12771);

(statearr_13110_15252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (36))){
var inst_12824 = (state_12923[(23)]);
var inst_12828 = cljs.core.chunk_first(inst_12824);
var inst_12829 = cljs.core.chunk_rest(inst_12824);
var inst_12830 = cljs.core.count(inst_12828);
var inst_12799 = inst_12829;
var inst_12800 = inst_12828;
var inst_12801 = inst_12830;
var inst_12802 = (0);
var state_12923__$1 = (function (){var statearr_13111 = state_12923;
(statearr_13111[(19)] = inst_12799);

(statearr_13111[(20)] = inst_12801);

(statearr_13111[(11)] = inst_12800);

(statearr_13111[(12)] = inst_12802);

return statearr_13111;
})();
var statearr_13112_15255 = state_12923__$1;
(statearr_13112_15255[(2)] = null);

(statearr_13112_15255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (41))){
var inst_12824 = (state_12923[(23)]);
var inst_12897 = (state_12923[(2)]);
var inst_12899 = cljs.core.next(inst_12824);
var inst_12799 = inst_12899;
var inst_12800 = null;
var inst_12801 = (0);
var inst_12802 = (0);
var state_12923__$1 = (function (){var statearr_13113 = state_12923;
(statearr_13113[(25)] = inst_12897);

(statearr_13113[(19)] = inst_12799);

(statearr_13113[(20)] = inst_12801);

(statearr_13113[(11)] = inst_12800);

(statearr_13113[(12)] = inst_12802);

return statearr_13113;
})();
var statearr_13114_15263 = state_12923__$1;
(statearr_13114_15263[(2)] = null);

(statearr_13114_15263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (43))){
var state_12923__$1 = state_12923;
var statearr_13115_15268 = state_12923__$1;
(statearr_13115_15268[(2)] = null);

(statearr_13115_15268[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (29))){
var inst_12907 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13116_15270 = state_12923__$1;
(statearr_13116_15270[(2)] = inst_12907);

(statearr_13116_15270[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (44))){
var inst_12916 = (state_12923[(2)]);
var state_12923__$1 = (function (){var statearr_13160 = state_12923;
(statearr_13160[(26)] = inst_12916);

return statearr_13160;
})();
var statearr_13161_15272 = state_12923__$1;
(statearr_13161_15272[(2)] = null);

(statearr_13161_15272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (6))){
var inst_12790 = (state_12923[(27)]);
var inst_12789 = cljs.core.deref(cs);
var inst_12790__$1 = cljs.core.keys(inst_12789);
var inst_12791 = cljs.core.count(inst_12790__$1);
var inst_12792 = cljs.core.reset_BANG_(dctr,inst_12791);
var inst_12797 = cljs.core.seq(inst_12790__$1);
var inst_12799 = inst_12797;
var inst_12800 = null;
var inst_12801 = (0);
var inst_12802 = (0);
var state_12923__$1 = (function (){var statearr_13162 = state_12923;
(statearr_13162[(19)] = inst_12799);

(statearr_13162[(28)] = inst_12792);

(statearr_13162[(27)] = inst_12790__$1);

(statearr_13162[(20)] = inst_12801);

(statearr_13162[(11)] = inst_12800);

(statearr_13162[(12)] = inst_12802);

return statearr_13162;
})();
var statearr_13163_15279 = state_12923__$1;
(statearr_13163_15279[(2)] = null);

(statearr_13163_15279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (28))){
var inst_12799 = (state_12923[(19)]);
var inst_12824 = (state_12923[(23)]);
var inst_12824__$1 = cljs.core.seq(inst_12799);
var state_12923__$1 = (function (){var statearr_13164 = state_12923;
(statearr_13164[(23)] = inst_12824__$1);

return statearr_13164;
})();
if(inst_12824__$1){
var statearr_13165_15286 = state_12923__$1;
(statearr_13165_15286[(1)] = (33));

} else {
var statearr_13166_15288 = state_12923__$1;
(statearr_13166_15288[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (25))){
var inst_12801 = (state_12923[(20)]);
var inst_12802 = (state_12923[(12)]);
var inst_12808 = (inst_12802 < inst_12801);
var inst_12809 = inst_12808;
var state_12923__$1 = state_12923;
if(cljs.core.truth_(inst_12809)){
var statearr_13167_15290 = state_12923__$1;
(statearr_13167_15290[(1)] = (27));

} else {
var statearr_13168_15291 = state_12923__$1;
(statearr_13168_15291[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (34))){
var state_12923__$1 = state_12923;
var statearr_13169_15293 = state_12923__$1;
(statearr_13169_15293[(2)] = null);

(statearr_13169_15293[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (17))){
var state_12923__$1 = state_12923;
var statearr_13170_15294 = state_12923__$1;
(statearr_13170_15294[(2)] = null);

(statearr_13170_15294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (3))){
var inst_12921 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12923__$1,inst_12921);
} else {
if((state_val_12924 === (12))){
var inst_12783 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13171_15301 = state_12923__$1;
(statearr_13171_15301[(2)] = inst_12783);

(statearr_13171_15301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (2))){
var state_12923__$1 = state_12923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12923__$1,(4),ch);
} else {
if((state_val_12924 === (23))){
var state_12923__$1 = state_12923;
var statearr_13172_15302 = state_12923__$1;
(statearr_13172_15302[(2)] = null);

(statearr_13172_15302[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (35))){
var inst_12905 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13173_15303 = state_12923__$1;
(statearr_13173_15303[(2)] = inst_12905);

(statearr_13173_15303[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (19))){
var inst_12700 = (state_12923[(7)]);
var inst_12757 = cljs.core.chunk_first(inst_12700);
var inst_12758 = cljs.core.chunk_rest(inst_12700);
var inst_12759 = cljs.core.count(inst_12757);
var inst_12678 = inst_12758;
var inst_12679 = inst_12757;
var inst_12680 = inst_12759;
var inst_12681 = (0);
var state_12923__$1 = (function (){var statearr_13174 = state_12923;
(statearr_13174[(13)] = inst_12678);

(statearr_13174[(14)] = inst_12679);

(statearr_13174[(15)] = inst_12681);

(statearr_13174[(16)] = inst_12680);

return statearr_13174;
})();
var statearr_13175_15304 = state_12923__$1;
(statearr_13175_15304[(2)] = null);

(statearr_13175_15304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (11))){
var inst_12700 = (state_12923[(7)]);
var inst_12678 = (state_12923[(13)]);
var inst_12700__$1 = cljs.core.seq(inst_12678);
var state_12923__$1 = (function (){var statearr_13176 = state_12923;
(statearr_13176[(7)] = inst_12700__$1);

return statearr_13176;
})();
if(inst_12700__$1){
var statearr_13177_15305 = state_12923__$1;
(statearr_13177_15305[(1)] = (16));

} else {
var statearr_13178_15306 = state_12923__$1;
(statearr_13178_15306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (9))){
var inst_12785 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13179_15307 = state_12923__$1;
(statearr_13179_15307[(2)] = inst_12785);

(statearr_13179_15307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (5))){
var inst_12676 = cljs.core.deref(cs);
var inst_12677 = cljs.core.seq(inst_12676);
var inst_12678 = inst_12677;
var inst_12679 = null;
var inst_12680 = (0);
var inst_12681 = (0);
var state_12923__$1 = (function (){var statearr_13180 = state_12923;
(statearr_13180[(13)] = inst_12678);

(statearr_13180[(14)] = inst_12679);

(statearr_13180[(15)] = inst_12681);

(statearr_13180[(16)] = inst_12680);

return statearr_13180;
})();
var statearr_13181_15308 = state_12923__$1;
(statearr_13181_15308[(2)] = null);

(statearr_13181_15308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (14))){
var state_12923__$1 = state_12923;
var statearr_13184_15309 = state_12923__$1;
(statearr_13184_15309[(2)] = null);

(statearr_13184_15309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (45))){
var inst_12913 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13187_15310 = state_12923__$1;
(statearr_13187_15310[(2)] = inst_12913);

(statearr_13187_15310[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (26))){
var inst_12790 = (state_12923[(27)]);
var inst_12909 = (state_12923[(2)]);
var inst_12910 = cljs.core.seq(inst_12790);
var state_12923__$1 = (function (){var statearr_13207 = state_12923;
(statearr_13207[(29)] = inst_12909);

return statearr_13207;
})();
if(inst_12910){
var statearr_13210_15311 = state_12923__$1;
(statearr_13210_15311[(1)] = (42));

} else {
var statearr_13211_15312 = state_12923__$1;
(statearr_13211_15312[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (16))){
var inst_12700 = (state_12923[(7)]);
var inst_12755 = cljs.core.chunked_seq_QMARK_(inst_12700);
var state_12923__$1 = state_12923;
if(inst_12755){
var statearr_13212_15313 = state_12923__$1;
(statearr_13212_15313[(1)] = (19));

} else {
var statearr_13215_15314 = state_12923__$1;
(statearr_13215_15314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (38))){
var inst_12902 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13218_15315 = state_12923__$1;
(statearr_13218_15315[(2)] = inst_12902);

(statearr_13218_15315[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (30))){
var state_12923__$1 = state_12923;
var statearr_13219_15316 = state_12923__$1;
(statearr_13219_15316[(2)] = null);

(statearr_13219_15316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (10))){
var inst_12679 = (state_12923[(14)]);
var inst_12681 = (state_12923[(15)]);
var inst_12689 = cljs.core._nth(inst_12679,inst_12681);
var inst_12690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12689,(0),null);
var inst_12691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12689,(1),null);
var state_12923__$1 = (function (){var statearr_13221 = state_12923;
(statearr_13221[(24)] = inst_12690);

return statearr_13221;
})();
if(cljs.core.truth_(inst_12691)){
var statearr_13224_15317 = state_12923__$1;
(statearr_13224_15317[(1)] = (13));

} else {
var statearr_13226_15318 = state_12923__$1;
(statearr_13226_15318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (18))){
var inst_12781 = (state_12923[(2)]);
var state_12923__$1 = state_12923;
var statearr_13230_15319 = state_12923__$1;
(statearr_13230_15319[(2)] = inst_12781);

(statearr_13230_15319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (42))){
var state_12923__$1 = state_12923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12923__$1,(45),dchan);
} else {
if((state_val_12924 === (37))){
var inst_12669 = (state_12923[(9)]);
var inst_12824 = (state_12923[(23)]);
var inst_12890 = (state_12923[(22)]);
var inst_12890__$1 = cljs.core.first(inst_12824);
var inst_12892 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12890__$1,inst_12669,done);
var state_12923__$1 = (function (){var statearr_13241 = state_12923;
(statearr_13241[(22)] = inst_12890__$1);

return statearr_13241;
})();
if(cljs.core.truth_(inst_12892)){
var statearr_13242_15321 = state_12923__$1;
(statearr_13242_15321[(1)] = (39));

} else {
var statearr_13243_15322 = state_12923__$1;
(statearr_13243_15322[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12924 === (8))){
var inst_12681 = (state_12923[(15)]);
var inst_12680 = (state_12923[(16)]);
var inst_12683 = (inst_12681 < inst_12680);
var inst_12684 = inst_12683;
var state_12923__$1 = state_12923;
if(cljs.core.truth_(inst_12684)){
var statearr_13244_15324 = state_12923__$1;
(statearr_13244_15324[(1)] = (10));

} else {
var statearr_13245_15325 = state_12923__$1;
(statearr_13245_15325[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__12072__auto__ = null;
var cljs$core$async$mult_$_state_machine__12072__auto____0 = (function (){
var statearr_13246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13246[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_13246[(1)] = (1));

return statearr_13246;
});
var cljs$core$async$mult_$_state_machine__12072__auto____1 = (function (state_12923){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12923);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13247){var ex__12075__auto__ = e13247;
var statearr_13248_15333 = state_12923;
(statearr_13248_15333[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12923[(4)]))){
var statearr_13249_15335 = state_12923;
(statearr_13249_15335[(1)] = cljs.core.first((state_12923[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15336 = state_12923;
state_12923 = G__15336;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12072__auto__ = function(state_12923){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12072__auto____1.call(this,state_12923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12072__auto____0;
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12072__auto____1;
return cljs$core$async$mult_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13250 = f__12108__auto__();
(statearr_13250[(6)] = c__12107__auto___15221);

return statearr_13250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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
var G__13252 = arguments.length;
switch (G__13252) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_15351 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_15351(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15355 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_15355(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15363 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15363(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15365 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_15365(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15366 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15366(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15367 = arguments.length;
var i__4737__auto___15368 = (0);
while(true){
if((i__4737__auto___15368 < len__4736__auto___15367)){
args__4742__auto__.push((arguments[i__4737__auto___15368]));

var G__15369 = (i__4737__auto___15368 + (1));
i__4737__auto___15368 = G__15369;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13365){
var map__13367 = p__13365;
var map__13367__$1 = (((((!((map__13367 == null))))?(((((map__13367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13367):map__13367);
var opts = map__13367__$1;
var statearr_13370_15370 = state;
(statearr_13370_15370[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13371_15371 = state;
(statearr_13371_15371[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_13373_15372 = state;
(statearr_13373_15372[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13350){
var G__13351 = cljs.core.first(seq13350);
var seq13350__$1 = cljs.core.next(seq13350);
var G__13352 = cljs.core.first(seq13350__$1);
var seq13350__$2 = cljs.core.next(seq13350__$1);
var G__13353 = cljs.core.first(seq13350__$2);
var seq13350__$3 = cljs.core.next(seq13350__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13351,G__13352,G__13353,seq13350__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13423 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13424){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13424 = meta13424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13425,meta13424__$1){
var self__ = this;
var _13425__$1 = this;
return (new cljs.core.async.t_cljs$core$async13423(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13424__$1));
}));

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13425){
var self__ = this;
var _13425__$1 = this;
return self__.meta13424;
}));

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13423.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13424","meta13424",-458366413,null)], null);
}));

(cljs.core.async.t_cljs$core$async13423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13423");

(cljs.core.async.t_cljs$core$async13423.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13423.
 */
cljs.core.async.__GT_t_cljs$core$async13423 = (function cljs$core$async$mix_$___GT_t_cljs$core$async13423(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13424){
return (new cljs.core.async.t_cljs$core$async13423(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13424));
});

}

return (new cljs.core.async.t_cljs$core$async13423(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___15408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13551){
var state_val_13552 = (state_13551[(1)]);
if((state_val_13552 === (7))){
var inst_13454 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
var statearr_13553_15410 = state_13551__$1;
(statearr_13553_15410[(2)] = inst_13454);

(statearr_13553_15410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (20))){
var inst_13468 = (state_13551[(7)]);
var state_13551__$1 = state_13551;
var statearr_13554_15415 = state_13551__$1;
(statearr_13554_15415[(2)] = inst_13468);

(statearr_13554_15415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (27))){
var state_13551__$1 = state_13551;
var statearr_13555_15418 = state_13551__$1;
(statearr_13555_15418[(2)] = null);

(statearr_13555_15418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (1))){
var inst_13440 = (state_13551[(8)]);
var inst_13440__$1 = calc_state();
var inst_13443 = (inst_13440__$1 == null);
var inst_13444 = cljs.core.not(inst_13443);
var state_13551__$1 = (function (){var statearr_13556 = state_13551;
(statearr_13556[(8)] = inst_13440__$1);

return statearr_13556;
})();
if(inst_13444){
var statearr_13557_15420 = state_13551__$1;
(statearr_13557_15420[(1)] = (2));

} else {
var statearr_13558_15421 = state_13551__$1;
(statearr_13558_15421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (24))){
var inst_13507 = (state_13551[(9)]);
var inst_13494 = (state_13551[(10)]);
var inst_13525 = (state_13551[(11)]);
var inst_13525__$1 = (inst_13494.cljs$core$IFn$_invoke$arity$1 ? inst_13494.cljs$core$IFn$_invoke$arity$1(inst_13507) : inst_13494.call(null,inst_13507));
var state_13551__$1 = (function (){var statearr_13559 = state_13551;
(statearr_13559[(11)] = inst_13525__$1);

return statearr_13559;
})();
if(cljs.core.truth_(inst_13525__$1)){
var statearr_13560_15422 = state_13551__$1;
(statearr_13560_15422[(1)] = (29));

} else {
var statearr_13561_15423 = state_13551__$1;
(statearr_13561_15423[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (4))){
var inst_13457 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
if(cljs.core.truth_(inst_13457)){
var statearr_13564_15424 = state_13551__$1;
(statearr_13564_15424[(1)] = (8));

} else {
var statearr_13565_15425 = state_13551__$1;
(statearr_13565_15425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (15))){
var inst_13487 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
if(cljs.core.truth_(inst_13487)){
var statearr_13567_15426 = state_13551__$1;
(statearr_13567_15426[(1)] = (19));

} else {
var statearr_13568_15427 = state_13551__$1;
(statearr_13568_15427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (21))){
var inst_13492 = (state_13551[(12)]);
var inst_13492__$1 = (state_13551[(2)]);
var inst_13494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13492__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13492__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13492__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13551__$1 = (function (){var statearr_13573 = state_13551;
(statearr_13573[(12)] = inst_13492__$1);

(statearr_13573[(10)] = inst_13494);

(statearr_13573[(13)] = inst_13495);

return statearr_13573;
})();
return cljs.core.async.ioc_alts_BANG_(state_13551__$1,(22),inst_13496);
} else {
if((state_val_13552 === (31))){
var inst_13533 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
if(cljs.core.truth_(inst_13533)){
var statearr_13574_15428 = state_13551__$1;
(statearr_13574_15428[(1)] = (32));

} else {
var statearr_13575_15429 = state_13551__$1;
(statearr_13575_15429[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (32))){
var inst_13506 = (state_13551[(14)]);
var state_13551__$1 = state_13551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13551__$1,(35),out,inst_13506);
} else {
if((state_val_13552 === (33))){
var inst_13492 = (state_13551[(12)]);
var inst_13468 = inst_13492;
var state_13551__$1 = (function (){var statearr_13585 = state_13551;
(statearr_13585[(7)] = inst_13468);

return statearr_13585;
})();
var statearr_13587_15430 = state_13551__$1;
(statearr_13587_15430[(2)] = null);

(statearr_13587_15430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (13))){
var inst_13468 = (state_13551[(7)]);
var inst_13476 = inst_13468.cljs$lang$protocol_mask$partition0$;
var inst_13477 = (inst_13476 & (64));
var inst_13478 = inst_13468.cljs$core$ISeq$;
var inst_13479 = (cljs.core.PROTOCOL_SENTINEL === inst_13478);
var inst_13480 = ((inst_13477) || (inst_13479));
var state_13551__$1 = state_13551;
if(cljs.core.truth_(inst_13480)){
var statearr_13590_15431 = state_13551__$1;
(statearr_13590_15431[(1)] = (16));

} else {
var statearr_13591_15432 = state_13551__$1;
(statearr_13591_15432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (22))){
var inst_13507 = (state_13551[(9)]);
var inst_13506 = (state_13551[(14)]);
var inst_13505 = (state_13551[(2)]);
var inst_13506__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13505,(0),null);
var inst_13507__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13505,(1),null);
var inst_13510 = (inst_13506__$1 == null);
var inst_13511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13507__$1,change);
var inst_13512 = ((inst_13510) || (inst_13511));
var state_13551__$1 = (function (){var statearr_13592 = state_13551;
(statearr_13592[(9)] = inst_13507__$1);

(statearr_13592[(14)] = inst_13506__$1);

return statearr_13592;
})();
if(cljs.core.truth_(inst_13512)){
var statearr_13593_15433 = state_13551__$1;
(statearr_13593_15433[(1)] = (23));

} else {
var statearr_13594_15434 = state_13551__$1;
(statearr_13594_15434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (36))){
var inst_13492 = (state_13551[(12)]);
var inst_13468 = inst_13492;
var state_13551__$1 = (function (){var statearr_13595 = state_13551;
(statearr_13595[(7)] = inst_13468);

return statearr_13595;
})();
var statearr_13596_15435 = state_13551__$1;
(statearr_13596_15435[(2)] = null);

(statearr_13596_15435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (29))){
var inst_13525 = (state_13551[(11)]);
var state_13551__$1 = state_13551;
var statearr_13597_15436 = state_13551__$1;
(statearr_13597_15436[(2)] = inst_13525);

(statearr_13597_15436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (6))){
var state_13551__$1 = state_13551;
var statearr_13598_15437 = state_13551__$1;
(statearr_13598_15437[(2)] = false);

(statearr_13598_15437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (28))){
var inst_13521 = (state_13551[(2)]);
var inst_13522 = calc_state();
var inst_13468 = inst_13522;
var state_13551__$1 = (function (){var statearr_13600 = state_13551;
(statearr_13600[(15)] = inst_13521);

(statearr_13600[(7)] = inst_13468);

return statearr_13600;
})();
var statearr_13603_15438 = state_13551__$1;
(statearr_13603_15438[(2)] = null);

(statearr_13603_15438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (25))){
var inst_13547 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
var statearr_13605_15439 = state_13551__$1;
(statearr_13605_15439[(2)] = inst_13547);

(statearr_13605_15439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (34))){
var inst_13545 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
var statearr_13606_15441 = state_13551__$1;
(statearr_13606_15441[(2)] = inst_13545);

(statearr_13606_15441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (17))){
var state_13551__$1 = state_13551;
var statearr_13609_15442 = state_13551__$1;
(statearr_13609_15442[(2)] = false);

(statearr_13609_15442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (3))){
var state_13551__$1 = state_13551;
var statearr_13611_15448 = state_13551__$1;
(statearr_13611_15448[(2)] = false);

(statearr_13611_15448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (12))){
var inst_13549 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13551__$1,inst_13549);
} else {
if((state_val_13552 === (2))){
var inst_13440 = (state_13551[(8)]);
var inst_13446 = inst_13440.cljs$lang$protocol_mask$partition0$;
var inst_13447 = (inst_13446 & (64));
var inst_13448 = inst_13440.cljs$core$ISeq$;
var inst_13449 = (cljs.core.PROTOCOL_SENTINEL === inst_13448);
var inst_13450 = ((inst_13447) || (inst_13449));
var state_13551__$1 = state_13551;
if(cljs.core.truth_(inst_13450)){
var statearr_13616_15456 = state_13551__$1;
(statearr_13616_15456[(1)] = (5));

} else {
var statearr_13618_15457 = state_13551__$1;
(statearr_13618_15457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (23))){
var inst_13506 = (state_13551[(14)]);
var inst_13514 = (inst_13506 == null);
var state_13551__$1 = state_13551;
if(cljs.core.truth_(inst_13514)){
var statearr_13621_15459 = state_13551__$1;
(statearr_13621_15459[(1)] = (26));

} else {
var statearr_13622_15460 = state_13551__$1;
(statearr_13622_15460[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (35))){
var inst_13536 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
if(cljs.core.truth_(inst_13536)){
var statearr_13623_15465 = state_13551__$1;
(statearr_13623_15465[(1)] = (36));

} else {
var statearr_13626_15466 = state_13551__$1;
(statearr_13626_15466[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (19))){
var inst_13468 = (state_13551[(7)]);
var inst_13489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13468);
var state_13551__$1 = state_13551;
var statearr_13634_15470 = state_13551__$1;
(statearr_13634_15470[(2)] = inst_13489);

(statearr_13634_15470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (11))){
var inst_13468 = (state_13551[(7)]);
var inst_13473 = (inst_13468 == null);
var inst_13474 = cljs.core.not(inst_13473);
var state_13551__$1 = state_13551;
if(inst_13474){
var statearr_13635_15472 = state_13551__$1;
(statearr_13635_15472[(1)] = (13));

} else {
var statearr_13636_15474 = state_13551__$1;
(statearr_13636_15474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (9))){
var inst_13440 = (state_13551[(8)]);
var state_13551__$1 = state_13551;
var statearr_13637_15475 = state_13551__$1;
(statearr_13637_15475[(2)] = inst_13440);

(statearr_13637_15475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (5))){
var state_13551__$1 = state_13551;
var statearr_13638_15481 = state_13551__$1;
(statearr_13638_15481[(2)] = true);

(statearr_13638_15481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (14))){
var state_13551__$1 = state_13551;
var statearr_13639_15486 = state_13551__$1;
(statearr_13639_15486[(2)] = false);

(statearr_13639_15486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (26))){
var inst_13507 = (state_13551[(9)]);
var inst_13517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13507);
var state_13551__$1 = state_13551;
var statearr_13640_15489 = state_13551__$1;
(statearr_13640_15489[(2)] = inst_13517);

(statearr_13640_15489[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (16))){
var state_13551__$1 = state_13551;
var statearr_13641_15491 = state_13551__$1;
(statearr_13641_15491[(2)] = true);

(statearr_13641_15491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (38))){
var inst_13541 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
var statearr_13642_15493 = state_13551__$1;
(statearr_13642_15493[(2)] = inst_13541);

(statearr_13642_15493[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (30))){
var inst_13507 = (state_13551[(9)]);
var inst_13494 = (state_13551[(10)]);
var inst_13495 = (state_13551[(13)]);
var inst_13528 = cljs.core.empty_QMARK_(inst_13494);
var inst_13529 = (inst_13495.cljs$core$IFn$_invoke$arity$1 ? inst_13495.cljs$core$IFn$_invoke$arity$1(inst_13507) : inst_13495.call(null,inst_13507));
var inst_13530 = cljs.core.not(inst_13529);
var inst_13531 = ((inst_13528) && (inst_13530));
var state_13551__$1 = state_13551;
var statearr_13643_15499 = state_13551__$1;
(statearr_13643_15499[(2)] = inst_13531);

(statearr_13643_15499[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (10))){
var inst_13440 = (state_13551[(8)]);
var inst_13462 = (state_13551[(2)]);
var inst_13463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13462,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13462,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13462,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13468 = inst_13440;
var state_13551__$1 = (function (){var statearr_13644 = state_13551;
(statearr_13644[(16)] = inst_13465);

(statearr_13644[(17)] = inst_13463);

(statearr_13644[(7)] = inst_13468);

(statearr_13644[(18)] = inst_13466);

return statearr_13644;
})();
var statearr_13645_15504 = state_13551__$1;
(statearr_13645_15504[(2)] = null);

(statearr_13645_15504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (18))){
var inst_13484 = (state_13551[(2)]);
var state_13551__$1 = state_13551;
var statearr_13646_15505 = state_13551__$1;
(statearr_13646_15505[(2)] = inst_13484);

(statearr_13646_15505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (37))){
var state_13551__$1 = state_13551;
var statearr_13647_15506 = state_13551__$1;
(statearr_13647_15506[(2)] = null);

(statearr_13647_15506[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13552 === (8))){
var inst_13440 = (state_13551[(8)]);
var inst_13459 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13440);
var state_13551__$1 = state_13551;
var statearr_13648_15507 = state_13551__$1;
(statearr_13648_15507[(2)] = inst_13459);

(statearr_13648_15507[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__12072__auto__ = null;
var cljs$core$async$mix_$_state_machine__12072__auto____0 = (function (){
var statearr_13654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13654[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_13654[(1)] = (1));

return statearr_13654;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_13551){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13551);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13655){var ex__12075__auto__ = e13655;
var statearr_13656_15508 = state_13551;
(statearr_13656_15508[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13551[(4)]))){
var statearr_13657_15509 = state_13551;
(statearr_13657_15509[(1)] = cljs.core.first((state_13551[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15510 = state_13551;
state_13551 = G__15510;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_13551){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_13551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13662 = f__12108__auto__();
(statearr_13662[(6)] = c__12107__auto___15408);

return statearr_13662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_15511 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_15511(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_15512 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_15512(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_15513 = (function() {
var G__15514 = null;
var G__15514__1 = (function (p){
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
var G__15514__2 = (function (p,v){
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
G__15514 = function(p,v){
switch(arguments.length){
case 1:
return G__15514__1.call(this,p);
case 2:
return G__15514__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15514.cljs$core$IFn$_invoke$arity$1 = G__15514__1;
G__15514.cljs$core$IFn$_invoke$arity$2 = G__15514__2;
return G__15514;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13676 = arguments.length;
switch (G__13676) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15513(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15513(p,v);
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
var G__13691 = arguments.length;
switch (G__13691) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13689_SHARP_){
if(cljs.core.truth_((p1__13689_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13689_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13689_SHARP_.call(null,topic)))){
return p1__13689_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13689_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13692 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13693){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13693 = meta13693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13694,meta13693__$1){
var self__ = this;
var _13694__$1 = this;
return (new cljs.core.async.t_cljs$core$async13692(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13693__$1));
}));

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13694){
var self__ = this;
var _13694__$1 = this;
return self__.meta13693;
}));

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13692.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13693","meta13693",-1963212015,null)], null);
}));

(cljs.core.async.t_cljs$core$async13692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13692");

(cljs.core.async.t_cljs$core$async13692.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13692.
 */
cljs.core.async.__GT_t_cljs$core$async13692 = (function cljs$core$async$__GT_t_cljs$core$async13692(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13693){
return (new cljs.core.async.t_cljs$core$async13692(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13693));
});

}

return (new cljs.core.async.t_cljs$core$async13692(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___15550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13796){
var state_val_13797 = (state_13796[(1)]);
if((state_val_13797 === (7))){
var inst_13792 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13798_15551 = state_13796__$1;
(statearr_13798_15551[(2)] = inst_13792);

(statearr_13798_15551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (20))){
var state_13796__$1 = state_13796;
var statearr_13799_15554 = state_13796__$1;
(statearr_13799_15554[(2)] = null);

(statearr_13799_15554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (1))){
var state_13796__$1 = state_13796;
var statearr_13800_15555 = state_13796__$1;
(statearr_13800_15555[(2)] = null);

(statearr_13800_15555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (24))){
var inst_13775 = (state_13796[(7)]);
var inst_13784 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13775);
var state_13796__$1 = state_13796;
var statearr_13801_15556 = state_13796__$1;
(statearr_13801_15556[(2)] = inst_13784);

(statearr_13801_15556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (4))){
var inst_13712 = (state_13796[(8)]);
var inst_13712__$1 = (state_13796[(2)]);
var inst_13728 = (inst_13712__$1 == null);
var state_13796__$1 = (function (){var statearr_13802 = state_13796;
(statearr_13802[(8)] = inst_13712__$1);

return statearr_13802;
})();
if(cljs.core.truth_(inst_13728)){
var statearr_13803_15557 = state_13796__$1;
(statearr_13803_15557[(1)] = (5));

} else {
var statearr_13804_15558 = state_13796__$1;
(statearr_13804_15558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (15))){
var inst_13769 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13805_15559 = state_13796__$1;
(statearr_13805_15559[(2)] = inst_13769);

(statearr_13805_15559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (21))){
var inst_13789 = (state_13796[(2)]);
var state_13796__$1 = (function (){var statearr_13806 = state_13796;
(statearr_13806[(9)] = inst_13789);

return statearr_13806;
})();
var statearr_13807_15560 = state_13796__$1;
(statearr_13807_15560[(2)] = null);

(statearr_13807_15560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (13))){
var inst_13751 = (state_13796[(10)]);
var inst_13753 = cljs.core.chunked_seq_QMARK_(inst_13751);
var state_13796__$1 = state_13796;
if(inst_13753){
var statearr_13808_15561 = state_13796__$1;
(statearr_13808_15561[(1)] = (16));

} else {
var statearr_13809_15562 = state_13796__$1;
(statearr_13809_15562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (22))){
var inst_13781 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
if(cljs.core.truth_(inst_13781)){
var statearr_13812_15563 = state_13796__$1;
(statearr_13812_15563[(1)] = (23));

} else {
var statearr_13813_15564 = state_13796__$1;
(statearr_13813_15564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (6))){
var inst_13777 = (state_13796[(11)]);
var inst_13775 = (state_13796[(7)]);
var inst_13712 = (state_13796[(8)]);
var inst_13775__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13712) : topic_fn.call(null,inst_13712));
var inst_13776 = cljs.core.deref(mults);
var inst_13777__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13776,inst_13775__$1);
var state_13796__$1 = (function (){var statearr_13814 = state_13796;
(statearr_13814[(11)] = inst_13777__$1);

(statearr_13814[(7)] = inst_13775__$1);

return statearr_13814;
})();
if(cljs.core.truth_(inst_13777__$1)){
var statearr_13815_15565 = state_13796__$1;
(statearr_13815_15565[(1)] = (19));

} else {
var statearr_13816_15566 = state_13796__$1;
(statearr_13816_15566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (25))){
var inst_13786 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13817_15567 = state_13796__$1;
(statearr_13817_15567[(2)] = inst_13786);

(statearr_13817_15567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (17))){
var inst_13751 = (state_13796[(10)]);
var inst_13760 = cljs.core.first(inst_13751);
var inst_13761 = cljs.core.async.muxch_STAR_(inst_13760);
var inst_13762 = cljs.core.async.close_BANG_(inst_13761);
var inst_13763 = cljs.core.next(inst_13751);
var inst_13737 = inst_13763;
var inst_13738 = null;
var inst_13739 = (0);
var inst_13740 = (0);
var state_13796__$1 = (function (){var statearr_13818 = state_13796;
(statearr_13818[(12)] = inst_13737);

(statearr_13818[(13)] = inst_13738);

(statearr_13818[(14)] = inst_13762);

(statearr_13818[(15)] = inst_13740);

(statearr_13818[(16)] = inst_13739);

return statearr_13818;
})();
var statearr_13819_15568 = state_13796__$1;
(statearr_13819_15568[(2)] = null);

(statearr_13819_15568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (3))){
var inst_13794 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13796__$1,inst_13794);
} else {
if((state_val_13797 === (12))){
var inst_13771 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13824_15569 = state_13796__$1;
(statearr_13824_15569[(2)] = inst_13771);

(statearr_13824_15569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (2))){
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13796__$1,(4),ch);
} else {
if((state_val_13797 === (23))){
var state_13796__$1 = state_13796;
var statearr_13828_15570 = state_13796__$1;
(statearr_13828_15570[(2)] = null);

(statearr_13828_15570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (19))){
var inst_13777 = (state_13796[(11)]);
var inst_13712 = (state_13796[(8)]);
var inst_13779 = cljs.core.async.muxch_STAR_(inst_13777);
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13796__$1,(22),inst_13779,inst_13712);
} else {
if((state_val_13797 === (11))){
var inst_13737 = (state_13796[(12)]);
var inst_13751 = (state_13796[(10)]);
var inst_13751__$1 = cljs.core.seq(inst_13737);
var state_13796__$1 = (function (){var statearr_13830 = state_13796;
(statearr_13830[(10)] = inst_13751__$1);

return statearr_13830;
})();
if(inst_13751__$1){
var statearr_13831_15571 = state_13796__$1;
(statearr_13831_15571[(1)] = (13));

} else {
var statearr_13832_15572 = state_13796__$1;
(statearr_13832_15572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (9))){
var inst_13773 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13833_15573 = state_13796__$1;
(statearr_13833_15573[(2)] = inst_13773);

(statearr_13833_15573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (5))){
var inst_13734 = cljs.core.deref(mults);
var inst_13735 = cljs.core.vals(inst_13734);
var inst_13736 = cljs.core.seq(inst_13735);
var inst_13737 = inst_13736;
var inst_13738 = null;
var inst_13739 = (0);
var inst_13740 = (0);
var state_13796__$1 = (function (){var statearr_13845 = state_13796;
(statearr_13845[(12)] = inst_13737);

(statearr_13845[(13)] = inst_13738);

(statearr_13845[(15)] = inst_13740);

(statearr_13845[(16)] = inst_13739);

return statearr_13845;
})();
var statearr_13846_15574 = state_13796__$1;
(statearr_13846_15574[(2)] = null);

(statearr_13846_15574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (14))){
var state_13796__$1 = state_13796;
var statearr_13850_15577 = state_13796__$1;
(statearr_13850_15577[(2)] = null);

(statearr_13850_15577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (16))){
var inst_13751 = (state_13796[(10)]);
var inst_13755 = cljs.core.chunk_first(inst_13751);
var inst_13756 = cljs.core.chunk_rest(inst_13751);
var inst_13757 = cljs.core.count(inst_13755);
var inst_13737 = inst_13756;
var inst_13738 = inst_13755;
var inst_13739 = inst_13757;
var inst_13740 = (0);
var state_13796__$1 = (function (){var statearr_13851 = state_13796;
(statearr_13851[(12)] = inst_13737);

(statearr_13851[(13)] = inst_13738);

(statearr_13851[(15)] = inst_13740);

(statearr_13851[(16)] = inst_13739);

return statearr_13851;
})();
var statearr_13852_15578 = state_13796__$1;
(statearr_13852_15578[(2)] = null);

(statearr_13852_15578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (10))){
var inst_13737 = (state_13796[(12)]);
var inst_13738 = (state_13796[(13)]);
var inst_13740 = (state_13796[(15)]);
var inst_13739 = (state_13796[(16)]);
var inst_13745 = cljs.core._nth(inst_13738,inst_13740);
var inst_13746 = cljs.core.async.muxch_STAR_(inst_13745);
var inst_13747 = cljs.core.async.close_BANG_(inst_13746);
var inst_13748 = (inst_13740 + (1));
var tmp13847 = inst_13737;
var tmp13848 = inst_13738;
var tmp13849 = inst_13739;
var inst_13737__$1 = tmp13847;
var inst_13738__$1 = tmp13848;
var inst_13739__$1 = tmp13849;
var inst_13740__$1 = inst_13748;
var state_13796__$1 = (function (){var statearr_13853 = state_13796;
(statearr_13853[(12)] = inst_13737__$1);

(statearr_13853[(13)] = inst_13738__$1);

(statearr_13853[(17)] = inst_13747);

(statearr_13853[(15)] = inst_13740__$1);

(statearr_13853[(16)] = inst_13739__$1);

return statearr_13853;
})();
var statearr_13856_15583 = state_13796__$1;
(statearr_13856_15583[(2)] = null);

(statearr_13856_15583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (18))){
var inst_13766 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13857_15587 = state_13796__$1;
(statearr_13857_15587[(2)] = inst_13766);

(statearr_13857_15587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (8))){
var inst_13740 = (state_13796[(15)]);
var inst_13739 = (state_13796[(16)]);
var inst_13742 = (inst_13740 < inst_13739);
var inst_13743 = inst_13742;
var state_13796__$1 = state_13796;
if(cljs.core.truth_(inst_13743)){
var statearr_13858_15588 = state_13796__$1;
(statearr_13858_15588[(1)] = (10));

} else {
var statearr_13859_15589 = state_13796__$1;
(statearr_13859_15589[(1)] = (11));

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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13860[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13860[(1)] = (1));

return statearr_13860;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13796){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13796);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13861){var ex__12075__auto__ = e13861;
var statearr_13862_15591 = state_13796;
(statearr_13862_15591[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13796[(4)]))){
var statearr_13863_15593 = state_13796;
(statearr_13863_15593[(1)] = cljs.core.first((state_13796[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15594 = state_13796;
state_13796 = G__15594;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13871 = f__12108__auto__();
(statearr_13871[(6)] = c__12107__auto___15550);

return statearr_13871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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
var G__13873 = arguments.length;
switch (G__13873) {
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
var G__13875 = arguments.length;
switch (G__13875) {
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
var G__13882 = arguments.length;
switch (G__13882) {
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
var c__12107__auto___15603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13929){
var state_val_13930 = (state_13929[(1)]);
if((state_val_13930 === (7))){
var state_13929__$1 = state_13929;
var statearr_13931_15604 = state_13929__$1;
(statearr_13931_15604[(2)] = null);

(statearr_13931_15604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (1))){
var state_13929__$1 = state_13929;
var statearr_13932_15605 = state_13929__$1;
(statearr_13932_15605[(2)] = null);

(statearr_13932_15605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (4))){
var inst_13889 = (state_13929[(7)]);
var inst_13890 = (state_13929[(8)]);
var inst_13892 = (inst_13890 < inst_13889);
var state_13929__$1 = state_13929;
if(cljs.core.truth_(inst_13892)){
var statearr_13933_15606 = state_13929__$1;
(statearr_13933_15606[(1)] = (6));

} else {
var statearr_13934_15607 = state_13929__$1;
(statearr_13934_15607[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (15))){
var inst_13915 = (state_13929[(9)]);
var inst_13920 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13915);
var state_13929__$1 = state_13929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13929__$1,(17),out,inst_13920);
} else {
if((state_val_13930 === (13))){
var inst_13915 = (state_13929[(9)]);
var inst_13915__$1 = (state_13929[(2)]);
var inst_13916 = cljs.core.some(cljs.core.nil_QMARK_,inst_13915__$1);
var state_13929__$1 = (function (){var statearr_13938 = state_13929;
(statearr_13938[(9)] = inst_13915__$1);

return statearr_13938;
})();
if(cljs.core.truth_(inst_13916)){
var statearr_13941_15608 = state_13929__$1;
(statearr_13941_15608[(1)] = (14));

} else {
var statearr_13942_15609 = state_13929__$1;
(statearr_13942_15609[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (6))){
var state_13929__$1 = state_13929;
var statearr_13945_15610 = state_13929__$1;
(statearr_13945_15610[(2)] = null);

(statearr_13945_15610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (17))){
var inst_13922 = (state_13929[(2)]);
var state_13929__$1 = (function (){var statearr_13961 = state_13929;
(statearr_13961[(10)] = inst_13922);

return statearr_13961;
})();
var statearr_13962_15611 = state_13929__$1;
(statearr_13962_15611[(2)] = null);

(statearr_13962_15611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (3))){
var inst_13927 = (state_13929[(2)]);
var state_13929__$1 = state_13929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13929__$1,inst_13927);
} else {
if((state_val_13930 === (12))){
var _ = (function (){var statearr_13964 = state_13929;
(statearr_13964[(4)] = cljs.core.rest((state_13929[(4)])));

return statearr_13964;
})();
var state_13929__$1 = state_13929;
var ex13954 = (state_13929__$1[(2)]);
var statearr_13965_15612 = state_13929__$1;
(statearr_13965_15612[(5)] = ex13954);


if((ex13954 instanceof Object)){
var statearr_13968_15613 = state_13929__$1;
(statearr_13968_15613[(1)] = (11));

(statearr_13968_15613[(5)] = null);

} else {
throw ex13954;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (2))){
var inst_13888 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13889 = cnt;
var inst_13890 = (0);
var state_13929__$1 = (function (){var statearr_13970 = state_13929;
(statearr_13970[(11)] = inst_13888);

(statearr_13970[(7)] = inst_13889);

(statearr_13970[(8)] = inst_13890);

return statearr_13970;
})();
var statearr_13971_15614 = state_13929__$1;
(statearr_13971_15614[(2)] = null);

(statearr_13971_15614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (11))){
var inst_13894 = (state_13929[(2)]);
var inst_13895 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13929__$1 = (function (){var statearr_13972 = state_13929;
(statearr_13972[(12)] = inst_13894);

return statearr_13972;
})();
var statearr_13973_15615 = state_13929__$1;
(statearr_13973_15615[(2)] = inst_13895);

(statearr_13973_15615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (9))){
var inst_13890 = (state_13929[(8)]);
var _ = (function (){var statearr_13974 = state_13929;
(statearr_13974[(4)] = cljs.core.cons((12),(state_13929[(4)])));

return statearr_13974;
})();
var inst_13901 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13890) : chs__$1.call(null,inst_13890));
var inst_13902 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13890) : done.call(null,inst_13890));
var inst_13903 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13901,inst_13902);
var ___$1 = (function (){var statearr_13975 = state_13929;
(statearr_13975[(4)] = cljs.core.rest((state_13929[(4)])));

return statearr_13975;
})();
var state_13929__$1 = state_13929;
var statearr_13976_15616 = state_13929__$1;
(statearr_13976_15616[(2)] = inst_13903);

(statearr_13976_15616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (5))){
var inst_13913 = (state_13929[(2)]);
var state_13929__$1 = (function (){var statearr_13977 = state_13929;
(statearr_13977[(13)] = inst_13913);

return statearr_13977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13929__$1,(13),dchan);
} else {
if((state_val_13930 === (14))){
var inst_13918 = cljs.core.async.close_BANG_(out);
var state_13929__$1 = state_13929;
var statearr_13978_15617 = state_13929__$1;
(statearr_13978_15617[(2)] = inst_13918);

(statearr_13978_15617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (16))){
var inst_13925 = (state_13929[(2)]);
var state_13929__$1 = state_13929;
var statearr_13979_15618 = state_13929__$1;
(statearr_13979_15618[(2)] = inst_13925);

(statearr_13979_15618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (10))){
var inst_13890 = (state_13929[(8)]);
var inst_13906 = (state_13929[(2)]);
var inst_13907 = (inst_13890 + (1));
var inst_13890__$1 = inst_13907;
var state_13929__$1 = (function (){var statearr_13980 = state_13929;
(statearr_13980[(14)] = inst_13906);

(statearr_13980[(8)] = inst_13890__$1);

return statearr_13980;
})();
var statearr_13981_15623 = state_13929__$1;
(statearr_13981_15623[(2)] = null);

(statearr_13981_15623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13930 === (8))){
var inst_13911 = (state_13929[(2)]);
var state_13929__$1 = state_13929;
var statearr_13982_15624 = state_13929__$1;
(statearr_13982_15624[(2)] = inst_13911);

(statearr_13982_15624[(1)] = (5));


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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13983[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13983[(1)] = (1));

return statearr_13983;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13929){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13929);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13985){var ex__12075__auto__ = e13985;
var statearr_13986_15629 = state_13929;
(statearr_13986_15629[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13929[(4)]))){
var statearr_13987_15630 = state_13929;
(statearr_13987_15630[(1)] = cljs.core.first((state_13929[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15632 = state_13929;
state_13929 = G__15632;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13988 = f__12108__auto__();
(statearr_13988[(6)] = c__12107__auto___15603);

return statearr_13988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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
var G__13993 = arguments.length;
switch (G__13993) {
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
var c__12107__auto___15638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14030){
var state_val_14031 = (state_14030[(1)]);
if((state_val_14031 === (7))){
var inst_14009 = (state_14030[(7)]);
var inst_14010 = (state_14030[(8)]);
var inst_14009__$1 = (state_14030[(2)]);
var inst_14010__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14009__$1,(0),null);
var inst_14011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14009__$1,(1),null);
var inst_14012 = (inst_14010__$1 == null);
var state_14030__$1 = (function (){var statearr_14032 = state_14030;
(statearr_14032[(7)] = inst_14009__$1);

(statearr_14032[(8)] = inst_14010__$1);

(statearr_14032[(9)] = inst_14011);

return statearr_14032;
})();
if(cljs.core.truth_(inst_14012)){
var statearr_14033_15648 = state_14030__$1;
(statearr_14033_15648[(1)] = (8));

} else {
var statearr_14034_15649 = state_14030__$1;
(statearr_14034_15649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14031 === (1))){
var inst_13996 = cljs.core.vec(chs);
var inst_13997 = inst_13996;
var state_14030__$1 = (function (){var statearr_14035 = state_14030;
(statearr_14035[(10)] = inst_13997);

return statearr_14035;
})();
var statearr_14036_15651 = state_14030__$1;
(statearr_14036_15651[(2)] = null);

(statearr_14036_15651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14031 === (4))){
var inst_13997 = (state_14030[(10)]);
var state_14030__$1 = state_14030;
return cljs.core.async.ioc_alts_BANG_(state_14030__$1,(7),inst_13997);
} else {
if((state_val_14031 === (6))){
var inst_14026 = (state_14030[(2)]);
var state_14030__$1 = state_14030;
var statearr_14037_15653 = state_14030__$1;
(statearr_14037_15653[(2)] = inst_14026);

(statearr_14037_15653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14031 === (3))){
var inst_14028 = (state_14030[(2)]);
var state_14030__$1 = state_14030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14030__$1,inst_14028);
} else {
if((state_val_14031 === (2))){
var inst_13997 = (state_14030[(10)]);
var inst_13999 = cljs.core.count(inst_13997);
var inst_14000 = (inst_13999 > (0));
var state_14030__$1 = state_14030;
if(cljs.core.truth_(inst_14000)){
var statearr_14039_15661 = state_14030__$1;
(statearr_14039_15661[(1)] = (4));

} else {
var statearr_14040_15662 = state_14030__$1;
(statearr_14040_15662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14031 === (11))){
var inst_13997 = (state_14030[(10)]);
var inst_14019 = (state_14030[(2)]);
var tmp14038 = inst_13997;
var inst_13997__$1 = tmp14038;
var state_14030__$1 = (function (){var statearr_14041 = state_14030;
(statearr_14041[(11)] = inst_14019);

(statearr_14041[(10)] = inst_13997__$1);

return statearr_14041;
})();
var statearr_14042_15664 = state_14030__$1;
(statearr_14042_15664[(2)] = null);

(statearr_14042_15664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14031 === (9))){
var inst_14010 = (state_14030[(8)]);
var state_14030__$1 = state_14030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14030__$1,(11),out,inst_14010);
} else {
if((state_val_14031 === (5))){
var inst_14024 = cljs.core.async.close_BANG_(out);
var state_14030__$1 = state_14030;
var statearr_14059_15671 = state_14030__$1;
(statearr_14059_15671[(2)] = inst_14024);

(statearr_14059_15671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14031 === (10))){
var inst_14022 = (state_14030[(2)]);
var state_14030__$1 = state_14030;
var statearr_14060_15673 = state_14030__$1;
(statearr_14060_15673[(2)] = inst_14022);

(statearr_14060_15673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14031 === (8))){
var inst_14009 = (state_14030[(7)]);
var inst_14010 = (state_14030[(8)]);
var inst_13997 = (state_14030[(10)]);
var inst_14011 = (state_14030[(9)]);
var inst_14014 = (function (){var cs = inst_13997;
var vec__14002 = inst_14009;
var v = inst_14010;
var c = inst_14011;
return (function (p1__13991_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13991_SHARP_);
});
})();
var inst_14015 = cljs.core.filterv(inst_14014,inst_13997);
var inst_13997__$1 = inst_14015;
var state_14030__$1 = (function (){var statearr_14061 = state_14030;
(statearr_14061[(10)] = inst_13997__$1);

return statearr_14061;
})();
var statearr_14062_15674 = state_14030__$1;
(statearr_14062_15674[(2)] = null);

(statearr_14062_15674[(1)] = (2));


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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_14063 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14063[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14063[(1)] = (1));

return statearr_14063;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14030){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14030);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14064){var ex__12075__auto__ = e14064;
var statearr_14065_15675 = state_14030;
(statearr_14065_15675[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14030[(4)]))){
var statearr_14066_15676 = state_14030;
(statearr_14066_15676[(1)] = cljs.core.first((state_14030[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15677 = state_14030;
state_14030 = G__15677;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14067 = f__12108__auto__();
(statearr_14067[(6)] = c__12107__auto___15638);

return statearr_14067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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
var G__14069 = arguments.length;
switch (G__14069) {
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
var c__12107__auto___15679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14111){
var state_val_14112 = (state_14111[(1)]);
if((state_val_14112 === (7))){
var inst_14093 = (state_14111[(7)]);
var inst_14093__$1 = (state_14111[(2)]);
var inst_14094 = (inst_14093__$1 == null);
var inst_14095 = cljs.core.not(inst_14094);
var state_14111__$1 = (function (){var statearr_14113 = state_14111;
(statearr_14113[(7)] = inst_14093__$1);

return statearr_14113;
})();
if(inst_14095){
var statearr_14114_15680 = state_14111__$1;
(statearr_14114_15680[(1)] = (8));

} else {
var statearr_14115_15681 = state_14111__$1;
(statearr_14115_15681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (1))){
var inst_14088 = (0);
var state_14111__$1 = (function (){var statearr_14116 = state_14111;
(statearr_14116[(8)] = inst_14088);

return statearr_14116;
})();
var statearr_14117_15682 = state_14111__$1;
(statearr_14117_15682[(2)] = null);

(statearr_14117_15682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (4))){
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14111__$1,(7),ch);
} else {
if((state_val_14112 === (6))){
var inst_14106 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
var statearr_14118_15683 = state_14111__$1;
(statearr_14118_15683[(2)] = inst_14106);

(statearr_14118_15683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (3))){
var inst_14108 = (state_14111[(2)]);
var inst_14109 = cljs.core.async.close_BANG_(out);
var state_14111__$1 = (function (){var statearr_14137 = state_14111;
(statearr_14137[(9)] = inst_14108);

return statearr_14137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14111__$1,inst_14109);
} else {
if((state_val_14112 === (2))){
var inst_14088 = (state_14111[(8)]);
var inst_14090 = (inst_14088 < n);
var state_14111__$1 = state_14111;
if(cljs.core.truth_(inst_14090)){
var statearr_14138_15684 = state_14111__$1;
(statearr_14138_15684[(1)] = (4));

} else {
var statearr_14139_15685 = state_14111__$1;
(statearr_14139_15685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (11))){
var inst_14088 = (state_14111[(8)]);
var inst_14098 = (state_14111[(2)]);
var inst_14099 = (inst_14088 + (1));
var inst_14088__$1 = inst_14099;
var state_14111__$1 = (function (){var statearr_14140 = state_14111;
(statearr_14140[(10)] = inst_14098);

(statearr_14140[(8)] = inst_14088__$1);

return statearr_14140;
})();
var statearr_14141_15686 = state_14111__$1;
(statearr_14141_15686[(2)] = null);

(statearr_14141_15686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (9))){
var state_14111__$1 = state_14111;
var statearr_14142_15688 = state_14111__$1;
(statearr_14142_15688[(2)] = null);

(statearr_14142_15688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (5))){
var state_14111__$1 = state_14111;
var statearr_14143_15689 = state_14111__$1;
(statearr_14143_15689[(2)] = null);

(statearr_14143_15689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (10))){
var inst_14103 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
var statearr_14144_15692 = state_14111__$1;
(statearr_14144_15692[(2)] = inst_14103);

(statearr_14144_15692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (8))){
var inst_14093 = (state_14111[(7)]);
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14111__$1,(11),out,inst_14093);
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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_14145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14145[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14145[(1)] = (1));

return statearr_14145;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14111){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14111);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14146){var ex__12075__auto__ = e14146;
var statearr_14147_15700 = state_14111;
(statearr_14147_15700[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14111[(4)]))){
var statearr_14148_15702 = state_14111;
(statearr_14148_15702[(1)] = cljs.core.first((state_14111[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15703 = state_14111;
state_14111 = G__15703;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14149 = f__12108__auto__();
(statearr_14149[(6)] = c__12107__auto___15679);

return statearr_14149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14160 = (function (f,ch,meta14161){
this.f = f;
this.ch = ch;
this.meta14161 = meta14161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14162,meta14161__$1){
var self__ = this;
var _14162__$1 = this;
return (new cljs.core.async.t_cljs$core$async14160(self__.f,self__.ch,meta14161__$1));
}));

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14162){
var self__ = this;
var _14162__$1 = this;
return self__.meta14161;
}));

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14163 = (function (f,ch,meta14161,_,fn1,meta14164){
this.f = f;
this.ch = ch;
this.meta14161 = meta14161;
this._ = _;
this.fn1 = fn1;
this.meta14164 = meta14164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14165,meta14164__$1){
var self__ = this;
var _14165__$1 = this;
return (new cljs.core.async.t_cljs$core$async14163(self__.f,self__.ch,self__.meta14161,self__._,self__.fn1,meta14164__$1));
}));

(cljs.core.async.t_cljs$core$async14163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14165){
var self__ = this;
var _14165__$1 = this;
return self__.meta14164;
}));

(cljs.core.async.t_cljs$core$async14163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14159_SHARP_){
var G__14174 = (((p1__14159_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14159_SHARP_) : self__.f.call(null,p1__14159_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14174) : f1.call(null,G__14174));
});
}));

(cljs.core.async.t_cljs$core$async14163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14161","meta14161",-962526848,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14160","cljs.core.async/t_cljs$core$async14160",1204164883,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14164","meta14164",-1760845819,null)], null);
}));

(cljs.core.async.t_cljs$core$async14163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14163");

(cljs.core.async.t_cljs$core$async14163.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14163.
 */
cljs.core.async.__GT_t_cljs$core$async14163 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14163(f__$1,ch__$1,meta14161__$1,___$2,fn1__$1,meta14164){
return (new cljs.core.async.t_cljs$core$async14163(f__$1,ch__$1,meta14161__$1,___$2,fn1__$1,meta14164));
});

}

return (new cljs.core.async.t_cljs$core$async14163(self__.f,self__.ch,self__.meta14161,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14181 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14181) : self__.f.call(null,G__14181));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14161","meta14161",-962526848,null)], null);
}));

(cljs.core.async.t_cljs$core$async14160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14160");

(cljs.core.async.t_cljs$core$async14160.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14160.
 */
cljs.core.async.__GT_t_cljs$core$async14160 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14160(f__$1,ch__$1,meta14161){
return (new cljs.core.async.t_cljs$core$async14160(f__$1,ch__$1,meta14161));
});

}

return (new cljs.core.async.t_cljs$core$async14160(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14222 = (function (f,ch,meta14223){
this.f = f;
this.ch = ch;
this.meta14223 = meta14223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14224,meta14223__$1){
var self__ = this;
var _14224__$1 = this;
return (new cljs.core.async.t_cljs$core$async14222(self__.f,self__.ch,meta14223__$1));
}));

(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14224){
var self__ = this;
var _14224__$1 = this;
return self__.meta14223;
}));

(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14223","meta14223",1169463352,null)], null);
}));

(cljs.core.async.t_cljs$core$async14222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14222");

(cljs.core.async.t_cljs$core$async14222.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14222.
 */
cljs.core.async.__GT_t_cljs$core$async14222 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14222(f__$1,ch__$1,meta14223){
return (new cljs.core.async.t_cljs$core$async14222(f__$1,ch__$1,meta14223));
});

}

return (new cljs.core.async.t_cljs$core$async14222(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14233 = (function (p,ch,meta14234){
this.p = p;
this.ch = ch;
this.meta14234 = meta14234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14235,meta14234__$1){
var self__ = this;
var _14235__$1 = this;
return (new cljs.core.async.t_cljs$core$async14233(self__.p,self__.ch,meta14234__$1));
}));

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14235){
var self__ = this;
var _14235__$1 = this;
return self__.meta14234;
}));

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14234","meta14234",578484406,null)], null);
}));

(cljs.core.async.t_cljs$core$async14233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14233");

(cljs.core.async.t_cljs$core$async14233.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14233.
 */
cljs.core.async.__GT_t_cljs$core$async14233 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14233(p__$1,ch__$1,meta14234){
return (new cljs.core.async.t_cljs$core$async14233(p__$1,ch__$1,meta14234));
});

}

return (new cljs.core.async.t_cljs$core$async14233(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14253 = arguments.length;
switch (G__14253) {
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
var c__12107__auto___15735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14284){
var state_val_14285 = (state_14284[(1)]);
if((state_val_14285 === (7))){
var inst_14280 = (state_14284[(2)]);
var state_14284__$1 = state_14284;
var statearr_14287_15736 = state_14284__$1;
(statearr_14287_15736[(2)] = inst_14280);

(statearr_14287_15736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (1))){
var state_14284__$1 = state_14284;
var statearr_14288_15737 = state_14284__$1;
(statearr_14288_15737[(2)] = null);

(statearr_14288_15737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (4))){
var inst_14266 = (state_14284[(7)]);
var inst_14266__$1 = (state_14284[(2)]);
var inst_14267 = (inst_14266__$1 == null);
var state_14284__$1 = (function (){var statearr_14290 = state_14284;
(statearr_14290[(7)] = inst_14266__$1);

return statearr_14290;
})();
if(cljs.core.truth_(inst_14267)){
var statearr_14291_15738 = state_14284__$1;
(statearr_14291_15738[(1)] = (5));

} else {
var statearr_14292_15739 = state_14284__$1;
(statearr_14292_15739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (6))){
var inst_14266 = (state_14284[(7)]);
var inst_14271 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14266) : p.call(null,inst_14266));
var state_14284__$1 = state_14284;
if(cljs.core.truth_(inst_14271)){
var statearr_14293_15740 = state_14284__$1;
(statearr_14293_15740[(1)] = (8));

} else {
var statearr_14294_15741 = state_14284__$1;
(statearr_14294_15741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (3))){
var inst_14282 = (state_14284[(2)]);
var state_14284__$1 = state_14284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14284__$1,inst_14282);
} else {
if((state_val_14285 === (2))){
var state_14284__$1 = state_14284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14284__$1,(4),ch);
} else {
if((state_val_14285 === (11))){
var inst_14274 = (state_14284[(2)]);
var state_14284__$1 = state_14284;
var statearr_14296_15742 = state_14284__$1;
(statearr_14296_15742[(2)] = inst_14274);

(statearr_14296_15742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (9))){
var state_14284__$1 = state_14284;
var statearr_14298_15743 = state_14284__$1;
(statearr_14298_15743[(2)] = null);

(statearr_14298_15743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (5))){
var inst_14269 = cljs.core.async.close_BANG_(out);
var state_14284__$1 = state_14284;
var statearr_14304_15744 = state_14284__$1;
(statearr_14304_15744[(2)] = inst_14269);

(statearr_14304_15744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (10))){
var inst_14277 = (state_14284[(2)]);
var state_14284__$1 = (function (){var statearr_14306 = state_14284;
(statearr_14306[(8)] = inst_14277);

return statearr_14306;
})();
var statearr_14307_15745 = state_14284__$1;
(statearr_14307_15745[(2)] = null);

(statearr_14307_15745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14285 === (8))){
var inst_14266 = (state_14284[(7)]);
var state_14284__$1 = state_14284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14284__$1,(11),out,inst_14266);
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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_14309 = [null,null,null,null,null,null,null,null,null];
(statearr_14309[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14309[(1)] = (1));

return statearr_14309;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14284){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14284);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14310){var ex__12075__auto__ = e14310;
var statearr_14311_15788 = state_14284;
(statearr_14311_15788[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14284[(4)]))){
var statearr_14312_15789 = state_14284;
(statearr_14312_15789[(1)] = cljs.core.first((state_14284[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15790 = state_14284;
state_14284 = G__15790;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14314 = f__12108__auto__();
(statearr_14314[(6)] = c__12107__auto___15735);

return statearr_14314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14317 = arguments.length;
switch (G__14317) {
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
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14392){
var state_val_14393 = (state_14392[(1)]);
if((state_val_14393 === (7))){
var inst_14387 = (state_14392[(2)]);
var state_14392__$1 = state_14392;
var statearr_14399_15792 = state_14392__$1;
(statearr_14399_15792[(2)] = inst_14387);

(statearr_14399_15792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (20))){
var inst_14356 = (state_14392[(7)]);
var inst_14368 = (state_14392[(2)]);
var inst_14369 = cljs.core.next(inst_14356);
var inst_14342 = inst_14369;
var inst_14343 = null;
var inst_14344 = (0);
var inst_14345 = (0);
var state_14392__$1 = (function (){var statearr_14401 = state_14392;
(statearr_14401[(8)] = inst_14368);

(statearr_14401[(9)] = inst_14343);

(statearr_14401[(10)] = inst_14345);

(statearr_14401[(11)] = inst_14342);

(statearr_14401[(12)] = inst_14344);

return statearr_14401;
})();
var statearr_14402_15793 = state_14392__$1;
(statearr_14402_15793[(2)] = null);

(statearr_14402_15793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (1))){
var state_14392__$1 = state_14392;
var statearr_14403_15794 = state_14392__$1;
(statearr_14403_15794[(2)] = null);

(statearr_14403_15794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (4))){
var inst_14323 = (state_14392[(13)]);
var inst_14323__$1 = (state_14392[(2)]);
var inst_14332 = (inst_14323__$1 == null);
var state_14392__$1 = (function (){var statearr_14405 = state_14392;
(statearr_14405[(13)] = inst_14323__$1);

return statearr_14405;
})();
if(cljs.core.truth_(inst_14332)){
var statearr_14406_15795 = state_14392__$1;
(statearr_14406_15795[(1)] = (5));

} else {
var statearr_14407_15796 = state_14392__$1;
(statearr_14407_15796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (15))){
var state_14392__$1 = state_14392;
var statearr_14412_15797 = state_14392__$1;
(statearr_14412_15797[(2)] = null);

(statearr_14412_15797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (21))){
var state_14392__$1 = state_14392;
var statearr_14413_15798 = state_14392__$1;
(statearr_14413_15798[(2)] = null);

(statearr_14413_15798[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (13))){
var inst_14343 = (state_14392[(9)]);
var inst_14345 = (state_14392[(10)]);
var inst_14342 = (state_14392[(11)]);
var inst_14344 = (state_14392[(12)]);
var inst_14352 = (state_14392[(2)]);
var inst_14353 = (inst_14345 + (1));
var tmp14409 = inst_14343;
var tmp14410 = inst_14342;
var tmp14411 = inst_14344;
var inst_14342__$1 = tmp14410;
var inst_14343__$1 = tmp14409;
var inst_14344__$1 = tmp14411;
var inst_14345__$1 = inst_14353;
var state_14392__$1 = (function (){var statearr_14415 = state_14392;
(statearr_14415[(14)] = inst_14352);

(statearr_14415[(9)] = inst_14343__$1);

(statearr_14415[(10)] = inst_14345__$1);

(statearr_14415[(11)] = inst_14342__$1);

(statearr_14415[(12)] = inst_14344__$1);

return statearr_14415;
})();
var statearr_14416_15799 = state_14392__$1;
(statearr_14416_15799[(2)] = null);

(statearr_14416_15799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (22))){
var state_14392__$1 = state_14392;
var statearr_14418_15800 = state_14392__$1;
(statearr_14418_15800[(2)] = null);

(statearr_14418_15800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (6))){
var inst_14323 = (state_14392[(13)]);
var inst_14340 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14323) : f.call(null,inst_14323));
var inst_14341 = cljs.core.seq(inst_14340);
var inst_14342 = inst_14341;
var inst_14343 = null;
var inst_14344 = (0);
var inst_14345 = (0);
var state_14392__$1 = (function (){var statearr_14423 = state_14392;
(statearr_14423[(9)] = inst_14343);

(statearr_14423[(10)] = inst_14345);

(statearr_14423[(11)] = inst_14342);

(statearr_14423[(12)] = inst_14344);

return statearr_14423;
})();
var statearr_14425_15824 = state_14392__$1;
(statearr_14425_15824[(2)] = null);

(statearr_14425_15824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (17))){
var inst_14356 = (state_14392[(7)]);
var inst_14361 = cljs.core.chunk_first(inst_14356);
var inst_14362 = cljs.core.chunk_rest(inst_14356);
var inst_14363 = cljs.core.count(inst_14361);
var inst_14342 = inst_14362;
var inst_14343 = inst_14361;
var inst_14344 = inst_14363;
var inst_14345 = (0);
var state_14392__$1 = (function (){var statearr_14427 = state_14392;
(statearr_14427[(9)] = inst_14343);

(statearr_14427[(10)] = inst_14345);

(statearr_14427[(11)] = inst_14342);

(statearr_14427[(12)] = inst_14344);

return statearr_14427;
})();
var statearr_14428_15825 = state_14392__$1;
(statearr_14428_15825[(2)] = null);

(statearr_14428_15825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (3))){
var inst_14389 = (state_14392[(2)]);
var state_14392__$1 = state_14392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14392__$1,inst_14389);
} else {
if((state_val_14393 === (12))){
var inst_14377 = (state_14392[(2)]);
var state_14392__$1 = state_14392;
var statearr_14429_15826 = state_14392__$1;
(statearr_14429_15826[(2)] = inst_14377);

(statearr_14429_15826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (2))){
var state_14392__$1 = state_14392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14392__$1,(4),in$);
} else {
if((state_val_14393 === (23))){
var inst_14385 = (state_14392[(2)]);
var state_14392__$1 = state_14392;
var statearr_14431_15827 = state_14392__$1;
(statearr_14431_15827[(2)] = inst_14385);

(statearr_14431_15827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (19))){
var inst_14372 = (state_14392[(2)]);
var state_14392__$1 = state_14392;
var statearr_14433_15828 = state_14392__$1;
(statearr_14433_15828[(2)] = inst_14372);

(statearr_14433_15828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (11))){
var inst_14342 = (state_14392[(11)]);
var inst_14356 = (state_14392[(7)]);
var inst_14356__$1 = cljs.core.seq(inst_14342);
var state_14392__$1 = (function (){var statearr_14434 = state_14392;
(statearr_14434[(7)] = inst_14356__$1);

return statearr_14434;
})();
if(inst_14356__$1){
var statearr_14435_15829 = state_14392__$1;
(statearr_14435_15829[(1)] = (14));

} else {
var statearr_14436_15830 = state_14392__$1;
(statearr_14436_15830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (9))){
var inst_14379 = (state_14392[(2)]);
var inst_14380 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14392__$1 = (function (){var statearr_14438 = state_14392;
(statearr_14438[(15)] = inst_14379);

return statearr_14438;
})();
if(cljs.core.truth_(inst_14380)){
var statearr_14439_15861 = state_14392__$1;
(statearr_14439_15861[(1)] = (21));

} else {
var statearr_14440_15862 = state_14392__$1;
(statearr_14440_15862[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (5))){
var inst_14334 = cljs.core.async.close_BANG_(out);
var state_14392__$1 = state_14392;
var statearr_14442_15863 = state_14392__$1;
(statearr_14442_15863[(2)] = inst_14334);

(statearr_14442_15863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (14))){
var inst_14356 = (state_14392[(7)]);
var inst_14359 = cljs.core.chunked_seq_QMARK_(inst_14356);
var state_14392__$1 = state_14392;
if(inst_14359){
var statearr_14443_15864 = state_14392__$1;
(statearr_14443_15864[(1)] = (17));

} else {
var statearr_14445_15865 = state_14392__$1;
(statearr_14445_15865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (16))){
var inst_14375 = (state_14392[(2)]);
var state_14392__$1 = state_14392;
var statearr_14446_15866 = state_14392__$1;
(statearr_14446_15866[(2)] = inst_14375);

(statearr_14446_15866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14393 === (10))){
var inst_14343 = (state_14392[(9)]);
var inst_14345 = (state_14392[(10)]);
var inst_14350 = cljs.core._nth(inst_14343,inst_14345);
var state_14392__$1 = state_14392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14392__$1,(13),out,inst_14350);
} else {
if((state_val_14393 === (18))){
var inst_14356 = (state_14392[(7)]);
var inst_14366 = cljs.core.first(inst_14356);
var state_14392__$1 = state_14392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14392__$1,(20),out,inst_14366);
} else {
if((state_val_14393 === (8))){
var inst_14345 = (state_14392[(10)]);
var inst_14344 = (state_14392[(12)]);
var inst_14347 = (inst_14345 < inst_14344);
var inst_14348 = inst_14347;
var state_14392__$1 = state_14392;
if(cljs.core.truth_(inst_14348)){
var statearr_14456_15867 = state_14392__$1;
(statearr_14456_15867[(1)] = (10));

} else {
var statearr_14457_15868 = state_14392__$1;
(statearr_14457_15868[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_14459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14459[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14459[(1)] = (1));

return statearr_14459;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_14392){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14392);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14460){var ex__12075__auto__ = e14460;
var statearr_14461_15869 = state_14392;
(statearr_14461_15869[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14392[(4)]))){
var statearr_14463_15870 = state_14392;
(statearr_14463_15870[(1)] = cljs.core.first((state_14392[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15871 = state_14392;
state_14392 = G__15871;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_14392){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_14392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14464 = f__12108__auto__();
(statearr_14464[(6)] = c__12107__auto__);

return statearr_14464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14468 = arguments.length;
switch (G__14468) {
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
var G__14480 = arguments.length;
switch (G__14480) {
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
var G__14484 = arguments.length;
switch (G__14484) {
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
var c__12107__auto___15881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14521){
var state_val_14522 = (state_14521[(1)]);
if((state_val_14522 === (7))){
var inst_14515 = (state_14521[(2)]);
var state_14521__$1 = state_14521;
var statearr_14523_15882 = state_14521__$1;
(statearr_14523_15882[(2)] = inst_14515);

(statearr_14523_15882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14522 === (1))){
var inst_14487 = null;
var state_14521__$1 = (function (){var statearr_14524 = state_14521;
(statearr_14524[(7)] = inst_14487);

return statearr_14524;
})();
var statearr_14526_15883 = state_14521__$1;
(statearr_14526_15883[(2)] = null);

(statearr_14526_15883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14522 === (4))){
var inst_14500 = (state_14521[(8)]);
var inst_14500__$1 = (state_14521[(2)]);
var inst_14501 = (inst_14500__$1 == null);
var inst_14502 = cljs.core.not(inst_14501);
var state_14521__$1 = (function (){var statearr_14527 = state_14521;
(statearr_14527[(8)] = inst_14500__$1);

return statearr_14527;
})();
if(inst_14502){
var statearr_14528_15884 = state_14521__$1;
(statearr_14528_15884[(1)] = (5));

} else {
var statearr_14530_15885 = state_14521__$1;
(statearr_14530_15885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14522 === (6))){
var state_14521__$1 = state_14521;
var statearr_14531_15886 = state_14521__$1;
(statearr_14531_15886[(2)] = null);

(statearr_14531_15886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14522 === (3))){
var inst_14517 = (state_14521[(2)]);
var inst_14518 = cljs.core.async.close_BANG_(out);
var state_14521__$1 = (function (){var statearr_14532 = state_14521;
(statearr_14532[(9)] = inst_14517);

return statearr_14532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14521__$1,inst_14518);
} else {
if((state_val_14522 === (2))){
var state_14521__$1 = state_14521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14521__$1,(4),ch);
} else {
if((state_val_14522 === (11))){
var inst_14500 = (state_14521[(8)]);
var inst_14509 = (state_14521[(2)]);
var inst_14487 = inst_14500;
var state_14521__$1 = (function (){var statearr_14534 = state_14521;
(statearr_14534[(7)] = inst_14487);

(statearr_14534[(10)] = inst_14509);

return statearr_14534;
})();
var statearr_14536_15887 = state_14521__$1;
(statearr_14536_15887[(2)] = null);

(statearr_14536_15887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14522 === (9))){
var inst_14500 = (state_14521[(8)]);
var state_14521__$1 = state_14521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14521__$1,(11),out,inst_14500);
} else {
if((state_val_14522 === (5))){
var inst_14487 = (state_14521[(7)]);
var inst_14500 = (state_14521[(8)]);
var inst_14504 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14500,inst_14487);
var state_14521__$1 = state_14521;
if(inst_14504){
var statearr_14539_15888 = state_14521__$1;
(statearr_14539_15888[(1)] = (8));

} else {
var statearr_14540_15889 = state_14521__$1;
(statearr_14540_15889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14522 === (10))){
var inst_14512 = (state_14521[(2)]);
var state_14521__$1 = state_14521;
var statearr_14541_15890 = state_14521__$1;
(statearr_14541_15890[(2)] = inst_14512);

(statearr_14541_15890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14522 === (8))){
var inst_14487 = (state_14521[(7)]);
var tmp14537 = inst_14487;
var inst_14487__$1 = tmp14537;
var state_14521__$1 = (function (){var statearr_14542 = state_14521;
(statearr_14542[(7)] = inst_14487__$1);

return statearr_14542;
})();
var statearr_14543_15891 = state_14521__$1;
(statearr_14543_15891[(2)] = null);

(statearr_14543_15891[(1)] = (2));


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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_14544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14544[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14544[(1)] = (1));

return statearr_14544;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14521){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14521);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14545){var ex__12075__auto__ = e14545;
var statearr_14546_15892 = state_14521;
(statearr_14546_15892[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14521[(4)]))){
var statearr_14547_15893 = state_14521;
(statearr_14547_15893[(1)] = cljs.core.first((state_14521[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15894 = state_14521;
state_14521 = G__15894;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14548 = f__12108__auto__();
(statearr_14548[(6)] = c__12107__auto___15881);

return statearr_14548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14550 = arguments.length;
switch (G__14550) {
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
var c__12107__auto___15915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14588){
var state_val_14589 = (state_14588[(1)]);
if((state_val_14589 === (7))){
var inst_14584 = (state_14588[(2)]);
var state_14588__$1 = state_14588;
var statearr_14594_15916 = state_14588__$1;
(statearr_14594_15916[(2)] = inst_14584);

(statearr_14594_15916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (1))){
var inst_14551 = (new Array(n));
var inst_14552 = inst_14551;
var inst_14553 = (0);
var state_14588__$1 = (function (){var statearr_14595 = state_14588;
(statearr_14595[(7)] = inst_14552);

(statearr_14595[(8)] = inst_14553);

return statearr_14595;
})();
var statearr_14596_15917 = state_14588__$1;
(statearr_14596_15917[(2)] = null);

(statearr_14596_15917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (4))){
var inst_14556 = (state_14588[(9)]);
var inst_14556__$1 = (state_14588[(2)]);
var inst_14557 = (inst_14556__$1 == null);
var inst_14558 = cljs.core.not(inst_14557);
var state_14588__$1 = (function (){var statearr_14597 = state_14588;
(statearr_14597[(9)] = inst_14556__$1);

return statearr_14597;
})();
if(inst_14558){
var statearr_14598_15918 = state_14588__$1;
(statearr_14598_15918[(1)] = (5));

} else {
var statearr_14599_15919 = state_14588__$1;
(statearr_14599_15919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (15))){
var inst_14578 = (state_14588[(2)]);
var state_14588__$1 = state_14588;
var statearr_14600_15920 = state_14588__$1;
(statearr_14600_15920[(2)] = inst_14578);

(statearr_14600_15920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (13))){
var state_14588__$1 = state_14588;
var statearr_14601_15921 = state_14588__$1;
(statearr_14601_15921[(2)] = null);

(statearr_14601_15921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (6))){
var inst_14553 = (state_14588[(8)]);
var inst_14574 = (inst_14553 > (0));
var state_14588__$1 = state_14588;
if(cljs.core.truth_(inst_14574)){
var statearr_14602_15923 = state_14588__$1;
(statearr_14602_15923[(1)] = (12));

} else {
var statearr_14603_15924 = state_14588__$1;
(statearr_14603_15924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (3))){
var inst_14586 = (state_14588[(2)]);
var state_14588__$1 = state_14588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14588__$1,inst_14586);
} else {
if((state_val_14589 === (12))){
var inst_14552 = (state_14588[(7)]);
var inst_14576 = cljs.core.vec(inst_14552);
var state_14588__$1 = state_14588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14588__$1,(15),out,inst_14576);
} else {
if((state_val_14589 === (2))){
var state_14588__$1 = state_14588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14588__$1,(4),ch);
} else {
if((state_val_14589 === (11))){
var inst_14568 = (state_14588[(2)]);
var inst_14569 = (new Array(n));
var inst_14552 = inst_14569;
var inst_14553 = (0);
var state_14588__$1 = (function (){var statearr_14604 = state_14588;
(statearr_14604[(10)] = inst_14568);

(statearr_14604[(7)] = inst_14552);

(statearr_14604[(8)] = inst_14553);

return statearr_14604;
})();
var statearr_14605_15925 = state_14588__$1;
(statearr_14605_15925[(2)] = null);

(statearr_14605_15925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (9))){
var inst_14552 = (state_14588[(7)]);
var inst_14566 = cljs.core.vec(inst_14552);
var state_14588__$1 = state_14588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14588__$1,(11),out,inst_14566);
} else {
if((state_val_14589 === (5))){
var inst_14561 = (state_14588[(11)]);
var inst_14552 = (state_14588[(7)]);
var inst_14553 = (state_14588[(8)]);
var inst_14556 = (state_14588[(9)]);
var inst_14560 = (inst_14552[inst_14553] = inst_14556);
var inst_14561__$1 = (inst_14553 + (1));
var inst_14562 = (inst_14561__$1 < n);
var state_14588__$1 = (function (){var statearr_14606 = state_14588;
(statearr_14606[(12)] = inst_14560);

(statearr_14606[(11)] = inst_14561__$1);

return statearr_14606;
})();
if(cljs.core.truth_(inst_14562)){
var statearr_14613_15930 = state_14588__$1;
(statearr_14613_15930[(1)] = (8));

} else {
var statearr_14614_15931 = state_14588__$1;
(statearr_14614_15931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (14))){
var inst_14581 = (state_14588[(2)]);
var inst_14582 = cljs.core.async.close_BANG_(out);
var state_14588__$1 = (function (){var statearr_14616 = state_14588;
(statearr_14616[(13)] = inst_14581);

return statearr_14616;
})();
var statearr_14617_15932 = state_14588__$1;
(statearr_14617_15932[(2)] = inst_14582);

(statearr_14617_15932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (10))){
var inst_14572 = (state_14588[(2)]);
var state_14588__$1 = state_14588;
var statearr_14618_15933 = state_14588__$1;
(statearr_14618_15933[(2)] = inst_14572);

(statearr_14618_15933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14589 === (8))){
var inst_14561 = (state_14588[(11)]);
var inst_14552 = (state_14588[(7)]);
var tmp14615 = inst_14552;
var inst_14552__$1 = tmp14615;
var inst_14553 = inst_14561;
var state_14588__$1 = (function (){var statearr_14619 = state_14588;
(statearr_14619[(7)] = inst_14552__$1);

(statearr_14619[(8)] = inst_14553);

return statearr_14619;
})();
var statearr_14620_15934 = state_14588__$1;
(statearr_14620_15934[(2)] = null);

(statearr_14620_15934[(1)] = (2));


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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_14621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14621[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14621[(1)] = (1));

return statearr_14621;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14588){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14588);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14622){var ex__12075__auto__ = e14622;
var statearr_14623_15935 = state_14588;
(statearr_14623_15935[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14588[(4)]))){
var statearr_14624_15936 = state_14588;
(statearr_14624_15936[(1)] = cljs.core.first((state_14588[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15937 = state_14588;
state_14588 = G__15937;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14632 = f__12108__auto__();
(statearr_14632[(6)] = c__12107__auto___15915);

return statearr_14632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14634 = arguments.length;
switch (G__14634) {
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
var c__12107__auto___15949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14676){
var state_val_14677 = (state_14676[(1)]);
if((state_val_14677 === (7))){
var inst_14672 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14678_15950 = state_14676__$1;
(statearr_14678_15950[(2)] = inst_14672);

(statearr_14678_15950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (1))){
var inst_14635 = [];
var inst_14636 = inst_14635;
var inst_14637 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14676__$1 = (function (){var statearr_14679 = state_14676;
(statearr_14679[(7)] = inst_14636);

(statearr_14679[(8)] = inst_14637);

return statearr_14679;
})();
var statearr_14680_15951 = state_14676__$1;
(statearr_14680_15951[(2)] = null);

(statearr_14680_15951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (4))){
var inst_14640 = (state_14676[(9)]);
var inst_14640__$1 = (state_14676[(2)]);
var inst_14641 = (inst_14640__$1 == null);
var inst_14642 = cljs.core.not(inst_14641);
var state_14676__$1 = (function (){var statearr_14691 = state_14676;
(statearr_14691[(9)] = inst_14640__$1);

return statearr_14691;
})();
if(inst_14642){
var statearr_14692_15952 = state_14676__$1;
(statearr_14692_15952[(1)] = (5));

} else {
var statearr_14693_15953 = state_14676__$1;
(statearr_14693_15953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (15))){
var inst_14666 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14694_15954 = state_14676__$1;
(statearr_14694_15954[(2)] = inst_14666);

(statearr_14694_15954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (13))){
var state_14676__$1 = state_14676;
var statearr_14695_15955 = state_14676__$1;
(statearr_14695_15955[(2)] = null);

(statearr_14695_15955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (6))){
var inst_14636 = (state_14676[(7)]);
var inst_14661 = inst_14636.length;
var inst_14662 = (inst_14661 > (0));
var state_14676__$1 = state_14676;
if(cljs.core.truth_(inst_14662)){
var statearr_14696_15956 = state_14676__$1;
(statearr_14696_15956[(1)] = (12));

} else {
var statearr_14697_15957 = state_14676__$1;
(statearr_14697_15957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (3))){
var inst_14674 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14676__$1,inst_14674);
} else {
if((state_val_14677 === (12))){
var inst_14636 = (state_14676[(7)]);
var inst_14664 = cljs.core.vec(inst_14636);
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14676__$1,(15),out,inst_14664);
} else {
if((state_val_14677 === (2))){
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14676__$1,(4),ch);
} else {
if((state_val_14677 === (11))){
var inst_14644 = (state_14676[(10)]);
var inst_14640 = (state_14676[(9)]);
var inst_14654 = (state_14676[(2)]);
var inst_14655 = [];
var inst_14656 = inst_14655.push(inst_14640);
var inst_14636 = inst_14655;
var inst_14637 = inst_14644;
var state_14676__$1 = (function (){var statearr_14698 = state_14676;
(statearr_14698[(7)] = inst_14636);

(statearr_14698[(11)] = inst_14656);

(statearr_14698[(12)] = inst_14654);

(statearr_14698[(8)] = inst_14637);

return statearr_14698;
})();
var statearr_14699_15958 = state_14676__$1;
(statearr_14699_15958[(2)] = null);

(statearr_14699_15958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (9))){
var inst_14636 = (state_14676[(7)]);
var inst_14652 = cljs.core.vec(inst_14636);
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14676__$1,(11),out,inst_14652);
} else {
if((state_val_14677 === (5))){
var inst_14644 = (state_14676[(10)]);
var inst_14637 = (state_14676[(8)]);
var inst_14640 = (state_14676[(9)]);
var inst_14644__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14640) : f.call(null,inst_14640));
var inst_14645 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14644__$1,inst_14637);
var inst_14646 = cljs.core.keyword_identical_QMARK_(inst_14637,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14647 = ((inst_14645) || (inst_14646));
var state_14676__$1 = (function (){var statearr_14700 = state_14676;
(statearr_14700[(10)] = inst_14644__$1);

return statearr_14700;
})();
if(cljs.core.truth_(inst_14647)){
var statearr_14701_15970 = state_14676__$1;
(statearr_14701_15970[(1)] = (8));

} else {
var statearr_14702_15971 = state_14676__$1;
(statearr_14702_15971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (14))){
var inst_14669 = (state_14676[(2)]);
var inst_14670 = cljs.core.async.close_BANG_(out);
var state_14676__$1 = (function (){var statearr_14704 = state_14676;
(statearr_14704[(13)] = inst_14669);

return statearr_14704;
})();
var statearr_14705_15974 = state_14676__$1;
(statearr_14705_15974[(2)] = inst_14670);

(statearr_14705_15974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (10))){
var inst_14659 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14706_15975 = state_14676__$1;
(statearr_14706_15975[(2)] = inst_14659);

(statearr_14706_15975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (8))){
var inst_14644 = (state_14676[(10)]);
var inst_14636 = (state_14676[(7)]);
var inst_14640 = (state_14676[(9)]);
var inst_14649 = inst_14636.push(inst_14640);
var tmp14703 = inst_14636;
var inst_14636__$1 = tmp14703;
var inst_14637 = inst_14644;
var state_14676__$1 = (function (){var statearr_14709 = state_14676;
(statearr_14709[(7)] = inst_14636__$1);

(statearr_14709[(14)] = inst_14649);

(statearr_14709[(8)] = inst_14637);

return statearr_14709;
})();
var statearr_14712_15976 = state_14676__$1;
(statearr_14712_15976[(2)] = null);

(statearr_14712_15976[(1)] = (2));


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
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_14713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14713[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14713[(1)] = (1));

return statearr_14713;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14676){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14676);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14714){var ex__12075__auto__ = e14714;
var statearr_14715_15977 = state_14676;
(statearr_14715_15977[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14676[(4)]))){
var statearr_14716_15980 = state_14676;
(statearr_14716_15980[(1)] = cljs.core.first((state_14676[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15981 = state_14676;
state_14676 = G__15981;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14718 = f__12108__auto__();
(statearr_14718[(6)] = c__12107__auto___15949);

return statearr_14718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
