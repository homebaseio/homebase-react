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
var val_14355 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14355) : fn1.call(null,val_14355));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14355) : fn1.call(null,val_14355));
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
var n__4613__auto___14357 = n;
var x_14358 = (0);
while(true){
if((x_14358 < n__4613__auto___14357)){
(a[x_14358] = x_14358);

var G__14359 = (x_14358 + (1));
x_14358 = G__14359;
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
var G__14371 = (i + (1));
i = G__14371;
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
var len__4736__auto___14373 = arguments.length;
var i__4737__auto___14387 = (0);
while(true){
if((i__4737__auto___14387 < len__4736__auto___14373)){
args__4742__auto__.push((arguments[i__4737__auto___14387]));

var G__14388 = (i__4737__auto___14387 + (1));
i__4737__auto___14387 = G__14388;
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
var c__12107__auto___14390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_14391 = state_12218__$1;
(statearr_12220_14391[(2)] = inst_12214);

(statearr_12220_14391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_14392 = state_12218__$1;
(statearr_12221_14392[(2)] = null);

(statearr_12221_14392[(1)] = (2));


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
var statearr_12223_14393 = state_12218__$1;
(statearr_12223_14393[(1)] = (5));

} else {
var statearr_12224_14394 = state_12218__$1;
(statearr_12224_14394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_14395 = state_12218__$1;
(statearr_12225_14395[(2)] = null);

(statearr_12225_14395[(1)] = (14));


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
var statearr_12226_14396 = state_12218__$1;
(statearr_12226_14396[(2)] = null);

(statearr_12226_14396[(1)] = (2));


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
var statearr_12227_14397 = state_12218__$1;
(statearr_12227_14397[(1)] = (12));

} else {
var statearr_12228_14398 = state_12218__$1;
(statearr_12228_14398[(1)] = (13));

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
(statearr_12239[(6)] = c__12107__auto___14390);

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
var statearr_12253_14409 = state_12248;
(statearr_12253_14409[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14410 = state_12248;
(statearr_12254_14410[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14411 = state_12248;
state_12248 = G__14411;
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
var n__4613__auto___14412 = n;
var __14413 = (0);
while(true){
if((__14413 < n__4613__auto___14412)){
var G__12260_14414 = type;
var G__12260_14415__$1 = (((G__12260_14414 instanceof cljs.core.Keyword))?G__12260_14414.fqn:null);
switch (G__12260_14415__$1) {
case "compute":
var c__12107__auto___14417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14413,c__12107__auto___14417,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14413,c__12107__auto___14417,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14418 = state_12273__$1;
(statearr_12275_14418[(2)] = null);

(statearr_12275_14418[(1)] = (2));


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
var statearr_12276_14419 = state_12273__$1;
(statearr_12276_14419[(1)] = (5));

} else {
var statearr_12277_14420 = state_12273__$1;
(statearr_12277_14420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14421 = state_12273__$1;
(statearr_12278_14421[(2)] = null);

(statearr_12278_14421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14422 = state_12273__$1;
(statearr_12279_14422[(2)] = null);

(statearr_12279_14422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14423 = state_12273__$1;
(statearr_12280_14423[(2)] = inst_12269);

(statearr_12280_14423[(1)] = (3));


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
});})(__14413,c__12107__auto___14417,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async))
;
return ((function (__14413,switch__12071__auto__,c__12107__auto___14417,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async){
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
var statearr_12283_14447 = state_12273;
(statearr_12283_14447[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14448 = state_12273;
(statearr_12284_14448[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14449 = state_12273;
state_12273 = G__14449;
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
;})(__14413,switch__12071__auto__,c__12107__auto___14417,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14417);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14413,c__12107__auto___14417,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14413,c__12107__auto___14450,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14413,c__12107__auto___14450,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_14451 = state_12298__$1;
(statearr_12300_14451[(2)] = null);

(statearr_12300_14451[(1)] = (2));


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
var statearr_12301_14452 = state_12298__$1;
(statearr_12301_14452[(1)] = (5));

} else {
var statearr_12302_14453 = state_12298__$1;
(statearr_12302_14453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_14454 = state_12298__$1;
(statearr_12303_14454[(2)] = null);

(statearr_12303_14454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_14455 = state_12298__$1;
(statearr_12304_14455[(2)] = null);

(statearr_12304_14455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_14456 = state_12298__$1;
(statearr_12305_14456[(2)] = inst_12294);

(statearr_12305_14456[(1)] = (3));


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
});})(__14413,c__12107__auto___14450,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async))
;
return ((function (__14413,switch__12071__auto__,c__12107__auto___14450,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async){
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
var statearr_12308_14457 = state_12298;
(statearr_12308_14457[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_14458 = state_12298;
(statearr_12309_14458[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14459 = state_12298;
state_12298 = G__14459;
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
;})(__14413,switch__12071__auto__,c__12107__auto___14450,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14450);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14413,c__12107__auto___14450,G__12260_14414,G__12260_14415__$1,n__4613__auto___14412,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14415__$1)].join('')));

}

var G__14460 = (__14413 + (1));
__14413 = G__14460;
continue;
} else {
}
break;
}

var c__12107__auto___14461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_14462 = state_12332__$1;
(statearr_12334_14462[(2)] = inst_12328);

(statearr_12334_14462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_14463 = state_12332__$1;
(statearr_12335_14463[(2)] = null);

(statearr_12335_14463[(1)] = (2));


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
var statearr_12337_14464 = state_12332__$1;
(statearr_12337_14464[(1)] = (5));

} else {
var statearr_12338_14465 = state_12332__$1;
(statearr_12338_14465[(1)] = (6));

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
var statearr_12341_14480 = state_12332__$1;
(statearr_12341_14480[(2)] = null);

(statearr_12341_14480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14481 = state_12332__$1;
(statearr_12342_14481[(2)] = inst_12316);

(statearr_12342_14481[(1)] = (7));


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
var statearr_12346_14482 = state_12332;
(statearr_12346_14482[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14483 = state_12332;
(statearr_12347_14483[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14484 = state_12332;
state_12332 = G__14484;
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
(statearr_12348[(6)] = c__12107__auto___14461);

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
var statearr_12388_14485 = state_12386__$1;
(statearr_12388_14485[(2)] = inst_12382);

(statearr_12388_14485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_14486 = state_12386__$1;
(statearr_12389_14486[(2)] = null);

(statearr_12389_14486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_14487 = state_12386__$1;
(statearr_12390_14487[(2)] = null);

(statearr_12390_14487[(1)] = (2));


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
var statearr_12392_14488 = state_12386__$1;
(statearr_12392_14488[(1)] = (5));

} else {
var statearr_12393_14489 = state_12386__$1;
(statearr_12393_14489[(1)] = (6));

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
var statearr_12394_14490 = state_12386__$1;
(statearr_12394_14490[(2)] = inst_12377);

(statearr_12394_14490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_14491 = state_12386__$1;
(statearr_12396_14491[(2)] = null);

(statearr_12396_14491[(1)] = (2));


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
var statearr_12397_14492 = state_12386__$1;
(statearr_12397_14492[(1)] = (19));

} else {
var statearr_12398_14493 = state_12386__$1;
(statearr_12398_14493[(1)] = (20));

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
var statearr_12399_14494 = state_12386__$1;
(statearr_12399_14494[(2)] = null);

(statearr_12399_14494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_14507 = state_12386__$1;
(statearr_12401_14507[(2)] = null);

(statearr_12401_14507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_14508 = state_12386__$1;
(statearr_12402_14508[(2)] = null);

(statearr_12402_14508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_14520 = state_12386__$1;
(statearr_12403_14520[(1)] = (8));

} else {
var statearr_12404_14521 = state_12386__$1;
(statearr_12404_14521[(1)] = (9));

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
var statearr_12406_14522 = state_12386__$1;
(statearr_12406_14522[(1)] = (15));

} else {
var statearr_12407_14524 = state_12386__$1;
(statearr_12407_14524[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_14525 = state_12386__$1;
(statearr_12408_14525[(2)] = false);

(statearr_12408_14525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_14526 = state_12386__$1;
(statearr_12409_14526[(2)] = inst_12358);

(statearr_12409_14526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_14528 = state_12386__$1;
(statearr_12410_14528[(2)] = inst_12369);

(statearr_12410_14528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_14530 = state_12386__$1;
(statearr_12411_14530[(2)] = inst_12355);

(statearr_12411_14530[(1)] = (10));


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
var statearr_12414_14533 = state_12386;
(statearr_12414_14533[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_14534 = state_12386;
(statearr_12415_14534[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14535 = state_12386;
state_12386 = G__14535;
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
var G__12423 = arguments.length;
switch (G__12423) {
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
var c__12107__auto___14547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12449){
var state_val_12450 = (state_12449[(1)]);
if((state_val_12450 === (7))){
var inst_12445 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
var statearr_12451_14548 = state_12449__$1;
(statearr_12451_14548[(2)] = inst_12445);

(statearr_12451_14548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (1))){
var state_12449__$1 = state_12449;
var statearr_12452_14550 = state_12449__$1;
(statearr_12452_14550[(2)] = null);

(statearr_12452_14550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (4))){
var inst_12426 = (state_12449[(7)]);
var inst_12426__$1 = (state_12449[(2)]);
var inst_12427 = (inst_12426__$1 == null);
var state_12449__$1 = (function (){var statearr_12453 = state_12449;
(statearr_12453[(7)] = inst_12426__$1);

return statearr_12453;
})();
if(cljs.core.truth_(inst_12427)){
var statearr_12454_14558 = state_12449__$1;
(statearr_12454_14558[(1)] = (5));

} else {
var statearr_12455_14559 = state_12449__$1;
(statearr_12455_14559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (13))){
var state_12449__$1 = state_12449;
var statearr_12456_14560 = state_12449__$1;
(statearr_12456_14560[(2)] = null);

(statearr_12456_14560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (6))){
var inst_12426 = (state_12449[(7)]);
var inst_12432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12426) : p.call(null,inst_12426));
var state_12449__$1 = state_12449;
if(cljs.core.truth_(inst_12432)){
var statearr_12457_14561 = state_12449__$1;
(statearr_12457_14561[(1)] = (9));

} else {
var statearr_12458_14562 = state_12449__$1;
(statearr_12458_14562[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (3))){
var inst_12447 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12449__$1,inst_12447);
} else {
if((state_val_12450 === (12))){
var state_12449__$1 = state_12449;
var statearr_12459_14564 = state_12449__$1;
(statearr_12459_14564[(2)] = null);

(statearr_12459_14564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (2))){
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12449__$1,(4),ch);
} else {
if((state_val_12450 === (11))){
var inst_12426 = (state_12449[(7)]);
var inst_12436 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12449__$1,(8),inst_12436,inst_12426);
} else {
if((state_val_12450 === (9))){
var state_12449__$1 = state_12449;
var statearr_12460_14566 = state_12449__$1;
(statearr_12460_14566[(2)] = tc);

(statearr_12460_14566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (5))){
var inst_12429 = cljs.core.async.close_BANG_(tc);
var inst_12430 = cljs.core.async.close_BANG_(fc);
var state_12449__$1 = (function (){var statearr_12461 = state_12449;
(statearr_12461[(8)] = inst_12429);

return statearr_12461;
})();
var statearr_12462_14600 = state_12449__$1;
(statearr_12462_14600[(2)] = inst_12430);

(statearr_12462_14600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (14))){
var inst_12443 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
var statearr_12463_14605 = state_12449__$1;
(statearr_12463_14605[(2)] = inst_12443);

(statearr_12463_14605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (10))){
var state_12449__$1 = state_12449;
var statearr_12464_14606 = state_12449__$1;
(statearr_12464_14606[(2)] = fc);

(statearr_12464_14606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (8))){
var inst_12438 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
if(cljs.core.truth_(inst_12438)){
var statearr_12465_14607 = state_12449__$1;
(statearr_12465_14607[(1)] = (12));

} else {
var statearr_12466_14608 = state_12449__$1;
(statearr_12466_14608[(1)] = (13));

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
var statearr_12475 = [null,null,null,null,null,null,null,null,null];
(statearr_12475[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12475[(1)] = (1));

return statearr_12475;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12449){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12449);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12476){var ex__12075__auto__ = e12476;
var statearr_12477_14611 = state_12449;
(statearr_12477_14611[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12449[(4)]))){
var statearr_12478_14613 = state_12449;
(statearr_12478_14613[(1)] = cljs.core.first((state_12449[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14614 = state_12449;
state_12449 = G__14614;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12479 = f__12108__auto__();
(statearr_12479[(6)] = c__12107__auto___14547);

return statearr_12479;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12501){
var state_val_12502 = (state_12501[(1)]);
if((state_val_12502 === (7))){
var inst_12497 = (state_12501[(2)]);
var state_12501__$1 = state_12501;
var statearr_12503_14617 = state_12501__$1;
(statearr_12503_14617[(2)] = inst_12497);

(statearr_12503_14617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (1))){
var inst_12480 = init;
var inst_12481 = inst_12480;
var state_12501__$1 = (function (){var statearr_12504 = state_12501;
(statearr_12504[(7)] = inst_12481);

return statearr_12504;
})();
var statearr_12505_14619 = state_12501__$1;
(statearr_12505_14619[(2)] = null);

(statearr_12505_14619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (4))){
var inst_12484 = (state_12501[(8)]);
var inst_12484__$1 = (state_12501[(2)]);
var inst_12485 = (inst_12484__$1 == null);
var state_12501__$1 = (function (){var statearr_12506 = state_12501;
(statearr_12506[(8)] = inst_12484__$1);

return statearr_12506;
})();
if(cljs.core.truth_(inst_12485)){
var statearr_12507_14677 = state_12501__$1;
(statearr_12507_14677[(1)] = (5));

} else {
var statearr_12508_14678 = state_12501__$1;
(statearr_12508_14678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (6))){
var inst_12488 = (state_12501[(9)]);
var inst_12484 = (state_12501[(8)]);
var inst_12481 = (state_12501[(7)]);
var inst_12488__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12481,inst_12484) : f.call(null,inst_12481,inst_12484));
var inst_12489 = cljs.core.reduced_QMARK_(inst_12488__$1);
var state_12501__$1 = (function (){var statearr_12509 = state_12501;
(statearr_12509[(9)] = inst_12488__$1);

return statearr_12509;
})();
if(inst_12489){
var statearr_12510_14681 = state_12501__$1;
(statearr_12510_14681[(1)] = (8));

} else {
var statearr_12511_14682 = state_12501__$1;
(statearr_12511_14682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (3))){
var inst_12499 = (state_12501[(2)]);
var state_12501__$1 = state_12501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12501__$1,inst_12499);
} else {
if((state_val_12502 === (2))){
var state_12501__$1 = state_12501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12501__$1,(4),ch);
} else {
if((state_val_12502 === (9))){
var inst_12488 = (state_12501[(9)]);
var inst_12481 = inst_12488;
var state_12501__$1 = (function (){var statearr_12512 = state_12501;
(statearr_12512[(7)] = inst_12481);

return statearr_12512;
})();
var statearr_12513_14685 = state_12501__$1;
(statearr_12513_14685[(2)] = null);

(statearr_12513_14685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (5))){
var inst_12481 = (state_12501[(7)]);
var state_12501__$1 = state_12501;
var statearr_12514_14687 = state_12501__$1;
(statearr_12514_14687[(2)] = inst_12481);

(statearr_12514_14687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (10))){
var inst_12495 = (state_12501[(2)]);
var state_12501__$1 = state_12501;
var statearr_12515_14688 = state_12501__$1;
(statearr_12515_14688[(2)] = inst_12495);

(statearr_12515_14688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (8))){
var inst_12488 = (state_12501[(9)]);
var inst_12491 = cljs.core.deref(inst_12488);
var state_12501__$1 = state_12501;
var statearr_12516_14691 = state_12501__$1;
(statearr_12516_14691[(2)] = inst_12491);

(statearr_12516_14691[(1)] = (10));


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
var statearr_12517 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12517[(0)] = cljs$core$async$reduce_$_state_machine__12072__auto__);

(statearr_12517[(1)] = (1));

return statearr_12517;
});
var cljs$core$async$reduce_$_state_machine__12072__auto____1 = (function (state_12501){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12501);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12518){var ex__12075__auto__ = e12518;
var statearr_12519_14694 = state_12501;
(statearr_12519_14694[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12501[(4)]))){
var statearr_12520_14695 = state_12501;
(statearr_12520_14695[(1)] = cljs.core.first((state_12501[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14698 = state_12501;
state_12501 = G__14698;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12072__auto__ = function(state_12501){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12072__auto____1.call(this,state_12501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12072__auto____0;
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12072__auto____1;
return cljs$core$async$reduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12521 = f__12108__auto__();
(statearr_12521[(6)] = c__12107__auto__);

return statearr_12521;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12527){
var state_val_12528 = (state_12527[(1)]);
if((state_val_12528 === (1))){
var inst_12522 = cljs.core.async.reduce(f__$1,init,ch);
var state_12527__$1 = state_12527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12527__$1,(2),inst_12522);
} else {
if((state_val_12528 === (2))){
var inst_12524 = (state_12527[(2)]);
var inst_12525 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12524) : f__$1.call(null,inst_12524));
var state_12527__$1 = state_12527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12527__$1,inst_12525);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12529 = [null,null,null,null,null,null,null];
(statearr_12529[(0)] = cljs$core$async$transduce_$_state_machine__12072__auto__);

(statearr_12529[(1)] = (1));

return statearr_12529;
});
var cljs$core$async$transduce_$_state_machine__12072__auto____1 = (function (state_12527){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12527);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12535){var ex__12075__auto__ = e12535;
var statearr_12536_14700 = state_12527;
(statearr_12536_14700[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12527[(4)]))){
var statearr_12537_14701 = state_12527;
(statearr_12537_14701[(1)] = cljs.core.first((state_12527[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14703 = state_12527;
state_12527 = G__14703;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12072__auto__ = function(state_12527){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12072__auto____1.call(this,state_12527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12072__auto____0;
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12072__auto____1;
return cljs$core$async$transduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12538 = f__12108__auto__();
(statearr_12538[(6)] = c__12107__auto__);

return statearr_12538;
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
var G__12540 = arguments.length;
switch (G__12540) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12565){
var state_val_12566 = (state_12565[(1)]);
if((state_val_12566 === (7))){
var inst_12547 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
var statearr_12567_14709 = state_12565__$1;
(statearr_12567_14709[(2)] = inst_12547);

(statearr_12567_14709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (1))){
var inst_12541 = cljs.core.seq(coll);
var inst_12542 = inst_12541;
var state_12565__$1 = (function (){var statearr_12568 = state_12565;
(statearr_12568[(7)] = inst_12542);

return statearr_12568;
})();
var statearr_12569_14721 = state_12565__$1;
(statearr_12569_14721[(2)] = null);

(statearr_12569_14721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (4))){
var inst_12542 = (state_12565[(7)]);
var inst_12545 = cljs.core.first(inst_12542);
var state_12565__$1 = state_12565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12565__$1,(7),ch,inst_12545);
} else {
if((state_val_12566 === (13))){
var inst_12559 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
var statearr_12570_14723 = state_12565__$1;
(statearr_12570_14723[(2)] = inst_12559);

(statearr_12570_14723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (6))){
var inst_12550 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12550)){
var statearr_12571_14724 = state_12565__$1;
(statearr_12571_14724[(1)] = (8));

} else {
var statearr_12572_14725 = state_12565__$1;
(statearr_12572_14725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (3))){
var inst_12563 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12565__$1,inst_12563);
} else {
if((state_val_12566 === (12))){
var state_12565__$1 = state_12565;
var statearr_12573_14726 = state_12565__$1;
(statearr_12573_14726[(2)] = null);

(statearr_12573_14726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (2))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12542)){
var statearr_12574_14728 = state_12565__$1;
(statearr_12574_14728[(1)] = (4));

} else {
var statearr_12575_14729 = state_12565__$1;
(statearr_12575_14729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (11))){
var inst_12556 = cljs.core.async.close_BANG_(ch);
var state_12565__$1 = state_12565;
var statearr_12576_14730 = state_12565__$1;
(statearr_12576_14730[(2)] = inst_12556);

(statearr_12576_14730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (9))){
var state_12565__$1 = state_12565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12577_14731 = state_12565__$1;
(statearr_12577_14731[(1)] = (11));

} else {
var statearr_12578_14732 = state_12565__$1;
(statearr_12578_14732[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (5))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
var statearr_12579_14734 = state_12565__$1;
(statearr_12579_14734[(2)] = inst_12542);

(statearr_12579_14734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (10))){
var inst_12561 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
var statearr_12580_14735 = state_12565__$1;
(statearr_12580_14735[(2)] = inst_12561);

(statearr_12580_14735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (8))){
var inst_12542 = (state_12565[(7)]);
var inst_12552 = cljs.core.next(inst_12542);
var inst_12542__$1 = inst_12552;
var state_12565__$1 = (function (){var statearr_12581 = state_12565;
(statearr_12581[(7)] = inst_12542__$1);

return statearr_12581;
})();
var statearr_12582_14737 = state_12565__$1;
(statearr_12582_14737[(2)] = null);

(statearr_12582_14737[(1)] = (2));


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
var statearr_12583 = [null,null,null,null,null,null,null,null];
(statearr_12583[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12583[(1)] = (1));

return statearr_12583;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12565){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12565);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12584){var ex__12075__auto__ = e12584;
var statearr_12585_14738 = state_12565;
(statearr_12585_14738[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12565[(4)]))){
var statearr_12586_14739 = state_12565;
(statearr_12586_14739[(1)] = cljs.core.first((state_12565[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14741 = state_12565;
state_12565 = G__14741;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12587 = f__12108__auto__();
(statearr_12587[(6)] = c__12107__auto__);

return statearr_12587;
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
var G__12589 = arguments.length;
switch (G__12589) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14758 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14758(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14760 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14760(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14762 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14762(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14764 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14764(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12595 = (function (ch,cs,meta12596){
this.ch = ch;
this.cs = cs;
this.meta12596 = meta12596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12597,meta12596__$1){
var self__ = this;
var _12597__$1 = this;
return (new cljs.core.async.t_cljs$core$async12595(self__.ch,self__.cs,meta12596__$1));
}));

(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12597){
var self__ = this;
var _12597__$1 = this;
return self__.meta12596;
}));

(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12595.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12596","meta12596",1180768495,null)], null);
}));

(cljs.core.async.t_cljs$core$async12595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12595");

(cljs.core.async.t_cljs$core$async12595.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12595.
 */
cljs.core.async.__GT_t_cljs$core$async12595 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12595(ch__$1,cs__$1,meta12596){
return (new cljs.core.async.t_cljs$core$async12595(ch__$1,cs__$1,meta12596));
});

}

return (new cljs.core.async.t_cljs$core$async12595(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12107__auto___14772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12740){
var state_val_12741 = (state_12740[(1)]);
if((state_val_12741 === (7))){
var inst_12734 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12742_14774 = state_12740__$1;
(statearr_12742_14774[(2)] = inst_12734);

(statearr_12742_14774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (20))){
var inst_12632 = (state_12740[(7)]);
var inst_12644 = cljs.core.first(inst_12632);
var inst_12645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12644,(0),null);
var inst_12646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12644,(1),null);
var state_12740__$1 = (function (){var statearr_12743 = state_12740;
(statearr_12743[(8)] = inst_12645);

return statearr_12743;
})();
if(cljs.core.truth_(inst_12646)){
var statearr_12744_14775 = state_12740__$1;
(statearr_12744_14775[(1)] = (22));

} else {
var statearr_12745_14777 = state_12740__$1;
(statearr_12745_14777[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (27))){
var inst_12676 = (state_12740[(9)]);
var inst_12601 = (state_12740[(10)]);
var inst_12682 = (state_12740[(11)]);
var inst_12674 = (state_12740[(12)]);
var inst_12682__$1 = cljs.core._nth(inst_12674,inst_12676);
var inst_12683 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12682__$1,inst_12601,done);
var state_12740__$1 = (function (){var statearr_12747 = state_12740;
(statearr_12747[(11)] = inst_12682__$1);

return statearr_12747;
})();
if(cljs.core.truth_(inst_12683)){
var statearr_12748_14778 = state_12740__$1;
(statearr_12748_14778[(1)] = (30));

} else {
var statearr_12749_14779 = state_12740__$1;
(statearr_12749_14779[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (1))){
var state_12740__$1 = state_12740;
var statearr_12750_14781 = state_12740__$1;
(statearr_12750_14781[(2)] = null);

(statearr_12750_14781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (24))){
var inst_12632 = (state_12740[(7)]);
var inst_12651 = (state_12740[(2)]);
var inst_12652 = cljs.core.next(inst_12632);
var inst_12610 = inst_12652;
var inst_12611 = null;
var inst_12612 = (0);
var inst_12613 = (0);
var state_12740__$1 = (function (){var statearr_12751 = state_12740;
(statearr_12751[(13)] = inst_12613);

(statearr_12751[(14)] = inst_12651);

(statearr_12751[(15)] = inst_12611);

(statearr_12751[(16)] = inst_12612);

(statearr_12751[(17)] = inst_12610);

return statearr_12751;
})();
var statearr_12752_14782 = state_12740__$1;
(statearr_12752_14782[(2)] = null);

(statearr_12752_14782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (39))){
var state_12740__$1 = state_12740;
var statearr_12756_14784 = state_12740__$1;
(statearr_12756_14784[(2)] = null);

(statearr_12756_14784[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (4))){
var inst_12601 = (state_12740[(10)]);
var inst_12601__$1 = (state_12740[(2)]);
var inst_12602 = (inst_12601__$1 == null);
var state_12740__$1 = (function (){var statearr_12757 = state_12740;
(statearr_12757[(10)] = inst_12601__$1);

return statearr_12757;
})();
if(cljs.core.truth_(inst_12602)){
var statearr_12758_14785 = state_12740__$1;
(statearr_12758_14785[(1)] = (5));

} else {
var statearr_12759_14786 = state_12740__$1;
(statearr_12759_14786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (15))){
var inst_12613 = (state_12740[(13)]);
var inst_12611 = (state_12740[(15)]);
var inst_12612 = (state_12740[(16)]);
var inst_12610 = (state_12740[(17)]);
var inst_12628 = (state_12740[(2)]);
var inst_12629 = (inst_12613 + (1));
var tmp12753 = inst_12611;
var tmp12754 = inst_12612;
var tmp12755 = inst_12610;
var inst_12610__$1 = tmp12755;
var inst_12611__$1 = tmp12753;
var inst_12612__$1 = tmp12754;
var inst_12613__$1 = inst_12629;
var state_12740__$1 = (function (){var statearr_12760 = state_12740;
(statearr_12760[(13)] = inst_12613__$1);

(statearr_12760[(18)] = inst_12628);

(statearr_12760[(15)] = inst_12611__$1);

(statearr_12760[(16)] = inst_12612__$1);

(statearr_12760[(17)] = inst_12610__$1);

return statearr_12760;
})();
var statearr_12761_14788 = state_12740__$1;
(statearr_12761_14788[(2)] = null);

(statearr_12761_14788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (21))){
var inst_12655 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12765_14789 = state_12740__$1;
(statearr_12765_14789[(2)] = inst_12655);

(statearr_12765_14789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (31))){
var inst_12682 = (state_12740[(11)]);
var inst_12687 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12682);
var state_12740__$1 = state_12740;
var statearr_12766_14791 = state_12740__$1;
(statearr_12766_14791[(2)] = inst_12687);

(statearr_12766_14791[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (32))){
var inst_12676 = (state_12740[(9)]);
var inst_12673 = (state_12740[(19)]);
var inst_12674 = (state_12740[(12)]);
var inst_12675 = (state_12740[(20)]);
var inst_12689 = (state_12740[(2)]);
var inst_12690 = (inst_12676 + (1));
var tmp12762 = inst_12673;
var tmp12763 = inst_12674;
var tmp12764 = inst_12675;
var inst_12673__$1 = tmp12762;
var inst_12674__$1 = tmp12763;
var inst_12675__$1 = tmp12764;
var inst_12676__$1 = inst_12690;
var state_12740__$1 = (function (){var statearr_12767 = state_12740;
(statearr_12767[(21)] = inst_12689);

(statearr_12767[(9)] = inst_12676__$1);

(statearr_12767[(19)] = inst_12673__$1);

(statearr_12767[(12)] = inst_12674__$1);

(statearr_12767[(20)] = inst_12675__$1);

return statearr_12767;
})();
var statearr_12768_14792 = state_12740__$1;
(statearr_12768_14792[(2)] = null);

(statearr_12768_14792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (40))){
var inst_12702 = (state_12740[(22)]);
var inst_12706 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12702);
var state_12740__$1 = state_12740;
var statearr_12769_14793 = state_12740__$1;
(statearr_12769_14793[(2)] = inst_12706);

(statearr_12769_14793[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (33))){
var inst_12693 = (state_12740[(23)]);
var inst_12695 = cljs.core.chunked_seq_QMARK_(inst_12693);
var state_12740__$1 = state_12740;
if(inst_12695){
var statearr_12770_14794 = state_12740__$1;
(statearr_12770_14794[(1)] = (36));

} else {
var statearr_12771_14795 = state_12740__$1;
(statearr_12771_14795[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (13))){
var inst_12622 = (state_12740[(24)]);
var inst_12625 = cljs.core.async.close_BANG_(inst_12622);
var state_12740__$1 = state_12740;
var statearr_12772_14796 = state_12740__$1;
(statearr_12772_14796[(2)] = inst_12625);

(statearr_12772_14796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (22))){
var inst_12645 = (state_12740[(8)]);
var inst_12648 = cljs.core.async.close_BANG_(inst_12645);
var state_12740__$1 = state_12740;
var statearr_12777_14797 = state_12740__$1;
(statearr_12777_14797[(2)] = inst_12648);

(statearr_12777_14797[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (36))){
var inst_12693 = (state_12740[(23)]);
var inst_12697 = cljs.core.chunk_first(inst_12693);
var inst_12698 = cljs.core.chunk_rest(inst_12693);
var inst_12699 = cljs.core.count(inst_12697);
var inst_12673 = inst_12698;
var inst_12674 = inst_12697;
var inst_12675 = inst_12699;
var inst_12676 = (0);
var state_12740__$1 = (function (){var statearr_12781 = state_12740;
(statearr_12781[(9)] = inst_12676);

(statearr_12781[(19)] = inst_12673);

(statearr_12781[(12)] = inst_12674);

(statearr_12781[(20)] = inst_12675);

return statearr_12781;
})();
var statearr_12782_14798 = state_12740__$1;
(statearr_12782_14798[(2)] = null);

(statearr_12782_14798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (41))){
var inst_12693 = (state_12740[(23)]);
var inst_12708 = (state_12740[(2)]);
var inst_12709 = cljs.core.next(inst_12693);
var inst_12673 = inst_12709;
var inst_12674 = null;
var inst_12675 = (0);
var inst_12676 = (0);
var state_12740__$1 = (function (){var statearr_12783 = state_12740;
(statearr_12783[(9)] = inst_12676);

(statearr_12783[(19)] = inst_12673);

(statearr_12783[(12)] = inst_12674);

(statearr_12783[(20)] = inst_12675);

(statearr_12783[(25)] = inst_12708);

return statearr_12783;
})();
var statearr_12784_14799 = state_12740__$1;
(statearr_12784_14799[(2)] = null);

(statearr_12784_14799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (43))){
var state_12740__$1 = state_12740;
var statearr_12785_14800 = state_12740__$1;
(statearr_12785_14800[(2)] = null);

(statearr_12785_14800[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (29))){
var inst_12717 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12786_14801 = state_12740__$1;
(statearr_12786_14801[(2)] = inst_12717);

(statearr_12786_14801[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (44))){
var inst_12728 = (state_12740[(2)]);
var state_12740__$1 = (function (){var statearr_12787 = state_12740;
(statearr_12787[(26)] = inst_12728);

return statearr_12787;
})();
var statearr_12788_14802 = state_12740__$1;
(statearr_12788_14802[(2)] = null);

(statearr_12788_14802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (6))){
var inst_12665 = (state_12740[(27)]);
var inst_12664 = cljs.core.deref(cs);
var inst_12665__$1 = cljs.core.keys(inst_12664);
var inst_12666 = cljs.core.count(inst_12665__$1);
var inst_12667 = cljs.core.reset_BANG_(dctr,inst_12666);
var inst_12672 = cljs.core.seq(inst_12665__$1);
var inst_12673 = inst_12672;
var inst_12674 = null;
var inst_12675 = (0);
var inst_12676 = (0);
var state_12740__$1 = (function (){var statearr_12792 = state_12740;
(statearr_12792[(9)] = inst_12676);

(statearr_12792[(28)] = inst_12667);

(statearr_12792[(27)] = inst_12665__$1);

(statearr_12792[(19)] = inst_12673);

(statearr_12792[(12)] = inst_12674);

(statearr_12792[(20)] = inst_12675);

return statearr_12792;
})();
var statearr_12793_14803 = state_12740__$1;
(statearr_12793_14803[(2)] = null);

(statearr_12793_14803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (28))){
var inst_12693 = (state_12740[(23)]);
var inst_12673 = (state_12740[(19)]);
var inst_12693__$1 = cljs.core.seq(inst_12673);
var state_12740__$1 = (function (){var statearr_12794 = state_12740;
(statearr_12794[(23)] = inst_12693__$1);

return statearr_12794;
})();
if(inst_12693__$1){
var statearr_12795_14804 = state_12740__$1;
(statearr_12795_14804[(1)] = (33));

} else {
var statearr_12796_14805 = state_12740__$1;
(statearr_12796_14805[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (25))){
var inst_12676 = (state_12740[(9)]);
var inst_12675 = (state_12740[(20)]);
var inst_12679 = (inst_12676 < inst_12675);
var inst_12680 = inst_12679;
var state_12740__$1 = state_12740;
if(cljs.core.truth_(inst_12680)){
var statearr_12797_14806 = state_12740__$1;
(statearr_12797_14806[(1)] = (27));

} else {
var statearr_12798_14807 = state_12740__$1;
(statearr_12798_14807[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (34))){
var state_12740__$1 = state_12740;
var statearr_12799_14808 = state_12740__$1;
(statearr_12799_14808[(2)] = null);

(statearr_12799_14808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (17))){
var state_12740__$1 = state_12740;
var statearr_12800_14809 = state_12740__$1;
(statearr_12800_14809[(2)] = null);

(statearr_12800_14809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (3))){
var inst_12736 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12740__$1,inst_12736);
} else {
if((state_val_12741 === (12))){
var inst_12660 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12801_14810 = state_12740__$1;
(statearr_12801_14810[(2)] = inst_12660);

(statearr_12801_14810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (2))){
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12740__$1,(4),ch);
} else {
if((state_val_12741 === (23))){
var state_12740__$1 = state_12740;
var statearr_12802_14811 = state_12740__$1;
(statearr_12802_14811[(2)] = null);

(statearr_12802_14811[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (35))){
var inst_12715 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12803_14812 = state_12740__$1;
(statearr_12803_14812[(2)] = inst_12715);

(statearr_12803_14812[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (19))){
var inst_12632 = (state_12740[(7)]);
var inst_12636 = cljs.core.chunk_first(inst_12632);
var inst_12637 = cljs.core.chunk_rest(inst_12632);
var inst_12638 = cljs.core.count(inst_12636);
var inst_12610 = inst_12637;
var inst_12611 = inst_12636;
var inst_12612 = inst_12638;
var inst_12613 = (0);
var state_12740__$1 = (function (){var statearr_12804 = state_12740;
(statearr_12804[(13)] = inst_12613);

(statearr_12804[(15)] = inst_12611);

(statearr_12804[(16)] = inst_12612);

(statearr_12804[(17)] = inst_12610);

return statearr_12804;
})();
var statearr_12805_14814 = state_12740__$1;
(statearr_12805_14814[(2)] = null);

(statearr_12805_14814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (11))){
var inst_12632 = (state_12740[(7)]);
var inst_12610 = (state_12740[(17)]);
var inst_12632__$1 = cljs.core.seq(inst_12610);
var state_12740__$1 = (function (){var statearr_12806 = state_12740;
(statearr_12806[(7)] = inst_12632__$1);

return statearr_12806;
})();
if(inst_12632__$1){
var statearr_12807_14815 = state_12740__$1;
(statearr_12807_14815[(1)] = (16));

} else {
var statearr_12808_14816 = state_12740__$1;
(statearr_12808_14816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (9))){
var inst_12662 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12809_14817 = state_12740__$1;
(statearr_12809_14817[(2)] = inst_12662);

(statearr_12809_14817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (5))){
var inst_12608 = cljs.core.deref(cs);
var inst_12609 = cljs.core.seq(inst_12608);
var inst_12610 = inst_12609;
var inst_12611 = null;
var inst_12612 = (0);
var inst_12613 = (0);
var state_12740__$1 = (function (){var statearr_12810 = state_12740;
(statearr_12810[(13)] = inst_12613);

(statearr_12810[(15)] = inst_12611);

(statearr_12810[(16)] = inst_12612);

(statearr_12810[(17)] = inst_12610);

return statearr_12810;
})();
var statearr_12811_14818 = state_12740__$1;
(statearr_12811_14818[(2)] = null);

(statearr_12811_14818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (14))){
var state_12740__$1 = state_12740;
var statearr_12812_14819 = state_12740__$1;
(statearr_12812_14819[(2)] = null);

(statearr_12812_14819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (45))){
var inst_12725 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12813_14820 = state_12740__$1;
(statearr_12813_14820[(2)] = inst_12725);

(statearr_12813_14820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (26))){
var inst_12665 = (state_12740[(27)]);
var inst_12719 = (state_12740[(2)]);
var inst_12720 = cljs.core.seq(inst_12665);
var state_12740__$1 = (function (){var statearr_12814 = state_12740;
(statearr_12814[(29)] = inst_12719);

return statearr_12814;
})();
if(inst_12720){
var statearr_12815_14821 = state_12740__$1;
(statearr_12815_14821[(1)] = (42));

} else {
var statearr_12816_14822 = state_12740__$1;
(statearr_12816_14822[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (16))){
var inst_12632 = (state_12740[(7)]);
var inst_12634 = cljs.core.chunked_seq_QMARK_(inst_12632);
var state_12740__$1 = state_12740;
if(inst_12634){
var statearr_12817_14823 = state_12740__$1;
(statearr_12817_14823[(1)] = (19));

} else {
var statearr_12818_14824 = state_12740__$1;
(statearr_12818_14824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (38))){
var inst_12712 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12819_14825 = state_12740__$1;
(statearr_12819_14825[(2)] = inst_12712);

(statearr_12819_14825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (30))){
var state_12740__$1 = state_12740;
var statearr_12820_14826 = state_12740__$1;
(statearr_12820_14826[(2)] = null);

(statearr_12820_14826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (10))){
var inst_12613 = (state_12740[(13)]);
var inst_12611 = (state_12740[(15)]);
var inst_12621 = cljs.core._nth(inst_12611,inst_12613);
var inst_12622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12621,(0),null);
var inst_12623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12621,(1),null);
var state_12740__$1 = (function (){var statearr_12821 = state_12740;
(statearr_12821[(24)] = inst_12622);

return statearr_12821;
})();
if(cljs.core.truth_(inst_12623)){
var statearr_12822_14827 = state_12740__$1;
(statearr_12822_14827[(1)] = (13));

} else {
var statearr_12823_14828 = state_12740__$1;
(statearr_12823_14828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (18))){
var inst_12658 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12824_14829 = state_12740__$1;
(statearr_12824_14829[(2)] = inst_12658);

(statearr_12824_14829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (42))){
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12740__$1,(45),dchan);
} else {
if((state_val_12741 === (37))){
var inst_12702 = (state_12740[(22)]);
var inst_12693 = (state_12740[(23)]);
var inst_12601 = (state_12740[(10)]);
var inst_12702__$1 = cljs.core.first(inst_12693);
var inst_12703 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12702__$1,inst_12601,done);
var state_12740__$1 = (function (){var statearr_12825 = state_12740;
(statearr_12825[(22)] = inst_12702__$1);

return statearr_12825;
})();
if(cljs.core.truth_(inst_12703)){
var statearr_12826_14830 = state_12740__$1;
(statearr_12826_14830[(1)] = (39));

} else {
var statearr_12827_14831 = state_12740__$1;
(statearr_12827_14831[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12741 === (8))){
var inst_12613 = (state_12740[(13)]);
var inst_12612 = (state_12740[(16)]);
var inst_12615 = (inst_12613 < inst_12612);
var inst_12616 = inst_12615;
var state_12740__$1 = state_12740;
if(cljs.core.truth_(inst_12616)){
var statearr_12828_14832 = state_12740__$1;
(statearr_12828_14832[(1)] = (10));

} else {
var statearr_12829_14833 = state_12740__$1;
(statearr_12829_14833[(1)] = (11));

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
var statearr_12830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12830[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12830[(1)] = (1));

return statearr_12830;
});
var cljs$core$async$mult_$_state_machine__12072__auto____1 = (function (state_12740){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12740);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12831){var ex__12075__auto__ = e12831;
var statearr_12832_14834 = state_12740;
(statearr_12832_14834[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12740[(4)]))){
var statearr_12833_14835 = state_12740;
(statearr_12833_14835[(1)] = cljs.core.first((state_12740[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14836 = state_12740;
state_12740 = G__14836;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12072__auto__ = function(state_12740){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12072__auto____1.call(this,state_12740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12072__auto____0;
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12072__auto____1;
return cljs$core$async$mult_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12834 = f__12108__auto__();
(statearr_12834[(6)] = c__12107__auto___14772);

return statearr_12834;
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
var G__12836 = arguments.length;
switch (G__12836) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14843 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14843(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14844 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14844(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14845 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14845(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14846 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14846(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14848 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14848(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14850 = arguments.length;
var i__4737__auto___14851 = (0);
while(true){
if((i__4737__auto___14851 < len__4736__auto___14850)){
args__4742__auto__.push((arguments[i__4737__auto___14851]));

var G__14852 = (i__4737__auto___14851 + (1));
i__4737__auto___14851 = G__14852;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12841){
var map__12842 = p__12841;
var map__12842__$1 = (((((!((map__12842 == null))))?(((((map__12842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12842):map__12842);
var opts = map__12842__$1;
var statearr_12844_14854 = state;
(statearr_12844_14854[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12845_14855 = state;
(statearr_12845_14855[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12846_14856 = state;
(statearr_12846_14856[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12837){
var G__12838 = cljs.core.first(seq12837);
var seq12837__$1 = cljs.core.next(seq12837);
var G__12839 = cljs.core.first(seq12837__$1);
var seq12837__$2 = cljs.core.next(seq12837__$1);
var G__12840 = cljs.core.first(seq12837__$2);
var seq12837__$3 = cljs.core.next(seq12837__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12838,G__12839,G__12840,seq12837__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12847 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12848){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12848 = meta12848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12849,meta12848__$1){
var self__ = this;
var _12849__$1 = this;
return (new cljs.core.async.t_cljs$core$async12847(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12848__$1));
}));

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12849){
var self__ = this;
var _12849__$1 = this;
return self__.meta12848;
}));

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12847.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12848","meta12848",346069408,null)], null);
}));

(cljs.core.async.t_cljs$core$async12847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12847");

(cljs.core.async.t_cljs$core$async12847.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12847.
 */
cljs.core.async.__GT_t_cljs$core$async12847 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12847(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12848){
return (new cljs.core.async.t_cljs$core$async12847(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12848));
});

}

return (new cljs.core.async.t_cljs$core$async12847(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12960){
var state_val_12961 = (state_12960[(1)]);
if((state_val_12961 === (7))){
var inst_12869 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12962_14859 = state_12960__$1;
(statearr_12962_14859[(2)] = inst_12869);

(statearr_12962_14859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (20))){
var inst_12881 = (state_12960[(7)]);
var state_12960__$1 = state_12960;
var statearr_12963_14860 = state_12960__$1;
(statearr_12963_14860[(2)] = inst_12881);

(statearr_12963_14860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (27))){
var state_12960__$1 = state_12960;
var statearr_12967_14861 = state_12960__$1;
(statearr_12967_14861[(2)] = null);

(statearr_12967_14861[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (1))){
var inst_12856 = (state_12960[(8)]);
var inst_12856__$1 = calc_state();
var inst_12858 = (inst_12856__$1 == null);
var inst_12859 = cljs.core.not(inst_12858);
var state_12960__$1 = (function (){var statearr_12968 = state_12960;
(statearr_12968[(8)] = inst_12856__$1);

return statearr_12968;
})();
if(inst_12859){
var statearr_12969_14862 = state_12960__$1;
(statearr_12969_14862[(1)] = (2));

} else {
var statearr_12970_14863 = state_12960__$1;
(statearr_12970_14863[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (24))){
var inst_12930 = (state_12960[(9)]);
var inst_12914 = (state_12960[(10)]);
var inst_12905 = (state_12960[(11)]);
var inst_12930__$1 = (inst_12905.cljs$core$IFn$_invoke$arity$1 ? inst_12905.cljs$core$IFn$_invoke$arity$1(inst_12914) : inst_12905.call(null,inst_12914));
var state_12960__$1 = (function (){var statearr_12971 = state_12960;
(statearr_12971[(9)] = inst_12930__$1);

return statearr_12971;
})();
if(cljs.core.truth_(inst_12930__$1)){
var statearr_12972_14864 = state_12960__$1;
(statearr_12972_14864[(1)] = (29));

} else {
var statearr_12973_14865 = state_12960__$1;
(statearr_12973_14865[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (4))){
var inst_12872 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12872)){
var statearr_12974_14866 = state_12960__$1;
(statearr_12974_14866[(1)] = (8));

} else {
var statearr_12975_14867 = state_12960__$1;
(statearr_12975_14867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (15))){
var inst_12899 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12899)){
var statearr_12976_14868 = state_12960__$1;
(statearr_12976_14868[(1)] = (19));

} else {
var statearr_12977_14869 = state_12960__$1;
(statearr_12977_14869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (21))){
var inst_12904 = (state_12960[(12)]);
var inst_12904__$1 = (state_12960[(2)]);
var inst_12905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12904__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12904__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12904__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12960__$1 = (function (){var statearr_12978 = state_12960;
(statearr_12978[(12)] = inst_12904__$1);

(statearr_12978[(13)] = inst_12906);

(statearr_12978[(11)] = inst_12905);

return statearr_12978;
})();
return cljs.core.async.ioc_alts_BANG_(state_12960__$1,(22),inst_12907);
} else {
if((state_val_12961 === (31))){
var inst_12938 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12938)){
var statearr_12979_14870 = state_12960__$1;
(statearr_12979_14870[(1)] = (32));

} else {
var statearr_12980_14871 = state_12960__$1;
(statearr_12980_14871[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (32))){
var inst_12913 = (state_12960[(14)]);
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12960__$1,(35),out,inst_12913);
} else {
if((state_val_12961 === (33))){
var inst_12904 = (state_12960[(12)]);
var inst_12881 = inst_12904;
var state_12960__$1 = (function (){var statearr_12981 = state_12960;
(statearr_12981[(7)] = inst_12881);

return statearr_12981;
})();
var statearr_12982_14872 = state_12960__$1;
(statearr_12982_14872[(2)] = null);

(statearr_12982_14872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (13))){
var inst_12881 = (state_12960[(7)]);
var inst_12888 = inst_12881.cljs$lang$protocol_mask$partition0$;
var inst_12889 = (inst_12888 & (64));
var inst_12890 = inst_12881.cljs$core$ISeq$;
var inst_12891 = (cljs.core.PROTOCOL_SENTINEL === inst_12890);
var inst_12892 = ((inst_12889) || (inst_12891));
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12892)){
var statearr_12983_14873 = state_12960__$1;
(statearr_12983_14873[(1)] = (16));

} else {
var statearr_12984_14874 = state_12960__$1;
(statearr_12984_14874[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (22))){
var inst_12913 = (state_12960[(14)]);
var inst_12914 = (state_12960[(10)]);
var inst_12912 = (state_12960[(2)]);
var inst_12913__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12912,(0),null);
var inst_12914__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12912,(1),null);
var inst_12915 = (inst_12913__$1 == null);
var inst_12916 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12914__$1,change);
var inst_12917 = ((inst_12915) || (inst_12916));
var state_12960__$1 = (function (){var statearr_12985 = state_12960;
(statearr_12985[(14)] = inst_12913__$1);

(statearr_12985[(10)] = inst_12914__$1);

return statearr_12985;
})();
if(cljs.core.truth_(inst_12917)){
var statearr_12986_14875 = state_12960__$1;
(statearr_12986_14875[(1)] = (23));

} else {
var statearr_12987_14877 = state_12960__$1;
(statearr_12987_14877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (36))){
var inst_12904 = (state_12960[(12)]);
var inst_12881 = inst_12904;
var state_12960__$1 = (function (){var statearr_12988 = state_12960;
(statearr_12988[(7)] = inst_12881);

return statearr_12988;
})();
var statearr_12989_14878 = state_12960__$1;
(statearr_12989_14878[(2)] = null);

(statearr_12989_14878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (29))){
var inst_12930 = (state_12960[(9)]);
var state_12960__$1 = state_12960;
var statearr_12990_14879 = state_12960__$1;
(statearr_12990_14879[(2)] = inst_12930);

(statearr_12990_14879[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (6))){
var state_12960__$1 = state_12960;
var statearr_12991_14880 = state_12960__$1;
(statearr_12991_14880[(2)] = false);

(statearr_12991_14880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (28))){
var inst_12924 = (state_12960[(2)]);
var inst_12925 = calc_state();
var inst_12881 = inst_12925;
var state_12960__$1 = (function (){var statearr_12992 = state_12960;
(statearr_12992[(15)] = inst_12924);

(statearr_12992[(7)] = inst_12881);

return statearr_12992;
})();
var statearr_12993_14882 = state_12960__$1;
(statearr_12993_14882[(2)] = null);

(statearr_12993_14882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (25))){
var inst_12955 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12994_14883 = state_12960__$1;
(statearr_12994_14883[(2)] = inst_12955);

(statearr_12994_14883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (34))){
var inst_12953 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12995_14884 = state_12960__$1;
(statearr_12995_14884[(2)] = inst_12953);

(statearr_12995_14884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (17))){
var state_12960__$1 = state_12960;
var statearr_12996_14885 = state_12960__$1;
(statearr_12996_14885[(2)] = false);

(statearr_12996_14885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (3))){
var state_12960__$1 = state_12960;
var statearr_12997_14887 = state_12960__$1;
(statearr_12997_14887[(2)] = false);

(statearr_12997_14887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (12))){
var inst_12957 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12960__$1,inst_12957);
} else {
if((state_val_12961 === (2))){
var inst_12856 = (state_12960[(8)]);
var inst_12861 = inst_12856.cljs$lang$protocol_mask$partition0$;
var inst_12862 = (inst_12861 & (64));
var inst_12863 = inst_12856.cljs$core$ISeq$;
var inst_12864 = (cljs.core.PROTOCOL_SENTINEL === inst_12863);
var inst_12865 = ((inst_12862) || (inst_12864));
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12865)){
var statearr_12998_14888 = state_12960__$1;
(statearr_12998_14888[(1)] = (5));

} else {
var statearr_12999_14889 = state_12960__$1;
(statearr_12999_14889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (23))){
var inst_12913 = (state_12960[(14)]);
var inst_12919 = (inst_12913 == null);
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12919)){
var statearr_13000_14891 = state_12960__$1;
(statearr_13000_14891[(1)] = (26));

} else {
var statearr_13001_14892 = state_12960__$1;
(statearr_13001_14892[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (35))){
var inst_12941 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12941)){
var statearr_13002_14893 = state_12960__$1;
(statearr_13002_14893[(1)] = (36));

} else {
var statearr_13003_14894 = state_12960__$1;
(statearr_13003_14894[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (19))){
var inst_12881 = (state_12960[(7)]);
var inst_12901 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12881);
var state_12960__$1 = state_12960;
var statearr_13004_14896 = state_12960__$1;
(statearr_13004_14896[(2)] = inst_12901);

(statearr_13004_14896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (11))){
var inst_12881 = (state_12960[(7)]);
var inst_12885 = (inst_12881 == null);
var inst_12886 = cljs.core.not(inst_12885);
var state_12960__$1 = state_12960;
if(inst_12886){
var statearr_13005_14897 = state_12960__$1;
(statearr_13005_14897[(1)] = (13));

} else {
var statearr_13006_14898 = state_12960__$1;
(statearr_13006_14898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (9))){
var inst_12856 = (state_12960[(8)]);
var state_12960__$1 = state_12960;
var statearr_13007_14899 = state_12960__$1;
(statearr_13007_14899[(2)] = inst_12856);

(statearr_13007_14899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (5))){
var state_12960__$1 = state_12960;
var statearr_13008_14901 = state_12960__$1;
(statearr_13008_14901[(2)] = true);

(statearr_13008_14901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (14))){
var state_12960__$1 = state_12960;
var statearr_13009_14902 = state_12960__$1;
(statearr_13009_14902[(2)] = false);

(statearr_13009_14902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (26))){
var inst_12914 = (state_12960[(10)]);
var inst_12921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12914);
var state_12960__$1 = state_12960;
var statearr_13010_14903 = state_12960__$1;
(statearr_13010_14903[(2)] = inst_12921);

(statearr_13010_14903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (16))){
var state_12960__$1 = state_12960;
var statearr_13011_14904 = state_12960__$1;
(statearr_13011_14904[(2)] = true);

(statearr_13011_14904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (38))){
var inst_12949 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13012_14906 = state_12960__$1;
(statearr_13012_14906[(2)] = inst_12949);

(statearr_13012_14906[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (30))){
var inst_12906 = (state_12960[(13)]);
var inst_12914 = (state_12960[(10)]);
var inst_12905 = (state_12960[(11)]);
var inst_12933 = cljs.core.empty_QMARK_(inst_12905);
var inst_12934 = (inst_12906.cljs$core$IFn$_invoke$arity$1 ? inst_12906.cljs$core$IFn$_invoke$arity$1(inst_12914) : inst_12906.call(null,inst_12914));
var inst_12935 = cljs.core.not(inst_12934);
var inst_12936 = ((inst_12933) && (inst_12935));
var state_12960__$1 = state_12960;
var statearr_13013_14907 = state_12960__$1;
(statearr_13013_14907[(2)] = inst_12936);

(statearr_13013_14907[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (10))){
var inst_12856 = (state_12960[(8)]);
var inst_12877 = (state_12960[(2)]);
var inst_12878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12877,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12877,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12877,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12881 = inst_12856;
var state_12960__$1 = (function (){var statearr_13014 = state_12960;
(statearr_13014[(16)] = inst_12879);

(statearr_13014[(17)] = inst_12880);

(statearr_13014[(18)] = inst_12878);

(statearr_13014[(7)] = inst_12881);

return statearr_13014;
})();
var statearr_13015_14908 = state_12960__$1;
(statearr_13015_14908[(2)] = null);

(statearr_13015_14908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (18))){
var inst_12896 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13017_14909 = state_12960__$1;
(statearr_13017_14909[(2)] = inst_12896);

(statearr_13017_14909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (37))){
var state_12960__$1 = state_12960;
var statearr_13018_14910 = state_12960__$1;
(statearr_13018_14910[(2)] = null);

(statearr_13018_14910[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (8))){
var inst_12856 = (state_12960[(8)]);
var inst_12874 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12856);
var state_12960__$1 = state_12960;
var statearr_13019_14911 = state_12960__$1;
(statearr_13019_14911[(2)] = inst_12874);

(statearr_13019_14911[(1)] = (10));


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
var statearr_13020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13020[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_13020[(1)] = (1));

return statearr_13020;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_12960){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12960);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13022){var ex__12075__auto__ = e13022;
var statearr_13023_14912 = state_12960;
(statearr_13023_14912[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12960[(4)]))){
var statearr_13024_14913 = state_12960;
(statearr_13024_14913[(1)] = cljs.core.first((state_12960[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14914 = state_12960;
state_12960 = G__14914;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_12960){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_12960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13025 = f__12108__auto__();
(statearr_13025[(6)] = c__12107__auto___14858);

return statearr_13025;
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

var cljs$core$async$Pub$sub_STAR_$dyn_14915 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14915(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14916 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14916(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14917 = (function() {
var G__14918 = null;
var G__14918__1 = (function (p){
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
var G__14918__2 = (function (p,v){
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
G__14918 = function(p,v){
switch(arguments.length){
case 1:
return G__14918__1.call(this,p);
case 2:
return G__14918__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14918.cljs$core$IFn$_invoke$arity$1 = G__14918__1;
G__14918.cljs$core$IFn$_invoke$arity$2 = G__14918__2;
return G__14918;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13033 = arguments.length;
switch (G__13033) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14917(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14917(p,v);
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
var G__13036 = arguments.length;
switch (G__13036) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13034_SHARP_){
if(cljs.core.truth_((p1__13034_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13034_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13034_SHARP_.call(null,topic)))){
return p1__13034_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13034_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13037 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13038){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13038 = meta13038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13039,meta13038__$1){
var self__ = this;
var _13039__$1 = this;
return (new cljs.core.async.t_cljs$core$async13037(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13038__$1));
}));

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13039){
var self__ = this;
var _13039__$1 = this;
return self__.meta13038;
}));

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13037.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13038","meta13038",25497699,null)], null);
}));

(cljs.core.async.t_cljs$core$async13037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13037");

(cljs.core.async.t_cljs$core$async13037.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13037.
 */
cljs.core.async.__GT_t_cljs$core$async13037 = (function cljs$core$async$__GT_t_cljs$core$async13037(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13038){
return (new cljs.core.async.t_cljs$core$async13037(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13038));
});

}

return (new cljs.core.async.t_cljs$core$async13037(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13111){
var state_val_13112 = (state_13111[(1)]);
if((state_val_13112 === (7))){
var inst_13107 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13113_14923 = state_13111__$1;
(statearr_13113_14923[(2)] = inst_13107);

(statearr_13113_14923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (20))){
var state_13111__$1 = state_13111;
var statearr_13114_14924 = state_13111__$1;
(statearr_13114_14924[(2)] = null);

(statearr_13114_14924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (1))){
var state_13111__$1 = state_13111;
var statearr_13115_14925 = state_13111__$1;
(statearr_13115_14925[(2)] = null);

(statearr_13115_14925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (24))){
var inst_13090 = (state_13111[(7)]);
var inst_13099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13090);
var state_13111__$1 = state_13111;
var statearr_13116_14926 = state_13111__$1;
(statearr_13116_14926[(2)] = inst_13099);

(statearr_13116_14926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (4))){
var inst_13042 = (state_13111[(8)]);
var inst_13042__$1 = (state_13111[(2)]);
var inst_13043 = (inst_13042__$1 == null);
var state_13111__$1 = (function (){var statearr_13117 = state_13111;
(statearr_13117[(8)] = inst_13042__$1);

return statearr_13117;
})();
if(cljs.core.truth_(inst_13043)){
var statearr_13118_14928 = state_13111__$1;
(statearr_13118_14928[(1)] = (5));

} else {
var statearr_13119_14929 = state_13111__$1;
(statearr_13119_14929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (15))){
var inst_13084 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13120_14930 = state_13111__$1;
(statearr_13120_14930[(2)] = inst_13084);

(statearr_13120_14930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (21))){
var inst_13104 = (state_13111[(2)]);
var state_13111__$1 = (function (){var statearr_13121 = state_13111;
(statearr_13121[(9)] = inst_13104);

return statearr_13121;
})();
var statearr_13122_14931 = state_13111__$1;
(statearr_13122_14931[(2)] = null);

(statearr_13122_14931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (13))){
var inst_13066 = (state_13111[(10)]);
var inst_13068 = cljs.core.chunked_seq_QMARK_(inst_13066);
var state_13111__$1 = state_13111;
if(inst_13068){
var statearr_13123_14932 = state_13111__$1;
(statearr_13123_14932[(1)] = (16));

} else {
var statearr_13124_14933 = state_13111__$1;
(statearr_13124_14933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (22))){
var inst_13096 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
if(cljs.core.truth_(inst_13096)){
var statearr_13125_14934 = state_13111__$1;
(statearr_13125_14934[(1)] = (23));

} else {
var statearr_13126_14935 = state_13111__$1;
(statearr_13126_14935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (6))){
var inst_13042 = (state_13111[(8)]);
var inst_13092 = (state_13111[(11)]);
var inst_13090 = (state_13111[(7)]);
var inst_13090__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13042) : topic_fn.call(null,inst_13042));
var inst_13091 = cljs.core.deref(mults);
var inst_13092__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13091,inst_13090__$1);
var state_13111__$1 = (function (){var statearr_13127 = state_13111;
(statearr_13127[(11)] = inst_13092__$1);

(statearr_13127[(7)] = inst_13090__$1);

return statearr_13127;
})();
if(cljs.core.truth_(inst_13092__$1)){
var statearr_13128_14937 = state_13111__$1;
(statearr_13128_14937[(1)] = (19));

} else {
var statearr_13129_14938 = state_13111__$1;
(statearr_13129_14938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (25))){
var inst_13101 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13130_14939 = state_13111__$1;
(statearr_13130_14939[(2)] = inst_13101);

(statearr_13130_14939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (17))){
var inst_13066 = (state_13111[(10)]);
var inst_13075 = cljs.core.first(inst_13066);
var inst_13076 = cljs.core.async.muxch_STAR_(inst_13075);
var inst_13077 = cljs.core.async.close_BANG_(inst_13076);
var inst_13078 = cljs.core.next(inst_13066);
var inst_13052 = inst_13078;
var inst_13053 = null;
var inst_13054 = (0);
var inst_13055 = (0);
var state_13111__$1 = (function (){var statearr_13131 = state_13111;
(statearr_13131[(12)] = inst_13053);

(statearr_13131[(13)] = inst_13052);

(statearr_13131[(14)] = inst_13077);

(statearr_13131[(15)] = inst_13054);

(statearr_13131[(16)] = inst_13055);

return statearr_13131;
})();
var statearr_13132_14941 = state_13111__$1;
(statearr_13132_14941[(2)] = null);

(statearr_13132_14941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (3))){
var inst_13109 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13111__$1,inst_13109);
} else {
if((state_val_13112 === (12))){
var inst_13086 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13133_14942 = state_13111__$1;
(statearr_13133_14942[(2)] = inst_13086);

(statearr_13133_14942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (2))){
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13111__$1,(4),ch);
} else {
if((state_val_13112 === (23))){
var state_13111__$1 = state_13111;
var statearr_13134_14944 = state_13111__$1;
(statearr_13134_14944[(2)] = null);

(statearr_13134_14944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (19))){
var inst_13042 = (state_13111[(8)]);
var inst_13092 = (state_13111[(11)]);
var inst_13094 = cljs.core.async.muxch_STAR_(inst_13092);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13111__$1,(22),inst_13094,inst_13042);
} else {
if((state_val_13112 === (11))){
var inst_13052 = (state_13111[(13)]);
var inst_13066 = (state_13111[(10)]);
var inst_13066__$1 = cljs.core.seq(inst_13052);
var state_13111__$1 = (function (){var statearr_13135 = state_13111;
(statearr_13135[(10)] = inst_13066__$1);

return statearr_13135;
})();
if(inst_13066__$1){
var statearr_13136_14946 = state_13111__$1;
(statearr_13136_14946[(1)] = (13));

} else {
var statearr_13137_14947 = state_13111__$1;
(statearr_13137_14947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (9))){
var inst_13088 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13138_14948 = state_13111__$1;
(statearr_13138_14948[(2)] = inst_13088);

(statearr_13138_14948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (5))){
var inst_13049 = cljs.core.deref(mults);
var inst_13050 = cljs.core.vals(inst_13049);
var inst_13051 = cljs.core.seq(inst_13050);
var inst_13052 = inst_13051;
var inst_13053 = null;
var inst_13054 = (0);
var inst_13055 = (0);
var state_13111__$1 = (function (){var statearr_13139 = state_13111;
(statearr_13139[(12)] = inst_13053);

(statearr_13139[(13)] = inst_13052);

(statearr_13139[(15)] = inst_13054);

(statearr_13139[(16)] = inst_13055);

return statearr_13139;
})();
var statearr_13140_14950 = state_13111__$1;
(statearr_13140_14950[(2)] = null);

(statearr_13140_14950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (14))){
var state_13111__$1 = state_13111;
var statearr_13144_14951 = state_13111__$1;
(statearr_13144_14951[(2)] = null);

(statearr_13144_14951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (16))){
var inst_13066 = (state_13111[(10)]);
var inst_13070 = cljs.core.chunk_first(inst_13066);
var inst_13071 = cljs.core.chunk_rest(inst_13066);
var inst_13072 = cljs.core.count(inst_13070);
var inst_13052 = inst_13071;
var inst_13053 = inst_13070;
var inst_13054 = inst_13072;
var inst_13055 = (0);
var state_13111__$1 = (function (){var statearr_13145 = state_13111;
(statearr_13145[(12)] = inst_13053);

(statearr_13145[(13)] = inst_13052);

(statearr_13145[(15)] = inst_13054);

(statearr_13145[(16)] = inst_13055);

return statearr_13145;
})();
var statearr_13146_14953 = state_13111__$1;
(statearr_13146_14953[(2)] = null);

(statearr_13146_14953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (10))){
var inst_13053 = (state_13111[(12)]);
var inst_13052 = (state_13111[(13)]);
var inst_13054 = (state_13111[(15)]);
var inst_13055 = (state_13111[(16)]);
var inst_13060 = cljs.core._nth(inst_13053,inst_13055);
var inst_13061 = cljs.core.async.muxch_STAR_(inst_13060);
var inst_13062 = cljs.core.async.close_BANG_(inst_13061);
var inst_13063 = (inst_13055 + (1));
var tmp13141 = inst_13053;
var tmp13142 = inst_13052;
var tmp13143 = inst_13054;
var inst_13052__$1 = tmp13142;
var inst_13053__$1 = tmp13141;
var inst_13054__$1 = tmp13143;
var inst_13055__$1 = inst_13063;
var state_13111__$1 = (function (){var statearr_13147 = state_13111;
(statearr_13147[(12)] = inst_13053__$1);

(statearr_13147[(13)] = inst_13052__$1);

(statearr_13147[(15)] = inst_13054__$1);

(statearr_13147[(16)] = inst_13055__$1);

(statearr_13147[(17)] = inst_13062);

return statearr_13147;
})();
var statearr_13148_14955 = state_13111__$1;
(statearr_13148_14955[(2)] = null);

(statearr_13148_14955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (18))){
var inst_13081 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13149_14956 = state_13111__$1;
(statearr_13149_14956[(2)] = inst_13081);

(statearr_13149_14956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (8))){
var inst_13054 = (state_13111[(15)]);
var inst_13055 = (state_13111[(16)]);
var inst_13057 = (inst_13055 < inst_13054);
var inst_13058 = inst_13057;
var state_13111__$1 = state_13111;
if(cljs.core.truth_(inst_13058)){
var statearr_13150_14958 = state_13111__$1;
(statearr_13150_14958[(1)] = (10));

} else {
var statearr_13151_14959 = state_13111__$1;
(statearr_13151_14959[(1)] = (11));

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
var statearr_13152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13152[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13152[(1)] = (1));

return statearr_13152;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13111){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13111);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13153){var ex__12075__auto__ = e13153;
var statearr_13154_14961 = state_13111;
(statearr_13154_14961[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13111[(4)]))){
var statearr_13155_14962 = state_13111;
(statearr_13155_14962[(1)] = cljs.core.first((state_13111[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14963 = state_13111;
state_13111 = G__14963;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13156 = f__12108__auto__();
(statearr_13156[(6)] = c__12107__auto___14921);

return statearr_13156;
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
var G__13158 = arguments.length;
switch (G__13158) {
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
var G__13160 = arguments.length;
switch (G__13160) {
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
var G__13162 = arguments.length;
switch (G__13162) {
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
var c__12107__auto___14967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13211){
var state_val_13213 = (state_13211[(1)]);
if((state_val_13213 === (7))){
var state_13211__$1 = state_13211;
var statearr_13218_14968 = state_13211__$1;
(statearr_13218_14968[(2)] = null);

(statearr_13218_14968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (1))){
var state_13211__$1 = state_13211;
var statearr_13220_14969 = state_13211__$1;
(statearr_13220_14969[(2)] = null);

(statearr_13220_14969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (4))){
var inst_13166 = (state_13211[(7)]);
var inst_13165 = (state_13211[(8)]);
var inst_13168 = (inst_13166 < inst_13165);
var state_13211__$1 = state_13211;
if(cljs.core.truth_(inst_13168)){
var statearr_13221_14970 = state_13211__$1;
(statearr_13221_14970[(1)] = (6));

} else {
var statearr_13222_14971 = state_13211__$1;
(statearr_13222_14971[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (15))){
var inst_13193 = (state_13211[(9)]);
var inst_13198 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13193);
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13211__$1,(17),out,inst_13198);
} else {
if((state_val_13213 === (13))){
var inst_13193 = (state_13211[(9)]);
var inst_13193__$1 = (state_13211[(2)]);
var inst_13194 = cljs.core.some(cljs.core.nil_QMARK_,inst_13193__$1);
var state_13211__$1 = (function (){var statearr_13223 = state_13211;
(statearr_13223[(9)] = inst_13193__$1);

return statearr_13223;
})();
if(cljs.core.truth_(inst_13194)){
var statearr_13224_14972 = state_13211__$1;
(statearr_13224_14972[(1)] = (14));

} else {
var statearr_13225_14973 = state_13211__$1;
(statearr_13225_14973[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (6))){
var state_13211__$1 = state_13211;
var statearr_13226_14974 = state_13211__$1;
(statearr_13226_14974[(2)] = null);

(statearr_13226_14974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (17))){
var inst_13200 = (state_13211[(2)]);
var state_13211__$1 = (function (){var statearr_13232 = state_13211;
(statearr_13232[(10)] = inst_13200);

return statearr_13232;
})();
var statearr_13233_14975 = state_13211__$1;
(statearr_13233_14975[(2)] = null);

(statearr_13233_14975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (3))){
var inst_13205 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13211__$1,inst_13205);
} else {
if((state_val_13213 === (12))){
var _ = (function (){var statearr_13234 = state_13211;
(statearr_13234[(4)] = cljs.core.rest((state_13211[(4)])));

return statearr_13234;
})();
var state_13211__$1 = state_13211;
var ex13231 = (state_13211__$1[(2)]);
var statearr_13235_14976 = state_13211__$1;
(statearr_13235_14976[(5)] = ex13231);


if((ex13231 instanceof Object)){
var statearr_13236_14977 = state_13211__$1;
(statearr_13236_14977[(1)] = (11));

(statearr_13236_14977[(5)] = null);

} else {
throw ex13231;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (2))){
var inst_13164 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13165 = cnt;
var inst_13166 = (0);
var state_13211__$1 = (function (){var statearr_13237 = state_13211;
(statearr_13237[(7)] = inst_13166);

(statearr_13237[(8)] = inst_13165);

(statearr_13237[(11)] = inst_13164);

return statearr_13237;
})();
var statearr_13238_14978 = state_13211__$1;
(statearr_13238_14978[(2)] = null);

(statearr_13238_14978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (11))){
var inst_13172 = (state_13211[(2)]);
var inst_13173 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13211__$1 = (function (){var statearr_13239 = state_13211;
(statearr_13239[(12)] = inst_13172);

return statearr_13239;
})();
var statearr_13240_14979 = state_13211__$1;
(statearr_13240_14979[(2)] = inst_13173);

(statearr_13240_14979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (9))){
var inst_13166 = (state_13211[(7)]);
var _ = (function (){var statearr_13241 = state_13211;
(statearr_13241[(4)] = cljs.core.cons((12),(state_13211[(4)])));

return statearr_13241;
})();
var inst_13179 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13166) : chs__$1.call(null,inst_13166));
var inst_13180 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13166) : done.call(null,inst_13166));
var inst_13181 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13179,inst_13180);
var ___$1 = (function (){var statearr_13242 = state_13211;
(statearr_13242[(4)] = cljs.core.rest((state_13211[(4)])));

return statearr_13242;
})();
var state_13211__$1 = state_13211;
var statearr_13243_14980 = state_13211__$1;
(statearr_13243_14980[(2)] = inst_13181);

(statearr_13243_14980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (5))){
var inst_13191 = (state_13211[(2)]);
var state_13211__$1 = (function (){var statearr_13244 = state_13211;
(statearr_13244[(13)] = inst_13191);

return statearr_13244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13211__$1,(13),dchan);
} else {
if((state_val_13213 === (14))){
var inst_13196 = cljs.core.async.close_BANG_(out);
var state_13211__$1 = state_13211;
var statearr_13245_14981 = state_13211__$1;
(statearr_13245_14981[(2)] = inst_13196);

(statearr_13245_14981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (16))){
var inst_13203 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13247_14982 = state_13211__$1;
(statearr_13247_14982[(2)] = inst_13203);

(statearr_13247_14982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (10))){
var inst_13166 = (state_13211[(7)]);
var inst_13184 = (state_13211[(2)]);
var inst_13185 = (inst_13166 + (1));
var inst_13166__$1 = inst_13185;
var state_13211__$1 = (function (){var statearr_13249 = state_13211;
(statearr_13249[(7)] = inst_13166__$1);

(statearr_13249[(14)] = inst_13184);

return statearr_13249;
})();
var statearr_13250_14983 = state_13211__$1;
(statearr_13250_14983[(2)] = null);

(statearr_13250_14983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13213 === (8))){
var inst_13189 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13251_14984 = state_13211__$1;
(statearr_13251_14984[(2)] = inst_13189);

(statearr_13251_14984[(1)] = (5));


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
var statearr_13252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13252[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13252[(1)] = (1));

return statearr_13252;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13211){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13211);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13254){var ex__12075__auto__ = e13254;
var statearr_13256_14985 = state_13211;
(statearr_13256_14985[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13211[(4)]))){
var statearr_13257_14986 = state_13211;
(statearr_13257_14986[(1)] = cljs.core.first((state_13211[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14987 = state_13211;
state_13211 = G__14987;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13262 = f__12108__auto__();
(statearr_13262[(6)] = c__12107__auto___14967);

return statearr_13262;
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
var G__13268 = arguments.length;
switch (G__13268) {
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
var c__12107__auto___14989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13400){
var state_val_13401 = (state_13400[(1)]);
if((state_val_13401 === (7))){
var inst_13296 = (state_13400[(7)]);
var inst_13295 = (state_13400[(8)]);
var inst_13295__$1 = (state_13400[(2)]);
var inst_13296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13295__$1,(0),null);
var inst_13297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13295__$1,(1),null);
var inst_13298 = (inst_13296__$1 == null);
var state_13400__$1 = (function (){var statearr_13424 = state_13400;
(statearr_13424[(7)] = inst_13296__$1);

(statearr_13424[(9)] = inst_13297);

(statearr_13424[(8)] = inst_13295__$1);

return statearr_13424;
})();
if(cljs.core.truth_(inst_13298)){
var statearr_13428_14990 = state_13400__$1;
(statearr_13428_14990[(1)] = (8));

} else {
var statearr_13429_14991 = state_13400__$1;
(statearr_13429_14991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (1))){
var inst_13285 = cljs.core.vec(chs);
var inst_13286 = inst_13285;
var state_13400__$1 = (function (){var statearr_13430 = state_13400;
(statearr_13430[(10)] = inst_13286);

return statearr_13430;
})();
var statearr_13431_14992 = state_13400__$1;
(statearr_13431_14992[(2)] = null);

(statearr_13431_14992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (4))){
var inst_13286 = (state_13400[(10)]);
var state_13400__$1 = state_13400;
return cljs.core.async.ioc_alts_BANG_(state_13400__$1,(7),inst_13286);
} else {
if((state_val_13401 === (6))){
var inst_13316 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13436_14993 = state_13400__$1;
(statearr_13436_14993[(2)] = inst_13316);

(statearr_13436_14993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (3))){
var inst_13318 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13400__$1,inst_13318);
} else {
if((state_val_13401 === (2))){
var inst_13286 = (state_13400[(10)]);
var inst_13288 = cljs.core.count(inst_13286);
var inst_13289 = (inst_13288 > (0));
var state_13400__$1 = state_13400;
if(cljs.core.truth_(inst_13289)){
var statearr_13439_14994 = state_13400__$1;
(statearr_13439_14994[(1)] = (4));

} else {
var statearr_13440_14995 = state_13400__$1;
(statearr_13440_14995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (11))){
var inst_13286 = (state_13400[(10)]);
var inst_13309 = (state_13400[(2)]);
var tmp13437 = inst_13286;
var inst_13286__$1 = tmp13437;
var state_13400__$1 = (function (){var statearr_13446 = state_13400;
(statearr_13446[(10)] = inst_13286__$1);

(statearr_13446[(11)] = inst_13309);

return statearr_13446;
})();
var statearr_13450_14996 = state_13400__$1;
(statearr_13450_14996[(2)] = null);

(statearr_13450_14996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (9))){
var inst_13296 = (state_13400[(7)]);
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13400__$1,(11),out,inst_13296);
} else {
if((state_val_13401 === (5))){
var inst_13314 = cljs.core.async.close_BANG_(out);
var state_13400__$1 = state_13400;
var statearr_13470_14997 = state_13400__$1;
(statearr_13470_14997[(2)] = inst_13314);

(statearr_13470_14997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (10))){
var inst_13312 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13472_14998 = state_13400__$1;
(statearr_13472_14998[(2)] = inst_13312);

(statearr_13472_14998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13401 === (8))){
var inst_13286 = (state_13400[(10)]);
var inst_13296 = (state_13400[(7)]);
var inst_13297 = (state_13400[(9)]);
var inst_13295 = (state_13400[(8)]);
var inst_13302 = (function (){var cs = inst_13286;
var vec__13291 = inst_13295;
var v = inst_13296;
var c = inst_13297;
return (function (p1__13263_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13263_SHARP_);
});
})();
var inst_13305 = cljs.core.filterv(inst_13302,inst_13286);
var inst_13286__$1 = inst_13305;
var state_13400__$1 = (function (){var statearr_13483 = state_13400;
(statearr_13483[(10)] = inst_13286__$1);

return statearr_13483;
})();
var statearr_13485_14999 = state_13400__$1;
(statearr_13485_14999[(2)] = null);

(statearr_13485_14999[(1)] = (2));


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
var statearr_13492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13492[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13492[(1)] = (1));

return statearr_13492;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13400){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13400);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13539){var ex__12075__auto__ = e13539;
var statearr_13541_15017 = state_13400;
(statearr_13541_15017[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13400[(4)]))){
var statearr_13545_15018 = state_13400;
(statearr_13545_15018[(1)] = cljs.core.first((state_13400[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15019 = state_13400;
state_13400 = G__15019;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13595 = f__12108__auto__();
(statearr_13595[(6)] = c__12107__auto___14989);

return statearr_13595;
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
var G__13604 = arguments.length;
switch (G__13604) {
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
var c__12107__auto___15021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13644){
var state_val_13645 = (state_13644[(1)]);
if((state_val_13645 === (7))){
var inst_13626 = (state_13644[(7)]);
var inst_13626__$1 = (state_13644[(2)]);
var inst_13627 = (inst_13626__$1 == null);
var inst_13628 = cljs.core.not(inst_13627);
var state_13644__$1 = (function (){var statearr_13655 = state_13644;
(statearr_13655[(7)] = inst_13626__$1);

return statearr_13655;
})();
if(inst_13628){
var statearr_13656_15022 = state_13644__$1;
(statearr_13656_15022[(1)] = (8));

} else {
var statearr_13657_15023 = state_13644__$1;
(statearr_13657_15023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (1))){
var inst_13621 = (0);
var state_13644__$1 = (function (){var statearr_13660 = state_13644;
(statearr_13660[(8)] = inst_13621);

return statearr_13660;
})();
var statearr_13661_15024 = state_13644__$1;
(statearr_13661_15024[(2)] = null);

(statearr_13661_15024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (4))){
var state_13644__$1 = state_13644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13644__$1,(7),ch);
} else {
if((state_val_13645 === (6))){
var inst_13639 = (state_13644[(2)]);
var state_13644__$1 = state_13644;
var statearr_13664_15025 = state_13644__$1;
(statearr_13664_15025[(2)] = inst_13639);

(statearr_13664_15025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (3))){
var inst_13641 = (state_13644[(2)]);
var inst_13642 = cljs.core.async.close_BANG_(out);
var state_13644__$1 = (function (){var statearr_13670 = state_13644;
(statearr_13670[(9)] = inst_13641);

return statearr_13670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13644__$1,inst_13642);
} else {
if((state_val_13645 === (2))){
var inst_13621 = (state_13644[(8)]);
var inst_13623 = (inst_13621 < n);
var state_13644__$1 = state_13644;
if(cljs.core.truth_(inst_13623)){
var statearr_13678_15026 = state_13644__$1;
(statearr_13678_15026[(1)] = (4));

} else {
var statearr_13679_15027 = state_13644__$1;
(statearr_13679_15027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (11))){
var inst_13621 = (state_13644[(8)]);
var inst_13631 = (state_13644[(2)]);
var inst_13632 = (inst_13621 + (1));
var inst_13621__$1 = inst_13632;
var state_13644__$1 = (function (){var statearr_13680 = state_13644;
(statearr_13680[(8)] = inst_13621__$1);

(statearr_13680[(10)] = inst_13631);

return statearr_13680;
})();
var statearr_13681_15028 = state_13644__$1;
(statearr_13681_15028[(2)] = null);

(statearr_13681_15028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (9))){
var state_13644__$1 = state_13644;
var statearr_13682_15029 = state_13644__$1;
(statearr_13682_15029[(2)] = null);

(statearr_13682_15029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (5))){
var state_13644__$1 = state_13644;
var statearr_13683_15030 = state_13644__$1;
(statearr_13683_15030[(2)] = null);

(statearr_13683_15030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (10))){
var inst_13636 = (state_13644[(2)]);
var state_13644__$1 = state_13644;
var statearr_13684_15031 = state_13644__$1;
(statearr_13684_15031[(2)] = inst_13636);

(statearr_13684_15031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (8))){
var inst_13626 = (state_13644[(7)]);
var state_13644__$1 = state_13644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13644__$1,(11),out,inst_13626);
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
var statearr_13685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13685[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13685[(1)] = (1));

return statearr_13685;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13644){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13644);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13686){var ex__12075__auto__ = e13686;
var statearr_13687_15032 = state_13644;
(statearr_13687_15032[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13644[(4)]))){
var statearr_13688_15033 = state_13644;
(statearr_13688_15033[(1)] = cljs.core.first((state_13644[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15034 = state_13644;
state_13644 = G__15034;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13689 = f__12108__auto__();
(statearr_13689[(6)] = c__12107__auto___15021);

return statearr_13689;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13757 = (function (f,ch,meta13758){
this.f = f;
this.ch = ch;
this.meta13758 = meta13758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13759,meta13758__$1){
var self__ = this;
var _13759__$1 = this;
return (new cljs.core.async.t_cljs$core$async13757(self__.f,self__.ch,meta13758__$1));
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13759){
var self__ = this;
var _13759__$1 = this;
return self__.meta13758;
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13760 = (function (f,ch,meta13758,_,fn1,meta13761){
this.f = f;
this.ch = ch;
this.meta13758 = meta13758;
this._ = _;
this.fn1 = fn1;
this.meta13761 = meta13761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13762,meta13761__$1){
var self__ = this;
var _13762__$1 = this;
return (new cljs.core.async.t_cljs$core$async13760(self__.f,self__.ch,self__.meta13758,self__._,self__.fn1,meta13761__$1));
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13762){
var self__ = this;
var _13762__$1 = this;
return self__.meta13761;
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13756_SHARP_){
var G__13763 = (((p1__13756_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13756_SHARP_) : self__.f.call(null,p1__13756_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13763) : f1.call(null,G__13763));
});
}));

(cljs.core.async.t_cljs$core$async13760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13758","meta13758",221309241,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13757","cljs.core.async/t_cljs$core$async13757",-1091661227,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13761","meta13761",-2063052564,null)], null);
}));

(cljs.core.async.t_cljs$core$async13760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13760");

(cljs.core.async.t_cljs$core$async13760.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13760.
 */
cljs.core.async.__GT_t_cljs$core$async13760 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13760(f__$1,ch__$1,meta13758__$1,___$2,fn1__$1,meta13761){
return (new cljs.core.async.t_cljs$core$async13760(f__$1,ch__$1,meta13758__$1,___$2,fn1__$1,meta13761));
});

}

return (new cljs.core.async.t_cljs$core$async13760(self__.f,self__.ch,self__.meta13758,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13764 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13764) : self__.f.call(null,G__13764));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13758","meta13758",221309241,null)], null);
}));

(cljs.core.async.t_cljs$core$async13757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13757");

(cljs.core.async.t_cljs$core$async13757.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13757.
 */
cljs.core.async.__GT_t_cljs$core$async13757 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13757(f__$1,ch__$1,meta13758){
return (new cljs.core.async.t_cljs$core$async13757(f__$1,ch__$1,meta13758));
});

}

return (new cljs.core.async.t_cljs$core$async13757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13800 = (function (f,ch,meta13801){
this.f = f;
this.ch = ch;
this.meta13801 = meta13801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13802,meta13801__$1){
var self__ = this;
var _13802__$1 = this;
return (new cljs.core.async.t_cljs$core$async13800(self__.f,self__.ch,meta13801__$1));
}));

(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13802){
var self__ = this;
var _13802__$1 = this;
return self__.meta13801;
}));

(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13801","meta13801",-1495804644,null)], null);
}));

(cljs.core.async.t_cljs$core$async13800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13800");

(cljs.core.async.t_cljs$core$async13800.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13800.
 */
cljs.core.async.__GT_t_cljs$core$async13800 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13800(f__$1,ch__$1,meta13801){
return (new cljs.core.async.t_cljs$core$async13800(f__$1,ch__$1,meta13801));
});

}

return (new cljs.core.async.t_cljs$core$async13800(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13803 = (function (p,ch,meta13804){
this.p = p;
this.ch = ch;
this.meta13804 = meta13804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13805,meta13804__$1){
var self__ = this;
var _13805__$1 = this;
return (new cljs.core.async.t_cljs$core$async13803(self__.p,self__.ch,meta13804__$1));
}));

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13805){
var self__ = this;
var _13805__$1 = this;
return self__.meta13804;
}));

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13804","meta13804",832417834,null)], null);
}));

(cljs.core.async.t_cljs$core$async13803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13803");

(cljs.core.async.t_cljs$core$async13803.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13803.
 */
cljs.core.async.__GT_t_cljs$core$async13803 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13803(p__$1,ch__$1,meta13804){
return (new cljs.core.async.t_cljs$core$async13803(p__$1,ch__$1,meta13804));
});

}

return (new cljs.core.async.t_cljs$core$async13803(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13873 = arguments.length;
switch (G__13873) {
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
var c__12107__auto___15041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13896){
var state_val_13897 = (state_13896[(1)]);
if((state_val_13897 === (7))){
var inst_13892 = (state_13896[(2)]);
var state_13896__$1 = state_13896;
var statearr_13936_15042 = state_13896__$1;
(statearr_13936_15042[(2)] = inst_13892);

(statearr_13936_15042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (1))){
var state_13896__$1 = state_13896;
var statearr_13938_15043 = state_13896__$1;
(statearr_13938_15043[(2)] = null);

(statearr_13938_15043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (4))){
var inst_13878 = (state_13896[(7)]);
var inst_13878__$1 = (state_13896[(2)]);
var inst_13879 = (inst_13878__$1 == null);
var state_13896__$1 = (function (){var statearr_13939 = state_13896;
(statearr_13939[(7)] = inst_13878__$1);

return statearr_13939;
})();
if(cljs.core.truth_(inst_13879)){
var statearr_13941_15044 = state_13896__$1;
(statearr_13941_15044[(1)] = (5));

} else {
var statearr_13942_15045 = state_13896__$1;
(statearr_13942_15045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (6))){
var inst_13878 = (state_13896[(7)]);
var inst_13883 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13878) : p.call(null,inst_13878));
var state_13896__$1 = state_13896;
if(cljs.core.truth_(inst_13883)){
var statearr_13944_15052 = state_13896__$1;
(statearr_13944_15052[(1)] = (8));

} else {
var statearr_13945_15053 = state_13896__$1;
(statearr_13945_15053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (3))){
var inst_13894 = (state_13896[(2)]);
var state_13896__$1 = state_13896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13896__$1,inst_13894);
} else {
if((state_val_13897 === (2))){
var state_13896__$1 = state_13896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13896__$1,(4),ch);
} else {
if((state_val_13897 === (11))){
var inst_13886 = (state_13896[(2)]);
var state_13896__$1 = state_13896;
var statearr_13946_15054 = state_13896__$1;
(statearr_13946_15054[(2)] = inst_13886);

(statearr_13946_15054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (9))){
var state_13896__$1 = state_13896;
var statearr_13947_15055 = state_13896__$1;
(statearr_13947_15055[(2)] = null);

(statearr_13947_15055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (5))){
var inst_13881 = cljs.core.async.close_BANG_(out);
var state_13896__$1 = state_13896;
var statearr_13948_15056 = state_13896__$1;
(statearr_13948_15056[(2)] = inst_13881);

(statearr_13948_15056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (10))){
var inst_13889 = (state_13896[(2)]);
var state_13896__$1 = (function (){var statearr_13949 = state_13896;
(statearr_13949[(8)] = inst_13889);

return statearr_13949;
})();
var statearr_13950_15057 = state_13896__$1;
(statearr_13950_15057[(2)] = null);

(statearr_13950_15057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13897 === (8))){
var inst_13878 = (state_13896[(7)]);
var state_13896__$1 = state_13896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13896__$1,(11),out,inst_13878);
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
var statearr_13951 = [null,null,null,null,null,null,null,null,null];
(statearr_13951[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13951[(1)] = (1));

return statearr_13951;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13896){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13896);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13952){var ex__12075__auto__ = e13952;
var statearr_13953_15058 = state_13896;
(statearr_13953_15058[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13896[(4)]))){
var statearr_13955_15059 = state_13896;
(statearr_13955_15059[(1)] = cljs.core.first((state_13896[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15060 = state_13896;
state_13896 = G__15060;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13957 = f__12108__auto__();
(statearr_13957[(6)] = c__12107__auto___15041);

return statearr_13957;
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
var G__13960 = arguments.length;
switch (G__13960) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14028){
var state_val_14029 = (state_14028[(1)]);
if((state_val_14029 === (7))){
var inst_14024 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14030_15062 = state_14028__$1;
(statearr_14030_15062[(2)] = inst_14024);

(statearr_14030_15062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (20))){
var inst_13994 = (state_14028[(7)]);
var inst_14005 = (state_14028[(2)]);
var inst_14006 = cljs.core.next(inst_13994);
var inst_13980 = inst_14006;
var inst_13981 = null;
var inst_13982 = (0);
var inst_13983 = (0);
var state_14028__$1 = (function (){var statearr_14031 = state_14028;
(statearr_14031[(8)] = inst_13981);

(statearr_14031[(9)] = inst_13980);

(statearr_14031[(10)] = inst_14005);

(statearr_14031[(11)] = inst_13982);

(statearr_14031[(12)] = inst_13983);

return statearr_14031;
})();
var statearr_14032_15063 = state_14028__$1;
(statearr_14032_15063[(2)] = null);

(statearr_14032_15063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (1))){
var state_14028__$1 = state_14028;
var statearr_14033_15064 = state_14028__$1;
(statearr_14033_15064[(2)] = null);

(statearr_14033_15064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (4))){
var inst_13969 = (state_14028[(13)]);
var inst_13969__$1 = (state_14028[(2)]);
var inst_13970 = (inst_13969__$1 == null);
var state_14028__$1 = (function (){var statearr_14034 = state_14028;
(statearr_14034[(13)] = inst_13969__$1);

return statearr_14034;
})();
if(cljs.core.truth_(inst_13970)){
var statearr_14035_15071 = state_14028__$1;
(statearr_14035_15071[(1)] = (5));

} else {
var statearr_14036_15072 = state_14028__$1;
(statearr_14036_15072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (15))){
var state_14028__$1 = state_14028;
var statearr_14040_15073 = state_14028__$1;
(statearr_14040_15073[(2)] = null);

(statearr_14040_15073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (21))){
var state_14028__$1 = state_14028;
var statearr_14041_15075 = state_14028__$1;
(statearr_14041_15075[(2)] = null);

(statearr_14041_15075[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (13))){
var inst_13981 = (state_14028[(8)]);
var inst_13980 = (state_14028[(9)]);
var inst_13982 = (state_14028[(11)]);
var inst_13983 = (state_14028[(12)]);
var inst_13990 = (state_14028[(2)]);
var inst_13991 = (inst_13983 + (1));
var tmp14037 = inst_13981;
var tmp14038 = inst_13980;
var tmp14039 = inst_13982;
var inst_13980__$1 = tmp14038;
var inst_13981__$1 = tmp14037;
var inst_13982__$1 = tmp14039;
var inst_13983__$1 = inst_13991;
var state_14028__$1 = (function (){var statearr_14042 = state_14028;
(statearr_14042[(8)] = inst_13981__$1);

(statearr_14042[(14)] = inst_13990);

(statearr_14042[(9)] = inst_13980__$1);

(statearr_14042[(11)] = inst_13982__$1);

(statearr_14042[(12)] = inst_13983__$1);

return statearr_14042;
})();
var statearr_14043_15077 = state_14028__$1;
(statearr_14043_15077[(2)] = null);

(statearr_14043_15077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (22))){
var state_14028__$1 = state_14028;
var statearr_14044_15078 = state_14028__$1;
(statearr_14044_15078[(2)] = null);

(statearr_14044_15078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (6))){
var inst_13969 = (state_14028[(13)]);
var inst_13978 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13969) : f.call(null,inst_13969));
var inst_13979 = cljs.core.seq(inst_13978);
var inst_13980 = inst_13979;
var inst_13981 = null;
var inst_13982 = (0);
var inst_13983 = (0);
var state_14028__$1 = (function (){var statearr_14045 = state_14028;
(statearr_14045[(8)] = inst_13981);

(statearr_14045[(9)] = inst_13980);

(statearr_14045[(11)] = inst_13982);

(statearr_14045[(12)] = inst_13983);

return statearr_14045;
})();
var statearr_14046_15080 = state_14028__$1;
(statearr_14046_15080[(2)] = null);

(statearr_14046_15080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (17))){
var inst_13994 = (state_14028[(7)]);
var inst_13998 = cljs.core.chunk_first(inst_13994);
var inst_13999 = cljs.core.chunk_rest(inst_13994);
var inst_14000 = cljs.core.count(inst_13998);
var inst_13980 = inst_13999;
var inst_13981 = inst_13998;
var inst_13982 = inst_14000;
var inst_13983 = (0);
var state_14028__$1 = (function (){var statearr_14047 = state_14028;
(statearr_14047[(8)] = inst_13981);

(statearr_14047[(9)] = inst_13980);

(statearr_14047[(11)] = inst_13982);

(statearr_14047[(12)] = inst_13983);

return statearr_14047;
})();
var statearr_14048_15081 = state_14028__$1;
(statearr_14048_15081[(2)] = null);

(statearr_14048_15081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (3))){
var inst_14026 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14028__$1,inst_14026);
} else {
if((state_val_14029 === (12))){
var inst_14014 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14049_15083 = state_14028__$1;
(statearr_14049_15083[(2)] = inst_14014);

(statearr_14049_15083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (2))){
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14028__$1,(4),in$);
} else {
if((state_val_14029 === (23))){
var inst_14022 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14050_15084 = state_14028__$1;
(statearr_14050_15084[(2)] = inst_14022);

(statearr_14050_15084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (19))){
var inst_14009 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14051_15086 = state_14028__$1;
(statearr_14051_15086[(2)] = inst_14009);

(statearr_14051_15086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (11))){
var inst_13994 = (state_14028[(7)]);
var inst_13980 = (state_14028[(9)]);
var inst_13994__$1 = cljs.core.seq(inst_13980);
var state_14028__$1 = (function (){var statearr_14054 = state_14028;
(statearr_14054[(7)] = inst_13994__$1);

return statearr_14054;
})();
if(inst_13994__$1){
var statearr_14056_15087 = state_14028__$1;
(statearr_14056_15087[(1)] = (14));

} else {
var statearr_14057_15088 = state_14028__$1;
(statearr_14057_15088[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (9))){
var inst_14016 = (state_14028[(2)]);
var inst_14017 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14028__$1 = (function (){var statearr_14058 = state_14028;
(statearr_14058[(15)] = inst_14016);

return statearr_14058;
})();
if(cljs.core.truth_(inst_14017)){
var statearr_14059_15097 = state_14028__$1;
(statearr_14059_15097[(1)] = (21));

} else {
var statearr_14060_15098 = state_14028__$1;
(statearr_14060_15098[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (5))){
var inst_13972 = cljs.core.async.close_BANG_(out);
var state_14028__$1 = state_14028;
var statearr_14065_15099 = state_14028__$1;
(statearr_14065_15099[(2)] = inst_13972);

(statearr_14065_15099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (14))){
var inst_13994 = (state_14028[(7)]);
var inst_13996 = cljs.core.chunked_seq_QMARK_(inst_13994);
var state_14028__$1 = state_14028;
if(inst_13996){
var statearr_14069_15101 = state_14028__$1;
(statearr_14069_15101[(1)] = (17));

} else {
var statearr_14070_15102 = state_14028__$1;
(statearr_14070_15102[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (16))){
var inst_14012 = (state_14028[(2)]);
var state_14028__$1 = state_14028;
var statearr_14073_15103 = state_14028__$1;
(statearr_14073_15103[(2)] = inst_14012);

(statearr_14073_15103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14029 === (10))){
var inst_13981 = (state_14028[(8)]);
var inst_13983 = (state_14028[(12)]);
var inst_13988 = cljs.core._nth(inst_13981,inst_13983);
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14028__$1,(13),out,inst_13988);
} else {
if((state_val_14029 === (18))){
var inst_13994 = (state_14028[(7)]);
var inst_14003 = cljs.core.first(inst_13994);
var state_14028__$1 = state_14028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14028__$1,(20),out,inst_14003);
} else {
if((state_val_14029 === (8))){
var inst_13982 = (state_14028[(11)]);
var inst_13983 = (state_14028[(12)]);
var inst_13985 = (inst_13983 < inst_13982);
var inst_13986 = inst_13985;
var state_14028__$1 = state_14028;
if(cljs.core.truth_(inst_13986)){
var statearr_14076_15105 = state_14028__$1;
(statearr_14076_15105[(1)] = (10));

} else {
var statearr_14078_15106 = state_14028__$1;
(statearr_14078_15106[(1)] = (11));

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
var statearr_14080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14080[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14080[(1)] = (1));

return statearr_14080;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_14028){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14028);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14084){var ex__12075__auto__ = e14084;
var statearr_14085_15108 = state_14028;
(statearr_14085_15108[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14028[(4)]))){
var statearr_14086_15109 = state_14028;
(statearr_14086_15109[(1)] = cljs.core.first((state_14028[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15111 = state_14028;
state_14028 = G__15111;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_14028){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_14028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14088 = f__12108__auto__();
(statearr_14088[(6)] = c__12107__auto__);

return statearr_14088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14093 = arguments.length;
switch (G__14093) {
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
var G__14095 = arguments.length;
switch (G__14095) {
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
var G__14097 = arguments.length;
switch (G__14097) {
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
var c__12107__auto___15132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14121){
var state_val_14122 = (state_14121[(1)]);
if((state_val_14122 === (7))){
var inst_14116 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14123_15133 = state_14121__$1;
(statearr_14123_15133[(2)] = inst_14116);

(statearr_14123_15133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (1))){
var inst_14098 = null;
var state_14121__$1 = (function (){var statearr_14124 = state_14121;
(statearr_14124[(7)] = inst_14098);

return statearr_14124;
})();
var statearr_14125_15134 = state_14121__$1;
(statearr_14125_15134[(2)] = null);

(statearr_14125_15134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (4))){
var inst_14101 = (state_14121[(8)]);
var inst_14101__$1 = (state_14121[(2)]);
var inst_14102 = (inst_14101__$1 == null);
var inst_14103 = cljs.core.not(inst_14102);
var state_14121__$1 = (function (){var statearr_14126 = state_14121;
(statearr_14126[(8)] = inst_14101__$1);

return statearr_14126;
})();
if(inst_14103){
var statearr_14127_15135 = state_14121__$1;
(statearr_14127_15135[(1)] = (5));

} else {
var statearr_14128_15136 = state_14121__$1;
(statearr_14128_15136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (6))){
var state_14121__$1 = state_14121;
var statearr_14129_15137 = state_14121__$1;
(statearr_14129_15137[(2)] = null);

(statearr_14129_15137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (3))){
var inst_14118 = (state_14121[(2)]);
var inst_14119 = cljs.core.async.close_BANG_(out);
var state_14121__$1 = (function (){var statearr_14131 = state_14121;
(statearr_14131[(9)] = inst_14118);

return statearr_14131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14121__$1,inst_14119);
} else {
if((state_val_14122 === (2))){
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14121__$1,(4),ch);
} else {
if((state_val_14122 === (11))){
var inst_14101 = (state_14121[(8)]);
var inst_14110 = (state_14121[(2)]);
var inst_14098 = inst_14101;
var state_14121__$1 = (function (){var statearr_14133 = state_14121;
(statearr_14133[(7)] = inst_14098);

(statearr_14133[(10)] = inst_14110);

return statearr_14133;
})();
var statearr_14134_15138 = state_14121__$1;
(statearr_14134_15138[(2)] = null);

(statearr_14134_15138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (9))){
var inst_14101 = (state_14121[(8)]);
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14121__$1,(11),out,inst_14101);
} else {
if((state_val_14122 === (5))){
var inst_14098 = (state_14121[(7)]);
var inst_14101 = (state_14121[(8)]);
var inst_14105 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14101,inst_14098);
var state_14121__$1 = state_14121;
if(inst_14105){
var statearr_14137_15139 = state_14121__$1;
(statearr_14137_15139[(1)] = (8));

} else {
var statearr_14140_15140 = state_14121__$1;
(statearr_14140_15140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (10))){
var inst_14113 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14141_15141 = state_14121__$1;
(statearr_14141_15141[(2)] = inst_14113);

(statearr_14141_15141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (8))){
var inst_14098 = (state_14121[(7)]);
var tmp14135 = inst_14098;
var inst_14098__$1 = tmp14135;
var state_14121__$1 = (function (){var statearr_14142 = state_14121;
(statearr_14142[(7)] = inst_14098__$1);

return statearr_14142;
})();
var statearr_14143_15142 = state_14121__$1;
(statearr_14143_15142[(2)] = null);

(statearr_14143_15142[(1)] = (2));


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
var statearr_14147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14147[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14147[(1)] = (1));

return statearr_14147;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14121){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14121);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14149){var ex__12075__auto__ = e14149;
var statearr_14151_15143 = state_14121;
(statearr_14151_15143[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14121[(4)]))){
var statearr_14153_15144 = state_14121;
(statearr_14153_15144[(1)] = cljs.core.first((state_14121[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15145 = state_14121;
state_14121 = G__15145;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14155 = f__12108__auto__();
(statearr_14155[(6)] = c__12107__auto___15132);

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
var G__14160 = arguments.length;
switch (G__14160) {
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
var c__12107__auto___15147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14205){
var state_val_14206 = (state_14205[(1)]);
if((state_val_14206 === (7))){
var inst_14201 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14207_15148 = state_14205__$1;
(statearr_14207_15148[(2)] = inst_14201);

(statearr_14207_15148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (1))){
var inst_14168 = (new Array(n));
var inst_14169 = inst_14168;
var inst_14170 = (0);
var state_14205__$1 = (function (){var statearr_14208 = state_14205;
(statearr_14208[(7)] = inst_14170);

(statearr_14208[(8)] = inst_14169);

return statearr_14208;
})();
var statearr_14209_15149 = state_14205__$1;
(statearr_14209_15149[(2)] = null);

(statearr_14209_15149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (4))){
var inst_14173 = (state_14205[(9)]);
var inst_14173__$1 = (state_14205[(2)]);
var inst_14174 = (inst_14173__$1 == null);
var inst_14175 = cljs.core.not(inst_14174);
var state_14205__$1 = (function (){var statearr_14210 = state_14205;
(statearr_14210[(9)] = inst_14173__$1);

return statearr_14210;
})();
if(inst_14175){
var statearr_14211_15150 = state_14205__$1;
(statearr_14211_15150[(1)] = (5));

} else {
var statearr_14212_15151 = state_14205__$1;
(statearr_14212_15151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (15))){
var inst_14195 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14213_15152 = state_14205__$1;
(statearr_14213_15152[(2)] = inst_14195);

(statearr_14213_15152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (13))){
var state_14205__$1 = state_14205;
var statearr_14214_15161 = state_14205__$1;
(statearr_14214_15161[(2)] = null);

(statearr_14214_15161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (6))){
var inst_14170 = (state_14205[(7)]);
var inst_14191 = (inst_14170 > (0));
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14191)){
var statearr_14215_15162 = state_14205__$1;
(statearr_14215_15162[(1)] = (12));

} else {
var statearr_14216_15163 = state_14205__$1;
(statearr_14216_15163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (3))){
var inst_14203 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14205__$1,inst_14203);
} else {
if((state_val_14206 === (12))){
var inst_14169 = (state_14205[(8)]);
var inst_14193 = cljs.core.vec(inst_14169);
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14205__$1,(15),out,inst_14193);
} else {
if((state_val_14206 === (2))){
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14205__$1,(4),ch);
} else {
if((state_val_14206 === (11))){
var inst_14185 = (state_14205[(2)]);
var inst_14186 = (new Array(n));
var inst_14169 = inst_14186;
var inst_14170 = (0);
var state_14205__$1 = (function (){var statearr_14220 = state_14205;
(statearr_14220[(7)] = inst_14170);

(statearr_14220[(8)] = inst_14169);

(statearr_14220[(10)] = inst_14185);

return statearr_14220;
})();
var statearr_14221_15164 = state_14205__$1;
(statearr_14221_15164[(2)] = null);

(statearr_14221_15164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (9))){
var inst_14169 = (state_14205[(8)]);
var inst_14183 = cljs.core.vec(inst_14169);
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14205__$1,(11),out,inst_14183);
} else {
if((state_val_14206 === (5))){
var inst_14170 = (state_14205[(7)]);
var inst_14173 = (state_14205[(9)]);
var inst_14169 = (state_14205[(8)]);
var inst_14178 = (state_14205[(11)]);
var inst_14177 = (inst_14169[inst_14170] = inst_14173);
var inst_14178__$1 = (inst_14170 + (1));
var inst_14179 = (inst_14178__$1 < n);
var state_14205__$1 = (function (){var statearr_14226 = state_14205;
(statearr_14226[(11)] = inst_14178__$1);

(statearr_14226[(12)] = inst_14177);

return statearr_14226;
})();
if(cljs.core.truth_(inst_14179)){
var statearr_14227_15165 = state_14205__$1;
(statearr_14227_15165[(1)] = (8));

} else {
var statearr_14228_15166 = state_14205__$1;
(statearr_14228_15166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (14))){
var inst_14198 = (state_14205[(2)]);
var inst_14199 = cljs.core.async.close_BANG_(out);
var state_14205__$1 = (function (){var statearr_14232 = state_14205;
(statearr_14232[(13)] = inst_14198);

return statearr_14232;
})();
var statearr_14233_15167 = state_14205__$1;
(statearr_14233_15167[(2)] = inst_14199);

(statearr_14233_15167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (10))){
var inst_14189 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14235_15168 = state_14205__$1;
(statearr_14235_15168[(2)] = inst_14189);

(statearr_14235_15168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (8))){
var inst_14169 = (state_14205[(8)]);
var inst_14178 = (state_14205[(11)]);
var tmp14229 = inst_14169;
var inst_14169__$1 = tmp14229;
var inst_14170 = inst_14178;
var state_14205__$1 = (function (){var statearr_14237 = state_14205;
(statearr_14237[(7)] = inst_14170);

(statearr_14237[(8)] = inst_14169__$1);

return statearr_14237;
})();
var statearr_14239_15169 = state_14205__$1;
(statearr_14239_15169[(2)] = null);

(statearr_14239_15169[(1)] = (2));


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
var statearr_14242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14242[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14242[(1)] = (1));

return statearr_14242;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14205){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14205);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14243){var ex__12075__auto__ = e14243;
var statearr_14244_15170 = state_14205;
(statearr_14244_15170[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14205[(4)]))){
var statearr_14247_15171 = state_14205;
(statearr_14247_15171[(1)] = cljs.core.first((state_14205[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15172 = state_14205;
state_14205 = G__15172;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14250 = f__12108__auto__();
(statearr_14250[(6)] = c__12107__auto___15147);

return statearr_14250;
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
var G__14256 = arguments.length;
switch (G__14256) {
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
var c__12107__auto___15208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14304){
var state_val_14305 = (state_14304[(1)]);
if((state_val_14305 === (7))){
var inst_14300 = (state_14304[(2)]);
var state_14304__$1 = state_14304;
var statearr_14306_15209 = state_14304__$1;
(statearr_14306_15209[(2)] = inst_14300);

(statearr_14306_15209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (1))){
var inst_14263 = [];
var inst_14264 = inst_14263;
var inst_14265 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14304__$1 = (function (){var statearr_14307 = state_14304;
(statearr_14307[(7)] = inst_14264);

(statearr_14307[(8)] = inst_14265);

return statearr_14307;
})();
var statearr_14308_15210 = state_14304__$1;
(statearr_14308_15210[(2)] = null);

(statearr_14308_15210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (4))){
var inst_14268 = (state_14304[(9)]);
var inst_14268__$1 = (state_14304[(2)]);
var inst_14269 = (inst_14268__$1 == null);
var inst_14270 = cljs.core.not(inst_14269);
var state_14304__$1 = (function (){var statearr_14309 = state_14304;
(statearr_14309[(9)] = inst_14268__$1);

return statearr_14309;
})();
if(inst_14270){
var statearr_14310_15211 = state_14304__$1;
(statearr_14310_15211[(1)] = (5));

} else {
var statearr_14311_15212 = state_14304__$1;
(statearr_14311_15212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (15))){
var inst_14294 = (state_14304[(2)]);
var state_14304__$1 = state_14304;
var statearr_14312_15213 = state_14304__$1;
(statearr_14312_15213[(2)] = inst_14294);

(statearr_14312_15213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (13))){
var state_14304__$1 = state_14304;
var statearr_14313_15214 = state_14304__$1;
(statearr_14313_15214[(2)] = null);

(statearr_14313_15214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (6))){
var inst_14264 = (state_14304[(7)]);
var inst_14289 = inst_14264.length;
var inst_14290 = (inst_14289 > (0));
var state_14304__$1 = state_14304;
if(cljs.core.truth_(inst_14290)){
var statearr_14314_15215 = state_14304__$1;
(statearr_14314_15215[(1)] = (12));

} else {
var statearr_14315_15216 = state_14304__$1;
(statearr_14315_15216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (3))){
var inst_14302 = (state_14304[(2)]);
var state_14304__$1 = state_14304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14304__$1,inst_14302);
} else {
if((state_val_14305 === (12))){
var inst_14264 = (state_14304[(7)]);
var inst_14292 = cljs.core.vec(inst_14264);
var state_14304__$1 = state_14304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14304__$1,(15),out,inst_14292);
} else {
if((state_val_14305 === (2))){
var state_14304__$1 = state_14304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14304__$1,(4),ch);
} else {
if((state_val_14305 === (11))){
var inst_14272 = (state_14304[(10)]);
var inst_14268 = (state_14304[(9)]);
var inst_14282 = (state_14304[(2)]);
var inst_14283 = [];
var inst_14284 = inst_14283.push(inst_14268);
var inst_14264 = inst_14283;
var inst_14265 = inst_14272;
var state_14304__$1 = (function (){var statearr_14316 = state_14304;
(statearr_14316[(11)] = inst_14282);

(statearr_14316[(7)] = inst_14264);

(statearr_14316[(12)] = inst_14284);

(statearr_14316[(8)] = inst_14265);

return statearr_14316;
})();
var statearr_14317_15217 = state_14304__$1;
(statearr_14317_15217[(2)] = null);

(statearr_14317_15217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (9))){
var inst_14264 = (state_14304[(7)]);
var inst_14280 = cljs.core.vec(inst_14264);
var state_14304__$1 = state_14304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14304__$1,(11),out,inst_14280);
} else {
if((state_val_14305 === (5))){
var inst_14272 = (state_14304[(10)]);
var inst_14268 = (state_14304[(9)]);
var inst_14265 = (state_14304[(8)]);
var inst_14272__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14268) : f.call(null,inst_14268));
var inst_14273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14272__$1,inst_14265);
var inst_14274 = cljs.core.keyword_identical_QMARK_(inst_14265,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14275 = ((inst_14273) || (inst_14274));
var state_14304__$1 = (function (){var statearr_14318 = state_14304;
(statearr_14318[(10)] = inst_14272__$1);

return statearr_14318;
})();
if(cljs.core.truth_(inst_14275)){
var statearr_14319_15218 = state_14304__$1;
(statearr_14319_15218[(1)] = (8));

} else {
var statearr_14320_15219 = state_14304__$1;
(statearr_14320_15219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (14))){
var inst_14297 = (state_14304[(2)]);
var inst_14298 = cljs.core.async.close_BANG_(out);
var state_14304__$1 = (function (){var statearr_14322 = state_14304;
(statearr_14322[(13)] = inst_14297);

return statearr_14322;
})();
var statearr_14324_15220 = state_14304__$1;
(statearr_14324_15220[(2)] = inst_14298);

(statearr_14324_15220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (10))){
var inst_14287 = (state_14304[(2)]);
var state_14304__$1 = state_14304;
var statearr_14326_15221 = state_14304__$1;
(statearr_14326_15221[(2)] = inst_14287);

(statearr_14326_15221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14305 === (8))){
var inst_14272 = (state_14304[(10)]);
var inst_14268 = (state_14304[(9)]);
var inst_14264 = (state_14304[(7)]);
var inst_14277 = inst_14264.push(inst_14268);
var tmp14321 = inst_14264;
var inst_14264__$1 = tmp14321;
var inst_14265 = inst_14272;
var state_14304__$1 = (function (){var statearr_14327 = state_14304;
(statearr_14327[(7)] = inst_14264__$1);

(statearr_14327[(8)] = inst_14265);

(statearr_14327[(14)] = inst_14277);

return statearr_14327;
})();
var statearr_14328_15222 = state_14304__$1;
(statearr_14328_15222[(2)] = null);

(statearr_14328_15222[(1)] = (2));


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
var statearr_14329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14329[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14329[(1)] = (1));

return statearr_14329;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14304){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14304);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14332){var ex__12075__auto__ = e14332;
var statearr_14333_15223 = state_14304;
(statearr_14333_15223[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14304[(4)]))){
var statearr_14334_15224 = state_14304;
(statearr_14334_15224[(1)] = cljs.core.first((state_14304[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15225 = state_14304;
state_14304 = G__15225;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14335 = f__12108__auto__();
(statearr_14335[(6)] = c__12107__auto___15208);

return statearr_14335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
