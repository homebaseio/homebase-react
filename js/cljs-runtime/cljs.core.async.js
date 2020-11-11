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
var G__12175 = arguments.length;
switch (G__12175) {
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
var val_14371 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14371) : fn1.call(null,val_14371));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14371) : fn1.call(null,val_14371));
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
var G__12177 = arguments.length;
switch (G__12177) {
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
var n__4613__auto___14378 = n;
var x_14379 = (0);
while(true){
if((x_14379 < n__4613__auto___14378)){
(a[x_14379] = x_14379);

var G__14380 = (x_14379 + (1));
x_14379 = G__14380;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12178 = (function (flag,meta12179){
this.flag = flag;
this.meta12179 = meta12179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12180,meta12179__$1){
var self__ = this;
var _12180__$1 = this;
return (new cljs.core.async.t_cljs$core$async12178(self__.flag,meta12179__$1));
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12180){
var self__ = this;
var _12180__$1 = this;
return self__.meta12179;
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12179","meta12179",-1214674539,null)], null);
}));

(cljs.core.async.t_cljs$core$async12178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12178");

(cljs.core.async.t_cljs$core$async12178.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12178.
 */
cljs.core.async.__GT_t_cljs$core$async12178 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12178(flag__$1,meta12179){
return (new cljs.core.async.t_cljs$core$async12178(flag__$1,meta12179));
});

}

return (new cljs.core.async.t_cljs$core$async12178(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12181 = (function (flag,cb,meta12182){
this.flag = flag;
this.cb = cb;
this.meta12182 = meta12182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12183,meta12182__$1){
var self__ = this;
var _12183__$1 = this;
return (new cljs.core.async.t_cljs$core$async12181(self__.flag,self__.cb,meta12182__$1));
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12183){
var self__ = this;
var _12183__$1 = this;
return self__.meta12182;
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12182","meta12182",1765938210,null)], null);
}));

(cljs.core.async.t_cljs$core$async12181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12181");

(cljs.core.async.t_cljs$core$async12181.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12181.
 */
cljs.core.async.__GT_t_cljs$core$async12181 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12181(flag__$1,cb__$1,meta12182){
return (new cljs.core.async.t_cljs$core$async12181(flag__$1,cb__$1,meta12182));
});

}

return (new cljs.core.async.t_cljs$core$async12181(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12184_SHARP_){
var G__12186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12184_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12186) : fret.call(null,G__12186));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12185_SHARP_){
var G__12187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12185_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12187) : fret.call(null,G__12187));
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
var G__14381 = (i + (1));
i = G__14381;
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
var len__4736__auto___14382 = arguments.length;
var i__4737__auto___14383 = (0);
while(true){
if((i__4737__auto___14383 < len__4736__auto___14382)){
args__4742__auto__.push((arguments[i__4737__auto___14383]));

var G__14384 = (i__4737__auto___14383 + (1));
i__4737__auto___14383 = G__14384;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12190){
var map__12191 = p__12190;
var map__12191__$1 = (((((!((map__12191 == null))))?(((((map__12191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12191):map__12191);
var opts = map__12191__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12188){
var G__12189 = cljs.core.first(seq12188);
var seq12188__$1 = cljs.core.next(seq12188);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12189,seq12188__$1);
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
var G__12194 = arguments.length;
switch (G__12194) {
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
var c__12107__auto___14386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_14387 = state_12218__$1;
(statearr_12220_14387[(2)] = inst_12214);

(statearr_12220_14387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_14388 = state_12218__$1;
(statearr_12221_14388[(2)] = null);

(statearr_12221_14388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (4))){
var inst_12197 = (state_12218[(7)]);
var inst_12197__$1 = (state_12218[(2)]);
var inst_12198 = (inst_12197__$1 == null);
var state_12218__$1 = (function (){var statearr_12222 = state_12218;
(statearr_12222[(7)] = inst_12197__$1);

return statearr_12222;
})();
if(cljs.core.truth_(inst_12198)){
var statearr_12223_14389 = state_12218__$1;
(statearr_12223_14389[(1)] = (5));

} else {
var statearr_12224_14390 = state_12218__$1;
(statearr_12224_14390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_14391 = state_12218__$1;
(statearr_12225_14391[(2)] = null);

(statearr_12225_14391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (6))){
var inst_12197 = (state_12218[(7)]);
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12218__$1,(11),to,inst_12197);
} else {
if((state_val_12219 === (3))){
var inst_12216 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12218__$1,inst_12216);
} else {
if((state_val_12219 === (12))){
var state_12218__$1 = state_12218;
var statearr_12226_14392 = state_12218__$1;
(statearr_12226_14392[(2)] = null);

(statearr_12226_14392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (2))){
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12218__$1,(4),from);
} else {
if((state_val_12219 === (11))){
var inst_12207 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
if(cljs.core.truth_(inst_12207)){
var statearr_12227_14396 = state_12218__$1;
(statearr_12227_14396[(1)] = (12));

} else {
var statearr_12228_14397 = state_12218__$1;
(statearr_12228_14397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_14399 = state_12218__$1;
(statearr_12229_14399[(2)] = null);

(statearr_12229_14399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_14400 = state_12218__$1;
(statearr_12230_14400[(1)] = (8));

} else {
var statearr_12231_14401 = state_12218__$1;
(statearr_12231_14401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_14402 = state_12218__$1;
(statearr_12232_14402[(2)] = inst_12212);

(statearr_12232_14402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_14403 = state_12218__$1;
(statearr_12233_14403[(2)] = inst_12204);

(statearr_12233_14403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_14404 = state_12218__$1;
(statearr_12234_14404[(2)] = inst_12201);

(statearr_12234_14404[(1)] = (10));


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
var statearr_12235 = [null,null,null,null,null,null,null,null];
(statearr_12235[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12235[(1)] = (1));

return statearr_12235;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12218){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12218);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12236){var ex__12075__auto__ = e12236;
var statearr_12237_14405 = state_12218;
(statearr_12237_14405[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_14406 = state_12218;
(statearr_12238_14406[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14407 = state_12218;
state_12218 = G__14407;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12239 = f__12108__auto__();
(statearr_12239[(6)] = c__12107__auto___14386);

return statearr_12239;
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
var process = (function (p__12240){
var vec__12241 = p__12240;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241,(1),null);
var job = vec__12241;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12107__auto___14408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12248){
var state_val_12249 = (state_12248[(1)]);
if((state_val_12249 === (1))){
var state_12248__$1 = state_12248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12248__$1,(2),res,v);
} else {
if((state_val_12249 === (2))){
var inst_12245 = (state_12248[(2)]);
var inst_12246 = cljs.core.async.close_BANG_(res);
var state_12248__$1 = (function (){var statearr_12250 = state_12248;
(statearr_12250[(7)] = inst_12245);

return statearr_12250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12248__$1,inst_12246);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12251 = [null,null,null,null,null,null,null,null];
(statearr_12251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12251[(1)] = (1));

return statearr_12251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12248){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12248);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12252){var ex__12075__auto__ = e12252;
var statearr_12253_14410 = state_12248;
(statearr_12253_14410[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14411 = state_12248;
(statearr_12254_14411[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14412 = state_12248;
state_12248 = G__14412;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12255 = f__12108__auto__();
(statearr_12255[(6)] = c__12107__auto___14408);

return statearr_12255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12256){
var vec__12257 = p__12256;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257,(1),null);
var job = vec__12257;
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
var n__4613__auto___14413 = n;
var __14414 = (0);
while(true){
if((__14414 < n__4613__auto___14413)){
var G__12260_14415 = type;
var G__12260_14416__$1 = (((G__12260_14415 instanceof cljs.core.Keyword))?G__12260_14415.fqn:null);
switch (G__12260_14416__$1) {
case "compute":
var c__12107__auto___14418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14414,c__12107__auto___14418,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14414,c__12107__auto___14418,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14419 = state_12273__$1;
(statearr_12275_14419[(2)] = null);

(statearr_12275_14419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (2))){
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12273__$1,(4),jobs);
} else {
if((state_val_12274 === (3))){
var inst_12271 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12273__$1,inst_12271);
} else {
if((state_val_12274 === (4))){
var inst_12263 = (state_12273[(2)]);
var inst_12264 = process(inst_12263);
var state_12273__$1 = state_12273;
if(cljs.core.truth_(inst_12264)){
var statearr_12276_14420 = state_12273__$1;
(statearr_12276_14420[(1)] = (5));

} else {
var statearr_12277_14421 = state_12273__$1;
(statearr_12277_14421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14422 = state_12273__$1;
(statearr_12278_14422[(2)] = null);

(statearr_12278_14422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14423 = state_12273__$1;
(statearr_12279_14423[(2)] = null);

(statearr_12279_14423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14424 = state_12273__$1;
(statearr_12280_14424[(2)] = inst_12269);

(statearr_12280_14424[(1)] = (3));


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
});})(__14414,c__12107__auto___14418,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async))
;
return ((function (__14414,switch__12071__auto__,c__12107__auto___14418,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12281 = [null,null,null,null,null,null,null];
(statearr_12281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12281[(1)] = (1));

return statearr_12281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12273){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12273);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12282){var ex__12075__auto__ = e12282;
var statearr_12283_14425 = state_12273;
(statearr_12283_14425[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14426 = state_12273;
(statearr_12284_14426[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14427 = state_12273;
state_12273 = G__14427;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
;})(__14414,switch__12071__auto__,c__12107__auto___14418,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14418);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14414,c__12107__auto___14418,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14414,c__12107__auto___14428,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14414,c__12107__auto___14428,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_14429 = state_12298__$1;
(statearr_12300_14429[(2)] = null);

(statearr_12300_14429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (2))){
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12298__$1,(4),jobs);
} else {
if((state_val_12299 === (3))){
var inst_12296 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12298__$1,inst_12296);
} else {
if((state_val_12299 === (4))){
var inst_12288 = (state_12298[(2)]);
var inst_12289 = async(inst_12288);
var state_12298__$1 = state_12298;
if(cljs.core.truth_(inst_12289)){
var statearr_12301_14430 = state_12298__$1;
(statearr_12301_14430[(1)] = (5));

} else {
var statearr_12302_14431 = state_12298__$1;
(statearr_12302_14431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_14432 = state_12298__$1;
(statearr_12303_14432[(2)] = null);

(statearr_12303_14432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_14433 = state_12298__$1;
(statearr_12304_14433[(2)] = null);

(statearr_12304_14433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_14434 = state_12298__$1;
(statearr_12305_14434[(2)] = inst_12294);

(statearr_12305_14434[(1)] = (3));


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
});})(__14414,c__12107__auto___14428,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async))
;
return ((function (__14414,switch__12071__auto__,c__12107__auto___14428,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12306 = [null,null,null,null,null,null,null];
(statearr_12306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12306[(1)] = (1));

return statearr_12306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12298){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12298);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12307){var ex__12075__auto__ = e12307;
var statearr_12308_14435 = state_12298;
(statearr_12308_14435[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_14436 = state_12298;
(statearr_12309_14436[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14437 = state_12298;
state_12298 = G__14437;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
;})(__14414,switch__12071__auto__,c__12107__auto___14428,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14428);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14414,c__12107__auto___14428,G__12260_14415,G__12260_14416__$1,n__4613__auto___14413,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14416__$1)].join('')));

}

var G__14438 = (__14414 + (1));
__14414 = G__14438;
continue;
} else {
}
break;
}

var c__12107__auto___14439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_14440 = state_12332__$1;
(statearr_12334_14440[(2)] = inst_12328);

(statearr_12334_14440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_14441 = state_12332__$1;
(statearr_12335_14441[(2)] = null);

(statearr_12335_14441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (4))){
var inst_12313 = (state_12332[(7)]);
var inst_12313__$1 = (state_12332[(2)]);
var inst_12314 = (inst_12313__$1 == null);
var state_12332__$1 = (function (){var statearr_12336 = state_12332;
(statearr_12336[(7)] = inst_12313__$1);

return statearr_12336;
})();
if(cljs.core.truth_(inst_12314)){
var statearr_12337_14442 = state_12332__$1;
(statearr_12337_14442[(1)] = (5));

} else {
var statearr_12338_14443 = state_12332__$1;
(statearr_12338_14443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (6))){
var inst_12318 = (state_12332[(8)]);
var inst_12313 = (state_12332[(7)]);
var inst_12318__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12320 = [inst_12313,inst_12318__$1];
var inst_12321 = (new cljs.core.PersistentVector(null,2,(5),inst_12319,inst_12320,null));
var state_12332__$1 = (function (){var statearr_12339 = state_12332;
(statearr_12339[(8)] = inst_12318__$1);

return statearr_12339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12332__$1,(8),jobs,inst_12321);
} else {
if((state_val_12333 === (3))){
var inst_12330 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12332__$1,inst_12330);
} else {
if((state_val_12333 === (2))){
var state_12332__$1 = state_12332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12332__$1,(4),from);
} else {
if((state_val_12333 === (9))){
var inst_12325 = (state_12332[(2)]);
var state_12332__$1 = (function (){var statearr_12340 = state_12332;
(statearr_12340[(9)] = inst_12325);

return statearr_12340;
})();
var statearr_12341_14444 = state_12332__$1;
(statearr_12341_14444[(2)] = null);

(statearr_12341_14444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14445 = state_12332__$1;
(statearr_12342_14445[(2)] = inst_12316);

(statearr_12342_14445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (8))){
var inst_12318 = (state_12332[(8)]);
var inst_12323 = (state_12332[(2)]);
var state_12332__$1 = (function (){var statearr_12343 = state_12332;
(statearr_12343[(10)] = inst_12323);

return statearr_12343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12332__$1,(9),results,inst_12318);
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
var statearr_12344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12344[(1)] = (1));

return statearr_12344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12332){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12332);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12345){var ex__12075__auto__ = e12345;
var statearr_12346_14448 = state_12332;
(statearr_12346_14448[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14449 = state_12332;
(statearr_12347_14449[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14453 = state_12332;
state_12332 = G__14453;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12348 = f__12108__auto__();
(statearr_12348[(6)] = c__12107__auto___14439);

return statearr_12348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12386){
var state_val_12387 = (state_12386[(1)]);
if((state_val_12387 === (7))){
var inst_12382 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12388_14471 = state_12386__$1;
(statearr_12388_14471[(2)] = inst_12382);

(statearr_12388_14471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_14472 = state_12386__$1;
(statearr_12389_14472[(2)] = null);

(statearr_12389_14472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_14473 = state_12386__$1;
(statearr_12390_14473[(2)] = null);

(statearr_12390_14473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (4))){
var inst_12351 = (state_12386[(7)]);
var inst_12351__$1 = (state_12386[(2)]);
var inst_12352 = (inst_12351__$1 == null);
var state_12386__$1 = (function (){var statearr_12391 = state_12386;
(statearr_12391[(7)] = inst_12351__$1);

return statearr_12391;
})();
if(cljs.core.truth_(inst_12352)){
var statearr_12392_14474 = state_12386__$1;
(statearr_12392_14474[(1)] = (5));

} else {
var statearr_12393_14475 = state_12386__$1;
(statearr_12393_14475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (15))){
var inst_12364 = (state_12386[(8)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12386__$1,(18),to,inst_12364);
} else {
if((state_val_12387 === (21))){
var inst_12377 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12394_14476 = state_12386__$1;
(statearr_12394_14476[(2)] = inst_12377);

(statearr_12394_14476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_14477 = state_12386__$1;
(statearr_12396_14477[(2)] = null);

(statearr_12396_14477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (6))){
var inst_12351 = (state_12386[(7)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12386__$1,(11),inst_12351);
} else {
if((state_val_12387 === (17))){
var inst_12372 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
if(cljs.core.truth_(inst_12372)){
var statearr_12397_14478 = state_12386__$1;
(statearr_12397_14478[(1)] = (19));

} else {
var statearr_12398_14479 = state_12386__$1;
(statearr_12398_14479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (3))){
var inst_12384 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12386__$1,inst_12384);
} else {
if((state_val_12387 === (12))){
var inst_12361 = (state_12386[(10)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12386__$1,(14),inst_12361);
} else {
if((state_val_12387 === (2))){
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12386__$1,(4),results);
} else {
if((state_val_12387 === (19))){
var state_12386__$1 = state_12386;
var statearr_12399_14480 = state_12386__$1;
(statearr_12399_14480[(2)] = null);

(statearr_12399_14480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_14481 = state_12386__$1;
(statearr_12401_14481[(2)] = null);

(statearr_12401_14481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_14482 = state_12386__$1;
(statearr_12402_14482[(2)] = null);

(statearr_12402_14482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_14483 = state_12386__$1;
(statearr_12403_14483[(1)] = (8));

} else {
var statearr_12404_14484 = state_12386__$1;
(statearr_12404_14484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (14))){
var inst_12364 = (state_12386[(8)]);
var inst_12364__$1 = (state_12386[(2)]);
var inst_12365 = (inst_12364__$1 == null);
var inst_12366 = cljs.core.not(inst_12365);
var state_12386__$1 = (function (){var statearr_12405 = state_12386;
(statearr_12405[(8)] = inst_12364__$1);

return statearr_12405;
})();
if(inst_12366){
var statearr_12406_14485 = state_12386__$1;
(statearr_12406_14485[(1)] = (15));

} else {
var statearr_12407_14486 = state_12386__$1;
(statearr_12407_14486[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_14487 = state_12386__$1;
(statearr_12408_14487[(2)] = false);

(statearr_12408_14487[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_14492 = state_12386__$1;
(statearr_12409_14492[(2)] = inst_12358);

(statearr_12409_14492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_14505 = state_12386__$1;
(statearr_12410_14505[(2)] = inst_12369);

(statearr_12410_14505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_14506 = state_12386__$1;
(statearr_12411_14506[(2)] = inst_12355);

(statearr_12411_14506[(1)] = (10));


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
var statearr_12412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12412[(1)] = (1));

return statearr_12412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12386){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12386);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12413){var ex__12075__auto__ = e12413;
var statearr_12414_14510 = state_12386;
(statearr_12414_14510[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_14512 = state_12386;
(statearr_12415_14512[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14514 = state_12386;
state_12386 = G__14514;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12416 = f__12108__auto__();
(statearr_12416[(6)] = c__12107__auto__);

return statearr_12416;
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
var G__12418 = arguments.length;
switch (G__12418) {
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
var G__12420 = arguments.length;
switch (G__12420) {
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
var G__12426 = arguments.length;
switch (G__12426) {
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
var c__12107__auto___14536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12457){
var state_val_12458 = (state_12457[(1)]);
if((state_val_12458 === (7))){
var inst_12453 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12459_14538 = state_12457__$1;
(statearr_12459_14538[(2)] = inst_12453);

(statearr_12459_14538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (1))){
var state_12457__$1 = state_12457;
var statearr_12460_14540 = state_12457__$1;
(statearr_12460_14540[(2)] = null);

(statearr_12460_14540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (4))){
var inst_12433 = (state_12457[(7)]);
var inst_12433__$1 = (state_12457[(2)]);
var inst_12434 = (inst_12433__$1 == null);
var state_12457__$1 = (function (){var statearr_12461 = state_12457;
(statearr_12461[(7)] = inst_12433__$1);

return statearr_12461;
})();
if(cljs.core.truth_(inst_12434)){
var statearr_12462_14542 = state_12457__$1;
(statearr_12462_14542[(1)] = (5));

} else {
var statearr_12463_14543 = state_12457__$1;
(statearr_12463_14543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (13))){
var state_12457__$1 = state_12457;
var statearr_12465_14544 = state_12457__$1;
(statearr_12465_14544[(2)] = null);

(statearr_12465_14544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (6))){
var inst_12433 = (state_12457[(7)]);
var inst_12439 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12433) : p.call(null,inst_12433));
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12439)){
var statearr_12466_14547 = state_12457__$1;
(statearr_12466_14547[(1)] = (9));

} else {
var statearr_12467_14548 = state_12457__$1;
(statearr_12467_14548[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (3))){
var inst_12455 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12457__$1,inst_12455);
} else {
if((state_val_12458 === (12))){
var state_12457__$1 = state_12457;
var statearr_12469_14549 = state_12457__$1;
(statearr_12469_14549[(2)] = null);

(statearr_12469_14549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (2))){
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12457__$1,(4),ch);
} else {
if((state_val_12458 === (11))){
var inst_12433 = (state_12457[(7)]);
var inst_12444 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12457__$1,(8),inst_12444,inst_12433);
} else {
if((state_val_12458 === (9))){
var state_12457__$1 = state_12457;
var statearr_12473_14550 = state_12457__$1;
(statearr_12473_14550[(2)] = tc);

(statearr_12473_14550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (5))){
var inst_12436 = cljs.core.async.close_BANG_(tc);
var inst_12437 = cljs.core.async.close_BANG_(fc);
var state_12457__$1 = (function (){var statearr_12474 = state_12457;
(statearr_12474[(8)] = inst_12436);

return statearr_12474;
})();
var statearr_12475_14572 = state_12457__$1;
(statearr_12475_14572[(2)] = inst_12437);

(statearr_12475_14572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (14))){
var inst_12451 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12476_14573 = state_12457__$1;
(statearr_12476_14573[(2)] = inst_12451);

(statearr_12476_14573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (10))){
var state_12457__$1 = state_12457;
var statearr_12477_14574 = state_12457__$1;
(statearr_12477_14574[(2)] = fc);

(statearr_12477_14574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (8))){
var inst_12446 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12446)){
var statearr_12478_14575 = state_12457__$1;
(statearr_12478_14575[(1)] = (12));

} else {
var statearr_12479_14578 = state_12457__$1;
(statearr_12479_14578[(1)] = (13));

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
var statearr_12480 = [null,null,null,null,null,null,null,null,null];
(statearr_12480[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12480[(1)] = (1));

return statearr_12480;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12457){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12457);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12481){var ex__12075__auto__ = e12481;
var statearr_12482_14579 = state_12457;
(statearr_12482_14579[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12457[(4)]))){
var statearr_12483_14580 = state_12457;
(statearr_12483_14580[(1)] = cljs.core.first((state_12457[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14583 = state_12457;
state_12457 = G__14583;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12484 = f__12108__auto__();
(statearr_12484[(6)] = c__12107__auto___14536);

return statearr_12484;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12506){
var state_val_12507 = (state_12506[(1)]);
if((state_val_12507 === (7))){
var inst_12502 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12508_14586 = state_12506__$1;
(statearr_12508_14586[(2)] = inst_12502);

(statearr_12508_14586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (1))){
var inst_12485 = init;
var inst_12486 = inst_12485;
var state_12506__$1 = (function (){var statearr_12509 = state_12506;
(statearr_12509[(7)] = inst_12486);

return statearr_12509;
})();
var statearr_12510_14592 = state_12506__$1;
(statearr_12510_14592[(2)] = null);

(statearr_12510_14592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (4))){
var inst_12489 = (state_12506[(8)]);
var inst_12489__$1 = (state_12506[(2)]);
var inst_12490 = (inst_12489__$1 == null);
var state_12506__$1 = (function (){var statearr_12511 = state_12506;
(statearr_12511[(8)] = inst_12489__$1);

return statearr_12511;
})();
if(cljs.core.truth_(inst_12490)){
var statearr_12512_14596 = state_12506__$1;
(statearr_12512_14596[(1)] = (5));

} else {
var statearr_12513_14597 = state_12506__$1;
(statearr_12513_14597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (6))){
var inst_12489 = (state_12506[(8)]);
var inst_12486 = (state_12506[(7)]);
var inst_12493 = (state_12506[(9)]);
var inst_12493__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12486,inst_12489) : f.call(null,inst_12486,inst_12489));
var inst_12494 = cljs.core.reduced_QMARK_(inst_12493__$1);
var state_12506__$1 = (function (){var statearr_12514 = state_12506;
(statearr_12514[(9)] = inst_12493__$1);

return statearr_12514;
})();
if(inst_12494){
var statearr_12515_14599 = state_12506__$1;
(statearr_12515_14599[(1)] = (8));

} else {
var statearr_12516_14600 = state_12506__$1;
(statearr_12516_14600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (3))){
var inst_12504 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12506__$1,inst_12504);
} else {
if((state_val_12507 === (2))){
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12506__$1,(4),ch);
} else {
if((state_val_12507 === (9))){
var inst_12493 = (state_12506[(9)]);
var inst_12486 = inst_12493;
var state_12506__$1 = (function (){var statearr_12517 = state_12506;
(statearr_12517[(7)] = inst_12486);

return statearr_12517;
})();
var statearr_12518_14603 = state_12506__$1;
(statearr_12518_14603[(2)] = null);

(statearr_12518_14603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (5))){
var inst_12486 = (state_12506[(7)]);
var state_12506__$1 = state_12506;
var statearr_12519_14624 = state_12506__$1;
(statearr_12519_14624[(2)] = inst_12486);

(statearr_12519_14624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (10))){
var inst_12500 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12520_14625 = state_12506__$1;
(statearr_12520_14625[(2)] = inst_12500);

(statearr_12520_14625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (8))){
var inst_12493 = (state_12506[(9)]);
var inst_12496 = cljs.core.deref(inst_12493);
var state_12506__$1 = state_12506;
var statearr_12521_14626 = state_12506__$1;
(statearr_12521_14626[(2)] = inst_12496);

(statearr_12521_14626[(1)] = (10));


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
var statearr_12522 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12522[(0)] = cljs$core$async$reduce_$_state_machine__12072__auto__);

(statearr_12522[(1)] = (1));

return statearr_12522;
});
var cljs$core$async$reduce_$_state_machine__12072__auto____1 = (function (state_12506){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12506);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12523){var ex__12075__auto__ = e12523;
var statearr_12524_14627 = state_12506;
(statearr_12524_14627[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12506[(4)]))){
var statearr_12525_14628 = state_12506;
(statearr_12525_14628[(1)] = cljs.core.first((state_12506[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14630 = state_12506;
state_12506 = G__14630;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12072__auto__ = function(state_12506){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12072__auto____1.call(this,state_12506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12072__auto____0;
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12072__auto____1;
return cljs$core$async$reduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12526 = f__12108__auto__();
(statearr_12526[(6)] = c__12107__auto__);

return statearr_12526;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12537){
var state_val_12538 = (state_12537[(1)]);
if((state_val_12538 === (1))){
var inst_12532 = cljs.core.async.reduce(f__$1,init,ch);
var state_12537__$1 = state_12537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12537__$1,(2),inst_12532);
} else {
if((state_val_12538 === (2))){
var inst_12534 = (state_12537[(2)]);
var inst_12535 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12534) : f__$1.call(null,inst_12534));
var state_12537__$1 = state_12537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12537__$1,inst_12535);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12539 = [null,null,null,null,null,null,null];
(statearr_12539[(0)] = cljs$core$async$transduce_$_state_machine__12072__auto__);

(statearr_12539[(1)] = (1));

return statearr_12539;
});
var cljs$core$async$transduce_$_state_machine__12072__auto____1 = (function (state_12537){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12537);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12540){var ex__12075__auto__ = e12540;
var statearr_12541_14633 = state_12537;
(statearr_12541_14633[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12537[(4)]))){
var statearr_12542_14635 = state_12537;
(statearr_12542_14635[(1)] = cljs.core.first((state_12537[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14638 = state_12537;
state_12537 = G__14638;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12072__auto__ = function(state_12537){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12072__auto____1.call(this,state_12537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12072__auto____0;
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12072__auto____1;
return cljs$core$async$transduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12543 = f__12108__auto__();
(statearr_12543[(6)] = c__12107__auto__);

return statearr_12543;
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
var G__12548 = arguments.length;
switch (G__12548) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12580){
var state_val_12581 = (state_12580[(1)]);
if((state_val_12581 === (7))){
var inst_12562 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
var statearr_12583_14642 = state_12580__$1;
(statearr_12583_14642[(2)] = inst_12562);

(statearr_12583_14642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (1))){
var inst_12549 = cljs.core.seq(coll);
var inst_12550 = inst_12549;
var state_12580__$1 = (function (){var statearr_12584 = state_12580;
(statearr_12584[(7)] = inst_12550);

return statearr_12584;
})();
var statearr_12585_14662 = state_12580__$1;
(statearr_12585_14662[(2)] = null);

(statearr_12585_14662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (4))){
var inst_12550 = (state_12580[(7)]);
var inst_12560 = cljs.core.first(inst_12550);
var state_12580__$1 = state_12580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12580__$1,(7),ch,inst_12560);
} else {
if((state_val_12581 === (13))){
var inst_12574 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
var statearr_12586_14666 = state_12580__$1;
(statearr_12586_14666[(2)] = inst_12574);

(statearr_12586_14666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (6))){
var inst_12565 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
if(cljs.core.truth_(inst_12565)){
var statearr_12587_14672 = state_12580__$1;
(statearr_12587_14672[(1)] = (8));

} else {
var statearr_12588_14673 = state_12580__$1;
(statearr_12588_14673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (3))){
var inst_12578 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12580__$1,inst_12578);
} else {
if((state_val_12581 === (12))){
var state_12580__$1 = state_12580;
var statearr_12589_14676 = state_12580__$1;
(statearr_12589_14676[(2)] = null);

(statearr_12589_14676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (2))){
var inst_12550 = (state_12580[(7)]);
var state_12580__$1 = state_12580;
if(cljs.core.truth_(inst_12550)){
var statearr_12590_14677 = state_12580__$1;
(statearr_12590_14677[(1)] = (4));

} else {
var statearr_12591_14678 = state_12580__$1;
(statearr_12591_14678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (11))){
var inst_12571 = cljs.core.async.close_BANG_(ch);
var state_12580__$1 = state_12580;
var statearr_12592_14680 = state_12580__$1;
(statearr_12592_14680[(2)] = inst_12571);

(statearr_12592_14680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (9))){
var state_12580__$1 = state_12580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12593_14681 = state_12580__$1;
(statearr_12593_14681[(1)] = (11));

} else {
var statearr_12594_14709 = state_12580__$1;
(statearr_12594_14709[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (5))){
var inst_12550 = (state_12580[(7)]);
var state_12580__$1 = state_12580;
var statearr_12595_14710 = state_12580__$1;
(statearr_12595_14710[(2)] = inst_12550);

(statearr_12595_14710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (10))){
var inst_12576 = (state_12580[(2)]);
var state_12580__$1 = state_12580;
var statearr_12596_14711 = state_12580__$1;
(statearr_12596_14711[(2)] = inst_12576);

(statearr_12596_14711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12581 === (8))){
var inst_12550 = (state_12580[(7)]);
var inst_12567 = cljs.core.next(inst_12550);
var inst_12550__$1 = inst_12567;
var state_12580__$1 = (function (){var statearr_12597 = state_12580;
(statearr_12597[(7)] = inst_12550__$1);

return statearr_12597;
})();
var statearr_12598_14716 = state_12580__$1;
(statearr_12598_14716[(2)] = null);

(statearr_12598_14716[(1)] = (2));


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
var statearr_12599 = [null,null,null,null,null,null,null,null];
(statearr_12599[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12599[(1)] = (1));

return statearr_12599;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12580){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12580);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12600){var ex__12075__auto__ = e12600;
var statearr_12601_14717 = state_12580;
(statearr_12601_14717[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12580[(4)]))){
var statearr_12602_14718 = state_12580;
(statearr_12602_14718[(1)] = cljs.core.first((state_12580[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14719 = state_12580;
state_12580 = G__14719;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12603 = f__12108__auto__();
(statearr_12603[(6)] = c__12107__auto__);

return statearr_12603;
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
var G__12612 = arguments.length;
switch (G__12612) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14726 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14726(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14736 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14736(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14738 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14738(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14741 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14741(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12616 = (function (ch,cs,meta12617){
this.ch = ch;
this.cs = cs;
this.meta12617 = meta12617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12618,meta12617__$1){
var self__ = this;
var _12618__$1 = this;
return (new cljs.core.async.t_cljs$core$async12616(self__.ch,self__.cs,meta12617__$1));
}));

(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12618){
var self__ = this;
var _12618__$1 = this;
return self__.meta12617;
}));

(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12616.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12617","meta12617",-1993180270,null)], null);
}));

(cljs.core.async.t_cljs$core$async12616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12616");

(cljs.core.async.t_cljs$core$async12616.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12616.
 */
cljs.core.async.__GT_t_cljs$core$async12616 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12616(ch__$1,cs__$1,meta12617){
return (new cljs.core.async.t_cljs$core$async12616(ch__$1,cs__$1,meta12617));
});

}

return (new cljs.core.async.t_cljs$core$async12616(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___14746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12751){
var state_val_12752 = (state_12751[(1)]);
if((state_val_12752 === (7))){
var inst_12747 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12753_14748 = state_12751__$1;
(statearr_12753_14748[(2)] = inst_12747);

(statearr_12753_14748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (20))){
var inst_12652 = (state_12751[(7)]);
var inst_12664 = cljs.core.first(inst_12652);
var inst_12665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12664,(0),null);
var inst_12666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12664,(1),null);
var state_12751__$1 = (function (){var statearr_12754 = state_12751;
(statearr_12754[(8)] = inst_12665);

return statearr_12754;
})();
if(cljs.core.truth_(inst_12666)){
var statearr_12755_14750 = state_12751__$1;
(statearr_12755_14750[(1)] = (22));

} else {
var statearr_12756_14751 = state_12751__$1;
(statearr_12756_14751[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (27))){
var inst_12621 = (state_12751[(9)]);
var inst_12694 = (state_12751[(10)]);
var inst_12696 = (state_12751[(11)]);
var inst_12701 = (state_12751[(12)]);
var inst_12701__$1 = cljs.core._nth(inst_12694,inst_12696);
var inst_12702 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12701__$1,inst_12621,done);
var state_12751__$1 = (function (){var statearr_12757 = state_12751;
(statearr_12757[(12)] = inst_12701__$1);

return statearr_12757;
})();
if(cljs.core.truth_(inst_12702)){
var statearr_12758_14758 = state_12751__$1;
(statearr_12758_14758[(1)] = (30));

} else {
var statearr_12759_14759 = state_12751__$1;
(statearr_12759_14759[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (1))){
var state_12751__$1 = state_12751;
var statearr_12760_14761 = state_12751__$1;
(statearr_12760_14761[(2)] = null);

(statearr_12760_14761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (24))){
var inst_12652 = (state_12751[(7)]);
var inst_12671 = (state_12751[(2)]);
var inst_12672 = cljs.core.next(inst_12652);
var inst_12630 = inst_12672;
var inst_12631 = null;
var inst_12632 = (0);
var inst_12633 = (0);
var state_12751__$1 = (function (){var statearr_12761 = state_12751;
(statearr_12761[(13)] = inst_12630);

(statearr_12761[(14)] = inst_12633);

(statearr_12761[(15)] = inst_12671);

(statearr_12761[(16)] = inst_12632);

(statearr_12761[(17)] = inst_12631);

return statearr_12761;
})();
var statearr_12762_14762 = state_12751__$1;
(statearr_12762_14762[(2)] = null);

(statearr_12762_14762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (39))){
var state_12751__$1 = state_12751;
var statearr_12766_14763 = state_12751__$1;
(statearr_12766_14763[(2)] = null);

(statearr_12766_14763[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (4))){
var inst_12621 = (state_12751[(9)]);
var inst_12621__$1 = (state_12751[(2)]);
var inst_12622 = (inst_12621__$1 == null);
var state_12751__$1 = (function (){var statearr_12767 = state_12751;
(statearr_12767[(9)] = inst_12621__$1);

return statearr_12767;
})();
if(cljs.core.truth_(inst_12622)){
var statearr_12768_14765 = state_12751__$1;
(statearr_12768_14765[(1)] = (5));

} else {
var statearr_12769_14766 = state_12751__$1;
(statearr_12769_14766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (15))){
var inst_12630 = (state_12751[(13)]);
var inst_12633 = (state_12751[(14)]);
var inst_12632 = (state_12751[(16)]);
var inst_12631 = (state_12751[(17)]);
var inst_12648 = (state_12751[(2)]);
var inst_12649 = (inst_12633 + (1));
var tmp12763 = inst_12630;
var tmp12764 = inst_12632;
var tmp12765 = inst_12631;
var inst_12630__$1 = tmp12763;
var inst_12631__$1 = tmp12765;
var inst_12632__$1 = tmp12764;
var inst_12633__$1 = inst_12649;
var state_12751__$1 = (function (){var statearr_12770 = state_12751;
(statearr_12770[(18)] = inst_12648);

(statearr_12770[(13)] = inst_12630__$1);

(statearr_12770[(14)] = inst_12633__$1);

(statearr_12770[(16)] = inst_12632__$1);

(statearr_12770[(17)] = inst_12631__$1);

return statearr_12770;
})();
var statearr_12771_14767 = state_12751__$1;
(statearr_12771_14767[(2)] = null);

(statearr_12771_14767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (21))){
var inst_12675 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12775_14769 = state_12751__$1;
(statearr_12775_14769[(2)] = inst_12675);

(statearr_12775_14769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (31))){
var inst_12701 = (state_12751[(12)]);
var inst_12705 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12701);
var state_12751__$1 = state_12751;
var statearr_12776_14770 = state_12751__$1;
(statearr_12776_14770[(2)] = inst_12705);

(statearr_12776_14770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (32))){
var inst_12695 = (state_12751[(19)]);
var inst_12693 = (state_12751[(20)]);
var inst_12694 = (state_12751[(10)]);
var inst_12696 = (state_12751[(11)]);
var inst_12707 = (state_12751[(2)]);
var inst_12708 = (inst_12696 + (1));
var tmp12772 = inst_12695;
var tmp12773 = inst_12693;
var tmp12774 = inst_12694;
var inst_12693__$1 = tmp12773;
var inst_12694__$1 = tmp12774;
var inst_12695__$1 = tmp12772;
var inst_12696__$1 = inst_12708;
var state_12751__$1 = (function (){var statearr_12777 = state_12751;
(statearr_12777[(19)] = inst_12695__$1);

(statearr_12777[(20)] = inst_12693__$1);

(statearr_12777[(21)] = inst_12707);

(statearr_12777[(10)] = inst_12694__$1);

(statearr_12777[(11)] = inst_12696__$1);

return statearr_12777;
})();
var statearr_12778_14772 = state_12751__$1;
(statearr_12778_14772[(2)] = null);

(statearr_12778_14772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (40))){
var inst_12720 = (state_12751[(22)]);
var inst_12724 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12720);
var state_12751__$1 = state_12751;
var statearr_12779_14774 = state_12751__$1;
(statearr_12779_14774[(2)] = inst_12724);

(statearr_12779_14774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (33))){
var inst_12711 = (state_12751[(23)]);
var inst_12713 = cljs.core.chunked_seq_QMARK_(inst_12711);
var state_12751__$1 = state_12751;
if(inst_12713){
var statearr_12780_14775 = state_12751__$1;
(statearr_12780_14775[(1)] = (36));

} else {
var statearr_12781_14776 = state_12751__$1;
(statearr_12781_14776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (13))){
var inst_12642 = (state_12751[(24)]);
var inst_12645 = cljs.core.async.close_BANG_(inst_12642);
var state_12751__$1 = state_12751;
var statearr_12782_14779 = state_12751__$1;
(statearr_12782_14779[(2)] = inst_12645);

(statearr_12782_14779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (22))){
var inst_12665 = (state_12751[(8)]);
var inst_12668 = cljs.core.async.close_BANG_(inst_12665);
var state_12751__$1 = state_12751;
var statearr_12783_14781 = state_12751__$1;
(statearr_12783_14781[(2)] = inst_12668);

(statearr_12783_14781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (36))){
var inst_12711 = (state_12751[(23)]);
var inst_12715 = cljs.core.chunk_first(inst_12711);
var inst_12716 = cljs.core.chunk_rest(inst_12711);
var inst_12717 = cljs.core.count(inst_12715);
var inst_12693 = inst_12716;
var inst_12694 = inst_12715;
var inst_12695 = inst_12717;
var inst_12696 = (0);
var state_12751__$1 = (function (){var statearr_12784 = state_12751;
(statearr_12784[(19)] = inst_12695);

(statearr_12784[(20)] = inst_12693);

(statearr_12784[(10)] = inst_12694);

(statearr_12784[(11)] = inst_12696);

return statearr_12784;
})();
var statearr_12785_14783 = state_12751__$1;
(statearr_12785_14783[(2)] = null);

(statearr_12785_14783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (41))){
var inst_12711 = (state_12751[(23)]);
var inst_12726 = (state_12751[(2)]);
var inst_12727 = cljs.core.next(inst_12711);
var inst_12693 = inst_12727;
var inst_12694 = null;
var inst_12695 = (0);
var inst_12696 = (0);
var state_12751__$1 = (function (){var statearr_12786 = state_12751;
(statearr_12786[(19)] = inst_12695);

(statearr_12786[(20)] = inst_12693);

(statearr_12786[(10)] = inst_12694);

(statearr_12786[(25)] = inst_12726);

(statearr_12786[(11)] = inst_12696);

return statearr_12786;
})();
var statearr_12787_14784 = state_12751__$1;
(statearr_12787_14784[(2)] = null);

(statearr_12787_14784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (43))){
var state_12751__$1 = state_12751;
var statearr_12788_14786 = state_12751__$1;
(statearr_12788_14786[(2)] = null);

(statearr_12788_14786[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (29))){
var inst_12735 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12789_14787 = state_12751__$1;
(statearr_12789_14787[(2)] = inst_12735);

(statearr_12789_14787[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (44))){
var inst_12744 = (state_12751[(2)]);
var state_12751__$1 = (function (){var statearr_12791 = state_12751;
(statearr_12791[(26)] = inst_12744);

return statearr_12791;
})();
var statearr_12792_14788 = state_12751__$1;
(statearr_12792_14788[(2)] = null);

(statearr_12792_14788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (6))){
var inst_12685 = (state_12751[(27)]);
var inst_12684 = cljs.core.deref(cs);
var inst_12685__$1 = cljs.core.keys(inst_12684);
var inst_12686 = cljs.core.count(inst_12685__$1);
var inst_12687 = cljs.core.reset_BANG_(dctr,inst_12686);
var inst_12692 = cljs.core.seq(inst_12685__$1);
var inst_12693 = inst_12692;
var inst_12694 = null;
var inst_12695 = (0);
var inst_12696 = (0);
var state_12751__$1 = (function (){var statearr_12793 = state_12751;
(statearr_12793[(19)] = inst_12695);

(statearr_12793[(20)] = inst_12693);

(statearr_12793[(10)] = inst_12694);

(statearr_12793[(27)] = inst_12685__$1);

(statearr_12793[(28)] = inst_12687);

(statearr_12793[(11)] = inst_12696);

return statearr_12793;
})();
var statearr_12794_14798 = state_12751__$1;
(statearr_12794_14798[(2)] = null);

(statearr_12794_14798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (28))){
var inst_12711 = (state_12751[(23)]);
var inst_12693 = (state_12751[(20)]);
var inst_12711__$1 = cljs.core.seq(inst_12693);
var state_12751__$1 = (function (){var statearr_12795 = state_12751;
(statearr_12795[(23)] = inst_12711__$1);

return statearr_12795;
})();
if(inst_12711__$1){
var statearr_12796_14800 = state_12751__$1;
(statearr_12796_14800[(1)] = (33));

} else {
var statearr_12797_14801 = state_12751__$1;
(statearr_12797_14801[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (25))){
var inst_12695 = (state_12751[(19)]);
var inst_12696 = (state_12751[(11)]);
var inst_12698 = (inst_12696 < inst_12695);
var inst_12699 = inst_12698;
var state_12751__$1 = state_12751;
if(cljs.core.truth_(inst_12699)){
var statearr_12798_14803 = state_12751__$1;
(statearr_12798_14803[(1)] = (27));

} else {
var statearr_12799_14804 = state_12751__$1;
(statearr_12799_14804[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (34))){
var state_12751__$1 = state_12751;
var statearr_12800_14805 = state_12751__$1;
(statearr_12800_14805[(2)] = null);

(statearr_12800_14805[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (17))){
var state_12751__$1 = state_12751;
var statearr_12801_14806 = state_12751__$1;
(statearr_12801_14806[(2)] = null);

(statearr_12801_14806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (3))){
var inst_12749 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12751__$1,inst_12749);
} else {
if((state_val_12752 === (12))){
var inst_12680 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12802_14808 = state_12751__$1;
(statearr_12802_14808[(2)] = inst_12680);

(statearr_12802_14808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (2))){
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12751__$1,(4),ch);
} else {
if((state_val_12752 === (23))){
var state_12751__$1 = state_12751;
var statearr_12803_14809 = state_12751__$1;
(statearr_12803_14809[(2)] = null);

(statearr_12803_14809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (35))){
var inst_12733 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12804_14811 = state_12751__$1;
(statearr_12804_14811[(2)] = inst_12733);

(statearr_12804_14811[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (19))){
var inst_12652 = (state_12751[(7)]);
var inst_12656 = cljs.core.chunk_first(inst_12652);
var inst_12657 = cljs.core.chunk_rest(inst_12652);
var inst_12658 = cljs.core.count(inst_12656);
var inst_12630 = inst_12657;
var inst_12631 = inst_12656;
var inst_12632 = inst_12658;
var inst_12633 = (0);
var state_12751__$1 = (function (){var statearr_12805 = state_12751;
(statearr_12805[(13)] = inst_12630);

(statearr_12805[(14)] = inst_12633);

(statearr_12805[(16)] = inst_12632);

(statearr_12805[(17)] = inst_12631);

return statearr_12805;
})();
var statearr_12806_14813 = state_12751__$1;
(statearr_12806_14813[(2)] = null);

(statearr_12806_14813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (11))){
var inst_12630 = (state_12751[(13)]);
var inst_12652 = (state_12751[(7)]);
var inst_12652__$1 = cljs.core.seq(inst_12630);
var state_12751__$1 = (function (){var statearr_12807 = state_12751;
(statearr_12807[(7)] = inst_12652__$1);

return statearr_12807;
})();
if(inst_12652__$1){
var statearr_12808_14814 = state_12751__$1;
(statearr_12808_14814[(1)] = (16));

} else {
var statearr_12809_14815 = state_12751__$1;
(statearr_12809_14815[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (9))){
var inst_12682 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12810_14816 = state_12751__$1;
(statearr_12810_14816[(2)] = inst_12682);

(statearr_12810_14816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (5))){
var inst_12628 = cljs.core.deref(cs);
var inst_12629 = cljs.core.seq(inst_12628);
var inst_12630 = inst_12629;
var inst_12631 = null;
var inst_12632 = (0);
var inst_12633 = (0);
var state_12751__$1 = (function (){var statearr_12811 = state_12751;
(statearr_12811[(13)] = inst_12630);

(statearr_12811[(14)] = inst_12633);

(statearr_12811[(16)] = inst_12632);

(statearr_12811[(17)] = inst_12631);

return statearr_12811;
})();
var statearr_12812_14821 = state_12751__$1;
(statearr_12812_14821[(2)] = null);

(statearr_12812_14821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (14))){
var state_12751__$1 = state_12751;
var statearr_12813_14822 = state_12751__$1;
(statearr_12813_14822[(2)] = null);

(statearr_12813_14822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (45))){
var inst_12741 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12814_14823 = state_12751__$1;
(statearr_12814_14823[(2)] = inst_12741);

(statearr_12814_14823[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (26))){
var inst_12685 = (state_12751[(27)]);
var inst_12737 = (state_12751[(2)]);
var inst_12738 = cljs.core.seq(inst_12685);
var state_12751__$1 = (function (){var statearr_12815 = state_12751;
(statearr_12815[(29)] = inst_12737);

return statearr_12815;
})();
if(inst_12738){
var statearr_12816_14824 = state_12751__$1;
(statearr_12816_14824[(1)] = (42));

} else {
var statearr_12817_14825 = state_12751__$1;
(statearr_12817_14825[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (16))){
var inst_12652 = (state_12751[(7)]);
var inst_12654 = cljs.core.chunked_seq_QMARK_(inst_12652);
var state_12751__$1 = state_12751;
if(inst_12654){
var statearr_12822_14826 = state_12751__$1;
(statearr_12822_14826[(1)] = (19));

} else {
var statearr_12823_14827 = state_12751__$1;
(statearr_12823_14827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (38))){
var inst_12730 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12824_14828 = state_12751__$1;
(statearr_12824_14828[(2)] = inst_12730);

(statearr_12824_14828[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (30))){
var state_12751__$1 = state_12751;
var statearr_12825_14829 = state_12751__$1;
(statearr_12825_14829[(2)] = null);

(statearr_12825_14829[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (10))){
var inst_12633 = (state_12751[(14)]);
var inst_12631 = (state_12751[(17)]);
var inst_12641 = cljs.core._nth(inst_12631,inst_12633);
var inst_12642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(0),null);
var inst_12643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12641,(1),null);
var state_12751__$1 = (function (){var statearr_12826 = state_12751;
(statearr_12826[(24)] = inst_12642);

return statearr_12826;
})();
if(cljs.core.truth_(inst_12643)){
var statearr_12827_14831 = state_12751__$1;
(statearr_12827_14831[(1)] = (13));

} else {
var statearr_12828_14832 = state_12751__$1;
(statearr_12828_14832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (18))){
var inst_12678 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12829_14833 = state_12751__$1;
(statearr_12829_14833[(2)] = inst_12678);

(statearr_12829_14833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (42))){
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12751__$1,(45),dchan);
} else {
if((state_val_12752 === (37))){
var inst_12711 = (state_12751[(23)]);
var inst_12621 = (state_12751[(9)]);
var inst_12720 = (state_12751[(22)]);
var inst_12720__$1 = cljs.core.first(inst_12711);
var inst_12721 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12720__$1,inst_12621,done);
var state_12751__$1 = (function (){var statearr_12830 = state_12751;
(statearr_12830[(22)] = inst_12720__$1);

return statearr_12830;
})();
if(cljs.core.truth_(inst_12721)){
var statearr_12831_14835 = state_12751__$1;
(statearr_12831_14835[(1)] = (39));

} else {
var statearr_12832_14836 = state_12751__$1;
(statearr_12832_14836[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (8))){
var inst_12633 = (state_12751[(14)]);
var inst_12632 = (state_12751[(16)]);
var inst_12635 = (inst_12633 < inst_12632);
var inst_12636 = inst_12635;
var state_12751__$1 = state_12751;
if(cljs.core.truth_(inst_12636)){
var statearr_12833_14837 = state_12751__$1;
(statearr_12833_14837[(1)] = (10));

} else {
var statearr_12834_14839 = state_12751__$1;
(statearr_12834_14839[(1)] = (11));

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
var statearr_12835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12835[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12835[(1)] = (1));

return statearr_12835;
});
var cljs$core$async$mult_$_state_machine__12072__auto____1 = (function (state_12751){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12751);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12836){var ex__12075__auto__ = e12836;
var statearr_12837_14841 = state_12751;
(statearr_12837_14841[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12751[(4)]))){
var statearr_12838_14842 = state_12751;
(statearr_12838_14842[(1)] = cljs.core.first((state_12751[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14846 = state_12751;
state_12751 = G__14846;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12072__auto__ = function(state_12751){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12072__auto____1.call(this,state_12751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12072__auto____0;
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12072__auto____1;
return cljs$core$async$mult_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12839 = f__12108__auto__();
(statearr_12839[(6)] = c__12107__auto___14746);

return statearr_12839;
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
var G__12848 = arguments.length;
switch (G__12848) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14848 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14848(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14850 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14850(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14852 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14852(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14854 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14854(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14856 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14856(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14865 = arguments.length;
var i__4737__auto___14866 = (0);
while(true){
if((i__4737__auto___14866 < len__4736__auto___14865)){
args__4742__auto__.push((arguments[i__4737__auto___14866]));

var G__14868 = (i__4737__auto___14866 + (1));
i__4737__auto___14866 = G__14868;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12861){
var map__12862 = p__12861;
var map__12862__$1 = (((((!((map__12862 == null))))?(((((map__12862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12862):map__12862);
var opts = map__12862__$1;
var statearr_12864_14870 = state;
(statearr_12864_14870[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12865_14871 = state;
(statearr_12865_14871[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12866_14872 = state;
(statearr_12866_14872[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12857){
var G__12858 = cljs.core.first(seq12857);
var seq12857__$1 = cljs.core.next(seq12857);
var G__12859 = cljs.core.first(seq12857__$1);
var seq12857__$2 = cljs.core.next(seq12857__$1);
var G__12860 = cljs.core.first(seq12857__$2);
var seq12857__$3 = cljs.core.next(seq12857__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12858,G__12859,G__12860,seq12857__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12867 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12868){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12868 = meta12868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12869,meta12868__$1){
var self__ = this;
var _12869__$1 = this;
return (new cljs.core.async.t_cljs$core$async12867(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12868__$1));
}));

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12869){
var self__ = this;
var _12869__$1 = this;
return self__.meta12868;
}));

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12867.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12868","meta12868",759689623,null)], null);
}));

(cljs.core.async.t_cljs$core$async12867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12867");

(cljs.core.async.t_cljs$core$async12867.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12867.
 */
cljs.core.async.__GT_t_cljs$core$async12867 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12867(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12868){
return (new cljs.core.async.t_cljs$core$async12867(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12868));
});

}

return (new cljs.core.async.t_cljs$core$async12867(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12971){
var state_val_12972 = (state_12971[(1)]);
if((state_val_12972 === (7))){
var inst_12886 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_12973_14885 = state_12971__$1;
(statearr_12973_14885[(2)] = inst_12886);

(statearr_12973_14885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (20))){
var inst_12898 = (state_12971[(7)]);
var state_12971__$1 = state_12971;
var statearr_12974_14886 = state_12971__$1;
(statearr_12974_14886[(2)] = inst_12898);

(statearr_12974_14886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (27))){
var state_12971__$1 = state_12971;
var statearr_12975_14887 = state_12971__$1;
(statearr_12975_14887[(2)] = null);

(statearr_12975_14887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (1))){
var inst_12873 = (state_12971[(8)]);
var inst_12873__$1 = calc_state();
var inst_12875 = (inst_12873__$1 == null);
var inst_12876 = cljs.core.not(inst_12875);
var state_12971__$1 = (function (){var statearr_12976 = state_12971;
(statearr_12976[(8)] = inst_12873__$1);

return statearr_12976;
})();
if(inst_12876){
var statearr_12977_14889 = state_12971__$1;
(statearr_12977_14889[(1)] = (2));

} else {
var statearr_12978_14890 = state_12971__$1;
(statearr_12978_14890[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (24))){
var inst_12945 = (state_12971[(9)]);
var inst_12931 = (state_12971[(10)]);
var inst_12922 = (state_12971[(11)]);
var inst_12945__$1 = (inst_12922.cljs$core$IFn$_invoke$arity$1 ? inst_12922.cljs$core$IFn$_invoke$arity$1(inst_12931) : inst_12922.call(null,inst_12931));
var state_12971__$1 = (function (){var statearr_12979 = state_12971;
(statearr_12979[(9)] = inst_12945__$1);

return statearr_12979;
})();
if(cljs.core.truth_(inst_12945__$1)){
var statearr_12980_14898 = state_12971__$1;
(statearr_12980_14898[(1)] = (29));

} else {
var statearr_12981_14899 = state_12971__$1;
(statearr_12981_14899[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (4))){
var inst_12889 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12889)){
var statearr_12982_14900 = state_12971__$1;
(statearr_12982_14900[(1)] = (8));

} else {
var statearr_12983_14901 = state_12971__$1;
(statearr_12983_14901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (15))){
var inst_12916 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12916)){
var statearr_12984_14903 = state_12971__$1;
(statearr_12984_14903[(1)] = (19));

} else {
var statearr_12985_14904 = state_12971__$1;
(statearr_12985_14904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (21))){
var inst_12921 = (state_12971[(12)]);
var inst_12921__$1 = (state_12971[(2)]);
var inst_12922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12921__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12921__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12921__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12971__$1 = (function (){var statearr_12986 = state_12971;
(statearr_12986[(13)] = inst_12923);

(statearr_12986[(11)] = inst_12922);

(statearr_12986[(12)] = inst_12921__$1);

return statearr_12986;
})();
return cljs.core.async.ioc_alts_BANG_(state_12971__$1,(22),inst_12924);
} else {
if((state_val_12972 === (31))){
var inst_12953 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12953)){
var statearr_12987_14908 = state_12971__$1;
(statearr_12987_14908[(1)] = (32));

} else {
var statearr_12988_14909 = state_12971__$1;
(statearr_12988_14909[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (32))){
var inst_12930 = (state_12971[(14)]);
var state_12971__$1 = state_12971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12971__$1,(35),out,inst_12930);
} else {
if((state_val_12972 === (33))){
var inst_12921 = (state_12971[(12)]);
var inst_12898 = inst_12921;
var state_12971__$1 = (function (){var statearr_12989 = state_12971;
(statearr_12989[(7)] = inst_12898);

return statearr_12989;
})();
var statearr_12990_14910 = state_12971__$1;
(statearr_12990_14910[(2)] = null);

(statearr_12990_14910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (13))){
var inst_12898 = (state_12971[(7)]);
var inst_12905 = inst_12898.cljs$lang$protocol_mask$partition0$;
var inst_12906 = (inst_12905 & (64));
var inst_12907 = inst_12898.cljs$core$ISeq$;
var inst_12908 = (cljs.core.PROTOCOL_SENTINEL === inst_12907);
var inst_12909 = ((inst_12906) || (inst_12908));
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12909)){
var statearr_12991_14912 = state_12971__$1;
(statearr_12991_14912[(1)] = (16));

} else {
var statearr_12992_14913 = state_12971__$1;
(statearr_12992_14913[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (22))){
var inst_12931 = (state_12971[(10)]);
var inst_12930 = (state_12971[(14)]);
var inst_12929 = (state_12971[(2)]);
var inst_12930__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12929,(0),null);
var inst_12931__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12929,(1),null);
var inst_12932 = (inst_12930__$1 == null);
var inst_12933 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12931__$1,change);
var inst_12934 = ((inst_12932) || (inst_12933));
var state_12971__$1 = (function (){var statearr_12993 = state_12971;
(statearr_12993[(10)] = inst_12931__$1);

(statearr_12993[(14)] = inst_12930__$1);

return statearr_12993;
})();
if(cljs.core.truth_(inst_12934)){
var statearr_12994_14915 = state_12971__$1;
(statearr_12994_14915[(1)] = (23));

} else {
var statearr_12995_14916 = state_12971__$1;
(statearr_12995_14916[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (36))){
var inst_12921 = (state_12971[(12)]);
var inst_12898 = inst_12921;
var state_12971__$1 = (function (){var statearr_12996 = state_12971;
(statearr_12996[(7)] = inst_12898);

return statearr_12996;
})();
var statearr_12997_14918 = state_12971__$1;
(statearr_12997_14918[(2)] = null);

(statearr_12997_14918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (29))){
var inst_12945 = (state_12971[(9)]);
var state_12971__$1 = state_12971;
var statearr_12998_14922 = state_12971__$1;
(statearr_12998_14922[(2)] = inst_12945);

(statearr_12998_14922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (6))){
var state_12971__$1 = state_12971;
var statearr_12999_14923 = state_12971__$1;
(statearr_12999_14923[(2)] = false);

(statearr_12999_14923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (28))){
var inst_12941 = (state_12971[(2)]);
var inst_12942 = calc_state();
var inst_12898 = inst_12942;
var state_12971__$1 = (function (){var statearr_13000 = state_12971;
(statearr_13000[(7)] = inst_12898);

(statearr_13000[(15)] = inst_12941);

return statearr_13000;
})();
var statearr_13001_14924 = state_12971__$1;
(statearr_13001_14924[(2)] = null);

(statearr_13001_14924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (25))){
var inst_12967 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13004_14925 = state_12971__$1;
(statearr_13004_14925[(2)] = inst_12967);

(statearr_13004_14925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (34))){
var inst_12965 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13005_14926 = state_12971__$1;
(statearr_13005_14926[(2)] = inst_12965);

(statearr_13005_14926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (17))){
var state_12971__$1 = state_12971;
var statearr_13006_14927 = state_12971__$1;
(statearr_13006_14927[(2)] = false);

(statearr_13006_14927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (3))){
var state_12971__$1 = state_12971;
var statearr_13007_14928 = state_12971__$1;
(statearr_13007_14928[(2)] = false);

(statearr_13007_14928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (12))){
var inst_12969 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12971__$1,inst_12969);
} else {
if((state_val_12972 === (2))){
var inst_12873 = (state_12971[(8)]);
var inst_12878 = inst_12873.cljs$lang$protocol_mask$partition0$;
var inst_12879 = (inst_12878 & (64));
var inst_12880 = inst_12873.cljs$core$ISeq$;
var inst_12881 = (cljs.core.PROTOCOL_SENTINEL === inst_12880);
var inst_12882 = ((inst_12879) || (inst_12881));
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12882)){
var statearr_13008_14930 = state_12971__$1;
(statearr_13008_14930[(1)] = (5));

} else {
var statearr_13009_14931 = state_12971__$1;
(statearr_13009_14931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (23))){
var inst_12930 = (state_12971[(14)]);
var inst_12936 = (inst_12930 == null);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12936)){
var statearr_13010_14932 = state_12971__$1;
(statearr_13010_14932[(1)] = (26));

} else {
var statearr_13011_14933 = state_12971__$1;
(statearr_13011_14933[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (35))){
var inst_12956 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12956)){
var statearr_13012_14934 = state_12971__$1;
(statearr_13012_14934[(1)] = (36));

} else {
var statearr_13013_14935 = state_12971__$1;
(statearr_13013_14935[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (19))){
var inst_12898 = (state_12971[(7)]);
var inst_12918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12898);
var state_12971__$1 = state_12971;
var statearr_13016_14936 = state_12971__$1;
(statearr_13016_14936[(2)] = inst_12918);

(statearr_13016_14936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (11))){
var inst_12898 = (state_12971[(7)]);
var inst_12902 = (inst_12898 == null);
var inst_12903 = cljs.core.not(inst_12902);
var state_12971__$1 = state_12971;
if(inst_12903){
var statearr_13018_14938 = state_12971__$1;
(statearr_13018_14938[(1)] = (13));

} else {
var statearr_13020_14939 = state_12971__$1;
(statearr_13020_14939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (9))){
var inst_12873 = (state_12971[(8)]);
var state_12971__$1 = state_12971;
var statearr_13021_14940 = state_12971__$1;
(statearr_13021_14940[(2)] = inst_12873);

(statearr_13021_14940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (5))){
var state_12971__$1 = state_12971;
var statearr_13022_14941 = state_12971__$1;
(statearr_13022_14941[(2)] = true);

(statearr_13022_14941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (14))){
var state_12971__$1 = state_12971;
var statearr_13023_14942 = state_12971__$1;
(statearr_13023_14942[(2)] = false);

(statearr_13023_14942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (26))){
var inst_12931 = (state_12971[(10)]);
var inst_12938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12931);
var state_12971__$1 = state_12971;
var statearr_13024_14943 = state_12971__$1;
(statearr_13024_14943[(2)] = inst_12938);

(statearr_13024_14943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (16))){
var state_12971__$1 = state_12971;
var statearr_13025_14948 = state_12971__$1;
(statearr_13025_14948[(2)] = true);

(statearr_13025_14948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (38))){
var inst_12961 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13032_14949 = state_12971__$1;
(statearr_13032_14949[(2)] = inst_12961);

(statearr_13032_14949[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (30))){
var inst_12923 = (state_12971[(13)]);
var inst_12931 = (state_12971[(10)]);
var inst_12922 = (state_12971[(11)]);
var inst_12948 = cljs.core.empty_QMARK_(inst_12922);
var inst_12949 = (inst_12923.cljs$core$IFn$_invoke$arity$1 ? inst_12923.cljs$core$IFn$_invoke$arity$1(inst_12931) : inst_12923.call(null,inst_12931));
var inst_12950 = cljs.core.not(inst_12949);
var inst_12951 = ((inst_12948) && (inst_12950));
var state_12971__$1 = state_12971;
var statearr_13036_14950 = state_12971__$1;
(statearr_13036_14950[(2)] = inst_12951);

(statearr_13036_14950[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (10))){
var inst_12873 = (state_12971[(8)]);
var inst_12894 = (state_12971[(2)]);
var inst_12895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12894,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12894,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12894,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12898 = inst_12873;
var state_12971__$1 = (function (){var statearr_13040 = state_12971;
(statearr_13040[(16)] = inst_12897);

(statearr_13040[(17)] = inst_12895);

(statearr_13040[(7)] = inst_12898);

(statearr_13040[(18)] = inst_12896);

return statearr_13040;
})();
var statearr_13041_14952 = state_12971__$1;
(statearr_13041_14952[(2)] = null);

(statearr_13041_14952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (18))){
var inst_12913 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13042_14954 = state_12971__$1;
(statearr_13042_14954[(2)] = inst_12913);

(statearr_13042_14954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (37))){
var state_12971__$1 = state_12971;
var statearr_13043_14955 = state_12971__$1;
(statearr_13043_14955[(2)] = null);

(statearr_13043_14955[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (8))){
var inst_12873 = (state_12971[(8)]);
var inst_12891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12873);
var state_12971__$1 = state_12971;
var statearr_13044_14956 = state_12971__$1;
(statearr_13044_14956[(2)] = inst_12891);

(statearr_13044_14956[(1)] = (10));


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
var statearr_13049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13049[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_13049[(1)] = (1));

return statearr_13049;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_12971){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12971);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13052){var ex__12075__auto__ = e13052;
var statearr_13053_14958 = state_12971;
(statearr_13053_14958[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12971[(4)]))){
var statearr_13054_14960 = state_12971;
(statearr_13054_14960[(1)] = cljs.core.first((state_12971[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14961 = state_12971;
state_12971 = G__14961;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_12971){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_12971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13056 = f__12108__auto__();
(statearr_13056[(6)] = c__12107__auto___14884);

return statearr_13056;
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

var cljs$core$async$Pub$sub_STAR_$dyn_14963 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14963(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14972 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14972(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14981 = (function() {
var G__14982 = null;
var G__14982__1 = (function (p){
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
var G__14982__2 = (function (p,v){
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
G__14982 = function(p,v){
switch(arguments.length){
case 1:
return G__14982__1.call(this,p);
case 2:
return G__14982__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14982.cljs$core$IFn$_invoke$arity$1 = G__14982__1;
G__14982.cljs$core$IFn$_invoke$arity$2 = G__14982__2;
return G__14982;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13061 = arguments.length;
switch (G__13061) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14981(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14981(p,v);
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
var G__13095 = arguments.length;
switch (G__13095) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13093_SHARP_){
if(cljs.core.truth_((p1__13093_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13093_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13093_SHARP_.call(null,topic)))){
return p1__13093_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13093_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13096 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13097){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13097 = meta13097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13098,meta13097__$1){
var self__ = this;
var _13098__$1 = this;
return (new cljs.core.async.t_cljs$core$async13096(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13097__$1));
}));

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13098){
var self__ = this;
var _13098__$1 = this;
return self__.meta13097;
}));

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13097","meta13097",-1927177165,null)], null);
}));

(cljs.core.async.t_cljs$core$async13096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13096");

(cljs.core.async.t_cljs$core$async13096.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13096.
 */
cljs.core.async.__GT_t_cljs$core$async13096 = (function cljs$core$async$__GT_t_cljs$core$async13096(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13097){
return (new cljs.core.async.t_cljs$core$async13096(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13097));
});

}

return (new cljs.core.async.t_cljs$core$async13096(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13236){
var state_val_13237 = (state_13236[(1)]);
if((state_val_13237 === (7))){
var inst_13197 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
var statearr_13238_15000 = state_13236__$1;
(statearr_13238_15000[(2)] = inst_13197);

(statearr_13238_15000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (20))){
var state_13236__$1 = state_13236;
var statearr_13239_15001 = state_13236__$1;
(statearr_13239_15001[(2)] = null);

(statearr_13239_15001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (1))){
var state_13236__$1 = state_13236;
var statearr_13240_15002 = state_13236__$1;
(statearr_13240_15002[(2)] = null);

(statearr_13240_15002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (24))){
var inst_13180 = (state_13236[(7)]);
var inst_13189 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13180);
var state_13236__$1 = state_13236;
var statearr_13241_15004 = state_13236__$1;
(statearr_13241_15004[(2)] = inst_13189);

(statearr_13241_15004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (4))){
var inst_13132 = (state_13236[(8)]);
var inst_13132__$1 = (state_13236[(2)]);
var inst_13133 = (inst_13132__$1 == null);
var state_13236__$1 = (function (){var statearr_13242 = state_13236;
(statearr_13242[(8)] = inst_13132__$1);

return statearr_13242;
})();
if(cljs.core.truth_(inst_13133)){
var statearr_13243_15050 = state_13236__$1;
(statearr_13243_15050[(1)] = (5));

} else {
var statearr_13244_15052 = state_13236__$1;
(statearr_13244_15052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (15))){
var inst_13174 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
var statearr_13245_15054 = state_13236__$1;
(statearr_13245_15054[(2)] = inst_13174);

(statearr_13245_15054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (21))){
var inst_13194 = (state_13236[(2)]);
var state_13236__$1 = (function (){var statearr_13248 = state_13236;
(statearr_13248[(9)] = inst_13194);

return statearr_13248;
})();
var statearr_13249_15057 = state_13236__$1;
(statearr_13249_15057[(2)] = null);

(statearr_13249_15057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (13))){
var inst_13156 = (state_13236[(10)]);
var inst_13158 = cljs.core.chunked_seq_QMARK_(inst_13156);
var state_13236__$1 = state_13236;
if(inst_13158){
var statearr_13250_15060 = state_13236__$1;
(statearr_13250_15060[(1)] = (16));

} else {
var statearr_13253_15061 = state_13236__$1;
(statearr_13253_15061[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (22))){
var inst_13186 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
if(cljs.core.truth_(inst_13186)){
var statearr_13254_15063 = state_13236__$1;
(statearr_13254_15063[(1)] = (23));

} else {
var statearr_13255_15064 = state_13236__$1;
(statearr_13255_15064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (6))){
var inst_13180 = (state_13236[(7)]);
var inst_13182 = (state_13236[(11)]);
var inst_13132 = (state_13236[(8)]);
var inst_13180__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13132) : topic_fn.call(null,inst_13132));
var inst_13181 = cljs.core.deref(mults);
var inst_13182__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13181,inst_13180__$1);
var state_13236__$1 = (function (){var statearr_13278 = state_13236;
(statearr_13278[(7)] = inst_13180__$1);

(statearr_13278[(11)] = inst_13182__$1);

return statearr_13278;
})();
if(cljs.core.truth_(inst_13182__$1)){
var statearr_13279_15071 = state_13236__$1;
(statearr_13279_15071[(1)] = (19));

} else {
var statearr_13280_15073 = state_13236__$1;
(statearr_13280_15073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (25))){
var inst_13191 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
var statearr_13281_15078 = state_13236__$1;
(statearr_13281_15078[(2)] = inst_13191);

(statearr_13281_15078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (17))){
var inst_13156 = (state_13236[(10)]);
var inst_13165 = cljs.core.first(inst_13156);
var inst_13166 = cljs.core.async.muxch_STAR_(inst_13165);
var inst_13167 = cljs.core.async.close_BANG_(inst_13166);
var inst_13168 = cljs.core.next(inst_13156);
var inst_13142 = inst_13168;
var inst_13143 = null;
var inst_13144 = (0);
var inst_13145 = (0);
var state_13236__$1 = (function (){var statearr_13283 = state_13236;
(statearr_13283[(12)] = inst_13142);

(statearr_13283[(13)] = inst_13167);

(statearr_13283[(14)] = inst_13145);

(statearr_13283[(15)] = inst_13144);

(statearr_13283[(16)] = inst_13143);

return statearr_13283;
})();
var statearr_13286_15082 = state_13236__$1;
(statearr_13286_15082[(2)] = null);

(statearr_13286_15082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (3))){
var inst_13199 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13236__$1,inst_13199);
} else {
if((state_val_13237 === (12))){
var inst_13176 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
var statearr_13289_15085 = state_13236__$1;
(statearr_13289_15085[(2)] = inst_13176);

(statearr_13289_15085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (2))){
var state_13236__$1 = state_13236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13236__$1,(4),ch);
} else {
if((state_val_13237 === (23))){
var state_13236__$1 = state_13236;
var statearr_13291_15086 = state_13236__$1;
(statearr_13291_15086[(2)] = null);

(statearr_13291_15086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (19))){
var inst_13182 = (state_13236[(11)]);
var inst_13132 = (state_13236[(8)]);
var inst_13184 = cljs.core.async.muxch_STAR_(inst_13182);
var state_13236__$1 = state_13236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13236__$1,(22),inst_13184,inst_13132);
} else {
if((state_val_13237 === (11))){
var inst_13142 = (state_13236[(12)]);
var inst_13156 = (state_13236[(10)]);
var inst_13156__$1 = cljs.core.seq(inst_13142);
var state_13236__$1 = (function (){var statearr_13299 = state_13236;
(statearr_13299[(10)] = inst_13156__$1);

return statearr_13299;
})();
if(inst_13156__$1){
var statearr_13301_15088 = state_13236__$1;
(statearr_13301_15088[(1)] = (13));

} else {
var statearr_13303_15089 = state_13236__$1;
(statearr_13303_15089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (9))){
var inst_13178 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
var statearr_13308_15093 = state_13236__$1;
(statearr_13308_15093[(2)] = inst_13178);

(statearr_13308_15093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (5))){
var inst_13139 = cljs.core.deref(mults);
var inst_13140 = cljs.core.vals(inst_13139);
var inst_13141 = cljs.core.seq(inst_13140);
var inst_13142 = inst_13141;
var inst_13143 = null;
var inst_13144 = (0);
var inst_13145 = (0);
var state_13236__$1 = (function (){var statearr_13317 = state_13236;
(statearr_13317[(12)] = inst_13142);

(statearr_13317[(14)] = inst_13145);

(statearr_13317[(15)] = inst_13144);

(statearr_13317[(16)] = inst_13143);

return statearr_13317;
})();
var statearr_13318_15117 = state_13236__$1;
(statearr_13318_15117[(2)] = null);

(statearr_13318_15117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (14))){
var state_13236__$1 = state_13236;
var statearr_13322_15118 = state_13236__$1;
(statearr_13322_15118[(2)] = null);

(statearr_13322_15118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (16))){
var inst_13156 = (state_13236[(10)]);
var inst_13160 = cljs.core.chunk_first(inst_13156);
var inst_13161 = cljs.core.chunk_rest(inst_13156);
var inst_13162 = cljs.core.count(inst_13160);
var inst_13142 = inst_13161;
var inst_13143 = inst_13160;
var inst_13144 = inst_13162;
var inst_13145 = (0);
var state_13236__$1 = (function (){var statearr_13323 = state_13236;
(statearr_13323[(12)] = inst_13142);

(statearr_13323[(14)] = inst_13145);

(statearr_13323[(15)] = inst_13144);

(statearr_13323[(16)] = inst_13143);

return statearr_13323;
})();
var statearr_13324_15125 = state_13236__$1;
(statearr_13324_15125[(2)] = null);

(statearr_13324_15125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (10))){
var inst_13142 = (state_13236[(12)]);
var inst_13145 = (state_13236[(14)]);
var inst_13144 = (state_13236[(15)]);
var inst_13143 = (state_13236[(16)]);
var inst_13150 = cljs.core._nth(inst_13143,inst_13145);
var inst_13151 = cljs.core.async.muxch_STAR_(inst_13150);
var inst_13152 = cljs.core.async.close_BANG_(inst_13151);
var inst_13153 = (inst_13145 + (1));
var tmp13319 = inst_13142;
var tmp13320 = inst_13144;
var tmp13321 = inst_13143;
var inst_13142__$1 = tmp13319;
var inst_13143__$1 = tmp13321;
var inst_13144__$1 = tmp13320;
var inst_13145__$1 = inst_13153;
var state_13236__$1 = (function (){var statearr_13325 = state_13236;
(statearr_13325[(17)] = inst_13152);

(statearr_13325[(12)] = inst_13142__$1);

(statearr_13325[(14)] = inst_13145__$1);

(statearr_13325[(15)] = inst_13144__$1);

(statearr_13325[(16)] = inst_13143__$1);

return statearr_13325;
})();
var statearr_13326_15128 = state_13236__$1;
(statearr_13326_15128[(2)] = null);

(statearr_13326_15128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (18))){
var inst_13171 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
var statearr_13327_15131 = state_13236__$1;
(statearr_13327_15131[(2)] = inst_13171);

(statearr_13327_15131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (8))){
var inst_13145 = (state_13236[(14)]);
var inst_13144 = (state_13236[(15)]);
var inst_13147 = (inst_13145 < inst_13144);
var inst_13148 = inst_13147;
var state_13236__$1 = state_13236;
if(cljs.core.truth_(inst_13148)){
var statearr_13328_15133 = state_13236__$1;
(statearr_13328_15133[(1)] = (10));

} else {
var statearr_13329_15134 = state_13236__$1;
(statearr_13329_15134[(1)] = (11));

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
var statearr_13330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13330[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13330[(1)] = (1));

return statearr_13330;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13236){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13236);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13331){var ex__12075__auto__ = e13331;
var statearr_13332_15138 = state_13236;
(statearr_13332_15138[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13236[(4)]))){
var statearr_13333_15139 = state_13236;
(statearr_13333_15139[(1)] = cljs.core.first((state_13236[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15159 = state_13236;
state_13236 = G__15159;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13334 = f__12108__auto__();
(statearr_13334[(6)] = c__12107__auto___14999);

return statearr_13334;
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
var G__13336 = arguments.length;
switch (G__13336) {
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
var G__13353 = arguments.length;
switch (G__13353) {
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
var G__13362 = arguments.length;
switch (G__13362) {
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
var c__12107__auto___15180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13405){
var state_val_13406 = (state_13405[(1)]);
if((state_val_13406 === (7))){
var state_13405__$1 = state_13405;
var statearr_13407_15184 = state_13405__$1;
(statearr_13407_15184[(2)] = null);

(statearr_13407_15184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (1))){
var state_13405__$1 = state_13405;
var statearr_13408_15185 = state_13405__$1;
(statearr_13408_15185[(2)] = null);

(statearr_13408_15185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (4))){
var inst_13366 = (state_13405[(7)]);
var inst_13365 = (state_13405[(8)]);
var inst_13368 = (inst_13366 < inst_13365);
var state_13405__$1 = state_13405;
if(cljs.core.truth_(inst_13368)){
var statearr_13409_15187 = state_13405__$1;
(statearr_13409_15187[(1)] = (6));

} else {
var statearr_13410_15190 = state_13405__$1;
(statearr_13410_15190[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (15))){
var inst_13391 = (state_13405[(9)]);
var inst_13396 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13391);
var state_13405__$1 = state_13405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13405__$1,(17),out,inst_13396);
} else {
if((state_val_13406 === (13))){
var inst_13391 = (state_13405[(9)]);
var inst_13391__$1 = (state_13405[(2)]);
var inst_13392 = cljs.core.some(cljs.core.nil_QMARK_,inst_13391__$1);
var state_13405__$1 = (function (){var statearr_13411 = state_13405;
(statearr_13411[(9)] = inst_13391__$1);

return statearr_13411;
})();
if(cljs.core.truth_(inst_13392)){
var statearr_13412_15218 = state_13405__$1;
(statearr_13412_15218[(1)] = (14));

} else {
var statearr_13413_15219 = state_13405__$1;
(statearr_13413_15219[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (6))){
var state_13405__$1 = state_13405;
var statearr_13414_15220 = state_13405__$1;
(statearr_13414_15220[(2)] = null);

(statearr_13414_15220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (17))){
var inst_13398 = (state_13405[(2)]);
var state_13405__$1 = (function (){var statearr_13451 = state_13405;
(statearr_13451[(10)] = inst_13398);

return statearr_13451;
})();
var statearr_13454_15221 = state_13405__$1;
(statearr_13454_15221[(2)] = null);

(statearr_13454_15221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (3))){
var inst_13403 = (state_13405[(2)]);
var state_13405__$1 = state_13405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13405__$1,inst_13403);
} else {
if((state_val_13406 === (12))){
var _ = (function (){var statearr_13460 = state_13405;
(statearr_13460[(4)] = cljs.core.rest((state_13405[(4)])));

return statearr_13460;
})();
var state_13405__$1 = state_13405;
var ex13426 = (state_13405__$1[(2)]);
var statearr_13465_15222 = state_13405__$1;
(statearr_13465_15222[(5)] = ex13426);


if((ex13426 instanceof Object)){
var statearr_13470_15223 = state_13405__$1;
(statearr_13470_15223[(1)] = (11));

(statearr_13470_15223[(5)] = null);

} else {
throw ex13426;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (2))){
var inst_13364 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13365 = cnt;
var inst_13366 = (0);
var state_13405__$1 = (function (){var statearr_13515 = state_13405;
(statearr_13515[(7)] = inst_13366);

(statearr_13515[(8)] = inst_13365);

(statearr_13515[(11)] = inst_13364);

return statearr_13515;
})();
var statearr_13516_15224 = state_13405__$1;
(statearr_13516_15224[(2)] = null);

(statearr_13516_15224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (11))){
var inst_13370 = (state_13405[(2)]);
var inst_13371 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13405__$1 = (function (){var statearr_13517 = state_13405;
(statearr_13517[(12)] = inst_13370);

return statearr_13517;
})();
var statearr_13519_15225 = state_13405__$1;
(statearr_13519_15225[(2)] = inst_13371);

(statearr_13519_15225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (9))){
var inst_13366 = (state_13405[(7)]);
var _ = (function (){var statearr_13521 = state_13405;
(statearr_13521[(4)] = cljs.core.cons((12),(state_13405[(4)])));

return statearr_13521;
})();
var inst_13377 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13366) : chs__$1.call(null,inst_13366));
var inst_13378 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13366) : done.call(null,inst_13366));
var inst_13379 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13377,inst_13378);
var ___$1 = (function (){var statearr_13522 = state_13405;
(statearr_13522[(4)] = cljs.core.rest((state_13405[(4)])));

return statearr_13522;
})();
var state_13405__$1 = state_13405;
var statearr_13523_15226 = state_13405__$1;
(statearr_13523_15226[(2)] = inst_13379);

(statearr_13523_15226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (5))){
var inst_13389 = (state_13405[(2)]);
var state_13405__$1 = (function (){var statearr_13524 = state_13405;
(statearr_13524[(13)] = inst_13389);

return statearr_13524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13405__$1,(13),dchan);
} else {
if((state_val_13406 === (14))){
var inst_13394 = cljs.core.async.close_BANG_(out);
var state_13405__$1 = state_13405;
var statearr_13529_15227 = state_13405__$1;
(statearr_13529_15227[(2)] = inst_13394);

(statearr_13529_15227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (16))){
var inst_13401 = (state_13405[(2)]);
var state_13405__$1 = state_13405;
var statearr_13533_15228 = state_13405__$1;
(statearr_13533_15228[(2)] = inst_13401);

(statearr_13533_15228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (10))){
var inst_13366 = (state_13405[(7)]);
var inst_13382 = (state_13405[(2)]);
var inst_13383 = (inst_13366 + (1));
var inst_13366__$1 = inst_13383;
var state_13405__$1 = (function (){var statearr_13534 = state_13405;
(statearr_13534[(14)] = inst_13382);

(statearr_13534[(7)] = inst_13366__$1);

return statearr_13534;
})();
var statearr_13537_15263 = state_13405__$1;
(statearr_13537_15263[(2)] = null);

(statearr_13537_15263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13406 === (8))){
var inst_13387 = (state_13405[(2)]);
var state_13405__$1 = state_13405;
var statearr_13538_15264 = state_13405__$1;
(statearr_13538_15264[(2)] = inst_13387);

(statearr_13538_15264[(1)] = (5));


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
var statearr_13542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13542[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13542[(1)] = (1));

return statearr_13542;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13405){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13405);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13547){var ex__12075__auto__ = e13547;
var statearr_13549_15265 = state_13405;
(statearr_13549_15265[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13405[(4)]))){
var statearr_13551_15266 = state_13405;
(statearr_13551_15266[(1)] = cljs.core.first((state_13405[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15267 = state_13405;
state_13405 = G__15267;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13613 = f__12108__auto__();
(statearr_13613[(6)] = c__12107__auto___15180);

return statearr_13613;
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
var G__13626 = arguments.length;
switch (G__13626) {
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
var c__12107__auto___15269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13697){
var state_val_13698 = (state_13697[(1)]);
if((state_val_13698 === (7))){
var inst_13668 = (state_13697[(7)]);
var inst_13670 = (state_13697[(8)]);
var inst_13668__$1 = (state_13697[(2)]);
var inst_13670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13668__$1,(0),null);
var inst_13673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13668__$1,(1),null);
var inst_13674 = (inst_13670__$1 == null);
var state_13697__$1 = (function (){var statearr_13699 = state_13697;
(statearr_13699[(7)] = inst_13668__$1);

(statearr_13699[(8)] = inst_13670__$1);

(statearr_13699[(9)] = inst_13673);

return statearr_13699;
})();
if(cljs.core.truth_(inst_13674)){
var statearr_13700_15270 = state_13697__$1;
(statearr_13700_15270[(1)] = (8));

} else {
var statearr_13701_15271 = state_13697__$1;
(statearr_13701_15271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (1))){
var inst_13654 = cljs.core.vec(chs);
var inst_13655 = inst_13654;
var state_13697__$1 = (function (){var statearr_13702 = state_13697;
(statearr_13702[(10)] = inst_13655);

return statearr_13702;
})();
var statearr_13703_15272 = state_13697__$1;
(statearr_13703_15272[(2)] = null);

(statearr_13703_15272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (4))){
var inst_13655 = (state_13697[(10)]);
var state_13697__$1 = state_13697;
return cljs.core.async.ioc_alts_BANG_(state_13697__$1,(7),inst_13655);
} else {
if((state_val_13698 === (6))){
var inst_13693 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13704_15273 = state_13697__$1;
(statearr_13704_15273[(2)] = inst_13693);

(statearr_13704_15273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (3))){
var inst_13695 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13697__$1,inst_13695);
} else {
if((state_val_13698 === (2))){
var inst_13655 = (state_13697[(10)]);
var inst_13660 = cljs.core.count(inst_13655);
var inst_13661 = (inst_13660 > (0));
var state_13697__$1 = state_13697;
if(cljs.core.truth_(inst_13661)){
var statearr_13709_15274 = state_13697__$1;
(statearr_13709_15274[(1)] = (4));

} else {
var statearr_13710_15275 = state_13697__$1;
(statearr_13710_15275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (11))){
var inst_13655 = (state_13697[(10)]);
var inst_13686 = (state_13697[(2)]);
var tmp13705 = inst_13655;
var inst_13655__$1 = tmp13705;
var state_13697__$1 = (function (){var statearr_13716 = state_13697;
(statearr_13716[(10)] = inst_13655__$1);

(statearr_13716[(11)] = inst_13686);

return statearr_13716;
})();
var statearr_13717_15276 = state_13697__$1;
(statearr_13717_15276[(2)] = null);

(statearr_13717_15276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (9))){
var inst_13670 = (state_13697[(8)]);
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13697__$1,(11),out,inst_13670);
} else {
if((state_val_13698 === (5))){
var inst_13691 = cljs.core.async.close_BANG_(out);
var state_13697__$1 = state_13697;
var statearr_13733_15296 = state_13697__$1;
(statearr_13733_15296[(2)] = inst_13691);

(statearr_13733_15296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (10))){
var inst_13689 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13736_15297 = state_13697__$1;
(statearr_13736_15297[(2)] = inst_13689);

(statearr_13736_15297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (8))){
var inst_13655 = (state_13697[(10)]);
var inst_13668 = (state_13697[(7)]);
var inst_13670 = (state_13697[(8)]);
var inst_13673 = (state_13697[(9)]);
var inst_13679 = (function (){var cs = inst_13655;
var vec__13664 = inst_13668;
var v = inst_13670;
var c = inst_13673;
return (function (p1__13618_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13618_SHARP_);
});
})();
var inst_13681 = cljs.core.filterv(inst_13679,inst_13655);
var inst_13655__$1 = inst_13681;
var state_13697__$1 = (function (){var statearr_13738 = state_13697;
(statearr_13738[(10)] = inst_13655__$1);

return statearr_13738;
})();
var statearr_13739_15298 = state_13697__$1;
(statearr_13739_15298[(2)] = null);

(statearr_13739_15298[(1)] = (2));


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
var statearr_13744 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13744[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13744[(1)] = (1));

return statearr_13744;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13697){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13697);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13748){var ex__12075__auto__ = e13748;
var statearr_13751_15299 = state_13697;
(statearr_13751_15299[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13697[(4)]))){
var statearr_13754_15300 = state_13697;
(statearr_13754_15300[(1)] = cljs.core.first((state_13697[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15301 = state_13697;
state_13697 = G__15301;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13761 = f__12108__auto__();
(statearr_13761[(6)] = c__12107__auto___15269);

return statearr_13761;
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
var G__13780 = arguments.length;
switch (G__13780) {
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
var c__12107__auto___15303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13814){
var state_val_13815 = (state_13814[(1)]);
if((state_val_13815 === (7))){
var inst_13796 = (state_13814[(7)]);
var inst_13796__$1 = (state_13814[(2)]);
var inst_13797 = (inst_13796__$1 == null);
var inst_13798 = cljs.core.not(inst_13797);
var state_13814__$1 = (function (){var statearr_13816 = state_13814;
(statearr_13816[(7)] = inst_13796__$1);

return statearr_13816;
})();
if(inst_13798){
var statearr_13817_15304 = state_13814__$1;
(statearr_13817_15304[(1)] = (8));

} else {
var statearr_13818_15305 = state_13814__$1;
(statearr_13818_15305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (1))){
var inst_13791 = (0);
var state_13814__$1 = (function (){var statearr_13819 = state_13814;
(statearr_13819[(8)] = inst_13791);

return statearr_13819;
})();
var statearr_13820_15306 = state_13814__$1;
(statearr_13820_15306[(2)] = null);

(statearr_13820_15306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (4))){
var state_13814__$1 = state_13814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13814__$1,(7),ch);
} else {
if((state_val_13815 === (6))){
var inst_13809 = (state_13814[(2)]);
var state_13814__$1 = state_13814;
var statearr_13821_15316 = state_13814__$1;
(statearr_13821_15316[(2)] = inst_13809);

(statearr_13821_15316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (3))){
var inst_13811 = (state_13814[(2)]);
var inst_13812 = cljs.core.async.close_BANG_(out);
var state_13814__$1 = (function (){var statearr_13822 = state_13814;
(statearr_13822[(9)] = inst_13811);

return statearr_13822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13814__$1,inst_13812);
} else {
if((state_val_13815 === (2))){
var inst_13791 = (state_13814[(8)]);
var inst_13793 = (inst_13791 < n);
var state_13814__$1 = state_13814;
if(cljs.core.truth_(inst_13793)){
var statearr_13823_15317 = state_13814__$1;
(statearr_13823_15317[(1)] = (4));

} else {
var statearr_13824_15318 = state_13814__$1;
(statearr_13824_15318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (11))){
var inst_13791 = (state_13814[(8)]);
var inst_13801 = (state_13814[(2)]);
var inst_13802 = (inst_13791 + (1));
var inst_13791__$1 = inst_13802;
var state_13814__$1 = (function (){var statearr_13825 = state_13814;
(statearr_13825[(10)] = inst_13801);

(statearr_13825[(8)] = inst_13791__$1);

return statearr_13825;
})();
var statearr_13826_15319 = state_13814__$1;
(statearr_13826_15319[(2)] = null);

(statearr_13826_15319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (9))){
var state_13814__$1 = state_13814;
var statearr_13827_15320 = state_13814__$1;
(statearr_13827_15320[(2)] = null);

(statearr_13827_15320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (5))){
var state_13814__$1 = state_13814;
var statearr_13828_15321 = state_13814__$1;
(statearr_13828_15321[(2)] = null);

(statearr_13828_15321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (10))){
var inst_13806 = (state_13814[(2)]);
var state_13814__$1 = state_13814;
var statearr_13829_15322 = state_13814__$1;
(statearr_13829_15322[(2)] = inst_13806);

(statearr_13829_15322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13815 === (8))){
var inst_13796 = (state_13814[(7)]);
var state_13814__$1 = state_13814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13814__$1,(11),out,inst_13796);
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
var statearr_13830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13830[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13830[(1)] = (1));

return statearr_13830;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13814){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13814);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13831){var ex__12075__auto__ = e13831;
var statearr_13832_15323 = state_13814;
(statearr_13832_15323[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13814[(4)]))){
var statearr_13833_15324 = state_13814;
(statearr_13833_15324[(1)] = cljs.core.first((state_13814[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15325 = state_13814;
state_13814 = G__15325;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13834 = f__12108__auto__();
(statearr_13834[(6)] = c__12107__auto___15303);

return statearr_13834;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13836 = (function (f,ch,meta13837){
this.f = f;
this.ch = ch;
this.meta13837 = meta13837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13838,meta13837__$1){
var self__ = this;
var _13838__$1 = this;
return (new cljs.core.async.t_cljs$core$async13836(self__.f,self__.ch,meta13837__$1));
}));

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13838){
var self__ = this;
var _13838__$1 = this;
return self__.meta13837;
}));

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13839 = (function (f,ch,meta13837,_,fn1,meta13840){
this.f = f;
this.ch = ch;
this.meta13837 = meta13837;
this._ = _;
this.fn1 = fn1;
this.meta13840 = meta13840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13841,meta13840__$1){
var self__ = this;
var _13841__$1 = this;
return (new cljs.core.async.t_cljs$core$async13839(self__.f,self__.ch,self__.meta13837,self__._,self__.fn1,meta13840__$1));
}));

(cljs.core.async.t_cljs$core$async13839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13841){
var self__ = this;
var _13841__$1 = this;
return self__.meta13840;
}));

(cljs.core.async.t_cljs$core$async13839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13835_SHARP_){
var G__13842 = (((p1__13835_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13835_SHARP_) : self__.f.call(null,p1__13835_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13842) : f1.call(null,G__13842));
});
}));

(cljs.core.async.t_cljs$core$async13839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13837","meta13837",-417519038,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13836","cljs.core.async/t_cljs$core$async13836",-1971843042,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13840","meta13840",732868924,null)], null);
}));

(cljs.core.async.t_cljs$core$async13839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13839");

(cljs.core.async.t_cljs$core$async13839.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13839.
 */
cljs.core.async.__GT_t_cljs$core$async13839 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13839(f__$1,ch__$1,meta13837__$1,___$2,fn1__$1,meta13840){
return (new cljs.core.async.t_cljs$core$async13839(f__$1,ch__$1,meta13837__$1,___$2,fn1__$1,meta13840));
});

}

return (new cljs.core.async.t_cljs$core$async13839(self__.f,self__.ch,self__.meta13837,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13845 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13845) : self__.f.call(null,G__13845));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13837","meta13837",-417519038,null)], null);
}));

(cljs.core.async.t_cljs$core$async13836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13836");

(cljs.core.async.t_cljs$core$async13836.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13836.
 */
cljs.core.async.__GT_t_cljs$core$async13836 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13836(f__$1,ch__$1,meta13837){
return (new cljs.core.async.t_cljs$core$async13836(f__$1,ch__$1,meta13837));
});

}

return (new cljs.core.async.t_cljs$core$async13836(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13846 = (function (f,ch,meta13847){
this.f = f;
this.ch = ch;
this.meta13847 = meta13847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13848,meta13847__$1){
var self__ = this;
var _13848__$1 = this;
return (new cljs.core.async.t_cljs$core$async13846(self__.f,self__.ch,meta13847__$1));
}));

(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13848){
var self__ = this;
var _13848__$1 = this;
return self__.meta13847;
}));

(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13847","meta13847",-872737093,null)], null);
}));

(cljs.core.async.t_cljs$core$async13846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13846");

(cljs.core.async.t_cljs$core$async13846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13846.
 */
cljs.core.async.__GT_t_cljs$core$async13846 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13846(f__$1,ch__$1,meta13847){
return (new cljs.core.async.t_cljs$core$async13846(f__$1,ch__$1,meta13847));
});

}

return (new cljs.core.async.t_cljs$core$async13846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13849 = (function (p,ch,meta13850){
this.p = p;
this.ch = ch;
this.meta13850 = meta13850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13851,meta13850__$1){
var self__ = this;
var _13851__$1 = this;
return (new cljs.core.async.t_cljs$core$async13849(self__.p,self__.ch,meta13850__$1));
}));

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13851){
var self__ = this;
var _13851__$1 = this;
return self__.meta13850;
}));

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13850","meta13850",-591703773,null)], null);
}));

(cljs.core.async.t_cljs$core$async13849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13849");

(cljs.core.async.t_cljs$core$async13849.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13849.
 */
cljs.core.async.__GT_t_cljs$core$async13849 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13849(p__$1,ch__$1,meta13850){
return (new cljs.core.async.t_cljs$core$async13849(p__$1,ch__$1,meta13850));
});

}

return (new cljs.core.async.t_cljs$core$async13849(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13863 = arguments.length;
switch (G__13863) {
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
var c__12107__auto___15429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13890){
var state_val_13891 = (state_13890[(1)]);
if((state_val_13891 === (7))){
var inst_13886 = (state_13890[(2)]);
var state_13890__$1 = state_13890;
var statearr_13892_15434 = state_13890__$1;
(statearr_13892_15434[(2)] = inst_13886);

(statearr_13892_15434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (1))){
var state_13890__$1 = state_13890;
var statearr_13893_15435 = state_13890__$1;
(statearr_13893_15435[(2)] = null);

(statearr_13893_15435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (4))){
var inst_13872 = (state_13890[(7)]);
var inst_13872__$1 = (state_13890[(2)]);
var inst_13873 = (inst_13872__$1 == null);
var state_13890__$1 = (function (){var statearr_13894 = state_13890;
(statearr_13894[(7)] = inst_13872__$1);

return statearr_13894;
})();
if(cljs.core.truth_(inst_13873)){
var statearr_13895_15437 = state_13890__$1;
(statearr_13895_15437[(1)] = (5));

} else {
var statearr_13896_15438 = state_13890__$1;
(statearr_13896_15438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (6))){
var inst_13872 = (state_13890[(7)]);
var inst_13877 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13872) : p.call(null,inst_13872));
var state_13890__$1 = state_13890;
if(cljs.core.truth_(inst_13877)){
var statearr_13897_15487 = state_13890__$1;
(statearr_13897_15487[(1)] = (8));

} else {
var statearr_13898_15489 = state_13890__$1;
(statearr_13898_15489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (3))){
var inst_13888 = (state_13890[(2)]);
var state_13890__$1 = state_13890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13890__$1,inst_13888);
} else {
if((state_val_13891 === (2))){
var state_13890__$1 = state_13890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13890__$1,(4),ch);
} else {
if((state_val_13891 === (11))){
var inst_13880 = (state_13890[(2)]);
var state_13890__$1 = state_13890;
var statearr_13899_15491 = state_13890__$1;
(statearr_13899_15491[(2)] = inst_13880);

(statearr_13899_15491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (9))){
var state_13890__$1 = state_13890;
var statearr_13900_15494 = state_13890__$1;
(statearr_13900_15494[(2)] = null);

(statearr_13900_15494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (5))){
var inst_13875 = cljs.core.async.close_BANG_(out);
var state_13890__$1 = state_13890;
var statearr_13901_15499 = state_13890__$1;
(statearr_13901_15499[(2)] = inst_13875);

(statearr_13901_15499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (10))){
var inst_13883 = (state_13890[(2)]);
var state_13890__$1 = (function (){var statearr_13902 = state_13890;
(statearr_13902[(8)] = inst_13883);

return statearr_13902;
})();
var statearr_13903_15501 = state_13890__$1;
(statearr_13903_15501[(2)] = null);

(statearr_13903_15501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13891 === (8))){
var inst_13872 = (state_13890[(7)]);
var state_13890__$1 = state_13890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13890__$1,(11),out,inst_13872);
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
var statearr_13906 = [null,null,null,null,null,null,null,null,null];
(statearr_13906[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13906[(1)] = (1));

return statearr_13906;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13890){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13890);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13908){var ex__12075__auto__ = e13908;
var statearr_13909_15509 = state_13890;
(statearr_13909_15509[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13890[(4)]))){
var statearr_13910_15549 = state_13890;
(statearr_13910_15549[(1)] = cljs.core.first((state_13890[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15551 = state_13890;
state_13890 = G__15551;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13912 = f__12108__auto__();
(statearr_13912[(6)] = c__12107__auto___15429);

return statearr_13912;
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
var G__13914 = arguments.length;
switch (G__13914) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13979){
var state_val_13980 = (state_13979[(1)]);
if((state_val_13980 === (7))){
var inst_13975 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_13981_15566 = state_13979__$1;
(statearr_13981_15566[(2)] = inst_13975);

(statearr_13981_15566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (20))){
var inst_13945 = (state_13979[(7)]);
var inst_13956 = (state_13979[(2)]);
var inst_13957 = cljs.core.next(inst_13945);
var inst_13931 = inst_13957;
var inst_13932 = null;
var inst_13933 = (0);
var inst_13934 = (0);
var state_13979__$1 = (function (){var statearr_13982 = state_13979;
(statearr_13982[(8)] = inst_13932);

(statearr_13982[(9)] = inst_13931);

(statearr_13982[(10)] = inst_13956);

(statearr_13982[(11)] = inst_13934);

(statearr_13982[(12)] = inst_13933);

return statearr_13982;
})();
var statearr_13983_15575 = state_13979__$1;
(statearr_13983_15575[(2)] = null);

(statearr_13983_15575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (1))){
var state_13979__$1 = state_13979;
var statearr_13984_15577 = state_13979__$1;
(statearr_13984_15577[(2)] = null);

(statearr_13984_15577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (4))){
var inst_13920 = (state_13979[(13)]);
var inst_13920__$1 = (state_13979[(2)]);
var inst_13921 = (inst_13920__$1 == null);
var state_13979__$1 = (function (){var statearr_13985 = state_13979;
(statearr_13985[(13)] = inst_13920__$1);

return statearr_13985;
})();
if(cljs.core.truth_(inst_13921)){
var statearr_13986_15580 = state_13979__$1;
(statearr_13986_15580[(1)] = (5));

} else {
var statearr_13987_15584 = state_13979__$1;
(statearr_13987_15584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (15))){
var state_13979__$1 = state_13979;
var statearr_13991_15589 = state_13979__$1;
(statearr_13991_15589[(2)] = null);

(statearr_13991_15589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (21))){
var state_13979__$1 = state_13979;
var statearr_13992_15592 = state_13979__$1;
(statearr_13992_15592[(2)] = null);

(statearr_13992_15592[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (13))){
var inst_13932 = (state_13979[(8)]);
var inst_13931 = (state_13979[(9)]);
var inst_13934 = (state_13979[(11)]);
var inst_13933 = (state_13979[(12)]);
var inst_13941 = (state_13979[(2)]);
var inst_13942 = (inst_13934 + (1));
var tmp13988 = inst_13932;
var tmp13989 = inst_13931;
var tmp13990 = inst_13933;
var inst_13931__$1 = tmp13989;
var inst_13932__$1 = tmp13988;
var inst_13933__$1 = tmp13990;
var inst_13934__$1 = inst_13942;
var state_13979__$1 = (function (){var statearr_13993 = state_13979;
(statearr_13993[(8)] = inst_13932__$1);

(statearr_13993[(9)] = inst_13931__$1);

(statearr_13993[(14)] = inst_13941);

(statearr_13993[(11)] = inst_13934__$1);

(statearr_13993[(12)] = inst_13933__$1);

return statearr_13993;
})();
var statearr_13994_15599 = state_13979__$1;
(statearr_13994_15599[(2)] = null);

(statearr_13994_15599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (22))){
var state_13979__$1 = state_13979;
var statearr_13995_15602 = state_13979__$1;
(statearr_13995_15602[(2)] = null);

(statearr_13995_15602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (6))){
var inst_13920 = (state_13979[(13)]);
var inst_13929 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13920) : f.call(null,inst_13920));
var inst_13930 = cljs.core.seq(inst_13929);
var inst_13931 = inst_13930;
var inst_13932 = null;
var inst_13933 = (0);
var inst_13934 = (0);
var state_13979__$1 = (function (){var statearr_13996 = state_13979;
(statearr_13996[(8)] = inst_13932);

(statearr_13996[(9)] = inst_13931);

(statearr_13996[(11)] = inst_13934);

(statearr_13996[(12)] = inst_13933);

return statearr_13996;
})();
var statearr_13997_15606 = state_13979__$1;
(statearr_13997_15606[(2)] = null);

(statearr_13997_15606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (17))){
var inst_13945 = (state_13979[(7)]);
var inst_13949 = cljs.core.chunk_first(inst_13945);
var inst_13950 = cljs.core.chunk_rest(inst_13945);
var inst_13951 = cljs.core.count(inst_13949);
var inst_13931 = inst_13950;
var inst_13932 = inst_13949;
var inst_13933 = inst_13951;
var inst_13934 = (0);
var state_13979__$1 = (function (){var statearr_14005 = state_13979;
(statearr_14005[(8)] = inst_13932);

(statearr_14005[(9)] = inst_13931);

(statearr_14005[(11)] = inst_13934);

(statearr_14005[(12)] = inst_13933);

return statearr_14005;
})();
var statearr_14006_15618 = state_13979__$1;
(statearr_14006_15618[(2)] = null);

(statearr_14006_15618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (3))){
var inst_13977 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13979__$1,inst_13977);
} else {
if((state_val_13980 === (12))){
var inst_13965 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_14007_15620 = state_13979__$1;
(statearr_14007_15620[(2)] = inst_13965);

(statearr_14007_15620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (2))){
var state_13979__$1 = state_13979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13979__$1,(4),in$);
} else {
if((state_val_13980 === (23))){
var inst_13973 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_14008_15622 = state_13979__$1;
(statearr_14008_15622[(2)] = inst_13973);

(statearr_14008_15622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (19))){
var inst_13960 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_14009_15627 = state_13979__$1;
(statearr_14009_15627[(2)] = inst_13960);

(statearr_14009_15627[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (11))){
var inst_13931 = (state_13979[(9)]);
var inst_13945 = (state_13979[(7)]);
var inst_13945__$1 = cljs.core.seq(inst_13931);
var state_13979__$1 = (function (){var statearr_14010 = state_13979;
(statearr_14010[(7)] = inst_13945__$1);

return statearr_14010;
})();
if(inst_13945__$1){
var statearr_14011_15632 = state_13979__$1;
(statearr_14011_15632[(1)] = (14));

} else {
var statearr_14012_15633 = state_13979__$1;
(statearr_14012_15633[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (9))){
var inst_13967 = (state_13979[(2)]);
var inst_13968 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13979__$1 = (function (){var statearr_14013 = state_13979;
(statearr_14013[(15)] = inst_13967);

return statearr_14013;
})();
if(cljs.core.truth_(inst_13968)){
var statearr_14014_15634 = state_13979__$1;
(statearr_14014_15634[(1)] = (21));

} else {
var statearr_14015_15635 = state_13979__$1;
(statearr_14015_15635[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (5))){
var inst_13923 = cljs.core.async.close_BANG_(out);
var state_13979__$1 = state_13979;
var statearr_14016_15636 = state_13979__$1;
(statearr_14016_15636[(2)] = inst_13923);

(statearr_14016_15636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (14))){
var inst_13945 = (state_13979[(7)]);
var inst_13947 = cljs.core.chunked_seq_QMARK_(inst_13945);
var state_13979__$1 = state_13979;
if(inst_13947){
var statearr_14017_15637 = state_13979__$1;
(statearr_14017_15637[(1)] = (17));

} else {
var statearr_14018_15638 = state_13979__$1;
(statearr_14018_15638[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (16))){
var inst_13963 = (state_13979[(2)]);
var state_13979__$1 = state_13979;
var statearr_14055_15639 = state_13979__$1;
(statearr_14055_15639[(2)] = inst_13963);

(statearr_14055_15639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13980 === (10))){
var inst_13932 = (state_13979[(8)]);
var inst_13934 = (state_13979[(11)]);
var inst_13939 = cljs.core._nth(inst_13932,inst_13934);
var state_13979__$1 = state_13979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13979__$1,(13),out,inst_13939);
} else {
if((state_val_13980 === (18))){
var inst_13945 = (state_13979[(7)]);
var inst_13954 = cljs.core.first(inst_13945);
var state_13979__$1 = state_13979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13979__$1,(20),out,inst_13954);
} else {
if((state_val_13980 === (8))){
var inst_13934 = (state_13979[(11)]);
var inst_13933 = (state_13979[(12)]);
var inst_13936 = (inst_13934 < inst_13933);
var inst_13937 = inst_13936;
var state_13979__$1 = state_13979;
if(cljs.core.truth_(inst_13937)){
var statearr_14056_15640 = state_13979__$1;
(statearr_14056_15640[(1)] = (10));

} else {
var statearr_14057_15641 = state_13979__$1;
(statearr_14057_15641[(1)] = (11));

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
var statearr_14058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14058[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14058[(1)] = (1));

return statearr_14058;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_13979){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13979);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14059){var ex__12075__auto__ = e14059;
var statearr_14060_15642 = state_13979;
(statearr_14060_15642[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13979[(4)]))){
var statearr_14061_15643 = state_13979;
(statearr_14061_15643[(1)] = cljs.core.first((state_13979[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15644 = state_13979;
state_13979 = G__15644;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_13979){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_13979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14062 = f__12108__auto__();
(statearr_14062[(6)] = c__12107__auto__);

return statearr_14062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14064 = arguments.length;
switch (G__14064) {
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
var G__14066 = arguments.length;
switch (G__14066) {
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
var G__14073 = arguments.length;
switch (G__14073) {
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
var c__12107__auto___15658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14097){
var state_val_14098 = (state_14097[(1)]);
if((state_val_14098 === (7))){
var inst_14092 = (state_14097[(2)]);
var state_14097__$1 = state_14097;
var statearr_14099_15662 = state_14097__$1;
(statearr_14099_15662[(2)] = inst_14092);

(statearr_14099_15662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (1))){
var inst_14074 = null;
var state_14097__$1 = (function (){var statearr_14100 = state_14097;
(statearr_14100[(7)] = inst_14074);

return statearr_14100;
})();
var statearr_14101_15664 = state_14097__$1;
(statearr_14101_15664[(2)] = null);

(statearr_14101_15664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (4))){
var inst_14077 = (state_14097[(8)]);
var inst_14077__$1 = (state_14097[(2)]);
var inst_14078 = (inst_14077__$1 == null);
var inst_14079 = cljs.core.not(inst_14078);
var state_14097__$1 = (function (){var statearr_14138 = state_14097;
(statearr_14138[(8)] = inst_14077__$1);

return statearr_14138;
})();
if(inst_14079){
var statearr_14139_15670 = state_14097__$1;
(statearr_14139_15670[(1)] = (5));

} else {
var statearr_14140_15673 = state_14097__$1;
(statearr_14140_15673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (6))){
var state_14097__$1 = state_14097;
var statearr_14141_15675 = state_14097__$1;
(statearr_14141_15675[(2)] = null);

(statearr_14141_15675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (3))){
var inst_14094 = (state_14097[(2)]);
var inst_14095 = cljs.core.async.close_BANG_(out);
var state_14097__$1 = (function (){var statearr_14142 = state_14097;
(statearr_14142[(9)] = inst_14094);

return statearr_14142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14097__$1,inst_14095);
} else {
if((state_val_14098 === (2))){
var state_14097__$1 = state_14097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14097__$1,(4),ch);
} else {
if((state_val_14098 === (11))){
var inst_14077 = (state_14097[(8)]);
var inst_14086 = (state_14097[(2)]);
var inst_14074 = inst_14077;
var state_14097__$1 = (function (){var statearr_14143 = state_14097;
(statearr_14143[(10)] = inst_14086);

(statearr_14143[(7)] = inst_14074);

return statearr_14143;
})();
var statearr_14144_15682 = state_14097__$1;
(statearr_14144_15682[(2)] = null);

(statearr_14144_15682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (9))){
var inst_14077 = (state_14097[(8)]);
var state_14097__$1 = state_14097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14097__$1,(11),out,inst_14077);
} else {
if((state_val_14098 === (5))){
var inst_14074 = (state_14097[(7)]);
var inst_14077 = (state_14097[(8)]);
var inst_14081 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14077,inst_14074);
var state_14097__$1 = state_14097;
if(inst_14081){
var statearr_14146_15685 = state_14097__$1;
(statearr_14146_15685[(1)] = (8));

} else {
var statearr_14147_15687 = state_14097__$1;
(statearr_14147_15687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (10))){
var inst_14089 = (state_14097[(2)]);
var state_14097__$1 = state_14097;
var statearr_14148_15688 = state_14097__$1;
(statearr_14148_15688[(2)] = inst_14089);

(statearr_14148_15688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (8))){
var inst_14074 = (state_14097[(7)]);
var tmp14145 = inst_14074;
var inst_14074__$1 = tmp14145;
var state_14097__$1 = (function (){var statearr_14149 = state_14097;
(statearr_14149[(7)] = inst_14074__$1);

return statearr_14149;
})();
var statearr_14150_15692 = state_14097__$1;
(statearr_14150_15692[(2)] = null);

(statearr_14150_15692[(1)] = (2));


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
var statearr_14151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14151[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14151[(1)] = (1));

return statearr_14151;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14097){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14097);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14152){var ex__12075__auto__ = e14152;
var statearr_14153_15693 = state_14097;
(statearr_14153_15693[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14097[(4)]))){
var statearr_14154_15694 = state_14097;
(statearr_14154_15694[(1)] = cljs.core.first((state_14097[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15697 = state_14097;
state_14097 = G__15697;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14155 = f__12108__auto__();
(statearr_14155[(6)] = c__12107__auto___15658);

return statearr_14155;
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
var G__14174 = arguments.length;
switch (G__14174) {
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
var c__12107__auto___15701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14228){
var state_val_14229 = (state_14228[(1)]);
if((state_val_14229 === (7))){
var inst_14208 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14230_15702 = state_14228__$1;
(statearr_14230_15702[(2)] = inst_14208);

(statearr_14230_15702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (1))){
var inst_14175 = (new Array(n));
var inst_14176 = inst_14175;
var inst_14177 = (0);
var state_14228__$1 = (function (){var statearr_14231 = state_14228;
(statearr_14231[(7)] = inst_14176);

(statearr_14231[(8)] = inst_14177);

return statearr_14231;
})();
var statearr_14232_15704 = state_14228__$1;
(statearr_14232_15704[(2)] = null);

(statearr_14232_15704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (4))){
var inst_14180 = (state_14228[(9)]);
var inst_14180__$1 = (state_14228[(2)]);
var inst_14181 = (inst_14180__$1 == null);
var inst_14182 = cljs.core.not(inst_14181);
var state_14228__$1 = (function (){var statearr_14233 = state_14228;
(statearr_14233[(9)] = inst_14180__$1);

return statearr_14233;
})();
if(inst_14182){
var statearr_14234_15705 = state_14228__$1;
(statearr_14234_15705[(1)] = (5));

} else {
var statearr_14235_15706 = state_14228__$1;
(statearr_14235_15706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (15))){
var inst_14202 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14236_15707 = state_14228__$1;
(statearr_14236_15707[(2)] = inst_14202);

(statearr_14236_15707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (13))){
var state_14228__$1 = state_14228;
var statearr_14237_15708 = state_14228__$1;
(statearr_14237_15708[(2)] = null);

(statearr_14237_15708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (6))){
var inst_14177 = (state_14228[(8)]);
var inst_14198 = (inst_14177 > (0));
var state_14228__$1 = state_14228;
if(cljs.core.truth_(inst_14198)){
var statearr_14238_15709 = state_14228__$1;
(statearr_14238_15709[(1)] = (12));

} else {
var statearr_14239_15710 = state_14228__$1;
(statearr_14239_15710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (3))){
var inst_14210 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14228__$1,inst_14210);
} else {
if((state_val_14229 === (12))){
var inst_14176 = (state_14228[(7)]);
var inst_14200 = cljs.core.vec(inst_14176);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14228__$1,(15),out,inst_14200);
} else {
if((state_val_14229 === (2))){
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14228__$1,(4),ch);
} else {
if((state_val_14229 === (11))){
var inst_14192 = (state_14228[(2)]);
var inst_14193 = (new Array(n));
var inst_14176 = inst_14193;
var inst_14177 = (0);
var state_14228__$1 = (function (){var statearr_14240 = state_14228;
(statearr_14240[(7)] = inst_14176);

(statearr_14240[(8)] = inst_14177);

(statearr_14240[(10)] = inst_14192);

return statearr_14240;
})();
var statearr_14241_15711 = state_14228__$1;
(statearr_14241_15711[(2)] = null);

(statearr_14241_15711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (9))){
var inst_14176 = (state_14228[(7)]);
var inst_14190 = cljs.core.vec(inst_14176);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14228__$1,(11),out,inst_14190);
} else {
if((state_val_14229 === (5))){
var inst_14180 = (state_14228[(9)]);
var inst_14176 = (state_14228[(7)]);
var inst_14185 = (state_14228[(11)]);
var inst_14177 = (state_14228[(8)]);
var inst_14184 = (inst_14176[inst_14177] = inst_14180);
var inst_14185__$1 = (inst_14177 + (1));
var inst_14186 = (inst_14185__$1 < n);
var state_14228__$1 = (function (){var statearr_14242 = state_14228;
(statearr_14242[(12)] = inst_14184);

(statearr_14242[(11)] = inst_14185__$1);

return statearr_14242;
})();
if(cljs.core.truth_(inst_14186)){
var statearr_14243_15712 = state_14228__$1;
(statearr_14243_15712[(1)] = (8));

} else {
var statearr_14244_15713 = state_14228__$1;
(statearr_14244_15713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (14))){
var inst_14205 = (state_14228[(2)]);
var inst_14206 = cljs.core.async.close_BANG_(out);
var state_14228__$1 = (function (){var statearr_14246 = state_14228;
(statearr_14246[(13)] = inst_14205);

return statearr_14246;
})();
var statearr_14257_15714 = state_14228__$1;
(statearr_14257_15714[(2)] = inst_14206);

(statearr_14257_15714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (10))){
var inst_14196 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14258_15715 = state_14228__$1;
(statearr_14258_15715[(2)] = inst_14196);

(statearr_14258_15715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (8))){
var inst_14176 = (state_14228[(7)]);
var inst_14185 = (state_14228[(11)]);
var tmp14245 = inst_14176;
var inst_14176__$1 = tmp14245;
var inst_14177 = inst_14185;
var state_14228__$1 = (function (){var statearr_14259 = state_14228;
(statearr_14259[(7)] = inst_14176__$1);

(statearr_14259[(8)] = inst_14177);

return statearr_14259;
})();
var statearr_14260_15716 = state_14228__$1;
(statearr_14260_15716[(2)] = null);

(statearr_14260_15716[(1)] = (2));


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
var statearr_14261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14261[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14261[(1)] = (1));

return statearr_14261;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14228){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14228);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14262){var ex__12075__auto__ = e14262;
var statearr_14263_15717 = state_14228;
(statearr_14263_15717[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14228[(4)]))){
var statearr_14264_15718 = state_14228;
(statearr_14264_15718[(1)] = cljs.core.first((state_14228[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15719 = state_14228;
state_14228 = G__15719;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14265 = f__12108__auto__();
(statearr_14265[(6)] = c__12107__auto___15701);

return statearr_14265;
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
var G__14267 = arguments.length;
switch (G__14267) {
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
var c__12107__auto___15721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14309){
var state_val_14310 = (state_14309[(1)]);
if((state_val_14310 === (7))){
var inst_14305 = (state_14309[(2)]);
var state_14309__$1 = state_14309;
var statearr_14311_15722 = state_14309__$1;
(statearr_14311_15722[(2)] = inst_14305);

(statearr_14311_15722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (1))){
var inst_14268 = [];
var inst_14269 = inst_14268;
var inst_14270 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14309__$1 = (function (){var statearr_14312 = state_14309;
(statearr_14312[(7)] = inst_14270);

(statearr_14312[(8)] = inst_14269);

return statearr_14312;
})();
var statearr_14313_15723 = state_14309__$1;
(statearr_14313_15723[(2)] = null);

(statearr_14313_15723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (4))){
var inst_14273 = (state_14309[(9)]);
var inst_14273__$1 = (state_14309[(2)]);
var inst_14274 = (inst_14273__$1 == null);
var inst_14275 = cljs.core.not(inst_14274);
var state_14309__$1 = (function (){var statearr_14314 = state_14309;
(statearr_14314[(9)] = inst_14273__$1);

return statearr_14314;
})();
if(inst_14275){
var statearr_14315_15724 = state_14309__$1;
(statearr_14315_15724[(1)] = (5));

} else {
var statearr_14316_15725 = state_14309__$1;
(statearr_14316_15725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (15))){
var inst_14299 = (state_14309[(2)]);
var state_14309__$1 = state_14309;
var statearr_14317_15726 = state_14309__$1;
(statearr_14317_15726[(2)] = inst_14299);

(statearr_14317_15726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (13))){
var state_14309__$1 = state_14309;
var statearr_14318_15727 = state_14309__$1;
(statearr_14318_15727[(2)] = null);

(statearr_14318_15727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (6))){
var inst_14269 = (state_14309[(8)]);
var inst_14294 = inst_14269.length;
var inst_14295 = (inst_14294 > (0));
var state_14309__$1 = state_14309;
if(cljs.core.truth_(inst_14295)){
var statearr_14319_15728 = state_14309__$1;
(statearr_14319_15728[(1)] = (12));

} else {
var statearr_14320_15729 = state_14309__$1;
(statearr_14320_15729[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (3))){
var inst_14307 = (state_14309[(2)]);
var state_14309__$1 = state_14309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14309__$1,inst_14307);
} else {
if((state_val_14310 === (12))){
var inst_14269 = (state_14309[(8)]);
var inst_14297 = cljs.core.vec(inst_14269);
var state_14309__$1 = state_14309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14309__$1,(15),out,inst_14297);
} else {
if((state_val_14310 === (2))){
var state_14309__$1 = state_14309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14309__$1,(4),ch);
} else {
if((state_val_14310 === (11))){
var inst_14273 = (state_14309[(9)]);
var inst_14277 = (state_14309[(10)]);
var inst_14287 = (state_14309[(2)]);
var inst_14288 = [];
var inst_14289 = inst_14288.push(inst_14273);
var inst_14269 = inst_14288;
var inst_14270 = inst_14277;
var state_14309__$1 = (function (){var statearr_14321 = state_14309;
(statearr_14321[(7)] = inst_14270);

(statearr_14321[(11)] = inst_14289);

(statearr_14321[(12)] = inst_14287);

(statearr_14321[(8)] = inst_14269);

return statearr_14321;
})();
var statearr_14324_15733 = state_14309__$1;
(statearr_14324_15733[(2)] = null);

(statearr_14324_15733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (9))){
var inst_14269 = (state_14309[(8)]);
var inst_14285 = cljs.core.vec(inst_14269);
var state_14309__$1 = state_14309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14309__$1,(11),out,inst_14285);
} else {
if((state_val_14310 === (5))){
var inst_14273 = (state_14309[(9)]);
var inst_14270 = (state_14309[(7)]);
var inst_14277 = (state_14309[(10)]);
var inst_14277__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14273) : f.call(null,inst_14273));
var inst_14278 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14277__$1,inst_14270);
var inst_14279 = cljs.core.keyword_identical_QMARK_(inst_14270,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14280 = ((inst_14278) || (inst_14279));
var state_14309__$1 = (function (){var statearr_14326 = state_14309;
(statearr_14326[(10)] = inst_14277__$1);

return statearr_14326;
})();
if(cljs.core.truth_(inst_14280)){
var statearr_14327_15737 = state_14309__$1;
(statearr_14327_15737[(1)] = (8));

} else {
var statearr_14328_15738 = state_14309__$1;
(statearr_14328_15738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (14))){
var inst_14302 = (state_14309[(2)]);
var inst_14303 = cljs.core.async.close_BANG_(out);
var state_14309__$1 = (function (){var statearr_14333 = state_14309;
(statearr_14333[(13)] = inst_14302);

return statearr_14333;
})();
var statearr_14334_15739 = state_14309__$1;
(statearr_14334_15739[(2)] = inst_14303);

(statearr_14334_15739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (10))){
var inst_14292 = (state_14309[(2)]);
var state_14309__$1 = state_14309;
var statearr_14335_15741 = state_14309__$1;
(statearr_14335_15741[(2)] = inst_14292);

(statearr_14335_15741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (8))){
var inst_14273 = (state_14309[(9)]);
var inst_14269 = (state_14309[(8)]);
var inst_14277 = (state_14309[(10)]);
var inst_14282 = inst_14269.push(inst_14273);
var tmp14329 = inst_14269;
var inst_14269__$1 = tmp14329;
var inst_14270 = inst_14277;
var state_14309__$1 = (function (){var statearr_14336 = state_14309;
(statearr_14336[(7)] = inst_14270);

(statearr_14336[(14)] = inst_14282);

(statearr_14336[(8)] = inst_14269__$1);

return statearr_14336;
})();
var statearr_14337_15752 = state_14309__$1;
(statearr_14337_15752[(2)] = null);

(statearr_14337_15752[(1)] = (2));


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
var statearr_14343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14343[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14343[(1)] = (1));

return statearr_14343;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14309){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14309);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14346){var ex__12075__auto__ = e14346;
var statearr_14347_15757 = state_14309;
(statearr_14347_15757[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14309[(4)]))){
var statearr_14348_15758 = state_14309;
(statearr_14348_15758[(1)] = cljs.core.first((state_14309[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15759 = state_14309;
state_14309 = G__15759;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14349 = f__12108__auto__();
(statearr_14349[(6)] = c__12107__auto___15721);

return statearr_14349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
