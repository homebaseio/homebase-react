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
var val_14489 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14489) : fn1.call(null,val_14489));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14489) : fn1.call(null,val_14489));
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
var n__4613__auto___14502 = n;
var x_14503 = (0);
while(true){
if((x_14503 < n__4613__auto___14502)){
(a[x_14503] = x_14503);

var G__14504 = (x_14503 + (1));
x_14503 = G__14504;
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
var G__14532 = (i + (1));
i = G__14532;
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
var len__4736__auto___14534 = arguments.length;
var i__4737__auto___14535 = (0);
while(true){
if((i__4737__auto___14535 < len__4736__auto___14534)){
args__4742__auto__.push((arguments[i__4737__auto___14535]));

var G__14536 = (i__4737__auto___14535 + (1));
i__4737__auto___14535 = G__14536;
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
var c__12107__auto___14547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_14552 = state_12218__$1;
(statearr_12220_14552[(2)] = inst_12214);

(statearr_12220_14552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_14554 = state_12218__$1;
(statearr_12221_14554[(2)] = null);

(statearr_12221_14554[(1)] = (2));


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
var statearr_12223_14555 = state_12218__$1;
(statearr_12223_14555[(1)] = (5));

} else {
var statearr_12224_14556 = state_12218__$1;
(statearr_12224_14556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_14583 = state_12218__$1;
(statearr_12225_14583[(2)] = null);

(statearr_12225_14583[(1)] = (14));


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
var statearr_12226_14586 = state_12218__$1;
(statearr_12226_14586[(2)] = null);

(statearr_12226_14586[(1)] = (2));


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
var statearr_12227_14589 = state_12218__$1;
(statearr_12227_14589[(1)] = (12));

} else {
var statearr_12228_14591 = state_12218__$1;
(statearr_12228_14591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_14593 = state_12218__$1;
(statearr_12229_14593[(2)] = null);

(statearr_12229_14593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_14594 = state_12218__$1;
(statearr_12230_14594[(1)] = (8));

} else {
var statearr_12231_14595 = state_12218__$1;
(statearr_12231_14595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_14597 = state_12218__$1;
(statearr_12232_14597[(2)] = inst_12212);

(statearr_12232_14597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_14598 = state_12218__$1;
(statearr_12233_14598[(2)] = inst_12204);

(statearr_12233_14598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_14606 = state_12218__$1;
(statearr_12234_14606[(2)] = inst_12201);

(statearr_12234_14606[(1)] = (10));


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
var statearr_12237_14608 = state_12218;
(statearr_12237_14608[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_14609 = state_12218;
(statearr_12238_14609[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14610 = state_12218;
state_12218 = G__14610;
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
(statearr_12239[(6)] = c__12107__auto___14547);

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
var c__12107__auto___14612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_14615 = state_12248;
(statearr_12253_14615[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14616 = state_12248;
(statearr_12254_14616[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14617 = state_12248;
state_12248 = G__14617;
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
(statearr_12255[(6)] = c__12107__auto___14612);

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
var n__4613__auto___14619 = n;
var __14620 = (0);
while(true){
if((__14620 < n__4613__auto___14619)){
var G__12260_14621 = type;
var G__12260_14622__$1 = (((G__12260_14621 instanceof cljs.core.Keyword))?G__12260_14621.fqn:null);
switch (G__12260_14622__$1) {
case "compute":
var c__12107__auto___14625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14620,c__12107__auto___14625,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14620,c__12107__auto___14625,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14626 = state_12273__$1;
(statearr_12275_14626[(2)] = null);

(statearr_12275_14626[(1)] = (2));


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
var statearr_12276_14632 = state_12273__$1;
(statearr_12276_14632[(1)] = (5));

} else {
var statearr_12277_14633 = state_12273__$1;
(statearr_12277_14633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14635 = state_12273__$1;
(statearr_12278_14635[(2)] = null);

(statearr_12278_14635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14636 = state_12273__$1;
(statearr_12279_14636[(2)] = null);

(statearr_12279_14636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14637 = state_12273__$1;
(statearr_12280_14637[(2)] = inst_12269);

(statearr_12280_14637[(1)] = (3));


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
});})(__14620,c__12107__auto___14625,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async))
;
return ((function (__14620,switch__12071__auto__,c__12107__auto___14625,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async){
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
var statearr_12283_14639 = state_12273;
(statearr_12283_14639[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14640 = state_12273;
(statearr_12284_14640[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14641 = state_12273;
state_12273 = G__14641;
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
;})(__14620,switch__12071__auto__,c__12107__auto___14625,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14625);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14620,c__12107__auto___14625,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14620,c__12107__auto___14643,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14620,c__12107__auto___14643,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_14644 = state_12298__$1;
(statearr_12300_14644[(2)] = null);

(statearr_12300_14644[(1)] = (2));


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
var statearr_12301_14646 = state_12298__$1;
(statearr_12301_14646[(1)] = (5));

} else {
var statearr_12302_14647 = state_12298__$1;
(statearr_12302_14647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_14648 = state_12298__$1;
(statearr_12303_14648[(2)] = null);

(statearr_12303_14648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_14650 = state_12298__$1;
(statearr_12304_14650[(2)] = null);

(statearr_12304_14650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_14651 = state_12298__$1;
(statearr_12305_14651[(2)] = inst_12294);

(statearr_12305_14651[(1)] = (3));


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
});})(__14620,c__12107__auto___14643,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async))
;
return ((function (__14620,switch__12071__auto__,c__12107__auto___14643,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async){
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
var statearr_12308_14653 = state_12298;
(statearr_12308_14653[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_14654 = state_12298;
(statearr_12309_14654[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14660 = state_12298;
state_12298 = G__14660;
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
;})(__14620,switch__12071__auto__,c__12107__auto___14643,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14643);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14620,c__12107__auto___14643,G__12260_14621,G__12260_14622__$1,n__4613__auto___14619,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14622__$1)].join('')));

}

var G__14662 = (__14620 + (1));
__14620 = G__14662;
continue;
} else {
}
break;
}

var c__12107__auto___14663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_14665 = state_12332__$1;
(statearr_12334_14665[(2)] = inst_12328);

(statearr_12334_14665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_14666 = state_12332__$1;
(statearr_12335_14666[(2)] = null);

(statearr_12335_14666[(1)] = (2));


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
var statearr_12337_14667 = state_12332__$1;
(statearr_12337_14667[(1)] = (5));

} else {
var statearr_12338_14668 = state_12332__$1;
(statearr_12338_14668[(1)] = (6));

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
var statearr_12341_14671 = state_12332__$1;
(statearr_12341_14671[(2)] = null);

(statearr_12341_14671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14672 = state_12332__$1;
(statearr_12342_14672[(2)] = inst_12316);

(statearr_12342_14672[(1)] = (7));


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
var statearr_12346_14675 = state_12332;
(statearr_12346_14675[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14676 = state_12332;
(statearr_12347_14676[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14677 = state_12332;
state_12332 = G__14677;
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
(statearr_12348[(6)] = c__12107__auto___14663);

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
var statearr_12388_14678 = state_12386__$1;
(statearr_12388_14678[(2)] = inst_12382);

(statearr_12388_14678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_14679 = state_12386__$1;
(statearr_12389_14679[(2)] = null);

(statearr_12389_14679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_14680 = state_12386__$1;
(statearr_12390_14680[(2)] = null);

(statearr_12390_14680[(1)] = (2));


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
var statearr_12392_14681 = state_12386__$1;
(statearr_12392_14681[(1)] = (5));

} else {
var statearr_12393_14682 = state_12386__$1;
(statearr_12393_14682[(1)] = (6));

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
var statearr_12394_14683 = state_12386__$1;
(statearr_12394_14683[(2)] = inst_12377);

(statearr_12394_14683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_14684 = state_12386__$1;
(statearr_12396_14684[(2)] = null);

(statearr_12396_14684[(1)] = (2));


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
var statearr_12397_14685 = state_12386__$1;
(statearr_12397_14685[(1)] = (19));

} else {
var statearr_12398_14686 = state_12386__$1;
(statearr_12398_14686[(1)] = (20));

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
var statearr_12399_14687 = state_12386__$1;
(statearr_12399_14687[(2)] = null);

(statearr_12399_14687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_14688 = state_12386__$1;
(statearr_12401_14688[(2)] = null);

(statearr_12401_14688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_14689 = state_12386__$1;
(statearr_12402_14689[(2)] = null);

(statearr_12402_14689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_14690 = state_12386__$1;
(statearr_12403_14690[(1)] = (8));

} else {
var statearr_12404_14691 = state_12386__$1;
(statearr_12404_14691[(1)] = (9));

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
var statearr_12406_14692 = state_12386__$1;
(statearr_12406_14692[(1)] = (15));

} else {
var statearr_12407_14693 = state_12386__$1;
(statearr_12407_14693[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_14694 = state_12386__$1;
(statearr_12408_14694[(2)] = false);

(statearr_12408_14694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_14695 = state_12386__$1;
(statearr_12409_14695[(2)] = inst_12358);

(statearr_12409_14695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_14703 = state_12386__$1;
(statearr_12410_14703[(2)] = inst_12369);

(statearr_12410_14703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_14704 = state_12386__$1;
(statearr_12411_14704[(2)] = inst_12355);

(statearr_12411_14704[(1)] = (10));


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
var statearr_12414_14705 = state_12386;
(statearr_12414_14705[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_14706 = state_12386;
(statearr_12415_14706[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14707 = state_12386;
state_12386 = G__14707;
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
var G__12422 = arguments.length;
switch (G__12422) {
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
var c__12107__auto___14711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12450_14712 = state_12448__$1;
(statearr_12450_14712[(2)] = inst_12444);

(statearr_12450_14712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (1))){
var state_12448__$1 = state_12448;
var statearr_12451_14713 = state_12448__$1;
(statearr_12451_14713[(2)] = null);

(statearr_12451_14713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (4))){
var inst_12425 = (state_12448[(7)]);
var inst_12425__$1 = (state_12448[(2)]);
var inst_12426 = (inst_12425__$1 == null);
var state_12448__$1 = (function (){var statearr_12452 = state_12448;
(statearr_12452[(7)] = inst_12425__$1);

return statearr_12452;
})();
if(cljs.core.truth_(inst_12426)){
var statearr_12453_14714 = state_12448__$1;
(statearr_12453_14714[(1)] = (5));

} else {
var statearr_12454_14715 = state_12448__$1;
(statearr_12454_14715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var state_12448__$1 = state_12448;
var statearr_12455_14723 = state_12448__$1;
(statearr_12455_14723[(2)] = null);

(statearr_12455_14723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12425 = (state_12448[(7)]);
var inst_12431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12425) : p.call(null,inst_12425));
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12431)){
var statearr_12456_14724 = state_12448__$1;
(statearr_12456_14724[(1)] = (9));

} else {
var statearr_12457_14725 = state_12448__$1;
(statearr_12457_14725[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (3))){
var inst_12446 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12448__$1,inst_12446);
} else {
if((state_val_12449 === (12))){
var state_12448__$1 = state_12448;
var statearr_12458_14726 = state_12448__$1;
(statearr_12458_14726[(2)] = null);

(statearr_12458_14726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (2))){
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12448__$1,(4),ch);
} else {
if((state_val_12449 === (11))){
var inst_12425 = (state_12448[(7)]);
var inst_12435 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12448__$1,(8),inst_12435,inst_12425);
} else {
if((state_val_12449 === (9))){
var state_12448__$1 = state_12448;
var statearr_12459_14727 = state_12448__$1;
(statearr_12459_14727[(2)] = tc);

(statearr_12459_14727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (5))){
var inst_12428 = cljs.core.async.close_BANG_(tc);
var inst_12429 = cljs.core.async.close_BANG_(fc);
var state_12448__$1 = (function (){var statearr_12460 = state_12448;
(statearr_12460[(8)] = inst_12428);

return statearr_12460;
})();
var statearr_12461_14728 = state_12448__$1;
(statearr_12461_14728[(2)] = inst_12429);

(statearr_12461_14728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12442 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12462_14729 = state_12448__$1;
(statearr_12462_14729[(2)] = inst_12442);

(statearr_12462_14729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var state_12448__$1 = state_12448;
var statearr_12463_14730 = state_12448__$1;
(statearr_12463_14730[(2)] = fc);

(statearr_12463_14730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12437 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12437)){
var statearr_12464_14731 = state_12448__$1;
(statearr_12464_14731[(1)] = (12));

} else {
var statearr_12465_14732 = state_12448__$1;
(statearr_12465_14732[(1)] = (13));

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
var statearr_12466 = [null,null,null,null,null,null,null,null,null];
(statearr_12466[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12466[(1)] = (1));

return statearr_12466;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12448){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12448);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12467){var ex__12075__auto__ = e12467;
var statearr_12468_14733 = state_12448;
(statearr_12468_14733[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12448[(4)]))){
var statearr_12469_14734 = state_12448;
(statearr_12469_14734[(1)] = cljs.core.first((state_12448[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14735 = state_12448;
state_12448 = G__14735;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12470 = f__12108__auto__();
(statearr_12470[(6)] = c__12107__auto___14711);

return statearr_12470;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12492){
var state_val_12493 = (state_12492[(1)]);
if((state_val_12493 === (7))){
var inst_12488 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12494_14736 = state_12492__$1;
(statearr_12494_14736[(2)] = inst_12488);

(statearr_12494_14736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (1))){
var inst_12471 = init;
var inst_12472 = inst_12471;
var state_12492__$1 = (function (){var statearr_12495 = state_12492;
(statearr_12495[(7)] = inst_12472);

return statearr_12495;
})();
var statearr_12496_14737 = state_12492__$1;
(statearr_12496_14737[(2)] = null);

(statearr_12496_14737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (4))){
var inst_12475 = (state_12492[(8)]);
var inst_12475__$1 = (state_12492[(2)]);
var inst_12476 = (inst_12475__$1 == null);
var state_12492__$1 = (function (){var statearr_12497 = state_12492;
(statearr_12497[(8)] = inst_12475__$1);

return statearr_12497;
})();
if(cljs.core.truth_(inst_12476)){
var statearr_12498_14738 = state_12492__$1;
(statearr_12498_14738[(1)] = (5));

} else {
var statearr_12499_14739 = state_12492__$1;
(statearr_12499_14739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (6))){
var inst_12475 = (state_12492[(8)]);
var inst_12479 = (state_12492[(9)]);
var inst_12472 = (state_12492[(7)]);
var inst_12479__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12472,inst_12475) : f.call(null,inst_12472,inst_12475));
var inst_12480 = cljs.core.reduced_QMARK_(inst_12479__$1);
var state_12492__$1 = (function (){var statearr_12500 = state_12492;
(statearr_12500[(9)] = inst_12479__$1);

return statearr_12500;
})();
if(inst_12480){
var statearr_12501_14740 = state_12492__$1;
(statearr_12501_14740[(1)] = (8));

} else {
var statearr_12502_14741 = state_12492__$1;
(statearr_12502_14741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (3))){
var inst_12490 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12492__$1,inst_12490);
} else {
if((state_val_12493 === (2))){
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12492__$1,(4),ch);
} else {
if((state_val_12493 === (9))){
var inst_12479 = (state_12492[(9)]);
var inst_12472 = inst_12479;
var state_12492__$1 = (function (){var statearr_12503 = state_12492;
(statearr_12503[(7)] = inst_12472);

return statearr_12503;
})();
var statearr_12504_14749 = state_12492__$1;
(statearr_12504_14749[(2)] = null);

(statearr_12504_14749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (5))){
var inst_12472 = (state_12492[(7)]);
var state_12492__$1 = state_12492;
var statearr_12505_14750 = state_12492__$1;
(statearr_12505_14750[(2)] = inst_12472);

(statearr_12505_14750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (10))){
var inst_12486 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12506_14751 = state_12492__$1;
(statearr_12506_14751[(2)] = inst_12486);

(statearr_12506_14751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (8))){
var inst_12479 = (state_12492[(9)]);
var inst_12482 = cljs.core.deref(inst_12479);
var state_12492__$1 = state_12492;
var statearr_12507_14752 = state_12492__$1;
(statearr_12507_14752[(2)] = inst_12482);

(statearr_12507_14752[(1)] = (10));


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
var statearr_12508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12508[(0)] = cljs$core$async$reduce_$_state_machine__12072__auto__);

(statearr_12508[(1)] = (1));

return statearr_12508;
});
var cljs$core$async$reduce_$_state_machine__12072__auto____1 = (function (state_12492){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12492);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12509){var ex__12075__auto__ = e12509;
var statearr_12510_14753 = state_12492;
(statearr_12510_14753[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12492[(4)]))){
var statearr_12511_14754 = state_12492;
(statearr_12511_14754[(1)] = cljs.core.first((state_12492[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14755 = state_12492;
state_12492 = G__14755;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12072__auto__ = function(state_12492){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12072__auto____1.call(this,state_12492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12072__auto____0;
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12072__auto____1;
return cljs$core$async$reduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12512 = f__12108__auto__();
(statearr_12512[(6)] = c__12107__auto__);

return statearr_12512;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12518){
var state_val_12519 = (state_12518[(1)]);
if((state_val_12519 === (1))){
var inst_12513 = cljs.core.async.reduce(f__$1,init,ch);
var state_12518__$1 = state_12518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12518__$1,(2),inst_12513);
} else {
if((state_val_12519 === (2))){
var inst_12515 = (state_12518[(2)]);
var inst_12516 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12515) : f__$1.call(null,inst_12515));
var state_12518__$1 = state_12518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12518__$1,inst_12516);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12520 = [null,null,null,null,null,null,null];
(statearr_12520[(0)] = cljs$core$async$transduce_$_state_machine__12072__auto__);

(statearr_12520[(1)] = (1));

return statearr_12520;
});
var cljs$core$async$transduce_$_state_machine__12072__auto____1 = (function (state_12518){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12518);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12521){var ex__12075__auto__ = e12521;
var statearr_12522_14756 = state_12518;
(statearr_12522_14756[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12518[(4)]))){
var statearr_12523_14757 = state_12518;
(statearr_12523_14757[(1)] = cljs.core.first((state_12518[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14758 = state_12518;
state_12518 = G__14758;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12072__auto__ = function(state_12518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12072__auto____1.call(this,state_12518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12072__auto____0;
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12072__auto____1;
return cljs$core$async$transduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12524 = f__12108__auto__();
(statearr_12524[(6)] = c__12107__auto__);

return statearr_12524;
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
var G__12526 = arguments.length;
switch (G__12526) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12551){
var state_val_12552 = (state_12551[(1)]);
if((state_val_12552 === (7))){
var inst_12533 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12553_14760 = state_12551__$1;
(statearr_12553_14760[(2)] = inst_12533);

(statearr_12553_14760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (1))){
var inst_12527 = cljs.core.seq(coll);
var inst_12528 = inst_12527;
var state_12551__$1 = (function (){var statearr_12554 = state_12551;
(statearr_12554[(7)] = inst_12528);

return statearr_12554;
})();
var statearr_12555_14761 = state_12551__$1;
(statearr_12555_14761[(2)] = null);

(statearr_12555_14761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (4))){
var inst_12528 = (state_12551[(7)]);
var inst_12531 = cljs.core.first(inst_12528);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12551__$1,(7),ch,inst_12531);
} else {
if((state_val_12552 === (13))){
var inst_12545 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12556_14769 = state_12551__$1;
(statearr_12556_14769[(2)] = inst_12545);

(statearr_12556_14769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (6))){
var inst_12536 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12536)){
var statearr_12557_14770 = state_12551__$1;
(statearr_12557_14770[(1)] = (8));

} else {
var statearr_12558_14771 = state_12551__$1;
(statearr_12558_14771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (3))){
var inst_12549 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12551__$1,inst_12549);
} else {
if((state_val_12552 === (12))){
var state_12551__$1 = state_12551;
var statearr_12559_14772 = state_12551__$1;
(statearr_12559_14772[(2)] = null);

(statearr_12559_14772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (2))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12528)){
var statearr_12560_14773 = state_12551__$1;
(statearr_12560_14773[(1)] = (4));

} else {
var statearr_12561_14774 = state_12551__$1;
(statearr_12561_14774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (11))){
var inst_12542 = cljs.core.async.close_BANG_(ch);
var state_12551__$1 = state_12551;
var statearr_12563_14775 = state_12551__$1;
(statearr_12563_14775[(2)] = inst_12542);

(statearr_12563_14775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (9))){
var state_12551__$1 = state_12551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12564_14776 = state_12551__$1;
(statearr_12564_14776[(1)] = (11));

} else {
var statearr_12565_14777 = state_12551__$1;
(statearr_12565_14777[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (5))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
var statearr_12566_14778 = state_12551__$1;
(statearr_12566_14778[(2)] = inst_12528);

(statearr_12566_14778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (10))){
var inst_12547 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12567_14779 = state_12551__$1;
(statearr_12567_14779[(2)] = inst_12547);

(statearr_12567_14779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (8))){
var inst_12528 = (state_12551[(7)]);
var inst_12538 = cljs.core.next(inst_12528);
var inst_12528__$1 = inst_12538;
var state_12551__$1 = (function (){var statearr_12571 = state_12551;
(statearr_12571[(7)] = inst_12528__$1);

return statearr_12571;
})();
var statearr_12572_14780 = state_12551__$1;
(statearr_12572_14780[(2)] = null);

(statearr_12572_14780[(1)] = (2));


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
var statearr_12573 = [null,null,null,null,null,null,null,null];
(statearr_12573[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12573[(1)] = (1));

return statearr_12573;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12551){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12551);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12574){var ex__12075__auto__ = e12574;
var statearr_12575_14781 = state_12551;
(statearr_12575_14781[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12551[(4)]))){
var statearr_12576_14782 = state_12551;
(statearr_12576_14782[(1)] = cljs.core.first((state_12551[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14783 = state_12551;
state_12551 = G__14783;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12581 = f__12108__auto__();
(statearr_12581[(6)] = c__12107__auto__);

return statearr_12581;
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
var G__12584 = arguments.length;
switch (G__12584) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14785 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14785(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14786 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14786(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14788 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14788(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14790 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14790(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12590 = (function (ch,cs,meta12591){
this.ch = ch;
this.cs = cs;
this.meta12591 = meta12591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12592,meta12591__$1){
var self__ = this;
var _12592__$1 = this;
return (new cljs.core.async.t_cljs$core$async12590(self__.ch,self__.cs,meta12591__$1));
}));

(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12592){
var self__ = this;
var _12592__$1 = this;
return self__.meta12591;
}));

(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12591","meta12591",-704441833,null)], null);
}));

(cljs.core.async.t_cljs$core$async12590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12590");

(cljs.core.async.t_cljs$core$async12590.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12590.
 */
cljs.core.async.__GT_t_cljs$core$async12590 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12590(ch__$1,cs__$1,meta12591){
return (new cljs.core.async.t_cljs$core$async12590(ch__$1,cs__$1,meta12591));
});

}

return (new cljs.core.async.t_cljs$core$async12590(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___14794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12751){
var state_val_12752 = (state_12751[(1)]);
if((state_val_12752 === (7))){
var inst_12747 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12753_14796 = state_12751__$1;
(statearr_12753_14796[(2)] = inst_12747);

(statearr_12753_14796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (20))){
var inst_12642 = (state_12751[(7)]);
var inst_12658 = cljs.core.first(inst_12642);
var inst_12659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12658,(0),null);
var inst_12660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12658,(1),null);
var state_12751__$1 = (function (){var statearr_12754 = state_12751;
(statearr_12754[(8)] = inst_12659);

return statearr_12754;
})();
if(cljs.core.truth_(inst_12660)){
var statearr_12755_14797 = state_12751__$1;
(statearr_12755_14797[(1)] = (22));

} else {
var statearr_12756_14798 = state_12751__$1;
(statearr_12756_14798[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (27))){
var inst_12693 = (state_12751[(9)]);
var inst_12600 = (state_12751[(10)]);
var inst_12691 = (state_12751[(11)]);
var inst_12698 = (state_12751[(12)]);
var inst_12698__$1 = cljs.core._nth(inst_12691,inst_12693);
var inst_12699 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12698__$1,inst_12600,done);
var state_12751__$1 = (function (){var statearr_12757 = state_12751;
(statearr_12757[(12)] = inst_12698__$1);

return statearr_12757;
})();
if(cljs.core.truth_(inst_12699)){
var statearr_12758_14800 = state_12751__$1;
(statearr_12758_14800[(1)] = (30));

} else {
var statearr_12759_14801 = state_12751__$1;
(statearr_12759_14801[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (1))){
var state_12751__$1 = state_12751;
var statearr_12760_14802 = state_12751__$1;
(statearr_12760_14802[(2)] = null);

(statearr_12760_14802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (24))){
var inst_12642 = (state_12751[(7)]);
var inst_12668 = (state_12751[(2)]);
var inst_12669 = cljs.core.next(inst_12642);
var inst_12610 = inst_12669;
var inst_12611 = null;
var inst_12612 = (0);
var inst_12613 = (0);
var state_12751__$1 = (function (){var statearr_12761 = state_12751;
(statearr_12761[(13)] = inst_12613);

(statearr_12761[(14)] = inst_12611);

(statearr_12761[(15)] = inst_12612);

(statearr_12761[(16)] = inst_12668);

(statearr_12761[(17)] = inst_12610);

return statearr_12761;
})();
var statearr_12762_14803 = state_12751__$1;
(statearr_12762_14803[(2)] = null);

(statearr_12762_14803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (39))){
var state_12751__$1 = state_12751;
var statearr_12766_14804 = state_12751__$1;
(statearr_12766_14804[(2)] = null);

(statearr_12766_14804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (4))){
var inst_12600 = (state_12751[(10)]);
var inst_12600__$1 = (state_12751[(2)]);
var inst_12601 = (inst_12600__$1 == null);
var state_12751__$1 = (function (){var statearr_12767 = state_12751;
(statearr_12767[(10)] = inst_12600__$1);

return statearr_12767;
})();
if(cljs.core.truth_(inst_12601)){
var statearr_12768_14805 = state_12751__$1;
(statearr_12768_14805[(1)] = (5));

} else {
var statearr_12769_14806 = state_12751__$1;
(statearr_12769_14806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (15))){
var inst_12613 = (state_12751[(13)]);
var inst_12611 = (state_12751[(14)]);
var inst_12612 = (state_12751[(15)]);
var inst_12610 = (state_12751[(17)]);
var inst_12638 = (state_12751[(2)]);
var inst_12639 = (inst_12613 + (1));
var tmp12763 = inst_12611;
var tmp12764 = inst_12612;
var tmp12765 = inst_12610;
var inst_12610__$1 = tmp12765;
var inst_12611__$1 = tmp12763;
var inst_12612__$1 = tmp12764;
var inst_12613__$1 = inst_12639;
var state_12751__$1 = (function (){var statearr_12770 = state_12751;
(statearr_12770[(13)] = inst_12613__$1);

(statearr_12770[(14)] = inst_12611__$1);

(statearr_12770[(15)] = inst_12612__$1);

(statearr_12770[(18)] = inst_12638);

(statearr_12770[(17)] = inst_12610__$1);

return statearr_12770;
})();
var statearr_12771_14807 = state_12751__$1;
(statearr_12771_14807[(2)] = null);

(statearr_12771_14807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (21))){
var inst_12672 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12775_14808 = state_12751__$1;
(statearr_12775_14808[(2)] = inst_12672);

(statearr_12775_14808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (31))){
var inst_12698 = (state_12751[(12)]);
var inst_12705 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12698);
var state_12751__$1 = state_12751;
var statearr_12776_14809 = state_12751__$1;
(statearr_12776_14809[(2)] = inst_12705);

(statearr_12776_14809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (32))){
var inst_12693 = (state_12751[(9)]);
var inst_12691 = (state_12751[(11)]);
var inst_12690 = (state_12751[(19)]);
var inst_12692 = (state_12751[(20)]);
var inst_12707 = (state_12751[(2)]);
var inst_12708 = (inst_12693 + (1));
var tmp12772 = inst_12691;
var tmp12773 = inst_12690;
var tmp12774 = inst_12692;
var inst_12690__$1 = tmp12773;
var inst_12691__$1 = tmp12772;
var inst_12692__$1 = tmp12774;
var inst_12693__$1 = inst_12708;
var state_12751__$1 = (function (){var statearr_12777 = state_12751;
(statearr_12777[(9)] = inst_12693__$1);

(statearr_12777[(21)] = inst_12707);

(statearr_12777[(11)] = inst_12691__$1);

(statearr_12777[(19)] = inst_12690__$1);

(statearr_12777[(20)] = inst_12692__$1);

return statearr_12777;
})();
var statearr_12781_14810 = state_12751__$1;
(statearr_12781_14810[(2)] = null);

(statearr_12781_14810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (40))){
var inst_12720 = (state_12751[(22)]);
var inst_12724 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12720);
var state_12751__$1 = state_12751;
var statearr_12782_14811 = state_12751__$1;
(statearr_12782_14811[(2)] = inst_12724);

(statearr_12782_14811[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (33))){
var inst_12711 = (state_12751[(23)]);
var inst_12713 = cljs.core.chunked_seq_QMARK_(inst_12711);
var state_12751__$1 = state_12751;
if(inst_12713){
var statearr_12783_14812 = state_12751__$1;
(statearr_12783_14812[(1)] = (36));

} else {
var statearr_12784_14813 = state_12751__$1;
(statearr_12784_14813[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (13))){
var inst_12632 = (state_12751[(24)]);
var inst_12635 = cljs.core.async.close_BANG_(inst_12632);
var state_12751__$1 = state_12751;
var statearr_12790_14814 = state_12751__$1;
(statearr_12790_14814[(2)] = inst_12635);

(statearr_12790_14814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (22))){
var inst_12659 = (state_12751[(8)]);
var inst_12665 = cljs.core.async.close_BANG_(inst_12659);
var state_12751__$1 = state_12751;
var statearr_12792_14815 = state_12751__$1;
(statearr_12792_14815[(2)] = inst_12665);

(statearr_12792_14815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (36))){
var inst_12711 = (state_12751[(23)]);
var inst_12715 = cljs.core.chunk_first(inst_12711);
var inst_12716 = cljs.core.chunk_rest(inst_12711);
var inst_12717 = cljs.core.count(inst_12715);
var inst_12690 = inst_12716;
var inst_12691 = inst_12715;
var inst_12692 = inst_12717;
var inst_12693 = (0);
var state_12751__$1 = (function (){var statearr_12793 = state_12751;
(statearr_12793[(9)] = inst_12693);

(statearr_12793[(11)] = inst_12691);

(statearr_12793[(19)] = inst_12690);

(statearr_12793[(20)] = inst_12692);

return statearr_12793;
})();
var statearr_12794_14816 = state_12751__$1;
(statearr_12794_14816[(2)] = null);

(statearr_12794_14816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (41))){
var inst_12711 = (state_12751[(23)]);
var inst_12726 = (state_12751[(2)]);
var inst_12727 = cljs.core.next(inst_12711);
var inst_12690 = inst_12727;
var inst_12691 = null;
var inst_12692 = (0);
var inst_12693 = (0);
var state_12751__$1 = (function (){var statearr_12795 = state_12751;
(statearr_12795[(9)] = inst_12693);

(statearr_12795[(25)] = inst_12726);

(statearr_12795[(11)] = inst_12691);

(statearr_12795[(19)] = inst_12690);

(statearr_12795[(20)] = inst_12692);

return statearr_12795;
})();
var statearr_12796_14817 = state_12751__$1;
(statearr_12796_14817[(2)] = null);

(statearr_12796_14817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (43))){
var state_12751__$1 = state_12751;
var statearr_12797_14818 = state_12751__$1;
(statearr_12797_14818[(2)] = null);

(statearr_12797_14818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (29))){
var inst_12735 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12798_14819 = state_12751__$1;
(statearr_12798_14819[(2)] = inst_12735);

(statearr_12798_14819[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (44))){
var inst_12744 = (state_12751[(2)]);
var state_12751__$1 = (function (){var statearr_12799 = state_12751;
(statearr_12799[(26)] = inst_12744);

return statearr_12799;
})();
var statearr_12800_14820 = state_12751__$1;
(statearr_12800_14820[(2)] = null);

(statearr_12800_14820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (6))){
var inst_12682 = (state_12751[(27)]);
var inst_12681 = cljs.core.deref(cs);
var inst_12682__$1 = cljs.core.keys(inst_12681);
var inst_12683 = cljs.core.count(inst_12682__$1);
var inst_12684 = cljs.core.reset_BANG_(dctr,inst_12683);
var inst_12689 = cljs.core.seq(inst_12682__$1);
var inst_12690 = inst_12689;
var inst_12691 = null;
var inst_12692 = (0);
var inst_12693 = (0);
var state_12751__$1 = (function (){var statearr_12801 = state_12751;
(statearr_12801[(9)] = inst_12693);

(statearr_12801[(27)] = inst_12682__$1);

(statearr_12801[(11)] = inst_12691);

(statearr_12801[(19)] = inst_12690);

(statearr_12801[(28)] = inst_12684);

(statearr_12801[(20)] = inst_12692);

return statearr_12801;
})();
var statearr_12802_14821 = state_12751__$1;
(statearr_12802_14821[(2)] = null);

(statearr_12802_14821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (28))){
var inst_12711 = (state_12751[(23)]);
var inst_12690 = (state_12751[(19)]);
var inst_12711__$1 = cljs.core.seq(inst_12690);
var state_12751__$1 = (function (){var statearr_12803 = state_12751;
(statearr_12803[(23)] = inst_12711__$1);

return statearr_12803;
})();
if(inst_12711__$1){
var statearr_12804_14822 = state_12751__$1;
(statearr_12804_14822[(1)] = (33));

} else {
var statearr_12805_14823 = state_12751__$1;
(statearr_12805_14823[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (25))){
var inst_12693 = (state_12751[(9)]);
var inst_12692 = (state_12751[(20)]);
var inst_12695 = (inst_12693 < inst_12692);
var inst_12696 = inst_12695;
var state_12751__$1 = state_12751;
if(cljs.core.truth_(inst_12696)){
var statearr_12806_14824 = state_12751__$1;
(statearr_12806_14824[(1)] = (27));

} else {
var statearr_12807_14825 = state_12751__$1;
(statearr_12807_14825[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (34))){
var state_12751__$1 = state_12751;
var statearr_12808_14826 = state_12751__$1;
(statearr_12808_14826[(2)] = null);

(statearr_12808_14826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (17))){
var state_12751__$1 = state_12751;
var statearr_12809_14827 = state_12751__$1;
(statearr_12809_14827[(2)] = null);

(statearr_12809_14827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (3))){
var inst_12749 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12751__$1,inst_12749);
} else {
if((state_val_12752 === (12))){
var inst_12677 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12810_14828 = state_12751__$1;
(statearr_12810_14828[(2)] = inst_12677);

(statearr_12810_14828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (2))){
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12751__$1,(4),ch);
} else {
if((state_val_12752 === (23))){
var state_12751__$1 = state_12751;
var statearr_12811_14830 = state_12751__$1;
(statearr_12811_14830[(2)] = null);

(statearr_12811_14830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (35))){
var inst_12733 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12812_14831 = state_12751__$1;
(statearr_12812_14831[(2)] = inst_12733);

(statearr_12812_14831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (19))){
var inst_12642 = (state_12751[(7)]);
var inst_12650 = cljs.core.chunk_first(inst_12642);
var inst_12651 = cljs.core.chunk_rest(inst_12642);
var inst_12652 = cljs.core.count(inst_12650);
var inst_12610 = inst_12651;
var inst_12611 = inst_12650;
var inst_12612 = inst_12652;
var inst_12613 = (0);
var state_12751__$1 = (function (){var statearr_12813 = state_12751;
(statearr_12813[(13)] = inst_12613);

(statearr_12813[(14)] = inst_12611);

(statearr_12813[(15)] = inst_12612);

(statearr_12813[(17)] = inst_12610);

return statearr_12813;
})();
var statearr_12814_14833 = state_12751__$1;
(statearr_12814_14833[(2)] = null);

(statearr_12814_14833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (11))){
var inst_12642 = (state_12751[(7)]);
var inst_12610 = (state_12751[(17)]);
var inst_12642__$1 = cljs.core.seq(inst_12610);
var state_12751__$1 = (function (){var statearr_12815 = state_12751;
(statearr_12815[(7)] = inst_12642__$1);

return statearr_12815;
})();
if(inst_12642__$1){
var statearr_12816_14834 = state_12751__$1;
(statearr_12816_14834[(1)] = (16));

} else {
var statearr_12820_14835 = state_12751__$1;
(statearr_12820_14835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (9))){
var inst_12679 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12821_14836 = state_12751__$1;
(statearr_12821_14836[(2)] = inst_12679);

(statearr_12821_14836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (5))){
var inst_12608 = cljs.core.deref(cs);
var inst_12609 = cljs.core.seq(inst_12608);
var inst_12610 = inst_12609;
var inst_12611 = null;
var inst_12612 = (0);
var inst_12613 = (0);
var state_12751__$1 = (function (){var statearr_12822 = state_12751;
(statearr_12822[(13)] = inst_12613);

(statearr_12822[(14)] = inst_12611);

(statearr_12822[(15)] = inst_12612);

(statearr_12822[(17)] = inst_12610);

return statearr_12822;
})();
var statearr_12823_14838 = state_12751__$1;
(statearr_12823_14838[(2)] = null);

(statearr_12823_14838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (14))){
var state_12751__$1 = state_12751;
var statearr_12824_14839 = state_12751__$1;
(statearr_12824_14839[(2)] = null);

(statearr_12824_14839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (45))){
var inst_12741 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12825_14841 = state_12751__$1;
(statearr_12825_14841[(2)] = inst_12741);

(statearr_12825_14841[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (26))){
var inst_12682 = (state_12751[(27)]);
var inst_12737 = (state_12751[(2)]);
var inst_12738 = cljs.core.seq(inst_12682);
var state_12751__$1 = (function (){var statearr_12826 = state_12751;
(statearr_12826[(29)] = inst_12737);

return statearr_12826;
})();
if(inst_12738){
var statearr_12827_14842 = state_12751__$1;
(statearr_12827_14842[(1)] = (42));

} else {
var statearr_12828_14843 = state_12751__$1;
(statearr_12828_14843[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (16))){
var inst_12642 = (state_12751[(7)]);
var inst_12645 = cljs.core.chunked_seq_QMARK_(inst_12642);
var state_12751__$1 = state_12751;
if(inst_12645){
var statearr_12829_14845 = state_12751__$1;
(statearr_12829_14845[(1)] = (19));

} else {
var statearr_12830_14846 = state_12751__$1;
(statearr_12830_14846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (38))){
var inst_12730 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12831_14847 = state_12751__$1;
(statearr_12831_14847[(2)] = inst_12730);

(statearr_12831_14847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (30))){
var state_12751__$1 = state_12751;
var statearr_12832_14848 = state_12751__$1;
(statearr_12832_14848[(2)] = null);

(statearr_12832_14848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (10))){
var inst_12613 = (state_12751[(13)]);
var inst_12611 = (state_12751[(14)]);
var inst_12621 = cljs.core._nth(inst_12611,inst_12613);
var inst_12632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12621,(0),null);
var inst_12633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12621,(1),null);
var state_12751__$1 = (function (){var statearr_12833 = state_12751;
(statearr_12833[(24)] = inst_12632);

return statearr_12833;
})();
if(cljs.core.truth_(inst_12633)){
var statearr_12834_14850 = state_12751__$1;
(statearr_12834_14850[(1)] = (13));

} else {
var statearr_12835_14851 = state_12751__$1;
(statearr_12835_14851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (18))){
var inst_12675 = (state_12751[(2)]);
var state_12751__$1 = state_12751;
var statearr_12836_14852 = state_12751__$1;
(statearr_12836_14852[(2)] = inst_12675);

(statearr_12836_14852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (42))){
var state_12751__$1 = state_12751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12751__$1,(45),dchan);
} else {
if((state_val_12752 === (37))){
var inst_12711 = (state_12751[(23)]);
var inst_12600 = (state_12751[(10)]);
var inst_12720 = (state_12751[(22)]);
var inst_12720__$1 = cljs.core.first(inst_12711);
var inst_12721 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12720__$1,inst_12600,done);
var state_12751__$1 = (function (){var statearr_12837 = state_12751;
(statearr_12837[(22)] = inst_12720__$1);

return statearr_12837;
})();
if(cljs.core.truth_(inst_12721)){
var statearr_12838_14854 = state_12751__$1;
(statearr_12838_14854[(1)] = (39));

} else {
var statearr_12839_14855 = state_12751__$1;
(statearr_12839_14855[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12752 === (8))){
var inst_12613 = (state_12751[(13)]);
var inst_12612 = (state_12751[(15)]);
var inst_12615 = (inst_12613 < inst_12612);
var inst_12616 = inst_12615;
var state_12751__$1 = state_12751;
if(cljs.core.truth_(inst_12616)){
var statearr_12840_14856 = state_12751__$1;
(statearr_12840_14856[(1)] = (10));

} else {
var statearr_12841_14857 = state_12751__$1;
(statearr_12841_14857[(1)] = (11));

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
var statearr_12842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12842[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12842[(1)] = (1));

return statearr_12842;
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
}catch (e12843){var ex__12075__auto__ = e12843;
var statearr_12844_14859 = state_12751;
(statearr_12844_14859[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12751[(4)]))){
var statearr_12845_14860 = state_12751;
(statearr_12845_14860[(1)] = cljs.core.first((state_12751[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14862 = state_12751;
state_12751 = G__14862;
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
var state__12109__auto__ = (function (){var statearr_12846 = f__12108__auto__();
(statearr_12846[(6)] = c__12107__auto___14794);

return statearr_12846;
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

var cljs$core$async$Mix$admix_STAR_$dyn_14865 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14865(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14866 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14866(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14867 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14867(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14868 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14868(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14869 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14869(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14870 = arguments.length;
var i__4737__auto___14871 = (0);
while(true){
if((i__4737__auto___14871 < len__4736__auto___14870)){
args__4742__auto__.push((arguments[i__4737__auto___14871]));

var G__14872 = (i__4737__auto___14871 + (1));
i__4737__auto___14871 = G__14872;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12860){
var map__12862 = p__12860;
var map__12862__$1 = (((((!((map__12862 == null))))?(((((map__12862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12862):map__12862);
var opts = map__12862__$1;
var statearr_12864_14873 = state;
(statearr_12864_14873[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12865_14874 = state;
(statearr_12865_14874[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12866_14875 = state;
(statearr_12866_14875[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12852){
var G__12853 = cljs.core.first(seq12852);
var seq12852__$1 = cljs.core.next(seq12852);
var G__12854 = cljs.core.first(seq12852__$1);
var seq12852__$2 = cljs.core.next(seq12852__$1);
var G__12855 = cljs.core.first(seq12852__$2);
var seq12852__$3 = cljs.core.next(seq12852__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12853,G__12854,G__12855,seq12852__$3);
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
var c__12107__auto___14880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12971){
var state_val_12972 = (state_12971[(1)]);
if((state_val_12972 === (7))){
var inst_12886 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_12973_14881 = state_12971__$1;
(statearr_12973_14881[(2)] = inst_12886);

(statearr_12973_14881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (20))){
var inst_12898 = (state_12971[(7)]);
var state_12971__$1 = state_12971;
var statearr_12974_14882 = state_12971__$1;
(statearr_12974_14882[(2)] = inst_12898);

(statearr_12974_14882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (27))){
var state_12971__$1 = state_12971;
var statearr_12975_14883 = state_12971__$1;
(statearr_12975_14883[(2)] = null);

(statearr_12975_14883[(1)] = (28));


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
var statearr_12977_14884 = state_12971__$1;
(statearr_12977_14884[(1)] = (2));

} else {
var statearr_12978_14885 = state_12971__$1;
(statearr_12978_14885[(1)] = (3));

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
var statearr_12980_14886 = state_12971__$1;
(statearr_12980_14886[(1)] = (29));

} else {
var statearr_12981_14887 = state_12971__$1;
(statearr_12981_14887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (4))){
var inst_12889 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12889)){
var statearr_12982_14888 = state_12971__$1;
(statearr_12982_14888[(1)] = (8));

} else {
var statearr_12983_14889 = state_12971__$1;
(statearr_12983_14889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (15))){
var inst_12916 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12916)){
var statearr_12984_14890 = state_12971__$1;
(statearr_12984_14890[(1)] = (19));

} else {
var statearr_12985_14891 = state_12971__$1;
(statearr_12985_14891[(1)] = (20));

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
var statearr_12987_14892 = state_12971__$1;
(statearr_12987_14892[(1)] = (32));

} else {
var statearr_12988_14893 = state_12971__$1;
(statearr_12988_14893[(1)] = (33));

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
var statearr_12990_14894 = state_12971__$1;
(statearr_12990_14894[(2)] = null);

(statearr_12990_14894[(1)] = (11));


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
var statearr_12991_14895 = state_12971__$1;
(statearr_12991_14895[(1)] = (16));

} else {
var statearr_12992_14896 = state_12971__$1;
(statearr_12992_14896[(1)] = (17));

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
var statearr_12994_14897 = state_12971__$1;
(statearr_12994_14897[(1)] = (23));

} else {
var statearr_12995_14898 = state_12971__$1;
(statearr_12995_14898[(1)] = (24));

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
var statearr_12997_14899 = state_12971__$1;
(statearr_12997_14899[(2)] = null);

(statearr_12997_14899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (29))){
var inst_12945 = (state_12971[(9)]);
var state_12971__$1 = state_12971;
var statearr_12998_14900 = state_12971__$1;
(statearr_12998_14900[(2)] = inst_12945);

(statearr_12998_14900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (6))){
var state_12971__$1 = state_12971;
var statearr_12999_14901 = state_12971__$1;
(statearr_12999_14901[(2)] = false);

(statearr_12999_14901[(1)] = (7));


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
var statearr_13001_14902 = state_12971__$1;
(statearr_13001_14902[(2)] = null);

(statearr_13001_14902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (25))){
var inst_12967 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13002_14903 = state_12971__$1;
(statearr_13002_14903[(2)] = inst_12967);

(statearr_13002_14903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (34))){
var inst_12965 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13003_14904 = state_12971__$1;
(statearr_13003_14904[(2)] = inst_12965);

(statearr_13003_14904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (17))){
var state_12971__$1 = state_12971;
var statearr_13004_14905 = state_12971__$1;
(statearr_13004_14905[(2)] = false);

(statearr_13004_14905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (3))){
var state_12971__$1 = state_12971;
var statearr_13005_14906 = state_12971__$1;
(statearr_13005_14906[(2)] = false);

(statearr_13005_14906[(1)] = (4));


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
var statearr_13006_14908 = state_12971__$1;
(statearr_13006_14908[(1)] = (5));

} else {
var statearr_13007_14909 = state_12971__$1;
(statearr_13007_14909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (23))){
var inst_12930 = (state_12971[(14)]);
var inst_12936 = (inst_12930 == null);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12936)){
var statearr_13008_14910 = state_12971__$1;
(statearr_13008_14910[(1)] = (26));

} else {
var statearr_13009_14911 = state_12971__$1;
(statearr_13009_14911[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (35))){
var inst_12956 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
if(cljs.core.truth_(inst_12956)){
var statearr_13010_14912 = state_12971__$1;
(statearr_13010_14912[(1)] = (36));

} else {
var statearr_13011_14913 = state_12971__$1;
(statearr_13011_14913[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (19))){
var inst_12898 = (state_12971[(7)]);
var inst_12918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12898);
var state_12971__$1 = state_12971;
var statearr_13012_14914 = state_12971__$1;
(statearr_13012_14914[(2)] = inst_12918);

(statearr_13012_14914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (11))){
var inst_12898 = (state_12971[(7)]);
var inst_12902 = (inst_12898 == null);
var inst_12903 = cljs.core.not(inst_12902);
var state_12971__$1 = state_12971;
if(inst_12903){
var statearr_13013_14916 = state_12971__$1;
(statearr_13013_14916[(1)] = (13));

} else {
var statearr_13014_14917 = state_12971__$1;
(statearr_13014_14917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (9))){
var inst_12873 = (state_12971[(8)]);
var state_12971__$1 = state_12971;
var statearr_13015_14918 = state_12971__$1;
(statearr_13015_14918[(2)] = inst_12873);

(statearr_13015_14918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (5))){
var state_12971__$1 = state_12971;
var statearr_13016_14919 = state_12971__$1;
(statearr_13016_14919[(2)] = true);

(statearr_13016_14919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (14))){
var state_12971__$1 = state_12971;
var statearr_13017_14920 = state_12971__$1;
(statearr_13017_14920[(2)] = false);

(statearr_13017_14920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (26))){
var inst_12931 = (state_12971[(10)]);
var inst_12938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12931);
var state_12971__$1 = state_12971;
var statearr_13018_14921 = state_12971__$1;
(statearr_13018_14921[(2)] = inst_12938);

(statearr_13018_14921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (16))){
var state_12971__$1 = state_12971;
var statearr_13019_14922 = state_12971__$1;
(statearr_13019_14922[(2)] = true);

(statearr_13019_14922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (38))){
var inst_12961 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13020_14923 = state_12971__$1;
(statearr_13020_14923[(2)] = inst_12961);

(statearr_13020_14923[(1)] = (34));


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
var statearr_13021_14925 = state_12971__$1;
(statearr_13021_14925[(2)] = inst_12951);

(statearr_13021_14925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (10))){
var inst_12873 = (state_12971[(8)]);
var inst_12894 = (state_12971[(2)]);
var inst_12895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12894,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12894,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12894,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12898 = inst_12873;
var state_12971__$1 = (function (){var statearr_13022 = state_12971;
(statearr_13022[(16)] = inst_12897);

(statearr_13022[(17)] = inst_12895);

(statearr_13022[(7)] = inst_12898);

(statearr_13022[(18)] = inst_12896);

return statearr_13022;
})();
var statearr_13023_14926 = state_12971__$1;
(statearr_13023_14926[(2)] = null);

(statearr_13023_14926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (18))){
var inst_12913 = (state_12971[(2)]);
var state_12971__$1 = state_12971;
var statearr_13024_14927 = state_12971__$1;
(statearr_13024_14927[(2)] = inst_12913);

(statearr_13024_14927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (37))){
var state_12971__$1 = state_12971;
var statearr_13025_14929 = state_12971__$1;
(statearr_13025_14929[(2)] = null);

(statearr_13025_14929[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12972 === (8))){
var inst_12873 = (state_12971[(8)]);
var inst_12891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12873);
var state_12971__$1 = state_12971;
var statearr_13026_14930 = state_12971__$1;
(statearr_13026_14930[(2)] = inst_12891);

(statearr_13026_14930[(1)] = (10));


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
var statearr_13027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13027[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_13027[(1)] = (1));

return statearr_13027;
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
}catch (e13028){var ex__12075__auto__ = e13028;
var statearr_13029_14931 = state_12971;
(statearr_13029_14931[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12971[(4)]))){
var statearr_13030_14932 = state_12971;
(statearr_13030_14932[(1)] = cljs.core.first((state_12971[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14934 = state_12971;
state_12971 = G__14934;
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
var state__12109__auto__ = (function (){var statearr_13031 = f__12108__auto__();
(statearr_13031[(6)] = c__12107__auto___14880);

return statearr_13031;
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

var cljs$core$async$Pub$sub_STAR_$dyn_14936 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14936(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14937 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14937(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14938 = (function() {
var G__14939 = null;
var G__14939__1 = (function (p){
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
var G__14939__2 = (function (p,v){
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
G__14939 = function(p,v){
switch(arguments.length){
case 1:
return G__14939__1.call(this,p);
case 2:
return G__14939__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14939.cljs$core$IFn$_invoke$arity$1 = G__14939__1;
G__14939.cljs$core$IFn$_invoke$arity$2 = G__14939__2;
return G__14939;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13076 = arguments.length;
switch (G__13076) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14938(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14938(p,v);
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
var G__13091 = arguments.length;
switch (G__13091) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13089_SHARP_){
if(cljs.core.truth_((p1__13089_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13089_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13089_SHARP_.call(null,topic)))){
return p1__13089_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13089_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13105 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13106){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13106 = meta13106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13107,meta13106__$1){
var self__ = this;
var _13107__$1 = this;
return (new cljs.core.async.t_cljs$core$async13105(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13106__$1));
}));

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13107){
var self__ = this;
var _13107__$1 = this;
return self__.meta13106;
}));

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13106","meta13106",1337334643,null)], null);
}));

(cljs.core.async.t_cljs$core$async13105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13105");

(cljs.core.async.t_cljs$core$async13105.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13105.
 */
cljs.core.async.__GT_t_cljs$core$async13105 = (function cljs$core$async$__GT_t_cljs$core$async13105(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13106){
return (new cljs.core.async.t_cljs$core$async13105(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13106));
});

}

return (new cljs.core.async.t_cljs$core$async13105(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13216){
var state_val_13217 = (state_13216[(1)]);
if((state_val_13217 === (7))){
var inst_13212 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
var statearr_13218_14945 = state_13216__$1;
(statearr_13218_14945[(2)] = inst_13212);

(statearr_13218_14945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (20))){
var state_13216__$1 = state_13216;
var statearr_13219_14946 = state_13216__$1;
(statearr_13219_14946[(2)] = null);

(statearr_13219_14946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (1))){
var state_13216__$1 = state_13216;
var statearr_13220_14947 = state_13216__$1;
(statearr_13220_14947[(2)] = null);

(statearr_13220_14947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (24))){
var inst_13195 = (state_13216[(7)]);
var inst_13204 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13195);
var state_13216__$1 = state_13216;
var statearr_13221_14949 = state_13216__$1;
(statearr_13221_14949[(2)] = inst_13204);

(statearr_13221_14949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (4))){
var inst_13145 = (state_13216[(8)]);
var inst_13145__$1 = (state_13216[(2)]);
var inst_13148 = (inst_13145__$1 == null);
var state_13216__$1 = (function (){var statearr_13222 = state_13216;
(statearr_13222[(8)] = inst_13145__$1);

return statearr_13222;
})();
if(cljs.core.truth_(inst_13148)){
var statearr_13223_14950 = state_13216__$1;
(statearr_13223_14950[(1)] = (5));

} else {
var statearr_13224_14951 = state_13216__$1;
(statearr_13224_14951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (15))){
var inst_13189 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
var statearr_13225_14952 = state_13216__$1;
(statearr_13225_14952[(2)] = inst_13189);

(statearr_13225_14952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (21))){
var inst_13209 = (state_13216[(2)]);
var state_13216__$1 = (function (){var statearr_13226 = state_13216;
(statearr_13226[(9)] = inst_13209);

return statearr_13226;
})();
var statearr_13227_14953 = state_13216__$1;
(statearr_13227_14953[(2)] = null);

(statearr_13227_14953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (13))){
var inst_13171 = (state_13216[(10)]);
var inst_13173 = cljs.core.chunked_seq_QMARK_(inst_13171);
var state_13216__$1 = state_13216;
if(inst_13173){
var statearr_13232_14954 = state_13216__$1;
(statearr_13232_14954[(1)] = (16));

} else {
var statearr_13235_14955 = state_13216__$1;
(statearr_13235_14955[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (22))){
var inst_13201 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
if(cljs.core.truth_(inst_13201)){
var statearr_13237_14956 = state_13216__$1;
(statearr_13237_14956[(1)] = (23));

} else {
var statearr_13238_14957 = state_13216__$1;
(statearr_13238_14957[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (6))){
var inst_13145 = (state_13216[(8)]);
var inst_13195 = (state_13216[(7)]);
var inst_13197 = (state_13216[(11)]);
var inst_13195__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13145) : topic_fn.call(null,inst_13145));
var inst_13196 = cljs.core.deref(mults);
var inst_13197__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13196,inst_13195__$1);
var state_13216__$1 = (function (){var statearr_13246 = state_13216;
(statearr_13246[(7)] = inst_13195__$1);

(statearr_13246[(11)] = inst_13197__$1);

return statearr_13246;
})();
if(cljs.core.truth_(inst_13197__$1)){
var statearr_13250_14958 = state_13216__$1;
(statearr_13250_14958[(1)] = (19));

} else {
var statearr_13251_14959 = state_13216__$1;
(statearr_13251_14959[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (25))){
var inst_13206 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
var statearr_13291_14960 = state_13216__$1;
(statearr_13291_14960[(2)] = inst_13206);

(statearr_13291_14960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (17))){
var inst_13171 = (state_13216[(10)]);
var inst_13180 = cljs.core.first(inst_13171);
var inst_13181 = cljs.core.async.muxch_STAR_(inst_13180);
var inst_13182 = cljs.core.async.close_BANG_(inst_13181);
var inst_13183 = cljs.core.next(inst_13171);
var inst_13157 = inst_13183;
var inst_13158 = null;
var inst_13159 = (0);
var inst_13160 = (0);
var state_13216__$1 = (function (){var statearr_13292 = state_13216;
(statearr_13292[(12)] = inst_13159);

(statearr_13292[(13)] = inst_13182);

(statearr_13292[(14)] = inst_13160);

(statearr_13292[(15)] = inst_13157);

(statearr_13292[(16)] = inst_13158);

return statearr_13292;
})();
var statearr_13293_14961 = state_13216__$1;
(statearr_13293_14961[(2)] = null);

(statearr_13293_14961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (3))){
var inst_13214 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13216__$1,inst_13214);
} else {
if((state_val_13217 === (12))){
var inst_13191 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
var statearr_13294_14962 = state_13216__$1;
(statearr_13294_14962[(2)] = inst_13191);

(statearr_13294_14962[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (2))){
var state_13216__$1 = state_13216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13216__$1,(4),ch);
} else {
if((state_val_13217 === (23))){
var state_13216__$1 = state_13216;
var statearr_13295_14963 = state_13216__$1;
(statearr_13295_14963[(2)] = null);

(statearr_13295_14963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (19))){
var inst_13145 = (state_13216[(8)]);
var inst_13197 = (state_13216[(11)]);
var inst_13199 = cljs.core.async.muxch_STAR_(inst_13197);
var state_13216__$1 = state_13216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13216__$1,(22),inst_13199,inst_13145);
} else {
if((state_val_13217 === (11))){
var inst_13157 = (state_13216[(15)]);
var inst_13171 = (state_13216[(10)]);
var inst_13171__$1 = cljs.core.seq(inst_13157);
var state_13216__$1 = (function (){var statearr_13296 = state_13216;
(statearr_13296[(10)] = inst_13171__$1);

return statearr_13296;
})();
if(inst_13171__$1){
var statearr_13297_14964 = state_13216__$1;
(statearr_13297_14964[(1)] = (13));

} else {
var statearr_13298_14965 = state_13216__$1;
(statearr_13298_14965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (9))){
var inst_13193 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
var statearr_13299_14966 = state_13216__$1;
(statearr_13299_14966[(2)] = inst_13193);

(statearr_13299_14966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (5))){
var inst_13154 = cljs.core.deref(mults);
var inst_13155 = cljs.core.vals(inst_13154);
var inst_13156 = cljs.core.seq(inst_13155);
var inst_13157 = inst_13156;
var inst_13158 = null;
var inst_13159 = (0);
var inst_13160 = (0);
var state_13216__$1 = (function (){var statearr_13300 = state_13216;
(statearr_13300[(12)] = inst_13159);

(statearr_13300[(14)] = inst_13160);

(statearr_13300[(15)] = inst_13157);

(statearr_13300[(16)] = inst_13158);

return statearr_13300;
})();
var statearr_13301_14967 = state_13216__$1;
(statearr_13301_14967[(2)] = null);

(statearr_13301_14967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (14))){
var state_13216__$1 = state_13216;
var statearr_13305_14968 = state_13216__$1;
(statearr_13305_14968[(2)] = null);

(statearr_13305_14968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (16))){
var inst_13171 = (state_13216[(10)]);
var inst_13175 = cljs.core.chunk_first(inst_13171);
var inst_13176 = cljs.core.chunk_rest(inst_13171);
var inst_13177 = cljs.core.count(inst_13175);
var inst_13157 = inst_13176;
var inst_13158 = inst_13175;
var inst_13159 = inst_13177;
var inst_13160 = (0);
var state_13216__$1 = (function (){var statearr_13306 = state_13216;
(statearr_13306[(12)] = inst_13159);

(statearr_13306[(14)] = inst_13160);

(statearr_13306[(15)] = inst_13157);

(statearr_13306[(16)] = inst_13158);

return statearr_13306;
})();
var statearr_13307_14976 = state_13216__$1;
(statearr_13307_14976[(2)] = null);

(statearr_13307_14976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (10))){
var inst_13159 = (state_13216[(12)]);
var inst_13160 = (state_13216[(14)]);
var inst_13157 = (state_13216[(15)]);
var inst_13158 = (state_13216[(16)]);
var inst_13165 = cljs.core._nth(inst_13158,inst_13160);
var inst_13166 = cljs.core.async.muxch_STAR_(inst_13165);
var inst_13167 = cljs.core.async.close_BANG_(inst_13166);
var inst_13168 = (inst_13160 + (1));
var tmp13302 = inst_13159;
var tmp13303 = inst_13157;
var tmp13304 = inst_13158;
var inst_13157__$1 = tmp13303;
var inst_13158__$1 = tmp13304;
var inst_13159__$1 = tmp13302;
var inst_13160__$1 = inst_13168;
var state_13216__$1 = (function (){var statearr_13308 = state_13216;
(statearr_13308[(12)] = inst_13159__$1);

(statearr_13308[(14)] = inst_13160__$1);

(statearr_13308[(17)] = inst_13167);

(statearr_13308[(15)] = inst_13157__$1);

(statearr_13308[(16)] = inst_13158__$1);

return statearr_13308;
})();
var statearr_13309_14977 = state_13216__$1;
(statearr_13309_14977[(2)] = null);

(statearr_13309_14977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (18))){
var inst_13186 = (state_13216[(2)]);
var state_13216__$1 = state_13216;
var statearr_13377_14978 = state_13216__$1;
(statearr_13377_14978[(2)] = inst_13186);

(statearr_13377_14978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13217 === (8))){
var inst_13159 = (state_13216[(12)]);
var inst_13160 = (state_13216[(14)]);
var inst_13162 = (inst_13160 < inst_13159);
var inst_13163 = inst_13162;
var state_13216__$1 = state_13216;
if(cljs.core.truth_(inst_13163)){
var statearr_13382_14979 = state_13216__$1;
(statearr_13382_14979[(1)] = (10));

} else {
var statearr_13386_14980 = state_13216__$1;
(statearr_13386_14980[(1)] = (11));

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
var statearr_13393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13393[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13393[(1)] = (1));

return statearr_13393;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13216){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13216);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13401){var ex__12075__auto__ = e13401;
var statearr_13402_14981 = state_13216;
(statearr_13402_14981[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13216[(4)]))){
var statearr_13407_14982 = state_13216;
(statearr_13407_14982[(1)] = cljs.core.first((state_13216[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14983 = state_13216;
state_13216 = G__14983;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13414 = f__12108__auto__();
(statearr_13414[(6)] = c__12107__auto___14943);

return statearr_13414;
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
var G__13427 = arguments.length;
switch (G__13427) {
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
var G__13454 = arguments.length;
switch (G__13454) {
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
var G__13480 = arguments.length;
switch (G__13480) {
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
var c__12107__auto___14987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13584){
var state_val_13585 = (state_13584[(1)]);
if((state_val_13585 === (7))){
var state_13584__$1 = state_13584;
var statearr_13586_14988 = state_13584__$1;
(statearr_13586_14988[(2)] = null);

(statearr_13586_14988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (1))){
var state_13584__$1 = state_13584;
var statearr_13587_14989 = state_13584__$1;
(statearr_13587_14989[(2)] = null);

(statearr_13587_14989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (4))){
var inst_13519 = (state_13584[(7)]);
var inst_13520 = (state_13584[(8)]);
var inst_13522 = (inst_13520 < inst_13519);
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13522)){
var statearr_13588_14990 = state_13584__$1;
(statearr_13588_14990[(1)] = (6));

} else {
var statearr_13589_14991 = state_13584__$1;
(statearr_13589_14991[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (15))){
var inst_13545 = (state_13584[(9)]);
var inst_13550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13545);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13584__$1,(17),out,inst_13550);
} else {
if((state_val_13585 === (13))){
var inst_13545 = (state_13584[(9)]);
var inst_13545__$1 = (state_13584[(2)]);
var inst_13546 = cljs.core.some(cljs.core.nil_QMARK_,inst_13545__$1);
var state_13584__$1 = (function (){var statearr_13590 = state_13584;
(statearr_13590[(9)] = inst_13545__$1);

return statearr_13590;
})();
if(cljs.core.truth_(inst_13546)){
var statearr_13591_14992 = state_13584__$1;
(statearr_13591_14992[(1)] = (14));

} else {
var statearr_13592_14993 = state_13584__$1;
(statearr_13592_14993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (6))){
var state_13584__$1 = state_13584;
var statearr_13593_14994 = state_13584__$1;
(statearr_13593_14994[(2)] = null);

(statearr_13593_14994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (17))){
var inst_13552 = (state_13584[(2)]);
var state_13584__$1 = (function (){var statearr_13637 = state_13584;
(statearr_13637[(10)] = inst_13552);

return statearr_13637;
})();
var statearr_13638_14995 = state_13584__$1;
(statearr_13638_14995[(2)] = null);

(statearr_13638_14995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (3))){
var inst_13557 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13584__$1,inst_13557);
} else {
if((state_val_13585 === (12))){
var _ = (function (){var statearr_13639 = state_13584;
(statearr_13639[(4)] = cljs.core.rest((state_13584[(4)])));

return statearr_13639;
})();
var state_13584__$1 = state_13584;
var ex13636 = (state_13584__$1[(2)]);
var statearr_13640_14996 = state_13584__$1;
(statearr_13640_14996[(5)] = ex13636);


if((ex13636 instanceof Object)){
var statearr_13663_14997 = state_13584__$1;
(statearr_13663_14997[(1)] = (11));

(statearr_13663_14997[(5)] = null);

} else {
throw ex13636;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (2))){
var inst_13518 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13519 = cnt;
var inst_13520 = (0);
var state_13584__$1 = (function (){var statearr_13664 = state_13584;
(statearr_13664[(7)] = inst_13519);

(statearr_13664[(11)] = inst_13518);

(statearr_13664[(8)] = inst_13520);

return statearr_13664;
})();
var statearr_13665_14998 = state_13584__$1;
(statearr_13665_14998[(2)] = null);

(statearr_13665_14998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (11))){
var inst_13524 = (state_13584[(2)]);
var inst_13525 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13584__$1 = (function (){var statearr_13666 = state_13584;
(statearr_13666[(12)] = inst_13524);

return statearr_13666;
})();
var statearr_13667_14999 = state_13584__$1;
(statearr_13667_14999[(2)] = inst_13525);

(statearr_13667_14999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (9))){
var inst_13520 = (state_13584[(8)]);
var _ = (function (){var statearr_13668 = state_13584;
(statearr_13668[(4)] = cljs.core.cons((12),(state_13584[(4)])));

return statearr_13668;
})();
var inst_13531 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13520) : chs__$1.call(null,inst_13520));
var inst_13532 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13520) : done.call(null,inst_13520));
var inst_13533 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13531,inst_13532);
var ___$1 = (function (){var statearr_13669 = state_13584;
(statearr_13669[(4)] = cljs.core.rest((state_13584[(4)])));

return statearr_13669;
})();
var state_13584__$1 = state_13584;
var statearr_13670_15000 = state_13584__$1;
(statearr_13670_15000[(2)] = inst_13533);

(statearr_13670_15000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (5))){
var inst_13543 = (state_13584[(2)]);
var state_13584__$1 = (function (){var statearr_13671 = state_13584;
(statearr_13671[(13)] = inst_13543);

return statearr_13671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13584__$1,(13),dchan);
} else {
if((state_val_13585 === (14))){
var inst_13548 = cljs.core.async.close_BANG_(out);
var state_13584__$1 = state_13584;
var statearr_13672_15001 = state_13584__$1;
(statearr_13672_15001[(2)] = inst_13548);

(statearr_13672_15001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (16))){
var inst_13555 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13673_15002 = state_13584__$1;
(statearr_13673_15002[(2)] = inst_13555);

(statearr_13673_15002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (10))){
var inst_13520 = (state_13584[(8)]);
var inst_13536 = (state_13584[(2)]);
var inst_13537 = (inst_13520 + (1));
var inst_13520__$1 = inst_13537;
var state_13584__$1 = (function (){var statearr_13674 = state_13584;
(statearr_13674[(8)] = inst_13520__$1);

(statearr_13674[(14)] = inst_13536);

return statearr_13674;
})();
var statearr_13675_15003 = state_13584__$1;
(statearr_13675_15003[(2)] = null);

(statearr_13675_15003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (8))){
var inst_13541 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13676_15015 = state_13584__$1;
(statearr_13676_15015[(2)] = inst_13541);

(statearr_13676_15015[(1)] = (5));


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
var statearr_13677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13677[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13677[(1)] = (1));

return statearr_13677;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13584){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13584);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13678){var ex__12075__auto__ = e13678;
var statearr_13679_15016 = state_13584;
(statearr_13679_15016[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13584[(4)]))){
var statearr_13680_15017 = state_13584;
(statearr_13680_15017[(1)] = cljs.core.first((state_13584[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15018 = state_13584;
state_13584 = G__15018;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13738 = f__12108__auto__();
(statearr_13738[(6)] = c__12107__auto___14987);

return statearr_13738;
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
var G__13741 = arguments.length;
switch (G__13741) {
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
var c__12107__auto___15020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13773){
var state_val_13774 = (state_13773[(1)]);
if((state_val_13774 === (7))){
var inst_13753 = (state_13773[(7)]);
var inst_13752 = (state_13773[(8)]);
var inst_13752__$1 = (state_13773[(2)]);
var inst_13753__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13752__$1,(0),null);
var inst_13754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13752__$1,(1),null);
var inst_13755 = (inst_13753__$1 == null);
var state_13773__$1 = (function (){var statearr_13775 = state_13773;
(statearr_13775[(7)] = inst_13753__$1);

(statearr_13775[(8)] = inst_13752__$1);

(statearr_13775[(9)] = inst_13754);

return statearr_13775;
})();
if(cljs.core.truth_(inst_13755)){
var statearr_13776_15021 = state_13773__$1;
(statearr_13776_15021[(1)] = (8));

} else {
var statearr_13777_15022 = state_13773__$1;
(statearr_13777_15022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (1))){
var inst_13742 = cljs.core.vec(chs);
var inst_13743 = inst_13742;
var state_13773__$1 = (function (){var statearr_13778 = state_13773;
(statearr_13778[(10)] = inst_13743);

return statearr_13778;
})();
var statearr_13779_15023 = state_13773__$1;
(statearr_13779_15023[(2)] = null);

(statearr_13779_15023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (4))){
var inst_13743 = (state_13773[(10)]);
var state_13773__$1 = state_13773;
return cljs.core.async.ioc_alts_BANG_(state_13773__$1,(7),inst_13743);
} else {
if((state_val_13774 === (6))){
var inst_13769 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
var statearr_13780_15024 = state_13773__$1;
(statearr_13780_15024[(2)] = inst_13769);

(statearr_13780_15024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (3))){
var inst_13771 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13773__$1,inst_13771);
} else {
if((state_val_13774 === (2))){
var inst_13743 = (state_13773[(10)]);
var inst_13745 = cljs.core.count(inst_13743);
var inst_13746 = (inst_13745 > (0));
var state_13773__$1 = state_13773;
if(cljs.core.truth_(inst_13746)){
var statearr_13782_15025 = state_13773__$1;
(statearr_13782_15025[(1)] = (4));

} else {
var statearr_13802_15026 = state_13773__$1;
(statearr_13802_15026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (11))){
var inst_13743 = (state_13773[(10)]);
var inst_13762 = (state_13773[(2)]);
var tmp13781 = inst_13743;
var inst_13743__$1 = tmp13781;
var state_13773__$1 = (function (){var statearr_13804 = state_13773;
(statearr_13804[(11)] = inst_13762);

(statearr_13804[(10)] = inst_13743__$1);

return statearr_13804;
})();
var statearr_13805_15027 = state_13773__$1;
(statearr_13805_15027[(2)] = null);

(statearr_13805_15027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (9))){
var inst_13753 = (state_13773[(7)]);
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13773__$1,(11),out,inst_13753);
} else {
if((state_val_13774 === (5))){
var inst_13767 = cljs.core.async.close_BANG_(out);
var state_13773__$1 = state_13773;
var statearr_13812_15028 = state_13773__$1;
(statearr_13812_15028[(2)] = inst_13767);

(statearr_13812_15028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (10))){
var inst_13765 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
var statearr_13815_15029 = state_13773__$1;
(statearr_13815_15029[(2)] = inst_13765);

(statearr_13815_15029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (8))){
var inst_13753 = (state_13773[(7)]);
var inst_13752 = (state_13773[(8)]);
var inst_13743 = (state_13773[(10)]);
var inst_13754 = (state_13773[(9)]);
var inst_13757 = (function (){var cs = inst_13743;
var vec__13748 = inst_13752;
var v = inst_13753;
var c = inst_13754;
return (function (p1__13739_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13739_SHARP_);
});
})();
var inst_13758 = cljs.core.filterv(inst_13757,inst_13743);
var inst_13743__$1 = inst_13758;
var state_13773__$1 = (function (){var statearr_13818 = state_13773;
(statearr_13818[(10)] = inst_13743__$1);

return statearr_13818;
})();
var statearr_13820_15030 = state_13773__$1;
(statearr_13820_15030[(2)] = null);

(statearr_13820_15030[(1)] = (2));


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
var statearr_13828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13828[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13828[(1)] = (1));

return statearr_13828;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13773){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13773);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13834){var ex__12075__auto__ = e13834;
var statearr_13836_15031 = state_13773;
(statearr_13836_15031[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13773[(4)]))){
var statearr_13839_15032 = state_13773;
(statearr_13839_15032[(1)] = cljs.core.first((state_13773[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15033 = state_13773;
state_13773 = G__15033;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13854 = f__12108__auto__();
(statearr_13854[(6)] = c__12107__auto___15020);

return statearr_13854;
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
var G__13856 = arguments.length;
switch (G__13856) {
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
var c__12107__auto___15035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13880){
var state_val_13881 = (state_13880[(1)]);
if((state_val_13881 === (7))){
var inst_13862 = (state_13880[(7)]);
var inst_13862__$1 = (state_13880[(2)]);
var inst_13863 = (inst_13862__$1 == null);
var inst_13864 = cljs.core.not(inst_13863);
var state_13880__$1 = (function (){var statearr_13882 = state_13880;
(statearr_13882[(7)] = inst_13862__$1);

return statearr_13882;
})();
if(inst_13864){
var statearr_13883_15036 = state_13880__$1;
(statearr_13883_15036[(1)] = (8));

} else {
var statearr_13884_15037 = state_13880__$1;
(statearr_13884_15037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (1))){
var inst_13857 = (0);
var state_13880__$1 = (function (){var statearr_13885 = state_13880;
(statearr_13885[(8)] = inst_13857);

return statearr_13885;
})();
var statearr_13886_15047 = state_13880__$1;
(statearr_13886_15047[(2)] = null);

(statearr_13886_15047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (4))){
var state_13880__$1 = state_13880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13880__$1,(7),ch);
} else {
if((state_val_13881 === (6))){
var inst_13875 = (state_13880[(2)]);
var state_13880__$1 = state_13880;
var statearr_13887_15048 = state_13880__$1;
(statearr_13887_15048[(2)] = inst_13875);

(statearr_13887_15048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (3))){
var inst_13877 = (state_13880[(2)]);
var inst_13878 = cljs.core.async.close_BANG_(out);
var state_13880__$1 = (function (){var statearr_13888 = state_13880;
(statearr_13888[(9)] = inst_13877);

return statearr_13888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13880__$1,inst_13878);
} else {
if((state_val_13881 === (2))){
var inst_13857 = (state_13880[(8)]);
var inst_13859 = (inst_13857 < n);
var state_13880__$1 = state_13880;
if(cljs.core.truth_(inst_13859)){
var statearr_13889_15049 = state_13880__$1;
(statearr_13889_15049[(1)] = (4));

} else {
var statearr_13890_15050 = state_13880__$1;
(statearr_13890_15050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (11))){
var inst_13857 = (state_13880[(8)]);
var inst_13867 = (state_13880[(2)]);
var inst_13868 = (inst_13857 + (1));
var inst_13857__$1 = inst_13868;
var state_13880__$1 = (function (){var statearr_13914 = state_13880;
(statearr_13914[(8)] = inst_13857__$1);

(statearr_13914[(10)] = inst_13867);

return statearr_13914;
})();
var statearr_13915_15051 = state_13880__$1;
(statearr_13915_15051[(2)] = null);

(statearr_13915_15051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (9))){
var state_13880__$1 = state_13880;
var statearr_13916_15052 = state_13880__$1;
(statearr_13916_15052[(2)] = null);

(statearr_13916_15052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (5))){
var state_13880__$1 = state_13880;
var statearr_13917_15053 = state_13880__$1;
(statearr_13917_15053[(2)] = null);

(statearr_13917_15053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (10))){
var inst_13872 = (state_13880[(2)]);
var state_13880__$1 = state_13880;
var statearr_13918_15054 = state_13880__$1;
(statearr_13918_15054[(2)] = inst_13872);

(statearr_13918_15054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13881 === (8))){
var inst_13862 = (state_13880[(7)]);
var state_13880__$1 = state_13880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13880__$1,(11),out,inst_13862);
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
var statearr_13919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13919[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13919[(1)] = (1));

return statearr_13919;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13880){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13880);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13927){var ex__12075__auto__ = e13927;
var statearr_13928_15055 = state_13880;
(statearr_13928_15055[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13880[(4)]))){
var statearr_13929_15056 = state_13880;
(statearr_13929_15056[(1)] = cljs.core.first((state_13880[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15057 = state_13880;
state_13880 = G__15057;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13930 = f__12108__auto__();
(statearr_13930[(6)] = c__12107__auto___15035);

return statearr_13930;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13932 = (function (f,ch,meta13933){
this.f = f;
this.ch = ch;
this.meta13933 = meta13933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13934,meta13933__$1){
var self__ = this;
var _13934__$1 = this;
return (new cljs.core.async.t_cljs$core$async13932(self__.f,self__.ch,meta13933__$1));
}));

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13934){
var self__ = this;
var _13934__$1 = this;
return self__.meta13933;
}));

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13935 = (function (f,ch,meta13933,_,fn1,meta13936){
this.f = f;
this.ch = ch;
this.meta13933 = meta13933;
this._ = _;
this.fn1 = fn1;
this.meta13936 = meta13936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13937,meta13936__$1){
var self__ = this;
var _13937__$1 = this;
return (new cljs.core.async.t_cljs$core$async13935(self__.f,self__.ch,self__.meta13933,self__._,self__.fn1,meta13936__$1));
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13937){
var self__ = this;
var _13937__$1 = this;
return self__.meta13936;
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13931_SHARP_){
var G__13961 = (((p1__13931_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13931_SHARP_) : self__.f.call(null,p1__13931_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13961) : f1.call(null,G__13961));
});
}));

(cljs.core.async.t_cljs$core$async13935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13933","meta13933",736865779,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13932","cljs.core.async/t_cljs$core$async13932",-1211371155,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13936","meta13936",1484193490,null)], null);
}));

(cljs.core.async.t_cljs$core$async13935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13935");

(cljs.core.async.t_cljs$core$async13935.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13935.
 */
cljs.core.async.__GT_t_cljs$core$async13935 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13935(f__$1,ch__$1,meta13933__$1,___$2,fn1__$1,meta13936){
return (new cljs.core.async.t_cljs$core$async13935(f__$1,ch__$1,meta13933__$1,___$2,fn1__$1,meta13936));
});

}

return (new cljs.core.async.t_cljs$core$async13935(self__.f,self__.ch,self__.meta13933,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13969 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13969) : self__.f.call(null,G__13969));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13933","meta13933",736865779,null)], null);
}));

(cljs.core.async.t_cljs$core$async13932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13932");

(cljs.core.async.t_cljs$core$async13932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13932.
 */
cljs.core.async.__GT_t_cljs$core$async13932 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13932(f__$1,ch__$1,meta13933){
return (new cljs.core.async.t_cljs$core$async13932(f__$1,ch__$1,meta13933));
});

}

return (new cljs.core.async.t_cljs$core$async13932(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13977 = (function (f,ch,meta13978){
this.f = f;
this.ch = ch;
this.meta13978 = meta13978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13979,meta13978__$1){
var self__ = this;
var _13979__$1 = this;
return (new cljs.core.async.t_cljs$core$async13977(self__.f,self__.ch,meta13978__$1));
}));

(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13979){
var self__ = this;
var _13979__$1 = this;
return self__.meta13978;
}));

(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13978","meta13978",427980054,null)], null);
}));

(cljs.core.async.t_cljs$core$async13977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13977");

(cljs.core.async.t_cljs$core$async13977.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13977.
 */
cljs.core.async.__GT_t_cljs$core$async13977 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13977(f__$1,ch__$1,meta13978){
return (new cljs.core.async.t_cljs$core$async13977(f__$1,ch__$1,meta13978));
});

}

return (new cljs.core.async.t_cljs$core$async13977(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14012 = (function (p,ch,meta14013){
this.p = p;
this.ch = ch;
this.meta14013 = meta14013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14014,meta14013__$1){
var self__ = this;
var _14014__$1 = this;
return (new cljs.core.async.t_cljs$core$async14012(self__.p,self__.ch,meta14013__$1));
}));

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14014){
var self__ = this;
var _14014__$1 = this;
return self__.meta14013;
}));

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14012.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14013","meta14013",-1543680936,null)], null);
}));

(cljs.core.async.t_cljs$core$async14012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14012");

(cljs.core.async.t_cljs$core$async14012.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14012.
 */
cljs.core.async.__GT_t_cljs$core$async14012 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14012(p__$1,ch__$1,meta14013){
return (new cljs.core.async.t_cljs$core$async14012(p__$1,ch__$1,meta14013));
});

}

return (new cljs.core.async.t_cljs$core$async14012(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14029 = arguments.length;
switch (G__14029) {
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
var c__12107__auto___15066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14050){
var state_val_14051 = (state_14050[(1)]);
if((state_val_14051 === (7))){
var inst_14046 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14065_15067 = state_14050__$1;
(statearr_14065_15067[(2)] = inst_14046);

(statearr_14065_15067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (1))){
var state_14050__$1 = state_14050;
var statearr_14066_15068 = state_14050__$1;
(statearr_14066_15068[(2)] = null);

(statearr_14066_15068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (4))){
var inst_14032 = (state_14050[(7)]);
var inst_14032__$1 = (state_14050[(2)]);
var inst_14033 = (inst_14032__$1 == null);
var state_14050__$1 = (function (){var statearr_14067 = state_14050;
(statearr_14067[(7)] = inst_14032__$1);

return statearr_14067;
})();
if(cljs.core.truth_(inst_14033)){
var statearr_14068_15076 = state_14050__$1;
(statearr_14068_15076[(1)] = (5));

} else {
var statearr_14069_15077 = state_14050__$1;
(statearr_14069_15077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (6))){
var inst_14032 = (state_14050[(7)]);
var inst_14037 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14032) : p.call(null,inst_14032));
var state_14050__$1 = state_14050;
if(cljs.core.truth_(inst_14037)){
var statearr_14070_15078 = state_14050__$1;
(statearr_14070_15078[(1)] = (8));

} else {
var statearr_14071_15079 = state_14050__$1;
(statearr_14071_15079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (3))){
var inst_14048 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14050__$1,inst_14048);
} else {
if((state_val_14051 === (2))){
var state_14050__$1 = state_14050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14050__$1,(4),ch);
} else {
if((state_val_14051 === (11))){
var inst_14040 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14072_15080 = state_14050__$1;
(statearr_14072_15080[(2)] = inst_14040);

(statearr_14072_15080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (9))){
var state_14050__$1 = state_14050;
var statearr_14073_15081 = state_14050__$1;
(statearr_14073_15081[(2)] = null);

(statearr_14073_15081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (5))){
var inst_14035 = cljs.core.async.close_BANG_(out);
var state_14050__$1 = state_14050;
var statearr_14074_15082 = state_14050__$1;
(statearr_14074_15082[(2)] = inst_14035);

(statearr_14074_15082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (10))){
var inst_14043 = (state_14050[(2)]);
var state_14050__$1 = (function (){var statearr_14075 = state_14050;
(statearr_14075[(8)] = inst_14043);

return statearr_14075;
})();
var statearr_14076_15083 = state_14050__$1;
(statearr_14076_15083[(2)] = null);

(statearr_14076_15083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14051 === (8))){
var inst_14032 = (state_14050[(7)]);
var state_14050__$1 = state_14050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14050__$1,(11),out,inst_14032);
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
var statearr_14077 = [null,null,null,null,null,null,null,null,null];
(statearr_14077[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14077[(1)] = (1));

return statearr_14077;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14050){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14050);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14078){var ex__12075__auto__ = e14078;
var statearr_14079_15084 = state_14050;
(statearr_14079_15084[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14050[(4)]))){
var statearr_14080_15085 = state_14050;
(statearr_14080_15085[(1)] = cljs.core.first((state_14050[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15086 = state_14050;
state_14050 = G__15086;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14081 = f__12108__auto__();
(statearr_14081[(6)] = c__12107__auto___15066);

return statearr_14081;
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
var G__14083 = arguments.length;
switch (G__14083) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14156){
var state_val_14157 = (state_14156[(1)]);
if((state_val_14157 === (7))){
var inst_14151 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
var statearr_14158_15088 = state_14156__$1;
(statearr_14158_15088[(2)] = inst_14151);

(statearr_14158_15088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (20))){
var inst_14121 = (state_14156[(7)]);
var inst_14132 = (state_14156[(2)]);
var inst_14133 = cljs.core.next(inst_14121);
var inst_14097 = inst_14133;
var inst_14098 = null;
var inst_14099 = (0);
var inst_14100 = (0);
var state_14156__$1 = (function (){var statearr_14159 = state_14156;
(statearr_14159[(8)] = inst_14098);

(statearr_14159[(9)] = inst_14099);

(statearr_14159[(10)] = inst_14100);

(statearr_14159[(11)] = inst_14097);

(statearr_14159[(12)] = inst_14132);

return statearr_14159;
})();
var statearr_14160_15089 = state_14156__$1;
(statearr_14160_15089[(2)] = null);

(statearr_14160_15089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (1))){
var state_14156__$1 = state_14156;
var statearr_14161_15090 = state_14156__$1;
(statearr_14161_15090[(2)] = null);

(statearr_14161_15090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (4))){
var inst_14086 = (state_14156[(13)]);
var inst_14086__$1 = (state_14156[(2)]);
var inst_14087 = (inst_14086__$1 == null);
var state_14156__$1 = (function (){var statearr_14162 = state_14156;
(statearr_14162[(13)] = inst_14086__$1);

return statearr_14162;
})();
if(cljs.core.truth_(inst_14087)){
var statearr_14163_15104 = state_14156__$1;
(statearr_14163_15104[(1)] = (5));

} else {
var statearr_14164_15105 = state_14156__$1;
(statearr_14164_15105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (15))){
var state_14156__$1 = state_14156;
var statearr_14168_15106 = state_14156__$1;
(statearr_14168_15106[(2)] = null);

(statearr_14168_15106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (21))){
var state_14156__$1 = state_14156;
var statearr_14169_15107 = state_14156__$1;
(statearr_14169_15107[(2)] = null);

(statearr_14169_15107[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (13))){
var inst_14098 = (state_14156[(8)]);
var inst_14099 = (state_14156[(9)]);
var inst_14100 = (state_14156[(10)]);
var inst_14097 = (state_14156[(11)]);
var inst_14117 = (state_14156[(2)]);
var inst_14118 = (inst_14100 + (1));
var tmp14165 = inst_14098;
var tmp14166 = inst_14099;
var tmp14167 = inst_14097;
var inst_14097__$1 = tmp14167;
var inst_14098__$1 = tmp14165;
var inst_14099__$1 = tmp14166;
var inst_14100__$1 = inst_14118;
var state_14156__$1 = (function (){var statearr_14170 = state_14156;
(statearr_14170[(8)] = inst_14098__$1);

(statearr_14170[(9)] = inst_14099__$1);

(statearr_14170[(10)] = inst_14100__$1);

(statearr_14170[(14)] = inst_14117);

(statearr_14170[(11)] = inst_14097__$1);

return statearr_14170;
})();
var statearr_14171_15108 = state_14156__$1;
(statearr_14171_15108[(2)] = null);

(statearr_14171_15108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (22))){
var state_14156__$1 = state_14156;
var statearr_14172_15109 = state_14156__$1;
(statearr_14172_15109[(2)] = null);

(statearr_14172_15109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (6))){
var inst_14086 = (state_14156[(13)]);
var inst_14095 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14086) : f.call(null,inst_14086));
var inst_14096 = cljs.core.seq(inst_14095);
var inst_14097 = inst_14096;
var inst_14098 = null;
var inst_14099 = (0);
var inst_14100 = (0);
var state_14156__$1 = (function (){var statearr_14173 = state_14156;
(statearr_14173[(8)] = inst_14098);

(statearr_14173[(9)] = inst_14099);

(statearr_14173[(10)] = inst_14100);

(statearr_14173[(11)] = inst_14097);

return statearr_14173;
})();
var statearr_14174_15110 = state_14156__$1;
(statearr_14174_15110[(2)] = null);

(statearr_14174_15110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (17))){
var inst_14121 = (state_14156[(7)]);
var inst_14125 = cljs.core.chunk_first(inst_14121);
var inst_14126 = cljs.core.chunk_rest(inst_14121);
var inst_14127 = cljs.core.count(inst_14125);
var inst_14097 = inst_14126;
var inst_14098 = inst_14125;
var inst_14099 = inst_14127;
var inst_14100 = (0);
var state_14156__$1 = (function (){var statearr_14175 = state_14156;
(statearr_14175[(8)] = inst_14098);

(statearr_14175[(9)] = inst_14099);

(statearr_14175[(10)] = inst_14100);

(statearr_14175[(11)] = inst_14097);

return statearr_14175;
})();
var statearr_14176_15111 = state_14156__$1;
(statearr_14176_15111[(2)] = null);

(statearr_14176_15111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (3))){
var inst_14153 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14156__$1,inst_14153);
} else {
if((state_val_14157 === (12))){
var inst_14141 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
var statearr_14177_15112 = state_14156__$1;
(statearr_14177_15112[(2)] = inst_14141);

(statearr_14177_15112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (2))){
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14156__$1,(4),in$);
} else {
if((state_val_14157 === (23))){
var inst_14149 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
var statearr_14178_15113 = state_14156__$1;
(statearr_14178_15113[(2)] = inst_14149);

(statearr_14178_15113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (19))){
var inst_14136 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
var statearr_14179_15114 = state_14156__$1;
(statearr_14179_15114[(2)] = inst_14136);

(statearr_14179_15114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (11))){
var inst_14121 = (state_14156[(7)]);
var inst_14097 = (state_14156[(11)]);
var inst_14121__$1 = cljs.core.seq(inst_14097);
var state_14156__$1 = (function (){var statearr_14180 = state_14156;
(statearr_14180[(7)] = inst_14121__$1);

return statearr_14180;
})();
if(inst_14121__$1){
var statearr_14181_15115 = state_14156__$1;
(statearr_14181_15115[(1)] = (14));

} else {
var statearr_14182_15116 = state_14156__$1;
(statearr_14182_15116[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (9))){
var inst_14143 = (state_14156[(2)]);
var inst_14144 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14156__$1 = (function (){var statearr_14183 = state_14156;
(statearr_14183[(15)] = inst_14143);

return statearr_14183;
})();
if(cljs.core.truth_(inst_14144)){
var statearr_14184_15117 = state_14156__$1;
(statearr_14184_15117[(1)] = (21));

} else {
var statearr_14185_15118 = state_14156__$1;
(statearr_14185_15118[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (5))){
var inst_14089 = cljs.core.async.close_BANG_(out);
var state_14156__$1 = state_14156;
var statearr_14186_15119 = state_14156__$1;
(statearr_14186_15119[(2)] = inst_14089);

(statearr_14186_15119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (14))){
var inst_14121 = (state_14156[(7)]);
var inst_14123 = cljs.core.chunked_seq_QMARK_(inst_14121);
var state_14156__$1 = state_14156;
if(inst_14123){
var statearr_14187_15120 = state_14156__$1;
(statearr_14187_15120[(1)] = (17));

} else {
var statearr_14188_15121 = state_14156__$1;
(statearr_14188_15121[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (16))){
var inst_14139 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
var statearr_14189_15122 = state_14156__$1;
(statearr_14189_15122[(2)] = inst_14139);

(statearr_14189_15122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (10))){
var inst_14098 = (state_14156[(8)]);
var inst_14100 = (state_14156[(10)]);
var inst_14115 = cljs.core._nth(inst_14098,inst_14100);
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14156__$1,(13),out,inst_14115);
} else {
if((state_val_14157 === (18))){
var inst_14121 = (state_14156[(7)]);
var inst_14130 = cljs.core.first(inst_14121);
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14156__$1,(20),out,inst_14130);
} else {
if((state_val_14157 === (8))){
var inst_14099 = (state_14156[(9)]);
var inst_14100 = (state_14156[(10)]);
var inst_14112 = (inst_14100 < inst_14099);
var inst_14113 = inst_14112;
var state_14156__$1 = state_14156;
if(cljs.core.truth_(inst_14113)){
var statearr_14196_15132 = state_14156__$1;
(statearr_14196_15132[(1)] = (10));

} else {
var statearr_14198_15133 = state_14156__$1;
(statearr_14198_15133[(1)] = (11));

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
var statearr_14199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14199[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14199[(1)] = (1));

return statearr_14199;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_14156){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14156);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14201){var ex__12075__auto__ = e14201;
var statearr_14202_15134 = state_14156;
(statearr_14202_15134[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14156[(4)]))){
var statearr_14203_15135 = state_14156;
(statearr_14203_15135[(1)] = cljs.core.first((state_14156[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15136 = state_14156;
state_14156 = G__15136;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_14156){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_14156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14208 = f__12108__auto__();
(statearr_14208[(6)] = c__12107__auto__);

return statearr_14208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14210 = arguments.length;
switch (G__14210) {
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
var G__14212 = arguments.length;
switch (G__14212) {
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
var G__14214 = arguments.length;
switch (G__14214) {
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
var c__12107__auto___15140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14238){
var state_val_14239 = (state_14238[(1)]);
if((state_val_14239 === (7))){
var inst_14233 = (state_14238[(2)]);
var state_14238__$1 = state_14238;
var statearr_14240_15141 = state_14238__$1;
(statearr_14240_15141[(2)] = inst_14233);

(statearr_14240_15141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14239 === (1))){
var inst_14215 = null;
var state_14238__$1 = (function (){var statearr_14245 = state_14238;
(statearr_14245[(7)] = inst_14215);

return statearr_14245;
})();
var statearr_14246_15142 = state_14238__$1;
(statearr_14246_15142[(2)] = null);

(statearr_14246_15142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14239 === (4))){
var inst_14218 = (state_14238[(8)]);
var inst_14218__$1 = (state_14238[(2)]);
var inst_14219 = (inst_14218__$1 == null);
var inst_14220 = cljs.core.not(inst_14219);
var state_14238__$1 = (function (){var statearr_14247 = state_14238;
(statearr_14247[(8)] = inst_14218__$1);

return statearr_14247;
})();
if(inst_14220){
var statearr_14248_15143 = state_14238__$1;
(statearr_14248_15143[(1)] = (5));

} else {
var statearr_14249_15144 = state_14238__$1;
(statearr_14249_15144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14239 === (6))){
var state_14238__$1 = state_14238;
var statearr_14250_15145 = state_14238__$1;
(statearr_14250_15145[(2)] = null);

(statearr_14250_15145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14239 === (3))){
var inst_14235 = (state_14238[(2)]);
var inst_14236 = cljs.core.async.close_BANG_(out);
var state_14238__$1 = (function (){var statearr_14251 = state_14238;
(statearr_14251[(9)] = inst_14235);

return statearr_14251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14238__$1,inst_14236);
} else {
if((state_val_14239 === (2))){
var state_14238__$1 = state_14238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14238__$1,(4),ch);
} else {
if((state_val_14239 === (11))){
var inst_14218 = (state_14238[(8)]);
var inst_14227 = (state_14238[(2)]);
var inst_14215 = inst_14218;
var state_14238__$1 = (function (){var statearr_14252 = state_14238;
(statearr_14252[(7)] = inst_14215);

(statearr_14252[(10)] = inst_14227);

return statearr_14252;
})();
var statearr_14253_15176 = state_14238__$1;
(statearr_14253_15176[(2)] = null);

(statearr_14253_15176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14239 === (9))){
var inst_14218 = (state_14238[(8)]);
var state_14238__$1 = state_14238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14238__$1,(11),out,inst_14218);
} else {
if((state_val_14239 === (5))){
var inst_14215 = (state_14238[(7)]);
var inst_14218 = (state_14238[(8)]);
var inst_14222 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14218,inst_14215);
var state_14238__$1 = state_14238;
if(inst_14222){
var statearr_14258_15177 = state_14238__$1;
(statearr_14258_15177[(1)] = (8));

} else {
var statearr_14259_15178 = state_14238__$1;
(statearr_14259_15178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14239 === (10))){
var inst_14230 = (state_14238[(2)]);
var state_14238__$1 = state_14238;
var statearr_14260_15179 = state_14238__$1;
(statearr_14260_15179[(2)] = inst_14230);

(statearr_14260_15179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14239 === (8))){
var inst_14215 = (state_14238[(7)]);
var tmp14254 = inst_14215;
var inst_14215__$1 = tmp14254;
var state_14238__$1 = (function (){var statearr_14261 = state_14238;
(statearr_14261[(7)] = inst_14215__$1);

return statearr_14261;
})();
var statearr_14263_15180 = state_14238__$1;
(statearr_14263_15180[(2)] = null);

(statearr_14263_15180[(1)] = (2));


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
var statearr_14267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14267[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14267[(1)] = (1));

return statearr_14267;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14238){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14238);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14269){var ex__12075__auto__ = e14269;
var statearr_14270_15181 = state_14238;
(statearr_14270_15181[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14238[(4)]))){
var statearr_14271_15182 = state_14238;
(statearr_14271_15182[(1)] = cljs.core.first((state_14238[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15183 = state_14238;
state_14238 = G__15183;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14274 = f__12108__auto__();
(statearr_14274[(6)] = c__12107__auto___15140);

return statearr_14274;
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
var G__14276 = arguments.length;
switch (G__14276) {
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
var c__12107__auto___15185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14314){
var state_val_14315 = (state_14314[(1)]);
if((state_val_14315 === (7))){
var inst_14310 = (state_14314[(2)]);
var state_14314__$1 = state_14314;
var statearr_14316_15186 = state_14314__$1;
(statearr_14316_15186[(2)] = inst_14310);

(statearr_14316_15186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (1))){
var inst_14277 = (new Array(n));
var inst_14278 = inst_14277;
var inst_14279 = (0);
var state_14314__$1 = (function (){var statearr_14317 = state_14314;
(statearr_14317[(7)] = inst_14278);

(statearr_14317[(8)] = inst_14279);

return statearr_14317;
})();
var statearr_14318_15187 = state_14314__$1;
(statearr_14318_15187[(2)] = null);

(statearr_14318_15187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (4))){
var inst_14282 = (state_14314[(9)]);
var inst_14282__$1 = (state_14314[(2)]);
var inst_14283 = (inst_14282__$1 == null);
var inst_14284 = cljs.core.not(inst_14283);
var state_14314__$1 = (function (){var statearr_14319 = state_14314;
(statearr_14319[(9)] = inst_14282__$1);

return statearr_14319;
})();
if(inst_14284){
var statearr_14322_15188 = state_14314__$1;
(statearr_14322_15188[(1)] = (5));

} else {
var statearr_14323_15189 = state_14314__$1;
(statearr_14323_15189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (15))){
var inst_14304 = (state_14314[(2)]);
var state_14314__$1 = state_14314;
var statearr_14324_15190 = state_14314__$1;
(statearr_14324_15190[(2)] = inst_14304);

(statearr_14324_15190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (13))){
var state_14314__$1 = state_14314;
var statearr_14325_15191 = state_14314__$1;
(statearr_14325_15191[(2)] = null);

(statearr_14325_15191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (6))){
var inst_14279 = (state_14314[(8)]);
var inst_14300 = (inst_14279 > (0));
var state_14314__$1 = state_14314;
if(cljs.core.truth_(inst_14300)){
var statearr_14326_15192 = state_14314__$1;
(statearr_14326_15192[(1)] = (12));

} else {
var statearr_14328_15224 = state_14314__$1;
(statearr_14328_15224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (3))){
var inst_14312 = (state_14314[(2)]);
var state_14314__$1 = state_14314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14314__$1,inst_14312);
} else {
if((state_val_14315 === (12))){
var inst_14278 = (state_14314[(7)]);
var inst_14302 = cljs.core.vec(inst_14278);
var state_14314__$1 = state_14314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14314__$1,(15),out,inst_14302);
} else {
if((state_val_14315 === (2))){
var state_14314__$1 = state_14314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14314__$1,(4),ch);
} else {
if((state_val_14315 === (11))){
var inst_14294 = (state_14314[(2)]);
var inst_14295 = (new Array(n));
var inst_14278 = inst_14295;
var inst_14279 = (0);
var state_14314__$1 = (function (){var statearr_14336 = state_14314;
(statearr_14336[(10)] = inst_14294);

(statearr_14336[(7)] = inst_14278);

(statearr_14336[(8)] = inst_14279);

return statearr_14336;
})();
var statearr_14338_15225 = state_14314__$1;
(statearr_14338_15225[(2)] = null);

(statearr_14338_15225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (9))){
var inst_14278 = (state_14314[(7)]);
var inst_14292 = cljs.core.vec(inst_14278);
var state_14314__$1 = state_14314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14314__$1,(11),out,inst_14292);
} else {
if((state_val_14315 === (5))){
var inst_14282 = (state_14314[(9)]);
var inst_14278 = (state_14314[(7)]);
var inst_14279 = (state_14314[(8)]);
var inst_14287 = (state_14314[(11)]);
var inst_14286 = (inst_14278[inst_14279] = inst_14282);
var inst_14287__$1 = (inst_14279 + (1));
var inst_14288 = (inst_14287__$1 < n);
var state_14314__$1 = (function (){var statearr_14345 = state_14314;
(statearr_14345[(11)] = inst_14287__$1);

(statearr_14345[(12)] = inst_14286);

return statearr_14345;
})();
if(cljs.core.truth_(inst_14288)){
var statearr_14346_15226 = state_14314__$1;
(statearr_14346_15226[(1)] = (8));

} else {
var statearr_14347_15227 = state_14314__$1;
(statearr_14347_15227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (14))){
var inst_14307 = (state_14314[(2)]);
var inst_14308 = cljs.core.async.close_BANG_(out);
var state_14314__$1 = (function (){var statearr_14349 = state_14314;
(statearr_14349[(13)] = inst_14307);

return statearr_14349;
})();
var statearr_14350_15228 = state_14314__$1;
(statearr_14350_15228[(2)] = inst_14308);

(statearr_14350_15228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (10))){
var inst_14298 = (state_14314[(2)]);
var state_14314__$1 = state_14314;
var statearr_14351_15229 = state_14314__$1;
(statearr_14351_15229[(2)] = inst_14298);

(statearr_14351_15229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14315 === (8))){
var inst_14278 = (state_14314[(7)]);
var inst_14287 = (state_14314[(11)]);
var tmp14348 = inst_14278;
var inst_14278__$1 = tmp14348;
var inst_14279 = inst_14287;
var state_14314__$1 = (function (){var statearr_14352 = state_14314;
(statearr_14352[(7)] = inst_14278__$1);

(statearr_14352[(8)] = inst_14279);

return statearr_14352;
})();
var statearr_14353_15230 = state_14314__$1;
(statearr_14353_15230[(2)] = null);

(statearr_14353_15230[(1)] = (2));


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
var statearr_14354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14354[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14354[(1)] = (1));

return statearr_14354;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14314){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14314);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14355){var ex__12075__auto__ = e14355;
var statearr_14356_15231 = state_14314;
(statearr_14356_15231[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14314[(4)]))){
var statearr_14357_15232 = state_14314;
(statearr_14357_15232[(1)] = cljs.core.first((state_14314[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15233 = state_14314;
state_14314 = G__15233;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14358 = f__12108__auto__();
(statearr_14358[(6)] = c__12107__auto___15185);

return statearr_14358;
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
var G__14360 = arguments.length;
switch (G__14360) {
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
var c__12107__auto___15235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14408){
var state_val_14410 = (state_14408[(1)]);
if((state_val_14410 === (7))){
var inst_14404 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14413_15236 = state_14408__$1;
(statearr_14413_15236[(2)] = inst_14404);

(statearr_14413_15236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (1))){
var inst_14361 = [];
var inst_14367 = inst_14361;
var inst_14368 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14408__$1 = (function (){var statearr_14415 = state_14408;
(statearr_14415[(7)] = inst_14368);

(statearr_14415[(8)] = inst_14367);

return statearr_14415;
})();
var statearr_14416_15237 = state_14408__$1;
(statearr_14416_15237[(2)] = null);

(statearr_14416_15237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (4))){
var inst_14372 = (state_14408[(9)]);
var inst_14372__$1 = (state_14408[(2)]);
var inst_14373 = (inst_14372__$1 == null);
var inst_14374 = cljs.core.not(inst_14373);
var state_14408__$1 = (function (){var statearr_14418 = state_14408;
(statearr_14418[(9)] = inst_14372__$1);

return statearr_14418;
})();
if(inst_14374){
var statearr_14419_15275 = state_14408__$1;
(statearr_14419_15275[(1)] = (5));

} else {
var statearr_14420_15276 = state_14408__$1;
(statearr_14420_15276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (15))){
var inst_14398 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14422_15277 = state_14408__$1;
(statearr_14422_15277[(2)] = inst_14398);

(statearr_14422_15277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (13))){
var state_14408__$1 = state_14408;
var statearr_14424_15278 = state_14408__$1;
(statearr_14424_15278[(2)] = null);

(statearr_14424_15278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (6))){
var inst_14367 = (state_14408[(8)]);
var inst_14393 = inst_14367.length;
var inst_14394 = (inst_14393 > (0));
var state_14408__$1 = state_14408;
if(cljs.core.truth_(inst_14394)){
var statearr_14425_15279 = state_14408__$1;
(statearr_14425_15279[(1)] = (12));

} else {
var statearr_14426_15280 = state_14408__$1;
(statearr_14426_15280[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (3))){
var inst_14406 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14408__$1,inst_14406);
} else {
if((state_val_14410 === (12))){
var inst_14367 = (state_14408[(8)]);
var inst_14396 = cljs.core.vec(inst_14367);
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14408__$1,(15),out,inst_14396);
} else {
if((state_val_14410 === (2))){
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14408__$1,(4),ch);
} else {
if((state_val_14410 === (11))){
var inst_14376 = (state_14408[(10)]);
var inst_14372 = (state_14408[(9)]);
var inst_14386 = (state_14408[(2)]);
var inst_14387 = [];
var inst_14388 = inst_14387.push(inst_14372);
var inst_14367 = inst_14387;
var inst_14368 = inst_14376;
var state_14408__$1 = (function (){var statearr_14429 = state_14408;
(statearr_14429[(7)] = inst_14368);

(statearr_14429[(11)] = inst_14386);

(statearr_14429[(12)] = inst_14388);

(statearr_14429[(8)] = inst_14367);

return statearr_14429;
})();
var statearr_14430_15281 = state_14408__$1;
(statearr_14430_15281[(2)] = null);

(statearr_14430_15281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (9))){
var inst_14367 = (state_14408[(8)]);
var inst_14384 = cljs.core.vec(inst_14367);
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14408__$1,(11),out,inst_14384);
} else {
if((state_val_14410 === (5))){
var inst_14368 = (state_14408[(7)]);
var inst_14376 = (state_14408[(10)]);
var inst_14372 = (state_14408[(9)]);
var inst_14376__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14372) : f.call(null,inst_14372));
var inst_14377 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14376__$1,inst_14368);
var inst_14378 = cljs.core.keyword_identical_QMARK_(inst_14368,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14379 = ((inst_14377) || (inst_14378));
var state_14408__$1 = (function (){var statearr_14431 = state_14408;
(statearr_14431[(10)] = inst_14376__$1);

return statearr_14431;
})();
if(cljs.core.truth_(inst_14379)){
var statearr_14432_15282 = state_14408__$1;
(statearr_14432_15282[(1)] = (8));

} else {
var statearr_14433_15283 = state_14408__$1;
(statearr_14433_15283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (14))){
var inst_14401 = (state_14408[(2)]);
var inst_14402 = cljs.core.async.close_BANG_(out);
var state_14408__$1 = (function (){var statearr_14435 = state_14408;
(statearr_14435[(13)] = inst_14401);

return statearr_14435;
})();
var statearr_14436_15284 = state_14408__$1;
(statearr_14436_15284[(2)] = inst_14402);

(statearr_14436_15284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (10))){
var inst_14391 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14437_15285 = state_14408__$1;
(statearr_14437_15285[(2)] = inst_14391);

(statearr_14437_15285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (8))){
var inst_14376 = (state_14408[(10)]);
var inst_14372 = (state_14408[(9)]);
var inst_14367 = (state_14408[(8)]);
var inst_14381 = inst_14367.push(inst_14372);
var tmp14434 = inst_14367;
var inst_14367__$1 = tmp14434;
var inst_14368 = inst_14376;
var state_14408__$1 = (function (){var statearr_14438 = state_14408;
(statearr_14438[(7)] = inst_14368);

(statearr_14438[(8)] = inst_14367__$1);

(statearr_14438[(14)] = inst_14381);

return statearr_14438;
})();
var statearr_14439_15286 = state_14408__$1;
(statearr_14439_15286[(2)] = null);

(statearr_14439_15286[(1)] = (2));


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
var statearr_14440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14440[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14440[(1)] = (1));

return statearr_14440;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14408){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14408);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14441){var ex__12075__auto__ = e14441;
var statearr_14442_15287 = state_14408;
(statearr_14442_15287[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14408[(4)]))){
var statearr_14443_15288 = state_14408;
(statearr_14443_15288[(1)] = cljs.core.first((state_14408[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15289 = state_14408;
state_14408 = G__15289;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14444 = f__12108__auto__();
(statearr_14444[(6)] = c__12107__auto___15235);

return statearr_14444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
