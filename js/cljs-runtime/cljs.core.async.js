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
var val_14362 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14362) : fn1.call(null,val_14362));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14362) : fn1.call(null,val_14362));
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
var n__4613__auto___14382 = n;
var x_14383 = (0);
while(true){
if((x_14383 < n__4613__auto___14382)){
(a[x_14383] = x_14383);

var G__14384 = (x_14383 + (1));
x_14383 = G__14384;
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
var G__14385 = (i + (1));
i = G__14385;
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
var len__4736__auto___14386 = arguments.length;
var i__4737__auto___14387 = (0);
while(true){
if((i__4737__auto___14387 < len__4736__auto___14386)){
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
var statearr_12225_14396 = state_12218__$1;
(statearr_12225_14396[(2)] = null);

(statearr_12225_14396[(1)] = (14));


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
var statearr_12226_14397 = state_12218__$1;
(statearr_12226_14397[(2)] = null);

(statearr_12226_14397[(1)] = (2));


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
var statearr_12227_14399 = state_12218__$1;
(statearr_12227_14399[(1)] = (12));

} else {
var statearr_12228_14400 = state_12218__$1;
(statearr_12228_14400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_14402 = state_12218__$1;
(statearr_12229_14402[(2)] = null);

(statearr_12229_14402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_14406 = state_12218__$1;
(statearr_12230_14406[(1)] = (8));

} else {
var statearr_12231_14407 = state_12218__$1;
(statearr_12231_14407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_14408 = state_12218__$1;
(statearr_12232_14408[(2)] = inst_12212);

(statearr_12232_14408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_14412 = state_12218__$1;
(statearr_12233_14412[(2)] = inst_12204);

(statearr_12233_14412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_14413 = state_12218__$1;
(statearr_12234_14413[(2)] = inst_12201);

(statearr_12234_14413[(1)] = (10));


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
var statearr_12237_14415 = state_12218;
(statearr_12237_14415[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_14416 = state_12218;
(statearr_12238_14416[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14417 = state_12218;
state_12218 = G__14417;
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
var c__12107__auto___14425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_12253_14426 = state_12248;
(statearr_12253_14426[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14427 = state_12248;
(statearr_12254_14427[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14428 = state_12248;
state_12248 = G__14428;
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
(statearr_12255[(6)] = c__12107__auto___14425);

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
var n__4613__auto___14429 = n;
var __14430 = (0);
while(true){
if((__14430 < n__4613__auto___14429)){
var G__12260_14431 = type;
var G__12260_14432__$1 = (((G__12260_14431 instanceof cljs.core.Keyword))?G__12260_14431.fqn:null);
switch (G__12260_14432__$1) {
case "compute":
var c__12107__auto___14434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14430,c__12107__auto___14434,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14430,c__12107__auto___14434,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14435 = state_12273__$1;
(statearr_12275_14435[(2)] = null);

(statearr_12275_14435[(1)] = (2));


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
var statearr_12276_14436 = state_12273__$1;
(statearr_12276_14436[(1)] = (5));

} else {
var statearr_12277_14437 = state_12273__$1;
(statearr_12277_14437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14438 = state_12273__$1;
(statearr_12278_14438[(2)] = null);

(statearr_12278_14438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14439 = state_12273__$1;
(statearr_12279_14439[(2)] = null);

(statearr_12279_14439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14440 = state_12273__$1;
(statearr_12280_14440[(2)] = inst_12269);

(statearr_12280_14440[(1)] = (3));


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
});})(__14430,c__12107__auto___14434,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async))
;
return ((function (__14430,switch__12071__auto__,c__12107__auto___14434,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async){
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
var statearr_12283_14442 = state_12273;
(statearr_12283_14442[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14443 = state_12273;
(statearr_12284_14443[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14444 = state_12273;
state_12273 = G__14444;
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
;})(__14430,switch__12071__auto__,c__12107__auto___14434,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14434);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14430,c__12107__auto___14434,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14430,c__12107__auto___14448,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14430,c__12107__auto___14448,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async){
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
});})(__14430,c__12107__auto___14448,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async))
;
return ((function (__14430,switch__12071__auto__,c__12107__auto___14448,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async){
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
;})(__14430,switch__12071__auto__,c__12107__auto___14448,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14448);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14430,c__12107__auto___14448,G__12260_14431,G__12260_14432__$1,n__4613__auto___14429,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14432__$1)].join('')));

}

var G__14460 = (__14430 + (1));
__14430 = G__14460;
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
var statearr_12341_14466 = state_12332__$1;
(statearr_12341_14466[(2)] = null);

(statearr_12341_14466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14467 = state_12332__$1;
(statearr_12342_14467[(2)] = inst_12316);

(statearr_12342_14467[(1)] = (7));


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
var statearr_12346_14468 = state_12332;
(statearr_12346_14468[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14469 = state_12332;
(statearr_12347_14469[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14470 = state_12332;
state_12332 = G__14470;
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
var statearr_12401_14495 = state_12386__$1;
(statearr_12401_14495[(2)] = null);

(statearr_12401_14495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_14496 = state_12386__$1;
(statearr_12402_14496[(2)] = null);

(statearr_12402_14496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_14497 = state_12386__$1;
(statearr_12403_14497[(1)] = (8));

} else {
var statearr_12404_14498 = state_12386__$1;
(statearr_12404_14498[(1)] = (9));

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
var statearr_12406_14499 = state_12386__$1;
(statearr_12406_14499[(1)] = (15));

} else {
var statearr_12407_14500 = state_12386__$1;
(statearr_12407_14500[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_14501 = state_12386__$1;
(statearr_12408_14501[(2)] = false);

(statearr_12408_14501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_14502 = state_12386__$1;
(statearr_12409_14502[(2)] = inst_12358);

(statearr_12409_14502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_14526 = state_12386__$1;
(statearr_12410_14526[(2)] = inst_12369);

(statearr_12410_14526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_14527 = state_12386__$1;
(statearr_12411_14527[(2)] = inst_12355);

(statearr_12411_14527[(1)] = (10));


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
var statearr_12414_14528 = state_12386;
(statearr_12414_14528[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_14529 = state_12386;
(statearr_12415_14529[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14530 = state_12386;
state_12386 = G__14530;
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
var G__12421 = arguments.length;
switch (G__12421) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12457){
var state_val_12458 = (state_12457[(1)]);
if((state_val_12458 === (7))){
var inst_12453 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12459_14548 = state_12457__$1;
(statearr_12459_14548[(2)] = inst_12453);

(statearr_12459_14548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (1))){
var state_12457__$1 = state_12457;
var statearr_12460_14549 = state_12457__$1;
(statearr_12460_14549[(2)] = null);

(statearr_12460_14549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (4))){
var inst_12426 = (state_12457[(7)]);
var inst_12426__$1 = (state_12457[(2)]);
var inst_12427 = (inst_12426__$1 == null);
var state_12457__$1 = (function (){var statearr_12461 = state_12457;
(statearr_12461[(7)] = inst_12426__$1);

return statearr_12461;
})();
if(cljs.core.truth_(inst_12427)){
var statearr_12462_14550 = state_12457__$1;
(statearr_12462_14550[(1)] = (5));

} else {
var statearr_12463_14551 = state_12457__$1;
(statearr_12463_14551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (13))){
var state_12457__$1 = state_12457;
var statearr_12464_14552 = state_12457__$1;
(statearr_12464_14552[(2)] = null);

(statearr_12464_14552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (6))){
var inst_12426 = (state_12457[(7)]);
var inst_12432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12426) : p.call(null,inst_12426));
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12432)){
var statearr_12465_14553 = state_12457__$1;
(statearr_12465_14553[(1)] = (9));

} else {
var statearr_12466_14554 = state_12457__$1;
(statearr_12466_14554[(1)] = (10));

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
var statearr_12467_14555 = state_12457__$1;
(statearr_12467_14555[(2)] = null);

(statearr_12467_14555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (2))){
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12457__$1,(4),ch);
} else {
if((state_val_12458 === (11))){
var inst_12426 = (state_12457[(7)]);
var inst_12436 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12457__$1,(8),inst_12436,inst_12426);
} else {
if((state_val_12458 === (9))){
var state_12457__$1 = state_12457;
var statearr_12468_14556 = state_12457__$1;
(statearr_12468_14556[(2)] = tc);

(statearr_12468_14556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (5))){
var inst_12429 = cljs.core.async.close_BANG_(tc);
var inst_12430 = cljs.core.async.close_BANG_(fc);
var state_12457__$1 = (function (){var statearr_12469 = state_12457;
(statearr_12469[(8)] = inst_12429);

return statearr_12469;
})();
var statearr_12470_14557 = state_12457__$1;
(statearr_12470_14557[(2)] = inst_12430);

(statearr_12470_14557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (14))){
var inst_12451 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
var statearr_12471_14558 = state_12457__$1;
(statearr_12471_14558[(2)] = inst_12451);

(statearr_12471_14558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (10))){
var state_12457__$1 = state_12457;
var statearr_12472_14559 = state_12457__$1;
(statearr_12472_14559[(2)] = fc);

(statearr_12472_14559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12458 === (8))){
var inst_12438 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
if(cljs.core.truth_(inst_12438)){
var statearr_12473_14560 = state_12457__$1;
(statearr_12473_14560[(1)] = (12));

} else {
var statearr_12474_14561 = state_12457__$1;
(statearr_12474_14561[(1)] = (13));

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
}catch (e12476){var ex__12075__auto__ = e12476;
var statearr_12477_14582 = state_12457;
(statearr_12477_14582[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12457[(4)]))){
var statearr_12478_14583 = state_12457;
(statearr_12478_14583[(1)] = cljs.core.first((state_12457[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14584 = state_12457;
state_12457 = G__14584;
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
var statearr_12503_14585 = state_12501__$1;
(statearr_12503_14585[(2)] = inst_12497);

(statearr_12503_14585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (1))){
var inst_12480 = init;
var inst_12481 = inst_12480;
var state_12501__$1 = (function (){var statearr_12504 = state_12501;
(statearr_12504[(7)] = inst_12481);

return statearr_12504;
})();
var statearr_12505_14586 = state_12501__$1;
(statearr_12505_14586[(2)] = null);

(statearr_12505_14586[(1)] = (2));


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
var statearr_12507_14587 = state_12501__$1;
(statearr_12507_14587[(1)] = (5));

} else {
var statearr_12508_14588 = state_12501__$1;
(statearr_12508_14588[(1)] = (6));

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
var statearr_12510_14589 = state_12501__$1;
(statearr_12510_14589[(1)] = (8));

} else {
var statearr_12511_14590 = state_12501__$1;
(statearr_12511_14590[(1)] = (9));

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
var statearr_12513_14591 = state_12501__$1;
(statearr_12513_14591[(2)] = null);

(statearr_12513_14591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (5))){
var inst_12481 = (state_12501[(7)]);
var state_12501__$1 = state_12501;
var statearr_12514_14592 = state_12501__$1;
(statearr_12514_14592[(2)] = inst_12481);

(statearr_12514_14592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (10))){
var inst_12495 = (state_12501[(2)]);
var state_12501__$1 = state_12501;
var statearr_12515_14593 = state_12501__$1;
(statearr_12515_14593[(2)] = inst_12495);

(statearr_12515_14593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (8))){
var inst_12488 = (state_12501[(9)]);
var inst_12491 = cljs.core.deref(inst_12488);
var state_12501__$1 = state_12501;
var statearr_12516_14594 = state_12501__$1;
(statearr_12516_14594[(2)] = inst_12491);

(statearr_12516_14594[(1)] = (10));


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
var statearr_12519_14613 = state_12501;
(statearr_12519_14613[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12501[(4)]))){
var statearr_12520_14614 = state_12501;
(statearr_12520_14614[(1)] = cljs.core.first((state_12501[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14615 = state_12501;
state_12501 = G__14615;
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12528){
var state_val_12529 = (state_12528[(1)]);
if((state_val_12529 === (1))){
var inst_12523 = cljs.core.async.reduce(f__$1,init,ch);
var state_12528__$1 = state_12528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12528__$1,(2),inst_12523);
} else {
if((state_val_12529 === (2))){
var inst_12525 = (state_12528[(2)]);
var inst_12526 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12525) : f__$1.call(null,inst_12525));
var state_12528__$1 = state_12528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12528__$1,inst_12526);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12534 = [null,null,null,null,null,null,null];
(statearr_12534[(0)] = cljs$core$async$transduce_$_state_machine__12072__auto__);

(statearr_12534[(1)] = (1));

return statearr_12534;
});
var cljs$core$async$transduce_$_state_machine__12072__auto____1 = (function (state_12528){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12528);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12535){var ex__12075__auto__ = e12535;
var statearr_12536_14616 = state_12528;
(statearr_12536_14616[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12528[(4)]))){
var statearr_12537_14617 = state_12528;
(statearr_12537_14617[(1)] = cljs.core.first((state_12528[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14618 = state_12528;
state_12528 = G__14618;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12072__auto__ = function(state_12528){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12072__auto____1.call(this,state_12528);
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
var statearr_12567_14620 = state_12565__$1;
(statearr_12567_14620[(2)] = inst_12547);

(statearr_12567_14620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (1))){
var inst_12541 = cljs.core.seq(coll);
var inst_12542 = inst_12541;
var state_12565__$1 = (function (){var statearr_12568 = state_12565;
(statearr_12568[(7)] = inst_12542);

return statearr_12568;
})();
var statearr_12569_14621 = state_12565__$1;
(statearr_12569_14621[(2)] = null);

(statearr_12569_14621[(1)] = (2));


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
var statearr_12570_14639 = state_12565__$1;
(statearr_12570_14639[(2)] = inst_12559);

(statearr_12570_14639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (6))){
var inst_12550 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12550)){
var statearr_12571_14640 = state_12565__$1;
(statearr_12571_14640[(1)] = (8));

} else {
var statearr_12572_14641 = state_12565__$1;
(statearr_12572_14641[(1)] = (9));

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
var statearr_12573_14642 = state_12565__$1;
(statearr_12573_14642[(2)] = null);

(statearr_12573_14642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (2))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
if(cljs.core.truth_(inst_12542)){
var statearr_12574_14643 = state_12565__$1;
(statearr_12574_14643[(1)] = (4));

} else {
var statearr_12575_14644 = state_12565__$1;
(statearr_12575_14644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (11))){
var inst_12556 = cljs.core.async.close_BANG_(ch);
var state_12565__$1 = state_12565;
var statearr_12576_14645 = state_12565__$1;
(statearr_12576_14645[(2)] = inst_12556);

(statearr_12576_14645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (9))){
var state_12565__$1 = state_12565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12577_14646 = state_12565__$1;
(statearr_12577_14646[(1)] = (11));

} else {
var statearr_12578_14647 = state_12565__$1;
(statearr_12578_14647[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (5))){
var inst_12542 = (state_12565[(7)]);
var state_12565__$1 = state_12565;
var statearr_12579_14648 = state_12565__$1;
(statearr_12579_14648[(2)] = inst_12542);

(statearr_12579_14648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12566 === (10))){
var inst_12561 = (state_12565[(2)]);
var state_12565__$1 = state_12565;
var statearr_12580_14649 = state_12565__$1;
(statearr_12580_14649[(2)] = inst_12561);

(statearr_12580_14649[(1)] = (3));


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
var statearr_12582_14650 = state_12565__$1;
(statearr_12582_14650[(2)] = null);

(statearr_12582_14650[(1)] = (2));


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
var statearr_12585_14651 = state_12565;
(statearr_12585_14651[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12565[(4)]))){
var statearr_12586_14652 = state_12565;
(statearr_12586_14652[(1)] = cljs.core.first((state_12565[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14653 = state_12565;
state_12565 = G__14653;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14661 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14661(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14662 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14662(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14663 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14663(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14664 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14664(m);
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
var c__12107__auto___14704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12729){
var state_val_12730 = (state_12729[(1)]);
if((state_val_12730 === (7))){
var inst_12725 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12731_14705 = state_12729__$1;
(statearr_12731_14705[(2)] = inst_12725);

(statearr_12731_14705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (20))){
var inst_12630 = (state_12729[(7)]);
var inst_12642 = cljs.core.first(inst_12630);
var inst_12643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12642,(0),null);
var inst_12644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12642,(1),null);
var state_12729__$1 = (function (){var statearr_12732 = state_12729;
(statearr_12732[(8)] = inst_12643);

return statearr_12732;
})();
if(cljs.core.truth_(inst_12644)){
var statearr_12733_14706 = state_12729__$1;
(statearr_12733_14706[(1)] = (22));

} else {
var statearr_12734_14707 = state_12729__$1;
(statearr_12734_14707[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (27))){
var inst_12595 = (state_12729[(9)]);
var inst_12672 = (state_12729[(10)]);
var inst_12679 = (state_12729[(11)]);
var inst_12674 = (state_12729[(12)]);
var inst_12679__$1 = cljs.core._nth(inst_12672,inst_12674);
var inst_12680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12679__$1,inst_12595,done);
var state_12729__$1 = (function (){var statearr_12735 = state_12729;
(statearr_12735[(11)] = inst_12679__$1);

return statearr_12735;
})();
if(cljs.core.truth_(inst_12680)){
var statearr_12736_14708 = state_12729__$1;
(statearr_12736_14708[(1)] = (30));

} else {
var statearr_12737_14709 = state_12729__$1;
(statearr_12737_14709[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (1))){
var state_12729__$1 = state_12729;
var statearr_12738_14710 = state_12729__$1;
(statearr_12738_14710[(2)] = null);

(statearr_12738_14710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (24))){
var inst_12630 = (state_12729[(7)]);
var inst_12649 = (state_12729[(2)]);
var inst_12650 = cljs.core.next(inst_12630);
var inst_12608 = inst_12650;
var inst_12609 = null;
var inst_12610 = (0);
var inst_12611 = (0);
var state_12729__$1 = (function (){var statearr_12739 = state_12729;
(statearr_12739[(13)] = inst_12608);

(statearr_12739[(14)] = inst_12609);

(statearr_12739[(15)] = inst_12649);

(statearr_12739[(16)] = inst_12611);

(statearr_12739[(17)] = inst_12610);

return statearr_12739;
})();
var statearr_12741_14711 = state_12729__$1;
(statearr_12741_14711[(2)] = null);

(statearr_12741_14711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (39))){
var state_12729__$1 = state_12729;
var statearr_12745_14712 = state_12729__$1;
(statearr_12745_14712[(2)] = null);

(statearr_12745_14712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (4))){
var inst_12595 = (state_12729[(9)]);
var inst_12595__$1 = (state_12729[(2)]);
var inst_12597 = (inst_12595__$1 == null);
var state_12729__$1 = (function (){var statearr_12746 = state_12729;
(statearr_12746[(9)] = inst_12595__$1);

return statearr_12746;
})();
if(cljs.core.truth_(inst_12597)){
var statearr_12747_14713 = state_12729__$1;
(statearr_12747_14713[(1)] = (5));

} else {
var statearr_12748_14714 = state_12729__$1;
(statearr_12748_14714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (15))){
var inst_12608 = (state_12729[(13)]);
var inst_12609 = (state_12729[(14)]);
var inst_12611 = (state_12729[(16)]);
var inst_12610 = (state_12729[(17)]);
var inst_12626 = (state_12729[(2)]);
var inst_12627 = (inst_12611 + (1));
var tmp12742 = inst_12608;
var tmp12743 = inst_12609;
var tmp12744 = inst_12610;
var inst_12608__$1 = tmp12742;
var inst_12609__$1 = tmp12743;
var inst_12610__$1 = tmp12744;
var inst_12611__$1 = inst_12627;
var state_12729__$1 = (function (){var statearr_12749 = state_12729;
(statearr_12749[(13)] = inst_12608__$1);

(statearr_12749[(14)] = inst_12609__$1);

(statearr_12749[(16)] = inst_12611__$1);

(statearr_12749[(18)] = inst_12626);

(statearr_12749[(17)] = inst_12610__$1);

return statearr_12749;
})();
var statearr_12750_14736 = state_12729__$1;
(statearr_12750_14736[(2)] = null);

(statearr_12750_14736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (21))){
var inst_12653 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12754_14737 = state_12729__$1;
(statearr_12754_14737[(2)] = inst_12653);

(statearr_12754_14737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (31))){
var inst_12679 = (state_12729[(11)]);
var inst_12683 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12679);
var state_12729__$1 = state_12729;
var statearr_12755_14738 = state_12729__$1;
(statearr_12755_14738[(2)] = inst_12683);

(statearr_12755_14738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (32))){
var inst_12672 = (state_12729[(10)]);
var inst_12673 = (state_12729[(19)]);
var inst_12674 = (state_12729[(12)]);
var inst_12671 = (state_12729[(20)]);
var inst_12685 = (state_12729[(2)]);
var inst_12686 = (inst_12674 + (1));
var tmp12751 = inst_12672;
var tmp12752 = inst_12673;
var tmp12753 = inst_12671;
var inst_12671__$1 = tmp12753;
var inst_12672__$1 = tmp12751;
var inst_12673__$1 = tmp12752;
var inst_12674__$1 = inst_12686;
var state_12729__$1 = (function (){var statearr_12756 = state_12729;
(statearr_12756[(10)] = inst_12672__$1);

(statearr_12756[(21)] = inst_12685);

(statearr_12756[(19)] = inst_12673__$1);

(statearr_12756[(12)] = inst_12674__$1);

(statearr_12756[(20)] = inst_12671__$1);

return statearr_12756;
})();
var statearr_12757_14739 = state_12729__$1;
(statearr_12757_14739[(2)] = null);

(statearr_12757_14739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (40))){
var inst_12698 = (state_12729[(22)]);
var inst_12702 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12698);
var state_12729__$1 = state_12729;
var statearr_12758_14740 = state_12729__$1;
(statearr_12758_14740[(2)] = inst_12702);

(statearr_12758_14740[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (33))){
var inst_12689 = (state_12729[(23)]);
var inst_12691 = cljs.core.chunked_seq_QMARK_(inst_12689);
var state_12729__$1 = state_12729;
if(inst_12691){
var statearr_12762_14741 = state_12729__$1;
(statearr_12762_14741[(1)] = (36));

} else {
var statearr_12763_14742 = state_12729__$1;
(statearr_12763_14742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (13))){
var inst_12620 = (state_12729[(24)]);
var inst_12623 = cljs.core.async.close_BANG_(inst_12620);
var state_12729__$1 = state_12729;
var statearr_12764_14743 = state_12729__$1;
(statearr_12764_14743[(2)] = inst_12623);

(statearr_12764_14743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (22))){
var inst_12643 = (state_12729[(8)]);
var inst_12646 = cljs.core.async.close_BANG_(inst_12643);
var state_12729__$1 = state_12729;
var statearr_12765_14744 = state_12729__$1;
(statearr_12765_14744[(2)] = inst_12646);

(statearr_12765_14744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (36))){
var inst_12689 = (state_12729[(23)]);
var inst_12693 = cljs.core.chunk_first(inst_12689);
var inst_12694 = cljs.core.chunk_rest(inst_12689);
var inst_12695 = cljs.core.count(inst_12693);
var inst_12671 = inst_12694;
var inst_12672 = inst_12693;
var inst_12673 = inst_12695;
var inst_12674 = (0);
var state_12729__$1 = (function (){var statearr_12766 = state_12729;
(statearr_12766[(10)] = inst_12672);

(statearr_12766[(19)] = inst_12673);

(statearr_12766[(12)] = inst_12674);

(statearr_12766[(20)] = inst_12671);

return statearr_12766;
})();
var statearr_12767_14745 = state_12729__$1;
(statearr_12767_14745[(2)] = null);

(statearr_12767_14745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (41))){
var inst_12689 = (state_12729[(23)]);
var inst_12704 = (state_12729[(2)]);
var inst_12705 = cljs.core.next(inst_12689);
var inst_12671 = inst_12705;
var inst_12672 = null;
var inst_12673 = (0);
var inst_12674 = (0);
var state_12729__$1 = (function (){var statearr_12768 = state_12729;
(statearr_12768[(10)] = inst_12672);

(statearr_12768[(25)] = inst_12704);

(statearr_12768[(19)] = inst_12673);

(statearr_12768[(12)] = inst_12674);

(statearr_12768[(20)] = inst_12671);

return statearr_12768;
})();
var statearr_12769_14746 = state_12729__$1;
(statearr_12769_14746[(2)] = null);

(statearr_12769_14746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (43))){
var state_12729__$1 = state_12729;
var statearr_12770_14747 = state_12729__$1;
(statearr_12770_14747[(2)] = null);

(statearr_12770_14747[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (29))){
var inst_12713 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12771_14748 = state_12729__$1;
(statearr_12771_14748[(2)] = inst_12713);

(statearr_12771_14748[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (44))){
var inst_12722 = (state_12729[(2)]);
var state_12729__$1 = (function (){var statearr_12772 = state_12729;
(statearr_12772[(26)] = inst_12722);

return statearr_12772;
})();
var statearr_12773_14758 = state_12729__$1;
(statearr_12773_14758[(2)] = null);

(statearr_12773_14758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (6))){
var inst_12663 = (state_12729[(27)]);
var inst_12662 = cljs.core.deref(cs);
var inst_12663__$1 = cljs.core.keys(inst_12662);
var inst_12664 = cljs.core.count(inst_12663__$1);
var inst_12665 = cljs.core.reset_BANG_(dctr,inst_12664);
var inst_12670 = cljs.core.seq(inst_12663__$1);
var inst_12671 = inst_12670;
var inst_12672 = null;
var inst_12673 = (0);
var inst_12674 = (0);
var state_12729__$1 = (function (){var statearr_12774 = state_12729;
(statearr_12774[(27)] = inst_12663__$1);

(statearr_12774[(10)] = inst_12672);

(statearr_12774[(28)] = inst_12665);

(statearr_12774[(19)] = inst_12673);

(statearr_12774[(12)] = inst_12674);

(statearr_12774[(20)] = inst_12671);

return statearr_12774;
})();
var statearr_12775_14759 = state_12729__$1;
(statearr_12775_14759[(2)] = null);

(statearr_12775_14759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (28))){
var inst_12689 = (state_12729[(23)]);
var inst_12671 = (state_12729[(20)]);
var inst_12689__$1 = cljs.core.seq(inst_12671);
var state_12729__$1 = (function (){var statearr_12776 = state_12729;
(statearr_12776[(23)] = inst_12689__$1);

return statearr_12776;
})();
if(inst_12689__$1){
var statearr_12777_14760 = state_12729__$1;
(statearr_12777_14760[(1)] = (33));

} else {
var statearr_12778_14761 = state_12729__$1;
(statearr_12778_14761[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (25))){
var inst_12673 = (state_12729[(19)]);
var inst_12674 = (state_12729[(12)]);
var inst_12676 = (inst_12674 < inst_12673);
var inst_12677 = inst_12676;
var state_12729__$1 = state_12729;
if(cljs.core.truth_(inst_12677)){
var statearr_12779_14762 = state_12729__$1;
(statearr_12779_14762[(1)] = (27));

} else {
var statearr_12780_14764 = state_12729__$1;
(statearr_12780_14764[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (34))){
var state_12729__$1 = state_12729;
var statearr_12781_14765 = state_12729__$1;
(statearr_12781_14765[(2)] = null);

(statearr_12781_14765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (17))){
var state_12729__$1 = state_12729;
var statearr_12782_14767 = state_12729__$1;
(statearr_12782_14767[(2)] = null);

(statearr_12782_14767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (3))){
var inst_12727 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12729__$1,inst_12727);
} else {
if((state_val_12730 === (12))){
var inst_12658 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12783_14768 = state_12729__$1;
(statearr_12783_14768[(2)] = inst_12658);

(statearr_12783_14768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (2))){
var state_12729__$1 = state_12729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12729__$1,(4),ch);
} else {
if((state_val_12730 === (23))){
var state_12729__$1 = state_12729;
var statearr_12784_14770 = state_12729__$1;
(statearr_12784_14770[(2)] = null);

(statearr_12784_14770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (35))){
var inst_12711 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12785_14771 = state_12729__$1;
(statearr_12785_14771[(2)] = inst_12711);

(statearr_12785_14771[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (19))){
var inst_12630 = (state_12729[(7)]);
var inst_12634 = cljs.core.chunk_first(inst_12630);
var inst_12635 = cljs.core.chunk_rest(inst_12630);
var inst_12636 = cljs.core.count(inst_12634);
var inst_12608 = inst_12635;
var inst_12609 = inst_12634;
var inst_12610 = inst_12636;
var inst_12611 = (0);
var state_12729__$1 = (function (){var statearr_12794 = state_12729;
(statearr_12794[(13)] = inst_12608);

(statearr_12794[(14)] = inst_12609);

(statearr_12794[(16)] = inst_12611);

(statearr_12794[(17)] = inst_12610);

return statearr_12794;
})();
var statearr_12795_14773 = state_12729__$1;
(statearr_12795_14773[(2)] = null);

(statearr_12795_14773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (11))){
var inst_12608 = (state_12729[(13)]);
var inst_12630 = (state_12729[(7)]);
var inst_12630__$1 = cljs.core.seq(inst_12608);
var state_12729__$1 = (function (){var statearr_12796 = state_12729;
(statearr_12796[(7)] = inst_12630__$1);

return statearr_12796;
})();
if(inst_12630__$1){
var statearr_12797_14774 = state_12729__$1;
(statearr_12797_14774[(1)] = (16));

} else {
var statearr_12798_14776 = state_12729__$1;
(statearr_12798_14776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (9))){
var inst_12660 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12799_14777 = state_12729__$1;
(statearr_12799_14777[(2)] = inst_12660);

(statearr_12799_14777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (5))){
var inst_12606 = cljs.core.deref(cs);
var inst_12607 = cljs.core.seq(inst_12606);
var inst_12608 = inst_12607;
var inst_12609 = null;
var inst_12610 = (0);
var inst_12611 = (0);
var state_12729__$1 = (function (){var statearr_12800 = state_12729;
(statearr_12800[(13)] = inst_12608);

(statearr_12800[(14)] = inst_12609);

(statearr_12800[(16)] = inst_12611);

(statearr_12800[(17)] = inst_12610);

return statearr_12800;
})();
var statearr_12801_14779 = state_12729__$1;
(statearr_12801_14779[(2)] = null);

(statearr_12801_14779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (14))){
var state_12729__$1 = state_12729;
var statearr_12802_14780 = state_12729__$1;
(statearr_12802_14780[(2)] = null);

(statearr_12802_14780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (45))){
var inst_12719 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12803_14781 = state_12729__$1;
(statearr_12803_14781[(2)] = inst_12719);

(statearr_12803_14781[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (26))){
var inst_12663 = (state_12729[(27)]);
var inst_12715 = (state_12729[(2)]);
var inst_12716 = cljs.core.seq(inst_12663);
var state_12729__$1 = (function (){var statearr_12804 = state_12729;
(statearr_12804[(29)] = inst_12715);

return statearr_12804;
})();
if(inst_12716){
var statearr_12805_14783 = state_12729__$1;
(statearr_12805_14783[(1)] = (42));

} else {
var statearr_12806_14784 = state_12729__$1;
(statearr_12806_14784[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (16))){
var inst_12630 = (state_12729[(7)]);
var inst_12632 = cljs.core.chunked_seq_QMARK_(inst_12630);
var state_12729__$1 = state_12729;
if(inst_12632){
var statearr_12807_14794 = state_12729__$1;
(statearr_12807_14794[(1)] = (19));

} else {
var statearr_12808_14796 = state_12729__$1;
(statearr_12808_14796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (38))){
var inst_12708 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12809_14797 = state_12729__$1;
(statearr_12809_14797[(2)] = inst_12708);

(statearr_12809_14797[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (30))){
var state_12729__$1 = state_12729;
var statearr_12810_14798 = state_12729__$1;
(statearr_12810_14798[(2)] = null);

(statearr_12810_14798[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (10))){
var inst_12609 = (state_12729[(14)]);
var inst_12611 = (state_12729[(16)]);
var inst_12619 = cljs.core._nth(inst_12609,inst_12611);
var inst_12620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12619,(0),null);
var inst_12621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12619,(1),null);
var state_12729__$1 = (function (){var statearr_12811 = state_12729;
(statearr_12811[(24)] = inst_12620);

return statearr_12811;
})();
if(cljs.core.truth_(inst_12621)){
var statearr_12812_14800 = state_12729__$1;
(statearr_12812_14800[(1)] = (13));

} else {
var statearr_12813_14801 = state_12729__$1;
(statearr_12813_14801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (18))){
var inst_12656 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12814_14802 = state_12729__$1;
(statearr_12814_14802[(2)] = inst_12656);

(statearr_12814_14802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (42))){
var state_12729__$1 = state_12729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12729__$1,(45),dchan);
} else {
if((state_val_12730 === (37))){
var inst_12689 = (state_12729[(23)]);
var inst_12595 = (state_12729[(9)]);
var inst_12698 = (state_12729[(22)]);
var inst_12698__$1 = cljs.core.first(inst_12689);
var inst_12699 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12698__$1,inst_12595,done);
var state_12729__$1 = (function (){var statearr_12825 = state_12729;
(statearr_12825[(22)] = inst_12698__$1);

return statearr_12825;
})();
if(cljs.core.truth_(inst_12699)){
var statearr_12826_14804 = state_12729__$1;
(statearr_12826_14804[(1)] = (39));

} else {
var statearr_12827_14805 = state_12729__$1;
(statearr_12827_14805[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (8))){
var inst_12611 = (state_12729[(16)]);
var inst_12610 = (state_12729[(17)]);
var inst_12613 = (inst_12611 < inst_12610);
var inst_12614 = inst_12613;
var state_12729__$1 = state_12729;
if(cljs.core.truth_(inst_12614)){
var statearr_12828_14807 = state_12729__$1;
(statearr_12828_14807[(1)] = (10));

} else {
var statearr_12829_14808 = state_12729__$1;
(statearr_12829_14808[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__12072__auto____1 = (function (state_12729){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12729);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12831){var ex__12075__auto__ = e12831;
var statearr_12832_14810 = state_12729;
(statearr_12832_14810[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12729[(4)]))){
var statearr_12833_14811 = state_12729;
(statearr_12833_14811[(1)] = cljs.core.first((state_12729[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14813 = state_12729;
state_12729 = G__14813;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12072__auto__ = function(state_12729){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12072__auto____1.call(this,state_12729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12072__auto____0;
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12072__auto____1;
return cljs$core$async$mult_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12834 = f__12108__auto__();
(statearr_12834[(6)] = c__12107__auto___14704);

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

var cljs$core$async$Mix$admix_STAR_$dyn_14823 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14823(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14825 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14825(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14827 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14827(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14829 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14829(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14831 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14831(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14841 = arguments.length;
var i__4737__auto___14842 = (0);
while(true){
if((i__4737__auto___14842 < len__4736__auto___14841)){
args__4742__auto__.push((arguments[i__4737__auto___14842]));

var G__14843 = (i__4737__auto___14842 + (1));
i__4737__auto___14842 = G__14843;
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
var statearr_12844_14845 = state;
(statearr_12844_14845[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12845_14847 = state;
(statearr_12845_14847[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12846_14848 = state;
(statearr_12846_14848[(2)] = cljs.core.deref(cb));


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
var c__12107__auto___14862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12959){
var state_val_12960 = (state_12959[(1)]);
if((state_val_12960 === (7))){
var inst_12867 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
var statearr_12961_14863 = state_12959__$1;
(statearr_12961_14863[(2)] = inst_12867);

(statearr_12961_14863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (20))){
var inst_12879 = (state_12959[(7)]);
var state_12959__$1 = state_12959;
var statearr_12962_14864 = state_12959__$1;
(statearr_12962_14864[(2)] = inst_12879);

(statearr_12962_14864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (27))){
var state_12959__$1 = state_12959;
var statearr_12963_14865 = state_12959__$1;
(statearr_12963_14865[(2)] = null);

(statearr_12963_14865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (1))){
var inst_12854 = (state_12959[(8)]);
var inst_12854__$1 = calc_state();
var inst_12856 = (inst_12854__$1 == null);
var inst_12857 = cljs.core.not(inst_12856);
var state_12959__$1 = (function (){var statearr_12964 = state_12959;
(statearr_12964[(8)] = inst_12854__$1);

return statearr_12964;
})();
if(inst_12857){
var statearr_12965_14866 = state_12959__$1;
(statearr_12965_14866[(1)] = (2));

} else {
var statearr_12966_14867 = state_12959__$1;
(statearr_12966_14867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (24))){
var inst_12926 = (state_12959[(9)]);
var inst_12903 = (state_12959[(10)]);
var inst_12912 = (state_12959[(11)]);
var inst_12926__$1 = (inst_12903.cljs$core$IFn$_invoke$arity$1 ? inst_12903.cljs$core$IFn$_invoke$arity$1(inst_12912) : inst_12903.call(null,inst_12912));
var state_12959__$1 = (function (){var statearr_12967 = state_12959;
(statearr_12967[(9)] = inst_12926__$1);

return statearr_12967;
})();
if(cljs.core.truth_(inst_12926__$1)){
var statearr_12968_14868 = state_12959__$1;
(statearr_12968_14868[(1)] = (29));

} else {
var statearr_12969_14869 = state_12959__$1;
(statearr_12969_14869[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (4))){
var inst_12870 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
if(cljs.core.truth_(inst_12870)){
var statearr_12970_14870 = state_12959__$1;
(statearr_12970_14870[(1)] = (8));

} else {
var statearr_12971_14871 = state_12959__$1;
(statearr_12971_14871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (15))){
var inst_12897 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
if(cljs.core.truth_(inst_12897)){
var statearr_12972_14872 = state_12959__$1;
(statearr_12972_14872[(1)] = (19));

} else {
var statearr_12973_14873 = state_12959__$1;
(statearr_12973_14873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (21))){
var inst_12902 = (state_12959[(12)]);
var inst_12902__$1 = (state_12959[(2)]);
var inst_12903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12902__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12902__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12902__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12959__$1 = (function (){var statearr_12974 = state_12959;
(statearr_12974[(10)] = inst_12903);

(statearr_12974[(13)] = inst_12904);

(statearr_12974[(12)] = inst_12902__$1);

return statearr_12974;
})();
return cljs.core.async.ioc_alts_BANG_(state_12959__$1,(22),inst_12905);
} else {
if((state_val_12960 === (31))){
var inst_12934 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
if(cljs.core.truth_(inst_12934)){
var statearr_12975_14874 = state_12959__$1;
(statearr_12975_14874[(1)] = (32));

} else {
var statearr_12976_14875 = state_12959__$1;
(statearr_12976_14875[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (32))){
var inst_12911 = (state_12959[(14)]);
var state_12959__$1 = state_12959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12959__$1,(35),out,inst_12911);
} else {
if((state_val_12960 === (33))){
var inst_12902 = (state_12959[(12)]);
var inst_12879 = inst_12902;
var state_12959__$1 = (function (){var statearr_12977 = state_12959;
(statearr_12977[(7)] = inst_12879);

return statearr_12977;
})();
var statearr_12978_14876 = state_12959__$1;
(statearr_12978_14876[(2)] = null);

(statearr_12978_14876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (13))){
var inst_12879 = (state_12959[(7)]);
var inst_12886 = inst_12879.cljs$lang$protocol_mask$partition0$;
var inst_12887 = (inst_12886 & (64));
var inst_12888 = inst_12879.cljs$core$ISeq$;
var inst_12889 = (cljs.core.PROTOCOL_SENTINEL === inst_12888);
var inst_12890 = ((inst_12887) || (inst_12889));
var state_12959__$1 = state_12959;
if(cljs.core.truth_(inst_12890)){
var statearr_12979_14884 = state_12959__$1;
(statearr_12979_14884[(1)] = (16));

} else {
var statearr_12980_14885 = state_12959__$1;
(statearr_12980_14885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (22))){
var inst_12911 = (state_12959[(14)]);
var inst_12912 = (state_12959[(11)]);
var inst_12910 = (state_12959[(2)]);
var inst_12911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12910,(0),null);
var inst_12912__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12910,(1),null);
var inst_12913 = (inst_12911__$1 == null);
var inst_12914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12912__$1,change);
var inst_12915 = ((inst_12913) || (inst_12914));
var state_12959__$1 = (function (){var statearr_12981 = state_12959;
(statearr_12981[(14)] = inst_12911__$1);

(statearr_12981[(11)] = inst_12912__$1);

return statearr_12981;
})();
if(cljs.core.truth_(inst_12915)){
var statearr_12982_14886 = state_12959__$1;
(statearr_12982_14886[(1)] = (23));

} else {
var statearr_12983_14887 = state_12959__$1;
(statearr_12983_14887[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (36))){
var inst_12902 = (state_12959[(12)]);
var inst_12879 = inst_12902;
var state_12959__$1 = (function (){var statearr_12984 = state_12959;
(statearr_12984[(7)] = inst_12879);

return statearr_12984;
})();
var statearr_12985_14888 = state_12959__$1;
(statearr_12985_14888[(2)] = null);

(statearr_12985_14888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (29))){
var inst_12926 = (state_12959[(9)]);
var state_12959__$1 = state_12959;
var statearr_12986_14889 = state_12959__$1;
(statearr_12986_14889[(2)] = inst_12926);

(statearr_12986_14889[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (6))){
var state_12959__$1 = state_12959;
var statearr_12987_14890 = state_12959__$1;
(statearr_12987_14890[(2)] = false);

(statearr_12987_14890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (28))){
var inst_12922 = (state_12959[(2)]);
var inst_12923 = calc_state();
var inst_12879 = inst_12923;
var state_12959__$1 = (function (){var statearr_12994 = state_12959;
(statearr_12994[(7)] = inst_12879);

(statearr_12994[(15)] = inst_12922);

return statearr_12994;
})();
var statearr_12995_14891 = state_12959__$1;
(statearr_12995_14891[(2)] = null);

(statearr_12995_14891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (25))){
var inst_12948 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
var statearr_12996_14892 = state_12959__$1;
(statearr_12996_14892[(2)] = inst_12948);

(statearr_12996_14892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (34))){
var inst_12946 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
var statearr_12997_14893 = state_12959__$1;
(statearr_12997_14893[(2)] = inst_12946);

(statearr_12997_14893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (17))){
var state_12959__$1 = state_12959;
var statearr_12998_14894 = state_12959__$1;
(statearr_12998_14894[(2)] = false);

(statearr_12998_14894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (3))){
var state_12959__$1 = state_12959;
var statearr_12999_14895 = state_12959__$1;
(statearr_12999_14895[(2)] = false);

(statearr_12999_14895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (12))){
var inst_12950 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12959__$1,inst_12950);
} else {
if((state_val_12960 === (2))){
var inst_12854 = (state_12959[(8)]);
var inst_12859 = inst_12854.cljs$lang$protocol_mask$partition0$;
var inst_12860 = (inst_12859 & (64));
var inst_12861 = inst_12854.cljs$core$ISeq$;
var inst_12862 = (cljs.core.PROTOCOL_SENTINEL === inst_12861);
var inst_12863 = ((inst_12860) || (inst_12862));
var state_12959__$1 = state_12959;
if(cljs.core.truth_(inst_12863)){
var statearr_13000_14896 = state_12959__$1;
(statearr_13000_14896[(1)] = (5));

} else {
var statearr_13001_14897 = state_12959__$1;
(statearr_13001_14897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (23))){
var inst_12911 = (state_12959[(14)]);
var inst_12917 = (inst_12911 == null);
var state_12959__$1 = state_12959;
if(cljs.core.truth_(inst_12917)){
var statearr_13002_14898 = state_12959__$1;
(statearr_13002_14898[(1)] = (26));

} else {
var statearr_13003_14899 = state_12959__$1;
(statearr_13003_14899[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (35))){
var inst_12937 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
if(cljs.core.truth_(inst_12937)){
var statearr_13004_14900 = state_12959__$1;
(statearr_13004_14900[(1)] = (36));

} else {
var statearr_13005_14901 = state_12959__$1;
(statearr_13005_14901[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (19))){
var inst_12879 = (state_12959[(7)]);
var inst_12899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12879);
var state_12959__$1 = state_12959;
var statearr_13006_14902 = state_12959__$1;
(statearr_13006_14902[(2)] = inst_12899);

(statearr_13006_14902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (11))){
var inst_12879 = (state_12959[(7)]);
var inst_12883 = (inst_12879 == null);
var inst_12884 = cljs.core.not(inst_12883);
var state_12959__$1 = state_12959;
if(inst_12884){
var statearr_13007_14914 = state_12959__$1;
(statearr_13007_14914[(1)] = (13));

} else {
var statearr_13008_14915 = state_12959__$1;
(statearr_13008_14915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (9))){
var inst_12854 = (state_12959[(8)]);
var state_12959__$1 = state_12959;
var statearr_13009_14916 = state_12959__$1;
(statearr_13009_14916[(2)] = inst_12854);

(statearr_13009_14916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (5))){
var state_12959__$1 = state_12959;
var statearr_13010_14917 = state_12959__$1;
(statearr_13010_14917[(2)] = true);

(statearr_13010_14917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (14))){
var state_12959__$1 = state_12959;
var statearr_13011_14918 = state_12959__$1;
(statearr_13011_14918[(2)] = false);

(statearr_13011_14918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (26))){
var inst_12912 = (state_12959[(11)]);
var inst_12919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12912);
var state_12959__$1 = state_12959;
var statearr_13012_14919 = state_12959__$1;
(statearr_13012_14919[(2)] = inst_12919);

(statearr_13012_14919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (16))){
var state_12959__$1 = state_12959;
var statearr_13013_14920 = state_12959__$1;
(statearr_13013_14920[(2)] = true);

(statearr_13013_14920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (38))){
var inst_12942 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
var statearr_13014_14921 = state_12959__$1;
(statearr_13014_14921[(2)] = inst_12942);

(statearr_13014_14921[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (30))){
var inst_12903 = (state_12959[(10)]);
var inst_12912 = (state_12959[(11)]);
var inst_12904 = (state_12959[(13)]);
var inst_12929 = cljs.core.empty_QMARK_(inst_12903);
var inst_12930 = (inst_12904.cljs$core$IFn$_invoke$arity$1 ? inst_12904.cljs$core$IFn$_invoke$arity$1(inst_12912) : inst_12904.call(null,inst_12912));
var inst_12931 = cljs.core.not(inst_12930);
var inst_12932 = ((inst_12929) && (inst_12931));
var state_12959__$1 = state_12959;
var statearr_13016_14922 = state_12959__$1;
(statearr_13016_14922[(2)] = inst_12932);

(statearr_13016_14922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (10))){
var inst_12854 = (state_12959[(8)]);
var inst_12875 = (state_12959[(2)]);
var inst_12876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12875,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12875,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12875,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12879 = inst_12854;
var state_12959__$1 = (function (){var statearr_13017 = state_12959;
(statearr_13017[(7)] = inst_12879);

(statearr_13017[(16)] = inst_12877);

(statearr_13017[(17)] = inst_12878);

(statearr_13017[(18)] = inst_12876);

return statearr_13017;
})();
var statearr_13018_14923 = state_12959__$1;
(statearr_13018_14923[(2)] = null);

(statearr_13018_14923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (18))){
var inst_12894 = (state_12959[(2)]);
var state_12959__$1 = state_12959;
var statearr_13019_14924 = state_12959__$1;
(statearr_13019_14924[(2)] = inst_12894);

(statearr_13019_14924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (37))){
var state_12959__$1 = state_12959;
var statearr_13020_14925 = state_12959__$1;
(statearr_13020_14925[(2)] = null);

(statearr_13020_14925[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12960 === (8))){
var inst_12854 = (state_12959[(8)]);
var inst_12872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12854);
var state_12959__$1 = state_12959;
var statearr_13021_14926 = state_12959__$1;
(statearr_13021_14926[(2)] = inst_12872);

(statearr_13021_14926[(1)] = (10));


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
var statearr_13022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13022[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_13022[(1)] = (1));

return statearr_13022;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_12959){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12959);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13023){var ex__12075__auto__ = e13023;
var statearr_13024_14927 = state_12959;
(statearr_13024_14927[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12959[(4)]))){
var statearr_13025_14928 = state_12959;
(statearr_13025_14928[(1)] = cljs.core.first((state_12959[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14929 = state_12959;
state_12959 = G__14929;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_12959){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_12959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13026 = f__12108__auto__();
(statearr_13026[(6)] = c__12107__auto___14862);

return statearr_13026;
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

var cljs$core$async$Pub$sub_STAR_$dyn_14930 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14930(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14931 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14931(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14940 = (function() {
var G__14941 = null;
var G__14941__1 = (function (p){
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
var G__14941__2 = (function (p,v){
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
G__14941 = function(p,v){
switch(arguments.length){
case 1:
return G__14941__1.call(this,p);
case 2:
return G__14941__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14941.cljs$core$IFn$_invoke$arity$1 = G__14941__1;
G__14941.cljs$core$IFn$_invoke$arity$2 = G__14941__2;
return G__14941;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13035 = arguments.length;
switch (G__13035) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14940(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14940(p,v);
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
var G__13042 = arguments.length;
switch (G__13042) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13040_SHARP_){
if(cljs.core.truth_((p1__13040_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13040_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13040_SHARP_.call(null,topic)))){
return p1__13040_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13040_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13045 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13046){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13046 = meta13046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13047,meta13046__$1){
var self__ = this;
var _13047__$1 = this;
return (new cljs.core.async.t_cljs$core$async13045(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13046__$1));
}));

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13047){
var self__ = this;
var _13047__$1 = this;
return self__.meta13046;
}));

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13045.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13046","meta13046",777251207,null)], null);
}));

(cljs.core.async.t_cljs$core$async13045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13045");

(cljs.core.async.t_cljs$core$async13045.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13045.
 */
cljs.core.async.__GT_t_cljs$core$async13045 = (function cljs$core$async$__GT_t_cljs$core$async13045(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13046){
return (new cljs.core.async.t_cljs$core$async13045(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13046));
});

}

return (new cljs.core.async.t_cljs$core$async13045(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13132){
var state_val_13133 = (state_13132[(1)]);
if((state_val_13133 === (7))){
var inst_13128 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
var statearr_13134_14945 = state_13132__$1;
(statearr_13134_14945[(2)] = inst_13128);

(statearr_13134_14945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (20))){
var state_13132__$1 = state_13132;
var statearr_13135_14947 = state_13132__$1;
(statearr_13135_14947[(2)] = null);

(statearr_13135_14947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (1))){
var state_13132__$1 = state_13132;
var statearr_13136_14948 = state_13132__$1;
(statearr_13136_14948[(2)] = null);

(statearr_13136_14948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (24))){
var inst_13102 = (state_13132[(7)]);
var inst_13111 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13102);
var state_13132__$1 = state_13132;
var statearr_13137_14949 = state_13132__$1;
(statearr_13137_14949[(2)] = inst_13111);

(statearr_13137_14949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (4))){
var inst_13054 = (state_13132[(8)]);
var inst_13054__$1 = (state_13132[(2)]);
var inst_13055 = (inst_13054__$1 == null);
var state_13132__$1 = (function (){var statearr_13138 = state_13132;
(statearr_13138[(8)] = inst_13054__$1);

return statearr_13138;
})();
if(cljs.core.truth_(inst_13055)){
var statearr_13139_14951 = state_13132__$1;
(statearr_13139_14951[(1)] = (5));

} else {
var statearr_13140_14952 = state_13132__$1;
(statearr_13140_14952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (15))){
var inst_13096 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
var statearr_13148_14953 = state_13132__$1;
(statearr_13148_14953[(2)] = inst_13096);

(statearr_13148_14953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (21))){
var inst_13116 = (state_13132[(2)]);
var state_13132__$1 = (function (){var statearr_13149 = state_13132;
(statearr_13149[(9)] = inst_13116);

return statearr_13149;
})();
var statearr_13150_14955 = state_13132__$1;
(statearr_13150_14955[(2)] = null);

(statearr_13150_14955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (13))){
var inst_13078 = (state_13132[(10)]);
var inst_13080 = cljs.core.chunked_seq_QMARK_(inst_13078);
var state_13132__$1 = state_13132;
if(inst_13080){
var statearr_13151_14956 = state_13132__$1;
(statearr_13151_14956[(1)] = (16));

} else {
var statearr_13152_14957 = state_13132__$1;
(statearr_13152_14957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (22))){
var inst_13108 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
if(cljs.core.truth_(inst_13108)){
var statearr_13153_14958 = state_13132__$1;
(statearr_13153_14958[(1)] = (23));

} else {
var statearr_13154_14959 = state_13132__$1;
(statearr_13154_14959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (6))){
var inst_13054 = (state_13132[(8)]);
var inst_13104 = (state_13132[(11)]);
var inst_13102 = (state_13132[(7)]);
var inst_13102__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13054) : topic_fn.call(null,inst_13054));
var inst_13103 = cljs.core.deref(mults);
var inst_13104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13103,inst_13102__$1);
var state_13132__$1 = (function (){var statearr_13155 = state_13132;
(statearr_13155[(11)] = inst_13104__$1);

(statearr_13155[(7)] = inst_13102__$1);

return statearr_13155;
})();
if(cljs.core.truth_(inst_13104__$1)){
var statearr_13156_14961 = state_13132__$1;
(statearr_13156_14961[(1)] = (19));

} else {
var statearr_13157_14962 = state_13132__$1;
(statearr_13157_14962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (25))){
var inst_13113 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
var statearr_13158_14963 = state_13132__$1;
(statearr_13158_14963[(2)] = inst_13113);

(statearr_13158_14963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (17))){
var inst_13078 = (state_13132[(10)]);
var inst_13087 = cljs.core.first(inst_13078);
var inst_13088 = cljs.core.async.muxch_STAR_(inst_13087);
var inst_13089 = cljs.core.async.close_BANG_(inst_13088);
var inst_13090 = cljs.core.next(inst_13078);
var inst_13064 = inst_13090;
var inst_13065 = null;
var inst_13066 = (0);
var inst_13067 = (0);
var state_13132__$1 = (function (){var statearr_13159 = state_13132;
(statearr_13159[(12)] = inst_13066);

(statearr_13159[(13)] = inst_13089);

(statearr_13159[(14)] = inst_13064);

(statearr_13159[(15)] = inst_13065);

(statearr_13159[(16)] = inst_13067);

return statearr_13159;
})();
var statearr_13160_14965 = state_13132__$1;
(statearr_13160_14965[(2)] = null);

(statearr_13160_14965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (3))){
var inst_13130 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13132__$1,inst_13130);
} else {
if((state_val_13133 === (12))){
var inst_13098 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
var statearr_13161_14967 = state_13132__$1;
(statearr_13161_14967[(2)] = inst_13098);

(statearr_13161_14967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (2))){
var state_13132__$1 = state_13132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13132__$1,(4),ch);
} else {
if((state_val_13133 === (23))){
var state_13132__$1 = state_13132;
var statearr_13177_14968 = state_13132__$1;
(statearr_13177_14968[(2)] = null);

(statearr_13177_14968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (19))){
var inst_13054 = (state_13132[(8)]);
var inst_13104 = (state_13132[(11)]);
var inst_13106 = cljs.core.async.muxch_STAR_(inst_13104);
var state_13132__$1 = state_13132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13132__$1,(22),inst_13106,inst_13054);
} else {
if((state_val_13133 === (11))){
var inst_13078 = (state_13132[(10)]);
var inst_13064 = (state_13132[(14)]);
var inst_13078__$1 = cljs.core.seq(inst_13064);
var state_13132__$1 = (function (){var statearr_13182 = state_13132;
(statearr_13182[(10)] = inst_13078__$1);

return statearr_13182;
})();
if(inst_13078__$1){
var statearr_13183_14969 = state_13132__$1;
(statearr_13183_14969[(1)] = (13));

} else {
var statearr_13184_14970 = state_13132__$1;
(statearr_13184_14970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (9))){
var inst_13100 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
var statearr_13224_14971 = state_13132__$1;
(statearr_13224_14971[(2)] = inst_13100);

(statearr_13224_14971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (5))){
var inst_13061 = cljs.core.deref(mults);
var inst_13062 = cljs.core.vals(inst_13061);
var inst_13063 = cljs.core.seq(inst_13062);
var inst_13064 = inst_13063;
var inst_13065 = null;
var inst_13066 = (0);
var inst_13067 = (0);
var state_13132__$1 = (function (){var statearr_13225 = state_13132;
(statearr_13225[(12)] = inst_13066);

(statearr_13225[(14)] = inst_13064);

(statearr_13225[(15)] = inst_13065);

(statearr_13225[(16)] = inst_13067);

return statearr_13225;
})();
var statearr_13226_14972 = state_13132__$1;
(statearr_13226_14972[(2)] = null);

(statearr_13226_14972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (14))){
var state_13132__$1 = state_13132;
var statearr_13230_14973 = state_13132__$1;
(statearr_13230_14973[(2)] = null);

(statearr_13230_14973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (16))){
var inst_13078 = (state_13132[(10)]);
var inst_13082 = cljs.core.chunk_first(inst_13078);
var inst_13083 = cljs.core.chunk_rest(inst_13078);
var inst_13084 = cljs.core.count(inst_13082);
var inst_13064 = inst_13083;
var inst_13065 = inst_13082;
var inst_13066 = inst_13084;
var inst_13067 = (0);
var state_13132__$1 = (function (){var statearr_13231 = state_13132;
(statearr_13231[(12)] = inst_13066);

(statearr_13231[(14)] = inst_13064);

(statearr_13231[(15)] = inst_13065);

(statearr_13231[(16)] = inst_13067);

return statearr_13231;
})();
var statearr_13232_14974 = state_13132__$1;
(statearr_13232_14974[(2)] = null);

(statearr_13232_14974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (10))){
var inst_13066 = (state_13132[(12)]);
var inst_13064 = (state_13132[(14)]);
var inst_13065 = (state_13132[(15)]);
var inst_13067 = (state_13132[(16)]);
var inst_13072 = cljs.core._nth(inst_13065,inst_13067);
var inst_13073 = cljs.core.async.muxch_STAR_(inst_13072);
var inst_13074 = cljs.core.async.close_BANG_(inst_13073);
var inst_13075 = (inst_13067 + (1));
var tmp13227 = inst_13066;
var tmp13228 = inst_13064;
var tmp13229 = inst_13065;
var inst_13064__$1 = tmp13228;
var inst_13065__$1 = tmp13229;
var inst_13066__$1 = tmp13227;
var inst_13067__$1 = inst_13075;
var state_13132__$1 = (function (){var statearr_13272 = state_13132;
(statearr_13272[(12)] = inst_13066__$1);

(statearr_13272[(14)] = inst_13064__$1);

(statearr_13272[(17)] = inst_13074);

(statearr_13272[(15)] = inst_13065__$1);

(statearr_13272[(16)] = inst_13067__$1);

return statearr_13272;
})();
var statearr_13273_14975 = state_13132__$1;
(statearr_13273_14975[(2)] = null);

(statearr_13273_14975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (18))){
var inst_13093 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
var statearr_13274_14976 = state_13132__$1;
(statearr_13274_14976[(2)] = inst_13093);

(statearr_13274_14976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (8))){
var inst_13066 = (state_13132[(12)]);
var inst_13067 = (state_13132[(16)]);
var inst_13069 = (inst_13067 < inst_13066);
var inst_13070 = inst_13069;
var state_13132__$1 = state_13132;
if(cljs.core.truth_(inst_13070)){
var statearr_13275_14977 = state_13132__$1;
(statearr_13275_14977[(1)] = (10));

} else {
var statearr_13276_14978 = state_13132__$1;
(statearr_13276_14978[(1)] = (11));

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
var statearr_13277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13277[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13277[(1)] = (1));

return statearr_13277;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13132){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13132);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13278){var ex__12075__auto__ = e13278;
var statearr_13279_14979 = state_13132;
(statearr_13279_14979[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13132[(4)]))){
var statearr_13280_14980 = state_13132;
(statearr_13280_14980[(1)] = cljs.core.first((state_13132[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14981 = state_13132;
state_13132 = G__14981;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13281 = f__12108__auto__();
(statearr_13281[(6)] = c__12107__auto___14944);

return statearr_13281;
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
var G__13283 = arguments.length;
switch (G__13283) {
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
var G__13311 = arguments.length;
switch (G__13311) {
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
var G__13313 = arguments.length;
switch (G__13313) {
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
var c__12107__auto___14990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13465){
var state_val_13466 = (state_13465[(1)]);
if((state_val_13466 === (7))){
var state_13465__$1 = state_13465;
var statearr_13467_14991 = state_13465__$1;
(statearr_13467_14991[(2)] = null);

(statearr_13467_14991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (1))){
var state_13465__$1 = state_13465;
var statearr_13468_14993 = state_13465__$1;
(statearr_13468_14993[(2)] = null);

(statearr_13468_14993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (4))){
var inst_13317 = (state_13465[(7)]);
var inst_13316 = (state_13465[(8)]);
var inst_13370 = (inst_13317 < inst_13316);
var state_13465__$1 = state_13465;
if(cljs.core.truth_(inst_13370)){
var statearr_13469_14994 = state_13465__$1;
(statearr_13469_14994[(1)] = (6));

} else {
var statearr_13470_14995 = state_13465__$1;
(statearr_13470_14995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (15))){
var inst_13451 = (state_13465[(9)]);
var inst_13456 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13451);
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13465__$1,(17),out,inst_13456);
} else {
if((state_val_13466 === (13))){
var inst_13451 = (state_13465[(9)]);
var inst_13451__$1 = (state_13465[(2)]);
var inst_13452 = cljs.core.some(cljs.core.nil_QMARK_,inst_13451__$1);
var state_13465__$1 = (function (){var statearr_13471 = state_13465;
(statearr_13471[(9)] = inst_13451__$1);

return statearr_13471;
})();
if(cljs.core.truth_(inst_13452)){
var statearr_13472_14997 = state_13465__$1;
(statearr_13472_14997[(1)] = (14));

} else {
var statearr_13473_14998 = state_13465__$1;
(statearr_13473_14998[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (6))){
var state_13465__$1 = state_13465;
var statearr_13474_14999 = state_13465__$1;
(statearr_13474_14999[(2)] = null);

(statearr_13474_14999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (17))){
var inst_13458 = (state_13465[(2)]);
var state_13465__$1 = (function (){var statearr_13514 = state_13465;
(statearr_13514[(10)] = inst_13458);

return statearr_13514;
})();
var statearr_13515_15006 = state_13465__$1;
(statearr_13515_15006[(2)] = null);

(statearr_13515_15006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (3))){
var inst_13463 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13465__$1,inst_13463);
} else {
if((state_val_13466 === (12))){
var _ = (function (){var statearr_13516 = state_13465;
(statearr_13516[(4)] = cljs.core.rest((state_13465[(4)])));

return statearr_13516;
})();
var state_13465__$1 = state_13465;
var ex13513 = (state_13465__$1[(2)]);
var statearr_13517_15007 = state_13465__$1;
(statearr_13517_15007[(5)] = ex13513);


if((ex13513 instanceof Object)){
var statearr_13518_15008 = state_13465__$1;
(statearr_13518_15008[(1)] = (11));

(statearr_13518_15008[(5)] = null);

} else {
throw ex13513;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (2))){
var inst_13315 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13316 = cnt;
var inst_13317 = (0);
var state_13465__$1 = (function (){var statearr_13519 = state_13465;
(statearr_13519[(11)] = inst_13315);

(statearr_13519[(7)] = inst_13317);

(statearr_13519[(8)] = inst_13316);

return statearr_13519;
})();
var statearr_13520_15009 = state_13465__$1;
(statearr_13520_15009[(2)] = null);

(statearr_13520_15009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (11))){
var inst_13372 = (state_13465[(2)]);
var inst_13373 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13465__$1 = (function (){var statearr_13521 = state_13465;
(statearr_13521[(12)] = inst_13372);

return statearr_13521;
})();
var statearr_13522_15010 = state_13465__$1;
(statearr_13522_15010[(2)] = inst_13373);

(statearr_13522_15010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (9))){
var inst_13317 = (state_13465[(7)]);
var _ = (function (){var statearr_13523 = state_13465;
(statearr_13523[(4)] = cljs.core.cons((12),(state_13465[(4)])));

return statearr_13523;
})();
var inst_13437 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13317) : chs__$1.call(null,inst_13317));
var inst_13438 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13317) : done.call(null,inst_13317));
var inst_13439 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13437,inst_13438);
var ___$1 = (function (){var statearr_13524 = state_13465;
(statearr_13524[(4)] = cljs.core.rest((state_13465[(4)])));

return statearr_13524;
})();
var state_13465__$1 = state_13465;
var statearr_13525_15011 = state_13465__$1;
(statearr_13525_15011[(2)] = inst_13439);

(statearr_13525_15011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (5))){
var inst_13449 = (state_13465[(2)]);
var state_13465__$1 = (function (){var statearr_13526 = state_13465;
(statearr_13526[(13)] = inst_13449);

return statearr_13526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13465__$1,(13),dchan);
} else {
if((state_val_13466 === (14))){
var inst_13454 = cljs.core.async.close_BANG_(out);
var state_13465__$1 = state_13465;
var statearr_13527_15012 = state_13465__$1;
(statearr_13527_15012[(2)] = inst_13454);

(statearr_13527_15012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (16))){
var inst_13461 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
var statearr_13530_15013 = state_13465__$1;
(statearr_13530_15013[(2)] = inst_13461);

(statearr_13530_15013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (10))){
var inst_13317 = (state_13465[(7)]);
var inst_13442 = (state_13465[(2)]);
var inst_13443 = (inst_13317 + (1));
var inst_13317__$1 = inst_13443;
var state_13465__$1 = (function (){var statearr_13534 = state_13465;
(statearr_13534[(7)] = inst_13317__$1);

(statearr_13534[(14)] = inst_13442);

return statearr_13534;
})();
var statearr_13535_15014 = state_13465__$1;
(statearr_13535_15014[(2)] = null);

(statearr_13535_15014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (8))){
var inst_13447 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
var statearr_13536_15015 = state_13465__$1;
(statearr_13536_15015[(2)] = inst_13447);

(statearr_13536_15015[(1)] = (5));


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
var statearr_13537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13537[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13537[(1)] = (1));

return statearr_13537;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13465){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13465);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13538){var ex__12075__auto__ = e13538;
var statearr_13539_15016 = state_13465;
(statearr_13539_15016[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13465[(4)]))){
var statearr_13540_15017 = state_13465;
(statearr_13540_15017[(1)] = cljs.core.first((state_13465[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15018 = state_13465;
state_13465 = G__15018;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13541 = f__12108__auto__();
(statearr_13541[(6)] = c__12107__auto___14990);

return statearr_13541;
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
var G__13544 = arguments.length;
switch (G__13544) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13591){
var state_val_13593 = (state_13591[(1)]);
if((state_val_13593 === (7))){
var inst_13562 = (state_13591[(7)]);
var inst_13561 = (state_13591[(8)]);
var inst_13561__$1 = (state_13591[(2)]);
var inst_13562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13561__$1,(0),null);
var inst_13566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13561__$1,(1),null);
var inst_13567 = (inst_13562__$1 == null);
var state_13591__$1 = (function (){var statearr_13600 = state_13591;
(statearr_13600[(9)] = inst_13566);

(statearr_13600[(7)] = inst_13562__$1);

(statearr_13600[(8)] = inst_13561__$1);

return statearr_13600;
})();
if(cljs.core.truth_(inst_13567)){
var statearr_13602_15021 = state_13591__$1;
(statearr_13602_15021[(1)] = (8));

} else {
var statearr_13603_15022 = state_13591__$1;
(statearr_13603_15022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (1))){
var inst_13549 = cljs.core.vec(chs);
var inst_13550 = inst_13549;
var state_13591__$1 = (function (){var statearr_13606 = state_13591;
(statearr_13606[(10)] = inst_13550);

return statearr_13606;
})();
var statearr_13609_15027 = state_13591__$1;
(statearr_13609_15027[(2)] = null);

(statearr_13609_15027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (4))){
var inst_13550 = (state_13591[(10)]);
var state_13591__$1 = state_13591;
return cljs.core.async.ioc_alts_BANG_(state_13591__$1,(7),inst_13550);
} else {
if((state_val_13593 === (6))){
var inst_13587 = (state_13591[(2)]);
var state_13591__$1 = state_13591;
var statearr_13613_15028 = state_13591__$1;
(statearr_13613_15028[(2)] = inst_13587);

(statearr_13613_15028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (3))){
var inst_13589 = (state_13591[(2)]);
var state_13591__$1 = state_13591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13591__$1,inst_13589);
} else {
if((state_val_13593 === (2))){
var inst_13550 = (state_13591[(10)]);
var inst_13553 = cljs.core.count(inst_13550);
var inst_13554 = (inst_13553 > (0));
var state_13591__$1 = state_13591;
if(cljs.core.truth_(inst_13554)){
var statearr_13619_15029 = state_13591__$1;
(statearr_13619_15029[(1)] = (4));

} else {
var statearr_13620_15030 = state_13591__$1;
(statearr_13620_15030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (11))){
var inst_13550 = (state_13591[(10)]);
var inst_13579 = (state_13591[(2)]);
var tmp13616 = inst_13550;
var inst_13550__$1 = tmp13616;
var state_13591__$1 = (function (){var statearr_13623 = state_13591;
(statearr_13623[(10)] = inst_13550__$1);

(statearr_13623[(11)] = inst_13579);

return statearr_13623;
})();
var statearr_13626_15031 = state_13591__$1;
(statearr_13626_15031[(2)] = null);

(statearr_13626_15031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (9))){
var inst_13562 = (state_13591[(7)]);
var state_13591__$1 = state_13591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13591__$1,(11),out,inst_13562);
} else {
if((state_val_13593 === (5))){
var inst_13585 = cljs.core.async.close_BANG_(out);
var state_13591__$1 = state_13591;
var statearr_13630_15032 = state_13591__$1;
(statearr_13630_15032[(2)] = inst_13585);

(statearr_13630_15032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (10))){
var inst_13582 = (state_13591[(2)]);
var state_13591__$1 = state_13591;
var statearr_13631_15033 = state_13591__$1;
(statearr_13631_15033[(2)] = inst_13582);

(statearr_13631_15033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (8))){
var inst_13550 = (state_13591[(10)]);
var inst_13566 = (state_13591[(9)]);
var inst_13562 = (state_13591[(7)]);
var inst_13561 = (state_13591[(8)]);
var inst_13571 = (function (){var cs = inst_13550;
var vec__13556 = inst_13561;
var v = inst_13562;
var c = inst_13566;
return (function (p1__13542_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13542_SHARP_);
});
})();
var inst_13575 = cljs.core.filterv(inst_13571,inst_13550);
var inst_13550__$1 = inst_13575;
var state_13591__$1 = (function (){var statearr_13632 = state_13591;
(statearr_13632[(10)] = inst_13550__$1);

return statearr_13632;
})();
var statearr_13633_15034 = state_13591__$1;
(statearr_13633_15034[(2)] = null);

(statearr_13633_15034[(1)] = (2));


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
var statearr_13634 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13634[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13634[(1)] = (1));

return statearr_13634;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13591){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13591);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13635){var ex__12075__auto__ = e13635;
var statearr_13636_15035 = state_13591;
(statearr_13636_15035[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13591[(4)]))){
var statearr_13637_15036 = state_13591;
(statearr_13637_15036[(1)] = cljs.core.first((state_13591[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15037 = state_13591;
state_13591 = G__15037;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13638 = f__12108__auto__();
(statearr_13638[(6)] = c__12107__auto___15020);

return statearr_13638;
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
var G__13643 = arguments.length;
switch (G__13643) {
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
var c__12107__auto___15039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13697){
var state_val_13698 = (state_13697[(1)]);
if((state_val_13698 === (7))){
var inst_13677 = (state_13697[(7)]);
var inst_13677__$1 = (state_13697[(2)]);
var inst_13678 = (inst_13677__$1 == null);
var inst_13679 = cljs.core.not(inst_13678);
var state_13697__$1 = (function (){var statearr_13699 = state_13697;
(statearr_13699[(7)] = inst_13677__$1);

return statearr_13699;
})();
if(inst_13679){
var statearr_13700_15049 = state_13697__$1;
(statearr_13700_15049[(1)] = (8));

} else {
var statearr_13701_15050 = state_13697__$1;
(statearr_13701_15050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (1))){
var inst_13649 = (0);
var state_13697__$1 = (function (){var statearr_13702 = state_13697;
(statearr_13702[(8)] = inst_13649);

return statearr_13702;
})();
var statearr_13703_15051 = state_13697__$1;
(statearr_13703_15051[(2)] = null);

(statearr_13703_15051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (4))){
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13697__$1,(7),ch);
} else {
if((state_val_13698 === (6))){
var inst_13690 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13704_15052 = state_13697__$1;
(statearr_13704_15052[(2)] = inst_13690);

(statearr_13704_15052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (3))){
var inst_13692 = (state_13697[(2)]);
var inst_13695 = cljs.core.async.close_BANG_(out);
var state_13697__$1 = (function (){var statearr_13705 = state_13697;
(statearr_13705[(9)] = inst_13692);

return statearr_13705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13697__$1,inst_13695);
} else {
if((state_val_13698 === (2))){
var inst_13649 = (state_13697[(8)]);
var inst_13672 = (inst_13649 < n);
var state_13697__$1 = state_13697;
if(cljs.core.truth_(inst_13672)){
var statearr_13706_15053 = state_13697__$1;
(statearr_13706_15053[(1)] = (4));

} else {
var statearr_13707_15054 = state_13697__$1;
(statearr_13707_15054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (11))){
var inst_13649 = (state_13697[(8)]);
var inst_13682 = (state_13697[(2)]);
var inst_13683 = (inst_13649 + (1));
var inst_13649__$1 = inst_13683;
var state_13697__$1 = (function (){var statearr_13708 = state_13697;
(statearr_13708[(8)] = inst_13649__$1);

(statearr_13708[(10)] = inst_13682);

return statearr_13708;
})();
var statearr_13709_15055 = state_13697__$1;
(statearr_13709_15055[(2)] = null);

(statearr_13709_15055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (9))){
var state_13697__$1 = state_13697;
var statearr_13710_15056 = state_13697__$1;
(statearr_13710_15056[(2)] = null);

(statearr_13710_15056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (5))){
var state_13697__$1 = state_13697;
var statearr_13711_15057 = state_13697__$1;
(statearr_13711_15057[(2)] = null);

(statearr_13711_15057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (10))){
var inst_13687 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13712_15058 = state_13697__$1;
(statearr_13712_15058[(2)] = inst_13687);

(statearr_13712_15058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (8))){
var inst_13677 = (state_13697[(7)]);
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13697__$1,(11),out,inst_13677);
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
var statearr_13715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13715[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13715[(1)] = (1));

return statearr_13715;
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
}catch (e13716){var ex__12075__auto__ = e13716;
var statearr_13717_15066 = state_13697;
(statearr_13717_15066[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13697[(4)]))){
var statearr_13719_15067 = state_13697;
(statearr_13719_15067[(1)] = cljs.core.first((state_13697[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15068 = state_13697;
state_13697 = G__15068;
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
var state__12109__auto__ = (function (){var statearr_13724 = f__12108__auto__();
(statearr_13724[(6)] = c__12107__auto___15039);

return statearr_13724;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13737 = (function (f,ch,meta13738){
this.f = f;
this.ch = ch;
this.meta13738 = meta13738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13739,meta13738__$1){
var self__ = this;
var _13739__$1 = this;
return (new cljs.core.async.t_cljs$core$async13737(self__.f,self__.ch,meta13738__$1));
}));

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13739){
var self__ = this;
var _13739__$1 = this;
return self__.meta13738;
}));

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13769 = (function (f,ch,meta13738,_,fn1,meta13770){
this.f = f;
this.ch = ch;
this.meta13738 = meta13738;
this._ = _;
this.fn1 = fn1;
this.meta13770 = meta13770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13771,meta13770__$1){
var self__ = this;
var _13771__$1 = this;
return (new cljs.core.async.t_cljs$core$async13769(self__.f,self__.ch,self__.meta13738,self__._,self__.fn1,meta13770__$1));
}));

(cljs.core.async.t_cljs$core$async13769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13771){
var self__ = this;
var _13771__$1 = this;
return self__.meta13770;
}));

(cljs.core.async.t_cljs$core$async13769.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13769.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13730_SHARP_){
var G__13795 = (((p1__13730_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13730_SHARP_) : self__.f.call(null,p1__13730_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13795) : f1.call(null,G__13795));
});
}));

(cljs.core.async.t_cljs$core$async13769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13738","meta13738",-371811357,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13737","cljs.core.async/t_cljs$core$async13737",-433461849,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13770","meta13770",-679729552,null)], null);
}));

(cljs.core.async.t_cljs$core$async13769.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13769");

(cljs.core.async.t_cljs$core$async13769.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13769");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13769.
 */
cljs.core.async.__GT_t_cljs$core$async13769 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13769(f__$1,ch__$1,meta13738__$1,___$2,fn1__$1,meta13770){
return (new cljs.core.async.t_cljs$core$async13769(f__$1,ch__$1,meta13738__$1,___$2,fn1__$1,meta13770));
});

}

return (new cljs.core.async.t_cljs$core$async13769(self__.f,self__.ch,self__.meta13738,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13812 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13812) : self__.f.call(null,G__13812));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13738","meta13738",-371811357,null)], null);
}));

(cljs.core.async.t_cljs$core$async13737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13737");

(cljs.core.async.t_cljs$core$async13737.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13737.
 */
cljs.core.async.__GT_t_cljs$core$async13737 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13737(f__$1,ch__$1,meta13738){
return (new cljs.core.async.t_cljs$core$async13737(f__$1,ch__$1,meta13738));
});

}

return (new cljs.core.async.t_cljs$core$async13737(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13813 = (function (f,ch,meta13814){
this.f = f;
this.ch = ch;
this.meta13814 = meta13814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13815,meta13814__$1){
var self__ = this;
var _13815__$1 = this;
return (new cljs.core.async.t_cljs$core$async13813(self__.f,self__.ch,meta13814__$1));
}));

(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13815){
var self__ = this;
var _13815__$1 = this;
return self__.meta13814;
}));

(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13814","meta13814",1050296719,null)], null);
}));

(cljs.core.async.t_cljs$core$async13813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13813");

(cljs.core.async.t_cljs$core$async13813.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13813.
 */
cljs.core.async.__GT_t_cljs$core$async13813 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13813(f__$1,ch__$1,meta13814){
return (new cljs.core.async.t_cljs$core$async13813(f__$1,ch__$1,meta13814));
});

}

return (new cljs.core.async.t_cljs$core$async13813(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13847 = (function (p,ch,meta13848){
this.p = p;
this.ch = ch;
this.meta13848 = meta13848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13849,meta13848__$1){
var self__ = this;
var _13849__$1 = this;
return (new cljs.core.async.t_cljs$core$async13847(self__.p,self__.ch,meta13848__$1));
}));

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13849){
var self__ = this;
var _13849__$1 = this;
return self__.meta13848;
}));

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13848","meta13848",-938697343,null)], null);
}));

(cljs.core.async.t_cljs$core$async13847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13847");

(cljs.core.async.t_cljs$core$async13847.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13847.
 */
cljs.core.async.__GT_t_cljs$core$async13847 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13847(p__$1,ch__$1,meta13848){
return (new cljs.core.async.t_cljs$core$async13847(p__$1,ch__$1,meta13848));
});

}

return (new cljs.core.async.t_cljs$core$async13847(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13866 = arguments.length;
switch (G__13866) {
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
var c__12107__auto___15074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13895){
var state_val_13896 = (state_13895[(1)]);
if((state_val_13896 === (7))){
var inst_13891 = (state_13895[(2)]);
var state_13895__$1 = state_13895;
var statearr_13898_15075 = state_13895__$1;
(statearr_13898_15075[(2)] = inst_13891);

(statearr_13898_15075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (1))){
var state_13895__$1 = state_13895;
var statearr_13899_15076 = state_13895__$1;
(statearr_13899_15076[(2)] = null);

(statearr_13899_15076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (4))){
var inst_13877 = (state_13895[(7)]);
var inst_13877__$1 = (state_13895[(2)]);
var inst_13878 = (inst_13877__$1 == null);
var state_13895__$1 = (function (){var statearr_13901 = state_13895;
(statearr_13901[(7)] = inst_13877__$1);

return statearr_13901;
})();
if(cljs.core.truth_(inst_13878)){
var statearr_13902_15077 = state_13895__$1;
(statearr_13902_15077[(1)] = (5));

} else {
var statearr_13903_15091 = state_13895__$1;
(statearr_13903_15091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (6))){
var inst_13877 = (state_13895[(7)]);
var inst_13882 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13877) : p.call(null,inst_13877));
var state_13895__$1 = state_13895;
if(cljs.core.truth_(inst_13882)){
var statearr_13904_15092 = state_13895__$1;
(statearr_13904_15092[(1)] = (8));

} else {
var statearr_13905_15093 = state_13895__$1;
(statearr_13905_15093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (3))){
var inst_13893 = (state_13895[(2)]);
var state_13895__$1 = state_13895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13895__$1,inst_13893);
} else {
if((state_val_13896 === (2))){
var state_13895__$1 = state_13895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13895__$1,(4),ch);
} else {
if((state_val_13896 === (11))){
var inst_13885 = (state_13895[(2)]);
var state_13895__$1 = state_13895;
var statearr_13906_15094 = state_13895__$1;
(statearr_13906_15094[(2)] = inst_13885);

(statearr_13906_15094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (9))){
var state_13895__$1 = state_13895;
var statearr_13907_15095 = state_13895__$1;
(statearr_13907_15095[(2)] = null);

(statearr_13907_15095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (5))){
var inst_13880 = cljs.core.async.close_BANG_(out);
var state_13895__$1 = state_13895;
var statearr_13908_15096 = state_13895__$1;
(statearr_13908_15096[(2)] = inst_13880);

(statearr_13908_15096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (10))){
var inst_13888 = (state_13895[(2)]);
var state_13895__$1 = (function (){var statearr_13909 = state_13895;
(statearr_13909[(8)] = inst_13888);

return statearr_13909;
})();
var statearr_13910_15097 = state_13895__$1;
(statearr_13910_15097[(2)] = null);

(statearr_13910_15097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (8))){
var inst_13877 = (state_13895[(7)]);
var state_13895__$1 = state_13895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13895__$1,(11),out,inst_13877);
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
var statearr_13911 = [null,null,null,null,null,null,null,null,null];
(statearr_13911[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13911[(1)] = (1));

return statearr_13911;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13895){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13895);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13912){var ex__12075__auto__ = e13912;
var statearr_13913_15098 = state_13895;
(statearr_13913_15098[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13895[(4)]))){
var statearr_13914_15099 = state_13895;
(statearr_13914_15099[(1)] = cljs.core.first((state_13895[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15100 = state_13895;
state_13895 = G__15100;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13915 = f__12108__auto__();
(statearr_13915[(6)] = c__12107__auto___15074);

return statearr_13915;
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
var G__13917 = arguments.length;
switch (G__13917) {
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
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13980){
var state_val_13981 = (state_13980[(1)]);
if((state_val_13981 === (7))){
var inst_13976 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_13985_15102 = state_13980__$1;
(statearr_13985_15102[(2)] = inst_13976);

(statearr_13985_15102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (20))){
var inst_13946 = (state_13980[(7)]);
var inst_13957 = (state_13980[(2)]);
var inst_13958 = cljs.core.next(inst_13946);
var inst_13932 = inst_13958;
var inst_13933 = null;
var inst_13934 = (0);
var inst_13935 = (0);
var state_13980__$1 = (function (){var statearr_13989 = state_13980;
(statearr_13989[(8)] = inst_13932);

(statearr_13989[(9)] = inst_13935);

(statearr_13989[(10)] = inst_13957);

(statearr_13989[(11)] = inst_13934);

(statearr_13989[(12)] = inst_13933);

return statearr_13989;
})();
var statearr_13990_15103 = state_13980__$1;
(statearr_13990_15103[(2)] = null);

(statearr_13990_15103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (1))){
var state_13980__$1 = state_13980;
var statearr_13993_15104 = state_13980__$1;
(statearr_13993_15104[(2)] = null);

(statearr_13993_15104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (4))){
var inst_13920 = (state_13980[(13)]);
var inst_13920__$1 = (state_13980[(2)]);
var inst_13922 = (inst_13920__$1 == null);
var state_13980__$1 = (function (){var statearr_13996 = state_13980;
(statearr_13996[(13)] = inst_13920__$1);

return statearr_13996;
})();
if(cljs.core.truth_(inst_13922)){
var statearr_13997_15105 = state_13980__$1;
(statearr_13997_15105[(1)] = (5));

} else {
var statearr_13999_15106 = state_13980__$1;
(statearr_13999_15106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (15))){
var state_13980__$1 = state_13980;
var statearr_14003_15107 = state_13980__$1;
(statearr_14003_15107[(2)] = null);

(statearr_14003_15107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (21))){
var state_13980__$1 = state_13980;
var statearr_14004_15108 = state_13980__$1;
(statearr_14004_15108[(2)] = null);

(statearr_14004_15108[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (13))){
var inst_13932 = (state_13980[(8)]);
var inst_13935 = (state_13980[(9)]);
var inst_13934 = (state_13980[(11)]);
var inst_13933 = (state_13980[(12)]);
var inst_13942 = (state_13980[(2)]);
var inst_13943 = (inst_13935 + (1));
var tmp14000 = inst_13932;
var tmp14001 = inst_13934;
var tmp14002 = inst_13933;
var inst_13932__$1 = tmp14000;
var inst_13933__$1 = tmp14002;
var inst_13934__$1 = tmp14001;
var inst_13935__$1 = inst_13943;
var state_13980__$1 = (function (){var statearr_14005 = state_13980;
(statearr_14005[(8)] = inst_13932__$1);

(statearr_14005[(9)] = inst_13935__$1);

(statearr_14005[(11)] = inst_13934__$1);

(statearr_14005[(14)] = inst_13942);

(statearr_14005[(12)] = inst_13933__$1);

return statearr_14005;
})();
var statearr_14006_15115 = state_13980__$1;
(statearr_14006_15115[(2)] = null);

(statearr_14006_15115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (22))){
var state_13980__$1 = state_13980;
var statearr_14007_15116 = state_13980__$1;
(statearr_14007_15116[(2)] = null);

(statearr_14007_15116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (6))){
var inst_13920 = (state_13980[(13)]);
var inst_13930 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13920) : f.call(null,inst_13920));
var inst_13931 = cljs.core.seq(inst_13930);
var inst_13932 = inst_13931;
var inst_13933 = null;
var inst_13934 = (0);
var inst_13935 = (0);
var state_13980__$1 = (function (){var statearr_14015 = state_13980;
(statearr_14015[(8)] = inst_13932);

(statearr_14015[(9)] = inst_13935);

(statearr_14015[(11)] = inst_13934);

(statearr_14015[(12)] = inst_13933);

return statearr_14015;
})();
var statearr_14021_15117 = state_13980__$1;
(statearr_14021_15117[(2)] = null);

(statearr_14021_15117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (17))){
var inst_13946 = (state_13980[(7)]);
var inst_13950 = cljs.core.chunk_first(inst_13946);
var inst_13951 = cljs.core.chunk_rest(inst_13946);
var inst_13952 = cljs.core.count(inst_13950);
var inst_13932 = inst_13951;
var inst_13933 = inst_13950;
var inst_13934 = inst_13952;
var inst_13935 = (0);
var state_13980__$1 = (function (){var statearr_14025 = state_13980;
(statearr_14025[(8)] = inst_13932);

(statearr_14025[(9)] = inst_13935);

(statearr_14025[(11)] = inst_13934);

(statearr_14025[(12)] = inst_13933);

return statearr_14025;
})();
var statearr_14026_15118 = state_13980__$1;
(statearr_14026_15118[(2)] = null);

(statearr_14026_15118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (3))){
var inst_13978 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13980__$1,inst_13978);
} else {
if((state_val_13981 === (12))){
var inst_13966 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_14027_15121 = state_13980__$1;
(statearr_14027_15121[(2)] = inst_13966);

(statearr_14027_15121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (2))){
var state_13980__$1 = state_13980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13980__$1,(4),in$);
} else {
if((state_val_13981 === (23))){
var inst_13974 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_14028_15122 = state_13980__$1;
(statearr_14028_15122[(2)] = inst_13974);

(statearr_14028_15122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (19))){
var inst_13961 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_14029_15123 = state_13980__$1;
(statearr_14029_15123[(2)] = inst_13961);

(statearr_14029_15123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (11))){
var inst_13932 = (state_13980[(8)]);
var inst_13946 = (state_13980[(7)]);
var inst_13946__$1 = cljs.core.seq(inst_13932);
var state_13980__$1 = (function (){var statearr_14030 = state_13980;
(statearr_14030[(7)] = inst_13946__$1);

return statearr_14030;
})();
if(inst_13946__$1){
var statearr_14031_15124 = state_13980__$1;
(statearr_14031_15124[(1)] = (14));

} else {
var statearr_14032_15125 = state_13980__$1;
(statearr_14032_15125[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (9))){
var inst_13968 = (state_13980[(2)]);
var inst_13969 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13980__$1 = (function (){var statearr_14033 = state_13980;
(statearr_14033[(15)] = inst_13968);

return statearr_14033;
})();
if(cljs.core.truth_(inst_13969)){
var statearr_14034_15126 = state_13980__$1;
(statearr_14034_15126[(1)] = (21));

} else {
var statearr_14035_15127 = state_13980__$1;
(statearr_14035_15127[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (5))){
var inst_13924 = cljs.core.async.close_BANG_(out);
var state_13980__$1 = state_13980;
var statearr_14036_15128 = state_13980__$1;
(statearr_14036_15128[(2)] = inst_13924);

(statearr_14036_15128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (14))){
var inst_13946 = (state_13980[(7)]);
var inst_13948 = cljs.core.chunked_seq_QMARK_(inst_13946);
var state_13980__$1 = state_13980;
if(inst_13948){
var statearr_14037_15129 = state_13980__$1;
(statearr_14037_15129[(1)] = (17));

} else {
var statearr_14038_15130 = state_13980__$1;
(statearr_14038_15130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (16))){
var inst_13964 = (state_13980[(2)]);
var state_13980__$1 = state_13980;
var statearr_14039_15131 = state_13980__$1;
(statearr_14039_15131[(2)] = inst_13964);

(statearr_14039_15131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13981 === (10))){
var inst_13935 = (state_13980[(9)]);
var inst_13933 = (state_13980[(12)]);
var inst_13940 = cljs.core._nth(inst_13933,inst_13935);
var state_13980__$1 = state_13980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13980__$1,(13),out,inst_13940);
} else {
if((state_val_13981 === (18))){
var inst_13946 = (state_13980[(7)]);
var inst_13955 = cljs.core.first(inst_13946);
var state_13980__$1 = state_13980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13980__$1,(20),out,inst_13955);
} else {
if((state_val_13981 === (8))){
var inst_13935 = (state_13980[(9)]);
var inst_13934 = (state_13980[(11)]);
var inst_13937 = (inst_13935 < inst_13934);
var inst_13938 = inst_13937;
var state_13980__$1 = state_13980;
if(cljs.core.truth_(inst_13938)){
var statearr_14040_15132 = state_13980__$1;
(statearr_14040_15132[(1)] = (10));

} else {
var statearr_14041_15133 = state_13980__$1;
(statearr_14041_15133[(1)] = (11));

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
var statearr_14045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14045[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_14045[(1)] = (1));

return statearr_14045;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_13980){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13980);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14046){var ex__12075__auto__ = e14046;
var statearr_14048_15134 = state_13980;
(statearr_14048_15134[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13980[(4)]))){
var statearr_14050_15135 = state_13980;
(statearr_14050_15135[(1)] = cljs.core.first((state_13980[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15136 = state_13980;
state_13980 = G__15136;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_13980){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_13980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14053 = f__12108__auto__();
(statearr_14053[(6)] = c__12107__auto__);

return statearr_14053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14056 = arguments.length;
switch (G__14056) {
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
var G__14062 = arguments.length;
switch (G__14062) {
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
var G__14066 = arguments.length;
switch (G__14066) {
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
var c__12107__auto___15144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14090){
var state_val_14091 = (state_14090[(1)]);
if((state_val_14091 === (7))){
var inst_14085 = (state_14090[(2)]);
var state_14090__$1 = state_14090;
var statearr_14092_15146 = state_14090__$1;
(statearr_14092_15146[(2)] = inst_14085);

(statearr_14092_15146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14091 === (1))){
var inst_14067 = null;
var state_14090__$1 = (function (){var statearr_14093 = state_14090;
(statearr_14093[(7)] = inst_14067);

return statearr_14093;
})();
var statearr_14094_15149 = state_14090__$1;
(statearr_14094_15149[(2)] = null);

(statearr_14094_15149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14091 === (4))){
var inst_14070 = (state_14090[(8)]);
var inst_14070__$1 = (state_14090[(2)]);
var inst_14071 = (inst_14070__$1 == null);
var inst_14072 = cljs.core.not(inst_14071);
var state_14090__$1 = (function (){var statearr_14102 = state_14090;
(statearr_14102[(8)] = inst_14070__$1);

return statearr_14102;
})();
if(inst_14072){
var statearr_14103_15151 = state_14090__$1;
(statearr_14103_15151[(1)] = (5));

} else {
var statearr_14104_15152 = state_14090__$1;
(statearr_14104_15152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14091 === (6))){
var state_14090__$1 = state_14090;
var statearr_14105_15153 = state_14090__$1;
(statearr_14105_15153[(2)] = null);

(statearr_14105_15153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14091 === (3))){
var inst_14087 = (state_14090[(2)]);
var inst_14088 = cljs.core.async.close_BANG_(out);
var state_14090__$1 = (function (){var statearr_14106 = state_14090;
(statearr_14106[(9)] = inst_14087);

return statearr_14106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14090__$1,inst_14088);
} else {
if((state_val_14091 === (2))){
var state_14090__$1 = state_14090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14090__$1,(4),ch);
} else {
if((state_val_14091 === (11))){
var inst_14070 = (state_14090[(8)]);
var inst_14079 = (state_14090[(2)]);
var inst_14067 = inst_14070;
var state_14090__$1 = (function (){var statearr_14107 = state_14090;
(statearr_14107[(7)] = inst_14067);

(statearr_14107[(10)] = inst_14079);

return statearr_14107;
})();
var statearr_14108_15160 = state_14090__$1;
(statearr_14108_15160[(2)] = null);

(statearr_14108_15160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14091 === (9))){
var inst_14070 = (state_14090[(8)]);
var state_14090__$1 = state_14090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14090__$1,(11),out,inst_14070);
} else {
if((state_val_14091 === (5))){
var inst_14067 = (state_14090[(7)]);
var inst_14070 = (state_14090[(8)]);
var inst_14074 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14070,inst_14067);
var state_14090__$1 = state_14090;
if(inst_14074){
var statearr_14110_15162 = state_14090__$1;
(statearr_14110_15162[(1)] = (8));

} else {
var statearr_14111_15163 = state_14090__$1;
(statearr_14111_15163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14091 === (10))){
var inst_14082 = (state_14090[(2)]);
var state_14090__$1 = state_14090;
var statearr_14112_15164 = state_14090__$1;
(statearr_14112_15164[(2)] = inst_14082);

(statearr_14112_15164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14091 === (8))){
var inst_14067 = (state_14090[(7)]);
var tmp14109 = inst_14067;
var inst_14067__$1 = tmp14109;
var state_14090__$1 = (function (){var statearr_14113 = state_14090;
(statearr_14113[(7)] = inst_14067__$1);

return statearr_14113;
})();
var statearr_14114_15165 = state_14090__$1;
(statearr_14114_15165[(2)] = null);

(statearr_14114_15165[(1)] = (2));


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
var statearr_14115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14115[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14115[(1)] = (1));

return statearr_14115;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14090){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14090);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14116){var ex__12075__auto__ = e14116;
var statearr_14146_15166 = state_14090;
(statearr_14146_15166[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14090[(4)]))){
var statearr_14147_15167 = state_14090;
(statearr_14147_15167[(1)] = cljs.core.first((state_14090[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15168 = state_14090;
state_14090 = G__15168;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14148 = f__12108__auto__();
(statearr_14148[(6)] = c__12107__auto___15144);

return statearr_14148;
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
var G__14150 = arguments.length;
switch (G__14150) {
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
var c__12107__auto___15170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14188){
var state_val_14189 = (state_14188[(1)]);
if((state_val_14189 === (7))){
var inst_14184 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14190_15171 = state_14188__$1;
(statearr_14190_15171[(2)] = inst_14184);

(statearr_14190_15171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (1))){
var inst_14151 = (new Array(n));
var inst_14152 = inst_14151;
var inst_14153 = (0);
var state_14188__$1 = (function (){var statearr_14191 = state_14188;
(statearr_14191[(7)] = inst_14153);

(statearr_14191[(8)] = inst_14152);

return statearr_14191;
})();
var statearr_14192_15172 = state_14188__$1;
(statearr_14192_15172[(2)] = null);

(statearr_14192_15172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (4))){
var inst_14156 = (state_14188[(9)]);
var inst_14156__$1 = (state_14188[(2)]);
var inst_14157 = (inst_14156__$1 == null);
var inst_14158 = cljs.core.not(inst_14157);
var state_14188__$1 = (function (){var statearr_14195 = state_14188;
(statearr_14195[(9)] = inst_14156__$1);

return statearr_14195;
})();
if(inst_14158){
var statearr_14196_15173 = state_14188__$1;
(statearr_14196_15173[(1)] = (5));

} else {
var statearr_14197_15174 = state_14188__$1;
(statearr_14197_15174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (15))){
var inst_14178 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14198_15175 = state_14188__$1;
(statearr_14198_15175[(2)] = inst_14178);

(statearr_14198_15175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (13))){
var state_14188__$1 = state_14188;
var statearr_14199_15176 = state_14188__$1;
(statearr_14199_15176[(2)] = null);

(statearr_14199_15176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (6))){
var inst_14153 = (state_14188[(7)]);
var inst_14174 = (inst_14153 > (0));
var state_14188__$1 = state_14188;
if(cljs.core.truth_(inst_14174)){
var statearr_14200_15177 = state_14188__$1;
(statearr_14200_15177[(1)] = (12));

} else {
var statearr_14201_15178 = state_14188__$1;
(statearr_14201_15178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (3))){
var inst_14186 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14188__$1,inst_14186);
} else {
if((state_val_14189 === (12))){
var inst_14152 = (state_14188[(8)]);
var inst_14176 = cljs.core.vec(inst_14152);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14188__$1,(15),out,inst_14176);
} else {
if((state_val_14189 === (2))){
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14188__$1,(4),ch);
} else {
if((state_val_14189 === (11))){
var inst_14168 = (state_14188[(2)]);
var inst_14169 = (new Array(n));
var inst_14152 = inst_14169;
var inst_14153 = (0);
var state_14188__$1 = (function (){var statearr_14202 = state_14188;
(statearr_14202[(10)] = inst_14168);

(statearr_14202[(7)] = inst_14153);

(statearr_14202[(8)] = inst_14152);

return statearr_14202;
})();
var statearr_14203_15183 = state_14188__$1;
(statearr_14203_15183[(2)] = null);

(statearr_14203_15183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (9))){
var inst_14152 = (state_14188[(8)]);
var inst_14166 = cljs.core.vec(inst_14152);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14188__$1,(11),out,inst_14166);
} else {
if((state_val_14189 === (5))){
var inst_14161 = (state_14188[(11)]);
var inst_14156 = (state_14188[(9)]);
var inst_14153 = (state_14188[(7)]);
var inst_14152 = (state_14188[(8)]);
var inst_14160 = (inst_14152[inst_14153] = inst_14156);
var inst_14161__$1 = (inst_14153 + (1));
var inst_14162 = (inst_14161__$1 < n);
var state_14188__$1 = (function (){var statearr_14204 = state_14188;
(statearr_14204[(12)] = inst_14160);

(statearr_14204[(11)] = inst_14161__$1);

return statearr_14204;
})();
if(cljs.core.truth_(inst_14162)){
var statearr_14205_15195 = state_14188__$1;
(statearr_14205_15195[(1)] = (8));

} else {
var statearr_14206_15196 = state_14188__$1;
(statearr_14206_15196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (14))){
var inst_14181 = (state_14188[(2)]);
var inst_14182 = cljs.core.async.close_BANG_(out);
var state_14188__$1 = (function (){var statearr_14208 = state_14188;
(statearr_14208[(13)] = inst_14181);

return statearr_14208;
})();
var statearr_14209_15197 = state_14188__$1;
(statearr_14209_15197[(2)] = inst_14182);

(statearr_14209_15197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (10))){
var inst_14172 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14210_15200 = state_14188__$1;
(statearr_14210_15200[(2)] = inst_14172);

(statearr_14210_15200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (8))){
var inst_14161 = (state_14188[(11)]);
var inst_14152 = (state_14188[(8)]);
var tmp14207 = inst_14152;
var inst_14152__$1 = tmp14207;
var inst_14153 = inst_14161;
var state_14188__$1 = (function (){var statearr_14211 = state_14188;
(statearr_14211[(7)] = inst_14153);

(statearr_14211[(8)] = inst_14152__$1);

return statearr_14211;
})();
var statearr_14212_15205 = state_14188__$1;
(statearr_14212_15205[(2)] = null);

(statearr_14212_15205[(1)] = (2));


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
var statearr_14213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14213[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14213[(1)] = (1));

return statearr_14213;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14188){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14188);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14214){var ex__12075__auto__ = e14214;
var statearr_14215_15211 = state_14188;
(statearr_14215_15211[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14188[(4)]))){
var statearr_14216_15212 = state_14188;
(statearr_14216_15212[(1)] = cljs.core.first((state_14188[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15215 = state_14188;
state_14188 = G__15215;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14218 = f__12108__auto__();
(statearr_14218[(6)] = c__12107__auto___15170);

return statearr_14218;
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
var G__14224 = arguments.length;
switch (G__14224) {
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
var c__12107__auto___15225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_14273){
var state_val_14274 = (state_14273[(1)]);
if((state_val_14274 === (7))){
var inst_14269 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14275_15226 = state_14273__$1;
(statearr_14275_15226[(2)] = inst_14269);

(statearr_14275_15226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (1))){
var inst_14228 = [];
var inst_14229 = inst_14228;
var inst_14230 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14273__$1 = (function (){var statearr_14279 = state_14273;
(statearr_14279[(7)] = inst_14229);

(statearr_14279[(8)] = inst_14230);

return statearr_14279;
})();
var statearr_14280_15227 = state_14273__$1;
(statearr_14280_15227[(2)] = null);

(statearr_14280_15227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (4))){
var inst_14235 = (state_14273[(9)]);
var inst_14235__$1 = (state_14273[(2)]);
var inst_14236 = (inst_14235__$1 == null);
var inst_14237 = cljs.core.not(inst_14236);
var state_14273__$1 = (function (){var statearr_14281 = state_14273;
(statearr_14281[(9)] = inst_14235__$1);

return statearr_14281;
})();
if(inst_14237){
var statearr_14282_15228 = state_14273__$1;
(statearr_14282_15228[(1)] = (5));

} else {
var statearr_14284_15229 = state_14273__$1;
(statearr_14284_15229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (15))){
var inst_14263 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14287_15230 = state_14273__$1;
(statearr_14287_15230[(2)] = inst_14263);

(statearr_14287_15230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (13))){
var state_14273__$1 = state_14273;
var statearr_14289_15231 = state_14273__$1;
(statearr_14289_15231[(2)] = null);

(statearr_14289_15231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (6))){
var inst_14229 = (state_14273[(7)]);
var inst_14258 = inst_14229.length;
var inst_14259 = (inst_14258 > (0));
var state_14273__$1 = state_14273;
if(cljs.core.truth_(inst_14259)){
var statearr_14293_15232 = state_14273__$1;
(statearr_14293_15232[(1)] = (12));

} else {
var statearr_14294_15233 = state_14273__$1;
(statearr_14294_15233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (3))){
var inst_14271 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14273__$1,inst_14271);
} else {
if((state_val_14274 === (12))){
var inst_14229 = (state_14273[(7)]);
var inst_14261 = cljs.core.vec(inst_14229);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14273__$1,(15),out,inst_14261);
} else {
if((state_val_14274 === (2))){
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14273__$1,(4),ch);
} else {
if((state_val_14274 === (11))){
var inst_14235 = (state_14273[(9)]);
var inst_14239 = (state_14273[(10)]);
var inst_14251 = (state_14273[(2)]);
var inst_14252 = [];
var inst_14253 = inst_14252.push(inst_14235);
var inst_14229 = inst_14252;
var inst_14230 = inst_14239;
var state_14273__$1 = (function (){var statearr_14300 = state_14273;
(statearr_14300[(7)] = inst_14229);

(statearr_14300[(11)] = inst_14253);

(statearr_14300[(8)] = inst_14230);

(statearr_14300[(12)] = inst_14251);

return statearr_14300;
})();
var statearr_14303_15234 = state_14273__$1;
(statearr_14303_15234[(2)] = null);

(statearr_14303_15234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (9))){
var inst_14229 = (state_14273[(7)]);
var inst_14249 = cljs.core.vec(inst_14229);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14273__$1,(11),out,inst_14249);
} else {
if((state_val_14274 === (5))){
var inst_14235 = (state_14273[(9)]);
var inst_14230 = (state_14273[(8)]);
var inst_14239 = (state_14273[(10)]);
var inst_14239__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14235) : f.call(null,inst_14235));
var inst_14242 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14239__$1,inst_14230);
var inst_14243 = cljs.core.keyword_identical_QMARK_(inst_14230,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14244 = ((inst_14242) || (inst_14243));
var state_14273__$1 = (function (){var statearr_14306 = state_14273;
(statearr_14306[(10)] = inst_14239__$1);

return statearr_14306;
})();
if(cljs.core.truth_(inst_14244)){
var statearr_14307_15235 = state_14273__$1;
(statearr_14307_15235[(1)] = (8));

} else {
var statearr_14309_15236 = state_14273__$1;
(statearr_14309_15236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (14))){
var inst_14266 = (state_14273[(2)]);
var inst_14267 = cljs.core.async.close_BANG_(out);
var state_14273__$1 = (function (){var statearr_14312 = state_14273;
(statearr_14312[(13)] = inst_14266);

return statearr_14312;
})();
var statearr_14314_15241 = state_14273__$1;
(statearr_14314_15241[(2)] = inst_14267);

(statearr_14314_15241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (10))){
var inst_14256 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14315_15243 = state_14273__$1;
(statearr_14315_15243[(2)] = inst_14256);

(statearr_14315_15243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (8))){
var inst_14235 = (state_14273[(9)]);
var inst_14229 = (state_14273[(7)]);
var inst_14239 = (state_14273[(10)]);
var inst_14246 = inst_14229.push(inst_14235);
var tmp14310 = inst_14229;
var inst_14229__$1 = tmp14310;
var inst_14230 = inst_14239;
var state_14273__$1 = (function (){var statearr_14316 = state_14273;
(statearr_14316[(7)] = inst_14229__$1);

(statearr_14316[(8)] = inst_14230);

(statearr_14316[(14)] = inst_14246);

return statearr_14316;
})();
var statearr_14317_15246 = state_14273__$1;
(statearr_14317_15246[(2)] = null);

(statearr_14317_15246[(1)] = (2));


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
var statearr_14318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14318[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_14318[(1)] = (1));

return statearr_14318;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_14273){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_14273);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e14319){var ex__12075__auto__ = e14319;
var statearr_14320_15249 = state_14273;
(statearr_14320_15249[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_14273[(4)]))){
var statearr_14321_15251 = state_14273;
(statearr_14321_15251[(1)] = cljs.core.first((state_14273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15252 = state_14273;
state_14273 = G__15252;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_14273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_14273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_14322 = f__12108__auto__();
(statearr_14322[(6)] = c__12107__auto___15225);

return statearr_14322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
